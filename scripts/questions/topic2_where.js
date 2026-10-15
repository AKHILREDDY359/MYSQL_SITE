export const TOPIC2_QUESTIONS = [
  // Subtopic: Nullability & Boolean Truth Values (IDs 76 to 80)
  {
    id: 76,
    title: "Filter performance reviews with unassigned bonuses",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to retrieve all columns from Performance_Reviews where bonus IS NULL.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Filter for rows where bonus IS NULL.",
      "Select all columns (*)."
    ],
    tableName: "Performance_Reviews",
    hint: "Use IS NULL to test for missing values: WHERE bonus IS NULL",
    expectedSql: "SELECT * FROM Performance_Reviews WHERE bonus IS NULL;",
    explanation: "Standard equality (=) with NULL yields UNKNOWN in three-valued SQL logic; IS NULL must be used instead.",
    tags: ["where", "null", "filtering"],
    estimatedTimeMinutes: 2
  },
  {
    id: 77,
    title: "Retrieve active projects launched during or after 2024",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to retrieve project_id, project_name, budget, and start_date for all projects with status 'Active' and start_date on or after '2024-01-01'.",
    requirements: [
      "Select project_id, project_name, budget, start_date from Projects.",
      "Filter where status = 'Active' AND start_date >= '2024-01-01'."
    ],
    tableName: "Projects",
    hint: "WHERE status = 'Active' AND start_date >= '2024-01-01'",
    expectedSql: "SELECT project_id, project_name, budget, start_date FROM Projects WHERE status = 'Active' AND start_date >= '2024-01-01';",
    explanation: "Combines string equality and ISO date comparison using the logical AND operator.",
    tags: ["where", "and", "dates"],
    estimatedTimeMinutes: 3
  },
  {
    id: 78,
    title: "Find departments with mid-tier operating budgets",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display dept_name, location, and budget for all departments whose annual budget is between 500000 and 1200000 inclusive.",
    requirements: [
      "Select dept_name, location, budget from Departments.",
      "Use the BETWEEN operator for 500000 and 1200000."
    ],
    tableName: "Departments",
    hint: "WHERE budget BETWEEN 500000 AND 1200000",
    expectedSql: "SELECT dept_name, location, budget FROM Departments WHERE budget BETWEEN 500000 AND 1200000;",
    explanation: "BETWEEN is inclusive of both lower and upper boundary values.",
    tags: ["where", "between", "numeric"],
    estimatedTimeMinutes: 2
  },
  {
    id: 79,
    title: "Filter veteran employees from IT or Finance departments",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to retrieve emp_id, emp_name, department, and joining_year for employees in either 'IT' or 'Finance' who joined the company prior to 2020.",
    requirements: [
      "Select emp_id, emp_name, department, joining_year from Employees.",
      "Filter with department IN ('IT', 'Finance') AND joining_year < 2020."
    ],
    tableName: "Employees",
    hint: "WHERE department IN ('IT', 'Finance') AND joining_year < 2020",
    expectedSql: "SELECT emp_id, emp_name, department, joining_year FROM Employees WHERE department IN ('IT', 'Finance') AND joining_year < 2020;",
    explanation: "Parenthesizing or grouping set membership with an inequality isolates historical staff from designated divisions.",
    tags: ["where", "in", "and", "logical-operators"],
    estimatedTimeMinutes: 3
  },
  {
    id: 80,
    title: "Identify projects in Completed or Planning status",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display project_id, project_name, and status for projects that are either 'Completed' or 'Planning'.",
    requirements: [
      "Select project_id, project_name, status from Projects.",
      "Filter with status IN ('Completed', 'Planning')."
    ],
    tableName: "Projects",
    hint: "WHERE status IN ('Completed', 'Planning')",
    expectedSql: "SELECT project_id, project_name, status FROM Projects WHERE status IN ('Completed', 'Planning');",
    explanation: "IN acts as shorthand for multiple OR expressions against a common attribute.",
    tags: ["where", "in", "status"],
    estimatedTimeMinutes: 2
  },

  // Subtopic: String Matching & Wildcards (IDs 81 to 85)
  {
    id: 81,
    title: "Filter employees whose names start with P or S",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to select emp_id, emp_name, and department for employees whose name begins with either 'P' or 'S'.",
    requirements: [
      "Select emp_id, emp_name, department from Employees.",
      "Filter using LIKE with '%' wildcard: emp_name LIKE 'P%' OR emp_name LIKE 'S%'."
    ],
    tableName: "Employees",
    hint: "WHERE emp_name LIKE 'P%' OR emp_name LIKE 'S%'",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_name LIKE 'P%' OR emp_name LIKE 'S%';",
    explanation: "The percent wildcard (%) matches zero or more trailing characters.",
    tags: ["where", "like", "wildcards"],
    estimatedTimeMinutes: 3
  },
  {
    id: 82,
    title: "Find corporate initiatives focused on Automation",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to retrieve all columns from Projects whose project_name contains the keyword 'Automation'.",
    requirements: [
      "Select all columns from Projects.",
      "Filter with project_name LIKE '%Automation%'."
    ],
    tableName: "Projects",
    hint: "WHERE project_name LIKE '%Automation%'",
    expectedSql: "SELECT * FROM Projects WHERE project_name LIKE '%Automation%';",
    explanation: "Surrounding the pattern with '%' performs a substring containment search.",
    tags: ["where", "like", "substring"],
    estimatedTimeMinutes: 2
  },
  {
    id: 83,
    title: "Search reviews highlighting Exceptional delivery or strategy",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to retrieve review_id, emp_id, rating, and feedback from Performance_Reviews where feedback contains 'Exceptional' or 'Outstanding'.",
    requirements: [
      "Select review_id, emp_id, rating, feedback from Performance_Reviews.",
      "Filter with feedback LIKE '%Exceptional%' OR feedback LIKE '%Outstanding%'."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE feedback LIKE '%Exceptional%' OR feedback LIKE '%Outstanding%'",
    expectedSql: "SELECT review_id, emp_id, rating, feedback FROM Performance_Reviews WHERE feedback LIKE '%Exceptional%' OR feedback LIKE '%Outstanding%';",
    explanation: "Searches free-text appraisal commentary for positive recognition keywords.",
    tags: ["where", "like", "text-search"],
    estimatedTimeMinutes: 3
  },
  {
    id: 84,
    title: "Identify departments without the letter 'e' in their name",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to retrieve dept_id, dept_name, and location from Departments where dept_name does NOT contain the letter 'e' (case-insensitive in SQLite LIKE).",
    requirements: [
      "Select dept_id, dept_name, location from Departments.",
      "Filter with dept_name NOT LIKE '%e%'."
    ],
    tableName: "Departments",
    hint: "WHERE dept_name NOT LIKE '%e%'",
    expectedSql: "SELECT dept_id, dept_name, location FROM Departments WHERE dept_name NOT LIKE '%e%';",
    explanation: "NOT LIKE inverts wildcard pattern matching to exclude rows containing specific characters.",
    tags: ["where", "not-like", "strings"],
    estimatedTimeMinutes: 3
  },
  {
    id: 85,
    title: "Find employees with exactly 5-letter names ending in 'a'",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to retrieve emp_id, emp_name, and department from Employees where emp_name has exactly 5 characters and ends with the letter 'a'.",
    requirements: [
      "Select emp_id, emp_name, department from Employees.",
      "Use four underscore wildcards followed by 'a': emp_name LIKE '____a'."
    ],
    tableName: "Employees",
    hint: "WHERE emp_name LIKE '____a'",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_name LIKE '____a';",
    explanation: "Each underscore (_) wildcard matches exactly one single character in standard SQL pattern matching.",
    tags: ["where", "like", "underscore-wildcard"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Complex Numeric & Range Conditions (IDs 86 to 90)
  {
    id: 86,
    title: "Filter employees with annual gross base pay exceeding 600000",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to retrieve emp_id, emp_name, salary, and (salary * 12) AS annual_salary from Employees where (salary * 12) > 600000.",
    requirements: [
      "Calculate annual_salary as (salary * 12).",
      "Filter in WHERE with (salary * 12) > 600000.",
      "Select emp_id, emp_name, salary, (salary * 12) AS annual_salary."
    ],
    tableName: "Employees",
    hint: "WHERE (salary * 12) > 600000",
    expectedSql: "SELECT emp_id, emp_name, salary, (salary * 12) AS annual_salary FROM Employees WHERE (salary * 12) > 600000;",
    explanation: "Mathematical expressions can be calculated and compared directly within the WHERE predicate.",
    tags: ["where", "arithmetic", "numeric"],
    estimatedTimeMinutes: 3
  },
  {
    id: 87,
    title: "Detect project staffing outliers outside 20 to 35 weekly hours",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employee_Projects to retrieve emp_id, project_id, assigned_role, and hours_allocated where hours_allocated is either strictly less than 20 OR strictly greater than 35.",
    requirements: [
      "Query Employee_Projects.",
      "Filter with hours_allocated < 20 OR hours_allocated > 35.",
      "Select emp_id, project_id, assigned_role, hours_allocated."
    ],
    tableName: "Employee_Projects",
    hint: "WHERE hours_allocated < 20 OR hours_allocated > 35",
    expectedSql: "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects WHERE hours_allocated < 20 OR hours_allocated > 35;",
    explanation: "Disjunctive bounds locate entries falling outside the standard bell curve of staffing capacity.",
    tags: ["where", "range", "disjunction"],
    estimatedTimeMinutes: 3
  },
  {
    id: 88,
    title: "Find South-hub employees earning mid-range salaries",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to select emp_id, emp_name, city, and salary from Employees where city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000.",
    requirements: [
      "Select emp_id, emp_name, city, salary from Employees.",
      "Filter with city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000."
    ],
    tableName: "Employees",
    hint: "WHERE city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000",
    expectedSql: "SELECT emp_id, emp_name, city, salary FROM Employees WHERE city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000;",
    explanation: "Combining discrete location filtering with a bounded salary interval isolates targeted regional talent bands.",
    tags: ["where", "between", "in", "numeric"],
    estimatedTimeMinutes: 3
  },
  {
    id: 89,
    title: "Identify high-rated reviews with significant bonus payouts",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to select review_id, emp_id, rating, and bonus from Performance_Reviews where rating >= 4 AND bonus > 15000.",
    requirements: [
      "Select review_id, emp_id, rating, bonus from Performance_Reviews.",
      "Filter where rating >= 4 AND bonus > 15000."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE rating >= 4 AND bonus > 15000",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE rating >= 4 AND bonus > 15000;",
    explanation: "Joint thresholds ensure both qualitative rating score and quantitative financial payout are high.",
    tags: ["where", "numeric", "and"],
    estimatedTimeMinutes: 2
  },
  {
    id: 90,
    title: "Find experienced young professionals under age 30",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display emp_id, emp_name, age, and experience from Employees where age < 30 AND experience >= 5.",
    requirements: [
      "Select emp_id, emp_name, age, experience from Employees.",
      "Filter where age < 30 AND experience >= 5."
    ],
    tableName: "Employees",
    hint: "WHERE age < 30 AND experience >= 5",
    expectedSql: "SELECT emp_id, emp_name, age, experience FROM Employees WHERE age < 30 AND experience >= 5;",
    explanation: "Identifies early-career high achievers who have accumulated extensive domain experience.",
    tags: ["where", "comparison", "and"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Multi-Condition Logic & Precedence (IDs 91 to 95)
  {
    id: 91,
    title: "Evaluate complex department salary thresholds using parentheses",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to retrieve emp_id, emp_name, department, and salary for employees where (department = 'IT' AND salary > 50000) OR (department = 'HR' AND salary > 35000).",
    requirements: [
      "Select emp_id, emp_name, department, salary from Employees.",
      "Use explicit parentheses to group department-specific salary thresholds."
    ],
    tableName: "Employees",
    hint: "WHERE (department = 'IT' AND salary > 50000) OR (department = 'HR' AND salary > 35000)",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE (department = 'IT' AND salary > 50000) OR (department = 'HR' AND salary > 35000);",
    explanation: "Logical AND has higher precedence than OR. Parentheses eliminate ambiguity and guarantee intended business logic.",
    tags: ["where", "precedence", "parentheses", "and-or"],
    estimatedTimeMinutes: 4
  },
  {
    id: 92,
    title: "Filter priority initiatives across IT and Finance departments",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to select project_id, project_name, dept_id, and budget from Projects where (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000).",
    requirements: [
      "Query Projects table.",
      "Filter with (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000).",
      "Select project_id, project_name, dept_id, budget."
    ],
    tableName: "Projects",
    hint: "WHERE (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000)",
    expectedSql: "SELECT project_id, project_name, dept_id, budget FROM Projects WHERE (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000);",
    explanation: "Evaluates multi-department capital allocation criteria with distinct departmental expenditure thresholds.",
    tags: ["where", "precedence", "multi-condition"],
    estimatedTimeMinutes: 3
  },
  {
    id: 93,
    title: "Filter well-compensated experienced employees outside Hyderabad",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to retrieve emp_id, emp_name, city, salary, and experience from Employees where city != 'Hyderabad' AND salary > 40000 AND experience >= 3.",
    requirements: [
      "Select emp_id, emp_name, city, salary, experience from Employees.",
      "Filter where city != 'Hyderabad' AND salary > 40000 AND experience >= 3."
    ],
    tableName: "Employees",
    hint: "WHERE city != 'Hyderabad' AND salary > 40000 AND experience >= 3",
    expectedSql: "SELECT emp_id, emp_name, city, salary, experience FROM Employees WHERE city != 'Hyderabad' AND salary > 40000 AND experience >= 3;",
    explanation: "Applies negative equality alongside multiple positive numeric constraints across different attributes.",
    tags: ["where", "inequality", "and"],
    estimatedTimeMinutes: 3
  },
  {
    id: 94,
    title: "Locate elite 2024 reviews: Top rating OR substantial bonus",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Performance_Reviews to display review_id, emp_id, review_year, rating, and bonus for reviews in 2024 where rating = 5 OR (rating = 4 AND bonus >= 18000).",
    requirements: [
      "Select review_id, emp_id, review_year, rating, bonus from Performance_Reviews.",
      "Filter with review_year = 2024 AND (rating = 5 OR (rating = 4 AND bonus >= 18000))."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE review_year = 2024 AND (rating = 5 OR (rating = 4 AND bonus >= 18000))",
    expectedSql: "SELECT review_id, emp_id, review_year, rating, bonus FROM Performance_Reviews WHERE review_year = 2024 AND (rating = 5 OR (rating = 4 AND bonus >= 18000));",
    explanation: "Illustrates nested Boolean evaluation where the top score qualifies automatically, but second-tier scores require compensation verification.",
    tags: ["where", "precedence", "nested-logic"],
    estimatedTimeMinutes: 4
  },
  {
    id: 95,
    title: "Select recent joiners excluding the Sales division",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display emp_id, emp_name, department, and joining_year for employees who joined between 2020 and 2023 inclusive, but do NOT belong to 'Sales'.",
    requirements: [
      "Select emp_id, emp_name, department, joining_year from Employees.",
      "Filter with joining_year BETWEEN 2020 AND 2023 AND department != 'Sales'."
    ],
    tableName: "Employees",
    hint: "WHERE joining_year BETWEEN 2020 AND 2023 AND department != 'Sales'",
    expectedSql: "SELECT emp_id, emp_name, department, joining_year FROM Employees WHERE joining_year BETWEEN 2020 AND 2023 AND department != 'Sales';",
    explanation: "Combines inclusive range filtering on a temporal column with categorical exclusion.",
    tags: ["where", "between", "not-equal"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Set Membership & Exclusion (IDs 96 to 98)
  {
    id: 96,
    title: "Filter employees stationed outside major tech headquarters",
    topic: "WHERE & Operators",
    subtopic: "Set Membership & Exclusion",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display emp_id, emp_name, city, and department for employees stationed in cities NOT IN ('Hyderabad', 'Bengaluru').",
    requirements: [
      "Select emp_id, emp_name, city, department from Employees.",
      "Filter with city NOT IN ('Hyderabad', 'Bengaluru')."
    ],
    tableName: "Employees",
    hint: "WHERE city NOT IN ('Hyderabad', 'Bengaluru')",
    expectedSql: "SELECT emp_id, emp_name, city, department FROM Employees WHERE city NOT IN ('Hyderabad', 'Bengaluru');",
    explanation: "NOT IN excludes entire sets of categorical literals in a single clean expression.",
    tags: ["where", "not-in", "filtering"],
    estimatedTimeMinutes: 2
  },
  {
    id: 97,
    title: "Isolate non-terminal projects still undergoing execution or planning",
    topic: "WHERE & Operators",
    subtopic: "Set Membership & Exclusion",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display project_id, project_name, and status from Projects where status NOT IN ('Completed', 'On Hold').",
    requirements: [
      "Select project_id, project_name, status from Projects.",
      "Filter with status NOT IN ('Completed', 'On Hold')."
    ],
    tableName: "Projects",
    hint: "WHERE status NOT IN ('Completed', 'On Hold')",
    expectedSql: "SELECT project_id, project_name, status FROM Projects WHERE status NOT IN ('Completed', 'On Hold');",
    explanation: "Excludes closed or paused project states to display active workstreams.",
    tags: ["where", "not-in", "status"],
    estimatedTimeMinutes: 2
  },
  {
    id: 98,
    title: "Identify polarized performance reviews (underperforming or top tier)",
    topic: "WHERE & Operators",
    subtopic: "Set Membership & Exclusion",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display review_id, emp_id, rating, and feedback from Performance_Reviews where rating IN (1, 2, 5).",
    requirements: [
      "Select review_id, emp_id, rating, feedback from Performance_Reviews.",
      "Filter with rating IN (1, 2, 5)."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE rating IN (1, 2, 5)",
    expectedSql: "SELECT review_id, emp_id, rating, feedback FROM Performance_Reviews WHERE rating IN (1, 2, 5);",
    explanation: "IN matches discrete non-contiguous numeric values to isolate boundary performance outcomes.",
    tags: ["where", "in", "numeric-sets"],
    estimatedTimeMinutes: 3
  }
];
