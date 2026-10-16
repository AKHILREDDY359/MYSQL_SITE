export const TOPIC5_QUESTIONS = [
  {
    "id": 135,
    "title": "Employee Count and Average Salary by Department and City",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Easy",
    "problemStatement": "Group employees by department and city. Display the department, city, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `department`, `city`, `COUNT(*) AS emp_count`, and `ROUND(AVG(salary), 2) AS avg_salary`.",
      "Group by `department, city`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY department, city.",
    "expectedSql": "SELECT department, city, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department, city;",
    "explanation": "Grouping by multiple attributes partitions the dataset into composite cross-tabulated buckets.",
    "tags": [
      "group-by",
      "multi-column",
      "headcount"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 136,
    "title": "Project Count and Total Budget by Department and Status",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Group projects by department ID and status. Display the department ID, status, project count, and total budget.",
    "requirements": [
      "Select `dept_id`, `status`, `COUNT(*) AS project_count`, and `SUM(budget) AS total_budget`.",
      "Group by `dept_id, status`."
    ],
    "tableName": "Projects",
    "hint": "Use GROUP BY dept_id, status.",
    "expectedSql": "SELECT dept_id, status, COUNT(*) AS project_count, SUM(budget) AS total_budget FROM Projects GROUP BY dept_id, status;",
    "explanation": "Breaks down project investments within each department according to operational workflow status.",
    "tags": [
      "group-by",
      "multi-column",
      "projects",
      "sum"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 137,
    "title": "Review Count and Total Bonuses by Year and Rating",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Group performance reviews by review year and rating. Display the year, rating, review count, and total bonuses (replacing NULL with 0).",
    "requirements": [
      "Select `review_year`, `rating`, `COUNT(*) AS review_count`, and `COALESCE(SUM(bonus), 0) AS total_bonuses`.",
      "Group by `review_year, rating`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use GROUP BY review_year, rating with COALESCE(SUM(bonus), 0).",
    "expectedSql": "SELECT review_year, rating, COUNT(*) AS review_count, COALESCE(SUM(bonus), 0) AS total_bonuses FROM Performance_Reviews GROUP BY review_year, rating;",
    "explanation": "Reveals how performance tiers evolved each year alongside their corresponding financial reward totals.",
    "tags": [
      "group-by",
      "multi-column",
      "reviews",
      "coalesce"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 138,
    "title": "Staff Count and Hours by Project and Role",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Group project assignments by project ID and assigned role. Display project ID, role, staff count, and total weekly hours.",
    "requirements": [
      "Select `project_id`, `assigned_role`, `COUNT(*) AS role_staff_count`, and `SUM(hours_allocated) AS total_role_hours`.",
      "Group by `project_id, assigned_role`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use GROUP BY project_id, assigned_role.",
    "expectedSql": "SELECT project_id, assigned_role, COUNT(*) AS role_staff_count, SUM(hours_allocated) AS total_role_hours FROM Employee_Projects GROUP BY project_id, assigned_role;",
    "explanation": "Tracks job function allocations across active enterprise project rosters.",
    "tags": [
      "group-by",
      "multi-column",
      "roles",
      "workload"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 139,
    "title": "Hires Count by Joining Year and Department",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Group employees by joining year and department to see how many people were hired in each department per year.",
    "requirements": [
      "Select `joining_year`, `department`, and `COUNT(*) AS hires_count`.",
      "Group by `joining_year, department`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY joining_year, department.",
    "expectedSql": "SELECT joining_year, department, COUNT(*) AS hires_count FROM Employees GROUP BY joining_year, department;",
    "explanation": "Visualizes organizational expansion history by charting annual headcount additions per team.",
    "tags": [
      "group-by",
      "multi-column",
      "hiring",
      "temporal"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 140,
    "title": "Employee Count by City and Experience",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Hard",
    "problemStatement": "Group employees by city and years of experience. Display city, experience, and the employee count.",
    "requirements": [
      "Select `city`, `experience`, and `COUNT(*) AS head_count`.",
      "Group by `city, experience`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY city, experience.",
    "expectedSql": "SELECT city, experience, COUNT(*) AS head_count FROM Employees GROUP BY city, experience;",
    "explanation": "Highlights seniority patterns and regional talent distribution across office sites.",
    "tags": [
      "group-by",
      "multi-column",
      "demographics"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 141,
    "title": "Salary Spread by Department",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "For each department, find the minimum salary, maximum salary, and the salary spread (max salary minus min salary).",
    "requirements": [
      "Select `department`, `MIN(salary) AS min_salary`, `MAX(salary) AS max_salary`, and `(MAX(salary) - MIN(salary)) AS salary_spread`.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Group by department and subtract MIN(salary) from MAX(salary).",
    "expectedSql": "SELECT department, MIN(salary) AS min_salary, MAX(salary) AS max_salary, (MAX(salary) - MIN(salary)) AS salary_spread FROM Employees GROUP BY department;",
    "explanation": "Performs mathematical operations on aggregate results to compute internal compensation spreads.",
    "tags": [
      "group-by",
      "aggregates",
      "spread",
      "min-max"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 142,
    "title": "Staffing and Workload per Project",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "For each project, calculate the number of unique employees assigned, total hours, and average hours per employee (rounded to 2 decimals).",
    "requirements": [
      "Select `project_id`, `COUNT(DISTINCT emp_id) AS assigned_staff`, `SUM(hours_allocated) AS total_hours`, and `ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member`.",
      "Group by `project_id`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use GROUP BY project_id with aggregate functions.",
    "expectedSql": "SELECT project_id, COUNT(DISTINCT emp_id) AS assigned_staff, SUM(hours_allocated) AS total_hours, ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member FROM Employee_Projects GROUP BY project_id;",
    "explanation": "Synthesizes staffing cardinality and resource commitment per project initiative.",
    "tags": [
      "group-by",
      "count-distinct",
      "sum",
      "avg"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 143,
    "title": "Review Statistics per Employee",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Medium",
    "problemStatement": "For each employee, calculate their total number of reviews, average rating (rounded to 2 decimals), and highest bonus received (or 0 if none).",
    "requirements": [
      "Select `emp_id`, `COUNT(*) AS total_reviews`, `ROUND(AVG(rating), 2) AS avg_rating`, and `COALESCE(MAX(bonus), 0) AS highest_bonus`.",
      "Group by `emp_id`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use GROUP BY emp_id.",
    "expectedSql": "SELECT emp_id, COUNT(*) AS total_reviews, ROUND(AVG(rating), 2) AS avg_rating, COALESCE(MAX(bonus), 0) AS highest_bonus FROM Performance_Reviews GROUP BY emp_id;",
    "explanation": "Summarizes longitudinal evaluation metrics for each reviewed employee.",
    "tags": [
      "group-by",
      "reviews",
      "avg",
      "max"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 144,
    "title": "Staff Count, Total Payroll, and High Earners by City",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Medium",
    "problemStatement": "For each city, calculate total staff, total salary spend, and the count of employees earning over 50,000.",
    "requirements": [
      "Select `city`, `COUNT(*) AS total_staff`, `SUM(salary) AS total_payroll`, and `SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners_count`.",
      "Group by `city`."
    ],
    "tableName": "Employees",
    "hint": "Group by city and use a conditional SUM for high earners.",
    "expectedSql": "SELECT city, COUNT(*) AS total_staff, SUM(salary) AS total_payroll, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners_count FROM Employees GROUP BY city;",
    "explanation": "Combines standard grouping with conditional aggregation inside each branch city.",
    "tags": [
      "group-by",
      "conditional-aggregation",
      "city"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 145,
    "title": "Budget Statistics by Project Status",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "For each project status, calculate the number of projects, minimum budget, maximum budget, and average budget rounded to 2 decimals.",
    "requirements": [
      "Select `status`, `COUNT(*) AS projects_count`, `MIN(budget) AS min_budget`, `MAX(budget) AS max_budget`, and `ROUND(AVG(budget), 2) AS avg_budget`.",
      "Group by `status`."
    ],
    "tableName": "Projects",
    "hint": "Use GROUP BY status with MIN, MAX, and ROUND(AVG(), 2).",
    "expectedSql": "SELECT status, COUNT(*) AS projects_count, MIN(budget) AS min_budget, MAX(budget) AS max_budget, ROUND(AVG(budget), 2) AS avg_budget FROM Projects GROUP BY status;",
    "explanation": "Benchmarks budgetary parameters across project statuses.",
    "tags": [
      "group-by",
      "status",
      "min-max-avg"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 146,
    "title": "Department Count and Total Budget by Location",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "For each location, calculate the total number of departments and their combined budget.",
    "requirements": [
      "Select `location`, `COUNT(*) AS dept_count`, and `SUM(budget) AS total_regional_budget`.",
      "Group by `location`."
    ],
    "tableName": "Departments",
    "hint": "Use GROUP BY location.",
    "expectedSql": "SELECT location, COUNT(*) AS dept_count, SUM(budget) AS total_regional_budget FROM Departments GROUP BY location;",
    "explanation": "Summarizes departmental infrastructure presence and operating capital per location.",
    "tags": [
      "group-by",
      "departments",
      "location"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 147,
    "title": "Recent Hires and Average Salary by Department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "For employees who joined after 2020, calculate the number of hires and average salary (rounded to 2 decimals) by department.",
    "requirements": [
      "Select `department`, `COUNT(*) AS recent_hires`, and `ROUND(AVG(salary), 2) AS avg_recent_salary`.",
      "Filter for `joining_year > 2020` before grouping.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Use WHERE before GROUP BY.",
    "expectedSql": "SELECT department, COUNT(*) AS recent_hires, ROUND(AVG(salary), 2) AS avg_recent_salary FROM Employees WHERE joining_year > 2020 GROUP BY department;",
    "explanation": "WHERE filters rows before the aggregation phase, leaving only post-2020 joiners in each group.",
    "tags": [
      "group-by",
      "where",
      "filtering"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 148,
    "title": "Pending Projects and Budget by Department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "For unfinished projects (status != 'Completed'), find the number of projects and total budget grouped by department ID.",
    "requirements": [
      "Select `dept_id`, `COUNT(*) AS pending_projects`, and `SUM(budget) AS pending_budget`.",
      "Filter for `status != 'Completed'`.",
      "Group by `dept_id`."
    ],
    "tableName": "Projects",
    "hint": "Use WHERE status != 'Completed' GROUP BY dept_id.",
    "expectedSql": "SELECT dept_id, COUNT(*) AS pending_projects, SUM(budget) AS pending_budget FROM Projects WHERE status != 'Completed' GROUP BY dept_id;",
    "explanation": "Filters out completed milestones prior to computing active capital obligations.",
    "tags": [
      "group-by",
      "where",
      "status"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 149,
    "title": "Top Reviews and Total Bonus for Highly-Rated Employees",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "For reviews with a rating of 4 or higher, calculate the count of reviews and total bonus received per employee.",
    "requirements": [
      "Select `emp_id`, `COUNT(*) AS top_reviews`, and `SUM(bonus) AS total_merit_bonus`.",
      "Filter for `rating >= 4`.",
      "Group by `emp_id`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter with WHERE rating >= 4 before grouping by emp_id.",
    "expectedSql": "SELECT emp_id, COUNT(*) AS top_reviews, SUM(bonus) AS total_merit_bonus FROM Performance_Reviews WHERE rating >= 4 GROUP BY emp_id;",
    "explanation": "Isolates top-quartile appraisal outcomes prior to computing merit bonus sums.",
    "tags": [
      "group-by",
      "where",
      "rating"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 150,
    "title": "Count and Average Experience by City for Higher Earners",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "For employees earning 40,000 or more, calculate the employee count and average experience (rounded to 2 decimals) by city.",
    "requirements": [
      "Select `city`, `COUNT(*) AS mid_to_senior_count`, and `ROUND(AVG(experience), 2) AS avg_experience`.",
      "Filter for `salary >= 40000`.",
      "Group by `city`."
    ],
    "tableName": "Employees",
    "hint": "Filter with WHERE salary >= 40000 then GROUP BY city.",
    "expectedSql": "SELECT city, COUNT(*) AS mid_to_senior_count, ROUND(AVG(experience), 2) AS avg_experience FROM Employees WHERE salary >= 40000 GROUP BY city;",
    "explanation": "Computes seniority metrics for premium salary brackets in each operating location.",
    "tags": [
      "group-by",
      "where",
      "salary"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 151,
    "title": "Count Leadership Roles per Project",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "Count how many leadership assignments (role contains 'Lead', 'Manager', or 'Director') exist for each project.",
    "requirements": [
      "Select `project_id` and `COUNT(*) AS leadership_roles`.",
      "Filter for assigned_role containing 'Lead', 'Manager', or 'Director'.",
      "Group by `project_id`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Combine LIKE checks with OR in WHERE, then GROUP BY project_id.",
    "expectedSql": "SELECT project_id, COUNT(*) AS leadership_roles FROM Employee_Projects WHERE assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%' GROUP BY project_id;",
    "explanation": "Identifies the depth of leadership oversight dedicated to each operational initiative.",
    "tags": [
      "group-by",
      "where",
      "like"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 152,
    "title": "Young Employees Count and Minimum Salary by Department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "For employees under 30, calculate the headcount and minimum salary by department.",
    "requirements": [
      "Select `department`, `COUNT(*) AS young_talent_count`, and `MIN(salary) AS min_young_salary`.",
      "Filter for `age < 30`.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Filter using WHERE age < 30 then GROUP BY department.",
    "expectedSql": "SELECT department, COUNT(*) AS young_talent_count, MIN(salary) AS min_young_salary FROM Employees WHERE age < 30 GROUP BY department;",
    "explanation": "Pre-filters workforce by age criteria to analyze base compensation among early-career talent.",
    "tags": [
      "group-by",
      "where",
      "age"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 153,
    "title": "Group Employees by Salary Tier",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Classify employees into salary tiers ('Entry' for < 35,000, 'Mid' for 35,000 to 60,000, 'Executive' for > 60,000) and count employees in each tier.",
    "requirements": [
      "Classify salary into 'Entry', 'Mid', or 'Executive' aliased as `salary_tier`.",
      "Count employees in each tier aliased as `tier_count`.",
      "Group by the salary tier CASE expression."
    ],
    "tableName": "Employees",
    "hint": "Use the same CASE expression in both SELECT and GROUP BY.",
    "expectedSql": "SELECT CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END AS salary_tier, COUNT(*) AS tier_count FROM Employees GROUP BY CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END;",
    "explanation": "SQL allows grouping directly by dynamic CASE expressions to generate custom dimensional buckets.",
    "tags": [
      "group-by",
      "case",
      "tiers"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 154,
    "title": "Employee Count and Average Salary by Experience Band",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Hard",
    "problemStatement": "Group employees into experience bands ('Junior' for < 3, 'Intermediate' for 3 to 6, 'Senior' for > 6). Display band, count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Categorize experience into 'Junior', 'Intermediate', or 'Senior' aliased as `experience_band`.",
      "Count employees aliased as `count_in_band`.",
      "Calculate average salary rounded to 2 decimals aliased as `avg_band_salary`.",
      "Group by the experience band CASE expression."
    ],
    "tableName": "Employees",
    "hint": "Group by the CASE expression on experience.",
    "expectedSql": "SELECT CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END AS experience_band, COUNT(*) AS count_in_band, ROUND(AVG(salary), 2) AS avg_band_salary FROM Employees GROUP BY CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END;",
    "explanation": "Demonstrates experience band stratification and compensation progression analysis.",
    "tags": [
      "group-by",
      "case",
      "bands",
      "avg"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 155,
    "title": "Review Stats by Bonus Award Status",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group reviews by whether a bonus was awarded ('Bonus Awarded' vs 'No Bonus Awarded'). Display status, review count, and average rating rounded to 2 decimals.",
    "requirements": [
      "Display bonus status ('Bonus Awarded' or 'No Bonus Awarded') aliased as `bonus_status`.",
      "Count reviews aliased as `reviews_count`.",
      "Calculate average rating rounded to 2 decimals aliased as `avg_group_rating`.",
      "Group by the bonus status CASE expression."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use CASE WHEN bonus IS NOT NULL in SELECT and GROUP BY.",
    "expectedSql": "SELECT CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END AS bonus_status, COUNT(*) AS reviews_count, ROUND(AVG(rating), 2) AS avg_group_rating FROM Performance_Reviews GROUP BY CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END;",
    "explanation": "Groups records by boolean nullability status to assess rating differences between compensated and uncompensated reviews.",
    "tags": [
      "group-by",
      "case",
      "nullability"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 156,
    "title": "Project Count by Budget Tier",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group projects into budget tiers ('Small' for < 150k, 'Medium' for 150k to 350k, 'Enterprise' for > 350k) and count projects in each tier.",
    "requirements": [
      "Categorize budget into 'Small', 'Medium', or 'Enterprise' aliased as `budget_tier`.",
      "Count projects aliased as `project_count`.",
      "Group by the budget tier CASE expression."
    ],
    "tableName": "Projects",
    "hint": "Group by the CASE expression evaluating budget.",
    "expectedSql": "SELECT CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END AS budget_tier, COUNT(*) AS project_count FROM Projects GROUP BY CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END;",
    "explanation": "Partitions initiatives into size buckets for portfolio management.",
    "tags": [
      "group-by",
      "case",
      "projects"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 157,
    "title": "Count Employees by Name Length",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group employees by the length of their name (character count) and count how many employees have each name length.",
    "requirements": [
      "Calculate name length using `LENGTH(emp_name)` aliased as `name_length`.",
      "Count employees aliased as `employee_count`.",
      "Group by `LENGTH(emp_name)`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY LENGTH(emp_name).",
    "expectedSql": "SELECT LENGTH(emp_name) AS name_length, COUNT(*) AS employee_count FROM Employees GROUP BY LENGTH(emp_name);",
    "explanation": "Demonstrates grouping by string function outputs.",
    "tags": [
      "group-by",
      "string-functions",
      "length"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 158,
    "title": "Payroll Comparison for Pre-2022 vs Later Hires",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group employees into two cohorts: 'Pre-2022' (joined before 2022) and '2022-and-Later'. Display cohort name, employee count, and total salary.",
    "requirements": [
      "Categorize joining year into 'Pre-2022' or '2022-and-Later' aliased as `cohort_name`.",
      "Count employees aliased as `head_count`.",
      "Sum salaries aliased as `total_cohort_payroll`.",
      "Group by the cohort CASE expression."
    ],
    "tableName": "Employees",
    "hint": "Use a CASE expression on joining_year in SELECT and GROUP BY.",
    "expectedSql": "SELECT CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END AS cohort_name, COUNT(*) AS head_count, SUM(salary) AS total_cohort_payroll FROM Employees GROUP BY CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END;",
    "explanation": "Splits enterprise workforce chronologically to contrast legacy salary weights with recent hiring costs.",
    "tags": [
      "group-by",
      "case",
      "cohorts"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 159,
    "title": "Assignments and Hours by Workload Type",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Hard",
    "problemStatement": "Group project assignments into 'Part-Time' (< 25 hours) and 'Full-Time' (>= 25 hours). Display workload type, total assignments, and sum of weekly hours.",
    "requirements": [
      "Categorize hours into 'Part-Time' or 'Full-Time' aliased as `workload_type`.",
      "Count assignments aliased as `total_assignments`.",
      "Sum hours aliased as `sum_weekly_hours`.",
      "Group by the workload CASE expression."
    ],
    "tableName": "Employee_Projects",
    "hint": "Group by CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END.",
    "expectedSql": "SELECT CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END AS workload_type, COUNT(*) AS total_assignments, SUM(hours_allocated) AS sum_weekly_hours FROM Employee_Projects GROUP BY CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END;",
    "explanation": "Segments project staffing models into workload categories.",
    "tags": [
      "group-by",
      "case",
      "workload"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 160,
    "title": "Departments by Budget Classification",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group departments into 'Mega Budget' (>= 1,000,000) and 'Standard Budget' (< 1,000,000). Display tier, department count, and combined budget.",
    "requirements": [
      "Classify budget as 'Mega Budget' or 'Standard Budget' aliased as `budget_tier`.",
      "Count departments aliased as `dept_count`.",
      "Sum budgets aliased as `combined_budget`.",
      "Group by the budget classification CASE expression."
    ],
    "tableName": "Departments",
    "hint": "Group by the CASE expression evaluating department budget.",
    "expectedSql": "SELECT CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END AS budget_tier, COUNT(*) AS dept_count, SUM(budget) AS combined_budget FROM Departments GROUP BY CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END;",
    "explanation": "Summarizes the concentration of operating capital between major budget tiers.",
    "tags": [
      "group-by",
      "case",
      "departments"
    ],
    "estimatedTimeMinutes": 3
  }
];
