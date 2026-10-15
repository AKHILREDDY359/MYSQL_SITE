export const TOPIC4_QUESTIONS = [
  // Subtopic: Multi-Metric Aggregate Summaries (IDs 114 to 118)
  {
    id: 114,
    title: "Produce an enterprise payroll statistical overview",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query from Employees to display MIN(salary) AS min_sal, MAX(salary) AS max_sal, ROUND(AVG(salary), 2) AS avg_sal, and SUM(salary) AS total_payroll across the entire workforce.",
    requirements: [
      "Query the Employees table.",
      "Calculate min_sal, max_sal, avg_sal (rounded to 2 decimal places), and total_payroll.",
      "Return a single summary record."
    ],
    tableName: "Employees",
    hint: "SELECT MIN(salary) AS min_sal, MAX(salary) AS max_sal, ROUND(AVG(salary), 2) AS avg_sal, SUM(salary) AS total_payroll FROM Employees;",
    expectedSql: "SELECT MIN(salary) AS min_sal, MAX(salary) AS max_sal, ROUND(AVG(salary), 2) AS avg_sal, SUM(salary) AS total_payroll FROM Employees;",
    explanation: "Multiple aggregate functions can be executed in a single query to compute comprehensive statistical benchmarks across a table.",
    tags: ["aggregates", "min", "max", "avg", "sum"],
    estimatedTimeMinutes: 2
  },
  {
    id: 115,
    title: "Calculate total and average operating budgets across all departments",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query from Departments to display SUM(budget) AS total_dept_budget, ROUND(AVG(budget), 2) AS avg_dept_budget, and MAX(budget) AS max_dept_budget.",
    requirements: [
      "Query Departments table.",
      "Calculate total_dept_budget, avg_dept_budget (rounded to 2 decimals), and max_dept_budget.",
      "Return one row."
    ],
    tableName: "Departments",
    hint: "SELECT SUM(budget) AS total_dept_budget, ROUND(AVG(budget), 2) AS avg_dept_budget, MAX(budget) AS max_dept_budget FROM Departments;",
    expectedSql: "SELECT SUM(budget) AS total_dept_budget, ROUND(AVG(budget), 2) AS avg_dept_budget, MAX(budget) AS max_dept_budget FROM Departments;",
    explanation: "Aggregates numerical budget allocations to summarize overall enterprise operational capital.",
    tags: ["aggregates", "sum", "avg", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 116,
    title: "Audit performance bonuses: Total recipient count, pool, and average",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Performance_Reviews to display COUNT(bonus) AS bonus_count, SUM(bonus) AS total_bonus_payout, and ROUND(AVG(bonus), 2) AS avg_bonus_payout.",
    requirements: [
      "Query Performance_Reviews.",
      "Use COUNT(bonus) to ignore NULL bonuses.",
      "Calculate total_bonus_payout and avg_bonus_payout rounded to 2 decimal places."
    ],
    tableName: "Performance_Reviews",
    hint: "SELECT COUNT(bonus) AS bonus_count, SUM(bonus) AS total_bonus_payout, ROUND(AVG(bonus), 2) AS avg_bonus_payout FROM Performance_Reviews;",
    expectedSql: "SELECT COUNT(bonus) AS bonus_count, SUM(bonus) AS total_bonus_payout, ROUND(AVG(bonus), 2) AS avg_bonus_payout FROM Performance_Reviews;",
    explanation: "COUNT(column) automatically ignores NULL values, contrasting with COUNT(*) which counts all rows.",
    tags: ["aggregates", "count", "null-handling", "sum", "avg"],
    estimatedTimeMinutes: 2
  },
  {
    id: 117,
    title: "Calculate total capital committed to active projects",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Projects to count the number of active projects and calculate their total combined budget. Alias as active_projects and total_active_budget.",
    requirements: [
      "Filter where status = 'Active'.",
      "Calculate COUNT(*) AS active_projects and SUM(budget) AS total_active_budget."
    ],
    tableName: "Projects",
    hint: "WHERE status = 'Active'",
    expectedSql: "SELECT COUNT(*) AS active_projects, SUM(budget) AS total_active_budget FROM Projects WHERE status = 'Active';",
    explanation: "Applies a WHERE filter before aggregating to restrict calculations strictly to active corporate projects.",
    tags: ["aggregates", "where", "sum", "count"],
    estimatedTimeMinutes: 2
  },
  {
    id: 118,
    title: "Compute enterprise weekly project hours and average workload",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employee_Projects to calculate SUM(hours_allocated) AS total_weekly_hours and ROUND(AVG(hours_allocated), 2) AS avg_weekly_hours across all assignments.",
    requirements: [
      "Query Employee_Projects table.",
      "Alias aggregates as total_weekly_hours and avg_weekly_hours.",
      "Round average to 2 decimal places."
    ],
    tableName: "Employee_Projects",
    hint: "SELECT SUM(hours_allocated) AS total_weekly_hours, ROUND(AVG(hours_allocated), 2) AS avg_weekly_hours FROM Employee_Projects;",
    expectedSql: "SELECT SUM(hours_allocated) AS total_weekly_hours, ROUND(AVG(hours_allocated), 2) AS avg_weekly_hours FROM Employee_Projects;",
    explanation: "Measures aggregate human resource capacity committed across active initiatives.",
    tags: ["aggregates", "workload", "sum", "avg"],
    estimatedTimeMinutes: 2
  },

  // Subtopic: Conditional Aggregation & CASE in Aggregates (IDs 119 to 123)
  {
    id: 119,
    title: "Count IT vs Non-IT staff in a single row using conditional aggregation",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display the count of IT staff aliased as it_count and non-IT staff aliased as non_it_count in a single record.",
    requirements: [
      "Use SUM(CASE WHEN department = 'IT' THEN 1 ELSE 0 END) AS it_count.",
      "Use SUM(CASE WHEN department != 'IT' THEN 1 ELSE 0 END) AS non_it_count.",
      "Query from Employees."
    ],
    tableName: "Employees",
    hint: "SUM(CASE WHEN department = 'IT' THEN 1 ELSE 0 END) AS it_count",
    expectedSql: "SELECT SUM(CASE WHEN department = 'IT' THEN 1 ELSE 0 END) AS it_count, SUM(CASE WHEN department != 'IT' THEN 1 ELSE 0 END) AS non_it_count FROM Employees;",
    explanation: "Conditional aggregation (CASE inside SUM/COUNT) pivots categorical counts into dedicated output columns.",
    tags: ["aggregates", "conditional-aggregation", "case"],
    estimatedTimeMinutes: 3
  },
  {
    id: 120,
    title: "Compare payroll distribution between senior and junior workforce",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to calculate total salary paid to experienced employees (experience >= 5) as senior_payroll, and to junior employees (experience < 5) as junior_payroll.",
    requirements: [
      "Use SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END) AS senior_payroll.",
      "Use SUM(CASE WHEN experience < 5 THEN salary ELSE 0 END) AS junior_payroll.",
      "Return a single summary row."
    ],
    tableName: "Employees",
    hint: "SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END) AS senior_payroll",
    expectedSql: "SELECT SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END) AS senior_payroll, SUM(CASE WHEN experience < 5 THEN salary ELSE 0 END) AS junior_payroll FROM Employees;",
    explanation: "Conditionally sums quantitative values based on logical boundary conditions.",
    tags: ["aggregates", "conditional-aggregation", "case", "sum"],
    estimatedTimeMinutes: 3
  },
  {
    id: 121,
    title: "Tally top-tier ratings versus low/mid-tier reviews",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Performance_Reviews to count reviews with rating = 5 as top_ratings, and reviews with rating <= 3 as low_or_mid_ratings.",
    requirements: [
      "Query Performance_Reviews.",
      "Use SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS top_ratings.",
      "Use SUM(CASE WHEN rating <= 3 THEN 1 ELSE 0 END) AS low_or_mid_ratings."
    ],
    tableName: "Performance_Reviews",
    hint: "SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS top_ratings",
    expectedSql: "SELECT SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS top_ratings, SUM(CASE WHEN rating <= 3 THEN 1 ELSE 0 END) AS low_or_mid_ratings FROM Performance_Reviews;",
    explanation: "Produces a distribution summary of employee appraisal ratings in a single query.",
    tags: ["aggregates", "conditional-aggregation", "case"],
    estimatedTimeMinutes: 3
  },
  {
    id: 122,
    title: "Generate project pipeline status distribution using CASE aggregates",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Projects to display the counts of completed, active, and planning projects as completed_count, active_count, and planning_count.",
    requirements: [
      "Use SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count.",
      "Use SUM(CASE WHEN status = 'Active' THEN 1 ELSE 0 END) AS active_count.",
      "Use SUM(CASE WHEN status = 'Planning' THEN 1 ELSE 0 END) AS planning_count."
    ],
    tableName: "Projects",
    hint: "SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END)",
    expectedSql: "SELECT SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count, SUM(CASE WHEN status = 'Active' THEN 1 ELSE 0 END) AS active_count, SUM(CASE WHEN status = 'Planning' THEN 1 ELSE 0 END) AS planning_count FROM Projects;",
    explanation: "Pivots discrete categorical statuses into columnar metrics without requiring multiple queries.",
    tags: ["aggregates", "case", "pivot"],
    estimatedTimeMinutes: 3
  },
  {
    id: 123,
    title: "Compute payroll expenditure split: Hyderabad HQ vs Other locations",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display total payroll for Hyderabad base as hyd_payroll and total payroll for all other cities as other_payroll.",
    requirements: [
      "SUM(CASE WHEN city = 'Hyderabad' THEN salary ELSE 0 END) AS hyd_payroll.",
      "SUM(CASE WHEN city != 'Hyderabad' THEN salary ELSE 0 END) AS other_payroll.",
      "Query Employees."
    ],
    tableName: "Employees",
    hint: "SUM(CASE WHEN city = 'Hyderabad' THEN salary ELSE 0 END) AS hyd_payroll",
    expectedSql: "SELECT SUM(CASE WHEN city = 'Hyderabad' THEN salary ELSE 0 END) AS hyd_payroll, SUM(CASE WHEN city != 'Hyderabad' THEN salary ELSE 0 END) AS other_payroll FROM Employees;",
    explanation: "Facilitates geographic financial reporting by segmenting expenditures based on regional criteria.",
    tags: ["aggregates", "case", "payroll"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Distinct Value Aggregations & Deduplication (IDs 124 to 128)
  {
    id: 124,
    title: "Count unique operating departments, office cities, and total headcount",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query from Employees to display COUNT(DISTINCT department) AS unique_departments, COUNT(DISTINCT city) AS unique_cities, and COUNT(*) AS total_employees.",
    requirements: [
      "Query Employees table.",
      "Use COUNT(DISTINCT ...) for department and city.",
      "Use COUNT(*) for total_employees."
    ],
    tableName: "Employees",
    hint: "SELECT COUNT(DISTINCT department) AS unique_departments, COUNT(DISTINCT city) AS unique_cities, COUNT(*) AS total_employees FROM Employees;",
    expectedSql: "SELECT COUNT(DISTINCT department) AS unique_departments, COUNT(DISTINCT city) AS unique_cities, COUNT(*) AS total_employees FROM Employees;",
    explanation: "COUNT(DISTINCT column) strips duplicate occurrences before evaluating aggregate cardinality.",
    tags: ["aggregates", "count-distinct", "cardinality"],
    estimatedTimeMinutes: 2
  },
  {
    id: 125,
    title: "Determine the exact count of unique employees assigned to initiatives",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employee_Projects to calculate COUNT(DISTINCT emp_id) AS staffed_employees.",
    requirements: [
      "Query Employee_Projects table.",
      "Use COUNT(DISTINCT emp_id) aliased as staffed_employees."
    ],
    tableName: "Employee_Projects",
    hint: "SELECT COUNT(DISTINCT emp_id) AS staffed_employees FROM Employee_Projects;",
    expectedSql: "SELECT COUNT(DISTINCT emp_id) AS staffed_employees FROM Employee_Projects;",
    explanation: "Since some employees are assigned to multiple projects, COUNT(DISTINCT) ensures each employee is counted only once.",
    tags: ["aggregates", "count-distinct", "junction-table"],
    estimatedTimeMinutes: 2
  },
  {
    id: 126,
    title: "Count the number of distinct review years documented in the system",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Performance_Reviews to return COUNT(DISTINCT review_year) AS evaluated_years.",
    requirements: [
      "Query Performance_Reviews.",
      "Count distinct review_year values as evaluated_years."
    ],
    tableName: "Performance_Reviews",
    hint: "SELECT COUNT(DISTINCT review_year) AS evaluated_years FROM Performance_Reviews;",
    expectedSql: "SELECT COUNT(DISTINCT review_year) AS evaluated_years FROM Performance_Reviews;",
    explanation: "Evaluates the historical span of recorded appraisal cycles by deduplicating appraisal years.",
    tags: ["aggregates", "count-distinct", "temporal"],
    estimatedTimeMinutes: 2
  },
  {
    id: 127,
    title: "Count unique project lifecycle states currently in use",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Projects to display COUNT(DISTINCT status) AS unique_statuses.",
    requirements: [
      "Query Projects table.",
      "Select COUNT(DISTINCT status) AS unique_statuses."
    ],
    tableName: "Projects",
    hint: "SELECT COUNT(DISTINCT status) AS unique_statuses FROM Projects;",
    expectedSql: "SELECT COUNT(DISTINCT status) AS unique_statuses FROM Projects;",
    explanation: "Identifies the variety of project lifecycle states currently occupied across corporate projects.",
    tags: ["aggregates", "count-distinct"],
    estimatedTimeMinutes: 2
  },
  {
    id: 128,
    title: "Calculate the average of distinct salary tiers to detect pay variance",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary.",
    requirements: [
      "Query Employees.",
      "Compute ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary."
    ],
    tableName: "Employees",
    hint: "SELECT ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary FROM Employees;",
    expectedSql: "SELECT ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary FROM Employees;",
    explanation: "Averaging distinct salaries removes frequency weighting from identical compensation levels.",
    tags: ["aggregates", "avg-distinct", "rounding"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Filtered Aggregations & Boundary Metrics (IDs 129 to 134)
  {
    id: 129,
    title: "Summarize total payroll and average experience for the Chennai office",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to calculate SUM(salary) AS chennai_payroll and ROUND(AVG(experience), 2) AS avg_chennai_exp for employees stationed in 'Chennai'.",
    requirements: [
      "Filter with city = 'Chennai'.",
      "Calculate SUM(salary) AS chennai_payroll.",
      "Calculate ROUND(AVG(experience), 2) AS avg_chennai_exp."
    ],
    tableName: "Employees",
    hint: "WHERE city = 'Chennai'",
    expectedSql: "SELECT SUM(salary) AS chennai_payroll, ROUND(AVG(experience), 2) AS avg_chennai_exp FROM Employees WHERE city = 'Chennai';",
    explanation: "Aggregates key human resources metrics for a specific geographical branch.",
    tags: ["aggregates", "where", "filtering", "sum", "avg"],
    estimatedTimeMinutes: 2
  },
  {
    id: 130,
    title: "Determine the bonus spread for the 2024 appraisal cycle",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Performance_Reviews to display MAX(bonus) AS max_2024_bonus and MIN(bonus) AS min_2024_bonus for reviews where review_year = 2024.",
    requirements: [
      "Filter where review_year = 2024.",
      "Select MAX(bonus) AS max_2024_bonus and MIN(bonus) AS min_2024_bonus."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE review_year = 2024",
    expectedSql: "SELECT MAX(bonus) AS max_2024_bonus, MIN(bonus) AS min_2024_bonus FROM Performance_Reviews WHERE review_year = 2024;",
    explanation: "MIN() automatically ignores NULL values when calculating the lowest non-null payout.",
    tags: ["aggregates", "min", "max", "where"],
    estimatedTimeMinutes: 2
  },
  {
    id: 131,
    title: "Compute the internal compensation spread in the IT department",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to calculate (MAX(salary) - MIN(salary)) AS it_salary_range for employees in the 'IT' department.",
    requirements: [
      "Filter where department = 'IT'.",
      "Calculate (MAX(salary) - MIN(salary)) AS it_salary_range."
    ],
    tableName: "Employees",
    hint: "SELECT (MAX(salary) - MIN(salary)) AS it_salary_range FROM Employees WHERE department = 'IT';",
    expectedSql: "SELECT (MAX(salary) - MIN(salary)) AS it_salary_range FROM Employees WHERE department = 'IT';",
    explanation: "Subtracting MIN from MAX produces the range or disparity between the highest and lowest earners in a division.",
    tags: ["aggregates", "range", "subtraction", "where"],
    estimatedTimeMinutes: 3
  },
  {
    id: 132,
    title: "Count high-earning recent additions hired after 2020",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display COUNT(*) AS high_earning_recent_joiners for employees who joined after 2020 with salary > 40000.",
    requirements: [
      "Filter where joining_year > 2020 AND salary > 40000.",
      "Count matching records as high_earning_recent_joiners."
    ],
    tableName: "Employees",
    hint: "WHERE joining_year > 2020 AND salary > 40000",
    expectedSql: "SELECT COUNT(*) AS high_earning_recent_joiners FROM Employees WHERE joining_year > 2020 AND salary > 40000;",
    explanation: "Counts personnel matching multiple criteria across temporal and compensation dimensions.",
    tags: ["aggregates", "count", "where"],
    estimatedTimeMinutes: 2
  },
  {
    id: 133,
    title: "Calculate total completed initiative investment",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Projects to display SUM(budget) AS completed_project_spend for projects having status = 'Completed'.",
    requirements: [
      "Filter where status = 'Completed'.",
      "Calculate SUM(budget) AS completed_project_spend."
    ],
    tableName: "Projects",
    hint: "WHERE status = 'Completed'",
    expectedSql: "SELECT SUM(budget) AS completed_project_spend FROM Projects WHERE status = 'Completed';",
    explanation: "Sums financial expenditures of successfully finalized enterprise initiatives.",
    tags: ["aggregates", "sum", "where", "status"],
    estimatedTimeMinutes: 2
  },
  {
    id: 134,
    title: "Measure demographic profile of HR and Finance divisions",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to calculate ROUND(AVG(age), 1) AS avg_age and ROUND(AVG(experience), 1) AS avg_exp for staff in 'HR' or 'Finance'.",
    requirements: [
      "Filter where department IN ('HR', 'Finance').",
      "Calculate ROUND(AVG(age), 1) AS avg_age and ROUND(AVG(experience), 1) AS avg_exp."
    ],
    tableName: "Employees",
    hint: "WHERE department IN ('HR', 'Finance')",
    expectedSql: "SELECT ROUND(AVG(age), 1) AS avg_age, ROUND(AVG(experience), 1) AS avg_exp FROM Employees WHERE department IN ('HR', 'Finance');",
    explanation: "Computes rounded demographic averages across multiple corporate business divisions.",
    tags: ["aggregates", "avg", "rounding", "where"],
    estimatedTimeMinutes: 3
  }
];
