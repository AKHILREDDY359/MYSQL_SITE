import initSqlJs from 'sql.js';
import { TABLES_SCHEMA } from '../data/schema.js';
import { SEED_SQL } from '../data/seedData.js';
import { validateDdlDmlSafety } from './queryValidator.js';
import { validateAnswer } from './answerChecker.js';

let SQL = null;
let masterSnapshot = null;
let snapshotPromise = null;

/**
 * Initializes SQL.js and prepares an in-memory master snapshot for sub-millisecond cloning.
 */
async function getMasterSnapshot() {
  if (masterSnapshot) return masterSnapshot;
  if (snapshotPromise) return snapshotPromise;

  snapshotPromise = (async () => {
    if (!SQL) {
      if (typeof window !== 'undefined') {
        try {
          const wasmAsset = await import('sql.js/dist/sql-wasm.wasm?url');
          SQL = await initSqlJs({ locateFile: () => wasmAsset.default });
        } catch (err) {
          const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
          const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
          try {
            SQL = await initSqlJs({ locateFile: (file) => `${cleanBase}${file}` });
          } catch (e2) {
            SQL = await initSqlJs({ locateFile: (file) => `https://sql.js.org/dist/${file}` });
          }
        }
      } else {
        // Node.js testing environment
        SQL = await initSqlJs();
      }
    }

    const baselineDb = new SQL.Database();
    for (const table of TABLES_SCHEMA) {
      baselineDb.run(table.createSql);
    }
    baselineDb.run(SEED_SQL);
    masterSnapshot = baselineDb.export();
    baselineDb.close();
    return masterSnapshot;
  })();

  return snapshotPromise;
}

/**
 * Creates an isolated database cloned from the baseline.
 */
async function createIsolatedInstance(initialSetupSql = '') {
  const snapshot = await getMasterSnapshot();
  const db = new SQL.Database(snapshot);
  db.run('PRAGMA foreign_keys = ON;');
  if (initialSetupSql) {
    db.run(initialSetupSql);
  }
  return db;
}

/**
 * Determines whether a question belongs to the DDL/DML practice category.
 */
export function isDdlDmlQuestion(question) {
  if (!question) return false;
  return (
    question.id >= 376 ||
    question.topic?.includes('DDL') ||
    question.topic?.includes('DML') ||
    question.isDdlDml === true
  );
}

/**
 * Executes a DDL or DML statement inside an isolated, temporary database instance.
 * Compares the resulting database state against the reference state produced by expectedSql.
 * Closes and disposes of the temporary database immediately after verification.
 */
export async function executeDdlDmlExercise(userSql, question, options = {}) {
  const startTime = performance.now();

  // 1. Safety validation for DDL/DML statements
  if (!options.bypassSafety) {
    const safety = validateDdlDmlSafety(userSql);
    if (!safety.valid) {
      return {
        success: false,
        error: safety.error,
        executionTimeMs: 0
      };
    }
  }

  let userDb = null;
  let refDb = null;

  try {
    userDb = await createIsolatedInstance(question.initialSetupSql);

    let userExecutionError = null;
    try {
      userDb.run(userSql);
    } catch (err) {
      userExecutionError = err.message || 'Execution error';
    }

    // 2. Check if this exercise specifically expects a constraint violation / error
    if (question.verificationType === 'EXPECTED_ERROR') {
      const executionTimeMs = parseFloat((performance.now() - startTime).toFixed(2));
      if (!userExecutionError) {
        return {
          success: true,
          isCorrect: false,
          feedback: 'Validation Failed: The operation was expected to be rejected by the database constraint, but it executed successfully.',
          detailedReason: `Expected error matching: "${question.expectedError}". Ensure your table definition or query properly enforces the constraint.`,
          columns: ['status', 'message'],
          values: [['Executed without error', 'Constraint was not triggered']],
          rowCount: 1,
          executionTimeMs
        };
      }

      const expectedKeyword = (question.expectedError || 'constraint').toLowerCase();
      const actualErrorLower = userExecutionError.toLowerCase();
      const matches = actualErrorLower.includes(expectedKeyword) || 
                      actualErrorLower.includes('constraint') ||
                      actualErrorLower.includes('failed');

      return {
        success: true,
        isCorrect: matches,
        feedback: matches
          ? `Success! Database constraint correctly caught and rejected the invalid operation: "${userExecutionError}".`
          : `Unexpected error: Got "${userExecutionError}", but expected constraint violation: "${question.expectedError}".`,
        detailedReason: matches ? 'Constraint correctly protected data integrity.' : userExecutionError,
        columns: ['Constraint Check', 'Database Response'],
        values: [[matches ? 'Enforced' : 'Mismatch', userExecutionError]],
        rowCount: 1,
        executionTimeMs
      };
    }

    // If an unexpected error occurred during user execution
    if (userExecutionError) {
      const executionTimeMs = parseFloat((performance.now() - startTime).toFixed(2));
      return {
        success: false,
        error: userExecutionError,
        executionTimeMs
      };
    }

    // 3. Execute reference solution against an identical twin isolated instance
    refDb = await createIsolatedInstance(question.initialSetupSql);
    refDb.run(question.expectedSql);

    // 4. Run verification SQL against both databases to inspect resultant state
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

    // 5. Compare states
    const validation = validateAnswer(actualResult, expectedResult, question, userSql);
    const executionTimeMs = parseFloat((performance.now() - startTime).toFixed(2));

    return {
      success: true,
      isCorrect: validation.isCorrect,
      feedback: validation.feedback,
      detailedReason: validation.detailedReason,
      columns: actualResult.columns,
      values: actualResult.values,
      rowCount: actualResult.rowCount,
      executionTimeMs
    };
  } catch (err) {
    const executionTimeMs = parseFloat((performance.now() - startTime).toFixed(2));
    return {
      success: false,
      error: err.message || 'Error occurred during isolated exercise execution.',
      executionTimeMs
    };
  } finally {
    if (userDb) {
      try { userDb.close(); } catch (e) {}
    }
    if (refDb) {
      try { refDb.close(); } catch (e) {}
    }
  }
}
