export const TOPIC4_QUESTIONS = [
  // Subtopic: Multi-Metric Aggregate Summaries (IDs 114 to 118)
  {
    id: 114,
    title: "Enterprise Payroll Comprehensive Statistical Overview",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Beginner",
    problemStatement: "The executive compensation committee requires a top-level statistical snapshot of workforce compensation. Produce a single-row executive summary displaying the minimum salary, maximum salary, average salary (rounded to 2 decimal places), and total cumulative payroll expenditure across all employees.",
    requirements: [
      "Calculate minimum salary aliased as `min_sal`.",
      "Calculate maximum salary aliased as `max_sal`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_sal`.",
      "Calculate total payroll expenditure aliased as `total_payroll`.",
      "Return a single summary record from the Employees table."
    ],
    tableName: "Employees",
    hint: "Use MIN, MAX, AVG (with ROUND), and SUM aggregate functions across the salary column.",
    expectedSql: "SELECT MIN(salary) AS min_sal, MAX(salary) AS max_sal, ROUND(AVG(salary), 2) AS avg_sal, SUM(salary) AS total_payroll FROM Employees;",
    explanation: "Multiple aggregate functions can be executed in a single query to compute comprehensive statistical benchmarks across a table.",
    tags: ["aggregates", "min", "max", "avg", "sum"],
    estimatedTimeMinutes: 2
  },
  {
    id: 115,
    title: "Departmental Operating Budget Benchmark Summary",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Beginner",
    problemStatement: "The corporate finance directorate is auditing annual operating budgets across all corporate divisions. Produce a consolidated summary showing the cumulative budget allocation, average departmental budget (rounded to 2 decimal places), and the single largest departmental budget.",
    requirements: [
      "Query the Departments table.",
      "Calculate total budget across all departments aliased as `total_dept_budget`.",
      "Calculate average departmental budget rounded to 2 decimal places aliased as `avg_dept_budget`.",
      "Identify the highest budget allocation aliased as `max_dept_budget`."
    ],
    tableName: "Departments",
    hint: "Apply SUM, AVG with ROUND, and MAX on the budget attribute.",
    expectedSql: "SELECT SUM(budget) AS total_dept_budget, ROUND(AVG(budget), 2) AS avg_dept_budget, MAX(budget) AS max_dept_budget FROM Departments;",
    explanation: "Aggregates numerical budget allocations to summarize overall enterprise operational capital.",
    tags: ["aggregates", "sum", "avg", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 116,
    title: "Annual Performance Incentive Pool Audit",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Easy",
    problemStatement: "Corporate accounting is auditing annual incentive payments. Compute the total number of reviews where an incentive was paid, the cumulative bonus pool distributed, and the average bonus payout (rounded to 2 decimal places).",
    requirements: [
      "Query the Performance_Reviews table.",
      "Count the number of non-null bonus payouts aliased as `bonus_count`.",
      "Calculate the sum of all distributed bonuses aliased as `total_bonus_payout`.",
      "Calculate the average bonus payout rounded to 2 decimal places aliased as `avg_bonus_payout`."
    ],
    tableName: "Performance_Reviews",
    hint: "Apply COUNT, SUM, and AVG on the bonus column; remember COUNT(column) ignores null values.",
    expectedSql: "SELECT COUNT(bonus) AS bonus_count, SUM(bonus) AS total_bonus_payout, ROUND(AVG(bonus), 2) AS avg_bonus_payout FROM Performance_Reviews;",
    explanation: "COUNT(column) automatically ignores NULL values, contrasting with COUNT(*) which counts all rows.",
    tags: ["aggregates", "count", "null-handling", "sum", "avg"],
    estimatedTimeMinutes: 2
  },
  {
    id: 117,
    title: "Active Portfolio Capital Commitment",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Easy",
    problemStatement: "The investment committee needs an assessment of corporate capital currently committed to in-progress initiatives. For projects marked as 'Active', calculate the total number of active initiatives and the combined capital budget committed to them.",
    requirements: [
      "Query the Projects table filtering strictly for projects with 'Active' status.",
      "Count the active initiatives aliased as `active_projects`.",
      "Sum the budget commitments for active projects aliased as `total_active_budget`."
    ],
    tableName: "Projects",
    hint: "Filter for status = 'Active' in the WHERE clause, then calculate COUNT(*) and SUM(budget).",
    expectedSql: "SELECT COUNT(*) AS active_projects, SUM(budget) AS total_active_budget FROM Projects WHERE status = 'Active';",
    explanation: "Applies a WHERE filter before aggregating to restrict calculations strictly to active corporate projects.",
    tags: ["aggregates", "where", "sum", "count"],
    estimatedTimeMinutes: 2
  },
  {
    id: 118,
    title: "Enterprise Weekly Staff Allocation Totals",
    topic: "Aggregate Functions",
    subtopic: "Multi-Metric Aggregate Summaries",
    difficulty: "Easy",
    problemStatement: "Resource management is monitoring corporate utilization across initiatives. Calculate the total cumulative weekly hours committed across all assignments and the average hours allocated per assignment (rounded to 2 decimal places).",
    requirements: [
      "Query the Employee_Projects table.",
      "Calculate total allocated weekly hours aliased as `total_weekly_hours`.",
      "Calculate average hours allocated per assignment rounded to 2 decimal places aliased as `avg_weekly_hours`."
    ],
    tableName: "Employee_Projects",
    hint: "Apply SUM and AVG with ROUND to the hours_allocated column.",
    expectedSql: "SELECT SUM(hours_allocated) AS total_weekly_hours, ROUND(AVG(hours_allocated), 2) AS avg_weekly_hours FROM Employee_Projects;",
    explanation: "Measures aggregate human resource capacity committed across active initiatives.",
    tags: ["aggregates", "workload", "sum", "avg"],
    estimatedTimeMinutes: 2
  },

  // Subtopic: Conditional Aggregation & CASE in Aggregates (IDs 119 to 123)
  {
    id: 119,
    title: "Technical vs Non-Technical Workforce Breakdown",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "Workforce analytics requires a single-row headcount comparison between technical and business staff. In one summary record, display the count of employees in the IT department alongside the count of employees in all other departments combined.",
    requirements: [
      "Query the Employees table.",
      "Count staff members in the 'IT' department aliased as `it_count`.",
      "Count staff members outside the 'IT' department aliased as `non_it_count`.",
      "Return both metrics in a single summary row."
    ],
    tableName: "Employees",
    hint: "Use conditional aggregation with SUM and CASE to evaluate each group into separate columns.",
    expectedSql: "SELECT SUM(CASE WHEN department = 'IT' THEN 1 ELSE 0 END) AS it_count, SUM(CASE WHEN department != 'IT' THEN 1 ELSE 0 END) AS non_it_count FROM Employees;",
    explanation: "Conditional aggregation (CASE inside SUM/COUNT) pivots categorical counts into dedicated output columns.",
    tags: ["aggregates", "conditional-aggregation", "case"],
    estimatedTimeMinutes: 3
  },
  {
    id: 120,
    title: "Senior vs Junior Payroll Allocation Analysis",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "Finance leadership is comparing corporate wage expenditure between experienced professionals and junior staff. Generate a single summary row displaying total payroll for seasoned personnel (5 or more years of experience) versus junior personnel (under 5 years of experience).",
    requirements: [
      "Query the Employees table.",
      "Calculate cumulative payroll for staff with `experience >= 5`, aliased as `senior_payroll`.",
      "Calculate cumulative payroll for staff with `experience < 5`, aliased as `junior_payroll`."
    ],
    tableName: "Employees",
    hint: "Use SUM with CASE expressions to conditionally accumulate salary based on years of experience.",
    expectedSql: "SELECT SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END) AS senior_payroll, SUM(CASE WHEN experience < 5 THEN salary ELSE 0 END) AS junior_payroll FROM Employees;",
    explanation: "Conditionally sums quantitative values based on logical boundary conditions.",
    tags: ["aggregates", "conditional-aggregation", "case", "sum"],
    estimatedTimeMinutes: 3
  },
  {
    id: 121,
    title: "Performance Rating Tier Comparison",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "Human Resources is examining the balance between exceptional and standard performance appraisals. In a single row, count the total number of evaluations that received the top rating of 5 versus those that received a rating of 3 or lower.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Count evaluations with a rating of 5 aliased as `top_ratings`.",
      "Count evaluations with a rating of 3 or below aliased as `low_or_mid_ratings`."
    ],
    tableName: "Performance_Reviews",
    hint: "Apply conditional aggregation using SUM and CASE expressions based on the rating value.",
    expectedSql: "SELECT SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS top_ratings, SUM(CASE WHEN rating <= 3 THEN 1 ELSE 0 END) AS low_or_mid_ratings FROM Performance_Reviews;",
    explanation: "Produces a distribution summary of employee appraisal ratings in a single query.",
    tags: ["aggregates", "conditional-aggregation", "case"],
    estimatedTimeMinutes: 3
  },
  {
    id: 122,
    title: "Initiative Lifecycle Pipeline Distribution",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "The PMO is reporting project portfolio health in a horizontal scorecard. In a single row, calculate the count of initiatives in 'Completed' status, 'Active' status, and 'Planning' status.",
    requirements: [
      "Query the Projects table.",
      "Count completed projects aliased as `completed_count`.",
      "Count active projects aliased as `active_count`.",
      "Count planning projects aliased as `planning_count`."
    ],
    tableName: "Projects",
    hint: "Use three conditional SUM(CASE ...) expressions to pivot the counts of each status into columns.",
    expectedSql: "SELECT SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count, SUM(CASE WHEN status = 'Active' THEN 1 ELSE 0 END) AS active_count, SUM(CASE WHEN status = 'Planning' THEN 1 ELSE 0 END) AS planning_count FROM Projects;",
    explanation: "Pivots discrete categorical statuses into columnar metrics without requiring multiple queries.",
    tags: ["aggregates", "case", "pivot"],
    estimatedTimeMinutes: 3
  },
  {
    id: 123,
    title: "Headquarters vs Branch Payroll Expenditure Split",
    topic: "Aggregate Functions",
    subtopic: "Conditional Aggregation & CASE in Aggregates",
    difficulty: "Medium",
    problemStatement: "Corporate treasury is comparing headquarters wage expense against regional branches. Produce a single-row summary showing total payroll paid to employees stationed in Hyderabad headquarters versus all other office cities combined.",
    requirements: [
      "Query the Employees table.",
      "Calculate total payroll for staff based in 'Hyderabad' aliased as `hyd_payroll`.",
      "Calculate total payroll for staff based in all other cities aliased as `other_payroll`."
    ],
    tableName: "Employees",
    hint: "Use conditional SUM aggregation evaluating whether city equals 'Hyderabad' or not.",
    expectedSql: "SELECT SUM(CASE WHEN city = 'Hyderabad' THEN salary ELSE 0 END) AS hyd_payroll, SUM(CASE WHEN city != 'Hyderabad' THEN salary ELSE 0 END) AS other_payroll FROM Employees;",
    explanation: "Facilitates geographic financial reporting by segmenting expenditures based on regional criteria.",
    tags: ["aggregates", "case", "payroll"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Distinct Value Aggregations & Deduplication (IDs 124 to 128)
  {
    id: 124,
    title: "Organizational Breadth and Headcount Census",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Beginner",
    problemStatement: "Executive leadership is evaluating corporate diversification. Produce a summary showing the count of unique operational departments, the count of unique office branch cities, and the total workforce headcount.",
    requirements: [
      "Query the Employees table.",
      "Count distinct operational departments aliased as `unique_departments`.",
      "Count distinct office branch cities aliased as `unique_cities`.",
      "Count total employee records aliased as `total_employees`."
    ],
    tableName: "Employees",
    hint: "Apply COUNT(DISTINCT ...) on department and city, alongside COUNT(*) for overall headcount.",
    expectedSql: "SELECT COUNT(DISTINCT department) AS unique_departments, COUNT(DISTINCT city) AS unique_cities, COUNT(*) AS total_employees FROM Employees;",
    explanation: "COUNT(DISTINCT column) strips duplicate occurrences before evaluating aggregate cardinality.",
    tags: ["aggregates", "count-distinct", "cardinality"],
    estimatedTimeMinutes: 2
  },
  {
    id: 125,
    title: "Distinct Staff Active on Corporate Initiatives",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Easy",
    problemStatement: "Project operations is determining the reach of initiatives across the company. Calculate the exact number of unique employees who have at least one active assignment in Employee_Projects.",
    requirements: [
      "Query the Employee_Projects table.",
      "Count the number of distinct employee IDs assigned to projects.",
      "Alias the resulting metric as `staffed_employees`."
    ],
    tableName: "Employee_Projects",
    hint: "Use COUNT(DISTINCT emp_id) to eliminate duplicate employee records from multiple assignments.",
    expectedSql: "SELECT COUNT(DISTINCT emp_id) AS staffed_employees FROM Employee_Projects;",
    explanation: "Since some employees are assigned to multiple projects, COUNT(DISTINCT) ensures each employee is counted only once.",
    tags: ["aggregates", "count-distinct", "junction-table"],
    estimatedTimeMinutes: 2
  },
  {
    id: 126,
    title: "Historical Appraisal Cycle Inventory",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Easy",
    problemStatement: "Human Resources is verifying the historical span of digital performance records. Count how many distinct calendar years are represented in the performance reviews repository.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Count the distinct review years recorded.",
      "Alias the count as `evaluated_years`."
    ],
    tableName: "Performance_Reviews",
    hint: "Apply the distinct counting function to the review_year column.",
    expectedSql: "SELECT COUNT(DISTINCT review_year) AS evaluated_years FROM Performance_Reviews;",
    explanation: "Evaluates the historical span of recorded appraisal cycles by deduplicating appraisal years.",
    tags: ["aggregates", "count-distinct", "temporal"],
    estimatedTimeMinutes: 2
  },
  {
    id: 127,
    title: "Active Project Lifecycle State Tally",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Easy",
    problemStatement: "Governance is checking standardization across initiative workflows. Determine the total number of distinct lifecycle status classifications currently utilized in the Projects table.",
    requirements: [
      "Query the Projects table.",
      "Count distinct status values.",
      "Alias the metric as `unique_statuses`."
    ],
    tableName: "Projects",
    hint: "Count distinct values in the status column.",
    expectedSql: "SELECT COUNT(DISTINCT status) AS unique_statuses FROM Projects;",
    explanation: "Identifies the variety of project lifecycle states currently occupied across corporate projects.",
    tags: ["aggregates", "count-distinct"],
    estimatedTimeMinutes: 2
  },
  {
    id: 128,
    title: "Mean Distinct Compensation Tier Evaluation",
    topic: "Aggregate Functions",
    subtopic: "Distinct Value Aggregations & Deduplication",
    difficulty: "Medium",
    problemStatement: "Compensation analytics is evaluating wage distribution by analyzing distinct pay points. Calculate the average of all unique salary values present in the company (rounded to 2 decimal places), removing duplicate salary figures before averaging.",
    requirements: [
      "Query the Employees table.",
      "Calculate the average of unique salary values, rounded to 2 decimal places.",
      "Alias the calculated metric as `avg_unique_salary`."
    ],
    tableName: "Employees",
    hint: "Apply AVG(DISTINCT salary) wrapped in ROUND to 2 decimal places.",
    expectedSql: "SELECT ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary FROM Employees;",
    explanation: "Averaging distinct salaries removes frequency weighting from identical compensation levels.",
    tags: ["aggregates", "avg-distinct", "rounding"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Filtered Aggregations & Boundary Metrics (IDs 129 to 134)
  {
    id: 129,
    title: "Chennai Regional Office Payroll and Tenure Profile",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Easy",
    problemStatement: "Regional management is reviewing labor costs and seniority for the Chennai branch. Calculate the cumulative payroll expenditure and average professional experience (rounded to 2 decimal places) for all employees located in Chennai.",
    requirements: [
      "Query the Employees table filtering for staff in 'Chennai'.",
      "Calculate total salary for Chennai employees aliased as `chennai_payroll`.",
      "Calculate average years of experience rounded to 2 decimal places aliased as `avg_chennai_exp`."
    ],
    tableName: "Employees",
    hint: "Filter with city = 'Chennai' in the WHERE clause, then compute SUM(salary) and ROUND(AVG(experience), 2).",
    expectedSql: "SELECT SUM(salary) AS chennai_payroll, ROUND(AVG(experience), 2) AS avg_chennai_exp FROM Employees WHERE city = 'Chennai';",
    explanation: "Aggregates key human resources metrics for a specific geographical branch.",
    tags: ["aggregates", "where", "filtering", "sum", "avg"],
    estimatedTimeMinutes: 2
  },
  {
    id: 130,
    title: "Appraisal Incentive Spread (2024 Cycle)",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Easy",
    problemStatement: "The compensation committee is analyzing incentive variance for the 2024 appraisal cycle. Find the highest and lowest bonus amounts awarded during the 2024 review year.",
    requirements: [
      "Query the Performance_Reviews table filtering for `review_year = 2024`.",
      "Find the maximum bonus awarded in 2024 aliased as `max_2024_bonus`.",
      "Find the minimum bonus awarded in 2024 aliased as `min_2024_bonus`."
    ],
    tableName: "Performance_Reviews",
    hint: "Filter for review_year = 2024 and apply MAX and MIN to the bonus column.",
    expectedSql: "SELECT MAX(bonus) AS max_2024_bonus, MIN(bonus) AS min_2024_bonus FROM Performance_Reviews WHERE review_year = 2024;",
    explanation: "MIN() automatically ignores NULL values when calculating the lowest non-null payout.",
    tags: ["aggregates", "min", "max", "where"],
    estimatedTimeMinutes: 2
  },
  {
    id: 131,
    title: "Engineering Division Internal Pay Disparity",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Medium",
    problemStatement: "Workforce equity is reviewing compensation spreads within the technology division. Calculate the absolute salary difference between the highest-paid and lowest-paid employee in the IT department.",
    requirements: [
      "Query the Employees table filtering strictly for the 'IT' department.",
      "Subtract the minimum salary from the maximum salary.",
      "Alias the calculated compensation spread as `it_salary_range`."
    ],
    tableName: "Employees",
    hint: "Subtract MIN(salary) from MAX(salary) within the IT department.",
    expectedSql: "SELECT (MAX(salary) - MIN(salary)) AS it_salary_range FROM Employees WHERE department = 'IT';",
    explanation: "Subtracting MIN from MAX produces the range or disparity between the highest and lowest earners in a division.",
    tags: ["aggregates", "range", "subtraction", "where"],
    estimatedTimeMinutes: 3
  },
  {
    id: 132,
    title: "Post-2020 High-Earning Talent Cohort",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Easy",
    problemStatement: "Talent acquisition is tracking the hiring of well-compensated lateral recruits. Count how many employees joined the company after calendar year 2020 and earn a salary strictly greater than 40,000.",
    requirements: [
      "Query the Employees table.",
      "Filter for `joining_year > 2020` and `salary > 40000`.",
      "Count the matching employees, aliasing the total as `high_earning_recent_joiners`."
    ],
    tableName: "Employees",
    hint: "Combine two filter conditions on joining_year and salary, then calculate COUNT(*).",
    expectedSql: "SELECT COUNT(*) AS high_earning_recent_joiners FROM Employees WHERE joining_year > 2020 AND salary > 40000;",
    explanation: "Counts personnel matching multiple criteria across temporal and compensation dimensions.",
    tags: ["aggregates", "count", "where"],
    estimatedTimeMinutes: 2
  },
  {
    id: 133,
    title: "Capital Expenditure on Finalized Initiatives",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Easy",
    problemStatement: "The finance committee is reconciling historical investments in delivered programs. Calculate the total cumulative budget expended on all projects that have achieved 'Completed' status.",
    requirements: [
      "Query the Projects table filtering for `status = 'Completed'`.",
      "Sum the budget allocations for these completed initiatives.",
      "Alias the total as `completed_project_spend`."
    ],
    tableName: "Projects",
    hint: "Filter for status = 'Completed' and apply SUM on budget.",
    expectedSql: "SELECT SUM(budget) AS completed_project_spend FROM Projects WHERE status = 'Completed';",
    explanation: "Sums financial expenditures of successfully finalized enterprise initiatives.",
    tags: ["aggregates", "sum", "where", "status"],
    estimatedTimeMinutes: 2
  },
  {
    id: 134,
    title: "Core Administrative Demographic Overview",
    topic: "Aggregate Functions",
    subtopic: "Filtered Aggregations & Boundary Metrics",
    difficulty: "Medium",
    problemStatement: "Human Resources is comparing demographic averages across corporate administrative functions. For employees in the HR and Finance departments combined, calculate the average employee age and average professional experience, each rounded to 1 decimal place.",
    requirements: [
      "Query the Employees table filtering for staff in 'HR' or 'Finance'.",
      "Calculate average age rounded to 1 decimal place aliased as `avg_age`.",
      "Calculate average experience rounded to 1 decimal place aliased as `avg_exp`."
    ],
    tableName: "Employees",
    hint: "Filter with department IN ('HR', 'Finance') and apply AVG with ROUND to 1 decimal place.",
    expectedSql: "SELECT ROUND(AVG(age), 1) AS avg_age, ROUND(AVG(experience), 1) AS avg_exp FROM Employees WHERE department IN ('HR', 'Finance');",
    explanation: "Computes rounded demographic averages across multiple corporate business divisions.",
    tags: ["aggregates", "avg", "rounding", "where"],
    estimatedTimeMinutes: 3
  }
];
