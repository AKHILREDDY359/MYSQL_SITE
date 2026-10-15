import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== SQLForge Phase 1: Authentication & Cloud Sync Test Suite ===\n');

// Mock localStorage for node environment
const store = {};
global.window = {
  location: { hash: '' },
  localStorage: {
    getItem: (key) => store[key] !== undefined ? store[key] : null,
    setItem: (key, val) => { store[key] = String(val); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); }
  },
  addEventListener: () => {},
  removeEventListener: () => {}
};
global.localStorage = global.window.localStorage;

// Dynamic imports
const { formatAuthError } = await import('../src/services/authService.js');
const { 
  getScopedStorageKey, 
  getAccountProgress, 
  saveAccountProgress, 
  mergeGuestProgressIntoUser,
  getGuestProgressSummary 
} = await import('../src/services/cloudProgressService.js');
const { 
  setActiveUserId, 
  getActiveUserId, 
  getAllProgress, 
  saveQuestionDraft, 
  getQuestionDraft 
} = await import('../src/services/progressService.js');

let passedTests = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✓ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(`    ${err.message}`);
  }
}

// 1. Storage Key Scoping & Account Isolation
console.log('1. Account Isolation & Scoped Storage:');

runTest('Storage keys are properly scoped by UUID', () => {
  assert.strictEqual(getScopedStorageKey('SQLFORGE_PROGRESS', null), 'SQLFORGE_PROGRESS_profile_guest');
  assert.strictEqual(getScopedStorageKey('SQLFORGE_PROGRESS', 'uuid-123'), 'SQLFORGE_PROGRESS_uid_uuid-123');
});

runTest('User progress stores are isolated between User A, User B, and Guest', () => {
  // Guest saves question 1
  setActiveUserId(null);
  const guestProg = { 1: { status: 'solved', attempts: 1 } };
  saveAccountProgress(guestProg, null);

  // User A (alice-id) saves question 2
  setActiveUserId('alice-id');
  const aliceProg = { 2: { status: 'solved', attempts: 2 } };
  saveAccountProgress(aliceProg, 'alice-id');

  // User B (bob-id) saves question 3
  setActiveUserId('bob-id');
  const bobProg = { 3: { status: 'attempted', attempts: 4 } };
  saveAccountProgress(bobProg, 'bob-id');

  // Verify Alice sees only question 2
  setActiveUserId('alice-id');
  const readAlice = getAllProgress();
  assert.strictEqual(readAlice[2]?.status, 'solved');
  assert.strictEqual(readAlice[1], undefined);
  assert.strictEqual(readAlice[3], undefined);

  // Verify Bob sees only question 3
  setActiveUserId('bob-id');
  const readBob = getAllProgress();
  assert.strictEqual(readBob[3]?.status, 'attempted');
  assert.strictEqual(readBob[1], undefined);
  assert.strictEqual(readBob[2], undefined);

  // Verify Guest sees only question 1
  setActiveUserId(null);
  const readGuest = getAllProgress();
  assert.strictEqual(readGuest[1]?.status, 'solved');
  assert.strictEqual(readGuest[2], undefined);
});

runTest('Draft SQL is isolated per account', () => {
  setActiveUserId('alice-id');
  saveQuestionDraft(10, 'SELECT * FROM Employees;');

  setActiveUserId('bob-id');
  saveQuestionDraft(10, 'SELECT * FROM Departments;');

  setActiveUserId('alice-id');
  assert.strictEqual(getQuestionDraft(10), 'SELECT * FROM Employees;');

  setActiveUserId('bob-id');
  assert.strictEqual(getQuestionDraft(10), 'SELECT * FROM Departments;');
});

// 2. Safe Guest Progress Merging
console.log('\n2. Safe Guest Progress Merging:');

runTest('getGuestProgressSummary detects solved guest questions', () => {
  setActiveUserId(null);
  saveAccountProgress({
    1: { status: 'solved', attempts: 1 },
    2: { status: 'solved', attempts: 2 },
    3: { status: 'attempted', attempts: 1 }
  }, null);

  const summary = getGuestProgressSummary();
  assert.strictEqual(summary.solved, 2);
  assert.strictEqual(summary.attempted, 1);
  assert.strictEqual(summary.total, 3);
});

runTest('mergeGuestProgressIntoUser non-destructively combines guest and user progress', async () => {
  // Set up user charlie with solved question 5 and attempted question 1
  const charlieId = 'charlie-id';
  saveAccountProgress({
    5: { status: 'solved', attempts: 1 },
    1: { status: 'attempted', attempts: 1 }
  }, charlieId);

  // Guest has solved question 1 and solved question 2
  saveAccountProgress({
    1: { status: 'solved', attempts: 2 },
    2: { status: 'solved', attempts: 3 }
  }, null);

  await mergeGuestProgressIntoUser(charlieId);

  const charlieProg = getAccountProgress(charlieId);
  // Question 1 should be upgraded to solved
  assert.strictEqual(charlieProg[1]?.status, 'solved');
  // Question 2 should be added as solved
  assert.strictEqual(charlieProg[2]?.status, 'solved');
  // Question 5 should remain solved
  assert.strictEqual(charlieProg[5]?.status, 'solved');
});

// 3. User-Friendly Error Formatting
console.log('\n3. Auth Error Formatting:');

runTest('Invalid login credentials message is user-friendly', () => {
  const err = { message: 'Invalid login credentials' };
  const formatted = formatAuthError(err);
  assert.ok(formatted.toLowerCase().includes('incorrect email or password'));
});

runTest('Unverified email message prompts verification', () => {
  const err = { message: 'Email not confirmed' };
  const formatted = formatAuthError(err);
  assert.ok(formatted.toLowerCase().includes('verification') || formatted.toLowerCase().includes('confirmed'));
});

runTest('User already registered message is helpful', () => {
  const err = { message: 'User already registered' };
  const formatted = formatAuthError(err);
  assert.ok(formatted.toLowerCase().includes('already exists'));
});

// 4. Supabase Migration Schema
console.log('\n4. Database Migration Integrity:');

runTest('Supabase migration script contains user_progress table, RLS, and unique constraint', () => {
  const sqlPath = path.resolve(__dirname, '../supabase/migrations/20261015_user_progress.sql');
  assert.ok(fs.existsSync(sqlPath), 'Migration SQL file exists');

  const content = fs.readFileSync(sqlPath, 'utf8').toLowerCase();
  assert.ok(content.includes('create table if not exists public.user_progress'), 'Defines public.user_progress table');
  assert.ok(content.includes('unique (user_id, question_id)'), 'Has unique constraint on (user_id, question_id)');
  assert.ok(content.includes('enable row level security'), 'Enables Row Level Security');
  assert.ok(content.includes('policy "users can view own progress"'), 'Has SELECT RLS policy');
  assert.ok(content.includes('policy "users can insert own progress"'), 'Has INSERT RLS policy');
  assert.ok(content.includes('policy "users can update own progress"'), 'Has UPDATE RLS policy');
  assert.ok(content.includes('policy "users can delete own progress"'), 'Has DELETE RLS policy');
});

console.log(`\n==============================================`);
console.log(`Phase 1 Test Results: ${passedTests} / ${totalTests} passed (${Math.round((passedTests/totalTests)*100)}%)`);
console.log(`==============================================\n`);

if (passedTests !== totalTests) {
  process.exit(1);
}
