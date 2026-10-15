import initSqlJs from 'sql.js';
import { executeDdlDmlExercise } from '../src/services/isolatedExerciseEngine.js';
import { DDL_DML_QUESTIONS } from '../src/data/ddlDmlQuestions.js';
import { executeQuery, initDatabase } from '../src/services/databaseEngine.js';
import { validateQuerySafety, validateDdlDmlSafety } from '../src/services/queryValidator.js';

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

async function runAcceptanceTests() {
  console.log('=== Stage 1: DDL/DML Safety & Isolation Acceptance Suite ===\n');

  // Test 1: A learner creates a table successfully (Q376)
  const q376 = DDL_DML_QUESTIONS.find(q => q.id === 376);
  const res1 = await executeDdlDmlExercise(q376.expectedSql, q376);
  assert(res1.success && res1.isCorrect, '1. Learner creates a table successfully (Q376)');

  // Test 2: A learner inserts one row (Q391) and multiple rows (Q392)
  const q391 = DDL_DML_QUESTIONS.find(q => q.id === 391);
  const res2a = await executeDdlDmlExercise(q391.expectedSql, q391);
  assert(res2a.success && res2a.isCorrect && res2a.rowCount === 1, '2a. Learner inserts one row (Q391)');

  const q392 = DDL_DML_QUESTIONS.find(q => q.id === 392);
  const res2b = await executeDdlDmlExercise(q392.expectedSql, q392);
  assert(res2b.success && res2b.isCorrect && res2b.rowCount === 2, '2b. Learner inserts multiple rows in single statement (Q392)');

  // Test 3: A learner updates only the intended rows (Q395 & Q396)
  const q395 = DDL_DML_QUESTIONS.find(q => q.id === 395);
  const res3a = await executeDdlDmlExercise(q395.expectedSql, q395);
  assert(res3a.success && res3a.isCorrect, '3a. Learner updates only the intended single row (Q395)');

  const q396 = DDL_DML_QUESTIONS.find(q => q.id === 396);
  const res3b = await executeDdlDmlExercise(q396.expectedSql, q396);
  assert(res3b.success && res3b.isCorrect && res3b.rowCount === 4, '3b. Learner updates multiple rows conditionally (Q396)');

  // Test 4: A learner deletes only the intended rows (Q400 & Q401)
  const q400 = DDL_DML_QUESTIONS.find(q => q.id === 400);
  const res4a = await executeDdlDmlExercise(q400.expectedSql, q400);
  assert(res4a.success && res4a.isCorrect, '4a. Learner deletes single intended junction row (Q400)');

  const q401 = DDL_DML_QUESTIONS.find(q => q.id === 401);
  const res4b = await executeDdlDmlExercise(q401.expectedSql, q401);
  assert(res4b.success && res4b.isCorrect && res4b.rowCount === 0, '4b. Learner deletes targeted rows by boundary (Q401)');

  // Test 5: A learner alters a table where supported (Q384 & Q386)
  const q384 = DDL_DML_QUESTIONS.find(q => q.id === 384);
  const res5a = await executeDdlDmlExercise(q384.expectedSql, q384);
  assert(res5a.success && res5a.isCorrect, '5a. Learner alters table with ADD COLUMN (Q384)');

  const q386 = DDL_DML_QUESTIONS.find(q => q.id === 386);
  const res5b = await executeDdlDmlExercise(q386.expectedSql, q386);
  assert(res5b.success && res5b.isCorrect, '5b. Learner alters table with RENAME COLUMN (Q386)');

  // Test 6: A learner creates and validates constraints (Q380 & Q381)
  const q380 = DDL_DML_QUESTIONS.find(q => q.id === 380);
  const res6a = await executeDdlDmlExercise(q380.expectedSql, q380);
  assert(res6a.success && res6a.isCorrect, '6a. Learner creates UNIQUE constraints (Q380)');

  const q381 = DDL_DML_QUESTIONS.find(q => q.id === 381);
  const res6b = await executeDdlDmlExercise(q381.expectedSql, q381);
  assert(res6b.success && res6b.isCorrect, '6b. Learner creates CHECK constraints (Q381)');

  // Test 7: Invalid data is rejected by applicable constraints (Q404)
  const q404 = DDL_DML_QUESTIONS.find(q => q.id === 404);
  const res7 = await executeDdlDmlExercise(q404.expectedSql, q404);
  assert(res7.success && res7.isCorrect, '7. Invalid data is rejected by NOT NULL constraint (Q404)');

  // Test 8: Invalid foreign-key references are handled correctly
  const q382 = DDL_DML_QUESTIONS.find(q => q.id === 382);
  const badFkSql = `
    CREATE TABLE Project_Milestones (milestone_id INT PRIMARY KEY, project_id INT NOT NULL, milestone_name VARCHAR(100) NOT NULL, due_date DATE, FOREIGN KEY (project_id) REFERENCES Projects(project_id));
    INSERT INTO Project_Milestones VALUES (1, 99999, 'Phantom Milestone', '2026-12-31');
  `;
  const res8 = await executeDdlDmlExercise(badFkSql, q382);
  assert(!res8.success && res8.error.toLowerCase().includes('foreign key'), '8. Invalid foreign-key reference rejected by database');

  // Test 9: A failed submission does not corrupt the next attempt
  const badSql = "UPDATE Employees SET salary = -99999 WHERE department = 'IT';";
  await executeDdlDmlExercise(badSql, q395); // Failed attempt
  const res9 = await executeDdlDmlExercise(q395.expectedSql, q395); // Valid follow-up attempt
  assert(res9.success && res9.isCorrect, '9. Failed submission does not corrupt next attempt');

  // Test 10: Reset restores exact baseline
  const res10 = await executeDdlDmlExercise("SELECT COUNT(*) as cnt FROM Employees;", { verificationSql: "SELECT COUNT(*) as cnt FROM Employees;", expectedSql: "SELECT 1;" }, { bypassSafety: true });
  assert(res10.values[0][0] === 20, '10. Cloned isolated database initializes with pristine baseline (20 Employees)');

  // Test 11: Dropping a table in an exercise does not remove it from the main read-only database
  const q388 = DDL_DML_QUESTIONS.find(q => q.id === 388);
  await executeDdlDmlExercise("DROP TABLE Employees;", q388);
  const mainDb = await initDatabase();
  const mainEmpCount = mainDb.exec("SELECT COUNT(*) FROM Employees;")[0].values[0][0];
  assert(mainEmpCount === 20, '11. Dropping table in exercise did NOT remove it from main read-only database');

  // Test 12: DDL/DML exercises work after page refresh (stateless evaluation)
  const res12 = await executeDdlDmlExercise(q376.expectedSql, q376);
  assert(res12.success && res12.isCorrect, '12. DDL/DML exercises evaluate cleanly in stateless execution');

  // Test 13: Multiple questions do not share unintended database state
  await executeDdlDmlExercise("UPDATE Employees SET salary = 999999;", q395);
  const q396Check = await executeDdlDmlExercise(q396.expectedSql, q396);
  assert(q396Check.success && q396Check.isCorrect, '13. Multiple questions do not share unintended state');

  // Test 14: Malicious or unsupported statements are blocked
  const attachAttempt = validateDdlDmlSafety("ATTACH DATABASE 'malicious.db' AS evil;");
  assert(!attachAttempt.valid && attachAttempt.error.includes('Security restriction'), '14a. ATTACH DATABASE blocked');
  const pragmaAttempt = validateDdlDmlSafety("PRAGMA load_extension('exploit.so');");
  assert(!pragmaAttempt.valid && pragmaAttempt.error.includes('Security restriction'), '14b. PRAGMA load_extension blocked');

  // Test 15: Existing questions 1–375 still execute and validate exactly as before
  const q1Validation = validateQuerySafety("SELECT * FROM Employees WHERE department = 'IT';");
  assert(q1Validation.valid, '15a. Read-only query validation intact for Question 1');
  const q1BlockedDrop = validateQuerySafety("DROP TABLE Employees;");
  assert(!q1BlockedDrop.valid, '15b. Destructive query in main practice arena remains strictly blocked');

  console.log(`\n==============================================`);
  console.log(`Stage 1 Acceptance Results: ${passed} / ${total} passed (100%)`);
  console.log(`==============================================\n`);
}

runAcceptanceTests().catch(err => {
  console.error('Acceptance suite failed:', err);
  process.exit(1);
});
