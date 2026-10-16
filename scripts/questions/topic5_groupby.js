export const TOPIC5_QUESTIONS = [
  // Subtopic: Multi-Column Grouping (IDs 135 to 140)
  {
    id: 135,
    title: "Workforce Geographical Distribution by Department and City",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Easy",
    problemStatement: "Organizational planning is mapping team placement across corporate office locations. For every unique combination of department and branch city, calculate the total employee headcount and average monthly salary (rounded to 2 decimal places).",
    requirements: [
      "Group records by `department` and `city`.",
      "Calculate employee count aliased as `emp_count`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_salary`.",
      "Display `department`, `city`, `emp_count`, and `avg_salary`."
    ],
    tableName: "Employees",
    hint: "Group by both department and city, then calculate COUNT(*) and ROUND(AVG(salary), 2).",
    expectedSql: "SELECT department, city, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department, city;",
    explanation: "Grouping by multiple attributes partitions the dataset into composite cross-tabulated buckets.",
    tags: ["group-by", "multi-column", "headcount"],
    estimatedTimeMinutes: 3
  },
  {
    id: 136,
    title: "Portfolio Budget Exposure by Department and Status",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Medium",
    problemStatement: "The finance governance committee is reviewing capital exposure across business units. For each department and project status combination in Projects, calculate the total number of initiatives and cumulative budget allocation.",
    requirements: [
      "Group records in Projects by `dept_id` and `status`.",
      "Count initiatives in each grouping aliased as `project_count`.",
      "Sum the budget commitments aliased as `total_budget`.",
      "Display `dept_id`, `status`, `project_count`, and `total_budget`."
    ],
    tableName: "Projects",
    hint: "Apply GROUP BY on dept_id and status, calculating COUNT(*) and SUM(budget).",
    expectedSql: "SELECT dept_id, status, COUNT(*) AS project_count, SUM(budget) AS total_budget FROM Projects GROUP BY dept_id, status;",
    explanation: "Breaks down project investments within each department according to operational workflow status.",
    tags: ["group-by", "multi-column", "projects", "sum"],
    estimatedTimeMinutes: 3
  },
  {
    id: 137,
    title: "Historical Appraisal Rating and Bonus Distribution Matrix",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Medium",
    problemStatement: "Compensation analytics is evaluating annual rating distributions and incentive payouts. For each review year and performance rating tier, calculate the total count of appraisals and cumulative bonuses distributed (defaulting unassigned bonuses to 0).",
    requirements: [
      "Group records in Performance_Reviews by `review_year` and `rating`.",
      "Count evaluations aliased as `review_count`.",
      "Calculate sum of bonuses substituting 0 for nulls, aliased as `total_bonuses`.",
      "Display `review_year`, `rating`, `review_count`, and `total_bonuses`."
    ],
    tableName: "Performance_Reviews",
    hint: "Group by review_year and rating, and use COALESCE(SUM(bonus), 0) for bonus aggregation.",
    expectedSql: "SELECT review_year, rating, COUNT(*) AS review_count, COALESCE(SUM(bonus), 0) AS total_bonuses FROM Performance_Reviews GROUP BY review_year, rating;",
    explanation: "Reveals how performance tiers evolved each year alongside their corresponding financial reward totals.",
    tags: ["group-by", "multi-column", "reviews", "coalesce"],
    estimatedTimeMinutes: 3
  },
  {
    id: 138,
    title: "Project Role Allocation and Capacity Utilization",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Medium",
    problemStatement: "Resource management is analyzing role distribution across projects. For each project and assigned role combination in Employee_Projects, calculate the total number of staff assignments and cumulative weekly hours allocated.",
    requirements: [
      "Group by `project_id` and `assigned_role`.",
      "Count assigned staff records aliased as `role_staff_count`.",
      "Sum allocated weekly hours aliased as `total_role_hours`.",
      "Display `project_id`, `assigned_role`, `role_staff_count`, and `total_role_hours`."
    ],
    tableName: "Employee_Projects",
    hint: "Group by project_id and assigned_role, computing COUNT(*) and SUM(hours_allocated).",
    expectedSql: "SELECT project_id, assigned_role, COUNT(*) AS role_staff_count, SUM(hours_allocated) AS total_role_hours FROM Employee_Projects GROUP BY project_id, assigned_role;",
    explanation: "Tracks job function allocations across active enterprise project rosters.",
    tags: ["group-by", "multi-column", "roles", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 139,
    title: "Departmental Hiring Cohort Timeline",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Medium",
    problemStatement: "Talent acquisition is tracking historical hiring volume across departments. For every joining year and department combination, display the joining year, department name, and total number of staff hired in that year.",
    requirements: [
      "Group records by `joining_year` and `department`.",
      "Count hires aliased as `hires_count`.",
      "Display `joining_year`, `department`, and `hires_count`."
    ],
    tableName: "Employees",
    hint: "Group by joining_year and department, calculating COUNT(*) for each group.",
    expectedSql: "SELECT joining_year, department, COUNT(*) AS hires_count FROM Employees GROUP BY joining_year, department;",
    explanation: "Visualizes organizational expansion history by charting annual headcount additions per team.",
    tags: ["group-by", "multi-column", "hiring", "temporal"],
    estimatedTimeMinutes: 3
  },
  {
    id: 140,
    title: "Regional Office Experience Cluster Census",
    topic: "GROUP BY",
    subtopic: "Multi-Column Grouping",
    difficulty: "Hard",
    problemStatement: "Human Resources is mapping seniority profiles across branch offices. For each city and years of experience pair, calculate the total employee headcount.",
    requirements: [
      "Group records by `city` and `experience`.",
      "Count staff members aliased as `head_count`.",
      "Display `city`, `experience`, and `head_count`."
    ],
    tableName: "Employees",
    hint: "Group by city and experience, counting records with COUNT(*).",
    expectedSql: "SELECT city, experience, COUNT(*) AS head_count FROM Employees GROUP BY city, experience;",
    explanation: "Highlights seniority patterns and regional talent distribution across office sites.",
    tags: ["group-by", "multi-column", "demographics"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Complex Aggregations per Category (IDs 141 to 146)
  {
    id: 141,
    title: "Departmental Wage Spread Analysis",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Easy",
    problemStatement: "The compensation committee is reviewing salary disparity within each business unit. For every department, calculate the lowest salary, highest salary, and the absolute salary spread (maximum minus minimum salary).",
    requirements: [
      "Group records by `department`.",
      "Find minimum salary aliased as `min_salary`.",
      "Find maximum salary aliased as `max_salary`.",
      "Calculate salary spread (max_salary minus min_salary) aliased as `salary_spread`.",
      "Display `department`, `min_salary`, `max_salary`, and `salary_spread`."
    ],
    tableName: "Employees",
    hint: "Group by department and compute MIN(salary), MAX(salary), and MAX(salary) - MIN(salary).",
    expectedSql: "SELECT department, MIN(salary) AS min_salary, MAX(salary) AS max_salary, (MAX(salary) - MIN(salary)) AS salary_spread FROM Employees GROUP BY department;",
    explanation: "Performs mathematical operations on aggregate results to compute internal compensation spreads.",
    tags: ["group-by", "aggregates", "spread", "min-max"],
    estimatedTimeMinutes: 3
  },
  {
    id: 142,
    title: "Project Staffing Footprint and Weekly Utilization",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Easy",
    problemStatement: "The Project Management Office needs a resource utilization audit for each initiative. For every project in the assignments registry, calculate the total number of distinct staff members assigned, cumulative weekly hours committed, and the average weekly hours per team member (rounded to two decimal places).",
    requirements: [
      "Group records by `project_id`.",
      "Calculate distinct assigned employees, aliasing the count as `assigned_staff`.",
      "Calculate total weekly hours committed, aliased as `total_hours`.",
      "Calculate the average hours per member rounded to 2 decimal places, aliased as `avg_hours_per_member`.",
      "Display `project_id`, `assigned_staff`, `total_hours`, and `avg_hours_per_member`."
    ],
    tableName: "Employee_Projects",
    hint: "Group by project_id and apply COUNT(DISTINCT emp_id), SUM(hours_allocated), and ROUND(AVG(hours_allocated), 2).",
    expectedSql: "SELECT project_id, COUNT(DISTINCT emp_id) AS assigned_staff, SUM(hours_allocated) AS total_hours, ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member FROM Employee_Projects GROUP BY project_id;",
    explanation: "Synthesizes staffing cardinality and resource commitment per project initiative.",
    tags: ["group-by", "count-distinct", "sum", "avg"],
    estimatedTimeMinutes: 3
  },
  {
    id: 143,
    title: "Individual Appraisal Historical Performance Profile",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Medium",
    problemStatement: "Human Resources is summarizing appraisal histories for individual employees. For each reviewed employee in Performance_Reviews, display their employee ID, total number of evaluations completed, average rating (rounded to 2 decimal places), and highest bonus awarded (defaulting to 0 if none).",
    requirements: [
      "Group records by `emp_id`.",
      "Count total reviews aliased as `total_reviews`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_rating`.",
      "Find highest bonus received substituting 0 for nulls, aliased as `highest_bonus`.",
      "Display `emp_id`, `total_reviews`, `avg_rating`, and `highest_bonus`."
    ],
    tableName: "Performance_Reviews",
    hint: "Group by emp_id and compute COUNT(*), ROUND(AVG(rating), 2), and COALESCE(MAX(bonus), 0).",
    expectedSql: "SELECT emp_id, COUNT(*) AS total_reviews, ROUND(AVG(rating), 2) AS avg_rating, COALESCE(MAX(bonus), 0) AS highest_bonus FROM Performance_Reviews GROUP BY emp_id;",
    explanation: "Summarizes longitudinal evaluation metrics for each reviewed employee.",
    tags: ["group-by", "reviews", "avg", "max"],
    estimatedTimeMinutes: 3
  },
  {
    id: 144,
    title: "Regional Hub Payroll and High-Earner Density",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Medium",
    problemStatement: "Corporate treasury is assessing geographical labor spending and high-earner presence. For each branch city, display the city name, total employee count, cumulative payroll expenditure, and count of high earners earning strictly over 50,000.",
    requirements: [
      "Group records by `city`.",
      "Count total staff aliased as `total_staff`.",
      "Calculate total payroll aliased as `total_payroll`.",
      "Count employees earning over 50,000 using conditional aggregation, aliased as `high_earners_count`.",
      "Display `city`, `total_staff`, `total_payroll`, and `high_earners_count`."
    ],
    tableName: "Employees",
    hint: "Group by city and use SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) for the high earner tally.",
    expectedSql: "SELECT city, COUNT(*) AS total_staff, SUM(salary) AS total_payroll, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners_count FROM Employees GROUP BY city;",
    explanation: "Combines standard grouping with conditional aggregation inside each branch city.",
    tags: ["group-by", "conditional-aggregation", "city"],
    estimatedTimeMinutes: 3
  },
  {
    id: 145,
    title: "Capital Investment Profile by Project Lifecycle Stage",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Easy",
    problemStatement: "Portfolio governance is benchmarking funding levels across workflow stages. For each project lifecycle status, calculate the total count of initiatives, minimum budget, maximum budget, and average budget allocation (rounded to 2 decimal places).",
    requirements: [
      "Group records in Projects by `status`.",
      "Count initiatives aliased as `projects_count`.",
      "Find minimum budget aliased as `min_budget` and maximum budget aliased as `max_budget`.",
      "Calculate average budget rounded to 2 decimal places aliased as `avg_budget`.",
      "Display `status`, `projects_count`, `min_budget`, `max_budget`, and `avg_budget`."
    ],
    tableName: "Projects",
    hint: "Group by status and compute COUNT(*), MIN(budget), MAX(budget), and ROUND(AVG(budget), 2).",
    expectedSql: "SELECT status, COUNT(*) AS projects_count, MIN(budget) AS min_budget, MAX(budget) AS max_budget, ROUND(AVG(budget), 2) AS avg_budget FROM Projects GROUP BY status;",
    explanation: "Benchmarks budgetary parameters across project statuses.",
    tags: ["group-by", "status", "min-max-avg"],
    estimatedTimeMinutes: 2
  },
  {
    id: 146,
    title: "Regional Department Density and Cumulative Budgets",
    topic: "GROUP BY",
    subtopic: "Complex Aggregations per Category",
    difficulty: "Easy",
    problemStatement: "Corporate administration is analyzing departmental distribution across headquarters cities. For each location in Departments, display the office location, count of departments headquartered there, and cumulative regional budget.",
    requirements: [
      "Group records in Departments by `location`.",
      "Count departments aliased as `dept_count`.",
      "Calculate total budget aliased as `total_regional_budget`.",
      "Display `location`, `dept_count`, and `total_regional_budget`."
    ],
    tableName: "Departments",
    hint: "Group by location and apply COUNT(*) and SUM(budget).",
    expectedSql: "SELECT location, COUNT(*) AS dept_count, SUM(budget) AS total_regional_budget FROM Departments GROUP BY location;",
    explanation: "Summarizes departmental infrastructure presence and operating capital per location.",
    tags: ["group-by", "departments", "location"],
    estimatedTimeMinutes: 2
  },

  // Subtopic: Filtered Grouping (WHERE before GROUP BY) (IDs 147 to 152)
  {
    id: 147,
    title: "Post-2020 Recruitment Payroll by Division",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Easy",
    problemStatement: "Talent acquisition is assessing compensation trends for post-pandemic recruitment cohorts. For employees hired after calendar year 2020, display each department, count of recent recruits, and their average monthly salary (rounded to 2 decimal places).",
    requirements: [
      "Filter for employees where `joining_year > 2020` before grouping.",
      "Group records by `department`.",
      "Count recent recruits aliased as `recent_hires`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_recent_salary`.",
      "Display `department`, `recent_hires`, and `avg_recent_salary`."
    ],
    tableName: "Employees",
    hint: "Filter with joining_year > 2020 in the WHERE clause, then group by department.",
    expectedSql: "SELECT department, COUNT(*) AS recent_hires, ROUND(AVG(salary), 2) AS avg_recent_salary FROM Employees WHERE joining_year > 2020 GROUP BY department;",
    explanation: "WHERE filters rows before the aggregation phase, leaving only post-2020 joiners in each group.",
    tags: ["group-by", "where", "filtering"],
    estimatedTimeMinutes: 3
  },
  {
    id: 148,
    title: "Active Capital Commitments by Department",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Medium",
    problemStatement: "The Chief Financial Officer needs visibility into unfinished project commitments per department. For all projects not yet completed, display the department ID, count of pending initiatives, and cumulative pending budget.",
    requirements: [
      "Filter Projects for `status != 'Completed'`.",
      "Group by `dept_id`.",
      "Count pending projects aliased as `pending_projects`.",
      "Calculate cumulative budget aliased as `pending_budget`.",
      "Display `dept_id`, `pending_projects`, and `pending_budget`."
    ],
    tableName: "Projects",
    hint: "Filter with status != 'Completed' before grouping by dept_id.",
    expectedSql: "SELECT dept_id, COUNT(*) AS pending_projects, SUM(budget) AS pending_budget FROM Projects WHERE status != 'Completed' GROUP BY dept_id;",
    explanation: "Filters out completed milestones prior to computing active capital obligations.",
    tags: ["group-by", "where", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 149,
    title: "High-Performance Appraisal and Bonus Summary by Staff",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Medium",
    problemStatement: "Executive leadership is identifying consistently high-performing employees. For evaluations that achieved a high rating of 4 or 5, display the employee ID, count of top reviews, and total merit bonuses awarded.",
    requirements: [
      "Filter Performance_Reviews for `rating >= 4`.",
      "Group by `emp_id`.",
      "Count qualifying reviews aliased as `top_reviews`.",
      "Sum awarded bonuses aliased as `total_merit_bonus`.",
      "Display `emp_id`, `top_reviews`, and `total_merit_bonus`."
    ],
    tableName: "Performance_Reviews",
    hint: "Filter for rating >= 4 before grouping by emp_id, then calculate COUNT(*) and SUM(bonus).",
    expectedSql: "SELECT emp_id, COUNT(*) AS top_reviews, SUM(bonus) AS total_merit_bonus FROM Performance_Reviews WHERE rating >= 4 GROUP BY emp_id;",
    explanation: "Isolates top-quartile appraisal outcomes prior to computing merit bonus sums.",
    tags: ["group-by", "where", "rating"],
    estimatedTimeMinutes: 3
  },
  {
    id: 150,
    title: "Branch Density of Seasoned Compensation Staff",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Easy",
    problemStatement: "Human Resources is examining geographic distribution of experienced staff earning competitive compensation. For employees earning at least 40,000, display each city, count of qualifying staff, and their average professional experience (rounded to 2 decimal places).",
    requirements: [
      "Filter Employees for `salary >= 40000`.",
      "Group by `city`.",
      "Count matching staff aliased as `mid_to_senior_count`.",
      "Calculate average years of experience rounded to 2 decimal places aliased as `avg_experience`.",
      "Display `city`, `mid_to_senior_count`, and `avg_experience`."
    ],
    tableName: "Employees",
    hint: "Filter for salary >= 40000 in WHERE, then group by city and compute aggregate metrics.",
    expectedSql: "SELECT city, COUNT(*) AS mid_to_senior_count, ROUND(AVG(experience), 2) AS avg_experience FROM Employees WHERE salary >= 40000 GROUP BY city;",
    explanation: "Computes seniority metrics for premium salary brackets in each operating location.",
    tags: ["group-by", "where", "salary"],
    estimatedTimeMinutes: 2
  },
  {
    id: 151,
    title: "Project Management and Leadership Assignment Counts",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Medium",
    problemStatement: "Workforce governance is monitoring the assignment of leadership and oversight roles across corporate projects. For each project in Employee_Projects, count how many staff assignments carry managerial or leadership designations (titles containing 'Lead', 'Manager', or 'Director').",
    requirements: [
      "Filter for assignments where `assigned_role` contains 'Lead', 'Manager', or 'Director'.",
      "Group by `project_id`.",
      "Count matching leadership assignments aliased as `leadership_roles`.",
      "Display `project_id` and `leadership_roles`."
    ],
    tableName: "Employee_Projects",
    hint: "Filter using partial text matching on assigned_role before grouping by project_id.",
    expectedSql: "SELECT project_id, COUNT(*) AS leadership_roles FROM Employee_Projects WHERE assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%' GROUP BY project_id;",
    explanation: "Identifies the depth of leadership oversight dedicated to each operational initiative.",
    tags: ["group-by", "where", "like"],
    estimatedTimeMinutes: 3
  },
  {
    id: 152,
    title: "Early-Career Talent Deployment by Department",
    topic: "GROUP BY",
    subtopic: "Filtered Grouping (WHERE before GROUP BY)",
    difficulty: "Easy",
    problemStatement: "The talent development team is tracking junior workforce distribution across business units. For employees under 30 years old, display each department, count of young professionals, and lowest salary in that young cohort.",
    requirements: [
      "Filter Employees for `age < 30`.",
      "Group by `department`.",
      "Count young staff aliased as `young_talent_count`.",
      "Find the minimum salary in that cohort aliased as `min_young_salary`.",
      "Display `department`, `young_talent_count`, and `min_young_salary`."
    ],
    tableName: "Employees",
    hint: "Filter with age < 30 in WHERE, then group by department and compute COUNT(*) and MIN(salary).",
    expectedSql: "SELECT department, COUNT(*) AS young_talent_count, MIN(salary) AS min_young_salary FROM Employees WHERE age < 30 GROUP BY department;",
    explanation: "Pre-filters workforce by age criteria to analyze base compensation among early-career talent.",
    tags: ["group-by", "where", "age"],
    estimatedTimeMinutes: 2
  },

  // Subtopic: Expressions & Transformations in GROUP BY (IDs 153 to 160)
  {
    id: 153,
    title: "Categorical Compensation Tier Distribution",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Compensation planning is segmenting the workforce into three broad salary tiers: 'Entry' for salaries under 35,000, 'Mid' for salaries from 35,000 to 60,000 inclusive, and 'Executive' for salaries above 60,000. Group all employees into these tiers and display each tier name with its total headcount.",
    requirements: [
      "Categorize each employee into 'Entry', 'Mid', or 'Executive' based on salary thresholds, aliased as `salary_tier`.",
      "Group records by the categorical salary tier expression.",
      "Count employees in each tier aliased as `tier_count`.",
      "Display `salary_tier` and `tier_count`."
    ],
    tableName: "Employees",
    hint: "Use identical CASE expressions in the SELECT projection and the GROUP BY clause.",
    expectedSql: "SELECT CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END AS salary_tier, COUNT(*) AS tier_count FROM Employees GROUP BY CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END;",
    explanation: "SQL allows grouping directly by dynamic CASE expressions to generate custom dimensional buckets.",
    tags: ["group-by", "case", "tiers"],
    estimatedTimeMinutes: 3
  },
  {
    id: 154,
    title: "Seniority Band Compensation Benchmarking",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Hard",
    problemStatement: "Human Resources segments workforce tenure into three professional bands: 'Junior' for under 3 years of experience, 'Intermediate' for 3 to 6 years inclusive, and 'Senior' for more than 6 years. Group employees by these experience bands and display the band name, headcount, and average monthly salary (rounded to 2 decimal places).",
    requirements: [
      "Classify employees into 'Junior', 'Intermediate', or 'Senior' aliased as `experience_band`.",
      "Group records by the experience band expression.",
      "Count employees in each band aliased as `count_in_band`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_band_salary`.",
      "Display `experience_band`, `count_in_band`, and `avg_band_salary`."
    ],
    tableName: "Employees",
    hint: "Group by the CASE expression that defines the experience bands and calculate COUNT(*) and ROUND(AVG(salary), 2).",
    expectedSql: "SELECT CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END AS experience_band, COUNT(*) AS count_in_band, ROUND(AVG(salary), 2) AS avg_band_salary FROM Employees GROUP BY CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END;",
    explanation: "Demonstrates experience band stratification and compensation progression analysis.",
    tags: ["group-by", "case", "bands", "avg"],
    estimatedTimeMinutes: 4
  },
  {
    id: 155,
    title: "Appraisal Evaluation by Bonus Allocation Category",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "The compensation committee is comparing performance ratings between evaluations that received an incentive payout and those that did not. Classify appraisals as 'Bonus Awarded' if a bonus exists, or 'No Bonus Awarded' if unassigned, displaying the status, review count, and average rating (rounded to 2 decimal places).",
    requirements: [
      "Classify reviews into 'Bonus Awarded' or 'No Bonus Awarded' aliased as `bonus_status`.",
      "Group records by this bonus status category.",
      "Count evaluations in each category aliased as `reviews_count`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_group_rating`.",
      "Display `bonus_status`, `reviews_count`, and `avg_group_rating`."
    ],
    tableName: "Performance_Reviews",
    hint: "Group by a CASE expression testing whether bonus IS NOT NULL.",
    expectedSql: "SELECT CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END AS bonus_status, COUNT(*) AS reviews_count, ROUND(AVG(rating), 2) AS avg_group_rating FROM Performance_Reviews GROUP BY CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END;",
    explanation: "Groups records by boolean nullability status to assess rating differences between compensated and uncompensated reviews.",
    tags: ["group-by", "case", "nullability"],
    estimatedTimeMinutes: 3
  },
  {
    id: 156,
    title: "Capital Investment Scale Segmentation",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Project portfolio managers classify corporate initiatives into funding tiers: 'Small' for budgets under 150,000, 'Medium' for budgets from 150,000 to 350,000 inclusive, and 'Enterprise' for budgets exceeding 350,000. Group projects by these investment tiers and display the tier name along with the count of projects.",
    requirements: [
      "Classify projects into 'Small', 'Medium', or 'Enterprise' aliased as `budget_tier`.",
      "Group by the budget classification expression.",
      "Count initiatives in each tier aliased as `project_count`.",
      "Display `budget_tier` and `project_count`."
    ],
    tableName: "Projects",
    hint: "Use a CASE expression to categorize budget ranges, grouping by the same expression.",
    expectedSql: "SELECT CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END AS budget_tier, COUNT(*) AS project_count FROM Projects GROUP BY CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END;",
    explanation: "Partitions initiatives into size buckets for portfolio management.",
    tags: ["group-by", "case", "projects"],
    estimatedTimeMinutes: 3
  },
  {
    id: 157,
    title: "Name Character Length Demographic Grouping",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Data management is analyzing the distribution of employee name lengths for badge printing formatting. Group employees by the number of characters in their full name, displaying the name length and the total employee count.",
    requirements: [
      "Calculate character length of `emp_name` aliased as `name_length`.",
      "Group records by the name length expression.",
      "Count employees with each length aliased as `employee_count`.",
      "Display `name_length` and `employee_count`."
    ],
    tableName: "Employees",
    hint: "Group by the string length function applied to emp_name and calculate COUNT(*).",
    expectedSql: "SELECT LENGTH(emp_name) AS name_length, COUNT(*) AS employee_count FROM Employees GROUP BY LENGTH(emp_name);",
    explanation: "Demonstrates grouping by string function outputs.",
    tags: ["group-by", "string-functions", "length"],
    estimatedTimeMinutes: 3
  },
  {
    id: 158,
    title: "Tenure Era Payroll Expenditure Comparison",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "The Chief Financial Officer is comparing payroll commitments between legacy employees and recent additions. Group employees into two hiring eras: 'Pre-2022' for joiners before 2022, and '2022-and-Later' for everyone else. Display the cohort name, headcount, and cumulative payroll.",
    requirements: [
      "Classify joining year into 'Pre-2022' or '2022-and-Later' aliased as `cohort_name`.",
      "Group by the cohort classification expression.",
      "Count employees in each cohort aliased as `head_count`.",
      "Calculate total payroll aliased as `total_cohort_payroll`.",
      "Display `cohort_name`, `head_count`, and `total_cohort_payroll`."
    ],
    tableName: "Employees",
    hint: "Group by a conditional CASE expression on joining_year, calculating COUNT(*) and SUM(salary).",
    expectedSql: "SELECT CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END AS cohort_name, COUNT(*) AS head_count, SUM(salary) AS total_cohort_payroll FROM Employees GROUP BY CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END;",
    explanation: "Splits enterprise workforce chronologically to contrast legacy salary weights with recent hiring costs.",
    tags: ["group-by", "case", "cohorts"],
    estimatedTimeMinutes: 3
  },
  {
    id: 159,
    title: "Weekly Commitment Classification Distribution",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Hard",
    problemStatement: "Resource scheduling categorizes project allocations as 'Part-Time' for under 25 hours per week, or 'Full-Time' for 25 hours and above. Group all assignments in Employee_Projects by this workload classification, displaying the workload type, total assignment count, and cumulative weekly hours.",
    requirements: [
      "Classify assignments into 'Part-Time' or 'Full-Time' based on weekly hours, aliased as `workload_type`.",
      "Group by the workload classification expression.",
      "Count total assignments aliased as `total_assignments`.",
      "Sum allocated weekly hours aliased as `sum_weekly_hours`.",
      "Display `workload_type`, `total_assignments`, and `sum_weekly_hours`."
    ],
    tableName: "Employee_Projects",
    hint: "Use a CASE expression on hours_allocated in both SELECT and GROUP BY.",
    expectedSql: "SELECT CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END AS workload_type, COUNT(*) AS total_assignments, SUM(hours_allocated) AS sum_weekly_hours FROM Employee_Projects GROUP BY CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END;",
    explanation: "Segments project staffing models into workload categories.",
    tags: ["group-by", "case", "workload"],
    estimatedTimeMinutes: 4
  },
  {
    id: 160,
    title: "Enterprise Departmental Capital Classification",
    topic: "GROUP BY",
    subtopic: "Expressions & Transformations in GROUP BY",
    difficulty: "Medium",
    problemStatement: "Corporate treasury groups corporate divisions by funding magnitude: 'Mega Budget' for allocations of 1,000,000 or greater, and 'Standard Budget' for under 1,000,000. Group departments by this capital tier, displaying the tier name, department count, and combined budget.",
    requirements: [
      "Classify departments into 'Mega Budget' or 'Standard Budget' aliased as `budget_tier`.",
      "Group by the budget tier classification expression.",
      "Count departments aliased as `dept_count`.",
      "Sum combined budgets aliased as `combined_budget`.",
      "Display `budget_tier`, `dept_count`, and `combined_budget`."
    ],
    tableName: "Departments",
    hint: "Group by a CASE expression testing budget >= 1000000, computing COUNT(*) and SUM(budget).",
    expectedSql: "SELECT CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END AS budget_tier, COUNT(*) AS dept_count, SUM(budget) AS combined_budget FROM Departments GROUP BY CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END;",
    explanation: "Summarizes the concentration of operating capital between major budget tiers.",
    tags: ["group-by", "case", "departments"],
    estimatedTimeMinutes: 3
  }
];
