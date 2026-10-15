/**
 * Result-based answer validation service.
 * Compares actual query execution results with expected results semantically.
 */

/**
 * Normalizes a cell value for robust comparison across SQL data types.
 */
function normalizeValue(val) {
  if (val === null || val === undefined) return null;
  // If numeric or numeric string
  if (typeof val === 'number') {
    return Number(val.toFixed(4));
  }
  if (typeof val === 'string' && !isNaN(val) && val.trim() !== '') {
    const num = Number(parseFloat(val).toFixed(4));
    if (!isNaN(num)) return num;
  }
  return String(val).trim();
}

/**
 * Converts a row array into a canonical string key for set/multiset comparison.
 */
function rowToKey(row) {
  return JSON.stringify(row.map(normalizeValue));
}

/**
 * Checks if two row arrays have identical values.
 */
function areRowsEqual(rowA, rowB) {
  if (rowA.length !== rowB.length) return false;
  for (let i = 0; i < rowA.length; i++) {
    const valA = normalizeValue(rowA[i]);
    const valB = normalizeValue(rowB[i]);
    if (valA !== valB) return false;
  }
  return true;
}

/**
 * Validates a user's query execution result against the expected question result.
 * 
 * @param {object} actualResult - { success, columns, values, rowCount, error }
 * @param {object} expectedResult - { columns, values, rowCount }
 * @param {object} question - Question definition object
 * @param {string} userSql - The submitted SQL query string
 * @returns {{ isCorrect: boolean, feedback: string, errorType?: string, detailedReason?: string }}
 */
export function validateAnswer(actualResult, expectedResult, question, userSql = '') {
  // 1. Check for runtime execution error
  if (!actualResult.success) {
    return {
      isCorrect: false,
      feedback: 'Execution Error: Your query could not be executed by the database.',
      detailedReason: actualResult.error,
      errorType: 'RUNTIME_ERROR'
    };
  }

  const actualCols = actualResult.columns || [];
  const expectedCols = expectedResult.columns || [];
  const actualValues = actualResult.values || [];
  const expectedValues = expectedResult.values || [];

  // 2. Check Column Count
  if (actualCols.length !== expectedCols.length) {
    return {
      isCorrect: false,
      feedback: `Column count mismatch: Expected ${expectedCols.length} column(s) [${expectedCols.join(', ')}], but your query returned ${actualCols.length} column(s) [${actualCols.join(', ')}].`,
      detailedReason: `Please check your SELECT clause. The question expects ${expectedCols.length} columns.`,
      errorType: 'COLUMN_COUNT_MISMATCH'
    };
  }

  // 3. Check Row Count
  if (actualValues.length !== expectedValues.length) {
    return {
      isCorrect: false,
      feedback: `Row count mismatch: Expected ${expectedValues.length} row(s), but your query returned ${actualValues.length} row(s).`,
      detailedReason: `Double-check your WHERE conditions, GROUP BY, or HAVING filters. Expected ${expectedValues.length} rows, got ${actualValues.length}.`,
      errorType: 'ROW_COUNT_MISMATCH'
    };
  }

  // 4. Check Order By requirement
  const requiresOrder = question.requiresOrder === true ||
                        question.topic?.toLowerCase().includes('order') ||
                        question.topic?.toLowerCase().includes('sorting') ||
                        question.subtopic?.toLowerCase().includes('order') ||
                        question.subtopic?.toLowerCase().includes('sorting') ||
                        (question.tags && (question.tags.includes('order-by') || question.tags.includes('sorting') || question.tags.includes('limit'))) ||
                        (question.id >= 46 && question.id <= 50);

  if (requiresOrder) {
    // Exact row order must match
    for (let r = 0; r < expectedValues.length; r++) {
      if (!areRowsEqual(actualValues[r], expectedValues[r])) {
        // Check if the rows are present in different order
        const actualKeys = actualValues.map(rowToKey).sort();
        const expectedKeys = expectedValues.map(rowToKey).sort();
        const sameContent = JSON.stringify(actualKeys) === JSON.stringify(expectedKeys);

        if (sameContent) {
          return {
            isCorrect: false,
            feedback: 'Ordering mismatch: The correct records were returned, but they are not ordered properly.',
            detailedReason: 'This question tests ORDER BY. Make sure your ORDER BY clause sorts in the specified order (ASC/DESC).',
            errorType: 'ORDER_MISMATCH'
          };
        } else {
          return {
            isCorrect: false,
            feedback: `Value mismatch at row ${r + 1}: Expected [${expectedValues[r].join(', ')}], but got [${actualValues[r].join(', ')}].`,
            detailedReason: 'Verify your filtering conditions and sort keys.',
            errorType: 'VALUE_MISMATCH'
          };
        }
      }
    }
  } else {
    // Order doesn't matter: compare as multisets
    const actualKeys = actualValues.map(rowToKey).sort();
    const expectedKeys = expectedValues.map(rowToKey).sort();

    for (let i = 0; i < expectedKeys.length; i++) {
      if (actualKeys[i] !== expectedKeys[i]) {
        return {
          isCorrect: false,
          feedback: 'Result mismatch: The returned rows do not match the expected dataset.',
          detailedReason: `Check your WHERE / HAVING conditions or aggregations. Inspect the expected output table below to see which records are required.`,
          errorType: 'VALUE_MISMATCH'
        };
      }
    }
  }

  // 5. Check column naming (soft warning or accept semantic aliases)
  const normActualCols = actualCols.map(c => c.toLowerCase().trim());
  const normExpectedCols = expectedCols.map(c => c.toLowerCase().trim());
  let namingNotice = '';
  const colsMatch = normActualCols.every((col, i) => col === normExpectedCols[i]);
  if (!colsMatch) {
    namingNotice = ' (Note: Accepted with column alias variations).';
  }

  return {
    isCorrect: true,
    feedback: `Success! Query result matches expected output perfectly!${namingNotice}`,
    detailedReason: 'Your SQL solution produced the exact required dataset.',
    errorType: null
  };
}
