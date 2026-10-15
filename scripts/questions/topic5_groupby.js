export const TOPIC5_QUESTIONS = [
  // Subtopic: Multi-Column Grouping (IDs 135 to 140)
  {
    id: 135,
    title: "Segment workforce distribution across department and branch city",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display department, city, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_salary grouped by both department and city.",
    requirements: [
      "Group by department, city.",
      "Calculate COUNT(*) AS emp_count and ROUND(AVG(salary), 2) AS avg_salary.",
      "Select department, city, emp_count, avg_salary."
    ],
    tableName: "Employees",
    hint: "GROUP BY department, city",
    expectedSql: "SELECT department, city, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department, city;",
    explanation: "Grouping by multiple attributes partitions the dataset into composite cross-tabulated buckets.",
    tags: ["group-by", "multi-column", "headcount"],
    estimatedTimeMinutes: 3
  },
  {
    id: 136,
    title: "Analyze project count and budget commitments by department and status",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Projects to display dept_id, status, COUNT(*) AS project_count, and SUM(budget) AS total_budget grouped by dept_id and status.",
    requirements: [
      "Query Projects table.",
      "Group by dept_id, status.",
      "Select dept_id, status, COUNT(*) AS project_count, SUM(budget) AS total_budget."
    ],
    tableName: "Projects",
    hint: "GROUP BY dept_id, status",
    expectedSql: "SELECT dept_id, status, COUNT(*) AS project_count, SUM(budget) AS total_budget FROM Projects GROUP BY dept_id, status;",
    explanation: "Breaks down project investments within each department according to operational workflow status.",
    tags: ["group-by", "multi-column", "projects", "sum"],
    estimatedTimeMinutes: 3
  },
  {
    id: 137,
    title: "Cross-tabulate appraisal rating counts and bonus totals by year",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Performance_Reviews to display review_year, rating, COUNT(*) AS review_count, and COALESCE(SUM(bonus), 0) AS total_bonuses grouped by review_year and rating.",
    requirements: [
      "Group by review_year, rating.",
      "Select review_year, rating, COUNT(*) AS review_count, COALESCE(SUM(bonus), 0) AS total_bonuses."
    ],
    tableName: "Performance_Reviews",
    hint: "GROUP BY review_year, rating",
    expectedSql: "SELECT review_year, rating, COUNT(*) AS review_count, COALESCE(SUM(bonus), 0) AS total_bonuses FROM Performance_Reviews GROUP BY review_year, rating;",
    explanation: "Reveals how performance tiers evolved each year alongside their corresponding financial reward totals.",
    tags: ["group-by", "multi-column", "reviews", "coalesce"],
    estimatedTimeMinutes: 3
  },
  {
    id: 138,
    title: "Aggregate staffing headcounts and hours by project and assigned role",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employee_Projects to display project_id, assigned_role, COUNT(*) AS role_staff_count, and SUM(hours_allocated) AS total_role_hours grouped by project_id and assigned_role.",
    requirements: [
      "Query Employee_Projects.",
      "Group by project_id, assigned_role.",
      "Select project_id, assigned_role, COUNT(*) AS role_staff_count, SUM(hours_allocated) AS total_role_hours."
    ],
    tableName: "Employee_Projects",
    hint: "GROUP BY project_id, assigned_role",
    expectedSql: "SELECT project_id, assigned_role, COUNT(*) AS role_staff_count, SUM(hours_allocated) AS total_role_hours FROM Employee_Projects GROUP BY project_id, assigned_role;",
    explanation: "Tracks job function allocations across active enterprise project rosters.",
    tags: ["group-by", "multi-column", "roles", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 139,
    title: "Map annual hiring volume across departments",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display joining_year, department, and COUNT(*) AS hires_count grouped by joining_year and department.",
    requirements: [
      "Select joining_year, department, COUNT(*) AS hires_count from Employees.",
      "Group by joining_year, department."
    ],
    tableName: "Employees",
    hint: "GROUP BY joining_year, department",
    expectedSql: "SELECT joining_year, department, COUNT(*) AS hires_count FROM Employees GROUP BY joining_year, department;",
    explanation: "Visualizes organizational expansion history by charting annual headcount additions per team.",
    tags: ["group-by", "multi-column", "hiring", "temporal"],
    estimatedTimeMinutes: 3
  },
  {
    id: 140,
    title: "Cluster employee experience distributions within branch locations",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display city, experience, and COUNT(*) AS head_count grouped by city and experience.",
    requirements: [
      "Query Employees.",
      "Group by city, experience.",
      "Select city, experience, COUNT(*) AS head_count."
    ],
    tableName: "Employees",
    hint: "GROUP BY city, experience",
    expectedSql: "SELECT city, experience, COUNT(*) AS head_count FROM Employees GROUP BY city, experience;",
    explanation: "Highlights seniority patterns and regional talent distribution across office sites.",
    tags: ["group-by", "multi-column", "demographics"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Complex Aggregations per Category (IDs 141 to 146)
  {
    id: 141,
    title: "Measure departmental salary disparities (minimum, maximum, and spread)",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display department, MIN(salary) AS min_salary, MAX(salary) AS max_salary, and (MAX(salary) - MIN(salary)) AS salary_spread grouped by department.",
    requirements: [
      "Group by department.",
      "Calculate MIN(salary) AS min_salary, MAX(salary) AS max_salary, (MAX(salary) - MIN(salary)) AS salary_spread.",
      "Select department, min_salary, max_salary, salary_spread."
    ],
    tableName: "Employees",
    hint: "GROUP BY department",
    expectedSql: "SELECT department, MIN(salary) AS min_salary, MAX(salary) AS max_salary, (MAX(salary) - MIN(salary)) AS salary_spread FROM Employees GROUP BY department;",
    explanation: "Performs mathematical operations on aggregate results to compute internal compensation spreads.",
    tags: ["group-by", "aggregates", "spread", "min-max"],
    estimatedTimeMinutes: 3
  },
  {
    id: 142,
    title: "Summarize staffing footprint and weekly hours committed per project",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employee_Projects to display project_id, COUNT(DISTINCT emp_id) AS assigned_staff, SUM(hours_allocated) AS total_hours, and ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member grouped by project_id.",
    requirements: [
      "Group by project_id.",
      "Select project_id, COUNT(DISTINCT emp_id) AS assigned_staff, SUM(hours_allocated) AS total_hours, ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member."
    ],
    tableName: "Employee_Projects",
    hint: "GROUP BY project_id",
    expectedSql: "SELECT project_id, COUNT(DISTINCT emp_id) AS assigned_staff, SUM(hours_allocated) AS total_hours, ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member FROM Employee_Projects GROUP BY project_id;",
    explanation: "Synthesizes staffing cardinality and resource commitment per project initiative.",
    tags: ["group-by", "count-distinct", "sum", "avg"],
    estimatedTimeMinutes: 3
  },
  {
    id: 143,
    title: "Evaluate individual employee appraisal track records",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Performance_Reviews to display emp_id, COUNT(*) AS total_reviews, ROUND(AVG(rating), 2) AS avg_rating, and COALESCE(MAX(bonus), 0) AS highest_bonus grouped by emp_id.",
    requirements: [
      "Group by emp_id.",
      "Select emp_id, COUNT(*) AS total_reviews, ROUND(AVG(rating), 2) AS avg_rating, COALESCE(MAX(bonus), 0) AS highest_bonus."
    ],
    tableName: "Performance_Reviews",
    hint: "GROUP BY emp_id",
    expectedSql: "SELECT emp_id, COUNT(*) AS total_reviews, ROUND(AVG(rating), 2) AS avg_rating, COALESCE(MAX(bonus), 0) AS highest_bonus FROM Performance_Reviews GROUP BY emp_id;",
    explanation: "Summarizes longitudinal evaluation metrics for each reviewed employee.",
    tags: ["group-by", "reviews", "avg", "max"],
    estimatedTimeMinutes: 3
  },
  {
    id: 144,
    title: "Analyze city-level payroll totals and high-earner counts",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display city, COUNT(*) AS total_staff, SUM(salary) AS total_payroll, and SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners_count grouped by city.",
    requirements: [
      "Group by city.",
      "Calculate total_staff, total_payroll, and high_earners_count.",
      "Select city, total_staff, total_payroll, high_earners_count."
    ],
    tableName: "Employees",
    hint: "GROUP BY city",
    expectedSql: "SELECT city, COUNT(*) AS total_staff, SUM(salary) AS total_payroll, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners_count FROM Employees GROUP BY city;",
    explanation: "Combines standard grouping with conditional aggregation inside each branch city.",
    tags: ["group-by", "conditional-aggregation", "city"],
    estimatedTimeMinutes: 3
  },
  {
    id: 145,
    title: "Compare project investment profiles by project lifecycle status",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Projects to display status, COUNT(*) AS projects_count, MIN(budget) AS min_budget, MAX(budget) AS max_budget, and ROUND(AVG(budget), 2) AS avg_budget grouped by status.",
    requirements: [
      "Group by status.",
      "Select status, COUNT(*) AS projects_count, MIN(budget) AS min_budget, MAX(budget) AS max_budget, ROUND(AVG(budget), 2) AS avg_budget."
    ],
    tableName: "Projects",
    hint: "GROUP BY status",
    expectedSql: "SELECT status, COUNT(*) AS projects_count, MIN(budget) AS min_budget, MAX(budget) AS max_budget, ROUND(AVG(budget), 2) AS avg_budget FROM Projects GROUP BY status;",
    explanation: "Benchmarks budgetary parameters across project statuses.",
    tags: ["group-by", "status", "min-max-avg"],
    estimatedTimeMinutes: 2
  },
  {
    id: 146,
    title: "Aggregate department counts and cumulative regional budgets by headquarters city",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Departments to display location, COUNT(*) AS dept_count, and SUM(budget) AS total_regional_budget grouped by location.",
    requirements: [
      "Group by location.",
      "Select location, COUNT(*) AS dept_count, SUM(budget) AS total_regional_budget."
    ],
    tableName: "Departments",
    hint: "GROUP BY location",
    expectedSql: "SELECT location, COUNT(*) AS dept_count, SUM(budget) AS total_regional_budget FROM Departments GROUP BY location;",
    explanation: "Summarizes departmental infrastructure presence and operating capital per location.",
    tags: ["group-by", "departments", "location"],
    estimatedTimeMinutes: 2
  },

  // Subtopic: Filtered Grouping (WHERE before GROUP BY) (IDs 147 to 152)
  {
    id: 147,
    title: "Group modern cohort employees hired after 2020 by department",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display department, COUNT(*) AS recent_hires, and ROUND(AVG(salary), 2) AS avg_recent_salary for employees where joining_year > 2020 grouped by department.",
    requirements: [
      "Filter with WHERE joining_year > 2020.",
      "Group by department.",
      "Select department, recent_hires, avg_recent_salary."
    ],
    tableName: "Employees",
    hint: "WHERE joining_year > 2020 GROUP BY department",
    expectedSql: "SELECT department, COUNT(*) AS recent_hires, ROUND(AVG(salary), 2) AS avg_recent_salary FROM Employees WHERE joining_year > 2020 GROUP BY department;",
    explanation: "WHERE filters rows before the aggregation phase, leaving only post-2020 joiners in each group.",
    tags: ["group-by", "where", "filtering"],
    estimatedTimeMinutes: 3
  },
  {
    id: 148,
    title: "Group incomplete corporate projects by department",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Projects to display dept_id, COUNT(*) AS pending_projects, and SUM(budget) AS pending_budget for projects where status != 'Completed' grouped by dept_id.",
    requirements: [
      "Filter where status != 'Completed'.",
      "Group by dept_id.",
      "Select dept_id, COUNT(*) AS pending_projects, SUM(budget) AS pending_budget."
    ],
    tableName: "Projects",
    hint: "WHERE status != 'Completed' GROUP BY dept_id",
    expectedSql: "SELECT dept_id, COUNT(*) AS pending_projects, SUM(budget) AS pending_budget FROM Projects WHERE status != 'Completed' GROUP BY dept_id;",
    explanation: "Filters out completed milestones prior to computing active capital obligations.",
    tags: ["group-by", "where", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 149,
    title: "Count high-rating performance reviews (rating >= 4) per reviewed employee",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Performance_Reviews to display emp_id, COUNT(*) AS top_reviews, and SUM(bonus) AS total_merit_bonus for reviews where rating >= 4 grouped by emp_id.",
    requirements: [
      "Filter where rating >= 4.",
      "Group by emp_id.",
      "Select emp_id, COUNT(*) AS top_reviews, SUM(bonus) AS total_merit_bonus."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE rating >= 4 GROUP BY emp_id",
    expectedSql: "SELECT emp_id, COUNT(*) AS top_reviews, SUM(bonus) AS total_merit_bonus FROM Performance_Reviews WHERE rating >= 4 GROUP BY emp_id;",
    explanation: "Isolates top-quartile appraisal outcomes prior to computing merit bonus sums.",
    tags: ["group-by", "where", "rating"],
    estimatedTimeMinutes: 3
  },
  {
    id: 150,
    title: "Group well-compensated staff (salary >= 40000) by city",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display city, COUNT(*) AS mid_to_senior_count, and ROUND(AVG(experience), 2) AS avg_experience for employees with salary >= 40000 grouped by city.",
    requirements: [
      "Filter where salary >= 40000.",
      "Group by city.",
      "Select city, COUNT(*) AS mid_to_senior_count, ROUND(AVG(experience), 2) AS avg_experience."
    ],
    tableName: "Employees",
    hint: "WHERE salary >= 40000 GROUP BY city",
    expectedSql: "SELECT city, COUNT(*) AS mid_to_senior_count, ROUND(AVG(experience), 2) AS avg_experience FROM Employees WHERE salary >= 40000 GROUP BY city;",
    explanation: "Computes seniority metrics for premium salary brackets in each operating location.",
    tags: ["group-by", "where", "salary"],
    estimatedTimeMinutes: 2
  },
  {
    id: 151,
    title: "Count leadership and managerial assignments per project",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employee_Projects to display project_id and COUNT(*) AS leadership_roles for assignments where assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%' grouped by project_id.",
    requirements: [
      "Filter where assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%'.",
      "Group by project_id.",
      "Select project_id, COUNT(*) AS leadership_roles."
    ],
    tableName: "Employee_Projects",
    hint: "WHERE assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%' GROUP BY project_id",
    expectedSql: "SELECT project_id, COUNT(*) AS leadership_roles FROM Employee_Projects WHERE assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%' GROUP BY project_id;",
    explanation: "Identifies the depth of leadership oversight dedicated to each operational initiative.",
    tags: ["group-by", "where", "like"],
    estimatedTimeMinutes: 3
  },
  {
    id: 152,
    title: "Analyze young talent profiles (under age 30) across departments",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display department, COUNT(*) AS young_talent_count, and MIN(salary) AS min_young_salary for employees where age < 30 grouped by department.",
    requirements: [
      "Filter where age < 30.",
      "Group by department.",
      "Select department, COUNT(*) AS young_talent_count, MIN(salary) AS min_young_salary."
    ],
    tableName: "Employees",
    hint: "WHERE age < 30 GROUP BY department",
    expectedSql: "SELECT department, COUNT(*) AS young_talent_count, MIN(salary) AS min_young_salary FROM Employees WHERE age < 30 GROUP BY department;",
    explanation: "Pre-filters workforce by age criteria to analyze base compensation among early-career talent.",
    tags: ["group-by", "where", "age"],
    estimatedTimeMinutes: 2
  },

  // Subtopic: Expressions & Transformations in GROUP BY (IDs 153 to 160)
  {
    id: 153,
    title: "Group employees into categorical compensation tiers using CASE",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to categorize employees into three salary tiers: 'Entry' (< 35000), 'Mid' (35000-60000), and 'Executive' (> 60000). Display the tier as salary_tier and the count of employees as tier_count.",
    requirements: [
      "Use CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END AS salary_tier.",
      "Group by the identical CASE expression.",
      "Count employees in each tier as tier_count."
    ],
    tableName: "Employees",
    hint: "GROUP BY CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END",
    expectedSql: "SELECT CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END AS salary_tier, COUNT(*) AS tier_count FROM Employees GROUP BY CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END;",
    explanation: "SQL allows grouping directly by dynamic CASE expressions to generate custom dimensional buckets.",
    tags: ["group-by", "case", "tiers"],
    estimatedTimeMinutes: 3
  },
  {
    id: 154,
    title: "Group employees by seniority bands and calculate average compensation",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to segment employees into experience brackets: 'Junior' (< 3 yrs), 'Intermediate' (3 to 6 yrs), and 'Senior' (> 6 yrs). Display experience_band, COUNT(*) AS count_in_band, and ROUND(AVG(salary), 2) AS avg_band_salary.",
    requirements: [
      "Use CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END AS experience_band.",
      "Group by the CASE expression.",
      "Calculate count_in_band and avg_band_salary."
    ],
    tableName: "Employees",
    hint: "GROUP BY CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END",
    expectedSql: "SELECT CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END AS experience_band, COUNT(*) AS count_in_band, ROUND(AVG(salary), 2) AS avg_band_salary FROM Employees GROUP BY CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END;",
    explanation: "Demonstrates experience band stratification and compensation progression analysis.",
    tags: ["group-by", "case", "bands", "avg"],
    estimatedTimeMinutes: 4
  },
  {
    id: 155,
    title: "Partition performance reviews by bonus availability status",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Performance_Reviews to categorize reviews as 'Bonus Awarded' or 'No Bonus Awarded'. Display bonus_status, COUNT(*) AS reviews_count, and ROUND(AVG(rating), 2) AS avg_group_rating.",
    requirements: [
      "Use CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END AS bonus_status.",
      "Group by the CASE expression.",
      "Select bonus_status, reviews_count, avg_group_rating."
    ],
    tableName: "Performance_Reviews",
    hint: "GROUP BY CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END",
    expectedSql: "SELECT CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END AS bonus_status, COUNT(*) AS reviews_count, ROUND(AVG(rating), 2) AS avg_group_rating FROM Performance_Reviews GROUP BY CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END;",
    explanation: "Groups records by boolean nullability status to assess rating differences between compensated and uncompensated reviews.",
    tags: ["group-by", "case", "nullability"],
    estimatedTimeMinutes: 3
  },
  {
    id: 156,
    title: "Group initiatives by investment scale (Small, Medium, Enterprise)",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Projects to group projects into budget tiers: 'Small' (< 150000), 'Medium' (150000 to 350000), and 'Enterprise' (> 350000). Display budget_tier and COUNT(*) AS project_count.",
    requirements: [
      "Use CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END AS budget_tier.",
      "Group by the same expression.",
      "Select budget_tier, COUNT(*) AS project_count."
    ],
    tableName: "Projects",
    hint: "GROUP BY CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END",
    expectedSql: "SELECT CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END AS budget_tier, COUNT(*) AS project_count FROM Projects GROUP BY CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END;",
    explanation: "Partitions initiatives into size buckets for portfolio management.",
    tags: ["group-by", "case", "projects"],
    estimatedTimeMinutes: 3
  },
  {
    id: 157,
    title: "Group employees by the character length of their names",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display LENGTH(emp_name) AS name_length and COUNT(*) AS employee_count grouped by LENGTH(emp_name).",
    requirements: [
      "Use LENGTH(emp_name) AS name_length.",
      "Group by LENGTH(emp_name).",
      "Select name_length, COUNT(*) AS employee_count."
    ],
    tableName: "Employees",
    hint: "GROUP BY LENGTH(emp_name)",
    expectedSql: "SELECT LENGTH(emp_name) AS name_length, COUNT(*) AS employee_count FROM Employees GROUP BY LENGTH(emp_name);",
    explanation: "Demonstrates grouping by string function outputs.",
    tags: ["group-by", "string-functions", "length"],
    estimatedTimeMinutes: 3
  },
  {
    id: 158,
    title: "Compare total payroll between legacy and recent employee hiring cohorts",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to group employees into 'Pre-2022' and '2022-and-Later' cohorts based on joining_year. Display cohort_name, COUNT(*) AS head_count, and SUM(salary) AS total_cohort_payroll.",
    requirements: [
      "Use CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END AS cohort_name.",
      "Group by this CASE expression.",
      "Select cohort_name, COUNT(*) AS head_count, SUM(salary) AS total_cohort_payroll."
    ],
    tableName: "Employees",
    hint: "GROUP BY CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END",
    expectedSql: "SELECT CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END AS cohort_name, COUNT(*) AS head_count, SUM(salary) AS total_cohort_payroll FROM Employees GROUP BY CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END;",
    explanation: "Splits enterprise workforce chronologically to contrast legacy salary weights with recent hiring costs.",
    tags: ["group-by", "case", "cohorts"],
    estimatedTimeMinutes: 3
  },
  {
    id: 159,
    title: "Categorize project staffing commitments by part-time versus full-time load",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employee_Projects to classify assignments as 'Part-Time' (< 25 hrs) or 'Full-Time' (>= 25 hrs). Display workload_type, COUNT(*) AS total_assignments, and SUM(hours_allocated) AS sum_weekly_hours.",
    requirements: [
      "Use CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END AS workload_type.",
      "Group by the CASE expression.",
      "Select workload_type, COUNT(*) AS total_assignments, SUM(hours_allocated) AS sum_weekly_hours."
    ],
    tableName: "Employee_Projects",
    hint: "GROUP BY CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END",
    expectedSql: "SELECT CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END AS workload_type, COUNT(*) AS total_assignments, SUM(hours_allocated) AS sum_weekly_hours FROM Employee_Projects GROUP BY CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END;",
    explanation: "Segments project staffing models into workload categories.",
    tags: ["group-by", "case", "workload"],
    estimatedTimeMinutes: 4
  },
  {
    id: 160,
    title: "Cluster enterprise departments into primary and secondary capital tiers",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Departments to group departments into 'Mega Budget' (>= 1000000) and 'Standard Budget' (< 1000000). Display budget_tier, COUNT(*) AS dept_count, and SUM(budget) AS combined_budget.",
    requirements: [
      "Use CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END AS budget_tier.",
      "Group by this CASE expression.",
      "Select budget_tier, COUNT(*) AS dept_count, SUM(budget) AS combined_budget."
    ],
    tableName: "Departments",
    hint: "GROUP BY CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END",
    expectedSql: "SELECT CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END AS budget_tier, COUNT(*) AS dept_count, SUM(budget) AS combined_budget FROM Departments GROUP BY CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END;",
    explanation: "Summarizes the concentration of operating capital between major budget tiers.",
    tags: ["group-by", "case", "departments"],
    estimatedTimeMinutes: 3
  }
];
