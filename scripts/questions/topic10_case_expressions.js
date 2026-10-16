export const TOPIC10_QUESTIONS = [
  // =========================================================================
  // Subtopic A: CASE Fundamentals (IDs 351–354, Beginner)
  // =========================================================================
  {
    id: 351,
    title: "Regional Operational Zone Classification",
    topic: "CASE Expressions",
    subtopic: "CASE Fundamentals",
    difficulty: "Beginner",
    problemStatement: "Regional logistics and operations planning divides branch locations into operational zones for resource distribution. For all employees, display employee ID, full name, office city, and an operational zone label (`operational_zone`): 'South-Central' for Hyderabad and Vijayawada, 'South-Coastal' for Chennai, 'South-Tech' for Bengaluru, and 'Other Zone' for any other location.",
    requirements: [
      "Categorize `city` into 'South-Central', 'South-Coastal', 'South-Tech', or 'Other Zone'.",
      "Alias the categorized zone as `operational_zone`.",
      "Display `emp_id`, `emp_name`, `city`, and `operational_zone` in that exact order."
    ],
    tableName: "Employees",
    hint: "Use conditional logic matching city values to assign the target zone strings.",
    expectedSql: "SELECT emp_id, emp_name, city, CASE city WHEN 'Hyderabad' THEN 'South-Central' WHEN 'Vijayawada' THEN 'South-Central' WHEN 'Chennai' THEN 'South-Coastal' WHEN 'Bengaluru' THEN 'South-Tech' ELSE 'Other Zone' END AS operational_zone FROM Employees;",
    explanation: "A simple CASE expression compares an input expression (city) to a series of literal values using implicit equality tests. The ELSE branch catches any city not explicitly matched.",
    tags: ["case", "simple-case", "fundamentals", "mapping"],
    estimatedTimeMinutes: 3
  },
  {
    id: 352,
    title: "Onboarding Era Indicator Tag",
    topic: "CASE Expressions",
    subtopic: "CASE Fundamentals",
    difficulty: "Beginner",
    problemStatement: "Talent development tracks recent joiners for onboarding follow-ups. Display employee name, joining year, and a binary flag (`is_recent_hire`) indicating whether the employee joined in 2023 or later (1 if joining year is 2023 or greater, 0 otherwise).",
    requirements: [
      "Evaluate whether `joining_year >= 2023`, assigning 1 for true and 0 for false.",
      "Alias the binary indicator as `is_recent_hire`.",
      "Display `emp_name`, `joining_year`, and `is_recent_hire`."
    ],
    tableName: "Employees",
    hint: "Use conditional expression syntax returning 1 when joining_year is 2023 or greater, and 0 otherwise.",
    expectedSql: "SELECT emp_name, joining_year, CASE WHEN joining_year >= 2023 THEN 1 ELSE 0 END AS is_recent_hire FROM Employees;",
    explanation: "Searched CASE expressions evaluate arbitrary boolean expressions in each WHEN clause. Returning 1 and 0 is standard SQL practice for creating numeric indicator flags.",
    tags: ["case", "searched-case", "boolean-flag", "fundamentals"],
    estimatedTimeMinutes: 3
  },
  {
    id: 353,
    title: "Initiative Delivery Urgency Categorization",
    topic: "CASE Expressions",
    subtopic: "CASE Fundamentals",
    difficulty: "Beginner",
    problemStatement: "Project portfolio managers categorize initiatives into operational delivery urgency tiers. For all corporate projects, display the project name, current status, and a delivery urgency classification (`delivery_urgency`): 'In Progress' for active projects, 'Upcoming' for planning projects, and 'Archive / Standby' for any other status.",
    requirements: [
      "Map project `status` to 'In Progress' for 'Active', 'Upcoming' for 'Planning', and 'Archive / Standby' for all other states.",
      "Alias the resulting category as `delivery_urgency`.",
      "Display `project_name`, `status`, and `delivery_urgency`."
    ],
    tableName: "Projects",
    hint: "Evaluate the status column and provide the designated fallback text for other statuses.",
    expectedSql: "SELECT project_name, status, CASE status WHEN 'Active' THEN 'In Progress' WHEN 'Planning' THEN 'Upcoming' ELSE 'Archive / Standby' END AS delivery_urgency FROM Projects;",
    explanation: "If no WHEN condition evaluates to true and an ELSE clause is omitted, SQL returns NULL. Providing an explicit ELSE ensures deterministic non-null categorical labeling.",
    tags: ["case", "else", "projects", "fundamentals"],
    estimatedTimeMinutes: 3
  },
  {
    id: 354,
    title: "Fast-Track Career Profile Detection",
    topic: "CASE Expressions",
    subtopic: "CASE Fundamentals",
    difficulty: "Beginner",
    problemStatement: "Leadership development is identifying high-potential early-career talent. Display employee name, age, experience, and a career profile tag (`career_profile`): 'Fast Track Candidate' for employees who are 25 years old or younger AND possess at least 2 years of experience, and 'Standard Profile' for all other employees.",
    requirements: [
      "Evaluate whether `age <= 25` and `experience >= 2` simultaneously.",
      "Assign 'Fast Track Candidate' when both conditions hold, otherwise 'Standard Profile'.",
      "Alias the resulting column as `career_profile`.",
      "Display `emp_name`, `age`, `experience`, and `career_profile`."
    ],
    tableName: "Employees",
    hint: "Combine the age and experience conditions in a conditional expression branch.",
    expectedSql: "SELECT emp_name, age, experience, CASE WHEN age <= 25 AND experience >= 2 THEN 'Fast Track Candidate' ELSE 'Standard Profile' END AS career_profile FROM Employees;",
    explanation: "Searched CASE statements support compound logical expressions (AND, OR, NOT), allowing multi-dimensional criteria evaluation within a single branch.",
    tags: ["case", "and", "logical-conditions", "talent"],
    estimatedTimeMinutes: 4
  },

  // =========================================================================
  // Subtopic B: Conditional Classification (IDs 355–358, Beginner)
  // =========================================================================
  {
    id: 355,
    title: "Demographic Age Group Cohort Classification",
    topic: "CASE Expressions",
    subtopic: "Conditional Classification",
    difficulty: "Beginner",
    problemStatement: "Human Resources is compiling demographic statistics across age bands. Display employee ID, name, age, and a demographic cohort label (`age_group`): 'Under 25' for ages strictly below 25, '25 to 29' for ages from 25 to 29 inclusive, and '30 and Above' for ages 30 and higher.",
    requirements: [
      "Classify `age` into 'Under 25', '25 to 29', or '30 and Above'.",
      "Alias the calculated cohort as `age_group`.",
      "Display `emp_id`, `emp_name`, `age`, and `age_group`."
    ],
    tableName: "Employees",
    hint: "Use sequenced threshold checks to assign the correct demographic bracket.",
    expectedSql: "SELECT emp_id, emp_name, age, CASE WHEN age < 25 THEN 'Under 25' WHEN age <= 29 THEN '25 to 29' ELSE '30 and Above' END AS age_group FROM Employees;",
    explanation: "Because CASE evaluates conditions sequentially and short-circuits on the first true branch, 'age <= 29' naturally captures ages between 25 and 29 without needing an explicit lower bound check.",
    tags: ["case", "classification", "demographics", "age-groups"],
    estimatedTimeMinutes: 3
  },
  {
    id: 356,
    title: "Department-Specific Compensation Scale Designation",
    topic: "CASE Expressions",
    subtopic: "Conditional Classification",
    difficulty: "Beginner",
    problemStatement: "Compensation planning uses specialized pay scales for technology roles versus corporate functions. Display employee name, department, monthly salary, and an assigned pay scale status (`pay_scale_status`): 'Tech Core Scale' for IT employees earning at least 50,000, 'Tech Entry Scale' for all other IT employees, and 'General Corporate Scale' for all non-IT personnel.",
    requirements: [
      "Classify employees based on department and salary criteria into the three designated scales.",
      "Alias the resulting label as `pay_scale_status`.",
      "Display `emp_name`, `department`, `salary`, and `pay_scale_status`."
    ],
    tableName: "Employees",
    hint: "Evaluate specific IT salary criteria first before defaulting to the general corporate scale.",
    expectedSql: "SELECT emp_name, department, salary, CASE WHEN department = 'IT' AND salary >= 50000 THEN 'Tech Core Scale' WHEN department = 'IT' THEN 'Tech Entry Scale' ELSE 'General Corporate Scale' END AS pay_scale_status FROM Employees;",
    explanation: "Sequential evaluation handles hierarchical domain logic cleanly: the first branch handles high IT earners, the second catches remaining IT staff, and the ELSE branch catches all other departments.",
    tags: ["case", "classification", "department", "compensation"],
    estimatedTimeMinutes: 4
  },
  {
    id: 357,
    title: "Organizational Tenure and Loyalty Tiers",
    topic: "CASE Expressions",
    subtopic: "Conditional Classification",
    difficulty: "Beginner",
    problemStatement: "Human Resources recognizes organizational loyalty across hiring cohorts. Display employee name, joining year, and a loyalty tier designation (`loyalty_tier`): 'Veteran' for staff who joined prior to 2020, 'Established' for staff who joined between 2020 and 2022 inclusive, and 'New Hire' for staff joining after 2022.",
    requirements: [
      "Classify `joining_year` into 'Veteran', 'Established', or 'New Hire'.",
      "Alias the resulting tier as `loyalty_tier`.",
      "Display `emp_name`, `joining_year`, and `loyalty_tier`."
    ],
    tableName: "Employees",
    hint: "Check joining_year with conditional branches and assign the corresponding tier.",
    expectedSql: "SELECT emp_name, joining_year, CASE WHEN joining_year < 2020 THEN 'Veteran' WHEN joining_year <= 2022 THEN 'Established' ELSE 'New Hire' END AS loyalty_tier FROM Employees;",
    explanation: "Sorting temporal attributes into discrete historical eras allows high-level workforce planning without mutating base table data.",
    tags: ["case", "tenure", "classification", "loyalty"],
    estimatedTimeMinutes: 3
  },
  {
    id: 358,
    title: "Enterprise Division Functional Grouping",
    topic: "CASE Expressions",
    subtopic: "Conditional Classification",
    difficulty: "Beginner",
    problemStatement: "Corporate governance groups functional departments into four broad operational divisions. For each department in Departments, display the department name and its broad division classification (`division`): 'Technology & Innovation' for IT and R&D, 'Growth & Revenue' for Sales and Marketing, 'Governance & Capital' for Finance and Legal, and 'Operations & Support' for all other units.",
    requirements: [
      "Classify `dept_name` into the four broad divisional categories.",
      "Alias the categorized division as `division`.",
      "Display `dept_name` and `division` from Departments."
    ],
    tableName: "Departments",
    hint: "Use set membership checks within conditional branches to map departments to divisions.",
    expectedSql: "SELECT dept_name, CASE WHEN dept_name IN ('IT', 'R&D') THEN 'Technology & Innovation' WHEN dept_name IN ('Sales', 'Marketing') THEN 'Growth & Revenue' WHEN dept_name IN ('Finance', 'Legal') THEN 'Governance & Capital' ELSE 'Operations & Support' END AS division FROM Departments;",
    explanation: "Combining CASE with IN sets creates clean category groupings that roll up granular operational units into executive reporting divisions.",
    tags: ["case", "in", "departments", "divisions"],
    estimatedTimeMinutes: 3
  },

  // =========================================================================
  // Subtopic C: CASE with Sorting and Filtering (IDs 359–362, Intermediate)
  // =========================================================================
  {
    id: 359,
    title: "Executive Slide Order Custom Sorting",
    topic: "CASE Expressions",
    subtopic: "CASE with Sorting and Filtering",
    difficulty: "Medium",
    problemStatement: "Executive presentation decks require a custom departmental sequence rather than alphabetical order. Display employee name, department, and salary, sorted primarily by a custom departmental priority: IT first, Finance second, Marketing third, Sales fourth, HR fifth, and any other department last, breaking ties by salary from highest to lowest.",
    requirements: [
      "Sort employees by custom department priority: IT (1), Finance (2), Marketing (3), Sales (4), HR (5), Other (6).",
      "Sort secondarily by salary in descending order.",
      "Display `emp_name`, `department`, and `salary`."
    ],
    tableName: "Employees",
    hint: "Order by a conditional expression mapping department names to rank numbers, then salary DESC.",
    expectedSql: "SELECT emp_name, department, salary FROM Employees ORDER BY CASE department WHEN 'IT' THEN 1 WHEN 'Finance' THEN 2 WHEN 'Marketing' THEN 3 WHEN 'Sales' THEN 4 WHEN 'HR' THEN 5 ELSE 6 END, salary DESC;",
    explanation: "Placing a CASE expression inside ORDER BY transforms strings into user-defined numeric weights, bypassing standard lexicographical sort order.",
    tags: ["case", "order-by", "custom-sort", "priority"],
    estimatedTimeMinutes: 4
  },
  {
    id: 360,
    title: "Performance Bonus Payout Categorization",
    topic: "CASE Expressions",
    subtopic: "CASE with Sorting and Filtering",
    difficulty: "Medium",
    problemStatement: "Internal audit is categorizing performance reviews based on incentive payout magnitude. For all completed appraisals in Performance_Reviews, display review ID, employee ID, rating, bonus, and a payout status (`payout_status`): 'No Bonus Awarded' if bonus is unassigned or 0, 'Standard Bonus' if bonus is strictly under 15,000, and 'High Performance Bonus' for bonuses of 15,000 or greater.",
    requirements: [
      "Safely evaluate bonus amounts, checking for null or 0 values.",
      "Classify payouts into 'No Bonus Awarded', 'Standard Bonus', or 'High Performance Bonus'.",
      "Alias the payout category as `payout_status`.",
      "Display `review_id`, `emp_id`, `rating`, `bonus`, and `payout_status`."
    ],
    tableName: "Performance_Reviews",
    hint: "Handle null or zero bonus conditions first before checking numeric thresholds.",
    expectedSql: "SELECT review_id, emp_id, rating, bonus, CASE WHEN bonus IS NULL OR bonus = 0 THEN 'No Bonus Awarded' WHEN bonus < 15000 THEN 'Standard Bonus' ELSE 'High Performance Bonus' END AS payout_status FROM Performance_Reviews;",
    explanation: "Direct arithmetic comparisons on NULL produce UNKNOWN in three-valued logic. Explicitly checking 'bonus IS NULL' prevents unexpected fallback behavior.",
    tags: ["case", "null-handling", "audit", "bonuses"],
    estimatedTimeMinutes: 4
  },
  {
    id: 361,
    title: "Executive Compensation Tier Extraction",
    topic: "CASE Expressions",
    subtopic: "CASE with Sorting and Filtering",
    difficulty: "Medium",
    problemStatement: "Compensation governance is isolating employees categorized into the executive compensation tier. Classify employees into 'Executive Pay' for salaries of 75,000 or higher, 'Mid Pay' for salaries from 40,000 to 74,999, and 'Junior Pay' for salaries under 40,000, and filter the final result to return only staff members placed in 'Executive Pay'.",
    requirements: [
      "Classify salaries in a subquery or derived table aliasing the tier as `pay_grade`.",
      "Filter the outer result strictly for records where `pay_grade = 'Executive Pay'`.",
      "Display `emp_name`, `department`, `salary`, and `pay_grade`."
    ],
    tableName: "Employees",
    hint: "Wrap the classification in a derived table and filter by pay_grade in the outer query.",
    expectedSql: "SELECT emp_name, department, salary, pay_grade FROM (SELECT emp_name, department, salary, CASE WHEN salary >= 75000 THEN 'Executive Pay' WHEN salary >= 40000 THEN 'Mid Pay' ELSE 'Junior Pay' END AS pay_grade FROM Employees) classified WHERE pay_grade = 'Executive Pay';",
    explanation: "Because SQL's WHERE clause processes before SELECT, aliases defined in SELECT cannot be referenced in the same query's WHERE clause. Wrapping in a subquery resolves this lexical scoping constraint.",
    tags: ["case", "subquery", "filtering", "scoping"],
    estimatedTimeMinutes: 5
  },
  {
    id: 362,
    title: "Project Portfolio Urgency-Based Prioritization",
    topic: "CASE Expressions",
    subtopic: "CASE with Sorting and Filtering",
    difficulty: "Medium",
    problemStatement: "The PMO reviews corporate initiatives using a customized operational urgency sort order. Display project name, status, and budget from Projects, ordered primarily by operational status urgency: 'Active' first, 'Planning' second, 'Completed' third, and any other status fourth, and secondarily by budget from highest to lowest.",
    requirements: [
      "Order projects by custom status priority: Active (1), Planning (2), Completed (3), Other (4).",
      "Apply secondary sorting on budget in descending order.",
      "Display `project_name`, `status`, and `budget`."
    ],
    tableName: "Projects",
    hint: "Sort by a conditional expression mapping statuses to numeric rank order, followed by budget DESC.",
    expectedSql: "SELECT project_name, status, budget FROM Projects ORDER BY CASE status WHEN 'Active' THEN 1 WHEN 'Planning' THEN 2 WHEN 'Completed' THEN 3 ELSE 4 END, budget DESC;",
    explanation: "Business workflows frequently require custom status ordering (e.g., Active before Inactive) combined with financial sorting for stakeholder reviews.",
    tags: ["case", "order-by", "projects", "lifecycle"],
    estimatedTimeMinutes: 4
  },

  // =========================================================================
  // Subtopic D: CASE with Aggregates (IDs 363–367, Intermediate)
  // =========================================================================
  {
    id: 363,
    title: "City Senior Staff Density Breakdown",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "Workforce planning is auditing the presence of seasoned talent across branch locations. For each city in Employees, display the city name, total employee headcount (`total_employees`), and the count of senior staff members who possess at least 5 years of experience (`senior_count`).",
    requirements: [
      "Group records by `city`.",
      "Count total employees aliased as `total_employees`.",
      "Count employees with `experience >= 5` using conditional counting, aliased as `senior_count`.",
      "Display `city`, `total_employees`, and `senior_count`."
    ],
    tableName: "Employees",
    hint: "Apply COUNT(CASE WHEN experience >= 5 THEN 1 END) within the GROUP BY aggregation.",
    expectedSql: "SELECT city, COUNT(*) AS total_employees, COUNT(CASE WHEN experience >= 5 THEN 1 END) AS senior_count FROM Employees GROUP BY city;",
    explanation: "COUNT(expression) only tallies non-null values. When a CASE statement has no ELSE branch, unmatched rows evaluate to NULL and are completely ignored by COUNT().",
    tags: ["case", "count", "conditional-aggregation", "null-behavior"],
    estimatedTimeMinutes: 4
  },
  {
    id: 364,
    title: "Experience-Tiered Payroll Expenditure Comparison",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "Finance leadership is comparing corporate wage expenditure between junior and senior personnel. In a single summary record, calculate total payroll spent on junior staff with under 4 years of experience (aliased as `junior_payroll`) versus seasoned staff with 4 or more years of experience (aliased as `senior_payroll`).",
    requirements: [
      "Query the Employees table.",
      "Calculate total salary for staff with `experience < 4` aliased as `junior_payroll`.",
      "Calculate total salary for staff with `experience >= 4` aliased as `senior_payroll`.",
      "Display both metrics in a single summary row."
    ],
    tableName: "Employees",
    hint: "Use conditional SUM aggregation evaluating the experience threshold into separate metrics.",
    expectedSql: "SELECT SUM(CASE WHEN experience < 4 THEN salary ELSE 0 END) AS junior_payroll, SUM(CASE WHEN experience >= 4 THEN salary ELSE 0 END) AS senior_payroll FROM Employees;",
    explanation: "Conditional summation enables partitioning monetary sums into multiple columnar metrics within a single database table scan.",
    tags: ["case", "sum", "conditional-aggregation", "payroll"],
    estimatedTimeMinutes: 4
  },
  {
    id: 365,
    title: "Departmental Compensation Band Headcounts",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "Human Resources is mapping salary tier distribution across departments. For each department, display the department name, count of staff earning strictly under 35,000 (`tier_low`), count of staff earning between 35,000 and 60,000 inclusive (`tier_mid`), and count of staff earning strictly over 60,000 (`tier_high`).",
    requirements: [
      "Group records by `department`.",
      "Count staff earning under 35,000 aliased as `tier_low`.",
      "Count staff earning between 35,000 and 60,000 inclusive aliased as `tier_mid`.",
      "Count staff earning over 60,000 aliased as `tier_high`.",
      "Display `department`, `tier_low`, `tier_mid`, and `tier_high`."
    ],
    tableName: "Employees",
    hint: "Use SUM with conditional expressions to pivot headcounts into three distinct tier columns.",
    expectedSql: "SELECT department, SUM(CASE WHEN salary < 35000 THEN 1 ELSE 0 END) AS tier_low, SUM(CASE WHEN salary BETWEEN 35000 AND 60000 THEN 1 ELSE 0 END) AS tier_mid, SUM(CASE WHEN salary > 60000 THEN 1 ELSE 0 END) AS tier_high FROM Employees GROUP BY department;",
    explanation: "This classic pivot aggregation pattern transforms row-level categories into distinct report columns, essential for cross-tab analysis.",
    tags: ["case", "pivot", "salary-bands", "groupby"],
    estimatedTimeMinutes: 5
  },
  {
    id: 366,
    title: "Technical vs Business Unit Average Salary Benchmark",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "Compensation analytics compares overall average salaries between engineering staff and all other business departments. In a single summary row, compute the average salary of employees in the IT department (rounded to 2 decimal places, aliased as `avg_it_salary`) alongside the average salary of all non-IT employees (rounded to 2 decimal places, aliased as `avg_non_it_salary`).",
    requirements: [
      "Query the Employees table.",
      "Calculate average salary for IT employees rounded to 2 decimal places, aliased as `avg_it_salary`.",
      "Calculate average salary for non-IT employees rounded to 2 decimal places, aliased as `avg_non_it_salary`.",
      "Return both metrics in a single summary record."
    ],
    tableName: "Employees",
    hint: "Apply conditional AVG(CASE WHEN ...) wrapped in ROUND to 2 decimal places for each cohort.",
    expectedSql: "SELECT ROUND(AVG(CASE WHEN department = 'IT' THEN salary END), 2) AS avg_it_salary, ROUND(AVG(CASE WHEN department <> 'IT' THEN salary END), 2) AS avg_non_it_salary FROM Employees;",
    explanation: "Omitting the ELSE clause in AVG(CASE WHEN ...) causes non-matching rows to evaluate to NULL. Because AVG() skips NULL values, the mean is accurately computed over only the target subset.",
    tags: ["case", "avg", "conditional-aggregation", "math"],
    estimatedTimeMinutes: 4
  },
  {
    id: 367,
    title: "Department High-Earner Percentage with Safeguard",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "Compensation governance calculates the percentage of high earners in each business unit while safeguarding against division-by-zero errors. For each department, display the department name, total staff count (`total_staff`), count of staff earning at least 50,000 (`high_earner_count`), and the percentage of staff earning at least 50,000 rounded to 1 decimal place (`high_earner_percentage`).",
    requirements: [
      "Group records by `department` in Employees.",
      "Count total staff aliased as `total_staff`.",
      "Count staff earning at least 50,000 aliased as `high_earner_count`.",
      "Calculate high earner percentage with a zero-division safeguard, rounded to 1 decimal place, aliased as `high_earner_percentage`.",
      "Display `department`, `total_staff`, `high_earner_count`, and `high_earner_percentage`."
    ],
    tableName: "Employees",
    hint: "Use conditional logic to check for a headcount of 0 before performing the percentage division.",
    expectedSql: "SELECT department, COUNT(*) AS total_staff, SUM(CASE WHEN salary >= 50000 THEN 1 ELSE 0 END) AS high_earner_count, ROUND(CASE WHEN COUNT(*) = 0 THEN 0.0 ELSE (SUM(CASE WHEN salary >= 50000 THEN 1.0 ELSE 0.0 END) / COUNT(*)) * 100.0 END, 1) AS high_earner_percentage FROM Employees GROUP BY department;",
    explanation: "Guarding mathematical divisions against zero-count denominators is a critical production pattern that prevents runtime mathematical exceptions in corporate reporting.",
    tags: ["case", "percentage", "division-by-zero", "data-safety"],
    estimatedTimeMinutes: 5
  },

  // =========================================================================
  // Subtopic E: CASE with JOINs and Subqueries (IDs 368–371, 1 Med + 3 Hard)
  // =========================================================================
  {
    id: 368,
    title: "Colocation vs Regional Work Model Classification",
    topic: "CASE Expressions",
    subtopic: "CASE with JOINs and Subqueries",
    difficulty: "Medium",
    problemStatement: "Facilities and HR analyze employee geographical colocation with their department's headquarters. Join employees with their registered department and display employee name, department, employee resident city, department headquarters location, and an operational work model tag (`work_model`): 'Colocated HQ' if the employee lives in the same city as the department headquarters, or 'Regional Branch' if located in a different city.",
    requirements: [
      "Join Employees and Departments on matching department name.",
      "Classify work arrangement as 'Colocated HQ' if `city = location`, otherwise 'Regional Branch'.",
      "Alias the classification as `work_model`.",
      "Display `emp_name`, `department`, `city`, `location`, and `work_model`."
    ],
    tableName: "Employees, Departments",
    hint: "Join on department name and use a conditional equality check comparing e.city to d.location.",
    expectedSql: "SELECT e.emp_name, e.department, e.city, d.location, CASE WHEN e.city = d.location THEN 'Colocated HQ' ELSE 'Regional Branch' END AS work_model FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    explanation: "Joining entities before applying conditional logic allows multi-table attribute cross-validation to derive organizational insights.",
    tags: ["case", "inner-join", "workplace", "locations"],
    estimatedTimeMinutes: 4
  },
  {
    id: 369,
    title: "Project Initiative Resource Intensity Rating",
    topic: "CASE Expressions",
    subtopic: "CASE with JOINs and Subqueries",
    difficulty: "Hard",
    problemStatement: "Resource governance rates corporate initiatives by resource intensity. For all projects in Projects, display project name, cumulative weekly allocated hours (defaulting to 0, aliased as `total_hours`), assigned staff count (`staff_count`), and an intensity rating (`intensity_rating`): 'Unstaffed' if staff count or total hours is 0, 'Low Intensity' for under 50 weekly hours, 'Medium Intensity' for 50 to 80 weekly hours inclusive, and 'High Intensity' for over 80 weekly hours.",
    requirements: [
      "Combine Projects and Employee_Projects preserving all projects.",
      "Group by project ID and project name.",
      "Sum weekly hours aliased as `total_hours` and count assigned staff aliased as `staff_count`.",
      "Assign intensity rating into 'Unstaffed', 'Low Intensity', 'Medium Intensity', or 'High Intensity' aliased as `intensity_rating`.",
      "Display `project_name`, `total_hours`, `staff_count`, and `intensity_rating`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Group by project attributes and evaluate total hours with a conditional classification expression.",
    expectedSql: "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, COUNT(ep.emp_id) AS staff_count, CASE WHEN COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unstaffed' WHEN SUM(ep.hours_allocated) < 50 THEN 'Low Intensity' WHEN SUM(ep.hours_allocated) <= 80 THEN 'Medium Intensity' ELSE 'High Intensity' END AS intensity_rating FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    explanation: "Combining outer joins, aggregate functions, and multi-tier CASE branching handles both staffed initiatives and empty edge cases in a single query.",
    tags: ["case", "left-join", "aggregation", "workload", "hard"],
    estimatedTimeMinutes: 6
  },
  {
    id: 370,
    title: "Intra-Departmental Salary Standing Evaluation",
    topic: "CASE Expressions",
    subtopic: "CASE with JOINs and Subqueries",
    difficulty: "Hard",
    problemStatement: "Workforce equity evaluates each employee's salary standing relative to their own department's average. Display employee name, department, monthly salary, and a relative salary standing label (`salary_standing`): 'Above Dept Average' if salary exceeds 115% of the department average, 'At Dept Average' if salary is between 85% and 115% of the department average inclusive, and 'Below Dept Average' if salary is under 85% of the department average.",
    requirements: [
      "Compare each employee's salary against a correlated subquery computing their department's average salary.",
      "Classify into 'Above Dept Average', 'At Dept Average', or 'Below Dept Average' based on the specified percentage thresholds.",
      "Alias the standing label as `salary_standing`.",
      "Display `emp_name`, `department`, `salary`, and `salary_standing` from Employees."
    ],
    tableName: "Employees",
    hint: "Use a correlated subquery computing AVG(salary) for the matching department within the conditional checks.",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, CASE WHEN e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 1.15 THEN 'Above Dept Average' WHEN e.salary >= (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 0.85 THEN 'At Dept Average' ELSE 'Below Dept Average' END AS salary_standing FROM Employees e;",
    explanation: "Correlated subqueries dynamically evaluate the benchmark value for each candidate row, enabling relative percentile-style categorization.",
    tags: ["case", "correlated-subquery", "benchmarks", "hard"],
    estimatedTimeMinutes: 6
  },
  {
    id: 371,
    title: "Project Capital Allocation Scale Classification",
    topic: "CASE Expressions",
    subtopic: "CASE with JOINs and Subqueries",
    difficulty: "Hard",
    problemStatement: "Strategic planning classifies project size relative to the sponsoring department's overall budget. For all projects, display project name, department name, project budget (`project_budget`), department budget (`dept_budget`), and a project scale classification (`project_scale`): 'Major Capital Project' if project budget exceeds 30% of the department budget, 'Significant Project' if between 15% and 30% inclusive, and 'Routine Department Project' if under 15%.",
    requirements: [
      "Join Projects and Departments on department ID (`dept_id`).",
      "Compare project budget to departmental budget thresholds.",
      "Classify scale into 'Major Capital Project', 'Significant Project', or 'Routine Department Project' aliased as `project_scale`.",
      "Display `project_name`, `dept_name`, `project_budget`, `dept_budget`, and `project_scale`."
    ],
    tableName: "Projects, Departments",
    hint: "Join on dept_id and compare p.budget against percentages of d.budget.",
    expectedSql: "SELECT p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget, CASE WHEN p.budget > d.budget * 0.30 THEN 'Major Capital Project' WHEN p.budget >= d.budget * 0.15 THEN 'Significant Project' ELSE 'Routine Department Project' END AS project_scale FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id;",
    explanation: "Cross-table mathematical comparisons in CASE statements provide real-world portfolio risk and capital allocation metrics.",
    tags: ["case", "joins", "finance", "governance", "hard"],
    estimatedTimeMinutes: 5
  },

  // =========================================================================
  // Subtopic F: Interview-Level CASE Challenges (IDs 372–375, Advanced / Hard)
  // =========================================================================
  {
    id: 372,
    title: "Talent Retention and Compensation Flight Risk Audit",
    topic: "CASE Expressions",
    subtopic: "Interview-Level CASE Challenges",
    difficulty: "Hard",
    problemStatement: "Human Resources is conducting a flight risk assessment combining experience and compensation. For all employees, display employee name, years of experience, monthly salary, and an assigned retention assessment (`retention_assessment`): for seasoned staff (6 or more years of experience), label as 'High Flight Risk (Underpaid Veteran)' if salary is under 60,000, or 'Key Retained Leader' otherwise; for staff under 6 years of experience, label as 'Entry Flight Risk' if salary is under 30,000, or 'Standard Stable' otherwise.",
    requirements: [
      "Classify employees using multi-tiered logic combining experience and salary criteria.",
      "Alias the resulting evaluation as `retention_assessment`.",
      "Display `emp_name`, `experience`, `salary`, and `retention_assessment` from Employees."
    ],
    tableName: "Employees",
    hint: "Structure nested conditional expressions evaluating the tenure band first, then compensation thresholds.",
    expectedSql: "SELECT emp_name, experience, salary, CASE WHEN experience >= 6 THEN CASE WHEN salary < 60000 THEN 'High Flight Risk (Underpaid Veteran)' ELSE 'Key Retained Leader' END ELSE CASE WHEN salary < 30000 THEN 'Entry Flight Risk' ELSE 'Standard Stable' END END AS retention_assessment FROM Employees;",
    explanation: "Nesting CASE expressions models hierarchical decision trees where secondary criteria depend completely on the primary outcome branch.",
    tags: ["case", "nested-case", "decision-tree", "advanced"],
    estimatedTimeMinutes: 6
  },
  {
    id: 373,
    title: "Workforce Priority Career Tier Designation",
    topic: "CASE Expressions",
    subtopic: "Interview-Level CASE Challenges",
    difficulty: "Hard",
    problemStatement: "Organizational design implements priority-ordered career tier designations. Classify employees into career tiers evaluated in sequence: 'Leadership Tier' for staff with at least 8 years of experience AND earning at least 75,000; 'Senior Contributor' for staff with at least 6 years of experience OR earning at least 60,000; 'Core Professional' for staff with at least 3 years of experience; and 'Associate' for all other employees. Display employee name, experience, salary, and the assigned tier aliased as `tier_designation`.",
    requirements: [
      "Evaluate criteria in the exact specified priority order.",
      "Alias the assigned label as `tier_designation`.",
      "Display `emp_name`, `experience`, `salary`, and `tier_designation` from Employees."
    ],
    tableName: "Employees",
    hint: "Rely on sequential short-circuiting logic in the conditional expression, ordering conditions from most selective to least.",
    expectedSql: "SELECT emp_name, experience, salary, CASE WHEN experience >= 8 AND salary >= 75000 THEN 'Leadership Tier' WHEN experience >= 6 OR salary >= 60000 THEN 'Senior Contributor' WHEN experience >= 3 THEN 'Core Professional' ELSE 'Associate' END AS tier_designation FROM Employees;",
    explanation: "Because SQL short-circuits on the first condition evaluating to true, placing strict conditions first guarantees candidates receive their highest qualifying designation.",
    tags: ["case", "precedence", "short-circuit", "interview-favorite"],
    estimatedTimeMinutes: 5
  },
  {
    id: 374,
    title: "Comprehensive Performance and Incentive Audit Matrix",
    topic: "CASE Expressions",
    subtopic: "Interview-Level CASE Challenges",
    difficulty: "Hard",
    problemStatement: "The compensation committee audits review and bonus history across all staff members. Display employee ID, name, review year, rating, and a comprehensive appraisal status (`appraisal_status`): 'Pending Initial Review' if the employee has never been reviewed; 'Top Performer (Bonus Awarded)' if rating is at least 4 and a bonus was awarded; 'High Rating (No Cash Bonus)' if rating is at least 4 but bonus is unassigned; and 'Standard Rating (No Cash Bonus)' for all other cases.",
    requirements: [
      "Combine Employees and Performance_Reviews preserving all employees.",
      "Classify status into the four designated appraisal categories, accounting for outer join null values.",
      "Alias the resulting label as `appraisal_status`.",
      "Display `emp_id`, `emp_name`, `review_year`, `rating`, and `appraisal_status`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Use a left outer join from Employees to Performance_Reviews and evaluate review_id nullity first.",
    expectedSql: "SELECT e.emp_id, e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.review_id IS NULL THEN 'Pending Initial Review' WHEN pr.rating >= 4 AND pr.bonus IS NOT NULL THEN 'Top Performer (Bonus Awarded)' WHEN pr.rating >= 4 AND pr.bonus IS NULL THEN 'High Rating (No Cash Bonus)' ELSE 'Standard Rating (No Cash Bonus)' END AS appraisal_status FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Correctly distinguishing between missing outer join child records (unreviewed employees) and present records with NULL values (reviewed with no bonus) tests senior SQL data engineering competence.",
    tags: ["case", "left-join", "null-safe", "comprehensive-audit", "hard"],
    estimatedTimeMinutes: 6
  },
  {
    id: 375,
    title: "Departmental Health and Restructuring Priority Matrix",
    topic: "CASE Expressions",
    subtopic: "Interview-Level CASE Challenges",
    difficulty: "Hard",
    problemStatement: "The executive committee is evaluating organizational health across all registered corporate departments. For each department in Departments, display department name, assigned staff count (`staff_count`), annualized payroll expense (`annual_payroll`, defaulting to 0), departmental budget, and a restructuring priority label (`restructure_priority`): 'Vacant Department - Urgent Staffing' if headcount is 0; 'Overstaffed & Overbudget' if headcount is at least 5 AND annual payroll exceeds budget; 'Overbudget Warning' if annual payroll exceeds budget; 'Undermanned Unit' if headcount is 2 or fewer; and 'Balanced Operations' for all other departments.",
    requirements: [
      "Combine Departments and Employees preserving all registered departments.",
      "Group by department ID, department name, and budget.",
      "Count staff aliased as `staff_count` and sum annualized payroll (`salary * 12`) defaulting to 0 aliased as `annual_payroll`.",
      "Classify restructuring priority into the five designated categories, aliased as `restructure_priority`.",
      "Display `dept_name`, `staff_count`, `annual_payroll`, `budget`, and `restructure_priority`."
    ],
    tableName: "Departments, Employees",
    hint: "Left join Departments to Employees, group by department attributes, and evaluate group aggregates with conditional logic in order.",
    expectedSql: "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count, COALESCE(SUM(e.salary * 12), 0) AS annual_payroll, d.budget, CASE WHEN COUNT(e.emp_id) = 0 THEN 'Vacant Department - Urgent Staffing' WHEN COUNT(e.emp_id) >= 5 AND SUM(e.salary * 12) > d.budget THEN 'Overstaffed & Overbudget' WHEN SUM(e.salary * 12) > d.budget THEN 'Overbudget Warning' WHEN COUNT(e.emp_id) <= 2 THEN 'Undermanned Unit' ELSE 'Balanced Operations' END AS restructure_priority FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_id, d.dept_name, d.budget;",
    explanation: "Enterprise decision engines use multi-tiered aggregate evaluations with priority fall-throughs to power operational analytics and organizational health dashboards.",
    tags: ["case", "enterprise", "group-by", "decision-matrix", "hard"],
    estimatedTimeMinutes: 7
  }
];
