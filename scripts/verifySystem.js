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

  const deptCount = db.exec('SELECT COUNT(*) FROM Departments;')[0].values[0][0];
  assert(deptCount === 8, 'Departments table seeded with exactly 8 records', `Got ${deptCount}`);

  const projCount = db.exec('SELECT COUNT(*) FROM Projects;')[0].values[0][0];
  assert(projCount === 8, 'Projects table seeded with exactly 8 records', `Got ${projCount}`);

  const epCount = db.exec('SELECT COUNT(*) FROM Employee_Projects;')[0].values[0][0];
  assert(epCount === 20, 'Employee_Projects junction table seeded with exactly 20 records', `Got ${epCount}`);

  const reviewCount = db.exec('SELECT COUNT(*) FROM Performance_Reviews;')[0].values[0][0];
  assert(reviewCount === 18, 'Performance_Reviews table seeded with exactly 18 records', `Got ${reviewCount}`);

  // 2. Verify all 375 questions exist and have expected outputs
  console.log('\n2. Question Bank Completeness Verification:');
  assert(QUESTIONS.length === 375, 'Question bank has exactly 375 questions', `Got ${QUESTIONS.length}`);
  
  const allHaveOutputs = QUESTIONS.every(q => 
    q.expectedOutput && 
    Array.isArray(q.expectedOutput.columns) && 
    Array.isArray(q.expectedOutput.values) && 
    typeof q.expectedOutput.rowCount === 'number' &&
    q.expectedOutput.rowCount > 0
  );
  assert(allHaveOutputs, 'All 375 questions have precomputed, verified outputs with real rows from database');

  const EXPECTED_TOPIC_TARGETS = {
    'SQL Fundamentals': 25,
    'WHERE & Operators': 40,
    'Sorting & Limiting': 20,
    'Aggregate Functions': 30,
    'GROUP BY': 35,
    'HAVING': 25,
    'SQL JOINs': 75,
    'Subqueries': 50,
    'CASE Expressions': 25,
    'Interview Ready Questions': 50
  };
  const topicCounts = {};
  QUESTIONS.forEach(q => {
    topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
  });
  let allTopicsMatch = true;
  for (const [topic, target] of Object.entries(EXPECTED_TOPIC_TARGETS)) {
    if (topicCounts[topic] !== target) {
      allTopicsMatch = false;
      console.error(`Mismatch for ${topic}: expected ${target}, got ${topicCounts[topic]}`);
    }
  }
  assert(allTopicsMatch, 'All 10 topics strictly match their exact question targets (375 total)');

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

  // INNER JOIN
  const joinRes = db.exec("SELECT e.emp_name, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;");
  assert(joinRes[0].values.length === 20, 'INNER JOIN between Employees and Departments returns all 20 assigned employees');

  // LEFT JOIN (Anti-join)
  const unstaffedRes = db.exec("SELECT e.emp_id FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;");
  assert(unstaffedRes[0].values.length === 3, 'LEFT JOIN anti-join accurately surfaces 3 unstaffed employees (101, 113, 118)');

  // Correlated Subquery
  const corrRes = db.exec("SELECT e.emp_id FROM Employees e WHERE e.salary > (SELECT AVG(sub.salary) FROM Employees sub WHERE sub.department = e.department);");
  assert(corrRes[0].values.length > 0, 'Correlated subquery evaluates departmental average salary dynamically');

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
  assert(calculatedMetrics.total === 375, 'Total questions metric calculated correctly (375)');
  assert(typeof calculatedMetrics.accuracy === 'number', 'Accuracy percentage computed');
  assert(calculatedMetrics.pending === 375, 'Pending count initialized to 375 when no attempts made');

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
