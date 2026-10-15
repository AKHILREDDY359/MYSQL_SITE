import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';
import { TABLES_SCHEMA } from '../src/data/schema.js';
import { SEED_SQL } from '../src/data/seedData.js';

const RAW_QUESTIONS = [
  // --- Part A: WHERE and operators ---
  {
    id: 1,
    title: "Display all employees working in IT",
    part: "Part A: WHERE and operators",
    topic: "WHERE Clause",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display all details of employees who belong to the 'IT' department.",
    requirements: [
      "Select all columns from the Employees table.",
      "Filter rows where department is strictly 'IT'."
    ],
    tableName: "Employees",
    hint: "Use the WHERE clause with an equality operator: WHERE department = 'IT'",
    expectedSql: "SELECT * FROM Employees WHERE department = 'IT';",
    explanation: "The query filters the Employees table where the department attribute exactly matches the string 'IT'.",
    tags: ["where", "equality", "filtering"],
    prerequisites: "Basic SELECT syntax and WHERE clause"
  },
  {
    id: 2,
    title: "Display employees whose salary is greater than 50000",
    part: "Part A: WHERE and operators",
    topic: "Comparison Operators",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to retrieve all employees who earn a salary strictly greater than 50000.",
    requirements: [
      "Select all columns.",
      "Filter where salary > 50000."
    ],
    tableName: "Employees",
    hint: "Use the greater-than comparison operator (>): WHERE salary > 50000",
    expectedSql: "SELECT * FROM Employees WHERE salary > 50000;",
    explanation: "The > operator tests numeric values, returning records where salary exceeds 50000.",
    tags: ["comparison", "numeric", "where"],
    prerequisites: "Relational operators (> , < , >= , <=)"
  },
  {
    id: 3,
    title: "Display employees whose age is less than or equal to 25",
    part: "Part A: WHERE and operators",
    topic: "Comparison Operators",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display all details of employees whose age is 25 or younger.",
    requirements: [
      "Select all columns.",
      "Filter where age is less than or equal to 25."
    ],
    tableName: "Employees",
    hint: "Use the less-than-or-equal-to operator (<=): WHERE age <= 25",
    expectedSql: "SELECT * FROM Employees WHERE age <= 25;",
    explanation: "The <= operator includes employees who are exactly 25 or below.",
    tags: ["comparison", "numeric", "where"],
    prerequisites: "Comparison operators"
  },
  {
    id: 4,
    title: "Display employees working in HR who earn more than 30000",
    part: "Part A: WHERE and operators",
    topic: "Logical Operators (AND)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display all employees in the 'HR' department whose salary is strictly greater than 30000.",
    requirements: [
      "Select all columns.",
      "Both conditions must hold true: department is 'HR' and salary > 30000."
    ],
    tableName: "Employees",
    hint: "Combine the two filtering conditions using the AND keyword.",
    expectedSql: "SELECT * FROM Employees WHERE department = 'HR' AND salary > 30000;",
    explanation: "The AND operator ensures that only records satisfying both department = 'HR' and salary > 30000 are returned.",
    tags: ["and", "where", "multi-condition"],
    prerequisites: "Logical operators AND, OR"
  },
  {
    id: 5,
    title: "Display employees working in IT or Finance",
    part: "Part A: WHERE and operators",
    topic: "Logical Operators (OR)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to retrieve all employees who belong to either the 'IT' department or the 'Finance' department.",
    requirements: [
      "Select all columns.",
      "Match either department = 'IT' or department = 'Finance'."
    ],
    tableName: "Employees",
    hint: "Use the OR operator: WHERE department = 'IT' OR department = 'Finance'",
    expectedSql: "SELECT * FROM Employees WHERE department = 'IT' OR department = 'Finance';",
    explanation: "The OR operator evaluates to true if either condition is met.",
    tags: ["or", "where", "filtering"],
    prerequisites: "Boolean logic in SQL"
  },
  {
    id: 6,
    title: "Display employees whose salary is between 30000 and 60000, inclusive",
    part: "Part A: WHERE and operators",
    topic: "BETWEEN Operator",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display employees whose salary falls within the range 30000 to 60000 (inclusive of both boundaries).",
    requirements: [
      "Select all columns.",
      "Use BETWEEN or comparison operators covering 30000 and 60000."
    ],
    tableName: "Employees",
    hint: "The BETWEEN operator is inclusive: WHERE salary BETWEEN 30000 AND 60000",
    expectedSql: "SELECT * FROM Employees WHERE salary BETWEEN 30000 AND 60000;",
    explanation: "In SQL, `salary BETWEEN 30000 AND 60000` is equivalent to `salary >= 30000 AND salary <= 60000`.",
    tags: ["between", "range", "where"],
    prerequisites: "BETWEEN syntax and boundary inclusivity"
  },
  {
    id: 7,
    title: "Display employees belonging to IT, HR, or Sales using IN",
    part: "Part A: WHERE and operators",
    topic: "IN Operator",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display all employees who work in either 'IT', 'HR', or 'Sales' using the IN operator.",
    requirements: [
      "Select all columns.",
      "Use the IN operator with the list ('IT', 'HR', 'Sales')."
    ],
    tableName: "Employees",
    hint: "Syntax: WHERE department IN ('IT', 'HR', 'Sales')",
    expectedSql: "SELECT * FROM Employees WHERE department IN ('IT', 'HR', 'Sales');",
    explanation: "The IN operator checks if a value matches any value in a specified list, providing a concise alternative to chained OR conditions.",
    tags: ["in", "list-matching", "where"],
    prerequisites: "IN operator"
  },
  {
    id: 8,
    title: "Display employees living in Hyderabad whose salary is at least 40000",
    part: "Part A: WHERE and operators",
    topic: "Combined WHERE Filters",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to retrieve all employees who live in 'Hyderabad' and earn a salary of at least 40000 (>= 40000).",
    requirements: [
      "Select all columns.",
      "Condition 1: city = 'Hyderabad'.",
      "Condition 2: salary >= 40000."
    ],
    tableName: "Employees",
    hint: "WHERE city = 'Hyderabad' AND salary >= 40000",
    expectedSql: "SELECT * FROM Employees WHERE city = 'Hyderabad' AND salary >= 40000;",
    explanation: "Combines city text matching with a numeric >= comparison.",
    tags: ["where", "and", "filtering"],
    prerequisites: "AND conjunction"
  },
  {
    id: 9,
    title: "Display employees whose names start with A",
    part: "Part A: WHERE and operators",
    topic: "Pattern Matching (LIKE)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to find all employees whose employee name starts with the capital letter 'A'.",
    requirements: [
      "Select all columns.",
      "Use the LIKE operator with wildcard '%'.",
      "Pattern: 'A%'."
    ],
    tableName: "Employees",
    hint: "Use LIKE 'A%' where '%' matches any sequence of zero or more characters.",
    expectedSql: "SELECT * FROM Employees WHERE emp_name LIKE 'A%';",
    explanation: "The % wildcard represents zero, one, or multiple characters. 'A%' checks for names starting with A.",
    tags: ["like", "pattern-matching", "wildcards"],
    prerequisites: "LIKE operator and wildcards (%)"
  },
  {
    id: 10,
    title: "Display employees whose names end with a",
    part: "Part A: WHERE and operators",
    topic: "Pattern Matching (LIKE)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to find all employees whose name ends with the letter 'a' (or 'A').",
    requirements: [
      "Select all columns.",
      "Use the pattern '%a' with the LIKE operator."
    ],
    tableName: "Employees",
    hint: "Use LIKE '%a'. In standard SQL and SQLite, LIKE is case-insensitive for ASCII characters.",
    expectedSql: "SELECT * FROM Employees WHERE emp_name LIKE '%a';",
    explanation: "The '%a' pattern matches strings where the final character is 'a'.",
    tags: ["like", "pattern-matching", "wildcards"],
    prerequisites: "LIKE operator"
  },
  {
    id: 11,
    title: "Display employees whose names contain an",
    part: "Part A: WHERE and operators",
    topic: "Pattern Matching (LIKE)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to find all employees whose name contains the substring 'an' anywhere in the name.",
    requirements: [
      "Select all columns.",
      "Use the LIKE pattern '%an%'."
    ],
    tableName: "Employees",
    hint: "Surround 'an' with percent signs: WHERE emp_name LIKE '%an%'",
    expectedSql: "SELECT * FROM Employees WHERE emp_name LIKE '%an%';",
    explanation: "The '%an%' pattern matches any string having 'an' as a substring at the start, middle, or end.",
    tags: ["like", "substring", "wildcards"],
    prerequisites: "Wildcard search"
  },
  {
    id: 12,
    title: "Display employees whose salary is not equal to 40000",
    part: "Part A: WHERE and operators",
    topic: "Not Equal Operator",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display all employees whose salary is not equal to 40000.",
    requirements: [
      "Select all columns.",
      "Use != or <> to exclude records with salary = 40000."
    ],
    tableName: "Employees",
    hint: "WHERE salary != 40000 (or WHERE salary <> 40000)",
    expectedSql: "SELECT * FROM Employees WHERE salary != 40000;",
    explanation: "The != and <> operators both represent inequality in modern SQL.",
    tags: ["comparison", "inequality", "where"],
    prerequisites: "Relational operators"
  },

  // --- Part B: Combined conditions and operators ---
  {
    id: 13,
    title: "Display employees aged between 25 and 30 who work in IT",
    part: "Part B: Combined conditions and operators",
    topic: "Multiple Conditions",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display all employees whose age is between 25 and 30 (inclusive) and who work in the 'IT' department.",
    requirements: [
      "Select all columns.",
      "Age must be in [25, 30].",
      "Department must be 'IT'."
    ],
    tableName: "Employees",
    hint: "Combine BETWEEN with AND: WHERE age BETWEEN 25 AND 30 AND department = 'IT'",
    expectedSql: "SELECT * FROM Employees WHERE age BETWEEN 25 AND 30 AND department = 'IT';",
    explanation: "Combines range filtering on age with an exact string match on department using AND.",
    tags: ["between", "and", "where"],
    prerequisites: "Combining AND with BETWEEN"
  },
  {
    id: 14,
    title: "Display employees who do not work in HR",
    part: "Part B: Combined conditions and operators",
    topic: "NOT / Inequality",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to find all employees who do not belong to the 'HR' department.",
    requirements: [
      "Select all columns.",
      "Exclude employees in the HR department."
    ],
    tableName: "Employees",
    hint: "WHERE department != 'HR' (or WHERE department <> 'HR' or WHERE NOT department = 'HR')",
    expectedSql: "SELECT * FROM Employees WHERE department != 'HR';",
    explanation: "Filters out records where department equals 'HR'.",
    tags: ["not", "inequality", "filtering"],
    prerequisites: "Negation in SQL"
  },
  {
    id: 15,
    title: "Display employees living in Chennai or Bengaluru whose salary exceeds 50000",
    part: "Part B: Combined conditions and operators",
    topic: "Operator Precedence",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to retrieve all employees who live in either 'Chennai' or 'Bengaluru' AND have a salary strictly greater than 50000.",
    requirements: [
      "Select all columns.",
      "City must be Chennai or Bengaluru.",
      "Salary must be > 50000.",
      "Mind operator precedence using parentheses or IN."
    ],
    tableName: "Employees",
    hint: "Use parentheses: WHERE (city = 'Chennai' OR city = 'Bengaluru') AND salary > 50000, or WHERE city IN ('Chennai', 'Bengaluru') AND salary > 50000",
    expectedSql: "SELECT * FROM Employees WHERE (city = 'Chennai' OR city = 'Bengaluru') AND salary > 50000;",
    explanation: "AND has higher precedence than OR. Grouping the OR condition inside parentheses ensures the salary threshold applies to both cities.",
    tags: ["precedence", "parentheses", "and-or"],
    prerequisites: "Operator precedence: AND before OR"
  },
  {
    id: 16,
    title: "Display employees with at least 5 years of experience and salary below 70000",
    part: "Part B: Combined conditions and operators",
    topic: "Multiple Numeric Conditions",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display employees who have at least 5 years of experience (experience >= 5) and earn a salary less than 70000 (salary < 70000).",
    requirements: [
      "Select all columns.",
      "experience >= 5 AND salary < 70000."
    ],
    tableName: "Employees",
    hint: "WHERE experience >= 5 AND salary < 70000",
    expectedSql: "SELECT * FROM Employees WHERE experience >= 5 AND salary < 70000;",
    explanation: "Filters records using two simultaneous numeric inequalities joined by AND.",
    tags: ["numeric", "and", "where"],
    prerequisites: "Comparison operators"
  },
  {
    id: 17,
    title: "Display employees who joined in 2022, 2023, or 2024 using IN",
    part: "Part B: Combined conditions and operators",
    topic: "IN with Numbers",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display employees who joined the company in the years 2022, 2023, or 2024 using the IN operator.",
    requirements: [
      "Select all columns.",
      "Use joining_year IN (2022, 2023, 2024)."
    ],
    tableName: "Employees",
    hint: "WHERE joining_year IN (2022, 2023, 2024)",
    expectedSql: "SELECT * FROM Employees WHERE joining_year IN (2022, 2023, 2024);",
    explanation: "The IN operator checks membership against a set of integer values.",
    tags: ["in", "numeric-list", "filtering"],
    prerequisites: "IN operator"
  },
  {
    id: 18,
    title: "Display employees whose names contain exactly four characters using LIKE",
    part: "Part B: Combined conditions and operators",
    topic: "Pattern Matching (Underscore Wildcard)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display employees whose emp_name is exactly 4 characters long using the LIKE operator with underscore (_) wildcards.",
    requirements: [
      "Select all columns.",
      "Use LIKE with exactly four underscore characters: '____'."
    ],
    tableName: "Employees",
    hint: "Each underscore `_` matches exactly one character. Use 4 underscores: LIKE '____'",
    expectedSql: "SELECT * FROM Employees WHERE emp_name LIKE '____';",
    explanation: "In SQL LIKE clauses, the underscore character `_` represents exactly one single character. Four underscores match strings of length 4.",
    tags: ["like", "wildcards", "underscore"],
    prerequisites: "Single-character wildcard (_)"
  },
  {
    id: 19,
    title: "Display employees whose salary is outside the range 30000 to 60000",
    part: "Part B: Combined conditions and operators",
    topic: "NOT BETWEEN / Boundary Conditions",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to find employees whose salary is outside the range 30000 to 60000 (i.e. strictly less than 30000 or strictly greater than 60000).",
    requirements: [
      "Select all columns.",
      "Exclude the range [30000, 60000]."
    ],
    tableName: "Employees",
    hint: "WHERE salary NOT BETWEEN 30000 AND 60000 (or WHERE salary < 30000 OR salary > 60000)",
    expectedSql: "SELECT * FROM Employees WHERE salary NOT BETWEEN 30000 AND 60000;",
    explanation: "NOT BETWEEN excludes values that fall inside the inclusive interval [30000, 60000].",
    tags: ["not-between", "range", "negation"],
    prerequisites: "NOT BETWEEN operator"
  },
  {
    id: 20,
    title: "Display employees who work in IT or Sales but do not live in Chennai",
    part: "Part B: Combined conditions and operators",
    topic: "Complex Filtering",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display employees working in either 'IT' or 'Sales' who do not reside in 'Chennai'.",
    requirements: [
      "Select all columns.",
      "department IN ('IT', 'Sales') (or department = 'IT' OR department = 'Sales').",
      "city != 'Chennai'."
    ],
    tableName: "Employees",
    hint: "WHERE department IN ('IT', 'Sales') AND city != 'Chennai'",
    expectedSql: "SELECT * FROM Employees WHERE department IN ('IT', 'Sales') AND city != 'Chennai';",
    explanation: "Combines set inclusion on department with inequality on city.",
    tags: ["in", "and", "inequality", "compound"],
    prerequisites: "Combining boolean operators"
  },

  // --- Part C: Aggregate functions ---
  {
    id: 21,
    title: "Count the total number of employees",
    part: "Part C: Aggregate functions",
    topic: "COUNT()",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to count the total number of employees in the Employees table.",
    requirements: [
      "Use COUNT(*).",
      "Provide an alias such as total_employees."
    ],
    tableName: "Employees",
    hint: "SELECT COUNT(*) AS total_employees FROM Employees;",
    expectedSql: "SELECT COUNT(*) AS total_employees FROM Employees;",
    explanation: "COUNT(*) returns the total number of rows in the table, including rows with NULL values.",
    tags: ["aggregate", "count"],
    prerequisites: "SQL aggregate functions"
  },
  {
    id: 22,
    title: "Calculate the total salary of all employees",
    part: "Part C: Aggregate functions",
    topic: "SUM()",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to calculate the sum of salaries of all employees.",
    requirements: [
      "Use the SUM() aggregate function on the salary column.",
      "Provide an alias such as total_salary."
    ],
    tableName: "Employees",
    hint: "SELECT SUM(salary) AS total_salary FROM Employees;",
    expectedSql: "SELECT SUM(salary) AS total_salary FROM Employees;",
    explanation: "SUM(salary) computes the arithmetic sum of all values in the salary column.",
    tags: ["aggregate", "sum"],
    prerequisites: "SUM function"
  },
  {
    id: 23,
    title: "Calculate the average salary of all employees",
    part: "Part C: Aggregate functions",
    topic: "AVG()",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to compute the average salary of all employees.",
    requirements: [
      "Use the AVG() aggregate function on salary.",
      "Provide an alias such as average_salary."
    ],
    tableName: "Employees",
    hint: "SELECT AVG(salary) AS average_salary FROM Employees;",
    expectedSql: "SELECT AVG(salary) AS average_salary FROM Employees;",
    explanation: "AVG(salary) computes the mean of the salary values.",
    tags: ["aggregate", "avg"],
    prerequisites: "AVG function"
  },
  {
    id: 24,
    title: "Find the highest salary",
    part: "Part C: Aggregate functions",
    topic: "MAX()",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to find the maximum salary among all employees.",
    requirements: [
      "Use the MAX() aggregate function on salary.",
      "Provide an alias such as max_salary."
    ],
    tableName: "Employees",
    hint: "SELECT MAX(salary) AS max_salary FROM Employees;",
    expectedSql: "SELECT MAX(salary) AS max_salary FROM Employees;",
    explanation: "MAX(salary) returns the highest value present in the salary column.",
    tags: ["aggregate", "max"],
    prerequisites: "MAX function"
  },
  {
    id: 25,
    title: "Find the lowest salary",
    part: "Part C: Aggregate functions",
    topic: "MIN()",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to find the lowest salary among all employees.",
    requirements: [
      "Use the MIN() aggregate function on salary.",
      "Provide an alias such as min_salary."
    ],
    tableName: "Employees",
    hint: "SELECT MIN(salary) AS min_salary FROM Employees;",
    expectedSql: "SELECT MIN(salary) AS min_salary FROM Employees;",
    explanation: "MIN(salary) returns the minimum value from the salary column.",
    tags: ["aggregate", "min"],
    prerequisites: "MIN function"
  },
  {
    id: 26,
    title: "Count employees working in IT",
    part: "Part C: Aggregate functions",
    topic: "COUNT with WHERE",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to count how many employees work in the 'IT' department.",
    requirements: [
      "Use COUNT(*).",
      "Filter using WHERE department = 'IT'."
    ],
    tableName: "Employees",
    hint: "SELECT COUNT(*) AS it_employees_count FROM Employees WHERE department = 'IT';",
    expectedSql: "SELECT COUNT(*) AS it_employees_count FROM Employees WHERE department = 'IT';",
    explanation: "The WHERE clause filters rows prior to the COUNT aggregation.",
    tags: ["count", "where", "aggregate"],
    prerequisites: "Combining WHERE with COUNT"
  },
  {
    id: 27,
    title: "Find the average age of all employees",
    part: "Part C: Aggregate functions",
    topic: "AVG()",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to calculate the average age of all employees.",
    requirements: [
      "Use AVG(age).",
      "Provide an alias such as average_age."
    ],
    tableName: "Employees",
    hint: "SELECT AVG(age) AS average_age FROM Employees;",
    expectedSql: "SELECT AVG(age) AS average_age FROM Employees;",
    explanation: "Calculates the arithmetic mean of the age column across all employees.",
    tags: ["avg", "aggregate"],
    prerequisites: "AVG function"
  },
  {
    id: 28,
    title: "Calculate the total salary of employees living in Hyderabad",
    part: "Part C: Aggregate functions",
    topic: "SUM with WHERE",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to calculate the sum of salaries of all employees residing in 'Hyderabad'.",
    requirements: [
      "Use SUM(salary).",
      "Filter for city = 'Hyderabad'."
    ],
    tableName: "Employees",
    hint: "SELECT SUM(salary) AS total_hyderabad_salary FROM Employees WHERE city = 'Hyderabad';",
    expectedSql: "SELECT SUM(salary) AS total_hyderabad_salary FROM Employees WHERE city = 'Hyderabad';",
    explanation: "Filters for employees based in Hyderabad and sums their compensation.",
    tags: ["sum", "where", "aggregate"],
    prerequisites: "SUM with WHERE filter"
  },
  {
    id: 29,
    title: "Find the highest salary among employees with at least 5 years of experience",
    part: "Part C: Aggregate functions",
    topic: "MAX with WHERE",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to find the maximum salary among employees who possess at least 5 years of experience (experience >= 5).",
    requirements: [
      "Use MAX(salary).",
      "Filter with experience >= 5."
    ],
    tableName: "Employees",
    hint: "SELECT MAX(salary) AS max_salary FROM Employees WHERE experience >= 5;",
    expectedSql: "SELECT MAX(salary) AS max_salary FROM Employees WHERE experience >= 5;",
    explanation: "The WHERE clause restricts the set of rows to senior employees before finding the maximum salary.",
    tags: ["max", "where", "aggregate"],
    prerequisites: "MAX with filter"
  },
  {
    id: 30,
    title: "Count employees earning more than 50000",
    part: "Part C: Aggregate functions",
    topic: "COUNT with Numeric Condition",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to count how many employees earn a salary strictly greater than 50000.",
    requirements: [
      "Use COUNT(*).",
      "Filter with salary > 50000."
    ],
    tableName: "Employees",
    hint: "SELECT COUNT(*) AS count_high_earners FROM Employees WHERE salary > 50000;",
    expectedSql: "SELECT COUNT(*) AS count_high_earners FROM Employees WHERE salary > 50000;",
    explanation: "Restricts the count to rows where salary exceeds 50000.",
    tags: ["count", "where", "numeric"],
    prerequisites: "COUNT function"
  },

  // --- Part D: GROUP BY ---
  {
    id: 31,
    title: "Display the number of employees in each department",
    part: "Part D: GROUP BY",
    topic: "GROUP BY with COUNT",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display each department name along with the total count of employees working in that department.",
    requirements: [
      "Select department and COUNT(*).",
      "Group by department."
    ],
    tableName: "Employees",
    hint: "SELECT department, COUNT(*) AS employee_count FROM Employees GROUP BY department;",
    expectedSql: "SELECT department, COUNT(*) AS employee_count FROM Employees GROUP BY department;",
    explanation: "GROUP BY department groups records by their department, and COUNT(*) counts the rows in each group.",
    tags: ["group-by", "count", "aggregation"],
    prerequisites: "GROUP BY clause"
  },
  {
    id: 32,
    title: "Display the average salary of each department",
    part: "Part D: GROUP BY",
    topic: "GROUP BY with AVG",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display each department alongside the average salary of employees in that department.",
    requirements: [
      "Select department and AVG(salary).",
      "Group by department."
    ],
    tableName: "Employees",
    hint: "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department;",
    expectedSql: "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department;",
    explanation: "Groups records by department and computes the average salary per department group.",
    tags: ["group-by", "avg", "salary"],
    prerequisites: "GROUP BY with AVG"
  },
  {
    id: 33,
    title: "Display the total salary paid by each department",
    part: "Part D: GROUP BY",
    topic: "GROUP BY with SUM",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display each department along with the sum of salaries of all employees in that department.",
    requirements: [
      "Select department and SUM(salary).",
      "Group by department."
    ],
    tableName: "Employees",
    hint: "SELECT department, SUM(salary) AS total_salary FROM Employees GROUP BY department;",
    expectedSql: "SELECT department, SUM(salary) AS total_salary FROM Employees GROUP BY department;",
    explanation: "Aggregates total salary expenditure grouped by individual departments.",
    tags: ["group-by", "sum"],
    prerequisites: "GROUP BY with SUM"
  },
  {
    id: 34,
    title: "Display the highest salary in each department",
    part: "Part D: GROUP BY",
    topic: "GROUP BY with MAX",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display each department name and the highest salary earned within that department.",
    requirements: [
      "Select department and MAX(salary).",
      "Group by department."
    ],
    tableName: "Employees",
    hint: "SELECT department, MAX(salary) AS max_salary FROM Employees GROUP BY department;",
    expectedSql: "SELECT department, MAX(salary) AS max_salary FROM Employees GROUP BY department;",
    explanation: "Finds the peak compensation per department category.",
    tags: ["group-by", "max"],
    prerequisites: "GROUP BY with MAX"
  },
  {
    id: 35,
    title: "Display the lowest salary in each department",
    part: "Part D: GROUP BY",
    topic: "GROUP BY with MIN",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display each department along with the lowest salary within that department.",
    requirements: [
      "Select department and MIN(salary).",
      "Group by department."
    ],
    tableName: "Employees",
    hint: "SELECT department, MIN(salary) AS min_salary FROM Employees GROUP BY department;",
    expectedSql: "SELECT department, MIN(salary) AS min_salary FROM Employees GROUP BY department;",
    explanation: "Finds the minimum compensation earned in each department group.",
    tags: ["group-by", "min"],
    prerequisites: "GROUP BY with MIN"
  },
  {
    id: 36,
    title: "Display the number of employees in each city",
    part: "Part D: GROUP BY",
    topic: "GROUP BY by Column",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to show each city and the total number of employees residing in that city.",
    requirements: [
      "Select city and COUNT(*).",
      "Group by city."
    ],
    tableName: "Employees",
    hint: "SELECT city, COUNT(*) AS employee_count FROM Employees GROUP BY city;",
    expectedSql: "SELECT city, COUNT(*) AS employee_count FROM Employees GROUP BY city;",
    explanation: "Partitions the data by city and counts members belonging to each location.",
    tags: ["group-by", "count", "city"],
    prerequisites: "GROUP BY fundamentals"
  },
  {
    id: 37,
    title: "Display the average salary for each city",
    part: "Part D: GROUP BY",
    topic: "GROUP BY with AVG",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to calculate the average salary of employees in each city.",
    requirements: [
      "Select city and AVG(salary).",
      "Group by city."
    ],
    tableName: "Employees",
    hint: "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city;",
    expectedSql: "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city;",
    explanation: "Computes location-based compensation averages by grouping on city.",
    tags: ["group-by", "avg", "city"],
    prerequisites: "GROUP BY with aggregation"
  },
  {
    id: 38,
    title: "Display the number of employees for each joining year",
    part: "Part D: GROUP BY",
    topic: "GROUP BY on Temporal Column",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display each joining year and how many employees joined in that year.",
    requirements: [
      "Select joining_year and COUNT(*).",
      "Group by joining_year."
    ],
    tableName: "Employees",
    hint: "SELECT joining_year, COUNT(*) AS employee_count FROM Employees GROUP BY joining_year;",
    expectedSql: "SELECT joining_year, COUNT(*) AS employee_count FROM Employees GROUP BY joining_year;",
    explanation: "Groups employee records by their year of hire.",
    tags: ["group-by", "count", "joining_year"],
    prerequisites: "GROUP BY on numeric attributes"
  },

  // --- Part E: HAVING ---
  {
    id: 39,
    title: "Display departments having more than 3 employees",
    part: "Part E: HAVING",
    topic: "HAVING with COUNT",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display departments that have strictly more than 3 employees.",
    requirements: [
      "Select department and employee count.",
      "Group by department.",
      "Filter aggregated results using HAVING COUNT(*) > 3."
    ],
    tableName: "Employees",
    hint: "Use HAVING to filter groups: GROUP BY department HAVING COUNT(*) > 3",
    expectedSql: "SELECT department, COUNT(*) AS employee_count FROM Employees GROUP BY department HAVING COUNT(*) > 3;",
    explanation: "HAVING filters groups after the GROUP BY operation, unlike WHERE which filters individual rows before grouping.",
    tags: ["having", "group-by", "count"],
    prerequisites: "Difference between WHERE and HAVING"
  },
  {
    id: 40,
    title: "Display departments whose average salary is greater than 50000",
    part: "Part E: HAVING",
    topic: "HAVING with AVG",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display departments where the average employee salary is strictly greater than 50000.",
    requirements: [
      "Select department and AVG(salary).",
      "Group by department.",
      "Use HAVING AVG(salary) > 50000."
    ],
    tableName: "Employees",
    hint: "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING AVG(salary) > 50000;",
    expectedSql: "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING AVG(salary) > 50000;",
    explanation: "Filters the department groups to only include those where the calculated average salary exceeds 50000.",
    tags: ["having", "avg", "group-by"],
    prerequisites: "HAVING with aggregate functions"
  },
  {
    id: 41,
    title: "Display departments whose total salary exceeds 150000",
    part: "Part E: HAVING",
    topic: "HAVING with SUM",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to find departments whose cumulative salary expense is strictly greater than 150000.",
    requirements: [
      "Select department and SUM(salary).",
      "Group by department.",
      "Apply HAVING SUM(salary) > 150000."
    ],
    tableName: "Employees",
    hint: "SELECT department, SUM(salary) AS total_salary FROM Employees GROUP BY department HAVING SUM(salary) > 150000;",
    expectedSql: "SELECT department, SUM(salary) AS total_salary FROM Employees GROUP BY department HAVING SUM(salary) > 150000;",
    explanation: "Groups by department and restricts the output to groups where the sum of salaries exceeds 150000.",
    tags: ["having", "sum", "group-by"],
    prerequisites: "HAVING clause"
  },
  {
    id: 42,
    title: "Display departments whose highest salary is at least 70000",
    part: "Part E: HAVING",
    topic: "HAVING with MAX",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display departments whose highest salary is at least 70000 (>= 70000).",
    requirements: [
      "Select department and MAX(salary).",
      "Group by department.",
      "Apply HAVING MAX(salary) >= 70000."
    ],
    tableName: "Employees",
    hint: "SELECT department, MAX(salary) AS max_salary FROM Employees GROUP BY department HAVING MAX(salary) >= 70000;",
    expectedSql: "SELECT department, MAX(salary) AS max_salary FROM Employees GROUP BY department HAVING MAX(salary) >= 70000;",
    explanation: "Filters out departments where the top earner's compensation is below 70000.",
    tags: ["having", "max", "group-by"],
    prerequisites: "HAVING with MAX"
  },
  {
    id: 43,
    title: "Display cities having at least 4 employees",
    part: "Part E: HAVING",
    topic: "HAVING on Group Count",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display all cities that have at least 4 employees (COUNT(*) >= 4).",
    requirements: [
      "Select city and COUNT(*).",
      "Group by city.",
      "HAVING COUNT(*) >= 4."
    ],
    tableName: "Employees",
    hint: "SELECT city, COUNT(*) AS employee_count FROM Employees GROUP BY city HAVING COUNT(*) >= 4;",
    expectedSql: "SELECT city, COUNT(*) AS employee_count FROM Employees GROUP BY city HAVING COUNT(*) >= 4;",
    explanation: "Groups employees by city and retains only cities with 4 or more assigned employees.",
    tags: ["having", "count", "city"],
    prerequisites: "HAVING with COUNT"
  },
  {
    id: 44,
    title: "Display departments whose average salary is below 45000",
    part: "Part E: HAVING",
    topic: "HAVING with Lower Bound",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display departments with an average salary strictly below 45000.",
    requirements: [
      "Select department and AVG(salary).",
      "Group by department.",
      "HAVING AVG(salary) < 45000."
    ],
    tableName: "Employees",
    hint: "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING AVG(salary) < 45000;",
    expectedSql: "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING AVG(salary) < 45000;",
    explanation: "Identifies lower-compensating departments by evaluating group averages.",
    tags: ["having", "avg", "salary"],
    prerequisites: "HAVING filters"
  },
  {
    id: 45,
    title: "Display departments with more than 2 employees and an average salary above 40000",
    part: "Part E: HAVING",
    topic: "HAVING with Multiple Conditions",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display departments that have more than 2 employees (COUNT(*) > 2) AND have an average salary above 40000 (AVG(salary) > 40000).",
    requirements: [
      "Select department, COUNT(*), and AVG(salary).",
      "Group by department.",
      "Combine two aggregate filters in HAVING using AND."
    ],
    tableName: "Employees",
    hint: "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) > 2 AND AVG(salary) > 40000;",
    expectedSql: "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) > 2 AND AVG(salary) > 40000;",
    explanation: "Demonstrates combining multiple aggregate criteria in a single HAVING clause using AND.",
    tags: ["having", "multi-condition", "count", "avg"],
    prerequisites: "Logical operators in HAVING"
  },

  // --- Part F: ORDER BY and mixed interview questions ---
  {
    id: 46,
    title: "Display all employees ordered by salary from highest to lowest",
    part: "Part F: ORDER BY and mixed interview questions",
    topic: "ORDER BY DESC",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display all employees, ordered by their salary in descending order (highest salary first).",
    requirements: [
      "Select all columns.",
      "Order by salary DESC.",
      "Preserve order in output."
    ],
    tableName: "Employees",
    hint: "Use ORDER BY salary DESC",
    expectedSql: "SELECT * FROM Employees ORDER BY salary DESC;",
    explanation: "ORDER BY salary DESC sorts the result set such that the highest compensation appears at the top.",
    tags: ["order-by", "desc", "sorting"],
    prerequisites: "ORDER BY syntax and DESC keyword",
    requiresOrder: true
  },
  {
    id: 47,
    title: "Display employees ordered by age from youngest to oldest",
    part: "Part F: ORDER BY and mixed interview questions",
    topic: "ORDER BY ASC",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display all employees sorted by age in ascending order (youngest first).",
    requirements: [
      "Select all columns.",
      "Order by age ASC (or default order by age).",
      "Preserve ascending order."
    ],
    tableName: "Employees",
    hint: "Use ORDER BY age ASC",
    expectedSql: "SELECT * FROM Employees ORDER BY age ASC;",
    explanation: "ORDER BY age ASC sorts rows from smallest age to largest age.",
    tags: ["order-by", "asc", "sorting"],
    prerequisites: "ORDER BY ASC",
    requiresOrder: true
  },
  {
    id: 48,
    title: "Sort employees by department alphabetically and then salary in descending order",
    part: "Part F: ORDER BY and mixed interview questions",
    topic: "Multi-Column ORDER BY",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display all employees sorted primarily by department alphabetically (A to Z), and secondarily by salary in descending order within each department.",
    requirements: [
      "Select all columns.",
      "Primary sort: department ASC.",
      "Secondary sort: salary DESC."
    ],
    tableName: "Employees",
    hint: "Use ORDER BY department ASC, salary DESC",
    expectedSql: "SELECT * FROM Employees ORDER BY department ASC, salary DESC;",
    explanation: "Multi-column sorting evaluates the first key; ties in department are broken by the second key (salary in descending order).",
    tags: ["order-by", "multi-column", "sorting"],
    prerequisites: "Multi-column sorting",
    requiresOrder: true
  },
  {
    id: 49,
    title: "Display the three highest-paid employees",
    part: "Part F: ORDER BY and mixed interview questions",
    topic: "LIMIT with ORDER BY",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display the details of the top 3 highest-earning employees in the company.",
    requirements: [
      "Select all columns.",
      "Sort by salary DESC.",
      "Restrict the output to 3 records using LIMIT 3."
    ],
    tableName: "Employees",
    hint: "SELECT * FROM Employees ORDER BY salary DESC LIMIT 3;",
    expectedSql: "SELECT * FROM Employees ORDER BY salary DESC LIMIT 3;",
    explanation: "Combining ORDER BY salary DESC with LIMIT 3 extracts the top three records by salary.",
    tags: ["limit", "order-by", "top-n"],
    prerequisites: "LIMIT clause and Top-N queries",
    requiresOrder: true
  },
  {
    id: 50,
    title: "Display department employee count and average salary for large departments ordered by average salary",
    part: "Part F: ORDER BY and mixed interview questions",
    topic: "Comprehensive Query (GROUP BY + HAVING + ORDER BY)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display each department's name, employee count, and average salary. Keep only departments with at least 3 employees (COUNT(*) >= 3), and sort the final output by average salary from highest to lowest.",
    requirements: [
      "Select department, COUNT(*), and AVG(salary).",
      "Group by department.",
      "Filter with HAVING COUNT(*) >= 3.",
      "Order by average salary descending (ORDER BY avg_salary DESC or AVG(salary) DESC)."
    ],
    tableName: "Employees",
    hint: "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) >= 3 ORDER BY avg_salary DESC;",
    expectedSql: "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) >= 3 ORDER BY avg_salary DESC;",
    explanation: "This classic interview question tests the complete SQL query execution lifecycle: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY.",
    tags: ["group-by", "having", "order-by", "mixed", "interview-classic"],
    prerequisites: "Full SQL clause lifecycle: FROM, GROUP BY, HAVING, SELECT, ORDER BY",
    requiresOrder: true
  }
];

