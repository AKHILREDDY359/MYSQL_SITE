import { 
  getScopedStorageKey, getAccountProgress, saveAccountProgress,
  getAccountDrafts, saveAccountDrafts, getAccountBookmarks, saveAccountBookmarks,
  mergeGuestProgressIntoUser, getGuestProgressSummary, retrySync
} from '../src/services/cloudProgressService.js';
import { formatAuthError } from '../src/services/authService.js';
import { STORAGE_KEYS } from '../src/utils/storage.js';

let passed = 0;
let total = 0;

function assert(condition, desc) {
  total++;
  if (condition) {
    passed++;
    console.log(`  ✓ PASS [${total}]: ${desc}`);
  } else {
    console.error(`  ✗ FAIL [${total}]: ${desc}`);
    process.exit(1);
  }
}

// In-memory mock localStorage for Node testing
const mockStorage = {};
globalThis.localStorage = {
  getItem: (k) => mockStorage[k] || null,
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: (k) => { delete mockStorage[k]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};

async function runAuthAndSyncTests() {
  console.log('=== Stage 2: Authentication & Reliable Cloud Sync Test Suite ===\n');

  // Test 1: formatAuthError cleans up Supabase / network errors
  const err1 = formatAuthError({ message: 'Invalid login credentials' });
  assert(err1.includes('Incorrect email or password') || err1.includes('email or password'), '1. Helpful message for invalid credentials');

  const err2 = formatAuthError({ message: 'User already registered' });
  assert(err2.includes('already exists') || err2.includes('already registered'), '2. Helpful message for duplicate email');

  // Test 2: Storage keys are strictly scoped per user ID
  const guestKey = getScopedStorageKey(STORAGE_KEYS.PROGRESS, null);
  const user1Key = getScopedStorageKey(STORAGE_KEYS.PROGRESS, 'user-uuid-111');
  const user2Key = getScopedStorageKey(STORAGE_KEYS.PROGRESS, 'user-uuid-222');
  assert(guestKey.endsWith('_guest'), '3. Guest storage key scoped to guest');
  assert(user1Key.endsWith('_user-uuid-111'), '4. User 1 storage key strictly scoped to user 1 UUID');
  assert(user2Key.endsWith('_user-uuid-222'), '5. User 2 storage key strictly scoped to user 2 UUID');
  assert(user1Key !== user2Key, '6. User 1 and User 2 have completely isolated storage keys');

  // Test 3: Guest practice remains functional without login
  saveAccountProgress({ 1: { status: 'solved', attempts: 1 } }, null);
  const guestProg = getAccountProgress(null);
  assert(guestProg[1]?.status === 'solved', '7. Guest practice saves and retrieves progress locally');

  // Test 4: Switching accounts does not leak progress
  const user1Prog = getAccountProgress('user-uuid-111');
  assert(!user1Prog[1], '8. User 1 cannot see guest progress by default (strict isolation)');

  saveAccountProgress({ 2: { status: 'solved', attempts: 3 } }, 'user-uuid-111');
  saveAccountProgress({ 3: { status: 'solved', attempts: 2 } }, 'user-uuid-222');
  assert(getAccountProgress('user-uuid-111')[2]?.status === 'solved', '9. User 1 progress preserved');
  assert(!getAccountProgress('user-uuid-111')[3], '10. User 1 cannot see User 2 private progress');
  assert(getAccountProgress('user-uuid-222')[3]?.status === 'solved', '11. User 2 progress preserved');
  assert(!getAccountProgress('user-uuid-222')[2], '12. User 2 cannot see User 1 private progress');

  // Test 5: Guest progress summary detects offline completed questions
  const summary = getGuestProgressSummary();
  assert(summary.solved === 1, '13. getGuestProgressSummary accurately detects solved guest questions');

  // Test 6: Merging guest progress into authenticated account preserves completed status
  const mergedCount = await mergeGuestProgressIntoUser('user-uuid-111');
  const user1Merged = getAccountProgress('user-uuid-111');
  assert(user1Merged[1]?.status === 'solved', '14. Merging guest progress successfully transferred solved question 1 to User 1');
  assert(user1Merged[2]?.status === 'solved', '15. Existing User 1 question 2 remained intact after merge');

  // Test 7: Bookmarks and drafts isolation
  saveAccountDrafts({ 1: 'SELECT * FROM Employees;' }, 'user-uuid-111');
  saveAccountDrafts({ 1: 'SELECT emp_name FROM Employees;' }, 'user-uuid-222');
  assert(getAccountDrafts('user-uuid-111')[1] === 'SELECT * FROM Employees;', '16. User 1 drafts isolated');
  assert(getAccountDrafts('user-uuid-222')[1] === 'SELECT emp_name FROM Employees;', '17. User 2 drafts isolated');

  console.log(`\n==============================================`);
  console.log(`Stage 2 Acceptance Results: ${passed} / ${total} passed (100%)`);
  console.log(`==============================================\n`);
}

runAuthAndSyncTests().catch(err => {
  console.error('Stage 2 tests failed:', err);
  process.exit(1);
});
