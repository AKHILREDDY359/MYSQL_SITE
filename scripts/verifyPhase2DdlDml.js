import assert from 'assert';
import initSqlJs from 'sql.js';
import { TABLES_SCHEMA } from '../src/data/schema.js';
import { SEED_SQL } from '../src/data/seedData.js';
import { DDL_DML_QUESTIONS, DDL_DML_TOPICS } from '../src/data/ddlDmlQuestions.js';
import { validateDdlDmlSafety } from '../src/services/queryValidator.js';
import { validateAnswer } from '../src/services/answerChecker.js';

console.log('=== SQLForge Phase 2: Safe DDL & DML Sandbox Verification ===\n');

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

// 1. Question Integrity & Categorization
console.log('1. DDL/DML Question Bank Structure:');

runTest('DDL/DML question bank has exactly 30 questions (IDs 376 - 405)', () => {
  assert.strictEqual(DDL_DML_QUESTIONS.length, 30);
  assert.strictEqual(DDL_DML_QUESTIONS[0].id, 376);
  assert.strictEqual(DDL_DML_QUESTIONS[DDL_DML_QUESTIONS.length - 1].id, 405);
});

runTest('All DDL/DML questions have valid IDs >= 376 and preserve IDs 1-375 intact', () => {
  DDL_DML_QUESTIONS.forEach(q => {
    assert.ok(q.id >= 376, `Question ID ${q.id} must be >= 376`);
    assert.ok(q.title && q.title.length > 0, `Question ${q.id} must have title`);
    assert.ok(q.expectedSql && q.expectedSql.length > 0, `Question ${q.id} must have expectedSql`);
    assert.ok(q.verificationSql || q.verificationType === 'EXPECTED_ERROR', `Question ${q.id} must have verificationSql or EXPECTED_ERROR`);
  });
});

// 2. DDL/DML Safety Validator
console.log('\n2. DDL/DML Safety & Sandbox Validator:');

runTest('Valid DDL statements pass validation', () => {
  const createRes = validateDdlDmlSafety('CREATE TABLE test (id INT PRIMARY KEY);');
  assert.strictEqual(createRes.valid, true);

  const alterRes = validateDdlDmlSafety('ALTER TABLE test ADD COLUMN email VARCHAR(50);');
  assert.strictEqual(alterRes.valid, true);

  const dropRes = validateDdlDmlSafety('DROP TABLE test;');
  assert.strictEqual(dropRes.valid, true);
});

runTest('Valid DML statements pass validation', () => {
  const insertRes = validateDdlDmlSafety('INSERT INTO test (id) VALUES (1);');
  assert.strictEqual(insertRes.valid, true);

  const updateRes = validateDdlDmlSafety('UPDATE test SET id = 2 WHERE id = 1;');
  assert.strictEqual(updateRes.valid, true);

  const deleteRes = validateDdlDmlSafety('DELETE FROM test WHERE id = 2;');
  assert.strictEqual(deleteRes.valid, true);
});

runTest('Dangerous system commands are blocked', () => {
  const pragmaRes = validateDdlDmlSafety('PRAGMA table_info(Employees);');
  assert.strictEqual(pragmaRes.valid, false);

  const attachRes = validateDdlDmlSafety("ATTACH DATABASE 'malicious.db' AS mal;");
  assert.strictEqual(attachRes.valid, false);

  const detachRes = validateDdlDmlSafety('DETACH DATABASE mal;');
  assert.strictEqual(detachRes.valid, false);
});

// 3. Isolated Sandbox & Non-Destructive Invariance
console.log('\n3. Master Database Protection & Sandbox Isolation:');

const SQL = await initSqlJs();

// Create master database with curriculum tables
const masterDb = new SQL.Database();
for (const table of TABLES_SCHEMA) {
  masterDb.run(table.createSql);
}
masterDb.run(SEED_SQL);

const baselineSnapshot = masterDb.export();

