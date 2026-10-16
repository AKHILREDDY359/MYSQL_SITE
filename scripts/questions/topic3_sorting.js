export const TOPIC3_QUESTIONS = [
  // Subtopic: Single-Column Sorting (IDs 99 to 102)
  {
    id: 99,
    title: "Geographical Directory of Corporate Divisions",
    topic: "Sorting & Limiting",
    subtopic: "Single-Column Sorting",
    difficulty: "Beginner",
    problemStatement: "Corporate facilities requires an organized index of operational divisions. Display the department name, office location, and budget from the Departments table, sorted alphabetically by geographical location.",
    requirements: [
      "Select `dept_name`, `location`, and `budget` from Departments.",
      "Sort the records by location in alphabetical ascending order (A to Z)."
    ],
    tableName: "Departments",
    hint: "Sort the output by the location column in ascending direction.",
    expectedSql: "SELECT dept_name, location, budget FROM Departments ORDER BY location ASC;",
    explanation: "ASC sorts textual data in lexicographical alphabetical sequence from A to Z.",
    tags: ["order-by", "sorting", "asc"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 100,
    title: "Capital Project Investment Ranking",
    topic: "Sorting & Limiting",
    subtopic: "Single-Column Sorting",
    difficulty: "Beginner",
    problemStatement: "The investment committee is reviewing corporate capital allocations. Display the project ID, project name, and total budget for all projects, ranked from the highest-funded initiative to the lowest.",
    requirements: [
      "Select `project_id`, `project_name`, and `budget` from Projects.",
      "Order results by budget from largest to smallest (descending)."
    ],
    tableName: "Projects",
    hint: "Sort by the budget column in descending order.",
    expectedSql: "SELECT project_id, project_name, budget FROM Projects ORDER BY budget DESC;",
    explanation: "DESC sorts numeric columns in descending order, placing the largest numbers at the top.",
    tags: ["order-by", "sorting", "desc"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 101,
    title: "Annual Incentive Payout Leaderboard",
    topic: "Sorting & Limiting",
    subtopic: "Single-Column Sorting",
    difficulty: "Easy",
    problemStatement: "Payroll leadership is auditing approved performance bonuses. Retrieve review ID, employee ID, rating, and bonus for all evaluations with an awarded bonus, ordered from the highest bonus amount to the lowest.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Filter for evaluations that have an awarded bonus.",
      "Display `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Sort the records by bonus in descending order."
    ],
    tableName: "Performance_Reviews",
    hint: "Exclude null bonuses and sort descending by the bonus field.",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL ORDER BY bonus DESC;",
    explanation: "Filters out unassigned bonuses first, then orders the awarded compensation packages from highest to lowest.",
    tags: ["order-by", "sorting", "null-handling"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 102,
    title: "Resource Allocation Workload Queue",
    topic: "Sorting & Limiting",
    subtopic: "Single-Column Sorting",
    difficulty: "Easy",
    problemStatement: "Project operations is reviewing weekly staffing commitments. Retrieve employee ID, project ID, assigned role, and allocated hours from Employee_Projects, ordered from the lightest weekly commitment to the heaviest.",
    requirements: [
      "Select `emp_id`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Order the output by allocated hours in ascending order (lowest first)."
    ],
    tableName: "Employee_Projects",
    hint: "Sort by hours_allocated in ascending direction.",
    expectedSql: "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects ORDER BY hours_allocated ASC;",
    explanation: "Ascending sort surfaces part-time or low-commitment assignments before full-time allocations.",
    tags: ["order-by", "sorting", "asc"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },

  // Subtopic: Multi-Column Hierarchical Ordering (IDs 103 to 106)
  {
    id: 103,
    title: "Hierarchical Departmental Compensation Order",
    topic: "Sorting & Limiting",
    subtopic: "Multi-Column Hierarchical Ordering",
    difficulty: "Easy",
    problemStatement: "The executive compensation committee requires an organized workforce directory. Display employee ID, name, department, and salary, organized primarily by department alphabetically (A to Z) and secondarily by salary from highest to lowest within each department.",
    requirements: [
      "Select `emp_id`, `emp_name`, `department`, and `salary` from Employees.",
      "Apply primary sorting on department in alphabetical ascending order.",
      "Apply secondary sorting on salary in descending order."
    ],
    tableName: "Employees",
    hint: "Specify multiple sort criteria: department ascending followed by salary descending.",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees ORDER BY department ASC, salary DESC;",
    explanation: "Multi-column sorting evaluates criteria left-to-right, grouping departments together and ranking internal compensations within each division.",
    tags: ["order-by", "multi-column", "sorting"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 104,
    title: "Historical Performance Appraisal Chronology",
    topic: "Sorting & Limiting",
    subtopic: "Multi-Column Hierarchical Ordering",
    difficulty: "Medium",
    problemStatement: "Talent development is reviewing employee appraisal trajectories. Display review ID, employee ID, rating, and review year, sorted primarily by rating from highest to lowest, and secondarily chronologically by review year from earliest to latest.",
    requirements: [
      "Select `review_id`, `emp_id`, `rating`, and `review_year` from Performance_Reviews.",
      "Sort primarily by rating in descending order.",
      "Sort secondarily by review year in ascending order."
    ],
    tableName: "Performance_Reviews",
    hint: "Sort by rating descending, then by review_year ascending.",
    expectedSql: "SELECT review_id, emp_id, rating, review_year FROM Performance_Reviews ORDER BY rating DESC, review_year ASC;",
    explanation: "Allows appraisal evaluators to view top performers first, organized chronologically from earliest review to latest.",
    tags: ["order-by", "multi-column", "hierarchical"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 105,
    title: "Lifecycle Status Initiative Timeline",
    topic: "Sorting & Limiting",
    subtopic: "Multi-Column Hierarchical Ordering",
    difficulty: "Medium",
    problemStatement: "The PMO is reviewing corporate projects grouped by current state. Retrieve project ID, name, status, and start date, ordered primarily by project status alphabetically, and secondarily by start date from most recent to oldest.",
    requirements: [
      "Select `project_id`, `project_name`, `status`, and `start_date` from Projects.",
      "Sort primarily by status in alphabetical ascending order.",
      "Sort secondarily by start date in descending order (newest first)."
    ],
    tableName: "Projects",
    hint: "Order by status ASC and start_date DESC.",
    expectedSql: "SELECT project_id, project_name, status, start_date FROM Projects ORDER BY status ASC, start_date DESC;",
    explanation: "Clusters projects having the same operational status while displaying recently launched initiatives at the head of each cluster.",
    tags: ["order-by", "multi-column", "date-sorting"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 106,
    title: "Tri-Factor Talent Distribution Hierarchy",
    topic: "Sorting & Limiting",
    subtopic: "Multi-Column Hierarchical Ordering",
    difficulty: "Hard",
    problemStatement: "HR analytics requires a structured talent roster across office locations. Display employee ID, name, city, and years of experience, ordered primarily by city (A to Z), secondarily by experience from most seasoned to junior, and finally alphabetically by employee name.",
    requirements: [
      "Select `emp_id`, `emp_name`, `city`, and `experience` from Employees.",
      "Sort primarily by city ascending, secondarily by experience descending, and thirdly by employee name ascending."
    ],
    tableName: "Employees",
    hint: "Provide three ordering expressions separated by commas with their respective directions.",
    expectedSql: "SELECT emp_id, emp_name, city, experience FROM Employees ORDER BY city ASC, experience DESC, emp_name ASC;",
    explanation: "A three-level sort completely eliminates arbitrary row ordering when dealing with identical cities and experience levels.",
    tags: ["order-by", "multi-column", "tie-breaker"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  },

  // Subtopic: Pagination & Offset-based Retrieval (IDs 107 to 110)
  {
    id: 107,
    title: "Top Three Capital-Intensive Programs",
    topic: "Sorting & Limiting",
    subtopic: "Pagination & Offset-based Retrieval",
    difficulty: "Easy",
    problemStatement: "Executive governance requires a briefing on the company's three largest capital commitments. Display the project ID, project name, and budget for the 3 highest-budget projects in the portfolio.",
    requirements: [
      "Display `project_id`, `project_name`, and `budget` from Projects.",
      "Order projects by budget from highest to lowest.",
      "Limit the returned records to exactly the top 3 initiatives."
    ],
    tableName: "Projects",
    hint: "Sort by budget descending and restrict the row count to 3.",
    expectedSql: "SELECT project_id, project_name, budget FROM Projects ORDER BY budget DESC LIMIT 3;",
    explanation: "LIMIT restricts the size of the final result set, which is combined with ORDER BY for Top-N analysis.",
    tags: ["limit", "order-by", "top-n"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 108,
    title: "Executive Compensation Pagination (Page 2)",
    topic: "Sorting & Limiting",
    subtopic: "Pagination & Offset-based Retrieval",
    difficulty: "Medium",
    problemStatement: "The administrative reporting portal displays workforce payroll across multiple pages, with 5 records per page. Produce Page 2 of the company payroll ranking, showing employees ranked by salary descending (records 6 through 10).",
    requirements: [
      "Select `emp_id`, `emp_name`, `department`, and `salary` from Employees.",
      "Sort by salary in descending order.",
      "Retrieve exactly 5 records, skipping the first 5 highest earners."
    ],
    tableName: "Employees",
    hint: "Combine a row count limit of 5 with an offset of 5 rows.",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 5 OFFSET 5;",
    explanation: "OFFSET skips a specified number of leading records before returning rows, which powers web UI pagination.",
    tags: ["limit", "offset", "pagination"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 109,
    title: "Project Catalog Pagination (Page 2)",
    topic: "Sorting & Limiting",
    subtopic: "Pagination & Offset-based Retrieval",
    difficulty: "Easy",
    problemStatement: "The project tracking system renders initiatives in pages of 3 items sorted by ID ascending. Generate Page 2 of the catalog (projects 4, 5, and 6).",
    requirements: [
      "Display `project_id`, `project_name`, and `status` from Projects.",
      "Sort by `project_id` in ascending order.",
      "Fetch 3 records after skipping the first 3."
    ],
    tableName: "Projects",
    hint: "Sort by project_id ascending and use pagination to fetch 3 rows after skipping 3.",
    expectedSql: "SELECT project_id, project_name, status FROM Projects ORDER BY project_id ASC LIMIT 3 OFFSET 3;",
    explanation: "Standard deterministic pagination requires ordering by a unique key such as project_id.",
    tags: ["limit", "offset", "pagination"],
    requiresOrder: true,
    estimatedTimeMinutes: 2
  },
  {
    id: 110,
    title: "Lowest Weekly Capacity Allocations",
    topic: "Sorting & Limiting",
    subtopic: "Pagination & Offset-based Retrieval",
    difficulty: "Medium",
    problemStatement: "Resource management is identifying lightweight project commitments. Find the 2 assignments with the fewest allocated weekly hours in Employee_Projects, breaking ties by employee ID ascending.",
    requirements: [
      "Select `emp_id`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Order primarily by allocated hours ascending and secondarily by employee ID ascending.",
      "Limit the result to the 2 lowest allocations."
    ],
    tableName: "Employee_Projects",
    hint: "Sort by hours_allocated ASC, emp_id ASC and limit the output to 2 rows.",
    expectedSql: "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects ORDER BY hours_allocated ASC, emp_id ASC LIMIT 2;",
    explanation: "Bottom-N analysis sorts in ascending order with a strict LIMIT threshold and deterministic secondary key.",
    tags: ["limit", "bottom-n", "tie-breaker"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },

  // Subtopic: NULL Precedence & Calculated Expressions in ORDER BY (IDs 111 to 113)
  {
    id: 111,
    title: "Incentive Leaderboard with Null Deprioritization",
    topic: "Sorting & Limiting",
    subtopic: "NULL Precedence & Calculated Expressions in ORDER BY",
    difficulty: "Hard",
    problemStatement: "Executive dashboards rank performance bonuses but require that reviews without any awarded bonus appear at the very bottom of the list. Display review ID, employee ID, rating, and bonus, ordering by bonus from highest to lowest while placing unassigned bonuses last.",
    requirements: [
      "Select `review_id`, `emp_id`, `rating`, and `bonus` from Performance_Reviews.",
      "Order so that reviews with confirmed bonuses appear first, sorted by bonus descending.",
      "Ensure all evaluations with unassigned bonuses (NULL) appear at the bottom."
    ],
    tableName: "Performance_Reviews",
    hint: "Use a conditional ordering expression to flag null bonuses, followed by bonus descending.",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews ORDER BY CASE WHEN bonus IS NULL THEN 1 ELSE 0 END, bonus DESC;",
    explanation: "In SQLite/MySQL, ordering by a boolean CASE expression before the target column explicitly controls NULL placement.",
    tags: ["order-by", "null-precedence", "case"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  },
  {
    id: 112,
    title: "Annualized Workforce Compensation Ranking",
    topic: "Sorting & Limiting",
    subtopic: "NULL Precedence & Calculated Expressions in ORDER BY",
    difficulty: "Medium",
    problemStatement: "Financial modeling is analyzing annualized employee cost rankings. Display each employee's ID, name, monthly salary, and calculated annual salary (salary * 12), ordered from the highest annual compensation to the lowest.",
    requirements: [
      "Select `emp_id`, `emp_name`, `salary`, and computed annual salary aliased as `annual_salary`.",
      "Sort the records by the computed annual salary in descending order."
    ],
    tableName: "Employees",
    hint: "Order the output by the calculated annual compensation expression in descending order.",
    expectedSql: "SELECT emp_id, emp_name, salary, (salary * 12) AS annual_salary FROM Employees ORDER BY (salary * 12) DESC;",
    explanation: "SQL allows expressions in the ORDER BY clause, computing sorts dynamically on runtime projections.",
    tags: ["order-by", "calculated-column", "arithmetic"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 113,
    title: "Compensation-to-Experience Efficiency Ratio",
    topic: "Sorting & Limiting",
    subtopic: "NULL Precedence & Calculated Expressions in ORDER BY",
    difficulty: "Hard",
    problemStatement: "Compensation analytics evaluates talent return on investment by comparing salary to career tenure. For employees with at least 1 year of experience, calculate the compensation-to-experience ratio (salary divided by experience, rounded to 2 decimal places), and identify the top 5 highest-ratio staff members.",
    requirements: [
      "Query the Employees table, filtering for employees with `experience > 0`.",
      "Display `emp_id`, `emp_name`, `salary`, `experience`, and the calculated ratio aliased as `pay_per_year_exp`.",
      "Order by the pay-to-experience ratio in descending order.",
      "Limit the final output to the top 5 records."
    ],
    tableName: "Employees",
    hint: "Compute salary / experience, sort descending by the expression, and limit to 5 rows.",
    expectedSql: "SELECT emp_id, emp_name, salary, experience, ROUND(salary / experience, 2) AS pay_per_year_exp FROM Employees WHERE experience > 0 ORDER BY (salary / experience) DESC LIMIT 5;",
    explanation: "Computes pay yield per unit of experience and retrieves the 5 steepest compensation-to-tenure trajectories.",
    tags: ["order-by", "ratio", "calculated-column", "limit"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  }
];