async function generate() {
  const SQL = await initSqlJs();
  const db = new SQL.Database();
  for (const table of TABLES_SCHEMA) {
    db.run(table.createSql);
  }
  db.run(SEED_SQL);

  console.log(`Processing ${RAW_QUESTIONS.length} questions...`);

  const enrichedQuestions = [];

  for (const q of RAW_QUESTIONS) {
    try {
      const res = db.exec(q.expectedSql);
      if (!res || res.length === 0) {
        throw new Error(`Query for Question ${q.id} returned no result set!`);
      }
      const { columns, values } = res[0];
      
      enrichedQuestions.push({
        ...q,
        expectedOutput: {
          columns,
          values,
          rowCount: values.length
        }
      });
      console.log(`✓ Q${q.id.toString().padStart(2, '0')}: [${q.expectedSql}] -> ${values.length} rows, ${columns.length} cols`);
    } catch (err) {
      console.error(`✗ Error executing Q${q.id}:`, err);
      process.exit(1);
    }
  }

  const fileContent = `/**
 * Question Bank containing exactly 50 interview practice questions (Parts A - F).
 * Expected outputs are programmatically verified and generated against the initialized database.
 */

export const QUESTION_TOPICS = [
  "Part A: WHERE and operators",
  "Part B: Combined conditions and operators",
  "Part C: Aggregate functions",
  "Part D: GROUP BY",
  "Part E: HAVING",
  "Part F: ORDER BY and mixed interview questions"
];

export const QUESTIONS = ${JSON.stringify(enrichedQuestions, null, 2)};
`;

  const outputPath = path.resolve('./src/data/questionBank.js');
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`Successfully generated questionBank.js with all 50 questions at ${outputPath}!`);
}

generate().catch(console.error);
