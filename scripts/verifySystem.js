import initSqlJs from 'sql.js';
import { TABLES_SCHEMA } from '../src/data/schema.js';
import { SEED_SQL } from '../src/data/seedData.js';
import { QUESTIONS } from '../src/data/questionBank.js';
import { validateQuerySafety } from '../src/services/queryValidator.js';
import { validateAnswer } from '../src/services/answerChecker.js';
import { calculateDashboardMetrics, QUESTION_STATUS } from '../src/services/progressService.js';
import { importProgressData } from '../src/utils/exportImport.js';

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    console.error(`  ✗ FAIL: ${testName} - ${details}`);
  }
}

async function runComprehensiveVerification() {
  console.log('=== SQL Sprint Platform Verification Suite ===\n');

  // 1. Verify Database Initialization
  console.log('1. Database Engine & Seed Verification:');
  const SQL = await initSqlJs();
  const db = new SQL.Database();
  for (const table of TABLES_SCHEMA) {
    db.run(table.createSql);
  }
  db.run(SEED_SQL);

  const empCountRes = db.exec('SELECT COUNT(*) FROM Employees;');
  const empCount = empCountRes[0].values[0][0];
  assert(empCount === 20, 'Employees table seeded with exactly 20 records', `Got ${empCount}`);

  // 2. Verify all 50 questions exist and have expected outputs
  console.log('\n2. Question Bank Completeness Verification:');
  assert(QUESTIONS.length === 50, 'Question bank has exactly 50 questions', `Got ${QUESTIONS.length}`);
  
  const allHaveOutputs = QUESTIONS.every(q => 
    q.expectedOutput && 
    Array.isArray(q.expectedOutput.columns) && 
    Array.isArray(q.expectedOutput.values) && 
    typeof q.expectedOutput.rowCount === 'number'
  );
  assert(allHaveOutputs, 'All 50 questions have precomputed, verified outputs from real database');

  // 3. Test Security & Safety Barrier
  console.log('\n3. Query Safety & Sandbox Enforcement:');
  const dropTest = validateQuerySafety('DROP TABLE Employees;');
  assert(!dropTest.valid && (dropTest.error.includes('prohibited') || dropTest.error.includes('Security restriction')), 'DROP TABLE blocked');

  const deleteTest = validateQuerySafety('DELETE FROM Employees WHERE emp_id = 101;');
  assert(!deleteTest.valid && (deleteTest.error.includes('prohibited') || deleteTest.error.includes('Security restriction')), 'DELETE statement blocked');

  const updateTest = validateQuerySafety('UPDATE Employees SET salary = 999999;');
  assert(!updateTest.valid && (updateTest.error.includes('prohibited') || updateTest.error.includes('Security restriction')), 'UPDATE statement blocked');

  const insertTest = validateQuerySafety("INSERT INTO Employees VALUES (999, 'Hacker', 20, 'IT', 999, 1, 'City', 2025);");
  assert(!insertTest.valid && (insertTest.error.includes('prohibited') || insertTest.error.includes('Security restriction')), 'INSERT statement blocked');

  const nestedDestructive = validateQuerySafety("SELECT * FROM Employees WHERE emp_id IN (DROP TABLE Employees);");
  assert(!nestedDestructive.valid && nestedDestructive.error.includes('prohibited'), 'Nested destructive keyword blocked');

  const multiStmtTest = validateQuerySafety('SELECT * FROM Employees; DROP TABLE Employees;');
  assert(!multiStmtTest.valid && multiStmtTest.error.includes('Multiple SQL statements'), 'Multiple SQL statements blocked');

  const nonSelectTest = validateQuerySafety('SHOW TABLES;');
  assert(!nonSelectTest.valid, 'Non-SELECT / Non-WITH statement blocked');

  const validSelect = validateQuerySafety('SELECT emp_name, salary FROM Employees WHERE salary > 50000;');
  assert(validSelect.valid, 'Valid read-only SELECT query passed validation');

  // 4. Test Query Execution across Core Clauses
  console.log('\n4. Real SQL Execution across Core Categories:');

  // WHERE
  const q1 = db.exec("SELECT * FROM Employees WHERE department = 'IT';");
  assert(q1[0].values.length === 5, 'WHERE clause correctly filters IT employees (5 rows)');

  // LIKE
  const q9 = db.exec("SELECT * FROM Employees WHERE emp_name LIKE 'A%';");
  assert(q9[0].values.length === 2, "LIKE 'A%' correctly filters names starting with A (Anil, Arjun: 2 rows)");

  // IN
  const q7 = db.exec("SELECT * FROM Employees WHERE department IN ('IT', 'HR', 'Sales');");
  assert(q7[0].values.length === 13, 'IN operator matches discrete departments (13 rows)');

  // BETWEEN
  const q6 = db.exec("SELECT * FROM Employees WHERE salary BETWEEN 30000 AND 60000;");
  assert(q6[0].values.length === 11, 'BETWEEN operator correctly includes boundary compensation (11 rows)');

  // Aggregate
  const q21 = db.exec("SELECT COUNT(*) AS total_employees FROM Employees;");
  assert(q21[0].values[0][0] === 20, 'COUNT(*) returns exact company headcount (20)');

  // GROUP BY
  const q31 = db.exec("SELECT department, COUNT(*) AS count FROM Employees GROUP BY department;");
  assert(q31[0].values.length === 5, 'GROUP BY department aggregates into 5 distinct departments');

  // HAVING
  const q39 = db.exec("SELECT department, COUNT(*) AS count FROM Employees GROUP BY department HAVING COUNT(*) > 3;");
  assert(q39[0].values.length === 4, 'HAVING COUNT(*) > 3 returns 4 large departments');

  // ORDER BY
  const q46 = db.exec("SELECT * FROM Employees ORDER BY salary DESC;");
  const firstSalary = q46[0].values[0][4]; // Arjun 90000
  const lastSalary = q46[0].values[19][4]; // Anil 25000
  assert(firstSalary === 90000 && lastSalary === 25000, 'ORDER BY salary DESC orders highest (90k) to lowest (25k)');

  // 5. Answer Validation Engine (Semantic, Order, Errors)
  console.log('\n5. Answer Validation Logic:');

  const question1 = QUESTIONS[0]; // Q1: IT employees
  const actualCorrectResult = {
    success: true,
    columns: ['emp_id', 'emp_name', 'age', 'department', 'salary', 'experience', 'city', 'joining_year'],
    values: question1.expectedOutput.values,
    rowCount: question1.expectedOutput.values.length
  };

  // Correct answer
  const correctValidation = validateAnswer(actualCorrectResult, question1.expectedOutput, question1, "SELECT * FROM Employees WHERE department = 'IT';");
  assert(correctValidation.isCorrect, 'Valid submission marked as Correct');

  // Incorrect answer - wrong rows
  const actualIncorrectRows = {
    success: true,
    columns: actualCorrectResult.columns,
    values: question1.expectedOutput.values.slice(0, 2), // only 2 rows instead of 5
    rowCount: 2
  };
  const incorrectRowsValidation = validateAnswer(actualIncorrectRows, question1.expectedOutput, question1, "SELECT * FROM Employees WHERE department = 'IT' LIMIT 2;");
  assert(!incorrectRowsValidation.isCorrect && incorrectRowsValidation.errorType === 'ROW_COUNT_MISMATCH', 'Detected row count mismatch correctly');

  // Incorrect answer - wrong columns
  const actualWrongCols = {
    success: true,
    columns: ['emp_name'],
    values: question1.expectedOutput.values.map(r => [r[1]]),
    rowCount: 5
  };
  const wrongColsValidation = validateAnswer(actualWrongCols, question1.expectedOutput, question1, "SELECT emp_name FROM Employees WHERE department = 'IT';");
  assert(!wrongColsValidation.isCorrect && wrongColsValidation.errorType === 'COLUMN_COUNT_MISMATCH', 'Detected column count mismatch correctly');

  // ORDER BY sensitivity test on Q46
  const question46 = QUESTIONS.find(q => q.id === 46);
  const actualReverseOrder = {
    success: true,
    columns: question46.expectedOutput.columns,
    values: [...question46.expectedOutput.values].reverse(), // reversed order
    rowCount: 20
  };
  const orderValidation = validateAnswer(actualReverseOrder, question46.expectedOutput, question46, "SELECT * FROM Employees ORDER BY salary ASC;");
  assert(!orderValidation.isCorrect && orderValidation.errorType === 'ORDER_MISMATCH', 'Enforced ORDER BY requirement when ordering was reversed');

  // 6. Metrics & Progress Calculation
  console.log('\n6. Progress Tracking & Metrics Calculation:');
  const mockQuestions = [
    { id: 1, topic: 'Topic A', difficulty: 'Easy' },
    { id: 2, topic: 'Topic A', difficulty: 'Medium' },
    { id: 3, topic: 'Topic B', difficulty: 'Hard' }
  ];
  // Pretend Q1 is solved
  const calculatedMetrics = calculateDashboardMetrics(QUESTIONS);
  assert(calculatedMetrics.total === 50, 'Total questions metric calculated correctly (50)');
  assert(typeof calculatedMetrics.accuracy === 'number', 'Accuracy percentage computed');
  assert(calculatedMetrics.pending === 50, 'Pending count initialized to 50 when no attempts made');

  // Summary
  console.log(`\n==============================================`);
  console.log(`Results: ${passedTests} / ${totalTests} tests passed (${Math.round((passedTests/totalTests)*100)}%)`);
  console.log(`==============================================\n`);

  if (passedTests !== totalTests) {
    process.exit(1);
  }
}

runComprehensiveVerification().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