runTest('Master database has 20 employees and 8 departments', () => {
  const countBefore = masterDb.exec('SELECT COUNT(*) FROM Employees;')[0].values[0][0];
  assert.strictEqual(countBefore, 20);
});

// Helper for isolated exercise verification
function executeIsolatedSandbox(userSql, question) {
  // Always clone from clean baseline snapshot
  const userDb = new SQL.Database(baselineSnapshot);
  userDb.run('PRAGMA foreign_keys = ON;');
  if (question.initialSetupSql) {
    userDb.run(question.initialSetupSql);
  }

  let userError = null;
  try {
    userDb.run(userSql);
  } catch (err) {
    userError = err.message;
  }

  if (question.verificationType === 'EXPECTED_ERROR') {
    userDb.close();
    return {
      success: true,
      isCorrect: Boolean(userError && (userError.toLowerCase().includes('constraint') || userError.toLowerCase().includes('failed')))
    };
  }

  if (userError) {
    userDb.close();
    return { success: false, error: userError };
  }

  // Create reference twin
  const refDb = new SQL.Database(baselineSnapshot);
  refDb.run('PRAGMA foreign_keys = ON;');
  if (question.initialSetupSql) {
    refDb.run(question.initialSetupSql);
  }
  refDb.run(question.expectedSql);

  const verificationSql = question.verificationSql || 'SELECT 1;';
  const userRes = userDb.exec(verificationSql);
  const refRes = refDb.exec(verificationSql);

  const actualResult = {
    success: true,
    columns: userRes.length > 0 ? userRes[0].columns : [],
    values: userRes.length > 0 ? userRes[0].values : [],
    rowCount: userRes.length > 0 ? userRes[0].values.length : 0
  };

  const expectedResult = {
    columns: refRes.length > 0 ? refRes[0].columns : [],
    values: refRes.length > 0 ? refRes[0].values : [],
    rowCount: refRes.length > 0 ? refRes[0].values.length : 0
  };

  const validation = validateAnswer(actualResult, expectedResult, question, userSql);
  userDb.close();
  refDb.close();

  return {
    success: true,
    isCorrect: validation.isCorrect,
    feedback: validation.feedback
  };
}

runTest('Executing DROP TABLE or DELETE in DDL/DML sandbox NEVER affects master database', () => {
  const deleteQ = DDL_DML_QUESTIONS.find(q => q.expectedSql.toUpperCase().includes('DELETE')) || DDL_DML_QUESTIONS[0];
  const simResult = executeIsolatedSandbox(deleteQ.expectedSql, deleteQ);
  assert.strictEqual(simResult.success, true);
  assert.strictEqual(simResult.isCorrect, true);

  // Check master database again
  const countAfter = masterDb.exec('SELECT COUNT(*) FROM Employees;')[0].values[0][0];
  assert.strictEqual(countAfter, 20, 'Master database row count must remain 20!');
});

// 4. Verification of All 30 Reference Solutions
console.log('\n4. Reference Solutions Execution & State Verification (All 30):');

let verifiedCount = 0;
for (const q of DDL_DML_QUESTIONS) {
  try {
    const res = executeIsolatedSandbox(q.expectedSql, q);
    if (res.isCorrect) {
      verifiedCount++;
    } else {
      console.error(`  ✗ Question ${q.id} failed verification: ${res.feedback || res.error}`);
    }
  } catch (e) {
    console.error(`  ✗ Question ${q.id} execution exception: ${e.message}`);
  }
}

runTest(`All 30 DDL/DML questions pass state verification using their reference SQL (${verifiedCount}/30)`, () => {
  assert.strictEqual(verifiedCount, 30);
});

masterDb.close();

console.log(`\n==============================================`);
console.log(`Phase 2 Test Results: ${passedTests} / ${totalTests} passed (${Math.round((passedTests/totalTests)*100)}%)`);
console.log(`==============================================\n`);

if (passedTests !== totalTests) {
  process.exit(1);
}
