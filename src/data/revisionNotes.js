/**
 * Comprehensive revision notes tailored for campus placement and technical interviews.
 * Covers definitions, syntax, code examples, interview gotchas, and logical query execution order.
 */

export const REVISION_TOPICS = [
  {
    id: 'query-lifecycle',
    title: 'SQL Logical Query Processing Order',
    badge: 'Critical Interview Concept',
    summary: 'The conceptual sequence in which SQL engines evaluate clauses, fundamentally different from lexical syntax order.',
    syntax: `SELECT column1, AGG_FUNC(column2)
FROM table_name
WHERE row_condition
GROUP BY column1
HAVING group_condition
ORDER BY sort_column ASC|DESC
LIMIT count;`,
    explanation: `While queries are written starting with SELECT, SQL engines process them in this logical sequence:
1. FROM / JOIN: Determines the data sources and creates the Cartesian working set.
2. WHERE: Filters individual rows before any grouping occurs. (Aggregates cannot be used here!)
3. GROUP BY: Partitions rows into distinct groups based on common values.
4. HAVING: Filters the grouped subsets using aggregate conditions.
5. SELECT: Evaluates expressions, computes aggregates, and applies column aliases.
6. DISTINCT: Eliminates duplicate rows from the projected result set.
7. ORDER BY: Sorts the final output rows (aliases from SELECT can be used here!).
8. LIMIT / OFFSET: Constrains the total number of returned rows.`,
    examples: [
      {
        description: 'Complete pipeline example:',
        sql: `SELECT department, AVG(salary) AS avg_sal
FROM Employees
WHERE experience >= 3
GROUP BY department
HAVING AVG(salary) > 50000
ORDER BY avg_sal DESC
LIMIT 5;`
      }
    ],
    interviewMistakes: [
      "Using column aliases defined in SELECT inside the WHERE clause (WHERE executes before SELECT, so the alias is unknown).",
      "Using aggregate functions like SUM() or COUNT() inside WHERE (aggregates require grouping, which happens after WHERE).",
      "Thinking ORDER BY executes before SELECT; ORDER BY actually executes after SELECT."
    ]
  },
  {
    id: 'where-clause',
    title: 'WHERE Clause & Comparison Operators',
    badge: 'Row Filtering',
    summary: 'Filters individual records before any grouping, sorting, or projection takes place.',
    syntax: `SELECT * FROM table_name WHERE condition;
-- Operators: =, !=, <>, <, >, <=, >=`,
    explanation: `The WHERE clause specifies search conditions for rows returned by a query. Only rows evaluating to TRUE for the boolean condition are passed to subsequent query stages. Rows evaluating to FALSE or NULL (UNKNOWN) are discarded.`,
    examples: [
      {
        description: 'Equality and numeric inequality:',
        sql: `SELECT * FROM Employees 
WHERE department = 'IT' AND salary >= 50000;`
      },
      {
        description: 'Inequality operators (!= and <> are synonymous):',
        sql: `SELECT * FROM Employees 
WHERE department <> 'HR';`
      }
    ],
    interviewMistakes: [
      "Using '=' to check for NULL (e.g. `WHERE salary = NULL`). In SQL, NULL represents an unknown value, so `NULL = NULL` yields UNKNOWN/FALSE. Always use `IS NULL` or `IS NOT NULL`.",
      "Forgetting that string comparison in standard SQL may be case-sensitive depending on the collation."
    ]
  },
  {
    id: 'logical-operators',
    title: 'Logical Operators (AND, OR, NOT)',
    badge: 'Boolean Logic',
    summary: 'Combines multiple search conditions and inverts boolean evaluations.',
    syntax: `WHERE condition1 AND condition2
WHERE condition1 OR condition2
WHERE NOT condition1`,
    explanation: `AND requires both conditions to be TRUE. OR requires at least one condition to be TRUE. NOT negates the condition.
Crucially, AND has higher operator precedence than OR! Therefore, 'A OR B AND C' is evaluated as 'A OR (B AND C)'. Always use parentheses when mixing AND and OR.`,
    examples: [
      {
        description: 'Enforcing precedence with parentheses:',
        sql: `SELECT * FROM Employees
WHERE (city = 'Hyderabad' OR city = 'Chennai') 
  AND salary > 50000;`
      }
    ],
    interviewMistakes: [
      "Omitting parentheses when mixing AND and OR: `WHERE city = 'Chennai' OR city = 'Bengaluru' AND salary > 50000` does NOT filter Chennai by salary; it returns all Chennai employees plus Bengaluru employees earning > 50000."
    ]
  },
  {
    id: 'in-between-like',
    title: 'IN, BETWEEN, and LIKE Operators',
    badge: 'Advanced Matching',
    summary: 'Idiomatic SQL operators for list membership, closed range checks, and pattern matching.',
    syntax: `-- Membership
WHERE column_name IN (val1, val2, ...)
-- Closed range [min, max]
WHERE column_name BETWEEN min_val AND max_val
-- Wildcard patterns
WHERE column_name LIKE 'pattern'`,
    explanation: `1. IN checks if a value matches any item in a discrete list.
2. BETWEEN val1 AND val2 is INCLUSIVE of both boundary values (equivalent to >= val1 AND <= val2).
3. LIKE supports two standard wildcards:
   - '%' matches zero, one, or multiple characters.
   - '_' matches exactly one character.`,
    examples: [
      {
        description: 'IN and BETWEEN usage:',
        sql: `SELECT * FROM Employees 
WHERE department IN ('IT', 'Finance')
  AND salary BETWEEN 35000 AND 75000;`
      },
      {
        description: 'Wildcard patterns:',
        sql: `-- Names of exactly 4 characters starting with 'A'
SELECT * FROM Employees WHERE emp_name LIKE 'A___';
-- Names containing 'an'
SELECT * FROM Employees WHERE emp_name LIKE '%an%';`
      }
    ],
    interviewMistakes: [
      "Assuming BETWEEN is exclusive of boundaries. It is always INCLUSIVE in standard SQL.",
      "Confusing '%' (zero or more characters) with '_' (exactly one character).",
      "Using IN with a subquery containing NULLs when paired with NOT IN (NOT IN returns empty set if any subquery row is NULL due to 3-valued logic)."
    ]
  },
  {
    id: 'null-handling',
    title: 'IS NULL and IS NOT NULL',
    badge: '3-Valued Logic',
    summary: 'Handling missing, unknown, or non-applicable values in relational databases.',
    syntax: `WHERE column_name IS NULL
WHERE column_name IS NOT NULL`,
    explanation: `SQL uses 3-valued logic: TRUE, FALSE, and UNKNOWN.
A comparison involving NULL with standard comparison operators (=, !=, <, >) always evaluates to UNKNOWN.
To test whether an attribute lacks a value, always use the dedicated predicate \`IS NULL\` or \`IS NOT NULL\`.`,
    examples: [
      {
        description: 'Filtering for null values safely:',
        sql: `SELECT * FROM Employees 
WHERE experience IS NOT NULL;`
      }
    ],
    interviewMistakes: [
      "Writing `WHERE bonus = NULL` or `WHERE bonus != NULL`. This is the #1 SQL interview trap and will return 0 rows.",
      "Assuming `COUNT(column)` counts NULLs. `COUNT(column)` only counts non-NULL values, whereas `COUNT(*)` counts all physical rows."
    ]
  },
  {
    id: 'aggregates',
    title: 'Aggregate Functions: COUNT, SUM, AVG, MAX, MIN',
    badge: 'Aggregation',
    summary: 'Calculates a single scalar summary value across a set of rows.',
    syntax: `SELECT 
  COUNT(*),
  COUNT(DISTINCT column),
  SUM(column),
  AVG(column),
  MAX(column),
  MIN(column)
FROM table_name;`,
    explanation: `Aggregate functions condense multi-row datasets into single summary statistics:
- COUNT(*): Counts all rows, including NULLs and duplicates.
- COUNT(column): Counts non-NULL rows for that column.
- COUNT(DISTINCT column): Counts unique non-NULL values.
- SUM(): Sums numeric values (ignores NULLs).
- AVG(): Arithmetic mean (ignores NULLs; does not divide by rows where column is NULL).
- MAX() / MIN(): Peak and trough values (works on numbers, dates, strings).`,
    examples: [
      {
        description: 'Summary metrics across the enterprise:',
        sql: `SELECT 
  COUNT(*) AS total_staff,
  AVG(salary) AS mean_comp,
  MAX(salary) AS peak_comp,
  MIN(salary) AS min_comp
FROM Employees;`
      }
    ],
    interviewMistakes: [
      "Assuming AVG(column) divides by total rows. AVG ignores NULL values, so if 2 out of 10 rows are NULL, it divides the sum by 8, not 10! To count NULLs as 0, use `AVG(COALESCE(column, 0))`.",
      "Trying to SELECT non-aggregated columns alongside aggregates without a GROUP BY clause."
    ]
  },
  {
    id: 'group-by',
    title: 'GROUP BY Clause',
    badge: 'Data Partitioning',
    summary: 'Collapses rows sharing identical column values into summary buckets.',
    syntax: `SELECT column1, AGG_FUNC(column2)
FROM table_name
GROUP BY column1;`,
    explanation: `GROUP BY partitions records by distinct values of the specified grouping columns. Each unique combination forms one output row.
Rule of thumb: Every non-aggregated column appearing in the SELECT list MUST appear in the GROUP BY clause.`,
    examples: [
      {
        description: 'Departmental headcounts and wage sums:',
        sql: `SELECT 
  department, 
  COUNT(*) AS head_count, 
  SUM(salary) AS total_payroll
FROM Employees
GROUP BY department;`
      }
    ],
    interviewMistakes: [
      "Selecting columns that are neither grouped nor wrapped in an aggregate function (violates standard SQL and causes error in strict SQL modes).",
      "Confusing GROUP BY with ORDER BY. GROUP BY aggregates data but does NOT guarantee any specific output order unless an explicit ORDER BY is added."
    ]
  },
  {
    id: 'having-clause',
    title: 'HAVING Clause',
    badge: 'Group Filtering',
    summary: 'Filters the summarized groups generated by GROUP BY.',
    syntax: `SELECT department, COUNT(*)
FROM Employees
GROUP BY department
HAVING COUNT(*) > 3;`,
    explanation: `HAVING filters aggregated groups based on summary conditions, such as 'COUNT(*) > 2' or 'AVG(salary) >= 50000'.
Because WHERE cannot evaluate aggregate functions, HAVING was created specifically to filter groups after aggregation.`,
    examples: [
      {
        description: 'Filtering large departments with high compensation:',
        sql: `SELECT department, COUNT(*) AS emp_cnt, AVG(salary) AS avg_sal
FROM Employees
GROUP BY department
HAVING COUNT(*) >= 3 AND AVG(salary) > 45000;`
      }
    ],
    interviewMistakes: [
      "Putting non-aggregate filters in HAVING that belong in WHERE (e.g. `HAVING department = 'IT'`). While valid in some engines, it hurts performance because WHERE filters rows early before grouping.",
      "Attempting to use WHERE to filter aggregates (e.g. `WHERE COUNT(*) > 3` will cause a syntax error)."
    ]
  },
  {
    id: 'where-vs-having',
    title: 'WHERE vs HAVING Comparison',
    badge: 'Interview Classic',
    summary: 'Direct side-by-side comparison between the two primary filtering clauses in SQL.',
    syntax: `WHERE filters individual rows BEFORE GROUP BY
HAVING filters aggregated groups AFTER GROUP BY`,
    explanation: `Comparison Matrix:
| Feature | WHERE | HAVING |
| :--- | :--- | :--- |
| Operates On | Individual rows | Groups of rows |
| Execution Timing | Before GROUP BY | After GROUP BY |
| Aggregates Allowed? | NO (Syntax error) | YES (COUNT, SUM, AVG, etc.) |
| Column Restrictions | Can reference any table column | References grouping cols or aggregates |
| Performance | Faster (reduces rows early) | Slower (runs on grouped set) |`,
    examples: [
      {
        description: 'Optimal usage using both WHERE and HAVING together:',
        sql: `SELECT department, AVG(salary) AS avg_sal
FROM Employees
WHERE city != 'Chennai'            -- Row filter: exclude Chennai before grouping
GROUP BY department
HAVING AVG(salary) > 50000;       -- Group filter: only high-paying groups`
      }
    ],
    interviewMistakes: [
      "Saying HAVING is just another name for WHERE.",
      "Failing to explain that WHERE eliminates rows before grouping to optimize database index usage."
    ]
  },
  {
    id: 'order-by',
    title: 'ORDER BY Clause',
    badge: 'Result Sorting',
    summary: 'Orders the final result set in ascending (ASC) or descending (DESC) sequence.',
    syntax: `SELECT * FROM table_name 
ORDER BY col1 ASC|DESC, col2 ASC|DESC;`,
    explanation: `ORDER BY sorts the returned records. By default, sorting is ASC (ascending). Multiple columns can be specified, separated by commas; the secondary column is only evaluated when ties occur in the primary column.`,
    examples: [
      {
        description: 'Multi-column sorting:',
        sql: `SELECT * FROM Employees
ORDER BY department ASC, salary DESC;`
      },
      {
        description: 'Top-N query with LIMIT:',
        sql: `SELECT * FROM Employees
ORDER BY salary DESC
LIMIT 3;`
      }
    ],
    interviewMistakes: [
      "Assuming SQL queries return rows in insertion order without ORDER BY. Relational tables represent unordered sets; row order is non-deterministic without an explicit ORDER BY.",
      "Placing ORDER BY before WHERE, GROUP BY, or HAVING. In SQL syntax, ORDER BY is placed near the end, just before LIMIT."
    ]
  },
  {
    id: 'sqlite-vs-mysql',
    title: 'MySQL vs SQLite Compatibility Guide',
    badge: 'Platform Architecture',
    summary: 'Key differences between browser-based SQLite (sql.js) and standard MySQL 8.0 server.',
    syntax: `SQL Sprint runs queries locally in your browser via SQLite WebAssembly.`,
    explanation: `Key Behavioral Differences:
1. Regex Operator: MySQL supports \`REGEXP\` / \`RLIKE\`. SQLite supports \`LIKE\` and \`GLOB\`.
2. Case Sensitivity in LIKE: MySQL's \`LIKE\` is case-insensitive with default collations. SQLite's \`LIKE\` is case-insensitive for ASCII text, but case-sensitive for non-ASCII characters.
3. String Concatenation: MySQL uses \`CONCAT(a, b)\`. SQLite uses the standard ANSI operator \`a || b\` (MySQL requires PIPES_AS_CONCAT mode for ||).
4. Date Functions: MySQL uses \`NOW()\`, \`CURDATE()\`, \`DATE_ADD()\`. SQLite uses \`DATE('now')\`, \`DATETIME('now')\`, \`STRFTIME()\`.
5. Datatypes: MySQL strictly enforces column data types and lengths (e.g. VARCHAR(30)). SQLite uses type affinity and dynamic typing.
6. Window Functions: Both MySQL 8.0+ and SQLite 3.25+ support standard window functions (\`ROW_NUMBER()\`, \`RANK()\`, \`DENSE_RANK()\`, \`PARTITION BY\`).`,
    examples: [
      {
        description: 'Writing portable SQL queries:',
        sql: `-- Standard portable SQL works on both MySQL and SQLite:
SELECT department, COUNT(*) AS count
FROM Employees
WHERE salary >= 40000
GROUP BY department
ORDER BY count DESC;`
      }
    ],
    interviewMistakes: [
      "Claiming all SQL dialects are 100% identical. In interviews, acknowledging dialect-specific differences (such as MySQL vs PostgreSQL vs SQLite) demonstrates real-world database engineering experience."
    ]
  }
];
