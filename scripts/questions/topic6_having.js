export const TOPIC6_QUESTIONS = [
  // Subtopic: HAVING with Multiple Aggregate Predicates (IDs 161 to 164)
  {
    id: 161,
    title: "Departmental Headcount and Compensation Dual Benchmark",
    topic: "HAVING",
    subtopic: "HAVING with Multiple Aggregate Predicates",
    difficulty: "Easy",
    problemStatement: "The executive compensation committee wants to identify major divisions that maintain competitive salary standards. Group employees by department, calculating headcount and average monthly salary (rounded to 2 decimal places), and filter for departments that employ at least 3 people and maintain an average salary strictly exceeding 45,000.",
    requirements: [
      "Group records by `department`.",
      "Calculate employee count aliased as `emp_count`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_salary`.",
      "Filter groups where headcount is 3 or more AND average salary strictly exceeds 45,000.",
      "Display `department`, `emp_count`, and `avg_salary`."
    ],
    tableName: "Employees",
    hint: "Use HAVING with both COUNT(*) and AVG(salary) conditions connected by AND.",
    expectedSql: "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) >= 3 AND AVG(salary) > 45000;",
    explanation: "HAVING filters groups post-aggregation using boolean combinations of aggregate functions.",
    tags: ["having", "aggregates", "and", "group-by"],
    estimatedTimeMinutes: 3
  },
  {
    id: 162,
    title: "High-Commitment Multi-Staff Project Allocations",
    topic: "HAVING",
    subtopic: "HAVING with Multiple Aggregate Predicates",
    difficulty: "Medium",
    problemStatement: "Resource management is monitoring major project commitments in Employee_Projects. For each project, calculate the count of distinct team members assigned and total weekly hours committed, filtering for initiatives that have at least 2 distinct staff members and a combined workload of at least 40 weekly hours.",
    requirements: [
      "Group by `project_id` in Employee_Projects.",
      "Count distinct assigned staff aliased as `staff_count`.",
      "Sum allocated weekly hours aliased as `total_hours`.",
      "Filter groups where distinct staff count is at least 2 AND total hours is at least 40.",
      "Display `project_id`, `staff_count`, and `total_hours`."
    ],
    tableName: "Employee_Projects",
    hint: "Apply HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40.",
    expectedSql: "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40;",
    explanation: "Enforces multi-metric group constraints across distinct entity counts and cumulative sums.",
    tags: ["having", "count-distinct", "sum", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 163,
    title: "Consistently High-Performing Multi-Review Personnel",
    topic: "HAVING",
    subtopic: "HAVING with Multiple Aggregate Predicates",
    difficulty: "Medium",
    problemStatement: "Talent development is identifying employees with sustained top-tier performance over time. For each evaluated employee in Performance_Reviews, display their employee ID, total evaluation count, and average rating (rounded to 2 decimal places), keeping only employees who have at least 2 completed reviews and an average rating of 4.0 or higher.",
    requirements: [
      "Group by `emp_id` in Performance_Reviews.",
      "Count total reviews aliased as `review_count`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_rating`.",
      "Filter groups with 2 or more reviews and an average rating of 4.0 or above.",
      "Display `emp_id`, `review_count`, and `avg_rating`."
    ],
    tableName: "Performance_Reviews",
    hint: "Use HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0 after grouping by emp_id.",
    expectedSql: "SELECT emp_id, COUNT(*) AS review_count, ROUND(AVG(rating), 2) AS avg_rating FROM Performance_Reviews GROUP BY emp_id HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0;",
    explanation: "Isolates repeated high performers by verifying both evaluation volume and sustained rating excellence.",
    tags: ["having", "reviews", "rating", "avg"],
    estimatedTimeMinutes: 3
  },
  {
    id: 164,
    title: "Major Metropolitan Hubs with Substantial Wage Footprints",
    topic: "HAVING",
    subtopic: "HAVING with Multiple Aggregate Predicates",
    difficulty: "Easy",
    problemStatement: "Corporate treasury is reviewing regional offices with significant headcount and payroll exposure. For each city, calculate the total employee count and cumulative monthly payroll, keeping only office locations that have at least 4 employees and a monthly wage bill strictly exceeding 200,000.",
    requirements: [
      "Group records by `city` in Employees.",
      "Count staff members aliased as `emp_count`.",
      "Calculate total payroll expenditure aliased as `total_payroll`.",
      "Filter groups where headcount is 4 or more AND cumulative payroll exceeds 200,000.",
      "Display `city`, `emp_count`, and `total_payroll`."
    ],
    tableName: "Employees",
    hint: "Filter the grouped city records with HAVING COUNT(*) >= 4 AND SUM(salary) > 200000.",
    expectedSql: "SELECT city, COUNT(*) AS emp_count, SUM(salary) AS total_payroll FROM Employees GROUP BY city HAVING COUNT(*) >= 4 AND SUM(salary) > 200000;",
    explanation: "Surfaces enterprise operational centers where both organizational headcount and total payroll pass critical thresholds.",
    tags: ["having", "payroll", "city", "headcount"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Combining WHERE and HAVING in the Pipeline (IDs 165 to 168)
  {
    id: 165,
    title: "Departmental Density of Modern Hiring Cohorts",
    topic: "HAVING",
    subtopic: "Combining WHERE and HAVING in the Pipeline",
    difficulty: "Medium",
    problemStatement: "Talent acquisition is tracking departments that have expanded aggressively in recent years. For staff who joined the company after calendar year 2018, group by department and count recent additions, displaying only departments that have hired at least 3 people during this era.",
    requirements: [
      "Filter for `joining_year > 2018` before grouping.",
      "Group records by `department`.",
      "Count recent recruits aliased as `recent_count`.",
      "Filter groups where recent recruit count is 3 or greater.",
      "Display `department` and `recent_count`."
    ],
    tableName: "Employees",
    hint: "Combine a pre-aggregation WHERE filter on joining_year with a post-aggregation HAVING filter on COUNT(*).",
    expectedSql: "SELECT department, COUNT(*) AS recent_count FROM Employees WHERE joining_year > 2018 GROUP BY department HAVING COUNT(*) >= 3;",
    explanation: "Illustrates the exact SQL execution pipeline: WHERE filters individual records before grouping; HAVING filters aggregated groups.",
    tags: ["having", "where", "pipeline", "hiring"],
    estimatedTimeMinutes: 3
  },
  {
    id: 166,
    title: "Departments with High Unfinished Project Commitments",
    topic: "HAVING",
    subtopic: "Combining WHERE and HAVING in the Pipeline",
    difficulty: "Medium",
    problemStatement: "The PMO is reviewing capital tied up in unfinished initiatives per department. For projects that are not completed, group by department ID and calculate the count of pending projects and total pending budget, retaining only departments where cumulative pending budget is at least 300,000.",
    requirements: [
      "Filter Projects for `status != 'Completed'` in the WHERE clause.",
      "Group by `dept_id`.",
      "Count pending projects aliased as `pending_projects`.",
      "Calculate cumulative pending budget aliased as `total_pending_budget`.",
      "Filter groups where cumulative budget is 300,000 or greater.",
      "Display `dept_id`, `pending_projects`, and `total_pending_budget`."
    ],
    tableName: "Projects",
    hint: "Use WHERE status != 'Completed' followed by HAVING SUM(budget) >= 300000.",
    expectedSql: "SELECT dept_id, COUNT(*) AS pending_projects, SUM(budget) AS total_pending_budget FROM Projects WHERE status != 'Completed' GROUP BY dept_id HAVING SUM(budget) >= 300000;",
    explanation: "Applies pre-aggregation exclusion on project completion status before testing cumulative capital commitments.",
    tags: ["having", "where", "projects", "sum"],
    estimatedTimeMinutes: 3
  },
  {
    id: 167,
    title: "Personnel Averaging Premium Incentives (2024 Cycle)",
    topic: "HAVING",
    subtopic: "Combining WHERE and HAVING in the Pipeline",
    difficulty: "Medium",
    problemStatement: "The compensation committee is auditing high-earning incentive recipients from the 2024 appraisal cycle. For appraisals conducted in 2024, group by employee ID and compute the average bonus awarded (rounded to 2 decimal places), displaying only employees whose average 2024 bonus strictly exceeded 15,000.",
    requirements: [
      "Filter Performance_Reviews for `review_year = 2024`.",
      "Group by `emp_id`.",
      "Calculate average bonus rounded to 2 decimal places aliased as `avg_2024_bonus`.",
      "Filter groups where average bonus is strictly greater than 15,000.",
      "Display `emp_id` and `avg_2024_bonus`."
    ],
    tableName: "Performance_Reviews",
    hint: "Filter for review_year = 2024 in WHERE, then apply HAVING AVG(bonus) > 15000.",
    expectedSql: "SELECT emp_id, ROUND(AVG(bonus), 2) AS avg_2024_bonus FROM Performance_Reviews WHERE review_year = 2024 GROUP BY emp_id HAVING AVG(bonus) > 15000;",
    explanation: "Filters for a single appraisal year in WHERE, then isolates standout bonus averages in HAVING.",
    tags: ["having", "where", "bonus", "avg"],
    estimatedTimeMinutes: 3
  },
  {
    id: 168,
    title: "Branch Hubs with Premium Senior Staff Earnings",
    topic: "HAVING",
    subtopic: "Combining WHERE and HAVING in the Pipeline",
    difficulty: "Medium",
    problemStatement: "Human Resources is examining compensation levels for seasoned personnel across branch cities. For employees who possess at least 3 years of experience, group by city and calculate the count of seasoned staff and their average monthly salary (rounded to 2 decimal places), displaying only cities where seasoned staff average strictly more than 50,000.",
    requirements: [
      "Filter Employees for `experience >= 3` in WHERE.",
      "Group records by `city`.",
      "Count seasoned staff aliased as `seasoned_staff`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_seasoned_salary`.",
      "Filter groups where average salary strictly exceeds 50,000.",
      "Display `city`, `seasoned_staff`, and `avg_seasoned_salary`."
    ],
    tableName: "Employees",
    hint: "Filter with experience >= 3 before grouping, then use HAVING AVG(salary) > 50000.",
    expectedSql: "SELECT city, COUNT(*) AS seasoned_staff, ROUND(AVG(salary), 2) AS avg_seasoned_salary FROM Employees WHERE experience >= 3 GROUP BY city HAVING AVG(salary) > 50000;",
    explanation: "Filters the employee base by minimum tenure before testing whether regional compensation exceeds 50000.",
    tags: ["having", "where", "compensation", "city"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Boundary & Disjunctive Aggregate Filters (IDs 169 to 172)
  {
    id: 169,
    title: "Boutique Units or Premium Compensation Divisions",
    topic: "HAVING",
    subtopic: "Boundary & Disjunctive Aggregate Filters",
    difficulty: "Medium",
    problemStatement: "Organizational strategy monitors both boutique specialized teams and high-earning units. Group employees by department and calculate headcount and average salary (rounded to 2 decimal places), displaying departments that either have a small team (3 or fewer employees) OR maintain an average salary strictly exceeding 65,000.",
    requirements: [
      "Group records by `department`.",
      "Calculate employee count aliased as `emp_count`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_salary`.",
      "Filter groups where headcount is 3 or fewer OR average salary exceeds 65,000.",
      "Display `department`, `emp_count`, and `avg_salary`."
    ],
    tableName: "Employees",
    hint: "Use an OR condition within the HAVING clause connecting the headcount and average salary checks.",
    expectedSql: "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) <= 3 OR AVG(salary) > 65000;",
    explanation: "Applies disjunctive logic (OR) inside HAVING to capture either small teams or high-average compensation departments.",
    tags: ["having", "or", "aggregates"],
    estimatedTimeMinutes: 3
  },
  {
    id: 170,
    title: "Resource Allocation Outliers: Lean or Heavy Rosters",
    topic: "HAVING",
    subtopic: "Boundary & Disjunctive Aggregate Filters",
    difficulty: "Hard",
    problemStatement: "The PMO is identifying initiatives with atypical staffing profiles in Employee_Projects. For each project, calculate the distinct team headcount and total allocated weekly hours, keeping projects that have either a light total workload (under 40 hours) OR a large roster (4 or more distinct team members).",
    requirements: [
      "Group by `project_id` in Employee_Projects.",
      "Count distinct assigned staff aliased as `staff_count`.",
      "Sum allocated weekly hours aliased as `total_hours`.",
      "Filter groups where total hours is strictly under 40 OR distinct staff count is at least 4.",
      "Display `project_id`, `staff_count`, and `total_hours`."
    ],
    tableName: "Employee_Projects",
    hint: "Apply HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4.",
    expectedSql: "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4;",
    explanation: "Captures both under-allocated projects and broad-staff initiatives using aggregate OR logic.",
    tags: ["having", "or", "workload", "cardinality"],
    estimatedTimeMinutes: 4
  },
  {
    id: 171,
    title: "High-Disbursement or Superior Rating Review Cycles",
    topic: "HAVING",
    subtopic: "Boundary & Disjunctive Aggregate Filters",
    difficulty: "Medium",
    problemStatement: "Executive leadership is auditing standout performance review years. For each review year, calculate total reviews, cumulative bonus payout (substituting 0 for nulls), and average rating (rounded to 2 decimal places), displaying only review cycles where total bonuses exceeded 100,000 OR the average rating reached at least 4.0.",
    requirements: [
      "Group Performance_Reviews by `review_year`.",
      "Count reviews aliased as `total_reviews`.",
      "Sum bonuses substituting 0 for nulls aliased as `total_bonus`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_rating`.",
      "Filter groups where cumulative bonus exceeds 100,000 OR average rating is 4.0 or higher.",
      "Display `review_year`, `total_reviews`, `total_bonus`, and `avg_rating`."
    ],
    tableName: "Performance_Reviews",
    hint: "Use HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0 after grouping by review_year.",
    expectedSql: "SELECT review_year, COUNT(*) AS total_reviews, COALESCE(SUM(bonus), 0) AS total_bonus, ROUND(AVG(rating), 2) AS avg_rating FROM Performance_Reviews GROUP BY review_year HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0;",
    explanation: "Applies disjunctive aggregate thresholds to annual corporate appraisal summaries.",
    tags: ["having", "or", "reviews"],
    estimatedTimeMinutes: 3
  },
  {
    id: 172,
    title: "Cities with High Wage Baselines and Top Ceilings",
    topic: "HAVING",
    subtopic: "Boundary & Disjunctive Aggregate Filters",
    difficulty: "Medium",
    problemStatement: "Compensation analytics is evaluating wage distribution extremes in branch cities. For each city in Employees, calculate the lowest and highest monthly salaries, displaying only cities where the salary floor is at least 30,000 AND the salary ceiling strictly exceeds 70,000.",
    requirements: [
      "Group records by `city` in Employees.",
      "Find minimum salary aliased as `min_sal`.",
      "Find maximum salary aliased as `max_sal`.",
      "Filter groups where minimum salary is at least 30,000 AND maximum salary strictly exceeds 70,000.",
      "Display `city`, `min_sal`, and `max_sal`."
    ],
    tableName: "Employees",
    hint: "Apply HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000.",
    expectedSql: "SELECT city, MIN(salary) AS min_sal, MAX(salary) AS max_sal FROM Employees GROUP BY city HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000;",
    explanation: "Constrains both lower and upper boundary aggregates across grouped geographical entities.",
    tags: ["having", "min", "max", "salary-boundaries"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: HAVING with Sorting & Limiting (IDs 173 to 175)
  {
    id: 173,
    title: "Top Two Highest-Paying Established Departments",
    topic: "HAVING",
    subtopic: "HAVING with Sorting & Limiting",
    difficulty: "Medium",
    problemStatement: "The executive compensation committee wants to identify the top 2 highest-paying established departments. For departments with at least 3 employees, calculate headcount and average salary (rounded to 2 decimal places), ordered by average salary from highest to lowest, restricted to the top 2 departments.",
    requirements: [
      "Group records by `department` in Employees.",
      "Calculate employee count aliased as `emp_count`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_sal`.",
      "Filter for departments with 3 or more employees.",
      "Sort by average salary in descending order.",
      "Limit the final result set to exactly 2 records.",
      "Display `department`, `emp_count`, and `avg_sal`."
    ],
    tableName: "Employees",
    hint: "Combine GROUP BY, HAVING COUNT(*) >= 3, ORDER BY avg_sal DESC, and LIMIT 2.",
    expectedSql: "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department HAVING COUNT(*) >= 3 ORDER BY avg_sal DESC LIMIT 2;",
    explanation: "Combines aggregation, group filtering, sort ordering, and Top-N limiting into a complete analytical query.",
    tags: ["having", "order-by", "limit", "top-n"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 174,
    title: "Single Most Labor-Intensive Multi-Member Initiative",
    topic: "HAVING",
    subtopic: "HAVING with Sorting & Limiting",
    difficulty: "Medium",
    problemStatement: "Project operations is identifying the single most demanding team initiative in the portfolio. For initiatives in Employee_Projects that have at least 3 distinct assigned team members, find the project with the highest cumulative weekly hours committed, displaying the project ID, staff count, and total hours.",
    requirements: [
      "Group by `project_id` in Employee_Projects.",
      "Count distinct assigned staff aliased as `staff_count`.",
      "Sum allocated weekly hours aliased as `total_hours`.",
      "Filter groups where distinct staff count is at least 3.",
      "Order by total weekly hours in descending order.",
      "Limit the result to the single top project.",
      "Display `project_id`, `staff_count`, and `total_hours`."
    ],
    tableName: "Employee_Projects",
    hint: "Use HAVING COUNT(DISTINCT emp_id) >= 3, ORDER BY total_hours DESC, and LIMIT 1.",
    expectedSql: "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING COUNT(DISTINCT emp_id) >= 3 ORDER BY total_hours DESC LIMIT 1;",
    explanation: "Retrieves the single highest-capacity project meeting minimum staffing requirements.",
    tags: ["having", "order-by", "limit", "top-1"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 175,
    title: "Top Lifetime Incentive Recipient with Multiple Reviews",
    topic: "HAVING",
    subtopic: "HAVING with Sorting & Limiting",
    difficulty: "Hard",
    problemStatement: "Human Resources is recognizing the employee who has accumulated the largest total performance bonus payout across multiple appraisal cycles. For reviewed employees with at least 2 completed reviews, identify the individual with the highest cumulative bonus, displaying their employee ID, review count, and total bonus pool.",
    requirements: [
      "Group by `emp_id` in Performance_Reviews.",
      "Count total evaluations completed aliased as `review_count`.",
      "Sum total bonuses received aliased as `total_bonus`.",
      "Filter for employees with 2 or more reviews and a non-null bonus sum.",
      "Order by total bonus in descending order.",
      "Limit to the single top rewarded employee.",
      "Display `emp_id`, `review_count`, and `total_bonus`."
    ],
    tableName: "Performance_Reviews",
    hint: "Combine HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL with ORDER BY total_bonus DESC and LIMIT 1.",
    expectedSql: "SELECT emp_id, COUNT(*) AS review_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY emp_id HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL ORDER BY total_bonus DESC LIMIT 1;",
    explanation: "Finds the employee with the greatest cumulative bonus compensation across multiple appraisal cycles.",
    tags: ["having", "order-by", "limit", "bonus"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  }
];
