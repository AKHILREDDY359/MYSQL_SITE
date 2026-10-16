/**
 * Question Bank containing exactly 375 verified interview practice questions.
 * Preserves the original 50 questions (IDs 1–50), adds 250 curriculum questions
 * across 8 core topics, includes 50 Common Logic-Based SQL Interview Questions (IDs 301–350),
 * and features 25 dedicated CASE Expressions challenges (IDs 351–375),
 * all verified by live SQL execution against SQL.js.
 *
 * Generated automatically by scripts/buildAndVerifyQuestionBank.js
 */

import { DDL_DML_QUESTIONS, DDL_DML_TOPICS } from './ddlDmlQuestions.js';

export const QUESTION_TOPICS = [
  "SQL Fundamentals",
  "WHERE & Operators",
  "Sorting & Limiting",
  "Aggregate Functions",
  "GROUP BY",
  "HAVING",
  "SQL JOINs",
  "Subqueries",
  "CASE Expressions",
  "Interview Ready Questions",
  ...DDL_DML_TOPICS
];

const BASE_QUESTIONS = [
  {
    "id": 1,
    "title": "Identify Technical Department Personnel",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "The engineering director requires a complete personnel roster for the Information Technology division. Extract all employee records for staff members assigned to the IT department.",
    "requirements": [
      "Include all employee profile fields in the output.",
      "Limit the records strictly to staff currently working in the 'IT' department."
    ],
    "tableName": "Employees",
    "hint": "Filter the records by comparing the department column to the string 'IT'.",
    "expectedSql": "SELECT * FROM Employees WHERE department = 'IT';",
    "explanation": "The query filters the Employees table where the department attribute exactly matches the string 'IT'.",
    "tags": [
      "where",
      "equality",
      "filtering"
    ],
    "prerequisites": "Basic SELECT syntax and WHERE clause",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ]
      ],
      "rowCount": 5
    },
    "subtopic": "Basic Filtering & Comparisons"
  },
  {
    "id": 2,
    "title": "High-Compensation Workforce Audit",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "The executive compensation committee is reviewing senior payroll across all departments. Generate a report of all employees whose current annual salary strictly exceeds 50,000.",
    "requirements": [
      "Include all employee attributes in the final result.",
      "Filter for staff members earning strictly more than 50,000."
    ],
    "tableName": "Employees",
    "hint": "Use a comparison operator to test whether the salary value exceeds 50000.",
    "expectedSql": "SELECT * FROM Employees WHERE salary > 50000;",
    "explanation": "The > operator tests numeric values, returning records where salary exceeds 50000.",
    "tags": [
      "comparison",
      "numeric",
      "where"
    ],
    "prerequisites": "Relational operators (> , < , >= , <=)",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ]
      ],
      "rowCount": 10
    },
    "subtopic": "Basic Filtering & Comparisons"
  },
  {
    "id": 3,
    "title": "Early-Career Talent Roster",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "The human resources development team is organizing a mentorship cohort targeted at junior professionals. Retrieve all details for employees who are 25 years old or younger.",
    "requirements": [
      "Display all available employee fields.",
      "Filter for employees whose age does not exceed 25 years."
    ],
    "tableName": "Employees",
    "hint": "Use a comparison operator that includes values up to and including 25.",
    "expectedSql": "SELECT * FROM Employees WHERE age <= 25;",
    "explanation": "The <= operator includes employees who are exactly 25 or below.",
    "tags": [
      "comparison",
      "numeric",
      "where"
    ],
    "prerequisites": "Comparison operators",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          118,
          "Pooja",
          22,
          "HR",
          27000,
          1,
          "Vijayawada",
          2025
        ]
      ],
      "rowCount": 6
    },
    "subtopic": "Basic Filtering & Comparisons"
  },
  {
    "id": 4,
    "title": "Human Resources Senior Compensation Review",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Internal audit is reviewing operational spending within human resources. Find all personnel within the HR department who receive a salary strictly above 30,000.",
    "requirements": [
      "Retrieve full employee details across all columns.",
      "Satisfy both business criteria: assigned to the 'HR' department and earning more than 30,000."
    ],
    "tableName": "Employees",
    "hint": "Combine the department filter and salary condition so that both must evaluate to true.",
    "expectedSql": "SELECT * FROM Employees WHERE department = 'HR' AND salary > 30000;",
    "explanation": "The AND operator ensures that only records satisfying both department = 'HR' and salary > 30000 are returned.",
    "tags": [
      "and",
      "where",
      "multi-condition"
    ],
    "prerequisites": "Logical operators AND, OR",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ]
      ],
      "rowCount": 3
    },
    "subtopic": "Logical Operators & Precedence"
  },
  {
    "id": 5,
    "title": "Cross-Departmental Roster for IT and Finance",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Operations needs an updated roster of personnel supporting technical infrastructure and corporate accounting. Retrieve all employees who belong to either the IT or Finance business units.",
    "requirements": [
      "Return complete employee profile data.",
      "Include staff belonging to either the 'IT' department or the 'Finance' department."
    ],
    "tableName": "Employees",
    "hint": "Connect the two alternative department conditions using a logical operator that returns true if either condition is met.",
    "expectedSql": "SELECT * FROM Employees WHERE department = 'IT' OR department = 'Finance';",
    "explanation": "The OR operator evaluates to true if either condition is met.",
    "tags": [
      "or",
      "where",
      "filtering"
    ],
    "prerequisites": "Boolean logic in SQL",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ]
      ],
      "rowCount": 9
    },
    "subtopic": "Logical Operators & Precedence"
  },
  {
    "id": 6,
    "title": "Mid-Range Salary Bracket Analysis",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "The payroll department is analyzing compensation bands for mid-level professionals. Retrieve all employees whose salary falls within the range of 30,000 to 60,000, inclusive of both boundaries.",
    "requirements": [
      "Include all employee attributes.",
      "Filter for salaries between 30,000 and 60,000 inclusive."
    ],
    "tableName": "Employees",
    "hint": "Use an operator that tests whether a value falls within an inclusive numeric range.",
    "expectedSql": "SELECT * FROM Employees WHERE salary BETWEEN 30000 AND 60000;",
    "explanation": "In SQL, `salary BETWEEN 30000 AND 60000` is equivalent to `salary >= 30000 AND salary <= 60000`.",
    "tags": [
      "between",
      "range",
      "where"
    ],
    "prerequisites": "BETWEEN syntax and boundary inclusivity",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ]
      ],
      "rowCount": 11
    },
    "subtopic": "Range & Set Filtering (BETWEEN / IN)"
  },
  {
    "id": 7,
    "title": "Multi-Division Operational Staff List",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "The regional operations committee is convening an executive review for staff in Information Technology, Human Resources, and Sales. Generate a roster of all employees currently assigned to any of these three operational divisions.",
    "requirements": [
      "Select all employee attributes across the entire table.",
      "Include staff members belonging to IT, HR, or Sales."
    ],
    "tableName": "Employees",
    "hint": "Check whether the department column matches any value in a specified set of values.",
    "expectedSql": "SELECT * FROM Employees WHERE department IN ('IT', 'HR', 'Sales');",
    "explanation": "The IN operator checks if a value matches any value in a specified list, providing a concise alternative to chained OR conditions.",
    "tags": [
      "in",
      "list-matching",
      "where"
    ],
    "prerequisites": "IN operator",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          118,
          "Pooja",
          22,
          "HR",
          27000,
          1,
          "Vijayawada",
          2025
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ]
      ],
      "rowCount": 13
    },
    "subtopic": "Range & Set Filtering (BETWEEN / IN)"
  },
  {
    "id": 8,
    "title": "Hyderabad Experienced Compensation Audit",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Management is assessing living wage adjustments for the Hyderabad regional hub. Identify all employees stationed in Hyderabad who earn at least 40,000.",
    "requirements": [
      "Include all employee profile columns.",
      "Ensure the employee is based in 'Hyderabad' and earns a salary of 40,000 or more."
    ],
    "tableName": "Employees",
    "hint": "Join the location equality check with a greater-than-or-equal condition on salary.",
    "expectedSql": "SELECT * FROM Employees WHERE city = 'Hyderabad' AND salary >= 40000;",
    "explanation": "Combines city text matching with a numeric >= comparison.",
    "tags": [
      "where",
      "and",
      "filtering"
    ],
    "prerequisites": "AND conjunction",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ]
      ],
      "rowCount": 4
    },
    "subtopic": "Logical Operators & Precedence"
  },
  {
    "id": 9,
    "title": "Personnel Directory Filter: Prefix A",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "The directory administrators are creating an indexed telephone guide. Find all employees whose full name begins with the capital letter 'A'.",
    "requirements": [
      "Include all employee attributes in the output.",
      "Filter for employees whose name starts with 'A'."
    ],
    "tableName": "Employees",
    "hint": "Use pattern matching with a wildcard that represents any sequence of characters following 'A'.",
    "expectedSql": "SELECT * FROM Employees WHERE emp_name LIKE 'A%';",
    "explanation": "The % wildcard represents zero, one, or multiple characters. 'A%' checks for names starting with A.",
    "tags": [
      "like",
      "pattern-matching",
      "wildcards"
    ],
    "prerequisites": "LIKE operator and wildcards (%)",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ]
      ],
      "rowCount": 2
    },
    "subtopic": "Pattern Matching & Wildcards (LIKE)"
  },
  {
    "id": 10,
    "title": "Personnel Directory Filter: Suffix a",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Data quality engineers are verifying transliterated records for name standardization. Find all employees whose name ends with the letter 'a' (case-insensitive).",
    "requirements": [
      "Retrieve all employee details.",
      "Filter for employee names terminating with the letter 'a'."
    ],
    "tableName": "Employees",
    "hint": "Use pattern matching with a leading wildcard before the character 'a'.",
    "expectedSql": "SELECT * FROM Employees WHERE emp_name LIKE '%a';",
    "explanation": "The '%a' pattern matches strings where the final character is 'a'.",
    "tags": [
      "like",
      "pattern-matching",
      "wildcards"
    ],
    "prerequisites": "LIKE operator",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          118,
          "Pooja",
          22,
          "HR",
          27000,
          1,
          "Vijayawada",
          2025
        ]
      ],
      "rowCount": 8
    },
    "subtopic": "Pattern Matching & Wildcards (LIKE)"
  },
  {
    "id": 11,
    "title": "Personnel Directory Substring Search",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "The HR search portal must locate staff members by partial name queries. Retrieve all employee records where the name contains the substring 'an' at any position.",
    "requirements": [
      "Select all columns.",
      "Filter for names containing 'an' anywhere in the string."
    ],
    "tableName": "Employees",
    "hint": "Enclose the substring between wildcard characters on both sides.",
    "expectedSql": "SELECT * FROM Employees WHERE emp_name LIKE '%an%';",
    "explanation": "The '%an%' pattern matches any string having 'an' as a substring at the start, middle, or end.",
    "tags": [
      "like",
      "substring",
      "wildcards"
    ],
    "prerequisites": "Wildcard search",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ]
      ],
      "rowCount": 4
    },
    "subtopic": "Pattern Matching & Wildcards (LIKE)"
  },
  {
    "id": 12,
    "title": "Standard Salary Benchmark Variance",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Compensation analysis is identifying employees who deviate from the standard baseline compensation of 40,000. Retrieve all employees whose salary is not equal to 40,000.",
    "requirements": [
      "Include all employee attributes.",
      "Exclude staff members whose salary is exactly 40,000."
    ],
    "tableName": "Employees",
    "hint": "Use an inequality comparison operator.",
    "expectedSql": "SELECT * FROM Employees WHERE salary != 40000;",
    "explanation": "The != and <> operators both represent inequality in modern SQL.",
    "tags": [
      "comparison",
      "inequality",
      "where"
    ],
    "prerequisites": "Relational operators",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          118,
          "Pooja",
          22,
          "HR",
          27000,
          1,
          "Vijayawada",
          2025
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ]
      ],
      "rowCount": 19
    },
    "subtopic": "Basic Filtering & Comparisons"
  },
  {
    "id": 13,
    "title": "Young IT Professionals Roster",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Medium",
    "problemStatement": "The tech talent accelerator is looking for candidates between the ages of 25 and 30 within the engineering organization. Find all employees working in the IT department who are between 25 and 30 years old, inclusive.",
    "requirements": [
      "Return all employee columns.",
      "Apply two filters: age must be between 25 and 30 inclusive, and department must be 'IT'."
    ],
    "tableName": "Employees",
    "hint": "Combine an inclusive age range condition with a department equality check.",
    "expectedSql": "SELECT * FROM Employees WHERE age BETWEEN 25 AND 30 AND department = 'IT';",
    "explanation": "Combines range filtering on age with an exact string match on department using AND.",
    "tags": [
      "between",
      "and",
      "where"
    ],
    "prerequisites": "Combining AND with BETWEEN",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ]
      ],
      "rowCount": 3
    },
    "subtopic": "Logical Operators & Precedence"
  },
  {
    "id": 14,
    "title": "Non-HR Operational Workforce",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "The general operations directorate requires a listing of all staff members who do not work in Human Resources. Retrieve all employees who are not assigned to the HR department.",
    "requirements": [
      "Retrieve full employee profiles across all columns.",
      "Exclude employees assigned to the 'HR' department."
    ],
    "tableName": "Employees",
    "hint": "Use an inequality operator on the department column.",
    "expectedSql": "SELECT * FROM Employees WHERE department != 'HR';",
    "explanation": "Filters out records where department equals 'HR'.",
    "tags": [
      "not",
      "inequality",
      "filtering"
    ],
    "prerequisites": "Negation in SQL",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ]
      ],
      "rowCount": 16
    },
    "subtopic": "Pattern Matching & Wildcards (LIKE)"
  },
  {
    "id": 15,
    "title": "Southern Hub High-Compensation Staff",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Medium",
    "problemStatement": "Regional leadership is auditing high earners in southern metropolitan branches. Find all employees based in either Chennai or Bengaluru who earn strictly more than 50,000.",
    "requirements": [
      "Select all employee fields.",
      "Filter for employees located in either 'Chennai' or 'Bengaluru' whose salary exceeds 50,000.",
      "Ensure proper grouping of logical conditions so location alternatives are evaluated before the salary threshold."
    ],
    "tableName": "Employees",
    "hint": "Wrap the two city choices in parentheses so the alternative condition is evaluated before the salary threshold.",
    "expectedSql": "SELECT * FROM Employees WHERE (city = 'Chennai' OR city = 'Bengaluru') AND salary > 50000;",
    "explanation": "AND has higher precedence than OR. Grouping the OR condition inside parentheses ensures the salary threshold applies to both cities.",
    "tags": [
      "precedence",
      "parentheses",
      "and-or"
    ],
    "prerequisites": "Operator precedence: AND before OR",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ]
      ],
      "rowCount": 7
    },
    "subtopic": "Logical Operators & Precedence"
  },
  {
    "id": 16,
    "title": "Experienced Below-Ceiling Compensation Audit",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is conducting pay equity analysis for seasoned staff members. Retrieve all employees who possess at least 5 years of professional experience but earn less than 70,000.",
    "requirements": [
      "Include all employee columns.",
      "Filter for experience of 5 or more years and a salary strictly under 70,000."
    ],
    "tableName": "Employees",
    "hint": "Combine a greater-than-or-equal test on experience with a less-than test on salary.",
    "expectedSql": "SELECT * FROM Employees WHERE experience >= 5 AND salary < 70000;",
    "explanation": "Filters records using two simultaneous numeric inequalities joined by AND.",
    "tags": [
      "numeric",
      "and",
      "where"
    ],
    "prerequisites": "Comparison operators",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ]
      ],
      "rowCount": 6
    },
    "subtopic": "Range & Set Filtering (BETWEEN / IN)"
  },
  {
    "id": 17,
    "title": "Recent Multi-Year Hiring Cohorts",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "The talent acquisition team is compiling an onboarding retention report for staff hired during the recent expansion years. Display all employees who joined the company in 2022, 2023, or 2024.",
    "requirements": [
      "Display all employee details.",
      "Filter for employees who joined in any of the years: 2022, 2023, or 2024."
    ],
    "tableName": "Employees",
    "hint": "Match joining_year against a list of the specified target years.",
    "expectedSql": "SELECT * FROM Employees WHERE joining_year IN (2022, 2023, 2024);",
    "explanation": "The IN operator checks membership against a set of integer values.",
    "tags": [
      "in",
      "numeric-list",
      "filtering"
    ],
    "prerequisites": "IN operator",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ]
      ],
      "rowCount": 7
    },
    "subtopic": "Range & Set Filtering (BETWEEN / IN)"
  },
  {
    "id": 18,
    "title": "Four-Character Name Identifier",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Medium",
    "problemStatement": "Identity governance is verifying short badge names for security printing. Find all employees whose first name consists of exactly four characters.",
    "requirements": [
      "Select all employee columns.",
      "Filter for employee names that have a length of exactly four characters."
    ],
    "tableName": "Employees",
    "hint": "Use single-character wildcards to enforce an exact character count.",
    "expectedSql": "SELECT * FROM Employees WHERE emp_name LIKE '____';",
    "explanation": "In SQL LIKE clauses, the underscore character `_` represents exactly one single character. Four underscores match strings of length 4.",
    "tags": [
      "like",
      "wildcards",
      "underscore"
    ],
    "prerequisites": "Single-character wildcard (_)",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ]
      ],
      "rowCount": 2
    },
    "subtopic": "Core Aggregates (COUNT, SUM, AVG, MIN, MAX)"
  },
  {
    "id": 19,
    "title": "Out-of-Band Compensation Outliers",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Medium",
    "problemStatement": "Finance is reviewing compensation anomalies outside the core standard pay bracket. Find all employees whose salary falls outside the 30,000 to 60,000 range (strictly less than 30,000 or strictly greater than 60,000).",
    "requirements": [
      "Include all employee attributes.",
      "Filter for salaries outside the range of 30,000 to 60,000 inclusive."
    ],
    "tableName": "Employees",
    "hint": "Negate a range condition or check for values strictly below 30,000 or strictly above 60,000.",
    "expectedSql": "SELECT * FROM Employees WHERE salary NOT BETWEEN 30000 AND 60000;",
    "explanation": "NOT BETWEEN excludes values that fall inside the inclusive interval [30000, 60000].",
    "tags": [
      "not-between",
      "range",
      "negation"
    ],
    "prerequisites": "NOT BETWEEN operator",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          118,
          "Pooja",
          22,
          "HR",
          27000,
          1,
          "Vijayawada",
          2025
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ]
      ],
      "rowCount": 9
    },
    "subtopic": "Core Aggregates (COUNT, SUM, AVG, MIN, MAX)"
  },
  {
    "id": 20,
    "title": "Target Departments Outside Chennai",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Medium",
    "problemStatement": "Business development is planning on-site workshops for IT and Sales personnel stationed outside the Chennai office. Retrieve all employees who work in either IT or Sales and are not based in Chennai.",
    "requirements": [
      "Select all employee columns.",
      "Include employees from the 'IT' or 'Sales' departments.",
      "Exclude employees located in 'Chennai'."
    ],
    "tableName": "Employees",
    "hint": "Check department membership in ('IT', 'Sales') combined with a city inequality check.",
    "expectedSql": "SELECT * FROM Employees WHERE department IN ('IT', 'Sales') AND city != 'Chennai';",
    "explanation": "Combines set inclusion on department with inequality on city.",
    "tags": [
      "in",
      "and",
      "inequality",
      "compound"
    ],
    "prerequisites": "Combining boolean operators",
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ]
      ],
      "rowCount": 7
    },
    "subtopic": "Core Aggregates (COUNT, SUM, AVG, MIN, MAX)"
  },
  {
    "id": 21,
    "title": "Total Workforce Census",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "The board of directors requests an official headcount audit of all active staff members across the entire organization. Calculate the total number of employees currently employed.",
    "requirements": [
      "Count all records in the Employees table.",
      "Alias the aggregated metric as total_employees."
    ],
    "tableName": "Employees",
    "hint": "Use an aggregate counting function across all rows.",
    "expectedSql": "SELECT COUNT(*) AS total_employees FROM Employees;",
    "explanation": "COUNT(*) returns the total number of rows in the table, including rows with NULL values.",
    "tags": [
      "aggregate",
      "count"
    ],
    "prerequisites": "SQL aggregate functions",
    "expectedOutput": {
      "columns": [
        "total_employees"
      ],
      "values": [
        [
          20
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Core Aggregates (COUNT, SUM, AVG, MIN, MAX)"
  },
  {
    "id": 22,
    "title": "Enterprise Monthly Payroll Expenditure",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "The Chief Financial Officer requires the total monthly payroll obligation for all employees combined. Calculate the cumulative sum of all employee salaries.",
    "requirements": [
      "Calculate the sum of the salary column across all employees.",
      "Alias the calculated total as total_salary."
    ],
    "tableName": "Employees",
    "hint": "Use an aggregation function that sums all values in a numeric column.",
    "expectedSql": "SELECT SUM(salary) AS total_salary FROM Employees;",
    "explanation": "SUM(salary) computes the arithmetic sum of all values in the salary column.",
    "tags": [
      "aggregate",
      "sum"
    ],
    "prerequisites": "SUM function",
    "expectedOutput": {
      "columns": [
        "total_salary"
      ],
      "values": [
        [
          1022000
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Core Aggregates (COUNT, SUM, AVG, MIN, MAX)"
  },
  {
    "id": 23,
    "title": "Company-Wide Average Compensation Benchmark",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Compensation benchmarking requires knowing the overall baseline salary across the enterprise. Calculate the average salary paid to employees.",
    "requirements": [
      "Compute the mathematical mean of all employee salaries.",
      "Alias the resulting figure as average_salary."
    ],
    "tableName": "Employees",
    "hint": "Use the standard arithmetic mean aggregate function.",
    "expectedSql": "SELECT AVG(salary) AS average_salary FROM Employees;",
    "explanation": "AVG(salary) computes the mean of the salary values.",
    "tags": [
      "aggregate",
      "avg"
    ],
    "prerequisites": "AVG function",
    "expectedOutput": {
      "columns": [
        "average_salary"
      ],
      "values": [
        [
          51100
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Core Aggregates (COUNT, SUM, AVG, MIN, MAX)"
  },
  {
    "id": 24,
    "title": "Peak Compensation Identification",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Executive remuneration analysis needs to verify the maximum base compensation paid to any employee in the company. Find the highest salary recorded in the employee directory.",
    "requirements": [
      "Determine the maximum value from the salary column.",
      "Alias the resulting metric as max_salary."
    ],
    "tableName": "Employees",
    "hint": "Use the aggregate function that finds the highest value in a column.",
    "expectedSql": "SELECT MAX(salary) AS max_salary FROM Employees;",
    "explanation": "MAX(salary) returns the highest value present in the salary column.",
    "tags": [
      "aggregate",
      "max"
    ],
    "prerequisites": "MAX function",
    "expectedOutput": {
      "columns": [
        "max_salary"
      ],
      "values": [
        [
          90000
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Core Aggregates (COUNT, SUM, AVG, MIN, MAX)"
  },
  {
    "id": 25,
    "title": "Entry-Level Minimum Salary Baseline",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Human resources is checking compliance with corporate minimum wage standards. Determine the lowest salary currently paid to any employee in the organization.",
    "requirements": [
      "Find the minimum value within the salary column.",
      "Alias the resulting metric as min_salary."
    ],
    "tableName": "Employees",
    "hint": "Use the aggregate function that finds the lowest numeric value.",
    "expectedSql": "SELECT MIN(salary) AS min_salary FROM Employees;",
    "explanation": "MIN(salary) returns the minimum value from the salary column.",
    "tags": [
      "aggregate",
      "min"
    ],
    "prerequisites": "MIN function",
    "expectedOutput": {
      "columns": [
        "min_salary"
      ],
      "values": [
        [
          25000
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Core Aggregates (COUNT, SUM, AVG, MIN, MAX)"
  },
  {
    "id": 26,
    "title": "Technical Division Headcount",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "The Chief Technology Officer is assessing engineering capacity. Count the total number of employees currently working in the IT department.",
    "requirements": [
      "Count the qualifying employees belonging to the 'IT' department.",
      "Alias the calculated count as it_employees_count."
    ],
    "tableName": "Employees",
    "hint": "Combine an aggregate count function with a filter for the IT department.",
    "expectedSql": "SELECT COUNT(*) AS it_employees_count FROM Employees WHERE department = 'IT';",
    "explanation": "The WHERE clause filters rows prior to the COUNT aggregation.",
    "tags": [
      "count",
      "where",
      "aggregate"
    ],
    "prerequisites": "Combining WHERE with COUNT",
    "expectedOutput": {
      "columns": [
        "it_employees_count"
      ],
      "values": [
        [
          5
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Core Aggregates (COUNT, SUM, AVG, MIN, MAX)"
  },
  {
    "id": 27,
    "title": "Workforce Mean Age Metric",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Easy",
    "problemStatement": "Corporate wellness planning is studying employee demographics to tailor health benefit programs. Calculate the average age of all employees across the company.",
    "requirements": [
      "Compute the average value of the age column across all employees.",
      "Alias the resulting metric as average_age."
    ],
    "tableName": "Employees",
    "hint": "Use the average aggregate function on the age attribute.",
    "expectedSql": "SELECT AVG(age) AS average_age FROM Employees;",
    "explanation": "Calculates the arithmetic mean of the age column across all employees.",
    "tags": [
      "avg",
      "aggregate"
    ],
    "prerequisites": "AVG function",
    "expectedOutput": {
      "columns": [
        "average_age"
      ],
      "values": [
        [
          27.75
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Standard Grouping & Single-Column Aggregations"
  },
  {
    "id": 28,
    "title": "Hyderabad Regional Payroll Budget",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Easy",
    "problemStatement": "The regional accounting office in Hyderabad needs its total monthly payroll commitment. Calculate the cumulative salary expenditure for all employees residing in Hyderabad.",
    "requirements": [
      "Calculate the sum of salaries for staff based in 'Hyderabad'.",
      "Alias the resulting sum as total_hyderabad_salary."
    ],
    "tableName": "Employees",
    "hint": "Filter for Hyderabad before summing the salaries.",
    "expectedSql": "SELECT SUM(salary) AS total_hyderabad_salary FROM Employees WHERE city = 'Hyderabad';",
    "explanation": "Filters for employees based in Hyderabad and sums their compensation.",
    "tags": [
      "sum",
      "where",
      "aggregate"
    ],
    "prerequisites": "SUM with WHERE filter",
    "expectedOutput": {
      "columns": [
        "total_hyderabad_salary"
      ],
      "values": [
        [
          310000
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Standard Grouping & Single-Column Aggregations"
  },
  {
    "id": 29,
    "title": "Top Compensation for Seasoned Personnel",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "The compensation committee is reviewing salary caps for senior staff. Find the highest salary earned among employees who have at least 5 years of professional experience.",
    "requirements": [
      "Filter for employees with 5 or more years of experience.",
      "Determine the highest salary among those qualifying employees.",
      "Alias the maximum salary as max_salary."
    ],
    "tableName": "Employees",
    "hint": "Use the peak aggregate function on salary alongside a filter on experience.",
    "expectedSql": "SELECT MAX(salary) AS max_salary FROM Employees WHERE experience >= 5;",
    "explanation": "The WHERE clause restricts the set of rows to senior employees before finding the maximum salary.",
    "tags": [
      "max",
      "where",
      "aggregate"
    ],
    "prerequisites": "MAX with filter",
    "expectedOutput": {
      "columns": [
        "max_salary"
      ],
      "values": [
        [
          90000
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Standard Grouping & Single-Column Aggregations"
  },
  {
    "id": 30,
    "title": "High-Earner Cohort Headcount",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Easy",
    "problemStatement": "Tax compliance needs to know how many personnel fall into the higher tax brackets. Count how many employees earn a salary strictly greater than 50,000.",
    "requirements": [
      "Count the number of employees earning above 50,000.",
      "Alias the resulting headcount as count_high_earners."
    ],
    "tableName": "Employees",
    "hint": "Combine the counting function with a salary filter strictly exceeding 50,000.",
    "expectedSql": "SELECT COUNT(*) AS count_high_earners FROM Employees WHERE salary > 50000;",
    "explanation": "Restricts the count to rows where salary exceeds 50000.",
    "tags": [
      "count",
      "where",
      "numeric"
    ],
    "prerequisites": "COUNT function",
    "expectedOutput": {
      "columns": [
        "count_high_earners"
      ],
      "values": [
        [
          10
        ]
      ],
      "rowCount": 1
    },
    "subtopic": "Standard Grouping & Single-Column Aggregations"
  },
  {
    "id": 31,
    "title": "Departmental Staffing Distribution",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Workforce management is balancing team sizes across divisions. Display each department name along with the total count of employees working in that department.",
    "requirements": [
      "Group records by department.",
      "Display the department name and total employee count.",
      "Alias the employee count as employee_count."
    ],
    "tableName": "Employees",
    "hint": "Group by department and apply the count aggregate function.",
    "expectedSql": "SELECT department, COUNT(*) AS employee_count FROM Employees GROUP BY department;",
    "explanation": "GROUP BY department groups records by their department, and COUNT(*) counts the rows in each group.",
    "tags": [
      "group-by",
      "count",
      "aggregation"
    ],
    "prerequisites": "GROUP BY clause",
    "expectedOutput": {
      "columns": [
        "department",
        "employee_count"
      ],
      "values": [
        [
          "Finance",
          4
        ],
        [
          "HR",
          4
        ],
        [
          "IT",
          5
        ],
        [
          "Marketing",
          3
        ],
        [
          "Sales",
          4
        ]
      ],
      "rowCount": 5
    },
    "subtopic": "Standard Grouping & Single-Column Aggregations"
  },
  {
    "id": 32,
    "title": "Departmental Average Compensation Breakdown",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Finance is evaluating relative labor costs between business units. Display each department along with the average salary of employees working in that department.",
    "requirements": [
      "Group records by department.",
      "Display the department name and average salary.",
      "Alias the calculated average as avg_salary."
    ],
    "tableName": "Employees",
    "hint": "Group by department and compute the average salary for each group.",
    "expectedSql": "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department;",
    "explanation": "Groups records by department and computes the average salary per department group.",
    "tags": [
      "group-by",
      "avg",
      "salary"
    ],
    "prerequisites": "GROUP BY with AVG",
    "expectedOutput": {
      "columns": [
        "department",
        "avg_salary"
      ],
      "values": [
        [
          "Finance",
          67500
        ],
        [
          "HR",
          42250
        ],
        [
          "IT",
          50400
        ],
        [
          "Marketing",
          52000
        ],
        [
          "Sales",
          43750
        ]
      ],
      "rowCount": 5
    },
    "subtopic": "Standard Grouping & Single-Column Aggregations"
  },
  {
    "id": 33,
    "title": "Departmental Total Payroll Expenditure",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "The accounting department is allocating monthly departmental operating budgets. Display each department name along with the total salary expenditure paid to its employees.",
    "requirements": [
      "Group records by department.",
      "Display the department name and total salary expenditure.",
      "Alias the total salary as total_salary."
    ],
    "tableName": "Employees",
    "hint": "Group by department and sum the salaries within each group.",
    "expectedSql": "SELECT department, SUM(salary) AS total_salary FROM Employees GROUP BY department;",
    "explanation": "Aggregates total salary expenditure grouped by individual departments.",
    "tags": [
      "group-by",
      "sum"
    ],
    "prerequisites": "GROUP BY with SUM",
    "expectedOutput": {
      "columns": [
        "department",
        "total_salary"
      ],
      "values": [
        [
          "Finance",
          270000
        ],
        [
          "HR",
          169000
        ],
        [
          "IT",
          252000
        ],
        [
          "Marketing",
          156000
        ],
        [
          "Sales",
          175000
        ]
      ],
      "rowCount": 5
    },
    "subtopic": "Standard Grouping & Single-Column Aggregations"
  },
  {
    "id": 34,
    "title": "Peak Earner per Department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Executive recruitment is comparing top compensation ceilings across functional areas. Display each department name along with the highest salary earned within that department.",
    "requirements": [
      "Group records by department.",
      "Display the department name and highest salary in that department.",
      "Alias the peak salary as max_salary."
    ],
    "tableName": "Employees",
    "hint": "Group by department and use the maximum aggregate function on salary.",
    "expectedSql": "SELECT department, MAX(salary) AS max_salary FROM Employees GROUP BY department;",
    "explanation": "Finds the peak compensation per department category.",
    "tags": [
      "group-by",
      "max"
    ],
    "prerequisites": "GROUP BY with MAX",
    "expectedOutput": {
      "columns": [
        "department",
        "max_salary"
      ],
      "values": [
        [
          "Finance",
          90000
        ],
        [
          "HR",
          70000
        ],
        [
          "IT",
          75000
        ],
        [
          "Marketing",
          68000
        ],
        [
          "Sales",
          55000
        ]
      ],
      "rowCount": 5
    },
    "subtopic": "Standard Grouping & Single-Column Aggregations"
  },
  {
    "id": 35,
    "title": "Entry-Level Salary Floor per Department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is auditing entry-level pay parity across functional teams. Display each department along with the lowest salary earned in that department.",
    "requirements": [
      "Group records by department.",
      "Display the department name and lowest salary in that department.",
      "Alias the lowest salary as min_salary."
    ],
    "tableName": "Employees",
    "hint": "Group by department and find the minimum salary.",
    "expectedSql": "SELECT department, MIN(salary) AS min_salary FROM Employees GROUP BY department;",
    "explanation": "Finds the minimum compensation earned in each department group.",
    "tags": [
      "group-by",
      "min"
    ],
    "prerequisites": "GROUP BY with MIN",
    "expectedOutput": {
      "columns": [
        "department",
        "min_salary"
      ],
      "values": [
        [
          "Finance",
          35000
        ],
        [
          "HR",
          27000
        ],
        [
          "IT",
          25000
        ],
        [
          "Marketing",
          28000
        ],
        [
          "Sales",
          30000
        ]
      ],
      "rowCount": 5
    },
    "subtopic": "Standard Grouping & Single-Column Aggregations"
  },
  {
    "id": 36,
    "title": "Geographical Workforce Density",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Real estate and facilities planning is sizing regional office spaces. Display each city and the total number of employees residing in that city.",
    "requirements": [
      "Group records by city.",
      "Display the city name and total employee count.",
      "Alias the employee count as employee_count."
    ],
    "tableName": "Employees",
    "hint": "Group by city and calculate the count of employees in each location.",
    "expectedSql": "SELECT city, COUNT(*) AS employee_count FROM Employees GROUP BY city;",
    "explanation": "Partitions the data by city and counts members belonging to each location.",
    "tags": [
      "group-by",
      "count",
      "city"
    ],
    "prerequisites": "GROUP BY fundamentals",
    "expectedOutput": {
      "columns": [
        "city",
        "employee_count"
      ],
      "values": [
        [
          "Bengaluru",
          4
        ],
        [
          "Chennai",
          6
        ],
        [
          "Hyderabad",
          6
        ],
        [
          "Vijayawada",
          4
        ]
      ],
      "rowCount": 4
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 37,
    "title": "Regional Cost of Labor Benchmarking",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "The compensation committee is analyzing geographic wage differentials. Calculate the average employee salary for each city where staff are located.",
    "requirements": [
      "Group records by city.",
      "Display the city name and average salary.",
      "Alias the average salary as avg_salary."
    ],
    "tableName": "Employees",
    "hint": "Group by city and compute the average salary.",
    "expectedSql": "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city;",
    "explanation": "Computes location-based compensation averages by grouping on city.",
    "tags": [
      "group-by",
      "avg",
      "city"
    ],
    "prerequisites": "GROUP BY with aggregation",
    "expectedOutput": {
      "columns": [
        "city",
        "avg_salary"
      ],
      "values": [
        [
          "Bengaluru",
          66750
        ],
        [
          "Chennai",
          50500
        ],
        [
          "Hyderabad",
          51666.666666666664
        ],
        [
          "Vijayawada",
          35500
        ]
      ],
      "rowCount": 4
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 38,
    "title": "Annual Hiring Cohort Velocity",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Talent acquisition is reviewing historical hiring volumes over time. Display each employee joining year along with the total number of employees who joined in that year.",
    "requirements": [
      "Group records by joining_year.",
      "Display joining_year and total employee count.",
      "Alias the count as employee_count."
    ],
    "tableName": "Employees",
    "hint": "Group by the joining_year attribute and count occurrences.",
    "expectedSql": "SELECT joining_year, COUNT(*) AS employee_count FROM Employees GROUP BY joining_year;",
    "explanation": "Groups employee records by their year of hire.",
    "tags": [
      "group-by",
      "count",
      "joining_year"
    ],
    "prerequisites": "GROUP BY on numeric attributes",
    "expectedOutput": {
      "columns": [
        "joining_year",
        "employee_count"
      ],
      "values": [
        [
          2015,
          1
        ],
        [
          2016,
          1
        ],
        [
          2017,
          1
        ],
        [
          2018,
          2
        ],
        [
          2019,
          1
        ],
        [
          2020,
          2
        ],
        [
          2021,
          2
        ],
        [
          2022,
          3
        ],
        [
          2023,
          2
        ],
        [
          2024,
          2
        ],
        [
          2025,
          3
        ]
      ],
      "rowCount": 11
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 39,
    "title": "Identify Major Operating Departments",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Operations management wants to isolate major functional divisions that have substantial staffing. Display departments that have strictly more than 3 employees.",
    "requirements": [
      "Group records by department.",
      "Display department name and employee count aliased as employee_count.",
      "Filter the aggregated results to only include departments with more than 3 employees."
    ],
    "tableName": "Employees",
    "hint": "Use a post-aggregation filter to restrict groups based on their calculated count.",
    "expectedSql": "SELECT department, COUNT(*) AS employee_count FROM Employees GROUP BY department HAVING COUNT(*) > 3;",
    "explanation": "HAVING filters groups after the GROUP BY operation, unlike WHERE which filters individual rows before grouping.",
    "tags": [
      "having",
      "group-by",
      "count"
    ],
    "prerequisites": "Difference between WHERE and HAVING",
    "expectedOutput": {
      "columns": [
        "department",
        "employee_count"
      ],
      "values": [
        [
          "Finance",
          4
        ],
        [
          "HR",
          4
        ],
        [
          "IT",
          5
        ],
        [
          "Sales",
          4
        ]
      ],
      "rowCount": 4
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 40,
    "title": "High-Compensation Departmental Filter",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Finance is reviewing business units where overall compensation exceeds the general norm. Display departments where the average employee salary strictly exceeds 50,000.",
    "requirements": [
      "Group records by department.",
      "Display department name and average salary aliased as avg_salary.",
      "Filter groups to only include departments with an average salary greater than 50,000."
    ],
    "tableName": "Employees",
    "hint": "Filter the aggregated groups using a condition on average salary.",
    "expectedSql": "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING AVG(salary) > 50000;",
    "explanation": "Filters the department groups to only include those where the calculated average salary exceeds 50000.",
    "tags": [
      "having",
      "avg",
      "group-by"
    ],
    "prerequisites": "HAVING with aggregate functions",
    "expectedOutput": {
      "columns": [
        "department",
        "avg_salary"
      ],
      "values": [
        [
          "Finance",
          67500
        ],
        [
          "IT",
          50400
        ],
        [
          "Marketing",
          52000
        ]
      ],
      "rowCount": 3
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 41,
    "title": "High-Budget Payroll Units",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Budget control is flagging business units whose monthly wage bill exceeds standard expenditure limits. Find departments whose cumulative salary expense strictly exceeds 150,000.",
    "requirements": [
      "Group records by department.",
      "Display department name and total salary aliased as total_salary.",
      "Filter groups to only keep departments where cumulative salary exceeds 150,000."
    ],
    "tableName": "Employees",
    "hint": "Filter group totals using a condition on the sum of salaries.",
    "expectedSql": "SELECT department, SUM(salary) AS total_salary FROM Employees GROUP BY department HAVING SUM(salary) > 150000;",
    "explanation": "Groups by department and restricts the output to groups where the sum of salaries exceeds 150000.",
    "tags": [
      "having",
      "sum",
      "group-by"
    ],
    "prerequisites": "HAVING clause",
    "expectedOutput": {
      "columns": [
        "department",
        "total_salary"
      ],
      "values": [
        [
          "Finance",
          270000
        ],
        [
          "HR",
          169000
        ],
        [
          "IT",
          252000
        ],
        [
          "Marketing",
          156000
        ],
        [
          "Sales",
          175000
        ]
      ],
      "rowCount": 5
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 42,
    "title": "Departments with Executive-Tier Salaries",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Executive compensation is tracking departments with top-tier earners. Display departments where the highest earned salary is at least 70,000.",
    "requirements": [
      "Group records by department.",
      "Display department name and maximum salary aliased as max_salary.",
      "Filter to only include departments where the peak salary is 70,000 or higher."
    ],
    "tableName": "Employees",
    "hint": "Filter groups based on the maximum salary value in each department.",
    "expectedSql": "SELECT department, MAX(salary) AS max_salary FROM Employees GROUP BY department HAVING MAX(salary) >= 70000;",
    "explanation": "Filters out departments where the top earner's compensation is below 70000.",
    "tags": [
      "having",
      "max",
      "group-by"
    ],
    "prerequisites": "HAVING with MAX",
    "expectedOutput": {
      "columns": [
        "department",
        "max_salary"
      ],
      "values": [
        [
          "Finance",
          90000
        ],
        [
          "HR",
          70000
        ],
        [
          "IT",
          75000
        ]
      ],
      "rowCount": 3
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 43,
    "title": "High-Density Branch Locations",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Corporate administration is evaluating which branch locations warrant dedicated local administrative staff. Display all cities that have at least 4 resident employees.",
    "requirements": [
      "Group records by city.",
      "Display city name and total employee count aliased as employee_count.",
      "Filter groups to only include cities with 4 or more employees."
    ],
    "tableName": "Employees",
    "hint": "Group by city and filter groups with a headcount of 4 or greater.",
    "expectedSql": "SELECT city, COUNT(*) AS employee_count FROM Employees GROUP BY city HAVING COUNT(*) >= 4;",
    "explanation": "Groups employees by city and retains only cities with 4 or more assigned employees.",
    "tags": [
      "having",
      "count",
      "city"
    ],
    "prerequisites": "HAVING with COUNT",
    "expectedOutput": {
      "columns": [
        "city",
        "employee_count"
      ],
      "values": [
        [
          "Bengaluru",
          4
        ],
        [
          "Chennai",
          6
        ],
        [
          "Hyderabad",
          6
        ],
        [
          "Vijayawada",
          4
        ]
      ],
      "rowCount": 4
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 44,
    "title": "Low-Average Compensation Departmental Audit",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is reviewing compensation equity in departments that may be undercompensated. Display departments whose average salary is strictly below 45,000.",
    "requirements": [
      "Group records by department.",
      "Display department name and average salary aliased as avg_salary.",
      "Filter groups to only include departments with an average salary under 45,000."
    ],
    "tableName": "Employees",
    "hint": "Apply a filter to group averages for values less than 45000.",
    "expectedSql": "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING AVG(salary) < 45000;",
    "explanation": "Identifies lower-compensating departments by evaluating group averages.",
    "tags": [
      "having",
      "avg",
      "salary"
    ],
    "prerequisites": "HAVING filters",
    "expectedOutput": {
      "columns": [
        "department",
        "avg_salary"
      ],
      "values": [
        [
          "HR",
          42250
        ],
        [
          "Sales",
          43750
        ]
      ],
      "rowCount": 2
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 45,
    "title": "Mid-Scale Well-Compensated Departments",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Hard",
    "problemStatement": "Strategic workforce planning is identifying departments that combine significant staffing with strong compensation levels. Display departments that have more than 2 employees and an average salary above 40,000.",
    "requirements": [
      "Group records by department.",
      "Display department name, employee count aliased as employee_count, and average salary aliased as avg_salary.",
      "Filter for departments satisfying both criteria: more than 2 employees and average salary greater than 40,000."
    ],
    "tableName": "Employees",
    "hint": "Combine two aggregate conditions in the group filtering clause using AND.",
    "expectedSql": "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) > 2 AND AVG(salary) > 40000;",
    "explanation": "Demonstrates combining multiple aggregate criteria in a single HAVING clause using AND.",
    "tags": [
      "having",
      "multi-condition",
      "count",
      "avg"
    ],
    "prerequisites": "Logical operators in HAVING",
    "expectedOutput": {
      "columns": [
        "department",
        "employee_count",
        "avg_salary"
      ],
      "values": [
        [
          "Finance",
          4,
          67500
        ],
        [
          "HR",
          4,
          42250
        ],
        [
          "IT",
          5,
          50400
        ],
        [
          "Marketing",
          3,
          52000
        ],
        [
          "Sales",
          4,
          43750
        ]
      ],
      "rowCount": 5
    },
    "subtopic": "Core Group Filtering with HAVING"
  },
  {
    "id": 46,
    "title": "Workforce Compensation Ranking",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Easy",
    "problemStatement": "The payroll department is preparing an annual executive review list. Display all employees ordered by their salary from highest to lowest.",
    "requirements": [
      "Select all employee columns.",
      "Sort the results by salary in descending order (highest first)."
    ],
    "tableName": "Employees",
    "hint": "Sort the output by the salary attribute in descending direction.",
    "expectedSql": "SELECT * FROM Employees ORDER BY salary DESC;",
    "explanation": "ORDER BY salary DESC sorts the result set such that the highest compensation appears at the top.",
    "tags": [
      "order-by",
      "desc",
      "sorting"
    ],
    "prerequisites": "ORDER BY syntax and DESC keyword",
    "requiresOrder": true,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ],
        [
          118,
          "Pooja",
          22,
          "HR",
          27000,
          1,
          "Vijayawada",
          2025
        ],
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ]
      ],
      "rowCount": 20
    },
    "subtopic": "Basic ORDER BY & LIMIT"
  },
  {
    "id": 47,
    "title": "Demographic Seniority Roster",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Easy",
    "problemStatement": "The benefits team is reviewing employee demographics from youngest to oldest. Display all employees sorted by age in ascending order.",
    "requirements": [
      "Select all employee columns.",
      "Sort the results by age in ascending order (youngest first)."
    ],
    "tableName": "Employees",
    "hint": "Sort the output by age in ascending order.",
    "expectedSql": "SELECT * FROM Employees ORDER BY age ASC;",
    "explanation": "ORDER BY age ASC sorts rows from smallest age to largest age.",
    "tags": [
      "order-by",
      "asc",
      "sorting"
    ],
    "prerequisites": "ORDER BY ASC",
    "requiresOrder": true,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          118,
          "Pooja",
          22,
          "HR",
          27000,
          1,
          "Vijayawada",
          2025
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ]
      ],
      "rowCount": 20
    },
    "subtopic": "Basic ORDER BY & LIMIT"
  },
  {
    "id": 48,
    "title": "Departmental Payroll Hierarchical Sort",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Administrative reporting requires a tidy organizational directory grouped by division and tiered by earnings. Sort all employees primarily by department alphabetically (A to Z), and secondarily by salary in descending order within each department.",
    "requirements": [
      "Select all employee attributes across the entire table.",
      "Apply primary sorting on department in ascending order.",
      "Apply secondary sorting on salary in descending order."
    ],
    "tableName": "Employees",
    "hint": "Specify multiple sort columns separated by commas with their respective sort directions.",
    "expectedSql": "SELECT * FROM Employees ORDER BY department ASC, salary DESC;",
    "explanation": "Multi-column sorting evaluates the first key; ties in department are broken by the second key (salary in descending order).",
    "tags": [
      "order-by",
      "multi-column",
      "sorting"
    ],
    "prerequisites": "Multi-column sorting",
    "requiresOrder": true,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          118,
          "Pooja",
          22,
          "HR",
          27000,
          1,
          "Vijayawada",
          2025
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ]
      ],
      "rowCount": 20
    },
    "subtopic": "Basic ORDER BY & LIMIT"
  },
  {
    "id": 49,
    "title": "Top Three Enterprise Earners",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Executive audit requires an extract of the company's highest earners. Display the full records of the three highest-paid employees in the organization.",
    "requirements": [
      "Include all employee attributes.",
      "Order by salary from highest to lowest.",
      "Restrict the final output to exactly 3 records."
    ],
    "tableName": "Employees",
    "hint": "Sort descending by salary and restrict the number of returned rows.",
    "expectedSql": "SELECT * FROM Employees ORDER BY salary DESC LIMIT 3;",
    "explanation": "Combining ORDER BY salary DESC with LIMIT 3 extracts the top three records by salary.",
    "tags": [
      "limit",
      "order-by",
      "top-n"
    ],
    "prerequisites": "LIMIT clause and Top-N queries",
    "requiresOrder": true,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ]
      ],
      "rowCount": 3
    },
    "subtopic": "Basic ORDER BY & LIMIT"
  },
  {
    "id": 50,
    "title": "Major Department Compensation Leaderboard",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Hard",
    "problemStatement": "The board of directors requests a performance leaderboard of major business units ranked by compensation. Display each department's name, employee count, and average salary. Include only departments with at least 3 employees, and sort the leaderboard by average salary from highest to lowest.",
    "requirements": [
      "Group records by department.",
      "Display department, employee count aliased as employee_count, and average salary aliased as avg_salary.",
      "Filter to only retain departments with 3 or more employees.",
      "Sort the resulting departments by average salary in descending order."
    ],
    "tableName": "Employees",
    "hint": "Combine grouping, group filtering with HAVING, and sorting on the aggregate metric.",
    "expectedSql": "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) >= 3 ORDER BY avg_salary DESC;",
    "explanation": "This classic interview question tests the complete SQL query execution lifecycle: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY.",
    "tags": [
      "group-by",
      "having",
      "order-by",
      "mixed",
      "interview-classic"
    ],
    "prerequisites": "Full SQL clause lifecycle: FROM, GROUP BY, HAVING, SELECT, ORDER BY",
    "requiresOrder": true,
    "expectedOutput": {
      "columns": [
        "department",
        "employee_count",
        "avg_salary"
      ],
      "values": [
        [
          "Finance",
          4,
          67500
        ],
        [
          "Marketing",
          3,
          52000
        ],
        [
          "IT",
          5,
          50400
        ],
        [
          "Sales",
          4,
          43750
        ],
        [
          "HR",
          4,
          42250
        ]
      ],
      "rowCount": 5
    },
    "subtopic": "Basic ORDER BY & LIMIT"
  },
  {
    "id": 51,
    "title": "Enterprise Workforce Master Directory",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "The Human Resources Information Systems (HRIS) team needs a full extract of all employee profiles currently registered in the database for a comprehensive system audit. Retrieve all employee records and all columns without filtering.",
    "requirements": [
      "Select all available columns from the Employees table.",
      "Include all employee records in the company."
    ],
    "tableName": "Employees",
    "hint": "Retrieve all columns from the Employees table without any row filtering conditions.",
    "expectedSql": "SELECT * FROM Employees;",
    "explanation": "The asterisk (*) wildcard in a SELECT statement retrieves every column defined in the target table.",
    "tags": [
      "select",
      "fundamentals",
      "projection"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "IT",
          25000,
          1,
          "Hyderabad",
          2025
        ],
        [
          102,
          "Bhumika",
          25,
          "HR",
          40000,
          3,
          "Vijayawada",
          2023
        ],
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          105,
          "Farah",
          24,
          "HR",
          32000,
          2,
          "Hyderabad",
          2024
        ],
        [
          106,
          "Girish",
          35,
          "Finance",
          80000,
          10,
          "Bengaluru",
          2016
        ],
        [
          107,
          "Harsha",
          27,
          "IT",
          45000,
          4,
          "Vijayawada",
          2022
        ],
        [
          108,
          "Isha",
          23,
          "Marketing",
          28000,
          1,
          "Chennai",
          2025
        ],
        [
          109,
          "Kiran",
          32,
          "HR",
          70000,
          8,
          "Bengaluru",
          2018
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          113,
          "Rahul",
          24,
          "Sales",
          30000,
          2,
          "Vijayawada",
          2024
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          116,
          "Divya",
          26,
          "Sales",
          42000,
          3,
          "Bengaluru",
          2022
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          118,
          "Pooja",
          22,
          "HR",
          27000,
          1,
          "Vijayawada",
          2025
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 52,
    "title": "Basic Compensation Overview",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "The payroll department is reviewing base salaries across the organization. Produce a report displaying each employee's name alongside their current monthly salary.",
    "requirements": [
      "Display employee name (`emp_name`) and monthly salary (`salary`).",
      "Include all records from the Employees table."
    ],
    "tableName": "Employees",
    "hint": "Specify only the employee name and salary columns in your projection.",
    "expectedSql": "SELECT emp_name, salary FROM Employees;",
    "explanation": "Explicitly projecting columns reduces network payload and improves query performance over SELECT *.",
    "tags": [
      "select",
      "columns",
      "projection"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary"
      ],
      "values": [
        [
          "Anil",
          25000
        ],
        [
          "Bhumika",
          40000
        ],
        [
          "Chetan",
          55000
        ],
        [
          "Dhruv",
          65000
        ],
        [
          "Farah",
          32000
        ],
        [
          "Girish",
          80000
        ],
        [
          "Harsha",
          45000
        ],
        [
          "Isha",
          28000
        ],
        [
          "Kiran",
          70000
        ],
        [
          "Meena",
          60000
        ],
        [
          "Naveen",
          35000
        ],
        [
          "Priya",
          75000
        ],
        [
          "Rahul",
          30000
        ],
        [
          "Sneha",
          48000
        ],
        [
          "Varun",
          68000
        ],
        [
          "Divya",
          42000
        ],
        [
          "Manoj",
          52000
        ],
        [
          "Pooja",
          27000
        ],
        [
          "Arjun",
          90000
        ],
        [
          "Keerthi",
          55000
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 53,
    "title": "Staff Badge Credentials and Division Alignment",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Facilities administration is issuing updated security access cards. Extract each staff member's unique employee identifier, full name, and assigned operational department.",
    "requirements": [
      "Project employee ID (`emp_id`), full name (`emp_name`), and department (`department`).",
      "Retrieve data from the Employees table."
    ],
    "tableName": "Employees",
    "hint": "Select the three requested identification attributes from the Employees table.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees;",
    "explanation": "Column projections allow retrieving specific business attributes without extraneous information.",
    "tags": [
      "select",
      "columns",
      "fundamentals"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT"
        ],
        [
          102,
          "Bhumika",
          "HR"
        ],
        [
          103,
          "Chetan",
          "IT"
        ],
        [
          104,
          "Dhruv",
          "Finance"
        ],
        [
          105,
          "Farah",
          "HR"
        ],
        [
          106,
          "Girish",
          "Finance"
        ],
        [
          107,
          "Harsha",
          "IT"
        ],
        [
          108,
          "Isha",
          "Marketing"
        ],
        [
          109,
          "Kiran",
          "HR"
        ],
        [
          110,
          "Meena",
          "Marketing"
        ],
        [
          111,
          "Naveen",
          "Finance"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          113,
          "Rahul",
          "Sales"
        ],
        [
          114,
          "Sneha",
          "Sales"
        ],
        [
          115,
          "Varun",
          "Marketing"
        ],
        [
          116,
          "Divya",
          "Sales"
        ],
        [
          117,
          "Manoj",
          "IT"
        ],
        [
          118,
          "Pooja",
          "HR"
        ],
        [
          119,
          "Arjun",
          "Finance"
        ],
        [
          120,
          "Keerthi",
          "Sales"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 54,
    "title": "Department Operational Centers and Allocations",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "The executive finance committee requires an overview of corporate divisions. Retrieve the department name, headquarters location, and total operating budget for each department in the organization.",
    "requirements": [
      "Project department name (`dept_name`), office location (`location`), and budget (`budget`).",
      "Extract records from the Departments table."
    ],
    "tableName": "Departments",
    "hint": "Query the Departments table selecting the division name, location, and budget fields.",
    "expectedSql": "SELECT dept_name, location, budget FROM Departments;",
    "explanation": "Queries can target any table in the relational database by naming it in the FROM clause.",
    "tags": [
      "departments",
      "select",
      "projection"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "location",
        "budget"
      ],
      "values": [
        [
          "IT",
          "Bengaluru",
          1200000
        ],
        [
          "HR",
          "Bengaluru",
          500000
        ],
        [
          "Finance",
          "Hyderabad",
          1500000
        ],
        [
          "Marketing",
          "Chennai",
          800000
        ],
        [
          "Sales",
          "Hyderabad",
          950000
        ],
        [
          "Legal",
          "Hyderabad",
          400000
        ],
        [
          "Operations",
          "Chennai",
          650000
        ],
        [
          "R&D",
          "Bengaluru",
          1800000
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 55,
    "title": "Corporate Project Portfolio Status Tracking",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "The Project Management Office is preparing a portfolio health dashboard. Display the name of each corporate initiative and its current operational status.",
    "requirements": [
      "Select project name (`project_name`) and execution status (`status`).",
      "Source data from the Projects table."
    ],
    "tableName": "Projects",
    "hint": "Retrieve only the project name and status columns from the Projects table.",
    "expectedSql": "SELECT project_name, status FROM Projects;",
    "explanation": "Selecting key descriptive columns allows tracking status across projects.",
    "tags": [
      "projects",
      "select",
      "status"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_name",
        "status"
      ],
      "values": [
        [
          "Cloud Migration",
          "Active"
        ],
        [
          "ERP Modernization",
          "Completed"
        ],
        [
          "Global Talent Acquisition",
          "Active"
        ],
        [
          "Financial Audit Automation",
          "Active"
        ],
        [
          "Brand Revamp 2025",
          "Active"
        ],
        [
          "CRM Sales Pipeline",
          "Completed"
        ],
        [
          "Compliance Automation",
          "Planning"
        ],
        [
          "NextGen AI Suite",
          "Planning"
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 56,
    "title": "Executive Reporting Column Formatting",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Executive leadership prefers human-friendly headers in analytical reports. Retrieve each employee's name and salary, relabeling the columns to clearly distinguish full name and monthly compensation in the final output.",
    "requirements": [
      "Select employee name aliased as `employee_full_name`.",
      "Select monthly salary aliased as `monthly_salary`.",
      "Query from the Employees table."
    ],
    "tableName": "Employees",
    "hint": "Use column aliasing to assign the requested business-friendly headers to the projected fields.",
    "expectedSql": "SELECT emp_name AS employee_full_name, salary AS monthly_salary FROM Employees;",
    "explanation": "The AS keyword creates temporary result column headers without changing the underlying schema.",
    "tags": [
      "alias",
      "as",
      "formatting"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "employee_full_name",
        "monthly_salary"
      ],
      "values": [
        [
          "Anil",
          25000
        ],
        [
          "Bhumika",
          40000
        ],
        [
          "Chetan",
          55000
        ],
        [
          "Dhruv",
          65000
        ],
        [
          "Farah",
          32000
        ],
        [
          "Girish",
          80000
        ],
        [
          "Harsha",
          45000
        ],
        [
          "Isha",
          28000
        ],
        [
          "Kiran",
          70000
        ],
        [
          "Meena",
          60000
        ],
        [
          "Naveen",
          35000
        ],
        [
          "Priya",
          75000
        ],
        [
          "Rahul",
          30000
        ],
        [
          "Sneha",
          48000
        ],
        [
          "Varun",
          68000
        ],
        [
          "Divya",
          42000
        ],
        [
          "Manoj",
          52000
        ],
        [
          "Pooja",
          27000
        ],
        [
          "Arjun",
          90000
        ],
        [
          "Keerthi",
          55000
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 57,
    "title": "Departmental Financial Summary Labels",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Financial reporting systems require concise standardized column aliases for automated ingestion. Retrieve department names and budgets, formatting them with designated technical headers.",
    "requirements": [
      "Query the Departments table.",
      "Alias `dept_name` as `dept`.",
      "Alias `budget` as `annual_budget`."
    ],
    "tableName": "Departments",
    "hint": "Alias the department name column as dept and the budget column as annual_budget.",
    "expectedSql": "SELECT dept_name AS dept, budget AS annual_budget FROM Departments;",
    "explanation": "Aliasing is standard practice for conforming database columns to application DTO requirements.",
    "tags": [
      "alias",
      "departments",
      "reporting"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "dept",
        "annual_budget"
      ],
      "values": [
        [
          "IT",
          1200000
        ],
        [
          "HR",
          500000
        ],
        [
          "Finance",
          1500000
        ],
        [
          "Marketing",
          800000
        ],
        [
          "Sales",
          950000
        ],
        [
          "Legal",
          400000
        ],
        [
          "Operations",
          650000
        ],
        [
          "R&D",
          1800000
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 58,
    "title": "Annualized Compensation Projection",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Corporate accounting is forecasting annual base compensation obligations. For each employee, display their name and compute their full annual salary based on 12 months of pay.",
    "requirements": [
      "Display employee name (`emp_name`).",
      "Calculate monthly salary multiplied by 12, aliasing the result as `annual_salary`."
    ],
    "tableName": "Employees",
    "hint": "Multiply the monthly salary attribute by 12 within the column projection list.",
    "expectedSql": "SELECT emp_name, salary * 12 AS annual_salary FROM Employees;",
    "explanation": "Arithmetic expressions in the SELECT clause compute derived values on-the-fly.",
    "tags": [
      "arithmetic",
      "alias",
      "annual-salary"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "annual_salary"
      ],
      "values": [
        [
          "Anil",
          300000
        ],
        [
          "Bhumika",
          480000
        ],
        [
          "Chetan",
          660000
        ],
        [
          "Dhruv",
          780000
        ],
        [
          "Farah",
          384000
        ],
        [
          "Girish",
          960000
        ],
        [
          "Harsha",
          540000
        ],
        [
          "Isha",
          336000
        ],
        [
          "Kiran",
          840000
        ],
        [
          "Meena",
          720000
        ],
        [
          "Naveen",
          420000
        ],
        [
          "Priya",
          900000
        ],
        [
          "Rahul",
          360000
        ],
        [
          "Sneha",
          576000
        ],
        [
          "Varun",
          816000
        ],
        [
          "Divya",
          504000
        ],
        [
          "Manoj",
          624000
        ],
        [
          "Pooja",
          324000
        ],
        [
          "Arjun",
          1080000
        ],
        [
          "Keerthi",
          660000
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 59,
    "title": "Tenure Conversion to Operational Months",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Human Resources is calculating seniority milestones on a monthly cadence rather than years. Retrieve each staff member's name and their total career experience expressed in months.",
    "requirements": [
      "Select employee name (`emp_name`).",
      "Convert years of experience into months by multiplying by 12, aliasing the column as `experience_months`."
    ],
    "tableName": "Employees",
    "hint": "Multiply the experience field by 12 and assign the specified alias.",
    "expectedSql": "SELECT emp_name, experience * 12 AS experience_months FROM Employees;",
    "explanation": "Multiplication expressions allow unit conversions directly within SQL projection.",
    "tags": [
      "arithmetic",
      "alias",
      "conversion"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "experience_months"
      ],
      "values": [
        [
          "Anil",
          12
        ],
        [
          "Bhumika",
          36
        ],
        [
          "Chetan",
          60
        ],
        [
          "Dhruv",
          84
        ],
        [
          "Farah",
          24
        ],
        [
          "Girish",
          120
        ],
        [
          "Harsha",
          48
        ],
        [
          "Isha",
          12
        ],
        [
          "Kiran",
          96
        ],
        [
          "Meena",
          72
        ],
        [
          "Naveen",
          36
        ],
        [
          "Priya",
          108
        ],
        [
          "Rahul",
          24
        ],
        [
          "Sneha",
          60
        ],
        [
          "Varun",
          96
        ],
        [
          "Divya",
          36
        ],
        [
          "Manoj",
          72
        ],
        [
          "Pooja",
          12
        ],
        [
          "Arjun",
          132
        ],
        [
          "Keerthi",
          48
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 60,
    "title": "Project Capital Allocation in Thousands",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Executive slide decks present large budget allocations in thousands of dollars (K) for visual clarity. Display each project name alongside its total budget scaled into thousands.",
    "requirements": [
      "Query the Projects table.",
      "Select project name (`project_name`).",
      "Divide the budget by 1000, aliasing the result as `budget_in_thousands`."
    ],
    "tableName": "Projects",
    "hint": "Perform arithmetic division on the budget column and assign the designated alias.",
    "expectedSql": "SELECT project_name, budget / 1000 AS budget_in_thousands FROM Projects;",
    "explanation": "Division expressions scale large financial figures into readable units.",
    "tags": [
      "arithmetic",
      "division",
      "alias"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_name",
        "budget_in_thousands"
      ],
      "values": [
        [
          "Cloud Migration",
          250
        ],
        [
          "ERP Modernization",
          400
        ],
        [
          "Global Talent Acquisition",
          120
        ],
        [
          "Financial Audit Automation",
          300
        ],
        [
          "Brand Revamp 2025",
          180
        ],
        [
          "CRM Sales Pipeline",
          220
        ],
        [
          "Compliance Automation",
          90
        ],
        [
          "NextGen AI Suite",
          550
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 61,
    "title": "Distinct Functional Divisions Roster",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Organizational design is conducting an inventory of all operational departments that currently employ active personnel. Produce a deduplicated listing of all unique department names.",
    "requirements": [
      "Retrieve unique department names from the Employees table.",
      "Ensure duplicate department names are removed from the result set."
    ],
    "tableName": "Employees",
    "hint": "Eliminate duplicate values from the output using the distinct projection keyword.",
    "expectedSql": "SELECT DISTINCT department FROM Employees;",
    "explanation": "The DISTINCT keyword de-duplicates result sets, keeping only single occurrences of unique values.",
    "tags": [
      "distinct",
      "unique",
      "departments"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "department"
      ],
      "values": [
        [
          "IT"
        ],
        [
          "HR"
        ],
        [
          "Finance"
        ],
        [
          "Marketing"
        ],
        [
          "Sales"
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 62,
    "title": "Corporate Office Footprint Identification",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Facilities and real estate planning is mapping corporate branch locations. Extract a list of all distinct cities where company employees are currently stationed.",
    "requirements": [
      "Extract distinct city names from the Employees table.",
      "Ensure each office city appears exactly once."
    ],
    "tableName": "Employees",
    "hint": "Use distinct row projection on the city column to eliminate repeated locations.",
    "expectedSql": "SELECT DISTINCT city FROM Employees;",
    "explanation": "DISTINCT works on any scalar data type including strings and locations.",
    "tags": [
      "distinct",
      "city",
      "unique"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "city"
      ],
      "values": [
        [
          "Hyderabad"
        ],
        [
          "Vijayawada"
        ],
        [
          "Chennai"
        ],
        [
          "Bengaluru"
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 63,
    "title": "Historical Hiring Cohort Years",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Talent acquisition is analyzing employee retention across historical hiring cycles. Find all unique calendar years in which active employees joined the company.",
    "requirements": [
      "Select distinct joining years from the Employees table.",
      "Ensure each year appears only once in the final output."
    ],
    "tableName": "Employees",
    "hint": "Retrieve the distinct values present in the joining_year column.",
    "expectedSql": "SELECT DISTINCT joining_year FROM Employees;",
    "explanation": "DISTINCT on integer columns identifies the unique years of hiring cohorts.",
    "tags": [
      "distinct",
      "temporal",
      "years"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "joining_year"
      ],
      "values": [
        [
          2025
        ],
        [
          2023
        ],
        [
          2021
        ],
        [
          2019
        ],
        [
          2024
        ],
        [
          2016
        ],
        [
          2022
        ],
        [
          2018
        ],
        [
          2020
        ],
        [
          2017
        ],
        [
          2015
        ]
      ],
      "rowCount": 11
    }
  },
  {
    "id": 64,
    "title": "Project Lifecycle Status Inventory",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Agile process auditors need to identify all workflow stages currently assigned to corporate projects. Retrieve all distinct operational status designations present in the project portfolio.",
    "requirements": [
      "Query the Projects table.",
      "Return the unique set of status values without duplicates."
    ],
    "tableName": "Projects",
    "hint": "Apply distinct filtering to the status column in the Projects table.",
    "expectedSql": "SELECT DISTINCT status FROM Projects;",
    "explanation": "DISTINCT helps discover enum-like categories in business workflows.",
    "tags": [
      "distinct",
      "status",
      "projects"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "status"
      ],
      "values": [
        [
          "Active"
        ],
        [
          "Completed"
        ],
        [
          "Planning"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 65,
    "title": "Departmental Branch Footprint Matrix",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Easy",
    "problemStatement": "Workforce operations needs to understand which business units operate in which cities. Generate a deduplicated list of all unique department and city pairs represented in the workforce.",
    "requirements": [
      "Project department and city from the Employees table.",
      "Ensure each unique combination of department and city appears only once.",
      "Preserve column order: `department`, `city`."
    ],
    "tableName": "Employees",
    "hint": "Apply the distinct keyword across multiple projected columns.",
    "expectedSql": "SELECT DISTINCT department, city FROM Employees;",
    "explanation": "When multiple columns follow DISTINCT, uniqueness is evaluated on the tuple of values.",
    "tags": [
      "distinct",
      "multi-column",
      "combinations"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "city"
      ],
      "values": [
        [
          "IT",
          "Hyderabad"
        ],
        [
          "HR",
          "Vijayawada"
        ],
        [
          "Finance",
          "Chennai"
        ],
        [
          "HR",
          "Hyderabad"
        ],
        [
          "Finance",
          "Bengaluru"
        ],
        [
          "IT",
          "Vijayawada"
        ],
        [
          "Marketing",
          "Chennai"
        ],
        [
          "HR",
          "Bengaluru"
        ],
        [
          "Marketing",
          "Hyderabad"
        ],
        [
          "IT",
          "Bengaluru"
        ],
        [
          "Sales",
          "Vijayawada"
        ],
        [
          "Sales",
          "Hyderabad"
        ],
        [
          "Sales",
          "Bengaluru"
        ],
        [
          "IT",
          "Chennai"
        ],
        [
          "Finance",
          "Hyderabad"
        ],
        [
          "Sales",
          "Chennai"
        ]
      ],
      "rowCount": 16
    }
  },
  {
    "id": 66,
    "title": "Estimated Daily Wage Calculation",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Beginner",
    "problemStatement": "Contract compliance requires an estimate of daily labor costs assuming a standard 30-day billing month. Display each employee's name and their calculated daily wage.",
    "requirements": [
      "Select employee name (`emp_name`).",
      "Compute daily wage by dividing monthly salary by 30, aliasing the result as `daily_wage`."
    ],
    "tableName": "Employees",
    "hint": "Divide the salary column by 30 in the select clause and alias the result.",
    "expectedSql": "SELECT emp_name, salary / 30 AS daily_wage FROM Employees;",
    "explanation": "Mathematical operations in SQL support integer and floating-point division.",
    "tags": [
      "arithmetic",
      "division",
      "daily-wage"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "daily_wage"
      ],
      "values": [
        [
          "Anil",
          833
        ],
        [
          "Bhumika",
          1333
        ],
        [
          "Chetan",
          1833
        ],
        [
          "Dhruv",
          2166
        ],
        [
          "Farah",
          1066
        ],
        [
          "Girish",
          2666
        ],
        [
          "Harsha",
          1500
        ],
        [
          "Isha",
          933
        ],
        [
          "Kiran",
          2333
        ],
        [
          "Meena",
          2000
        ],
        [
          "Naveen",
          1166
        ],
        [
          "Priya",
          2500
        ],
        [
          "Rahul",
          1000
        ],
        [
          "Sneha",
          1600
        ],
        [
          "Varun",
          2266
        ],
        [
          "Divya",
          1400
        ],
        [
          "Manoj",
          1733
        ],
        [
          "Pooja",
          900
        ],
        [
          "Arjun",
          3000
        ],
        [
          "Keerthi",
          1833
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 67,
    "title": "Proposed Cost-of-Living Salary Revision",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Easy",
    "problemStatement": "The compensation committee is modeling a company-wide 10% cost-of-living salary adjustment. For each employee, display their name, current monthly salary, and projected revised salary reflecting a 10% increase.",
    "requirements": [
      "Select employee name (`emp_name`) and current salary (`salary`).",
      "Calculate revised salary as 110% of current salary (multiplying by 1.10), aliased as `revised_salary`."
    ],
    "tableName": "Employees",
    "hint": "Multiply current salary by 1.10 to compute the adjusted compensation.",
    "expectedSql": "SELECT emp_name, salary, salary * 1.10 AS revised_salary FROM Employees;",
    "explanation": "Multiplying by 1.10 applies a percentage increase directly within SQL.",
    "tags": [
      "arithmetic",
      "percentage",
      "hike"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary",
        "revised_salary"
      ],
      "values": [
        [
          "Anil",
          25000,
          27500.000000000004
        ],
        [
          "Bhumika",
          40000,
          44000
        ],
        [
          "Chetan",
          55000,
          60500.00000000001
        ],
        [
          "Dhruv",
          65000,
          71500
        ],
        [
          "Farah",
          32000,
          35200
        ],
        [
          "Girish",
          80000,
          88000
        ],
        [
          "Harsha",
          45000,
          49500.00000000001
        ],
        [
          "Isha",
          28000,
          30800.000000000004
        ],
        [
          "Kiran",
          70000,
          77000
        ],
        [
          "Meena",
          60000,
          66000
        ],
        [
          "Naveen",
          35000,
          38500
        ],
        [
          "Priya",
          75000,
          82500
        ],
        [
          "Rahul",
          30000,
          33000
        ],
        [
          "Sneha",
          48000,
          52800.00000000001
        ],
        [
          "Varun",
          68000,
          74800
        ],
        [
          "Divya",
          42000,
          46200.00000000001
        ],
        [
          "Manoj",
          52000,
          57200.00000000001
        ],
        [
          "Pooja",
          27000,
          29700.000000000004
        ],
        [
          "Arjun",
          90000,
          99000.00000000001
        ],
        [
          "Keerthi",
          55000,
          60500.00000000001
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 68,
    "title": "Flat Retention Bonus Projection",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Beginner",
    "problemStatement": "Human Resources is evaluating the budget impact of a flat 5,000 INR retention supplement added to each employee's monthly pay. Display each employee's name alongside their projected compensation with the increment.",
    "requirements": [
      "Select employee name (`emp_name`).",
      "Add 5000 to monthly salary, aliasing the calculated result as `incremented_salary`."
    ],
    "tableName": "Employees",
    "hint": "Add 5000 to the salary column and alias the resulting expression.",
    "expectedSql": "SELECT emp_name, salary + 5000 AS incremented_salary FROM Employees;",
    "explanation": "Addition operators allow applying flat stipends or allowances.",
    "tags": [
      "arithmetic",
      "addition",
      "salary"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "incremented_salary"
      ],
      "values": [
        [
          "Anil",
          30000
        ],
        [
          "Bhumika",
          45000
        ],
        [
          "Chetan",
          60000
        ],
        [
          "Dhruv",
          70000
        ],
        [
          "Farah",
          37000
        ],
        [
          "Girish",
          85000
        ],
        [
          "Harsha",
          50000
        ],
        [
          "Isha",
          33000
        ],
        [
          "Kiran",
          75000
        ],
        [
          "Meena",
          65000
        ],
        [
          "Naveen",
          40000
        ],
        [
          "Priya",
          80000
        ],
        [
          "Rahul",
          35000
        ],
        [
          "Sneha",
          53000
        ],
        [
          "Varun",
          73000
        ],
        [
          "Divya",
          47000
        ],
        [
          "Manoj",
          57000
        ],
        [
          "Pooja",
          32000
        ],
        [
          "Arjun",
          95000
        ],
        [
          "Keerthi",
          60000
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 69,
    "title": "Comprehensive Annual Package with Festive Bonus",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Easy",
    "problemStatement": "Benefits planning models a total annual compensation package structured as 12 monthly salaries plus 2 additional months of festive bonuses (14 months total). Display each employee's name and their total 14-month package.",
    "requirements": [
      "Select employee name (`emp_name`).",
      "Multiply monthly salary by 14, aliasing the total package as `total_annual_package`."
    ],
    "tableName": "Employees",
    "hint": "Calculate salary multiplied by 14 to reflect the 14-month compensation structure.",
    "expectedSql": "SELECT emp_name, salary * 14 AS total_annual_package FROM Employees;",
    "explanation": "Multiplication models realistic corporate compensation structures.",
    "tags": [
      "arithmetic",
      "bonus",
      "compensation"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "total_annual_package"
      ],
      "values": [
        [
          "Anil",
          350000
        ],
        [
          "Bhumika",
          560000
        ],
        [
          "Chetan",
          770000
        ],
        [
          "Dhruv",
          910000
        ],
        [
          "Farah",
          448000
        ],
        [
          "Girish",
          1120000
        ],
        [
          "Harsha",
          630000
        ],
        [
          "Isha",
          392000
        ],
        [
          "Kiran",
          980000
        ],
        [
          "Meena",
          840000
        ],
        [
          "Naveen",
          490000
        ],
        [
          "Priya",
          1050000
        ],
        [
          "Rahul",
          420000
        ],
        [
          "Sneha",
          672000
        ],
        [
          "Varun",
          952000
        ],
        [
          "Divya",
          588000
        ],
        [
          "Manoj",
          728000
        ],
        [
          "Pooja",
          378000
        ],
        [
          "Arjun",
          1260000
        ],
        [
          "Keerthi",
          770000
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 70,
    "title": "Usable Project Working Capital",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Easy",
    "problemStatement": "Financial risk governance mandates that 20% of every project budget be held back in a contingency reserve. For each corporate initiative, display the project name and the remaining 80% usable working capital.",
    "requirements": [
      "Query the Projects table.",
      "Select project name (`project_name`).",
      "Calculate 80% of budget (multiplying budget by 0.80), aliasing the figure as `net_usable_budget`."
    ],
    "tableName": "Projects",
    "hint": "Multiply budget by 0.80 in your column projection to compute net usable funds.",
    "expectedSql": "SELECT project_name, budget * 0.80 AS net_usable_budget FROM Projects;",
    "explanation": "Floating point multiplication is commonly used for reserve deductions and financial modeling.",
    "tags": [
      "arithmetic",
      "budget",
      "projects"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_name",
        "net_usable_budget"
      ],
      "values": [
        [
          "Cloud Migration",
          200000
        ],
        [
          "ERP Modernization",
          320000
        ],
        [
          "Global Talent Acquisition",
          96000
        ],
        [
          "Financial Audit Automation",
          240000
        ],
        [
          "Brand Revamp 2025",
          144000
        ],
        [
          "CRM Sales Pipeline",
          176000
        ],
        [
          "Compliance Automation",
          72000
        ],
        [
          "NextGen AI Suite",
          440000
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 71,
    "title": "Legal Entity Corporate Tagging",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Beginner",
    "problemStatement": "Legal compliance requires generating vendor reports where each staff record includes the formal corporate entity name. Display each employee's name alongside a constant column designating the corporate organization.",
    "requirements": [
      "Select employee name (`emp_name`).",
      "Include a literal string column with the value 'SQL Sprint Corp', aliased as `organization`."
    ],
    "tableName": "Employees",
    "hint": "Add a string literal enclosed in single quotes to your select list with the required alias.",
    "expectedSql": "SELECT emp_name, 'SQL Sprint Corp' AS organization FROM Employees;",
    "explanation": "String literals enclosed in single quotes project constant values for every row in the result set.",
    "tags": [
      "literal",
      "string",
      "constants"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "organization"
      ],
      "values": [
        [
          "Anil",
          "SQL Sprint Corp"
        ],
        [
          "Bhumika",
          "SQL Sprint Corp"
        ],
        [
          "Chetan",
          "SQL Sprint Corp"
        ],
        [
          "Dhruv",
          "SQL Sprint Corp"
        ],
        [
          "Farah",
          "SQL Sprint Corp"
        ],
        [
          "Girish",
          "SQL Sprint Corp"
        ],
        [
          "Harsha",
          "SQL Sprint Corp"
        ],
        [
          "Isha",
          "SQL Sprint Corp"
        ],
        [
          "Kiran",
          "SQL Sprint Corp"
        ],
        [
          "Meena",
          "SQL Sprint Corp"
        ],
        [
          "Naveen",
          "SQL Sprint Corp"
        ],
        [
          "Priya",
          "SQL Sprint Corp"
        ],
        [
          "Rahul",
          "SQL Sprint Corp"
        ],
        [
          "Sneha",
          "SQL Sprint Corp"
        ],
        [
          "Varun",
          "SQL Sprint Corp"
        ],
        [
          "Divya",
          "SQL Sprint Corp"
        ],
        [
          "Manoj",
          "SQL Sprint Corp"
        ],
        [
          "Pooja",
          "SQL Sprint Corp"
        ],
        [
          "Arjun",
          "SQL Sprint Corp"
        ],
        [
          "Keerthi",
          "SQL Sprint Corp"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 72,
    "title": "Employment Classification Indicator",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Beginner",
    "problemStatement": "HR payroll exports require an explicit employment classification label for benefits processing. Display employee name, department, and a static tag indicating full-time employment status.",
    "requirements": [
      "Select employee name (`emp_name`) and department (`department`).",
      "Include a static string literal 'Full-Time' aliased as `employment_type`."
    ],
    "tableName": "Employees",
    "hint": "Project the static text 'Full-Time' alongside the employee name and department.",
    "expectedSql": "SELECT emp_name, department, 'Full-Time' AS employment_type FROM Employees;",
    "explanation": "Static classification labels are frequently used in union operations and export pipelines.",
    "tags": [
      "literal",
      "employment-type",
      "constants"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "employment_type"
      ],
      "values": [
        [
          "Anil",
          "IT",
          "Full-Time"
        ],
        [
          "Bhumika",
          "HR",
          "Full-Time"
        ],
        [
          "Chetan",
          "IT",
          "Full-Time"
        ],
        [
          "Dhruv",
          "Finance",
          "Full-Time"
        ],
        [
          "Farah",
          "HR",
          "Full-Time"
        ],
        [
          "Girish",
          "Finance",
          "Full-Time"
        ],
        [
          "Harsha",
          "IT",
          "Full-Time"
        ],
        [
          "Isha",
          "Marketing",
          "Full-Time"
        ],
        [
          "Kiran",
          "HR",
          "Full-Time"
        ],
        [
          "Meena",
          "Marketing",
          "Full-Time"
        ],
        [
          "Naveen",
          "Finance",
          "Full-Time"
        ],
        [
          "Priya",
          "IT",
          "Full-Time"
        ],
        [
          "Rahul",
          "Sales",
          "Full-Time"
        ],
        [
          "Sneha",
          "Sales",
          "Full-Time"
        ],
        [
          "Varun",
          "Marketing",
          "Full-Time"
        ],
        [
          "Divya",
          "Sales",
          "Full-Time"
        ],
        [
          "Manoj",
          "IT",
          "Full-Time"
        ],
        [
          "Pooja",
          "HR",
          "Full-Time"
        ],
        [
          "Arjun",
          "Finance",
          "Full-Time"
        ],
        [
          "Keerthi",
          "Sales",
          "Full-Time"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 73,
    "title": "Reviews Lacking Awarded Bonuses",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Easy",
    "problemStatement": "Internal audit is reviewing annual performance appraisals where no financial incentive was allocated. Retrieve the review ID, employee ID, and performance rating for all evaluations where the bonus was not awarded.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Filter for evaluations where bonus is unassigned (NULL).",
      "Display review ID (`review_id`), employee ID (`emp_id`), and rating (`rating`)."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Check for the absence of a value in the bonus column using the null verification operator.",
    "expectedSql": "SELECT review_id, emp_id, rating FROM Performance_Reviews WHERE bonus IS NULL;",
    "explanation": "In SQL, NULL signifies unknown or missing data and cannot be checked with '= NULL'. Use 'IS NULL'.",
    "tags": [
      "null",
      "is-null",
      "performance-reviews"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating"
      ],
      "values": [
        [
          8,
          111,
          2
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 74,
    "title": "Verified Performance Incentive Payouts",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Easy",
    "problemStatement": "Payroll finance is preparing incentive disbursement files. Extract review records that have an approved, confirmed bonus payout, showing the review ID, employee ID, rating, and bonus amount.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Filter for evaluations that have a confirmed bonus value.",
      "Display `review_id`, `emp_id`, `rating`, and `bonus`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter for records where the bonus column contains an assigned, non-null value.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL;",
    "explanation": "The IS NOT NULL operator filters for populated values, ignoring rows with missing compensation.",
    "tags": [
      "null",
      "is-not-null",
      "filtering"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "bonus"
      ],
      "values": [
        [
          1,
          103,
          4,
          15000
        ],
        [
          2,
          104,
          4,
          18000
        ],
        [
          3,
          106,
          4,
          20000
        ],
        [
          4,
          106,
          5,
          25000
        ],
        [
          5,
          107,
          3,
          8000
        ],
        [
          6,
          109,
          4,
          18000
        ],
        [
          7,
          110,
          4,
          16000
        ],
        [
          9,
          112,
          4,
          20000
        ],
        [
          10,
          112,
          5,
          25000
        ],
        [
          11,
          114,
          4,
          12000
        ],
        [
          12,
          115,
          4,
          15000
        ],
        [
          13,
          116,
          3,
          7000
        ],
        [
          14,
          117,
          3,
          9000
        ],
        [
          15,
          119,
          5,
          25000
        ],
        [
          16,
          119,
          5,
          28000
        ],
        [
          17,
          119,
          5,
          30000
        ],
        [
          18,
          102,
          3,
          6000
        ]
      ],
      "rowCount": 17
    }
  },
  {
    "id": 75,
    "title": "Default Zero Baseline for Unassigned Bonuses",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Medium",
    "problemStatement": "Executive performance dashboards require numeric calculations without missing values. Display review ID, employee ID, rating, and bonus for all reviews, substituting 0 whenever a bonus is unassigned.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Display `review_id`, `emp_id`, `rating`.",
      "Replace unassigned bonus values with 0, aliasing the result as `final_bonus`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use a null-coalescing function to provide a fallback value of 0 when bonus is null.",
    "expectedSql": "SELECT review_id, emp_id, rating, COALESCE(bonus, 0) AS final_bonus FROM Performance_Reviews;",
    "explanation": "COALESCE returns the first non-null argument, safely replacing missing bonus entries with numeric zero.",
    "tags": [
      "coalesce",
      "null-handling",
      "expressions"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "final_bonus"
      ],
      "values": [
        [
          1,
          103,
          4,
          15000
        ],
        [
          2,
          104,
          4,
          18000
        ],
        [
          3,
          106,
          4,
          20000
        ],
        [
          4,
          106,
          5,
          25000
        ],
        [
          5,
          107,
          3,
          8000
        ],
        [
          6,
          109,
          4,
          18000
        ],
        [
          7,
          110,
          4,
          16000
        ],
        [
          8,
          111,
          2,
          0
        ],
        [
          9,
          112,
          4,
          20000
        ],
        [
          10,
          112,
          5,
          25000
        ],
        [
          11,
          114,
          4,
          12000
        ],
        [
          12,
          115,
          4,
          15000
        ],
        [
          13,
          116,
          3,
          7000
        ],
        [
          14,
          117,
          3,
          9000
        ],
        [
          15,
          119,
          5,
          25000
        ],
        [
          16,
          119,
          5,
          28000
        ],
        [
          17,
          119,
          5,
          30000
        ],
        [
          18,
          102,
          3,
          6000
        ]
      ],
      "rowCount": 18
    }
  },
  {
    "id": 76,
    "title": "Auditing Unassigned Incentive Reviews",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Beginner",
    "problemStatement": "Internal audit is reviewing appraisal records where no performance incentive was granted. Retrieve all columns for performance evaluations where the bonus is unassigned.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Filter for evaluations where the bonus is unassigned (NULL).",
      "Include all columns in the result set."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use the null check operator on the bonus column.",
    "expectedSql": "SELECT * FROM Performance_Reviews WHERE bonus IS NULL;",
    "explanation": "Standard equality (=) with NULL yields UNKNOWN in three-valued SQL logic; IS NULL must be used instead.",
    "tags": [
      "where",
      "null",
      "filtering"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "review_year",
        "rating",
        "bonus",
        "feedback"
      ],
      "values": [
        [
          8,
          111,
          2024,
          2,
          null,
          "Needs improvement in quarterly reporting timelines"
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 77,
    "title": "Active Modern Corporate Initiatives",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Easy",
    "problemStatement": "The strategic planning office needs a list of modern, active projects. Retrieve project ID, project name, budget, and start date for all initiatives currently marked as 'Active' that commenced on or after January 1, 2024.",
    "requirements": [
      "Select `project_id`, `project_name`, `budget`, and `start_date`.",
      "Filter for projects with an 'Active' status.",
      "Ensure start date is on or after January 1, 2024 ('2024-01-01')."
    ],
    "tableName": "Projects",
    "hint": "Combine equality on status with a date comparison condition using AND.",
    "expectedSql": "SELECT project_id, project_name, budget, start_date FROM Projects WHERE status = 'Active' AND start_date >= '2024-01-01';",
    "explanation": "Combines string equality and ISO date comparison using the logical AND operator.",
    "tags": [
      "where",
      "and",
      "dates"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "budget",
        "start_date"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          250000,
          "2024-01-15"
        ],
        [
          503,
          "Global Talent Acquisition",
          120000,
          "2024-03-01"
        ],
        [
          504,
          "Financial Audit Automation",
          300000,
          "2024-02-01"
        ],
        [
          505,
          "Brand Revamp 2025",
          180000,
          "2024-05-01"
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 78,
    "title": "Mid-Tier Operational Budget Allocations",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Easy",
    "problemStatement": "Corporate treasury is reviewing medium-scale operational divisions. Retrieve the department name, office location, and budget for all departments whose annual funding falls between 500,000 and 1,200,000, inclusive of both thresholds.",
    "requirements": [
      "Select `dept_name`, `location`, and `budget` from Departments.",
      "Filter for budgets between 500,000 and 1,200,000 inclusive."
    ],
    "tableName": "Departments",
    "hint": "Use an inclusive range operator to test the budget value.",
    "expectedSql": "SELECT dept_name, location, budget FROM Departments WHERE budget BETWEEN 500000 AND 1200000;",
    "explanation": "BETWEEN is inclusive of both lower and upper boundary values.",
    "tags": [
      "where",
      "between",
      "numeric"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "location",
        "budget"
      ],
      "values": [
        [
          "IT",
          "Bengaluru",
          1200000
        ],
        [
          "HR",
          "Bengaluru",
          500000
        ],
        [
          "Marketing",
          "Chennai",
          800000
        ],
        [
          "Sales",
          "Hyderabad",
          950000
        ],
        [
          "Operations",
          "Chennai",
          650000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 79,
    "title": "Senior Veteran Staff in Core Divisions",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is compiling a recognition list of long-tenured professionals in technology and finance. Find employee ID, name, department, and joining year for employees in IT or Finance who joined the company prior to 2020.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `joining_year`.",
      "Include staff from either the 'IT' or 'Finance' departments.",
      "Restrict to employees who joined before calendar year 2020."
    ],
    "tableName": "Employees",
    "hint": "Check department membership in the target list combined with a less-than condition on joining_year.",
    "expectedSql": "SELECT emp_id, emp_name, department, joining_year FROM Employees WHERE department IN ('IT', 'Finance') AND joining_year < 2020;",
    "explanation": "Parenthesizing or grouping set membership with an inequality isolates historical staff from designated divisions.",
    "tags": [
      "where",
      "in",
      "and",
      "logical-operators"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "joining_year"
      ],
      "values": [
        [
          104,
          "Dhruv",
          "Finance",
          2019
        ],
        [
          106,
          "Girish",
          "Finance",
          2016
        ],
        [
          112,
          "Priya",
          "IT",
          2017
        ],
        [
          119,
          "Arjun",
          "Finance",
          2015
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 80,
    "title": "Non-Execution Stage Corporate Initiatives",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Easy",
    "problemStatement": "Project portfolio managers need visibility into initiatives that are not currently in active development. Display the ID, name, and status of projects that are either completed or in planning.",
    "requirements": [
      "Query the Projects table.",
      "Display `project_id`, `project_name`, and `status`.",
      "Filter for projects in 'Completed' or 'Planning' status."
    ],
    "tableName": "Projects",
    "hint": "Check whether status matches any element in the set of target lifecycle states.",
    "expectedSql": "SELECT project_id, project_name, status FROM Projects WHERE status IN ('Completed', 'Planning');",
    "explanation": "IN acts as shorthand for multiple OR expressions against a common attribute.",
    "tags": [
      "where",
      "in",
      "status"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status"
      ],
      "values": [
        [
          502,
          "ERP Modernization",
          "Completed"
        ],
        [
          506,
          "CRM Sales Pipeline",
          "Completed"
        ],
        [
          507,
          "Compliance Automation",
          "Planning"
        ],
        [
          508,
          "NextGen AI Suite",
          "Planning"
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 81,
    "title": "Alphabetical Staff Directory Filter (P or S)",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Easy",
    "problemStatement": "Administrative personnel are generating index cards for employee directories. Display the employee ID, full name, and department for staff members whose first name begins with either the letter 'P' or 'S'.",
    "requirements": [
      "Select `emp_id`, `emp_name`, and `department` from Employees.",
      "Filter for names starting with capital letter 'P' or capital letter 'S'."
    ],
    "tableName": "Employees",
    "hint": "Combine two pattern matching conditions with wildcard suffixes using OR.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees WHERE emp_name LIKE 'P%' OR emp_name LIKE 'S%';",
    "explanation": "The percent wildcard (%) matches zero or more trailing characters.",
    "tags": [
      "where",
      "like",
      "wildcards"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          112,
          "Priya",
          "IT"
        ],
        [
          114,
          "Sneha",
          "Sales"
        ],
        [
          118,
          "Pooja",
          "HR"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 82,
    "title": "Process Automation Capital Investments",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Easy",
    "problemStatement": "The Chief Technology Officer is assessing investments in automated workflows. Retrieve complete project records for any initiative whose title references automation.",
    "requirements": [
      "Select all columns from the Projects table.",
      "Filter for project names containing the term 'Automation' anywhere within the title."
    ],
    "tableName": "Projects",
    "hint": "Use substring pattern matching with wildcards before and after the keyword 'Automation'.",
    "expectedSql": "SELECT * FROM Projects WHERE project_name LIKE '%Automation%';",
    "explanation": "Surrounding the pattern with '%' performs a substring containment search.",
    "tags": [
      "where",
      "like",
      "substring"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "dept_id",
        "budget",
        "start_date",
        "end_date",
        "status"
      ],
      "values": [
        [
          504,
          "Financial Audit Automation",
          3,
          300000,
          "2024-02-01",
          "2024-10-15",
          "Active"
        ],
        [
          507,
          "Compliance Automation",
          6,
          90000,
          "2025-02-01",
          "2025-09-30",
          "Planning"
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 83,
    "title": "High-Distinction Performance Feedback Search",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Medium",
    "problemStatement": "Executive leadership is auditing qualitative appraisal praise. Extract the review ID, employee ID, rating, and written feedback for performance reviews where comments highlight 'Exceptional' or 'Outstanding' contributions.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `feedback` from Performance_Reviews.",
      "Include reviews where feedback contains 'Exceptional' or 'Outstanding'."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Combine two partial text search patterns with an OR operator.",
    "expectedSql": "SELECT review_id, emp_id, rating, feedback FROM Performance_Reviews WHERE feedback LIKE '%Exceptional%' OR feedback LIKE '%Outstanding%';",
    "explanation": "Searches free-text appraisal commentary for positive recognition keywords.",
    "tags": [
      "where",
      "like",
      "text-search"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "feedback"
      ],
      "values": [
        [
          1,
          103,
          4,
          "Outstanding delivery on cloud modules"
        ],
        [
          2,
          104,
          4,
          "Exceptional attention to financial auditing accuracy"
        ],
        [
          15,
          119,
          5,
          "Consistently exceptional financial strategy"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 84,
    "title": "Department Naming Compliance Audit",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Medium",
    "problemStatement": "Brand communications is auditing department nomenclature. Find the department ID, department name, and location for all departments whose official name does not contain the letter 'e' (case-insensitive).",
    "requirements": [
      "Select `dept_id`, `dept_name`, and `location` from Departments.",
      "Exclude departments whose name includes the letter 'e'."
    ],
    "tableName": "Departments",
    "hint": "Use a negated pattern match to filter out names containing the letter 'e'.",
    "expectedSql": "SELECT dept_id, dept_name, location FROM Departments WHERE dept_name NOT LIKE '%e%';",
    "explanation": "NOT LIKE inverts wildcard pattern matching to exclude rows containing specific characters.",
    "tags": [
      "where",
      "not-like",
      "strings"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "location"
      ],
      "values": [
        [
          1,
          "IT",
          "Bengaluru"
        ],
        [
          2,
          "HR",
          "Bengaluru"
        ],
        [
          8,
          "R&D",
          "Bengaluru"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 85,
    "title": "Five-Letter Name Pattern Verification",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Hard",
    "problemStatement": "Data management is verifying badge naming formats for 5-letter name structures. Find all employees whose full name is exactly 5 characters long and terminates with the letter 'a'.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department` from Employees.",
      "Filter for names of exactly five characters terminating with 'a'."
    ],
    "tableName": "Employees",
    "hint": "Use four single-character wildcards followed by 'a' in your pattern match.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees WHERE emp_name LIKE '____a';",
    "explanation": "Each underscore (_) wildcard matches exactly one single character in standard SQL pattern matching.",
    "tags": [
      "where",
      "like",
      "underscore-wildcard"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          110,
          "Meena",
          "Marketing"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          114,
          "Sneha",
          "Sales"
        ],
        [
          116,
          "Divya",
          "Sales"
        ],
        [
          118,
          "Pooja",
          "HR"
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 86,
    "title": "High Annual Base Compensation Staff",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Easy",
    "problemStatement": "Executive compensation committees monitor high-earning staff. Identify employees whose annualized salary (monthly salary multiplied by 12) strictly exceeds 600,000, displaying their ID, name, monthly salary, and annualized salary.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `salary`, and computed annual salary aliased as `annual_salary`.",
      "Filter for records where annual earnings (monthly salary multiplied by 12) exceed 600,000."
    ],
    "tableName": "Employees",
    "hint": "Compute salary * 12 in both the projection and the filtering condition.",
    "expectedSql": "SELECT emp_id, emp_name, salary, (salary * 12) AS annual_salary FROM Employees WHERE (salary * 12) > 600000;",
    "explanation": "Mathematical expressions can be calculated and compared directly within the WHERE predicate.",
    "tags": [
      "where",
      "arithmetic",
      "numeric"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "salary",
        "annual_salary"
      ],
      "values": [
        [
          103,
          "Chetan",
          55000,
          660000
        ],
        [
          104,
          "Dhruv",
          65000,
          780000
        ],
        [
          106,
          "Girish",
          80000,
          960000
        ],
        [
          109,
          "Kiran",
          70000,
          840000
        ],
        [
          110,
          "Meena",
          60000,
          720000
        ],
        [
          112,
          "Priya",
          75000,
          900000
        ],
        [
          115,
          "Varun",
          68000,
          816000
        ],
        [
          117,
          "Manoj",
          52000,
          624000
        ],
        [
          119,
          "Arjun",
          90000,
          1080000
        ],
        [
          120,
          "Keerthi",
          55000,
          660000
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 87,
    "title": "Weekly Project Workload Outliers",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Medium",
    "problemStatement": "Resource managers are investigating workload distribution anomalies. Identify all project assignments where an employee is allocated either under 20 hours or over 35 hours per week.",
    "requirements": [
      "Display `emp_id`, `project_id`, `assigned_role`, and `hours_allocated` from Employee_Projects.",
      "Filter for allocations strictly below 20 hours or strictly above 35 hours."
    ],
    "tableName": "Employee_Projects",
    "hint": "Combine two numeric comparison inequalities using OR.",
    "expectedSql": "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects WHERE hours_allocated < 20 OR hours_allocated > 35;",
    "explanation": "Disjunctive bounds locate entries falling outside the standard bell curve of staffing capacity.",
    "tags": [
      "where",
      "range",
      "disjunction"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "project_id",
        "assigned_role",
        "hours_allocated"
      ],
      "values": [
        [
          103,
          502,
          "Backend Architect",
          15
        ],
        [
          107,
          501,
          "Full Stack Engineer",
          40
        ],
        [
          112,
          504,
          "Technical Advisor",
          15
        ],
        [
          119,
          504,
          "Finance Director",
          10
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 88,
    "title": "Southern Metropolitan Mid-Salary Staff",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Medium",
    "problemStatement": "Regional HR directors are reviewing compensation in southern tech hubs. Find all employees based in Chennai or Bengaluru whose monthly salary falls between 35,000 and 70,000, inclusive.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `city`, and `salary` from Employees.",
      "Filter for office locations in 'Chennai' or 'Bengaluru'.",
      "Filter for salaries between 35,000 and 70,000 inclusive."
    ],
    "tableName": "Employees",
    "hint": "Combine a location set check with an inclusive numeric salary range using AND.",
    "expectedSql": "SELECT emp_id, emp_name, city, salary FROM Employees WHERE city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000;",
    "explanation": "Combining discrete location filtering with a bounded salary interval isolates targeted regional talent bands.",
    "tags": [
      "where",
      "between",
      "in",
      "numeric"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "city",
        "salary"
      ],
      "values": [
        [
          104,
          "Dhruv",
          "Chennai",
          65000
        ],
        [
          109,
          "Kiran",
          "Bengaluru",
          70000
        ],
        [
          111,
          "Naveen",
          "Chennai",
          35000
        ],
        [
          115,
          "Varun",
          "Chennai",
          68000
        ],
        [
          116,
          "Divya",
          "Bengaluru",
          42000
        ],
        [
          117,
          "Manoj",
          "Chennai",
          52000
        ],
        [
          120,
          "Keerthi",
          "Chennai",
          55000
        ]
      ],
      "rowCount": 7
    }
  },
  {
    "id": 89,
    "title": "Merit-Driven High-Bonus Reviews",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Easy",
    "problemStatement": "The compensation committee is verifying high incentive payouts. Retrieve the review ID, employee ID, rating, and bonus for reviews that earned a high rating (4 or 5) and received a bonus strictly exceeding 15,000.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Display `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Filter for rating of at least 4 and bonus strictly greater than 15,000."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Combine a greater-than-or-equal condition on rating with a greater-than condition on bonus.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE rating >= 4 AND bonus > 15000;",
    "explanation": "Joint thresholds ensure both qualitative rating score and quantitative financial payout are high.",
    "tags": [
      "where",
      "numeric",
      "and"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "bonus"
      ],
      "values": [
        [
          2,
          104,
          4,
          18000
        ],
        [
          3,
          106,
          4,
          20000
        ],
        [
          4,
          106,
          5,
          25000
        ],
        [
          6,
          109,
          4,
          18000
        ],
        [
          7,
          110,
          4,
          16000
        ],
        [
          9,
          112,
          4,
          20000
        ],
        [
          10,
          112,
          5,
          25000
        ],
        [
          15,
          119,
          5,
          25000
        ],
        [
          16,
          119,
          5,
          28000
        ],
        [
          17,
          119,
          5,
          30000
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 90,
    "title": "Rapid-Career Young Professionals",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Medium",
    "problemStatement": "Leadership development is tracking fast-tracked young talent. Identify employees who are under 30 years of age and already possess 5 or more years of professional experience.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `age`, and `experience` from Employees.",
      "Filter for age strictly less than 30 and experience of at least 5 years."
    ],
    "tableName": "Employees",
    "hint": "Join an inequality condition on age with a greater-than-or-equal test on experience.",
    "expectedSql": "SELECT emp_id, emp_name, age, experience FROM Employees WHERE age < 30 AND experience >= 5;",
    "explanation": "Identifies early-career high achievers who have accumulated extensive domain experience.",
    "tags": [
      "where",
      "comparison",
      "and"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "experience"
      ],
      "values": [
        [
          103,
          "Chetan",
          28,
          5
        ],
        [
          110,
          "Meena",
          29,
          6
        ],
        [
          114,
          "Sneha",
          28,
          5
        ],
        [
          117,
          "Manoj",
          29,
          6
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 91,
    "title": "Tiered Divisional Salary Thresholds",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Hard",
    "problemStatement": "Compensation review applies different senior benchmarks depending on the division. Find employees who either work in IT and earn over 50,000, or work in HR and earn over 35,000.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary` from Employees.",
      "Match either condition: IT department with salary exceeding 50,000, or HR department with salary exceeding 35,000.",
      "Use parentheses to group compound conditions logically."
    ],
    "tableName": "Employees",
    "hint": "Wrap each department-and-salary pair in parentheses and connect them with OR.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE (department = 'IT' AND salary > 50000) OR (department = 'HR' AND salary > 35000);",
    "explanation": "Logical AND has higher precedence than OR. Parentheses eliminate ambiguity and guarantee intended business logic.",
    "tags": [
      "where",
      "precedence",
      "parentheses",
      "and-or"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          102,
          "Bhumika",
          "HR",
          40000
        ],
        [
          103,
          "Chetan",
          "IT",
          55000
        ],
        [
          109,
          "Kiran",
          "HR",
          70000
        ],
        [
          112,
          "Priya",
          "IT",
          75000
        ],
        [
          117,
          "Manoj",
          "IT",
          52000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 92,
    "title": "Strategic Budget Approvals for Core Units",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Medium",
    "problemStatement": "Finance leadership is auditing high-value projects in key departments. Identify initiatives where either Department 1 has allocated at least 250,000 or Department 3 has allocated at least 300,000.",
    "requirements": [
      "Display `project_id`, `project_name`, `dept_id`, and `budget` from Projects.",
      "Filter for Department 1 projects with budget of at least 250,000 OR Department 3 projects with budget of at least 300,000."
    ],
    "tableName": "Projects",
    "hint": "Group each department's budget criteria in parentheses and join them with an OR operator.",
    "expectedSql": "SELECT project_id, project_name, dept_id, budget FROM Projects WHERE (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000);",
    "explanation": "Evaluates multi-department capital allocation criteria with distinct departmental expenditure thresholds.",
    "tags": [
      "where",
      "precedence",
      "multi-condition"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "dept_id",
        "budget"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          1,
          250000
        ],
        [
          502,
          "ERP Modernization",
          1,
          400000
        ],
        [
          504,
          "Financial Audit Automation",
          3,
          300000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 93,
    "title": "Experienced Well-Compensated Branch Personnel",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is reviewing branch office compensation outside corporate headquarters. Find employees located outside Hyderabad who earn strictly more than 40,000 and possess at least 3 years of experience.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `city`, `salary`, and `experience` from Employees.",
      "Exclude staff stationed in 'Hyderabad'.",
      "Filter for salary strictly above 40,000 and experience of at least 3 years."
    ],
    "tableName": "Employees",
    "hint": "Combine a location inequality with numeric salary and experience conditions using AND.",
    "expectedSql": "SELECT emp_id, emp_name, city, salary, experience FROM Employees WHERE city != 'Hyderabad' AND salary > 40000 AND experience >= 3;",
    "explanation": "Applies negative equality alongside multiple positive numeric constraints across different attributes.",
    "tags": [
      "where",
      "inequality",
      "and"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "city",
        "salary",
        "experience"
      ],
      "values": [
        [
          104,
          "Dhruv",
          "Chennai",
          65000,
          7
        ],
        [
          106,
          "Girish",
          "Bengaluru",
          80000,
          10
        ],
        [
          107,
          "Harsha",
          "Vijayawada",
          45000,
          4
        ],
        [
          109,
          "Kiran",
          "Bengaluru",
          70000,
          8
        ],
        [
          112,
          "Priya",
          "Bengaluru",
          75000,
          9
        ],
        [
          115,
          "Varun",
          "Chennai",
          68000,
          8
        ],
        [
          116,
          "Divya",
          "Bengaluru",
          42000,
          3
        ],
        [
          117,
          "Manoj",
          "Chennai",
          52000,
          6
        ],
        [
          120,
          "Keerthi",
          "Chennai",
          55000,
          4
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 94,
    "title": "Elite Appraisal Benchmarks (2024 Cycle)",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Hard",
    "problemStatement": "The executive committee is identifying top performers from the 2024 evaluation cycle. Extract review records from 2024 that earned a perfect rating of 5, OR earned a rating of 4 with a bonus of at least 18,000.",
    "requirements": [
      "Select `review_id`, `emp_id`, `review_year`, `rating`, and `bonus` from Performance_Reviews.",
      "Filter strictly for the 2024 review cycle.",
      "Include reviews with a rating of 5 OR a rating of 4 accompanied by a bonus of 18,000 or higher."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Enforce review_year = 2024 and wrap the alternative top-performance conditions in parentheses.",
    "expectedSql": "SELECT review_id, emp_id, review_year, rating, bonus FROM Performance_Reviews WHERE review_year = 2024 AND (rating = 5 OR (rating = 4 AND bonus >= 18000));",
    "explanation": "Illustrates nested Boolean evaluation where the top score qualifies automatically, but second-tier scores require compensation verification.",
    "tags": [
      "where",
      "precedence",
      "nested-logic"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "review_year",
        "rating",
        "bonus"
      ],
      "values": [
        [
          2,
          104,
          2024,
          4,
          18000
        ],
        [
          4,
          106,
          2024,
          5,
          25000
        ],
        [
          6,
          109,
          2024,
          4,
          18000
        ],
        [
          10,
          112,
          2024,
          5,
          25000
        ],
        [
          17,
          119,
          2024,
          5,
          30000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 95,
    "title": "Recent Non-Sales Onboarding Cohort",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Medium",
    "problemStatement": "Talent acquisition is reviewing hiring retention for recent joiners across core business areas. Find all employees who joined the company between 2020 and 2023, inclusive, excluding the Sales division.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `joining_year` from Employees.",
      "Filter for joining years between 2020 and 2023 inclusive.",
      "Exclude employees assigned to the 'Sales' department."
    ],
    "tableName": "Employees",
    "hint": "Combine a range condition on joining_year with an inequality condition on department.",
    "expectedSql": "SELECT emp_id, emp_name, department, joining_year FROM Employees WHERE joining_year BETWEEN 2020 AND 2023 AND department != 'Sales';",
    "explanation": "Combines inclusive range filtering on a temporal column with categorical exclusion.",
    "tags": [
      "where",
      "between",
      "not-equal"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "joining_year"
      ],
      "values": [
        [
          102,
          "Bhumika",
          "HR",
          2023
        ],
        [
          103,
          "Chetan",
          "IT",
          2021
        ],
        [
          107,
          "Harsha",
          "IT",
          2022
        ],
        [
          110,
          "Meena",
          "Marketing",
          2020
        ],
        [
          111,
          "Naveen",
          "Finance",
          2023
        ],
        [
          117,
          "Manoj",
          "IT",
          2020
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 96,
    "title": "Regional Staffing Outside Major Tech Hubs",
    "topic": "WHERE & Operators",
    "subtopic": "Set Membership & Exclusion",
    "difficulty": "Easy",
    "problemStatement": "Corporate facilities is evaluating staffing levels in satellite branch offices. Retrieve employee ID, name, city, and department for staff members stationed anywhere other than the primary tech hubs of Hyderabad and Bengaluru.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `city`, and `department` from Employees.",
      "Exclude employees located in 'Hyderabad' or 'Bengaluru'."
    ],
    "tableName": "Employees",
    "hint": "Use a negated set membership condition on the city column.",
    "expectedSql": "SELECT emp_id, emp_name, city, department FROM Employees WHERE city NOT IN ('Hyderabad', 'Bengaluru');",
    "explanation": "NOT IN excludes entire sets of categorical literals in a single clean expression.",
    "tags": [
      "where",
      "not-in",
      "filtering"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "city",
        "department"
      ],
      "values": [
        [
          102,
          "Bhumika",
          "Vijayawada",
          "HR"
        ],
        [
          104,
          "Dhruv",
          "Chennai",
          "Finance"
        ],
        [
          107,
          "Harsha",
          "Vijayawada",
          "IT"
        ],
        [
          108,
          "Isha",
          "Chennai",
          "Marketing"
        ],
        [
          111,
          "Naveen",
          "Chennai",
          "Finance"
        ],
        [
          113,
          "Rahul",
          "Vijayawada",
          "Sales"
        ],
        [
          115,
          "Varun",
          "Chennai",
          "Marketing"
        ],
        [
          117,
          "Manoj",
          "Chennai",
          "IT"
        ],
        [
          118,
          "Pooja",
          "Vijayawada",
          "HR"
        ],
        [
          120,
          "Keerthi",
          "Chennai",
          "Sales"
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 97,
    "title": "Active Portfolio Pipeline Initiatives",
    "topic": "WHERE & Operators",
    "subtopic": "Set Membership & Exclusion",
    "difficulty": "Easy",
    "problemStatement": "Project operations is reviewing projects that are currently active in the workflow pipeline. Retrieve project ID, name, and status for projects that are neither completed nor on hold.",
    "requirements": [
      "Select `project_id`, `project_name`, and `status` from Projects.",
      "Exclude projects with a status of 'Completed' or 'On Hold'."
    ],
    "tableName": "Projects",
    "hint": "Filter out the two terminal lifecycle statuses using a negated set membership condition.",
    "expectedSql": "SELECT project_id, project_name, status FROM Projects WHERE status NOT IN ('Completed', 'On Hold');",
    "explanation": "Excludes closed or paused project states to display active workstreams.",
    "tags": [
      "where",
      "not-in",
      "status"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          "Active"
        ],
        [
          503,
          "Global Talent Acquisition",
          "Active"
        ],
        [
          504,
          "Financial Audit Automation",
          "Active"
        ],
        [
          505,
          "Brand Revamp 2025",
          "Active"
        ],
        [
          507,
          "Compliance Automation",
          "Planning"
        ],
        [
          508,
          "NextGen AI Suite",
          "Planning"
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 98,
    "title": "Bimodal Performance Review Outliers",
    "topic": "WHERE & Operators",
    "subtopic": "Set Membership & Exclusion",
    "difficulty": "Medium",
    "problemStatement": "Organizational psychologists are examining polarization in performance feedback. Retrieve review records where the evaluation rating is strictly either low-tier (1 or 2) or top-tier (5).",
    "requirements": [
      "Display `review_id`, `emp_id`, `rating`, and `feedback` from Performance_Reviews.",
      "Filter for evaluations with a rating of 1, 2, or 5."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Check whether the rating column matches any value in the list of target ratings.",
    "expectedSql": "SELECT review_id, emp_id, rating, feedback FROM Performance_Reviews WHERE rating IN (1, 2, 5);",
    "explanation": "IN matches discrete non-contiguous numeric values to isolate boundary performance outcomes.",
    "tags": [
      "where",
      "in",
      "numeric-sets"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "feedback"
      ],
      "values": [
        [
          4,
          106,
          5,
          "Top contributor across all finance operations"
        ],
        [
          8,
          111,
          2,
          "Needs improvement in quarterly reporting timelines"
        ],
        [
          10,
          112,
          5,
          "Promoted to project delivery lead"
        ],
        [
          15,
          119,
          5,
          "Consistently exceptional financial strategy"
        ],
        [
          16,
          119,
          5,
          "Spearheaded corporate cost optimization"
        ],
        [
          17,
          119,
          5,
          "Highest performance rating in company history"
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 99,
    "title": "Geographical Directory of Corporate Divisions",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Beginner",
    "problemStatement": "Corporate facilities requires an organized index of operational divisions. Display the department name, office location, and budget from the Departments table, sorted alphabetically by geographical location.",
    "requirements": [
      "Select `dept_name`, `location`, and `budget` from Departments.",
      "Sort the records by location in alphabetical ascending order (A to Z)."
    ],
    "tableName": "Departments",
    "hint": "Sort the output by the location column in ascending direction.",
    "expectedSql": "SELECT dept_name, location, budget FROM Departments ORDER BY location ASC;",
    "explanation": "ASC sorts textual data in lexicographical alphabetical sequence from A to Z.",
    "tags": [
      "order-by",
      "sorting",
      "asc"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "location",
        "budget"
      ],
      "values": [
        [
          "IT",
          "Bengaluru",
          1200000
        ],
        [
          "HR",
          "Bengaluru",
          500000
        ],
        [
          "R&D",
          "Bengaluru",
          1800000
        ],
        [
          "Marketing",
          "Chennai",
          800000
        ],
        [
          "Operations",
          "Chennai",
          650000
        ],
        [
          "Finance",
          "Hyderabad",
          1500000
        ],
        [
          "Sales",
          "Hyderabad",
          950000
        ],
        [
          "Legal",
          "Hyderabad",
          400000
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 100,
    "title": "Capital Project Investment Ranking",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Beginner",
    "problemStatement": "The investment committee is reviewing corporate capital allocations. Display the project ID, project name, and total budget for all projects, ranked from the highest-funded initiative to the lowest.",
    "requirements": [
      "Select `project_id`, `project_name`, and `budget` from Projects.",
      "Order results by budget from largest to smallest (descending)."
    ],
    "tableName": "Projects",
    "hint": "Sort by the budget column in descending order.",
    "expectedSql": "SELECT project_id, project_name, budget FROM Projects ORDER BY budget DESC;",
    "explanation": "DESC sorts numeric columns in descending order, placing the largest numbers at the top.",
    "tags": [
      "order-by",
      "sorting",
      "desc"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "budget"
      ],
      "values": [
        [
          508,
          "NextGen AI Suite",
          550000
        ],
        [
          502,
          "ERP Modernization",
          400000
        ],
        [
          504,
          "Financial Audit Automation",
          300000
        ],
        [
          501,
          "Cloud Migration",
          250000
        ],
        [
          506,
          "CRM Sales Pipeline",
          220000
        ],
        [
          505,
          "Brand Revamp 2025",
          180000
        ],
        [
          503,
          "Global Talent Acquisition",
          120000
        ],
        [
          507,
          "Compliance Automation",
          90000
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 101,
    "title": "Annual Incentive Payout Leaderboard",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Easy",
    "problemStatement": "Payroll leadership is auditing approved performance bonuses. Retrieve review ID, employee ID, rating, and bonus for all evaluations with an awarded bonus, ordered from the highest bonus amount to the lowest.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Filter for evaluations that have an awarded bonus.",
      "Display `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Sort the records by bonus in descending order."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Exclude null bonuses and sort descending by the bonus field.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL ORDER BY bonus DESC;",
    "explanation": "Filters out unassigned bonuses first, then orders the awarded compensation packages from highest to lowest.",
    "tags": [
      "order-by",
      "sorting",
      "null-handling"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "bonus"
      ],
      "values": [
        [
          17,
          119,
          5,
          30000
        ],
        [
          16,
          119,
          5,
          28000
        ],
        [
          4,
          106,
          5,
          25000
        ],
        [
          10,
          112,
          5,
          25000
        ],
        [
          15,
          119,
          5,
          25000
        ],
        [
          3,
          106,
          4,
          20000
        ],
        [
          9,
          112,
          4,
          20000
        ],
        [
          2,
          104,
          4,
          18000
        ],
        [
          6,
          109,
          4,
          18000
        ],
        [
          7,
          110,
          4,
          16000
        ],
        [
          1,
          103,
          4,
          15000
        ],
        [
          12,
          115,
          4,
          15000
        ],
        [
          11,
          114,
          4,
          12000
        ],
        [
          14,
          117,
          3,
          9000
        ],
        [
          5,
          107,
          3,
          8000
        ],
        [
          13,
          116,
          3,
          7000
        ],
        [
          18,
          102,
          3,
          6000
        ]
      ],
      "rowCount": 17
    }
  },
  {
    "id": 102,
    "title": "Resource Allocation Workload Queue",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Easy",
    "problemStatement": "Project operations is reviewing weekly staffing commitments. Retrieve employee ID, project ID, assigned role, and allocated hours from Employee_Projects, ordered from the lightest weekly commitment to the heaviest.",
    "requirements": [
      "Select `emp_id`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Order the output by allocated hours in ascending order (lowest first)."
    ],
    "tableName": "Employee_Projects",
    "hint": "Sort by hours_allocated in ascending direction.",
    "expectedSql": "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects ORDER BY hours_allocated ASC;",
    "explanation": "Ascending sort surfaces part-time or low-commitment assignments before full-time allocations.",
    "tags": [
      "order-by",
      "sorting",
      "asc"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "project_id",
        "assigned_role",
        "hours_allocated"
      ],
      "values": [
        [
          119,
          504,
          "Finance Director",
          10
        ],
        [
          103,
          502,
          "Backend Architect",
          15
        ],
        [
          112,
          504,
          "Technical Advisor",
          15
        ],
        [
          109,
          503,
          "HR Lead",
          20
        ],
        [
          106,
          504,
          "Compliance Officer",
          20
        ],
        [
          115,
          505,
          "Creative Director",
          20
        ],
        [
          115,
          506,
          "Campaign Strategist",
          20
        ],
        [
          112,
          501,
          "Project Manager",
          25
        ],
        [
          120,
          506,
          "Client Onboarding",
          25
        ],
        [
          117,
          502,
          "Database Specialist",
          30
        ],
        [
          105,
          503,
          "HR Coordinator",
          30
        ],
        [
          111,
          504,
          "Financial Analyst",
          30
        ],
        [
          110,
          505,
          "Marketing Manager",
          30
        ],
        [
          116,
          506,
          "Account Executive",
          30
        ],
        [
          103,
          501,
          "Lead Developer",
          35
        ],
        [
          102,
          503,
          "Recruiter",
          35
        ],
        [
          104,
          504,
          "Senior Auditor",
          35
        ],
        [
          108,
          505,
          "Content Strategist",
          35
        ],
        [
          114,
          506,
          "Sales Lead",
          35
        ],
        [
          107,
          501,
          "Full Stack Engineer",
          40
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 103,
    "title": "Hierarchical Departmental Compensation Order",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Easy",
    "problemStatement": "The executive compensation committee requires an organized workforce directory. Display employee ID, name, department, and salary, organized primarily by department alphabetically (A to Z) and secondarily by salary from highest to lowest within each department.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary` from Employees.",
      "Apply primary sorting on department in alphabetical ascending order.",
      "Apply secondary sorting on salary in descending order."
    ],
    "tableName": "Employees",
    "hint": "Specify multiple sort criteria: department ascending followed by salary descending.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees ORDER BY department ASC, salary DESC;",
    "explanation": "Multi-column sorting evaluates criteria left-to-right, grouping departments together and ranking internal compensations within each division.",
    "tags": [
      "order-by",
      "multi-column",
      "sorting"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          119,
          "Arjun",
          "Finance",
          90000
        ],
        [
          106,
          "Girish",
          "Finance",
          80000
        ],
        [
          104,
          "Dhruv",
          "Finance",
          65000
        ],
        [
          111,
          "Naveen",
          "Finance",
          35000
        ],
        [
          109,
          "Kiran",
          "HR",
          70000
        ],
        [
          102,
          "Bhumika",
          "HR",
          40000
        ],
        [
          105,
          "Farah",
          "HR",
          32000
        ],
        [
          118,
          "Pooja",
          "HR",
          27000
        ],
        [
          112,
          "Priya",
          "IT",
          75000
        ],
        [
          103,
          "Chetan",
          "IT",
          55000
        ],
        [
          117,
          "Manoj",
          "IT",
          52000
        ],
        [
          107,
          "Harsha",
          "IT",
          45000
        ],
        [
          101,
          "Anil",
          "IT",
          25000
        ],
        [
          115,
          "Varun",
          "Marketing",
          68000
        ],
        [
          110,
          "Meena",
          "Marketing",
          60000
        ],
        [
          108,
          "Isha",
          "Marketing",
          28000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ],
        [
          114,
          "Sneha",
          "Sales",
          48000
        ],
        [
          116,
          "Divya",
          "Sales",
          42000
        ],
        [
          113,
          "Rahul",
          "Sales",
          30000
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 104,
    "title": "Historical Performance Appraisal Chronology",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Medium",
    "problemStatement": "Talent development is reviewing employee appraisal trajectories. Display review ID, employee ID, rating, and review year, sorted primarily by rating from highest to lowest, and secondarily chronologically by review year from earliest to latest.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `review_year` from Performance_Reviews.",
      "Sort primarily by rating in descending order.",
      "Sort secondarily by review year in ascending order."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Sort by rating descending, then by review_year ascending.",
    "expectedSql": "SELECT review_id, emp_id, rating, review_year FROM Performance_Reviews ORDER BY rating DESC, review_year ASC;",
    "explanation": "Allows appraisal evaluators to view top performers first, organized chronologically from earliest review to latest.",
    "tags": [
      "order-by",
      "multi-column",
      "hierarchical"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "review_year"
      ],
      "values": [
        [
          15,
          119,
          5,
          2022
        ],
        [
          16,
          119,
          5,
          2023
        ],
        [
          4,
          106,
          5,
          2024
        ],
        [
          10,
          112,
          5,
          2024
        ],
        [
          17,
          119,
          5,
          2024
        ],
        [
          3,
          106,
          4,
          2023
        ],
        [
          9,
          112,
          4,
          2023
        ],
        [
          1,
          103,
          4,
          2024
        ],
        [
          2,
          104,
          4,
          2024
        ],
        [
          6,
          109,
          4,
          2024
        ],
        [
          7,
          110,
          4,
          2024
        ],
        [
          11,
          114,
          4,
          2024
        ],
        [
          12,
          115,
          4,
          2024
        ],
        [
          5,
          107,
          3,
          2024
        ],
        [
          13,
          116,
          3,
          2024
        ],
        [
          14,
          117,
          3,
          2024
        ],
        [
          18,
          102,
          3,
          2024
        ],
        [
          8,
          111,
          2,
          2024
        ]
      ],
      "rowCount": 18
    }
  },
  {
    "id": 105,
    "title": "Lifecycle Status Initiative Timeline",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Medium",
    "problemStatement": "The PMO is reviewing corporate projects grouped by current state. Retrieve project ID, name, status, and start date, ordered primarily by project status alphabetically, and secondarily by start date from most recent to oldest.",
    "requirements": [
      "Select `project_id`, `project_name`, `status`, and `start_date` from Projects.",
      "Sort primarily by status in alphabetical ascending order.",
      "Sort secondarily by start date in descending order (newest first)."
    ],
    "tableName": "Projects",
    "hint": "Order by status ASC and start_date DESC.",
    "expectedSql": "SELECT project_id, project_name, status, start_date FROM Projects ORDER BY status ASC, start_date DESC;",
    "explanation": "Clusters projects having the same operational status while displaying recently launched initiatives at the head of each cluster.",
    "tags": [
      "order-by",
      "multi-column",
      "date-sorting"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status",
        "start_date"
      ],
      "values": [
        [
          505,
          "Brand Revamp 2025",
          "Active",
          "2024-05-01"
        ],
        [
          503,
          "Global Talent Acquisition",
          "Active",
          "2024-03-01"
        ],
        [
          504,
          "Financial Audit Automation",
          "Active",
          "2024-02-01"
        ],
        [
          501,
          "Cloud Migration",
          "Active",
          "2024-01-15"
        ],
        [
          506,
          "CRM Sales Pipeline",
          "Completed",
          "2023-09-01"
        ],
        [
          502,
          "ERP Modernization",
          "Completed",
          "2023-06-01"
        ],
        [
          507,
          "Compliance Automation",
          "Planning",
          "2025-02-01"
        ],
        [
          508,
          "NextGen AI Suite",
          "Planning",
          "2025-01-01"
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 106,
    "title": "Tri-Factor Talent Distribution Hierarchy",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Hard",
    "problemStatement": "HR analytics requires a structured talent roster across office locations. Display employee ID, name, city, and years of experience, ordered primarily by city (A to Z), secondarily by experience from most seasoned to junior, and finally alphabetically by employee name.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `city`, and `experience` from Employees.",
      "Sort primarily by city ascending, secondarily by experience descending, and thirdly by employee name ascending."
    ],
    "tableName": "Employees",
    "hint": "Provide three ordering expressions separated by commas with their respective directions.",
    "expectedSql": "SELECT emp_id, emp_name, city, experience FROM Employees ORDER BY city ASC, experience DESC, emp_name ASC;",
    "explanation": "A three-level sort completely eliminates arbitrary row ordering when dealing with identical cities and experience levels.",
    "tags": [
      "order-by",
      "multi-column",
      "tie-breaker"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "city",
        "experience"
      ],
      "values": [
        [
          106,
          "Girish",
          "Bengaluru",
          10
        ],
        [
          112,
          "Priya",
          "Bengaluru",
          9
        ],
        [
          109,
          "Kiran",
          "Bengaluru",
          8
        ],
        [
          116,
          "Divya",
          "Bengaluru",
          3
        ],
        [
          115,
          "Varun",
          "Chennai",
          8
        ],
        [
          104,
          "Dhruv",
          "Chennai",
          7
        ],
        [
          117,
          "Manoj",
          "Chennai",
          6
        ],
        [
          120,
          "Keerthi",
          "Chennai",
          4
        ],
        [
          111,
          "Naveen",
          "Chennai",
          3
        ],
        [
          108,
          "Isha",
          "Chennai",
          1
        ],
        [
          119,
          "Arjun",
          "Hyderabad",
          11
        ],
        [
          110,
          "Meena",
          "Hyderabad",
          6
        ],
        [
          103,
          "Chetan",
          "Hyderabad",
          5
        ],
        [
          114,
          "Sneha",
          "Hyderabad",
          5
        ],
        [
          105,
          "Farah",
          "Hyderabad",
          2
        ],
        [
          101,
          "Anil",
          "Hyderabad",
          1
        ],
        [
          107,
          "Harsha",
          "Vijayawada",
          4
        ],
        [
          102,
          "Bhumika",
          "Vijayawada",
          3
        ],
        [
          113,
          "Rahul",
          "Vijayawada",
          2
        ],
        [
          118,
          "Pooja",
          "Vijayawada",
          1
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 107,
    "title": "Top Three Capital-Intensive Programs",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Easy",
    "problemStatement": "Executive governance requires a briefing on the company's three largest capital commitments. Display the project ID, project name, and budget for the 3 highest-budget projects in the portfolio.",
    "requirements": [
      "Display `project_id`, `project_name`, and `budget` from Projects.",
      "Order projects by budget from highest to lowest.",
      "Limit the returned records to exactly the top 3 initiatives."
    ],
    "tableName": "Projects",
    "hint": "Sort by budget descending and restrict the row count to 3.",
    "expectedSql": "SELECT project_id, project_name, budget FROM Projects ORDER BY budget DESC LIMIT 3;",
    "explanation": "LIMIT restricts the size of the final result set, which is combined with ORDER BY for Top-N analysis.",
    "tags": [
      "limit",
      "order-by",
      "top-n"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "budget"
      ],
      "values": [
        [
          508,
          "NextGen AI Suite",
          550000
        ],
        [
          502,
          "ERP Modernization",
          400000
        ],
        [
          504,
          "Financial Audit Automation",
          300000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 108,
    "title": "Executive Compensation Pagination (Page 2)",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Medium",
    "problemStatement": "The administrative reporting portal displays workforce payroll across multiple pages, with 5 records per page. Produce Page 2 of the company payroll ranking, showing employees ranked by salary descending (records 6 through 10).",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary` from Employees.",
      "Sort by salary in descending order.",
      "Retrieve exactly 5 records, skipping the first 5 highest earners."
    ],
    "tableName": "Employees",
    "hint": "Combine a row count limit of 5 with an offset of 5 rows.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 5 OFFSET 5;",
    "explanation": "OFFSET skips a specified number of leading records before returning rows, which powers web UI pagination.",
    "tags": [
      "limit",
      "offset",
      "pagination"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          104,
          "Dhruv",
          "Finance",
          65000
        ],
        [
          110,
          "Meena",
          "Marketing",
          60000
        ],
        [
          103,
          "Chetan",
          "IT",
          55000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ],
        [
          117,
          "Manoj",
          "IT",
          52000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 109,
    "title": "Project Catalog Pagination (Page 2)",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Easy",
    "problemStatement": "The project tracking system renders initiatives in pages of 3 items sorted by ID ascending. Generate Page 2 of the catalog (projects 4, 5, and 6).",
    "requirements": [
      "Display `project_id`, `project_name`, and `status` from Projects.",
      "Sort by `project_id` in ascending order.",
      "Fetch 3 records after skipping the first 3."
    ],
    "tableName": "Projects",
    "hint": "Sort by project_id ascending and use pagination to fetch 3 rows after skipping 3.",
    "expectedSql": "SELECT project_id, project_name, status FROM Projects ORDER BY project_id ASC LIMIT 3 OFFSET 3;",
    "explanation": "Standard deterministic pagination requires ordering by a unique key such as project_id.",
    "tags": [
      "limit",
      "offset",
      "pagination"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status"
      ],
      "values": [
        [
          504,
          "Financial Audit Automation",
          "Active"
        ],
        [
          505,
          "Brand Revamp 2025",
          "Active"
        ],
        [
          506,
          "CRM Sales Pipeline",
          "Completed"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 110,
    "title": "Lowest Weekly Capacity Allocations",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Medium",
    "problemStatement": "Resource management is identifying lightweight project commitments. Find the 2 assignments with the fewest allocated weekly hours in Employee_Projects, breaking ties by employee ID ascending.",
    "requirements": [
      "Select `emp_id`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Order primarily by allocated hours ascending and secondarily by employee ID ascending.",
      "Limit the result to the 2 lowest allocations."
    ],
    "tableName": "Employee_Projects",
    "hint": "Sort by hours_allocated ASC, emp_id ASC and limit the output to 2 rows.",
    "expectedSql": "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects ORDER BY hours_allocated ASC, emp_id ASC LIMIT 2;",
    "explanation": "Bottom-N analysis sorts in ascending order with a strict LIMIT threshold and deterministic secondary key.",
    "tags": [
      "limit",
      "bottom-n",
      "tie-breaker"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "project_id",
        "assigned_role",
        "hours_allocated"
      ],
      "values": [
        [
          119,
          504,
          "Finance Director",
          10
        ],
        [
          103,
          502,
          "Backend Architect",
          15
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 111,
    "title": "Incentive Leaderboard with Null Deprioritization",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Hard",
    "problemStatement": "Executive dashboards rank performance bonuses but require that reviews without any awarded bonus appear at the very bottom of the list. Display review ID, employee ID, rating, and bonus, ordering by bonus from highest to lowest while placing unassigned bonuses last.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `bonus` from Performance_Reviews.",
      "Order so that reviews with confirmed bonuses appear first, sorted by bonus descending.",
      "Ensure all evaluations with unassigned bonuses (NULL) appear at the bottom."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use a conditional ordering expression to flag null bonuses, followed by bonus descending.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews ORDER BY CASE WHEN bonus IS NULL THEN 1 ELSE 0 END, bonus DESC;",
    "explanation": "In SQLite/MySQL, ordering by a boolean CASE expression before the target column explicitly controls NULL placement.",
    "tags": [
      "order-by",
      "null-precedence",
      "case"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "bonus"
      ],
      "values": [
        [
          17,
          119,
          5,
          30000
        ],
        [
          16,
          119,
          5,
          28000
        ],
        [
          4,
          106,
          5,
          25000
        ],
        [
          10,
          112,
          5,
          25000
        ],
        [
          15,
          119,
          5,
          25000
        ],
        [
          3,
          106,
          4,
          20000
        ],
        [
          9,
          112,
          4,
          20000
        ],
        [
          2,
          104,
          4,
          18000
        ],
        [
          6,
          109,
          4,
          18000
        ],
        [
          7,
          110,
          4,
          16000
        ],
        [
          1,
          103,
          4,
          15000
        ],
        [
          12,
          115,
          4,
          15000
        ],
        [
          11,
          114,
          4,
          12000
        ],
        [
          14,
          117,
          3,
          9000
        ],
        [
          5,
          107,
          3,
          8000
        ],
        [
          13,
          116,
          3,
          7000
        ],
        [
          18,
          102,
          3,
          6000
        ],
        [
          8,
          111,
          2,
          null
        ]
      ],
      "rowCount": 18
    }
  },
  {
    "id": 112,
    "title": "Annualized Workforce Compensation Ranking",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Medium",
    "problemStatement": "Financial modeling is analyzing annualized employee cost rankings. Display each employee's ID, name, monthly salary, and calculated annual salary (salary * 12), ordered from the highest annual compensation to the lowest.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `salary`, and computed annual salary aliased as `annual_salary`.",
      "Sort the records by the computed annual salary in descending order."
    ],
    "tableName": "Employees",
    "hint": "Order the output by the calculated annual compensation expression in descending order.",
    "expectedSql": "SELECT emp_id, emp_name, salary, (salary * 12) AS annual_salary FROM Employees ORDER BY (salary * 12) DESC;",
    "explanation": "SQL allows expressions in the ORDER BY clause, computing sorts dynamically on runtime projections.",
    "tags": [
      "order-by",
      "calculated-column",
      "arithmetic"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "salary",
        "annual_salary"
      ],
      "values": [
        [
          119,
          "Arjun",
          90000,
          1080000
        ],
        [
          106,
          "Girish",
          80000,
          960000
        ],
        [
          112,
          "Priya",
          75000,
          900000
        ],
        [
          109,
          "Kiran",
          70000,
          840000
        ],
        [
          115,
          "Varun",
          68000,
          816000
        ],
        [
          104,
          "Dhruv",
          65000,
          780000
        ],
        [
          110,
          "Meena",
          60000,
          720000
        ],
        [
          103,
          "Chetan",
          55000,
          660000
        ],
        [
          120,
          "Keerthi",
          55000,
          660000
        ],
        [
          117,
          "Manoj",
          52000,
          624000
        ],
        [
          114,
          "Sneha",
          48000,
          576000
        ],
        [
          107,
          "Harsha",
          45000,
          540000
        ],
        [
          116,
          "Divya",
          42000,
          504000
        ],
        [
          102,
          "Bhumika",
          40000,
          480000
        ],
        [
          111,
          "Naveen",
          35000,
          420000
        ],
        [
          105,
          "Farah",
          32000,
          384000
        ],
        [
          113,
          "Rahul",
          30000,
          360000
        ],
        [
          108,
          "Isha",
          28000,
          336000
        ],
        [
          118,
          "Pooja",
          27000,
          324000
        ],
        [
          101,
          "Anil",
          25000,
          300000
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 113,
    "title": "Compensation-to-Experience Efficiency Ratio",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Hard",
    "problemStatement": "Compensation analytics evaluates talent return on investment by comparing salary to career tenure. For employees with at least 1 year of experience, calculate the compensation-to-experience ratio (salary divided by experience, rounded to 2 decimal places), and identify the top 5 highest-ratio staff members.",
    "requirements": [
      "Query the Employees table, filtering for employees with `experience > 0`.",
      "Display `emp_id`, `emp_name`, `salary`, `experience`, and the calculated ratio aliased as `pay_per_year_exp`.",
      "Order by the pay-to-experience ratio in descending order.",
      "Limit the final output to the top 5 records."
    ],
    "tableName": "Employees",
    "hint": "Compute salary / experience, sort descending by the expression, and limit to 5 rows.",
    "expectedSql": "SELECT emp_id, emp_name, salary, experience, ROUND(salary / experience, 2) AS pay_per_year_exp FROM Employees WHERE experience > 0 ORDER BY (salary / experience) DESC LIMIT 5;",
    "explanation": "Computes pay yield per unit of experience and retrieves the 5 steepest compensation-to-tenure trajectories.",
    "tags": [
      "order-by",
      "ratio",
      "calculated-column",
      "limit"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "salary",
        "experience",
        "pay_per_year_exp"
      ],
      "values": [
        [
          108,
          "Isha",
          28000,
          1,
          28000
        ],
        [
          118,
          "Pooja",
          27000,
          1,
          27000
        ],
        [
          101,
          "Anil",
          25000,
          1,
          25000
        ],
        [
          105,
          "Farah",
          32000,
          2,
          16000
        ],
        [
          113,
          "Rahul",
          30000,
          2,
          15000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 114,
    "title": "Enterprise Payroll Comprehensive Statistical Overview",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Beginner",
    "problemStatement": "The executive compensation committee requires a top-level statistical snapshot of workforce compensation. Produce a single-row executive summary displaying the minimum salary, maximum salary, average salary (rounded to 2 decimal places), and total cumulative payroll expenditure across all employees.",
    "requirements": [
      "Calculate minimum salary aliased as `min_sal`.",
      "Calculate maximum salary aliased as `max_sal`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_sal`.",
      "Calculate total payroll expenditure aliased as `total_payroll`.",
      "Return a single summary record from the Employees table."
    ],
    "tableName": "Employees",
    "hint": "Use MIN, MAX, AVG (with ROUND), and SUM aggregate functions across the salary column.",
    "expectedSql": "SELECT MIN(salary) AS min_sal, MAX(salary) AS max_sal, ROUND(AVG(salary), 2) AS avg_sal, SUM(salary) AS total_payroll FROM Employees;",
    "explanation": "Multiple aggregate functions can be executed in a single query to compute comprehensive statistical benchmarks across a table.",
    "tags": [
      "aggregates",
      "min",
      "max",
      "avg",
      "sum"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "min_sal",
        "max_sal",
        "avg_sal",
        "total_payroll"
      ],
      "values": [
        [
          25000,
          90000,
          51100,
          1022000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 115,
    "title": "Departmental Operating Budget Benchmark Summary",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Beginner",
    "problemStatement": "The corporate finance directorate is auditing annual operating budgets across all corporate divisions. Produce a consolidated summary showing the cumulative budget allocation, average departmental budget (rounded to 2 decimal places), and the single largest departmental budget.",
    "requirements": [
      "Query the Departments table.",
      "Calculate total budget across all departments aliased as `total_dept_budget`.",
      "Calculate average departmental budget rounded to 2 decimal places aliased as `avg_dept_budget`.",
      "Identify the highest budget allocation aliased as `max_dept_budget`."
    ],
    "tableName": "Departments",
    "hint": "Apply SUM, AVG with ROUND, and MAX on the budget attribute.",
    "expectedSql": "SELECT SUM(budget) AS total_dept_budget, ROUND(AVG(budget), 2) AS avg_dept_budget, MAX(budget) AS max_dept_budget FROM Departments;",
    "explanation": "Aggregates numerical budget allocations to summarize overall enterprise operational capital.",
    "tags": [
      "aggregates",
      "sum",
      "avg",
      "departments"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "total_dept_budget",
        "avg_dept_budget",
        "max_dept_budget"
      ],
      "values": [
        [
          7800000,
          975000,
          1800000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 116,
    "title": "Annual Performance Incentive Pool Audit",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Corporate accounting is auditing annual incentive payments. Compute the total number of reviews where an incentive was paid, the cumulative bonus pool distributed, and the average bonus payout (rounded to 2 decimal places).",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Count the number of non-null bonus payouts aliased as `bonus_count`.",
      "Calculate the sum of all distributed bonuses aliased as `total_bonus_payout`.",
      "Calculate the average bonus payout rounded to 2 decimal places aliased as `avg_bonus_payout`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Apply COUNT, SUM, and AVG on the bonus column; remember COUNT(column) ignores null values.",
    "expectedSql": "SELECT COUNT(bonus) AS bonus_count, SUM(bonus) AS total_bonus_payout, ROUND(AVG(bonus), 2) AS avg_bonus_payout FROM Performance_Reviews;",
    "explanation": "COUNT(column) automatically ignores NULL values, contrasting with COUNT(*) which counts all rows.",
    "tags": [
      "aggregates",
      "count",
      "null-handling",
      "sum",
      "avg"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "bonus_count",
        "total_bonus_payout",
        "avg_bonus_payout"
      ],
      "values": [
        [
          17,
          297000,
          17470.59
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 117,
    "title": "Active Portfolio Capital Commitment",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "The investment committee needs an assessment of corporate capital currently committed to in-progress initiatives. For projects marked as 'Active', calculate the total number of active initiatives and the combined capital budget committed to them.",
    "requirements": [
      "Query the Projects table filtering strictly for projects with 'Active' status.",
      "Count the active initiatives aliased as `active_projects`.",
      "Sum the budget commitments for active projects aliased as `total_active_budget`."
    ],
    "tableName": "Projects",
    "hint": "Filter for status = 'Active' in the WHERE clause, then calculate COUNT(*) and SUM(budget).",
    "expectedSql": "SELECT COUNT(*) AS active_projects, SUM(budget) AS total_active_budget FROM Projects WHERE status = 'Active';",
    "explanation": "Applies a WHERE filter before aggregating to restrict calculations strictly to active corporate projects.",
    "tags": [
      "aggregates",
      "where",
      "sum",
      "count"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "active_projects",
        "total_active_budget"
      ],
      "values": [
        [
          4,
          850000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 118,
    "title": "Enterprise Weekly Staff Allocation Totals",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Resource management is monitoring corporate utilization across initiatives. Calculate the total cumulative weekly hours committed across all assignments and the average hours allocated per assignment (rounded to 2 decimal places).",
    "requirements": [
      "Query the Employee_Projects table.",
      "Calculate total allocated weekly hours aliased as `total_weekly_hours`.",
      "Calculate average hours allocated per assignment rounded to 2 decimal places aliased as `avg_weekly_hours`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Apply SUM and AVG with ROUND to the hours_allocated column.",
    "expectedSql": "SELECT SUM(hours_allocated) AS total_weekly_hours, ROUND(AVG(hours_allocated), 2) AS avg_weekly_hours FROM Employee_Projects;",
    "explanation": "Measures aggregate human resource capacity committed across active initiatives.",
    "tags": [
      "aggregates",
      "workload",
      "sum",
      "avg"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "total_weekly_hours",
        "avg_weekly_hours"
      ],
      "values": [
        [
          535,
          26.75
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 119,
    "title": "Technical vs Non-Technical Workforce Breakdown",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Workforce analytics requires a single-row headcount comparison between technical and business staff. In one summary record, display the count of employees in the IT department alongside the count of employees in all other departments combined.",
    "requirements": [
      "Query the Employees table.",
      "Count staff members in the 'IT' department aliased as `it_count`.",
      "Count staff members outside the 'IT' department aliased as `non_it_count`.",
      "Return both metrics in a single summary row."
    ],
    "tableName": "Employees",
    "hint": "Use conditional aggregation with SUM and CASE to evaluate each group into separate columns.",
    "expectedSql": "SELECT SUM(CASE WHEN department = 'IT' THEN 1 ELSE 0 END) AS it_count, SUM(CASE WHEN department != 'IT' THEN 1 ELSE 0 END) AS non_it_count FROM Employees;",
    "explanation": "Conditional aggregation (CASE inside SUM/COUNT) pivots categorical counts into dedicated output columns.",
    "tags": [
      "aggregates",
      "conditional-aggregation",
      "case"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "it_count",
        "non_it_count"
      ],
      "values": [
        [
          5,
          15
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 120,
    "title": "Senior vs Junior Payroll Allocation Analysis",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Finance leadership is comparing corporate wage expenditure between experienced professionals and junior staff. Generate a single summary row displaying total payroll for seasoned personnel (5 or more years of experience) versus junior personnel (under 5 years of experience).",
    "requirements": [
      "Query the Employees table.",
      "Calculate cumulative payroll for staff with `experience >= 5`, aliased as `senior_payroll`.",
      "Calculate cumulative payroll for staff with `experience < 5`, aliased as `junior_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Use SUM with CASE expressions to conditionally accumulate salary based on years of experience.",
    "expectedSql": "SELECT SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END) AS senior_payroll, SUM(CASE WHEN experience < 5 THEN salary ELSE 0 END) AS junior_payroll FROM Employees;",
    "explanation": "Conditionally sums quantitative values based on logical boundary conditions.",
    "tags": [
      "aggregates",
      "conditional-aggregation",
      "case",
      "sum"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "senior_payroll",
        "junior_payroll"
      ],
      "values": [
        [
          663000,
          359000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 121,
    "title": "Performance Rating Tier Comparison",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is examining the balance between exceptional and standard performance appraisals. In a single row, count the total number of evaluations that received the top rating of 5 versus those that received a rating of 3 or lower.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Count evaluations with a rating of 5 aliased as `top_ratings`.",
      "Count evaluations with a rating of 3 or below aliased as `low_or_mid_ratings`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Apply conditional aggregation using SUM and CASE expressions based on the rating value.",
    "expectedSql": "SELECT SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS top_ratings, SUM(CASE WHEN rating <= 3 THEN 1 ELSE 0 END) AS low_or_mid_ratings FROM Performance_Reviews;",
    "explanation": "Produces a distribution summary of employee appraisal ratings in a single query.",
    "tags": [
      "aggregates",
      "conditional-aggregation",
      "case"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "top_ratings",
        "low_or_mid_ratings"
      ],
      "values": [
        [
          5,
          5
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 122,
    "title": "Initiative Lifecycle Pipeline Distribution",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "The PMO is reporting project portfolio health in a horizontal scorecard. In a single row, calculate the count of initiatives in 'Completed' status, 'Active' status, and 'Planning' status.",
    "requirements": [
      "Query the Projects table.",
      "Count completed projects aliased as `completed_count`.",
      "Count active projects aliased as `active_count`.",
      "Count planning projects aliased as `planning_count`."
    ],
    "tableName": "Projects",
    "hint": "Use three conditional SUM(CASE ...) expressions to pivot the counts of each status into columns.",
    "expectedSql": "SELECT SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count, SUM(CASE WHEN status = 'Active' THEN 1 ELSE 0 END) AS active_count, SUM(CASE WHEN status = 'Planning' THEN 1 ELSE 0 END) AS planning_count FROM Projects;",
    "explanation": "Pivots discrete categorical statuses into columnar metrics without requiring multiple queries.",
    "tags": [
      "aggregates",
      "case",
      "pivot"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "completed_count",
        "active_count",
        "planning_count"
      ],
      "values": [
        [
          2,
          4,
          2
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 123,
    "title": "Headquarters vs Branch Payroll Expenditure Split",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Corporate treasury is comparing headquarters wage expense against regional branches. Produce a single-row summary showing total payroll paid to employees stationed in Hyderabad headquarters versus all other office cities combined.",
    "requirements": [
      "Query the Employees table.",
      "Calculate total payroll for staff based in 'Hyderabad' aliased as `hyd_payroll`.",
      "Calculate total payroll for staff based in all other cities aliased as `other_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Use conditional SUM aggregation evaluating whether city equals 'Hyderabad' or not.",
    "expectedSql": "SELECT SUM(CASE WHEN city = 'Hyderabad' THEN salary ELSE 0 END) AS hyd_payroll, SUM(CASE WHEN city != 'Hyderabad' THEN salary ELSE 0 END) AS other_payroll FROM Employees;",
    "explanation": "Facilitates geographic financial reporting by segmenting expenditures based on regional criteria.",
    "tags": [
      "aggregates",
      "case",
      "payroll"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "hyd_payroll",
        "other_payroll"
      ],
      "values": [
        [
          310000,
          712000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 124,
    "title": "Organizational Breadth and Headcount Census",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Beginner",
    "problemStatement": "Executive leadership is evaluating corporate diversification. Produce a summary showing the count of unique operational departments, the count of unique office branch cities, and the total workforce headcount.",
    "requirements": [
      "Query the Employees table.",
      "Count distinct operational departments aliased as `unique_departments`.",
      "Count distinct office branch cities aliased as `unique_cities`.",
      "Count total employee records aliased as `total_employees`."
    ],
    "tableName": "Employees",
    "hint": "Apply COUNT(DISTINCT ...) on department and city, alongside COUNT(*) for overall headcount.",
    "expectedSql": "SELECT COUNT(DISTINCT department) AS unique_departments, COUNT(DISTINCT city) AS unique_cities, COUNT(*) AS total_employees FROM Employees;",
    "explanation": "COUNT(DISTINCT column) strips duplicate occurrences before evaluating aggregate cardinality.",
    "tags": [
      "aggregates",
      "count-distinct",
      "cardinality"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "unique_departments",
        "unique_cities",
        "total_employees"
      ],
      "values": [
        [
          5,
          4,
          20
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 125,
    "title": "Distinct Staff Active on Corporate Initiatives",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Project operations is determining the reach of initiatives across the company. Calculate the exact number of unique employees who have at least one active assignment in Employee_Projects.",
    "requirements": [
      "Query the Employee_Projects table.",
      "Count the number of distinct employee IDs assigned to projects.",
      "Alias the resulting metric as `staffed_employees`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use COUNT(DISTINCT emp_id) to eliminate duplicate employee records from multiple assignments.",
    "expectedSql": "SELECT COUNT(DISTINCT emp_id) AS staffed_employees FROM Employee_Projects;",
    "explanation": "Since some employees are assigned to multiple projects, COUNT(DISTINCT) ensures each employee is counted only once.",
    "tags": [
      "aggregates",
      "count-distinct",
      "junction-table"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "staffed_employees"
      ],
      "values": [
        [
          17
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 126,
    "title": "Historical Appraisal Cycle Inventory",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Human Resources is verifying the historical span of digital performance records. Count how many distinct calendar years are represented in the performance reviews repository.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Count the distinct review years recorded.",
      "Alias the count as `evaluated_years`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Apply the distinct counting function to the review_year column.",
    "expectedSql": "SELECT COUNT(DISTINCT review_year) AS evaluated_years FROM Performance_Reviews;",
    "explanation": "Evaluates the historical span of recorded appraisal cycles by deduplicating appraisal years.",
    "tags": [
      "aggregates",
      "count-distinct",
      "temporal"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "evaluated_years"
      ],
      "values": [
        [
          3
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 127,
    "title": "Active Project Lifecycle State Tally",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Governance is checking standardization across initiative workflows. Determine the total number of distinct lifecycle status classifications currently utilized in the Projects table.",
    "requirements": [
      "Query the Projects table.",
      "Count distinct status values.",
      "Alias the metric as `unique_statuses`."
    ],
    "tableName": "Projects",
    "hint": "Count distinct values in the status column.",
    "expectedSql": "SELECT COUNT(DISTINCT status) AS unique_statuses FROM Projects;",
    "explanation": "Identifies the variety of project lifecycle states currently occupied across corporate projects.",
    "tags": [
      "aggregates",
      "count-distinct"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "unique_statuses"
      ],
      "values": [
        [
          3
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 128,
    "title": "Mean Distinct Compensation Tier Evaluation",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Medium",
    "problemStatement": "Compensation analytics is evaluating wage distribution by analyzing distinct pay points. Calculate the average of all unique salary values present in the company (rounded to 2 decimal places), removing duplicate salary figures before averaging.",
    "requirements": [
      "Query the Employees table.",
      "Calculate the average of unique salary values, rounded to 2 decimal places.",
      "Alias the calculated metric as `avg_unique_salary`."
    ],
    "tableName": "Employees",
    "hint": "Apply AVG(DISTINCT salary) wrapped in ROUND to 2 decimal places.",
    "expectedSql": "SELECT ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary FROM Employees;",
    "explanation": "Averaging distinct salaries removes frequency weighting from identical compensation levels.",
    "tags": [
      "aggregates",
      "avg-distinct",
      "rounding"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "avg_unique_salary"
      ],
      "values": [
        [
          50894.74
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 129,
    "title": "Chennai Regional Office Payroll and Tenure Profile",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Regional management is reviewing labor costs and seniority for the Chennai branch. Calculate the cumulative payroll expenditure and average professional experience (rounded to 2 decimal places) for all employees located in Chennai.",
    "requirements": [
      "Query the Employees table filtering for staff in 'Chennai'.",
      "Calculate total salary for Chennai employees aliased as `chennai_payroll`.",
      "Calculate average years of experience rounded to 2 decimal places aliased as `avg_chennai_exp`."
    ],
    "tableName": "Employees",
    "hint": "Filter with city = 'Chennai' in the WHERE clause, then compute SUM(salary) and ROUND(AVG(experience), 2).",
    "expectedSql": "SELECT SUM(salary) AS chennai_payroll, ROUND(AVG(experience), 2) AS avg_chennai_exp FROM Employees WHERE city = 'Chennai';",
    "explanation": "Aggregates key human resources metrics for a specific geographical branch.",
    "tags": [
      "aggregates",
      "where",
      "filtering",
      "sum",
      "avg"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "chennai_payroll",
        "avg_chennai_exp"
      ],
      "values": [
        [
          303000,
          4.83
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 130,
    "title": "Appraisal Incentive Spread (2024 Cycle)",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "The compensation committee is analyzing incentive variance for the 2024 appraisal cycle. Find the highest and lowest bonus amounts awarded during the 2024 review year.",
    "requirements": [
      "Query the Performance_Reviews table filtering for `review_year = 2024`.",
      "Find the maximum bonus awarded in 2024 aliased as `max_2024_bonus`.",
      "Find the minimum bonus awarded in 2024 aliased as `min_2024_bonus`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter for review_year = 2024 and apply MAX and MIN to the bonus column.",
    "expectedSql": "SELECT MAX(bonus) AS max_2024_bonus, MIN(bonus) AS min_2024_bonus FROM Performance_Reviews WHERE review_year = 2024;",
    "explanation": "MIN() automatically ignores NULL values when calculating the lowest non-null payout.",
    "tags": [
      "aggregates",
      "min",
      "max",
      "where"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "max_2024_bonus",
        "min_2024_bonus"
      ],
      "values": [
        [
          30000,
          6000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 131,
    "title": "Engineering Division Internal Pay Disparity",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Medium",
    "problemStatement": "Workforce equity is reviewing compensation spreads within the technology division. Calculate the absolute salary difference between the highest-paid and lowest-paid employee in the IT department.",
    "requirements": [
      "Query the Employees table filtering strictly for the 'IT' department.",
      "Subtract the minimum salary from the maximum salary.",
      "Alias the calculated compensation spread as `it_salary_range`."
    ],
    "tableName": "Employees",
    "hint": "Subtract MIN(salary) from MAX(salary) within the IT department.",
    "expectedSql": "SELECT (MAX(salary) - MIN(salary)) AS it_salary_range FROM Employees WHERE department = 'IT';",
    "explanation": "Subtracting MIN from MAX produces the range or disparity between the highest and lowest earners in a division.",
    "tags": [
      "aggregates",
      "range",
      "subtraction",
      "where"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "it_salary_range"
      ],
      "values": [
        [
          50000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 132,
    "title": "Post-2020 High-Earning Talent Cohort",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Talent acquisition is tracking the hiring of well-compensated lateral recruits. Count how many employees joined the company after calendar year 2020 and earn a salary strictly greater than 40,000.",
    "requirements": [
      "Query the Employees table.",
      "Filter for `joining_year > 2020` and `salary > 40000`.",
      "Count the matching employees, aliasing the total as `high_earning_recent_joiners`."
    ],
    "tableName": "Employees",
    "hint": "Combine two filter conditions on joining_year and salary, then calculate COUNT(*).",
    "expectedSql": "SELECT COUNT(*) AS high_earning_recent_joiners FROM Employees WHERE joining_year > 2020 AND salary > 40000;",
    "explanation": "Counts personnel matching multiple criteria across temporal and compensation dimensions.",
    "tags": [
      "aggregates",
      "count",
      "where"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "high_earning_recent_joiners"
      ],
      "values": [
        [
          5
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 133,
    "title": "Capital Expenditure on Finalized Initiatives",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "The finance committee is reconciling historical investments in delivered programs. Calculate the total cumulative budget expended on all projects that have achieved 'Completed' status.",
    "requirements": [
      "Query the Projects table filtering for `status = 'Completed'`.",
      "Sum the budget allocations for these completed initiatives.",
      "Alias the total as `completed_project_spend`."
    ],
    "tableName": "Projects",
    "hint": "Filter for status = 'Completed' and apply SUM on budget.",
    "expectedSql": "SELECT SUM(budget) AS completed_project_spend FROM Projects WHERE status = 'Completed';",
    "explanation": "Sums financial expenditures of successfully finalized enterprise initiatives.",
    "tags": [
      "aggregates",
      "sum",
      "where",
      "status"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "completed_project_spend"
      ],
      "values": [
        [
          620000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 134,
    "title": "Core Administrative Demographic Overview",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is comparing demographic averages across corporate administrative functions. For employees in the HR and Finance departments combined, calculate the average employee age and average professional experience, each rounded to 1 decimal place.",
    "requirements": [
      "Query the Employees table filtering for staff in 'HR' or 'Finance'.",
      "Calculate average age rounded to 1 decimal place aliased as `avg_age`.",
      "Calculate average experience rounded to 1 decimal place aliased as `avg_exp`."
    ],
    "tableName": "Employees",
    "hint": "Filter with department IN ('HR', 'Finance') and apply AVG with ROUND to 1 decimal place.",
    "expectedSql": "SELECT ROUND(AVG(age), 1) AS avg_age, ROUND(AVG(experience), 1) AS avg_exp FROM Employees WHERE department IN ('HR', 'Finance');",
    "explanation": "Computes rounded demographic averages across multiple corporate business divisions.",
    "tags": [
      "aggregates",
      "avg",
      "rounding",
      "where"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "avg_age",
        "avg_exp"
      ],
      "values": [
        [
          28.5,
          5.6
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 135,
    "title": "Workforce Geographical Distribution by Department and City",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Easy",
    "problemStatement": "Organizational planning is mapping team placement across corporate office locations. For every unique combination of department and branch city, calculate the total employee headcount and average monthly salary (rounded to 2 decimal places).",
    "requirements": [
      "Group records by `department` and `city`.",
      "Calculate employee count aliased as `emp_count`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_salary`.",
      "Display `department`, `city`, `emp_count`, and `avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Group by both department and city, then calculate COUNT(*) and ROUND(AVG(salary), 2).",
    "expectedSql": "SELECT department, city, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department, city;",
    "explanation": "Grouping by multiple attributes partitions the dataset into composite cross-tabulated buckets.",
    "tags": [
      "group-by",
      "multi-column",
      "headcount"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "city",
        "emp_count",
        "avg_salary"
      ],
      "values": [
        [
          "Finance",
          "Bengaluru",
          1,
          80000
        ],
        [
          "Finance",
          "Chennai",
          2,
          50000
        ],
        [
          "Finance",
          "Hyderabad",
          1,
          90000
        ],
        [
          "HR",
          "Bengaluru",
          1,
          70000
        ],
        [
          "HR",
          "Hyderabad",
          1,
          32000
        ],
        [
          "HR",
          "Vijayawada",
          2,
          33500
        ],
        [
          "IT",
          "Bengaluru",
          1,
          75000
        ],
        [
          "IT",
          "Chennai",
          1,
          52000
        ],
        [
          "IT",
          "Hyderabad",
          2,
          40000
        ],
        [
          "IT",
          "Vijayawada",
          1,
          45000
        ],
        [
          "Marketing",
          "Chennai",
          2,
          48000
        ],
        [
          "Marketing",
          "Hyderabad",
          1,
          60000
        ],
        [
          "Sales",
          "Bengaluru",
          1,
          42000
        ],
        [
          "Sales",
          "Chennai",
          1,
          55000
        ],
        [
          "Sales",
          "Hyderabad",
          1,
          48000
        ],
        [
          "Sales",
          "Vijayawada",
          1,
          30000
        ]
      ],
      "rowCount": 16
    }
  },
  {
    "id": 136,
    "title": "Portfolio Budget Exposure by Department and Status",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "The finance governance committee is reviewing capital exposure across business units. For each department and project status combination in Projects, calculate the total number of initiatives and cumulative budget allocation.",
    "requirements": [
      "Group records in Projects by `dept_id` and `status`.",
      "Count initiatives in each grouping aliased as `project_count`.",
      "Sum the budget commitments aliased as `total_budget`.",
      "Display `dept_id`, `status`, `project_count`, and `total_budget`."
    ],
    "tableName": "Projects",
    "hint": "Apply GROUP BY on dept_id and status, calculating COUNT(*) and SUM(budget).",
    "expectedSql": "SELECT dept_id, status, COUNT(*) AS project_count, SUM(budget) AS total_budget FROM Projects GROUP BY dept_id, status;",
    "explanation": "Breaks down project investments within each department according to operational workflow status.",
    "tags": [
      "group-by",
      "multi-column",
      "projects",
      "sum"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "status",
        "project_count",
        "total_budget"
      ],
      "values": [
        [
          1,
          "Active",
          1,
          250000
        ],
        [
          1,
          "Completed",
          1,
          400000
        ],
        [
          2,
          "Active",
          1,
          120000
        ],
        [
          3,
          "Active",
          1,
          300000
        ],
        [
          4,
          "Active",
          1,
          180000
        ],
        [
          5,
          "Completed",
          1,
          220000
        ],
        [
          6,
          "Planning",
          1,
          90000
        ],
        [
          8,
          "Planning",
          1,
          550000
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 137,
    "title": "Historical Appraisal Rating and Bonus Distribution Matrix",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Compensation analytics is evaluating annual rating distributions and incentive payouts. For each review year and performance rating tier, calculate the total count of appraisals and cumulative bonuses distributed (defaulting unassigned bonuses to 0).",
    "requirements": [
      "Group records in Performance_Reviews by `review_year` and `rating`.",
      "Count evaluations aliased as `review_count`.",
      "Calculate sum of bonuses substituting 0 for nulls, aliased as `total_bonuses`.",
      "Display `review_year`, `rating`, `review_count`, and `total_bonuses`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Group by review_year and rating, and use COALESCE(SUM(bonus), 0) for bonus aggregation.",
    "expectedSql": "SELECT review_year, rating, COUNT(*) AS review_count, COALESCE(SUM(bonus), 0) AS total_bonuses FROM Performance_Reviews GROUP BY review_year, rating;",
    "explanation": "Reveals how performance tiers evolved each year alongside their corresponding financial reward totals.",
    "tags": [
      "group-by",
      "multi-column",
      "reviews",
      "coalesce"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "review_year",
        "rating",
        "review_count",
        "total_bonuses"
      ],
      "values": [
        [
          2022,
          5,
          1,
          25000
        ],
        [
          2023,
          4,
          2,
          40000
        ],
        [
          2023,
          5,
          1,
          28000
        ],
        [
          2024,
          2,
          1,
          0
        ],
        [
          2024,
          3,
          4,
          30000
        ],
        [
          2024,
          4,
          6,
          94000
        ],
        [
          2024,
          5,
          3,
          80000
        ]
      ],
      "rowCount": 7
    }
  },
  {
    "id": 138,
    "title": "Project Role Allocation and Capacity Utilization",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Resource management is analyzing role distribution across projects. For each project and assigned role combination in Employee_Projects, calculate the total number of staff assignments and cumulative weekly hours allocated.",
    "requirements": [
      "Group by `project_id` and `assigned_role`.",
      "Count assigned staff records aliased as `role_staff_count`.",
      "Sum allocated weekly hours aliased as `total_role_hours`.",
      "Display `project_id`, `assigned_role`, `role_staff_count`, and `total_role_hours`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Group by project_id and assigned_role, computing COUNT(*) and SUM(hours_allocated).",
    "expectedSql": "SELECT project_id, assigned_role, COUNT(*) AS role_staff_count, SUM(hours_allocated) AS total_role_hours FROM Employee_Projects GROUP BY project_id, assigned_role;",
    "explanation": "Tracks job function allocations across active enterprise project rosters.",
    "tags": [
      "group-by",
      "multi-column",
      "roles",
      "workload"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "assigned_role",
        "role_staff_count",
        "total_role_hours"
      ],
      "values": [
        [
          501,
          "Full Stack Engineer",
          1,
          40
        ],
        [
          501,
          "Lead Developer",
          1,
          35
        ],
        [
          501,
          "Project Manager",
          1,
          25
        ],
        [
          502,
          "Backend Architect",
          1,
          15
        ],
        [
          502,
          "Database Specialist",
          1,
          30
        ],
        [
          503,
          "HR Coordinator",
          1,
          30
        ],
        [
          503,
          "HR Lead",
          1,
          20
        ],
        [
          503,
          "Recruiter",
          1,
          35
        ],
        [
          504,
          "Compliance Officer",
          1,
          20
        ],
        [
          504,
          "Finance Director",
          1,
          10
        ],
        [
          504,
          "Financial Analyst",
          1,
          30
        ],
        [
          504,
          "Senior Auditor",
          1,
          35
        ],
        [
          504,
          "Technical Advisor",
          1,
          15
        ],
        [
          505,
          "Content Strategist",
          1,
          35
        ],
        [
          505,
          "Creative Director",
          1,
          20
        ],
        [
          505,
          "Marketing Manager",
          1,
          30
        ],
        [
          506,
          "Account Executive",
          1,
          30
        ],
        [
          506,
          "Campaign Strategist",
          1,
          20
        ],
        [
          506,
          "Client Onboarding",
          1,
          25
        ],
        [
          506,
          "Sales Lead",
          1,
          35
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 139,
    "title": "Departmental Hiring Cohort Timeline",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Talent acquisition is tracking historical hiring volume across departments. For every joining year and department combination, display the joining year, department name, and total number of staff hired in that year.",
    "requirements": [
      "Group records by `joining_year` and `department`.",
      "Count hires aliased as `hires_count`.",
      "Display `joining_year`, `department`, and `hires_count`."
    ],
    "tableName": "Employees",
    "hint": "Group by joining_year and department, calculating COUNT(*) for each group.",
    "expectedSql": "SELECT joining_year, department, COUNT(*) AS hires_count FROM Employees GROUP BY joining_year, department;",
    "explanation": "Visualizes organizational expansion history by charting annual headcount additions per team.",
    "tags": [
      "group-by",
      "multi-column",
      "hiring",
      "temporal"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "joining_year",
        "department",
        "hires_count"
      ],
      "values": [
        [
          2015,
          "Finance",
          1
        ],
        [
          2016,
          "Finance",
          1
        ],
        [
          2017,
          "IT",
          1
        ],
        [
          2018,
          "HR",
          1
        ],
        [
          2018,
          "Marketing",
          1
        ],
        [
          2019,
          "Finance",
          1
        ],
        [
          2020,
          "IT",
          1
        ],
        [
          2020,
          "Marketing",
          1
        ],
        [
          2021,
          "IT",
          1
        ],
        [
          2021,
          "Sales",
          1
        ],
        [
          2022,
          "IT",
          1
        ],
        [
          2022,
          "Sales",
          2
        ],
        [
          2023,
          "Finance",
          1
        ],
        [
          2023,
          "HR",
          1
        ],
        [
          2024,
          "HR",
          1
        ],
        [
          2024,
          "Sales",
          1
        ],
        [
          2025,
          "HR",
          1
        ],
        [
          2025,
          "IT",
          1
        ],
        [
          2025,
          "Marketing",
          1
        ]
      ],
      "rowCount": 19
    }
  },
  {
    "id": 140,
    "title": "Regional Office Experience Cluster Census",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Hard",
    "problemStatement": "Human Resources is mapping seniority profiles across branch offices. For each city and years of experience pair, calculate the total employee headcount.",
    "requirements": [
      "Group records by `city` and `experience`.",
      "Count staff members aliased as `head_count`.",
      "Display `city`, `experience`, and `head_count`."
    ],
    "tableName": "Employees",
    "hint": "Group by city and experience, counting records with COUNT(*).",
    "expectedSql": "SELECT city, experience, COUNT(*) AS head_count FROM Employees GROUP BY city, experience;",
    "explanation": "Highlights seniority patterns and regional talent distribution across office sites.",
    "tags": [
      "group-by",
      "multi-column",
      "demographics"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "city",
        "experience",
        "head_count"
      ],
      "values": [
        [
          "Bengaluru",
          3,
          1
        ],
        [
          "Bengaluru",
          8,
          1
        ],
        [
          "Bengaluru",
          9,
          1
        ],
        [
          "Bengaluru",
          10,
          1
        ],
        [
          "Chennai",
          1,
          1
        ],
        [
          "Chennai",
          3,
          1
        ],
        [
          "Chennai",
          4,
          1
        ],
        [
          "Chennai",
          6,
          1
        ],
        [
          "Chennai",
          7,
          1
        ],
        [
          "Chennai",
          8,
          1
        ],
        [
          "Hyderabad",
          1,
          1
        ],
        [
          "Hyderabad",
          2,
          1
        ],
        [
          "Hyderabad",
          5,
          2
        ],
        [
          "Hyderabad",
          6,
          1
        ],
        [
          "Hyderabad",
          11,
          1
        ],
        [
          "Vijayawada",
          1,
          1
        ],
        [
          "Vijayawada",
          2,
          1
        ],
        [
          "Vijayawada",
          3,
          1
        ],
        [
          "Vijayawada",
          4,
          1
        ]
      ],
      "rowCount": 19
    }
  },
  {
    "id": 141,
    "title": "Departmental Wage Spread Analysis",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "The compensation committee is reviewing salary disparity within each business unit. For every department, calculate the lowest salary, highest salary, and the absolute salary spread (maximum minus minimum salary).",
    "requirements": [
      "Group records by `department`.",
      "Find minimum salary aliased as `min_salary`.",
      "Find maximum salary aliased as `max_salary`.",
      "Calculate salary spread (max_salary minus min_salary) aliased as `salary_spread`.",
      "Display `department`, `min_salary`, `max_salary`, and `salary_spread`."
    ],
    "tableName": "Employees",
    "hint": "Group by department and compute MIN(salary), MAX(salary), and MAX(salary) - MIN(salary).",
    "expectedSql": "SELECT department, MIN(salary) AS min_salary, MAX(salary) AS max_salary, (MAX(salary) - MIN(salary)) AS salary_spread FROM Employees GROUP BY department;",
    "explanation": "Performs mathematical operations on aggregate results to compute internal compensation spreads.",
    "tags": [
      "group-by",
      "aggregates",
      "spread",
      "min-max"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "min_salary",
        "max_salary",
        "salary_spread"
      ],
      "values": [
        [
          "Finance",
          35000,
          90000,
          55000
        ],
        [
          "HR",
          27000,
          70000,
          43000
        ],
        [
          "IT",
          25000,
          75000,
          50000
        ],
        [
          "Marketing",
          28000,
          68000,
          40000
        ],
        [
          "Sales",
          30000,
          55000,
          25000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 142,
    "title": "Project Staffing Footprint and Weekly Utilization",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "The Project Management Office needs a resource utilization audit for each initiative. For every project in the assignments registry, calculate the total number of distinct staff members assigned, cumulative weekly hours committed, and the average weekly hours per team member (rounded to two decimal places).",
    "requirements": [
      "Group records by `project_id`.",
      "Calculate distinct assigned employees, aliasing the count as `assigned_staff`.",
      "Calculate total weekly hours committed, aliased as `total_hours`.",
      "Calculate the average hours per member rounded to 2 decimal places, aliased as `avg_hours_per_member`.",
      "Display `project_id`, `assigned_staff`, `total_hours`, and `avg_hours_per_member`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Group by project_id and apply COUNT(DISTINCT emp_id), SUM(hours_allocated), and ROUND(AVG(hours_allocated), 2).",
    "expectedSql": "SELECT project_id, COUNT(DISTINCT emp_id) AS assigned_staff, SUM(hours_allocated) AS total_hours, ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member FROM Employee_Projects GROUP BY project_id;",
    "explanation": "Synthesizes staffing cardinality and resource commitment per project initiative.",
    "tags": [
      "group-by",
      "count-distinct",
      "sum",
      "avg"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "assigned_staff",
        "total_hours",
        "avg_hours_per_member"
      ],
      "values": [
        [
          501,
          3,
          100,
          33.33
        ],
        [
          502,
          2,
          45,
          22.5
        ],
        [
          503,
          3,
          85,
          28.33
        ],
        [
          504,
          5,
          110,
          22
        ],
        [
          505,
          3,
          85,
          28.33
        ],
        [
          506,
          4,
          110,
          27.5
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 143,
    "title": "Individual Appraisal Historical Performance Profile",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is summarizing appraisal histories for individual employees. For each reviewed employee in Performance_Reviews, display their employee ID, total number of evaluations completed, average rating (rounded to 2 decimal places), and highest bonus awarded (defaulting to 0 if none).",
    "requirements": [
      "Group records by `emp_id`.",
      "Count total reviews aliased as `total_reviews`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_rating`.",
      "Find highest bonus received substituting 0 for nulls, aliased as `highest_bonus`.",
      "Display `emp_id`, `total_reviews`, `avg_rating`, and `highest_bonus`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Group by emp_id and compute COUNT(*), ROUND(AVG(rating), 2), and COALESCE(MAX(bonus), 0).",
    "expectedSql": "SELECT emp_id, COUNT(*) AS total_reviews, ROUND(AVG(rating), 2) AS avg_rating, COALESCE(MAX(bonus), 0) AS highest_bonus FROM Performance_Reviews GROUP BY emp_id;",
    "explanation": "Summarizes longitudinal evaluation metrics for each reviewed employee.",
    "tags": [
      "group-by",
      "reviews",
      "avg",
      "max"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "total_reviews",
        "avg_rating",
        "highest_bonus"
      ],
      "values": [
        [
          102,
          1,
          3,
          6000
        ],
        [
          103,
          1,
          4,
          15000
        ],
        [
          104,
          1,
          4,
          18000
        ],
        [
          106,
          2,
          4.5,
          25000
        ],
        [
          107,
          1,
          3,
          8000
        ],
        [
          109,
          1,
          4,
          18000
        ],
        [
          110,
          1,
          4,
          16000
        ],
        [
          111,
          1,
          2,
          0
        ],
        [
          112,
          2,
          4.5,
          25000
        ],
        [
          114,
          1,
          4,
          12000
        ],
        [
          115,
          1,
          4,
          15000
        ],
        [
          116,
          1,
          3,
          7000
        ],
        [
          117,
          1,
          3,
          9000
        ],
        [
          119,
          3,
          5,
          30000
        ]
      ],
      "rowCount": 14
    }
  },
  {
    "id": 144,
    "title": "Regional Hub Payroll and High-Earner Density",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Medium",
    "problemStatement": "Corporate treasury is assessing geographical labor spending and high-earner presence. For each branch city, display the city name, total employee count, cumulative payroll expenditure, and count of high earners earning strictly over 50,000.",
    "requirements": [
      "Group records by `city`.",
      "Count total staff aliased as `total_staff`.",
      "Calculate total payroll aliased as `total_payroll`.",
      "Count employees earning over 50,000 using conditional aggregation, aliased as `high_earners_count`.",
      "Display `city`, `total_staff`, `total_payroll`, and `high_earners_count`."
    ],
    "tableName": "Employees",
    "hint": "Group by city and use SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) for the high earner tally.",
    "expectedSql": "SELECT city, COUNT(*) AS total_staff, SUM(salary) AS total_payroll, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners_count FROM Employees GROUP BY city;",
    "explanation": "Combines standard grouping with conditional aggregation inside each branch city.",
    "tags": [
      "group-by",
      "conditional-aggregation",
      "city"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "city",
        "total_staff",
        "total_payroll",
        "high_earners_count"
      ],
      "values": [
        [
          "Bengaluru",
          4,
          267000,
          3
        ],
        [
          "Chennai",
          6,
          303000,
          4
        ],
        [
          "Hyderabad",
          6,
          310000,
          3
        ],
        [
          "Vijayawada",
          4,
          142000,
          0
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 145,
    "title": "Capital Investment Profile by Project Lifecycle Stage",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "Portfolio governance is benchmarking funding levels across workflow stages. For each project lifecycle status, calculate the total count of initiatives, minimum budget, maximum budget, and average budget allocation (rounded to 2 decimal places).",
    "requirements": [
      "Group records in Projects by `status`.",
      "Count initiatives aliased as `projects_count`.",
      "Find minimum budget aliased as `min_budget` and maximum budget aliased as `max_budget`.",
      "Calculate average budget rounded to 2 decimal places aliased as `avg_budget`.",
      "Display `status`, `projects_count`, `min_budget`, `max_budget`, and `avg_budget`."
    ],
    "tableName": "Projects",
    "hint": "Group by status and compute COUNT(*), MIN(budget), MAX(budget), and ROUND(AVG(budget), 2).",
    "expectedSql": "SELECT status, COUNT(*) AS projects_count, MIN(budget) AS min_budget, MAX(budget) AS max_budget, ROUND(AVG(budget), 2) AS avg_budget FROM Projects GROUP BY status;",
    "explanation": "Benchmarks budgetary parameters across project statuses.",
    "tags": [
      "group-by",
      "status",
      "min-max-avg"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "status",
        "projects_count",
        "min_budget",
        "max_budget",
        "avg_budget"
      ],
      "values": [
        [
          "Active",
          4,
          120000,
          300000,
          212500
        ],
        [
          "Completed",
          2,
          220000,
          400000,
          310000
        ],
        [
          "Planning",
          2,
          90000,
          550000,
          320000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 146,
    "title": "Regional Department Density and Cumulative Budgets",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "Corporate administration is analyzing departmental distribution across headquarters cities. For each location in Departments, display the office location, count of departments headquartered there, and cumulative regional budget.",
    "requirements": [
      "Group records in Departments by `location`.",
      "Count departments aliased as `dept_count`.",
      "Calculate total budget aliased as `total_regional_budget`.",
      "Display `location`, `dept_count`, and `total_regional_budget`."
    ],
    "tableName": "Departments",
    "hint": "Group by location and apply COUNT(*) and SUM(budget).",
    "expectedSql": "SELECT location, COUNT(*) AS dept_count, SUM(budget) AS total_regional_budget FROM Departments GROUP BY location;",
    "explanation": "Summarizes departmental infrastructure presence and operating capital per location.",
    "tags": [
      "group-by",
      "departments",
      "location"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "location",
        "dept_count",
        "total_regional_budget"
      ],
      "values": [
        [
          "Bengaluru",
          3,
          3500000
        ],
        [
          "Chennai",
          2,
          1450000
        ],
        [
          "Hyderabad",
          3,
          2850000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 147,
    "title": "Post-2020 Recruitment Payroll by Division",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "Talent acquisition is assessing compensation trends for post-pandemic recruitment cohorts. For employees hired after calendar year 2020, display each department, count of recent recruits, and their average monthly salary (rounded to 2 decimal places).",
    "requirements": [
      "Filter for employees where `joining_year > 2020` before grouping.",
      "Group records by `department`.",
      "Count recent recruits aliased as `recent_hires`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_recent_salary`.",
      "Display `department`, `recent_hires`, and `avg_recent_salary`."
    ],
    "tableName": "Employees",
    "hint": "Filter with joining_year > 2020 in the WHERE clause, then group by department.",
    "expectedSql": "SELECT department, COUNT(*) AS recent_hires, ROUND(AVG(salary), 2) AS avg_recent_salary FROM Employees WHERE joining_year > 2020 GROUP BY department;",
    "explanation": "WHERE filters rows before the aggregation phase, leaving only post-2020 joiners in each group.",
    "tags": [
      "group-by",
      "where",
      "filtering"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "recent_hires",
        "avg_recent_salary"
      ],
      "values": [
        [
          "Finance",
          1,
          35000
        ],
        [
          "HR",
          3,
          33000
        ],
        [
          "IT",
          3,
          41666.67
        ],
        [
          "Marketing",
          1,
          28000
        ],
        [
          "Sales",
          4,
          43750
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 148,
    "title": "Active Capital Commitments by Department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "The Chief Financial Officer needs visibility into unfinished project commitments per department. For all projects not yet completed, display the department ID, count of pending initiatives, and cumulative pending budget.",
    "requirements": [
      "Filter Projects for `status != 'Completed'`.",
      "Group by `dept_id`.",
      "Count pending projects aliased as `pending_projects`.",
      "Calculate cumulative budget aliased as `pending_budget`.",
      "Display `dept_id`, `pending_projects`, and `pending_budget`."
    ],
    "tableName": "Projects",
    "hint": "Filter with status != 'Completed' before grouping by dept_id.",
    "expectedSql": "SELECT dept_id, COUNT(*) AS pending_projects, SUM(budget) AS pending_budget FROM Projects WHERE status != 'Completed' GROUP BY dept_id;",
    "explanation": "Filters out completed milestones prior to computing active capital obligations.",
    "tags": [
      "group-by",
      "where",
      "status"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "pending_projects",
        "pending_budget"
      ],
      "values": [
        [
          1,
          1,
          250000
        ],
        [
          2,
          1,
          120000
        ],
        [
          3,
          1,
          300000
        ],
        [
          4,
          1,
          180000
        ],
        [
          6,
          1,
          90000
        ],
        [
          8,
          1,
          550000
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 149,
    "title": "High-Performance Appraisal and Bonus Summary by Staff",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "Executive leadership is identifying consistently high-performing employees. For evaluations that achieved a high rating of 4 or 5, display the employee ID, count of top reviews, and total merit bonuses awarded.",
    "requirements": [
      "Filter Performance_Reviews for `rating >= 4`.",
      "Group by `emp_id`.",
      "Count qualifying reviews aliased as `top_reviews`.",
      "Sum awarded bonuses aliased as `total_merit_bonus`.",
      "Display `emp_id`, `top_reviews`, and `total_merit_bonus`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter for rating >= 4 before grouping by emp_id, then calculate COUNT(*) and SUM(bonus).",
    "expectedSql": "SELECT emp_id, COUNT(*) AS top_reviews, SUM(bonus) AS total_merit_bonus FROM Performance_Reviews WHERE rating >= 4 GROUP BY emp_id;",
    "explanation": "Isolates top-quartile appraisal outcomes prior to computing merit bonus sums.",
    "tags": [
      "group-by",
      "where",
      "rating"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "top_reviews",
        "total_merit_bonus"
      ],
      "values": [
        [
          103,
          1,
          15000
        ],
        [
          104,
          1,
          18000
        ],
        [
          106,
          2,
          45000
        ],
        [
          109,
          1,
          18000
        ],
        [
          110,
          1,
          16000
        ],
        [
          112,
          2,
          45000
        ],
        [
          114,
          1,
          12000
        ],
        [
          115,
          1,
          15000
        ],
        [
          119,
          3,
          83000
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 150,
    "title": "Branch Density of Seasoned Compensation Staff",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "Human Resources is examining geographic distribution of experienced staff earning competitive compensation. For employees earning at least 40,000, display each city, count of qualifying staff, and their average professional experience (rounded to 2 decimal places).",
    "requirements": [
      "Filter Employees for `salary >= 40000`.",
      "Group by `city`.",
      "Count matching staff aliased as `mid_to_senior_count`.",
      "Calculate average years of experience rounded to 2 decimal places aliased as `avg_experience`.",
      "Display `city`, `mid_to_senior_count`, and `avg_experience`."
    ],
    "tableName": "Employees",
    "hint": "Filter for salary >= 40000 in WHERE, then group by city and compute aggregate metrics.",
    "expectedSql": "SELECT city, COUNT(*) AS mid_to_senior_count, ROUND(AVG(experience), 2) AS avg_experience FROM Employees WHERE salary >= 40000 GROUP BY city;",
    "explanation": "Computes seniority metrics for premium salary brackets in each operating location.",
    "tags": [
      "group-by",
      "where",
      "salary"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "city",
        "mid_to_senior_count",
        "avg_experience"
      ],
      "values": [
        [
          "Bengaluru",
          4,
          7.5
        ],
        [
          "Chennai",
          4,
          6.25
        ],
        [
          "Hyderabad",
          4,
          6.75
        ],
        [
          "Vijayawada",
          2,
          3.5
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 151,
    "title": "Project Management and Leadership Assignment Counts",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "Workforce governance is monitoring the assignment of leadership and oversight roles across corporate projects. For each project in Employee_Projects, count how many staff assignments carry managerial or leadership designations (titles containing 'Lead', 'Manager', or 'Director').",
    "requirements": [
      "Filter for assignments where `assigned_role` contains 'Lead', 'Manager', or 'Director'.",
      "Group by `project_id`.",
      "Count matching leadership assignments aliased as `leadership_roles`.",
      "Display `project_id` and `leadership_roles`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Filter using partial text matching on assigned_role before grouping by project_id.",
    "expectedSql": "SELECT project_id, COUNT(*) AS leadership_roles FROM Employee_Projects WHERE assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%' GROUP BY project_id;",
    "explanation": "Identifies the depth of leadership oversight dedicated to each operational initiative.",
    "tags": [
      "group-by",
      "where",
      "like"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "leadership_roles"
      ],
      "values": [
        [
          501,
          2
        ],
        [
          503,
          1
        ],
        [
          504,
          1
        ],
        [
          505,
          2
        ],
        [
          506,
          1
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 152,
    "title": "Early-Career Talent Deployment by Department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "The talent development team is tracking junior workforce distribution across business units. For employees under 30 years old, display each department, count of young professionals, and lowest salary in that young cohort.",
    "requirements": [
      "Filter Employees for `age < 30`.",
      "Group by `department`.",
      "Count young staff aliased as `young_talent_count`.",
      "Find the minimum salary in that cohort aliased as `min_young_salary`.",
      "Display `department`, `young_talent_count`, and `min_young_salary`."
    ],
    "tableName": "Employees",
    "hint": "Filter with age < 30 in WHERE, then group by department and compute COUNT(*) and MIN(salary).",
    "expectedSql": "SELECT department, COUNT(*) AS young_talent_count, MIN(salary) AS min_young_salary FROM Employees WHERE age < 30 GROUP BY department;",
    "explanation": "Pre-filters workforce by age criteria to analyze base compensation among early-career talent.",
    "tags": [
      "group-by",
      "where",
      "age"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "department",
        "young_talent_count",
        "min_young_salary"
      ],
      "values": [
        [
          "Finance",
          1,
          35000
        ],
        [
          "HR",
          3,
          27000
        ],
        [
          "IT",
          4,
          25000
        ],
        [
          "Marketing",
          2,
          28000
        ],
        [
          "Sales",
          4,
          30000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 153,
    "title": "Categorical Compensation Tier Distribution",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Compensation planning is segmenting the workforce into three broad salary tiers: 'Entry' for salaries under 35,000, 'Mid' for salaries from 35,000 to 60,000 inclusive, and 'Executive' for salaries above 60,000. Group all employees into these tiers and display each tier name with its total headcount.",
    "requirements": [
      "Categorize each employee into 'Entry', 'Mid', or 'Executive' based on salary thresholds, aliased as `salary_tier`.",
      "Group records by the categorical salary tier expression.",
      "Count employees in each tier aliased as `tier_count`.",
      "Display `salary_tier` and `tier_count`."
    ],
    "tableName": "Employees",
    "hint": "Use identical CASE expressions in the SELECT projection and the GROUP BY clause.",
    "expectedSql": "SELECT CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END AS salary_tier, COUNT(*) AS tier_count FROM Employees GROUP BY CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END;",
    "explanation": "SQL allows grouping directly by dynamic CASE expressions to generate custom dimensional buckets.",
    "tags": [
      "group-by",
      "case",
      "tiers"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "salary_tier",
        "tier_count"
      ],
      "values": [
        [
          "Entry",
          5
        ],
        [
          "Executive",
          6
        ],
        [
          "Mid",
          9
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 154,
    "title": "Seniority Band Compensation Benchmarking",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Hard",
    "problemStatement": "Human Resources segments workforce tenure into three professional bands: 'Junior' for under 3 years of experience, 'Intermediate' for 3 to 6 years inclusive, and 'Senior' for more than 6 years. Group employees by these experience bands and display the band name, headcount, and average monthly salary (rounded to 2 decimal places).",
    "requirements": [
      "Classify employees into 'Junior', 'Intermediate', or 'Senior' aliased as `experience_band`.",
      "Group records by the experience band expression.",
      "Count employees in each band aliased as `count_in_band`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_band_salary`.",
      "Display `experience_band`, `count_in_band`, and `avg_band_salary`."
    ],
    "tableName": "Employees",
    "hint": "Group by the CASE expression that defines the experience bands and calculate COUNT(*) and ROUND(AVG(salary), 2).",
    "expectedSql": "SELECT CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END AS experience_band, COUNT(*) AS count_in_band, ROUND(AVG(salary), 2) AS avg_band_salary FROM Employees GROUP BY CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END;",
    "explanation": "Demonstrates experience band stratification and compensation progression analysis.",
    "tags": [
      "group-by",
      "case",
      "bands",
      "avg"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "experience_band",
        "count_in_band",
        "avg_band_salary"
      ],
      "values": [
        [
          "Intermediate",
          9,
          48000
        ],
        [
          "Junior",
          5,
          28400
        ],
        [
          "Senior",
          6,
          74666.67
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 155,
    "title": "Appraisal Evaluation by Bonus Allocation Category",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "The compensation committee is comparing performance ratings between evaluations that received an incentive payout and those that did not. Classify appraisals as 'Bonus Awarded' if a bonus exists, or 'No Bonus Awarded' if unassigned, displaying the status, review count, and average rating (rounded to 2 decimal places).",
    "requirements": [
      "Classify reviews into 'Bonus Awarded' or 'No Bonus Awarded' aliased as `bonus_status`.",
      "Group records by this bonus status category.",
      "Count evaluations in each category aliased as `reviews_count`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_group_rating`.",
      "Display `bonus_status`, `reviews_count`, and `avg_group_rating`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Group by a CASE expression testing whether bonus IS NOT NULL.",
    "expectedSql": "SELECT CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END AS bonus_status, COUNT(*) AS reviews_count, ROUND(AVG(rating), 2) AS avg_group_rating FROM Performance_Reviews GROUP BY CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END;",
    "explanation": "Groups records by boolean nullability status to assess rating differences between compensated and uncompensated reviews.",
    "tags": [
      "group-by",
      "case",
      "nullability"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "bonus_status",
        "reviews_count",
        "avg_group_rating"
      ],
      "values": [
        [
          "Bonus Awarded",
          17,
          4.06
        ],
        [
          "No Bonus Awarded",
          1,
          2
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 156,
    "title": "Capital Investment Scale Segmentation",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Project portfolio managers classify corporate initiatives into funding tiers: 'Small' for budgets under 150,000, 'Medium' for budgets from 150,000 to 350,000 inclusive, and 'Enterprise' for budgets exceeding 350,000. Group projects by these investment tiers and display the tier name along with the count of projects.",
    "requirements": [
      "Classify projects into 'Small', 'Medium', or 'Enterprise' aliased as `budget_tier`.",
      "Group by the budget classification expression.",
      "Count initiatives in each tier aliased as `project_count`.",
      "Display `budget_tier` and `project_count`."
    ],
    "tableName": "Projects",
    "hint": "Use a CASE expression to categorize budget ranges, grouping by the same expression.",
    "expectedSql": "SELECT CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END AS budget_tier, COUNT(*) AS project_count FROM Projects GROUP BY CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END;",
    "explanation": "Partitions initiatives into size buckets for portfolio management.",
    "tags": [
      "group-by",
      "case",
      "projects"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "budget_tier",
        "project_count"
      ],
      "values": [
        [
          "Enterprise",
          2
        ],
        [
          "Medium",
          4
        ],
        [
          "Small",
          2
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 157,
    "title": "Name Character Length Demographic Grouping",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Data management is analyzing the distribution of employee name lengths for badge printing formatting. Group employees by the number of characters in their full name, displaying the name length and the total employee count.",
    "requirements": [
      "Calculate character length of `emp_name` aliased as `name_length`.",
      "Group records by the name length expression.",
      "Count employees with each length aliased as `employee_count`.",
      "Display `name_length` and `employee_count`."
    ],
    "tableName": "Employees",
    "hint": "Group by the string length function applied to emp_name and calculate COUNT(*).",
    "expectedSql": "SELECT LENGTH(emp_name) AS name_length, COUNT(*) AS employee_count FROM Employees GROUP BY LENGTH(emp_name);",
    "explanation": "Demonstrates grouping by string function outputs.",
    "tags": [
      "group-by",
      "string-functions",
      "length"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "name_length",
        "employee_count"
      ],
      "values": [
        [
          4,
          2
        ],
        [
          5,
          12
        ],
        [
          6,
          4
        ],
        [
          7,
          2
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 158,
    "title": "Tenure Era Payroll Expenditure Comparison",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "The Chief Financial Officer is comparing payroll commitments between legacy employees and recent additions. Group employees into two hiring eras: 'Pre-2022' for joiners before 2022, and '2022-and-Later' for everyone else. Display the cohort name, headcount, and cumulative payroll.",
    "requirements": [
      "Classify joining year into 'Pre-2022' or '2022-and-Later' aliased as `cohort_name`.",
      "Group by the cohort classification expression.",
      "Count employees in each cohort aliased as `head_count`.",
      "Calculate total payroll aliased as `total_cohort_payroll`.",
      "Display `cohort_name`, `head_count`, and `total_cohort_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Group by a conditional CASE expression on joining_year, calculating COUNT(*) and SUM(salary).",
    "expectedSql": "SELECT CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END AS cohort_name, COUNT(*) AS head_count, SUM(salary) AS total_cohort_payroll FROM Employees GROUP BY CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END;",
    "explanation": "Splits enterprise workforce chronologically to contrast legacy salary weights with recent hiring costs.",
    "tags": [
      "group-by",
      "case",
      "cohorts"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "cohort_name",
        "head_count",
        "total_cohort_payroll"
      ],
      "values": [
        [
          "2022-and-Later",
          10,
          359000
        ],
        [
          "Pre-2022",
          10,
          663000
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 159,
    "title": "Weekly Commitment Classification Distribution",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Hard",
    "problemStatement": "Resource scheduling categorizes project allocations as 'Part-Time' for under 25 hours per week, or 'Full-Time' for 25 hours and above. Group all assignments in Employee_Projects by this workload classification, displaying the workload type, total assignment count, and cumulative weekly hours.",
    "requirements": [
      "Classify assignments into 'Part-Time' or 'Full-Time' based on weekly hours, aliased as `workload_type`.",
      "Group by the workload classification expression.",
      "Count total assignments aliased as `total_assignments`.",
      "Sum allocated weekly hours aliased as `sum_weekly_hours`.",
      "Display `workload_type`, `total_assignments`, and `sum_weekly_hours`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use a CASE expression on hours_allocated in both SELECT and GROUP BY.",
    "expectedSql": "SELECT CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END AS workload_type, COUNT(*) AS total_assignments, SUM(hours_allocated) AS sum_weekly_hours FROM Employee_Projects GROUP BY CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END;",
    "explanation": "Segments project staffing models into workload categories.",
    "tags": [
      "group-by",
      "case",
      "workload"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "workload_type",
        "total_assignments",
        "sum_weekly_hours"
      ],
      "values": [
        [
          "Full-Time",
          13,
          415
        ],
        [
          "Part-Time",
          7,
          120
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 160,
    "title": "Enterprise Departmental Capital Classification",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Corporate treasury groups corporate divisions by funding magnitude: 'Mega Budget' for allocations of 1,000,000 or greater, and 'Standard Budget' for under 1,000,000. Group departments by this capital tier, displaying the tier name, department count, and combined budget.",
    "requirements": [
      "Classify departments into 'Mega Budget' or 'Standard Budget' aliased as `budget_tier`.",
      "Group by the budget tier classification expression.",
      "Count departments aliased as `dept_count`.",
      "Sum combined budgets aliased as `combined_budget`.",
      "Display `budget_tier`, `dept_count`, and `combined_budget`."
    ],
    "tableName": "Departments",
    "hint": "Group by a CASE expression testing budget >= 1000000, computing COUNT(*) and SUM(budget).",
    "expectedSql": "SELECT CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END AS budget_tier, COUNT(*) AS dept_count, SUM(budget) AS combined_budget FROM Departments GROUP BY CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END;",
    "explanation": "Summarizes the concentration of operating capital between major budget tiers.",
    "tags": [
      "group-by",
      "case",
      "departments"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "budget_tier",
        "dept_count",
        "combined_budget"
      ],
      "values": [
        [
          "Mega Budget",
          3,
          4500000
        ],
        [
          "Standard Budget",
          5,
          3300000
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 161,
    "title": "Departmental Headcount and Compensation Dual Benchmark",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Easy",
    "problemStatement": "The executive compensation committee wants to identify major divisions that maintain competitive salary standards. Group employees by department, calculating headcount and average monthly salary (rounded to 2 decimal places), and filter for departments that employ at least 3 people and maintain an average salary strictly exceeding 45,000.",
    "requirements": [
      "Group records by `department`.",
      "Calculate employee count aliased as `emp_count`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_salary`.",
      "Filter groups where headcount is 3 or more AND average salary strictly exceeds 45,000.",
      "Display `department`, `emp_count`, and `avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use HAVING with both COUNT(*) and AVG(salary) conditions connected by AND.",
    "expectedSql": "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) >= 3 AND AVG(salary) > 45000;",
    "explanation": "HAVING filters groups post-aggregation using boolean combinations of aggregate functions.",
    "tags": [
      "having",
      "aggregates",
      "and",
      "group-by"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "emp_count",
        "avg_salary"
      ],
      "values": [
        [
          "Finance",
          4,
          67500
        ],
        [
          "IT",
          5,
          50400
        ],
        [
          "Marketing",
          3,
          52000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 162,
    "title": "High-Commitment Multi-Staff Project Allocations",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Medium",
    "problemStatement": "Resource management is monitoring major project commitments in Employee_Projects. For each project, calculate the count of distinct team members assigned and total weekly hours committed, filtering for initiatives that have at least 2 distinct staff members and a combined workload of at least 40 weekly hours.",
    "requirements": [
      "Group by `project_id` in Employee_Projects.",
      "Count distinct assigned staff aliased as `staff_count`.",
      "Sum allocated weekly hours aliased as `total_hours`.",
      "Filter groups where distinct staff count is at least 2 AND total hours is at least 40.",
      "Display `project_id`, `staff_count`, and `total_hours`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Apply HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40.",
    "expectedSql": "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40;",
    "explanation": "Enforces multi-metric group constraints across distinct entity counts and cumulative sums.",
    "tags": [
      "having",
      "count-distinct",
      "sum",
      "workload"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "staff_count",
        "total_hours"
      ],
      "values": [
        [
          501,
          3,
          100
        ],
        [
          502,
          2,
          45
        ],
        [
          503,
          3,
          85
        ],
        [
          504,
          5,
          110
        ],
        [
          505,
          3,
          85
        ],
        [
          506,
          4,
          110
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 163,
    "title": "Consistently High-Performing Multi-Review Personnel",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Medium",
    "problemStatement": "Talent development is identifying employees with sustained top-tier performance over time. For each evaluated employee in Performance_Reviews, display their employee ID, total evaluation count, and average rating (rounded to 2 decimal places), keeping only employees who have at least 2 completed reviews and an average rating of 4.0 or higher.",
    "requirements": [
      "Group by `emp_id` in Performance_Reviews.",
      "Count total reviews aliased as `review_count`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_rating`.",
      "Filter groups with 2 or more reviews and an average rating of 4.0 or above.",
      "Display `emp_id`, `review_count`, and `avg_rating`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0 after grouping by emp_id.",
    "expectedSql": "SELECT emp_id, COUNT(*) AS review_count, ROUND(AVG(rating), 2) AS avg_rating FROM Performance_Reviews GROUP BY emp_id HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0;",
    "explanation": "Isolates repeated high performers by verifying both evaluation volume and sustained rating excellence.",
    "tags": [
      "having",
      "reviews",
      "rating",
      "avg"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "review_count",
        "avg_rating"
      ],
      "values": [
        [
          106,
          2,
          4.5
        ],
        [
          112,
          2,
          4.5
        ],
        [
          119,
          3,
          5
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 164,
    "title": "Major Metropolitan Hubs with Substantial Wage Footprints",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Easy",
    "problemStatement": "Corporate treasury is reviewing regional offices with significant headcount and payroll exposure. For each city, calculate the total employee count and cumulative monthly payroll, keeping only office locations that have at least 4 employees and a monthly wage bill strictly exceeding 200,000.",
    "requirements": [
      "Group records by `city` in Employees.",
      "Count staff members aliased as `emp_count`.",
      "Calculate total payroll expenditure aliased as `total_payroll`.",
      "Filter groups where headcount is 4 or more AND cumulative payroll exceeds 200,000.",
      "Display `city`, `emp_count`, and `total_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Filter the grouped city records with HAVING COUNT(*) >= 4 AND SUM(salary) > 200000.",
    "expectedSql": "SELECT city, COUNT(*) AS emp_count, SUM(salary) AS total_payroll FROM Employees GROUP BY city HAVING COUNT(*) >= 4 AND SUM(salary) > 200000;",
    "explanation": "Surfaces enterprise operational centers where both organizational headcount and total payroll pass critical thresholds.",
    "tags": [
      "having",
      "payroll",
      "city",
      "headcount"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "city",
        "emp_count",
        "total_payroll"
      ],
      "values": [
        [
          "Bengaluru",
          4,
          267000
        ],
        [
          "Chennai",
          6,
          303000
        ],
        [
          "Hyderabad",
          6,
          310000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 165,
    "title": "Departmental Density of Modern Hiring Cohorts",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Talent acquisition is tracking departments that have expanded aggressively in recent years. For staff who joined the company after calendar year 2018, group by department and count recent additions, displaying only departments that have hired at least 3 people during this era.",
    "requirements": [
      "Filter for `joining_year > 2018` before grouping.",
      "Group records by `department`.",
      "Count recent recruits aliased as `recent_count`.",
      "Filter groups where recent recruit count is 3 or greater.",
      "Display `department` and `recent_count`."
    ],
    "tableName": "Employees",
    "hint": "Combine a pre-aggregation WHERE filter on joining_year with a post-aggregation HAVING filter on COUNT(*).",
    "expectedSql": "SELECT department, COUNT(*) AS recent_count FROM Employees WHERE joining_year > 2018 GROUP BY department HAVING COUNT(*) >= 3;",
    "explanation": "Illustrates the exact SQL execution pipeline: WHERE filters individual records before grouping; HAVING filters aggregated groups.",
    "tags": [
      "having",
      "where",
      "pipeline",
      "hiring"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "recent_count"
      ],
      "values": [
        [
          "HR",
          3
        ],
        [
          "IT",
          4
        ],
        [
          "Sales",
          4
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 166,
    "title": "Departments with High Unfinished Project Commitments",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "The PMO is reviewing capital tied up in unfinished initiatives per department. For projects that are not completed, group by department ID and calculate the count of pending projects and total pending budget, retaining only departments where cumulative pending budget is at least 300,000.",
    "requirements": [
      "Filter Projects for `status != 'Completed'` in the WHERE clause.",
      "Group by `dept_id`.",
      "Count pending projects aliased as `pending_projects`.",
      "Calculate cumulative pending budget aliased as `total_pending_budget`.",
      "Filter groups where cumulative budget is 300,000 or greater.",
      "Display `dept_id`, `pending_projects`, and `total_pending_budget`."
    ],
    "tableName": "Projects",
    "hint": "Use WHERE status != 'Completed' followed by HAVING SUM(budget) >= 300000.",
    "expectedSql": "SELECT dept_id, COUNT(*) AS pending_projects, SUM(budget) AS total_pending_budget FROM Projects WHERE status != 'Completed' GROUP BY dept_id HAVING SUM(budget) >= 300000;",
    "explanation": "Applies pre-aggregation exclusion on project completion status before testing cumulative capital commitments.",
    "tags": [
      "having",
      "where",
      "projects",
      "sum"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "pending_projects",
        "total_pending_budget"
      ],
      "values": [
        [
          3,
          1,
          300000
        ],
        [
          8,
          1,
          550000
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 167,
    "title": "Personnel Averaging Premium Incentives (2024 Cycle)",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "The compensation committee is auditing high-earning incentive recipients from the 2024 appraisal cycle. For appraisals conducted in 2024, group by employee ID and compute the average bonus awarded (rounded to 2 decimal places), displaying only employees whose average 2024 bonus strictly exceeded 15,000.",
    "requirements": [
      "Filter Performance_Reviews for `review_year = 2024`.",
      "Group by `emp_id`.",
      "Calculate average bonus rounded to 2 decimal places aliased as `avg_2024_bonus`.",
      "Filter groups where average bonus is strictly greater than 15,000.",
      "Display `emp_id` and `avg_2024_bonus`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter for review_year = 2024 in WHERE, then apply HAVING AVG(bonus) > 15000.",
    "expectedSql": "SELECT emp_id, ROUND(AVG(bonus), 2) AS avg_2024_bonus FROM Performance_Reviews WHERE review_year = 2024 GROUP BY emp_id HAVING AVG(bonus) > 15000;",
    "explanation": "Filters for a single appraisal year in WHERE, then isolates standout bonus averages in HAVING.",
    "tags": [
      "having",
      "where",
      "bonus",
      "avg"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "avg_2024_bonus"
      ],
      "values": [
        [
          104,
          18000
        ],
        [
          106,
          25000
        ],
        [
          109,
          18000
        ],
        [
          110,
          16000
        ],
        [
          112,
          25000
        ],
        [
          119,
          30000
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 168,
    "title": "Branch Hubs with Premium Senior Staff Earnings",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is examining compensation levels for seasoned personnel across branch cities. For employees who possess at least 3 years of experience, group by city and calculate the count of seasoned staff and their average monthly salary (rounded to 2 decimal places), displaying only cities where seasoned staff average strictly more than 50,000.",
    "requirements": [
      "Filter Employees for `experience >= 3` in WHERE.",
      "Group records by `city`.",
      "Count seasoned staff aliased as `seasoned_staff`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_seasoned_salary`.",
      "Filter groups where average salary strictly exceeds 50,000.",
      "Display `city`, `seasoned_staff`, and `avg_seasoned_salary`."
    ],
    "tableName": "Employees",
    "hint": "Filter with experience >= 3 before grouping, then use HAVING AVG(salary) > 50000.",
    "expectedSql": "SELECT city, COUNT(*) AS seasoned_staff, ROUND(AVG(salary), 2) AS avg_seasoned_salary FROM Employees WHERE experience >= 3 GROUP BY city HAVING AVG(salary) > 50000;",
    "explanation": "Filters the employee base by minimum tenure before testing whether regional compensation exceeds 50000.",
    "tags": [
      "having",
      "where",
      "compensation",
      "city"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "city",
        "seasoned_staff",
        "avg_seasoned_salary"
      ],
      "values": [
        [
          "Bengaluru",
          4,
          66750
        ],
        [
          "Chennai",
          5,
          55000
        ],
        [
          "Hyderabad",
          4,
          63250
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 169,
    "title": "Boutique Units or Premium Compensation Divisions",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Organizational strategy monitors both boutique specialized teams and high-earning units. Group employees by department and calculate headcount and average salary (rounded to 2 decimal places), displaying departments that either have a small team (3 or fewer employees) OR maintain an average salary strictly exceeding 65,000.",
    "requirements": [
      "Group records by `department`.",
      "Calculate employee count aliased as `emp_count`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_salary`.",
      "Filter groups where headcount is 3 or fewer OR average salary exceeds 65,000.",
      "Display `department`, `emp_count`, and `avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use an OR condition within the HAVING clause connecting the headcount and average salary checks.",
    "expectedSql": "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) <= 3 OR AVG(salary) > 65000;",
    "explanation": "Applies disjunctive logic (OR) inside HAVING to capture either small teams or high-average compensation departments.",
    "tags": [
      "having",
      "or",
      "aggregates"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "emp_count",
        "avg_salary"
      ],
      "values": [
        [
          "Finance",
          4,
          67500
        ],
        [
          "Marketing",
          3,
          52000
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 170,
    "title": "Resource Allocation Outliers: Lean or Heavy Rosters",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Hard",
    "problemStatement": "The PMO is identifying initiatives with atypical staffing profiles in Employee_Projects. For each project, calculate the distinct team headcount and total allocated weekly hours, keeping projects that have either a light total workload (under 40 hours) OR a large roster (4 or more distinct team members).",
    "requirements": [
      "Group by `project_id` in Employee_Projects.",
      "Count distinct assigned staff aliased as `staff_count`.",
      "Sum allocated weekly hours aliased as `total_hours`.",
      "Filter groups where total hours is strictly under 40 OR distinct staff count is at least 4.",
      "Display `project_id`, `staff_count`, and `total_hours`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Apply HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4.",
    "expectedSql": "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4;",
    "explanation": "Captures both under-allocated projects and broad-staff initiatives using aggregate OR logic.",
    "tags": [
      "having",
      "or",
      "workload",
      "cardinality"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_id",
        "staff_count",
        "total_hours"
      ],
      "values": [
        [
          504,
          5,
          110
        ],
        [
          506,
          4,
          110
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 171,
    "title": "High-Disbursement or Superior Rating Review Cycles",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Executive leadership is auditing standout performance review years. For each review year, calculate total reviews, cumulative bonus payout (substituting 0 for nulls), and average rating (rounded to 2 decimal places), displaying only review cycles where total bonuses exceeded 100,000 OR the average rating reached at least 4.0.",
    "requirements": [
      "Group Performance_Reviews by `review_year`.",
      "Count reviews aliased as `total_reviews`.",
      "Sum bonuses substituting 0 for nulls aliased as `total_bonus`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_rating`.",
      "Filter groups where cumulative bonus exceeds 100,000 OR average rating is 4.0 or higher.",
      "Display `review_year`, `total_reviews`, `total_bonus`, and `avg_rating`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0 after grouping by review_year.",
    "expectedSql": "SELECT review_year, COUNT(*) AS total_reviews, COALESCE(SUM(bonus), 0) AS total_bonus, ROUND(AVG(rating), 2) AS avg_rating FROM Performance_Reviews GROUP BY review_year HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0;",
    "explanation": "Applies disjunctive aggregate thresholds to annual corporate appraisal summaries.",
    "tags": [
      "having",
      "or",
      "reviews"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "review_year",
        "total_reviews",
        "total_bonus",
        "avg_rating"
      ],
      "values": [
        [
          2022,
          1,
          25000,
          5
        ],
        [
          2023,
          3,
          68000,
          4.33
        ],
        [
          2024,
          14,
          204000,
          3.79
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 172,
    "title": "Cities with High Wage Baselines and Top Ceilings",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Compensation analytics is evaluating wage distribution extremes in branch cities. For each city in Employees, calculate the lowest and highest monthly salaries, displaying only cities where the salary floor is at least 30,000 AND the salary ceiling strictly exceeds 70,000.",
    "requirements": [
      "Group records by `city` in Employees.",
      "Find minimum salary aliased as `min_sal`.",
      "Find maximum salary aliased as `max_sal`.",
      "Filter groups where minimum salary is at least 30,000 AND maximum salary strictly exceeds 70,000.",
      "Display `city`, `min_sal`, and `max_sal`."
    ],
    "tableName": "Employees",
    "hint": "Apply HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000.",
    "expectedSql": "SELECT city, MIN(salary) AS min_sal, MAX(salary) AS max_sal FROM Employees GROUP BY city HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000;",
    "explanation": "Constrains both lower and upper boundary aggregates across grouped geographical entities.",
    "tags": [
      "having",
      "min",
      "max",
      "salary-boundaries"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "city",
        "min_sal",
        "max_sal"
      ],
      "values": [
        [
          "Bengaluru",
          42000,
          80000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 173,
    "title": "Top Two Highest-Paying Established Departments",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "The executive compensation committee wants to identify the top 2 highest-paying established departments. For departments with at least 3 employees, calculate headcount and average salary (rounded to 2 decimal places), ordered by average salary from highest to lowest, restricted to the top 2 departments.",
    "requirements": [
      "Group records by `department` in Employees.",
      "Calculate employee count aliased as `emp_count`.",
      "Calculate average salary rounded to 2 decimal places aliased as `avg_sal`.",
      "Filter for departments with 3 or more employees.",
      "Sort by average salary in descending order.",
      "Limit the final result set to exactly 2 records.",
      "Display `department`, `emp_count`, and `avg_sal`."
    ],
    "tableName": "Employees",
    "hint": "Combine GROUP BY, HAVING COUNT(*) >= 3, ORDER BY avg_sal DESC, and LIMIT 2.",
    "expectedSql": "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department HAVING COUNT(*) >= 3 ORDER BY avg_sal DESC LIMIT 2;",
    "explanation": "Combines aggregation, group filtering, sort ordering, and Top-N limiting into a complete analytical query.",
    "tags": [
      "having",
      "order-by",
      "limit",
      "top-n"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "emp_count",
        "avg_sal"
      ],
      "values": [
        [
          "Finance",
          4,
          67500
        ],
        [
          "Marketing",
          3,
          52000
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 174,
    "title": "Single Most Labor-Intensive Multi-Member Initiative",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Project operations is identifying the single most demanding team initiative in the portfolio. For initiatives in Employee_Projects that have at least 3 distinct assigned team members, find the project with the highest cumulative weekly hours committed, displaying the project ID, staff count, and total hours.",
    "requirements": [
      "Group by `project_id` in Employee_Projects.",
      "Count distinct assigned staff aliased as `staff_count`.",
      "Sum allocated weekly hours aliased as `total_hours`.",
      "Filter groups where distinct staff count is at least 3.",
      "Order by total weekly hours in descending order.",
      "Limit the result to the single top project.",
      "Display `project_id`, `staff_count`, and `total_hours`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use HAVING COUNT(DISTINCT emp_id) >= 3, ORDER BY total_hours DESC, and LIMIT 1.",
    "expectedSql": "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING COUNT(DISTINCT emp_id) >= 3 ORDER BY total_hours DESC LIMIT 1;",
    "explanation": "Retrieves the single highest-capacity project meeting minimum staffing requirements.",
    "tags": [
      "having",
      "order-by",
      "limit",
      "top-1"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "staff_count",
        "total_hours"
      ],
      "values": [
        [
          506,
          4,
          110
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 175,
    "title": "Top Lifetime Incentive Recipient with Multiple Reviews",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Hard",
    "problemStatement": "Human Resources is recognizing the employee who has accumulated the largest total performance bonus payout across multiple appraisal cycles. For reviewed employees with at least 2 completed reviews, identify the individual with the highest cumulative bonus, displaying their employee ID, review count, and total bonus pool.",
    "requirements": [
      "Group by `emp_id` in Performance_Reviews.",
      "Count total evaluations completed aliased as `review_count`.",
      "Sum total bonuses received aliased as `total_bonus`.",
      "Filter for employees with 2 or more reviews and a non-null bonus sum.",
      "Order by total bonus in descending order.",
      "Limit to the single top rewarded employee.",
      "Display `emp_id`, `review_count`, and `total_bonus`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Combine HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL with ORDER BY total_bonus DESC and LIMIT 1.",
    "expectedSql": "SELECT emp_id, COUNT(*) AS review_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY emp_id HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL ORDER BY total_bonus DESC LIMIT 1;",
    "explanation": "Finds the employee with the greatest cumulative bonus compensation across multiple appraisal cycles.",
    "tags": [
      "having",
      "order-by",
      "limit",
      "bonus"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "review_count",
        "total_bonus"
      ],
      "values": [
        [
          119,
          3,
          83000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 176,
    "title": "Departmental Headquarters and Budget Alignment",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Beginner",
    "problemStatement": "The facilities planning committee needs to cross-reference staff with official department records. Retrieve the employee name, department name, headquarters location, and annual departmental budget for all employees whose department is registered in the Departments table.",
    "requirements": [
      "Combine records from Employees and Departments based on matching department name.",
      "Display `emp_name`, `department`, `location`, and `budget`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Connect Employees and Departments on the matching department name attribute.",
    "expectedSql": "SELECT e.emp_name, e.department, d.location, d.budget FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    "explanation": "Equi-join on department name pairs employee records with their departmental headquarters and budget.",
    "tags": [
      "joins",
      "inner-join",
      "equi-join"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "location",
        "budget"
      ],
      "values": [
        [
          "Anil",
          "IT",
          "Bengaluru",
          1200000
        ],
        [
          "Bhumika",
          "HR",
          "Bengaluru",
          500000
        ],
        [
          "Chetan",
          "IT",
          "Bengaluru",
          1200000
        ],
        [
          "Dhruv",
          "Finance",
          "Hyderabad",
          1500000
        ],
        [
          "Farah",
          "HR",
          "Bengaluru",
          500000
        ],
        [
          "Girish",
          "Finance",
          "Hyderabad",
          1500000
        ],
        [
          "Harsha",
          "IT",
          "Bengaluru",
          1200000
        ],
        [
          "Isha",
          "Marketing",
          "Chennai",
          800000
        ],
        [
          "Kiran",
          "HR",
          "Bengaluru",
          500000
        ],
        [
          "Meena",
          "Marketing",
          "Chennai",
          800000
        ],
        [
          "Naveen",
          "Finance",
          "Hyderabad",
          1500000
        ],
        [
          "Priya",
          "IT",
          "Bengaluru",
          1200000
        ],
        [
          "Rahul",
          "Sales",
          "Hyderabad",
          950000
        ],
        [
          "Sneha",
          "Sales",
          "Hyderabad",
          950000
        ],
        [
          "Varun",
          "Marketing",
          "Chennai",
          800000
        ],
        [
          "Divya",
          "Sales",
          "Hyderabad",
          950000
        ],
        [
          "Manoj",
          "IT",
          "Bengaluru",
          1200000
        ],
        [
          "Pooja",
          "HR",
          "Bengaluru",
          500000
        ],
        [
          "Arjun",
          "Finance",
          "Hyderabad",
          1500000
        ],
        [
          "Keerthi",
          "Sales",
          "Hyderabad",
          950000
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 177,
    "title": "Active Staff Project Assignments",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Beginner",
    "problemStatement": "The PMO is reviewing staff deployed to initiatives. Display employee name, department, assigned project ID, assigned role, and weekly allocated hours for all staff members who have an active project assignment.",
    "requirements": [
      "Combine Employees and Employee_Projects based on matching employee ID.",
      "Display `emp_name`, `department`, `project_id`, `assigned_role`, and `hours_allocated`."
    ],
    "tableName": "Projects, Departments",
    "hint": "Join Employees with Employee_Projects on emp_id.",
    "expectedSql": "SELECT p.project_id, p.project_name, d.dept_name, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id;",
    "explanation": "Standard primary-key to foreign-key equi-join connects projects with owning organizational units.",
    "tags": [
      "joins",
      "inner-join",
      "foreign-key"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "dept_name",
        "budget"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          "IT",
          250000
        ],
        [
          502,
          "ERP Modernization",
          "IT",
          400000
        ],
        [
          503,
          "Global Talent Acquisition",
          "HR",
          120000
        ],
        [
          504,
          "Financial Audit Automation",
          "Finance",
          300000
        ],
        [
          505,
          "Brand Revamp 2025",
          "Marketing",
          180000
        ],
        [
          506,
          "CRM Sales Pipeline",
          "Sales",
          220000
        ],
        [
          507,
          "Compliance Automation",
          "Legal",
          90000
        ],
        [
          508,
          "NextGen AI Suite",
          "R&D",
          550000
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 178,
    "title": "Project Ownership and Divisional Budgets",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Corporate governance needs an overview linking projects to their sponsoring departments. For each initiative, display the project name, project budget, sponsoring department name, and department office location.",
    "requirements": [
      "Combine Projects and Departments based on matching department ID (`dept_id`).",
      "Display `project_name`, project `budget`, `dept_name`, and `location`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Join Projects and Departments on dept_id.",
    "expectedSql": "SELECT e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    "explanation": "Resolves employee names for project staffing records via the junction table.",
    "tags": [
      "joins",
      "inner-join",
      "junction"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "project_id",
        "assigned_role",
        "hours_allocated"
      ],
      "values": [
        [
          "Chetan",
          501,
          "Lead Developer",
          35
        ],
        [
          "Chetan",
          502,
          "Backend Architect",
          15
        ],
        [
          "Harsha",
          501,
          "Full Stack Engineer",
          40
        ],
        [
          "Priya",
          501,
          "Project Manager",
          25
        ],
        [
          "Priya",
          504,
          "Technical Advisor",
          15
        ],
        [
          "Manoj",
          502,
          "Database Specialist",
          30
        ],
        [
          "Bhumika",
          503,
          "Recruiter",
          35
        ],
        [
          "Farah",
          503,
          "HR Coordinator",
          30
        ],
        [
          "Kiran",
          503,
          "HR Lead",
          20
        ],
        [
          "Dhruv",
          504,
          "Senior Auditor",
          35
        ],
        [
          "Girish",
          504,
          "Compliance Officer",
          20
        ],
        [
          "Naveen",
          504,
          "Financial Analyst",
          30
        ],
        [
          "Arjun",
          504,
          "Finance Director",
          10
        ],
        [
          "Isha",
          505,
          "Content Strategist",
          35
        ],
        [
          "Meena",
          505,
          "Marketing Manager",
          30
        ],
        [
          "Varun",
          505,
          "Creative Director",
          20
        ],
        [
          "Varun",
          506,
          "Campaign Strategist",
          20
        ],
        [
          "Sneha",
          506,
          "Sales Lead",
          35
        ],
        [
          "Divya",
          506,
          "Account Executive",
          30
        ],
        [
          "Keerthi",
          506,
          "Client Onboarding",
          25
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 179,
    "title": "Employee Appraisal History Record",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Human Resources is compiling historical performance ratings alongside employee profiles. Display each employee's name, evaluation year, rating, and awarded bonus for all completed performance appraisals.",
    "requirements": [
      "Combine Employees and Performance_Reviews on matching employee ID.",
      "Display `emp_name`, `review_year`, `rating`, and `bonus`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Join Employees and Performance_Reviews on emp_id.",
    "expectedSql": "SELECT e.emp_name, pr.review_year, pr.rating, pr.bonus FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Combines employee biographical names with historical performance appraisals.",
    "tags": [
      "joins",
      "inner-join",
      "reviews"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "review_year",
        "rating",
        "bonus"
      ],
      "values": [
        [
          "Chetan",
          2024,
          4,
          15000
        ],
        [
          "Dhruv",
          2024,
          4,
          18000
        ],
        [
          "Girish",
          2023,
          4,
          20000
        ],
        [
          "Girish",
          2024,
          5,
          25000
        ],
        [
          "Harsha",
          2024,
          3,
          8000
        ],
        [
          "Kiran",
          2024,
          4,
          18000
        ],
        [
          "Meena",
          2024,
          4,
          16000
        ],
        [
          "Naveen",
          2024,
          2,
          null
        ],
        [
          "Priya",
          2023,
          4,
          20000
        ],
        [
          "Priya",
          2024,
          5,
          25000
        ],
        [
          "Sneha",
          2024,
          4,
          12000
        ],
        [
          "Varun",
          2024,
          4,
          15000
        ],
        [
          "Divya",
          2024,
          3,
          7000
        ],
        [
          "Manoj",
          2024,
          3,
          9000
        ],
        [
          "Arjun",
          2022,
          5,
          25000
        ],
        [
          "Arjun",
          2023,
          5,
          28000
        ],
        [
          "Arjun",
          2024,
          5,
          30000
        ],
        [
          "Bhumika",
          2024,
          3,
          6000
        ]
      ],
      "rowCount": 18
    }
  },
  {
    "id": 180,
    "title": "Initiative Staffing and Operational Status",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Resource allocation reviews need to correlate project status with assigned personnel. Display project name, execution status, assigned employee ID, and assigned role for all current project assignments.",
    "requirements": [
      "Combine Projects and Employee_Projects based on matching project ID.",
      "Display `project_name`, `status`, `emp_id`, and `assigned_role`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Join Projects with Employee_Projects on project_id.",
    "expectedSql": "SELECT p.project_name, ep.emp_id, ep.assigned_role, ep.hours_allocated FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Exposes project team composition by joining the project dimension with staffing assignments.",
    "tags": [
      "joins",
      "inner-join",
      "projects"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_name",
        "emp_id",
        "assigned_role",
        "hours_allocated"
      ],
      "values": [
        [
          "Cloud Migration",
          103,
          "Lead Developer",
          35
        ],
        [
          "ERP Modernization",
          103,
          "Backend Architect",
          15
        ],
        [
          "Cloud Migration",
          107,
          "Full Stack Engineer",
          40
        ],
        [
          "Cloud Migration",
          112,
          "Project Manager",
          25
        ],
        [
          "Financial Audit Automation",
          112,
          "Technical Advisor",
          15
        ],
        [
          "ERP Modernization",
          117,
          "Database Specialist",
          30
        ],
        [
          "Global Talent Acquisition",
          102,
          "Recruiter",
          35
        ],
        [
          "Global Talent Acquisition",
          105,
          "HR Coordinator",
          30
        ],
        [
          "Global Talent Acquisition",
          109,
          "HR Lead",
          20
        ],
        [
          "Financial Audit Automation",
          104,
          "Senior Auditor",
          35
        ],
        [
          "Financial Audit Automation",
          106,
          "Compliance Officer",
          20
        ],
        [
          "Financial Audit Automation",
          111,
          "Financial Analyst",
          30
        ],
        [
          "Financial Audit Automation",
          119,
          "Finance Director",
          10
        ],
        [
          "Brand Revamp 2025",
          108,
          "Content Strategist",
          35
        ],
        [
          "Brand Revamp 2025",
          110,
          "Marketing Manager",
          30
        ],
        [
          "Brand Revamp 2025",
          115,
          "Creative Director",
          20
        ],
        [
          "CRM Sales Pipeline",
          115,
          "Campaign Strategist",
          20
        ],
        [
          "CRM Sales Pipeline",
          114,
          "Sales Lead",
          35
        ],
        [
          "CRM Sales Pipeline",
          116,
          "Account Executive",
          30
        ],
        [
          "CRM Sales Pipeline",
          120,
          "Client Onboarding",
          25
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 181,
    "title": "Hyderabad Division Personnel Roster",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Corporate administration is compiling a directory of staff members whose departments are headquartered in Hyderabad. Display employee name, department, and office location for all employees working in departments located in Hyderabad.",
    "requirements": [
      "Combine Employees and Departments on department name.",
      "Filter for departments situated in 'Hyderabad'.",
      "Display `emp_name`, `department`, and `location`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Join on department name and filter for location = 'Hyderabad' in the WHERE clause.",
    "expectedSql": "SELECT e.emp_name, e.department, d.dept_head FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE d.location = 'Hyderabad';",
    "explanation": "Combines join logic with WHERE filtering on department headquarters location.",
    "tags": [
      "joins",
      "where",
      "location"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "dept_head"
      ],
      "values": [
        [
          "Dhruv",
          "Finance",
          "Arjun"
        ],
        [
          "Girish",
          "Finance",
          "Arjun"
        ],
        [
          "Naveen",
          "Finance",
          "Arjun"
        ],
        [
          "Rahul",
          "Sales",
          "Sneha"
        ],
        [
          "Sneha",
          "Sales",
          "Sneha"
        ],
        [
          "Divya",
          "Sales",
          "Sneha"
        ],
        [
          "Arjun",
          "Finance",
          "Arjun"
        ],
        [
          "Keerthi",
          "Sales",
          "Sneha"
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 182,
    "title": "High-Rated Appraisals in the 2024 Cycle",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Executive management is recognizing top performers from the 2024 review cycle. Retrieve employee name, department, rating, and bonus for reviews conducted in 2024 where the employee achieved a rating of 4 or higher.",
    "requirements": [
      "Join Employees and Performance_Reviews on employee ID.",
      "Filter for evaluations in calendar year 2024 with a rating of 4 or 5.",
      "Display `emp_name`, `department`, `rating`, and `bonus`."
    ],
    "tableName": "Projects, Departments",
    "hint": "Join on emp_id and filter for review_year = 2024 and rating >= 4.",
    "expectedSql": "SELECT p.project_name, d.dept_name, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id WHERE p.status = 'Active';",
    "explanation": "Filters active project status across joined departmental relations.",
    "tags": [
      "joins",
      "where",
      "status"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_name",
        "dept_name",
        "budget"
      ],
      "values": [
        [
          "Cloud Migration",
          "IT",
          250000
        ],
        [
          "Global Talent Acquisition",
          "HR",
          120000
        ],
        [
          "Financial Audit Automation",
          "Finance",
          300000
        ],
        [
          "Brand Revamp 2025",
          "Marketing",
          180000
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 183,
    "title": "Substantial Workload Commitments on Active Initiatives",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Project operations is monitoring intensive resource commitments on active projects. Display project name, assigned employee ID, role, and allocated weekly hours for all assignments on 'Active' projects where weekly hours strictly exceed 20.",
    "requirements": [
      "Join Projects and Employee_Projects on project ID.",
      "Filter for active projects and weekly workload exceeding 20 hours.",
      "Display `project_name`, `emp_id`, `assigned_role`, and `hours_allocated`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Join on project_id and filter for status = 'Active' and hours_allocated > 20.",
    "expectedSql": "SELECT e.emp_name, e.department, pr.rating, pr.bonus, pr.feedback FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
    "explanation": "Isolates top-rated staff members and details their compensation rewards.",
    "tags": [
      "joins",
      "reviews",
      "ratings"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "rating",
        "bonus",
        "feedback"
      ],
      "values": [
        [
          "Girish",
          "Finance",
          5,
          25000,
          "Top contributor across all finance operations"
        ],
        [
          "Priya",
          "IT",
          5,
          25000,
          "Promoted to project delivery lead"
        ],
        [
          "Arjun",
          "Finance",
          5,
          25000,
          "Consistently exceptional financial strategy"
        ],
        [
          "Arjun",
          "Finance",
          5,
          28000,
          "Spearheaded corporate cost optimization"
        ],
        [
          "Arjun",
          "Finance",
          5,
          30000,
          "Highest performance rating in company history"
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 184,
    "title": "High-Earner Divisional Placement and Budgets",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Compensation analytics is evaluating high-earning staff relative to departmental funding. For employees earning strictly more than 50,000, display employee name, salary, department name, and departmental operating budget.",
    "requirements": [
      "Join Employees and Departments on matching department name.",
      "Filter for employees earning strictly more than 50,000.",
      "Display `emp_name`, `salary`, `dept_name`, and `budget`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Join on department name and filter for salary > 50000 in the WHERE clause.",
    "expectedSql": "SELECT ep.emp_id, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE ep.hours_allocated >= 35;",
    "explanation": "Pairs project names with intensive staffing commitments.",
    "tags": [
      "joins",
      "workload",
      "hours"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "project_name",
        "assigned_role",
        "hours_allocated"
      ],
      "values": [
        [
          103,
          "Cloud Migration",
          "Lead Developer",
          35
        ],
        [
          107,
          "Cloud Migration",
          "Full Stack Engineer",
          40
        ],
        [
          102,
          "Global Talent Acquisition",
          "Recruiter",
          35
        ],
        [
          104,
          "Financial Audit Automation",
          "Senior Auditor",
          35
        ],
        [
          108,
          "Brand Revamp 2025",
          "Content Strategist",
          35
        ],
        [
          114,
          "CRM Sales Pipeline",
          "Sales Lead",
          35
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 185,
    "title": "Completed Capital Initiatives by Department",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "The PMO is reporting delivered programs alongside their sponsoring division. Display project name, budget, department name, and office location for all projects that have reached 'Completed' status.",
    "requirements": [
      "Join Projects and Departments on department ID (`dept_id`).",
      "Filter for initiatives marked as 'Completed'.",
      "Display `project_name`, project `budget`, `dept_name`, and `location`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Join on dept_id and filter for status = 'Completed'.",
    "expectedSql": "SELECT e.emp_name, e.salary, d.dept_name, d.dept_head FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE e.salary > 50000;",
    "explanation": "Surfaces executive leadership associated with high-earning staff members.",
    "tags": [
      "joins",
      "salary",
      "management"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary",
        "dept_name",
        "dept_head"
      ],
      "values": [
        [
          "Chetan",
          55000,
          "IT",
          "Priya"
        ],
        [
          "Dhruv",
          65000,
          "Finance",
          "Arjun"
        ],
        [
          "Girish",
          80000,
          "Finance",
          "Arjun"
        ],
        [
          "Kiran",
          70000,
          "HR",
          "Kiran"
        ],
        [
          "Meena",
          60000,
          "Marketing",
          "Varun"
        ],
        [
          "Priya",
          75000,
          "IT",
          "Priya"
        ],
        [
          "Varun",
          68000,
          "Marketing",
          "Varun"
        ],
        [
          "Manoj",
          52000,
          "IT",
          "Priya"
        ],
        [
          "Arjun",
          90000,
          "Finance",
          "Arjun"
        ],
        [
          "Keerthi",
          55000,
          "Sales",
          "Sneha"
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 186,
    "title": "Leadership Assignments Across Projects",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Workforce governance is tracking personnel serving in managerial and lead capacities on corporate initiatives. Display employee name, department, project ID, and assigned role for assignments where the role title contains 'Lead' or 'Manager'.",
    "requirements": [
      "Join Employees and Employee_Projects on employee ID.",
      "Filter for assigned roles containing 'Lead' or 'Manager'.",
      "Display `emp_name`, `department`, `project_id`, and `assigned_role`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Join on emp_id and use partial string matching on assigned_role with OR.",
    "expectedSql": "SELECT e.emp_name, e.department, ep.project_id, ep.assigned_role FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.assigned_role LIKE '%Lead%';",
    "explanation": "Joins staffing records with biographical details to highlight lead project contributors.",
    "tags": [
      "joins",
      "roles",
      "like"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "project_id",
        "assigned_role"
      ],
      "values": [
        [
          "Chetan",
          "IT",
          501,
          "Lead Developer"
        ],
        [
          "Kiran",
          "HR",
          503,
          "HR Lead"
        ],
        [
          "Sneha",
          "Sales",
          506,
          "Sales Lead"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 187,
    "title": "Substantial Merit Bonus Disbursements",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Finance is auditing significant incentive disbursements. Display employee name, evaluation year, rating, and bonus for all performance reviews where the awarded bonus strictly exceeds 10,000.",
    "requirements": [
      "Join Employees and Performance_Reviews on employee ID.",
      "Filter for appraisals with a bonus strictly greater than 10,000.",
      "Display `emp_name`, `review_year`, `rating`, and `bonus`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Join on emp_id and filter for bonus > 10000.",
    "expectedSql": "SELECT e.emp_name, e.city, pr.rating, pr.bonus FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_year = 2024 AND pr.bonus IS NOT NULL;",
    "explanation": "Correlates regional office branches with recent appraisal compensation.",
    "tags": [
      "joins",
      "reviews",
      "bonus"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "city",
        "rating",
        "bonus"
      ],
      "values": [
        [
          "Chetan",
          "Hyderabad",
          4,
          15000
        ],
        [
          "Dhruv",
          "Chennai",
          4,
          18000
        ],
        [
          "Girish",
          "Bengaluru",
          5,
          25000
        ],
        [
          "Harsha",
          "Vijayawada",
          3,
          8000
        ],
        [
          "Kiran",
          "Bengaluru",
          4,
          18000
        ],
        [
          "Meena",
          "Hyderabad",
          4,
          16000
        ],
        [
          "Priya",
          "Bengaluru",
          5,
          25000
        ],
        [
          "Sneha",
          "Hyderabad",
          4,
          12000
        ],
        [
          "Varun",
          "Chennai",
          4,
          15000
        ],
        [
          "Divya",
          "Bengaluru",
          3,
          7000
        ],
        [
          "Manoj",
          "Chennai",
          3,
          9000
        ],
        [
          "Arjun",
          "Hyderabad",
          5,
          30000
        ],
        [
          "Bhumika",
          "Vijayawada",
          3,
          6000
        ]
      ],
      "rowCount": 13
    }
  },
  {
    "id": 188,
    "title": "Major Capital Investments by Division",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Corporate treasury is reviewing capital-intensive programs. Retrieve project name, budget, department name, and location for all initiatives with a project budget strictly exceeding 250,000.",
    "requirements": [
      "Join Projects and Departments on department ID.",
      "Filter for project budgets exceeding 250,000.",
      "Display `project_name`, project `budget`, `dept_name`, and `location`."
    ],
    "tableName": "Projects, Departments",
    "hint": "Join on dept_id and filter for Projects.budget > 250000.",
    "expectedSql": "SELECT p.project_name, d.dept_name, d.dept_head, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id WHERE p.budget > 200000;",
    "explanation": "Joins project capital data with departmental executive leadership.",
    "tags": [
      "joins",
      "budget",
      "departments"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_name",
        "dept_name",
        "dept_head",
        "budget"
      ],
      "values": [
        [
          "Cloud Migration",
          "IT",
          "Priya",
          250000
        ],
        [
          "ERP Modernization",
          "IT",
          "Priya",
          400000
        ],
        [
          "Financial Audit Automation",
          "Finance",
          "Arjun",
          300000
        ],
        [
          "CRM Sales Pipeline",
          "Sales",
          "Sneha",
          220000
        ],
        [
          "NextGen AI Suite",
          "R&D",
          "Vikram",
          550000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 189,
    "title": "Staff Assignment Workload Leaderboard",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Resource scheduling requires a leaderboard of project assignments ranked by weekly commitment. Display employee name, department, project ID, and allocated hours, ordered from the highest weekly workload to the lowest.",
    "requirements": [
      "Join Employees and Employee_Projects on employee ID.",
      "Order results by allocated hours in descending order.",
      "Display `emp_name`, `department`, `project_id`, and `hours_allocated`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Join on emp_id and apply ORDER BY hours_allocated DESC.",
    "expectedSql": "SELECT e.emp_name, e.city, e.department, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE e.city = d.location;",
    "explanation": "Verifies whether an employee's work base aligns with their division's central headquarters.",
    "tags": [
      "joins",
      "location",
      "co-location"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "city",
        "department",
        "location"
      ],
      "values": [
        [
          "Isha",
          "Chennai",
          "Marketing",
          "Chennai"
        ],
        [
          "Kiran",
          "Bengaluru",
          "HR",
          "Bengaluru"
        ],
        [
          "Priya",
          "Bengaluru",
          "IT",
          "Bengaluru"
        ],
        [
          "Sneha",
          "Hyderabad",
          "Sales",
          "Hyderabad"
        ],
        [
          "Varun",
          "Chennai",
          "Marketing",
          "Chennai"
        ],
        [
          "Arjun",
          "Hyderabad",
          "Finance",
          "Hyderabad"
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 190,
    "title": "Appraisal Excellence Leaderboard",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is compiling an honor roll of employee performance appraisals. Display employee name, department, review year, rating, and bonus, sorted primarily by rating from highest to lowest, and secondarily by bonus amount descending.",
    "requirements": [
      "Join Employees and Performance_Reviews on employee ID.",
      "Order primarily by rating descending, and secondarily by bonus descending.",
      "Display `emp_name`, `department`, `review_year`, `rating`, and `bonus`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Join on emp_id and sort by rating DESC, bonus DESC.",
    "expectedSql": "SELECT e.emp_name, e.salary, pr.bonus, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.bonus IS NOT NULL;",
    "explanation": "Juxtaposes recurring monthly compensation against one-time merit bonus awards.",
    "tags": [
      "joins",
      "salary",
      "bonus"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary",
        "bonus",
        "rating"
      ],
      "values": [
        [
          "Chetan",
          55000,
          15000,
          4
        ],
        [
          "Dhruv",
          65000,
          18000,
          4
        ],
        [
          "Girish",
          80000,
          20000,
          4
        ],
        [
          "Girish",
          80000,
          25000,
          5
        ],
        [
          "Harsha",
          45000,
          8000,
          3
        ],
        [
          "Kiran",
          70000,
          18000,
          4
        ],
        [
          "Meena",
          60000,
          16000,
          4
        ],
        [
          "Priya",
          75000,
          20000,
          4
        ],
        [
          "Priya",
          75000,
          25000,
          5
        ],
        [
          "Sneha",
          48000,
          12000,
          4
        ],
        [
          "Varun",
          68000,
          15000,
          4
        ],
        [
          "Divya",
          42000,
          7000,
          3
        ],
        [
          "Manoj",
          52000,
          9000,
          3
        ],
        [
          "Arjun",
          90000,
          25000,
          5
        ],
        [
          "Arjun",
          90000,
          28000,
          5
        ],
        [
          "Arjun",
          90000,
          30000,
          5
        ],
        [
          "Bhumika",
          40000,
          6000,
          3
        ]
      ],
      "rowCount": 17
    }
  },
  {
    "id": 191,
    "title": "Comprehensive Project Staffing Audit",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "The Project Management Office is conducting a full staffing inventory. Generate a report listing every single employee in the company along with their assigned project ID and role. Crucially, employees who are not currently assigned to any project must still appear in the report.",
    "requirements": [
      "Include employee ID (`emp_id`), full name (`emp_name`), assigned project ID (`project_id`), and assigned role (`assigned_role`).",
      "Ensure all company employees are retained in the results, displaying NULL for project details when an employee has no active assignment."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use an outer join that preserves all rows from the primary employee table.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, ep.project_id, ep.assigned_role FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    "explanation": "Preserves all employees in the result set; employees with no project assignments return NULL for project attributes.",
    "tags": [
      "joins",
      "left-join",
      "preservation"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "project_id",
        "assigned_role"
      ],
      "values": [
        [
          101,
          "Anil",
          null,
          null
        ],
        [
          102,
          "Bhumika",
          503,
          "Recruiter"
        ],
        [
          103,
          "Chetan",
          501,
          "Lead Developer"
        ],
        [
          103,
          "Chetan",
          502,
          "Backend Architect"
        ],
        [
          104,
          "Dhruv",
          504,
          "Senior Auditor"
        ],
        [
          105,
          "Farah",
          503,
          "HR Coordinator"
        ],
        [
          106,
          "Girish",
          504,
          "Compliance Officer"
        ],
        [
          107,
          "Harsha",
          501,
          "Full Stack Engineer"
        ],
        [
          108,
          "Isha",
          505,
          "Content Strategist"
        ],
        [
          109,
          "Kiran",
          503,
          "HR Lead"
        ],
        [
          110,
          "Meena",
          505,
          "Marketing Manager"
        ],
        [
          111,
          "Naveen",
          504,
          "Financial Analyst"
        ],
        [
          112,
          "Priya",
          501,
          "Project Manager"
        ],
        [
          112,
          "Priya",
          504,
          "Technical Advisor"
        ],
        [
          113,
          "Rahul",
          null,
          null
        ],
        [
          114,
          "Sneha",
          506,
          "Sales Lead"
        ],
        [
          115,
          "Varun",
          505,
          "Creative Director"
        ],
        [
          115,
          "Varun",
          506,
          "Campaign Strategist"
        ],
        [
          116,
          "Divya",
          506,
          "Account Executive"
        ],
        [
          117,
          "Manoj",
          502,
          "Database Specialist"
        ],
        [
          118,
          "Pooja",
          null,
          null
        ],
        [
          119,
          "Arjun",
          504,
          "Finance Director"
        ],
        [
          120,
          "Keerthi",
          506,
          "Client Onboarding"
        ]
      ],
      "rowCount": 23
    }
  },
  {
    "id": 192,
    "title": "Workforce Appraisal Coverage Inventory",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "HR governance is auditing review completion across the workforce. Produce a roster listing all employees alongside their review year, rating, and bonus, ensuring that staff members who have never received a performance appraisal are preserved in the list.",
    "requirements": [
      "Combine Employees and Performance_Reviews preserving all employees.",
      "Display `emp_id`, `emp_name`, `review_year`, `rating`, and `bonus`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use a left outer join from Employees to Performance_Reviews on emp_id.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
    "explanation": "Classic SQL anti-join: LEFT JOIN combined with IS NULL on the right table's key identifies unmatched records.",
    "tags": [
      "joins",
      "anti-join",
      "left-join",
      "null"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT"
        ],
        [
          113,
          "Rahul",
          "Sales"
        ],
        [
          118,
          "Pooja",
          "HR"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 193,
    "title": "Departmental Project Ownership Directory",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Corporate strategy is auditing project sponsorship across all divisions. Display department name, office location, project ID, and project name, ensuring departments that currently sponsor zero projects are still listed.",
    "requirements": [
      "Combine Departments and Projects preserving all departments.",
      "Display `dept_name`, `location`, `project_id`, and `project_name`."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use a left join from Departments to Projects on dept_id.",
    "expectedSql": "SELECT d.dept_name, d.location, p.project_name, p.status FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id;",
    "explanation": "Preserves departments even if they have no ongoing or planned projects.",
    "tags": [
      "joins",
      "left-join",
      "departments"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "location",
        "project_name",
        "status"
      ],
      "values": [
        [
          "IT",
          "Bengaluru",
          "Cloud Migration",
          "Active"
        ],
        [
          "IT",
          "Bengaluru",
          "ERP Modernization",
          "Completed"
        ],
        [
          "HR",
          "Bengaluru",
          "Global Talent Acquisition",
          "Active"
        ],
        [
          "Finance",
          "Hyderabad",
          "Financial Audit Automation",
          "Active"
        ],
        [
          "Marketing",
          "Chennai",
          "Brand Revamp 2025",
          "Active"
        ],
        [
          "Sales",
          "Hyderabad",
          "CRM Sales Pipeline",
          "Completed"
        ],
        [
          "Legal",
          "Hyderabad",
          "Compliance Automation",
          "Planning"
        ],
        [
          "Operations",
          "Chennai",
          null,
          null
        ],
        [
          "R&D",
          "Bengaluru",
          "NextGen AI Suite",
          "Planning"
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 194,
    "title": "Initiative Resource Deployment Audit",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Resource governance is verifying team assignments across the project portfolio. Display project name, status, assigned employee ID, and weekly hours, ensuring initiatives with zero assigned team members are preserved in the report.",
    "requirements": [
      "Combine Projects and Employee_Projects preserving all projects.",
      "Display `project_name`, `status`, `emp_id`, and `hours_allocated`."
    ],
    "tableName": "Departments, Projects",
    "hint": "Left join Projects to Employee_Projects on project_id.",
    "expectedSql": "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id WHERE p.project_id IS NULL;",
    "explanation": "Surfaces departments that lack project activity using an anti-join pattern.",
    "tags": [
      "joins",
      "anti-join",
      "left-join"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "location"
      ],
      "values": [
        [
          7,
          "Operations",
          "Chennai"
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 195,
    "title": "Employee Department Registration Verification",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Data management is verifying organizational alignment between staff and registered departments. Display employee name, department, office location, and budget, preserving all employee records even if their department is unlisted in official department records.",
    "requirements": [
      "Combine Employees and Departments preserving all employees.",
      "Display `emp_name`, `department`, `location`, and `budget`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Left join Employees with Departments matching department to dept_name.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Lists every corporate employee while including appraisal data for those who have been evaluated.",
    "tags": [
      "joins",
      "left-join",
      "reviews"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "review_year",
        "rating"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT",
          null,
          null
        ],
        [
          102,
          "Bhumika",
          "HR",
          2024,
          3
        ],
        [
          103,
          "Chetan",
          "IT",
          2024,
          4
        ],
        [
          104,
          "Dhruv",
          "Finance",
          2024,
          4
        ],
        [
          105,
          "Farah",
          "HR",
          null,
          null
        ],
        [
          106,
          "Girish",
          "Finance",
          2023,
          4
        ],
        [
          106,
          "Girish",
          "Finance",
          2024,
          5
        ],
        [
          107,
          "Harsha",
          "IT",
          2024,
          3
        ],
        [
          108,
          "Isha",
          "Marketing",
          null,
          null
        ],
        [
          109,
          "Kiran",
          "HR",
          2024,
          4
        ],
        [
          110,
          "Meena",
          "Marketing",
          2024,
          4
        ],
        [
          111,
          "Naveen",
          "Finance",
          2024,
          2
        ],
        [
          112,
          "Priya",
          "IT",
          2023,
          4
        ],
        [
          112,
          "Priya",
          "IT",
          2024,
          5
        ],
        [
          113,
          "Rahul",
          "Sales",
          null,
          null
        ],
        [
          114,
          "Sneha",
          "Sales",
          2024,
          4
        ],
        [
          115,
          "Varun",
          "Marketing",
          2024,
          4
        ],
        [
          116,
          "Divya",
          "Sales",
          2024,
          3
        ],
        [
          117,
          "Manoj",
          "IT",
          2024,
          3
        ],
        [
          118,
          "Pooja",
          "HR",
          null,
          null
        ],
        [
          119,
          "Arjun",
          "Finance",
          2022,
          5
        ],
        [
          119,
          "Arjun",
          "Finance",
          2023,
          5
        ],
        [
          119,
          "Arjun",
          "Finance",
          2024,
          5
        ],
        [
          120,
          "Keerthi",
          "Sales",
          null,
          null
        ]
      ],
      "rowCount": 24
    }
  },
  {
    "id": 196,
    "title": "Unassigned Personnel Identification",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Operations management needs to deploy unallocated talent to new initiatives. Identify all employees who currently have zero project assignments in Employee_Projects, displaying their ID, name, department, and salary.",
    "requirements": [
      "Identify employees who have no corresponding record in Employee_Projects.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use a left outer join and filter where the joined project assignment attribute is null.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_id IS NULL;",
    "explanation": "Isolates unreviewed personnel to schedule pending evaluations.",
    "tags": [
      "joins",
      "anti-join",
      "null"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT",
          25000
        ],
        [
          105,
          "Farah",
          "HR",
          32000
        ],
        [
          108,
          "Isha",
          "Marketing",
          28000
        ],
        [
          113,
          "Rahul",
          "Sales",
          30000
        ],
        [
          118,
          "Pooja",
          "HR",
          27000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 197,
    "title": "Unreviewed Staff Identification",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Human Resources is scheduling evaluations for staff who have never been reviewed. Find all employees who do not have any performance reviews recorded in the system, displaying their employee ID, name, department, and joining year.",
    "requirements": [
      "Find employees who do not appear in Performance_Reviews.",
      "Display `emp_id`, `emp_name`, `department`, and `joining_year`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Left join Employees to Performance_Reviews and filter where review_id is null.",
    "expectedSql": "SELECT p.project_id, p.project_name, ep.emp_id, ep.assigned_role FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Retains all initiatives, including newly planned initiatives that have no staff assigned yet.",
    "tags": [
      "joins",
      "left-join",
      "projects"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "emp_id",
        "assigned_role"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          103,
          "Lead Developer"
        ],
        [
          501,
          "Cloud Migration",
          107,
          "Full Stack Engineer"
        ],
        [
          501,
          "Cloud Migration",
          112,
          "Project Manager"
        ],
        [
          502,
          "ERP Modernization",
          103,
          "Backend Architect"
        ],
        [
          502,
          "ERP Modernization",
          117,
          "Database Specialist"
        ],
        [
          503,
          "Global Talent Acquisition",
          102,
          "Recruiter"
        ],
        [
          503,
          "Global Talent Acquisition",
          105,
          "HR Coordinator"
        ],
        [
          503,
          "Global Talent Acquisition",
          109,
          "HR Lead"
        ],
        [
          504,
          "Financial Audit Automation",
          104,
          "Senior Auditor"
        ],
        [
          504,
          "Financial Audit Automation",
          106,
          "Compliance Officer"
        ],
        [
          504,
          "Financial Audit Automation",
          111,
          "Financial Analyst"
        ],
        [
          504,
          "Financial Audit Automation",
          112,
          "Technical Advisor"
        ],
        [
          504,
          "Financial Audit Automation",
          119,
          "Finance Director"
        ],
        [
          505,
          "Brand Revamp 2025",
          108,
          "Content Strategist"
        ],
        [
          505,
          "Brand Revamp 2025",
          110,
          "Marketing Manager"
        ],
        [
          505,
          "Brand Revamp 2025",
          115,
          "Creative Director"
        ],
        [
          506,
          "CRM Sales Pipeline",
          114,
          "Sales Lead"
        ],
        [
          506,
          "CRM Sales Pipeline",
          115,
          "Campaign Strategist"
        ],
        [
          506,
          "CRM Sales Pipeline",
          116,
          "Account Executive"
        ],
        [
          506,
          "CRM Sales Pipeline",
          120,
          "Client Onboarding"
        ],
        [
          507,
          "Compliance Automation",
          null,
          null
        ],
        [
          508,
          "NextGen AI Suite",
          null,
          null
        ]
      ],
      "rowCount": 22
    }
  },
  {
    "id": 198,
    "title": "Divisions Lacking Project Sponsorship",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Corporate strategy is identifying departments that currently have no active capital initiatives. Display the department ID, department name, and location for all departments that sponsor zero projects.",
    "requirements": [
      "Find departments with no corresponding records in Projects.",
      "Display `dept_id`, `dept_name`, and `location` from Departments."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Left join Departments to Projects on dept_id and filter where project_id is null.",
    "expectedSql": "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
    "explanation": "Detects unstaffed initiatives requiring human resource allocation.",
    "tags": [
      "joins",
      "anti-join",
      "staffing"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status"
      ],
      "values": [
        [
          507,
          "Compliance Automation",
          "Planning"
        ],
        [
          508,
          "NextGen AI Suite",
          "Planning"
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 199,
    "title": "Unstaffed Initiative Identification",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "The PMO is identifying projects that are currently operating without any assigned staff. Display the project ID, project name, and status for all initiatives in Projects that have zero assignments in Employee_Projects.",
    "requirements": [
      "Find projects that have no corresponding records in Employee_Projects.",
      "Display `project_id`, `project_name`, and `status` from Projects."
    ],
    "tableName": "Departments, Employees",
    "hint": "Left join Projects to Employee_Projects on project_id and filter where emp_id is null.",
    "expectedSql": "SELECT d.dept_name, d.dept_head, e.emp_name FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department;",
    "explanation": "Preserves departments with zero staff (e.g. Legal, Operations, R&D) with NULL employee names.",
    "tags": [
      "joins",
      "left-join",
      "departments"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "dept_head",
        "emp_name"
      ],
      "values": [
        [
          "IT",
          "Priya",
          "Anil"
        ],
        [
          "IT",
          "Priya",
          "Chetan"
        ],
        [
          "IT",
          "Priya",
          "Harsha"
        ],
        [
          "IT",
          "Priya",
          "Manoj"
        ],
        [
          "IT",
          "Priya",
          "Priya"
        ],
        [
          "HR",
          "Kiran",
          "Bhumika"
        ],
        [
          "HR",
          "Kiran",
          "Farah"
        ],
        [
          "HR",
          "Kiran",
          "Kiran"
        ],
        [
          "HR",
          "Kiran",
          "Pooja"
        ],
        [
          "Finance",
          "Arjun",
          "Arjun"
        ],
        [
          "Finance",
          "Arjun",
          "Dhruv"
        ],
        [
          "Finance",
          "Arjun",
          "Girish"
        ],
        [
          "Finance",
          "Arjun",
          "Naveen"
        ],
        [
          "Marketing",
          "Varun",
          "Isha"
        ],
        [
          "Marketing",
          "Varun",
          "Meena"
        ],
        [
          "Marketing",
          "Varun",
          "Varun"
        ],
        [
          "Sales",
          "Sneha",
          "Divya"
        ],
        [
          "Sales",
          "Sneha",
          "Keerthi"
        ],
        [
          "Sales",
          "Sneha",
          "Rahul"
        ],
        [
          "Sales",
          "Sneha",
          "Sneha"
        ],
        [
          "Legal",
          "Suresh",
          null
        ],
        [
          "Operations",
          "Geeta",
          null
        ],
        [
          "R&D",
          "Vikram",
          null
        ]
      ],
      "rowCount": 23
    }
  },
  {
    "id": 200,
    "title": "Staff Project Allocation with Default Indicators",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Reporting systems require a clean display without empty project cells. Display employee name and assigned project ID for all employees, substituting 0 whenever an employee has no project assigned, aliasing the column as `assigned_project_id`.",
    "requirements": [
      "Left join Employees with Employee_Projects on employee ID.",
      "Display `emp_name` and project ID with nulls replaced by 0, aliased as `assigned_project_id`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use COALESCE on the project_id column from the preserved outer join.",
    "expectedSql": "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
    "explanation": "Locates unpopulated or newly formed corporate organizational units.",
    "tags": [
      "joins",
      "anti-join",
      "headcount"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "location"
      ],
      "values": [
        [
          6,
          "Legal",
          "Hyderabad"
        ],
        [
          7,
          "Operations",
          "Chennai"
        ],
        [
          8,
          "R&D",
          "Bengaluru"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 201,
    "title": "Comprehensive Staffing with 2024 Appraisal Overlay",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Hard",
    "problemStatement": "Management is compiling a complete workforce roster showing 2024 appraisal data where available. Display employee name, department, rating, and bonus for all employees, showing 2024 review metrics for employees who completed a 2024 review and null for all others.",
    "requirements": [
      "Preserve all employees in the result set.",
      "Correlate 2024 review ratings and bonuses by placing the 2024 year filter directly in the join condition.",
      "Display `emp_name`, `department`, `rating`, and `bonus`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Include review_year = 2024 directly in the ON clause of the left join.",
    "expectedSql": "SELECT e.emp_name, e.department, pr.rating, pr.bonus FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id AND pr.review_year = 2024;",
    "explanation": "Placing a condition in the ON clause filters the right table while preserving all rows of the left table.",
    "tags": [
      "joins",
      "left-join",
      "on-clause-filtering"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "rating",
        "bonus"
      ],
      "values": [
        [
          "Anil",
          "IT",
          null,
          null
        ],
        [
          "Bhumika",
          "HR",
          3,
          6000
        ],
        [
          "Chetan",
          "IT",
          4,
          15000
        ],
        [
          "Dhruv",
          "Finance",
          4,
          18000
        ],
        [
          "Farah",
          "HR",
          null,
          null
        ],
        [
          "Girish",
          "Finance",
          5,
          25000
        ],
        [
          "Harsha",
          "IT",
          3,
          8000
        ],
        [
          "Isha",
          "Marketing",
          null,
          null
        ],
        [
          "Kiran",
          "HR",
          4,
          18000
        ],
        [
          "Meena",
          "Marketing",
          4,
          16000
        ],
        [
          "Naveen",
          "Finance",
          2,
          null
        ],
        [
          "Priya",
          "IT",
          5,
          25000
        ],
        [
          "Rahul",
          "Sales",
          null,
          null
        ],
        [
          "Sneha",
          "Sales",
          4,
          12000
        ],
        [
          "Varun",
          "Marketing",
          4,
          15000
        ],
        [
          "Divya",
          "Sales",
          3,
          7000
        ],
        [
          "Manoj",
          "IT",
          3,
          9000
        ],
        [
          "Pooja",
          "HR",
          null,
          null
        ],
        [
          "Arjun",
          "Finance",
          5,
          30000
        ],
        [
          "Keerthi",
          "Sales",
          null,
          null
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 202,
    "title": "Staff Performance Incentive Overview with Zero Default",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Payroll reporting requires a full staff list displaying incentive bonuses, substituting 0 for staff who did not receive a bonus. Display employee ID, name, rating, and bonus with null bonuses replaced by 0, aliased as `final_bonus`.",
    "requirements": [
      "Left join Employees and Performance_Reviews on employee ID.",
      "Display `emp_id`, `emp_name`, `rating`, and bonus defaulting to 0 aliased as `final_bonus`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use COALESCE(bonus, 0) on the joined bonus column.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, COALESCE(ep.assigned_role, 'Unassigned') AS project_role FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    "explanation": "Replaces NULL results in unassigned left-join records with informative default labels.",
    "tags": [
      "joins",
      "coalesce",
      "left-join"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "project_role"
      ],
      "values": [
        [
          101,
          "Anil",
          "Unassigned"
        ],
        [
          102,
          "Bhumika",
          "Recruiter"
        ],
        [
          103,
          "Chetan",
          "Lead Developer"
        ],
        [
          103,
          "Chetan",
          "Backend Architect"
        ],
        [
          104,
          "Dhruv",
          "Senior Auditor"
        ],
        [
          105,
          "Farah",
          "HR Coordinator"
        ],
        [
          106,
          "Girish",
          "Compliance Officer"
        ],
        [
          107,
          "Harsha",
          "Full Stack Engineer"
        ],
        [
          108,
          "Isha",
          "Content Strategist"
        ],
        [
          109,
          "Kiran",
          "HR Lead"
        ],
        [
          110,
          "Meena",
          "Marketing Manager"
        ],
        [
          111,
          "Naveen",
          "Financial Analyst"
        ],
        [
          112,
          "Priya",
          "Project Manager"
        ],
        [
          112,
          "Priya",
          "Technical Advisor"
        ],
        [
          113,
          "Rahul",
          "Unassigned"
        ],
        [
          114,
          "Sneha",
          "Sales Lead"
        ],
        [
          115,
          "Varun",
          "Creative Director"
        ],
        [
          115,
          "Varun",
          "Campaign Strategist"
        ],
        [
          116,
          "Divya",
          "Account Executive"
        ],
        [
          117,
          "Manoj",
          "Database Specialist"
        ],
        [
          118,
          "Pooja",
          "Unassigned"
        ],
        [
          119,
          "Arjun",
          "Finance Director"
        ],
        [
          120,
          "Keerthi",
          "Client Onboarding"
        ]
      ],
      "rowCount": 23
    }
  },
  {
    "id": 203,
    "title": "Initiative Resource Allocation on Active Projects",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Resource governance is tracking staffing on active corporate initiatives. Display project name, status, assigned employee ID, and allocated hours, preserving all active projects even if they currently have no staff assigned.",
    "requirements": [
      "Filter Projects for `status = 'Active'`.",
      "Left join with Employee_Projects on project ID.",
      "Display `project_name`, `status`, `emp_id`, and `hours_allocated`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Filter Projects for status = 'Active' and left join with Employee_Projects.",
    "expectedSql": "SELECT p.project_id, p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    "explanation": "Calculates resource allocation across all initiatives, reporting 0 hours for unstaffed projects.",
    "tags": [
      "joins",
      "left-join",
      "group-by",
      "coalesce"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "total_hours"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          100
        ],
        [
          502,
          "ERP Modernization",
          45
        ],
        [
          503,
          "Global Talent Acquisition",
          85
        ],
        [
          504,
          "Financial Audit Automation",
          110
        ],
        [
          505,
          "Brand Revamp 2025",
          85
        ],
        [
          506,
          "CRM Sales Pipeline",
          110
        ],
        [
          507,
          "Compliance Automation",
          0
        ],
        [
          508,
          "NextGen AI Suite",
          0
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 204,
    "title": "Staff Requiring Performance Coaching or Initial Review",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Talent development is identifying employees who either received low ratings (under 3) or have never been reviewed. Display employee name, department, rating, and review year for employees whose rating is either null or strictly less than 3.",
    "requirements": [
      "Left join Employees with Performance_Reviews on employee ID.",
      "Filter for records where rating is null OR rating is strictly less than 3.",
      "Display `emp_name`, `department`, `rating`, and `review_year`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Left join on emp_id and filter with rating IS NULL OR rating < 3 in WHERE.",
    "expectedSql": "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
    "explanation": "COUNT(column) properly outputs 0 for NULL matches, whereas COUNT(*) would falsely report 1 for unmatched rows.",
    "tags": [
      "joins",
      "left-join",
      "count",
      "group-by"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "staff_count"
      ],
      "values": [
        [
          "Finance",
          4
        ],
        [
          "HR",
          4
        ],
        [
          "IT",
          5
        ],
        [
          "Legal",
          0
        ],
        [
          "Marketing",
          3
        ],
        [
          "Operations",
          0
        ],
        [
          "R&D",
          0
        ],
        [
          "Sales",
          4
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 205,
    "title": "Unassigned Senior Personnel Identification",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Resource planning is identifying seasoned personnel available for major new projects. Find all employees with at least 5 years of professional experience who currently have zero project assignments.",
    "requirements": [
      "Left join Employees with Employee_Projects on employee ID.",
      "Filter for `experience >= 5` and unassigned project status.",
      "Display `emp_id`, `emp_name`, `department`, and `experience`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Filter for experience >= 5 and ep.project_id IS NULL after left joining.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, COUNT(pr.review_id) AS review_count FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.emp_id, e.emp_name;",
    "explanation": "Guarantees every employee appears in the tally, correctly reporting zero reviews for unreviewed staff.",
    "tags": [
      "joins",
      "left-join",
      "count",
      "group-by"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "review_count"
      ],
      "values": [
        [
          101,
          "Anil",
          0
        ],
        [
          102,
          "Bhumika",
          1
        ],
        [
          103,
          "Chetan",
          1
        ],
        [
          104,
          "Dhruv",
          1
        ],
        [
          105,
          "Farah",
          0
        ],
        [
          106,
          "Girish",
          2
        ],
        [
          107,
          "Harsha",
          1
        ],
        [
          108,
          "Isha",
          0
        ],
        [
          109,
          "Kiran",
          1
        ],
        [
          110,
          "Meena",
          1
        ],
        [
          111,
          "Naveen",
          1
        ],
        [
          112,
          "Priya",
          2
        ],
        [
          113,
          "Rahul",
          0
        ],
        [
          114,
          "Sneha",
          1
        ],
        [
          115,
          "Varun",
          1
        ],
        [
          116,
          "Divya",
          1
        ],
        [
          117,
          "Manoj",
          1
        ],
        [
          118,
          "Pooja",
          0
        ],
        [
          119,
          "Arjun",
          3
        ],
        [
          120,
          "Keerthi",
          0
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 206,
    "title": "Preserving All Departments in Project Sourcing",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Auditors are verifying divisional project portfolios while ensuring every registered department is represented. Display department name, location, project ID, and project name, preserving all departments from Departments regardless of whether projects exist.",
    "requirements": [
      "Query Departments and Projects ensuring all departments are retained.",
      "Display `dept_name`, `location`, `project_id`, and `project_name`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use an outer join that preserves all rows from Departments.",
    "expectedSql": "SELECT e.emp_name, d.dept_name, d.location FROM Employees e RIGHT JOIN Departments d ON e.department = d.dept_name;",
    "explanation": "RIGHT JOIN guarantees that every row from the right-hand table (Departments) is included in the output.",
    "tags": [
      "joins",
      "right-join",
      "outer-join"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "dept_name",
        "location"
      ],
      "values": [
        [
          "Anil",
          "IT",
          "Bengaluru"
        ],
        [
          "Bhumika",
          "HR",
          "Bengaluru"
        ],
        [
          "Chetan",
          "IT",
          "Bengaluru"
        ],
        [
          "Dhruv",
          "Finance",
          "Hyderabad"
        ],
        [
          "Farah",
          "HR",
          "Bengaluru"
        ],
        [
          "Girish",
          "Finance",
          "Hyderabad"
        ],
        [
          "Harsha",
          "IT",
          "Bengaluru"
        ],
        [
          "Isha",
          "Marketing",
          "Chennai"
        ],
        [
          "Kiran",
          "HR",
          "Bengaluru"
        ],
        [
          "Meena",
          "Marketing",
          "Chennai"
        ],
        [
          "Naveen",
          "Finance",
          "Hyderabad"
        ],
        [
          "Priya",
          "IT",
          "Bengaluru"
        ],
        [
          "Rahul",
          "Sales",
          "Hyderabad"
        ],
        [
          "Sneha",
          "Sales",
          "Hyderabad"
        ],
        [
          "Varun",
          "Marketing",
          "Chennai"
        ],
        [
          "Divya",
          "Sales",
          "Hyderabad"
        ],
        [
          "Manoj",
          "IT",
          "Bengaluru"
        ],
        [
          "Pooja",
          "HR",
          "Bengaluru"
        ],
        [
          "Arjun",
          "Finance",
          "Hyderabad"
        ],
        [
          "Keerthi",
          "Sales",
          "Hyderabad"
        ],
        [
          null,
          "Legal",
          "Hyderabad"
        ],
        [
          null,
          "Operations",
          "Chennai"
        ],
        [
          null,
          "R&D",
          "Bengaluru"
        ]
      ],
      "rowCount": 23
    }
  },
  {
    "id": 207,
    "title": "Preserving Complete Workforce in Allocation Records",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Workforce governance is auditing assignment records while guaranteeing that all employees appear. Display employee name, department, project ID, and allocated hours, ensuring all staff members from Employees are preserved.",
    "requirements": [
      "Query Employee_Projects and Employees ensuring all employees are retained.",
      "Display `emp_name`, `department`, `project_id`, and `hours_allocated`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use an outer join preserving the Employees table.",
    "expectedSql": "SELECT ep.emp_id, ep.assigned_role, p.project_id, p.project_name FROM Employee_Projects ep RIGHT JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Ensures projects without assigned personnel remain in the result with NULL staffing fields.",
    "tags": [
      "joins",
      "right-join",
      "projects"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "assigned_role",
        "project_id",
        "project_name"
      ],
      "values": [
        [
          103,
          "Lead Developer",
          501,
          "Cloud Migration"
        ],
        [
          103,
          "Backend Architect",
          502,
          "ERP Modernization"
        ],
        [
          107,
          "Full Stack Engineer",
          501,
          "Cloud Migration"
        ],
        [
          112,
          "Project Manager",
          501,
          "Cloud Migration"
        ],
        [
          112,
          "Technical Advisor",
          504,
          "Financial Audit Automation"
        ],
        [
          117,
          "Database Specialist",
          502,
          "ERP Modernization"
        ],
        [
          102,
          "Recruiter",
          503,
          "Global Talent Acquisition"
        ],
        [
          105,
          "HR Coordinator",
          503,
          "Global Talent Acquisition"
        ],
        [
          109,
          "HR Lead",
          503,
          "Global Talent Acquisition"
        ],
        [
          104,
          "Senior Auditor",
          504,
          "Financial Audit Automation"
        ],
        [
          106,
          "Compliance Officer",
          504,
          "Financial Audit Automation"
        ],
        [
          111,
          "Financial Analyst",
          504,
          "Financial Audit Automation"
        ],
        [
          119,
          "Finance Director",
          504,
          "Financial Audit Automation"
        ],
        [
          108,
          "Content Strategist",
          505,
          "Brand Revamp 2025"
        ],
        [
          110,
          "Marketing Manager",
          505,
          "Brand Revamp 2025"
        ],
        [
          115,
          "Creative Director",
          505,
          "Brand Revamp 2025"
        ],
        [
          115,
          "Campaign Strategist",
          506,
          "CRM Sales Pipeline"
        ],
        [
          114,
          "Sales Lead",
          506,
          "CRM Sales Pipeline"
        ],
        [
          116,
          "Account Executive",
          506,
          "CRM Sales Pipeline"
        ],
        [
          120,
          "Client Onboarding",
          506,
          "CRM Sales Pipeline"
        ],
        [
          null,
          null,
          507,
          "Compliance Automation"
        ],
        [
          null,
          null,
          508,
          "NextGen AI Suite"
        ]
      ],
      "rowCount": 22
    }
  },
  {
    "id": 208,
    "title": "Preserving Complete Workforce in Appraisal Roster",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "HR compliance requires a comprehensive appraisal ledger that includes all personnel. Display employee name, department, review year, and rating, ensuring all employees from Employees are represented in the output.",
    "requirements": [
      "Query Performance_Reviews and Employees ensuring all employees are retained.",
      "Display `emp_name`, `department`, `review_year`, and `rating`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use an outer join preserving all records from the Employees table.",
    "expectedSql": "SELECT e.emp_name, pr.review_id, pr.rating, pr.bonus FROM Employees e RIGHT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Guarantees every review is represented even if employee foreign keys were unassigned.",
    "tags": [
      "joins",
      "right-join",
      "reviews"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "review_id",
        "rating",
        "bonus"
      ],
      "values": [
        [
          "Bhumika",
          18,
          3,
          6000
        ],
        [
          "Chetan",
          1,
          4,
          15000
        ],
        [
          "Dhruv",
          2,
          4,
          18000
        ],
        [
          "Girish",
          3,
          4,
          20000
        ],
        [
          "Girish",
          4,
          5,
          25000
        ],
        [
          "Harsha",
          5,
          3,
          8000
        ],
        [
          "Kiran",
          6,
          4,
          18000
        ],
        [
          "Meena",
          7,
          4,
          16000
        ],
        [
          "Naveen",
          8,
          2,
          null
        ],
        [
          "Priya",
          9,
          4,
          20000
        ],
        [
          "Priya",
          10,
          5,
          25000
        ],
        [
          "Sneha",
          11,
          4,
          12000
        ],
        [
          "Varun",
          12,
          4,
          15000
        ],
        [
          "Divya",
          13,
          3,
          7000
        ],
        [
          "Manoj",
          14,
          3,
          9000
        ],
        [
          "Arjun",
          15,
          5,
          25000
        ],
        [
          "Arjun",
          16,
          5,
          28000
        ],
        [
          "Arjun",
          17,
          5,
          30000
        ]
      ],
      "rowCount": 18
    }
  },
  {
    "id": 209,
    "title": "Preserving Complete Project Portfolio in Assignments",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "The PMO is reporting all projects alongside team members, ensuring projects without staff are retained. Display project name, status, assigned employee ID, and assigned role, preserving all projects from Projects.",
    "requirements": [
      "Query Employee_Projects and Projects ensuring all projects are retained.",
      "Display `project_name`, `status`, `emp_id`, and `assigned_role`."
    ],
    "tableName": "Projects, Departments",
    "hint": "Ensure all records from Projects are preserved in the outer join.",
    "expectedSql": "SELECT p.project_name, d.dept_name, d.budget FROM Projects p RIGHT JOIN Departments d ON p.dept_id = d.dept_id;",
    "explanation": "Preserves departments with no current project commitments in the right-join result.",
    "tags": [
      "joins",
      "right-join",
      "departments"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_name",
        "dept_name",
        "budget"
      ],
      "values": [
        [
          "Cloud Migration",
          "IT",
          1200000
        ],
        [
          "ERP Modernization",
          "IT",
          1200000
        ],
        [
          "Global Talent Acquisition",
          "HR",
          500000
        ],
        [
          "Financial Audit Automation",
          "Finance",
          1500000
        ],
        [
          "Brand Revamp 2025",
          "Marketing",
          800000
        ],
        [
          "CRM Sales Pipeline",
          "Sales",
          950000
        ],
        [
          "Compliance Automation",
          "Legal",
          400000
        ],
        [
          "NextGen AI Suite",
          "R&D",
          1800000
        ],
        [
          null,
          "Operations",
          650000
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 210,
    "title": "Preserving Complete Workforce in Department Cross-Reference",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Workforce records are cross-referenced with department data, ensuring every employee is listed. Display employee name, salary, department name, and location, preserving all employees from Employees.",
    "requirements": [
      "Query Departments and Employees ensuring all employees are retained.",
      "Display `emp_name`, `salary`, `dept_name`, and `location`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Preserve all records from the Employees table in the join.",
    "expectedSql": "SELECT e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated FROM Employees e RIGHT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    "explanation": "Maintains all junction table records on the right side of the join.",
    "tags": [
      "joins",
      "right-join",
      "junction"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "project_id",
        "assigned_role",
        "hours_allocated"
      ],
      "values": [
        [
          "Bhumika",
          503,
          "Recruiter",
          35
        ],
        [
          "Chetan",
          501,
          "Lead Developer",
          35
        ],
        [
          "Chetan",
          502,
          "Backend Architect",
          15
        ],
        [
          "Dhruv",
          504,
          "Senior Auditor",
          35
        ],
        [
          "Farah",
          503,
          "HR Coordinator",
          30
        ],
        [
          "Girish",
          504,
          "Compliance Officer",
          20
        ],
        [
          "Harsha",
          501,
          "Full Stack Engineer",
          40
        ],
        [
          "Isha",
          505,
          "Content Strategist",
          35
        ],
        [
          "Kiran",
          503,
          "HR Lead",
          20
        ],
        [
          "Meena",
          505,
          "Marketing Manager",
          30
        ],
        [
          "Naveen",
          504,
          "Financial Analyst",
          30
        ],
        [
          "Priya",
          501,
          "Project Manager",
          25
        ],
        [
          "Priya",
          504,
          "Technical Advisor",
          15
        ],
        [
          "Sneha",
          506,
          "Sales Lead",
          35
        ],
        [
          "Varun",
          505,
          "Creative Director",
          20
        ],
        [
          "Varun",
          506,
          "Campaign Strategist",
          20
        ],
        [
          "Divya",
          506,
          "Account Executive",
          30
        ],
        [
          "Manoj",
          502,
          "Database Specialist",
          30
        ],
        [
          "Arjun",
          504,
          "Finance Director",
          10
        ],
        [
          "Keerthi",
          506,
          "Client Onboarding",
          25
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 211,
    "title": "Full Bidirectional Reconciliation: Employees and Departments",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Data quality engineers are performing a bidirectional reconciliation between employees and departments. Produce a consolidated view that includes all matched records, unmatched employees, and unmatched departments, displaying employee name, department, and department headquarters location.",
    "requirements": [
      "Combine Employees and Departments preserving unmatched records from both tables.",
      "Display `emp_name`, `department`, and `location`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Combine a left outer join and an anti-join or right outer join using UNION.",
    "expectedSql": "SELECT d.dept_name, d.location, e.emp_name, e.salary FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department;",
    "explanation": "Returns all records from both tables, filling with NULL wherever matches do not exist on either side.",
    "tags": [
      "joins",
      "full-outer-join",
      "complete-outer"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "location",
        "emp_name",
        "salary"
      ],
      "values": [
        [
          "IT",
          "Bengaluru",
          "Anil",
          25000
        ],
        [
          "IT",
          "Bengaluru",
          "Chetan",
          55000
        ],
        [
          "IT",
          "Bengaluru",
          "Harsha",
          45000
        ],
        [
          "IT",
          "Bengaluru",
          "Priya",
          75000
        ],
        [
          "IT",
          "Bengaluru",
          "Manoj",
          52000
        ],
        [
          "HR",
          "Bengaluru",
          "Bhumika",
          40000
        ],
        [
          "HR",
          "Bengaluru",
          "Farah",
          32000
        ],
        [
          "HR",
          "Bengaluru",
          "Kiran",
          70000
        ],
        [
          "HR",
          "Bengaluru",
          "Pooja",
          27000
        ],
        [
          "Finance",
          "Hyderabad",
          "Dhruv",
          65000
        ],
        [
          "Finance",
          "Hyderabad",
          "Girish",
          80000
        ],
        [
          "Finance",
          "Hyderabad",
          "Naveen",
          35000
        ],
        [
          "Finance",
          "Hyderabad",
          "Arjun",
          90000
        ],
        [
          "Marketing",
          "Chennai",
          "Isha",
          28000
        ],
        [
          "Marketing",
          "Chennai",
          "Meena",
          60000
        ],
        [
          "Marketing",
          "Chennai",
          "Varun",
          68000
        ],
        [
          "Sales",
          "Hyderabad",
          "Rahul",
          30000
        ],
        [
          "Sales",
          "Hyderabad",
          "Sneha",
          48000
        ],
        [
          "Sales",
          "Hyderabad",
          "Divya",
          42000
        ],
        [
          "Sales",
          "Hyderabad",
          "Keerthi",
          55000
        ],
        [
          "Legal",
          "Hyderabad",
          null,
          null
        ],
        [
          "Operations",
          "Chennai",
          null,
          null
        ],
        [
          "R&D",
          "Bengaluru",
          null,
          null
        ]
      ],
      "rowCount": 23
    }
  },
  {
    "id": 212,
    "title": "Full Bidirectional Reconciliation: Projects and Assignments",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Resource governance requires a complete reconciliation between projects and assignment records. Display project name, status, assigned employee ID, and allocated hours, preserving both unstaffed projects and any unlinked assignment records.",
    "requirements": [
      "Reconcile Projects and Employee_Projects preserving unmatched records from both sides.",
      "Display `project_name`, `status`, `emp_id`, and `hours_allocated`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use UNION to merge left and right outer join projections.",
    "expectedSql": "SELECT p.project_id, p.project_name, ep.emp_id, ep.assigned_role FROM Projects p FULL OUTER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Surfaces both unstaffed projects and any orphaned staffing records.",
    "tags": [
      "joins",
      "full-outer-join",
      "staffing"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "emp_id",
        "assigned_role"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          103,
          "Lead Developer"
        ],
        [
          501,
          "Cloud Migration",
          107,
          "Full Stack Engineer"
        ],
        [
          501,
          "Cloud Migration",
          112,
          "Project Manager"
        ],
        [
          502,
          "ERP Modernization",
          103,
          "Backend Architect"
        ],
        [
          502,
          "ERP Modernization",
          117,
          "Database Specialist"
        ],
        [
          503,
          "Global Talent Acquisition",
          102,
          "Recruiter"
        ],
        [
          503,
          "Global Talent Acquisition",
          105,
          "HR Coordinator"
        ],
        [
          503,
          "Global Talent Acquisition",
          109,
          "HR Lead"
        ],
        [
          504,
          "Financial Audit Automation",
          112,
          "Technical Advisor"
        ],
        [
          504,
          "Financial Audit Automation",
          104,
          "Senior Auditor"
        ],
        [
          504,
          "Financial Audit Automation",
          106,
          "Compliance Officer"
        ],
        [
          504,
          "Financial Audit Automation",
          111,
          "Financial Analyst"
        ],
        [
          504,
          "Financial Audit Automation",
          119,
          "Finance Director"
        ],
        [
          505,
          "Brand Revamp 2025",
          108,
          "Content Strategist"
        ],
        [
          505,
          "Brand Revamp 2025",
          110,
          "Marketing Manager"
        ],
        [
          505,
          "Brand Revamp 2025",
          115,
          "Creative Director"
        ],
        [
          506,
          "CRM Sales Pipeline",
          115,
          "Campaign Strategist"
        ],
        [
          506,
          "CRM Sales Pipeline",
          114,
          "Sales Lead"
        ],
        [
          506,
          "CRM Sales Pipeline",
          116,
          "Account Executive"
        ],
        [
          506,
          "CRM Sales Pipeline",
          120,
          "Client Onboarding"
        ],
        [
          507,
          "Compliance Automation",
          null,
          null
        ],
        [
          508,
          "NextGen AI Suite",
          null,
          null
        ]
      ],
      "rowCount": 22
    }
  },
  {
    "id": 213,
    "title": "Departments with No Assigned Personnel",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Organization design is identifying registered corporate departments that currently have zero assigned staff members. Display the department name and location for all departments that do not match any employees.",
    "requirements": [
      "Identify departments from Departments that have no matching records in Employees.",
      "Display `dept_name` and `location`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use an outer join from Departments to Employees and filter where the employee attribute is null.",
    "expectedSql": "SELECT d.dept_name, e.emp_name FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department WHERE d.dept_id IS NULL OR e.emp_id IS NULL;",
    "explanation": "Identifies symmetric differences (rows present in one table but not the other) across two relational domains.",
    "tags": [
      "joins",
      "full-outer-join",
      "symmetric-difference"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "emp_name"
      ],
      "values": [
        [
          "Legal",
          null
        ],
        [
          "Operations",
          null
        ],
        [
          "R&D",
          null
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 214,
    "title": "Department Initiatives Filtered by Leadership Roles",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Governance is tracking managerial assignments within department projects. Display department name, project name, employee ID, and assigned role for projects where the assigned role contains 'Manager', while preserving all departments.",
    "requirements": [
      "Combine Departments, Projects, and Employee_Projects.",
      "Filter for roles containing 'Manager' while preserving departmental structures.",
      "Display `dept_name`, `project_name`, `emp_id`, and `assigned_role`."
    ],
    "tableName": "Projects, Departments",
    "hint": "Join Departments, Projects, and Employee_Projects with appropriate outer joins.",
    "expectedSql": "SELECT p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget FROM Projects p FULL OUTER JOIN Departments d ON p.dept_id = d.dept_id;",
    "explanation": "Compares project budgets against overall departmental capital allocations with complete outer preservation.",
    "tags": [
      "joins",
      "full-outer-join",
      "budget"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_name",
        "dept_name",
        "project_budget",
        "dept_budget"
      ],
      "values": [
        [
          "Cloud Migration",
          "IT",
          250000,
          1200000
        ],
        [
          "ERP Modernization",
          "IT",
          400000,
          1200000
        ],
        [
          "Global Talent Acquisition",
          "HR",
          120000,
          500000
        ],
        [
          "Financial Audit Automation",
          "Finance",
          300000,
          1500000
        ],
        [
          "Brand Revamp 2025",
          "Marketing",
          180000,
          800000
        ],
        [
          "CRM Sales Pipeline",
          "Sales",
          220000,
          950000
        ],
        [
          "Compliance Automation",
          "Legal",
          90000,
          400000
        ],
        [
          "NextGen AI Suite",
          "R&D",
          550000,
          1800000
        ],
        [
          null,
          "Operations",
          null,
          650000
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 215,
    "title": "High-Budget Project Resource Allocations",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Finance leadership is auditing staffing on initiatives with budgets of at least 200,000. Display project name, budget, assigned employee ID, and allocated hours, ensuring all qualifying high-budget projects are preserved.",
    "requirements": [
      "Filter Projects for `budget >= 200000`.",
      "Preserve qualifying projects while joining with Employee_Projects.",
      "Display `project_name`, `budget`, `emp_id`, and `hours_allocated`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Join high-budget projects with Employee_Projects preserving projects.",
    "expectedSql": "SELECT e.emp_name, e.salary, pr.review_year, pr.rating FROM Employees e FULL OUTER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Integrates complete employee rosters and appraisal records in a single outer query.",
    "tags": [
      "joins",
      "full-outer-join",
      "reviews"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary",
        "review_year",
        "rating"
      ],
      "values": [
        [
          "Anil",
          25000,
          null,
          null
        ],
        [
          "Bhumika",
          40000,
          2024,
          3
        ],
        [
          "Chetan",
          55000,
          2024,
          4
        ],
        [
          "Dhruv",
          65000,
          2024,
          4
        ],
        [
          "Farah",
          32000,
          null,
          null
        ],
        [
          "Girish",
          80000,
          2023,
          4
        ],
        [
          "Girish",
          80000,
          2024,
          5
        ],
        [
          "Harsha",
          45000,
          2024,
          3
        ],
        [
          "Isha",
          28000,
          null,
          null
        ],
        [
          "Kiran",
          70000,
          2024,
          4
        ],
        [
          "Meena",
          60000,
          2024,
          4
        ],
        [
          "Naveen",
          35000,
          2024,
          2
        ],
        [
          "Priya",
          75000,
          2023,
          4
        ],
        [
          "Priya",
          75000,
          2024,
          5
        ],
        [
          "Rahul",
          30000,
          null,
          null
        ],
        [
          "Sneha",
          48000,
          2024,
          4
        ],
        [
          "Varun",
          68000,
          2024,
          4
        ],
        [
          "Divya",
          42000,
          2024,
          3
        ],
        [
          "Manoj",
          52000,
          2024,
          3
        ],
        [
          "Pooja",
          27000,
          null,
          null
        ],
        [
          "Arjun",
          90000,
          2022,
          5
        ],
        [
          "Arjun",
          90000,
          2023,
          5
        ],
        [
          "Arjun",
          90000,
          2024,
          5
        ],
        [
          "Keerthi",
          55000,
          null,
          null
        ]
      ],
      "rowCount": 24
    }
  },
  {
    "id": 216,
    "title": "Tri-Table Relational Link: Staff, Departments, and Projects",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Corporate reporting requires an integrated view connecting employees with their department and associated departmental projects. For each employee, display employee name, department name, department location, and project name for projects belonging to that department.",
    "requirements": [
      "Join Employees, Departments (matching on department name), and Projects (matching on department ID).",
      "Display `emp_name`, `dept_name`, `location`, and `project_name`."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Chain inner joins: Employees to Departments on department name, and Departments to Projects on dept_id.",
    "expectedSql": "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Traverses a classic many-to-many relationship using a bridging associative junction table.",
    "tags": [
      "joins",
      "multi-table",
      "many-to-many"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "project_name",
        "assigned_role",
        "hours_allocated"
      ],
      "values": [
        [
          "Chetan",
          "Cloud Migration",
          "Lead Developer",
          35
        ],
        [
          "Chetan",
          "ERP Modernization",
          "Backend Architect",
          15
        ],
        [
          "Harsha",
          "Cloud Migration",
          "Full Stack Engineer",
          40
        ],
        [
          "Priya",
          "Cloud Migration",
          "Project Manager",
          25
        ],
        [
          "Priya",
          "Financial Audit Automation",
          "Technical Advisor",
          15
        ],
        [
          "Manoj",
          "ERP Modernization",
          "Database Specialist",
          30
        ],
        [
          "Bhumika",
          "Global Talent Acquisition",
          "Recruiter",
          35
        ],
        [
          "Farah",
          "Global Talent Acquisition",
          "HR Coordinator",
          30
        ],
        [
          "Kiran",
          "Global Talent Acquisition",
          "HR Lead",
          20
        ],
        [
          "Dhruv",
          "Financial Audit Automation",
          "Senior Auditor",
          35
        ],
        [
          "Girish",
          "Financial Audit Automation",
          "Compliance Officer",
          20
        ],
        [
          "Naveen",
          "Financial Audit Automation",
          "Financial Analyst",
          30
        ],
        [
          "Arjun",
          "Financial Audit Automation",
          "Finance Director",
          10
        ],
        [
          "Isha",
          "Brand Revamp 2025",
          "Content Strategist",
          35
        ],
        [
          "Meena",
          "Brand Revamp 2025",
          "Marketing Manager",
          30
        ],
        [
          "Varun",
          "Brand Revamp 2025",
          "Creative Director",
          20
        ],
        [
          "Varun",
          "CRM Sales Pipeline",
          "Campaign Strategist",
          20
        ],
        [
          "Sneha",
          "CRM Sales Pipeline",
          "Sales Lead",
          35
        ],
        [
          "Divya",
          "CRM Sales Pipeline",
          "Account Executive",
          30
        ],
        [
          "Keerthi",
          "CRM Sales Pipeline",
          "Client Onboarding",
          25
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 217,
    "title": "Tri-Table Staffing Pipeline: Employee, Role, and Project Details",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "The PMO is generating an assignment roster with project context. Display employee name, department, assigned project name, project status, and weekly hours allocated for all active project assignments.",
    "requirements": [
      "Join Employees, Employee_Projects (on emp_id), and Projects (on project_id).",
      "Display `emp_name`, `department`, `project_name`, `status`, and `hours_allocated`."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Join Employees with Employee_Projects on emp_id, then join with Projects on project_id.",
    "expectedSql": "SELECT e.emp_name, p.project_name, p.status, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active';",
    "explanation": "Navigates multi-table joins while constraining results to active initiatives.",
    "tags": [
      "joins",
      "multi-table",
      "status"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "project_name",
        "status",
        "hours_allocated"
      ],
      "values": [
        [
          "Chetan",
          "Cloud Migration",
          "Active",
          35
        ],
        [
          "Harsha",
          "Cloud Migration",
          "Active",
          40
        ],
        [
          "Priya",
          "Cloud Migration",
          "Active",
          25
        ],
        [
          "Priya",
          "Financial Audit Automation",
          "Active",
          15
        ],
        [
          "Bhumika",
          "Global Talent Acquisition",
          "Active",
          35
        ],
        [
          "Farah",
          "Global Talent Acquisition",
          "Active",
          30
        ],
        [
          "Kiran",
          "Global Talent Acquisition",
          "Active",
          20
        ],
        [
          "Dhruv",
          "Financial Audit Automation",
          "Active",
          35
        ],
        [
          "Girish",
          "Financial Audit Automation",
          "Active",
          20
        ],
        [
          "Naveen",
          "Financial Audit Automation",
          "Active",
          30
        ],
        [
          "Arjun",
          "Financial Audit Automation",
          "Active",
          10
        ],
        [
          "Isha",
          "Brand Revamp 2025",
          "Active",
          35
        ],
        [
          "Meena",
          "Brand Revamp 2025",
          "Active",
          30
        ],
        [
          "Varun",
          "Brand Revamp 2025",
          "Active",
          20
        ]
      ],
      "rowCount": 14
    }
  },
  {
    "id": 218,
    "title": "Tri-Table Governance Link: Division, Project, and Team Member",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Corporate governance tracks project staffing back to sponsoring divisions. Display department name, project name, assigned employee ID, and assigned role for all current assignments.",
    "requirements": [
      "Join Departments, Projects (on dept_id), and Employee_Projects (on project_id).",
      "Display `dept_name`, `project_name`, `emp_id`, and `assigned_role`."
    ],
    "tableName": "Projects, Departments, Employee_Projects",
    "hint": "Chain inner joins across Departments, Projects, and Employee_Projects.",
    "expectedSql": "SELECT p.project_name, d.dept_name, d.dept_head, ep.assigned_role FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Connects operational project assignments with departmental governance.",
    "tags": [
      "joins",
      "multi-table",
      "governance"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_name",
        "dept_name",
        "dept_head",
        "assigned_role"
      ],
      "values": [
        [
          "Cloud Migration",
          "IT",
          "Priya",
          "Lead Developer"
        ],
        [
          "ERP Modernization",
          "IT",
          "Priya",
          "Backend Architect"
        ],
        [
          "Cloud Migration",
          "IT",
          "Priya",
          "Full Stack Engineer"
        ],
        [
          "Cloud Migration",
          "IT",
          "Priya",
          "Project Manager"
        ],
        [
          "Financial Audit Automation",
          "Finance",
          "Arjun",
          "Technical Advisor"
        ],
        [
          "ERP Modernization",
          "IT",
          "Priya",
          "Database Specialist"
        ],
        [
          "Global Talent Acquisition",
          "HR",
          "Kiran",
          "Recruiter"
        ],
        [
          "Global Talent Acquisition",
          "HR",
          "Kiran",
          "HR Coordinator"
        ],
        [
          "Global Talent Acquisition",
          "HR",
          "Kiran",
          "HR Lead"
        ],
        [
          "Financial Audit Automation",
          "Finance",
          "Arjun",
          "Senior Auditor"
        ],
        [
          "Financial Audit Automation",
          "Finance",
          "Arjun",
          "Compliance Officer"
        ],
        [
          "Financial Audit Automation",
          "Finance",
          "Arjun",
          "Financial Analyst"
        ],
        [
          "Financial Audit Automation",
          "Finance",
          "Arjun",
          "Finance Director"
        ],
        [
          "Brand Revamp 2025",
          "Marketing",
          "Varun",
          "Content Strategist"
        ],
        [
          "Brand Revamp 2025",
          "Marketing",
          "Varun",
          "Marketing Manager"
        ],
        [
          "Brand Revamp 2025",
          "Marketing",
          "Varun",
          "Creative Director"
        ],
        [
          "CRM Sales Pipeline",
          "Sales",
          "Sneha",
          "Campaign Strategist"
        ],
        [
          "CRM Sales Pipeline",
          "Sales",
          "Sneha",
          "Sales Lead"
        ],
        [
          "CRM Sales Pipeline",
          "Sales",
          "Sneha",
          "Account Executive"
        ],
        [
          "CRM Sales Pipeline",
          "Sales",
          "Sneha",
          "Client Onboarding"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 219,
    "title": "Tri-Table Personnel Synthesis: Assignments and Appraisals",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is correlating project workload with appraisal ratings. For employees who have both a project assignment and a performance review, display employee name, project ID, hours allocated, review rating, and bonus.",
    "requirements": [
      "Join Employees, Employee_Projects (on emp_id), and Performance_Reviews (on emp_id).",
      "Display `emp_name`, `project_id`, `hours_allocated`, `rating`, and `bonus`."
    ],
    "tableName": "Employees, Departments, Performance_Reviews",
    "hint": "Join Employees with Employee_Projects and Performance_Reviews on emp_id.",
    "expectedSql": "SELECT e.emp_name, d.dept_name, d.location, pr.rating, pr.bonus FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Synthesizes biographical employee identity, departmental origin, and evaluation scores.",
    "tags": [
      "joins",
      "multi-table",
      "auditing"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "dept_name",
        "location",
        "rating",
        "bonus"
      ],
      "values": [
        [
          "Chetan",
          "IT",
          "Bengaluru",
          4,
          15000
        ],
        [
          "Dhruv",
          "Finance",
          "Hyderabad",
          4,
          18000
        ],
        [
          "Girish",
          "Finance",
          "Hyderabad",
          4,
          20000
        ],
        [
          "Girish",
          "Finance",
          "Hyderabad",
          5,
          25000
        ],
        [
          "Harsha",
          "IT",
          "Bengaluru",
          3,
          8000
        ],
        [
          "Kiran",
          "HR",
          "Bengaluru",
          4,
          18000
        ],
        [
          "Meena",
          "Marketing",
          "Chennai",
          4,
          16000
        ],
        [
          "Naveen",
          "Finance",
          "Hyderabad",
          2,
          null
        ],
        [
          "Priya",
          "IT",
          "Bengaluru",
          4,
          20000
        ],
        [
          "Priya",
          "IT",
          "Bengaluru",
          5,
          25000
        ],
        [
          "Sneha",
          "Sales",
          "Hyderabad",
          4,
          12000
        ],
        [
          "Varun",
          "Marketing",
          "Chennai",
          4,
          15000
        ],
        [
          "Divya",
          "Sales",
          "Hyderabad",
          3,
          7000
        ],
        [
          "Manoj",
          "IT",
          "Bengaluru",
          3,
          9000
        ],
        [
          "Arjun",
          "Finance",
          "Hyderabad",
          5,
          25000
        ],
        [
          "Arjun",
          "Finance",
          "Hyderabad",
          5,
          28000
        ],
        [
          "Arjun",
          "Finance",
          "Hyderabad",
          5,
          30000
        ],
        [
          "Bhumika",
          "HR",
          "Bengaluru",
          3,
          6000
        ]
      ],
      "rowCount": 18
    }
  },
  {
    "id": 220,
    "title": "Tri-Table Project Staffing Directory with Employee Names",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "The project directory displays project names alongside the full names of assigned personnel. Retrieve project name, employee full name, assigned role, and weekly hours for all assigned team members.",
    "requirements": [
      "Join Projects, Employee_Projects (on project_id), and Employees (on emp_id).",
      "Display `project_name`, `emp_name`, `assigned_role`, and `hours_allocated`."
    ],
    "tableName": "Employees, Employee_Projects, Performance_Reviews",
    "hint": "Connect Projects to Employee_Projects on project_id and then to Employees on emp_id.",
    "expectedSql": "SELECT e.emp_name, ep.assigned_role, pr.review_year, pr.rating FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Links tactical project duties directly to appraisal outcomes.",
    "tags": [
      "joins",
      "multi-table",
      "performance"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "assigned_role",
        "review_year",
        "rating"
      ],
      "values": [
        [
          "Chetan",
          "Lead Developer",
          2024,
          4
        ],
        [
          "Chetan",
          "Backend Architect",
          2024,
          4
        ],
        [
          "Dhruv",
          "Senior Auditor",
          2024,
          4
        ],
        [
          "Girish",
          "Compliance Officer",
          2023,
          4
        ],
        [
          "Girish",
          "Compliance Officer",
          2024,
          5
        ],
        [
          "Harsha",
          "Full Stack Engineer",
          2024,
          3
        ],
        [
          "Kiran",
          "HR Lead",
          2024,
          4
        ],
        [
          "Meena",
          "Marketing Manager",
          2024,
          4
        ],
        [
          "Naveen",
          "Financial Analyst",
          2024,
          2
        ],
        [
          "Priya",
          "Project Manager",
          2023,
          4
        ],
        [
          "Priya",
          "Technical Advisor",
          2023,
          4
        ],
        [
          "Priya",
          "Project Manager",
          2024,
          5
        ],
        [
          "Priya",
          "Technical Advisor",
          2024,
          5
        ],
        [
          "Sneha",
          "Sales Lead",
          2024,
          4
        ],
        [
          "Varun",
          "Creative Director",
          2024,
          4
        ],
        [
          "Varun",
          "Campaign Strategist",
          2024,
          4
        ],
        [
          "Divya",
          "Account Executive",
          2024,
          3
        ],
        [
          "Manoj",
          "Database Specialist",
          2024,
          3
        ],
        [
          "Arjun",
          "Finance Director",
          2022,
          5
        ],
        [
          "Arjun",
          "Finance Director",
          2023,
          5
        ],
        [
          "Arjun",
          "Finance Director",
          2024,
          5
        ],
        [
          "Bhumika",
          "Recruiter",
          2024,
          3
        ]
      ],
      "rowCount": 22
    }
  },
  {
    "id": 221,
    "title": "Four-Table Enterprise Integration: Staff, Unit, Project, and Role",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Enterprise reporting requires a comprehensive operational view uniting four business entities. For all project assignments, display employee name, department location, project name, project budget, and assigned role.",
    "requirements": [
      "Join Employees, Departments (on department name), Employee_Projects (on emp_id), and Projects (on project_id).",
      "Display `emp_name`, `location`, `project_name`, project `budget`, and `assigned_role`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Join Employees to Departments, Employee_Projects, and Projects using their respective foreign keys.",
    "expectedSql": "SELECT e.emp_name, d.dept_name, p.project_name, ep.assigned_role FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Traverses four relational entities in the enterprise schema to construct an operational staffing view.",
    "tags": [
      "joins",
      "four-tables",
      "relational"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "dept_name",
        "project_name",
        "assigned_role"
      ],
      "values": [
        [
          "Chetan",
          "IT",
          "Cloud Migration",
          "Lead Developer"
        ],
        [
          "Chetan",
          "IT",
          "ERP Modernization",
          "Backend Architect"
        ],
        [
          "Harsha",
          "IT",
          "Cloud Migration",
          "Full Stack Engineer"
        ],
        [
          "Priya",
          "IT",
          "Cloud Migration",
          "Project Manager"
        ],
        [
          "Priya",
          "IT",
          "Financial Audit Automation",
          "Technical Advisor"
        ],
        [
          "Manoj",
          "IT",
          "ERP Modernization",
          "Database Specialist"
        ],
        [
          "Bhumika",
          "HR",
          "Global Talent Acquisition",
          "Recruiter"
        ],
        [
          "Farah",
          "HR",
          "Global Talent Acquisition",
          "HR Coordinator"
        ],
        [
          "Kiran",
          "HR",
          "Global Talent Acquisition",
          "HR Lead"
        ],
        [
          "Dhruv",
          "Finance",
          "Financial Audit Automation",
          "Senior Auditor"
        ],
        [
          "Girish",
          "Finance",
          "Financial Audit Automation",
          "Compliance Officer"
        ],
        [
          "Naveen",
          "Finance",
          "Financial Audit Automation",
          "Financial Analyst"
        ],
        [
          "Arjun",
          "Finance",
          "Financial Audit Automation",
          "Finance Director"
        ],
        [
          "Isha",
          "Marketing",
          "Brand Revamp 2025",
          "Content Strategist"
        ],
        [
          "Meena",
          "Marketing",
          "Brand Revamp 2025",
          "Marketing Manager"
        ],
        [
          "Varun",
          "Marketing",
          "Brand Revamp 2025",
          "Creative Director"
        ],
        [
          "Varun",
          "Marketing",
          "CRM Sales Pipeline",
          "Campaign Strategist"
        ],
        [
          "Sneha",
          "Sales",
          "CRM Sales Pipeline",
          "Sales Lead"
        ],
        [
          "Divya",
          "Sales",
          "CRM Sales Pipeline",
          "Account Executive"
        ],
        [
          "Keerthi",
          "Sales",
          "CRM Sales Pipeline",
          "Client Onboarding"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 222,
    "title": "Four-Table Executive Audit: Staff, Division, Appraisal, and Initiative",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "An executive compensation and project audit synthesizes multiple data points. Display employee name, department, office location, 2024 appraisal rating, and project name for staff assigned to projects who completed a 2024 review.",
    "requirements": [
      "Join Employees, Departments, Performance_Reviews, and Employee_Projects with Projects.",
      "Filter for `review_year = 2024`.",
      "Display `emp_name`, `dept_name`, `location`, `rating`, and `project_name`."
    ],
    "tableName": "Employees, Employee_Projects, Projects, Performance_Reviews",
    "hint": "Join across the four tables and filter for review_year = 2024.",
    "expectedSql": "SELECT e.emp_name, p.project_name, pr.review_year, pr.bonus FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.bonus IS NOT NULL;",
    "explanation": "Reconciles project delivery commitments against confirmed merit bonuses.",
    "tags": [
      "joins",
      "four-tables",
      "compensation"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "project_name",
        "review_year",
        "bonus"
      ],
      "values": [
        [
          "Bhumika",
          "Global Talent Acquisition",
          2024,
          6000
        ],
        [
          "Chetan",
          "Cloud Migration",
          2024,
          15000
        ],
        [
          "Chetan",
          "ERP Modernization",
          2024,
          15000
        ],
        [
          "Dhruv",
          "Financial Audit Automation",
          2024,
          18000
        ],
        [
          "Girish",
          "Financial Audit Automation",
          2023,
          20000
        ],
        [
          "Girish",
          "Financial Audit Automation",
          2024,
          25000
        ],
        [
          "Harsha",
          "Cloud Migration",
          2024,
          8000
        ],
        [
          "Kiran",
          "Global Talent Acquisition",
          2024,
          18000
        ],
        [
          "Meena",
          "Brand Revamp 2025",
          2024,
          16000
        ],
        [
          "Priya",
          "Cloud Migration",
          2023,
          20000
        ],
        [
          "Priya",
          "Cloud Migration",
          2024,
          25000
        ],
        [
          "Priya",
          "Financial Audit Automation",
          2023,
          20000
        ],
        [
          "Priya",
          "Financial Audit Automation",
          2024,
          25000
        ],
        [
          "Sneha",
          "CRM Sales Pipeline",
          2024,
          12000
        ],
        [
          "Varun",
          "Brand Revamp 2025",
          2024,
          15000
        ],
        [
          "Varun",
          "CRM Sales Pipeline",
          2024,
          15000
        ],
        [
          "Divya",
          "CRM Sales Pipeline",
          2024,
          7000
        ],
        [
          "Manoj",
          "ERP Modernization",
          2024,
          9000
        ],
        [
          "Arjun",
          "Financial Audit Automation",
          2022,
          25000
        ],
        [
          "Arjun",
          "Financial Audit Automation",
          2023,
          28000
        ],
        [
          "Arjun",
          "Financial Audit Automation",
          2024,
          30000
        ]
      ],
      "rowCount": 21
    }
  },
  {
    "id": 223,
    "title": "Multi-Table Outer Join: Preserving Unassigned Staff Across Projects",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Human Resources is compiling a master assignment inventory that retains all employees regardless of whether they have project assignments. Display employee name, department, assigned project name, and hours allocated, preserving staff with zero assignments.",
    "requirements": [
      "Left join Employees to Employee_Projects (on emp_id), then left join to Projects (on project_id).",
      "Display `emp_name`, `department`, `project_name`, and `hours_allocated`."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Chain two left outer joins starting from Employees.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, p.project_name FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Cascading LEFT JOIN preserves all employees, including unassigned individuals who return NULL project names.",
    "tags": [
      "joins",
      "multi-table",
      "left-join",
      "cascading"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "project_name"
      ],
      "values": [
        [
          101,
          "Anil",
          null
        ],
        [
          102,
          "Bhumika",
          "Global Talent Acquisition"
        ],
        [
          103,
          "Chetan",
          "Cloud Migration"
        ],
        [
          103,
          "Chetan",
          "ERP Modernization"
        ],
        [
          104,
          "Dhruv",
          "Financial Audit Automation"
        ],
        [
          105,
          "Farah",
          "Global Talent Acquisition"
        ],
        [
          106,
          "Girish",
          "Financial Audit Automation"
        ],
        [
          107,
          "Harsha",
          "Cloud Migration"
        ],
        [
          108,
          "Isha",
          "Brand Revamp 2025"
        ],
        [
          109,
          "Kiran",
          "Global Talent Acquisition"
        ],
        [
          110,
          "Meena",
          "Brand Revamp 2025"
        ],
        [
          111,
          "Naveen",
          "Financial Audit Automation"
        ],
        [
          112,
          "Priya",
          "Cloud Migration"
        ],
        [
          112,
          "Priya",
          "Financial Audit Automation"
        ],
        [
          113,
          "Rahul",
          null
        ],
        [
          114,
          "Sneha",
          "CRM Sales Pipeline"
        ],
        [
          115,
          "Varun",
          "Brand Revamp 2025"
        ],
        [
          115,
          "Varun",
          "CRM Sales Pipeline"
        ],
        [
          116,
          "Divya",
          "CRM Sales Pipeline"
        ],
        [
          117,
          "Manoj",
          "ERP Modernization"
        ],
        [
          118,
          "Pooja",
          null
        ],
        [
          119,
          "Arjun",
          "Financial Audit Automation"
        ],
        [
          120,
          "Keerthi",
          "CRM Sales Pipeline"
        ]
      ],
      "rowCount": 23
    }
  },
  {
    "id": 224,
    "title": "Multi-Table Outer Join: Department to Project Cascade",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "The PMO is auditing the organizational project hierarchy from departments down to project team members. Display department name, project name, and assigned employee ID, preserving departments with no projects and projects with no staff.",
    "requirements": [
      "Left join Departments to Projects (on dept_id), then left join to Employee_Projects (on project_id).",
      "Display `dept_name`, `project_name`, and `emp_id`."
    ],
    "tableName": "Departments, Projects, Employee_Projects",
    "hint": "Chain two left joins from Departments through Projects to Employee_Projects.",
    "expectedSql": "SELECT d.dept_name, p.project_name, ep.emp_id FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Preserves departments without projects, as well as projects without assigned employees.",
    "tags": [
      "joins",
      "multi-table",
      "left-join"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "project_name",
        "emp_id"
      ],
      "values": [
        [
          "IT",
          "Cloud Migration",
          103
        ],
        [
          "IT",
          "Cloud Migration",
          107
        ],
        [
          "IT",
          "Cloud Migration",
          112
        ],
        [
          "IT",
          "ERP Modernization",
          103
        ],
        [
          "IT",
          "ERP Modernization",
          117
        ],
        [
          "HR",
          "Global Talent Acquisition",
          102
        ],
        [
          "HR",
          "Global Talent Acquisition",
          105
        ],
        [
          "HR",
          "Global Talent Acquisition",
          109
        ],
        [
          "Finance",
          "Financial Audit Automation",
          104
        ],
        [
          "Finance",
          "Financial Audit Automation",
          106
        ],
        [
          "Finance",
          "Financial Audit Automation",
          111
        ],
        [
          "Finance",
          "Financial Audit Automation",
          112
        ],
        [
          "Finance",
          "Financial Audit Automation",
          119
        ],
        [
          "Marketing",
          "Brand Revamp 2025",
          108
        ],
        [
          "Marketing",
          "Brand Revamp 2025",
          110
        ],
        [
          "Marketing",
          "Brand Revamp 2025",
          115
        ],
        [
          "Sales",
          "CRM Sales Pipeline",
          114
        ],
        [
          "Sales",
          "CRM Sales Pipeline",
          115
        ],
        [
          "Sales",
          "CRM Sales Pipeline",
          116
        ],
        [
          "Sales",
          "CRM Sales Pipeline",
          120
        ],
        [
          "Legal",
          "Compliance Automation",
          null
        ],
        [
          "Operations",
          null,
          null
        ],
        [
          "R&D",
          "NextGen AI Suite",
          null
        ]
      ],
      "rowCount": 23
    }
  },
  {
    "id": 225,
    "title": "High-Earner Deliveries on Completed Initiatives",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "The compensation committee is reviewing high-earning staff deployed to delivered projects. For employees earning strictly more than 40,000 who worked on projects marked as 'Completed', display employee name, salary, department name, and project name.",
    "requirements": [
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter for `status = 'Completed'` and `salary > 40000`.",
      "Display `emp_name`, `salary`, `dept_name`, and `project_name`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Join the four tables and filter for p.status = 'Completed' and e.salary > 40000.",
    "expectedSql": "SELECT e.emp_name, e.salary, d.dept_name, p.project_name FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Completed' AND e.salary > 40000;",
    "explanation": "Constrains a four-table relational query across both project state and individual compensation.",
    "tags": [
      "joins",
      "four-tables",
      "filtering"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary",
        "dept_name",
        "project_name"
      ],
      "values": [
        [
          "Chetan",
          55000,
          "IT",
          "ERP Modernization"
        ],
        [
          "Sneha",
          48000,
          "Sales",
          "CRM Sales Pipeline"
        ],
        [
          "Varun",
          68000,
          "Marketing",
          "CRM Sales Pipeline"
        ],
        [
          "Divya",
          42000,
          "Sales",
          "CRM Sales Pipeline"
        ],
        [
          "Manoj",
          52000,
          "IT",
          "ERP Modernization"
        ],
        [
          "Keerthi",
          55000,
          "Sales",
          "CRM Sales Pipeline"
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 226,
    "title": "Heavy Workload Contributors on Active Programs",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Resource governance is monitoring staff carrying heavy weekly commitments on active initiatives. For active projects where an employee is allocated strictly more than 25 weekly hours, display employee name, department location, project name, and allocated hours.",
    "requirements": [
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter for `status = 'Active'` and `hours_allocated > 25`.",
      "Display `emp_name`, `location`, `project_name`, and `hours_allocated`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Join the four tables and filter for ep.hours_allocated > 25 and p.status = 'Active'.",
    "expectedSql": "SELECT e.emp_name, d.location, p.project_name, ep.hours_allocated FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE ep.hours_allocated > 25 AND p.status = 'Active';",
    "explanation": "Identifies heavy resource investments on live business priorities.",
    "tags": [
      "joins",
      "four-tables",
      "workload"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "location",
        "project_name",
        "hours_allocated"
      ],
      "values": [
        [
          "Chetan",
          "Bengaluru",
          "Cloud Migration",
          35
        ],
        [
          "Harsha",
          "Bengaluru",
          "Cloud Migration",
          40
        ],
        [
          "Bhumika",
          "Bengaluru",
          "Global Talent Acquisition",
          35
        ],
        [
          "Farah",
          "Bengaluru",
          "Global Talent Acquisition",
          30
        ],
        [
          "Dhruv",
          "Hyderabad",
          "Financial Audit Automation",
          35
        ],
        [
          "Naveen",
          "Hyderabad",
          "Financial Audit Automation",
          30
        ],
        [
          "Isha",
          "Chennai",
          "Brand Revamp 2025",
          35
        ],
        [
          "Meena",
          "Chennai",
          "Brand Revamp 2025",
          30
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 227,
    "title": "Comprehensive Staff Profile: Unit, Project, and 2024 Appraisal",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Executive dashboards require a complete cross-functional profile for active staff. For employees who completed a 2024 review and are assigned to a project, display employee name, department name, project name, and 2024 performance rating.",
    "requirements": [
      "Join Employees, Departments, Employee_Projects, Projects, and Performance_Reviews.",
      "Filter for `review_year = 2024`.",
      "Display `emp_name`, `dept_name`, `project_name`, and `rating`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects, Performance_Reviews",
    "hint": "Join across the relevant tables and filter for pr.review_year = 2024.",
    "expectedSql": "SELECT e.emp_name, d.dept_name, p.project_name, pr.rating FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_year = 2024;",
    "explanation": "Assembles a 360-degree operational profile connecting organization, initiative, and appraisal rating.",
    "tags": [
      "joins",
      "five-tables",
      "360-view"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "dept_name",
        "project_name",
        "rating"
      ],
      "values": [
        [
          "Chetan",
          "IT",
          "Cloud Migration",
          4
        ],
        [
          "Chetan",
          "IT",
          "ERP Modernization",
          4
        ],
        [
          "Dhruv",
          "Finance",
          "Financial Audit Automation",
          4
        ],
        [
          "Girish",
          "Finance",
          "Financial Audit Automation",
          5
        ],
        [
          "Harsha",
          "IT",
          "Cloud Migration",
          3
        ],
        [
          "Kiran",
          "HR",
          "Global Talent Acquisition",
          4
        ],
        [
          "Meena",
          "Marketing",
          "Brand Revamp 2025",
          4
        ],
        [
          "Naveen",
          "Finance",
          "Financial Audit Automation",
          2
        ],
        [
          "Priya",
          "IT",
          "Cloud Migration",
          5
        ],
        [
          "Priya",
          "IT",
          "Financial Audit Automation",
          5
        ],
        [
          "Sneha",
          "Sales",
          "CRM Sales Pipeline",
          4
        ],
        [
          "Varun",
          "Marketing",
          "Brand Revamp 2025",
          4
        ],
        [
          "Varun",
          "Marketing",
          "CRM Sales Pipeline",
          4
        ],
        [
          "Divya",
          "Sales",
          "CRM Sales Pipeline",
          3
        ],
        [
          "Manoj",
          "IT",
          "ERP Modernization",
          3
        ],
        [
          "Arjun",
          "Finance",
          "Financial Audit Automation",
          5
        ],
        [
          "Bhumika",
          "HR",
          "Global Talent Acquisition",
          3
        ]
      ],
      "rowCount": 17
    }
  },
  {
    "id": 228,
    "title": "Intra-Departmental Peer Pairings",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Organizational network analysis is studying collaboration pairs within business units. Find all unique pairs of employees who work in the same department, displaying the first employee name as `employee_1`, second employee name as `employee_2`, and the department name, ensuring each unique pair appears only once.",
    "requirements": [
      "Join Employees with itself on matching department.",
      "Enforce `e1.emp_id < e2.emp_id` to eliminate self-matches and duplicate mirror pairs.",
      "Display employee 1 aliased as `employee_1`, employee 2 aliased as `employee_2`, and `department`."
    ],
    "tableName": "Employees",
    "hint": "Use a self-join on department with e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department WHERE e1.emp_id < e2.emp_id;",
    "explanation": "e1.emp_id < e2.emp_id prevents pairing an employee with themselves and prevents mirror duplicates (A, B and B, A).",
    "tags": [
      "joins",
      "self-join",
      "pairing"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "employee_1",
        "employee_2",
        "department"
      ],
      "values": [
        [
          "Anil",
          "Chetan",
          "IT"
        ],
        [
          "Anil",
          "Harsha",
          "IT"
        ],
        [
          "Anil",
          "Priya",
          "IT"
        ],
        [
          "Anil",
          "Manoj",
          "IT"
        ],
        [
          "Bhumika",
          "Farah",
          "HR"
        ],
        [
          "Bhumika",
          "Kiran",
          "HR"
        ],
        [
          "Bhumika",
          "Pooja",
          "HR"
        ],
        [
          "Chetan",
          "Harsha",
          "IT"
        ],
        [
          "Chetan",
          "Priya",
          "IT"
        ],
        [
          "Chetan",
          "Manoj",
          "IT"
        ],
        [
          "Dhruv",
          "Girish",
          "Finance"
        ],
        [
          "Dhruv",
          "Naveen",
          "Finance"
        ],
        [
          "Dhruv",
          "Arjun",
          "Finance"
        ],
        [
          "Farah",
          "Kiran",
          "HR"
        ],
        [
          "Farah",
          "Pooja",
          "HR"
        ],
        [
          "Girish",
          "Naveen",
          "Finance"
        ],
        [
          "Girish",
          "Arjun",
          "Finance"
        ],
        [
          "Harsha",
          "Priya",
          "IT"
        ],
        [
          "Harsha",
          "Manoj",
          "IT"
        ],
        [
          "Isha",
          "Meena",
          "Marketing"
        ],
        [
          "Isha",
          "Varun",
          "Marketing"
        ],
        [
          "Kiran",
          "Pooja",
          "HR"
        ],
        [
          "Meena",
          "Varun",
          "Marketing"
        ],
        [
          "Naveen",
          "Arjun",
          "Finance"
        ],
        [
          "Priya",
          "Manoj",
          "IT"
        ],
        [
          "Rahul",
          "Sneha",
          "Sales"
        ],
        [
          "Rahul",
          "Divya",
          "Sales"
        ],
        [
          "Rahul",
          "Keerthi",
          "Sales"
        ],
        [
          "Sneha",
          "Divya",
          "Sales"
        ],
        [
          "Sneha",
          "Keerthi",
          "Sales"
        ],
        [
          "Divya",
          "Keerthi",
          "Sales"
        ]
      ],
      "rowCount": 31
    }
  },
  {
    "id": 229,
    "title": "Colleague Pairings Sharing Office Cities",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Facilities is setting up local peer mentorships within branch offices. Find all unique pairs of colleagues who are stationed in the same office city, displaying colleague 1 as `colleague_1`, colleague 2 as `colleague_2`, and city name, preventing duplicate pairs.",
    "requirements": [
      "Join Employees with itself on matching city.",
      "Enforce `e1.emp_id < e2.emp_id`.",
      "Display `colleague_1`, `colleague_2`, and `city`."
    ],
    "tableName": "Employees",
    "hint": "Self-join Employees on city with e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS colleague_1, e2.emp_name AS colleague_2, e1.city FROM Employees e1 INNER JOIN Employees e2 ON e1.city = e2.city WHERE e1.emp_id < e2.emp_id;",
    "explanation": "Groups colleagues stationed in identical office hubs using self-join pairs.",
    "tags": [
      "joins",
      "self-join",
      "city"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "colleague_1",
        "colleague_2",
        "city"
      ],
      "values": [
        [
          "Anil",
          "Chetan",
          "Hyderabad"
        ],
        [
          "Anil",
          "Farah",
          "Hyderabad"
        ],
        [
          "Anil",
          "Meena",
          "Hyderabad"
        ],
        [
          "Anil",
          "Sneha",
          "Hyderabad"
        ],
        [
          "Anil",
          "Arjun",
          "Hyderabad"
        ],
        [
          "Bhumika",
          "Harsha",
          "Vijayawada"
        ],
        [
          "Bhumika",
          "Rahul",
          "Vijayawada"
        ],
        [
          "Bhumika",
          "Pooja",
          "Vijayawada"
        ],
        [
          "Chetan",
          "Farah",
          "Hyderabad"
        ],
        [
          "Chetan",
          "Meena",
          "Hyderabad"
        ],
        [
          "Chetan",
          "Sneha",
          "Hyderabad"
        ],
        [
          "Chetan",
          "Arjun",
          "Hyderabad"
        ],
        [
          "Dhruv",
          "Isha",
          "Chennai"
        ],
        [
          "Dhruv",
          "Naveen",
          "Chennai"
        ],
        [
          "Dhruv",
          "Varun",
          "Chennai"
        ],
        [
          "Dhruv",
          "Manoj",
          "Chennai"
        ],
        [
          "Dhruv",
          "Keerthi",
          "Chennai"
        ],
        [
          "Farah",
          "Meena",
          "Hyderabad"
        ],
        [
          "Farah",
          "Sneha",
          "Hyderabad"
        ],
        [
          "Farah",
          "Arjun",
          "Hyderabad"
        ],
        [
          "Girish",
          "Kiran",
          "Bengaluru"
        ],
        [
          "Girish",
          "Priya",
          "Bengaluru"
        ],
        [
          "Girish",
          "Divya",
          "Bengaluru"
        ],
        [
          "Harsha",
          "Rahul",
          "Vijayawada"
        ],
        [
          "Harsha",
          "Pooja",
          "Vijayawada"
        ],
        [
          "Isha",
          "Naveen",
          "Chennai"
        ],
        [
          "Isha",
          "Varun",
          "Chennai"
        ],
        [
          "Isha",
          "Manoj",
          "Chennai"
        ],
        [
          "Isha",
          "Keerthi",
          "Chennai"
        ],
        [
          "Kiran",
          "Priya",
          "Bengaluru"
        ],
        [
          "Kiran",
          "Divya",
          "Bengaluru"
        ],
        [
          "Meena",
          "Sneha",
          "Hyderabad"
        ],
        [
          "Meena",
          "Arjun",
          "Hyderabad"
        ],
        [
          "Naveen",
          "Varun",
          "Chennai"
        ],
        [
          "Naveen",
          "Manoj",
          "Chennai"
        ],
        [
          "Naveen",
          "Keerthi",
          "Chennai"
        ],
        [
          "Priya",
          "Divya",
          "Bengaluru"
        ],
        [
          "Rahul",
          "Pooja",
          "Vijayawada"
        ],
        [
          "Sneha",
          "Arjun",
          "Hyderabad"
        ],
        [
          "Varun",
          "Manoj",
          "Chennai"
        ],
        [
          "Varun",
          "Keerthi",
          "Chennai"
        ],
        [
          "Manoj",
          "Keerthi",
          "Chennai"
        ]
      ],
      "rowCount": 42
    }
  },
  {
    "id": 230,
    "title": "Colleague Compensation Disparity Comparison",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Compensation equity is analyzing salary gaps between colleagues in the same division. Find pairs of colleagues in the same department where one employee out-earns the other by at least 20,000, displaying the higher earner name (`higher_earner`), higher salary (`high_sal`), lower earner name (`lower_earner`), lower salary (`low_sal`), and department name.",
    "requirements": [
      "Join Employees with itself on matching department.",
      "Filter for records where `e1.salary >= e2.salary + 20000`.",
      "Display `higher_earner`, `high_sal`, `lower_earner`, `low_sal`, and `department`."
    ],
    "tableName": "Employees",
    "hint": "Self-join on department and compare e1.salary to e2.salary + 20000.",
    "expectedSql": "SELECT e1.emp_name AS higher_earner, e1.salary AS high_sal, e2.emp_name AS lower_earner, e2.salary AS low_sal, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department WHERE e1.salary >= e2.salary + 20000;",
    "explanation": "Performs intra-departmental compensation comparisons between pairs of colleagues.",
    "tags": [
      "joins",
      "self-join",
      "salary-comparison"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "higher_earner",
        "high_sal",
        "lower_earner",
        "low_sal",
        "department"
      ],
      "values": [
        [
          "Chetan",
          55000,
          "Anil",
          25000,
          "IT"
        ],
        [
          "Dhruv",
          65000,
          "Naveen",
          35000,
          "Finance"
        ],
        [
          "Girish",
          80000,
          "Naveen",
          35000,
          "Finance"
        ],
        [
          "Harsha",
          45000,
          "Anil",
          25000,
          "IT"
        ],
        [
          "Kiran",
          70000,
          "Bhumika",
          40000,
          "HR"
        ],
        [
          "Kiran",
          70000,
          "Farah",
          32000,
          "HR"
        ],
        [
          "Kiran",
          70000,
          "Pooja",
          27000,
          "HR"
        ],
        [
          "Meena",
          60000,
          "Isha",
          28000,
          "Marketing"
        ],
        [
          "Priya",
          75000,
          "Anil",
          25000,
          "IT"
        ],
        [
          "Priya",
          75000,
          "Chetan",
          55000,
          "IT"
        ],
        [
          "Priya",
          75000,
          "Harsha",
          45000,
          "IT"
        ],
        [
          "Priya",
          75000,
          "Manoj",
          52000,
          "IT"
        ],
        [
          "Varun",
          68000,
          "Isha",
          28000,
          "Marketing"
        ],
        [
          "Manoj",
          52000,
          "Anil",
          25000,
          "IT"
        ],
        [
          "Arjun",
          90000,
          "Dhruv",
          65000,
          "Finance"
        ],
        [
          "Arjun",
          90000,
          "Naveen",
          35000,
          "Finance"
        ],
        [
          "Keerthi",
          55000,
          "Rahul",
          30000,
          "Sales"
        ]
      ],
      "rowCount": 17
    }
  },
  {
    "id": 231,
    "title": "Same-Year Hiring Cohort Pairings",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Talent acquisition is organizing anniversary cohorts for staff hired in the same year. Find all unique pairs of employees who joined the company in the same calendar year, displaying joiner 1 as `joiner_1`, joiner 2 as `joiner_2`, and the joining year, without duplicate mirror pairs.",
    "requirements": [
      "Join Employees with itself on matching joining year.",
      "Enforce `e1.emp_id < e2.emp_id`.",
      "Display `joiner_1`, `joiner_2`, and `joining_year`."
    ],
    "tableName": "Employees",
    "hint": "Self-join Employees on joining_year with e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS joiner_1, e2.emp_name AS joiner_2, e1.joining_year FROM Employees e1 INNER JOIN Employees e2 ON e1.joining_year = e2.joining_year WHERE e1.emp_id < e2.emp_id;",
    "explanation": "Detects hiring cohort cohorts through temporal equality self-joining.",
    "tags": [
      "joins",
      "self-join",
      "cohorts"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "joiner_1",
        "joiner_2",
        "joining_year"
      ],
      "values": [
        [
          "Anil",
          "Isha",
          2025
        ],
        [
          "Anil",
          "Pooja",
          2025
        ],
        [
          "Bhumika",
          "Naveen",
          2023
        ],
        [
          "Chetan",
          "Sneha",
          2021
        ],
        [
          "Farah",
          "Rahul",
          2024
        ],
        [
          "Harsha",
          "Divya",
          2022
        ],
        [
          "Harsha",
          "Keerthi",
          2022
        ],
        [
          "Isha",
          "Pooja",
          2025
        ],
        [
          "Kiran",
          "Varun",
          2018
        ],
        [
          "Meena",
          "Manoj",
          2020
        ],
        [
          "Divya",
          "Keerthi",
          2022
        ]
      ],
      "rowCount": 11
    }
  },
  {
    "id": 232,
    "title": "Same-Department Project Initiative Pairings",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "The PMO is reviewing project portfolios within sponsoring divisions. Find all unique pairs of projects that are sponsored by the same department, displaying project 1 as `project_1`, project 2 as `project_2`, and the department ID (`dept_id`), avoiding duplicate pairs.",
    "requirements": [
      "Join Projects with itself on matching department ID.",
      "Enforce `p1.project_id < p2.project_id`.",
      "Display `project_1`, `project_2`, and `dept_id`."
    ],
    "tableName": "Projects",
    "hint": "Self-join Projects on dept_id with p1.project_id < p2.project_id.",
    "expectedSql": "SELECT p1.project_name AS project_1, p2.project_name AS project_2, p1.dept_id FROM Projects p1 INNER JOIN Projects p2 ON p1.dept_id = p2.dept_id WHERE p1.project_id < p2.project_id;",
    "explanation": "Surfaces intra-departmental project portfolios sharing the same departmental budget origin.",
    "tags": [
      "joins",
      "self-join",
      "projects"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_1",
        "project_2",
        "dept_id"
      ],
      "values": [
        [
          "Cloud Migration",
          "ERP Modernization",
          1
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 233,
    "title": "Year-over-Year Performance Appraisal Trajectory",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "HR analytics is tracking individual rating progression across consecutive review cycles. For employees evaluated in consecutive calendar years, display employee ID, previous review year (`prev_year`), previous rating (`prev_rating`), subsequent review year (`next_year`), and subsequent rating (`next_rating`).",
    "requirements": [
      "Join Performance_Reviews with itself on matching employee ID.",
      "Filter for consecutive years where `r1.review_year = r2.review_year - 1`.",
      "Display `emp_id`, `prev_year`, `prev_rating`, `next_year`, and `next_rating`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Self-join Performance_Reviews on emp_id and r1.review_year = r2.review_year - 1.",
    "expectedSql": "SELECT r1.emp_id, r1.review_year AS prev_year, r1.rating AS prev_rating, r2.review_year AS next_year, r2.rating AS next_rating FROM Performance_Reviews r1 INNER JOIN Performance_Reviews r2 ON r1.emp_id = r2.emp_id WHERE r1.review_year = r2.review_year - 1;",
    "explanation": "Tracks year-over-year rating trends by matching an appraisal record with its consecutive-year successor.",
    "tags": [
      "joins",
      "self-join",
      "progression",
      "temporal"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "prev_year",
        "prev_rating",
        "next_year",
        "next_rating"
      ],
      "values": [
        [
          106,
          2023,
          4,
          2024,
          5
        ],
        [
          112,
          2023,
          4,
          2024,
          5
        ],
        [
          119,
          2022,
          5,
          2023,
          5
        ],
        [
          119,
          2023,
          5,
          2024,
          5
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 234,
    "title": "Colleague Pairings with Identical Career Experience",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Professional development is pairing colleagues with matching career seniority. Find all unique pairs of employees who have the exact same number of years of experience, displaying peer 1 as `peer_1`, peer 2 as `peer_2`, and years of experience, without duplicate pairs.",
    "requirements": [
      "Join Employees with itself on matching experience.",
      "Enforce `e1.emp_id < e2.emp_id`.",
      "Display `peer_1`, `peer_2`, and `experience`."
    ],
    "tableName": "Employees",
    "hint": "Self-join Employees on experience with e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS peer_1, e2.emp_name AS peer_2, e1.experience FROM Employees e1 INNER JOIN Employees e2 ON e1.experience = e2.experience WHERE e1.emp_id < e2.emp_id;",
    "explanation": "Finds peer experience equivalents across the organization.",
    "tags": [
      "joins",
      "self-join",
      "tenure"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "peer_1",
        "peer_2",
        "experience"
      ],
      "values": [
        [
          "Anil",
          "Isha",
          1
        ],
        [
          "Anil",
          "Pooja",
          1
        ],
        [
          "Bhumika",
          "Naveen",
          3
        ],
        [
          "Bhumika",
          "Divya",
          3
        ],
        [
          "Chetan",
          "Sneha",
          5
        ],
        [
          "Farah",
          "Rahul",
          2
        ],
        [
          "Harsha",
          "Keerthi",
          4
        ],
        [
          "Isha",
          "Pooja",
          1
        ],
        [
          "Kiran",
          "Varun",
          8
        ],
        [
          "Meena",
          "Manoj",
          6
        ],
        [
          "Naveen",
          "Divya",
          3
        ]
      ],
      "rowCount": 11
    }
  },
  {
    "id": 235,
    "title": "Project Teammate Collaboration Pairings",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Resource management is mapping collaboration networks across project initiatives. Find all unique pairs of employees who are assigned to the same project, displaying the project ID, teammate 1 ID as `team_member_1`, and teammate 2 ID as `team_member_2`, without duplicate pairs.",
    "requirements": [
      "Join Employee_Projects with itself on matching project ID.",
      "Enforce `ep1.emp_id < ep2.emp_id`.",
      "Display `project_id`, `team_member_1`, and `team_member_2`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Self-join Employee_Projects on project_id with ep1.emp_id < ep2.emp_id.",
    "expectedSql": "SELECT ep1.project_id, ep1.emp_id AS team_member_1, ep2.emp_id AS team_member_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id WHERE ep1.emp_id < ep2.emp_id;",
    "explanation": "Generates teammate pairs sharing assignments on a common corporate initiative.",
    "tags": [
      "joins",
      "self-join",
      "collaboration"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_id",
        "team_member_1",
        "team_member_2"
      ],
      "values": [
        [
          503,
          102,
          105
        ],
        [
          503,
          102,
          109
        ],
        [
          501,
          103,
          107
        ],
        [
          501,
          103,
          112
        ],
        [
          502,
          103,
          117
        ],
        [
          504,
          104,
          106
        ],
        [
          504,
          104,
          111
        ],
        [
          504,
          104,
          112
        ],
        [
          504,
          104,
          119
        ],
        [
          503,
          105,
          109
        ],
        [
          504,
          106,
          111
        ],
        [
          504,
          106,
          112
        ],
        [
          504,
          106,
          119
        ],
        [
          501,
          107,
          112
        ],
        [
          505,
          108,
          110
        ],
        [
          505,
          108,
          115
        ],
        [
          505,
          110,
          115
        ],
        [
          504,
          111,
          112
        ],
        [
          504,
          111,
          119
        ],
        [
          504,
          112,
          119
        ],
        [
          506,
          114,
          115
        ],
        [
          506,
          114,
          116
        ],
        [
          506,
          114,
          120
        ],
        [
          506,
          115,
          116
        ],
        [
          506,
          115,
          120
        ],
        [
          506,
          116,
          120
        ]
      ],
      "rowCount": 26
    }
  },
  {
    "id": 236,
    "title": "Comprehensive Department and Status Matrix",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Strategic planning is generating an empty matrix grid of all theoretical combinations between corporate departments and project statuses. Generate all unique combinations of distinct department names and distinct project statuses.",
    "requirements": [
      "Generate the cartesian product of distinct department names and distinct project statuses.",
      "Display department name as `dept_name` and status aliased as `project_status`."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use a cross join between distinct department names and distinct project statuses.",
    "expectedSql": "SELECT d.dept_name, s.status AS project_status FROM (SELECT DISTINCT dept_name FROM Departments) d CROSS JOIN (SELECT DISTINCT status FROM Projects) s;",
    "explanation": "Cartesian product generates every possible combination of departments and project operational states.",
    "tags": [
      "joins",
      "cross-join",
      "cartesian"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "project_status"
      ],
      "values": [
        [
          "Finance",
          "Active"
        ],
        [
          "Finance",
          "Completed"
        ],
        [
          "Finance",
          "Planning"
        ],
        [
          "HR",
          "Active"
        ],
        [
          "HR",
          "Completed"
        ],
        [
          "HR",
          "Planning"
        ],
        [
          "IT",
          "Active"
        ],
        [
          "IT",
          "Completed"
        ],
        [
          "IT",
          "Planning"
        ],
        [
          "Legal",
          "Active"
        ],
        [
          "Legal",
          "Completed"
        ],
        [
          "Legal",
          "Planning"
        ],
        [
          "Marketing",
          "Active"
        ],
        [
          "Marketing",
          "Completed"
        ],
        [
          "Marketing",
          "Planning"
        ],
        [
          "Operations",
          "Active"
        ],
        [
          "Operations",
          "Completed"
        ],
        [
          "Operations",
          "Planning"
        ],
        [
          "R&D",
          "Active"
        ],
        [
          "R&D",
          "Completed"
        ],
        [
          "R&D",
          "Planning"
        ],
        [
          "Sales",
          "Active"
        ],
        [
          "Sales",
          "Completed"
        ],
        [
          "Sales",
          "Planning"
        ]
      ],
      "rowCount": 24
    }
  },
  {
    "id": 237,
    "title": "Branch City and Division Operational Grid",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Facilities planning is evaluating the potential expansion of any department into any existing city. Generate all possible combinations between distinct office branch cities and distinct corporate department names.",
    "requirements": [
      "Generate the cartesian product of unique cities from Employees and unique department names from Departments.",
      "Display `city` and `dept_name`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Cross join distinct cities with distinct department names.",
    "expectedSql": "SELECT c.city, d.dept_name FROM (SELECT DISTINCT city FROM Employees) c CROSS JOIN (SELECT DISTINCT dept_name FROM Departments) d;",
    "explanation": "Creates an expansion matrix to audit departmental presence across all office locations.",
    "tags": [
      "joins",
      "cross-join",
      "matrix"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "city",
        "dept_name"
      ],
      "values": [
        [
          "Hyderabad",
          "Finance"
        ],
        [
          "Hyderabad",
          "HR"
        ],
        [
          "Hyderabad",
          "IT"
        ],
        [
          "Hyderabad",
          "Legal"
        ],
        [
          "Hyderabad",
          "Marketing"
        ],
        [
          "Hyderabad",
          "Operations"
        ],
        [
          "Hyderabad",
          "R&D"
        ],
        [
          "Hyderabad",
          "Sales"
        ],
        [
          "Vijayawada",
          "Finance"
        ],
        [
          "Vijayawada",
          "HR"
        ],
        [
          "Vijayawada",
          "IT"
        ],
        [
          "Vijayawada",
          "Legal"
        ],
        [
          "Vijayawada",
          "Marketing"
        ],
        [
          "Vijayawada",
          "Operations"
        ],
        [
          "Vijayawada",
          "R&D"
        ],
        [
          "Vijayawada",
          "Sales"
        ],
        [
          "Chennai",
          "Finance"
        ],
        [
          "Chennai",
          "HR"
        ],
        [
          "Chennai",
          "IT"
        ],
        [
          "Chennai",
          "Legal"
        ],
        [
          "Chennai",
          "Marketing"
        ],
        [
          "Chennai",
          "Operations"
        ],
        [
          "Chennai",
          "R&D"
        ],
        [
          "Chennai",
          "Sales"
        ],
        [
          "Bengaluru",
          "Finance"
        ],
        [
          "Bengaluru",
          "HR"
        ],
        [
          "Bengaluru",
          "IT"
        ],
        [
          "Bengaluru",
          "Legal"
        ],
        [
          "Bengaluru",
          "Marketing"
        ],
        [
          "Bengaluru",
          "Operations"
        ],
        [
          "Bengaluru",
          "R&D"
        ],
        [
          "Bengaluru",
          "Sales"
        ]
      ],
      "rowCount": 32
    }
  },
  {
    "id": 238,
    "title": "Employee Salary Variance Relative to Company Average",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Hard",
    "problemStatement": "Compensation benchmarking requires measuring each employee's salary against the organization-wide average. Display each employee's name, monthly salary, overall average salary across all employees (rounded to 2 decimal places as `avg_sal`), and the difference (salary minus average salary) aliased as `salary_diff`.",
    "requirements": [
      "Cross join Employees with a scalar aggregate subquery computing overall average salary rounded to 2 decimal places.",
      "Display `emp_name`, `salary`, `avg_sal`, and computed difference aliased as `salary_diff`."
    ],
    "tableName": "Employees",
    "hint": "Cross join Employees with (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees).",
    "expectedSql": "SELECT e.emp_name, e.salary, a.avg_sal, (e.salary - a.avg_sal) AS salary_diff FROM Employees e CROSS JOIN (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees) a;",
    "explanation": "A single-row subquery CROSS JOIN appends overall benchmark statistics to every individual row without GROUP BY restrictions.",
    "tags": [
      "joins",
      "cross-join",
      "benchmark",
      "scalars"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary",
        "avg_sal",
        "salary_diff"
      ],
      "values": [
        [
          "Anil",
          25000,
          51100,
          -26100
        ],
        [
          "Bhumika",
          40000,
          51100,
          -11100
        ],
        [
          "Chetan",
          55000,
          51100,
          3900
        ],
        [
          "Dhruv",
          65000,
          51100,
          13900
        ],
        [
          "Farah",
          32000,
          51100,
          -19100
        ],
        [
          "Girish",
          80000,
          51100,
          28900
        ],
        [
          "Harsha",
          45000,
          51100,
          -6100
        ],
        [
          "Isha",
          28000,
          51100,
          -23100
        ],
        [
          "Kiran",
          70000,
          51100,
          18900
        ],
        [
          "Meena",
          60000,
          51100,
          8900
        ],
        [
          "Naveen",
          35000,
          51100,
          -16100
        ],
        [
          "Priya",
          75000,
          51100,
          23900
        ],
        [
          "Rahul",
          30000,
          51100,
          -21100
        ],
        [
          "Sneha",
          48000,
          51100,
          -3100
        ],
        [
          "Varun",
          68000,
          51100,
          16900
        ],
        [
          "Divya",
          42000,
          51100,
          -9100
        ],
        [
          "Manoj",
          52000,
          51100,
          900
        ],
        [
          "Pooja",
          27000,
          51100,
          -24100
        ],
        [
          "Arjun",
          90000,
          51100,
          38900
        ],
        [
          "Keerthi",
          55000,
          51100,
          3900
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 239,
    "title": "Project Share of Total Portfolio Budget",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Hard",
    "problemStatement": "Capital governance evaluates the proportional size of each project relative to total corporate investment. For each initiative, display the project name, project budget, and the percentage of the total portfolio budget it represents (rounded to 2 decimal places, aliased as `budget_pct`).",
    "requirements": [
      "Cross join Projects with a scalar aggregate subquery calculating total portfolio budget.",
      "Calculate percentage share as `(p.budget * 100.0) / total_budget`, rounded to 2 decimal places, aliased as `budget_pct`.",
      "Display `project_name`, `budget`, and `budget_pct`."
    ],
    "tableName": "Projects",
    "hint": "Cross join Projects with (SELECT SUM(budget) AS total_budget FROM Projects).",
    "expectedSql": "SELECT p.project_name, p.budget, ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct FROM Projects p CROSS JOIN (SELECT SUM(budget) AS total_budget FROM Projects) t;",
    "explanation": "Allows calculating percentage share of a whole by appending aggregate portfolio capital across all records.",
    "tags": [
      "joins",
      "cross-join",
      "percentage",
      "ratios"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_name",
        "budget",
        "budget_pct"
      ],
      "values": [
        [
          "Cloud Migration",
          250000,
          11.85
        ],
        [
          "ERP Modernization",
          400000,
          18.96
        ],
        [
          "Global Talent Acquisition",
          120000,
          5.69
        ],
        [
          "Financial Audit Automation",
          300000,
          14.22
        ],
        [
          "Brand Revamp 2025",
          180000,
          8.53
        ],
        [
          "CRM Sales Pipeline",
          220000,
          10.43
        ],
        [
          "Compliance Automation",
          90000,
          4.27
        ],
        [
          "NextGen AI Suite",
          550000,
          26.07
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 240,
    "title": "Department and Evaluation Rating Matrix",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is setting up appraisal distribution tables across departments. Generate a grid showing all combinations of distinct department names and all distinct rating values (1 through 5) present in the reviews table.",
    "requirements": [
      "Generate the cartesian product of distinct department names and distinct rating values.",
      "Display department name as `dept_name` and rating value aliased as `rating_slot`."
    ],
    "tableName": "Departments, Performance_Reviews",
    "hint": "Cross join distinct department names from Departments with distinct ratings from Performance_Reviews.",
    "expectedSql": "SELECT d.dept_name, r.rating_slot FROM (SELECT DISTINCT dept_name FROM Departments) d CROSS JOIN (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews) r;",
    "explanation": "Generates template matrices to report rating distributions across all corporate divisions.",
    "tags": [
      "joins",
      "cross-join",
      "ratings"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "rating_slot"
      ],
      "values": [
        [
          "Finance",
          4
        ],
        [
          "Finance",
          5
        ],
        [
          "Finance",
          3
        ],
        [
          "Finance",
          2
        ],
        [
          "HR",
          4
        ],
        [
          "HR",
          5
        ],
        [
          "HR",
          3
        ],
        [
          "HR",
          2
        ],
        [
          "IT",
          4
        ],
        [
          "IT",
          5
        ],
        [
          "IT",
          3
        ],
        [
          "IT",
          2
        ],
        [
          "Legal",
          4
        ],
        [
          "Legal",
          5
        ],
        [
          "Legal",
          3
        ],
        [
          "Legal",
          2
        ],
        [
          "Marketing",
          4
        ],
        [
          "Marketing",
          5
        ],
        [
          "Marketing",
          3
        ],
        [
          "Marketing",
          2
        ],
        [
          "Operations",
          4
        ],
        [
          "Operations",
          5
        ],
        [
          "Operations",
          3
        ],
        [
          "Operations",
          2
        ],
        [
          "R&D",
          4
        ],
        [
          "R&D",
          5
        ],
        [
          "R&D",
          3
        ],
        [
          "R&D",
          2
        ],
        [
          "Sales",
          4
        ],
        [
          "Sales",
          5
        ],
        [
          "Sales",
          3
        ],
        [
          "Sales",
          2
        ]
      ],
      "rowCount": 32
    }
  },
  {
    "id": 241,
    "title": "Departmental Headcount and Payroll vs Budget",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Corporate finance is comparing departmental wage bills against allocated operating budgets. For each department, calculate the total active employee count and cumulative monthly payroll, displaying the department name, headcount, payroll, and departmental budget.",
    "requirements": [
      "Join Departments and Employees on matching department name.",
      "Group records by department name and budget.",
      "Calculate employee count aliased as `emp_count` and total payroll aliased as `total_payroll`.",
      "Display `dept_name`, `emp_count`, `total_payroll`, and `budget`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Join Departments and Employees on department name, group by dept_name and budget, and aggregate.",
    "expectedSql": "SELECT d.dept_name, COUNT(e.emp_id) AS emp_count, SUM(e.salary) AS total_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget;",
    "explanation": "Aggregates employee counts and salary totals while reporting departmental operating budgets.",
    "tags": [
      "joins",
      "aggregates",
      "group-by",
      "payroll"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "emp_count",
        "total_payroll",
        "budget"
      ],
      "values": [
        [
          "Finance",
          4,
          270000,
          1500000
        ],
        [
          "HR",
          4,
          169000,
          500000
        ],
        [
          "IT",
          5,
          252000,
          1200000
        ],
        [
          "Marketing",
          3,
          156000,
          800000
        ],
        [
          "Sales",
          4,
          175000,
          950000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 242,
    "title": "Initiative Staffing Roster and Weekly Workload Summary",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "The PMO is reporting resource utilization for each project initiative. For each project in Projects that has assigned personnel, display the project name, execution status, total assigned headcount, and cumulative weekly hours allocated.",
    "requirements": [
      "Join Projects and Employee_Projects on project ID.",
      "Group by project ID, project name, and status.",
      "Count assigned staff aliased as `assigned_staff` and sum weekly hours aliased as `total_weekly_hours`.",
      "Display `project_name`, `status`, `assigned_staff`, and `total_weekly_hours`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Join Projects to Employee_Projects on project_id and group by project attributes.",
    "expectedSql": "SELECT p.project_name, p.status, COUNT(ep.emp_id) AS assigned_staff, SUM(ep.hours_allocated) AS total_weekly_hours FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status;",
    "explanation": "Aggregates project staff counts and weekly labor hours by project.",
    "tags": [
      "joins",
      "aggregates",
      "workload"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_name",
        "status",
        "assigned_staff",
        "total_weekly_hours"
      ],
      "values": [
        [
          "Cloud Migration",
          "Active",
          3,
          100
        ],
        [
          "ERP Modernization",
          "Completed",
          2,
          45
        ],
        [
          "Global Talent Acquisition",
          "Active",
          3,
          85
        ],
        [
          "Financial Audit Automation",
          "Active",
          5,
          110
        ],
        [
          "Brand Revamp 2025",
          "Active",
          3,
          85
        ],
        [
          "CRM Sales Pipeline",
          "Completed",
          4,
          110
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 243,
    "title": "Departmental Project Investment and Portfolio Count",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Strategic planning is aggregating capital project sponsorship per department. For each department sponsoring projects, display the department name, count of projects sponsored, and cumulative capital budget committed.",
    "requirements": [
      "Join Departments and Projects on department ID (`dept_id`).",
      "Group records by department name.",
      "Count projects aliased as `projects_count` and sum budgets aliased as `total_project_budget`.",
      "Display `dept_name`, `projects_count`, and `total_project_budget`."
    ],
    "tableName": "Departments, Projects",
    "hint": "Join Departments and Projects on dept_id, group by dept_name, and aggregate.",
    "expectedSql": "SELECT d.dept_name, COUNT(p.project_id) AS projects_count, SUM(p.budget) AS total_project_budget FROM Departments d INNER JOIN Projects p ON d.dept_id = p.dept_id GROUP BY d.dept_name;",
    "explanation": "Summarizes departmental project portfolios and total budget commitments.",
    "tags": [
      "joins",
      "aggregates",
      "budget"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "projects_count",
        "total_project_budget"
      ],
      "values": [
        [
          "Finance",
          1,
          300000
        ],
        [
          "HR",
          1,
          120000
        ],
        [
          "IT",
          2,
          650000
        ],
        [
          "Legal",
          1,
          90000
        ],
        [
          "Marketing",
          1,
          180000
        ],
        [
          "R&D",
          1,
          550000
        ],
        [
          "Sales",
          1,
          220000
        ]
      ],
      "rowCount": 7
    }
  },
  {
    "id": 244,
    "title": "Heavy Cross-Project Workload Contributors",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Resource governance is identifying employees whose cumulative project workload exceeds full-time capacity. Find all employees whose total weekly allocated hours across all projects strictly exceed 30, displaying employee ID, name, department, and total weekly hours.",
    "requirements": [
      "Join Employees and Employee_Projects on employee ID.",
      "Group by employee ID, name, and department.",
      "Sum allocated weekly hours aliased as `total_weekly_hours`.",
      "Filter groups where cumulative hours strictly exceed 30.",
      "Display `emp_id`, `emp_name`, `department`, and `total_weekly_hours`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Join on emp_id, group by employee attributes, and apply HAVING SUM(hours_allocated) > 30.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, SUM(ep.hours_allocated) AS total_weekly_hours FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name, e.department HAVING SUM(ep.hours_allocated) > 30;",
    "explanation": "Aggregates across junction table assignments and applies HAVING to highlight overloaded team members.",
    "tags": [
      "joins",
      "having",
      "workload"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "total_weekly_hours"
      ],
      "values": [
        [
          102,
          "Bhumika",
          "HR",
          35
        ],
        [
          103,
          "Chetan",
          "IT",
          50
        ],
        [
          104,
          "Dhruv",
          "Finance",
          35
        ],
        [
          107,
          "Harsha",
          "IT",
          40
        ],
        [
          108,
          "Isha",
          "Marketing",
          35
        ],
        [
          112,
          "Priya",
          "IT",
          40
        ],
        [
          114,
          "Sneha",
          "Sales",
          35
        ],
        [
          115,
          "Varun",
          "Marketing",
          40
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 245,
    "title": "Departmental Annual Payroll Burn Audit",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Finance leadership is auditing departmental payroll burn relative to annual operating budgets. For departments where annualized payroll (monthly payroll multiplied by 12) exceeds 50% of the departmental budget, display department name, annualized payroll (`annual_payroll`), and annual budget (`annual_budget`).",
    "requirements": [
      "Join Departments and Employees on department name.",
      "Group by department name and budget.",
      "Calculate annualized payroll as `SUM(e.salary) * 12` aliased as `annual_payroll`.",
      "Filter groups where annualized payroll exceeds 50% of department budget (`budget * 0.5`).",
      "Display `dept_name`, `annual_payroll`, and `annual_budget`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Group by dept_name and budget, and filter with HAVING (SUM(salary) * 12) > (budget * 0.5).",
    "expectedSql": "SELECT d.dept_name, (SUM(e.salary) * 12) AS annual_payroll, d.budget AS annual_budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING (SUM(e.salary) * 12) > (d.budget * 0.5);",
    "explanation": "Evaluates whether total annual payroll consumes more than 50% of the departmental operating budget.",
    "tags": [
      "joins",
      "having",
      "budget-burn",
      "finance"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "annual_payroll",
        "annual_budget"
      ],
      "values": [
        [
          "Finance",
          3240000,
          1500000
        ],
        [
          "HR",
          2028000,
          500000
        ],
        [
          "IT",
          3024000,
          1200000
        ],
        [
          "Marketing",
          1872000,
          800000
        ],
        [
          "Sales",
          2100000,
          950000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 246,
    "title": "Project Team Experience and Compensation Benchmarks",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Resource analytics evaluates talent seniority and cost per project. For each initiative, calculate the average years of experience (rounded to 1 decimal place) and average monthly salary (rounded to 2 decimal places) of all assigned team members, displaying project name, average experience, and average salary.",
    "requirements": [
      "Join Projects, Employee_Projects (on project_id), and Employees (on emp_id).",
      "Group by project ID and project name.",
      "Calculate average team experience rounded to 1 decimal place aliased as `avg_team_exp`.",
      "Calculate average team salary rounded to 2 decimal places aliased as `avg_team_salary`.",
      "Display `project_name`, `avg_team_exp`, and `avg_team_salary`."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "Join Projects to Employee_Projects and Employees, group by project_name, and compute averages.",
    "expectedSql": "SELECT p.project_name, ROUND(AVG(e.experience), 1) AS avg_team_exp, ROUND(AVG(e.salary), 2) AS avg_team_salary FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id INNER JOIN Employees e ON ep.emp_id = e.emp_id GROUP BY p.project_id, p.project_name;",
    "explanation": "Profiles project team seniority and compensation through multi-table joins.",
    "tags": [
      "joins",
      "aggregates",
      "team-composition"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_name",
        "avg_team_exp",
        "avg_team_salary"
      ],
      "values": [
        [
          "Cloud Migration",
          6,
          58333.33
        ],
        [
          "ERP Modernization",
          5.5,
          53500
        ],
        [
          "Global Talent Acquisition",
          4.3,
          47333.33
        ],
        [
          "Financial Audit Automation",
          8,
          69000
        ],
        [
          "Brand Revamp 2025",
          5,
          52000
        ],
        [
          "CRM Sales Pipeline",
          5,
          53250
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 247,
    "title": "Dual Engagement Audit: Projects Assigned and Reviews Received",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Human Resources is summarizing employee engagement in projects and appraisal cycles. For all employees, display employee name, count of distinct projects assigned (aliased as `projects_assigned`), and count of distinct reviews completed (aliased as `reviews_received`), preserving employees with zero in either category.",
    "requirements": [
      "Left join Employees with Employee_Projects (on emp_id) and Performance_Reviews (on emp_id).",
      "Group by employee ID and employee name.",
      "Count distinct projects aliased as `projects_assigned` and distinct reviews aliased as `reviews_received`.",
      "Display `emp_name`, `projects_assigned`, and `reviews_received`."
    ],
    "tableName": "Employees, Employee_Projects, Performance_Reviews",
    "hint": "Use left outer joins from Employees and apply COUNT(DISTINCT ...) for projects and reviews.",
    "expectedSql": "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS projects_assigned, COUNT(DISTINCT pr.review_id) AS reviews_received FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.emp_id, e.emp_name;",
    "explanation": "COUNT(DISTINCT) is essential when joining multiple one-to-many child tables to prevent inflated counts.",
    "tags": [
      "joins",
      "count-distinct",
      "fan-out-trap"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "projects_assigned",
        "reviews_received"
      ],
      "values": [
        [
          "Anil",
          0,
          0
        ],
        [
          "Bhumika",
          1,
          1
        ],
        [
          "Chetan",
          2,
          1
        ],
        [
          "Dhruv",
          1,
          1
        ],
        [
          "Farah",
          1,
          0
        ],
        [
          "Girish",
          1,
          2
        ],
        [
          "Harsha",
          1,
          1
        ],
        [
          "Isha",
          1,
          0
        ],
        [
          "Kiran",
          1,
          1
        ],
        [
          "Meena",
          1,
          1
        ],
        [
          "Naveen",
          1,
          1
        ],
        [
          "Priya",
          2,
          2
        ],
        [
          "Rahul",
          0,
          0
        ],
        [
          "Sneha",
          1,
          1
        ],
        [
          "Varun",
          2,
          1
        ],
        [
          "Divya",
          1,
          1
        ],
        [
          "Manoj",
          1,
          1
        ],
        [
          "Pooja",
          0,
          0
        ],
        [
          "Arjun",
          1,
          3
        ],
        [
          "Keerthi",
          1,
          0
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 248,
    "title": "Top Three Workload Contributors Across Initiatives",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Project operations is recognizing the three hardest-working contributors across all company initiatives. Find the 3 employees with the highest cumulative weekly hours committed to projects, displaying employee name, department, and total hours.",
    "requirements": [
      "Join Employees and Employee_Projects on employee ID.",
      "Group by employee ID, name, and department.",
      "Sum weekly hours aliased as `total_hours`.",
      "Order by total hours in descending order.",
      "Limit the result to the top 3 employees.",
      "Display `emp_name`, `department`, and `total_hours`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Join on emp_id, group by employee, sum hours, sort descending, and limit to 3.",
    "expectedSql": "SELECT e.emp_name, e.department, SUM(ep.hours_allocated) AS total_hours FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name, e.department ORDER BY total_hours DESC LIMIT 3;",
    "explanation": "Highlights top contributors by aggregated project commitments across the company.",
    "tags": [
      "joins",
      "order-by",
      "limit",
      "top-3"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "total_hours"
      ],
      "values": [
        [
          "Chetan",
          "IT",
          50
        ],
        [
          "Harsha",
          "IT",
          40
        ],
        [
          "Priya",
          "IT",
          40
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 249,
    "title": "Departmental Incentive Payout Pool Totals",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "The compensation committee is summarizing performance bonuses distributed by business unit. For each department with reviewed employees, display the department name, count of reviews completed, and cumulative bonus pool awarded.",
    "requirements": [
      "Join Employees and Performance_Reviews on employee ID.",
      "Group records by department name.",
      "Count reviews aliased as `reviewed_count` and sum awarded bonuses aliased as `total_department_bonuses`.",
      "Display `department`, `reviewed_count`, and `total_department_bonuses`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Join Employees and Performance_Reviews on emp_id, group by department, and aggregate.",
    "expectedSql": "SELECT e.department, COUNT(pr.review_id) AS reviewed_count, SUM(pr.bonus) AS total_department_bonuses FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.department;",
    "explanation": "Aggregates performance bonuses paid to employees by department.",
    "tags": [
      "joins",
      "bonus",
      "department-aggregates"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "reviewed_count",
        "total_department_bonuses"
      ],
      "values": [
        [
          "Finance",
          7,
          146000
        ],
        [
          "HR",
          2,
          24000
        ],
        [
          "IT",
          5,
          77000
        ],
        [
          "Marketing",
          2,
          31000
        ],
        [
          "Sales",
          2,
          19000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 250,
    "title": "Initiatives Staffed by Elite High-Rated Teams",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Executive governance tracks projects staffed by high-performing personnel. Identify initiatives where the assigned team members have an average performance rating of at least 4.0, displaying project name, distinct assigned staff count, and team average rating (rounded to 2 decimal places).",
    "requirements": [
      "Join Projects, Employee_Projects (on project_id), and Performance_Reviews (on emp_id).",
      "Group by project ID and project name.",
      "Count distinct assigned staff aliased as `staff_count`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_team_rating`.",
      "Filter groups where average rating is at least 4.0.",
      "Display `project_name`, `staff_count`, and `avg_team_rating`."
    ],
    "tableName": "Projects, Employee_Projects, Performance_Reviews",
    "hint": "Join the three tables, group by project, and filter with HAVING AVG(rating) >= 4.0.",
    "expectedSql": "SELECT p.project_name, COUNT(DISTINCT ep.emp_id) AS staff_count, ROUND(AVG(pr.rating), 2) AS avg_team_rating FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id INNER JOIN Performance_Reviews pr ON ep.emp_id = pr.emp_id GROUP BY p.project_id, p.project_name HAVING AVG(pr.rating) >= 4.0;",
    "explanation": "Assesses project staffing quality by filtering for initiatives where assigned team members hold elite appraisal scores.",
    "tags": [
      "joins",
      "having",
      "team-quality"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_name",
        "staff_count",
        "avg_team_rating"
      ],
      "values": [
        [
          "Cloud Migration",
          3,
          4
        ],
        [
          "Financial Audit Automation",
          5,
          4.33
        ],
        [
          "Brand Revamp 2025",
          2,
          4
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 251,
    "title": "Workforce Above-Average Compensation Filter",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "The executive compensation committee is identifying staff members whose base earnings surpass the company-wide average. Find all employees whose monthly salary strictly exceeds the overall average salary calculated across all employees in the organization.",
    "requirements": [
      "Dynamically compute the organization-wide average employee salary.",
      "Filter for employees whose salary strictly exceeds that calculated benchmark.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    "tableName": "Employees",
    "hint": "Compare each employee's salary against a scalar subquery calculating the overall average salary.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
    "explanation": "A scalar subquery evaluates to a single value, allowing dynamic comparisons against table-wide metrics.",
    "tags": [
      "subqueries",
      "scalar",
      "avg",
      "where"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          103,
          "Chetan",
          "IT",
          55000
        ],
        [
          104,
          "Dhruv",
          "Finance",
          65000
        ],
        [
          106,
          "Girish",
          "Finance",
          80000
        ],
        [
          109,
          "Kiran",
          "HR",
          70000
        ],
        [
          110,
          "Meena",
          "Marketing",
          60000
        ],
        [
          112,
          "Priya",
          "IT",
          75000
        ],
        [
          115,
          "Varun",
          "Marketing",
          68000
        ],
        [
          117,
          "Manoj",
          "IT",
          52000
        ],
        [
          119,
          "Arjun",
          "Finance",
          90000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 252,
    "title": "Above-Average Funded Capital Initiatives",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "The investment committee is auditing initiatives that receive greater funding than the standard portfolio baseline. Retrieve project ID, project name, and budget for all projects whose capital budget strictly exceeds the average budget across all corporate projects.",
    "requirements": [
      "Calculate the average budget across all projects in the portfolio.",
      "Filter for initiatives whose budget is strictly greater than this average.",
      "Display `project_id`, `project_name`, and `budget` from Projects."
    ],
    "tableName": "Projects",
    "hint": "Use a scalar subquery to find the portfolio mean budget and filter in the WHERE clause.",
    "expectedSql": "SELECT project_id, project_name, budget FROM Projects WHERE budget > (SELECT AVG(budget) FROM Projects);",
    "explanation": "Dynamically filters capital allocations against the calculated portfolio average.",
    "tags": [
      "subqueries",
      "scalar",
      "budget"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "budget"
      ],
      "values": [
        [
          502,
          "ERP Modernization",
          400000
        ],
        [
          504,
          "Financial Audit Automation",
          300000
        ],
        [
          508,
          "NextGen AI Suite",
          550000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 253,
    "title": "Organization Top Compensation Recipient",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Executive remuneration analysis is verifying the record for the single highest-paid employee in the company. Find the employee ID, name, department, and salary for the individual earning the maximum salary in the organization.",
    "requirements": [
      "Determine the highest salary value in the Employees table.",
      "Filter for the employee record that matches this peak compensation.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    "tableName": "Employees",
    "hint": "Filter for salary equal to a scalar subquery computing MAX(salary).",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary = (SELECT MAX(salary) FROM Employees);",
    "explanation": "Using a scalar MAX subquery accommodates ties without hardcoding compensation amounts.",
    "tags": [
      "subqueries",
      "scalar",
      "max"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          119,
          "Arjun",
          "Finance",
          90000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 254,
    "title": "Individual Compensation Compared to Company Mean",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Payroll reporting presents individual earnings alongside the corporate benchmark. For each employee, display their name, monthly salary, and a column showing the company-wide average salary rounded to 2 decimal places, aliased as `company_avg_salary`.",
    "requirements": [
      "Query the Employees table for `emp_name` and `salary`.",
      "Include a scalar subquery projecting the overall average salary rounded to 2 decimal places, aliased as `company_avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Place a scalar subquery calculating ROUND(AVG(salary), 2) directly in the SELECT list.",
    "expectedSql": "SELECT emp_name, salary, (SELECT ROUND(AVG(salary), 2) FROM Employees) AS company_avg_salary FROM Employees;",
    "explanation": "Scalar subqueries in SELECT broadcast a constant computed value across every projected record.",
    "tags": [
      "subqueries",
      "scalar-select",
      "projection"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary",
        "company_avg_salary"
      ],
      "values": [
        [
          "Anil",
          25000,
          51100
        ],
        [
          "Bhumika",
          40000,
          51100
        ],
        [
          "Chetan",
          55000,
          51100
        ],
        [
          "Dhruv",
          65000,
          51100
        ],
        [
          "Farah",
          32000,
          51100
        ],
        [
          "Girish",
          80000,
          51100
        ],
        [
          "Harsha",
          45000,
          51100
        ],
        [
          "Isha",
          28000,
          51100
        ],
        [
          "Kiran",
          70000,
          51100
        ],
        [
          "Meena",
          60000,
          51100
        ],
        [
          "Naveen",
          35000,
          51100
        ],
        [
          "Priya",
          75000,
          51100
        ],
        [
          "Rahul",
          30000,
          51100
        ],
        [
          "Sneha",
          48000,
          51100
        ],
        [
          "Varun",
          68000,
          51100
        ],
        [
          "Divya",
          42000,
          51100
        ],
        [
          "Manoj",
          52000,
          51100
        ],
        [
          "Pooja",
          27000,
          51100
        ],
        [
          "Arjun",
          90000,
          51100
        ],
        [
          "Keerthi",
          55000,
          51100
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 255,
    "title": "Capital Funding Gap from Peak Initiative",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Portfolio governance evaluates the funding disparity between each initiative and the flagship project. For each project, display the project name, project budget, and the deficit (maximum project budget minus this project's budget), aliased as `budget_gap`.",
    "requirements": [
      "Query the Projects table.",
      "Subtract each project's budget from the maximum budget in the portfolio.",
      "Alias the calculated funding deficit as `budget_gap`.",
      "Display `project_name`, `budget`, and `budget_gap`."
    ],
    "tableName": "Projects",
    "hint": "Subtract budget from a scalar subquery calculating MAX(budget) in the SELECT list.",
    "expectedSql": "SELECT project_name, budget, ((SELECT MAX(budget) FROM Projects) - budget) AS budget_gap FROM Projects;",
    "explanation": "Performs arithmetic against a scalar subquery to calculate variance from the top benchmark.",
    "tags": [
      "subqueries",
      "arithmetic",
      "scalar"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_name",
        "budget",
        "budget_gap"
      ],
      "values": [
        [
          "Cloud Migration",
          250000,
          300000
        ],
        [
          "ERP Modernization",
          400000,
          150000
        ],
        [
          "Global Talent Acquisition",
          120000,
          430000
        ],
        [
          "Financial Audit Automation",
          300000,
          250000
        ],
        [
          "Brand Revamp 2025",
          180000,
          370000
        ],
        [
          "CRM Sales Pipeline",
          220000,
          330000
        ],
        [
          "Compliance Automation",
          90000,
          460000
        ],
        [
          "NextGen AI Suite",
          550000,
          0
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 256,
    "title": "Performance Appraisals with Above-Average Bonuses",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "The compensation committee is reviewing standout appraisal incentives. Retrieve review ID, employee ID, rating, and bonus for all performance reviews where the awarded bonus strictly exceeds the average bonus across all reviews.",
    "requirements": [
      "Calculate the average bonus across all performance evaluations.",
      "Filter for reviews where the awarded bonus strictly exceeds that average.",
      "Display `review_id`, `emp_id`, `rating`, and `bonus` from Performance_Reviews."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter where bonus is greater than a scalar subquery computing AVG(bonus).",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus > (SELECT AVG(bonus) FROM Performance_Reviews);",
    "explanation": "Filters reviews using the dynamically calculated mean bonus award.",
    "tags": [
      "subqueries",
      "scalar",
      "reviews",
      "bonus"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "bonus"
      ],
      "values": [
        [
          2,
          104,
          4,
          18000
        ],
        [
          3,
          106,
          4,
          20000
        ],
        [
          4,
          106,
          5,
          25000
        ],
        [
          6,
          109,
          4,
          18000
        ],
        [
          9,
          112,
          4,
          20000
        ],
        [
          10,
          112,
          5,
          25000
        ],
        [
          15,
          119,
          5,
          25000
        ],
        [
          16,
          119,
          5,
          28000
        ],
        [
          17,
          119,
          5,
          30000
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 257,
    "title": "Staff Earning Above the IT Department Benchmark",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Medium",
    "problemStatement": "Workforce analytics is comparing compensation against the technology division baseline. Find all employees across the entire company whose salary strictly exceeds the average salary of employees in the IT department.",
    "requirements": [
      "Calculate the average salary specifically for the 'IT' department.",
      "Filter employees whose salary strictly exceeds that IT departmental benchmark.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    "tableName": "Employees",
    "hint": "Compare salary against a subquery calculating AVG(salary) WHERE department = 'IT'.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees WHERE department = 'IT');",
    "explanation": "Compares individual salaries from any department against the specific average of the IT team.",
    "tags": [
      "subqueries",
      "scalar",
      "department-benchmark"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          103,
          "Chetan",
          "IT",
          55000
        ],
        [
          104,
          "Dhruv",
          "Finance",
          65000
        ],
        [
          106,
          "Girish",
          "Finance",
          80000
        ],
        [
          109,
          "Kiran",
          "HR",
          70000
        ],
        [
          110,
          "Meena",
          "Marketing",
          60000
        ],
        [
          112,
          "Priya",
          "IT",
          75000
        ],
        [
          115,
          "Varun",
          "Marketing",
          68000
        ],
        [
          117,
          "Manoj",
          "IT",
          52000
        ],
        [
          119,
          "Arjun",
          "Finance",
          90000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 258,
    "title": "Divisions Endowed with Above-Average Budgets",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Corporate treasury is reviewing high-budget operational divisions. Retrieve the department ID, department name, location, and budget for all departments whose operating budget strictly exceeds the average budget across all corporate departments.",
    "requirements": [
      "Compute the average operating budget across all departments.",
      "Filter for departments whose budget exceeds this calculated average.",
      "Display `dept_id`, `dept_name`, `location`, and `budget` from Departments."
    ],
    "tableName": "Departments",
    "hint": "Filter where budget is greater than a subquery computing AVG(budget) from Departments.",
    "expectedSql": "SELECT dept_id, dept_name, location, budget FROM Departments WHERE budget > (SELECT AVG(budget) FROM Departments);",
    "explanation": "Filters departmental units based on the enterprise-wide average budget.",
    "tags": [
      "subqueries",
      "scalar",
      "departments"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "location",
        "budget"
      ],
      "values": [
        [
          1,
          "IT",
          "Bengaluru",
          1200000
        ],
        [
          3,
          "Finance",
          "Hyderabad",
          1500000
        ],
        [
          8,
          "R&D",
          "Bengaluru",
          1800000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 259,
    "title": "Workforce Entry-Level Seniority Cohort",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Talent development is identifying entry-level personnel with the lowest tenure recorded in the enterprise. Retrieve employee ID, name, department, and years of experience for all employees whose experience equals the minimum experience found in the company.",
    "requirements": [
      "Determine the minimum years of experience across all employees.",
      "Filter for staff members matching this baseline tenure.",
      "Display `emp_id`, `emp_name`, `department`, and `experience` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Filter where experience equals a subquery computing MIN(experience).",
    "expectedSql": "SELECT emp_id, emp_name, department, experience FROM Employees WHERE experience = (SELECT MIN(experience) FROM Employees);",
    "explanation": "Locates all staff holding the floor tenure value.",
    "tags": [
      "subqueries",
      "scalar",
      "min"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "experience"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT",
          1
        ],
        [
          108,
          "Isha",
          "Marketing",
          1
        ],
        [
          118,
          "Pooja",
          "HR",
          1
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 260,
    "title": "Initiatives Launched Prior to Cloud Migration Kickoff",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Medium",
    "problemStatement": "Project portfolio managers are sequencing initiatives launched prior to a flagship program. Retrieve project ID, name, department ID, and start date for all corporate initiatives that commenced strictly before the start date of the 'Cloud Migration' project.",
    "requirements": [
      "Determine the start date of the project named 'Cloud Migration'.",
      "Filter for projects whose start date is strictly earlier than that milestone date.",
      "Display `project_id`, `project_name`, `dept_id`, and `start_date` from Projects."
    ],
    "tableName": "Projects",
    "hint": "Compare start_date with a subquery selecting start_date WHERE project_name = 'Cloud Migration'.",
    "expectedSql": "SELECT project_id, project_name, dept_id, start_date FROM Projects WHERE start_date < (SELECT start_date FROM Projects WHERE project_name = 'Cloud Migration');",
    "explanation": "Evaluates dates against a scalar start date retrieved dynamically for a specific project.",
    "tags": [
      "subqueries",
      "scalar",
      "dates"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "dept_id",
        "start_date"
      ],
      "values": [
        [
          502,
          "ERP Modernization",
          1,
          "2023-06-01"
        ],
        [
          506,
          "CRM Sales Pipeline",
          5,
          "2023-09-01"
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 261,
    "title": "Personnel in Bengaluru-Headquartered Divisions",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Facilities is identifying staff attached to divisions based in the Bengaluru regional office. Find the employee ID, name, and department for employees whose department is headquartered in Bengaluru.",
    "requirements": [
      "Identify the list of department names located in 'Bengaluru' from Departments.",
      "Filter employees whose department belongs to that list.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use the IN operator matching department against a subquery of department names in Bengaluru.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees WHERE department IN (SELECT dept_name FROM Departments WHERE location = 'Bengaluru');",
    "explanation": "IN matches the outer column against the list of values returned by the multi-row subquery.",
    "tags": [
      "subqueries",
      "in",
      "multi-row"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT"
        ],
        [
          102,
          "Bhumika",
          "HR"
        ],
        [
          103,
          "Chetan",
          "IT"
        ],
        [
          105,
          "Farah",
          "HR"
        ],
        [
          107,
          "Harsha",
          "IT"
        ],
        [
          109,
          "Kiran",
          "HR"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          117,
          "Manoj",
          "IT"
        ],
        [
          118,
          "Pooja",
          "HR"
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 262,
    "title": "Personnel Deployed to Active Initiatives",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Resource governance is tracking staff actively committed to in-progress initiatives. Retrieve employee ID, name, and department for all employees who are assigned to at least one project marked as 'Active'.",
    "requirements": [
      "Identify employee IDs assigned to projects whose status is 'Active'.",
      "Filter employees whose ID matches that list.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Use IN with a subquery joining Employee_Projects and Projects on project_id WHERE status = 'Active'.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active');",
    "explanation": "Filters outer employees against a subquery joining the project assignment and status relations.",
    "tags": [
      "subqueries",
      "in",
      "projects",
      "status"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          102,
          "Bhumika",
          "HR"
        ],
        [
          103,
          "Chetan",
          "IT"
        ],
        [
          104,
          "Dhruv",
          "Finance"
        ],
        [
          105,
          "Farah",
          "HR"
        ],
        [
          106,
          "Girish",
          "Finance"
        ],
        [
          107,
          "Harsha",
          "IT"
        ],
        [
          108,
          "Isha",
          "Marketing"
        ],
        [
          109,
          "Kiran",
          "HR"
        ],
        [
          110,
          "Meena",
          "Marketing"
        ],
        [
          111,
          "Naveen",
          "Finance"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          115,
          "Varun",
          "Marketing"
        ],
        [
          119,
          "Arjun",
          "Finance"
        ]
      ],
      "rowCount": 13
    }
  },
  {
    "id": 263,
    "title": "Personnel Lacking Performance Appraisals",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Human Resources is identifying employees who have never completed an annual performance appraisal. Find the employee ID, name, department, and salary for all employees who do not appear in the performance reviews table.",
    "requirements": [
      "Identify the set of employee IDs present in Performance_Reviews.",
      "Filter for employees whose ID does not appear in that set.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use the NOT IN operator with a subquery selecting emp_id from Performance_Reviews.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE emp_id NOT IN (SELECT emp_id FROM Performance_Reviews);",
    "explanation": "NOT IN identifies records absent from the target set, isolating unreviewed personnel.",
    "tags": [
      "subqueries",
      "not-in",
      "exclusion"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT",
          25000
        ],
        [
          105,
          "Farah",
          "HR",
          32000
        ],
        [
          108,
          "Isha",
          "Marketing",
          28000
        ],
        [
          113,
          "Rahul",
          "Sales",
          30000
        ],
        [
          118,
          "Pooja",
          "HR",
          27000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 264,
    "title": "Initiatives Operating with Zero Assigned Staff",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "The PMO is identifying projects that currently lack assigned human resources. Retrieve project ID, name, and status for all initiatives in Projects that have zero assignment records in Employee_Projects.",
    "requirements": [
      "Retrieve all project IDs from Employee_Projects.",
      "Filter for projects in Projects whose ID is not in that list.",
      "Display `project_id`, `project_name`, and `status`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use NOT IN with a subquery selecting project_id from Employee_Projects.",
    "expectedSql": "SELECT project_id, project_name, status FROM Projects WHERE project_id NOT IN (SELECT project_id FROM Employee_Projects);",
    "explanation": "Surfaces unstaffed initiatives by excluding any project ID present in the junction table.",
    "tags": [
      "subqueries",
      "not-in",
      "projects"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status"
      ],
      "values": [
        [
          507,
          "Compliance Automation",
          "Planning"
        ],
        [
          508,
          "NextGen AI Suite",
          "Planning"
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 265,
    "title": "Personnel Achieving Top-Tier Performance Ratings",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Executive management is recognizing staff who have demonstrated top performance. Find employee ID, name, and department for all employees who have achieved a rating of 5 in at least one performance evaluation.",
    "requirements": [
      "Select employee IDs from Performance_Reviews that received a rating of 5.",
      "Filter for employees whose ID appears in that high-rating cohort.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use IN with a subquery selecting emp_id from Performance_Reviews WHERE rating = 5.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5);",
    "explanation": "Filters outer employees matching the set of high-performing review recipients.",
    "tags": [
      "subqueries",
      "in",
      "ratings"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          106,
          "Girish",
          "Finance"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          119,
          "Arjun",
          "Finance"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 266,
    "title": "Divisions Currently Lacking Assigned Personnel",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Organization design is identifying registered corporate departments that have zero active staff. Display department ID, department name, and location for all departments that do not match any employee's department in the Employees table.",
    "requirements": [
      "Identify distinct non-null department names assigned to employees.",
      "Filter for departments in Departments whose name does not appear in that list.",
      "Display `dept_id`, `dept_name`, and `location`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use NOT IN with a subquery selecting department from Employees WHERE department IS NOT NULL.",
    "expectedSql": "SELECT dept_id, dept_name, location FROM Departments WHERE dept_name NOT IN (SELECT department FROM Employees WHERE department IS NOT NULL);",
    "explanation": "Filtering out NULL in the NOT IN subquery is a critical best practice to avoid empty result sets in SQL.",
    "tags": [
      "subqueries",
      "not-in",
      "null-trap"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "location"
      ],
      "values": [
        [
          6,
          "Legal",
          "Hyderabad"
        ],
        [
          7,
          "Operations",
          "Chennai"
        ],
        [
          8,
          "R&D",
          "Bengaluru"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 267,
    "title": "Personnel Assigned to High-Budget Initiatives",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Resource governance is tracking talent assigned to major capital initiatives. Display employee ID, name, and monthly salary for all staff members assigned to projects with a capital budget of at least 300,000.",
    "requirements": [
      "Identify employee IDs assigned to projects with a budget of 300,000 or greater.",
      "Filter employees whose ID matches that list.",
      "Display `emp_id`, `emp_name`, and `salary` from Employees."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Use IN with a subquery joining Employee_Projects and Projects WHERE p.budget >= 300000.",
    "expectedSql": "SELECT emp_id, emp_name, salary FROM Employees WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget >= 300000);",
    "explanation": "Links staff members to large-budget initiatives via a multi-row subquery.",
    "tags": [
      "subqueries",
      "in",
      "budget"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "salary"
      ],
      "values": [
        [
          103,
          "Chetan",
          55000
        ],
        [
          104,
          "Dhruv",
          65000
        ],
        [
          106,
          "Girish",
          80000
        ],
        [
          111,
          "Naveen",
          35000
        ],
        [
          112,
          "Priya",
          75000
        ],
        [
          117,
          "Manoj",
          52000
        ],
        [
          119,
          "Arjun",
          90000
        ]
      ],
      "rowCount": 7
    }
  },
  {
    "id": 268,
    "title": "Initiatives Staffed by Senior High Earners",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Project operations is identifying projects that utilize high-earning senior talent. Retrieve project ID, name, and status for all initiatives that have at least one assigned team member earning strictly more than 70,000.",
    "requirements": [
      "Identify project IDs staffed by employees whose monthly salary exceeds 70,000.",
      "Filter for projects whose ID appears in that set.",
      "Display `project_id`, `project_name`, and `status` from Projects."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "Use IN with a subquery joining Employee_Projects and Employees WHERE e.salary > 70000.",
    "expectedSql": "SELECT project_id, project_name, status FROM Projects WHERE project_id IN (SELECT ep.project_id FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE e.salary > 70000);",
    "explanation": "Identifies projects that leverage senior highly compensated specialists.",
    "tags": [
      "subqueries",
      "in",
      "talent"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          "Active"
        ],
        [
          504,
          "Financial Audit Automation",
          "Active"
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 269,
    "title": "Unstaffed Employees via Set Exclusion",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Resource management is identifying employees who currently have zero project assignments. Find employee ID, name, and department for all employees whose employee ID does not appear in Employee_Projects.",
    "requirements": [
      "Retrieve all employee IDs assigned in Employee_Projects.",
      "Filter for employees whose ID is excluded from that list.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use NOT IN with a subquery selecting emp_id from Employee_Projects.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id NOT IN (SELECT emp_id FROM Employee_Projects);",
    "explanation": "Filters the employee workforce for individuals currently unassigned to any initiative.",
    "tags": [
      "subqueries",
      "not-in",
      "unassigned"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT"
        ],
        [
          113,
          "Rahul",
          "Sales"
        ],
        [
          118,
          "Pooja",
          "HR"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 270,
    "title": "Departments Without Any Active Initiatives",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Strategic planning is auditing divisions that currently sponsor zero active projects. Display department ID, department name, and location for all departments that have no projects with an 'Active' status.",
    "requirements": [
      "Select non-null department IDs from Projects where `status = 'Active'`.",
      "Filter Departments for department IDs not in that active list.",
      "Display `dept_id`, `dept_name`, and `location`."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use NOT IN with a subquery selecting dept_id from Projects WHERE status = 'Active' AND dept_id IS NOT NULL.",
    "expectedSql": "SELECT dept_id, dept_name, location FROM Departments WHERE dept_id NOT IN (SELECT dept_id FROM Projects WHERE status = 'Active' AND dept_id IS NOT NULL);",
    "explanation": "Isolates departments that lack ongoing operational project streams.",
    "tags": [
      "subqueries",
      "not-in",
      "status"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "location"
      ],
      "values": [
        [
          5,
          "Sales",
          "Hyderabad"
        ],
        [
          6,
          "Legal",
          "Hyderabad"
        ],
        [
          7,
          "Operations",
          "Chennai"
        ],
        [
          8,
          "R&D",
          "Bengaluru"
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 271,
    "title": "Assigned Staff Verification via Correlated Existence",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Resource management is verifying staff engagement using existence tests. For each employee, verify whether at least one assignment record exists in Employee_Projects, displaying employee ID, name, and department for all assigned personnel.",
    "requirements": [
      "Test for the existence of matching assignments in Employee_Projects for each employee.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use the correlated EXISTS operator matching on employee ID.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id);",
    "explanation": "EXISTS tests for the presence of at least one matching row in the correlated subquery, short-circuiting on the first match.",
    "tags": [
      "subqueries",
      "correlated",
      "exists"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          102,
          "Bhumika",
          "HR"
        ],
        [
          103,
          "Chetan",
          "IT"
        ],
        [
          104,
          "Dhruv",
          "Finance"
        ],
        [
          105,
          "Farah",
          "HR"
        ],
        [
          106,
          "Girish",
          "Finance"
        ],
        [
          107,
          "Harsha",
          "IT"
        ],
        [
          108,
          "Isha",
          "Marketing"
        ],
        [
          109,
          "Kiran",
          "HR"
        ],
        [
          110,
          "Meena",
          "Marketing"
        ],
        [
          111,
          "Naveen",
          "Finance"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          114,
          "Sneha",
          "Sales"
        ],
        [
          115,
          "Varun",
          "Marketing"
        ],
        [
          116,
          "Divya",
          "Sales"
        ],
        [
          117,
          "Manoj",
          "IT"
        ],
        [
          119,
          "Arjun",
          "Finance"
        ],
        [
          120,
          "Keerthi",
          "Sales"
        ]
      ],
      "rowCount": 17
    }
  },
  {
    "id": 272,
    "title": "Unassigned Personnel via Correlated Non-Existence",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Operations is finding unassigned talent using non-existence checks. For each employee, verify that no corresponding record exists in Employee_Projects, displaying employee ID, name, and department for unallocated staff.",
    "requirements": [
      "Test for the non-existence of matching assignment records in Employee_Projects.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use the correlated NOT EXISTS operator matching on employee ID.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id);",
    "explanation": "NOT EXISTS evaluates to true when the correlated subquery returns zero rows, robustly handling NULL values.",
    "tags": [
      "subqueries",
      "correlated",
      "not-exists"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT"
        ],
        [
          113,
          "Rahul",
          "Sales"
        ],
        [
          118,
          "Pooja",
          "HR"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 273,
    "title": "Divisions Sponsoring Active Programs via Correlated Existence",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Corporate governance is confirming which departments currently sponsor active initiatives. Display department ID, department name, and budget for all departments where there exists at least one project marked as 'Active' linked to that department.",
    "requirements": [
      "Verify the existence of an active project linked to each department's ID.",
      "Display `dept_id`, `dept_name`, and `budget` from Departments."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use EXISTS with a correlated subquery checking Projects WHERE p.dept_id = d.dept_id AND p.status = 'Active'.",
    "expectedSql": "SELECT d.dept_id, d.dept_name, d.budget FROM Departments d WHERE EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active');",
    "explanation": "Checks existence of active projects correlated with the outer department record.",
    "tags": [
      "subqueries",
      "correlated",
      "exists",
      "status"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "budget"
      ],
      "values": [
        [
          1,
          "IT",
          1200000
        ],
        [
          2,
          "HR",
          500000
        ],
        [
          3,
          "Finance",
          1500000
        ],
        [
          4,
          "Marketing",
          800000
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 274,
    "title": "Divisions Without Any Projects via Correlated Non-Existence",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Strategic planning is auditing inactive divisions. Display department ID, department name, and location for all departments where there exists zero registered projects in the Projects table.",
    "requirements": [
      "Verify that no project exists in Projects matching each department's ID.",
      "Display `dept_id`, `dept_name`, and `location` from Departments."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use NOT EXISTS with a correlated subquery matching on dept_id.",
    "expectedSql": "SELECT d.dept_id, d.dept_name, d.location FROM Departments d WHERE NOT EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id);",
    "explanation": "Efficiently identifies departments devoid of any associated capital initiatives.",
    "tags": [
      "subqueries",
      "correlated",
      "not-exists",
      "departments"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "location"
      ],
      "values": [
        [
          7,
          "Operations",
          "Chennai"
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 275,
    "title": "Staff Awarded Top Rating with Substantial Bonus",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Executive recognition tracks elite performers. Find employee ID, name, and department for employees who have at least one performance evaluation with a perfect rating of 5 and a bonus strictly exceeding 20,000.",
    "requirements": [
      "Verify the existence of a review with rating = 5 and bonus > 20,000 for each employee.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use EXISTS with a correlated subquery on Performance_Reviews checking rating = 5 and bonus > 20000.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.rating = 5 AND pr.bonus > 20000);",
    "explanation": "Verifies existence of multi-attribute criteria in child evaluation records.",
    "tags": [
      "subqueries",
      "correlated",
      "exists",
      "reviews"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          106,
          "Girish",
          "Finance"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          119,
          "Arjun",
          "Finance"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 276,
    "title": "Staff Never Awarded Any Financial Bonus",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Hard",
    "problemStatement": "Compensation equity is identifying staff who have never received a cash bonus. Display employee ID, name, department, and salary for all employees for whom no performance review with a non-null bonus exists.",
    "requirements": [
      "Verify the non-existence of any review record with a non-null bonus for each employee.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use NOT EXISTS with a correlated subquery checking pr.bonus IS NOT NULL.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.bonus IS NOT NULL);",
    "explanation": "Captures employees who either have no reviews at all or whose reviews contained NULL bonus awards.",
    "tags": [
      "subqueries",
      "correlated",
      "not-exists",
      "null-handling"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT",
          25000
        ],
        [
          105,
          "Farah",
          "HR",
          32000
        ],
        [
          108,
          "Isha",
          "Marketing",
          28000
        ],
        [
          111,
          "Naveen",
          "Finance",
          35000
        ],
        [
          113,
          "Rahul",
          "Sales",
          30000
        ],
        [
          118,
          "Pooja",
          "HR",
          27000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 7
    }
  },
  {
    "id": 277,
    "title": "Initiatives with High-Commitment Staffing Allocations",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Project governance is monitoring initiatives that require heavy individual staff commitments. Display project ID, name, and status for all projects that have at least one team member allocated 35 or more weekly hours.",
    "requirements": [
      "Verify the existence of an assignment in Employee_Projects with allocated hours of 35 or more.",
      "Display `project_id`, `project_name`, and `status` from Projects."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use EXISTS with a correlated subquery on Employee_Projects checking hours_allocated >= 35.",
    "expectedSql": "SELECT p.project_id, p.project_name, p.status FROM Projects p WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id AND ep.hours_allocated >= 35);",
    "explanation": "Locates initiatives sustained by intensive individual workloads.",
    "tags": [
      "subqueries",
      "correlated",
      "exists",
      "workload"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          "Active"
        ],
        [
          503,
          "Global Talent Acquisition",
          "Active"
        ],
        [
          504,
          "Financial Audit Automation",
          "Active"
        ],
        [
          505,
          "Brand Revamp 2025",
          "Active"
        ],
        [
          506,
          "CRM Sales Pipeline",
          "Completed"
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 278,
    "title": "Unstaffed Initiatives via Correlated Non-Existence",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "The PMO is identifying projects that have zero team members allocated. Display project ID, name, and budget for all initiatives in Projects for which no assignment record exists in Employee_Projects.",
    "requirements": [
      "Verify that no record exists in Employee_Projects matching each project's ID.",
      "Display `project_id`, `project_name`, and `budget` from Projects."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use NOT EXISTS with a correlated subquery matching on project_id.",
    "expectedSql": "SELECT p.project_id, p.project_name, p.budget FROM Projects p WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id);",
    "explanation": "Detects orphaned or unstaffed initiatives using correlated NOT EXISTS.",
    "tags": [
      "subqueries",
      "correlated",
      "not-exists",
      "projects"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "budget"
      ],
      "values": [
        [
          507,
          "Compliance Automation",
          90000
        ],
        [
          508,
          "NextGen AI Suite",
          550000
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 279,
    "title": "Staff in Mega-Budget Divisions via Correlated Existence",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Corporate treasury is identifying staff assigned to well-funded corporate divisions. Display employee ID, name, and department for employees whose assigned department has an annual operating budget of at least 1,200,000.",
    "requirements": [
      "Verify the existence of a matching department in Departments with a budget of 1,200,000 or greater.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use EXISTS with a correlated subquery matching department name and testing budget >= 1200000.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE EXISTS (SELECT 1 FROM Departments d WHERE d.dept_name = e.department AND d.budget >= 1200000);",
    "explanation": "Correlates parent employee records with department budgetary thresholds.",
    "tags": [
      "subqueries",
      "correlated",
      "exists",
      "budget"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT"
        ],
        [
          103,
          "Chetan",
          "IT"
        ],
        [
          104,
          "Dhruv",
          "Finance"
        ],
        [
          106,
          "Girish",
          "Finance"
        ],
        [
          107,
          "Harsha",
          "IT"
        ],
        [
          111,
          "Naveen",
          "Finance"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          117,
          "Manoj",
          "IT"
        ],
        [
          119,
          "Arjun",
          "Finance"
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 280,
    "title": "Staff with Multiple Completed Performance Appraisals",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Hard",
    "problemStatement": "Human Resources is compiling a cohort of seasoned staff who have undergone recurring evaluations. Display employee ID, name, and department for all employees who have completed 2 or more performance evaluations.",
    "requirements": [
      "Count performance reviews matching each employee using a correlated scalar subquery.",
      "Filter for employees where this count is 2 or greater.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Compare a correlated subquery computing COUNT(*) from Performance_Reviews to >= 2.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE (SELECT COUNT(*) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) >= 2;",
    "explanation": "Uses a correlated COUNT subquery in the WHERE clause to filter outer records by child entity frequency.",
    "tags": [
      "subqueries",
      "correlated",
      "count",
      "frequency"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          106,
          "Girish",
          "Finance"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          119,
          "Arjun",
          "Finance"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 281,
    "title": "Staff Earning Above Their Own Department's Average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Workforce compensation is reviewing intra-departmental pay equity. Find all employees whose salary strictly exceeds the average salary of colleagues working within their own department, displaying employee ID, name, department, and salary.",
    "requirements": [
      "Correlate each employee's salary against the average salary computed for their specific department.",
      "Filter for employees earning strictly more than that departmental average.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Use a correlated subquery calculating AVG(salary) WHERE sub.department = e.department.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary > (SELECT AVG(sub.salary) FROM Employees sub WHERE sub.department = e.department);",
    "explanation": "Classic interview question: correlated subquery computes dynamic group benchmarks specific to each outer row.",
    "tags": [
      "subqueries",
      "correlated",
      "salary-comparison",
      "interview-classic"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          103,
          "Chetan",
          "IT",
          55000
        ],
        [
          106,
          "Girish",
          "Finance",
          80000
        ],
        [
          109,
          "Kiran",
          "HR",
          70000
        ],
        [
          110,
          "Meena",
          "Marketing",
          60000
        ],
        [
          112,
          "Priya",
          "IT",
          75000
        ],
        [
          114,
          "Sneha",
          "Sales",
          48000
        ],
        [
          115,
          "Varun",
          "Marketing",
          68000
        ],
        [
          117,
          "Manoj",
          "IT",
          52000
        ],
        [
          119,
          "Arjun",
          "Finance",
          90000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 282,
    "title": "Highest Earner in Each Corporate Department",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Executive remuneration is identifying the top compensation recipient within every division. Retrieve employee ID, name, department, and salary for the highest-paid employee in each department.",
    "requirements": [
      "For each employee, compare their salary against the maximum salary in their own department.",
      "Filter for staff members matching that departmental maximum.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Filter where e.salary equals a correlated subquery computing MAX(salary) for that department.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary = (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department);",
    "explanation": "Locates department-level salary leaders using correlated maximum equality.",
    "tags": [
      "subqueries",
      "correlated",
      "max-per-group"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          109,
          "Kiran",
          "HR",
          70000
        ],
        [
          112,
          "Priya",
          "IT",
          75000
        ],
        [
          115,
          "Varun",
          "Marketing",
          68000
        ],
        [
          119,
          "Arjun",
          "Finance",
          90000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 283,
    "title": "Most Seasoned Professional in Each Branch City",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Human Resources is identifying the seniority leader in every branch office location. Display employee ID, name, city, and years of experience for the employee with the maximum experience in their resident city.",
    "requirements": [
      "Compare each employee's experience against the maximum experience recorded for their city.",
      "Filter for the employee matching that local peak tenure.",
      "Display `emp_id`, `emp_name`, `city`, and `experience` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Filter where e.experience equals a correlated subquery computing MAX(experience) for that city.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.city, e.experience FROM Employees e WHERE e.experience = (SELECT MAX(sub.experience) FROM Employees sub WHERE sub.city = e.city);",
    "explanation": "Finds the seniority anchor within each geographical branch location.",
    "tags": [
      "subqueries",
      "correlated",
      "max-per-city"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "city",
        "experience"
      ],
      "values": [
        [
          106,
          "Girish",
          "Bengaluru",
          10
        ],
        [
          107,
          "Harsha",
          "Vijayawada",
          4
        ],
        [
          115,
          "Varun",
          "Chennai",
          8
        ],
        [
          119,
          "Arjun",
          "Hyderabad",
          11
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 284,
    "title": "Appraisals Exceeding Annual Cycle Bonus Average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "The compensation committee is analyzing merit incentives that exceeded standard benchmarks within their appraisal year. Retrieve review ID, employee ID, review year, and bonus for reviews where the awarded bonus strictly exceeds the average bonus granted during that specific review cycle.",
    "requirements": [
      "Compare each review's bonus against the average bonus calculated for that same review year.",
      "Filter for reviews with bonuses strictly above that annual average.",
      "Display `review_id`, `emp_id`, `review_year`, and `bonus` from Performance_Reviews."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use a correlated subquery calculating AVG(bonus) WHERE sub.review_year = pr.review_year.",
    "expectedSql": "SELECT pr.review_id, pr.emp_id, pr.review_year, pr.bonus FROM Performance_Reviews pr WHERE pr.bonus > (SELECT AVG(sub.bonus) FROM Performance_Reviews sub WHERE sub.review_year = pr.review_year);",
    "explanation": "Correlates review year to compare bonus allocations against the mean of that year's appraisal cohort.",
    "tags": [
      "subqueries",
      "correlated",
      "annual-average"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "review_year",
        "bonus"
      ],
      "values": [
        [
          2,
          104,
          2024,
          18000
        ],
        [
          4,
          106,
          2024,
          25000
        ],
        [
          6,
          109,
          2024,
          18000
        ],
        [
          7,
          110,
          2024,
          16000
        ],
        [
          10,
          112,
          2024,
          25000
        ],
        [
          16,
          119,
          2023,
          28000
        ],
        [
          17,
          119,
          2024,
          30000
        ]
      ],
      "rowCount": 7
    }
  },
  {
    "id": 285,
    "title": "Initiatives Budgeted Above Department Project Average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Project governance evaluates funding priorities within sponsoring divisions. Display project ID, name, department ID, and budget for all projects whose capital budget strictly exceeds the average project budget within their sponsoring department.",
    "requirements": [
      "Compare each project's budget against the average budget of projects in the same department.",
      "Filter for projects whose budget exceeds that departmental project average.",
      "Display `project_id`, `project_name`, `dept_id`, and `budget` from Projects."
    ],
    "tableName": "Projects",
    "hint": "Use a correlated subquery calculating AVG(budget) WHERE sub.dept_id = p.dept_id.",
    "expectedSql": "SELECT p.project_id, p.project_name, p.dept_id, p.budget FROM Projects p WHERE p.budget > (SELECT AVG(sub.budget) FROM Projects sub WHERE sub.dept_id = p.dept_id);",
    "explanation": "Identifies capital initiatives prioritized above typical department investment levels.",
    "tags": [
      "subqueries",
      "correlated",
      "department-budget"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "dept_id",
        "budget"
      ],
      "values": [
        [
          502,
          "ERP Modernization",
          1,
          400000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 286,
    "title": "Correlated Assigned Project Count per Staff Member",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Resource scheduling generates individual utilization summaries. For every employee in Employees, display their employee ID, full name, and the total count of projects they are assigned to, aliasing the count as `total_projects`.",
    "requirements": [
      "Query the Employees table.",
      "Compute total assigned projects for each employee using a correlated subquery in the SELECT clause, aliased as `total_projects`.",
      "Display `emp_id`, `emp_name`, and `total_projects`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Include (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) in SELECT.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects FROM Employees e;",
    "explanation": "Correlated scalar subqueries in SELECT append child aggregations to parent entities without requiring GROUP BY.",
    "tags": [
      "subqueries",
      "correlated-select",
      "count"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "total_projects"
      ],
      "values": [
        [
          101,
          "Anil",
          0
        ],
        [
          102,
          "Bhumika",
          1
        ],
        [
          103,
          "Chetan",
          2
        ],
        [
          104,
          "Dhruv",
          1
        ],
        [
          105,
          "Farah",
          1
        ],
        [
          106,
          "Girish",
          1
        ],
        [
          107,
          "Harsha",
          1
        ],
        [
          108,
          "Isha",
          1
        ],
        [
          109,
          "Kiran",
          1
        ],
        [
          110,
          "Meena",
          1
        ],
        [
          111,
          "Naveen",
          1
        ],
        [
          112,
          "Priya",
          2
        ],
        [
          113,
          "Rahul",
          0
        ],
        [
          114,
          "Sneha",
          1
        ],
        [
          115,
          "Varun",
          2
        ],
        [
          116,
          "Divya",
          1
        ],
        [
          117,
          "Manoj",
          1
        ],
        [
          118,
          "Pooja",
          0
        ],
        [
          119,
          "Arjun",
          1
        ],
        [
          120,
          "Keerthi",
          1
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 287,
    "title": "Lifetime Peak Appraisal Rating per Staff Member",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Talent development tracks personal career best performance ratings. For each employee in Employees, display employee ID, name, and the highest performance rating they have ever received across all appraisal cycles, aliased as `highest_rating`.",
    "requirements": [
      "Query the Employees table.",
      "Project the maximum rating for each employee using a correlated subquery in SELECT, aliased as `highest_rating`.",
      "Display `emp_id`, `emp_name`, and `highest_rating`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) in the projection.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating FROM Employees e;",
    "explanation": "Embeds each employee's personal appraisal ceiling directly into the workforce roster.",
    "tags": [
      "subqueries",
      "correlated-select",
      "max"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "highest_rating"
      ],
      "values": [
        [
          101,
          "Anil",
          null
        ],
        [
          102,
          "Bhumika",
          3
        ],
        [
          103,
          "Chetan",
          4
        ],
        [
          104,
          "Dhruv",
          4
        ],
        [
          105,
          "Farah",
          null
        ],
        [
          106,
          "Girish",
          5
        ],
        [
          107,
          "Harsha",
          3
        ],
        [
          108,
          "Isha",
          null
        ],
        [
          109,
          "Kiran",
          4
        ],
        [
          110,
          "Meena",
          4
        ],
        [
          111,
          "Naveen",
          2
        ],
        [
          112,
          "Priya",
          5
        ],
        [
          113,
          "Rahul",
          null
        ],
        [
          114,
          "Sneha",
          4
        ],
        [
          115,
          "Varun",
          4
        ],
        [
          116,
          "Divya",
          3
        ],
        [
          117,
          "Manoj",
          3
        ],
        [
          118,
          "Pooja",
          null
        ],
        [
          119,
          "Arjun",
          5
        ],
        [
          120,
          "Keerthi",
          null
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 288,
    "title": "Active Initiative Tally per Corporate Division",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Corporate governance tracks active program deployment by division. For each department in Departments, display department name, office location, and the count of projects currently marked as 'Active' sponsored by that department, aliased as `active_projects`.",
    "requirements": [
      "Query the Departments table.",
      "Count active projects for each department using a correlated subquery in SELECT, aliased as `active_projects`.",
      "Display `dept_name`, `location`, and `active_projects`."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') in SELECT.",
    "expectedSql": "SELECT d.dept_name, d.location, (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') AS active_projects FROM Departments d;",
    "explanation": "Calculates live operational capacity for every department through correlated projection.",
    "tags": [
      "subqueries",
      "correlated-select",
      "status"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "location",
        "active_projects"
      ],
      "values": [
        [
          "IT",
          "Bengaluru",
          1
        ],
        [
          "HR",
          "Bengaluru",
          1
        ],
        [
          "Finance",
          "Hyderabad",
          1
        ],
        [
          "Marketing",
          "Chennai",
          1
        ],
        [
          "Sales",
          "Hyderabad",
          0
        ],
        [
          "Legal",
          "Hyderabad",
          0
        ],
        [
          "Operations",
          "Chennai",
          0
        ],
        [
          "R&D",
          "Bengaluru",
          0
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 289,
    "title": "Staff Out-Earning Less Experienced Department Peers",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Compensation analytics evaluates tenure equity. Find all employees who earn strictly more than any colleague in their department who has less experience than them, displaying employee ID, name, department, salary, and experience.",
    "requirements": [
      "For each employee, find the maximum salary among colleagues in the same department with strictly less experience.",
      "Filter for employees whose salary strictly exceeds that maximum.",
      "Display `emp_id`, `emp_name`, `department`, `salary`, and `experience`."
    ],
    "tableName": "Employees",
    "hint": "Compare e.salary to a correlated subquery computing MAX(salary) for colleagues with less experience.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, e.salary, e.experience FROM Employees e WHERE e.salary > (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department AND sub.experience < e.experience);",
    "explanation": "Enforces tenure-based pay progression by checking that salary exceeds the compensation of all colleagues with lower experience.",
    "tags": [
      "subqueries",
      "correlated",
      "progression"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary",
        "experience"
      ],
      "values": [
        [
          102,
          "Bhumika",
          "HR",
          40000,
          3
        ],
        [
          103,
          "Chetan",
          "IT",
          55000,
          5
        ],
        [
          104,
          "Dhruv",
          "Finance",
          65000,
          7
        ],
        [
          105,
          "Farah",
          "HR",
          32000,
          2
        ],
        [
          106,
          "Girish",
          "Finance",
          80000,
          10
        ],
        [
          107,
          "Harsha",
          "IT",
          45000,
          4
        ],
        [
          109,
          "Kiran",
          "HR",
          70000,
          8
        ],
        [
          110,
          "Meena",
          "Marketing",
          60000,
          6
        ],
        [
          112,
          "Priya",
          "IT",
          75000,
          9
        ],
        [
          115,
          "Varun",
          "Marketing",
          68000,
          8
        ],
        [
          116,
          "Divya",
          "Sales",
          42000,
          3
        ],
        [
          119,
          "Arjun",
          "Finance",
          90000,
          11
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000,
          4
        ]
      ],
      "rowCount": 13
    }
  },
  {
    "id": 290,
    "title": "Appraisals Exceeding Employee Lifetime Average Rating",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Talent management identifies breakthrough review performances. Retrieve review ID, employee ID, review year, and rating for performance reviews where the achieved rating strictly exceeds that employee's own lifetime average rating.",
    "requirements": [
      "For each review, compute the employee's average rating across all their reviews.",
      "Filter for evaluations where the rating strictly exceeds that employee's average.",
      "Display `review_id`, `emp_id`, `review_year`, and `rating` from Performance_Reviews."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Compare pr.rating against a correlated subquery computing AVG(rating) for that same employee.",
    "expectedSql": "SELECT pr.review_id, pr.emp_id, pr.review_year, pr.rating FROM Performance_Reviews pr WHERE pr.rating > (SELECT AVG(sub.rating) FROM Performance_Reviews sub WHERE sub.emp_id = pr.emp_id);",
    "explanation": "Highlights breakout individual performances that surpass the employee's typical appraisal baseline.",
    "tags": [
      "subqueries",
      "correlated",
      "baseline"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "review_year",
        "rating"
      ],
      "values": [
        [
          4,
          106,
          2024,
          5
        ],
        [
          10,
          112,
          2024,
          5
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 291,
    "title": "Departmental Pre-Aggregation Filter via Derived Table",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Medium",
    "problemStatement": "Financial reporting uses modular staging queries to summarize departmental metrics. Using a derived table that computes employee count and average salary per department, filter for departments where the average salary strictly exceeds 50,000, displaying department name, employee count (`emp_count`), and average salary (`avg_sal`).",
    "requirements": [
      "Aggregate headcount (`emp_count`) and average salary rounded to 2 decimal places (`avg_sal`) by department in a FROM-clause subquery.",
      "Filter the outer query for `avg_sal > 50000`.",
      "Display `department`, `emp_count`, and `avg_sal`."
    ],
    "tableName": "Employees",
    "hint": "Wrap the GROUP BY aggregation in a derived table and filter on the calculated alias in the outer WHERE clause.",
    "expectedSql": "SELECT dt.department, dt.emp_count, dt.avg_sal FROM (SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt WHERE dt.avg_sal > 50000;",
    "explanation": "Derived tables create inline temporary views that allow filtering on computed column aliases using standard WHERE clauses.",
    "tags": [
      "subqueries",
      "derived-tables",
      "from-clause"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "emp_count",
        "avg_sal"
      ],
      "values": [
        [
          "Finance",
          4,
          67500
        ],
        [
          "IT",
          5,
          50400
        ],
        [
          "Marketing",
          3,
          52000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 292,
    "title": "Workload Capacity Outliers via Derived Table",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Medium",
    "problemStatement": "Resource governance audits cumulative weekly commitments across projects. Using a derived table that aggregates total weekly hours per employee in Employee_Projects, identify all employees whose cumulative weekly hours strictly exceed 35, displaying employee ID and total hours (`total_hours`).",
    "requirements": [
      "Aggregate `SUM(hours_allocated)` aliased as `total_hours` grouped by `emp_id` in a derived table.",
      "Filter the outer query for `total_hours > 35`.",
      "Display `emp_id` and `total_hours`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Query from a derived table aggregating hours by emp_id, filtering for total_hours > 35.",
    "expectedSql": "SELECT dt.emp_id, dt.total_hours FROM (SELECT emp_id, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY emp_id) dt WHERE dt.total_hours > 35;",
    "explanation": "Encapsulates aggregation inside a derived table, enabling clean post-aggregation filtering.",
    "tags": [
      "subqueries",
      "derived-tables",
      "workload"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "total_hours"
      ],
      "values": [
        [
          103,
          50
        ],
        [
          107,
          40
        ],
        [
          112,
          40
        ],
        [
          115,
          40
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 293,
    "title": "Staff Records Enriched with Departmental Mean Benchmarks",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Compensation benchmarking compares individual salaries against departmental baselines. Join each employee record with a derived table that pre-calculates the average salary for each department (rounded to 2 decimal places, aliased as `avg_dept_sal`), displaying employee name, department, salary, and departmental average salary.",
    "requirements": [
      "Calculate average salary rounded to 2 decimal places by department in a derived table aliased as `dept_stats`.",
      "Join Employees with `dept_stats` on matching department name.",
      "Display `emp_name`, `department`, `salary`, and `avg_dept_sal`."
    ],
    "tableName": "Employees",
    "hint": "Join Employees with a derived table (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal ... GROUP BY department).",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary, dept_stats.avg_dept_sal FROM Employees e INNER JOIN (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal FROM Employees GROUP BY department) dept_stats ON e.department = dept_stats.department;",
    "explanation": "A standard SQL pattern: joining detail rows with a derived summary table avoids row-multiplication errors.",
    "tags": [
      "subqueries",
      "derived-tables",
      "join"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "avg_dept_sal"
      ],
      "values": [
        [
          "Anil",
          "IT",
          25000,
          50400
        ],
        [
          "Bhumika",
          "HR",
          40000,
          42250
        ],
        [
          "Chetan",
          "IT",
          55000,
          50400
        ],
        [
          "Dhruv",
          "Finance",
          65000,
          67500
        ],
        [
          "Farah",
          "HR",
          32000,
          42250
        ],
        [
          "Girish",
          "Finance",
          80000,
          67500
        ],
        [
          "Harsha",
          "IT",
          45000,
          50400
        ],
        [
          "Isha",
          "Marketing",
          28000,
          52000
        ],
        [
          "Kiran",
          "HR",
          70000,
          42250
        ],
        [
          "Meena",
          "Marketing",
          60000,
          52000
        ],
        [
          "Naveen",
          "Finance",
          35000,
          67500
        ],
        [
          "Priya",
          "IT",
          75000,
          50400
        ],
        [
          "Rahul",
          "Sales",
          30000,
          43750
        ],
        [
          "Sneha",
          "Sales",
          48000,
          43750
        ],
        [
          "Varun",
          "Marketing",
          68000,
          52000
        ],
        [
          "Divya",
          "Sales",
          42000,
          43750
        ],
        [
          "Manoj",
          "IT",
          52000,
          50400
        ],
        [
          "Pooja",
          "HR",
          27000,
          42250
        ],
        [
          "Arjun",
          "Finance",
          90000,
          67500
        ],
        [
          "Keerthi",
          "Sales",
          55000,
          43750
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 294,
    "title": "Employee Salary Variance Ranking Relative to Department Mean",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Human Resources is ranking employees by their salary difference relative to their department's average. Join employees with a departmental statistics derived table, calculate the variance (employee salary minus department average salary, aliased as `diff_from_dept_avg`), and sort by this difference in descending order.",
    "requirements": [
      "Join Employees with a derived table calculating departmental average salary (`avg_sal`).",
      "Compute `salary - avg_sal`, aliasing the result as `diff_from_dept_avg`.",
      "Order results by `diff_from_dept_avg` in descending order.",
      "Display `emp_name`, `department`, `salary`, and `diff_from_dept_avg`."
    ],
    "tableName": "Employees",
    "hint": "Join with the department average derived table and apply ORDER BY diff_from_dept_avg DESC.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary, (e.salary - dt.avg_sal) AS diff_from_dept_avg FROM Employees e INNER JOIN (SELECT department, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt ON e.department = dt.department ORDER BY diff_from_dept_avg DESC;",
    "explanation": "Enables multi-tiered compensation benchmarking across internal corporate departments.",
    "tags": [
      "subqueries",
      "derived-tables",
      "ranking",
      "order-by"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "diff_from_dept_avg"
      ],
      "values": [
        [
          "Kiran",
          "HR",
          70000,
          27750
        ],
        [
          "Priya",
          "IT",
          75000,
          24600
        ],
        [
          "Arjun",
          "Finance",
          90000,
          22500
        ],
        [
          "Varun",
          "Marketing",
          68000,
          16000
        ],
        [
          "Girish",
          "Finance",
          80000,
          12500
        ],
        [
          "Keerthi",
          "Sales",
          55000,
          11250
        ],
        [
          "Meena",
          "Marketing",
          60000,
          8000
        ],
        [
          "Chetan",
          "IT",
          55000,
          4600
        ],
        [
          "Sneha",
          "Sales",
          48000,
          4250
        ],
        [
          "Manoj",
          "IT",
          52000,
          1600
        ],
        [
          "Divya",
          "Sales",
          42000,
          -1750
        ],
        [
          "Bhumika",
          "HR",
          40000,
          -2250
        ],
        [
          "Dhruv",
          "Finance",
          65000,
          -2500
        ],
        [
          "Harsha",
          "IT",
          45000,
          -5400
        ],
        [
          "Farah",
          "HR",
          32000,
          -10250
        ],
        [
          "Rahul",
          "Sales",
          30000,
          -13750
        ],
        [
          "Pooja",
          "HR",
          27000,
          -15250
        ],
        [
          "Isha",
          "Marketing",
          28000,
          -24000
        ],
        [
          "Anil",
          "IT",
          25000,
          -25400
        ],
        [
          "Naveen",
          "Finance",
          35000,
          -32500
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 295,
    "title": "High-Disbursement Appraisal Cycles via Derived Table",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Medium",
    "problemStatement": "The compensation committee identifies appraisal years with heavy financial bonus payouts. Using a derived table aggregating review count (`reviews_count`) and total bonuses (`total_bonus`) per review year, filter for review cycles where total bonuses strictly exceeded 100,000, displaying review year, review count, and total bonuses.",
    "requirements": [
      "Aggregate review count and bonus sum grouped by `review_year` in a derived table.",
      "Filter the outer query for `total_bonus > 100000`.",
      "Display `review_year`, `reviews_count`, and `total_bonus`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Query from an aggregated review year derived table with WHERE total_bonus > 100000.",
    "expectedSql": "SELECT yt.review_year, yt.reviews_count, yt.total_bonus FROM (SELECT review_year, COUNT(*) AS reviews_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY review_year) yt WHERE yt.total_bonus > 100000;",
    "explanation": "Transforms annual performance aggregations into an inline table to audit mega-payout years.",
    "tags": [
      "subqueries",
      "derived-tables",
      "bonus"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "review_year",
        "reviews_count",
        "total_bonus"
      ],
      "values": [
        [
          2024,
          14,
          204000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 296,
    "title": "Workforce in Highest-Average Compensation Department",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Executive remuneration identifies personnel working within the single best-compensated department. Find employee ID, name, department, and salary for all employees who belong to the department with the highest average salary in the company.",
    "requirements": [
      "Identify the single department with the highest average employee salary using an ordered and limited subquery.",
      "Filter Employees for staff working in that department.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    "tableName": "Employees",
    "hint": "Filter department equal to (SELECT department FROM Employees GROUP BY department ORDER BY AVG(salary) DESC LIMIT 1).",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE department = (SELECT department FROM Employees GROUP BY department ORDER BY AVG(salary) DESC LIMIT 1);",
    "explanation": "Nest an aggregate group subquery inside the WHERE predicate to target the top-paying organizational division.",
    "tags": [
      "subqueries",
      "nested",
      "top-department"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          104,
          "Dhruv",
          "Finance",
          65000
        ],
        [
          106,
          "Girish",
          "Finance",
          80000
        ],
        [
          111,
          "Naveen",
          "Finance",
          35000
        ],
        [
          119,
          "Arjun",
          "Finance",
          90000
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 297,
    "title": "Initiatives in Largest Operating Budget Division",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Strategic planning tracks initiatives sponsored by the company's highest-funded division. Display project ID, name, and budget for all initiatives belonging to the department with the largest operating budget in the Departments table.",
    "requirements": [
      "Determine the department ID of the department with the maximum budget using a subquery.",
      "Filter Projects for initiatives belonging to that department ID.",
      "Display `project_id`, `project_name`, and `budget` from Projects."
    ],
    "tableName": "Projects, Departments",
    "hint": "Filter dept_id equal to (SELECT dept_id FROM Departments ORDER BY budget DESC LIMIT 1).",
    "expectedSql": "SELECT project_id, project_name, budget FROM Projects WHERE dept_id = (SELECT dept_id FROM Departments ORDER BY budget DESC LIMIT 1);",
    "explanation": "Links projects to the single highest-funded organizational unit using a nested subquery.",
    "tags": [
      "subqueries",
      "nested",
      "budget"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "budget"
      ],
      "values": [
        [
          508,
          "NextGen AI Suite",
          550000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 298,
    "title": "Personnel Deployed to Flagship Active Initiative",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Resource governance tracks staff assigned to the single highest-funded active project. Display employee ID, name, and department for all employees who are assigned to the active initiative with the largest capital budget.",
    "requirements": [
      "Determine the project ID of the highest-budget project marked as 'Active'.",
      "Identify employee IDs assigned to that project in Employee_Projects.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Use nested subqueries: finding the max-budget active project ID, finding its assigned staff, and querying Employees.",
    "expectedSql": "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep WHERE ep.project_id = (SELECT project_id FROM Projects WHERE status = 'Active' ORDER BY budget DESC LIMIT 1));",
    "explanation": "Multi-level nested subquery passes from active project budget evaluation through the staffing junction table to the workforce roster.",
    "tags": [
      "subqueries",
      "multi-level",
      "nested"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          104,
          "Dhruv",
          "Finance"
        ],
        [
          106,
          "Girish",
          "Finance"
        ],
        [
          111,
          "Naveen",
          "Finance"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          119,
          "Arjun",
          "Finance"
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 299,
    "title": "Employee Share of Departmental Payroll",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Workforce cost analysis computes each employee's salary as a proportion of their division's wage expenditure. Join employees with a derived table calculating total departmental payroll, displaying employee name, department, monthly salary, and the percentage of department payroll they represent (rounded to 2 decimal places, aliased as `pct_of_dept_payroll`).",
    "requirements": [
      "Calculate cumulative payroll by department in a derived table (`dp`).",
      "Join Employees with `dp` on matching department.",
      "Calculate percentage share as `ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2)` aliased as `pct_of_dept_payroll`.",
      "Display `emp_name`, `department`, `salary`, and `pct_of_dept_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Join with a derived table computing departmental payroll and compute the percentage ratio.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary, ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll FROM Employees e INNER JOIN (SELECT department, SUM(salary) AS total_dept_payroll FROM Employees GROUP BY department) dp ON e.department = dp.department;",
    "explanation": "Computes proportional compensation share within each business unit.",
    "tags": [
      "subqueries",
      "derived-tables",
      "percentage",
      "payroll"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "pct_of_dept_payroll"
      ],
      "values": [
        [
          "Anil",
          "IT",
          25000,
          9.92
        ],
        [
          "Bhumika",
          "HR",
          40000,
          23.67
        ],
        [
          "Chetan",
          "IT",
          55000,
          21.83
        ],
        [
          "Dhruv",
          "Finance",
          65000,
          24.07
        ],
        [
          "Farah",
          "HR",
          32000,
          18.93
        ],
        [
          "Girish",
          "Finance",
          80000,
          29.63
        ],
        [
          "Harsha",
          "IT",
          45000,
          17.86
        ],
        [
          "Isha",
          "Marketing",
          28000,
          17.95
        ],
        [
          "Kiran",
          "HR",
          70000,
          41.42
        ],
        [
          "Meena",
          "Marketing",
          60000,
          38.46
        ],
        [
          "Naveen",
          "Finance",
          35000,
          12.96
        ],
        [
          "Priya",
          "IT",
          75000,
          29.76
        ],
        [
          "Rahul",
          "Sales",
          30000,
          17.14
        ],
        [
          "Sneha",
          "Sales",
          48000,
          27.43
        ],
        [
          "Varun",
          "Marketing",
          68000,
          43.59
        ],
        [
          "Divya",
          "Sales",
          42000,
          24
        ],
        [
          "Manoj",
          "IT",
          52000,
          20.63
        ],
        [
          "Pooja",
          "HR",
          27000,
          15.98
        ],
        [
          "Arjun",
          "Finance",
          90000,
          33.33
        ],
        [
          "Keerthi",
          "Sales",
          55000,
          31.43
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 300,
    "title": "Highest Lifetime Incentive Recipient Recognition",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "The executive compensation committee is recognizing the employee who has accumulated the largest total performance bonus payout in company history. Find the employee ID, name, department, and salary for the individual who has earned the highest cumulative bonus sum across all performance reviews.",
    "requirements": [
      "Determine the employee ID with the highest cumulative bonus sum in Performance_Reviews using a grouped, ordered, and limited subquery.",
      "Filter Employees for that employee ID.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Filter emp_id equal to (SELECT emp_id FROM Performance_Reviews GROUP BY emp_id ORDER BY SUM(bonus) DESC LIMIT 1).",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE emp_id = (SELECT emp_id FROM Performance_Reviews GROUP BY emp_id ORDER BY SUM(bonus) DESC LIMIT 1);",
    "explanation": "Capstone subquery problem: ranks aggregate bonus earnings across historical appraisals to isolate and return the top-performing corporate employee.",
    "tags": [
      "subqueries",
      "nested",
      "capstone",
      "interview-favorite"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          119,
          "Arjun",
          "Finance",
          90000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 301,
    "interviewQuestionNumber": 1,
    "title": "Q1. High-Compensation Workforce Threshold",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Beginner",
    "problemStatement": "The executive compensation committee is reviewing senior payroll across all departments. Identify all employees whose monthly salary strictly exceeds 50,000, displaying their identification and department details.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary` in that exact order.",
      "Filter for staff members earning strictly more than 50,000."
    ],
    "tableName": "Employees",
    "hint": "Use an inequality comparison on the salary attribute.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > 50000;",
    "explanation": "Standard numeric comparison using the > comparison operator filters records whose compensation exceeds the threshold.",
    "tags": [
      "interview",
      "filtering",
      "where",
      "comparison"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          103,
          "Chetan",
          "IT",
          55000
        ],
        [
          104,
          "Dhruv",
          "Finance",
          65000
        ],
        [
          106,
          "Girish",
          "Finance",
          80000
        ],
        [
          109,
          "Kiran",
          "HR",
          70000
        ],
        [
          110,
          "Meena",
          "Marketing",
          60000
        ],
        [
          112,
          "Priya",
          "IT",
          75000
        ],
        [
          115,
          "Varun",
          "Marketing",
          68000
        ],
        [
          117,
          "Manoj",
          "IT",
          52000
        ],
        [
          119,
          "Arjun",
          "Finance",
          90000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 302,
    "interviewQuestionNumber": 2,
    "title": "Q2. Mid-Bracket Compensation Filter",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Beginner",
    "problemStatement": "Human Resources is auditing middle-tier salary bands for standard pay parity. Retrieve the name and monthly salary for all employees whose salary falls within the range of 30,000 to 60,000, inclusive of both boundaries.",
    "requirements": [
      "Select `emp_name` and `salary` from Employees.",
      "Filter for compensation between 30,000 and 60,000 inclusive."
    ],
    "tableName": "Employees",
    "hint": "Use an inclusive range operator to test the salary value.",
    "expectedSql": "SELECT emp_name, salary FROM Employees WHERE salary BETWEEN 30000 AND 60000;",
    "explanation": "BETWEEN is inclusive in SQL, returning all records where salary >= 30000 AND salary <= 60000.",
    "tags": [
      "interview",
      "range",
      "between",
      "filtering"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary"
      ],
      "values": [
        [
          "Bhumika",
          40000
        ],
        [
          "Chetan",
          55000
        ],
        [
          "Farah",
          32000
        ],
        [
          "Harsha",
          45000
        ],
        [
          "Meena",
          60000
        ],
        [
          "Naveen",
          35000
        ],
        [
          "Rahul",
          30000
        ],
        [
          "Sneha",
          48000
        ],
        [
          "Divya",
          42000
        ],
        [
          "Manoj",
          52000
        ],
        [
          "Keerthi",
          55000
        ]
      ],
      "rowCount": 11
    }
  },
  {
    "id": 303,
    "interviewQuestionNumber": 3,
    "title": "Q3. Senior Technical Division Staff",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "The Chief Technology Officer requires a complete profile of senior earners within the engineering organization. Retrieve all available columns for employees who belong to the IT department and earn strictly more than 50,000.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Filter for staff assigned to the 'IT' department whose salary strictly exceeds 50,000."
    ],
    "tableName": "Employees",
    "hint": "Combine the department filter and salary condition using a logical AND operator.",
    "expectedSql": "SELECT * FROM Employees WHERE department = 'IT' AND salary > 50000;",
    "explanation": "The AND operator requires both predicates to evaluate to TRUE for a row to be included.",
    "tags": [
      "interview",
      "and",
      "logical-operators",
      "filtering"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          112,
          "Priya",
          31,
          "IT",
          75000,
          9,
          "Bengaluru",
          2017
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 304,
    "interviewQuestionNumber": 4,
    "title": "Q4. Southern Regional Hub Experienced Talent",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Regional management is identifying experienced personnel stationed in southern metropolitan branch offices. Retrieve all columns for employees who are based in either Hyderabad or Chennai and possess at least 3 years of professional experience.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Filter for employees based in 'Hyderabad' or 'Chennai'.",
      "Ensure the employee has at least 3 years of experience (`experience >= 3`)."
    ],
    "tableName": "Employees",
    "hint": "Combine a location set check with a minimum experience condition using AND.",
    "expectedSql": "SELECT * FROM Employees WHERE city IN ('Hyderabad', 'Chennai') AND experience >= 3;",
    "explanation": "Combining the IN set operator with AND allows concise expression of multiple allowed city locations alongside an experience threshold.",
    "tags": [
      "interview",
      "in",
      "filtering",
      "experience"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "department",
        "salary",
        "experience",
        "city",
        "joining_year"
      ],
      "values": [
        [
          103,
          "Chetan",
          28,
          "IT",
          55000,
          5,
          "Hyderabad",
          2021
        ],
        [
          104,
          "Dhruv",
          30,
          "Finance",
          65000,
          7,
          "Chennai",
          2019
        ],
        [
          110,
          "Meena",
          29,
          "Marketing",
          60000,
          6,
          "Hyderabad",
          2020
        ],
        [
          111,
          "Naveen",
          26,
          "Finance",
          35000,
          3,
          "Chennai",
          2023
        ],
        [
          114,
          "Sneha",
          28,
          "Sales",
          48000,
          5,
          "Hyderabad",
          2021
        ],
        [
          115,
          "Varun",
          33,
          "Marketing",
          68000,
          8,
          "Chennai",
          2018
        ],
        [
          117,
          "Manoj",
          29,
          "IT",
          52000,
          6,
          "Chennai",
          2020
        ],
        [
          119,
          "Arjun",
          34,
          "Finance",
          90000,
          11,
          "Hyderabad",
          2015
        ],
        [
          120,
          "Keerthi",
          27,
          "Sales",
          55000,
          4,
          "Chennai",
          2022
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 305,
    "interviewQuestionNumber": 5,
    "title": "Q5. Name Pattern Identification (Prefix or Suffix A)",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Identity governance is verifying badge transliteration conventions for names starting or ending with the letter 'A'. Display employee ID and full name for all staff whose name starts with capital 'A' OR ends with 'a' (case-insensitive).",
    "requirements": [
      "Select `emp_id` and `emp_name` from Employees.",
      "Filter for names starting with 'A' or ending with 'a'."
    ],
    "tableName": "Employees",
    "hint": "Use pattern matching with wildcards combined with an OR operator.",
    "expectedSql": "SELECT emp_id, emp_name FROM Employees WHERE emp_name LIKE 'A%' OR emp_name LIKE '%a';",
    "explanation": "The % wildcard represents zero, one, or multiple characters. 'A%' checks prefix while '%a' checks suffix.",
    "tags": [
      "interview",
      "pattern-matching",
      "like",
      "wildcards"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name"
      ],
      "values": [
        [
          101,
          "Anil"
        ],
        [
          102,
          "Bhumika"
        ],
        [
          107,
          "Harsha"
        ],
        [
          108,
          "Isha"
        ],
        [
          110,
          "Meena"
        ],
        [
          112,
          "Priya"
        ],
        [
          114,
          "Sneha"
        ],
        [
          116,
          "Divya"
        ],
        [
          118,
          "Pooja"
        ],
        [
          119,
          "Arjun"
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 306,
    "interviewQuestionNumber": 6,
    "title": "Q6. Total Workforce Census",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Beginner",
    "problemStatement": "The board of directors requests an official headcount audit of all active staff members across the enterprise. Calculate the total number of employees currently recorded in the system.",
    "requirements": [
      "Calculate the total record count from the Employees table.",
      "Alias the aggregated count as `total_employees`."
    ],
    "tableName": "Employees",
    "hint": "Apply the standard counting aggregate function across all records.",
    "expectedSql": "SELECT COUNT(*) AS total_employees FROM Employees;",
    "explanation": "COUNT(*) tallies the total number of rows matching the query, including rows with NULL values.",
    "tags": [
      "interview",
      "count",
      "aggregates"
    ],
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "total_employees"
      ],
      "values": [
        [
          20
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 307,
    "interviewQuestionNumber": 7,
    "title": "Q7. Departmental Average Salary Ranking",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Corporate treasury is benchmarking departmental compensation across business units. Display each department name along with the average employee salary, ordered from the highest-paying department to the lowest.",
    "requirements": [
      "Group records by `department`.",
      "Calculate the average salary aliased as `avg_salary`.",
      "Sort the results by average salary in descending order.",
      "Display `department` and `avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Group by department, calculate AVG(salary), and apply ORDER BY avg_salary DESC.",
    "expectedSql": "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department ORDER BY avg_salary DESC;",
    "explanation": "GROUP BY partitions rows by department, AVG computes the mean salary per department, and ORDER BY DESC sorts highest to lowest.",
    "tags": [
      "interview",
      "groupby",
      "avg",
      "order-by"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "avg_salary"
      ],
      "values": [
        [
          "Finance",
          67500
        ],
        [
          "Marketing",
          52000
        ],
        [
          "IT",
          50400
        ],
        [
          "Sales",
          43750
        ],
        [
          "HR",
          42250
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 308,
    "interviewQuestionNumber": 8,
    "title": "Q8. Major Operational Departments by Headcount",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Operations management wants to isolate major operational divisions that maintain substantial staffing. Display the department name and total employee count for all departments that employ strictly more than 3 staff members.",
    "requirements": [
      "Group records by `department`.",
      "Calculate employee count aliased as `emp_count`.",
      "Filter the aggregated groups for headcounts strictly greater than 3.",
      "Display `department` and `emp_count`."
    ],
    "tableName": "Employees",
    "hint": "Use a post-aggregation filter to restrict groups where COUNT(*) > 3.",
    "expectedSql": "SELECT department, COUNT(*) AS emp_count FROM Employees GROUP BY department HAVING COUNT(*) > 3;",
    "explanation": "HAVING filters groups post-aggregation, unlike WHERE which filters individual rows prior to grouping.",
    "tags": [
      "interview",
      "having",
      "groupby",
      "count"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "department",
        "emp_count"
      ],
      "values": [
        [
          "Finance",
          4
        ],
        [
          "HR",
          4
        ],
        [
          "IT",
          5
        ],
        [
          "Sales",
          4
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 309,
    "interviewQuestionNumber": 9,
    "title": "Q9. Enterprise Salary Extremes and Disparity",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "The executive compensation committee is analyzing the full wage spread across the enterprise. Produce a single-row summary showing the highest salary, lowest salary, and the absolute difference between them.",
    "requirements": [
      "Find the maximum salary aliased as `max_salary`.",
      "Find the minimum salary aliased as `min_salary`.",
      "Calculate the difference (maximum minus minimum salary) aliased as `salary_difference`.",
      "Display all three metrics from the Employees table."
    ],
    "tableName": "Employees",
    "hint": "Apply MAX, MIN, and MAX(salary) - MIN(salary) in a single SELECT projection.",
    "expectedSql": "SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary, MAX(salary) - MIN(salary) AS salary_difference FROM Employees;",
    "explanation": "Aggregate functions can be combined in mathematical arithmetic expressions to compute statistical ranges.",
    "tags": [
      "interview",
      "min",
      "max",
      "arithmetic"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "max_salary",
        "min_salary",
        "salary_difference"
      ],
      "values": [
        [
          90000,
          25000,
          65000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 310,
    "interviewQuestionNumber": 10,
    "title": "Q10. Departmental Payroll Expenditure Summary",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Finance leadership requires monthly wage expenditure breakdowns across business units. For each department, display the department name and total cumulative monthly salary expense paid to its employees.",
    "requirements": [
      "Group records by `department`.",
      "Calculate the sum of all salaries in each department, aliased as `total_salary_expense`.",
      "Display `department` and `total_salary_expense`."
    ],
    "tableName": "Employees",
    "hint": "Group by department and apply the sum aggregate function to salary.",
    "expectedSql": "SELECT department, SUM(salary) AS total_salary_expense FROM Employees GROUP BY department;",
    "explanation": "SUM(salary) aggregates total compensation outlay within each partitioned department group.",
    "tags": [
      "interview",
      "sum",
      "groupby",
      "payroll"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "department",
        "total_salary_expense"
      ],
      "values": [
        [
          "Finance",
          270000
        ],
        [
          "HR",
          169000
        ],
        [
          "IT",
          252000
        ],
        [
          "Marketing",
          156000
        ],
        [
          "Sales",
          175000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 311,
    "interviewQuestionNumber": 11,
    "title": "Q11. High-Compensating Regional Hubs",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is identifying branch cities where employee compensation runs above standard levels. Display the city name and average monthly salary for all cities where the average salary strictly exceeds 45,000.",
    "requirements": [
      "Group records by `city`.",
      "Calculate average salary aliased as `avg_salary`.",
      "Filter groups where average salary is strictly greater than 45,000.",
      "Display `city` and `avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Group by city and use a HAVING clause checking AVG(salary) > 45000.",
    "expectedSql": "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city HAVING AVG(salary) > 45000;",
    "explanation": "The HAVING clause applies group-level filters on the calculated mean salary per city.",
    "tags": [
      "interview",
      "city",
      "avg",
      "having"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "city",
        "avg_salary"
      ],
      "values": [
        [
          "Bengaluru",
          66750
        ],
        [
          "Chennai",
          50500
        ],
        [
          "Hyderabad",
          51666.666666666664
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 312,
    "interviewQuestionNumber": 12,
    "title": "Q12. Departmental Comprehensive Salary Statistics",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Medium",
    "problemStatement": "Executive management is reviewing complete compensation metrics by division. For each department, display the department name, total headcount, average salary, highest salary, and lowest salary.",
    "requirements": [
      "Group records by `department`.",
      "Calculate employee count aliased as `employee_count`.",
      "Calculate average salary aliased as `avg_salary`.",
      "Find maximum salary aliased as `max_salary` and minimum salary aliased as `min_salary`.",
      "Display `department`, `employee_count`, `avg_salary`, `max_salary`, and `min_salary`."
    ],
    "tableName": "Employees",
    "hint": "Group by department and calculate COUNT, AVG, MAX, and MIN across the salary column.",
    "expectedSql": "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary FROM Employees GROUP BY department;",
    "explanation": "Multi-aggregate grouping statements provide a complete statistical profile of departmental compensation.",
    "tags": [
      "interview",
      "aggregates",
      "statistics",
      "groupby"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "department",
        "employee_count",
        "avg_salary",
        "max_salary",
        "min_salary"
      ],
      "values": [
        [
          "Finance",
          4,
          67500,
          90000,
          35000
        ],
        [
          "HR",
          4,
          42250,
          70000,
          27000
        ],
        [
          "IT",
          5,
          50400,
          75000,
          25000
        ],
        [
          "Marketing",
          3,
          52000,
          68000,
          28000
        ],
        [
          "Sales",
          4,
          43750,
          55000,
          30000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 313,
    "interviewQuestionNumber": 13,
    "title": "Q13. Staff Profile with Department Headquarters",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Easy",
    "problemStatement": "Facilities administration is cross-referencing staff members with official departmental locations. Display employee name, salary, department name, and department office location for all employees whose department is registered.",
    "requirements": [
      "Join Employees and Departments based on matching department name.",
      "Display `emp_name`, `salary`, `dept_name`, and `location`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Connect Employees and Departments on e.department = d.dept_name.",
    "expectedSql": "SELECT e.emp_name, e.salary, d.dept_name, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    "explanation": "INNER JOIN matches rows having equal department names across both tables, enriching employee data with departmental headquarters locations.",
    "tags": [
      "interview",
      "inner-join",
      "departments",
      "relationships"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "salary",
        "dept_name",
        "location"
      ],
      "values": [
        [
          "Anil",
          25000,
          "IT",
          "Bengaluru"
        ],
        [
          "Bhumika",
          40000,
          "HR",
          "Bengaluru"
        ],
        [
          "Chetan",
          55000,
          "IT",
          "Bengaluru"
        ],
        [
          "Dhruv",
          65000,
          "Finance",
          "Hyderabad"
        ],
        [
          "Farah",
          32000,
          "HR",
          "Bengaluru"
        ],
        [
          "Girish",
          80000,
          "Finance",
          "Hyderabad"
        ],
        [
          "Harsha",
          45000,
          "IT",
          "Bengaluru"
        ],
        [
          "Isha",
          28000,
          "Marketing",
          "Chennai"
        ],
        [
          "Kiran",
          70000,
          "HR",
          "Bengaluru"
        ],
        [
          "Meena",
          60000,
          "Marketing",
          "Chennai"
        ],
        [
          "Naveen",
          35000,
          "Finance",
          "Hyderabad"
        ],
        [
          "Priya",
          75000,
          "IT",
          "Bengaluru"
        ],
        [
          "Rahul",
          30000,
          "Sales",
          "Hyderabad"
        ],
        [
          "Sneha",
          48000,
          "Sales",
          "Hyderabad"
        ],
        [
          "Varun",
          68000,
          "Marketing",
          "Chennai"
        ],
        [
          "Divya",
          42000,
          "Sales",
          "Hyderabad"
        ],
        [
          "Manoj",
          52000,
          "IT",
          "Bengaluru"
        ],
        [
          "Pooja",
          27000,
          "HR",
          "Bengaluru"
        ],
        [
          "Arjun",
          90000,
          "Finance",
          "Hyderabad"
        ],
        [
          "Keerthi",
          55000,
          "Sales",
          "Hyderabad"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 314,
    "interviewQuestionNumber": 14,
    "title": "Q14. Unassigned Staff Identification",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Resource management is identifying employees who are not currently deployed to any project. Find employee ID, full name, and department for all employees who have zero project assignment records.",
    "requirements": [
      "Combine Employees with Employee_Projects ensuring all employees are checked.",
      "Filter for employees with no corresponding assignment record.",
      "Display `emp_id`, `emp_name`, and `department`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use an outer join from Employees to Employee_Projects and filter where project_id is null.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
    "explanation": "A LEFT JOIN with an IS NULL predicate on the joined table's foreign key detects non-participating (unassigned) entities.",
    "tags": [
      "interview",
      "left-join",
      "anti-join",
      "null-check"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT"
        ],
        [
          113,
          "Rahul",
          "Sales"
        ],
        [
          118,
          "Pooja",
          "HR"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 315,
    "interviewQuestionNumber": 15,
    "title": "Q15. Unstaffed Project Identification",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "The PMO is identifying projects that are currently operating without any assigned team members. Display the project ID, project name, and status for all initiatives in Projects that have zero assignments.",
    "requirements": [
      "Combine Projects with Employee_Projects ensuring all projects are inspected.",
      "Filter for projects that have no corresponding staff assignments.",
      "Display `project_id`, `project_name`, and `status`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use an outer join from Projects to Employee_Projects and filter where emp_id is null.",
    "expectedSql": "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
    "explanation": "Using LEFT JOIN and filtering for ep.emp_id IS NULL finds projects that have zero staffing allocations.",
    "tags": [
      "interview",
      "left-join",
      "projects",
      "anti-join"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status"
      ],
      "values": [
        [
          507,
          "Compliance Automation",
          "Planning"
        ],
        [
          508,
          "NextGen AI Suite",
          "Planning"
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 316,
    "interviewQuestionNumber": 16,
    "title": "Q16. Multi-Project Contributor Identification",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Resource governance is tracking employees who juggle multiple project assignments concurrently. Find all employees who are assigned to strictly more than 1 distinct project, displaying their name and total distinct project count.",
    "requirements": [
      "Join Employees with Employee_Projects on employee ID.",
      "Group by employee ID and employee name.",
      "Count distinct assigned projects aliased as `project_count`.",
      "Filter groups where distinct project count is strictly greater than 1.",
      "Display `emp_name` and `project_count`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Group by employee and apply HAVING COUNT(DISTINCT ep.project_id) > 1.",
    "expectedSql": "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS project_count FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name HAVING COUNT(DISTINCT ep.project_id) > 1;",
    "explanation": "Counting distinct project_ids after grouping by employee identifies multi-project contributors.",
    "tags": [
      "interview",
      "join",
      "having",
      "count-distinct"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "project_count"
      ],
      "values": [
        [
          "Chetan",
          2
        ],
        [
          "Priya",
          2
        ],
        [
          "Varun",
          2
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 317,
    "interviewQuestionNumber": 17,
    "title": "Q17. Staff Initiative Assignment Profile",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Project operations requires a detailed roster of team assignments. Retrieve the employee name, project name, assigned role, and weekly allocated hours for all assigned personnel.",
    "requirements": [
      "Join Employees, Employee_Projects (on emp_id), and Projects (on project_id).",
      "Display `emp_name`, `project_name`, `assigned_role`, and `hours_allocated`."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Connect Employees, Employee_Projects, and Projects using their foreign key relationships.",
    "expectedSql": "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Joining junction table Employee_Projects with both parent entities links individual staff to their concrete deliverables and allocated hours.",
    "tags": [
      "interview",
      "three-table-join",
      "junction",
      "projects"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "project_name",
        "assigned_role",
        "hours_allocated"
      ],
      "values": [
        [
          "Chetan",
          "Cloud Migration",
          "Lead Developer",
          35
        ],
        [
          "Chetan",
          "ERP Modernization",
          "Backend Architect",
          15
        ],
        [
          "Harsha",
          "Cloud Migration",
          "Full Stack Engineer",
          40
        ],
        [
          "Priya",
          "Cloud Migration",
          "Project Manager",
          25
        ],
        [
          "Priya",
          "Financial Audit Automation",
          "Technical Advisor",
          15
        ],
        [
          "Manoj",
          "ERP Modernization",
          "Database Specialist",
          30
        ],
        [
          "Bhumika",
          "Global Talent Acquisition",
          "Recruiter",
          35
        ],
        [
          "Farah",
          "Global Talent Acquisition",
          "HR Coordinator",
          30
        ],
        [
          "Kiran",
          "Global Talent Acquisition",
          "HR Lead",
          20
        ],
        [
          "Dhruv",
          "Financial Audit Automation",
          "Senior Auditor",
          35
        ],
        [
          "Girish",
          "Financial Audit Automation",
          "Compliance Officer",
          20
        ],
        [
          "Naveen",
          "Financial Audit Automation",
          "Financial Analyst",
          30
        ],
        [
          "Arjun",
          "Financial Audit Automation",
          "Finance Director",
          10
        ],
        [
          "Isha",
          "Brand Revamp 2025",
          "Content Strategist",
          35
        ],
        [
          "Meena",
          "Brand Revamp 2025",
          "Marketing Manager",
          30
        ],
        [
          "Varun",
          "Brand Revamp 2025",
          "Creative Director",
          20
        ],
        [
          "Varun",
          "CRM Sales Pipeline",
          "Campaign Strategist",
          20
        ],
        [
          "Sneha",
          "CRM Sales Pipeline",
          "Sales Lead",
          35
        ],
        [
          "Divya",
          "CRM Sales Pipeline",
          "Account Executive",
          30
        ],
        [
          "Keerthi",
          "CRM Sales Pipeline",
          "Client Onboarding",
          25
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 318,
    "interviewQuestionNumber": 18,
    "title": "Q18. Department Staffing Census Including Unstaffed Units",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Organization design is auditing employee placement across all registered divisions. Display the department name and total employee count for every department in Departments, ensuring departments with zero staff display a count of 0.",
    "requirements": [
      "Combine Departments and Employees preserving all registered departments.",
      "Group records by department name.",
      "Count assigned employee records aliased as `employee_count`.",
      "Display `dept_name` and `employee_count`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use a left outer join from Departments to Employees and apply COUNT(e.emp_id).",
    "expectedSql": "SELECT d.dept_name, COUNT(e.emp_id) AS employee_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
    "explanation": "COUNT(column) ignores NULLs produced by the LEFT JOIN for unmatched departments, returning an accurate 0.",
    "tags": [
      "interview",
      "left-join",
      "count",
      "empty-groups"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "employee_count"
      ],
      "values": [
        [
          "Finance",
          4
        ],
        [
          "HR",
          4
        ],
        [
          "IT",
          5
        ],
        [
          "Legal",
          0
        ],
        [
          "Marketing",
          3
        ],
        [
          "Operations",
          0
        ],
        [
          "R&D",
          0
        ],
        [
          "Sales",
          4
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 319,
    "interviewQuestionNumber": 19,
    "title": "Q19. Intra-Departmental Colleague Pairings",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Team building coordinators are mapping colleague pairings within business units. Find all unique pairs of employees who work in the same department, displaying employee 1 name as `employee_1`, employee 2 name as `employee_2`, and the department name, without duplicate reverse pairings.",
    "requirements": [
      "Join Employees with itself on matching department.",
      "Enforce `e1.emp_id < e2.emp_id` to eliminate mirror pairs and self-pairings.",
      "Display `employee_1`, `employee_2`, and `department`."
    ],
    "tableName": "Employees",
    "hint": "Use a self-join on department with e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department AND e1.emp_id < e2.emp_id;",
    "explanation": "Self-joining with a strict inequality condition (e1.emp_id < e2.emp_id) pairs each unique unordered combination exactly once.",
    "tags": [
      "interview",
      "self-join",
      "pairs",
      "de-duplication"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "employee_1",
        "employee_2",
        "department"
      ],
      "values": [
        [
          "Anil",
          "Chetan",
          "IT"
        ],
        [
          "Anil",
          "Harsha",
          "IT"
        ],
        [
          "Anil",
          "Priya",
          "IT"
        ],
        [
          "Anil",
          "Manoj",
          "IT"
        ],
        [
          "Bhumika",
          "Farah",
          "HR"
        ],
        [
          "Bhumika",
          "Kiran",
          "HR"
        ],
        [
          "Bhumika",
          "Pooja",
          "HR"
        ],
        [
          "Chetan",
          "Harsha",
          "IT"
        ],
        [
          "Chetan",
          "Priya",
          "IT"
        ],
        [
          "Chetan",
          "Manoj",
          "IT"
        ],
        [
          "Dhruv",
          "Girish",
          "Finance"
        ],
        [
          "Dhruv",
          "Naveen",
          "Finance"
        ],
        [
          "Dhruv",
          "Arjun",
          "Finance"
        ],
        [
          "Farah",
          "Kiran",
          "HR"
        ],
        [
          "Farah",
          "Pooja",
          "HR"
        ],
        [
          "Girish",
          "Naveen",
          "Finance"
        ],
        [
          "Girish",
          "Arjun",
          "Finance"
        ],
        [
          "Harsha",
          "Priya",
          "IT"
        ],
        [
          "Harsha",
          "Manoj",
          "IT"
        ],
        [
          "Isha",
          "Meena",
          "Marketing"
        ],
        [
          "Isha",
          "Varun",
          "Marketing"
        ],
        [
          "Kiran",
          "Pooja",
          "HR"
        ],
        [
          "Meena",
          "Varun",
          "Marketing"
        ],
        [
          "Naveen",
          "Arjun",
          "Finance"
        ],
        [
          "Priya",
          "Manoj",
          "IT"
        ],
        [
          "Rahul",
          "Sneha",
          "Sales"
        ],
        [
          "Rahul",
          "Divya",
          "Sales"
        ],
        [
          "Rahul",
          "Keerthi",
          "Sales"
        ],
        [
          "Sneha",
          "Divya",
          "Sales"
        ],
        [
          "Sneha",
          "Keerthi",
          "Sales"
        ],
        [
          "Divya",
          "Keerthi",
          "Sales"
        ]
      ],
      "rowCount": 31
    }
  },
  {
    "id": 320,
    "interviewQuestionNumber": 20,
    "title": "Q20. Staff Out-Earning Department Leadership",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Compensation governance is identifying anomalous cases where an individual employee out-earns their department head. Display employee name, department, employee salary, department head name (`dept_head_name`), and department head salary (`dept_head_salary`) for employees who earn strictly more than their department head.",
    "requirements": [
      "Join Employees with Departments (on department name), and join Departments with Employees again to match the department head (`dept_head` to `emp_name`).",
      "Filter for cases where the employee's salary strictly exceeds the department head's salary.",
      "Display `emp_name`, `department`, `salary`, `dept_head_name`, and `dept_head_salary`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Join Employees with Departments and join a second instance of Employees representing the department head.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary, mgr.emp_name AS dept_head_name, mgr.salary AS dept_head_salary FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employees mgr ON d.dept_head = mgr.emp_name WHERE e.salary > mgr.salary;",
    "explanation": "Joining Employees twice—first as regular employees and second as department managers—allows direct comparison of hierarchical compensation.",
    "tags": [
      "interview",
      "self-join",
      "hierarchy",
      "salary-comparison"
    ],
    "estimatedTimeMinutes": 6,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "dept_head_name",
        "dept_head_salary"
      ],
      "values": [
        [
          "Keerthi",
          "Sales",
          55000,
          "Sneha",
          48000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 321,
    "interviewQuestionNumber": 21,
    "title": "Q21. Cross-Departmental Project Collaborators",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "The PMO is tracking cross-functional collaboration on initiatives. Find pairs of employees who collaborate on the same project but belong to different departments, displaying the project ID, employee 1 name (`employee_1`), department 1 (`dept_1`), employee 2 name (`employee_2`), and department 2 (`dept_2`), avoiding duplicate reverse pairs.",
    "requirements": [
      "Join Employee_Projects with itself on matching project ID where `ep1.emp_id < ep2.emp_id`.",
      "Join each assignment with Employees to retrieve employee names and departments.",
      "Filter for pairs where `e1.department <> e2.department`.",
      "Display `project_id`, `employee_1`, `dept_1`, `employee_2`, and `dept_2`."
    ],
    "tableName": "Employee_Projects, Employees",
    "hint": "Self-join Employee_Projects on project_id and join with Employees to compare departments.",
    "expectedSql": "SELECT ep1.project_id, e1.emp_name AS employee_1, e1.department AS dept_1, e2.emp_name AS employee_2, e2.department AS dept_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id AND ep1.emp_id < ep2.emp_id INNER JOIN Employees e1 ON ep1.emp_id = e1.emp_id INNER JOIN Employees e2 ON ep2.emp_id = e2.emp_id WHERE e1.department <> e2.department;",
    "explanation": "Joining the assignment table with itself and validating cross-department membership discovers inter-disciplinary project pairings.",
    "tags": [
      "interview",
      "cross-department",
      "self-join",
      "collaboration"
    ],
    "estimatedTimeMinutes": 6,
    "expectedOutput": {
      "columns": [
        "project_id",
        "employee_1",
        "dept_1",
        "employee_2",
        "dept_2"
      ],
      "values": [
        [
          504,
          "Dhruv",
          "Finance",
          "Priya",
          "IT"
        ],
        [
          504,
          "Girish",
          "Finance",
          "Priya",
          "IT"
        ],
        [
          504,
          "Naveen",
          "Finance",
          "Priya",
          "IT"
        ],
        [
          504,
          "Priya",
          "IT",
          "Arjun",
          "Finance"
        ],
        [
          506,
          "Sneha",
          "Sales",
          "Varun",
          "Marketing"
        ],
        [
          506,
          "Varun",
          "Marketing",
          "Divya",
          "Sales"
        ],
        [
          506,
          "Varun",
          "Marketing",
          "Keerthi",
          "Sales"
        ]
      ],
      "rowCount": 7
    }
  },
  {
    "id": 322,
    "interviewQuestionNumber": 22,
    "title": "Q22. Project Cumulative Workload Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Resource governance requires an overview of weekly hours committed to every project. Display the project name and total allocated weekly hours for all projects in Projects, ensuring initiatives with zero assignments display 0 total hours.",
    "requirements": [
      "Combine Projects and Employee_Projects preserving all projects.",
      "Group records by project ID and project name.",
      "Sum weekly hours substituting 0 for nulls, aliased as `total_hours`.",
      "Display `project_name` and `total_hours`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Left join Projects to Employee_Projects and apply COALESCE(SUM(hours_allocated), 0).",
    "expectedSql": "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    "explanation": "COALESCE converts NULL sums into 0 for projects that currently have no logged assignments.",
    "tags": [
      "interview",
      "left-join",
      "coalesce",
      "aggregation"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "project_name",
        "total_hours"
      ],
      "values": [
        [
          "Cloud Migration",
          100
        ],
        [
          "ERP Modernization",
          45
        ],
        [
          "Global Talent Acquisition",
          85
        ],
        [
          "Financial Audit Automation",
          110
        ],
        [
          "Brand Revamp 2025",
          85
        ],
        [
          "CRM Sales Pipeline",
          110
        ],
        [
          "Compliance Automation",
          0
        ],
        [
          "NextGen AI Suite",
          0
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 323,
    "interviewQuestionNumber": 23,
    "title": "Q23. Perfect Performance Appraisal Reviewees",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Easy",
    "problemStatement": "Executive leadership is recognizing employees who achieved top ratings. Display employee name, department, evaluation year, and rating for all appraisals where the employee earned a perfect rating of 5.",
    "requirements": [
      "Join Employees and Performance_Reviews on employee ID.",
      "Filter for evaluations with a rating of 5.",
      "Display `emp_name`, `department`, `review_year`, and `rating`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Join on emp_id and filter for rating = 5 in the WHERE clause.",
    "expectedSql": "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
    "explanation": "Filtering on the joined appraisal table pinpoints top-tier evaluation events across the organization.",
    "tags": [
      "interview",
      "inner-join",
      "performance",
      "filtering"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "review_year",
        "rating"
      ],
      "values": [
        [
          "Girish",
          "Finance",
          2024,
          5
        ],
        [
          "Priya",
          "IT",
          2024,
          5
        ],
        [
          "Arjun",
          "Finance",
          2022,
          5
        ],
        [
          "Arjun",
          "Finance",
          2023,
          5
        ],
        [
          "Arjun",
          "Finance",
          2024,
          5
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 324,
    "interviewQuestionNumber": 24,
    "title": "Q24. Most Recent Appraisal per Staff Member",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Human Resources requires each employee's most recent performance evaluation. Display employee name, department, review year, and rating for each reviewed employee's latest appraisal record (the one with the latest review year, breaking ties by review ID).",
    "requirements": [
      "Join Employees with Performance_Reviews on employee ID.",
      "Filter for the single latest review record per employee using a correlated subquery.",
      "Display `emp_name`, `department`, `review_year`, and `rating`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Filter review_id equal to a correlated subquery ordered by review_year DESC, review_id DESC LIMIT 1.",
    "expectedSql": "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_id = (SELECT pr2.review_id FROM Performance_Reviews pr2 WHERE pr2.emp_id = pr.emp_id ORDER BY pr2.review_year DESC, pr2.review_id DESC LIMIT 1);",
    "explanation": "A correlated subquery picking the max review_id or max review_year isolates the singular most recent record per employee.",
    "tags": [
      "interview",
      "correlated-subquery",
      "latest-record",
      "top-n-per-group"
    ],
    "estimatedTimeMinutes": 6,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "review_year",
        "rating"
      ],
      "values": [
        [
          "Chetan",
          "IT",
          2024,
          4
        ],
        [
          "Dhruv",
          "Finance",
          2024,
          4
        ],
        [
          "Girish",
          "Finance",
          2024,
          5
        ],
        [
          "Harsha",
          "IT",
          2024,
          3
        ],
        [
          "Kiran",
          "HR",
          2024,
          4
        ],
        [
          "Meena",
          "Marketing",
          2024,
          4
        ],
        [
          "Naveen",
          "Finance",
          2024,
          2
        ],
        [
          "Priya",
          "IT",
          2024,
          5
        ],
        [
          "Sneha",
          "Sales",
          2024,
          4
        ],
        [
          "Varun",
          "Marketing",
          2024,
          4
        ],
        [
          "Divya",
          "Sales",
          2024,
          3
        ],
        [
          "Manoj",
          "IT",
          2024,
          3
        ],
        [
          "Arjun",
          "Finance",
          2024,
          5
        ],
        [
          "Bhumika",
          "HR",
          2024,
          3
        ]
      ],
      "rowCount": 14
    }
  },
  {
    "id": 325,
    "interviewQuestionNumber": 25,
    "title": "Q25. Staff Earning Above Company Average",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Easy",
    "problemStatement": "Workforce compensation is reviewing above-average earners across the company. Find all employees whose monthly salary strictly exceeds the overall average salary calculated across the entire workforce.",
    "requirements": [
      "Calculate the overall average employee salary across the organization.",
      "Filter for employees whose salary strictly exceeds that dynamic average.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    "tableName": "Employees",
    "hint": "Compare each employee's salary against a scalar subquery calculating AVG(salary).",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
    "explanation": "The scalar subquery computes the overall mean compensation once and evaluates each employee against it.",
    "tags": [
      "interview",
      "subquery",
      "scalar",
      "avg"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          103,
          "Chetan",
          "IT",
          55000
        ],
        [
          104,
          "Dhruv",
          "Finance",
          65000
        ],
        [
          106,
          "Girish",
          "Finance",
          80000
        ],
        [
          109,
          "Kiran",
          "HR",
          70000
        ],
        [
          110,
          "Meena",
          "Marketing",
          60000
        ],
        [
          112,
          "Priya",
          "IT",
          75000
        ],
        [
          115,
          "Varun",
          "Marketing",
          68000
        ],
        [
          117,
          "Manoj",
          "IT",
          52000
        ],
        [
          119,
          "Arjun",
          "Finance",
          90000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 326,
    "interviewQuestionNumber": 26,
    "title": "Q26. Second Highest Salary Identification",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Executive remuneration analysis is determining the second-highest compensation figure in the company without using LIMIT or OFFSET clauses. Find the second highest salary recorded in the Employees table.",
    "requirements": [
      "Determine the peak salary value using a subquery.",
      "Find the maximum salary among all values strictly less than that peak.",
      "Alias the resulting figure as `second_highest_salary`."
    ],
    "tableName": "Employees",
    "hint": "Find MAX(salary) WHERE salary < (SELECT MAX(salary) FROM Employees).",
    "expectedSql": "SELECT MAX(salary) AS second_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees);",
    "explanation": "Finding the maximum salary strictly smaller than the absolute maximum yields the 2nd highest salary in pure ANSI SQL.",
    "tags": [
      "interview",
      "subquery",
      "second-highest",
      "classic-interview"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "second_highest_salary"
      ],
      "values": [
        [
          80000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 327,
    "interviewQuestionNumber": 27,
    "title": "Q27. Staff in Well-Funded Corporate Divisions",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Corporate treasury is reviewing personnel assigned to divisions that receive above-average funding. Display employee name, department, and salary for staff working in departments whose operating budget strictly exceeds the average departmental budget.",
    "requirements": [
      "Calculate the average operating budget across all departments.",
      "Identify departments whose budget strictly exceeds that average.",
      "Filter employees whose department belongs to that qualifying set.",
      "Display `emp_name`, `department`, and `salary` from Employees."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use IN with a subquery filtering Departments WHERE budget > (SELECT AVG(budget) FROM Departments).",
    "expectedSql": "SELECT emp_name, department, salary FROM Employees WHERE department IN (SELECT dept_name FROM Departments WHERE budget > (SELECT AVG(budget) FROM Departments));",
    "explanation": "Nested subqueries first determine the company-wide average budget, find departments exceeding it, and filter the employee roster.",
    "tags": [
      "interview",
      "subquery",
      "in",
      "nested"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          "Anil",
          "IT",
          25000
        ],
        [
          "Chetan",
          "IT",
          55000
        ],
        [
          "Dhruv",
          "Finance",
          65000
        ],
        [
          "Girish",
          "Finance",
          80000
        ],
        [
          "Harsha",
          "IT",
          45000
        ],
        [
          "Naveen",
          "Finance",
          35000
        ],
        [
          "Priya",
          "IT",
          75000
        ],
        [
          "Manoj",
          "IT",
          52000
        ],
        [
          "Arjun",
          "Finance",
          90000
        ]
      ],
      "rowCount": 9
    }
  },
  {
    "id": 328,
    "interviewQuestionNumber": 28,
    "title": "Q28. Staff Deployed to High-Budget Initiatives",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Project governance is tracking unique staff members working on major corporate programs. Find the unique employee ID, full name, and department for employees assigned to at least one project with a capital budget strictly exceeding 250,000.",
    "requirements": [
      "Identify employee IDs assigned to projects with a budget strictly greater than 250,000.",
      "Filter Employees for staff matching that list, ensuring distinct records.",
      "Display `emp_id`, `emp_name`, and `department`."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Use DISTINCT with IN and an inner join between Employee_Projects and Projects.",
    "expectedSql": "SELECT DISTINCT e.emp_id, e.emp_name, e.department FROM Employees e WHERE e.emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget > 250000);",
    "explanation": "Subqueries filtering on junction tables cleanly isolate employees attached to high-value initiatives.",
    "tags": [
      "interview",
      "subquery",
      "in",
      "distinct"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          103,
          "Chetan",
          "IT"
        ],
        [
          104,
          "Dhruv",
          "Finance"
        ],
        [
          106,
          "Girish",
          "Finance"
        ],
        [
          111,
          "Naveen",
          "Finance"
        ],
        [
          112,
          "Priya",
          "IT"
        ],
        [
          117,
          "Manoj",
          "IT"
        ],
        [
          119,
          "Arjun",
          "Finance"
        ]
      ],
      "rowCount": 7
    }
  },
  {
    "id": 329,
    "interviewQuestionNumber": 29,
    "title": "Q29. Department with Largest Payroll Obligation",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Finance leadership is identifying the single business unit that carries the highest monthly wage expense. Display the department name and total cumulative monthly payroll for the department with the largest total payroll in the company.",
    "requirements": [
      "Group employees by department and calculate cumulative payroll aliased as `total_payroll`.",
      "Order by total payroll in descending order.",
      "Limit the result to the single top department.",
      "Display `department` and `total_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Group by department, sum salary, sort descending, and limit to 1.",
    "expectedSql": "SELECT department, SUM(salary) AS total_payroll FROM Employees GROUP BY department ORDER BY total_payroll DESC LIMIT 1;",
    "explanation": "Grouping by department and sorting by aggregate sum descending yields the largest spending department.",
    "tags": [
      "interview",
      "aggregation",
      "order-by",
      "limit"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "department",
        "total_payroll"
      ],
      "values": [
        [
          "Finance",
          270000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 330,
    "interviewQuestionNumber": 30,
    "title": "Q30. Staff Earning Above Department Average",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Workforce compensation is reviewing intra-departmental salary equity. Find all employees whose salary strictly exceeds the average salary of colleagues working within their own department, displaying employee name, department, and salary.",
    "requirements": [
      "Compare each employee's salary against the average salary computed for their own department.",
      "Filter for staff members earning strictly more than that departmental average.",
      "Display `emp_name`, `department`, and `salary` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Use a correlated subquery computing AVG(salary) for matching departments.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    "explanation": "Correlated subqueries re-evaluate the inner average per outer row, comparing each individual's salary to peers in their own department.",
    "tags": [
      "interview",
      "correlated-subquery",
      "salary",
      "avg"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          "Chetan",
          "IT",
          55000
        ],
        [
          "Girish",
          "Finance",
          80000
        ],
        [
          "Kiran",
          "HR",
          70000
        ],
        [
          "Meena",
          "Marketing",
          60000
        ],
        [
          "Priya",
          "IT",
          75000
        ],
        [
          "Sneha",
          "Sales",
          48000
        ],
        [
          "Varun",
          "Marketing",
          68000
        ],
        [
          "Manoj",
          "IT",
          52000
        ],
        [
          "Arjun",
          "Finance",
          90000
        ],
        [
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 10
    }
  },
  {
    "id": 331,
    "interviewQuestionNumber": 31,
    "title": "Q31. Staff Without Any Performance Appraisals",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "HR governance is tracking unreviewed staff members. Retrieve employee ID, name, and department for all employees for whom zero evaluation records exist in Performance_Reviews.",
    "requirements": [
      "Verify the non-existence of matching review records for each employee.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use the correlated NOT EXISTS operator checking Performance_Reviews on emp_id.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id);",
    "explanation": "NOT EXISTS evaluates to true when the correlated subquery returns 0 rows, efficiently handling NULL-safe anti-joins.",
    "tags": [
      "interview",
      "not-exists",
      "anti-join",
      "subquery"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department"
      ],
      "values": [
        [
          101,
          "Anil",
          "IT"
        ],
        [
          105,
          "Farah",
          "HR"
        ],
        [
          108,
          "Isha",
          "Marketing"
        ],
        [
          113,
          "Rahul",
          "Sales"
        ],
        [
          118,
          "Pooja",
          "HR"
        ],
        [
          120,
          "Keerthi",
          "Sales"
        ]
      ],
      "rowCount": 6
    }
  },
  {
    "id": 332,
    "interviewQuestionNumber": 32,
    "title": "Q32. Initiatives Staffed Exclusively by IT Personnel",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Project governance is identifying specialized technology initiatives staffed only by technical division members. Display project ID and project name for initiatives that have at least one team member assigned AND where zero assigned team members belong to departments other than IT.",
    "requirements": [
      "Verify that the project has at least one assigned team member in Employee_Projects.",
      "Verify that no assigned team member belongs to a department other than 'IT'.",
      "Display `project_id` and `project_name` from Projects."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "Combine an EXISTS check for project staffing with a NOT EXISTS check for non-IT personnel.",
    "expectedSql": "SELECT p.project_id, p.project_name FROM Projects p WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id) AND NOT EXISTS (SELECT 1 FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.project_id = p.project_id AND e.department <> 'IT');",
    "explanation": "Universal quantification ('all elements satisfy X') is expressed in SQL via double negation: 'exists at least one' AND 'not exists any that violates X'.",
    "tags": [
      "interview",
      "not-exists",
      "relational-division",
      "logic"
    ],
    "estimatedTimeMinutes": 6,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name"
      ],
      "values": [
        [
          501,
          "Cloud Migration"
        ],
        [
          502,
          "ERP Modernization"
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 333,
    "interviewQuestionNumber": 33,
    "title": "Q33. Third Highest Distinct Salary Without LIMIT",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Compensation analytics is determining the third-highest distinct salary tier across the company without using LIMIT or OFFSET clauses. Calculate the third highest distinct salary recorded in the Employees table.",
    "requirements": [
      "Filter out the peak salary and second peak salary using nested subqueries.",
      "Calculate the maximum salary remaining after excluding the top two salary levels.",
      "Alias the resulting metric as `third_highest_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use nested MAX(salary) subqueries to successively peel away the top two compensation tiers.",
    "expectedSql": "SELECT MAX(salary) AS third_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees));",
    "explanation": "Nesting the condition salary < MAX(salary) twice peels off the 1st and 2nd highest salaries to isolate the 3rd highest distinct salary.",
    "tags": [
      "interview",
      "subquery",
      "nth-highest",
      "classic-interview"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "third_highest_salary"
      ],
      "values": [
        [
          75000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 334,
    "interviewQuestionNumber": 34,
    "title": "Q34. Staff Allocated Above-Average Project Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Resource scheduling identifies team members carrying disproportionate workload on their initiatives. Find all project assignments where an employee's allocated weekly hours strictly exceed the average allocated hours on that specific project, displaying project ID, employee name, and allocated hours.",
    "requirements": [
      "Join Employee_Projects with Employees on employee ID.",
      "Compare each assignment's weekly hours against the average weekly hours on that same project.",
      "Filter for assignments exceeding that project's average workload.",
      "Display `project_id`, `emp_name`, and `hours_allocated`."
    ],
    "tableName": "Employee_Projects, Employees",
    "hint": "Compare hours_allocated to a correlated subquery computing AVG(hours_allocated) for that project_id.",
    "expectedSql": "SELECT ep.project_id, e.emp_name, ep.hours_allocated FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.hours_allocated > (SELECT AVG(ep2.hours_allocated) FROM Employee_Projects ep2 WHERE ep2.project_id = ep.project_id);",
    "explanation": "Correlating on project_id computes the specific project's average workload and filters out assignments below it.",
    "tags": [
      "interview",
      "correlated-subquery",
      "workload",
      "comparison"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "project_id",
        "emp_name",
        "hours_allocated"
      ],
      "values": [
        [
          501,
          "Chetan",
          35
        ],
        [
          501,
          "Harsha",
          40
        ],
        [
          502,
          "Manoj",
          30
        ],
        [
          503,
          "Bhumika",
          35
        ],
        [
          503,
          "Farah",
          30
        ],
        [
          504,
          "Dhruv",
          35
        ],
        [
          504,
          "Naveen",
          30
        ],
        [
          505,
          "Isha",
          35
        ],
        [
          505,
          "Meena",
          30
        ],
        [
          506,
          "Sneha",
          35
        ],
        [
          506,
          "Divya",
          30
        ]
      ],
      "rowCount": 11
    }
  },
  {
    "id": 335,
    "interviewQuestionNumber": 35,
    "title": "Q35. Top Three Highest Earners in the Enterprise",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Easy",
    "problemStatement": "Executive remuneration analysis requires an extract of the three highest-paid employees in the organization. Display employee name, department, and salary for the 3 top earners, ordered from highest salary to lowest.",
    "requirements": [
      "Select `emp_name`, `department`, and `salary` from Employees.",
      "Sort by salary in descending order.",
      "Limit the final result set to exactly 3 records."
    ],
    "tableName": "Employees",
    "hint": "Sort descending by salary and apply LIMIT 3.",
    "expectedSql": "SELECT emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 3;",
    "explanation": "ORDER BY salary DESC paired with LIMIT 3 returns the top 3 highest paid individuals.",
    "tags": [
      "interview",
      "order-by",
      "limit",
      "top-n"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          "Arjun",
          "Finance",
          90000
        ],
        [
          "Girish",
          "Finance",
          80000
        ],
        [
          "Priya",
          "IT",
          75000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 336,
    "interviewQuestionNumber": 36,
    "title": "Q36. Peak Earner within Each Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Workforce compensation is identifying the top salary recipient inside every corporate department. Retrieve employee name, department, and salary for the employee who earns the maximum salary in their respective department.",
    "requirements": [
      "For each employee, compare their salary to the maximum salary in their department.",
      "Filter for staff members matching that departmental maximum.",
      "Display `emp_name`, `department`, and `salary` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Filter where salary equals a correlated subquery computing MAX(salary) for that department.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary = (SELECT MAX(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    "explanation": "Correlating the salary to the maximum department salary isolates the top earner per group.",
    "tags": [
      "interview",
      "correlated-subquery",
      "top-1-per-group",
      "max"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          "Kiran",
          "HR",
          70000
        ],
        [
          "Priya",
          "IT",
          75000
        ],
        [
          "Varun",
          "Marketing",
          68000
        ],
        [
          "Arjun",
          "Finance",
          90000
        ],
        [
          "Keerthi",
          "Sales",
          55000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 337,
    "interviewQuestionNumber": 37,
    "title": "Q37. Dense Ranking of Departmental Salaries",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Compensation analytics requires ranking employee salaries within each division without skipping ranking numbers when ties occur. For each employee, display their name, department, salary, and their departmental salary rank (highest salary = rank 1), aliasing the rank as `dept_salary_rank`.",
    "requirements": [
      "Apply dense ranking partitioned by department and ordered by salary in descending order.",
      "Alias the calculated rank as `dept_salary_rank`.",
      "Display `emp_name`, `department`, `salary`, and `dept_salary_rank`."
    ],
    "tableName": "Employees",
    "hint": "Use DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC).",
    "expectedSql": "SELECT emp_name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_salary_rank FROM Employees;",
    "explanation": "DENSE_RANK() partitions rows by department and assigns consecutive integer ranks without gaps when ties occur.",
    "tags": [
      "interview",
      "window-function",
      "dense-rank",
      "partition-by"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "dept_salary_rank"
      ],
      "values": [
        [
          "Arjun",
          "Finance",
          90000,
          1
        ],
        [
          "Girish",
          "Finance",
          80000,
          2
        ],
        [
          "Dhruv",
          "Finance",
          65000,
          3
        ],
        [
          "Naveen",
          "Finance",
          35000,
          4
        ],
        [
          "Kiran",
          "HR",
          70000,
          1
        ],
        [
          "Bhumika",
          "HR",
          40000,
          2
        ],
        [
          "Farah",
          "HR",
          32000,
          3
        ],
        [
          "Pooja",
          "HR",
          27000,
          4
        ],
        [
          "Priya",
          "IT",
          75000,
          1
        ],
        [
          "Chetan",
          "IT",
          55000,
          2
        ],
        [
          "Manoj",
          "IT",
          52000,
          3
        ],
        [
          "Harsha",
          "IT",
          45000,
          4
        ],
        [
          "Anil",
          "IT",
          25000,
          5
        ],
        [
          "Varun",
          "Marketing",
          68000,
          1
        ],
        [
          "Meena",
          "Marketing",
          60000,
          2
        ],
        [
          "Isha",
          "Marketing",
          28000,
          3
        ],
        [
          "Keerthi",
          "Sales",
          55000,
          1
        ],
        [
          "Sneha",
          "Sales",
          48000,
          2
        ],
        [
          "Divya",
          "Sales",
          42000,
          3
        ],
        [
          "Rahul",
          "Sales",
          30000,
          4
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 338,
    "interviewQuestionNumber": 38,
    "title": "Q38. Colleague Compensation Parity Identification",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Compensation equity is auditing identical salary points across the organization. Find all unique pairs of employees who earn the exact same monthly salary, displaying employee 1 name as `employee_1`, employee 2 name as `employee_2`, and the matching salary, avoiding duplicate reverse pairs.",
    "requirements": [
      "Join Employees with itself on matching salary.",
      "Enforce `e1.emp_id < e2.emp_id` to eliminate mirror pairs and self-pairings.",
      "Display `employee_1`, `employee_2`, and `salary`."
    ],
    "tableName": "Employees",
    "hint": "Self-join Employees on salary with e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.salary FROM Employees e1 INNER JOIN Employees e2 ON e1.salary = e2.salary AND e1.emp_id < e2.emp_id;",
    "explanation": "Self-joining with an equality check on salary identifies compensation parity between colleagues.",
    "tags": [
      "interview",
      "self-join",
      "duplicates",
      "parity"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "employee_1",
        "employee_2",
        "salary"
      ],
      "values": [
        [
          "Chetan",
          "Keerthi",
          55000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 339,
    "interviewQuestionNumber": 39,
    "title": "Q39. Entry-Level Compensation Baseline (Bottom 2 Earners)",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Easy",
    "problemStatement": "Human Resources is verifying minimum pay rates across the company. Display employee name, department, and monthly salary for the 2 lowest-earning employees in the organization, ordered from lowest salary to highest.",
    "requirements": [
      "Select `emp_name`, `department`, and `salary` from Employees.",
      "Sort records by salary in ascending order (lowest first).",
      "Limit the final result set to exactly 2 records."
    ],
    "tableName": "Employees",
    "hint": "Sort by salary ASC and apply LIMIT 2.",
    "expectedSql": "SELECT emp_name, department, salary FROM Employees ORDER BY salary ASC LIMIT 2;",
    "explanation": "Ascending sort with LIMIT 2 retrieves the base entry-level compensation records.",
    "tags": [
      "interview",
      "order-by",
      "limit",
      "bottom-n"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          "Anil",
          "IT",
          25000
        ],
        [
          "Pooja",
          "HR",
          27000
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 340,
    "interviewQuestionNumber": 40,
    "title": "Q40. Duplicate Regional Office Locations",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Facilities planning is auditing geographical consolidation of corporate divisions. Find all office locations in Departments that house strictly more than 1 registered department, displaying the location and total department count (`dept_count`).",
    "requirements": [
      "Group records in Departments by `location`.",
      "Count departments in each location aliased as `dept_count`.",
      "Filter groups where department count is strictly greater than 1.",
      "Display `location` and `dept_count`."
    ],
    "tableName": "Departments",
    "hint": "Group by location and apply HAVING COUNT(*) > 1.",
    "expectedSql": "SELECT location, COUNT(*) AS dept_count FROM Departments GROUP BY location HAVING COUNT(*) > 1;",
    "explanation": "Group by column + HAVING COUNT(*) > 1 is the canonical SQL pattern for identifying duplicate categorical values.",
    "tags": [
      "interview",
      "duplicates",
      "having",
      "data-quality"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "location",
        "dept_count"
      ],
      "values": [
        [
          "Bengaluru",
          3
        ],
        [
          "Chennai",
          2
        ],
        [
          "Hyderabad",
          3
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 341,
    "interviewQuestionNumber": 41,
    "title": "Q41. Corporate Divisions Lacking Active Staff",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Organization design is identifying registered corporate departments that currently have zero assigned staff members. Display the department ID, department name, and location for all departments in Departments that have no matching employees.",
    "requirements": [
      "Combine Departments with Employees on department name preserving all departments.",
      "Filter for departments where no matching employee record exists.",
      "Display `dept_id`, `dept_name`, and `location`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use a left outer join from Departments to Employees and filter where emp_id is null.",
    "expectedSql": "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
    "explanation": "Checking for NULL primary keys on the joined child table detects orphaned parent master records.",
    "tags": [
      "interview",
      "left-join",
      "anti-join",
      "data-integrity"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "location"
      ],
      "values": [
        [
          6,
          "Legal",
          "Hyderabad"
        ],
        [
          7,
          "Operations",
          "Chennai"
        ],
        [
          8,
          "R&D",
          "Bengaluru"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 342,
    "interviewQuestionNumber": 42,
    "title": "Q42. Inactive Initiatives with Zero Workload",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Portfolio governance is identifying stalled or inactive corporate initiatives. Display project ID, name, and status for all projects that either have zero assigned staff members OR have a cumulative weekly workload allocation of 0 hours.",
    "requirements": [
      "Combine Projects and Employee_Projects on project ID preserving all projects.",
      "Group by project ID, project name, and status.",
      "Filter groups where assigned staff count is 0 OR cumulative weekly hours equals 0.",
      "Display `project_id`, `project_name`, and `status`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Group by project attributes and filter with HAVING COUNT(emp_id) = 0 OR COALESCE(SUM(hours_allocated), 0) = 0.",
    "expectedSql": "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0;",
    "explanation": "Auditing zero assignments or zero hours allocated highlights inactive and stalled organizational initiatives.",
    "tags": [
      "interview",
      "data-quality",
      "having",
      "coalesce"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "status"
      ],
      "values": [
        [
          507,
          "Compliance Automation",
          "Planning"
        ],
        [
          508,
          "NextGen AI Suite",
          "Planning"
        ]
      ],
      "rowCount": 2
    }
  },
  {
    "id": 343,
    "interviewQuestionNumber": 43,
    "title": "Q43. Intra-Departmental High-Salary Outliers",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Hard",
    "problemStatement": "Compensation governance is identifying significant salary outliers within divisions. Find employees whose salary strictly exceeds 130% (1.3 times) of their own department's average salary, displaying employee name, department, salary, and the department average salary rounded to 2 decimal places (`dept_avg_salary`).",
    "requirements": [
      "Join Employees with a derived table calculating average salary by department.",
      "Filter for employees whose salary strictly exceeds `avg_dept_sal * 1.3`.",
      "Display `emp_name`, `department`, `salary`, and `dept_avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Join with a department average derived table and compare salary to sub.avg_dept_sal * 1.3.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary, ROUND(sub.avg_dept_sal, 2) AS dept_avg_salary FROM Employees e INNER JOIN (SELECT department, AVG(salary) AS avg_dept_sal FROM Employees GROUP BY department) sub ON e.department = sub.department WHERE e.salary > sub.avg_dept_sal * 1.3;",
    "explanation": "Joining with pre-aggregated department averages allows mathematical multiplier comparisons to catch statistical outliers.",
    "tags": [
      "interview",
      "outliers",
      "join",
      "statistics"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "dept_avg_salary"
      ],
      "values": [
        [
          "Kiran",
          "HR",
          70000,
          42250
        ],
        [
          "Priya",
          "IT",
          75000,
          50400
        ],
        [
          "Varun",
          "Marketing",
          68000,
          52000
        ],
        [
          "Arjun",
          "Finance",
          90000,
          67500
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 344,
    "interviewQuestionNumber": 44,
    "title": "Q44. Senior Professional Salary Review Eligibility",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is compiling a salary review eligibility roster for seasoned personnel. Find all employees who work in either the Finance or IT departments, possess at least 5 years of professional experience, and earn less than 70,000.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, `experience`, and `salary` from Employees.",
      "Filter for departments in ('Finance', 'IT').",
      "Filter for `experience >= 5` and `salary < 70000`."
    ],
    "tableName": "Employees",
    "hint": "Combine a department set membership check with experience and salary inequalities using AND.",
    "expectedSql": "SELECT emp_id, emp_name, department, experience, salary FROM Employees WHERE department IN ('Finance', 'IT') AND experience >= 5 AND salary < 70000;",
    "explanation": "Multi-condition business policy filtering identifies veteran employees who may be under-compensated.",
    "tags": [
      "interview",
      "business-logic",
      "eligibility",
      "where"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "experience",
        "salary"
      ],
      "values": [
        [
          103,
          "Chetan",
          "IT",
          5,
          55000
        ],
        [
          104,
          "Dhruv",
          "Finance",
          7,
          65000
        ],
        [
          117,
          "Manoj",
          "IT",
          6,
          52000
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 345,
    "interviewQuestionNumber": 45,
    "title": "Q45. Departments Exceeding Allocated Payroll Budget",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Hard",
    "problemStatement": "Corporate audit is identifying departments where annual employee wage obligations outstrip the allocated departmental budget. For departments where annualized payroll (monthly payroll multiplied by 12) strictly exceeds the department's annual budget, display the department name, annualized payroll (`annual_payroll`), and annual budget (`budget`).",
    "requirements": [
      "Join Departments and Employees on matching department name.",
      "Group records by department name and budget.",
      "Calculate annualized payroll as `SUM(e.salary * 12)` aliased as `annual_payroll`.",
      "Filter groups where annualized payroll strictly exceeds departmental budget.",
      "Display `dept_name`, `annual_payroll`, and `budget`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Group by dept_name and budget, and filter with HAVING SUM(e.salary * 12) > d.budget.",
    "expectedSql": "SELECT d.dept_name, SUM(e.salary * 12) AS annual_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING SUM(e.salary * 12) > d.budget;",
    "explanation": "Business budget compliance audits aggregate monthly salaries across 12 months and compare against authorized department allocations.",
    "tags": [
      "interview",
      "budget",
      "payroll",
      "having",
      "business-logic"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "annual_payroll",
        "budget"
      ],
      "values": [
        [
          "Finance",
          3240000,
          1500000
        ],
        [
          "HR",
          2028000,
          500000
        ],
        [
          "IT",
          3024000,
          1200000
        ],
        [
          "Marketing",
          1872000,
          800000
        ],
        [
          "Sales",
          2100000,
          950000
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 346,
    "interviewQuestionNumber": 46,
    "title": "Q46. Staff Workload Capacity Tier Classification",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Hard",
    "problemStatement": "Resource governance classifies individual employee workload capacity across corporate projects. For all employees, display employee ID, full name, cumulative allocated weekly hours (defaulting to 0 if unassigned, aliased as `total_hours`), and a categorical workload tier (`workload_tier`): 'Unassigned' if 0 hours, 'Light Workload' for under 25 hours, 'Moderate Workload' for 25 to 35 hours inclusive, and 'Heavy Workload' for over 35 hours.",
    "requirements": [
      "Combine Employees and Employee_Projects preserving all employees.",
      "Group by employee ID and employee name.",
      "Sum allocated weekly hours substituting 0 for nulls, aliased as `total_hours`.",
      "Categorize total hours into 'Unassigned', 'Light Workload', 'Moderate Workload', or 'Heavy Workload' aliased as `workload_tier`.",
      "Display `emp_id`, `emp_name`, `total_hours`, and `workload_tier`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use a left outer join from Employees to Employee_Projects and evaluate SUM(hours_allocated) with a CASE expression.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, CASE WHEN COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unassigned' WHEN SUM(ep.hours_allocated) < 25 THEN 'Light Workload' WHEN SUM(ep.hours_allocated) <= 35 THEN 'Moderate Workload' ELSE 'Heavy Workload' END AS workload_tier FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name;",
    "explanation": "Combining aggregation, COALESCE, and CASE categorization creates powerful capacity planning summaries.",
    "tags": [
      "interview",
      "case",
      "coalesce",
      "capacity-planning"
    ],
    "estimatedTimeMinutes": 6,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "total_hours",
        "workload_tier"
      ],
      "values": [
        [
          101,
          "Anil",
          0,
          "Unassigned"
        ],
        [
          102,
          "Bhumika",
          35,
          "Moderate Workload"
        ],
        [
          103,
          "Chetan",
          50,
          "Heavy Workload"
        ],
        [
          104,
          "Dhruv",
          35,
          "Moderate Workload"
        ],
        [
          105,
          "Farah",
          30,
          "Moderate Workload"
        ],
        [
          106,
          "Girish",
          20,
          "Light Workload"
        ],
        [
          107,
          "Harsha",
          40,
          "Heavy Workload"
        ],
        [
          108,
          "Isha",
          35,
          "Moderate Workload"
        ],
        [
          109,
          "Kiran",
          20,
          "Light Workload"
        ],
        [
          110,
          "Meena",
          30,
          "Moderate Workload"
        ],
        [
          111,
          "Naveen",
          30,
          "Moderate Workload"
        ],
        [
          112,
          "Priya",
          40,
          "Heavy Workload"
        ],
        [
          113,
          "Rahul",
          0,
          "Unassigned"
        ],
        [
          114,
          "Sneha",
          35,
          "Moderate Workload"
        ],
        [
          115,
          "Varun",
          40,
          "Heavy Workload"
        ],
        [
          116,
          "Divya",
          30,
          "Moderate Workload"
        ],
        [
          117,
          "Manoj",
          30,
          "Moderate Workload"
        ],
        [
          118,
          "Pooja",
          0,
          "Unassigned"
        ],
        [
          119,
          "Arjun",
          10,
          "Light Workload"
        ],
        [
          120,
          "Keerthi",
          25,
          "Moderate Workload"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 347,
    "interviewQuestionNumber": 47,
    "title": "Q47. Categorical Compensation Tier Placement",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Easy",
    "problemStatement": "Compensation planning classifies employees into categorical compensation bands: 'Low' for salaries under 35,000, 'Medium' for salaries from 35,000 to 60,000 inclusive, and 'High' for salaries above 60,000. Display employee name, department, monthly salary, and the assigned salary tier aliased as `salary_tier`.",
    "requirements": [
      "Classify each employee's salary into 'Low', 'Medium', or 'High' aliased as `salary_tier`.",
      "Display `emp_name`, `department`, `salary`, and `salary_tier` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Use a CASE expression testing salary thresholds.",
    "expectedSql": "SELECT emp_name, department, salary, CASE WHEN salary < 35000 THEN 'Low' WHEN salary <= 60000 THEN 'Medium' ELSE 'High' END AS salary_tier FROM Employees;",
    "explanation": "CASE statements in SELECT allow branching conditional categorization without modifying table data.",
    "tags": [
      "interview",
      "case",
      "classification",
      "tiers"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "salary_tier"
      ],
      "values": [
        [
          "Anil",
          "IT",
          25000,
          "Low"
        ],
        [
          "Bhumika",
          "HR",
          40000,
          "Medium"
        ],
        [
          "Chetan",
          "IT",
          55000,
          "Medium"
        ],
        [
          "Dhruv",
          "Finance",
          65000,
          "High"
        ],
        [
          "Farah",
          "HR",
          32000,
          "Low"
        ],
        [
          "Girish",
          "Finance",
          80000,
          "High"
        ],
        [
          "Harsha",
          "IT",
          45000,
          "Medium"
        ],
        [
          "Isha",
          "Marketing",
          28000,
          "Low"
        ],
        [
          "Kiran",
          "HR",
          70000,
          "High"
        ],
        [
          "Meena",
          "Marketing",
          60000,
          "Medium"
        ],
        [
          "Naveen",
          "Finance",
          35000,
          "Medium"
        ],
        [
          "Priya",
          "IT",
          75000,
          "High"
        ],
        [
          "Rahul",
          "Sales",
          30000,
          "Low"
        ],
        [
          "Sneha",
          "Sales",
          48000,
          "Medium"
        ],
        [
          "Varun",
          "Marketing",
          68000,
          "High"
        ],
        [
          "Divya",
          "Sales",
          42000,
          "Medium"
        ],
        [
          "Manoj",
          "IT",
          52000,
          "Medium"
        ],
        [
          "Pooja",
          "HR",
          27000,
          "Low"
        ],
        [
          "Arjun",
          "Finance",
          90000,
          "High"
        ],
        [
          "Keerthi",
          "Sales",
          55000,
          "Medium"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 348,
    "interviewQuestionNumber": 48,
    "title": "Q48. Experience-Based Seniority Tier Placement",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Easy",
    "problemStatement": "Human Resources is standardizing seniority titles based on career tenure: 'Fresher' for under 2 years of experience, 'Junior' for 2 to 4 years inclusive, 'Mid-Level' for 5 to 8 years inclusive, and 'Senior' for more than 8 years. Display employee name, years of experience, and the assigned seniority tier aliased as `seniority_tier`.",
    "requirements": [
      "Classify employees into 'Fresher', 'Junior', 'Mid-Level', or 'Senior' aliased as `seniority_tier`.",
      "Display `emp_name`, `experience`, and `seniority_tier` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Use a CASE expression with multiple WHEN branches testing the experience column.",
    "expectedSql": "SELECT emp_name, experience, CASE WHEN experience < 2 THEN 'Fresher' WHEN experience <= 4 THEN 'Junior' WHEN experience <= 8 THEN 'Mid-Level' ELSE 'Senior' END AS seniority_tier FROM Employees;",
    "explanation": "Evaluating integer thresholds sequentially in a CASE expression partitions employees into standard organizational career levels.",
    "tags": [
      "interview",
      "case",
      "seniority",
      "experience"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "experience",
        "seniority_tier"
      ],
      "values": [
        [
          "Anil",
          1,
          "Fresher"
        ],
        [
          "Bhumika",
          3,
          "Junior"
        ],
        [
          "Chetan",
          5,
          "Mid-Level"
        ],
        [
          "Dhruv",
          7,
          "Mid-Level"
        ],
        [
          "Farah",
          2,
          "Junior"
        ],
        [
          "Girish",
          10,
          "Senior"
        ],
        [
          "Harsha",
          4,
          "Junior"
        ],
        [
          "Isha",
          1,
          "Fresher"
        ],
        [
          "Kiran",
          8,
          "Mid-Level"
        ],
        [
          "Meena",
          6,
          "Mid-Level"
        ],
        [
          "Naveen",
          3,
          "Junior"
        ],
        [
          "Priya",
          9,
          "Senior"
        ],
        [
          "Rahul",
          2,
          "Junior"
        ],
        [
          "Sneha",
          5,
          "Mid-Level"
        ],
        [
          "Varun",
          8,
          "Mid-Level"
        ],
        [
          "Divya",
          3,
          "Junior"
        ],
        [
          "Manoj",
          6,
          "Mid-Level"
        ],
        [
          "Pooja",
          1,
          "Fresher"
        ],
        [
          "Arjun",
          11,
          "Senior"
        ],
        [
          "Keerthi",
          4,
          "Junior"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 349,
    "interviewQuestionNumber": 49,
    "title": "Q49. High vs Standard Earner Headcount per Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Medium",
    "problemStatement": "Finance leadership is comparing the balance between high earners and standard earners across business units. For each department, display the department name, count of high earners earning strictly over 50,000 (aliased as `high_earners`), and count of standard earners earning 50,000 or less (aliased as `standard_earners`).",
    "requirements": [
      "Group records by `department` in Employees.",
      "Count staff with salary > 50,000 using conditional aggregation, aliased as `high_earners`.",
      "Count staff with salary <= 50,000 using conditional aggregation, aliased as `standard_earners`.",
      "Display `department`, `high_earners`, and `standard_earners`."
    ],
    "tableName": "Employees",
    "hint": "Use SUM with CASE expressions to pivot high earner and standard earner counts into separate columns.",
    "expectedSql": "SELECT department, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners, SUM(CASE WHEN salary <= 50000 THEN 1 ELSE 0 END) AS standard_earners FROM Employees GROUP BY department;",
    "explanation": "Embedding CASE expressions inside SUM() pivots conditional counts into multiple columns, a key interview data modeling pattern.",
    "tags": [
      "interview",
      "conditional-aggregation",
      "case",
      "pivot"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "department",
        "high_earners",
        "standard_earners"
      ],
      "values": [
        [
          "Finance",
          3,
          1
        ],
        [
          "HR",
          1,
          3
        ],
        [
          "IT",
          3,
          2
        ],
        [
          "Marketing",
          2,
          1
        ],
        [
          "Sales",
          1,
          3
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 350,
    "interviewQuestionNumber": 50,
    "title": "Q50. Performance Rating Merit Recommendation Mapping",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Medium",
    "problemStatement": "The compensation committee maps performance ratings to standardized merit recommendations: 'Exceptional' for rating 5, 'Strong' for rating 4, 'Satisfactory' for rating 3, and 'Needs Improvement' for any lower rating. For all completed appraisals, display employee name, review year, rating, and the corresponding merit recommendation aliased as `recommendation`.",
    "requirements": [
      "Join Employees and Performance_Reviews on employee ID.",
      "Map ratings to 'Exceptional', 'Strong', 'Satisfactory', or 'Needs Improvement' aliased as `recommendation`.",
      "Display `emp_name`, `review_year`, `rating`, and `recommendation`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Join on emp_id and use a CASE expression on rating to generate the recommendation label.",
    "expectedSql": "SELECT e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.rating = 5 THEN 'Exceptional' WHEN pr.rating = 4 THEN 'Strong' WHEN pr.rating = 3 THEN 'Satisfactory' ELSE 'Needs Improvement' END AS recommendation FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Mapping numeric review scores to corporate qualitative appraisal designations is a classic CASE expression application.",
    "tags": [
      "interview",
      "case",
      "performance",
      "ratings"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "review_year",
        "rating",
        "recommendation"
      ],
      "values": [
        [
          "Chetan",
          2024,
          4,
          "Strong"
        ],
        [
          "Dhruv",
          2024,
          4,
          "Strong"
        ],
        [
          "Girish",
          2023,
          4,
          "Strong"
        ],
        [
          "Girish",
          2024,
          5,
          "Exceptional"
        ],
        [
          "Harsha",
          2024,
          3,
          "Satisfactory"
        ],
        [
          "Kiran",
          2024,
          4,
          "Strong"
        ],
        [
          "Meena",
          2024,
          4,
          "Strong"
        ],
        [
          "Naveen",
          2024,
          2,
          "Needs Improvement"
        ],
        [
          "Priya",
          2023,
          4,
          "Strong"
        ],
        [
          "Priya",
          2024,
          5,
          "Exceptional"
        ],
        [
          "Sneha",
          2024,
          4,
          "Strong"
        ],
        [
          "Varun",
          2024,
          4,
          "Strong"
        ],
        [
          "Divya",
          2024,
          3,
          "Satisfactory"
        ],
        [
          "Manoj",
          2024,
          3,
          "Satisfactory"
        ],
        [
          "Arjun",
          2022,
          5,
          "Exceptional"
        ],
        [
          "Arjun",
          2023,
          5,
          "Exceptional"
        ],
        [
          "Arjun",
          2024,
          5,
          "Exceptional"
        ],
        [
          "Bhumika",
          2024,
          3,
          "Satisfactory"
        ]
      ],
      "rowCount": 18
    }
  },
  {
    "id": 351,
    "title": "Regional Operational Zone Classification",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Regional logistics and operations planning divides branch locations into operational zones for resource distribution. For all employees, display employee ID, full name, office city, and an operational zone label (`operational_zone`): 'South-Central' for Hyderabad and Vijayawada, 'South-Coastal' for Chennai, 'South-Tech' for Bengaluru, and 'Other Zone' for any other location.",
    "requirements": [
      "Categorize `city` into 'South-Central', 'South-Coastal', 'South-Tech', or 'Other Zone'.",
      "Alias the categorized zone as `operational_zone`.",
      "Display `emp_id`, `emp_name`, `city`, and `operational_zone` in that exact order."
    ],
    "tableName": "Employees",
    "hint": "Use conditional logic matching city values to assign the target zone strings.",
    "expectedSql": "SELECT emp_id, emp_name, city, CASE city WHEN 'Hyderabad' THEN 'South-Central' WHEN 'Vijayawada' THEN 'South-Central' WHEN 'Chennai' THEN 'South-Coastal' WHEN 'Bengaluru' THEN 'South-Tech' ELSE 'Other Zone' END AS operational_zone FROM Employees;",
    "explanation": "A simple CASE expression compares an input expression (city) to a series of literal values using implicit equality tests. The ELSE branch catches any city not explicitly matched.",
    "tags": [
      "case",
      "simple-case",
      "fundamentals",
      "mapping"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "city",
        "operational_zone"
      ],
      "values": [
        [
          101,
          "Anil",
          "Hyderabad",
          "South-Central"
        ],
        [
          102,
          "Bhumika",
          "Vijayawada",
          "South-Central"
        ],
        [
          103,
          "Chetan",
          "Hyderabad",
          "South-Central"
        ],
        [
          104,
          "Dhruv",
          "Chennai",
          "South-Coastal"
        ],
        [
          105,
          "Farah",
          "Hyderabad",
          "South-Central"
        ],
        [
          106,
          "Girish",
          "Bengaluru",
          "South-Tech"
        ],
        [
          107,
          "Harsha",
          "Vijayawada",
          "South-Central"
        ],
        [
          108,
          "Isha",
          "Chennai",
          "South-Coastal"
        ],
        [
          109,
          "Kiran",
          "Bengaluru",
          "South-Tech"
        ],
        [
          110,
          "Meena",
          "Hyderabad",
          "South-Central"
        ],
        [
          111,
          "Naveen",
          "Chennai",
          "South-Coastal"
        ],
        [
          112,
          "Priya",
          "Bengaluru",
          "South-Tech"
        ],
        [
          113,
          "Rahul",
          "Vijayawada",
          "South-Central"
        ],
        [
          114,
          "Sneha",
          "Hyderabad",
          "South-Central"
        ],
        [
          115,
          "Varun",
          "Chennai",
          "South-Coastal"
        ],
        [
          116,
          "Divya",
          "Bengaluru",
          "South-Tech"
        ],
        [
          117,
          "Manoj",
          "Chennai",
          "South-Coastal"
        ],
        [
          118,
          "Pooja",
          "Vijayawada",
          "South-Central"
        ],
        [
          119,
          "Arjun",
          "Hyderabad",
          "South-Central"
        ],
        [
          120,
          "Keerthi",
          "Chennai",
          "South-Coastal"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 352,
    "title": "Onboarding Era Indicator Tag",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Talent development tracks recent joiners for onboarding follow-ups. Display employee name, joining year, and a binary flag (`is_recent_hire`) indicating whether the employee joined in 2023 or later (1 if joining year is 2023 or greater, 0 otherwise).",
    "requirements": [
      "Evaluate whether `joining_year >= 2023`, assigning 1 for true and 0 for false.",
      "Alias the binary indicator as `is_recent_hire`.",
      "Display `emp_name`, `joining_year`, and `is_recent_hire`."
    ],
    "tableName": "Employees",
    "hint": "Use conditional expression syntax returning 1 when joining_year is 2023 or greater, and 0 otherwise.",
    "expectedSql": "SELECT emp_name, joining_year, CASE WHEN joining_year >= 2023 THEN 1 ELSE 0 END AS is_recent_hire FROM Employees;",
    "explanation": "Searched CASE expressions evaluate arbitrary boolean expressions in each WHEN clause. Returning 1 and 0 is standard SQL practice for creating numeric indicator flags.",
    "tags": [
      "case",
      "searched-case",
      "boolean-flag",
      "fundamentals"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "joining_year",
        "is_recent_hire"
      ],
      "values": [
        [
          "Anil",
          2025,
          1
        ],
        [
          "Bhumika",
          2023,
          1
        ],
        [
          "Chetan",
          2021,
          0
        ],
        [
          "Dhruv",
          2019,
          0
        ],
        [
          "Farah",
          2024,
          1
        ],
        [
          "Girish",
          2016,
          0
        ],
        [
          "Harsha",
          2022,
          0
        ],
        [
          "Isha",
          2025,
          1
        ],
        [
          "Kiran",
          2018,
          0
        ],
        [
          "Meena",
          2020,
          0
        ],
        [
          "Naveen",
          2023,
          1
        ],
        [
          "Priya",
          2017,
          0
        ],
        [
          "Rahul",
          2024,
          1
        ],
        [
          "Sneha",
          2021,
          0
        ],
        [
          "Varun",
          2018,
          0
        ],
        [
          "Divya",
          2022,
          0
        ],
        [
          "Manoj",
          2020,
          0
        ],
        [
          "Pooja",
          2025,
          1
        ],
        [
          "Arjun",
          2015,
          0
        ],
        [
          "Keerthi",
          2022,
          0
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 353,
    "title": "Initiative Delivery Urgency Categorization",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Project portfolio managers categorize initiatives into operational delivery urgency tiers. For all corporate projects, display the project name, current status, and a delivery urgency classification (`delivery_urgency`): 'In Progress' for active projects, 'Upcoming' for planning projects, and 'Archive / Standby' for any other status.",
    "requirements": [
      "Map project `status` to 'In Progress' for 'Active', 'Upcoming' for 'Planning', and 'Archive / Standby' for all other states.",
      "Alias the resulting category as `delivery_urgency`.",
      "Display `project_name`, `status`, and `delivery_urgency`."
    ],
    "tableName": "Projects",
    "hint": "Evaluate the status column and provide the designated fallback text for other statuses.",
    "expectedSql": "SELECT project_name, status, CASE status WHEN 'Active' THEN 'In Progress' WHEN 'Planning' THEN 'Upcoming' ELSE 'Archive / Standby' END AS delivery_urgency FROM Projects;",
    "explanation": "If no WHEN condition evaluates to true and an ELSE clause is omitted, SQL returns NULL. Providing an explicit ELSE ensures deterministic non-null categorical labeling.",
    "tags": [
      "case",
      "else",
      "projects",
      "fundamentals"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_name",
        "status",
        "delivery_urgency"
      ],
      "values": [
        [
          "Cloud Migration",
          "Active",
          "In Progress"
        ],
        [
          "ERP Modernization",
          "Completed",
          "Archive / Standby"
        ],
        [
          "Global Talent Acquisition",
          "Active",
          "In Progress"
        ],
        [
          "Financial Audit Automation",
          "Active",
          "In Progress"
        ],
        [
          "Brand Revamp 2025",
          "Active",
          "In Progress"
        ],
        [
          "CRM Sales Pipeline",
          "Completed",
          "Archive / Standby"
        ],
        [
          "Compliance Automation",
          "Planning",
          "Upcoming"
        ],
        [
          "NextGen AI Suite",
          "Planning",
          "Upcoming"
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 354,
    "title": "Fast-Track Career Profile Detection",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Leadership development is identifying high-potential early-career talent. Display employee name, age, experience, and a career profile tag (`career_profile`): 'Fast Track Candidate' for employees who are 25 years old or younger AND possess at least 2 years of experience, and 'Standard Profile' for all other employees.",
    "requirements": [
      "Evaluate whether `age <= 25` and `experience >= 2` simultaneously.",
      "Assign 'Fast Track Candidate' when both conditions hold, otherwise 'Standard Profile'.",
      "Alias the resulting column as `career_profile`.",
      "Display `emp_name`, `age`, `experience`, and `career_profile`."
    ],
    "tableName": "Employees",
    "hint": "Combine the age and experience conditions in a conditional expression branch.",
    "expectedSql": "SELECT emp_name, age, experience, CASE WHEN age <= 25 AND experience >= 2 THEN 'Fast Track Candidate' ELSE 'Standard Profile' END AS career_profile FROM Employees;",
    "explanation": "Searched CASE statements support compound logical expressions (AND, OR, NOT), allowing multi-dimensional criteria evaluation within a single branch.",
    "tags": [
      "case",
      "and",
      "logical-conditions",
      "talent"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "age",
        "experience",
        "career_profile"
      ],
      "values": [
        [
          "Anil",
          22,
          1,
          "Standard Profile"
        ],
        [
          "Bhumika",
          25,
          3,
          "Fast Track Candidate"
        ],
        [
          "Chetan",
          28,
          5,
          "Standard Profile"
        ],
        [
          "Dhruv",
          30,
          7,
          "Standard Profile"
        ],
        [
          "Farah",
          24,
          2,
          "Fast Track Candidate"
        ],
        [
          "Girish",
          35,
          10,
          "Standard Profile"
        ],
        [
          "Harsha",
          27,
          4,
          "Standard Profile"
        ],
        [
          "Isha",
          23,
          1,
          "Standard Profile"
        ],
        [
          "Kiran",
          32,
          8,
          "Standard Profile"
        ],
        [
          "Meena",
          29,
          6,
          "Standard Profile"
        ],
        [
          "Naveen",
          26,
          3,
          "Standard Profile"
        ],
        [
          "Priya",
          31,
          9,
          "Standard Profile"
        ],
        [
          "Rahul",
          24,
          2,
          "Fast Track Candidate"
        ],
        [
          "Sneha",
          28,
          5,
          "Standard Profile"
        ],
        [
          "Varun",
          33,
          8,
          "Standard Profile"
        ],
        [
          "Divya",
          26,
          3,
          "Standard Profile"
        ],
        [
          "Manoj",
          29,
          6,
          "Standard Profile"
        ],
        [
          "Pooja",
          22,
          1,
          "Standard Profile"
        ],
        [
          "Arjun",
          34,
          11,
          "Standard Profile"
        ],
        [
          "Keerthi",
          27,
          4,
          "Standard Profile"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 355,
    "title": "Demographic Age Group Cohort Classification",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Human Resources is compiling demographic statistics across age bands. Display employee ID, name, age, and a demographic cohort label (`age_group`): 'Under 25' for ages strictly below 25, '25 to 29' for ages from 25 to 29 inclusive, and '30 and Above' for ages 30 and higher.",
    "requirements": [
      "Classify `age` into 'Under 25', '25 to 29', or '30 and Above'.",
      "Alias the calculated cohort as `age_group`.",
      "Display `emp_id`, `emp_name`, `age`, and `age_group`."
    ],
    "tableName": "Employees",
    "hint": "Use sequenced threshold checks to assign the correct demographic bracket.",
    "expectedSql": "SELECT emp_id, emp_name, age, CASE WHEN age < 25 THEN 'Under 25' WHEN age <= 29 THEN '25 to 29' ELSE '30 and Above' END AS age_group FROM Employees;",
    "explanation": "Because CASE evaluates conditions sequentially and short-circuits on the first true branch, 'age <= 29' naturally captures ages between 25 and 29 without needing an explicit lower bound check.",
    "tags": [
      "case",
      "classification",
      "demographics",
      "age-groups"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "age",
        "age_group"
      ],
      "values": [
        [
          101,
          "Anil",
          22,
          "Under 25"
        ],
        [
          102,
          "Bhumika",
          25,
          "25 to 29"
        ],
        [
          103,
          "Chetan",
          28,
          "25 to 29"
        ],
        [
          104,
          "Dhruv",
          30,
          "30 and Above"
        ],
        [
          105,
          "Farah",
          24,
          "Under 25"
        ],
        [
          106,
          "Girish",
          35,
          "30 and Above"
        ],
        [
          107,
          "Harsha",
          27,
          "25 to 29"
        ],
        [
          108,
          "Isha",
          23,
          "Under 25"
        ],
        [
          109,
          "Kiran",
          32,
          "30 and Above"
        ],
        [
          110,
          "Meena",
          29,
          "25 to 29"
        ],
        [
          111,
          "Naveen",
          26,
          "25 to 29"
        ],
        [
          112,
          "Priya",
          31,
          "30 and Above"
        ],
        [
          113,
          "Rahul",
          24,
          "Under 25"
        ],
        [
          114,
          "Sneha",
          28,
          "25 to 29"
        ],
        [
          115,
          "Varun",
          33,
          "30 and Above"
        ],
        [
          116,
          "Divya",
          26,
          "25 to 29"
        ],
        [
          117,
          "Manoj",
          29,
          "25 to 29"
        ],
        [
          118,
          "Pooja",
          22,
          "Under 25"
        ],
        [
          119,
          "Arjun",
          34,
          "30 and Above"
        ],
        [
          120,
          "Keerthi",
          27,
          "25 to 29"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 356,
    "title": "Department-Specific Compensation Scale Designation",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Compensation planning uses specialized pay scales for technology roles versus corporate functions. Display employee name, department, monthly salary, and an assigned pay scale status (`pay_scale_status`): 'Tech Core Scale' for IT employees earning at least 50,000, 'Tech Entry Scale' for all other IT employees, and 'General Corporate Scale' for all non-IT personnel.",
    "requirements": [
      "Classify employees based on department and salary criteria into the three designated scales.",
      "Alias the resulting label as `pay_scale_status`.",
      "Display `emp_name`, `department`, `salary`, and `pay_scale_status`."
    ],
    "tableName": "Employees",
    "hint": "Evaluate specific IT salary criteria first before defaulting to the general corporate scale.",
    "expectedSql": "SELECT emp_name, department, salary, CASE WHEN department = 'IT' AND salary >= 50000 THEN 'Tech Core Scale' WHEN department = 'IT' THEN 'Tech Entry Scale' ELSE 'General Corporate Scale' END AS pay_scale_status FROM Employees;",
    "explanation": "Sequential evaluation handles hierarchical domain logic cleanly: the first branch handles high IT earners, the second catches remaining IT staff, and the ELSE branch catches all other departments.",
    "tags": [
      "case",
      "classification",
      "department",
      "compensation"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "pay_scale_status"
      ],
      "values": [
        [
          "Anil",
          "IT",
          25000,
          "Tech Entry Scale"
        ],
        [
          "Bhumika",
          "HR",
          40000,
          "General Corporate Scale"
        ],
        [
          "Chetan",
          "IT",
          55000,
          "Tech Core Scale"
        ],
        [
          "Dhruv",
          "Finance",
          65000,
          "General Corporate Scale"
        ],
        [
          "Farah",
          "HR",
          32000,
          "General Corporate Scale"
        ],
        [
          "Girish",
          "Finance",
          80000,
          "General Corporate Scale"
        ],
        [
          "Harsha",
          "IT",
          45000,
          "Tech Entry Scale"
        ],
        [
          "Isha",
          "Marketing",
          28000,
          "General Corporate Scale"
        ],
        [
          "Kiran",
          "HR",
          70000,
          "General Corporate Scale"
        ],
        [
          "Meena",
          "Marketing",
          60000,
          "General Corporate Scale"
        ],
        [
          "Naveen",
          "Finance",
          35000,
          "General Corporate Scale"
        ],
        [
          "Priya",
          "IT",
          75000,
          "Tech Core Scale"
        ],
        [
          "Rahul",
          "Sales",
          30000,
          "General Corporate Scale"
        ],
        [
          "Sneha",
          "Sales",
          48000,
          "General Corporate Scale"
        ],
        [
          "Varun",
          "Marketing",
          68000,
          "General Corporate Scale"
        ],
        [
          "Divya",
          "Sales",
          42000,
          "General Corporate Scale"
        ],
        [
          "Manoj",
          "IT",
          52000,
          "Tech Core Scale"
        ],
        [
          "Pooja",
          "HR",
          27000,
          "General Corporate Scale"
        ],
        [
          "Arjun",
          "Finance",
          90000,
          "General Corporate Scale"
        ],
        [
          "Keerthi",
          "Sales",
          55000,
          "General Corporate Scale"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 357,
    "title": "Organizational Tenure and Loyalty Tiers",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Human Resources recognizes organizational loyalty across hiring cohorts. Display employee name, joining year, and a loyalty tier designation (`loyalty_tier`): 'Veteran' for staff who joined prior to 2020, 'Established' for staff who joined between 2020 and 2022 inclusive, and 'New Hire' for staff joining after 2022.",
    "requirements": [
      "Classify `joining_year` into 'Veteran', 'Established', or 'New Hire'.",
      "Alias the resulting tier as `loyalty_tier`.",
      "Display `emp_name`, `joining_year`, and `loyalty_tier`."
    ],
    "tableName": "Employees",
    "hint": "Check joining_year with conditional branches and assign the corresponding tier.",
    "expectedSql": "SELECT emp_name, joining_year, CASE WHEN joining_year < 2020 THEN 'Veteran' WHEN joining_year <= 2022 THEN 'Established' ELSE 'New Hire' END AS loyalty_tier FROM Employees;",
    "explanation": "Sorting temporal attributes into discrete historical eras allows high-level workforce planning without mutating base table data.",
    "tags": [
      "case",
      "tenure",
      "classification",
      "loyalty"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "joining_year",
        "loyalty_tier"
      ],
      "values": [
        [
          "Anil",
          2025,
          "New Hire"
        ],
        [
          "Bhumika",
          2023,
          "New Hire"
        ],
        [
          "Chetan",
          2021,
          "Established"
        ],
        [
          "Dhruv",
          2019,
          "Veteran"
        ],
        [
          "Farah",
          2024,
          "New Hire"
        ],
        [
          "Girish",
          2016,
          "Veteran"
        ],
        [
          "Harsha",
          2022,
          "Established"
        ],
        [
          "Isha",
          2025,
          "New Hire"
        ],
        [
          "Kiran",
          2018,
          "Veteran"
        ],
        [
          "Meena",
          2020,
          "Established"
        ],
        [
          "Naveen",
          2023,
          "New Hire"
        ],
        [
          "Priya",
          2017,
          "Veteran"
        ],
        [
          "Rahul",
          2024,
          "New Hire"
        ],
        [
          "Sneha",
          2021,
          "Established"
        ],
        [
          "Varun",
          2018,
          "Veteran"
        ],
        [
          "Divya",
          2022,
          "Established"
        ],
        [
          "Manoj",
          2020,
          "Established"
        ],
        [
          "Pooja",
          2025,
          "New Hire"
        ],
        [
          "Arjun",
          2015,
          "Veteran"
        ],
        [
          "Keerthi",
          2022,
          "Established"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 358,
    "title": "Enterprise Division Functional Grouping",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Corporate governance groups functional departments into four broad operational divisions. For each department in Departments, display the department name and its broad division classification (`division`): 'Technology & Innovation' for IT and R&D, 'Growth & Revenue' for Sales and Marketing, 'Governance & Capital' for Finance and Legal, and 'Operations & Support' for all other units.",
    "requirements": [
      "Classify `dept_name` into the four broad divisional categories.",
      "Alias the categorized division as `division`.",
      "Display `dept_name` and `division` from Departments."
    ],
    "tableName": "Departments",
    "hint": "Use set membership checks within conditional branches to map departments to divisions.",
    "expectedSql": "SELECT dept_name, CASE WHEN dept_name IN ('IT', 'R&D') THEN 'Technology & Innovation' WHEN dept_name IN ('Sales', 'Marketing') THEN 'Growth & Revenue' WHEN dept_name IN ('Finance', 'Legal') THEN 'Governance & Capital' ELSE 'Operations & Support' END AS division FROM Departments;",
    "explanation": "Combining CASE with IN sets creates clean category groupings that roll up granular operational units into executive reporting divisions.",
    "tags": [
      "case",
      "in",
      "departments",
      "divisions"
    ],
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "division"
      ],
      "values": [
        [
          "Finance",
          "Governance & Capital"
        ],
        [
          "HR",
          "Operations & Support"
        ],
        [
          "IT",
          "Technology & Innovation"
        ],
        [
          "Legal",
          "Governance & Capital"
        ],
        [
          "Marketing",
          "Growth & Revenue"
        ],
        [
          "Operations",
          "Operations & Support"
        ],
        [
          "R&D",
          "Technology & Innovation"
        ],
        [
          "Sales",
          "Growth & Revenue"
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 359,
    "title": "Executive Slide Order Custom Sorting",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Executive presentation decks require a custom departmental sequence rather than alphabetical order. Display employee name, department, and salary, sorted primarily by a custom departmental priority: IT first, Finance second, Marketing third, Sales fourth, HR fifth, and any other department last, breaking ties by salary from highest to lowest.",
    "requirements": [
      "Sort employees by custom department priority: IT (1), Finance (2), Marketing (3), Sales (4), HR (5), Other (6).",
      "Sort secondarily by salary in descending order.",
      "Display `emp_name`, `department`, and `salary`."
    ],
    "tableName": "Employees",
    "hint": "Order by a conditional expression mapping department names to rank numbers, then salary DESC.",
    "expectedSql": "SELECT emp_name, department, salary FROM Employees ORDER BY CASE department WHEN 'IT' THEN 1 WHEN 'Finance' THEN 2 WHEN 'Marketing' THEN 3 WHEN 'Sales' THEN 4 WHEN 'HR' THEN 5 ELSE 6 END, salary DESC;",
    "explanation": "Placing a CASE expression inside ORDER BY transforms strings into user-defined numeric weights, bypassing standard lexicographical sort order.",
    "tags": [
      "case",
      "order-by",
      "custom-sort",
      "priority"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary"
      ],
      "values": [
        [
          "Priya",
          "IT",
          75000
        ],
        [
          "Chetan",
          "IT",
          55000
        ],
        [
          "Manoj",
          "IT",
          52000
        ],
        [
          "Harsha",
          "IT",
          45000
        ],
        [
          "Anil",
          "IT",
          25000
        ],
        [
          "Arjun",
          "Finance",
          90000
        ],
        [
          "Girish",
          "Finance",
          80000
        ],
        [
          "Dhruv",
          "Finance",
          65000
        ],
        [
          "Naveen",
          "Finance",
          35000
        ],
        [
          "Varun",
          "Marketing",
          68000
        ],
        [
          "Meena",
          "Marketing",
          60000
        ],
        [
          "Isha",
          "Marketing",
          28000
        ],
        [
          "Keerthi",
          "Sales",
          55000
        ],
        [
          "Sneha",
          "Sales",
          48000
        ],
        [
          "Divya",
          "Sales",
          42000
        ],
        [
          "Rahul",
          "Sales",
          30000
        ],
        [
          "Kiran",
          "HR",
          70000
        ],
        [
          "Bhumika",
          "HR",
          40000
        ],
        [
          "Farah",
          "HR",
          32000
        ],
        [
          "Pooja",
          "HR",
          27000
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 360,
    "title": "Performance Bonus Payout Categorization",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Internal audit is categorizing performance reviews based on incentive payout magnitude. For all completed appraisals in Performance_Reviews, display review ID, employee ID, rating, bonus, and a payout status (`payout_status`): 'No Bonus Awarded' if bonus is unassigned or 0, 'Standard Bonus' if bonus is strictly under 15,000, and 'High Performance Bonus' for bonuses of 15,000 or greater.",
    "requirements": [
      "Safely evaluate bonus amounts, checking for null or 0 values.",
      "Classify payouts into 'No Bonus Awarded', 'Standard Bonus', or 'High Performance Bonus'.",
      "Alias the payout category as `payout_status`.",
      "Display `review_id`, `emp_id`, `rating`, `bonus`, and `payout_status`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Handle null or zero bonus conditions first before checking numeric thresholds.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus, CASE WHEN bonus IS NULL OR bonus = 0 THEN 'No Bonus Awarded' WHEN bonus < 15000 THEN 'Standard Bonus' ELSE 'High Performance Bonus' END AS payout_status FROM Performance_Reviews;",
    "explanation": "Direct arithmetic comparisons on NULL produce UNKNOWN in three-valued logic. Explicitly checking 'bonus IS NULL' prevents unexpected fallback behavior.",
    "tags": [
      "case",
      "null-handling",
      "audit",
      "bonuses"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "review_id",
        "emp_id",
        "rating",
        "bonus",
        "payout_status"
      ],
      "values": [
        [
          1,
          103,
          4,
          15000,
          "High Performance Bonus"
        ],
        [
          2,
          104,
          4,
          18000,
          "High Performance Bonus"
        ],
        [
          3,
          106,
          4,
          20000,
          "High Performance Bonus"
        ],
        [
          4,
          106,
          5,
          25000,
          "High Performance Bonus"
        ],
        [
          5,
          107,
          3,
          8000,
          "Standard Bonus"
        ],
        [
          6,
          109,
          4,
          18000,
          "High Performance Bonus"
        ],
        [
          7,
          110,
          4,
          16000,
          "High Performance Bonus"
        ],
        [
          8,
          111,
          2,
          null,
          "No Bonus Awarded"
        ],
        [
          9,
          112,
          4,
          20000,
          "High Performance Bonus"
        ],
        [
          10,
          112,
          5,
          25000,
          "High Performance Bonus"
        ],
        [
          11,
          114,
          4,
          12000,
          "Standard Bonus"
        ],
        [
          12,
          115,
          4,
          15000,
          "High Performance Bonus"
        ],
        [
          13,
          116,
          3,
          7000,
          "Standard Bonus"
        ],
        [
          14,
          117,
          3,
          9000,
          "Standard Bonus"
        ],
        [
          15,
          119,
          5,
          25000,
          "High Performance Bonus"
        ],
        [
          16,
          119,
          5,
          28000,
          "High Performance Bonus"
        ],
        [
          17,
          119,
          5,
          30000,
          "High Performance Bonus"
        ],
        [
          18,
          102,
          3,
          6000,
          "Standard Bonus"
        ]
      ],
      "rowCount": 18
    }
  },
  {
    "id": 361,
    "title": "Executive Compensation Tier Extraction",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Compensation governance is isolating employees categorized into the executive compensation tier. Classify employees into 'Executive Pay' for salaries of 75,000 or higher, 'Mid Pay' for salaries from 40,000 to 74,999, and 'Junior Pay' for salaries under 40,000, and filter the final result to return only staff members placed in 'Executive Pay'.",
    "requirements": [
      "Classify salaries in a subquery or derived table aliasing the tier as `pay_grade`.",
      "Filter the outer result strictly for records where `pay_grade = 'Executive Pay'`.",
      "Display `emp_name`, `department`, `salary`, and `pay_grade`."
    ],
    "tableName": "Employees",
    "hint": "Wrap the classification in a derived table and filter by pay_grade in the outer query.",
    "expectedSql": "SELECT emp_name, department, salary, pay_grade FROM (SELECT emp_name, department, salary, CASE WHEN salary >= 75000 THEN 'Executive Pay' WHEN salary >= 40000 THEN 'Mid Pay' ELSE 'Junior Pay' END AS pay_grade FROM Employees) classified WHERE pay_grade = 'Executive Pay';",
    "explanation": "Because SQL's WHERE clause processes before SELECT, aliases defined in SELECT cannot be referenced in the same query's WHERE clause. Wrapping in a subquery resolves this lexical scoping constraint.",
    "tags": [
      "case",
      "subquery",
      "filtering",
      "scoping"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "pay_grade"
      ],
      "values": [
        [
          "Girish",
          "Finance",
          80000,
          "Executive Pay"
        ],
        [
          "Priya",
          "IT",
          75000,
          "Executive Pay"
        ],
        [
          "Arjun",
          "Finance",
          90000,
          "Executive Pay"
        ]
      ],
      "rowCount": 3
    }
  },
  {
    "id": 362,
    "title": "Project Portfolio Urgency-Based Prioritization",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "The PMO reviews corporate initiatives using a customized operational urgency sort order. Display project name, status, and budget from Projects, ordered primarily by operational status urgency: 'Active' first, 'Planning' second, 'Completed' third, and any other status fourth, and secondarily by budget from highest to lowest.",
    "requirements": [
      "Order projects by custom status priority: Active (1), Planning (2), Completed (3), Other (4).",
      "Apply secondary sorting on budget in descending order.",
      "Display `project_name`, `status`, and `budget`."
    ],
    "tableName": "Projects",
    "hint": "Sort by a conditional expression mapping statuses to numeric rank order, followed by budget DESC.",
    "expectedSql": "SELECT project_name, status, budget FROM Projects ORDER BY CASE status WHEN 'Active' THEN 1 WHEN 'Planning' THEN 2 WHEN 'Completed' THEN 3 ELSE 4 END, budget DESC;",
    "explanation": "Business workflows frequently require custom status ordering (e.g., Active before Inactive) combined with financial sorting for stakeholder reviews.",
    "tags": [
      "case",
      "order-by",
      "projects",
      "lifecycle"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_name",
        "status",
        "budget"
      ],
      "values": [
        [
          "Financial Audit Automation",
          "Active",
          300000
        ],
        [
          "Cloud Migration",
          "Active",
          250000
        ],
        [
          "Brand Revamp 2025",
          "Active",
          180000
        ],
        [
          "Global Talent Acquisition",
          "Active",
          120000
        ],
        [
          "NextGen AI Suite",
          "Planning",
          550000
        ],
        [
          "Compliance Automation",
          "Planning",
          90000
        ],
        [
          "ERP Modernization",
          "Completed",
          400000
        ],
        [
          "CRM Sales Pipeline",
          "Completed",
          220000
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 363,
    "title": "City Senior Staff Density Breakdown",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Workforce planning is auditing the presence of seasoned talent across branch locations. For each city in Employees, display the city name, total employee headcount (`total_employees`), and the count of senior staff members who possess at least 5 years of experience (`senior_count`).",
    "requirements": [
      "Group records by `city`.",
      "Count total employees aliased as `total_employees`.",
      "Count employees with `experience >= 5` using conditional counting, aliased as `senior_count`.",
      "Display `city`, `total_employees`, and `senior_count`."
    ],
    "tableName": "Employees",
    "hint": "Apply COUNT(CASE WHEN experience >= 5 THEN 1 END) within the GROUP BY aggregation.",
    "expectedSql": "SELECT city, COUNT(*) AS total_employees, COUNT(CASE WHEN experience >= 5 THEN 1 END) AS senior_count FROM Employees GROUP BY city;",
    "explanation": "COUNT(expression) only tallies non-null values. When a CASE statement has no ELSE branch, unmatched rows evaluate to NULL and are completely ignored by COUNT().",
    "tags": [
      "case",
      "count",
      "conditional-aggregation",
      "null-behavior"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "city",
        "total_employees",
        "senior_count"
      ],
      "values": [
        [
          "Bengaluru",
          4,
          3
        ],
        [
          "Chennai",
          6,
          3
        ],
        [
          "Hyderabad",
          6,
          4
        ],
        [
          "Vijayawada",
          4,
          0
        ]
      ],
      "rowCount": 4
    }
  },
  {
    "id": 364,
    "title": "Experience-Tiered Payroll Expenditure Comparison",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Finance leadership is comparing corporate wage expenditure between junior and senior personnel. In a single summary record, calculate total payroll spent on junior staff with under 4 years of experience (aliased as `junior_payroll`) versus seasoned staff with 4 or more years of experience (aliased as `senior_payroll`).",
    "requirements": [
      "Query the Employees table.",
      "Calculate total salary for staff with `experience < 4` aliased as `junior_payroll`.",
      "Calculate total salary for staff with `experience >= 4` aliased as `senior_payroll`.",
      "Display both metrics in a single summary row."
    ],
    "tableName": "Employees",
    "hint": "Use conditional SUM aggregation evaluating the experience threshold into separate metrics.",
    "expectedSql": "SELECT SUM(CASE WHEN experience < 4 THEN salary ELSE 0 END) AS junior_payroll, SUM(CASE WHEN experience >= 4 THEN salary ELSE 0 END) AS senior_payroll FROM Employees;",
    "explanation": "Conditional summation enables partitioning monetary sums into multiple columnar metrics within a single database table scan.",
    "tags": [
      "case",
      "sum",
      "conditional-aggregation",
      "payroll"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "junior_payroll",
        "senior_payroll"
      ],
      "values": [
        [
          259000,
          763000
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 365,
    "title": "Departmental Compensation Band Headcounts",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Human Resources is mapping salary tier distribution across departments. For each department, display the department name, count of staff earning strictly under 35,000 (`tier_low`), count of staff earning between 35,000 and 60,000 inclusive (`tier_mid`), and count of staff earning strictly over 60,000 (`tier_high`).",
    "requirements": [
      "Group records by `department`.",
      "Count staff earning under 35,000 aliased as `tier_low`.",
      "Count staff earning between 35,000 and 60,000 inclusive aliased as `tier_mid`.",
      "Count staff earning over 60,000 aliased as `tier_high`.",
      "Display `department`, `tier_low`, `tier_mid`, and `tier_high`."
    ],
    "tableName": "Employees",
    "hint": "Use SUM with conditional expressions to pivot headcounts into three distinct tier columns.",
    "expectedSql": "SELECT department, SUM(CASE WHEN salary < 35000 THEN 1 ELSE 0 END) AS tier_low, SUM(CASE WHEN salary BETWEEN 35000 AND 60000 THEN 1 ELSE 0 END) AS tier_mid, SUM(CASE WHEN salary > 60000 THEN 1 ELSE 0 END) AS tier_high FROM Employees GROUP BY department;",
    "explanation": "This classic pivot aggregation pattern transforms row-level categories into distinct report columns, essential for cross-tab analysis.",
    "tags": [
      "case",
      "pivot",
      "salary-bands",
      "groupby"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "department",
        "tier_low",
        "tier_mid",
        "tier_high"
      ],
      "values": [
        [
          "Finance",
          0,
          1,
          3
        ],
        [
          "HR",
          2,
          1,
          1
        ],
        [
          "IT",
          1,
          3,
          1
        ],
        [
          "Marketing",
          1,
          1,
          1
        ],
        [
          "Sales",
          1,
          3,
          0
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 366,
    "title": "Technical vs Business Unit Average Salary Benchmark",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Compensation analytics compares overall average salaries between engineering staff and all other business departments. In a single summary row, compute the average salary of employees in the IT department (rounded to 2 decimal places, aliased as `avg_it_salary`) alongside the average salary of all non-IT employees (rounded to 2 decimal places, aliased as `avg_non_it_salary`).",
    "requirements": [
      "Query the Employees table.",
      "Calculate average salary for IT employees rounded to 2 decimal places, aliased as `avg_it_salary`.",
      "Calculate average salary for non-IT employees rounded to 2 decimal places, aliased as `avg_non_it_salary`.",
      "Return both metrics in a single summary record."
    ],
    "tableName": "Employees",
    "hint": "Apply conditional AVG(CASE WHEN ...) wrapped in ROUND to 2 decimal places for each cohort.",
    "expectedSql": "SELECT ROUND(AVG(CASE WHEN department = 'IT' THEN salary END), 2) AS avg_it_salary, ROUND(AVG(CASE WHEN department <> 'IT' THEN salary END), 2) AS avg_non_it_salary FROM Employees;",
    "explanation": "Omitting the ELSE clause in AVG(CASE WHEN ...) causes non-matching rows to evaluate to NULL. Because AVG() skips NULL values, the mean is accurately computed over only the target subset.",
    "tags": [
      "case",
      "avg",
      "conditional-aggregation",
      "math"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "avg_it_salary",
        "avg_non_it_salary"
      ],
      "values": [
        [
          50400,
          51333.33
        ]
      ],
      "rowCount": 1
    }
  },
  {
    "id": 367,
    "title": "Department High-Earner Percentage with Safeguard",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Compensation governance calculates the percentage of high earners in each business unit while safeguarding against division-by-zero errors. For each department, display the department name, total staff count (`total_staff`), count of staff earning at least 50,000 (`high_earner_count`), and the percentage of staff earning at least 50,000 rounded to 1 decimal place (`high_earner_percentage`).",
    "requirements": [
      "Group records by `department` in Employees.",
      "Count total staff aliased as `total_staff`.",
      "Count staff earning at least 50,000 aliased as `high_earner_count`.",
      "Calculate high earner percentage with a zero-division safeguard, rounded to 1 decimal place, aliased as `high_earner_percentage`.",
      "Display `department`, `total_staff`, `high_earner_count`, and `high_earner_percentage`."
    ],
    "tableName": "Employees",
    "hint": "Use conditional logic to check for a headcount of 0 before performing the percentage division.",
    "expectedSql": "SELECT department, COUNT(*) AS total_staff, SUM(CASE WHEN salary >= 50000 THEN 1 ELSE 0 END) AS high_earner_count, ROUND(CASE WHEN COUNT(*) = 0 THEN 0.0 ELSE (SUM(CASE WHEN salary >= 50000 THEN 1.0 ELSE 0.0 END) / COUNT(*)) * 100.0 END, 1) AS high_earner_percentage FROM Employees GROUP BY department;",
    "explanation": "Guarding mathematical divisions against zero-count denominators is a critical production pattern that prevents runtime mathematical exceptions in corporate reporting.",
    "tags": [
      "case",
      "percentage",
      "division-by-zero",
      "data-safety"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "department",
        "total_staff",
        "high_earner_count",
        "high_earner_percentage"
      ],
      "values": [
        [
          "Finance",
          4,
          3,
          75
        ],
        [
          "HR",
          4,
          1,
          25
        ],
        [
          "IT",
          5,
          3,
          60
        ],
        [
          "Marketing",
          3,
          2,
          66.7
        ],
        [
          "Sales",
          4,
          1,
          25
        ]
      ],
      "rowCount": 5
    }
  },
  {
    "id": 368,
    "title": "Colocation vs Regional Work Model Classification",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Facilities and HR analyze employee geographical colocation with their department's headquarters. Join employees with their registered department and display employee name, department, employee resident city, department headquarters location, and an operational work model tag (`work_model`): 'Colocated HQ' if the employee lives in the same city as the department headquarters, or 'Regional Branch' if located in a different city.",
    "requirements": [
      "Join Employees and Departments on matching department name.",
      "Classify work arrangement as 'Colocated HQ' if `city = location`, otherwise 'Regional Branch'.",
      "Alias the classification as `work_model`.",
      "Display `emp_name`, `department`, `city`, `location`, and `work_model`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Join on department name and use a conditional equality check comparing e.city to d.location.",
    "expectedSql": "SELECT e.emp_name, e.department, e.city, d.location, CASE WHEN e.city = d.location THEN 'Colocated HQ' ELSE 'Regional Branch' END AS work_model FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    "explanation": "Joining entities before applying conditional logic allows multi-table attribute cross-validation to derive organizational insights.",
    "tags": [
      "case",
      "inner-join",
      "workplace",
      "locations"
    ],
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "city",
        "location",
        "work_model"
      ],
      "values": [
        [
          "Anil",
          "IT",
          "Hyderabad",
          "Bengaluru",
          "Regional Branch"
        ],
        [
          "Bhumika",
          "HR",
          "Vijayawada",
          "Bengaluru",
          "Regional Branch"
        ],
        [
          "Chetan",
          "IT",
          "Hyderabad",
          "Bengaluru",
          "Regional Branch"
        ],
        [
          "Dhruv",
          "Finance",
          "Chennai",
          "Hyderabad",
          "Regional Branch"
        ],
        [
          "Farah",
          "HR",
          "Hyderabad",
          "Bengaluru",
          "Regional Branch"
        ],
        [
          "Girish",
          "Finance",
          "Bengaluru",
          "Hyderabad",
          "Regional Branch"
        ],
        [
          "Harsha",
          "IT",
          "Vijayawada",
          "Bengaluru",
          "Regional Branch"
        ],
        [
          "Isha",
          "Marketing",
          "Chennai",
          "Chennai",
          "Colocated HQ"
        ],
        [
          "Kiran",
          "HR",
          "Bengaluru",
          "Bengaluru",
          "Colocated HQ"
        ],
        [
          "Meena",
          "Marketing",
          "Hyderabad",
          "Chennai",
          "Regional Branch"
        ],
        [
          "Naveen",
          "Finance",
          "Chennai",
          "Hyderabad",
          "Regional Branch"
        ],
        [
          "Priya",
          "IT",
          "Bengaluru",
          "Bengaluru",
          "Colocated HQ"
        ],
        [
          "Rahul",
          "Sales",
          "Vijayawada",
          "Hyderabad",
          "Regional Branch"
        ],
        [
          "Sneha",
          "Sales",
          "Hyderabad",
          "Hyderabad",
          "Colocated HQ"
        ],
        [
          "Varun",
          "Marketing",
          "Chennai",
          "Chennai",
          "Colocated HQ"
        ],
        [
          "Divya",
          "Sales",
          "Bengaluru",
          "Hyderabad",
          "Regional Branch"
        ],
        [
          "Manoj",
          "IT",
          "Chennai",
          "Bengaluru",
          "Regional Branch"
        ],
        [
          "Pooja",
          "HR",
          "Vijayawada",
          "Bengaluru",
          "Regional Branch"
        ],
        [
          "Arjun",
          "Finance",
          "Hyderabad",
          "Hyderabad",
          "Colocated HQ"
        ],
        [
          "Keerthi",
          "Sales",
          "Chennai",
          "Hyderabad",
          "Regional Branch"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 369,
    "title": "Project Initiative Resource Intensity Rating",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Resource governance rates corporate initiatives by resource intensity. For all projects in Projects, display project name, cumulative weekly allocated hours (defaulting to 0, aliased as `total_hours`), assigned staff count (`staff_count`), and an intensity rating (`intensity_rating`): 'Unstaffed' if staff count or total hours is 0, 'Low Intensity' for under 50 weekly hours, 'Medium Intensity' for 50 to 80 weekly hours inclusive, and 'High Intensity' for over 80 weekly hours.",
    "requirements": [
      "Combine Projects and Employee_Projects preserving all projects.",
      "Group by project ID and project name.",
      "Sum weekly hours aliased as `total_hours` and count assigned staff aliased as `staff_count`.",
      "Assign intensity rating into 'Unstaffed', 'Low Intensity', 'Medium Intensity', or 'High Intensity' aliased as `intensity_rating`.",
      "Display `project_name`, `total_hours`, `staff_count`, and `intensity_rating`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Group by project attributes and evaluate total hours with a conditional classification expression.",
    "expectedSql": "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, COUNT(ep.emp_id) AS staff_count, CASE WHEN COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unstaffed' WHEN SUM(ep.hours_allocated) < 50 THEN 'Low Intensity' WHEN SUM(ep.hours_allocated) <= 80 THEN 'Medium Intensity' ELSE 'High Intensity' END AS intensity_rating FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    "explanation": "Combining outer joins, aggregate functions, and multi-tier CASE branching handles both staffed initiatives and empty edge cases in a single query.",
    "tags": [
      "case",
      "left-join",
      "aggregation",
      "workload",
      "hard"
    ],
    "estimatedTimeMinutes": 6,
    "expectedOutput": {
      "columns": [
        "project_name",
        "total_hours",
        "staff_count",
        "intensity_rating"
      ],
      "values": [
        [
          "Cloud Migration",
          100,
          3,
          "High Intensity"
        ],
        [
          "ERP Modernization",
          45,
          2,
          "Low Intensity"
        ],
        [
          "Global Talent Acquisition",
          85,
          3,
          "High Intensity"
        ],
        [
          "Financial Audit Automation",
          110,
          5,
          "High Intensity"
        ],
        [
          "Brand Revamp 2025",
          85,
          3,
          "High Intensity"
        ],
        [
          "CRM Sales Pipeline",
          110,
          4,
          "High Intensity"
        ],
        [
          "Compliance Automation",
          0,
          0,
          "Unstaffed"
        ],
        [
          "NextGen AI Suite",
          0,
          0,
          "Unstaffed"
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 370,
    "title": "Intra-Departmental Salary Standing Evaluation",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Workforce equity evaluates each employee's salary standing relative to their own department's average. Display employee name, department, monthly salary, and a relative salary standing label (`salary_standing`): 'Above Dept Average' if salary exceeds 115% of the department average, 'At Dept Average' if salary is between 85% and 115% of the department average inclusive, and 'Below Dept Average' if salary is under 85% of the department average.",
    "requirements": [
      "Compare each employee's salary against a correlated subquery computing their department's average salary.",
      "Classify into 'Above Dept Average', 'At Dept Average', or 'Below Dept Average' based on the specified percentage thresholds.",
      "Alias the standing label as `salary_standing`.",
      "Display `emp_name`, `department`, `salary`, and `salary_standing` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Use a correlated subquery computing AVG(salary) for the matching department within the conditional checks.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary, CASE WHEN e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 1.15 THEN 'Above Dept Average' WHEN e.salary >= (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 0.85 THEN 'At Dept Average' ELSE 'Below Dept Average' END AS salary_standing FROM Employees e;",
    "explanation": "Correlated subqueries dynamically evaluate the benchmark value for each candidate row, enabling relative percentile-style categorization.",
    "tags": [
      "case",
      "correlated-subquery",
      "benchmarks",
      "hard"
    ],
    "estimatedTimeMinutes": 6,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "department",
        "salary",
        "salary_standing"
      ],
      "values": [
        [
          "Anil",
          "IT",
          25000,
          "Below Dept Average"
        ],
        [
          "Bhumika",
          "HR",
          40000,
          "At Dept Average"
        ],
        [
          "Chetan",
          "IT",
          55000,
          "At Dept Average"
        ],
        [
          "Dhruv",
          "Finance",
          65000,
          "At Dept Average"
        ],
        [
          "Farah",
          "HR",
          32000,
          "Below Dept Average"
        ],
        [
          "Girish",
          "Finance",
          80000,
          "Above Dept Average"
        ],
        [
          "Harsha",
          "IT",
          45000,
          "At Dept Average"
        ],
        [
          "Isha",
          "Marketing",
          28000,
          "Below Dept Average"
        ],
        [
          "Kiran",
          "HR",
          70000,
          "Above Dept Average"
        ],
        [
          "Meena",
          "Marketing",
          60000,
          "Above Dept Average"
        ],
        [
          "Naveen",
          "Finance",
          35000,
          "Below Dept Average"
        ],
        [
          "Priya",
          "IT",
          75000,
          "Above Dept Average"
        ],
        [
          "Rahul",
          "Sales",
          30000,
          "Below Dept Average"
        ],
        [
          "Sneha",
          "Sales",
          48000,
          "At Dept Average"
        ],
        [
          "Varun",
          "Marketing",
          68000,
          "Above Dept Average"
        ],
        [
          "Divya",
          "Sales",
          42000,
          "At Dept Average"
        ],
        [
          "Manoj",
          "IT",
          52000,
          "At Dept Average"
        ],
        [
          "Pooja",
          "HR",
          27000,
          "Below Dept Average"
        ],
        [
          "Arjun",
          "Finance",
          90000,
          "Above Dept Average"
        ],
        [
          "Keerthi",
          "Sales",
          55000,
          "Above Dept Average"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 371,
    "title": "Project Capital Allocation Scale Classification",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Strategic planning classifies project size relative to the sponsoring department's overall budget. For all projects, display project name, department name, project budget (`project_budget`), department budget (`dept_budget`), and a project scale classification (`project_scale`): 'Major Capital Project' if project budget exceeds 30% of the department budget, 'Significant Project' if between 15% and 30% inclusive, and 'Routine Department Project' if under 15%.",
    "requirements": [
      "Join Projects and Departments on department ID (`dept_id`).",
      "Compare project budget to departmental budget thresholds.",
      "Classify scale into 'Major Capital Project', 'Significant Project', or 'Routine Department Project' aliased as `project_scale`.",
      "Display `project_name`, `dept_name`, `project_budget`, `dept_budget`, and `project_scale`."
    ],
    "tableName": "Projects, Departments",
    "hint": "Join on dept_id and compare p.budget against percentages of d.budget.",
    "expectedSql": "SELECT p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget, CASE WHEN p.budget > d.budget * 0.30 THEN 'Major Capital Project' WHEN p.budget >= d.budget * 0.15 THEN 'Significant Project' ELSE 'Routine Department Project' END AS project_scale FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id;",
    "explanation": "Cross-table mathematical comparisons in CASE statements provide real-world portfolio risk and capital allocation metrics.",
    "tags": [
      "case",
      "joins",
      "finance",
      "governance",
      "hard"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "project_name",
        "dept_name",
        "project_budget",
        "dept_budget",
        "project_scale"
      ],
      "values": [
        [
          "Cloud Migration",
          "IT",
          250000,
          1200000,
          "Significant Project"
        ],
        [
          "ERP Modernization",
          "IT",
          400000,
          1200000,
          "Major Capital Project"
        ],
        [
          "Global Talent Acquisition",
          "HR",
          120000,
          500000,
          "Significant Project"
        ],
        [
          "Financial Audit Automation",
          "Finance",
          300000,
          1500000,
          "Significant Project"
        ],
        [
          "Brand Revamp 2025",
          "Marketing",
          180000,
          800000,
          "Significant Project"
        ],
        [
          "CRM Sales Pipeline",
          "Sales",
          220000,
          950000,
          "Significant Project"
        ],
        [
          "Compliance Automation",
          "Legal",
          90000,
          400000,
          "Significant Project"
        ],
        [
          "NextGen AI Suite",
          "R&D",
          550000,
          1800000,
          "Major Capital Project"
        ]
      ],
      "rowCount": 8
    }
  },
  {
    "id": 372,
    "title": "Talent Retention and Compensation Flight Risk Audit",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Human Resources is conducting a flight risk assessment combining experience and compensation. For all employees, display employee name, years of experience, monthly salary, and an assigned retention assessment (`retention_assessment`): for seasoned staff (6 or more years of experience), label as 'High Flight Risk (Underpaid Veteran)' if salary is under 60,000, or 'Key Retained Leader' otherwise; for staff under 6 years of experience, label as 'Entry Flight Risk' if salary is under 30,000, or 'Standard Stable' otherwise.",
    "requirements": [
      "Classify employees using multi-tiered logic combining experience and salary criteria.",
      "Alias the resulting evaluation as `retention_assessment`.",
      "Display `emp_name`, `experience`, `salary`, and `retention_assessment` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Structure nested conditional expressions evaluating the tenure band first, then compensation thresholds.",
    "expectedSql": "SELECT emp_name, experience, salary, CASE WHEN experience >= 6 THEN CASE WHEN salary < 60000 THEN 'High Flight Risk (Underpaid Veteran)' ELSE 'Key Retained Leader' END ELSE CASE WHEN salary < 30000 THEN 'Entry Flight Risk' ELSE 'Standard Stable' END END AS retention_assessment FROM Employees;",
    "explanation": "Nesting CASE expressions models hierarchical decision trees where secondary criteria depend completely on the primary outcome branch.",
    "tags": [
      "case",
      "nested-case",
      "decision-tree",
      "advanced"
    ],
    "estimatedTimeMinutes": 6,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "experience",
        "salary",
        "retention_assessment"
      ],
      "values": [
        [
          "Anil",
          1,
          25000,
          "Entry Flight Risk"
        ],
        [
          "Bhumika",
          3,
          40000,
          "Standard Stable"
        ],
        [
          "Chetan",
          5,
          55000,
          "Standard Stable"
        ],
        [
          "Dhruv",
          7,
          65000,
          "Key Retained Leader"
        ],
        [
          "Farah",
          2,
          32000,
          "Standard Stable"
        ],
        [
          "Girish",
          10,
          80000,
          "Key Retained Leader"
        ],
        [
          "Harsha",
          4,
          45000,
          "Standard Stable"
        ],
        [
          "Isha",
          1,
          28000,
          "Entry Flight Risk"
        ],
        [
          "Kiran",
          8,
          70000,
          "Key Retained Leader"
        ],
        [
          "Meena",
          6,
          60000,
          "Key Retained Leader"
        ],
        [
          "Naveen",
          3,
          35000,
          "Standard Stable"
        ],
        [
          "Priya",
          9,
          75000,
          "Key Retained Leader"
        ],
        [
          "Rahul",
          2,
          30000,
          "Standard Stable"
        ],
        [
          "Sneha",
          5,
          48000,
          "Standard Stable"
        ],
        [
          "Varun",
          8,
          68000,
          "Key Retained Leader"
        ],
        [
          "Divya",
          3,
          42000,
          "Standard Stable"
        ],
        [
          "Manoj",
          6,
          52000,
          "High Flight Risk (Underpaid Veteran)"
        ],
        [
          "Pooja",
          1,
          27000,
          "Entry Flight Risk"
        ],
        [
          "Arjun",
          11,
          90000,
          "Key Retained Leader"
        ],
        [
          "Keerthi",
          4,
          55000,
          "Standard Stable"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 373,
    "title": "Workforce Priority Career Tier Designation",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Organizational design implements priority-ordered career tier designations. Classify employees into career tiers evaluated in sequence: 'Leadership Tier' for staff with at least 8 years of experience AND earning at least 75,000; 'Senior Contributor' for staff with at least 6 years of experience OR earning at least 60,000; 'Core Professional' for staff with at least 3 years of experience; and 'Associate' for all other employees. Display employee name, experience, salary, and the assigned tier aliased as `tier_designation`.",
    "requirements": [
      "Evaluate criteria in the exact specified priority order.",
      "Alias the assigned label as `tier_designation`.",
      "Display `emp_name`, `experience`, `salary`, and `tier_designation` from Employees."
    ],
    "tableName": "Employees",
    "hint": "Rely on sequential short-circuiting logic in the conditional expression, ordering conditions from most selective to least.",
    "expectedSql": "SELECT emp_name, experience, salary, CASE WHEN experience >= 8 AND salary >= 75000 THEN 'Leadership Tier' WHEN experience >= 6 OR salary >= 60000 THEN 'Senior Contributor' WHEN experience >= 3 THEN 'Core Professional' ELSE 'Associate' END AS tier_designation FROM Employees;",
    "explanation": "Because SQL short-circuits on the first condition evaluating to true, placing strict conditions first guarantees candidates receive their highest qualifying designation.",
    "tags": [
      "case",
      "precedence",
      "short-circuit",
      "interview-favorite"
    ],
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_name",
        "experience",
        "salary",
        "tier_designation"
      ],
      "values": [
        [
          "Anil",
          1,
          25000,
          "Associate"
        ],
        [
          "Bhumika",
          3,
          40000,
          "Core Professional"
        ],
        [
          "Chetan",
          5,
          55000,
          "Core Professional"
        ],
        [
          "Dhruv",
          7,
          65000,
          "Senior Contributor"
        ],
        [
          "Farah",
          2,
          32000,
          "Associate"
        ],
        [
          "Girish",
          10,
          80000,
          "Leadership Tier"
        ],
        [
          "Harsha",
          4,
          45000,
          "Core Professional"
        ],
        [
          "Isha",
          1,
          28000,
          "Associate"
        ],
        [
          "Kiran",
          8,
          70000,
          "Senior Contributor"
        ],
        [
          "Meena",
          6,
          60000,
          "Senior Contributor"
        ],
        [
          "Naveen",
          3,
          35000,
          "Core Professional"
        ],
        [
          "Priya",
          9,
          75000,
          "Leadership Tier"
        ],
        [
          "Rahul",
          2,
          30000,
          "Associate"
        ],
        [
          "Sneha",
          5,
          48000,
          "Core Professional"
        ],
        [
          "Varun",
          8,
          68000,
          "Senior Contributor"
        ],
        [
          "Divya",
          3,
          42000,
          "Core Professional"
        ],
        [
          "Manoj",
          6,
          52000,
          "Senior Contributor"
        ],
        [
          "Pooja",
          1,
          27000,
          "Associate"
        ],
        [
          "Arjun",
          11,
          90000,
          "Leadership Tier"
        ],
        [
          "Keerthi",
          4,
          55000,
          "Core Professional"
        ]
      ],
      "rowCount": 20
    }
  },
  {
    "id": 374,
    "title": "Comprehensive Performance and Incentive Audit Matrix",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "The compensation committee audits review and bonus history across all staff members. Display employee ID, name, review year, rating, and a comprehensive appraisal status (`appraisal_status`): 'Pending Initial Review' if the employee has never been reviewed; 'Top Performer (Bonus Awarded)' if rating is at least 4 and a bonus was awarded; 'High Rating (No Cash Bonus)' if rating is at least 4 but bonus is unassigned; and 'Standard Rating (No Cash Bonus)' for all other cases.",
    "requirements": [
      "Combine Employees and Performance_Reviews preserving all employees.",
      "Classify status into the four designated appraisal categories, accounting for outer join null values.",
      "Alias the resulting label as `appraisal_status`.",
      "Display `emp_id`, `emp_name`, `review_year`, `rating`, and `appraisal_status`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use a left outer join from Employees to Performance_Reviews and evaluate review_id nullity first.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.review_id IS NULL THEN 'Pending Initial Review' WHEN pr.rating >= 4 AND pr.bonus IS NOT NULL THEN 'Top Performer (Bonus Awarded)' WHEN pr.rating >= 4 AND pr.bonus IS NULL THEN 'High Rating (No Cash Bonus)' ELSE 'Standard Rating (No Cash Bonus)' END AS appraisal_status FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Correctly distinguishing between missing outer join child records (unreviewed employees) and present records with NULL values (reviewed with no bonus) tests senior SQL data engineering competence.",
    "tags": [
      "case",
      "left-join",
      "null-safe",
      "comprehensive-audit",
      "hard"
    ],
    "estimatedTimeMinutes": 6,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "review_year",
        "rating",
        "appraisal_status"
      ],
      "values": [
        [
          101,
          "Anil",
          null,
          null,
          "Pending Initial Review"
        ],
        [
          102,
          "Bhumika",
          2024,
          3,
          "Standard Rating (No Cash Bonus)"
        ],
        [
          103,
          "Chetan",
          2024,
          4,
          "Top Performer (Bonus Awarded)"
        ],
        [
          104,
          "Dhruv",
          2024,
          4,
          "Top Performer (Bonus Awarded)"
        ],
        [
          105,
          "Farah",
          null,
          null,
          "Pending Initial Review"
        ],
        [
          106,
          "Girish",
          2023,
          4,
          "Top Performer (Bonus Awarded)"
        ],
        [
          106,
          "Girish",
          2024,
          5,
          "Top Performer (Bonus Awarded)"
        ],
        [
          107,
          "Harsha",
          2024,
          3,
          "Standard Rating (No Cash Bonus)"
        ],
        [
          108,
          "Isha",
          null,
          null,
          "Pending Initial Review"
        ],
        [
          109,
          "Kiran",
          2024,
          4,
          "Top Performer (Bonus Awarded)"
        ],
        [
          110,
          "Meena",
          2024,
          4,
          "Top Performer (Bonus Awarded)"
        ],
        [
          111,
          "Naveen",
          2024,
          2,
          "Standard Rating (No Cash Bonus)"
        ],
        [
          112,
          "Priya",
          2023,
          4,
          "Top Performer (Bonus Awarded)"
        ],
        [
          112,
          "Priya",
          2024,
          5,
          "Top Performer (Bonus Awarded)"
        ],
        [
          113,
          "Rahul",
          null,
          null,
          "Pending Initial Review"
        ],
        [
          114,
          "Sneha",
          2024,
          4,
          "Top Performer (Bonus Awarded)"
        ],
        [
          115,
          "Varun",
          2024,
          4,
          "Top Performer (Bonus Awarded)"
        ],
        [
          116,
          "Divya",
          2024,
          3,
          "Standard Rating (No Cash Bonus)"
        ],
        [
          117,
          "Manoj",
          2024,
          3,
          "Standard Rating (No Cash Bonus)"
        ],
        [
          118,
          "Pooja",
          null,
          null,
          "Pending Initial Review"
        ],
        [
          119,
          "Arjun",
          2022,
          5,
          "Top Performer (Bonus Awarded)"
        ],
        [
          119,
          "Arjun",
          2023,
          5,
          "Top Performer (Bonus Awarded)"
        ],
        [
          119,
          "Arjun",
          2024,
          5,
          "Top Performer (Bonus Awarded)"
        ],
        [
          120,
          "Keerthi",
          null,
          null,
          "Pending Initial Review"
        ]
      ],
      "rowCount": 24
    }
  },
  {
    "id": 375,
    "title": "Departmental Health and Restructuring Priority Matrix",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "The executive committee is evaluating organizational health across all registered corporate departments. For each department in Departments, display department name, assigned staff count (`staff_count`), annualized payroll expense (`annual_payroll`, defaulting to 0), departmental budget, and a restructuring priority label (`restructure_priority`): 'Vacant Department - Urgent Staffing' if headcount is 0; 'Overstaffed & Overbudget' if headcount is at least 5 AND annual payroll exceeds budget; 'Overbudget Warning' if annual payroll exceeds budget; 'Undermanned Unit' if headcount is 2 or fewer; and 'Balanced Operations' for all other departments.",
    "requirements": [
      "Combine Departments and Employees preserving all registered departments.",
      "Group by department ID, department name, and budget.",
      "Count staff aliased as `staff_count` and sum annualized payroll (`salary * 12`) defaulting to 0 aliased as `annual_payroll`.",
      "Classify restructuring priority into the five designated categories, aliased as `restructure_priority`.",
      "Display `dept_name`, `staff_count`, `annual_payroll`, `budget`, and `restructure_priority`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Left join Departments to Employees, group by department attributes, and evaluate group aggregates with conditional logic in order.",
    "expectedSql": "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count, COALESCE(SUM(e.salary * 12), 0) AS annual_payroll, d.budget, CASE WHEN COUNT(e.emp_id) = 0 THEN 'Vacant Department - Urgent Staffing' WHEN COUNT(e.emp_id) >= 5 AND SUM(e.salary * 12) > d.budget THEN 'Overstaffed & Overbudget' WHEN SUM(e.salary * 12) > d.budget THEN 'Overbudget Warning' WHEN COUNT(e.emp_id) <= 2 THEN 'Undermanned Unit' ELSE 'Balanced Operations' END AS restructure_priority FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_id, d.dept_name, d.budget;",
    "explanation": "Enterprise decision engines use multi-tiered aggregate evaluations with priority fall-throughs to power operational analytics and organizational health dashboards.",
    "tags": [
      "case",
      "enterprise",
      "group-by",
      "decision-matrix",
      "hard"
    ],
    "estimatedTimeMinutes": 7,
    "expectedOutput": {
      "columns": [
        "dept_name",
        "staff_count",
        "annual_payroll",
        "budget",
        "restructure_priority"
      ],
      "values": [
        [
          "Finance",
          4,
          3240000,
          1500000,
          "Overbudget Warning"
        ],
        [
          "HR",
          4,
          2028000,
          500000,
          "Overbudget Warning"
        ],
        [
          "IT",
          5,
          3024000,
          1200000,
          "Overstaffed & Overbudget"
        ],
        [
          "Legal",
          0,
          0,
          400000,
          "Vacant Department - Urgent Staffing"
        ],
        [
          "Marketing",
          3,
          1872000,
          800000,
          "Overbudget Warning"
        ],
        [
          "Operations",
          0,
          0,
          650000,
          "Vacant Department - Urgent Staffing"
        ],
        [
          "R&D",
          0,
          0,
          1800000,
          "Vacant Department - Urgent Staffing"
        ],
        [
          "Sales",
          4,
          2100000,
          950000,
          "Overbudget Warning"
        ]
      ],
      "rowCount": 8
    }
  }
];

export const QUESTIONS = [
  ...BASE_QUESTIONS,
  ...DDL_DML_QUESTIONS
];
