export const TOPIC10_QUESTIONS = [
  // =========================================================================
  // Subtopic A: CASE Fundamentals (IDs 351–354, Beginner)
  // =========================================================================
  {
    id: 351,
    title: "Map office cities into operational zones using simple CASE",
    topic: "CASE Expressions",
    subtopic: "CASE Fundamentals",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query using a simple CASE expression to map employee office cities into operational zones: 'Hyderabad' and 'Vijayawada' to 'South-Central', 'Chennai' to 'South-Coastal', 'Bengaluru' to 'South-Tech', and any other location to 'Other Zone'.",
    requirements: [
      "Use simple CASE syntax matching directly on the city column: CASE city WHEN ...",
      "Alias the calculated column as operational_zone.",
      "Project emp_id, emp_name, city, and operational_zone in that exact order."
    ],
    tableName: "Employees",
    hint: "SELECT emp_id, emp_name, city, CASE city WHEN 'Hyderabad' THEN 'South-Central' WHEN 'Vijayawada' THEN 'South-Central' WHEN 'Chennai' THEN 'South-Coastal' WHEN 'Bengaluru' THEN 'South-Tech' ELSE 'Other Zone' END AS operational_zone FROM Employees;",
    expectedSql: "SELECT emp_id, emp_name, city, CASE city WHEN 'Hyderabad' THEN 'South-Central' WHEN 'Vijayawada' THEN 'South-Central' WHEN 'Chennai' THEN 'South-Coastal' WHEN 'Bengaluru' THEN 'South-Tech' ELSE 'Other Zone' END AS operational_zone FROM Employees;",
    explanation: "A simple CASE expression compares an input expression (city) to a series of literal values using implicit equality tests. The ELSE branch catches any city not explicitly matched.",
    tags: ["case", "simple-case", "fundamentals", "mapping"],
    estimatedTimeMinutes: 3
  },
  {
    id: 352,
    title: "Generate a binary recent hire indicator using searched CASE",
    topic: "CASE Expressions",
    subtopic: "CASE Fundamentals",
    difficulty: "Beginner",
    problemStatement: "Write a query using a searched CASE statement that flags whether an employee was hired recently. Return a flag is_recent_hire that evaluates to 1 if joining_year is 2023 or later, and 0 otherwise.",
    requirements: [
      "Use searched CASE syntax: CASE WHEN joining_year >= 2023 THEN 1 ELSE 0 END.",
      "Alias the result as is_recent_hire.",
      "Project emp_name, joining_year, and is_recent_hire."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, joining_year, CASE WHEN joining_year >= 2023 THEN 1 ELSE 0 END AS is_recent_hire FROM Employees;",
    expectedSql: "SELECT emp_name, joining_year, CASE WHEN joining_year >= 2023 THEN 1 ELSE 0 END AS is_recent_hire FROM Employees;",
    explanation: "Searched CASE expressions evaluate arbitrary boolean expressions in each WHEN clause. Returning 1 and 0 is standard SQL practice for creating numeric indicator flags.",
    tags: ["case", "searched-case", "boolean-flag", "fundamentals"],
    estimatedTimeMinutes: 3
  },
  {
    id: 353,
    title: "Classify project delivery urgency with explicit ELSE fallback",
    topic: "CASE Expressions",
    subtopic: "CASE Fundamentals",
    difficulty: "Beginner",
    problemStatement: "Display project name, status, and delivery_urgency. If status is 'Active', urgency is 'In Progress'; if status is 'Planning', urgency is 'Upcoming'; for all other statuses, explicitly return 'Archive / Standby' using the ELSE clause.",
    requirements: [
      "Evaluate project status.",
      "Include an explicit ELSE branch returning 'Archive / Standby'.",
      "Alias the calculated column as delivery_urgency.",
      "Select project_name, status, and delivery_urgency."
    ],
    tableName: "Projects",
    hint: "SELECT project_name, status, CASE status WHEN 'Active' THEN 'In Progress' WHEN 'Planning' THEN 'Upcoming' ELSE 'Archive / Standby' END AS delivery_urgency FROM Projects;",
    expectedSql: "SELECT project_name, status, CASE status WHEN 'Active' THEN 'In Progress' WHEN 'Planning' THEN 'Upcoming' ELSE 'Archive / Standby' END AS delivery_urgency FROM Projects;",
    explanation: "If no WHEN condition evaluates to true and an ELSE clause is omitted, SQL returns NULL. Providing an explicit ELSE ensures deterministic non-null categorical labeling.",
    tags: ["case", "else", "projects", "fundamentals"],
    estimatedTimeMinutes: 3
  },
  {
    id: 354,
    title: "Identify fast-track talent using compound boolean conditions",
    topic: "CASE Expressions",
    subtopic: "CASE Fundamentals",
    difficulty: "Beginner",
    problemStatement: "Write a query to evaluate employee career profiles. If an employee is aged 25 or younger (age <= 25) AND has at least 2 years of experience (experience >= 2), designate them as 'Fast Track Candidate'; otherwise label as 'Standard Profile'.",
    requirements: [
      "Combine age and experience predicates using the AND operator inside the WHEN clause.",
      "Project emp_name, age, experience, and career_profile."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, age, experience, CASE WHEN age <= 25 AND experience >= 2 THEN 'Fast Track Candidate' ELSE 'Standard Profile' END AS career_profile FROM Employees;",
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
    title: "Categorize workforce into demographic age brackets",
    topic: "CASE Expressions",
    subtopic: "Conditional Classification",
    difficulty: "Beginner",
    problemStatement: "Categorize employees into age cohorts: 'Under 25' for ages under 25, '25 to 29' for ages 25 through 29, and '30 and Above' for ages 30 and older. Display emp_id, emp_name, age, and age_group.",
    requirements: [
      "Evaluate age using ordered boundary thresholds.",
      "Alias the result as age_group.",
      "Project emp_id, emp_name, age, and age_group."
    ],
    tableName: "Employees",
    hint: "SELECT emp_id, emp_name, age, CASE WHEN age < 25 THEN 'Under 25' WHEN age <= 29 THEN '25 to 29' ELSE '30 and Above' END AS age_group FROM Employees;",
    expectedSql: "SELECT emp_id, emp_name, age, CASE WHEN age < 25 THEN 'Under 25' WHEN age <= 29 THEN '25 to 29' ELSE '30 and Above' END AS age_group FROM Employees;",
    explanation: "Because CASE evaluates conditions sequentially and short-circuits on the first true branch, 'age <= 29' naturally captures ages between 25 and 29 without needing an explicit lower bound check.",
    tags: ["case", "classification", "demographics", "age-groups"],
    estimatedTimeMinutes: 3
  },
  {
    id: 356,
    title: "Apply department-specific compensation scale status",
    topic: "CASE Expressions",
    subtopic: "Conditional Classification",
    difficulty: "Beginner",
    problemStatement: "Classify employees into compensation scales: If an employee belongs to the 'IT' department and earns 50,000 or more, label as 'Tech Core Scale'; if in 'IT' and earns under 50,000, label as 'Tech Entry Scale'; for all non-IT employees, label as 'General Corporate Scale'.",
    requirements: [
      "Evaluate department and salary thresholds.",
      "Alias the scale classification as pay_scale_status.",
      "Project emp_name, department, salary, and pay_scale_status."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, department, salary, CASE WHEN department = 'IT' AND salary >= 50000 THEN 'Tech Core Scale' WHEN department = 'IT' THEN 'Tech Entry Scale' ELSE 'General Corporate Scale' END AS pay_scale_status FROM Employees;",
    expectedSql: "SELECT emp_name, department, salary, CASE WHEN department = 'IT' AND salary >= 50000 THEN 'Tech Core Scale' WHEN department = 'IT' THEN 'Tech Entry Scale' ELSE 'General Corporate Scale' END AS pay_scale_status FROM Employees;",
    explanation: "Sequential evaluation handles hierarchical domain logic cleanly: the first branch handles high IT earners, the second catches remaining IT staff, and the ELSE branch catches all other departments.",
    tags: ["case", "classification", "department", "compensation"],
    estimatedTimeMinutes: 4
  },
  {
    id: 357,
    title: "Classify employee tenure into organizational loyalty brackets",
    topic: "CASE Expressions",
    subtopic: "Conditional Classification",
    difficulty: "Beginner",
    problemStatement: "Determine employee loyalty tiers based on their joining year: 'Veteran' if joined before 2020 (joining_year < 2020), 'Established' if joined between 2020 and 2022 inclusive, and 'New Hire' if joined in 2023 or later. Display emp_name, joining_year, and loyalty_tier.",
    requirements: [
      "Evaluate joining_year boundaries.",
      "Alias the result as loyalty_tier.",
      "Project emp_name, joining_year, and loyalty_tier."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, joining_year, CASE WHEN joining_year < 2020 THEN 'Veteran' WHEN joining_year <= 2022 THEN 'Established' ELSE 'New Hire' END AS loyalty_tier FROM Employees;",
    expectedSql: "SELECT emp_name, joining_year, CASE WHEN joining_year < 2020 THEN 'Veteran' WHEN joining_year <= 2022 THEN 'Established' ELSE 'New Hire' END AS loyalty_tier FROM Employees;",
    explanation: "Sorting temporal attributes into discrete historical eras allows high-level workforce planning without mutating base table data.",
    tags: ["case", "tenure", "classification", "loyalty"],
    estimatedTimeMinutes: 3
  },
  {
    id: 358,
    title: "Group organizational departments into broad corporate divisions",
    topic: "CASE Expressions",
    subtopic: "Conditional Classification",
    difficulty: "Beginner",
    problemStatement: "Map each department in the Departments table into an enterprise division: 'IT' and 'R&D' to 'Technology & Innovation'; 'Sales' and 'Marketing' to 'Growth & Revenue'; 'Finance' and 'Legal' to 'Governance & Capital'; and all others to 'Operations & Support'. Display dept_name and division.",
    requirements: [
      "Use IN (...) expressions inside WHEN clauses to group multiple departments.",
      "Alias the calculated column as division.",
      "Project dept_name and division."
    ],
    tableName: "Departments",
    hint: "SELECT dept_name, CASE WHEN dept_name IN ('IT', 'R&D') THEN 'Technology & Innovation' WHEN dept_name IN ('Sales', 'Marketing') THEN 'Growth & Revenue' WHEN dept_name IN ('Finance', 'Legal') THEN 'Governance & Capital' ELSE 'Operations & Support' END AS division FROM Departments;",
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
    title: "Sort employee roster in custom executive presentation order",
    topic: "CASE Expressions",
    subtopic: "CASE with Sorting and Filtering",
    difficulty: "Medium",
    problemStatement: "Sort employees by department according to executive presentation priority rather than alphabetical order: 'IT' first, followed by 'Finance', 'Marketing', 'Sales', and finally 'HR'. Break ties within each department by salary descending. Display emp_name, department, and salary.",
    requirements: [
      "Embed a CASE expression inside the ORDER BY clause mapping departments to ordinal integers 1 through 5.",
      "Include secondary sorting by salary DESC.",
      "Select emp_name, department, and salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, department, salary FROM Employees ORDER BY CASE department WHEN 'IT' THEN 1 WHEN 'Finance' THEN 2 WHEN 'Marketing' THEN 3 WHEN 'Sales' THEN 4 WHEN 'HR' THEN 5 ELSE 6 END, salary DESC;",
    expectedSql: "SELECT emp_name, department, salary FROM Employees ORDER BY CASE department WHEN 'IT' THEN 1 WHEN 'Finance' THEN 2 WHEN 'Marketing' THEN 3 WHEN 'Sales' THEN 4 WHEN 'HR' THEN 5 ELSE 6 END, salary DESC;",
    explanation: "Placing a CASE expression inside ORDER BY transforms strings into user-defined numeric weights, bypassing standard lexicographical sort order.",
    tags: ["case", "order-by", "custom-sort", "priority"],
    estimatedTimeMinutes: 4
  },
  {
    id: 360,
    title: "Audit performance bonuses with NULL-safe evaluation",
    topic: "CASE Expressions",
    subtopic: "CASE with Sorting and Filtering",
    difficulty: "Medium",
    problemStatement: "Generate a bonus distribution audit from Performance_Reviews. For each review, display review_id, emp_id, rating, bonus, and payout_status: If bonus IS NULL or 0, display 'No Bonus Awarded'; If bonus is under 15,000, display 'Standard Bonus'; Otherwise display 'High Performance Bonus'.",
    requirements: [
      "Use IS NULL alongside comparison operators to safely inspect optional bonus values.",
      "Alias the status as payout_status.",
      "Project review_id, emp_id, rating, bonus, and payout_status."
    ],
    tableName: "Performance_Reviews",
    hint: "SELECT review_id, emp_id, rating, bonus, CASE WHEN bonus IS NULL OR bonus = 0 THEN 'No Bonus Awarded' WHEN bonus < 15000 THEN 'Standard Bonus' ELSE 'High Performance Bonus' END AS payout_status FROM Performance_Reviews;",
    expectedSql: "SELECT review_id, emp_id, rating, bonus, CASE WHEN bonus IS NULL OR bonus = 0 THEN 'No Bonus Awarded' WHEN bonus < 15000 THEN 'Standard Bonus' ELSE 'High Performance Bonus' END AS payout_status FROM Performance_Reviews;",
    explanation: "Direct arithmetic comparisons on NULL produce UNKNOWN in three-valued logic. Explicitly checking 'bonus IS NULL' prevents unexpected fallback behavior.",
    tags: ["case", "null-handling", "audit", "bonuses"],
    estimatedTimeMinutes: 4
  },
  {
    id: 361,
    title: "Filter by a CASE-derived classification using an outer subquery",
    topic: "CASE Expressions",
    subtopic: "CASE with Sorting and Filtering",
    difficulty: "Medium",
    problemStatement: "Classify employee salaries into pay grades: 'Executive Pay' (salary >= 75000), 'Mid Pay' (salary between 40000 and 74999), and 'Junior Pay' (salary < 40000). Wrap this logic in an outer query or CTE to filter and return ONLY employees classified as 'Executive Pay'. Display emp_name, department, salary, and pay_grade.",
    requirements: [
      "Derive pay_grade using CASE in an inner derived table (subquery).",
      "Filter for pay_grade = 'Executive Pay' in the outer WHERE clause.",
      "Display emp_name, department, salary, and pay_grade."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, department, salary, pay_grade FROM (SELECT emp_name, department, salary, CASE WHEN salary >= 75000 THEN 'Executive Pay' WHEN salary >= 40000 THEN 'Mid Pay' ELSE 'Junior Pay' END AS pay_grade FROM Employees) classified WHERE pay_grade = 'Executive Pay';",
    expectedSql: "SELECT emp_name, department, salary, pay_grade FROM (SELECT emp_name, department, salary, CASE WHEN salary >= 75000 THEN 'Executive Pay' WHEN salary >= 40000 THEN 'Mid Pay' ELSE 'Junior Pay' END AS pay_grade FROM Employees) classified WHERE pay_grade = 'Executive Pay';",
    explanation: "Because SQL's WHERE clause processes before SELECT, aliases defined in SELECT cannot be referenced in the same query's WHERE clause. Wrapping in a subquery resolves this lexical scoping constraint.",
    tags: ["case", "subquery", "filtering", "scoping"],
    estimatedTimeMinutes: 5
  },
  {
    id: 362,
    title: "Order corporate initiatives by project lifecycle status urgency",
    topic: "CASE Expressions",
    subtopic: "CASE with Sorting and Filtering",
    difficulty: "Medium",
    problemStatement: "List all projects sorted by operational status urgency: 'Active' first, 'Planning' second, and 'Completed' last. Break ties by project budget in descending order. Display project_name, status, and budget.",
    requirements: [
      "Sort status using CASE: 'Active' -> 1, 'Planning' -> 2, 'Completed' -> 3.",
      "Secondary sort by budget DESC.",
      "Select project_name, status, and budget."
    ],
    tableName: "Projects",
    hint: "SELECT project_name, status, budget FROM Projects ORDER BY CASE status WHEN 'Active' THEN 1 WHEN 'Planning' THEN 2 WHEN 'Completed' THEN 3 ELSE 4 END, budget DESC;",
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
    title: "Count total and senior staff per city using COUNT(CASE WHEN ...)",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "For each city, calculate the total number of employees, and count how many have 5 or more years of experience using COUNT(CASE WHEN experience >= 5 THEN 1 END). Display city, total_employees, and senior_count.",
    requirements: [
      "Group results by city.",
      "Use COUNT(*) AS total_employees.",
      "Use COUNT(CASE WHEN experience >= 5 THEN 1 END) AS senior_count (omitting ELSE yields NULL, which COUNT ignores)."
    ],
    tableName: "Employees",
    hint: "SELECT city, COUNT(*) AS total_employees, COUNT(CASE WHEN experience >= 5 THEN 1 END) AS senior_count FROM Employees GROUP BY city;",
    expectedSql: "SELECT city, COUNT(*) AS total_employees, COUNT(CASE WHEN experience >= 5 THEN 1 END) AS senior_count FROM Employees GROUP BY city;",
    explanation: "COUNT(expression) only tallies non-null values. When a CASE statement has no ELSE branch, unmatched rows evaluate to NULL and are completely ignored by COUNT().",
    tags: ["case", "count", "conditional-aggregation", "null-behavior"],
    estimatedTimeMinutes: 4
  },
  {
    id: 364,
    title: "Calculate total payroll expenditure split across experience brackets",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "In a single summary query without a GROUP BY clause, compute the total salary expense for junior employees (experience < 4, aliased as junior_payroll) and senior employees (experience >= 4, aliased as senior_payroll).",
    requirements: [
      "Use SUM(CASE WHEN experience < 4 THEN salary ELSE 0 END) AS junior_payroll.",
      "Use SUM(CASE WHEN experience >= 4 THEN salary ELSE 0 END) AS senior_payroll.",
      "Produce a single aggregate row across all company employees."
    ],
    tableName: "Employees",
    hint: "SELECT SUM(CASE WHEN experience < 4 THEN salary ELSE 0 END) AS junior_payroll, SUM(CASE WHEN experience >= 4 THEN salary ELSE 0 END) AS senior_payroll FROM Employees;",
    expectedSql: "SELECT SUM(CASE WHEN experience < 4 THEN salary ELSE 0 END) AS junior_payroll, SUM(CASE WHEN experience >= 4 THEN salary ELSE 0 END) AS senior_payroll FROM Employees;",
    explanation: "Conditional summation enables partitioning monetary sums into multiple columnar metrics within a single database table scan.",
    tags: ["case", "sum", "conditional-aggregation", "payroll"],
    estimatedTimeMinutes: 4
  },
  {
    id: 365,
    title: "Compare low, mid, and high salary bands per department",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "For each department, display the count of employees in three salary tiers: tier_low (salary < 35000), tier_mid (salary between 35000 and 60000 inclusive), and tier_high (salary > 60000). Group by department.",
    requirements: [
      "Group by department.",
      "Use SUM(CASE WHEN ...) to count matches for each tier.",
      "Select department, tier_low, tier_mid, and tier_high."
    ],
    tableName: "Employees",
    hint: "SELECT department, SUM(CASE WHEN salary < 35000 THEN 1 ELSE 0 END) AS tier_low, SUM(CASE WHEN salary BETWEEN 35000 AND 60000 THEN 1 ELSE 0 END) AS tier_mid, SUM(CASE WHEN salary > 60000 THEN 1 ELSE 0 END) AS tier_high FROM Employees GROUP BY department;",
    expectedSql: "SELECT department, SUM(CASE WHEN salary < 35000 THEN 1 ELSE 0 END) AS tier_low, SUM(CASE WHEN salary BETWEEN 35000 AND 60000 THEN 1 ELSE 0 END) AS tier_mid, SUM(CASE WHEN salary > 60000 THEN 1 ELSE 0 END) AS tier_high FROM Employees GROUP BY department;",
    explanation: "This classic pivot aggregation pattern transforms row-level categories into distinct report columns, essential for cross-tab analysis.",
    tags: ["case", "pivot", "salary-bands", "groupby"],
    estimatedTimeMinutes: 5
  },
  {
    id: 366,
    title: "Compute conditional average salary for IT versus business departments",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "Compute the company-wide average salary of IT employees versus all non-IT department employees in a single row summary. Display avg_it_salary and avg_non_it_salary, both rounded to 2 decimal places.",
    requirements: [
      "Use ROUND(AVG(CASE WHEN department = 'IT' THEN salary END), 2) AS avg_it_salary.",
      "Use ROUND(AVG(CASE WHEN department <> 'IT' THEN salary END), 2) AS avg_non_it_salary.",
      "Do NOT use an ELSE 0 branch, as 0 would distort the arithmetic mean."
    ],
    tableName: "Employees",
    hint: "SELECT ROUND(AVG(CASE WHEN department = 'IT' THEN salary END), 2) AS avg_it_salary, ROUND(AVG(CASE WHEN department <> 'IT' THEN salary END), 2) AS avg_non_it_salary FROM Employees;",
    expectedSql: "SELECT ROUND(AVG(CASE WHEN department = 'IT' THEN salary END), 2) AS avg_it_salary, ROUND(AVG(CASE WHEN department <> 'IT' THEN salary END), 2) AS avg_non_it_salary FROM Employees;",
    explanation: "Omitting the ELSE clause in AVG(CASE WHEN ...) causes non-matching rows to evaluate to NULL. Because AVG() skips NULL values, the mean is accurately computed over only the target subset.",
    tags: ["case", "avg", "conditional-aggregation", "math"],
    estimatedTimeMinutes: 4
  },
  {
    id: 367,
    title: "Calculate department high earner percentage with zero-division guard",
    topic: "CASE Expressions",
    subtopic: "CASE with Aggregates",
    difficulty: "Medium",
    problemStatement: "For each department, calculate the percentage of employees earning 50,000 or more. Display department, total_staff, high_earner_count, and high_earner_percentage (rounded to 1 decimal place). Use a CASE expression to prevent division-by-zero errors if total_staff is 0.",
    requirements: [
      "Group by department.",
      "Compute total_staff, high_earner_count, and high_earner_percentage.",
      "Safely guard division with CASE WHEN COUNT(*) = 0 THEN 0.0 ELSE ... END."
    ],
    tableName: "Employees",
    hint: "SELECT department, COUNT(*) AS total_staff, SUM(CASE WHEN salary >= 50000 THEN 1 ELSE 0 END) AS high_earner_count, ROUND(CASE WHEN COUNT(*) = 0 THEN 0.0 ELSE (SUM(CASE WHEN salary >= 50000 THEN 1.0 ELSE 0.0 END) / COUNT(*)) * 100.0 END, 1) AS high_earner_percentage FROM Employees GROUP BY department;",
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
    title: "Categorize employee work arrangement using joined department headquarters",
    topic: "CASE Expressions",
    subtopic: "CASE with JOINs and Subqueries",
    difficulty: "Medium",
    problemStatement: "Join Employees with Departments on e.department = d.dept_name. Categorize each employee's work model: If the employee's office city matches the department's primary location, label as 'Colocated HQ'; otherwise label as 'Regional Branch'. Display emp_name, department, employee city, department location, and work_model.",
    requirements: [
      "Inner join Employees e with Departments d on e.department = d.dept_name.",
      "Compare e.city with d.location inside CASE.",
      "Select e.emp_name, e.department, e.city, d.location, and work_model."
    ],
    tableName: "Employees, Departments",
    hint: "SELECT e.emp_name, e.department, e.city, d.location, CASE WHEN e.city = d.location THEN 'Colocated HQ' ELSE 'Regional Branch' END AS work_model FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    expectedSql: "SELECT e.emp_name, e.department, e.city, d.location, CASE WHEN e.city = d.location THEN 'Colocated HQ' ELSE 'Regional Branch' END AS work_model FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    explanation: "Joining entities before applying conditional logic allows multi-table attribute cross-validation to derive organizational insights.",
    tags: ["case", "inner-join", "workplace", "locations"],
    estimatedTimeMinutes: 4
  },
  {
    id: 369,
    title: "Classify project resource intensity via aggregated staffing allocations",
    topic: "CASE Expressions",
    subtopic: "CASE with JOINs and Subqueries",
    difficulty: "Hard",
    problemStatement: "Join Projects with Employee_Projects to calculate total allocated hours and assigned headcount for every project. Classify resource intensity: If headcount is 0 OR total hours is 0 -> 'Unstaffed'; If total hours < 50 -> 'Low Intensity'; If total hours <= 80 -> 'Medium Intensity'; Otherwise -> 'High Intensity'. Display project_name, total_hours, staff_count, and intensity_rating.",
    requirements: [
      "Left join Projects p with Employee_Projects ep on project_id.",
      "Group by p.project_id and p.project_name.",
      "Use COALESCE(SUM(ep.hours_allocated), 0) AS total_hours.",
      "Evaluate total hours and headcount inside CASE."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, COUNT(ep.emp_id) AS staff_count, CASE WHEN COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unstaffed' WHEN SUM(ep.hours_allocated) < 50 THEN 'Low Intensity' WHEN SUM(ep.hours_allocated) <= 80 THEN 'Medium Intensity' ELSE 'High Intensity' END AS intensity_rating FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    expectedSql: "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, COUNT(ep.emp_id) AS staff_count, CASE WHEN COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unstaffed' WHEN SUM(ep.hours_allocated) < 50 THEN 'Low Intensity' WHEN SUM(ep.hours_allocated) <= 80 THEN 'Medium Intensity' ELSE 'High Intensity' END AS intensity_rating FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    explanation: "Combining outer joins, aggregate functions, and multi-tier CASE branching handles both staffed initiatives and empty edge cases in a single query.",
    tags: ["case", "left-join", "aggregation", "workload", "hard"],
    estimatedTimeMinutes: 6
  },
  {
    id: 370,
    title: "Classify employee salary standing against correlated department averages",
    topic: "CASE Expressions",
    subtopic: "CASE with JOINs and Subqueries",
    difficulty: "Hard",
    problemStatement: "Classify each employee's salary standing relative to their own department's average salary: If salary is strictly greater than 115% of the department average, label as 'Above Dept Average'; If between 85% and 115% inclusive, label as 'At Dept Average'; If below 85%, label as 'Below Dept Average'. Display emp_name, department, salary, and salary_standing.",
    requirements: [
      "Use a correlated subquery calculating AVG(e2.salary) for e.department inside the WHEN branches.",
      "Project emp_name, department, salary, and salary_standing."
    ],
    tableName: "Employees",
    hint: "SELECT e.emp_name, e.department, e.salary, CASE WHEN e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 1.15 THEN 'Above Dept Average' WHEN e.salary >= (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 0.85 THEN 'At Dept Average' ELSE 'Below Dept Average' END AS salary_standing FROM Employees e;",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, CASE WHEN e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 1.15 THEN 'Above Dept Average' WHEN e.salary >= (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 0.85 THEN 'At Dept Average' ELSE 'Below Dept Average' END AS salary_standing FROM Employees e;",
    explanation: "Correlated subqueries dynamically evaluate the benchmark value for each candidate row, enabling relative percentile-style categorization.",
    tags: ["case", "correlated-subquery", "benchmarks", "hard"],
    estimatedTimeMinutes: 6
  },
  {
    id: 371,
    title: "Generate project capital scale report comparing project versus department budget",
    topic: "CASE Expressions",
    subtopic: "CASE with JOINs and Subqueries",
    difficulty: "Hard",
    problemStatement: "Join Projects with Departments on dept_id. Classify project_scale based on what share of the owning department's budget the project consumes: If project budget exceeds 30% of department budget, label as 'Major Capital Project'; If between 15% and 30% inclusive, label as 'Significant Project'; Otherwise 'Routine Department Project'. Display project_name, dept_name, project_budget, dept_budget, and project_scale.",
    requirements: [
      "Inner join Projects p with Departments d on p.dept_id = d.dept_id.",
      "Compare p.budget against percentages of d.budget inside CASE.",
      "Select p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget, and project_scale."
    ],
    tableName: "Projects, Departments",
    hint: "SELECT p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget, CASE WHEN p.budget > d.budget * 0.30 THEN 'Major Capital Project' WHEN p.budget >= d.budget * 0.15 THEN 'Significant Project' ELSE 'Routine Department Project' END AS project_scale FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id;",
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
    title: "Assess employee retention risk using nested CASE expressions",
    topic: "CASE Expressions",
    subtopic: "Interview-Level CASE Challenges",
    difficulty: "Hard",
    problemStatement: "Evaluate retention risk using a nested CASE expression. For employees with 6 or more years of experience: if salary is under 60,000 label as 'High Flight Risk (Underpaid Veteran)', else 'Key Retained Leader'. For employees with under 6 years of experience: if salary is under 30,000 label as 'Entry Flight Risk', else 'Standard Stable'. Display emp_name, experience, salary, and retention_assessment.",
    requirements: [
      "Construct a nested CASE expression (CASE inside a THEN or ELSE branch).",
      "Alias the assessment as retention_assessment.",
      "Project emp_name, experience, salary, and retention_assessment."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, experience, salary, CASE WHEN experience >= 6 THEN CASE WHEN salary < 60000 THEN 'High Flight Risk (Underpaid Veteran)' ELSE 'Key Retained Leader' END ELSE CASE WHEN salary < 30000 THEN 'Entry Flight Risk' ELSE 'Standard Stable' END END AS retention_assessment FROM Employees;",
    expectedSql: "SELECT emp_name, experience, salary, CASE WHEN experience >= 6 THEN CASE WHEN salary < 60000 THEN 'High Flight Risk (Underpaid Veteran)' ELSE 'Key Retained Leader' END ELSE CASE WHEN salary < 30000 THEN 'Entry Flight Risk' ELSE 'Standard Stable' END END AS retention_assessment FROM Employees;",
    explanation: "Nesting CASE expressions models hierarchical decision trees where secondary criteria depend completely on the primary outcome branch.",
    tags: ["case", "nested-case", "decision-tree", "advanced"],
    estimatedTimeMinutes: 6
  },
  {
    id: 373,
    title: "Implement priority-ordered tier designations with short-circuiting logic",
    topic: "CASE Expressions",
    subtopic: "Interview-Level CASE Challenges",
    difficulty: "Hard",
    problemStatement: "Assign professional career designations where overlapping qualifications exist. The most prestigious tier must take precedence: 1) experience >= 8 AND salary >= 75000 -> 'Leadership Tier'; 2) experience >= 6 OR salary >= 60000 -> 'Senior Contributor'; 3) experience >= 3 -> 'Core Professional'; 4) Else -> 'Associate'. Display emp_name, experience, salary, and tier_designation.",
    requirements: [
      "Order WHEN branches strictly from most restrictive to most general.",
      "Alias result as tier_designation.",
      "Project emp_name, experience, salary, and tier_designation."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, experience, salary, CASE WHEN experience >= 8 AND salary >= 75000 THEN 'Leadership Tier' WHEN experience >= 6 OR salary >= 60000 THEN 'Senior Contributor' WHEN experience >= 3 THEN 'Core Professional' ELSE 'Associate' END AS tier_designation FROM Employees;",
    expectedSql: "SELECT emp_name, experience, salary, CASE WHEN experience >= 8 AND salary >= 75000 THEN 'Leadership Tier' WHEN experience >= 6 OR salary >= 60000 THEN 'Senior Contributor' WHEN experience >= 3 THEN 'Core Professional' ELSE 'Associate' END AS tier_designation FROM Employees;",
    explanation: "Because SQL short-circuits on the first condition evaluating to true, placing strict conditions first guarantees candidates receive their highest qualifying designation.",
    tags: ["case", "precedence", "short-circuit", "interview-favorite"],
    estimatedTimeMinutes: 5
  },
  {
    id: 374,
    title: "Build comprehensive appraisal audit handling outer joins and NULL bonuses",
    topic: "CASE Expressions",
    subtopic: "Interview-Level CASE Challenges",
    difficulty: "Hard",
    problemStatement: "Left join Employees with Performance_Reviews to evaluate appraisal status across all employees: If the employee has never been reviewed (pr.review_id IS NULL) -> 'Pending Initial Review'; If rating >= 4 AND bonus IS NOT NULL -> 'Top Performer (Bonus Awarded)'; If rating >= 4 AND bonus IS NULL -> 'High Rating (No Cash Bonus)'; Else -> 'Standard Rating (No Cash Bonus)'. Display emp_id, emp_name, review_year, rating, and appraisal_status.",
    requirements: [
      "Perform a LEFT JOIN from Employees e to Performance_Reviews pr on emp_id.",
      "Use CASE to evaluate missing reviews and null bonus fields.",
      "Select e.emp_id, e.emp_name, pr.review_year, pr.rating, and appraisal_status."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "SELECT e.emp_id, e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.review_id IS NULL THEN 'Pending Initial Review' WHEN pr.rating >= 4 AND pr.bonus IS NOT NULL THEN 'Top Performer (Bonus Awarded)' WHEN pr.rating >= 4 AND pr.bonus IS NULL THEN 'High Rating (No Cash Bonus)' ELSE 'Standard Rating (No Cash Bonus)' END AS appraisal_status FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    expectedSql: "SELECT e.emp_id, e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.review_id IS NULL THEN 'Pending Initial Review' WHEN pr.rating >= 4 AND pr.bonus IS NOT NULL THEN 'Top Performer (Bonus Awarded)' WHEN pr.rating >= 4 AND pr.bonus IS NULL THEN 'High Rating (No Cash Bonus)' ELSE 'Standard Rating (No Cash Bonus)' END AS appraisal_status FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Correctly distinguishing between missing outer join child records (unreviewed employees) and present records with NULL values (reviewed with no bonus) tests senior SQL data engineering competence.",
    tags: ["case", "left-join", "null-safe", "comprehensive-audit", "hard"],
    estimatedTimeMinutes: 6
  },
  {
    id: 375,
    title: "Generate departmental restructuring matrix based on headcount and budget health",
    topic: "CASE Expressions",
    subtopic: "Interview-Level CASE Challenges",
    difficulty: "Hard",
    problemStatement: "Evaluate enterprise department health by left joining Departments with Employees. Evaluate total staff and annualized payroll (SUM(salary * 12)): If headcount is 0 -> 'Vacant Department - Urgent Staffing'; If headcount >= 5 AND annualized payroll > budget -> 'Overstaffed & Overbudget'; If annualized payroll > budget -> 'Overbudget Warning'; If headcount <= 2 -> 'Undermanned Unit'; Else -> 'Balanced Operations'. Display dept_name, staff_count, annual_payroll, budget, and restructure_priority.",
    requirements: [
      "Left join Departments d with Employees e on d.dept_name = e.department.",
      "Group by d.dept_id, d.dept_name, and d.budget.",
      "Compute staff_count, annual_payroll (using COALESCE), and restructure_priority.",
      "Select d.dept_name, COUNT(e.emp_id) AS staff_count, COALESCE(SUM(e.salary * 12), 0) AS annual_payroll, d.budget, and restructure_priority."
    ],
    tableName: "Departments, Employees",
    hint: "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count, COALESCE(SUM(e.salary * 12), 0) AS annual_payroll, d.budget, CASE WHEN COUNT(e.emp_id) = 0 THEN 'Vacant Department - Urgent Staffing' WHEN COUNT(e.emp_id) >= 5 AND SUM(e.salary * 12) > d.budget THEN 'Overstaffed & Overbudget' WHEN SUM(e.salary * 12) > d.budget THEN 'Overbudget Warning' WHEN COUNT(e.emp_id) <= 2 THEN 'Undermanned Unit' ELSE 'Balanced Operations' END AS restructure_priority FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_id, d.dept_name, d.budget;",
    expectedSql: "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count, COALESCE(SUM(e.salary * 12), 0) AS annual_payroll, d.budget, CASE WHEN COUNT(e.emp_id) = 0 THEN 'Vacant Department - Urgent Staffing' WHEN COUNT(e.emp_id) >= 5 AND SUM(e.salary * 12) > d.budget THEN 'Overstaffed & Overbudget' WHEN SUM(e.salary * 12) > d.budget THEN 'Overbudget Warning' WHEN COUNT(e.emp_id) <= 2 THEN 'Undermanned Unit' ELSE 'Balanced Operations' END AS restructure_priority FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_id, d.dept_name, d.budget;",
    explanation: "Enterprise decision engines use multi-tiered aggregate evaluations with priority fall-throughs to power operational analytics and organizational health dashboards.",
    tags: ["case", "enterprise", "group-by", "decision-matrix", "hard"],
    estimatedTimeMinutes: 7
  }
];
