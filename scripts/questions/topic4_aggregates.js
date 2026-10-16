export const TOPIC4_QUESTIONS = [
  {
    "id": 114,
    "title": "Overall Salary Summary",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Beginner",
    "problemStatement": "Calculate the minimum, maximum, average (rounded to 2 decimal places), and total sum of salaries across all employees.",
    "requirements": [
      "Calculate minimum salary aliased as `min_sal`.",
      "Calculate maximum salary aliased as `max_sal`.",
      "Calculate average salary rounded to 2 decimals aliased as `avg_sal`.",
      "Calculate sum of salaries aliased as `total_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Use MIN, MAX, ROUND(AVG(), 2), and SUM functions on the salary column.",
    "expectedSql": "SELECT MIN(salary) AS min_sal, MAX(salary) AS max_sal, ROUND(AVG(salary), 2) AS avg_sal, SUM(salary) AS total_payroll FROM Employees;",
    "explanation": "Multiple aggregate functions can be executed in a single query to compute comprehensive statistical benchmarks across a table.",
    "tags": [
      "aggregates",
      "min",
      "max",
      "avg",
      "sum"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 115,
    "title": "Department Budget Summary",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Beginner",
    "problemStatement": "Calculate the total, average (rounded to 2 decimals), and maximum budget across all departments.",
    "requirements": [
      "Calculate total budget aliased as `total_dept_budget`.",
      "Calculate average budget rounded to 2 decimals aliased as `avg_dept_budget`.",
      "Calculate maximum budget aliased as `max_dept_budget`."
    ],
    "tableName": "Departments",
    "hint": "Use SUM, ROUND(AVG(), 2), and MAX on the budget column of the Departments table.",
    "expectedSql": "SELECT SUM(budget) AS total_dept_budget, ROUND(AVG(budget), 2) AS avg_dept_budget, MAX(budget) AS max_dept_budget FROM Departments;",
    "explanation": "Aggregates numerical budget allocations to summarize overall enterprise operational capital.",
    "tags": [
      "aggregates",
      "sum",
      "avg",
      "departments"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 116,
    "title": "Bonus Payout Statistics",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Find the count of awarded bonuses, total bonus payout, and average bonus amount (rounded to 2 decimal places).",
    "requirements": [
      "Count non-null bonuses aliased as `bonus_count`.",
      "Calculate total bonus amount aliased as `total_bonus_payout`.",
      "Calculate average bonus rounded to 2 decimals aliased as `avg_bonus_payout`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "COUNT(bonus) automatically ignores NULL values.",
    "expectedSql": "SELECT COUNT(bonus) AS bonus_count, SUM(bonus) AS total_bonus_payout, ROUND(AVG(bonus), 2) AS avg_bonus_payout FROM Performance_Reviews;",
    "explanation": "COUNT(column) automatically ignores NULL values, contrasting with COUNT(*) which counts all rows.",
    "tags": [
      "aggregates",
      "count",
      "null-handling",
      "sum",
      "avg"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 117,
    "title": "Active Projects Count and Budget",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Find the total number of active projects and their combined budget.",
    "requirements": [
      "Count active projects aliased as `active_projects`.",
      "Calculate total budget of active projects aliased as `total_active_budget`.",
      "Filter for `status = 'Active'`."
    ],
    "tableName": "Projects",
    "hint": "Apply COUNT(*) and SUM(budget) with a WHERE clause filtering for 'Active'.",
    "expectedSql": "SELECT COUNT(*) AS active_projects, SUM(budget) AS total_active_budget FROM Projects WHERE status = 'Active';",
    "explanation": "Applies a WHERE filter before aggregating to restrict calculations strictly to active corporate projects.",
    "tags": [
      "aggregates",
      "where",
      "sum",
      "count"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 118,
    "title": "Total and Average Weekly Project Hours",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Calculate the total weekly hours and the average weekly hours (rounded to 2 decimals) allocated across all project assignments.",
    "requirements": [
      "Sum total hours aliased as `total_weekly_hours`.",
      "Calculate average hours rounded to 2 decimals aliased as `avg_weekly_hours`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use SUM and ROUND(AVG(), 2) on hours_allocated.",
    "expectedSql": "SELECT SUM(hours_allocated) AS total_weekly_hours, ROUND(AVG(hours_allocated), 2) AS avg_weekly_hours FROM Employee_Projects;",
    "explanation": "Measures aggregate human resource capacity committed across active initiatives.",
    "tags": [
      "aggregates",
      "workload",
      "sum",
      "avg"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 119,
    "title": "Count IT vs Non-IT Employees",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Count how many employees work in IT compared to all other departments.",
    "requirements": [
      "Count IT employees aliased as `it_count`.",
      "Count non-IT employees aliased as `non_it_count`."
    ],
    "tableName": "Employees",
    "hint": "Use conditional aggregation with SUM(CASE WHEN ... THEN 1 ELSE 0 END).",
    "expectedSql": "SELECT SUM(CASE WHEN department = 'IT' THEN 1 ELSE 0 END) AS it_count, SUM(CASE WHEN department != 'IT' THEN 1 ELSE 0 END) AS non_it_count FROM Employees;",
    "explanation": "Conditional aggregation (CASE inside SUM/COUNT) pivots categorical counts into dedicated output columns.",
    "tags": [
      "aggregates",
      "conditional-aggregation",
      "case"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 120,
    "title": "Senior vs Junior Payroll Spend",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Calculate the total monthly salary spend for senior employees (5+ years experience) versus junior employees (< 5 years experience).",
    "requirements": [
      "Sum salary for employees with `experience >= 5` aliased as `senior_payroll`.",
      "Sum salary for employees with `experience < 5` aliased as `junior_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END).",
    "expectedSql": "SELECT SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END) AS senior_payroll, SUM(CASE WHEN experience < 5 THEN salary ELSE 0 END) AS junior_payroll FROM Employees;",
    "explanation": "Conditionally sums quantitative values based on logical boundary conditions.",
    "tags": [
      "aggregates",
      "conditional-aggregation",
      "case",
      "sum"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 121,
    "title": "Count Top vs Low-to-Mid Ratings",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Count the number of reviews with a perfect rating of 5, and reviews with a rating of 3 or below.",
    "requirements": [
      "Count reviews where `rating = 5` aliased as `top_ratings`.",
      "Count reviews where `rating <= 3` aliased as `low_or_mid_ratings`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use conditional aggregation with CASE expressions.",
    "expectedSql": "SELECT SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS top_ratings, SUM(CASE WHEN rating <= 3 THEN 1 ELSE 0 END) AS low_or_mid_ratings FROM Performance_Reviews;",
    "explanation": "Produces a distribution summary of employee appraisal ratings in a single query.",
    "tags": [
      "aggregates",
      "conditional-aggregation",
      "case"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 122,
    "title": "Count Projects by Status in Columns",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Count the number of projects in 'Completed', 'Active', and 'Planning' status as separate columns.",
    "requirements": [
      "Count completed projects aliased as `completed_count`.",
      "Count active projects aliased as `active_count`.",
      "Count planning projects aliased as `planning_count`."
    ],
    "tableName": "Projects",
    "hint": "Use SUM(CASE WHEN status = '...' THEN 1 ELSE 0 END) for each status.",
    "expectedSql": "SELECT SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count, SUM(CASE WHEN status = 'Active' THEN 1 ELSE 0 END) AS active_count, SUM(CASE WHEN status = 'Planning' THEN 1 ELSE 0 END) AS planning_count FROM Projects;",
    "explanation": "Pivots discrete categorical statuses into columnar metrics without requiring multiple queries.",
    "tags": [
      "aggregates",
      "case",
      "pivot"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 123,
    "title": "Hyderabad vs Other Cities Payroll",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Calculate the total salary spend for employees in Hyderabad compared to all other cities.",
    "requirements": [
      "Sum salary for employees in 'Hyderabad' aliased as `hyd_payroll`.",
      "Sum salary for employees outside 'Hyderabad' aliased as `other_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Use conditional SUM with CASE WHEN checking city.",
    "expectedSql": "SELECT SUM(CASE WHEN city = 'Hyderabad' THEN salary ELSE 0 END) AS hyd_payroll, SUM(CASE WHEN city != 'Hyderabad' THEN salary ELSE 0 END) AS other_payroll FROM Employees;",
    "explanation": "Facilitates geographic financial reporting by segmenting expenditures based on regional criteria.",
    "tags": [
      "aggregates",
      "case",
      "payroll"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 124,
    "title": "Count Unique Departments, Cities, and Total Employees",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Beginner",
    "problemStatement": "Find the number of distinct departments, distinct cities, and total employees in the company.",
    "requirements": [
      "Count distinct departments aliased as `unique_departments`.",
      "Count distinct cities aliased as `unique_cities`.",
      "Count total employees aliased as `total_employees`."
    ],
    "tableName": "Employees",
    "hint": "Use COUNT(DISTINCT column) for unique counts and COUNT(*) for total rows.",
    "expectedSql": "SELECT COUNT(DISTINCT department) AS unique_departments, COUNT(DISTINCT city) AS unique_cities, COUNT(*) AS total_employees FROM Employees;",
    "explanation": "COUNT(DISTINCT column) strips duplicate occurrences before evaluating aggregate cardinality.",
    "tags": [
      "aggregates",
      "count-distinct",
      "cardinality"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 125,
    "title": "Count Distinct Employees Assigned to Projects",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Find the total number of unique employees who are currently assigned to at least one project.",
    "requirements": [
      "Count distinct employee IDs aliased as `staffed_employees`.",
      "Query the Employee_Projects table."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use COUNT(DISTINCT emp_id).",
    "expectedSql": "SELECT COUNT(DISTINCT emp_id) AS staffed_employees FROM Employee_Projects;",
    "explanation": "Since some employees are assigned to multiple projects, COUNT(DISTINCT) ensures each employee is counted only once.",
    "tags": [
      "aggregates",
      "count-distinct",
      "junction-table"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 126,
    "title": "Count Distinct Review Years",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Find how many distinct years have performance reviews recorded in the database.",
    "requirements": [
      "Count distinct review years aliased as `evaluated_years`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use COUNT(DISTINCT review_year).",
    "expectedSql": "SELECT COUNT(DISTINCT review_year) AS evaluated_years FROM Performance_Reviews;",
    "explanation": "Evaluates the historical span of recorded appraisal cycles by deduplicating appraisal years.",
    "tags": [
      "aggregates",
      "count-distinct",
      "temporal"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 127,
    "title": "Count Distinct Project Statuses",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Find the total number of unique status values across all projects.",
    "requirements": [
      "Count distinct statuses aliased as `unique_statuses`."
    ],
    "tableName": "Projects",
    "hint": "Use COUNT(DISTINCT status).",
    "expectedSql": "SELECT COUNT(DISTINCT status) AS unique_statuses FROM Projects;",
    "explanation": "Identifies the variety of project lifecycle states currently occupied across corporate projects.",
    "tags": [
      "aggregates",
      "count-distinct"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 128,
    "title": "Average of Distinct Salaries",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Medium",
    "problemStatement": "Calculate the average of unique salary values in the company, rounded to 2 decimal places.",
    "requirements": [
      "Calculate the average of distinct salary values, rounded to 2 decimal places, aliased as `avg_unique_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use ROUND(AVG(DISTINCT salary), 2).",
    "expectedSql": "SELECT ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary FROM Employees;",
    "explanation": "Averaging distinct salaries removes frequency weighting from identical compensation levels.",
    "tags": [
      "aggregates",
      "avg-distinct",
      "rounding"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 129,
    "title": "Chennai Office Total Payroll and Average Experience",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Calculate total salary spend and average years of experience (rounded to 2 decimals) for employees in Chennai.",
    "requirements": [
      "Sum salaries aliased as `chennai_payroll`.",
      "Calculate average experience rounded to 2 decimals aliased as `avg_chennai_exp`.",
      "Filter for `city = 'Chennai'`."
    ],
    "tableName": "Employees",
    "hint": "Filter by city with WHERE and apply SUM and AVG.",
    "expectedSql": "SELECT SUM(salary) AS chennai_payroll, ROUND(AVG(experience), 2) AS avg_chennai_exp FROM Employees WHERE city = 'Chennai';",
    "explanation": "Aggregates key human resources metrics for a specific geographical branch.",
    "tags": [
      "aggregates",
      "where",
      "filtering",
      "sum",
      "avg"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 130,
    "title": "Highest and Lowest Bonus in 2024",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Find the highest and lowest bonus awarded in the year 2024.",
    "requirements": [
      "Find maximum bonus aliased as `max_2024_bonus`.",
      "Find minimum bonus aliased as `min_2024_bonus`.",
      "Filter for `review_year = 2024`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use MAX(bonus) and MIN(bonus) with WHERE review_year = 2024.",
    "expectedSql": "SELECT MAX(bonus) AS max_2024_bonus, MIN(bonus) AS min_2024_bonus FROM Performance_Reviews WHERE review_year = 2024;",
    "explanation": "MIN() automatically ignores NULL values when calculating the lowest non-null payout.",
    "tags": [
      "aggregates",
      "min",
      "max",
      "where"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 131,
    "title": "Salary Range in IT Department",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Medium",
    "problemStatement": "Calculate the difference between the highest and lowest salary in the IT department.",
    "requirements": [
      "Calculate MAX(salary) minus MIN(salary) aliased as `it_salary_range`.",
      "Filter for `department = 'IT'`."
    ],
    "tableName": "Employees",
    "hint": "Subtract MIN(salary) from MAX(salary) in your SELECT clause.",
    "expectedSql": "SELECT (MAX(salary) - MIN(salary)) AS it_salary_range FROM Employees WHERE department = 'IT';",
    "explanation": "Subtracting MIN from MAX produces the range or disparity between the highest and lowest earners in a division.",
    "tags": [
      "aggregates",
      "range",
      "subtraction",
      "where"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 132,
    "title": "Count High-Earning Recent Hires",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Count the number of employees who joined after 2020 and earn more than 40,000.",
    "requirements": [
      "Count matching employees aliased as `high_earning_recent_joiners`.",
      "Filter for `joining_year > 2020` and `salary > 40000`."
    ],
    "tableName": "Employees",
    "hint": "Combine the two filtering conditions in WHERE and count the rows.",
    "expectedSql": "SELECT COUNT(*) AS high_earning_recent_joiners FROM Employees WHERE joining_year > 2020 AND salary > 40000;",
    "explanation": "Counts personnel matching multiple criteria across temporal and compensation dimensions.",
    "tags": [
      "aggregates",
      "count",
      "where"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 133,
    "title": "Total Budget of Completed Projects",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Calculate the total budget spent on all completed projects.",
    "requirements": [
      "Sum project budgets aliased as `completed_project_spend`.",
      "Filter for `status = 'Completed'`."
    ],
    "tableName": "Projects",
    "hint": "Use SUM(budget) WHERE status = 'Completed'.",
    "expectedSql": "SELECT SUM(budget) AS completed_project_spend FROM Projects WHERE status = 'Completed';",
    "explanation": "Sums financial expenditures of successfully finalized enterprise initiatives.",
    "tags": [
      "aggregates",
      "sum",
      "where",
      "status"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 134,
    "title": "Average Age and Experience in HR and Finance",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Medium",
    "problemStatement": "Calculate the average age and average experience (both rounded to 1 decimal place) for employees in HR or Finance.",
    "requirements": [
      "Calculate average age rounded to 1 decimal aliased as `avg_age`.",
      "Calculate average experience rounded to 1 decimal aliased as `avg_exp`.",
      "Filter for `department IN ('HR', 'Finance')`."
    ],
    "tableName": "Employees",
    "hint": "Use ROUND(AVG(...), 1) with an IN filter on department.",
    "expectedSql": "SELECT ROUND(AVG(age), 1) AS avg_age, ROUND(AVG(experience), 1) AS avg_exp FROM Employees WHERE department IN ('HR', 'Finance');",
    "explanation": "Computes rounded demographic averages across multiple corporate business divisions.",
    "tags": [
      "aggregates",
      "avg",
      "rounding",
      "where"
    ],
    "estimatedTimeMinutes": 3
  }
];
