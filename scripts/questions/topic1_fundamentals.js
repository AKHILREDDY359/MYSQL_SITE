export const TOPIC1_QUESTIONS = [
  // Subtopic 1: Basic SELECT & Column Projection (IDs 51 to 55)
  {
    id: 51,
    title: "Display all columns and records from Employees",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to retrieve all columns and all records from the Employees table.",
    requirements: [
      "Use the asterisk (*) wildcard to project all columns.",
      "Select from the Employees table without any row filters."
    ],
    tableName: "Employees",
    hint: "Use SELECT * FROM Employees;",
    expectedSql: "SELECT * FROM Employees;",
    explanation: "The asterisk (*) wildcard in a SELECT statement retrieves every column defined in the target table.",
    tags: ["select", "fundamentals", "projection"],
    estimatedTimeMinutes: 2
  },
  {
    id: 52,
    title: "Select employee names and their monthly salaries",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to retrieve only the employee name and salary columns for all employees.",
    requirements: [
      "Select only the emp_name and salary columns.",
      "Preserve the column order: emp_name, salary."
    ],
    tableName: "Employees",
    hint: "Specify columns separated by comma: SELECT emp_name, salary FROM Employees;",
    expectedSql: "SELECT emp_name, salary FROM Employees;",
    explanation: "Explicitly projecting columns reduces network payload and improves query performance over SELECT *.",
    tags: ["select", "columns", "projection"],
    estimatedTimeMinutes: 2
  },
  {
    id: 53,
    title: "Display employee ID, full name, and department",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display the employee ID, employee name, and department for all employees.",
    requirements: [
      "Select emp_id, emp_name, and department.",
      "Maintain the specified column order."
    ],
    tableName: "Employees",
    hint: "SELECT emp_id, emp_name, department FROM Employees;",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees;",
    explanation: "Column projections allow retrieving specific business attributes without extraneous information.",
    tags: ["select", "columns", "fundamentals"],
    estimatedTimeMinutes: 2
  },
  {
    id: 54,
    title: "Retrieve department names, locations, and budgets",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display the department name, location, and annual budget from the Departments table.",
    requirements: [
      "Query the Departments table.",
      "Select dept_name, location, and budget."
    ],
    tableName: "Departments",
    hint: "SELECT dept_name, location, budget FROM Departments;",
    expectedSql: "SELECT dept_name, location, budget FROM Departments;",
    explanation: "Queries can target any table in the relational database by naming it in the FROM clause.",
    tags: ["departments", "select", "projection"],
    estimatedTimeMinutes: 2
  },
  {
    id: 55,
    title: "Retrieve all project names and their current status",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to project the project name and operational status for all corporate initiatives in the Projects table.",
    requirements: [
      "Query the Projects table.",
      "Select project_name and status."
    ],
    tableName: "Projects",
    hint: "SELECT project_name, status FROM Projects;",
    expectedSql: "SELECT project_name, status FROM Projects;",
    explanation: "Selecting key descriptive columns allows tracking status across projects.",
    tags: ["projects", "select", "status"],
    estimatedTimeMinutes: 2
  },

  // Subtopic 2: Column Aliasing & Renaming (IDs 56 to 60)
  {
    id: 56,
    title: "Alias employee name and salary with business-friendly titles",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to retrieve emp_name renamed as employee_full_name, and salary renamed as monthly_salary.",
    requirements: [
      "Select emp_name aliased as employee_full_name.",
      "Select salary aliased as monthly_salary.",
      "Use the AS keyword for explicit aliasing."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name AS employee_full_name, salary AS monthly_salary FROM Employees;",
    expectedSql: "SELECT emp_name AS employee_full_name, salary AS monthly_salary FROM Employees;",
    explanation: "The AS keyword creates temporary result column headers without changing the underlying schema.",
    tags: ["alias", "as", "formatting"],
    estimatedTimeMinutes: 2
  },
  {
    id: 57,
    title: "Alias department attributes for executive reporting",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query from Departments that renames dept_name to dept and budget to annual_budget.",
    requirements: [
      "Query the Departments table.",
      "Alias dept_name as dept.",
      "Alias budget as annual_budget."
    ],
    tableName: "Departments",
    hint: "SELECT dept_name AS dept, budget AS annual_budget FROM Departments;",
    expectedSql: "SELECT dept_name AS dept, budget AS annual_budget FROM Departments;",
    explanation: "Aliasing is standard practice for conforming database columns to application DTO requirements.",
    tags: ["alias", "departments", "reporting"],
    estimatedTimeMinutes: 2
  },
  {
    id: 58,
    title: "Compute and alias annual employee compensation",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to project emp_name and calculate the annual compensation (monthly salary multiplied by 12) with the column alias annual_salary.",
    requirements: [
      "Select emp_name.",
      "Multiply salary by 12 and alias as annual_salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, salary * 12 AS annual_salary FROM Employees;",
    expectedSql: "SELECT emp_name, salary * 12 AS annual_salary FROM Employees;",
    explanation: "Arithmetic expressions in the SELECT clause compute derived values on-the-fly.",
    tags: ["arithmetic", "alias", "annual-salary"],
    estimatedTimeMinutes: 3
  },
  {
    id: 59,
    title: "Convert professional experience from years to months",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query displaying each employee's name and their total professional experience converted to months (experience * 12) aliased as experience_months.",
    requirements: [
      "Select emp_name.",
      "Multiply experience by 12 and alias as experience_months."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, experience * 12 AS experience_months FROM Employees;",
    expectedSql: "SELECT emp_name, experience * 12 AS experience_months FROM Employees;",
    explanation: "Multiplication expressions allow unit conversions directly within SQL projection.",
    tags: ["arithmetic", "alias", "conversion"],
    estimatedTimeMinutes: 3
  },
  {
    id: 60,
    title: "Project project budgets formatted in thousands (K)",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query from Projects to display project_name and the budget divided by 1000 aliased as budget_in_thousands.",
    requirements: [
      "Query the Projects table.",
      "Select project_name.",
      "Calculate budget / 1000 and alias as budget_in_thousands."
    ],
    tableName: "Projects",
    hint: "SELECT project_name, budget / 1000 AS budget_in_thousands FROM Projects;",
    expectedSql: "SELECT project_name, budget / 1000 AS budget_in_thousands FROM Projects;",
    explanation: "Division expressions scale large financial figures into readable units.",
    tags: ["arithmetic", "division", "alias"],
    estimatedTimeMinutes: 3
  },

  // Subtopic 3: DISTINCT & Unique Values (IDs 61 to 65)
  {
    id: 61,
    title: "List all unique department names in the organization",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display all unique department names present in the Employees table without any duplicate entries.",
    requirements: [
      "Use DISTINCT on the department column.",
      "Retrieve results from the Employees table."
    ],
    tableName: "Employees",
    hint: "SELECT DISTINCT department FROM Employees;",
    expectedSql: "SELECT DISTINCT department FROM Employees;",
    explanation: "The DISTINCT keyword de-duplicates result sets, keeping only single occurrences of unique values.",
    tags: ["distinct", "unique", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 62,
    title: "Find all distinct office branch cities",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to list all unique cities where employees are stationed, eliminating duplicate cities.",
    requirements: [
      "Select DISTINCT city from Employees."
    ],
    tableName: "Employees",
    hint: "SELECT DISTINCT city FROM Employees;",
    expectedSql: "SELECT DISTINCT city FROM Employees;",
    explanation: "DISTINCT works on any scalar data type including strings and locations.",
    tags: ["distinct", "city", "unique"],
    estimatedTimeMinutes: 2
  },
  {
    id: 63,
    title: "List all unique years in which employees joined the company",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to retrieve all unique joining years recorded in the Employees table.",
    requirements: [
      "Select DISTINCT joining_year from Employees."
    ],
    tableName: "Employees",
    hint: "SELECT DISTINCT joining_year FROM Employees;",
    expectedSql: "SELECT DISTINCT joining_year FROM Employees;",
    explanation: "DISTINCT on integer columns identifies the unique years of hiring cohorts.",
    tags: ["distinct", "temporal", "years"],
    estimatedTimeMinutes: 2
  },
  {
    id: 64,
    title: "Discover all distinct operational statuses across projects",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to identify all distinct project status categories currently in the Projects table.",
    requirements: [
      "Query the Projects table.",
      "Use DISTINCT on status."
    ],
    tableName: "Projects",
    hint: "SELECT DISTINCT status FROM Projects;",
    expectedSql: "SELECT DISTINCT status FROM Projects;",
    explanation: "DISTINCT helps discover enum-like categories in business workflows.",
    tags: ["distinct", "status", "projects"],
    estimatedTimeMinutes: 2
  },
  {
    id: 65,
    title: "Find distinct department and city office pairs",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display all unique combinations of department and city from the Employees table.",
    requirements: [
      "Use DISTINCT across both department and city columns.",
      "Preserve order: department, city."
    ],
    tableName: "Employees",
    hint: "SELECT DISTINCT department, city FROM Employees;",
    expectedSql: "SELECT DISTINCT department, city FROM Employees;",
    explanation: "When multiple columns follow DISTINCT, uniqueness is evaluated on the tuple of values.",
    tags: ["distinct", "multi-column", "combinations"],
    estimatedTimeMinutes: 3
  },

  // Subtopic 4: Arithmetic Calculations & Expressions (IDs 66 to 70)
  {
    id: 66,
    title: "Calculate estimated daily wage assuming 30 days per month",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display each employee's name and their estimated daily wage (salary divided by 30) aliased as daily_wage.",
    requirements: [
      "Select emp_name.",
      "Calculate salary / 30 and alias as daily_wage."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, salary / 30 AS daily_wage FROM Employees;",
    expectedSql: "SELECT emp_name, salary / 30 AS daily_wage FROM Employees;",
    explanation: "Mathematical operations in SQL support integer and floating-point division.",
    tags: ["arithmetic", "division", "daily-wage"],
    estimatedTimeMinutes: 3
  },
  {
    id: 67,
    title: "Compute projected 10 percent salary hike",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display emp_name, current salary, and the projected revised salary after a 10% raise (salary * 1.10) aliased as revised_salary.",
    requirements: [
      "Select emp_name, salary.",
      "Compute salary * 1.10 aliased as revised_salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, salary, salary * 1.10 AS revised_salary FROM Employees;",
    expectedSql: "SELECT emp_name, salary, salary * 1.10 AS revised_salary FROM Employees;",
    explanation: "Multiplying by 1.10 applies a percentage increase directly within SQL.",
    tags: ["arithmetic", "percentage", "hike"],
    estimatedTimeMinutes: 3
  },
  {
    id: 68,
    title: "Compute projected salary with a 5000 INR fixed bonus increment",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display emp_name and their salary plus a fixed 5000 increment aliased as incremented_salary.",
    requirements: [
      "Select emp_name.",
      "Add 5000 to salary and alias as incremented_salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, salary + 5000 AS incremented_salary FROM Employees;",
    expectedSql: "SELECT emp_name, salary + 5000 AS incremented_salary FROM Employees;",
    explanation: "Addition operators allow applying flat stipends or allowances.",
    tags: ["arithmetic", "addition", "salary"],
    estimatedTimeMinutes: 2
  },
  {
    id: 69,
    title: "Calculate total annual package including 2 months festive bonus",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display emp_name and total compensation for 14 months (monthly salary * 14) aliased as total_annual_package.",
    requirements: [
      "Select emp_name.",
      "Multiply salary by 14 and alias as total_annual_package."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, salary * 14 AS total_annual_package FROM Employees;",
    expectedSql: "SELECT emp_name, salary * 14 AS total_annual_package FROM Employees;",
    explanation: "Multiplication models realistic corporate compensation structures.",
    tags: ["arithmetic", "bonus", "compensation"],
    estimatedTimeMinutes: 3
  },
  {
    id: 70,
    title: "Calculate net usable project budget after 20 percent management reserve",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Projects to display project_name and 80% of budget (budget * 0.80) aliased as net_usable_budget.",
    requirements: [
      "Query the Projects table.",
      "Select project_name.",
      "Calculate budget * 0.80 and alias as net_usable_budget."
    ],
    tableName: "Projects",
    hint: "SELECT project_name, budget * 0.80 AS net_usable_budget FROM Projects;",
    expectedSql: "SELECT project_name, budget * 0.80 AS net_usable_budget FROM Projects;",
    explanation: "Floating point multiplication is commonly used for reserve deductions and financial modeling.",
    tags: ["arithmetic", "budget", "projects"],
    estimatedTimeMinutes: 3
  },

  // Subtopic 5: Literals & NULL Value Handling (IDs 71 to 75)
  {
    id: 71,
    title: "Append static corporate organization literal column",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to select emp_name and a static string literal 'SQL Sprint Corp' aliased as organization for all employees.",
    requirements: [
      "Select emp_name.",
      "Include string literal 'SQL Sprint Corp' aliased as organization."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, 'SQL Sprint Corp' AS organization FROM Employees;",
    expectedSql: "SELECT emp_name, 'SQL Sprint Corp' AS organization FROM Employees;",
    explanation: "String literals enclosed in single quotes project constant values for every row in the result set.",
    tags: ["literal", "string", "constants"],
    estimatedTimeMinutes: 2
  },
  {
    id: 72,
    title: "Project static employment classification tag",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to select emp_name, department, and a literal column 'Full-Time' aliased as employment_type.",
    requirements: [
      "Select emp_name, department.",
      "Include literal 'Full-Time' aliased as employment_type."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, department, 'Full-Time' AS employment_type FROM Employees;",
    expectedSql: "SELECT emp_name, department, 'Full-Time' AS employment_type FROM Employees;",
    explanation: "Static classification labels are frequently used in union operations and export pipelines.",
    tags: ["literal", "employment-type", "constants"],
    estimatedTimeMinutes: 2
  },
  {
    id: 73,
    title: "Identify performance reviews where bonus was not awarded (NULL)",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Performance_Reviews to retrieve review_id, emp_id, and rating for reviews where the bonus is NULL.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Filter rows where bonus IS NULL.",
      "Select review_id, emp_id, rating."
    ],
    tableName: "Performance_Reviews",
    hint: "Use IS NULL operator: SELECT review_id, emp_id, rating FROM Performance_Reviews WHERE bonus IS NULL;",
    expectedSql: "SELECT review_id, emp_id, rating FROM Performance_Reviews WHERE bonus IS NULL;",
    explanation: "In SQL, NULL signifies unknown or missing data and cannot be checked with '= NULL'. Use 'IS NULL'.",
    tags: ["null", "is-null", "performance-reviews"],
    estimatedTimeMinutes: 3
  },
  {
    id: 74,
    title: "Retrieve performance reviews with confirmed bonus payouts",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Performance_Reviews to display review_id, emp_id, rating, and bonus where bonus IS NOT NULL.",
    requirements: [
      "Query Performance_Reviews.",
      "Filter with bonus IS NOT NULL.",
      "Select review_id, emp_id, rating, bonus."
    ],
    tableName: "Performance_Reviews",
    hint: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL;",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL;",
    explanation: "The IS NOT NULL operator filters for populated values, ignoring rows with missing compensation.",
    tags: ["null", "is-not-null", "filtering"],
    estimatedTimeMinutes: 3
  },
  {
    id: 75,
    title: "Safeguard bonus calculations using COALESCE for NULL values",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Performance_Reviews displaying review_id, emp_id, rating, and COALESCE(bonus, 0) aliased as final_bonus to replace NULL bonuses with 0.",
    requirements: [
      "Query Performance_Reviews.",
      "Use COALESCE(bonus, 0) aliased as final_bonus.",
      "Select review_id, emp_id, rating, final_bonus."
    ],
    tableName: "Performance_Reviews",
    hint: "SELECT review_id, emp_id, rating, COALESCE(bonus, 0) AS final_bonus FROM Performance_Reviews;",
    expectedSql: "SELECT review_id, emp_id, rating, COALESCE(bonus, 0) AS final_bonus FROM Performance_Reviews;",
    explanation: "COALESCE returns the first non-null argument, safely replacing missing bonus entries with numeric zero.",
    tags: ["coalesce", "null-handling", "expressions"],
    estimatedTimeMinutes: 4
  }
];
