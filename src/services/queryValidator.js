/**
 * Query validation and safety checks.
 * Enforces read-only execution and prevents destructive operations or multi-statement injections.
 */

// Blocked SQL keywords that modify schema, data, or database state
const FORBIDDEN_KEYWORDS = [
  'DROP', 'DELETE', 'UPDATE', 'INSERT', 'ALTER', 'TRUNCATE',
  'CREATE', 'REPLACE', 'GRANT', 'REVOKE', 'ATTACH', 'DETACH',
  'PRAGMA', 'EXEC', 'EXECUTE', 'UPSERT'
];

/**
 * Remove single-line (-- ...) and multi-line comments from SQL.
 */
export function stripComments(sql) {
  if (!sql) return '';
  return sql
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove /* ... */
    .replace(/--.*$/gm, '')           // remove -- ...
    .trim();
}

/**
 * Validates that the SQL query is safe and adheres to read-only practice rules.
 * @param {string} rawSql
 * @returns {{ valid: boolean, error?: string, sanitizedSql?: string }}
 */
export function validateQuerySafety(rawSql) {
  if (!rawSql || typeof rawSql !== 'string') {
    return { valid: false, error: 'Query is empty. Please enter a valid SQL query.' };
  }

  const cleanSql = stripComments(rawSql).trim();

  if (!cleanSql) {
    return { valid: false, error: 'Query contains only whitespace or comments.' };
  }

  // Check for multiple SQL statements
  // Split on semicolon, ignoring trailing semicolon
  const statements = cleanSql
    .split(';')
    .map(s => s.trim())
    .filter(Boolean);

  if (statements.length > 1) {
    return {
      valid: false,
      error: 'Multiple SQL statements detected. Practice mode allows executing only one SQL query at a time.'
    };
  }

  const queryToValidate = statements[0] || cleanSql;

  // Extract first word token
  const firstTokenMatch = queryToValidate.match(/^([a-zA-Z_]+)/);
  if (!firstTokenMatch) {
    return { valid: false, error: 'Invalid SQL syntax: Query must start with a valid command.' };
  }

  const firstToken = firstTokenMatch[1].toUpperCase();

  // Allow only SELECT and WITH (CTEs)
  const ALLOWED_INITIAL_KEYWORDS = ['SELECT', 'WITH'];
  if (!ALLOWED_INITIAL_KEYWORDS.includes(firstToken)) {
    return {
      valid: false,
      error: `Security restriction: Only read-only queries starting with SELECT or WITH are permitted. Found: "${firstToken}".`
    };
  }

  // Tokenize words and check against forbidden keywords outside string literals
  // Simple regex token check that ignores text inside single or double quotes
  const stringLiteralStripped = queryToValidate.replace(/'(?:''|[^'])*'/g, "''").replace(/"(?:""|[^"])*"/g, '""');
  const words = stringLiteralStripped.toUpperCase().match(/\b[A-Z_]+\b/g) || [];

  for (const word of words) {
    if (FORBIDDEN_KEYWORDS.includes(word)) {
      return {
        valid: false,
        error: `Destructive or state-altering command "${word}" is prohibited in practice mode. Only read-only queries are executed.`
      };
    }
  }

  return { valid: true, sanitizedSql: queryToValidate };
}

/**
 * Detects whether the query uses ORDER BY clause.
 */
export function hasOrderByClause(sql) {
  if (!sql) return false;
  const cleanSql = stripComments(sql).toUpperCase();
  // Strip string literals
  const stripped = cleanSql.replace(/'(?:''|[^'])*'/g, "''").replace(/"(?:""|[^"])*"/g, '""');
  return /\bORDER\s+BY\b/.test(stripped);
}

// Prohibited dangerous keywords in DDL/DML sandbox
const DANGEROUS_DDL_DML_KEYWORDS = [
  'ATTACH', 'DETACH', 'LOAD_EXTENSION', 'REINDEX', 'VACUUM', 'PRAGMA',
  'GRANT', 'REVOKE', 'EXEC', 'EXECUTE', 'UPSERT'
];

const ALLOWED_DDL_DML_INITIAL_KEYWORDS = [
  'CREATE', 'ALTER', 'DROP', 'INSERT', 'UPDATE', 'DELETE', 'SELECT', 'WITH'
];

/**
 * Validates statements for the isolated DDL/DML sandbox.
 * Allows schema definition, alteration, insertion, updates, and deletes.
 * Blocks system-level operations like ATTACH, DETACH, PRAGMA, etc.
 */
export function validateDdlDmlSafety(rawSql) {
  if (!rawSql || typeof rawSql !== 'string') {
    return { valid: false, error: 'Query is empty. Please enter a valid SQL statement.' };
  }

  const cleanSql = stripComments(rawSql).trim();
  if (!cleanSql) {
    return { valid: false, error: 'Query contains only whitespace or comments.' };
  }

  // Strip string literals before keyword tokenization
  const stringLiteralStripped = cleanSql.replace(/'(?:''|[^'])*'/g, "''").replace(/"(?:""|[^"])*"/g, '""');

  // Check for forbidden dangerous system-level commands
  const words = stringLiteralStripped.toUpperCase().match(/\b[A-Z_]+\b/g) || [];
  for (const word of words) {
    if (DANGEROUS_DDL_DML_KEYWORDS.includes(word)) {
      return {
        valid: false,
        error: `Security restriction: System-level command "${word}" is not permitted in practice exercises.`
      };
    }
  }

  // Split on semicolons for statement validation
  const statements = cleanSql
    .split(';')
    .map(s => s.trim())
    .filter(Boolean);

  if (statements.length === 0) {
    return { valid: false, error: 'No executable SQL statements found.' };
  }

  // Verify each statement starts with an allowed keyword
  for (const stmt of statements) {
    const firstWordMatch = stmt.match(/^([a-zA-Z_]+)/);
    if (!firstWordMatch) {
      return { valid: false, error: 'Invalid SQL syntax: Statement must begin with a valid command.' };
    }
    const firstWord = firstWordMatch[1].toUpperCase();
    if (!ALLOWED_DDL_DML_INITIAL_KEYWORDS.includes(firstWord)) {
      return {
        valid: false,
        error: `Command "${firstWord}" is not permitted. Only DDL/DML operations (${ALLOWED_DDL_DML_INITIAL_KEYWORDS.join(', ')}) are supported.`
      };
    }
  }

  return { valid: true, sanitizedSql: cleanSql, statements };
}
