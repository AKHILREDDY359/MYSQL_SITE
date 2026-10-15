export const TOPIC3_QUESTIONS = [
  // Subtopic: Single-Column Sorting (IDs 99 to 102)
  {
    id: 99,
    title: "Sort corporate departments alphabetically by geographical location",
    topic: "Sorting & Limiting",
    subtopic: "Single-Column Sorting",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display dept_name, location, and budget from Departments ordered alphabetically by location in ascending order.",
    requirements: [
      "Select dept_name, location, budget from Departments.",
      "Sort by location ASC."
    ],
    tableName: "Departments",
    hint: "ORDER BY location ASC",
    expectedSql: "SELECT dept_name, location, budget FROM Departments ORDER BY location ASC;",
    explanation: "ASC sorts textual data in lexicographical alphabetical sequence from A to Z.",
    tags: ["order-by", "sorting", "asc"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 100,
    title: "Rank capital initiatives by total budget descending",
    topic: "Sorting & Limiting",
    subtopic: "Single-Column Sorting",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display project_id, project_name, and budget from Projects ordered from highest budget to lowest budget.",
    requirements: [
      "Select project_id, project_name, budget from Projects.",
      "Sort by budget DESC."
    ],
    tableName: "Projects",
    hint: "ORDER BY budget DESC",
    expectedSql: "SELECT project_id, project_name, budget FROM Projects ORDER BY budget DESC;",
    explanation: "DESC sorts numeric columns in descending order, placing the largest numbers at the top.",
    tags: ["order-by", "sorting", "desc"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 101,
    title: "Order performance reviews by awarded bonus payout descending",
    topic: "Sorting & Limiting",
    subtopic: "Single-Column Sorting",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display review_id, emp_id, rating, and bonus from Performance_Reviews where bonus IS NOT NULL ordered by bonus in descending order.",
    requirements: [
      "Filter where bonus IS NOT NULL.",
      "Select review_id, emp_id, rating, bonus.",
      "Order results by bonus DESC."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE bonus IS NOT NULL ORDER BY bonus DESC",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL ORDER BY bonus DESC;",
    explanation: "Filters out unassigned bonuses first, then orders the awarded compensation packages from highest to lowest.",
    tags: ["order-by", "sorting", "null-handling"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 102,
    title: "List project staff allocations by allocated weekly hours ascending",
    topic: "Sorting & Limiting",
    subtopic: "Single-Column Sorting",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display emp_id, project_id, assigned_role, and hours_allocated from Employee_Projects ordered by hours_allocated in ascending order.",
    requirements: [
      "Select emp_id, project_id, assigned_role, hours_allocated from Employee_Projects.",
      "Sort by hours_allocated ASC."
    ],
    tableName: "Employee_Projects",
    hint: "ORDER BY hours_allocated ASC",
    expectedSql: "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects ORDER BY hours_allocated ASC;",
    explanation: "Ascending sort surfaces part-time or low-commitment assignments before full-time allocations.",
    tags: ["order-by", "sorting", "asc"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },

  // Subtopic: Multi-Column Hierarchical Ordering (IDs 103 to 106)
  {
    id: 103,
    title: "Organize staff by department ascending, then salary descending",
    topic: "Sorting & Limiting",
    subtopic: "Multi-Column Hierarchical Ordering",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display emp_id, emp_name, department, and salary from Employees ordered primarily by department in ascending order, and secondarily by salary in descending order.",
    requirements: [
      "Select emp_id, emp_name, department, salary from Employees.",
      "Order by department ASC, salary DESC."
    ],
    tableName: "Employees",
    hint: "ORDER BY department ASC, salary DESC",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees ORDER BY department ASC, salary DESC;",
    explanation: "Multi-column sorting evaluates criteria left-to-right, grouping departments together and ranking internal compensations within each division.",
    tags: ["order-by", "multi-column", "sorting"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 104,
    title: "Sort performance reviews by rating descending, then year ascending",
    topic: "Sorting & Limiting",
    subtopic: "Multi-Column Hierarchical Ordering",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to select review_id, emp_id, rating, and review_year from Performance_Reviews ordered first by rating descending, then by review_year ascending.",
    requirements: [
      "Select review_id, emp_id, rating, review_year from Performance_Reviews.",
      "Order by rating DESC, review_year ASC."
    ],
    tableName: "Performance_Reviews",
    hint: "ORDER BY rating DESC, review_year ASC",
    expectedSql: "SELECT review_id, emp_id, rating, review_year FROM Performance_Reviews ORDER BY rating DESC, review_year ASC;",
    explanation: "Allows appraisal evaluators to view top performers first, organized chronologically from earliest review to latest.",
    tags: ["order-by", "multi-column", "hierarchical"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 105,
    title: "Group initiatives by status ascending, then start date descending",
    topic: "Sorting & Limiting",
    subtopic: "Multi-Column Hierarchical Ordering",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display project_id, project_name, status, and start_date from Projects ordered by status in ascending order, then by start_date in descending order.",
    requirements: [
      "Select project_id, project_name, status, start_date from Projects.",
      "Order by status ASC, start_date DESC."
    ],
    tableName: "Projects",
    hint: "ORDER BY status ASC, start_date DESC",
    expectedSql: "SELECT project_id, project_name, status, start_date FROM Projects ORDER BY status ASC, start_date DESC;",
    explanation: "Clusters projects having the same operational status while displaying recently launched initiatives at the head of each cluster.",
    tags: ["order-by", "multi-column", "date-sorting"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 106,
    title: "Triple-level sorting: City ascending, experience descending, name ascending",
    topic: "Sorting & Limiting",
    subtopic: "Multi-Column Hierarchical Ordering",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display emp_id, emp_name, city, and experience from Employees ordered by city ASC, then experience DESC, and finally emp_name ASC as a tie-breaker.",
    requirements: [
      "Select emp_id, emp_name, city, experience from Employees.",
      "Order by city ASC, experience DESC, emp_name ASC."
    ],
    tableName: "Employees",
    hint: "ORDER BY city ASC, experience DESC, emp_name ASC",
    expectedSql: "SELECT emp_id, emp_name, city, experience FROM Employees ORDER BY city ASC, experience DESC, emp_name ASC;",
    explanation: "A three-level sort completely eliminates arbitrary row ordering when dealing with identical cities and experience levels.",
    tags: ["order-by", "multi-column", "tie-breaker"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  },

  // Subtopic: Pagination & Offset-based Retrieval (IDs 107 to 110)
  {
    id: 107,
    title: "Retrieve the top 3 highest-funded corporate initiatives",
    topic: "Sorting & Limiting",
    subtopic: "Pagination & Offset-based Retrieval",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display project_id, project_name, and budget for the top 3 projects having the highest budget.",
    requirements: [
      "Select project_id, project_name, budget from Projects.",
      "Order by budget DESC.",
      "Limit the output to 3 rows."
    ],
    tableName: "Projects",
    hint: "ORDER BY budget DESC LIMIT 3",
    expectedSql: "SELECT project_id, project_name, budget FROM Projects ORDER BY budget DESC LIMIT 3;",
    explanation: "LIMIT restricts the size of the final result set, which is combined with ORDER BY for Top-N analysis.",
    tags: ["limit", "order-by", "top-n"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 108,
    title: "Implement database pagination: Page 2 of top salaried employees",
    topic: "Sorting & Limiting",
    subtopic: "Pagination & Offset-based Retrieval",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to fetch Page 2 of employees ordered by salary descending (Page size: 5, Offset: 5). Display emp_id, emp_name, department, and salary.",
    requirements: [
      "Select emp_id, emp_name, department, salary from Employees.",
      "Order by salary DESC.",
      "Use LIMIT 5 OFFSET 5."
    ],
    tableName: "Employees",
    hint: "ORDER BY salary DESC LIMIT 5 OFFSET 5",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 5 OFFSET 5;",
    explanation: "OFFSET skips a specified number of leading records before returning rows, which powers web UI pagination.",
    tags: ["limit", "offset", "pagination"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 109,
    title: "Pagination Page 2 for projects sorted by ID ascending",
    topic: "Sorting & Limiting",
    subtopic: "Pagination & Offset-based Retrieval",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to retrieve 3 projects starting after the third project, ordered by project_id ascending.",
    requirements: [
      "Select project_id, project_name, status from Projects.",
      "Order by project_id ASC.",
      "Use LIMIT 3 OFFSET 3."
    ],
    tableName: "Projects",
    hint: "ORDER BY project_id ASC LIMIT 3 OFFSET 3",
    expectedSql: "SELECT project_id, project_name, status FROM Projects ORDER BY project_id ASC LIMIT 3 OFFSET 3;",
    explanation: "Standard deterministic pagination requires ordering by a unique key such as project_id.",
    tags: ["limit", "offset", "pagination"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 110,
    title: "Identify the 2 lowest-capacity project assignments",
    topic: "Sorting & Limiting",
    subtopic: "Pagination & Offset-based Retrieval",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display emp_id, project_id, assigned_role, and hours_allocated for the 2 project assignments with the lowest hours allocated. Use emp_id ascending as tie-breaker.",
    requirements: [
      "Select emp_id, project_id, assigned_role, hours_allocated from Employee_Projects.",
      "Order by hours_allocated ASC, emp_id ASC.",
      "Limit the result to 2 records."
    ],
    tableName: "Employee_Projects",
    hint: "ORDER BY hours_allocated ASC, emp_id ASC LIMIT 2",
    expectedSql: "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects ORDER BY hours_allocated ASC, emp_id ASC LIMIT 2;",
    explanation: "Bottom-N analysis sorts in ascending order with a strict LIMIT threshold and deterministic secondary key.",
    tags: ["limit", "bottom-n", "tie-breaker"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },

  // Subtopic: NULL Precedence & Calculated Expressions in ORDER BY (IDs 111 to 113)
  {
    id: 111,
    title: "Order performance reviews placing NULL bonuses at the bottom",
    topic: "Sorting & Limiting",
    subtopic: "NULL Precedence & Calculated Expressions in ORDER BY",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display review_id, emp_id, rating, and bonus from Performance_Reviews ordered by bonus descending, but forcing NULL bonuses to appear at the end.",
    requirements: [
      "Select review_id, emp_id, rating, bonus from Performance_Reviews.",
      "Order with CASE WHEN bonus IS NULL THEN 1 ELSE 0 END ASC, bonus DESC."
    ],
    tableName: "Performance_Reviews",
    hint: "ORDER BY CASE WHEN bonus IS NULL THEN 1 ELSE 0 END, bonus DESC",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews ORDER BY CASE WHEN bonus IS NULL THEN 1 ELSE 0 END, bonus DESC;",
    explanation: "In SQLite/MySQL, ordering by a boolean CASE expression before the target column explicitly controls NULL placement.",
    tags: ["order-by", "null-precedence", "case"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  },
  {
    id: 112,
    title: "Sort employees by computed annual compensation descending",
    topic: "Sorting & Limiting",
    subtopic: "NULL Precedence & Calculated Expressions in ORDER BY",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display emp_id, emp_name, salary, and (salary * 12) AS annual_salary from Employees ordered by (salary * 12) in descending order.",
    requirements: [
      "Compute annual_salary as (salary * 12).",
      "Order by (salary * 12) DESC.",
      "Select emp_id, emp_name, salary, (salary * 12) AS annual_salary."
    ],
    tableName: "Employees",
    hint: "ORDER BY (salary * 12) DESC",
    expectedSql: "SELECT emp_id, emp_name, salary, (salary * 12) AS annual_salary FROM Employees ORDER BY (salary * 12) DESC;",
    explanation: "SQL allows expressions in the ORDER BY clause, computing sorts dynamically on runtime projections.",
    tags: ["order-by", "calculated-column", "arithmetic"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 113,
    title: "Rank top 5 employees by salary-to-experience efficiency ratio",
    topic: "Sorting & Limiting",
    subtopic: "NULL Precedence & Calculated Expressions in ORDER BY",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display emp_id, emp_name, salary, experience, and ROUND(salary / experience, 2) AS pay_per_year_exp for employees with experience > 0, ordered by (salary / experience) descending, limited to 5 records.",
    requirements: [
      "Filter where experience > 0.",
      "Calculate ROUND(salary / experience, 2) AS pay_per_year_exp.",
      "Order by (salary / experience) DESC.",
      "LIMIT 5."
    ],
    tableName: "Employees",
    hint: "WHERE experience > 0 ORDER BY (salary / experience) DESC LIMIT 5",
    expectedSql: "SELECT emp_id, emp_name, salary, experience, ROUND(salary / experience, 2) AS pay_per_year_exp FROM Employees WHERE experience > 0 ORDER BY (salary / experience) DESC LIMIT 5;",
    explanation: "Computes pay yield per unit of experience and retrieves the 5 steepest compensation-to-tenure trajectories.",
    tags: ["order-by", "ratio", "calculated-column", "limit"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  }
];
