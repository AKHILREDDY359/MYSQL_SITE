export const TOPIC1_QUESTIONS = [
  // Subtopic 1: Basic SELECT & Column Projection (IDs 51 to 55)
  {
    id: 51,
    title: "Enterprise Workforce Master Directory",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "The Human Resources Information Systems (HRIS) team needs a full extract of all employee profiles currently registered in the database for a comprehensive system audit. Retrieve all employee records and all columns without filtering.",
    requirements: [
      "Select all available columns from the Employees table.",
      "Include all employee records in the company."
    ],
    tableName: "Employees",
    hint: "Retrieve all columns from the Employees table without any row filtering conditions.",
    expectedSql: "SELECT * FROM Employees;",
    explanation: "The asterisk (*) wildcard in a SELECT statement retrieves every column defined in the target table.",
    tags: ["select", "fundamentals", "projection"],
    estimatedTimeMinutes: 2
  },
  {
    id: 52,
    title: "Basic Compensation Overview",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "The payroll department is reviewing base salaries across the organization. Produce a report displaying each employee's name alongside their current monthly salary.",
    requirements: [
      "Display employee name (`emp_name`) and monthly salary (`salary`).",
      "Include all records from the Employees table."
    ],
    tableName: "Employees",
    hint: "Specify only the employee name and salary columns in your projection.",
    expectedSql: "SELECT emp_name, salary FROM Employees;",
    explanation: "Explicitly projecting columns reduces network payload and improves query performance over SELECT *.",
    tags: ["select", "columns", "projection"],
    estimatedTimeMinutes: 2
  },
  {
    id: 53,
    title: "Staff Badge Credentials and Division Alignment",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "Facilities administration is issuing updated security access cards. Extract each staff member's unique employee identifier, full name, and assigned operational department.",
    requirements: [
      "Project employee ID (`emp_id`), full name (`emp_name`), and department (`department`).",
      "Retrieve data from the Employees table."
    ],
    tableName: "Employees",
    hint: "Select the three requested identification attributes from the Employees table.",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees;",
    explanation: "Column projections allow retrieving specific business attributes without extraneous information.",
    tags: ["select", "columns", "fundamentals"],
    estimatedTimeMinutes: 2
  },
  {
    id: 54,
    title: "Department Operational Centers and Allocations",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "The executive finance committee requires an overview of corporate divisions. Retrieve the department name, headquarters location, and total operating budget for each department in the organization.",
    requirements: [
      "Project department name (`dept_name`), office location (`location`), and budget (`budget`).",
      "Extract records from the Departments table."
    ],
    tableName: "Departments",
    hint: "Query the Departments table selecting the division name, location, and budget fields.",
    expectedSql: "SELECT dept_name, location, budget FROM Departments;",
    explanation: "Queries can target any table in the relational database by naming it in the FROM clause.",
    tags: ["departments", "select", "projection"],
    estimatedTimeMinutes: 2
  },
  {
    id: 55,
    title: "Corporate Project Portfolio Status Tracking",
    topic: "SQL Fundamentals",
    subtopic: "Basic SELECT & Column Projection",
    difficulty: "Beginner",
    problemStatement: "The Project Management Office is preparing a portfolio health dashboard. Display the name of each corporate initiative and its current operational status.",
    requirements: [
      "Select project name (`project_name`) and execution status (`status`).",
      "Source data from the Projects table."
    ],
    tableName: "Projects",
    hint: "Retrieve only the project name and status columns from the Projects table.",
    expectedSql: "SELECT project_name, status FROM Projects;",
    explanation: "Selecting key descriptive columns allows tracking status across projects.",
    tags: ["projects", "select", "status"],
    estimatedTimeMinutes: 2
  },

  // Subtopic 2: Column Aliasing & Renaming (IDs 56 to 60)
  {
    id: 56,
    title: "Executive Reporting Column Formatting",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Executive leadership prefers human-friendly headers in analytical reports. Retrieve each employee's name and salary, relabeling the columns to clearly distinguish full name and monthly compensation in the final output.",
    requirements: [
      "Select employee name aliased as `employee_full_name`.",
      "Select monthly salary aliased as `monthly_salary`.",
      "Query from the Employees table."
    ],
    tableName: "Employees",
    hint: "Use column aliasing to assign the requested business-friendly headers to the projected fields.",
    expectedSql: "SELECT emp_name AS employee_full_name, salary AS monthly_salary FROM Employees;",
    explanation: "The AS keyword creates temporary result column headers without changing the underlying schema.",
    tags: ["alias", "as", "formatting"],
    estimatedTimeMinutes: 2
  },
  {
    id: 57,
    title: "Departmental Financial Summary Labels",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Financial reporting systems require concise standardized column aliases for automated ingestion. Retrieve department names and budgets, formatting them with designated technical headers.",
    requirements: [
      "Query the Departments table.",
      "Alias `dept_name` as `dept`.",
      "Alias `budget` as `annual_budget`."
    ],
    tableName: "Departments",
    hint: "Alias the department name column as dept and the budget column as annual_budget.",
    expectedSql: "SELECT dept_name AS dept, budget AS annual_budget FROM Departments;",
    explanation: "Aliasing is standard practice for conforming database columns to application DTO requirements.",
    tags: ["alias", "departments", "reporting"],
    estimatedTimeMinutes: 2
  },
  {
    id: 58,
    title: "Annualized Compensation Projection",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Corporate accounting is forecasting annual base compensation obligations. For each employee, display their name and compute their full annual salary based on 12 months of pay.",
    requirements: [
      "Display employee name (`emp_name`).",
      "Calculate monthly salary multiplied by 12, aliasing the result as `annual_salary`."
    ],
    tableName: "Employees",
    hint: "Multiply the monthly salary attribute by 12 within the column projection list.",
    expectedSql: "SELECT emp_name, salary * 12 AS annual_salary FROM Employees;",
    explanation: "Arithmetic expressions in the SELECT clause compute derived values on-the-fly.",
    tags: ["arithmetic", "alias", "annual-salary"],
    estimatedTimeMinutes: 3
  },
  {
    id: 59,
    title: "Tenure Conversion to Operational Months",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Human Resources is calculating seniority milestones on a monthly cadence rather than years. Retrieve each staff member's name and their total career experience expressed in months.",
    requirements: [
      "Select employee name (`emp_name`).",
      "Convert years of experience into months by multiplying by 12, aliasing the column as `experience_months`."
    ],
    tableName: "Employees",
    hint: "Multiply the experience field by 12 and assign the specified alias.",
    expectedSql: "SELECT emp_name, experience * 12 AS experience_months FROM Employees;",
    explanation: "Multiplication expressions allow unit conversions directly within SQL projection.",
    tags: ["arithmetic", "alias", "conversion"],
    estimatedTimeMinutes: 3
  },
  {
    id: 60,
    title: "Project Capital Allocation in Thousands",
    topic: "SQL Fundamentals",
    subtopic: "Column Aliasing & Renaming",
    difficulty: "Beginner",
    problemStatement: "Executive slide decks present large budget allocations in thousands of dollars (K) for visual clarity. Display each project name alongside its total budget scaled into thousands.",
    requirements: [
      "Query the Projects table.",
      "Select project name (`project_name`).",
      "Divide the budget by 1000, aliasing the result as `budget_in_thousands`."
    ],
    tableName: "Projects",
    hint: "Perform arithmetic division on the budget column and assign the designated alias.",
    expectedSql: "SELECT project_name, budget / 1000 AS budget_in_thousands FROM Projects;",
    explanation: "Division expressions scale large financial figures into readable units.",
    tags: ["arithmetic", "division", "alias"],
    estimatedTimeMinutes: 3
  },

  // Subtopic 3: DISTINCT & Unique Values (IDs 61 to 65)
  {
    id: 61,
    title: "Distinct Functional Divisions Roster",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Beginner",
    problemStatement: "Organizational design is conducting an inventory of all operational departments that currently employ active personnel. Produce a deduplicated listing of all unique department names.",
    requirements: [
      "Retrieve unique department names from the Employees table.",
      "Ensure duplicate department names are removed from the result set."
    ],
    tableName: "Employees",
    hint: "Eliminate duplicate values from the output using the distinct projection keyword.",
    expectedSql: "SELECT DISTINCT department FROM Employees;",
    explanation: "The DISTINCT keyword de-duplicates result sets, keeping only single occurrences of unique values.",
    tags: ["distinct", "unique", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 62,
    title: "Corporate Office Footprint Identification",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Beginner",
    problemStatement: "Facilities and real estate planning is mapping corporate branch locations. Extract a list of all distinct cities where company employees are currently stationed.",
    requirements: [
      "Extract distinct city names from the Employees table.",
      "Ensure each office city appears exactly once."
    ],
    tableName: "Employees",
    hint: "Use distinct row projection on the city column to eliminate repeated locations.",
    expectedSql: "SELECT DISTINCT city FROM Employees;",
    explanation: "DISTINCT works on any scalar data type including strings and locations.",
    tags: ["distinct", "city", "unique"],
    estimatedTimeMinutes: 2
  },
  {
    id: 63,
    title: "Historical Hiring Cohort Years",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Beginner",
    problemStatement: "Talent acquisition is analyzing employee retention across historical hiring cycles. Find all unique calendar years in which active employees joined the company.",
    requirements: [
      "Select distinct joining years from the Employees table.",
      "Ensure each year appears only once in the final output."
    ],
    tableName: "Employees",
    hint: "Retrieve the distinct values present in the joining_year column.",
    expectedSql: "SELECT DISTINCT joining_year FROM Employees;",
    explanation: "DISTINCT on integer columns identifies the unique years of hiring cohorts.",
    tags: ["distinct", "temporal", "years"],
    estimatedTimeMinutes: 2
  },
  {
    id: 64,
    title: "Project Lifecycle Status Inventory",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Beginner",
    problemStatement: "Agile process auditors need to identify all workflow stages currently assigned to corporate projects. Retrieve all distinct operational status designations present in the project portfolio.",
    requirements: [
      "Query the Projects table.",
      "Return the unique set of status values without duplicates."
    ],
    tableName: "Projects",
    hint: "Apply distinct filtering to the status column in the Projects table.",
    expectedSql: "SELECT DISTINCT status FROM Projects;",
    explanation: "DISTINCT helps discover enum-like categories in business workflows.",
    tags: ["distinct", "status", "projects"],
    estimatedTimeMinutes: 2
  },
  {
    id: 65,
    title: "Departmental Branch Footprint Matrix",
    topic: "SQL Fundamentals",
    subtopic: "DISTINCT & Unique Values",
    difficulty: "Easy",
    problemStatement: "Workforce operations needs to understand which business units operate in which cities. Generate a deduplicated list of all unique department and city pairs represented in the workforce.",
    requirements: [
      "Project department and city from the Employees table.",
      "Ensure each unique combination of department and city appears only once.",
      "Preserve column order: `department`, `city`."
    ],
    tableName: "Employees",
    hint: "Apply the distinct keyword across multiple projected columns.",
    expectedSql: "SELECT DISTINCT department, city FROM Employees;",
    explanation: "When multiple columns follow DISTINCT, uniqueness is evaluated on the tuple of values.",
    tags: ["distinct", "multi-column", "combinations"],
    estimatedTimeMinutes: 3
  },

  // Subtopic 4: Arithmetic Calculations & Expressions (IDs 66 to 70)
  {
    id: 66,
    title: "Estimated Daily Wage Calculation",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Beginner",
    problemStatement: "Contract compliance requires an estimate of daily labor costs assuming a standard 30-day billing month. Display each employee's name and their calculated daily wage.",
    requirements: [
      "Select employee name (`emp_name`).",
      "Compute daily wage by dividing monthly salary by 30, aliasing the result as `daily_wage`."
    ],
    tableName: "Employees",
    hint: "Divide the salary column by 30 in the select clause and alias the result.",
    expectedSql: "SELECT emp_name, salary / 30 AS daily_wage FROM Employees;",
    explanation: "Mathematical operations in SQL support integer and floating-point division.",
    tags: ["arithmetic", "division", "daily-wage"],
    estimatedTimeMinutes: 3
  },
  {
    id: 67,
    title: "Proposed Cost-of-Living Salary Revision",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Easy",
    problemStatement: "The compensation committee is modeling a company-wide 10% cost-of-living salary adjustment. For each employee, display their name, current monthly salary, and projected revised salary reflecting a 10% increase.",
    requirements: [
      "Select employee name (`emp_name`) and current salary (`salary`).",
      "Calculate revised salary as 110% of current salary (multiplying by 1.10), aliased as `revised_salary`."
    ],
    tableName: "Employees",
    hint: "Multiply current salary by 1.10 to compute the adjusted compensation.",
    expectedSql: "SELECT emp_name, salary, salary * 1.10 AS revised_salary FROM Employees;",
    explanation: "Multiplying by 1.10 applies a percentage increase directly within SQL.",
    tags: ["arithmetic", "percentage", "hike"],
    estimatedTimeMinutes: 3
  },
  {
    id: 68,
    title: "Flat Retention Bonus Projection",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Beginner",
    problemStatement: "Human Resources is evaluating the budget impact of a flat 5,000 INR retention supplement added to each employee's monthly pay. Display each employee's name alongside their projected compensation with the increment.",
    requirements: [
      "Select employee name (`emp_name`).",
      "Add 5000 to monthly salary, aliasing the calculated result as `incremented_salary`."
    ],
    tableName: "Employees",
    hint: "Add 5000 to the salary column and alias the resulting expression.",
    expectedSql: "SELECT emp_name, salary + 5000 AS incremented_salary FROM Employees;",
    explanation: "Addition operators allow applying flat stipends or allowances.",
    tags: ["arithmetic", "addition", "salary"],
    estimatedTimeMinutes: 2
  },
  {
    id: 69,
    title: "Comprehensive Annual Package with Festive Bonus",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Easy",
    problemStatement: "Benefits planning models a total annual compensation package structured as 12 monthly salaries plus 2 additional months of festive bonuses (14 months total). Display each employee's name and their total 14-month package.",
    requirements: [
      "Select employee name (`emp_name`).",
      "Multiply monthly salary by 14, aliasing the total package as `total_annual_package`."
    ],
    tableName: "Employees",
    hint: "Calculate salary multiplied by 14 to reflect the 14-month compensation structure.",
    expectedSql: "SELECT emp_name, salary * 14 AS total_annual_package FROM Employees;",
    explanation: "Multiplication models realistic corporate compensation structures.",
    tags: ["arithmetic", "bonus", "compensation"],
    estimatedTimeMinutes: 3
  },
  {
    id: 70,
    title: "Usable Project Working Capital",
    topic: "SQL Fundamentals",
    subtopic: "Arithmetic Calculations & Expressions",
    difficulty: "Easy",
    problemStatement: "Financial risk governance mandates that 20% of every project budget be held back in a contingency reserve. For each corporate initiative, display the project name and the remaining 80% usable working capital.",
    requirements: [
      "Query the Projects table.",
      "Select project name (`project_name`).",
      "Calculate 80% of budget (multiplying budget by 0.80), aliasing the figure as `net_usable_budget`."
    ],
    tableName: "Projects",
    hint: "Multiply budget by 0.80 in your column projection to compute net usable funds.",
    expectedSql: "SELECT project_name, budget * 0.80 AS net_usable_budget FROM Projects;",
    explanation: "Floating point multiplication is commonly used for reserve deductions and financial modeling.",
    tags: ["arithmetic", "budget", "projects"],
    estimatedTimeMinutes: 3
  },

  // Subtopic 5: Literals & NULL Value Handling (IDs 71 to 75)
  {
    id: 71,
    title: "Legal Entity Corporate Tagging",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Beginner",
    problemStatement: "Legal compliance requires generating vendor reports where each staff record includes the formal corporate entity name. Display each employee's name alongside a constant column designating the corporate organization.",
    requirements: [
      "Select employee name (`emp_name`).",
      "Include a literal string column with the value 'SQL Sprint Corp', aliased as `organization`."
    ],
    tableName: "Employees",
    hint: "Add a string literal enclosed in single quotes to your select list with the required alias.",
    expectedSql: "SELECT emp_name, 'SQL Sprint Corp' AS organization FROM Employees;",
    explanation: "String literals enclosed in single quotes project constant values for every row in the result set.",
    tags: ["literal", "string", "constants"],
    estimatedTimeMinutes: 2
  },
  {
    id: 72,
    title: "Employment Classification Indicator",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Beginner",
    problemStatement: "HR payroll exports require an explicit employment classification label for benefits processing. Display employee name, department, and a static tag indicating full-time employment status.",
    requirements: [
      "Select employee name (`emp_name`) and department (`department`).",
      "Include a static string literal 'Full-Time' aliased as `employment_type`."
    ],
    tableName: "Employees",
    hint: "Project the static text 'Full-Time' alongside the employee name and department.",
    expectedSql: "SELECT emp_name, department, 'Full-Time' AS employment_type FROM Employees;",
    explanation: "Static classification labels are frequently used in union operations and export pipelines.",
    tags: ["literal", "employment-type", "constants"],
    estimatedTimeMinutes: 2
  },
  {
    id: 73,
    title: "Reviews Lacking Awarded Bonuses",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Easy",
    problemStatement: "Internal audit is reviewing annual performance appraisals where no financial incentive was allocated. Retrieve the review ID, employee ID, and performance rating for all evaluations where the bonus was not awarded.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Filter for evaluations where bonus is unassigned (NULL).",
      "Display review ID (`review_id`), employee ID (`emp_id`), and rating (`rating`)."
    ],
    tableName: "Performance_Reviews",
    hint: "Check for the absence of a value in the bonus column using the null verification operator.",
    expectedSql: "SELECT review_id, emp_id, rating FROM Performance_Reviews WHERE bonus IS NULL;",
    explanation: "In SQL, NULL signifies unknown or missing data and cannot be checked with '= NULL'. Use 'IS NULL'.",
    tags: ["null", "is-null", "performance-reviews"],
    estimatedTimeMinutes: 3
  },
  {
    id: 74,
    title: "Verified Performance Incentive Payouts",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Easy",
    problemStatement: "Payroll finance is preparing incentive disbursement files. Extract review records that have an approved, confirmed bonus payout, showing the review ID, employee ID, rating, and bonus amount.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Filter for evaluations that have a confirmed bonus value.",
      "Display `review_id`, `emp_id`, `rating`, and `bonus`."
    ],
    tableName: "Performance_Reviews",
    hint: "Filter for records where the bonus column contains an assigned, non-null value.",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL;",
    explanation: "The IS NOT NULL operator filters for populated values, ignoring rows with missing compensation.",
    tags: ["null", "is-not-null", "filtering"],
    estimatedTimeMinutes: 3
  },
  {
    id: 75,
    title: "Default Zero Baseline for Unassigned Bonuses",
    topic: "SQL Fundamentals",
    subtopic: "Literals & NULL Value Handling",
    difficulty: "Medium",
    problemStatement: "Executive performance dashboards require numeric calculations without missing values. Display review ID, employee ID, rating, and bonus for all reviews, substituting 0 whenever a bonus is unassigned.",
    requirements: [
      "Query the Performance_Reviews table.",
      "Display `review_id`, `emp_id`, `rating`.",
      "Replace unassigned bonus values with 0, aliasing the result as `final_bonus`."
    ],
    tableName: "Performance_Reviews",
    hint: "Use a null-coalescing function to provide a fallback value of 0 when bonus is null.",
    expectedSql: "SELECT review_id, emp_id, rating, COALESCE(bonus, 0) AS final_bonus FROM Performance_Reviews;",
    explanation: "COALESCE returns the first non-null argument, safely replacing missing bonus entries with numeric zero.",
    tags: ["coalesce", "null-handling", "expressions"],
    estimatedTimeMinutes: 4
  }
];
