export const TOPIC6_QUESTIONS = [
  // Subtopic: HAVING with Multiple Aggregate Predicates (IDs 161 to 164)
  {
    id: 161,
    title: "Filter departments meeting both headcount and compensation benchmarks",
    topic: "HAVING",
    subtopic: "HAVING with Multiple Aggregate Predicates",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display department, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_salary grouped by department, having at least 3 employees AND an average salary greater than 45000.",
    requirements: [
      "Group by department.",
      "Filter groups with HAVING COUNT(*) >= 3 AND AVG(salary) > 45000.",
      "Select department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary."
    ],
    tableName: "Employees",
    hint: "HAVING COUNT(*) >= 3 AND AVG(salary) > 45000",
    expectedSql: "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) >= 3 AND AVG(salary) > 45000;",
    explanation: "HAVING filters groups post-aggregation using boolean combinations of aggregate functions.",
    tags: ["having", "aggregates", "and", "group-by"],
    estimatedTimeMinutes: 3
  },
  {
    id: 162,
    title: "Identify high-commitment initiatives with multiple team members",
    topic: "HAVING",
    subtopic: "HAVING with Multiple Aggregate Predicates",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employee_Projects to display project_id, COUNT(DISTINCT emp_id) AS staff_count, and SUM(hours_allocated) AS total_hours grouped by project_id, having at least 2 distinct staff members AND a total weekly hour commitment of at least 40 hours.",
    requirements: [
      "Group by project_id.",
      "Filter groups with HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40.",
      "Select project_id, staff_count, total_hours."
    ],
    tableName: "Employee_Projects",
    hint: "HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40",
    expectedSql: "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40;",
    explanation: "Enforces multi-metric group constraints across distinct entity counts and cumulative sums.",
    tags: ["having", "count-distinct", "sum", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 163,
    title: "Filter consistently high-performing employees with multiple evaluations",
    topic: "HAVING",
    subtopic: "HAVING with Multiple Aggregate Predicates",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Performance_Reviews to display emp_id, COUNT(*) AS review_count, and ROUND(AVG(rating), 2) AS avg_rating grouped by emp_id, having at least 2 reviews AND an average rating of at least 4.0.",
    requirements: [
      "Group by emp_id.",
      "Filter groups with HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0.",
      "Select emp_id, review_count, avg_rating."
    ],
    tableName: "Performance_Reviews",
    hint: "HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0",
    expectedSql: "SELECT emp_id, COUNT(*) AS review_count, ROUND(AVG(rating), 2) AS avg_rating FROM Performance_Reviews GROUP BY emp_id HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0;",
    explanation: "Isolates repeated high performers by verifying both evaluation volume and sustained rating excellence.",
    tags: ["having", "reviews", "rating", "avg"],
    estimatedTimeMinutes: 3
  },
  {
    id: 164,
    title: "Identify major regional hubs having substantial headcount and payroll",
    topic: "HAVING",
    subtopic: "HAVING with Multiple Aggregate Predicates",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display city, COUNT(*) AS emp_count, and SUM(salary) AS total_payroll grouped by city, having at least 4 employees AND total payroll strictly greater than 200000.",
    requirements: [
      "Group by city.",
      "Filter groups with HAVING COUNT(*) >= 4 AND SUM(salary) > 200000.",
      "Select city, emp_count, total_payroll."
    ],
    tableName: "Employees",
    hint: "HAVING COUNT(*) >= 4 AND SUM(salary) > 200000",
    expectedSql: "SELECT city, COUNT(*) AS emp_count, SUM(salary) AS total_payroll FROM Employees GROUP BY city HAVING COUNT(*) >= 4 AND SUM(salary) > 200000;",
    explanation: "Surfaces enterprise operational centers where both organizational headcount and total payroll pass critical thresholds.",
    tags: ["having", "payroll", "city", "headcount"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Combining WHERE and HAVING in the Pipeline (IDs 165 to 168)
  {
    id: 165,
    title: "Filter post-2018 employee cohorts by departmental representation",
    topic: "HAVING",
    subtopic: "Combining WHERE and HAVING in the Pipeline",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display department and COUNT(*) AS recent_count for employees who joined after 2018, grouped by department, having at least 3 such recent employees.",
    requirements: [
      "Filter rows first using WHERE joining_year > 2018.",
      "Group by department.",
      "Filter groups using HAVING COUNT(*) >= 3.",
      "Select department, recent_count."
    ],
    tableName: "Employees",
    hint: "WHERE joining_year > 2018 GROUP BY department HAVING COUNT(*) >= 3",
    expectedSql: "SELECT department, COUNT(*) AS recent_count FROM Employees WHERE joining_year > 2018 GROUP BY department HAVING COUNT(*) >= 3;",
    explanation: "Illustrates the exact SQL execution pipeline: WHERE filters individual records before grouping; HAVING filters aggregated groups.",
    tags: ["having", "where", "pipeline", "hiring"],
    estimatedTimeMinutes: 3
  },
  {
    id: 166,
    title: "Find departments with high unfinalized project commitments",
    topic: "HAVING",
    subtopic: "Combining WHERE and HAVING in the Pipeline",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Projects to display dept_id, COUNT(*) AS pending_projects, and SUM(budget) AS total_pending_budget for projects where status != 'Completed', grouped by dept_id, having total_pending_budget >= 300000.",
    requirements: [
      "Filter rows with WHERE status != 'Completed'.",
      "Group by dept_id.",
      "Filter groups with HAVING SUM(budget) >= 300000.",
      "Select dept_id, pending_projects, total_pending_budget."
    ],
    tableName: "Projects",
    hint: "WHERE status != 'Completed' GROUP BY dept_id HAVING SUM(budget) >= 300000",
    expectedSql: "SELECT dept_id, COUNT(*) AS pending_projects, SUM(budget) AS total_pending_budget FROM Projects WHERE status != 'Completed' GROUP BY dept_id HAVING SUM(budget) >= 300000;",
    explanation: "Applies pre-aggregation exclusion on project completion status before testing cumulative capital commitments.",
    tags: ["having", "where", "projects", "sum"],
    estimatedTimeMinutes: 3
  },
  {
    id: 167,
    title: "Find employees averaging high bonus payouts in the 2024 appraisal cycle",
    topic: "HAVING",
    subtopic: "Combining WHERE and HAVING in the Pipeline",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Performance_Reviews to display emp_id and ROUND(AVG(bonus), 2) AS avg_2024_bonus for reviews where review_year = 2024, grouped by emp_id, having AVG(bonus) > 15000.",
    requirements: [
      "Filter rows with WHERE review_year = 2024.",
      "Group by emp_id.",
      "Filter groups with HAVING AVG(bonus) > 15000.",
      "Select emp_id, avg_2024_bonus."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE review_year = 2024 GROUP BY emp_id HAVING AVG(bonus) > 15000",
    expectedSql: "SELECT emp_id, ROUND(AVG(bonus), 2) AS avg_2024_bonus FROM Performance_Reviews WHERE review_year = 2024 GROUP BY emp_id HAVING AVG(bonus) > 15000;",
    explanation: "Filters for a single appraisal year in WHERE, then isolates standout bonus averages in HAVING.",
    tags: ["having", "where", "bonus", "avg"],
    estimatedTimeMinutes: 3
  },
  {
    id: 168,
    title: "Locate office locations where seasoned staff average premium compensation",
    topic: "HAVING",
    subtopic: "Combining WHERE and HAVING in the Pipeline",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display city, COUNT(*) AS seasoned_staff, and ROUND(AVG(salary), 2) AS avg_seasoned_salary for employees with experience >= 3, grouped by city, having AVG(salary) > 50000.",
    requirements: [
      "Filter with WHERE experience >= 3.",
      "Group by city.",
      "Filter with HAVING AVG(salary) > 50000.",
      "Select city, seasoned_staff, avg_seasoned_salary."
    ],
    tableName: "Employees",
    hint: "WHERE experience >= 3 GROUP BY city HAVING AVG(salary) > 50000",
    expectedSql: "SELECT city, COUNT(*) AS seasoned_staff, ROUND(AVG(salary), 2) AS avg_seasoned_salary FROM Employees WHERE experience >= 3 GROUP BY city HAVING AVG(salary) > 50000;",
    explanation: "Filters the employee base by minimum tenure before testing whether regional compensation exceeds 50000.",
    tags: ["having", "where", "compensation", "city"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Boundary & Disjunctive Aggregate Filters (IDs 169 to 172)
  {
    id: 169,
    title: "Filter departments with boutique headcounts OR premium salary averages",
    topic: "HAVING",
    subtopic: "Boundary & Disjunctive Aggregate Filters",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display department, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_salary grouped by department, having COUNT(*) <= 3 OR AVG(salary) > 65000.",
    requirements: [
      "Group by department.",
      "Filter groups with HAVING COUNT(*) <= 3 OR AVG(salary) > 65000.",
      "Select department, emp_count, avg_salary."
    ],
    tableName: "Employees",
    hint: "HAVING COUNT(*) <= 3 OR AVG(salary) > 65000",
    expectedSql: "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) <= 3 OR AVG(salary) > 65000;",
    explanation: "Applies disjunctive logic (OR) inside HAVING to capture either small teams or high-average compensation departments.",
    tags: ["having", "or", "aggregates"],
    estimatedTimeMinutes: 3
  },
  {
    id: 170,
    title: "Detect initiatives with either lean capacity or expansive team rosters",
    topic: "HAVING",
    subtopic: "Boundary & Disjunctive Aggregate Filters",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employee_Projects to display project_id, COUNT(DISTINCT emp_id) AS staff_count, and SUM(hours_allocated) AS total_hours grouped by project_id, having SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4.",
    requirements: [
      "Group by project_id.",
      "Filter groups with HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4.",
      "Select project_id, staff_count, total_hours."
    ],
    tableName: "Employee_Projects",
    hint: "HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4",
    expectedSql: "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4;",
    explanation: "Captures both under-allocated projects and broad-staff initiatives using aggregate OR logic.",
    tags: ["having", "or", "workload", "cardinality"],
    estimatedTimeMinutes: 4
  },
  {
    id: 171,
    title: "Filter review years by total payouts or exceptional rating averages",
    topic: "HAVING",
    subtopic: "Boundary & Disjunctive Aggregate Filters",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Performance_Reviews to display review_year, COUNT(*) AS total_reviews, COALESCE(SUM(bonus), 0) AS total_bonus, and ROUND(AVG(rating), 2) AS avg_rating grouped by review_year, having SUM(bonus) > 100000 OR AVG(rating) >= 4.0.",
    requirements: [
      "Group by review_year.",
      "Filter groups with HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0.",
      "Select review_year, total_reviews, total_bonus, avg_rating."
    ],
    tableName: "Performance_Reviews",
    hint: "HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0",
    expectedSql: "SELECT review_year, COUNT(*) AS total_reviews, COALESCE(SUM(bonus), 0) AS total_bonus, ROUND(AVG(rating), 2) AS avg_rating FROM Performance_Reviews GROUP BY review_year HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0;",
    explanation: "Applies disjunctive aggregate thresholds to annual corporate appraisal summaries.",
    tags: ["having", "or", "reviews"],
    estimatedTimeMinutes: 3
  },
  {
    id: 172,
    title: "Find cities where lowest pay is at least 30000 and top pay exceeds 70000",
    topic: "HAVING",
    subtopic: "Boundary & Disjunctive Aggregate Filters",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display city, MIN(salary) AS min_sal, and MAX(salary) AS max_sal grouped by city, having MIN(salary) >= 30000 AND MAX(salary) > 70000.",
    requirements: [
      "Group by city.",
      "Filter with HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000.",
      "Select city, min_sal, max_sal."
    ],
    tableName: "Employees",
    hint: "HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000",
    expectedSql: "SELECT city, MIN(salary) AS min_sal, MAX(salary) AS max_sal FROM Employees GROUP BY city HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000;",
    explanation: "Constrains both lower and upper boundary aggregates across grouped geographical entities.",
    tags: ["having", "min", "max", "salary-boundaries"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: HAVING with Sorting & Limiting (IDs 173 to 175)
  {
    id: 173,
    title: "Identify the top 2 highest-paying departments with at least 3 employees",
    topic: "HAVING",
    subtopic: "HAVING with Sorting & Limiting",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display department, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_sal grouped by department, having at least 3 employees, ordered by avg_sal descending, limited to 2 departments.",
    requirements: [
      "Group by department.",
      "Filter with HAVING COUNT(*) >= 3.",
      "Order by avg_sal DESC.",
      "Limit to 2 rows."
    ],
    tableName: "Employees",
    hint: "HAVING COUNT(*) >= 3 ORDER BY avg_sal DESC LIMIT 2",
    expectedSql: "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department HAVING COUNT(*) >= 3 ORDER BY avg_sal DESC LIMIT 2;",
    explanation: "Combines aggregation, group filtering, sort ordering, and Top-N limiting into a complete analytical query.",
    tags: ["having", "order-by", "limit", "top-n"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 174,
    title: "Find the single most labor-intensive initiative with 3 or more team members",
    topic: "HAVING",
    subtopic: "HAVING with Sorting & Limiting",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employee_Projects to display project_id, COUNT(DISTINCT emp_id) AS staff_count, and SUM(hours_allocated) AS total_hours grouped by project_id, having at least 3 distinct staff members, ordered by total_hours descending, limited to 1 row.",
    requirements: [
      "Group by project_id.",
      "Filter with HAVING COUNT(DISTINCT emp_id) >= 3.",
      "Order by total_hours DESC.",
      "Limit to 1 row."
    ],
    tableName: "Employee_Projects",
    hint: "HAVING COUNT(DISTINCT emp_id) >= 3 ORDER BY total_hours DESC LIMIT 1",
    expectedSql: "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING COUNT(DISTINCT emp_id) >= 3 ORDER BY total_hours DESC LIMIT 1;",
    explanation: "Retrieves the single highest-capacity project meeting minimum staffing requirements.",
    tags: ["having", "order-by", "limit", "top-1"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 175,
    title: "Identify the top rewarded employee with multiple performance reviews",
    topic: "HAVING",
    subtopic: "HAVING with Sorting & Limiting",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Performance_Reviews to display emp_id, COUNT(*) AS review_count, and SUM(bonus) AS total_bonus grouped by emp_id, having COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL, ordered by total_bonus descending, limited to 1 row.",
    requirements: [
      "Group by emp_id.",
      "Filter with HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL.",
      "Order by total_bonus DESC.",
      "Limit to 1 record."
    ],
    tableName: "Performance_Reviews",
    hint: "HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL ORDER BY total_bonus DESC LIMIT 1",
    expectedSql: "SELECT emp_id, COUNT(*) AS review_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY emp_id HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL ORDER BY total_bonus DESC LIMIT 1;",
    explanation: "Finds the employee with the greatest cumulative bonus compensation across multiple appraisal cycles.",
    tags: ["having", "order-by", "limit", "bonus"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  }
];
