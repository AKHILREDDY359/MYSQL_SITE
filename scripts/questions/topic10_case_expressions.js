export const TOPIC10_QUESTIONS = [
  {
    "id": 351,
    "title": "Classify Employees by Regional Zone",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Map each employee's city to an operational zone ('South-Central', 'South-Coastal', 'South-Tech', or 'Other Zone').",
    "requirements": [
      "Display `emp_id`, `emp_name`, `city`, and `operational_zone`.",
      "Use a CASE statement on city to map zones."
    ],
    "tableName": "Employees",
    "hint": "Use CASE city WHEN ... THEN ... END AS operational_zone.",
    "expectedSql": "SELECT emp_id, emp_name, city, CASE city WHEN 'Hyderabad' THEN 'South-Central' WHEN 'Vijayawada' THEN 'South-Central' WHEN 'Chennai' THEN 'South-Coastal' WHEN 'Bengaluru' THEN 'South-Tech' ELSE 'Other Zone' END AS operational_zone FROM Employees;",
    "explanation": "A simple CASE expression compares an input expression (city) to a series of literal values using implicit equality tests. The ELSE branch catches any city not explicitly matched.",
    "tags": [
      "case",
      "simple-case",
      "fundamentals",
      "mapping"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 352,
    "title": "Flag Recent Hires (2023 or Later)",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Add a flag column `is_recent_hire` that displays 1 if the employee joined in 2023 or later, and 0 otherwise.",
    "requirements": [
      "Display `emp_name`, `joining_year`, and `is_recent_hire`.",
      "Use a CASE expression returning 1 for `joining_year >= 2023` and 0 otherwise."
    ],
    "tableName": "Employees",
    "hint": "Use CASE WHEN joining_year >= 2023 THEN 1 ELSE 0 END AS is_recent_hire.",
    "expectedSql": "SELECT emp_name, joining_year, CASE WHEN joining_year >= 2023 THEN 1 ELSE 0 END AS is_recent_hire FROM Employees;",
    "explanation": "Searched CASE expressions evaluate arbitrary boolean expressions in each WHEN clause. Returning 1 and 0 is standard SQL practice for creating numeric indicator flags.",
    "tags": [
      "case",
      "searched-case",
      "boolean-flag",
      "fundamentals"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 353,
    "title": "Map Project Status to Delivery Urgency",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Map project status to 'In Progress' for Active, 'Upcoming' for Planning, and 'Archive / Standby' for others.",
    "requirements": [
      "Display `project_name`, `status`, and `delivery_urgency`.",
      "Use a CASE statement evaluating status."
    ],
    "tableName": "Projects",
    "hint": "Use CASE status WHEN 'Active' THEN 'In Progress' ... END AS delivery_urgency.",
    "expectedSql": "SELECT project_name, status, CASE status WHEN 'Active' THEN 'In Progress' WHEN 'Planning' THEN 'Upcoming' ELSE 'Archive / Standby' END AS delivery_urgency FROM Projects;",
    "explanation": "If no WHEN condition evaluates to true and an ELSE clause is omitted, SQL returns NULL. Providing an explicit ELSE ensures deterministic non-null categorical labeling.",
    "tags": [
      "case",
      "else",
      "projects",
      "fundamentals"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 354,
    "title": "Identify Fast Track Candidates",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Identify employees aged 25 or younger who already have at least 2 years experience as 'Fast Track Candidate', and others as 'Standard Profile'.",
    "requirements": [
      "Display `emp_name`, `age`, `experience`, and `career_profile`.",
      "Use a CASE expression evaluating age and experience."
    ],
    "tableName": "Employees",
    "hint": "Check WHEN age <= 25 AND experience >= 2.",
    "expectedSql": "SELECT emp_name, age, experience, CASE WHEN age <= 25 AND experience >= 2 THEN 'Fast Track Candidate' ELSE 'Standard Profile' END AS career_profile FROM Employees;",
    "explanation": "Searched CASE statements support compound logical expressions (AND, OR, NOT), allowing multi-dimensional criteria evaluation within a single branch.",
    "tags": [
      "case",
      "and",
      "logical-conditions",
      "talent"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 355,
    "title": "Group Employees by Age Category",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Classify employees into age groups: 'Under 25', '25 to 29', or '30 and Above'.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `age`, and `age_group`.",
      "Use a CASE expression to categorize age."
    ],
    "tableName": "Employees",
    "hint": "Use CASE WHEN age < 25 THEN 'Under 25' ... END AS age_group.",
    "expectedSql": "SELECT emp_id, emp_name, age, CASE WHEN age < 25 THEN 'Under 25' WHEN age <= 29 THEN '25 to 29' ELSE '30 and Above' END AS age_group FROM Employees;",
    "explanation": "Because CASE evaluates conditions sequentially and short-circuits on the first true branch, 'age <= 29' naturally captures ages between 25 and 29 without needing an explicit lower bound check.",
    "tags": [
      "case",
      "classification",
      "demographics",
      "age-groups"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 356,
    "title": "Assign Department Pay Scale Status",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Assign each employee a pay scale: 'Tech Core Scale' (IT >= 50k), 'Tech Entry Scale' (IT < 50k), or 'General Corporate Scale' (all others).",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `pay_scale_status`.",
      "Use CASE WHEN with department and salary conditions."
    ],
    "tableName": "Employees",
    "hint": "Evaluate IT department salary thresholds in a CASE expression.",
    "expectedSql": "SELECT emp_name, department, salary, CASE WHEN department = 'IT' AND salary >= 50000 THEN 'Tech Core Scale' WHEN department = 'IT' THEN 'Tech Entry Scale' ELSE 'General Corporate Scale' END AS pay_scale_status FROM Employees;",
    "explanation": "Sequential evaluation handles hierarchical domain logic cleanly: the first branch handles high IT earners, the second catches remaining IT staff, and the ELSE branch catches all other departments.",
    "tags": [
      "case",
      "classification",
      "department",
      "compensation"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 357,
    "title": "Classify Employees by Tenure Tier",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Classify employees by joining year into 'Veteran' (< 2020), 'Established' (2020-2022), or 'New Hire' (after 2022).",
    "requirements": [
      "Display `emp_name`, `joining_year`, and `loyalty_tier`.",
      "Use CASE WHEN evaluating joining_year."
    ],
    "tableName": "Employees",
    "hint": "Use CASE WHEN joining_year < 2020 THEN 'Veteran' ... END AS loyalty_tier.",
    "expectedSql": "SELECT emp_name, joining_year, CASE WHEN joining_year < 2020 THEN 'Veteran' WHEN joining_year <= 2022 THEN 'Established' ELSE 'New Hire' END AS loyalty_tier FROM Employees;",
    "explanation": "Sorting temporal attributes into discrete historical eras allows high-level workforce planning without mutating base table data.",
    "tags": [
      "case",
      "tenure",
      "classification",
      "loyalty"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 358,
    "title": "Group Departments into High-Level Divisions",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Group departments into broad corporate divisions based on their department name.",
    "requirements": [
      "Display `dept_name` and `division`.",
      "Use a CASE expression checking department names with IN."
    ],
    "tableName": "Departments",
    "hint": "Use CASE WHEN dept_name IN (...) THEN ... END AS division.",
    "expectedSql": "SELECT dept_name, CASE WHEN dept_name IN ('IT', 'R&D') THEN 'Technology & Innovation' WHEN dept_name IN ('Sales', 'Marketing') THEN 'Growth & Revenue' WHEN dept_name IN ('Finance', 'Legal') THEN 'Governance & Capital' ELSE 'Operations & Support' END AS division FROM Departments;",
    "explanation": "Combining CASE with IN sets creates clean category groupings that roll up granular operational units into executive reporting divisions.",
    "tags": [
      "case",
      "in",
      "departments",
      "divisions"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 359,
    "title": "Custom Sort by Department Priority and Salary",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Sort employees by custom department priority (IT first, Finance second, Marketing third, Sales fourth, HR fifth), then by salary descending.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Order by a CASE expression mapping department priority, then by salary DESC."
    ],
    "tableName": "Employees",
    "hint": "Place the CASE expression in the ORDER BY clause.",
    "expectedSql": "SELECT emp_name, department, salary FROM Employees ORDER BY CASE department WHEN 'IT' THEN 1 WHEN 'Finance' THEN 2 WHEN 'Marketing' THEN 3 WHEN 'Sales' THEN 4 WHEN 'HR' THEN 5 ELSE 6 END, salary DESC;",
    "explanation": "Placing a CASE expression inside ORDER BY transforms strings into user-defined numeric weights, bypassing standard lexicographical sort order.",
    "tags": [
      "case",
      "order-by",
      "custom-sort",
      "priority"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 360,
    "title": "Categorize Bonus Payout Tiers",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Categorize bonus payouts into 'No Bonus Awarded' (NULL or 0), 'Standard Bonus' (< 15,000), or 'High Performance Bonus' (>= 15,000).",
    "requirements": [
      "Display `review_id`, `emp_id`, `rating`, `bonus`, and `payout_status`.",
      "Use a CASE expression to evaluate bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Handle NULL or 0 in the first WHEN condition.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus, CASE WHEN bonus IS NULL OR bonus = 0 THEN 'No Bonus Awarded' WHEN bonus < 15000 THEN 'Standard Bonus' ELSE 'High Performance Bonus' END AS payout_status FROM Performance_Reviews;",
    "explanation": "Direct arithmetic comparisons on NULL produce UNKNOWN in three-valued logic. Explicitly checking 'bonus IS NULL' prevents unexpected fallback behavior.",
    "tags": [
      "case",
      "null-handling",
      "audit",
      "bonuses"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 361,
    "title": "Filter by Calculated Pay Grade in Derived Table",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Classify employees into pay grades and filter for employees in 'Executive Pay' (salary >= 75,000) using a derived table.",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `pay_grade`.",
      "Compute pay grade in a subquery and filter for `pay_grade = 'Executive Pay'` in outer WHERE."
    ],
    "tableName": "Employees",
    "hint": "Wrap the CASE classification in a derived table so you can filter by alias.",
    "expectedSql": "SELECT emp_name, department, salary, pay_grade FROM (SELECT emp_name, department, salary, CASE WHEN salary >= 75000 THEN 'Executive Pay' WHEN salary >= 40000 THEN 'Mid Pay' ELSE 'Junior Pay' END AS pay_grade FROM Employees) classified WHERE pay_grade = 'Executive Pay';",
    "explanation": "Because SQL's WHERE clause processes before SELECT, aliases defined in SELECT cannot be referenced in the same query's WHERE clause. Wrapping in a subquery resolves this lexical scoping constraint.",
    "tags": [
      "case",
      "subquery",
      "filtering",
      "scoping"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 362,
    "title": "Custom Sort Projects by Status Priority and Budget",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Sort projects by status priority ('Active' first, 'Planning' second, 'Completed' third), and by budget descending within each status.",
    "requirements": [
      "Display `project_name`, `status`, and `budget`.",
      "Order by a CASE expression on status, then `budget` descending."
    ],
    "tableName": "Projects",
    "hint": "Use CASE status WHEN 'Active' THEN 1 ... in ORDER BY.",
    "expectedSql": "SELECT project_name, status, budget FROM Projects ORDER BY CASE status WHEN 'Active' THEN 1 WHEN 'Planning' THEN 2 WHEN 'Completed' THEN 3 ELSE 4 END, budget DESC;",
    "explanation": "Business workflows frequently require custom status ordering (e.g., Active before Inactive) combined with financial sorting for stakeholder reviews.",
    "tags": [
      "case",
      "order-by",
      "projects",
      "lifecycle"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 363,
    "title": "Total and Senior Staff Count by City",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "For each city, calculate the total employee count and the count of senior employees (experience >= 5).",
    "requirements": [
      "Display `city`, `total_employees`, and `senior_count`.",
      "Group by `city`.",
      "Use `COUNT(CASE WHEN experience >= 5 THEN 1 END)` for senior count."
    ],
    "tableName": "Employees",
    "hint": "Count matching rows using CASE inside the COUNT function.",
    "expectedSql": "SELECT city, COUNT(*) AS total_employees, COUNT(CASE WHEN experience >= 5 THEN 1 END) AS senior_count FROM Employees GROUP BY city;",
    "explanation": "COUNT(expression) only tallies non-null values. When a CASE statement has no ELSE branch, unmatched rows evaluate to NULL and are completely ignored by COUNT().",
    "tags": [
      "case",
      "count",
      "conditional-aggregation",
      "null-behavior"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 364,
    "title": "Compare Junior vs Senior Total Payroll",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Calculate total monthly salary expenditure for junior staff (< 4 years experience) and senior staff (>= 4 years experience).",
    "requirements": [
      "Calculate `junior_payroll` and `senior_payroll`.",
      "Use conditional SUM with CASE expressions."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(CASE WHEN experience < 4 THEN salary ELSE 0 END).",
    "expectedSql": "SELECT SUM(CASE WHEN experience < 4 THEN salary ELSE 0 END) AS junior_payroll, SUM(CASE WHEN experience >= 4 THEN salary ELSE 0 END) AS senior_payroll FROM Employees;",
    "explanation": "Conditional summation enables partitioning monetary sums into multiple columnar metrics within a single database table scan.",
    "tags": [
      "case",
      "sum",
      "conditional-aggregation",
      "payroll"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 365,
    "title": "Count Employees in Salary Tiers per Department",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "For each department, count how many employees fall into low (< 35k), mid (35k to 60k), and high (> 60k) salary tiers.",
    "requirements": [
      "Display `department`, `tier_low`, `tier_mid`, and `tier_high`.",
      "Group by `department`.",
      "Use conditional aggregation with SUM and CASE."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(CASE WHEN ... THEN 1 ELSE 0 END) for each tier.",
    "expectedSql": "SELECT department, SUM(CASE WHEN salary < 35000 THEN 1 ELSE 0 END) AS tier_low, SUM(CASE WHEN salary BETWEEN 35000 AND 60000 THEN 1 ELSE 0 END) AS tier_mid, SUM(CASE WHEN salary > 60000 THEN 1 ELSE 0 END) AS tier_high FROM Employees GROUP BY department;",
    "explanation": "This classic pivot aggregation pattern transforms row-level categories into distinct report columns, essential for cross-tab analysis.",
    "tags": [
      "case",
      "pivot",
      "salary-bands",
      "groupby"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 366,
    "title": "Average Salary for IT vs Non-IT",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Calculate the average salary for IT employees versus all non-IT employees, both rounded to 2 decimal places.",
    "requirements": [
      "Calculate `avg_it_salary` and `avg_non_it_salary`.",
      "Use ROUND(AVG(CASE WHEN ... THEN salary END), 2)."
    ],
    "tableName": "Employees",
    "hint": "Use AVG with CASE to aggregate salaries conditionally.",
    "expectedSql": "SELECT ROUND(AVG(CASE WHEN department = 'IT' THEN salary END), 2) AS avg_it_salary, ROUND(AVG(CASE WHEN department <> 'IT' THEN salary END), 2) AS avg_non_it_salary FROM Employees;",
    "explanation": "Omitting the ELSE clause in AVG(CASE WHEN ...) causes non-matching rows to evaluate to NULL. Because AVG() skips NULL values, the mean is accurately computed over only the target subset.",
    "tags": [
      "case",
      "avg",
      "conditional-aggregation",
      "math"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 367,
    "title": "High Earner Percentage by Department",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "For each department, calculate total staff, count of employees earning >= 50,000, and their percentage of the department (rounded to 1 decimal).",
    "requirements": [
      "Display `department`, `total_staff`, `high_earner_count`, and `high_earner_percentage`.",
      "Group by `department`.",
      "Calculate percentage using conditional SUM divided by COUNT(*)."
    ],
    "tableName": "Employees",
    "hint": "Divide high earner count by total staff, multiply by 100, and round to 1 decimal place.",
    "expectedSql": "SELECT department, COUNT(*) AS total_staff, SUM(CASE WHEN salary >= 50000 THEN 1 ELSE 0 END) AS high_earner_count, ROUND(CASE WHEN COUNT(*) = 0 THEN 0.0 ELSE (SUM(CASE WHEN salary >= 50000 THEN 1.0 ELSE 0.0 END) / COUNT(*)) * 100.0 END, 1) AS high_earner_percentage FROM Employees GROUP BY department;",
    "explanation": "Guarding mathematical divisions against zero-count denominators is a critical production pattern that prevents runtime mathematical exceptions in corporate reporting.",
    "tags": [
      "case",
      "percentage",
      "division-by-zero",
      "data-safety"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 368,
    "title": "Classify Employee Work Location Model",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Display each employee's work model: 'Colocated HQ' if their city matches department location, or 'Regional Branch' otherwise.",
    "requirements": [
      "Display `emp_name`, `department`, `city`, `location`, and `work_model`.",
      "Join Employees with Departments.",
      "Use CASE WHEN e.city = d.location THEN 'Colocated HQ' ELSE 'Regional Branch' END."
    ],
    "tableName": "Employees, Departments",
    "hint": "Compare employee city to department location in a CASE expression.",
    "expectedSql": "SELECT e.emp_name, e.department, e.city, d.location, CASE WHEN e.city = d.location THEN 'Colocated HQ' ELSE 'Regional Branch' END AS work_model FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    "explanation": "Joining entities before applying conditional logic allows multi-table attribute cross-validation to derive organizational insights.",
    "tags": [
      "case",
      "inner-join",
      "workplace",
      "locations"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 369,
    "title": "Classify Project Workload Intensity",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Hard",
    "problemStatement": "For each project, calculate total hours and staff count, and classify intensity: 'Unstaffed' (0 hrs/staff), 'Low Intensity' (<50 hrs), 'Medium Intensity' (50-80 hrs), or 'High Intensity' (>80 hrs).",
    "requirements": [
      "Display `project_name`, `total_hours`, `staff_count`, and `intensity_rating`.",
      "LEFT JOIN Projects with Employee_Projects.",
      "Use CASE to classify intensity based on total hours.",
      "Group by `project_id, project_name`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Combine LEFT JOIN with CASE in SELECT and GROUP BY project attributes.",
    "expectedSql": "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, COUNT(ep.emp_id) AS staff_count, CASE WHEN COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unstaffed' WHEN SUM(ep.hours_allocated) < 50 THEN 'Low Intensity' WHEN SUM(ep.hours_allocated) <= 80 THEN 'Medium Intensity' ELSE 'High Intensity' END AS intensity_rating FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    "explanation": "Combining outer joins, aggregate functions, and multi-tier CASE branching handles both staffed initiatives and empty edge cases in a single query.",
    "tags": [
      "case",
      "left-join",
      "aggregation",
      "workload",
      "hard"
    ],
    "estimatedTimeMinutes": 6
  },
  {
    "id": 370,
    "title": "Classify Employee Salary Standing vs Department",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Classify each employee's salary standing compared to their department average: 'Above Dept Average' (>115%), 'At Dept Average' (85-115%), or 'Below Dept Average' (<85%).",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `salary_standing`.",
      "Use a correlated subquery in CASE to compare with department average."
    ],
    "tableName": "Employees",
    "hint": "Compare salary with correlated department average scaled by 1.15 and 0.85.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary, CASE WHEN e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 1.15 THEN 'Above Dept Average' WHEN e.salary >= (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 0.85 THEN 'At Dept Average' ELSE 'Below Dept Average' END AS salary_standing FROM Employees e;",
    "explanation": "Correlated subqueries dynamically evaluate the benchmark value for each candidate row, enabling relative percentile-style categorization.",
    "tags": [
      "case",
      "correlated-subquery",
      "benchmarks",
      "hard"
    ],
    "estimatedTimeMinutes": 6
  },
  {
    "id": 371,
    "title": "Classify Project Scale Relative to Department Budget",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Classify projects as 'Major Capital Project' (>30% of dept budget), 'Significant Project' (15-30%), or 'Routine Department Project' (<15%).",
    "requirements": [
      "Display `project_name`, `dept_name`, `project_budget`, `dept_budget`, and `project_scale`.",
      "Join Projects with Departments on dept_id.",
      "Use a CASE expression comparing project budget to percentages of department budget."
    ],
    "tableName": "Projects, Departments",
    "hint": "Compare p.budget with 0.30 and 0.15 of d.budget.",
    "expectedSql": "SELECT p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget, CASE WHEN p.budget > d.budget * 0.30 THEN 'Major Capital Project' WHEN p.budget >= d.budget * 0.15 THEN 'Significant Project' ELSE 'Routine Department Project' END AS project_scale FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id;",
    "explanation": "Cross-table mathematical comparisons in CASE statements provide real-world portfolio risk and capital allocation metrics.",
    "tags": [
      "case",
      "joins",
      "finance",
      "governance",
      "hard"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 372,
    "title": "Evaluate Employee Retention Risk",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Assess retention risk using nested CASE expressions based on experience and salary thresholds.",
    "requirements": [
      "Display `emp_name`, `experience`, `salary`, and `retention_assessment`.",
      "Evaluate seasoned staff (>= 6 yrs) and junior staff (< 6 yrs) against salary cutoffs."
    ],
    "tableName": "Employees",
    "hint": "Nest a CASE expression inside another CASE expression.",
    "expectedSql": "SELECT emp_name, experience, salary, CASE WHEN experience >= 6 THEN CASE WHEN salary < 60000 THEN 'High Flight Risk (Underpaid Veteran)' ELSE 'Key Retained Leader' END ELSE CASE WHEN salary < 30000 THEN 'Entry Flight Risk' ELSE 'Standard Stable' END END AS retention_assessment FROM Employees;",
    "explanation": "Nesting CASE expressions models hierarchical decision trees where secondary criteria depend completely on the primary outcome branch.",
    "tags": [
      "case",
      "nested-case",
      "decision-tree",
      "advanced"
    ],
    "estimatedTimeMinutes": 6
  },
  {
    "id": 373,
    "title": "Assign Career Tier Designation",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Assign each employee to 'Leadership Tier' (8+ yrs and >= 75k), 'Senior Contributor' (6+ yrs or >= 60k), 'Core Professional' (3+ yrs), or 'Associate'.",
    "requirements": [
      "Display `emp_name`, `experience`, `salary`, and `tier_designation`.",
      "Use a CASE expression evaluating experience and salary combinations."
    ],
    "tableName": "Employees",
    "hint": "Order your WHEN conditions from most specific (Leadership) to least specific.",
    "expectedSql": "SELECT emp_name, experience, salary, CASE WHEN experience >= 8 AND salary >= 75000 THEN 'Leadership Tier' WHEN experience >= 6 OR salary >= 60000 THEN 'Senior Contributor' WHEN experience >= 3 THEN 'Core Professional' ELSE 'Associate' END AS tier_designation FROM Employees;",
    "explanation": "Because SQL short-circuits on the first condition evaluating to true, placing strict conditions first guarantees candidates receive their highest qualifying designation.",
    "tags": [
      "case",
      "precedence",
      "short-circuit",
      "interview-favorite"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 374,
    "title": "Classify Employee Appraisal Status",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Classify review status: 'Pending Initial Review' (no review), 'Top Performer (Bonus Awarded)', 'High Rating (No Cash Bonus)', or 'Standard Rating (No Cash Bonus)'.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `review_year`, `rating`, and `appraisal_status`.",
      "LEFT JOIN Employees with Performance_Reviews on emp_id.",
      "Use a CASE expression evaluating review_id, rating, and bonus."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Handle review_id IS NULL first in the CASE expression.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.review_id IS NULL THEN 'Pending Initial Review' WHEN pr.rating >= 4 AND pr.bonus IS NOT NULL THEN 'Top Performer (Bonus Awarded)' WHEN pr.rating >= 4 AND pr.bonus IS NULL THEN 'High Rating (No Cash Bonus)' ELSE 'Standard Rating (No Cash Bonus)' END AS appraisal_status FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Correctly distinguishing between missing outer join child records (unreviewed employees) and present records with NULL values (reviewed with no bonus) tests senior SQL data engineering competence.",
    "tags": [
      "case",
      "left-join",
      "null-safe",
      "comprehensive-audit",
      "hard"
    ],
    "estimatedTimeMinutes": 6
  },
  {
    "id": 375,
    "title": "Department Health and Restructure Priority",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Evaluate each department's operational status based on staffing count and annual payroll relative to budget.",
    "requirements": [
      "Display `dept_name`, `staff_count`, `annual_payroll`, `budget`, and `restructure_priority`.",
      "LEFT JOIN Departments with Employees.",
      "Group by department and classify status using a CASE expression with aggregate functions."
    ],
    "tableName": "Departments, Employees",
    "hint": "Evaluate headcount and payroll vs budget in the CASE statement.",
    "expectedSql": "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count, COALESCE(SUM(e.salary * 12), 0) AS annual_payroll, d.budget, CASE WHEN COUNT(e.emp_id) = 0 THEN 'Vacant Department - Urgent Staffing' WHEN COUNT(e.emp_id) >= 5 AND SUM(e.salary * 12) > d.budget THEN 'Overstaffed & Overbudget' WHEN SUM(e.salary * 12) > d.budget THEN 'Overbudget Warning' WHEN COUNT(e.emp_id) <= 2 THEN 'Undermanned Unit' ELSE 'Balanced Operations' END AS restructure_priority FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_id, d.dept_name, d.budget;",
    "explanation": "Enterprise decision engines use multi-tiered aggregate evaluations with priority fall-throughs to power operational analytics and organizational health dashboards.",
    "tags": [
      "case",
      "enterprise",
      "group-by",
      "decision-matrix",
      "hard"
    ],
    "estimatedTimeMinutes": 7
  }
];
