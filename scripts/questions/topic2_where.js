export const TOPIC2_QUESTIONS = [
  {
    "id": 76,
    "title": "Reviews with Missing Bonus",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Beginner",
    "problemStatement": "Find all performance reviews where the bonus value is missing (NULL). Display all columns.",
    "requirements": [
      "Select all columns from Performance_Reviews.",
      "Include only rows where `bonus` is NULL."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use the IS NULL operator.",
    "expectedSql": "SELECT * FROM Performance_Reviews WHERE bonus IS NULL;",
    "explanation": "Standard equality (=) with NULL yields UNKNOWN in three-valued SQL logic; IS NULL must be used instead.",
    "tags": [
      "where",
      "null",
      "filtering"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 77,
    "title": "Active Projects Started in 2024 or Later",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Easy",
    "problemStatement": "Find all active projects that started on or after January 1, 2024.",
    "requirements": [
      "Select `project_id`, `project_name`, `budget`, and `start_date`.",
      "Filter for `status = 'Active'`.",
      "Filter for `start_date >= '2024-01-01'`."
    ],
    "tableName": "Projects",
    "hint": "Combine the status and start_date conditions with AND.",
    "expectedSql": "SELECT project_id, project_name, budget, start_date FROM Projects WHERE status = 'Active' AND start_date >= '2024-01-01';",
    "explanation": "Combines string equality and ISO date comparison using the logical AND operator.",
    "tags": [
      "where",
      "and",
      "dates"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 78,
    "title": "Departments with Budgets Between 500k and 1.2M",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Easy",
    "problemStatement": "Find all departments with a budget between 500,000 and 1,200,000 (inclusive).",
    "requirements": [
      "Select `dept_name`, `location`, and `budget`.",
      "Budget must be between 500,000 and 1,200,000."
    ],
    "tableName": "Departments",
    "hint": "Use the BETWEEN operator for an inclusive range.",
    "expectedSql": "SELECT dept_name, location, budget FROM Departments WHERE budget BETWEEN 500000 AND 1200000;",
    "explanation": "BETWEEN is inclusive of both lower and upper boundary values.",
    "tags": [
      "where",
      "between",
      "numeric"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 79,
    "title": "IT or Finance Employees Joined Before 2020",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Medium",
    "problemStatement": "Find all employees in the IT or Finance department who joined before the year 2020.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `joining_year`.",
      "Department must be either 'IT' or 'Finance'.",
      "Joining year must be strictly less than 2020."
    ],
    "tableName": "Employees",
    "hint": "Use IN ('IT', 'Finance') and a less-than comparison on joining_year.",
    "expectedSql": "SELECT emp_id, emp_name, department, joining_year FROM Employees WHERE department IN ('IT', 'Finance') AND joining_year < 2020;",
    "explanation": "Parenthesizing or grouping set membership with an inequality isolates historical staff from designated divisions.",
    "tags": [
      "where",
      "in",
      "and",
      "logical-operators"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 80,
    "title": "Projects in Completed or Planning Status",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Easy",
    "problemStatement": "Find all projects that are either completed or currently in planning.",
    "requirements": [
      "Select `project_id`, `project_name`, and `status`.",
      "Status must be either 'Completed' or 'Planning'."
    ],
    "tableName": "Projects",
    "hint": "Use the IN operator with the two status values.",
    "expectedSql": "SELECT project_id, project_name, status FROM Projects WHERE status IN ('Completed', 'Planning');",
    "explanation": "IN acts as shorthand for multiple OR expressions against a common attribute.",
    "tags": [
      "where",
      "in",
      "status"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 81,
    "title": "Employees with Names Starting with P or S",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose name begins with either 'P' or 'S'.",
    "requirements": [
      "Select `emp_id`, `emp_name`, and `department`.",
      "Name must start with 'P' or start with 'S'."
    ],
    "tableName": "Employees",
    "hint": "Combine two LIKE conditions with OR.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees WHERE emp_name LIKE 'P%' OR emp_name LIKE 'S%';",
    "explanation": "The percent wildcard (%) matches zero or more trailing characters.",
    "tags": [
      "where",
      "like",
      "wildcards"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 82,
    "title": "Projects Containing 'Automation'",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Easy",
    "problemStatement": "Find all projects that have the word 'Automation' anywhere in their name. Display all columns.",
    "requirements": [
      "Select all columns from Projects.",
      "Project name must contain 'Automation'."
    ],
    "tableName": "Projects",
    "hint": "Use LIKE with % wildcards on both sides.",
    "expectedSql": "SELECT * FROM Projects WHERE project_name LIKE '%Automation%';",
    "explanation": "Surrounding the pattern with '%' performs a substring containment search.",
    "tags": [
      "where",
      "like",
      "substring"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 83,
    "title": "Reviews with Exceptional or Outstanding Feedback",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Medium",
    "problemStatement": "Find all performance reviews whose feedback mentions either 'Exceptional' or 'Outstanding'.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `feedback`.",
      "Feedback must contain 'Exceptional' or 'Outstanding'."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use two LIKE conditions joined by OR.",
    "expectedSql": "SELECT review_id, emp_id, rating, feedback FROM Performance_Reviews WHERE feedback LIKE '%Exceptional%' OR feedback LIKE '%Outstanding%';",
    "explanation": "Searches free-text appraisal commentary for positive recognition keywords.",
    "tags": [
      "where",
      "like",
      "text-search"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 84,
    "title": "Departments Without the Letter 'e'",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Medium",
    "problemStatement": "Find all departments whose name does not contain the letter 'e' (case-insensitive).",
    "requirements": [
      "Select `dept_id`, `dept_name`, and `location`.",
      "Department name must not contain the letter 'e'."
    ],
    "tableName": "Departments",
    "hint": "Use NOT LIKE '%e%'.",
    "expectedSql": "SELECT dept_id, dept_name, location FROM Departments WHERE dept_name NOT LIKE '%e%';",
    "explanation": "NOT LIKE inverts wildcard pattern matching to exclude rows containing specific characters.",
    "tags": [
      "where",
      "not-like",
      "strings"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 85,
    "title": "Five-Letter Names Ending in 'a'",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Hard",
    "problemStatement": "Find all employees whose name is exactly five characters long and ends with the letter 'a'.",
    "requirements": [
      "Select `emp_id`, `emp_name`, and `department`.",
      "Name must be exactly 5 characters long and end with 'a'."
    ],
    "tableName": "Employees",
    "hint": "Use four underscore wildcards followed by 'a' in LIKE.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees WHERE emp_name LIKE '____a';",
    "explanation": "Each underscore (_) wildcard matches exactly one single character in standard SQL pattern matching.",
    "tags": [
      "where",
      "like",
      "underscore-wildcard"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 86,
    "title": "Employees Earning Over 600,000 Annually",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose calculated annual salary (monthly salary * 12) exceeds 600,000.",
    "requirements": [
      "Select `emp_id`, `emp_name`, and `salary`.",
      "Calculate annual salary as `(salary * 12) AS annual_salary`.",
      "Filter for employees where `(salary * 12) > 600000`."
    ],
    "tableName": "Employees",
    "hint": "Use the arithmetic expression in both the SELECT and WHERE clauses.",
    "expectedSql": "SELECT emp_id, emp_name, salary, (salary * 12) AS annual_salary FROM Employees WHERE (salary * 12) > 600000;",
    "explanation": "Mathematical expressions can be calculated and compared directly within the WHERE predicate.",
    "tags": [
      "where",
      "arithmetic",
      "numeric"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 87,
    "title": "Project Assignments Under 20 or Over 35 Hours",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Medium",
    "problemStatement": "Find all employee project assignments where weekly hours are either under 20 or over 35.",
    "requirements": [
      "Select `emp_id`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Hours must be less than 20 or greater than 35."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use OR between the two boundary comparisons.",
    "expectedSql": "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects WHERE hours_allocated < 20 OR hours_allocated > 35;",
    "explanation": "Disjunctive bounds locate entries falling outside the standard bell curve of staffing capacity.",
    "tags": [
      "where",
      "range",
      "disjunction"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 88,
    "title": "Chennai or Bengaluru Employees Earning 35k to 70k",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Medium",
    "problemStatement": "Find employees located in Chennai or Bengaluru who earn between 35,000 and 70,000.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `city`, and `salary`.",
      "City must be 'Chennai' or 'Bengaluru'.",
      "Salary must be between 35,000 and 70,000 (inclusive)."
    ],
    "tableName": "Employees",
    "hint": "Combine IN with BETWEEN using AND.",
    "expectedSql": "SELECT emp_id, emp_name, city, salary FROM Employees WHERE city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000;",
    "explanation": "Combining discrete location filtering with a bounded salary interval isolates targeted regional talent bands.",
    "tags": [
      "where",
      "between",
      "in",
      "numeric"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 89,
    "title": "Reviews with Rating 4+ and Bonus Over 15k",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find all performance reviews with a rating of 4 or higher and a bonus greater than 15,000.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Rating must be 4 or higher.",
      "Bonus must be strictly greater than 15,000."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter using rating >= 4 AND bonus > 15000.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE rating >= 4 AND bonus > 15000;",
    "explanation": "Joint thresholds ensure both qualitative rating score and quantitative financial payout are high.",
    "tags": [
      "where",
      "numeric",
      "and"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 90,
    "title": "Employees Under 30 with 5+ Years Experience",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Medium",
    "problemStatement": "Find all employees younger than 30 who have at least 5 years of experience.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `age`, and `experience`.",
      "Age must be under 30.",
      "Experience must be 5 or greater."
    ],
    "tableName": "Employees",
    "hint": "Combine age < 30 AND experience >= 5.",
    "expectedSql": "SELECT emp_id, emp_name, age, experience FROM Employees WHERE age < 30 AND experience >= 5;",
    "explanation": "Identifies early-career high achievers who have accumulated extensive domain experience.",
    "tags": [
      "where",
      "comparison",
      "and"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 91,
    "title": "IT Earning Over 50k or HR Earning Over 35k",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Hard",
    "problemStatement": "Find employees who are either in IT earning more than 50,000, or in HR earning more than 35,000.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary`.",
      "Employee must be in IT with salary > 50,000, OR in HR with salary > 35,000."
    ],
    "tableName": "Employees",
    "hint": "Group each department-salary condition with parentheses connected by OR.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE (department = 'IT' AND salary > 50000) OR (department = 'HR' AND salary > 35000);",
    "explanation": "Logical AND has higher precedence than OR. Parentheses eliminate ambiguity and guarantee intended business logic.",
    "tags": [
      "where",
      "precedence",
      "parentheses",
      "and-or"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 92,
    "title": "High-Budget Projects for Dept 1 or Dept 3",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Medium",
    "problemStatement": "Find projects for department 1 with a budget of at least 250,000, or department 3 with a budget of at least 300,000.",
    "requirements": [
      "Select `project_id`, `project_name`, `dept_id`, and `budget`.",
      "Match dept_id 1 with budget >= 250,000, OR dept_id 3 with budget >= 300,000."
    ],
    "tableName": "Projects",
    "hint": "Use parentheses to separate each department's budget criteria.",
    "expectedSql": "SELECT project_id, project_name, dept_id, budget FROM Projects WHERE (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000);",
    "explanation": "Evaluates multi-department capital allocation criteria with distinct departmental expenditure thresholds.",
    "tags": [
      "where",
      "precedence",
      "multi-condition"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 93,
    "title": "Experienced Employees Outside Hyderabad Earning Over 40k",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Medium",
    "problemStatement": "Find employees outside Hyderabad who earn more than 40,000 and have at least 3 years of experience.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `city`, `salary`, and `experience`.",
      "City must not be 'Hyderabad'.",
      "Salary must be greater than 40,000.",
      "Experience must be 3 or greater."
    ],
    "tableName": "Employees",
    "hint": "Combine all three conditions using AND.",
    "expectedSql": "SELECT emp_id, emp_name, city, salary, experience FROM Employees WHERE city != 'Hyderabad' AND salary > 40000 AND experience >= 3;",
    "explanation": "Applies negative equality alongside multiple positive numeric constraints across different attributes.",
    "tags": [
      "where",
      "inequality",
      "and"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 94,
    "title": "Top 2024 Performance Reviews",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Hard",
    "problemStatement": "Find 2024 reviews where the employee received a rating of 5, or a rating of 4 with a bonus of at least 18,000.",
    "requirements": [
      "Select `review_id`, `emp_id`, `review_year`, `rating`, and `bonus`.",
      "Review year must be 2024.",
      "Rating must be 5, OR rating 4 with bonus >= 18,000."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Combine the 2024 check with parenthesized rating conditions.",
    "expectedSql": "SELECT review_id, emp_id, review_year, rating, bonus FROM Performance_Reviews WHERE review_year = 2024 AND (rating = 5 OR (rating = 4 AND bonus >= 18000));",
    "explanation": "Illustrates nested Boolean evaluation where the top score qualifies automatically, but second-tier scores require compensation verification.",
    "tags": [
      "where",
      "precedence",
      "nested-logic"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 95,
    "title": "Non-Sales Employees Joined Between 2020 and 2023",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Medium",
    "problemStatement": "Find all employees outside the Sales department who joined between 2020 and 2023.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `joining_year`.",
      "Joining year must be between 2020 and 2023 (inclusive).",
      "Department must not be 'Sales'."
    ],
    "tableName": "Employees",
    "hint": "Combine BETWEEN with != 'Sales' using AND.",
    "expectedSql": "SELECT emp_id, emp_name, department, joining_year FROM Employees WHERE joining_year BETWEEN 2020 AND 2023 AND department != 'Sales';",
    "explanation": "Combines inclusive range filtering on a temporal column with categorical exclusion.",
    "tags": [
      "where",
      "between",
      "not-equal"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 96,
    "title": "Employees Outside Hyderabad and Bengaluru",
    "topic": "WHERE & Operators",
    "subtopic": "Set Membership & Exclusion",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who are not located in Hyderabad or Bengaluru.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `city`, and `department`.",
      "City must not be 'Hyderabad' or 'Bengaluru'."
    ],
    "tableName": "Employees",
    "hint": "Use NOT IN ('Hyderabad', 'Bengaluru').",
    "expectedSql": "SELECT emp_id, emp_name, city, department FROM Employees WHERE city NOT IN ('Hyderabad', 'Bengaluru');",
    "explanation": "NOT IN excludes entire sets of categorical literals in a single clean expression.",
    "tags": [
      "where",
      "not-in",
      "filtering"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 97,
    "title": "Projects Neither Completed nor On Hold",
    "topic": "WHERE & Operators",
    "subtopic": "Set Membership & Exclusion",
    "difficulty": "Easy",
    "problemStatement": "Find all projects that do not have a status of 'Completed' or 'On Hold'.",
    "requirements": [
      "Select `project_id`, `project_name`, and `status`.",
      "Status must not be in 'Completed' or 'On Hold'."
    ],
    "tableName": "Projects",
    "hint": "Use NOT IN with the two excluded statuses.",
    "expectedSql": "SELECT project_id, project_name, status FROM Projects WHERE status NOT IN ('Completed', 'On Hold');",
    "explanation": "Excludes closed or paused project states to display active workstreams.",
    "tags": [
      "where",
      "not-in",
      "status"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 98,
    "title": "Reviews with Ratings of 1, 2, or 5",
    "topic": "WHERE & Operators",
    "subtopic": "Set Membership & Exclusion",
    "difficulty": "Medium",
    "problemStatement": "Find all performance reviews where the rating is 1, 2, or 5.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `feedback`.",
      "Rating must be one of: 1, 2, or 5."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use IN (1, 2, 5).",
    "expectedSql": "SELECT review_id, emp_id, rating, feedback FROM Performance_Reviews WHERE rating IN (1, 2, 5);",
    "explanation": "IN matches discrete non-contiguous numeric values to isolate boundary performance outcomes.",
    "tags": [
      "where",
      "in",
      "numeric-sets"
    ],
    "estimatedTimeMinutes": 3
  }
];
