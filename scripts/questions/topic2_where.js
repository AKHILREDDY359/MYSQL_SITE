export const TOPIC2_QUESTIONS = [
  // Subtopic: Nullability & Boolean Truth Values (IDs 76 to 80)
  {
    id: 76,
    title: "Auditing Unassigned Incentive Reviews",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Beginner",
    problemStatement: "Internal audit is reviewing appraisal records where no performance incentive was granted. Retrieve all columns for performance evaluations where the bonus is unassigned.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Filter for evaluations where the bonus is unassigned (NULL).",
      "Include all columns in the result set."
    ],
    tableName: "Performance_Reviews",
    hint: "Use the null check operator on the bonus column.",
    expectedSql: "SELECT * FROM Performance_Reviews WHERE bonus IS NULL;",
    explanation: "Standard equality (=) with NULL yields UNKNOWN in three-valued SQL logic; IS NULL must be used instead.",
    tags: ["where", "null", "filtering"],
    estimatedTimeMinutes: 2
  },
  {
    id: 77,
    title: "Active Modern Corporate Initiatives",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Easy",
    problemStatement: "The strategic planning office needs a list of modern, active projects. Retrieve project ID, project name, budget, and start date for all initiatives currently marked as 'Active' that commenced on or after January 1, 2024.",
    requirements: [
      "Select `project_id`, `project_name`, `budget`, and `start_date`.",
      "Filter for projects with an 'Active' status.",
      "Ensure start date is on or after January 1, 2024 ('2024-01-01')."
    ],
    tableName: "Projects",
    hint: "Combine equality on status with a date comparison condition using AND.",
    expectedSql: "SELECT project_id, project_name, budget, start_date FROM Projects WHERE status = 'Active' AND start_date >= '2024-01-01';",
    explanation: "Combines string equality and ISO date comparison using the logical AND operator.",
    tags: ["where", "and", "dates"],
    estimatedTimeMinutes: 3
  },
  {
    id: 78,
    title: "Mid-Tier Operational Budget Allocations",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Easy",
    problemStatement: "Corporate treasury is reviewing medium-scale operational divisions. Retrieve the department name, office location, and budget for all departments whose annual funding falls between 500,000 and 1,200,000, inclusive of both thresholds.",
    requirements: [
      "Select `dept_name`, `location`, and `budget` from Departments.",
      "Filter for budgets between 500,000 and 1,200,000 inclusive."
    ],
    tableName: "Departments",
    hint: "Use an inclusive range operator to test the budget value.",
    expectedSql: "SELECT dept_name, location, budget FROM Departments WHERE budget BETWEEN 500000 AND 1200000;",
    explanation: "BETWEEN is inclusive of both lower and upper boundary values.",
    tags: ["where", "between", "numeric"],
    estimatedTimeMinutes: 2
  },
  {
    id: 79,
    title: "Senior Veteran Staff in Core Divisions",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Medium",
    problemStatement: "Human Resources is compiling a recognition list of long-tenured professionals in technology and finance. Find employee ID, name, department, and joining year for employees in IT or Finance who joined the company prior to 2020.",
    requirements: [
      "Display `emp_id`, `emp_name`, `department`, and `joining_year`.",
      "Include staff from either the 'IT' or 'Finance' departments.",
      "Restrict to employees who joined before calendar year 2020."
    ],
    tableName: "Employees",
    hint: "Check department membership in the target list combined with a less-than condition on joining_year.",
    expectedSql: "SELECT emp_id, emp_name, department, joining_year FROM Employees WHERE department IN ('IT', 'Finance') AND joining_year < 2020;",
    explanation: "Parenthesizing or grouping set membership with an inequality isolates historical staff from designated divisions.",
    tags: ["where", "in", "and", "logical-operators"],
    estimatedTimeMinutes: 3
  },
  {
    id: 80,
    title: "Non-Execution Stage Corporate Initiatives",
    topic: "WHERE & Operators",
    subtopic: "Nullability & Boolean Truth Values",
    difficulty: "Easy",
    problemStatement: "Project portfolio managers need visibility into initiatives that are not currently in active development. Display the ID, name, and status of projects that are either completed or in planning.",
    requirements: [
      "Query the Projects table.",
      "Display `project_id`, `project_name`, and `status`.",
      "Filter for projects in 'Completed' or 'Planning' status."
    ],
    tableName: "Projects",
    hint: "Check whether status matches any element in the set of target lifecycle states.",
    expectedSql: "SELECT project_id, project_name, status FROM Projects WHERE status IN ('Completed', 'Planning');",
    explanation: "IN acts as shorthand for multiple OR expressions against a common attribute.",
    tags: ["where", "in", "status"],
    estimatedTimeMinutes: 2
  },

  // Subtopic: String Matching & Wildcards (IDs 81 to 85)
  {
    id: 81,
    title: "Alphabetical Staff Directory Filter (P or S)",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Easy",
    problemStatement: "Administrative personnel are generating index cards for employee directories. Display the employee ID, full name, and department for staff members whose first name begins with either the letter 'P' or 'S'.",
    requirements: [
      "Select `emp_id`, `emp_name`, and `department` from Employees.",
      "Filter for names starting with capital letter 'P' or capital letter 'S'."
    ],
    tableName: "Employees",
    hint: "Combine two pattern matching conditions with wildcard suffixes using OR.",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_name LIKE 'P%' OR emp_name LIKE 'S%';",
    explanation: "The percent wildcard (%) matches zero or more trailing characters.",
    tags: ["where", "like", "wildcards"],
    estimatedTimeMinutes: 3
  },
  {
    id: 82,
    title: "Process Automation Capital Investments",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Easy",
    problemStatement: "The Chief Technology Officer is assessing investments in automated workflows. Retrieve complete project records for any initiative whose title references automation.",
    requirements: [
      "Select all columns from the Projects table.",
      "Filter for project names containing the term 'Automation' anywhere within the title."
    ],
    tableName: "Projects",
    hint: "Use substring pattern matching with wildcards before and after the keyword 'Automation'.",
    expectedSql: "SELECT * FROM Projects WHERE project_name LIKE '%Automation%';",
    explanation: "Surrounding the pattern with '%' performs a substring containment search.",
    tags: ["where", "like", "substring"],
    estimatedTimeMinutes: 2
  },
  {
    id: 83,
    title: "High-Distinction Performance Feedback Search",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Medium",
    problemStatement: "Executive leadership is auditing qualitative appraisal praise. Extract the review ID, employee ID, rating, and written feedback for performance reviews where comments highlight 'Exceptional' or 'Outstanding' contributions.",
    requirements: [
      "Select `review_id`, `emp_id`, `rating`, and `feedback` from Performance_Reviews.",
      "Include reviews where feedback contains 'Exceptional' or 'Outstanding'."
    ],
    tableName: "Performance_Reviews",
    hint: "Combine two partial text search patterns with an OR operator.",
    expectedSql: "SELECT review_id, emp_id, rating, feedback FROM Performance_Reviews WHERE feedback LIKE '%Exceptional%' OR feedback LIKE '%Outstanding%';",
    explanation: "Searches free-text appraisal commentary for positive recognition keywords.",
    tags: ["where", "like", "text-search"],
    estimatedTimeMinutes: 3
  },
  {
    id: 84,
    title: "Department Naming Compliance Audit",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Medium",
    problemStatement: "Brand communications is auditing department nomenclature. Find the department ID, department name, and location for all departments whose official name does not contain the letter 'e' (case-insensitive).",
    requirements: [
      "Select `dept_id`, `dept_name`, and `location` from Departments.",
      "Exclude departments whose name includes the letter 'e'."
    ],
    tableName: "Departments",
    hint: "Use a negated pattern match to filter out names containing the letter 'e'.",
    expectedSql: "SELECT dept_id, dept_name, location FROM Departments WHERE dept_name NOT LIKE '%e%';",
    explanation: "NOT LIKE inverts wildcard pattern matching to exclude rows containing specific characters.",
    tags: ["where", "not-like", "strings"],
    estimatedTimeMinutes: 3
  },
  {
    id: 85,
    title: "Five-Letter Name Pattern Verification",
    topic: "WHERE & Operators",
    subtopic: "String Matching & Wildcards",
    difficulty: "Hard",
    problemStatement: "Data management is verifying badge naming formats for 5-letter name structures. Find all employees whose full name is exactly 5 characters long and terminates with the letter 'a'.",
    requirements: [
      "Display `emp_id`, `emp_name`, and `department` from Employees.",
      "Filter for names of exactly five characters terminating with 'a'."
    ],
    tableName: "Employees",
    hint: "Use four single-character wildcards followed by 'a' in your pattern match.",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_name LIKE '____a';",
    explanation: "Each underscore (_) wildcard matches exactly one single character in standard SQL pattern matching.",
    tags: ["where", "like", "underscore-wildcard"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Complex Numeric & Range Conditions (IDs 86 to 90)
  {
    id: 86,
    title: "High Annual Base Compensation Staff",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Easy",
    problemStatement: "Executive compensation committees monitor high-earning staff. Identify employees whose annualized salary (monthly salary multiplied by 12) strictly exceeds 600,000, displaying their ID, name, monthly salary, and annualized salary.",
    requirements: [
      "Display `emp_id`, `emp_name`, `salary`, and computed annual salary aliased as `annual_salary`.",
      "Filter for records where annual earnings (monthly salary multiplied by 12) exceed 600,000."
    ],
    tableName: "Employees",
    hint: "Compute salary * 12 in both the projection and the filtering condition.",
    expectedSql: "SELECT emp_id, emp_name, salary, (salary * 12) AS annual_salary FROM Employees WHERE (salary * 12) > 600000;",
    explanation: "Mathematical expressions can be calculated and compared directly within the WHERE predicate.",
    tags: ["where", "arithmetic", "numeric"],
    estimatedTimeMinutes: 3
  },
  {
    id: 87,
    title: "Weekly Project Workload Outliers",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Medium",
    problemStatement: "Resource managers are investigating workload distribution anomalies. Identify all project assignments where an employee is allocated either under 20 hours or over 35 hours per week.",
    requirements: [
      "Display `emp_id`, `project_id`, `assigned_role`, and `hours_allocated` from Employee_Projects.",
      "Filter for allocations strictly below 20 hours or strictly above 35 hours."
    ],
    tableName: "Employee_Projects",
    hint: "Combine two numeric comparison inequalities using OR.",
    expectedSql: "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects WHERE hours_allocated < 20 OR hours_allocated > 35;",
    explanation: "Disjunctive bounds locate entries falling outside the standard bell curve of staffing capacity.",
    tags: ["where", "range", "disjunction"],
    estimatedTimeMinutes: 3
  },
  {
    id: 88,
    title: "Southern Metropolitan Mid-Salary Staff",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Medium",
    problemStatement: "Regional HR directors are reviewing compensation in southern tech hubs. Find all employees based in Chennai or Bengaluru whose monthly salary falls between 35,000 and 70,000, inclusive.",
    requirements: [
      "Select `emp_id`, `emp_name`, `city`, and `salary` from Employees.",
      "Filter for office locations in 'Chennai' or 'Bengaluru'.",
      "Filter for salaries between 35,000 and 70,000 inclusive."
    ],
    tableName: "Employees",
    hint: "Combine a location set check with an inclusive numeric salary range using AND.",
    expectedSql: "SELECT emp_id, emp_name, city, salary FROM Employees WHERE city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000;",
    explanation: "Combining discrete location filtering with a bounded salary interval isolates targeted regional talent bands.",
    tags: ["where", "between", "in", "numeric"],
    estimatedTimeMinutes: 3
  },
  {
    id: 89,
    title: "Merit-Driven High-Bonus Reviews",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Easy",
    problemStatement: "The compensation committee is verifying high incentive payouts. Retrieve the review ID, employee ID, rating, and bonus for reviews that earned a high rating (4 or 5) and received a bonus strictly exceeding 15,000.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Display `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Filter for rating of at least 4 and bonus strictly greater than 15,000."
    ],
    tableName: "Performance_Reviews",
    hint: "Combine a greater-than-or-equal condition on rating with a greater-than condition on bonus.",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE rating >= 4 AND bonus > 15000;",
    explanation: "Joint thresholds ensure both qualitative rating score and quantitative financial payout are high.",
    tags: ["where", "numeric", "and"],
    estimatedTimeMinutes: 2
  },
  {
    id: 90,
    title: "Rapid-Career Young Professionals",
    topic: "WHERE & Operators",
    subtopic: "Complex Numeric & Range Conditions",
    difficulty: "Medium",
    problemStatement: "Leadership development is tracking fast-tracked young talent. Identify employees who are under 30 years of age and already possess 5 or more years of professional experience.",
    requirements: [
      "Display `emp_id`, `emp_name`, `age`, and `experience` from Employees.",
      "Filter for age strictly less than 30 and experience of at least 5 years."
    ],
    tableName: "Employees",
    hint: "Join an inequality condition on age with a greater-than-or-equal test on experience.",
    expectedSql: "SELECT emp_id, emp_name, age, experience FROM Employees WHERE age < 30 AND experience >= 5;",
    explanation: "Identifies early-career high achievers who have accumulated extensive domain experience.",
    tags: ["where", "comparison", "and"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Multi-Condition Logic & Precedence (IDs 91 to 95)
  {
    id: 91,
    title: "Tiered Divisional Salary Thresholds",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Hard",
    problemStatement: "Compensation review applies different senior benchmarks depending on the division. Find employees who either work in IT and earn over 50,000, or work in HR and earn over 35,000.",
    requirements: [
      "Select `emp_id`, `emp_name`, `department`, and `salary` from Employees.",
      "Match either condition: IT department with salary exceeding 50,000, or HR department with salary exceeding 35,000.",
      "Use parentheses to group compound conditions logically."
    ],
    tableName: "Employees",
    hint: "Wrap each department-and-salary pair in parentheses and connect them with OR.",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE (department = 'IT' AND salary > 50000) OR (department = 'HR' AND salary > 35000);",
    explanation: "Logical AND has higher precedence than OR. Parentheses eliminate ambiguity and guarantee intended business logic.",
    tags: ["where", "precedence", "parentheses", "and-or"],
    estimatedTimeMinutes: 4
  },
  {
    id: 92,
    title: "Strategic Budget Approvals for Core Units",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Medium",
    problemStatement: "Finance leadership is auditing high-value projects in key departments. Identify initiatives where either Department 1 has allocated at least 250,000 or Department 3 has allocated at least 300,000.",
    requirements: [
      "Display `project_id`, `project_name`, `dept_id`, and `budget` from Projects.",
      "Filter for Department 1 projects with budget of at least 250,000 OR Department 3 projects with budget of at least 300,000."
    ],
    tableName: "Projects",
    hint: "Group each department's budget criteria in parentheses and join them with an OR operator.",
    expectedSql: "SELECT project_id, project_name, dept_id, budget FROM Projects WHERE (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000);",
    explanation: "Evaluates multi-department capital allocation criteria with distinct departmental expenditure thresholds.",
    tags: ["where", "precedence", "multi-condition"],
    estimatedTimeMinutes: 3
  },
  {
    id: 93,
    title: "Experienced Well-Compensated Branch Personnel",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Medium",
    problemStatement: "Human Resources is reviewing branch office compensation outside corporate headquarters. Find employees located outside Hyderabad who earn strictly more than 40,000 and possess at least 3 years of experience.",
    requirements: [
      "Select `emp_id`, `emp_name`, `city`, `salary`, and `experience` from Employees.",
      "Exclude staff stationed in 'Hyderabad'.",
      "Filter for salary strictly above 40,000 and experience of at least 3 years."
    ],
    tableName: "Employees",
    hint: "Combine a location inequality with numeric salary and experience conditions using AND.",
    expectedSql: "SELECT emp_id, emp_name, city, salary, experience FROM Employees WHERE city != 'Hyderabad' AND salary > 40000 AND experience >= 3;",
    explanation: "Applies negative equality alongside multiple positive numeric constraints across different attributes.",
    tags: ["where", "inequality", "and"],
    estimatedTimeMinutes: 3
  },
  {
    id: 94,
    title: "Elite Appraisal Benchmarks (2024 Cycle)",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Hard",
    problemStatement: "The executive committee is identifying top performers from the 2024 evaluation cycle. Extract review records from 2024 that earned a perfect rating of 5, OR earned a rating of 4 with a bonus of at least 18,000.",
    requirements: [
      "Select `review_id`, `emp_id`, `review_year`, `rating`, and `bonus` from Performance_Reviews.",
      "Filter strictly for the 2024 review cycle.",
      "Include reviews with a rating of 5 OR a rating of 4 accompanied by a bonus of 18,000 or higher."
    ],
    tableName: "Performance_Reviews",
    hint: "Enforce review_year = 2024 and wrap the alternative top-performance conditions in parentheses.",
    expectedSql: "SELECT review_id, emp_id, review_year, rating, bonus FROM Performance_Reviews WHERE review_year = 2024 AND (rating = 5 OR (rating = 4 AND bonus >= 18000));",
    explanation: "Illustrates nested Boolean evaluation where the top score qualifies automatically, but second-tier scores require compensation verification.",
    tags: ["where", "precedence", "nested-logic"],
    estimatedTimeMinutes: 4
  },
  {
    id: 95,
    title: "Recent Non-Sales Onboarding Cohort",
    topic: "WHERE & Operators",
    subtopic: "Multi-Condition Logic & Precedence",
    difficulty: "Medium",
    problemStatement: "Talent acquisition is reviewing hiring retention for recent joiners across core business areas. Find all employees who joined the company between 2020 and 2023, inclusive, excluding the Sales division.",
    requirements: [
      "Select `emp_id`, `emp_name`, `department`, and `joining_year` from Employees.",
      "Filter for joining years between 2020 and 2023 inclusive.",
      "Exclude employees assigned to the 'Sales' department."
    ],
    tableName: "Employees",
    hint: "Combine a range condition on joining_year with an inequality condition on department.",
    expectedSql: "SELECT emp_id, emp_name, department, joining_year FROM Employees WHERE joining_year BETWEEN 2020 AND 2023 AND department != 'Sales';",
    explanation: "Combines inclusive range filtering on a temporal column with categorical exclusion.",
    tags: ["where", "between", "not-equal"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Set Membership & Exclusion (IDs 96 to 98)
  {
    id: 96,
    title: "Regional Staffing Outside Major Tech Hubs",
    topic: "WHERE & Operators",
    subtopic: "Set Membership & Exclusion",
    difficulty: "Easy",
    problemStatement: "Corporate facilities is evaluating staffing levels in satellite branch offices. Retrieve employee ID, name, city, and department for staff members stationed anywhere other than the primary tech hubs of Hyderabad and Bengaluru.",
    requirements: [
      "Select `emp_id`, `emp_name`, `city`, and `department` from Employees.",
      "Exclude employees located in 'Hyderabad' or 'Bengaluru'."
    ],
    tableName: "Employees",
    hint: "Use a negated set membership condition on the city column.",
    expectedSql: "SELECT emp_id, emp_name, city, department FROM Employees WHERE city NOT IN ('Hyderabad', 'Bengaluru');",
    explanation: "NOT IN excludes entire sets of categorical literals in a single clean expression.",
    tags: ["where", "not-in", "filtering"],
    estimatedTimeMinutes: 2
  },
  {
    id: 97,
    title: "Active Portfolio Pipeline Initiatives",
    topic: "WHERE & Operators",
    subtopic: "Set Membership & Exclusion",
    difficulty: "Easy",
    problemStatement: "Project operations is reviewing projects that are currently active in the workflow pipeline. Retrieve project ID, name, and status for projects that are neither completed nor on hold.",
    requirements: [
      "Select `project_id`, `project_name`, and `status` from Projects.",
      "Exclude projects with a status of 'Completed' or 'On Hold'."
    ],
    tableName: "Projects",
    hint: "Filter out the two terminal lifecycle statuses using a negated set membership condition.",
    expectedSql: "SELECT project_id, project_name, status FROM Projects WHERE status NOT IN ('Completed', 'On Hold');",
    explanation: "Excludes closed or paused project states to display active workstreams.",
    tags: ["where", "not-in", "status"],
    estimatedTimeMinutes: 2
  },
  {
    id: 98,
    title: "Bimodal Performance Review Outliers",
    topic: "WHERE & Operators",
    subtopic: "Set Membership & Exclusion",
    difficulty: "Medium",
    problemStatement: "Organizational psychologists are examining polarization in performance feedback. Retrieve review records where the evaluation rating is strictly either low-tier (1 or 2) or top-tier (5).",
    requirements: [
      "Display `review_id`, `emp_id`, `rating`, and `feedback` from Performance_Reviews.",
      "Filter for evaluations with a rating of 1, 2, or 5."
    ],
    tableName: "Performance_Reviews",
    hint: "Check whether the rating column matches any value in the list of target ratings.",
    expectedSql: "SELECT review_id, emp_id, rating, feedback FROM Performance_Reviews WHERE rating IN (1, 2, 5);",
    explanation: "IN matches discrete non-contiguous numeric values to isolate boundary performance outcomes.",
    tags: ["where", "in", "numeric-sets"],
    estimatedTimeMinutes: 3
  }
];
