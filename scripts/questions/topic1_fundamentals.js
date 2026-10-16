export const TOPIC1_QUESTIONS = [
  {
    "id": 51,
    "title": "View All Employees",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Retrieve all records and all columns from the Employees table.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Include every employee without filtering."
    ],
    "tableName": "Employees",
    "hint": "Use the asterisk (*) wildcard in your SELECT statement.",
    "expectedSql": "SELECT * FROM Employees;",
    "explanation": "The asterisk (*) wildcard in a SELECT statement retrieves every column defined in the target table.",
    "tags": [
      "select",
      "fundamentals",
      "projection"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 52,
    "title": "Employee Names and Salaries",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Display the name and monthly salary of all employees.",
    "requirements": [
      "Select `emp_name` and `salary` from the Employees table.",
      "Include all employee records."
    ],
    "tableName": "Employees",
    "hint": "Specify only `emp_name` and `salary` in your SELECT list.",
    "expectedSql": "SELECT emp_name, salary FROM Employees;",
    "explanation": "Explicitly projecting columns reduces network payload and improves query performance over SELECT *.",
    "tags": [
      "select",
      "columns",
      "projection"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 53,
    "title": "Employee ID, Name, and Department",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Display the employee ID, name, and department for all employees.",
    "requirements": [
      "Select `emp_id`, `emp_name`, and `department` from the Employees table.",
      "Include all records."
    ],
    "tableName": "Employees",
    "hint": "List the three columns separated by commas.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees;",
    "explanation": "Column projections allow retrieving specific business attributes without extraneous information.",
    "tags": [
      "select",
      "columns",
      "fundamentals"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 54,
    "title": "Department Locations and Budgets",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Retrieve the department name, location, and budget from the Departments table.",
    "requirements": [
      "Select `dept_name`, `location`, and `budget` from the Departments table."
    ],
    "tableName": "Departments",
    "hint": "Query the Departments table directly.",
    "expectedSql": "SELECT dept_name, location, budget FROM Departments;",
    "explanation": "Queries can target any table in the relational database by naming it in the FROM clause.",
    "tags": [
      "departments",
      "select",
      "projection"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 55,
    "title": "Project Names and Status",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Display the name and current status of all projects.",
    "requirements": [
      "Select `project_name` and `status` from the Projects table."
    ],
    "tableName": "Projects",
    "hint": "Select the two columns from the Projects table.",
    "expectedSql": "SELECT project_name, status FROM Projects;",
    "explanation": "Selecting key descriptive columns allows tracking status across projects.",
    "tags": [
      "projects",
      "select",
      "status"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 56,
    "title": "Rename Columns with Aliases",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Display employee names and salaries, renaming the columns to `employee_full_name` and `monthly_salary`.",
    "requirements": [
      "Select `emp_name` aliased as `employee_full_name`.",
      "Select `salary` aliased as `monthly_salary`.",
      "Retrieve from the Employees table."
    ],
    "tableName": "Employees",
    "hint": "Use the AS keyword to assign new names to columns.",
    "expectedSql": "SELECT emp_name AS employee_full_name, salary AS monthly_salary FROM Employees;",
    "explanation": "The AS keyword creates temporary result column headers without changing the underlying schema.",
    "tags": [
      "alias",
      "as",
      "formatting"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 57,
    "title": "Department Budget with Aliases",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Display department names and budgets, renaming them to `dept` and `annual_budget`.",
    "requirements": [
      "Select `dept_name` aliased as `dept`.",
      "Select `budget` aliased as `annual_budget`.",
      "Retrieve from the Departments table."
    ],
    "tableName": "Departments",
    "hint": "Use AS to rename each column.",
    "expectedSql": "SELECT dept_name AS dept, budget AS annual_budget FROM Departments;",
    "explanation": "Aliasing is standard practice for conforming database columns to application DTO requirements.",
    "tags": [
      "alias",
      "departments",
      "reporting"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 58,
    "title": "Calculate Annual Salary",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Calculate the annual salary for each employee by multiplying monthly salary by 12.",
    "requirements": [
      "Display `emp_name`.",
      "Calculate monthly salary multiplied by 12, aliased as `annual_salary`."
    ],
    "tableName": "Employees",
    "hint": "Multiply the salary column by 12 using the * operator.",
    "expectedSql": "SELECT emp_name, salary * 12 AS annual_salary FROM Employees;",
    "explanation": "Arithmetic expressions in the SELECT clause compute derived values on-the-fly.",
    "tags": [
      "arithmetic",
      "alias",
      "annual-salary"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 59,
    "title": "Convert Experience to Months",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Display each employee's name along with their years of experience converted into months.",
    "requirements": [
      "Display `emp_name`.",
      "Calculate experience multiplied by 12, aliased as `experience_months`."
    ],
    "tableName": "Employees",
    "hint": "Multiply the experience column by 12.",
    "expectedSql": "SELECT emp_name, experience * 12 AS experience_months FROM Employees;",
    "explanation": "Multiplication expressions allow unit conversions directly within SQL projection.",
    "tags": [
      "arithmetic",
      "alias",
      "conversion"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 60,
    "title": "Project Budget in Thousands",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Display each project's name and its budget divided by 1000.",
    "requirements": [
      "Display `project_name`.",
      "Calculate budget divided by 1000, aliased as `budget_in_thousands`."
    ],
    "tableName": "Projects",
    "hint": "Divide the budget column by 1000 using the / operator.",
    "expectedSql": "SELECT project_name, budget / 1000 AS budget_in_thousands FROM Projects;",
    "explanation": "Division expressions scale large financial figures into readable units.",
    "tags": [
      "arithmetic",
      "division",
      "alias"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 61,
    "title": "List Unique Departments",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Find all unique departments where employees work, removing duplicates.",
    "requirements": [
      "Display the `department` column.",
      "Exclude duplicate values."
    ],
    "tableName": "Employees",
    "hint": "Use the DISTINCT keyword before the column name.",
    "expectedSql": "SELECT DISTINCT department FROM Employees;",
    "explanation": "The DISTINCT keyword de-duplicates result sets, keeping only single occurrences of unique values.",
    "tags": [
      "distinct",
      "unique",
      "departments"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 62,
    "title": "List Unique Cities",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Find all distinct cities where employees are located.",
    "requirements": [
      "Display the `city` column.",
      "Exclude duplicate cities."
    ],
    "tableName": "Employees",
    "hint": "Use DISTINCT to return only unique city names.",
    "expectedSql": "SELECT DISTINCT city FROM Employees;",
    "explanation": "DISTINCT works on any scalar data type including strings and locations.",
    "tags": [
      "distinct",
      "city",
      "unique"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 63,
    "title": "List Unique Joining Years",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Find all distinct years in which employees joined the company.",
    "requirements": [
      "Display the `joining_year` column.",
      "Remove duplicate years."
    ],
    "tableName": "Employees",
    "hint": "Use DISTINCT on the joining_year column.",
    "expectedSql": "SELECT DISTINCT joining_year FROM Employees;",
    "explanation": "DISTINCT on integer columns identifies the unique years of hiring cohorts.",
    "tags": [
      "distinct",
      "temporal",
      "years"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 64,
    "title": "List Unique Project Statuses",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Find all distinct project statuses currently used in the Projects table.",
    "requirements": [
      "Display the `status` column from Projects.",
      "Remove duplicate statuses."
    ],
    "tableName": "Projects",
    "hint": "Use DISTINCT on the status column.",
    "expectedSql": "SELECT DISTINCT status FROM Projects;",
    "explanation": "DISTINCT helps discover enum-like categories in business workflows.",
    "tags": [
      "distinct",
      "status",
      "projects"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 65,
    "title": "Unique Department and City Pairs",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Easy",
    "problemStatement": "Find all unique combinations of department and city where employees work.",
    "requirements": [
      "Select distinct combinations of `department` and `city`.",
      "Retrieve from the Employees table."
    ],
    "tableName": "Employees",
    "hint": "Apply DISTINCT across both columns.",
    "expectedSql": "SELECT DISTINCT department, city FROM Employees;",
    "explanation": "When multiple columns follow DISTINCT, uniqueness is evaluated on the tuple of values.",
    "tags": [
      "distinct",
      "multi-column",
      "combinations"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 66,
    "title": "Calculate Daily Wage",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Beginner",
    "problemStatement": "Estimate each employee's daily wage by dividing their monthly salary by 30.",
    "requirements": [
      "Display `emp_name`.",
      "Calculate salary divided by 30, aliased as `daily_wage`."
    ],
    "tableName": "Employees",
    "hint": "Divide salary by 30 in your SELECT clause.",
    "expectedSql": "SELECT emp_name, salary / 30 AS daily_wage FROM Employees;",
    "explanation": "Mathematical operations in SQL support integer and floating-point division.",
    "tags": [
      "arithmetic",
      "division",
      "daily-wage"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 67,
    "title": "Calculate 10% Salary Increase",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Easy",
    "problemStatement": "Display each employee's name, current salary, and their new salary after a 10% increase.",
    "requirements": [
      "Select `emp_name` and `salary`.",
      "Calculate salary increased by 10% (salary * 1.10), aliased as `revised_salary`."
    ],
    "tableName": "Employees",
    "hint": "Multiply salary by 1.10 to compute the 10% raise.",
    "expectedSql": "SELECT emp_name, salary, salary * 1.10 AS revised_salary FROM Employees;",
    "explanation": "Multiplying by 1.10 applies a percentage increase directly within SQL.",
    "tags": [
      "arithmetic",
      "percentage",
      "hike"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 68,
    "title": "Calculate Salary with 5,000 Bonus",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Beginner",
    "problemStatement": "Display each employee's name and their salary with an added 5,000 bonus.",
    "requirements": [
      "Select `emp_name`.",
      "Add 5,000 to `salary`, aliased as `incremented_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use the + operator to add 5000 to salary.",
    "expectedSql": "SELECT emp_name, salary + 5000 AS incremented_salary FROM Employees;",
    "explanation": "Addition operators allow applying flat stipends or allowances.",
    "tags": [
      "arithmetic",
      "addition",
      "salary"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 69,
    "title": "Calculate 14-Month Annual Package",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Easy",
    "problemStatement": "Calculate a 14-month total compensation package for each employee based on their monthly salary.",
    "requirements": [
      "Select `emp_name`.",
      "Calculate monthly salary multiplied by 14, aliased as `total_annual_package`."
    ],
    "tableName": "Employees",
    "hint": "Multiply salary by 14.",
    "expectedSql": "SELECT emp_name, salary * 14 AS total_annual_package FROM Employees;",
    "explanation": "Multiplication models realistic corporate compensation structures.",
    "tags": [
      "arithmetic",
      "bonus",
      "compensation"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 70,
    "title": "Calculate 80% Usable Budget",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Easy",
    "problemStatement": "Display each project's name and 80% of its total budget.",
    "requirements": [
      "Select `project_name`.",
      "Calculate 80% of `budget` (budget * 0.80), aliased as `net_usable_budget`."
    ],
    "tableName": "Projects",
    "hint": "Multiply the budget by 0.80.",
    "expectedSql": "SELECT project_name, budget * 0.80 AS net_usable_budget FROM Projects;",
    "explanation": "Floating point multiplication is commonly used for reserve deductions and financial modeling.",
    "tags": [
      "arithmetic",
      "budget",
      "projects"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 71,
    "title": "Add Constant Organization Column",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Beginner",
    "problemStatement": "Display each employee's name along with a static column called `organization` containing the text 'SQL Sprint Corp'.",
    "requirements": [
      "Select `emp_name`.",
      "Include a constant literal `'SQL Sprint Corp'` aliased as `organization`."
    ],
    "tableName": "Employees",
    "hint": "Include a literal string in the SELECT list with an alias.",
    "expectedSql": "SELECT emp_name, 'SQL Sprint Corp' AS organization FROM Employees;",
    "explanation": "String literals enclosed in single quotes project constant values for every row in the result set.",
    "tags": [
      "literal",
      "string",
      "constants"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 72,
    "title": "Add Constant Employment Type Column",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Beginner",
    "problemStatement": "Display employee names and departments, adding a constant column called `employment_type` with the value 'Full-Time'.",
    "requirements": [
      "Select `emp_name` and `department`.",
      "Include a constant string `'Full-Time'` aliased as `employment_type`."
    ],
    "tableName": "Employees",
    "hint": "Specify `'Full-Time' AS employment_type` in your projection.",
    "expectedSql": "SELECT emp_name, department, 'Full-Time' AS employment_type FROM Employees;",
    "explanation": "Static classification labels are frequently used in union operations and export pipelines.",
    "tags": [
      "literal",
      "employment-type",
      "constants"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 73,
    "title": "Find Reviews Without Bonus",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Easy",
    "problemStatement": "Find all performance reviews where no bonus was awarded (bonus is NULL).",
    "requirements": [
      "Select `review_id`, `emp_id`, and `rating` from Performance_Reviews.",
      "Filter for records where `bonus` is NULL."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use IS NULL to check for missing bonus values.",
    "expectedSql": "SELECT review_id, emp_id, rating FROM Performance_Reviews WHERE bonus IS NULL;",
    "explanation": "In SQL, NULL signifies unknown or missing data and cannot be checked with '= NULL'. Use 'IS NULL'.",
    "tags": [
      "null",
      "is-null",
      "performance-reviews"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 74,
    "title": "Find Reviews With Bonus",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Easy",
    "problemStatement": "Find all performance reviews where a bonus was awarded.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Filter for records where `bonus` is NOT NULL."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use IS NOT NULL to filter out empty bonus values.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL;",
    "explanation": "The IS NOT NULL operator filters for populated values, ignoring rows with missing compensation.",
    "tags": [
      "null",
      "is-not-null",
      "filtering"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 75,
    "title": "Replace Null Bonuses with Zero",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Medium",
    "problemStatement": "Display all performance reviews, showing a bonus of 0 whenever the bonus is NULL.",
    "requirements": [
      "Select `review_id`, `emp_id`, and `rating`.",
      "Display bonus with NULL values replaced by 0, aliased as `final_bonus`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use the COALESCE function to provide a fallback value of 0.",
    "expectedSql": "SELECT review_id, emp_id, rating, COALESCE(bonus, 0) AS final_bonus FROM Performance_Reviews;",
    "explanation": "COALESCE returns the first non-null argument, safely replacing missing bonus entries with numeric zero.",
    "tags": [
      "coalesce",
      "null-handling",
      "expressions"
    ],
    "estimatedTimeMinutes": 4
  }
];
