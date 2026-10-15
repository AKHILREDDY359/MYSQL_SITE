import initSqlJs from 'sql.js';
import { TABLES_SCHEMA, DATABASE_NAME } from '../data/schema.js';
import { SEED_SQL } from '../data/seedData.js';
import { validateQuerySafety } from './queryValidator.js';

let SQL = null;
let dbInstance = null;
let initPromise = null;

/**
 * Initializes SQL.js WebAssembly engine and loads initial schema and seed data.
 */
export async function initDatabase() {
  if (dbInstance) return dbInstance;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      if (!SQL) {
        if (typeof window !== 'undefined') {
          try {
            // Tier 1: Bundler-managed asset URL (Vite dev & production)
            const wasmAsset = await import('sql.js/dist/sql-wasm.wasm?url');
            SQL = await initSqlJs({
              locateFile: () => wasmAsset.default
            });
          } catch (err1) {
            console.warn('Vite asset WASM loading failed, attempting local public asset:', err1);
            try {
              // Tier 2: Local public assets (/sql-wasm.wasm or /sql-wasm-browser.wasm)
              const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
              const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
              SQL = await initSqlJs({
                locateFile: (file) => `${cleanBase}${file}`
              });
            } catch (err2) {
              console.warn('Local public WASM loading failed, falling back to CDN:', err2);
              // Tier 3: Official sql.js CDN
              SQL = await initSqlJs({
                locateFile: (file) => `https://sql.js.org/dist/${file}`
              });
            }
          }
        } else {
          // Node.js testing environment
          SQL = await initSqlJs();
        }
      }

      dbInstance = new SQL.Database();

      // Create schema
      for (const table of TABLES_SCHEMA) {
        dbInstance.run(table.createSql);
      }

      // Seed data
      dbInstance.run(SEED_SQL);

      return dbInstance;
    } catch (err) {
      initPromise = null; // Clear cached promise on error so retry works
      console.error('Failed to initialize database engine:', err);
      throw err;
    }
  })();

  return initPromise;
}

/**
 * Resets the in-memory database back to clean schema and seed state.
 */
export async function resetDatabase() {
  if (dbInstance) {
    try {
      dbInstance.close();
    } catch (e) {
      // ignore
    }
    dbInstance = null;
    initPromise = null;
  }
  return initDatabase();
}

/**
 * Executes a SQL query against the in-memory practice database safely.
 * @param {string} rawSql
 * @param {object} options { bypassSafety: boolean }
 * @returns {Promise<{ success: boolean, columns?: string[], values?: any[][], rowCount?: number, executionTimeMs?: number, error?: string }>}
 */
export async function executeQuery(rawSql, options = {}) {
  const startTime = performance.now();

  try {
    const db = await initDatabase();

    // 1. Safety validation (unless internal system execution)
    if (!options.bypassSafety) {
      const validation = validateQuerySafety(rawSql);
      if (!validation.valid) {
        return {
          success: false,
          error: validation.error,
          executionTimeMs: 0
        };
      }
    }

    // 2. Execute query
    const res = db.exec(rawSql);
    const endTime = performance.now();
    const executionTimeMs = parseFloat((endTime - startTime).toFixed(2));

    if (!res || res.length === 0) {
      // Fallback for empty result set (e.g. valid query matching no rows)
      // Check column names using a prepared statement if possible
      let columns = [];
      try {
        const stmt = db.prepare(rawSql);
        columns = stmt.getColumnNames();
        stmt.free();
      } catch (e) {
        columns = [];
      }

      return {
        success: true,
        columns,
        values: [],
        rowCount: 0,
        executionTimeMs
      };
    }

    const { columns, values } = res[0];

    return {
      success: true,
      columns,
      values,
      rowCount: values.length,
      executionTimeMs
    };
  } catch (err) {
    const endTime = performance.now();
    const executionTimeMs = parseFloat((endTime - startTime).toFixed(2));
    
    // Provide clean, human-readable SQL error messages
    let errorMsg = err.message || 'Unknown database error occurred.';
    if (errorMsg.includes('no such table')) {
      errorMsg = `${errorMsg}. Check the table name in the Database Explorer.`;
    } else if (errorMsg.includes('no such column')) {
      errorMsg = `${errorMsg}. Check the column spelling in the Schema Viewer.`;
    }

    return {
      success: false,
      error: errorMsg,
      executionTimeMs
    };
  }
}

/**
 * Fetches all records and column info for a specific table.
 */
export async function getTableData(tableName = 'Employees') {
  const result = await executeQuery(`SELECT * FROM ${tableName};`, { bypassSafety: true });
  return result;
}

/**
 * Fetches table metadata including column count, row count, and schema info.
 */
export async function getTablesInfo() {
  const db = await initDatabase();
  const tables = [];

  for (const tableSchema of TABLES_SCHEMA) {
    const countRes = db.exec(`SELECT COUNT(*) as count FROM ${tableSchema.name};`);
    const rowCount = countRes.length > 0 && countRes[0].values.length > 0 ? countRes[0].values[0][0] : 0;

    tables.push({
      ...tableSchema,
      databaseName: DATABASE_NAME,
      rowCount,
      columnCount: tableSchema.columns.length
    });
  }

  return tables;
}
