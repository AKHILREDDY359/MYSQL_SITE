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
    "title": "Employees in the IT Department",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who work in the 'IT' department. Display all employee details.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Include only employees whose department is 'IT'."
    ],
    "tableName": "Employees",
    "hint": "Use an equality check comparing the department column to 'IT'.",
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
    "title": "Employees Earning Over 50,000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose monthly salary is greater than 50,000. Display all details.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Include only employees with a salary greater than 50,000."
    ],
    "tableName": "Employees",
    "hint": "Use a comparison operator to test if salary exceeds 50000.",
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
    "title": "Employees Aged 25 or Younger",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who are 25 years old or younger. Display all details.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Include only employees aged 25 or younger."
    ],
    "tableName": "Employees",
    "hint": "Use a less-than-or-equal comparison on the age column.",
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
    "title": "HR Employees Earning Over 30,000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees in the 'HR' department who earn more than 30,000.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Employee must belong to the 'HR' department.",
      "Salary must be strictly greater than 30,000."
    ],
    "tableName": "Employees",
    "hint": "Combine both filtering conditions using AND.",
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
    "title": "Employees in IT or Finance",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who work in either the 'IT' or 'Finance' department.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Include employees who belong to either 'IT' or 'Finance'."
    ],
    "tableName": "Employees",
    "hint": "Connect the two alternative department conditions using OR.",
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
    "title": "Employees with Salaries Between 30,000 and 60,000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose salary is between 30,000 and 60,000, including both amounts.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Salary must fall between 30,000 and 60,000 (inclusive)."
    ],
    "tableName": "Employees",
    "hint": "Use an inclusive range operator to test the salary value.",
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
    "title": "Employees in IT, HR, or Sales",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who belong to the 'IT', 'HR', or 'Sales' department.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Department must be one of: 'IT', 'HR', or 'Sales'."
    ],
    "tableName": "Employees",
    "hint": "Check whether the department matches any value in a list of options.",
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
    "title": "Hyderabad Employees Earning At Least 40,000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees located in 'Hyderabad' who earn 40,000 or more.",
    "requirements": [
      "Select all columns from the Employees table.",
      "City must be 'Hyderabad'.",
      "Salary must be 40,000 or higher."
    ],
    "tableName": "Employees",
    "hint": "Combine an equality check on city with a greater-than-or-equal check on salary.",
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
    "title": "Employees Whose Name Starts with 'A'",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose full name begins with the capital letter 'A'.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Employee name must start with the letter 'A'."
    ],
    "tableName": "Employees",
    "hint": "Use pattern matching with a trailing wildcard after 'A'.",
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
    "title": "Employees Whose Name Ends with 'a'",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose name ends with the letter 'a' (case-insensitive).",
    "requirements": [
      "Select all columns from the Employees table.",
      "Employee name must end with the letter 'a'."
    ],
    "tableName": "Employees",
    "hint": "Use pattern matching with a leading wildcard before 'a'.",
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
    "title": "Employees Whose Name Contains 'an'",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose name contains the letters 'an' anywhere in the name.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Employee name must contain 'an'."
    ],
    "tableName": "Employees",
    "hint": "Enclose 'an' between wildcards on both sides.",
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
    "title": "Employees with Salary Not Equal to 40,000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose salary is not equal to 40,000.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Exclude employees whose salary is exactly 40,000."
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
    "title": "IT Employees Aged 25 to 30",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Medium",
    "problemStatement": "Find all employees in the 'IT' department who are between 25 and 30 years old, inclusive.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Department must be 'IT'.",
      "Age must be between 25 and 30 (inclusive)."
    ],
    "tableName": "Employees",
    "hint": "Combine a range condition on age with an equality check on department.",
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
    "title": "Employees Not in HR",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who do not belong to the 'HR' department.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Exclude employees in the 'HR' department."
    ],
    "tableName": "Employees",
    "hint": "Use an inequality comparison on the department column.",
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
    "title": "Chennai or Bengaluru High Earners",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Medium",
    "problemStatement": "Find all employees based in either 'Chennai' or 'Bengaluru' who earn strictly more than 50,000.",
    "requirements": [
      "Select all columns from the Employees table.",
      "City must be 'Chennai' or 'Bengaluru'.",
      "Salary must be strictly greater than 50,000."
    ],
    "tableName": "Employees",
    "hint": "Wrap the city choices in parentheses so the alternative is checked before salary.",
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
    "title": "Experienced Employees Earning Under 70,000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who have at least 5 years of experience and earn less than 70,000.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Experience must be 5 years or more.",
      "Salary must be strictly less than 70,000."
    ],
    "tableName": "Employees",
    "hint": "Combine an experience condition (>= 5) with a salary condition (< 70000).",
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
    "title": "Employees Hired in 2022, 2023, or 2024",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who joined the company in 2022, 2023, or 2024.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Joining year must be 2022, 2023, or 2024."
    ],
    "tableName": "Employees",
    "hint": "Check whether joining_year matches any year in the list (2022, 2023, 2024).",
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
    "title": "Employees with Exactly 4-Letter Names",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Medium",
    "problemStatement": "Find all employees whose name is exactly four characters long.",
    "requirements": [
      "Select all columns from the Employees table.",
      "The employee name must have an exact length of 4 characters."
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
    "title": "Salaries Outside 30,000 to 60,000",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Medium",
    "problemStatement": "Find all employees whose salary is strictly outside the range of 30,000 to 60,000 (less than 30,000 or greater than 60,000).",
    "requirements": [
      "Select all columns from the Employees table.",
      "Salary must not fall between 30,000 and 60,000 (inclusive)."
    ],
    "tableName": "Employees",
    "hint": "Use a negated range operator to exclude values between 30000 and 60000.",
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
    "title": "IT or Sales Employees Outside Chennai",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who work in either 'IT' or 'Sales' and are not located in 'Chennai'.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Department must be 'IT' or 'Sales'.",
      "City must not be 'Chennai'."
    ],
    "tableName": "Employees",
    "hint": "Filter for departments in ('IT', 'Sales') combined with city != 'Chennai'.",
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
    "title": "Count Total Employees",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Find the total number of employees in the company.",
    "requirements": [
      "Count all records in the Employees table.",
      "Alias the resulting count as `total_employees`."
    ],
    "tableName": "Employees",
    "hint": "Use the standard counting aggregate function.",
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
    "title": "Calculate Total Payroll",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Calculate the total sum of salaries paid to all employees.",
    "requirements": [
      "Sum the salary column across all employees.",
      "Alias the calculated total as `total_salary`."
    ],
    "tableName": "Employees",
    "hint": "Apply the sum aggregate function to the salary column.",
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
    "title": "Calculate Average Salary",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Find the average salary of all employees in the company.",
    "requirements": [
      "Compute the average of the salary column.",
      "Alias the result as `average_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use the average aggregate function on salary.",
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
    "title": "Find the Highest Salary",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Find the highest salary among all employees in the company.",
    "requirements": [
      "Find the maximum value from the salary column.",
      "Alias the result as `max_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use the maximum aggregate function on salary.",
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
    "title": "Find the Lowest Salary",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Find the lowest salary among all employees in the company.",
    "requirements": [
      "Find the minimum value from the salary column.",
      "Alias the result as `min_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use the minimum aggregate function on salary.",
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
    "title": "Count Employees in the IT Department",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Count how many employees work in the 'IT' department.",
    "requirements": [
      "Filter for employees where department is 'IT'.",
      "Alias the count as `it_employees_count`."
    ],
    "tableName": "Employees",
    "hint": "Combine an aggregate count with a filter on department.",
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
    "title": "Calculate Average Employee Age",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Easy",
    "problemStatement": "Find the average age of all employees in the company.",
    "requirements": [
      "Compute the average of the age column.",
      "Alias the result as `average_age`."
    ],
    "tableName": "Employees",
    "hint": "Use the average aggregate function on age.",
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
    "title": "Total Salary Paid in Hyderabad",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Easy",
    "problemStatement": "Calculate the total salary paid to all employees based in 'Hyderabad'.",
    "requirements": [
      "Sum the salaries for employees whose city is 'Hyderabad'.",
      "Alias the total as `total_hyderabad_salary`."
    ],
    "tableName": "Employees",
    "hint": "Filter for city = 'Hyderabad' before summing the salary column.",
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
    "title": "Highest Salary with 5+ Years Experience",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Find the highest salary among employees who have at least 5 years of experience.",
    "requirements": [
      "Filter for employees with 5 or more years of experience.",
      "Alias the maximum salary as `max_salary`."
    ],
    "tableName": "Employees",
    "hint": "Filter where experience >= 5 and find MAX(salary).",
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
    "title": "Count Employees Earning Over 50,000",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Easy",
    "problemStatement": "Count how many employees earn a salary strictly greater than 50,000.",
    "requirements": [
      "Count employees where salary is greater than 50,000.",
      "Alias the count as `count_high_earners`."
    ],
    "tableName": "Employees",
    "hint": "Filter for salary > 50000 and count the rows.",
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
    "title": "Number of Employees in Each Department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Find the number of employees working in each department.",
    "requirements": [
      "Group records by department.",
      "Display department name and employee count.",
      "Alias the employee count as `employee_count`."
    ],
    "tableName": "Employees",
    "hint": "Group by department and apply the count function.",
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
    "title": "Average Salary in Each Department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Find the average salary of employees in each department.",
    "requirements": [
      "Group records by department.",
      "Display department name and average salary.",
      "Alias the average as `avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Group by department and compute the average salary.",
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
    "title": "Total Salary in Each Department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Calculate the total salary paid by each department.",
    "requirements": [
      "Group records by department.",
      "Display department name and total salary.",
      "Alias the total as `total_salary`."
    ],
    "tableName": "Employees",
    "hint": "Group by department and sum the salaries.",
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
    "title": "Highest Salary in Each Department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Find the highest salary earned in each department.",
    "requirements": [
      "Group records by department.",
      "Display department name and maximum salary.",
      "Alias the maximum as `max_salary`."
    ],
    "tableName": "Employees",
    "hint": "Group by department and find the maximum salary.",
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
    "title": "Lowest Salary in Each Department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Find the lowest salary earned in each department.",
    "requirements": [
      "Group records by department.",
      "Display department name and minimum salary.",
      "Alias the minimum as `min_salary`."
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
    "title": "Number of Employees in Each City",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Find the total number of employees residing in each city.",
    "requirements": [
      "Group records by city.",
      "Display city name and employee count.",
      "Alias the count as `employee_count`."
    ],
    "tableName": "Employees",
    "hint": "Group by city and count the employees.",
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
    "title": "Average Salary in Each City",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Find the average employee salary for each city.",
    "requirements": [
      "Group records by city.",
      "Display city name and average salary.",
      "Alias the average as `avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Group by city and calculate the average salary.",
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
    "title": "Number of Employees Hired per Year",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Find how many employees joined the company in each year.",
    "requirements": [
      "Group records by joining_year.",
      "Display joining_year and employee count.",
      "Alias the count as `employee_count`."
    ],
    "tableName": "Employees",
    "hint": "Group by the joining_year column and count records.",
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
    "title": "Departments with More Than 3 Employees",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that have strictly more than 3 employees.",
    "requirements": [
      "Group records by department.",
      "Display department name and employee count aliased as `employee_count`.",
      "Include only departments with more than 3 employees."
    ],
    "tableName": "Employees",
    "hint": "Use a post-aggregation filter to restrict groups where count exceeds 3.",
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
    "title": "Departments with Average Salary Over 50,000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Find all departments where the average employee salary is strictly greater than 50,000.",
    "requirements": [
      "Group records by department.",
      "Display department name and average salary aliased as `avg_salary`.",
      "Include only departments where average salary exceeds 50,000."
    ],
    "tableName": "Employees",
    "hint": "Filter the grouped departments where average salary is greater than 50000.",
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
    "title": "Departments with Total Payroll Over 150,000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Find all departments whose total salary expense is strictly greater than 150,000.",
    "requirements": [
      "Group records by department.",
      "Display department name and total salary aliased as `total_salary`.",
      "Include only departments where total salary exceeds 150,000."
    ],
    "tableName": "Employees",
    "hint": "Filter group totals where the sum of salary is greater than 150000.",
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
    "title": "Departments Where Highest Salary is At Least 70,000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Find all departments where the top earner receives a salary of 70,000 or more.",
    "requirements": [
      "Group records by department.",
      "Display department name and maximum salary aliased as `max_salary`.",
      "Include only departments where maximum salary is at least 70,000."
    ],
    "tableName": "Employees",
    "hint": "Filter groups where MAX(salary) is 70000 or higher.",
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
    "title": "Cities with At Least 4 Employees",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Find all cities that have 4 or more resident employees.",
    "requirements": [
      "Group records by city.",
      "Display city name and employee count aliased as `employee_count`.",
      "Include only cities with 4 or more employees."
    ],
    "tableName": "Employees",
    "hint": "Group by city and filter for employee count of at least 4.",
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
    "title": "Departments with Average Salary Under 45,000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Find all departments where the average employee salary is strictly below 45,000.",
    "requirements": [
      "Group records by department.",
      "Display department name and average salary aliased as `avg_salary`.",
      "Include only departments where average salary is less than 45,000."
    ],
    "tableName": "Employees",
    "hint": "Filter groups where average salary is under 45000.",
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
    "title": "Departments with Over 2 Employees and Average Salary Above 40,000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Hard",
    "problemStatement": "Find departments that have more than 2 employees and an average salary strictly greater than 40,000.",
    "requirements": [
      "Group records by department.",
      "Display department name, `employee_count`, and `avg_salary`.",
      "Include only departments with more than 2 employees and average salary above 40,000."
    ],
    "tableName": "Employees",
    "hint": "Combine two conditions in the group filter using AND.",
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
    "title": "Sort Employees by Salary (Highest First)",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Easy",
    "problemStatement": "Display all employees, ordered by their salary from highest to lowest.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Sort by salary in descending order (highest first)."
    ],
    "tableName": "Employees",
    "hint": "Order by salary descending.",
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
    "title": "Sort Employees by Age (Youngest First)",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Easy",
    "problemStatement": "Display all employees, ordered by age from youngest to oldest.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Sort by age in ascending order (youngest first)."
    ],
    "tableName": "Employees",
    "hint": "Order by age ascending.",
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
    "title": "Sort by Department (A to Z), then Salary (Highest First)",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Display all employees, sorted alphabetically by department name, and then by salary from highest to lowest within each department.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Sort primarily by department in ascending order (A to Z).",
      "Sort secondarily by salary in descending order (highest first)."
    ],
    "tableName": "Employees",
    "hint": "Specify department ASC followed by salary DESC in your ordering clause.",
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
    "title": "Top 3 Highest-Paid Employees",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Find the 3 employees with the highest salaries in the company.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Order by salary from highest to lowest.",
      "Limit the output to the top 3 employees."
    ],
    "tableName": "Employees",
    "hint": "Sort descending by salary and limit the result to 3 rows.",
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
    "title": "Rank Major Departments by Average Salary",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Hard",
    "problemStatement": "For departments with at least 3 employees, display the department name, employee count, and average salary, ordered by average salary from highest to lowest.",
    "requirements": [
      "Group records by department.",
      "Display department name, `employee_count`, and `avg_salary`.",
      "Include only departments with 3 or more employees.",
      "Sort by average salary in descending order."
    ],
    "tableName": "Employees",
    "hint": "Combine grouping, group filtering for count >= 3, and ordering by average salary DESC.",
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
    "title": "Sort Departments by Location",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Beginner",
    "problemStatement": "Display all departments ordered alphabetically by location.",
    "requirements": [
      "Select `dept_name`, `location`, and `budget`.",
      "Order rows by `location` in ascending order."
    ],
    "tableName": "Departments",
    "hint": "Use ORDER BY location ASC.",
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
    "title": "Rank Projects by Budget",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Beginner",
    "problemStatement": "Display all projects ordered from highest budget to lowest.",
    "requirements": [
      "Select `project_id`, `project_name`, and `budget`.",
      "Order rows by `budget` descending."
    ],
    "tableName": "Projects",
    "hint": "Use ORDER BY budget DESC.",
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
    "title": "Rank Bonuses from Highest to Lowest",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Easy",
    "problemStatement": "Display all performance reviews with a bonus, ordered from highest bonus to lowest.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Filter out NULL bonuses.",
      "Order by `bonus` descending."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter with bonus IS NOT NULL and sort with ORDER BY bonus DESC.",
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
    "title": "Sort Project Assignments by Hours",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Easy",
    "problemStatement": "Display all employee project assignments ordered from fewest hours to most hours.",
    "requirements": [
      "Select `emp_id`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Order by `hours_allocated` in ascending order."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use ORDER BY hours_allocated ASC.",
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
    "title": "Sort by Department and Salary",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Easy",
    "problemStatement": "Display employees sorted alphabetically by department, and by salary from highest to lowest within each department.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary`.",
      "Order by `department` ascending, then `salary` descending."
    ],
    "tableName": "Employees",
    "hint": "Specify multiple sort columns separated by commas.",
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
    "title": "Sort Reviews by Rating and Year",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Medium",
    "problemStatement": "Display performance reviews sorted by rating from highest to lowest, then by review year from earliest to latest.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `review_year`.",
      "Order by `rating` descending, then `review_year` ascending."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Sort by rating DESC, review_year ASC.",
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
    "title": "Sort Projects by Status and Start Date",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Medium",
    "problemStatement": "Display projects sorted alphabetically by status, and by start date from newest to oldest within each status.",
    "requirements": [
      "Select `project_id`, `project_name`, `status`, and `start_date`.",
      "Order by `status` ascending, then `start_date` descending."
    ],
    "tableName": "Projects",
    "hint": "Use ORDER BY status ASC, start_date DESC.",
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
    "title": "Sort by City, Experience, and Name",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Hard",
    "problemStatement": "Display employees sorted by city alphabetically, then by experience descending, and finally by name alphabetically.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `city`, and `experience`.",
      "Order by `city` ASC, `experience` DESC, `emp_name` ASC."
    ],
    "tableName": "Employees",
    "hint": "List all three sort keys in the ORDER BY clause.",
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
    "title": "Top 3 Highest-Budget Projects",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Easy",
    "problemStatement": "Find the 3 projects with the highest budgets.",
    "requirements": [
      "Select `project_id`, `project_name`, and `budget`.",
      "Order by `budget` descending.",
      "Limit output to 3 rows."
    ],
    "tableName": "Projects",
    "hint": "Sort descending by budget and use LIMIT 3.",
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
    "title": "Employees Ranked 6 to 10 by Salary",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Medium",
    "problemStatement": "Display employees ranked 6th through 10th by salary (page 2 of top earners).",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary`.",
      "Order by `salary` descending.",
      "Skip the top 5 earners and return the next 5."
    ],
    "tableName": "Employees",
    "hint": "Use LIMIT 5 OFFSET 5 after sorting by salary DESC.",
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
    "title": "Projects 4 Through 6 by ID",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Easy",
    "problemStatement": "Display projects ordered by project ID, skipping the first 3 and returning the next 3.",
    "requirements": [
      "Select `project_id`, `project_name`, and `status`.",
      "Order by `project_id` ascending.",
      "Skip 3 rows and limit to 3 rows."
    ],
    "tableName": "Projects",
    "hint": "Use LIMIT 3 OFFSET 3.",
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
    "title": "Bottom 2 Assignments by Hours",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Medium",
    "problemStatement": "Find the 2 project assignments with the lowest weekly hours, breaking ties by employee ID.",
    "requirements": [
      "Select `emp_id`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Order by `hours_allocated` ascending, then `emp_id` ascending.",
      "Limit output to 2 rows."
    ],
    "tableName": "Employee_Projects",
    "hint": "Sort by hours_allocated ASC, emp_id ASC and limit to 2.",
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
    "title": "Sort Bonuses Highest First with Nulls Last",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Hard",
    "problemStatement": "Display performance reviews sorted by bonus from highest to lowest, placing reviews with no bonus (NULL) at the very end.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Order non-null bonuses from highest to lowest.",
      "Place NULL bonus values at the end of the results."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use a CASE expression in ORDER BY to rank NULL values after numbers.",
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
    "title": "Sort Employees by Annual Salary",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Medium",
    "problemStatement": "Display each employee's monthly salary and annual salary (salary * 12), ordered from highest annual salary to lowest.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `salary`, and `(salary * 12) AS annual_salary`.",
      "Order by annual salary descending."
    ],
    "tableName": "Employees",
    "hint": "Calculate annual salary and order by the calculated expression DESC.",
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
    "title": "Top 5 Employees by Pay per Year of Experience",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Hard",
    "problemStatement": "Calculate pay per year of experience (salary / experience rounded to 2 decimals) for employees with experience > 0. Return the top 5.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `salary`, `experience`, and `ROUND(salary / experience, 2) AS pay_per_year_exp`.",
      "Filter for `experience > 0`.",
      "Order by `(salary / experience)` descending.",
      "Limit output to 5 rows."
    ],
    "tableName": "Employees",
    "hint": "Divide salary by experience, round to 2 decimal places, and limit to 5.",
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
    "title": "Overall Salary Summary",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Beginner",
    "problemStatement": "Calculate the minimum, maximum, average (rounded to 2 decimal places), and total sum of salaries across all employees.",
    "requirements": [
      "Calculate minimum salary aliased as `min_sal`.",
      "Calculate maximum salary aliased as `max_sal`.",
      "Calculate average salary rounded to 2 decimals aliased as `avg_sal`.",
      "Calculate sum of salaries aliased as `total_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Use MIN, MAX, ROUND(AVG(), 2), and SUM functions on the salary column.",
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
    "title": "Department Budget Summary",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Beginner",
    "problemStatement": "Calculate the total, average (rounded to 2 decimals), and maximum budget across all departments.",
    "requirements": [
      "Calculate total budget aliased as `total_dept_budget`.",
      "Calculate average budget rounded to 2 decimals aliased as `avg_dept_budget`.",
      "Calculate maximum budget aliased as `max_dept_budget`."
    ],
    "tableName": "Departments",
    "hint": "Use SUM, ROUND(AVG(), 2), and MAX on the budget column of the Departments table.",
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
    "title": "Bonus Payout Statistics",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Find the count of awarded bonuses, total bonus payout, and average bonus amount (rounded to 2 decimal places).",
    "requirements": [
      "Count non-null bonuses aliased as `bonus_count`.",
      "Calculate total bonus amount aliased as `total_bonus_payout`.",
      "Calculate average bonus rounded to 2 decimals aliased as `avg_bonus_payout`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "COUNT(bonus) automatically ignores NULL values.",
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
    "title": "Active Projects Count and Budget",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Find the total number of active projects and their combined budget.",
    "requirements": [
      "Count active projects aliased as `active_projects`.",
      "Calculate total budget of active projects aliased as `total_active_budget`.",
      "Filter for `status = 'Active'`."
    ],
    "tableName": "Projects",
    "hint": "Apply COUNT(*) and SUM(budget) with a WHERE clause filtering for 'Active'.",
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
    "title": "Total and Average Weekly Project Hours",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Calculate the total weekly hours and the average weekly hours (rounded to 2 decimals) allocated across all project assignments.",
    "requirements": [
      "Sum total hours aliased as `total_weekly_hours`.",
      "Calculate average hours rounded to 2 decimals aliased as `avg_weekly_hours`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use SUM and ROUND(AVG(), 2) on hours_allocated.",
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
    "title": "Count IT vs Non-IT Employees",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Count how many employees work in IT compared to all other departments.",
    "requirements": [
      "Count IT employees aliased as `it_count`.",
      "Count non-IT employees aliased as `non_it_count`."
    ],
    "tableName": "Employees",
    "hint": "Use conditional aggregation with SUM(CASE WHEN ... THEN 1 ELSE 0 END).",
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
    "title": "Senior vs Junior Payroll Spend",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Calculate the total monthly salary spend for senior employees (5+ years experience) versus junior employees (< 5 years experience).",
    "requirements": [
      "Sum salary for employees with `experience >= 5` aliased as `senior_payroll`.",
      "Sum salary for employees with `experience < 5` aliased as `junior_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END).",
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
    "title": "Count Top vs Low-to-Mid Ratings",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Count the number of reviews with a perfect rating of 5, and reviews with a rating of 3 or below.",
    "requirements": [
      "Count reviews where `rating = 5` aliased as `top_ratings`.",
      "Count reviews where `rating <= 3` aliased as `low_or_mid_ratings`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use conditional aggregation with CASE expressions.",
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
    "title": "Count Projects by Status in Columns",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Count the number of projects in 'Completed', 'Active', and 'Planning' status as separate columns.",
    "requirements": [
      "Count completed projects aliased as `completed_count`.",
      "Count active projects aliased as `active_count`.",
      "Count planning projects aliased as `planning_count`."
    ],
    "tableName": "Projects",
    "hint": "Use SUM(CASE WHEN status = '...' THEN 1 ELSE 0 END) for each status.",
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
    "title": "Hyderabad vs Other Cities Payroll",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Calculate the total salary spend for employees in Hyderabad compared to all other cities.",
    "requirements": [
      "Sum salary for employees in 'Hyderabad' aliased as `hyd_payroll`.",
      "Sum salary for employees outside 'Hyderabad' aliased as `other_payroll`."
    ],
    "tableName": "Employees",
    "hint": "Use conditional SUM with CASE WHEN checking city.",
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
    "title": "Count Unique Departments, Cities, and Total Employees",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Beginner",
    "problemStatement": "Find the number of distinct departments, distinct cities, and total employees in the company.",
    "requirements": [
      "Count distinct departments aliased as `unique_departments`.",
      "Count distinct cities aliased as `unique_cities`.",
      "Count total employees aliased as `total_employees`."
    ],
    "tableName": "Employees",
    "hint": "Use COUNT(DISTINCT column) for unique counts and COUNT(*) for total rows.",
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
    "title": "Count Distinct Employees Assigned to Projects",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Find the total number of unique employees who are currently assigned to at least one project.",
    "requirements": [
      "Count distinct employee IDs aliased as `staffed_employees`.",
      "Query the Employee_Projects table."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use COUNT(DISTINCT emp_id).",
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
    "title": "Count Distinct Review Years",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Find how many distinct years have performance reviews recorded in the database.",
    "requirements": [
      "Count distinct review years aliased as `evaluated_years`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use COUNT(DISTINCT review_year).",
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
    "title": "Count Distinct Project Statuses",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Find the total number of unique status values across all projects.",
    "requirements": [
      "Count distinct statuses aliased as `unique_statuses`."
    ],
    "tableName": "Projects",
    "hint": "Use COUNT(DISTINCT status).",
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
    "title": "Average of Distinct Salaries",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Medium",
    "problemStatement": "Calculate the average of unique salary values in the company, rounded to 2 decimal places.",
    "requirements": [
      "Calculate the average of distinct salary values, rounded to 2 decimal places, aliased as `avg_unique_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use ROUND(AVG(DISTINCT salary), 2).",
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
    "title": "Chennai Office Total Payroll and Average Experience",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Calculate total salary spend and average years of experience (rounded to 2 decimals) for employees in Chennai.",
    "requirements": [
      "Sum salaries aliased as `chennai_payroll`.",
      "Calculate average experience rounded to 2 decimals aliased as `avg_chennai_exp`.",
      "Filter for `city = 'Chennai'`."
    ],
    "tableName": "Employees",
    "hint": "Filter by city with WHERE and apply SUM and AVG.",
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
    "title": "Highest and Lowest Bonus in 2024",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Find the highest and lowest bonus awarded in the year 2024.",
    "requirements": [
      "Find maximum bonus aliased as `max_2024_bonus`.",
      "Find minimum bonus aliased as `min_2024_bonus`.",
      "Filter for `review_year = 2024`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use MAX(bonus) and MIN(bonus) with WHERE review_year = 2024.",
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
    "title": "Salary Range in IT Department",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Medium",
    "problemStatement": "Calculate the difference between the highest and lowest salary in the IT department.",
    "requirements": [
      "Calculate MAX(salary) minus MIN(salary) aliased as `it_salary_range`.",
      "Filter for `department = 'IT'`."
    ],
    "tableName": "Employees",
    "hint": "Subtract MIN(salary) from MAX(salary) in your SELECT clause.",
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
    "title": "Count High-Earning Recent Hires",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Count the number of employees who joined after 2020 and earn more than 40,000.",
    "requirements": [
      "Count matching employees aliased as `high_earning_recent_joiners`.",
      "Filter for `joining_year > 2020` and `salary > 40000`."
    ],
    "tableName": "Employees",
    "hint": "Combine the two filtering conditions in WHERE and count the rows.",
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
    "title": "Total Budget of Completed Projects",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Calculate the total budget spent on all completed projects.",
    "requirements": [
      "Sum project budgets aliased as `completed_project_spend`.",
      "Filter for `status = 'Completed'`."
    ],
    "tableName": "Projects",
    "hint": "Use SUM(budget) WHERE status = 'Completed'.",
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
    "title": "Average Age and Experience in HR and Finance",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Medium",
    "problemStatement": "Calculate the average age and average experience (both rounded to 1 decimal place) for employees in HR or Finance.",
    "requirements": [
      "Calculate average age rounded to 1 decimal aliased as `avg_age`.",
      "Calculate average experience rounded to 1 decimal aliased as `avg_exp`.",
      "Filter for `department IN ('HR', 'Finance')`."
    ],
    "tableName": "Employees",
    "hint": "Use ROUND(AVG(...), 1) with an IN filter on department.",
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
    "title": "Employee Count and Average Salary by Department and City",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Easy",
    "problemStatement": "Group employees by department and city. Display the department, city, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `department`, `city`, `COUNT(*) AS emp_count`, and `ROUND(AVG(salary), 2) AS avg_salary`.",
      "Group by `department, city`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY department, city.",
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
    "title": "Project Count and Total Budget by Department and Status",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Group projects by department ID and status. Display the department ID, status, project count, and total budget.",
    "requirements": [
      "Select `dept_id`, `status`, `COUNT(*) AS project_count`, and `SUM(budget) AS total_budget`.",
      "Group by `dept_id, status`."
    ],
    "tableName": "Projects",
    "hint": "Use GROUP BY dept_id, status.",
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
    "title": "Review Count and Total Bonuses by Year and Rating",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Group performance reviews by review year and rating. Display the year, rating, review count, and total bonuses (replacing NULL with 0).",
    "requirements": [
      "Select `review_year`, `rating`, `COUNT(*) AS review_count`, and `COALESCE(SUM(bonus), 0) AS total_bonuses`.",
      "Group by `review_year, rating`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use GROUP BY review_year, rating with COALESCE(SUM(bonus), 0).",
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
    "title": "Staff Count and Hours by Project and Role",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Group project assignments by project ID and assigned role. Display project ID, role, staff count, and total weekly hours.",
    "requirements": [
      "Select `project_id`, `assigned_role`, `COUNT(*) AS role_staff_count`, and `SUM(hours_allocated) AS total_role_hours`.",
      "Group by `project_id, assigned_role`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use GROUP BY project_id, assigned_role.",
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
    "title": "Hires Count by Joining Year and Department",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Group employees by joining year and department to see how many people were hired in each department per year.",
    "requirements": [
      "Select `joining_year`, `department`, and `COUNT(*) AS hires_count`.",
      "Group by `joining_year, department`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY joining_year, department.",
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
    "title": "Employee Count by City and Experience",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Hard",
    "problemStatement": "Group employees by city and years of experience. Display city, experience, and the employee count.",
    "requirements": [
      "Select `city`, `experience`, and `COUNT(*) AS head_count`.",
      "Group by `city, experience`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY city, experience.",
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
    "title": "Salary Spread by Department",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "For each department, find the minimum salary, maximum salary, and the salary spread (max salary minus min salary).",
    "requirements": [
      "Select `department`, `MIN(salary) AS min_salary`, `MAX(salary) AS max_salary`, and `(MAX(salary) - MIN(salary)) AS salary_spread`.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Group by department and subtract MIN(salary) from MAX(salary).",
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
    "title": "Staffing and Workload per Project",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "For each project, calculate the number of unique employees assigned, total hours, and average hours per employee (rounded to 2 decimals).",
    "requirements": [
      "Select `project_id`, `COUNT(DISTINCT emp_id) AS assigned_staff`, `SUM(hours_allocated) AS total_hours`, and `ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member`.",
      "Group by `project_id`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use GROUP BY project_id with aggregate functions.",
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
    "title": "Review Statistics per Employee",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Medium",
    "problemStatement": "For each employee, calculate their total number of reviews, average rating (rounded to 2 decimals), and highest bonus received (or 0 if none).",
    "requirements": [
      "Select `emp_id`, `COUNT(*) AS total_reviews`, `ROUND(AVG(rating), 2) AS avg_rating`, and `COALESCE(MAX(bonus), 0) AS highest_bonus`.",
      "Group by `emp_id`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use GROUP BY emp_id.",
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
    "title": "Staff Count, Total Payroll, and High Earners by City",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Medium",
    "problemStatement": "For each city, calculate total staff, total salary spend, and the count of employees earning over 50,000.",
    "requirements": [
      "Select `city`, `COUNT(*) AS total_staff`, `SUM(salary) AS total_payroll`, and `SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners_count`.",
      "Group by `city`."
    ],
    "tableName": "Employees",
    "hint": "Group by city and use a conditional SUM for high earners.",
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
    "title": "Budget Statistics by Project Status",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "For each project status, calculate the number of projects, minimum budget, maximum budget, and average budget rounded to 2 decimals.",
    "requirements": [
      "Select `status`, `COUNT(*) AS projects_count`, `MIN(budget) AS min_budget`, `MAX(budget) AS max_budget`, and `ROUND(AVG(budget), 2) AS avg_budget`.",
      "Group by `status`."
    ],
    "tableName": "Projects",
    "hint": "Use GROUP BY status with MIN, MAX, and ROUND(AVG(), 2).",
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
    "title": "Department Count and Total Budget by Location",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "For each location, calculate the total number of departments and their combined budget.",
    "requirements": [
      "Select `location`, `COUNT(*) AS dept_count`, and `SUM(budget) AS total_regional_budget`.",
      "Group by `location`."
    ],
    "tableName": "Departments",
    "hint": "Use GROUP BY location.",
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
    "title": "Recent Hires and Average Salary by Department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "For employees who joined after 2020, calculate the number of hires and average salary (rounded to 2 decimals) by department.",
    "requirements": [
      "Select `department`, `COUNT(*) AS recent_hires`, and `ROUND(AVG(salary), 2) AS avg_recent_salary`.",
      "Filter for `joining_year > 2020` before grouping.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Use WHERE before GROUP BY.",
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
    "title": "Pending Projects and Budget by Department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "For unfinished projects (status != 'Completed'), find the number of projects and total budget grouped by department ID.",
    "requirements": [
      "Select `dept_id`, `COUNT(*) AS pending_projects`, and `SUM(budget) AS pending_budget`.",
      "Filter for `status != 'Completed'`.",
      "Group by `dept_id`."
    ],
    "tableName": "Projects",
    "hint": "Use WHERE status != 'Completed' GROUP BY dept_id.",
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
    "title": "Top Reviews and Total Bonus for Highly-Rated Employees",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "For reviews with a rating of 4 or higher, calculate the count of reviews and total bonus received per employee.",
    "requirements": [
      "Select `emp_id`, `COUNT(*) AS top_reviews`, and `SUM(bonus) AS total_merit_bonus`.",
      "Filter for `rating >= 4`.",
      "Group by `emp_id`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter with WHERE rating >= 4 before grouping by emp_id.",
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
    "title": "Count and Average Experience by City for Higher Earners",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "For employees earning 40,000 or more, calculate the employee count and average experience (rounded to 2 decimals) by city.",
    "requirements": [
      "Select `city`, `COUNT(*) AS mid_to_senior_count`, and `ROUND(AVG(experience), 2) AS avg_experience`.",
      "Filter for `salary >= 40000`.",
      "Group by `city`."
    ],
    "tableName": "Employees",
    "hint": "Filter with WHERE salary >= 40000 then GROUP BY city.",
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
    "title": "Count Leadership Roles per Project",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "Count how many leadership assignments (role contains 'Lead', 'Manager', or 'Director') exist for each project.",
    "requirements": [
      "Select `project_id` and `COUNT(*) AS leadership_roles`.",
      "Filter for assigned_role containing 'Lead', 'Manager', or 'Director'.",
      "Group by `project_id`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Combine LIKE checks with OR in WHERE, then GROUP BY project_id.",
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
    "title": "Young Employees Count and Minimum Salary by Department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "For employees under 30, calculate the headcount and minimum salary by department.",
    "requirements": [
      "Select `department`, `COUNT(*) AS young_talent_count`, and `MIN(salary) AS min_young_salary`.",
      "Filter for `age < 30`.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Filter using WHERE age < 30 then GROUP BY department.",
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
    "title": "Group Employees by Salary Tier",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Classify employees into salary tiers ('Entry' for < 35,000, 'Mid' for 35,000 to 60,000, 'Executive' for > 60,000) and count employees in each tier.",
    "requirements": [
      "Classify salary into 'Entry', 'Mid', or 'Executive' aliased as `salary_tier`.",
      "Count employees in each tier aliased as `tier_count`.",
      "Group by the salary tier CASE expression."
    ],
    "tableName": "Employees",
    "hint": "Use the same CASE expression in both SELECT and GROUP BY.",
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
    "title": "Employee Count and Average Salary by Experience Band",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Hard",
    "problemStatement": "Group employees into experience bands ('Junior' for < 3, 'Intermediate' for 3 to 6, 'Senior' for > 6). Display band, count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Categorize experience into 'Junior', 'Intermediate', or 'Senior' aliased as `experience_band`.",
      "Count employees aliased as `count_in_band`.",
      "Calculate average salary rounded to 2 decimals aliased as `avg_band_salary`.",
      "Group by the experience band CASE expression."
    ],
    "tableName": "Employees",
    "hint": "Group by the CASE expression on experience.",
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
    "title": "Review Stats by Bonus Award Status",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group reviews by whether a bonus was awarded ('Bonus Awarded' vs 'No Bonus Awarded'). Display status, review count, and average rating rounded to 2 decimals.",
    "requirements": [
      "Display bonus status ('Bonus Awarded' or 'No Bonus Awarded') aliased as `bonus_status`.",
      "Count reviews aliased as `reviews_count`.",
      "Calculate average rating rounded to 2 decimals aliased as `avg_group_rating`.",
      "Group by the bonus status CASE expression."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use CASE WHEN bonus IS NOT NULL in SELECT and GROUP BY.",
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
    "title": "Project Count by Budget Tier",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group projects into budget tiers ('Small' for < 150k, 'Medium' for 150k to 350k, 'Enterprise' for > 350k) and count projects in each tier.",
    "requirements": [
      "Categorize budget into 'Small', 'Medium', or 'Enterprise' aliased as `budget_tier`.",
      "Count projects aliased as `project_count`.",
      "Group by the budget tier CASE expression."
    ],
    "tableName": "Projects",
    "hint": "Group by the CASE expression evaluating budget.",
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
    "title": "Count Employees by Name Length",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group employees by the length of their name (character count) and count how many employees have each name length.",
    "requirements": [
      "Calculate name length using `LENGTH(emp_name)` aliased as `name_length`.",
      "Count employees aliased as `employee_count`.",
      "Group by `LENGTH(emp_name)`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY LENGTH(emp_name).",
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
    "title": "Payroll Comparison for Pre-2022 vs Later Hires",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group employees into two cohorts: 'Pre-2022' (joined before 2022) and '2022-and-Later'. Display cohort name, employee count, and total salary.",
    "requirements": [
      "Categorize joining year into 'Pre-2022' or '2022-and-Later' aliased as `cohort_name`.",
      "Count employees aliased as `head_count`.",
      "Sum salaries aliased as `total_cohort_payroll`.",
      "Group by the cohort CASE expression."
    ],
    "tableName": "Employees",
    "hint": "Use a CASE expression on joining_year in SELECT and GROUP BY.",
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
    "title": "Assignments and Hours by Workload Type",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Hard",
    "problemStatement": "Group project assignments into 'Part-Time' (< 25 hours) and 'Full-Time' (>= 25 hours). Display workload type, total assignments, and sum of weekly hours.",
    "requirements": [
      "Categorize hours into 'Part-Time' or 'Full-Time' aliased as `workload_type`.",
      "Count assignments aliased as `total_assignments`.",
      "Sum hours aliased as `sum_weekly_hours`.",
      "Group by the workload CASE expression."
    ],
    "tableName": "Employee_Projects",
    "hint": "Group by CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END.",
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
    "title": "Departments by Budget Classification",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Group departments into 'Mega Budget' (>= 1,000,000) and 'Standard Budget' (< 1,000,000). Display tier, department count, and combined budget.",
    "requirements": [
      "Classify budget as 'Mega Budget' or 'Standard Budget' aliased as `budget_tier`.",
      "Count departments aliased as `dept_count`.",
      "Sum budgets aliased as `combined_budget`.",
      "Group by the budget classification CASE expression."
    ],
    "tableName": "Departments",
    "hint": "Group by the CASE expression evaluating department budget.",
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
    "title": "Departments with at Least 3 Employees and Avg Salary Over 45k",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Easy",
    "problemStatement": "Find departments that have at least 3 employees and an average salary strictly greater than 45,000. Display department, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `department`, `COUNT(*) AS emp_count`, and `ROUND(AVG(salary), 2) AS avg_salary`.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) >= 3` and `AVG(salary) > 45000`."
    ],
    "tableName": "Employees",
    "hint": "Use HAVING COUNT(*) >= 3 AND AVG(salary) > 45000.",
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
    "title": "Projects with 2+ Staff and 40+ Total Hours",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Medium",
    "problemStatement": "Find projects that have at least 2 distinct employees assigned and a total of 40 or more allocated hours. Display project ID, staff count, and total hours.",
    "requirements": [
      "Select `project_id`, `COUNT(DISTINCT emp_id) AS staff_count`, and `SUM(hours_allocated) AS total_hours`.",
      "Group by `project_id`.",
      "Filter groups having `COUNT(DISTINCT emp_id) >= 2` and `SUM(hours_allocated) >= 40`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Apply HAVING with conditions on COUNT(DISTINCT emp_id) and SUM(hours_allocated).",
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
    "title": "Employees with 2+ Reviews and Average Rating of 4.0+",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Medium",
    "problemStatement": "Find employees who have at least 2 performance reviews and an average rating of 4.0 or higher. Display employee ID, review count, and average rating rounded to 2 decimals.",
    "requirements": [
      "Select `emp_id`, `COUNT(*) AS review_count`, and `ROUND(AVG(rating), 2) AS avg_rating`.",
      "Group by `emp_id`.",
      "Filter groups having `COUNT(*) >= 2` and `AVG(rating) >= 4.0`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0.",
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
    "title": "Cities with 4+ Employees and Total Payroll Over 200k",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Easy",
    "problemStatement": "Find cities that have at least 4 employees and a total salary payroll exceeding 200,000. Display city, employee count, and total payroll.",
    "requirements": [
      "Select `city`, `COUNT(*) AS emp_count`, and `SUM(salary) AS total_payroll`.",
      "Group by `city`.",
      "Filter groups having `COUNT(*) >= 4` and `SUM(salary) > 200000`."
    ],
    "tableName": "Employees",
    "hint": "Use HAVING COUNT(*) >= 4 AND SUM(salary) > 200000.",
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
    "title": "Departments with 3+ Hires After 2018",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Find departments that hired 3 or more employees after the year 2018. Display department and the recent hire count.",
    "requirements": [
      "Select `department` and `COUNT(*) AS recent_count`.",
      "Filter rows with `joining_year > 2018` before grouping.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) >= 3`."
    ],
    "tableName": "Employees",
    "hint": "Combine WHERE joining_year > 2018 with HAVING COUNT(*) >= 3.",
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
    "title": "Departments with Pending Project Budgets of 300k+",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Find departments whose uncompleted projects have a combined budget of at least 300,000. Display department ID, pending project count, and total pending budget.",
    "requirements": [
      "Select `dept_id`, `COUNT(*) AS pending_projects`, and `SUM(budget) AS total_pending_budget`.",
      "Filter for `status != 'Completed'` in WHERE.",
      "Group by `dept_id`.",
      "Filter groups having `SUM(budget) >= 300000`."
    ],
    "tableName": "Projects",
    "hint": "Use WHERE status != 'Completed' GROUP BY dept_id HAVING SUM(budget) >= 300000.",
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
    "title": "Employees with Average 2024 Bonus Over 15k",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Find employees whose average bonus in 2024 was greater than 15,000. Display employee ID and average bonus rounded to 2 decimals.",
    "requirements": [
      "Select `emp_id` and `ROUND(AVG(bonus), 2) AS avg_2024_bonus`.",
      "Filter for `review_year = 2024`.",
      "Group by `emp_id`.",
      "Filter groups having `AVG(bonus) > 15000`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use WHERE review_year = 2024 GROUP BY emp_id HAVING AVG(bonus) > 15000.",
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
    "title": "Cities with Experienced Staff Averaging Over 50k",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "For employees with at least 3 years experience, find cities where their average salary exceeds 50,000. Display city, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `city`, `COUNT(*) AS seasoned_staff`, and `ROUND(AVG(salary), 2) AS avg_seasoned_salary`.",
      "Filter for `experience >= 3` in WHERE.",
      "Group by `city`.",
      "Filter groups having `AVG(salary) > 50000`."
    ],
    "tableName": "Employees",
    "hint": "Filter by experience in WHERE, group by city, and filter average salary with HAVING.",
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
    "title": "Departments with at Most 3 Staff or Avg Salary Over 65k",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Find departments that either have 3 or fewer employees, or have an average salary greater than 65,000. Display department, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `department`, `COUNT(*) AS emp_count`, and `ROUND(AVG(salary), 2) AS avg_salary`.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) <= 3 OR AVG(salary) > 65000`."
    ],
    "tableName": "Employees",
    "hint": "Use OR between conditions in the HAVING clause.",
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
    "title": "Projects with Under 40 Hours or 4+ Staff",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Hard",
    "problemStatement": "Find projects that have either total hours under 40, or 4 or more distinct staff members. Display project ID, staff count, and total hours.",
    "requirements": [
      "Select `project_id`, `COUNT(DISTINCT emp_id) AS staff_count`, and `SUM(hours_allocated) AS total_hours`.",
      "Group by `project_id`.",
      "Filter groups having `SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Combine the two aggregate conditions using OR in HAVING.",
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
    "title": "Review Years with Bonuses Over 100k or Avg Rating 4.0+",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Find review years where total bonuses exceeded 100,000 or the average rating was at least 4.0. Display review year, total reviews, total bonus, and average rating rounded to 2 decimals.",
    "requirements": [
      "Select `review_year`, `COUNT(*) AS total_reviews`, `COALESCE(SUM(bonus), 0) AS total_bonus`, and `ROUND(AVG(rating), 2) AS avg_rating`.",
      "Group by `review_year`.",
      "Filter groups having `SUM(bonus) > 100000 OR AVG(rating) >= 4.0`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0.",
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
    "title": "Cities with Min Salary >= 30k and Max Salary > 70k",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Find cities where the minimum salary is at least 30,000 and the maximum salary is strictly greater than 70,000. Display city, min salary, and max salary.",
    "requirements": [
      "Select `city`, `MIN(salary) AS min_sal`, and `MAX(salary) AS max_sal`.",
      "Group by `city`.",
      "Filter groups having `MIN(salary) >= 30000 AND MAX(salary) > 70000`."
    ],
    "tableName": "Employees",
    "hint": "Use HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000.",
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
    "title": "Top 2 Departments by Avg Salary (3+ Employees)",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Find the top 2 departments with at least 3 employees, ordered by highest average salary. Display department, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `department`, `COUNT(*) AS emp_count`, and `ROUND(AVG(salary), 2) AS avg_sal`.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) >= 3`.",
      "Order by `avg_sal` descending and limit to 2."
    ],
    "tableName": "Employees",
    "hint": "Combine GROUP BY, HAVING, ORDER BY, and LIMIT.",
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
    "title": "Project with Most Hours (3+ Staff)",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Find the project with the highest total weekly hours among projects that have at least 3 distinct staff members. Display project ID, staff count, and total hours.",
    "requirements": [
      "Select `project_id`, `COUNT(DISTINCT emp_id) AS staff_count`, and `SUM(hours_allocated) AS total_hours`.",
      "Group by `project_id`.",
      "Filter groups having `COUNT(DISTINCT emp_id) >= 3`.",
      "Order by `total_hours` descending and limit to 1."
    ],
    "tableName": "Employee_Projects",
    "hint": "Filter with HAVING COUNT(DISTINCT emp_id) >= 3, then ORDER BY total_hours DESC LIMIT 1.",
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
    "title": "Employee with Highest Total Bonus (2+ Reviews)",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Hard",
    "problemStatement": "Find the employee with at least 2 reviews who received the highest total bonus payout. Display employee ID, review count, and total bonus.",
    "requirements": [
      "Select `emp_id`, `COUNT(*) AS review_count`, and `SUM(bonus) AS total_bonus`.",
      "Group by `emp_id`.",
      "Filter groups having `COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL`.",
      "Order by `total_bonus` descending and limit to 1."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use HAVING with COUNT and IS NOT NULL, then sort descending and LIMIT 1.",
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
    "title": "Employee Department and Location",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Beginner",
    "problemStatement": "Find the department location and budget for each employee by joining Employees with Departments.",
    "requirements": [
      "Display `emp_name`, `department`, `location`, and `budget`.",
      "Join Employees and Departments on department name."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use an INNER JOIN on e.department = d.dept_name.",
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
    "title": "Projects and Department Names",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Beginner",
    "problemStatement": "Display each project's ID, name, assigned department name, and budget.",
    "requirements": [
      "Display `project_id`, `project_name`, `dept_name`, and `budget`.",
      "Join Projects and Departments on dept_id."
    ],
    "tableName": "Projects, Departments",
    "hint": "INNER JOIN Projects with Departments on p.dept_id = d.dept_id.",
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
    "title": "Employee Project Roles and Hours",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Display the employee name, project ID, assigned role, and weekly allocated hours for all project assignments.",
    "requirements": [
      "Display `emp_name`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Join Employees with Employee_Projects on emp_id."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "INNER JOIN Employees with Employee_Projects on e.emp_id = ep.emp_id.",
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
    "title": "Employee Performance Review History",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Display each employee's name along with their review year, rating, and bonus.",
    "requirements": [
      "Display `emp_name`, `review_year`, `rating`, and `bonus`.",
      "Join Employees with Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN Employees and Performance_Reviews on emp_id.",
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
    "title": "Project Staffing Details",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Display each project's name alongside assigned employee IDs, roles, and allocated hours.",
    "requirements": [
      "Display `project_name`, `emp_id`, `assigned_role`, and `hours_allocated`.",
      "Join Projects with Employee_Projects on project_id."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "INNER JOIN Projects and Employee_Projects on project_id.",
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
    "title": "Hyderabad Employees and Department Heads",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose department is located in Hyderabad. Display the employee name, department, and department head.",
    "requirements": [
      "Display `emp_name`, `department`, and `dept_head`.",
      "Join Employees with Departments.",
      "Filter for departments located in 'Hyderabad'."
    ],
    "tableName": "Employees, Departments",
    "hint": "INNER JOIN on department name and filter with WHERE d.location = 'Hyderabad'.",
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
    "title": "Active Projects and Department Names",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Find all active projects along with their department name and budget.",
    "requirements": [
      "Display `project_name`, `dept_name`, and `budget`.",
      "Join Projects with Departments on dept_id.",
      "Filter for `status = 'Active'`."
    ],
    "tableName": "Projects, Departments",
    "hint": "INNER JOIN on dept_id and add WHERE p.status = 'Active'.",
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
    "title": "Employees with Rating 5 and Feedback",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who received a rating of 5 in any review. Display employee name, department, rating, bonus, and feedback.",
    "requirements": [
      "Display `emp_name`, `department`, `rating`, `bonus`, and `feedback`.",
      "Join Employees with Performance_Reviews on emp_id.",
      "Filter for `rating = 5`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN on emp_id with WHERE pr.rating = 5.",
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
    "title": "Project Assignments with 35+ Hours",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find project assignments where the weekly allocated hours are 35 or more. Display employee ID, project name, role, and hours.",
    "requirements": [
      "Display `emp_id`, `project_name`, `assigned_role`, and `hours_allocated`.",
      "Join Employee_Projects with Projects on project_id.",
      "Filter for `hours_allocated >= 35`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "INNER JOIN on project_id and filter by hours_allocated >= 35.",
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
    "title": "High-Earning Employees and Department Heads",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Find employees earning more than 50,000 and display their name, salary, department name, and department head.",
    "requirements": [
      "Display `emp_name`, `salary`, `dept_name`, and `dept_head`.",
      "Join Employees with Departments on department name.",
      "Filter for `salary > 50000`."
    ],
    "tableName": "Employees, Departments",
    "hint": "INNER JOIN on department name and filter by salary > 50000.",
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
    "title": "Employees with Lead Roles",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find employees who are assigned a role containing 'Lead'. Display employee name, department, project ID, and assigned role.",
    "requirements": [
      "Display `emp_name`, `department`, `project_id`, and `assigned_role`.",
      "Join Employees with Employee_Projects on emp_id.",
      "Filter for assigned_role containing 'Lead'."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "INNER JOIN on emp_id and filter using LIKE '%Lead%'.",
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
    "title": "2024 Bonus Recipients by City",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find employees who received a bonus in 2024. Display employee name, city, rating, and bonus amount.",
    "requirements": [
      "Display `emp_name`, `city`, `rating`, and `bonus`.",
      "Join Employees with Performance_Reviews on emp_id.",
      "Filter for `review_year = 2024` and `bonus IS NOT NULL`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN on emp_id and filter with review_year = 2024 AND bonus IS NOT NULL.",
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
    "title": "Projects with Budget Over 200,000",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Find all projects with a budget greater than 200,000 along with their department name and department head.",
    "requirements": [
      "Display `project_name`, `dept_name`, `dept_head`, and `budget`.",
      "Join Projects with Departments on dept_id.",
      "Filter for `budget > 200000`."
    ],
    "tableName": "Projects, Departments",
    "hint": "INNER JOIN on dept_id and filter with p.budget > 200000.",
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
    "title": "Employees Living in Their Department Location",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who live in the same city where their department is located.",
    "requirements": [
      "Display `emp_name`, employee `city`, `department`, and department `location`.",
      "Join Employees with Departments on department name.",
      "Filter for rows where employee city equals department location."
    ],
    "tableName": "Employees, Departments",
    "hint": "INNER JOIN on department and check WHERE e.city = d.location.",
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
    "title": "Employees with Bonus and Rating",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, salary, bonus, and rating for all employees who have received a bonus.",
    "requirements": [
      "Display `emp_name`, `salary`, `bonus`, and `rating`.",
      "Join Employees with Performance_Reviews on emp_id.",
      "Filter for `bonus IS NOT NULL`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN on emp_id and filter with pr.bonus IS NOT NULL.",
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
    "title": "All Employees and Their Projects",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all employees and any project assignments they have, including unassigned employees.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `project_id`, and `assigned_role`.",
      "Use a LEFT JOIN from Employees to Employee_Projects."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "LEFT JOIN Employees with Employee_Projects on emp_id.",
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
    "title": "Employees Not Assigned to Any Project",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who are not assigned to any project.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "LEFT JOIN Employees with Employee_Projects.",
      "Filter for rows where `project_id IS NULL`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use a LEFT JOIN anti-join checking WHERE ep.project_id IS NULL.",
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
    "title": "All Departments and Their Projects",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all departments and any projects associated with them, including departments without projects.",
    "requirements": [
      "Display `dept_name`, `location`, `project_name`, and `status`.",
      "LEFT JOIN Departments with Projects on dept_id."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use a LEFT JOIN from Departments to Projects.",
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
    "title": "Departments with No Projects",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that currently have no projects assigned to them.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `location`.",
      "LEFT JOIN Departments with Projects on dept_id.",
      "Filter for rows where `project_id IS NULL`."
    ],
    "tableName": "Departments, Projects",
    "hint": "LEFT JOIN Departments to Projects and check WHERE p.project_id IS NULL.",
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
    "title": "All Employees and Their Reviews",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all employees along with any performance review year and rating they received.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, `review_year`, and `rating`.",
      "LEFT JOIN Employees with Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "LEFT JOIN Employees to Performance_Reviews on emp_id.",
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
    "title": "Employees with No Performance Reviews",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who have never received a performance review.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "LEFT JOIN Employees with Performance_Reviews on emp_id.",
      "Filter for rows where `review_id IS NULL`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "LEFT JOIN on emp_id and check WHERE pr.review_id IS NULL.",
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
    "title": "All Projects and Assigned Employees",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all projects along with any assigned employee IDs and roles, including unstaffed projects.",
    "requirements": [
      "Display `project_id`, `project_name`, `emp_id`, and `assigned_role`.",
      "LEFT JOIN Projects with Employee_Projects on project_id."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "LEFT JOIN Projects to Employee_Projects on project_id.",
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
    "title": "Projects with No Assigned Staff",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all projects that currently have no staff assigned to them.",
    "requirements": [
      "Display `project_id`, `project_name`, and `status`.",
      "LEFT JOIN Projects with Employee_Projects on project_id.",
      "Filter for rows where `emp_id IS NULL`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "LEFT JOIN on project_id and check WHERE ep.emp_id IS NULL.",
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
    "title": "All Departments and Staff Members",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all departments and the names of employees in them, including empty departments.",
    "requirements": [
      "Display `dept_name`, `dept_head`, and `emp_name`.",
      "LEFT JOIN Departments with Employees on department name."
    ],
    "tableName": "Departments, Employees",
    "hint": "LEFT JOIN Departments to Employees on d.dept_name = e.department.",
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
    "title": "Departments with Zero Employees",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that have no employees currently assigned.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `location`.",
      "LEFT JOIN Departments with Employees on department name.",
      "Filter for rows where `emp_id IS NULL`."
    ],
    "tableName": "Departments, Employees",
    "hint": "LEFT JOIN Departments to Employees and check WHERE e.emp_id IS NULL.",
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
    "title": "All Employees and Their 2024 Review Status",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Hard",
    "problemStatement": "Display all employees and their 2024 review rating and bonus (if any), preserving employees who had no review in 2024.",
    "requirements": [
      "Display `emp_name`, `department`, `rating`, and `bonus`.",
      "LEFT JOIN Employees with Performance_Reviews matching review_year = 2024."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Put the year filter in the ON clause: ON e.emp_id = pr.emp_id AND pr.review_year = 2024.",
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
    "title": "Employee Roles with 'Unassigned' Fallback",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Display each employee's ID, name, and project role, replacing NULL roles with 'Unassigned'.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and project role aliased as `project_role`.",
      "Replace NULL role values with `'Unassigned'` using COALESCE.",
      "LEFT JOIN Employees with Employee_Projects."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use COALESCE(ep.assigned_role, 'Unassigned').",
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
    "title": "Total Hours per Project Including Unassigned",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Calculate total weekly hours for each project, displaying 0 for projects with no assigned staff.",
    "requirements": [
      "Display `project_id`, `project_name`, and total hours aliased as `total_hours`.",
      "Replace NULL total hours with 0 using COALESCE.",
      "LEFT JOIN Projects with Employee_Projects.",
      "Group by `project_id, project_name`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use COALESCE(SUM(ep.hours_allocated), 0) with LEFT JOIN and GROUP BY.",
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
    "title": "Staff Count per Department Including Empty Ones",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Count the number of employees in each department, including departments with 0 staff.",
    "requirements": [
      "Display `dept_name` and count of employees aliased as `staff_count`.",
      "LEFT JOIN Departments with Employees on department name.",
      "Group by `dept_name`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use COUNT(e.emp_id) with LEFT JOIN so NULL rows count as 0.",
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
    "title": "Review Count per Employee Including Zero",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Count how many performance reviews each employee has received, including employees with 0 reviews.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and count of reviews aliased as `review_count`.",
      "LEFT JOIN Employees with Performance_Reviews on emp_id.",
      "Group by `emp_id, emp_name`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use COUNT(pr.review_id) with LEFT JOIN.",
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
    "title": "Departments and Employees (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, department name, and location using a RIGHT JOIN from Employees to Departments.",
    "requirements": [
      "Display `emp_name`, `dept_name`, and `location`.",
      "RIGHT JOIN Employees to Departments on department name."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use RIGHT JOIN Departments d ON e.department = d.dept_name.",
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
    "title": "Projects and Assigned Staff (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee ID, assigned role, project ID, and project name using a RIGHT JOIN to preserve all projects.",
    "requirements": [
      "Display `emp_id`, `assigned_role`, `project_id`, and `project_name`.",
      "RIGHT JOIN Employee_Projects to Projects on project_id."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use RIGHT JOIN Projects p ON ep.project_id = p.project_id.",
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
    "title": "Reviews and Employee Names (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, review ID, rating, and bonus using a RIGHT JOIN to preserve all reviews.",
    "requirements": [
      "Display `emp_name`, `review_id`, `rating`, and `bonus`.",
      "RIGHT JOIN Employees to Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use RIGHT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id.",
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
    "title": "Departments and Projects (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display project name, department name, and budget using a RIGHT JOIN to preserve all departments.",
    "requirements": [
      "Display `project_name`, `dept_name`, and `budget`.",
      "RIGHT JOIN Projects to Departments on dept_id."
    ],
    "tableName": "Projects, Departments",
    "hint": "Use RIGHT JOIN Departments d ON p.dept_id = d.dept_id.",
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
    "title": "Project Assignments and Employees (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, project ID, role, and hours using a RIGHT JOIN from Employees to Employee_Projects.",
    "requirements": [
      "Display `emp_name`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "RIGHT JOIN Employees to Employee_Projects on emp_id."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use RIGHT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id.",
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
    "title": "Departments and Employees (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Display department name, location, employee name, and salary across all departments and employees using a FULL OUTER JOIN.",
    "requirements": [
      "Display `dept_name`, `location`, `emp_name`, and `salary`.",
      "FULL OUTER JOIN Departments with Employees on department name."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use FULL OUTER JOIN Departments d ON d.dept_name = e.department.",
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
    "title": "Projects and Assignments (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Display project ID, project name, employee ID, and assigned role using a FULL OUTER JOIN.",
    "requirements": [
      "Display `project_id`, `project_name`, `emp_id`, and `assigned_role`.",
      "FULL OUTER JOIN Projects with Employee_Projects on project_id."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use FULL OUTER JOIN Projects p with Employee_Projects ep.",
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
    "title": "Unmatched Departments or Employees (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Find departments without employees, or employees without a matching department, using FULL OUTER JOIN.",
    "requirements": [
      "Display `dept_name` and `emp_name`.",
      "FULL OUTER JOIN Departments and Employees on department name.",
      "Filter for rows where `dept_id IS NULL OR emp_id IS NULL`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Filter with WHERE d.dept_id IS NULL OR e.emp_id IS NULL.",
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
    "title": "Projects and Department Budgets (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Display project name, department name, project budget, and department budget using a FULL OUTER JOIN.",
    "requirements": [
      "Display `project_name`, `dept_name`, `p.budget AS project_budget`, and `d.budget AS dept_budget`.",
      "FULL OUTER JOIN Projects and Departments on dept_id."
    ],
    "tableName": "Projects, Departments",
    "hint": "Use FULL OUTER JOIN Projects p ON p.dept_id = d.dept_id.",
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
    "title": "Employees and Reviews (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Display employee name, salary, review year, and rating using a FULL OUTER JOIN.",
    "requirements": [
      "Display `emp_name`, `salary`, `review_year`, and `rating`.",
      "FULL OUTER JOIN Employees with Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use FULL OUTER JOIN Employees e ON e.emp_id = pr.emp_id.",
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
    "title": "Employee, Project, and Role (3-Table Join)",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, project name, assigned role, and weekly allocated hours by joining Employees, Employee_Projects, and Projects.",
    "requirements": [
      "Display `emp_name`, `project_name`, `assigned_role`, and `hours_allocated`.",
      "Join Employees, Employee_Projects, and Projects."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Chain two INNER JOINs on emp_id and project_id.",
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
    "title": "Active Project Assignments (3-Table Join)",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Find assignments on active projects. Display employee name, project name, status, and allocated hours.",
    "requirements": [
      "Display `emp_name`, `project_name`, `status`, and `hours_allocated`.",
      "Join Employees, Employee_Projects, and Projects.",
      "Filter for `status = 'Active'`."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Join the three tables and add WHERE p.status = 'Active'.",
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
    "title": "Projects, Departments, and Roles (3-Table Join)",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Display project name, department name, department head, and assigned role across all active assignments.",
    "requirements": [
      "Display `project_name`, `dept_name`, `dept_head`, and `assigned_role`.",
      "Join Projects, Departments, and Employee_Projects."
    ],
    "tableName": "Projects, Departments, Employee_Projects",
    "hint": "Join Projects to Departments on dept_id and to Employee_Projects on project_id.",
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
    "title": "Employee Department and Review Details",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, department name, location, review rating, and bonus.",
    "requirements": [
      "Display `emp_name`, `dept_name`, `location`, `rating`, and `bonus`.",
      "Join Employees, Departments, and Performance_Reviews."
    ],
    "tableName": "Employees, Departments, Performance_Reviews",
    "hint": "Join Employees with Departments on department name and with Performance_Reviews on emp_id.",
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
    "title": "Employee Roles and Review Ratings",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, assigned project role, review year, and rating.",
    "requirements": [
      "Display `emp_name`, `assigned_role`, `review_year`, and `rating`.",
      "Join Employees, Employee_Projects, and Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Employee_Projects, Performance_Reviews",
    "hint": "Join Employees to Employee_Projects and Performance_Reviews on emp_id.",
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
    "title": "Employee, Department, and Project Name",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display employee name, department name, project name, and assigned role.",
    "requirements": [
      "Display `emp_name`, `dept_name`, `project_name`, and `assigned_role`.",
      "Join Employees, Departments, Employee_Projects, and Projects."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Chain INNER JOINs across Employees, Departments, Employee_Projects, and Projects.",
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
    "title": "Projects and Bonus Recipients",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display employee name, project name, review year, and bonus for employees who received a bonus.",
    "requirements": [
      "Display `emp_name`, `project_name`, `review_year`, and `bonus`.",
      "Join Employees, Employee_Projects, Projects, and Performance_Reviews.",
      "Filter for `bonus IS NOT NULL`."
    ],
    "tableName": "Employees, Employee_Projects, Projects, Performance_Reviews",
    "hint": "Join the four tables and filter for pr.bonus IS NOT NULL.",
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
    "title": "All Employees and Their Projects (Multi-Table Left Join)",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display all employees and any project names they are assigned to, including unassigned employees.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `project_name`.",
      "LEFT JOIN Employees with Employee_Projects, then LEFT JOIN Projects."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Chain two LEFT JOINs.",
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
    "title": "All Departments, Projects, and Assigned Staff",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display all departments, any associated project names, and assigned employee IDs.",
    "requirements": [
      "Display `dept_name`, `project_name`, and `emp_id`.",
      "LEFT JOIN Departments with Projects, then LEFT JOIN Employee_Projects."
    ],
    "tableName": "Departments, Projects, Employee_Projects",
    "hint": "Chain two LEFT JOINs starting from Departments.",
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
    "title": "High Earners on Completed Projects",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Find employees earning over 40,000 who worked on completed projects. Display name, salary, department name, and project name.",
    "requirements": [
      "Display `emp_name`, `salary`, `dept_name`, and `project_name`.",
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter for `p.status = 'Completed'` and `e.salary > 40000`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Combine 4-table join with the two filter conditions.",
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
    "title": "High-Hours Staff on Active Projects",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Find employees working more than 25 hours on active projects. Display name, department location, project name, and hours.",
    "requirements": [
      "Display `emp_name`, `location`, `project_name`, and `hours_allocated`.",
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter for `hours_allocated > 25` and `status = 'Active'`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Join the 4 tables and filter by hours and project status.",
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
    "title": "2024 Employee Reviews Across Projects",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display employee name, department name, project name, and 2024 review rating.",
    "requirements": [
      "Display `emp_name`, `dept_name`, `project_name`, and `rating`.",
      "Join Employees, Departments, Employee_Projects, Projects, and Performance_Reviews.",
      "Filter for `review_year = 2024`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects, Performance_Reviews",
    "hint": "Join the 5 tables and filter with WHERE pr.review_year = 2024.",
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
    "title": "Pairs of Employees in the Same Department",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find all unique pairs of employees who work in the same department.",
    "requirements": [
      "Display `e1.emp_name AS employee_1`, `e2.emp_name AS employee_2`, and `department`.",
      "Self-join Employees on department where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Use a self-join with e1.emp_id < e2.emp_id to avoid duplicate and self pairs.",
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
    "title": "Pairs of Colleagues in the Same City",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find all unique pairs of employees who are located in the same city.",
    "requirements": [
      "Display `e1.emp_name AS colleague_1`, `e2.emp_name AS colleague_2`, and `city`.",
      "Self-join Employees on city where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Self-join Employees on e1.city = e2.city AND e1.emp_id < e2.emp_id.",
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
    "title": "Colleagues with Salary Gap of 20,000+",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "In each department, find pairs of employees where one earns at least 20,000 more than the other.",
    "requirements": [
      "Display `higher_earner`, `high_sal`, `lower_earner`, `low_sal`, and `department`.",
      "Self-join Employees on department where `e1.salary >= e2.salary + 20000`."
    ],
    "tableName": "Employees",
    "hint": "Self-join on department and filter for e1.salary >= e2.salary + 20000.",
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
    "title": "Employees Who Joined in the Same Year",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find unique pairs of employees who joined the company in the exact same year.",
    "requirements": [
      "Display `joiner_1`, `joiner_2`, and `joining_year`.",
      "Self-join Employees on joining_year where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Self-join on joining_year with e1.emp_id < e2.emp_id.",
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
    "title": "Projects in the Same Department",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find unique pairs of projects that belong to the same department.",
    "requirements": [
      "Display `project_1`, `project_2`, and `dept_id`.",
      "Self-join Projects on dept_id where `p1.project_id < p2.project_id`."
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
    "title": "Consecutive Year Performance Ratings",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find employees who had reviews in consecutive years, showing their rating in each year.",
    "requirements": [
      "Display `emp_id`, `prev_year`, `prev_rating`, `next_year`, and `next_rating`.",
      "Self-join Performance_Reviews where `r1.emp_id = r2.emp_id` and `r1.review_year = r2.review_year - 1`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Self-join Performance_Reviews on emp_id and consecutive years.",
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
    "title": "Employees with the Same Years of Experience",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find unique pairs of employees who have the exact same number of years of experience.",
    "requirements": [
      "Display `peer_1`, `peer_2`, and `experience`.",
      "Self-join Employees on experience where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Self-join on experience with e1.emp_id < e2.emp_id.",
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
    "title": "Teammates on the Same Project",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find unique pairs of employees who are assigned to the same project.",
    "requirements": [
      "Display `project_id`, `team_member_1`, and `team_member_2`.",
      "Self-join Employee_Projects on project_id where `ep1.emp_id < ep2.emp_id`."
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
    "title": "All Combinations of Departments and Project Statuses",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Generate all possible combinations of distinct department names and distinct project statuses.",
    "requirements": [
      "Display `dept_name` and `project_status`.",
      "CROSS JOIN distinct department names with distinct project statuses."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use CROSS JOIN between subqueries selecting DISTINCT values.",
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
    "title": "All Combinations of Cities and Departments",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Generate all possible combinations of distinct employee cities and distinct department names.",
    "requirements": [
      "Display `city` and `dept_name`.",
      "CROSS JOIN distinct cities with distinct departments."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use CROSS JOIN between distinct cities and distinct department names.",
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
    "title": "Employee Salary Compared to Company Average",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Hard",
    "problemStatement": "Display each employee's name, salary, the company average salary, and the difference (salary minus company average).",
    "requirements": [
      "Display `emp_name`, `salary`, `avg_sal`, and `(e.salary - a.avg_sal) AS salary_diff`.",
      "CROSS JOIN Employees with a subquery calculating average salary rounded to 2 decimals."
    ],
    "tableName": "Employees",
    "hint": "CROSS JOIN Employees with (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees).",
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
    "title": "Project Budget as Percentage of Total Budget",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Hard",
    "problemStatement": "Display each project's name, budget, and its percentage of the total company project budget (rounded to 2 decimals).",
    "requirements": [
      "Display `project_name`, `budget`, and `ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct`.",
      "CROSS JOIN Projects with a subquery calculating total project budget."
    ],
    "tableName": "Projects",
    "hint": "CROSS JOIN Projects with (SELECT SUM(budget) AS total_budget FROM Projects).",
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
    "title": "All Department and Rating Combinations",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Generate all possible combinations of distinct department names and distinct performance review ratings.",
    "requirements": [
      "Display `dept_name` and `rating_slot`.",
      "CROSS JOIN distinct department names with distinct ratings."
    ],
    "tableName": "Departments, Performance_Reviews",
    "hint": "Use CROSS JOIN between distinct departments and distinct ratings.",
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
    "title": "Department Headcount, Payroll, and Budget",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "For each department, display the department name, employee count, total monthly payroll, and department budget.",
    "requirements": [
      "Display `dept_name`, `emp_count`, `total_payroll`, and `budget`.",
      "Join Departments with Employees.",
      "Group by `dept_name, budget`."
    ],
    "tableName": "Departments, Employees",
    "hint": "INNER JOIN Departments and Employees, then GROUP BY dept_name, budget.",
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
    "title": "Project Staffing and Total Weekly Hours",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "For each project, display project name, status, assigned staff count, and total weekly hours.",
    "requirements": [
      "Display `project_name`, `status`, `assigned_staff`, and `total_weekly_hours`.",
      "Join Projects with Employee_Projects.",
      "Group by `project_id, project_name, status`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "INNER JOIN Projects with Employee_Projects and GROUP BY project attributes.",
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
    "title": "Project Count and Total Budget per Department",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "For each department, display the department name, count of projects, and total project budget.",
    "requirements": [
      "Display `dept_name`, `projects_count`, and `total_project_budget`.",
      "Join Departments with Projects.",
      "Group by `dept_name`."
    ],
    "tableName": "Departments, Projects",
    "hint": "INNER JOIN Departments and Projects on dept_id, then GROUP BY dept_name.",
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
    "title": "Employees with Over 30 Total Project Hours",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Find employees whose total weekly project hours exceed 30. Display employee ID, name, department, and total hours.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `total_weekly_hours`.",
      "Join Employees with Employee_Projects.",
      "Group by employee and filter with `HAVING SUM(ep.hours_allocated) > 30`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "GROUP BY e.emp_id, e.emp_name, e.department HAVING SUM(ep.hours_allocated) > 30.",
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
    "title": "Departments Where Annual Payroll Exceeds Half the Budget",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Find departments where total annual payroll (monthly payroll * 12) exceeds 50% of the department's annual budget.",
    "requirements": [
      "Display `dept_name`, `annual_payroll`, and `annual_budget`.",
      "Join Departments with Employees.",
      "Group by department and filter with `HAVING (SUM(e.salary) * 12) > (d.budget * 0.5)`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use HAVING to compare annual payroll to 50% of budget.",
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
    "title": "Average Team Experience and Salary per Project",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "For each project, calculate the average experience (rounded to 1 decimal) and average salary (rounded to 2 decimals) of assigned team members.",
    "requirements": [
      "Display `project_name`, `avg_team_exp`, and `avg_team_salary`.",
      "Join Projects, Employee_Projects, and Employees.",
      "Group by `project_id, project_name`."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "Join the three tables and apply ROUND(AVG(...)) grouped by project.",
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
    "title": "Projects and Reviews Counts per Employee",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "For each employee, count how many distinct projects they are assigned to and how many distinct reviews they have received.",
    "requirements": [
      "Display `emp_name`, `projects_assigned`, and `reviews_received`.",
      "LEFT JOIN Employees with Employee_Projects and Performance_Reviews.",
      "Group by `emp_id, emp_name`."
    ],
    "tableName": "Employees, Employee_Projects, Performance_Reviews",
    "hint": "Use COUNT(DISTINCT ep.project_id) and COUNT(DISTINCT pr.review_id).",
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
    "title": "Top 3 Employees by Weekly Project Hours",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Find the 3 employees with the highest total weekly project hours. Display employee name, department, and total hours.",
    "requirements": [
      "Display `emp_name`, `department`, and `total_hours`.",
      "Join Employees with Employee_Projects.",
      "Group by employee, sort by total hours descending, and limit to 3."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "GROUP BY employee, ORDER BY total_hours DESC LIMIT 3.",
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
    "title": "Total Reviews and Bonuses by Department",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "For each department, calculate the total number of reviews received and total bonus amount awarded to its employees.",
    "requirements": [
      "Display `department`, `reviewed_count`, and `total_department_bonuses`.",
      "Join Employees with Performance_Reviews on emp_id.",
      "Group by `department`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN Employees and Performance_Reviews, then GROUP BY department.",
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
    "title": "Projects with Average Team Rating of 4.0+",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Find projects where the average performance rating of assigned team members is at least 4.0. Display project name, staff count, and average rating rounded to 2 decimals.",
    "requirements": [
      "Display `project_name`, `staff_count`, and `avg_team_rating`.",
      "Join Projects, Employee_Projects, and Performance_Reviews.",
      "Group by project and filter with `HAVING AVG(pr.rating) >= 4.0`."
    ],
    "tableName": "Projects, Employee_Projects, Performance_Reviews",
    "hint": "Join the three tables, group by project, and apply HAVING AVG(pr.rating) >= 4.0.",
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
    "title": "Employees Earning Above Average Salary",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Find all employees whose salary is strictly greater than the overall company average salary.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter where `salary > (SELECT AVG(salary) FROM Employees)`."
    ],
    "tableName": "Employees",
    "hint": "Use a scalar subquery with AVG(salary) in the WHERE clause.",
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
    "title": "Projects with Above-Average Budget",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Find all projects whose budget is greater than the average project budget.",
    "requirements": [
      "Display `project_id`, `project_name`, and `budget`.",
      "Filter where `budget > (SELECT AVG(budget) FROM Projects)`."
    ],
    "tableName": "Projects",
    "hint": "Compare budget against a subquery calculating AVG(budget).",
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
    "title": "Highest-Paid Employee in the Company",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Find the employee(s) who earn the highest salary in the entire company.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter for salary equal to the maximum salary in Employees."
    ],
    "tableName": "Employees",
    "hint": "Filter with WHERE salary = (SELECT MAX(salary) FROM Employees).",
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
    "title": "Display Company Average Alongside Each Employee",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Display each employee's name and salary alongside the company-wide average salary rounded to 2 decimals.",
    "requirements": [
      "Display `emp_name` and `salary`.",
      "Include a scalar subquery calculating `company_avg_salary`."
    ],
    "tableName": "Employees",
    "hint": "Place (SELECT ROUND(AVG(salary), 2) FROM Employees) in your SELECT list.",
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
    "title": "Budget Gap from the Maximum Project Budget",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "For each project, calculate the difference between the maximum project budget and its own budget.",
    "requirements": [
      "Display `project_name` and `budget`.",
      "Calculate the difference from maximum budget aliased as `budget_gap`."
    ],
    "tableName": "Projects",
    "hint": "Subtract budget from a scalar subquery returning MAX(budget).",
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
    "title": "Reviews with Above-Average Bonus",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Find all performance reviews where the bonus amount is greater than the average bonus across all reviews.",
    "requirements": [
      "Display `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Filter where `bonus > (SELECT AVG(bonus) FROM Performance_Reviews)`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Compare bonus to the subquery AVG(bonus).",
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
    "title": "Employees Earning More Than IT Department Average",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who earn more than the average salary of the IT department.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter where salary is greater than the average salary of the 'IT' department."
    ],
    "tableName": "Employees",
    "hint": "Use a subquery calculating AVG(salary) WHERE department = 'IT'.",
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
    "title": "Departments with Above-Average Budget",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Find all departments whose budget exceeds the average department budget.",
    "requirements": [
      "Display `dept_id`, `dept_name`, `location`, and `budget`.",
      "Filter where `budget > (SELECT AVG(budget) FROM Departments)`."
    ],
    "tableName": "Departments",
    "hint": "Use a subquery calculating AVG(budget) from Departments.",
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
    "title": "Employees with Minimum Experience",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Find all employees who have the lowest years of experience in the company.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `experience`.",
      "Filter for experience equal to the minimum experience."
    ],
    "tableName": "Employees",
    "hint": "Use WHERE experience = (SELECT MIN(experience) FROM Employees).",
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
    "title": "Projects Started Before 'Cloud Migration'",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Medium",
    "problemStatement": "Find all projects that started before the 'Cloud Migration' project.",
    "requirements": [
      "Display `project_id`, `project_name`, `dept_id`, and `start_date`.",
      "Filter for `start_date` earlier than the start date of 'Cloud Migration'."
    ],
    "tableName": "Projects",
    "hint": "Use a subquery to find the start_date of 'Cloud Migration'.",
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
    "title": "Employees in Departments Located in Bengaluru",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose department is located in Bengaluru using an IN subquery.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Filter with `department IN (SELECT dept_name FROM Departments WHERE location = 'Bengaluru')`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use WHERE department IN (SELECT dept_name FROM Departments WHERE location = 'Bengaluru').",
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
    "title": "Employees Assigned to Active Projects",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who are assigned to at least one active project using an IN subquery.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Filter for employees whose ID is in the list of staff on active projects."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Use an IN subquery joining Employee_Projects and Projects where status = 'Active'.",
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
    "title": "Employees Without Performance Reviews (NOT IN)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who have no records in Performance_Reviews using a NOT IN subquery.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter for `emp_id NOT IN (SELECT emp_id FROM Performance_Reviews)`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use NOT IN with a subquery selecting emp_id from Performance_Reviews.",
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
    "title": "Projects with No Assigned Staff (NOT IN)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Find all projects that have no assigned staff in Employee_Projects using a NOT IN subquery.",
    "requirements": [
      "Display `project_id`, `project_name`, and `status`.",
      "Filter for `project_id NOT IN (SELECT project_id FROM Employee_Projects)`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use NOT IN selecting project_id from Employee_Projects.",
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
    "title": "Employees with at Least One Rating 5 Review",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who have received a performance rating of 5 in any review.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Filter for `emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5)`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use an IN subquery filtering for rating = 5.",
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
    "title": "Departments with No Employees (NOT IN)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Find departments that currently have no employees using a NOT IN subquery.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `location`.",
      "Filter for `dept_name NOT IN (SELECT department FROM Employees WHERE department IS NOT NULL)`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use NOT IN selecting department from Employees.",
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
    "title": "Employees Working on 300k+ Budget Projects",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who are assigned to projects with a budget of 300,000 or more.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `salary`.",
      "Filter for employees working on projects with budget >= 300,000."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Use an IN subquery joining Employee_Projects with Projects.",
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
    "title": "Projects Staffed by High Earners (>70k)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Find all projects that have at least one team member earning more than 70,000.",
    "requirements": [
      "Display `project_id`, `project_name`, and `status`.",
      "Filter for project IDs in a subquery of assignments with employee salary > 70,000."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "Use an IN subquery joining Employee_Projects and Employees.",
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
    "title": "Employees Not Assigned to Any Project (NOT IN)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who are not assigned to any project using a NOT IN subquery.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Filter for `emp_id NOT IN (SELECT emp_id FROM Employee_Projects)`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use NOT IN with a subquery from Employee_Projects.",
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
    "title": "Departments with No Active Projects",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that do not have any currently active projects.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `location`.",
      "Filter for departments whose ID is not in active projects."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use NOT IN selecting dept_id from Projects where status = 'Active'.",
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
    "title": "Employees Assigned to Projects (EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who are assigned to at least one project using an EXISTS clause.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Use `WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id)`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use EXISTS with a correlated subquery checking Employee_Projects.",
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
    "title": "Employees Without Projects (NOT EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who are not assigned to any project using a NOT EXISTS clause.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Use `WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id)`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use NOT EXISTS with a correlated subquery.",
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
    "title": "Departments with Active Projects (EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that have at least one active project using an EXISTS clause.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `budget`.",
      "Use EXISTS to check for active projects in the department."
    ],
    "tableName": "Departments, Projects",
    "hint": "Correlate Projects with Departments on dept_id and status = 'Active'.",
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
    "title": "Departments with No Projects (NOT EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that have no projects using a NOT EXISTS clause.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `location`.",
      "Use NOT EXISTS to verify no projects exist for the department."
    ],
    "tableName": "Departments, Projects",
    "hint": "Correlate Projects with Departments on dept_id.",
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
    "title": "Employees with Rating 5 and Bonus Over 20k (EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who received a review with a rating of 5 and a bonus greater than 20,000 using EXISTS.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Use EXISTS checking for rating = 5 and bonus > 20000."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Correlate Performance_Reviews with Employees on emp_id.",
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
    "title": "Employees Who Never Received a Bonus (NOT EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Hard",
    "problemStatement": "Find all employees who have never received a bonus using a NOT EXISTS clause.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Use NOT EXISTS to check for any review with bonus IS NOT NULL."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Correlate Performance_Reviews checking bonus IS NOT NULL.",
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
    "title": "Projects with Heavy Workload Assignments (EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Find all projects that have at least one assignment with 35 or more weekly hours using EXISTS.",
    "requirements": [
      "Display `project_id`, `project_name`, and `status`.",
      "Use EXISTS checking Employee_Projects for hours_allocated >= 35."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Correlate Employee_Projects on project_id and hours_allocated >= 35.",
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
    "title": "Projects with Zero Staff (NOT EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Find all projects that have no assigned staff members using a NOT EXISTS clause.",
    "requirements": [
      "Display `project_id`, `project_name`, and `budget`.",
      "Use NOT EXISTS on Employee_Projects matching project_id."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use NOT EXISTS with a correlated check on Employee_Projects.",
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
    "title": "Employees in High-Budget Departments (EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Find all employees whose department has a budget of 1,200,000 or more using EXISTS.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Use EXISTS checking Departments for budget >= 1,200,000."
    ],
    "tableName": "Employees, Departments",
    "hint": "Correlate Departments on dept_name = e.department and budget >= 1200000.",
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
    "title": "Employees with 2+ Reviews (Scalar Subquery)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Hard",
    "problemStatement": "Find all employees who have 2 or more performance reviews using a correlated count subquery in WHERE.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Filter where the correlated count of reviews is at least 2."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Check WHERE (SELECT COUNT(*) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) >= 2.",
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
    "title": "Employees Earning Above Their Department Average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find all employees whose salary is greater than the average salary of their own department.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Compare employee salary against a correlated subquery calculating the department's average salary."
    ],
    "tableName": "Employees",
    "hint": "Use a correlated subquery matching sub.department = e.department.",
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
    "title": "Highest-Paid Employee in Each Department",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find the highest-paid employee in each department using a correlated subquery.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter for employees whose salary equals the maximum salary in their department."
    ],
    "tableName": "Employees",
    "hint": "Filter with WHERE e.salary = (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department).",
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
    "title": "Most Experienced Employee in Each City",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find the employee(s) with the most experience in each city.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `city`, and `experience`.",
      "Filter for employees whose experience equals the maximum experience in their city."
    ],
    "tableName": "Employees",
    "hint": "Use a correlated subquery matching sub.city = e.city.",
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
    "title": "Reviews with Bonus Above Year's Average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find performance reviews where the bonus was higher than the average bonus for that specific review year.",
    "requirements": [
      "Display `review_id`, `emp_id`, `review_year`, and `bonus`.",
      "Compare bonus to the average bonus of the same review year."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use a correlated subquery matching sub.review_year = pr.review_year.",
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
    "title": "Projects with Budget Above Department Average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find projects whose budget is greater than the average project budget of their assigned department.",
    "requirements": [
      "Display `project_id`, `project_name`, `dept_id`, and `budget`.",
      "Compare project budget to the department average using a correlated subquery."
    ],
    "tableName": "Projects",
    "hint": "Correlate on sub.dept_id = p.dept_id.",
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
    "title": "Project Count per Employee (Select Subquery)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Display each employee's ID, name, and total count of assigned projects using a correlated subquery in the SELECT clause.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and total projects aliased as `total_projects`.",
      "Calculate project count using a subquery in SELECT."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects.",
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
    "title": "Highest Rating per Employee (Select Subquery)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Display each employee's ID, name, and their highest review rating (or NULL if no reviews) using a subquery.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `highest_rating`.",
      "Use a correlated subquery in SELECT calculating MAX(rating)."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating.",
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
    "title": "Active Project Count per Department (Select Subquery)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Display each department's name, location, and the count of its active projects using a correlated subquery in SELECT.",
    "requirements": [
      "Display `dept_name`, `location`, and `active_projects`.",
      "Calculate count of active projects using a correlated subquery."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') AS active_projects.",
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
    "title": "Employees Earning More Than Less-Experienced Peers",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find employees who earn more than all colleagues in the same department who have less experience than them.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, `salary`, and `experience`.",
      "Filter for salary > maximum salary of peers in the same department with less experience."
    ],
    "tableName": "Employees",
    "hint": "Correlate on department and sub.experience < e.experience.",
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
    "title": "Reviews with Rating Above Employee's Lifetime Average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find performance reviews where the rating received was higher than the employee's own lifetime average rating.",
    "requirements": [
      "Display `review_id`, `emp_id`, `review_year`, and `rating`.",
      "Compare rating to the employee's own average rating across all reviews."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use a correlated subquery matching sub.emp_id = pr.emp_id.",
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
    "title": "Departments with Average Salary Over 50k (Derived Table)",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Medium",
    "problemStatement": "Find departments where the average salary exceeds 50,000 using a subquery in the FROM clause.",
    "requirements": [
      "Display `department`, `emp_count`, and `avg_sal`.",
      "Compute department aggregates in a derived table `dt` and filter in the outer WHERE."
    ],
    "tableName": "Employees",
    "hint": "Select from the derived table where dt.avg_sal > 50000.",
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
    "title": "Employees with Over 35 Total Hours (Derived Table)",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Medium",
    "problemStatement": "Find employees whose total weekly project hours exceed 35 using a subquery in the FROM clause.",
    "requirements": [
      "Display `emp_id` and `total_hours`.",
      "Calculate sum of hours per employee in a derived table `dt` and filter for `dt.total_hours > 35`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Wrap the GROUP BY query in FROM and filter in outer WHERE.",
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
    "title": "Join Employees with Department Salary Averages",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Display each employee's name, department, salary, and their department's average salary by joining with an aggregated subquery.",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `dept_stats.avg_dept_sal`.",
      "Join Employees with a derived table calculating department average salary."
    ],
    "tableName": "Employees",
    "hint": "INNER JOIN Employees with (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal FROM Employees GROUP BY department) dept_stats.",
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
    "title": "Salary Difference from Department Average",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Calculate how much each employee's salary differs from their department average, sorted from highest positive difference to lowest.",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `(e.salary - dt.avg_sal) AS diff_from_dept_avg`.",
      "Join with a department average subquery and order by `diff_from_dept_avg` descending."
    ],
    "tableName": "Employees",
    "hint": "Order by the calculated difference in descending order.",
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
    "title": "Review Years with Over 100k in Bonuses (Derived Table)",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Medium",
    "problemStatement": "Find review years where total bonus payouts exceeded 100,000 using a derived table.",
    "requirements": [
      "Display `review_year`, `reviews_count`, and `total_bonus`.",
      "Compute annual aggregates in derived table `yt` and filter for `yt.total_bonus > 100000`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter the aggregated derived table in the outer query.",
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
    "title": "Employees in the Highest-Paying Department",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Find all employees who work in the department that has the highest average salary.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter where department equals the top department ordered by average salary."
    ],
    "tableName": "Employees",
    "hint": "Use a subquery grouping by department, ordered by AVG(salary) DESC LIMIT 1.",
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
    "title": "Projects in the Highest-Budget Department",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Find all projects that belong to the department with the largest budget.",
    "requirements": [
      "Display `project_id`, `project_name`, and `budget`.",
      "Filter where dept_id equals the department with the highest budget."
    ],
    "tableName": "Projects, Departments",
    "hint": "Use a subquery selecting dept_id from Departments ORDER BY budget DESC LIMIT 1.",
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
    "title": "Employees Assigned to the Highest-Budget Active Project",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Find all employees who are working on the active project with the largest budget.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Filter for employees assigned to the top active project by budget."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Nest a subquery finding the top active project ID inside an IN subquery on Employee_Projects.",
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
    "title": "Employee Salary as Percentage of Department Payroll",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Calculate what percentage of their department's total payroll each employee receives (rounded to 2 decimal places).",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll`.",
      "Join Employees with a derived table calculating total payroll per department."
    ],
    "tableName": "Employees",
    "hint": "Multiply salary by 100.0 and divide by total_dept_payroll.",
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
    "title": "Employee with Highest Lifetime Bonus",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Find the employee details for the person who has received the highest cumulative bonus in the company.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter for the employee whose ID matches the top bonus earner from Performance_Reviews."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use a subquery grouping Performance_Reviews by emp_id ORDER BY SUM(bonus) DESC LIMIT 1.",
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
    "title": "Filter Employees Earning Over 50k",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Beginner",
    "problemStatement": "Find all employees who earn more than 50,000.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter for `salary > 50000`."
    ],
    "tableName": "Employees",
    "hint": "Use a simple WHERE condition on salary.",
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
    "title": "Employees Earning Between 30,000 and 60,000",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Beginner",
    "problemStatement": "Find employees whose salary is between 30,000 and 60,000 (inclusive).",
    "requirements": [
      "Select `emp_name` and `salary`.",
      "Filter for salary between 30,000 and 60,000."
    ],
    "tableName": "Employees",
    "hint": "Use the BETWEEN operator.",
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
    "title": "IT Employees Earning Over 50,000",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find all employees in the 'IT' department who earn more than 50,000. Display all columns.",
    "requirements": [
      "Select all columns from Employees.",
      "Filter for `department = 'IT'` and `salary > 50000`."
    ],
    "tableName": "Employees",
    "hint": "Combine the two conditions with AND.",
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
    "title": "Experienced Employees in Hyderabad or Chennai",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find employees located in Hyderabad or Chennai with at least 3 years of experience. Display all columns.",
    "requirements": [
      "Select all columns from Employees.",
      "City must be 'Hyderabad' or 'Chennai'.",
      "Experience must be 3 or greater."
    ],
    "tableName": "Employees",
    "hint": "Use IN ('Hyderabad', 'Chennai') AND experience >= 3.",
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
    "title": "Employees Starting or Ending with 'A'",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose name starts with 'A' or ends with 'a'.",
    "requirements": [
      "Select `emp_id` and `emp_name`.",
      "Filter for name starting with 'A' or ending with 'a'."
    ],
    "tableName": "Employees",
    "hint": "Use LIKE 'A%' OR LIKE '%a'.",
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
    "title": "Total Number of Employees",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Beginner",
    "problemStatement": "Find the total headcount of employees in the company.",
    "requirements": [
      "Count all rows aliased as `total_employees`."
    ],
    "tableName": "Employees",
    "hint": "Use COUNT(*) from Employees.",
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
    "title": "Average Salary by Department Ranked",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Calculate the average salary for each department, ordered from highest to lowest.",
    "requirements": [
      "Display `department` and `AVG(salary) AS avg_salary`.",
      "Group by `department`.",
      "Order by `avg_salary` descending."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY department and ORDER BY avg_salary DESC.",
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
    "title": "Find Departments with More Than 3 Staff",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Find departments that have strictly more than 3 employees.",
    "requirements": [
      "Display `department` and `COUNT(*) AS emp_count`.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) > 3`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY with HAVING COUNT(*) > 3.",
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
    "title": "Company Salary Extremes and Difference",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Find the highest salary, lowest salary, and the difference between them across the company.",
    "requirements": [
      "Calculate `MAX(salary) AS max_salary`.",
      "Calculate `MIN(salary) AS min_salary`.",
      "Calculate `MAX(salary) - MIN(salary) AS salary_difference`."
    ],
    "tableName": "Employees",
    "hint": "Use MAX(salary) and MIN(salary) in your SELECT list.",
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
    "title": "Total Payroll Spend by Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Calculate the total monthly salary spend for each department.",
    "requirements": [
      "Display `department` and `SUM(salary) AS total_salary_expense`.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(salary) grouped by department.",
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
    "title": "Cities with Average Salary Over 45,000",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Medium",
    "problemStatement": "Find cities where the average employee salary is greater than 45,000.",
    "requirements": [
      "Display `city` and `AVG(salary) AS avg_salary`.",
      "Group by `city`.",
      "Filter groups having `AVG(salary) > 45000`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY city HAVING AVG(salary) > 45000.",
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
    "title": "Department Salary Statistics",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Medium",
    "problemStatement": "For each department, calculate employee count, average salary, maximum salary, and minimum salary.",
    "requirements": [
      "Display `department`, `employee_count`, `avg_salary`, `max_salary`, and `min_salary`.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Use COUNT, AVG, MAX, and MIN grouped by department.",
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
    "title": "Employee Salary and Department Location",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Easy",
    "problemStatement": "Display employee name, salary, department name, and department location by joining Employees and Departments.",
    "requirements": [
      "Display `emp_name`, `salary`, `dept_name`, and `location`.",
      "Join Employees with Departments on department name."
    ],
    "tableName": "Employees, Departments",
    "hint": "INNER JOIN on e.department = d.dept_name.",
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
    "title": "Employees with No Assigned Projects",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who are not assigned to any projects.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "LEFT JOIN Employees with Employee_Projects and filter for `ep.project_id IS NULL`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use a LEFT JOIN anti-join.",
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
    "title": "Projects with No Team Members",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find all projects that do not have any employees assigned to them.",
    "requirements": [
      "Display `project_id`, `project_name`, and `status`.",
      "LEFT JOIN Projects with Employee_Projects and filter for `ep.emp_id IS NULL`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use a LEFT JOIN anti-join on ep.emp_id IS NULL.",
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
    "title": "Employees Assigned to Multiple Projects",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find employees who are assigned to more than 1 distinct project.",
    "requirements": [
      "Display `emp_name` and `project_count`.",
      "Join Employees with Employee_Projects.",
      "Group by employee and filter with `HAVING COUNT(DISTINCT ep.project_id) > 1`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Group by employee and filter count with HAVING > 1.",
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
    "title": "Employee Project Names, Roles, and Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, project name, assigned role, and weekly hours across all project assignments.",
    "requirements": [
      "Display `emp_name`, `project_name`, `assigned_role`, and `hours_allocated`.",
      "Join Employees, Employee_Projects, and Projects."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Join the three tables using INNER JOIN.",
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
    "title": "Employee Count per Department (Including Zero)",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Count the number of employees in each department, showing 0 for departments with no staff.",
    "requirements": [
      "Display `dept_name` and `employee_count`.",
      "LEFT JOIN Departments with Employees.",
      "Group by `dept_name`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use COUNT(e.emp_id) with LEFT JOIN.",
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
    "title": "Unique Pairs of Department Colleagues",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find all unique pairs of employees who work in the same department.",
    "requirements": [
      "Display `employee_1`, `employee_2`, and `department`.",
      "Self-join Employees where department matches and `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Use a self-join with e1.emp_id < e2.emp_id.",
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
    "title": "Employees Earning More Than Their Department Head",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Find employees who earn more than their department head. Display employee details and their department head's details.",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, `dept_head_name`, and `dept_head_salary`.",
      "Join Employees to Departments, and Departments to Employees matching dept_head.",
      "Filter for `e.salary > mgr.salary`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Join Employees with Departments, then join again to Employees on d.dept_head = mgr.emp_name.",
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
    "title": "Cross-Department Teammates on the Same Project",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Find pairs of teammates on the same project who come from different departments.",
    "requirements": [
      "Display `project_id`, `employee_1`, `dept_1`, `employee_2`, and `dept_2`.",
      "Join project assignments where `e1.department <> e2.department` and `ep1.emp_id < ep2.emp_id`."
    ],
    "tableName": "Employee_Projects, Employees",
    "hint": "Self-join assignments on project_id and join both employee profiles.",
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
    "title": "Total Project Hours with Zero Fallback",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Calculate total weekly hours allocated to each project, displaying 0 for unstaffed projects.",
    "requirements": [
      "Display `project_name` and total hours aliased as `total_hours`.",
      "LEFT JOIN Projects with Employee_Projects.",
      "Use COALESCE to display 0 when sum is NULL.",
      "Group by `project_id, project_name`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use COALESCE(SUM(ep.hours_allocated), 0) grouped by project.",
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
    "title": "Employees with Rating 5 Reviews",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who received a rating of 5 in any performance review.",
    "requirements": [
      "Display `emp_name`, `department`, `review_year`, and `rating`.",
      "Join Employees with Performance_Reviews.",
      "Filter for `rating = 5`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN on emp_id WHERE pr.rating = 5.",
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
    "title": "Most Recent Review for Each Employee",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Display each employee's most recent performance review year and rating.",
    "requirements": [
      "Display `emp_name`, `department`, `review_year`, and `rating`.",
      "Filter for each employee's latest review using a correlated subquery."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Match review_id to a subquery ordering by review_year DESC LIMIT 1.",
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
    "title": "Employees Earning Above Company Average Salary",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose salary exceeds the company-wide average salary.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter where `salary > (SELECT AVG(salary) FROM Employees)`."
    ],
    "tableName": "Employees",
    "hint": "Compare salary with a scalar subquery calculating AVG(salary).",
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
    "title": "Second Highest Salary in Company",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find the second highest salary in the company using a subquery.",
    "requirements": [
      "Calculate the maximum salary strictly less than the overall maximum salary, aliased as `second_highest_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use MAX(salary) WHERE salary < (SELECT MAX(salary) FROM Employees).",
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
    "title": "Employees in High-Budget Departments",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find all employees working in departments whose budget is greater than the average department budget.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Filter where department is in departments with above-average budget."
    ],
    "tableName": "Employees, Departments",
    "hint": "Nest a subquery calculating average department budget inside an IN clause.",
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
    "title": "Employees Assigned to 250k+ Projects",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find all unique employees who work on projects with a budget greater than 250,000.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Exclude duplicate employee records.",
      "Filter for assignment on projects with budget > 250,000."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Use SELECT DISTINCT and an IN subquery joining Employee_Projects with Projects.",
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
    "title": "Department with Highest Total Payroll",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find the single department that has the largest total salary expenditure.",
    "requirements": [
      "Display `department` and `total_payroll`.",
      "Group by department, sort by total payroll descending, and limit to 1."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(salary) grouped by department ORDER BY total_payroll DESC LIMIT 1.",
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
    "title": "Employees Earning More Than Department Average",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Find all employees who earn more than the average salary of their own department.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Filter where salary is greater than the department's average using a correlated subquery."
    ],
    "tableName": "Employees",
    "hint": "Correlate on e2.department = e.department.",
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
    "title": "Employees Without Performance Reviews (NOT EXISTS)",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who have never received a performance review using NOT EXISTS.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Use `WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id)`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use NOT EXISTS with a correlated subquery on emp_id.",
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
    "title": "Projects Staffed Exclusively by IT Employees",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Find projects that have at least one team member, and where every assigned member belongs to the 'IT' department.",
    "requirements": [
      "Display `project_id` and `project_name`.",
      "Verify at least one staff assignment exists using EXISTS.",
      "Verify no non-IT assignments exist using NOT EXISTS."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "Combine EXISTS with NOT EXISTS checking e.department <> 'IT'.",
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
    "title": "Third Highest Salary in Company",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Find the third highest salary in the company using nested subqueries.",
    "requirements": [
      "Calculate the third highest salary aliased as `third_highest_salary`."
    ],
    "tableName": "Employees",
    "hint": "Nest subqueries filtering below the top two salaries.",
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
    "title": "Employees Working Above Project Average Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "For each project assignment, find employees whose allocated hours exceed the average hours for that specific project.",
    "requirements": [
      "Display `project_id`, `emp_name`, and `hours_allocated`.",
      "Compare hours against a correlated subquery calculating average hours for the same project."
    ],
    "tableName": "Employee_Projects, Employees",
    "hint": "Correlate on ep2.project_id = ep.project_id.",
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
    "title": "Find Top 3 Highest Earners",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Easy",
    "problemStatement": "Find the 3 employees with the highest salaries in the company.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Order by `salary` descending.",
      "Limit output to 3 rows."
    ],
    "tableName": "Employees",
    "hint": "ORDER BY salary DESC LIMIT 3.",
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
    "title": "Highest Earner in Each Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Find the highest-earning employee(s) in each department.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Filter where salary equals the maximum salary in that department."
    ],
    "tableName": "Employees",
    "hint": "Correlate with (SELECT MAX(salary) FROM Employees e2 WHERE e2.department = e.department).",
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
    "title": "Rank Employees by Salary Within Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Rank employees by salary in descending order within each department using DENSE_RANK.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Compute `DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_salary_rank`."
    ],
    "tableName": "Employees",
    "hint": "Use DENSE_RANK() with PARTITION BY department.",
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
    "title": "Colleagues with Identical Salaries",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Find all pairs of employees who earn the exact same salary.",
    "requirements": [
      "Display `employee_1`, `employee_2`, and `salary`.",
      "Self-join Employees on salary where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Self-join Employees on e1.salary = e2.salary AND e1.emp_id < e2.emp_id.",
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
    "title": "Bottom 2 Earners in the Company",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Easy",
    "problemStatement": "Find the 2 employees with the lowest salaries in the company.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Order by `salary` ascending.",
      "Limit output to 2 rows."
    ],
    "tableName": "Employees",
    "hint": "ORDER BY salary ASC LIMIT 2.",
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
    "title": "Locations with Multiple Departments",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Find all locations that have more than 1 department.",
    "requirements": [
      "Display `location` and `dept_count`.",
      "Group by `location`.",
      "Filter groups having `COUNT(*) > 1`."
    ],
    "tableName": "Departments",
    "hint": "Use GROUP BY location HAVING COUNT(*) > 1.",
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
    "title": "Departments with No Staff (Left Join)",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that currently have no employees assigned to them.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `location`.",
      "LEFT JOIN Departments with Employees.",
      "Filter for `e.emp_id IS NULL`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use a LEFT JOIN anti-join on e.emp_id IS NULL.",
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
    "title": "Projects with Zero Staff or Zero Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Find projects that have either no assigned employees or 0 total allocated hours.",
    "requirements": [
      "Display `project_id`, `project_name`, and `status`.",
      "LEFT JOIN Projects with Employee_Projects.",
      "Group by project attributes and filter with `HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use HAVING to check for 0 employees or 0 total hours.",
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
    "title": "Employees Earning 30% Above Department Average",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Hard",
    "problemStatement": "Find employees who earn more than 30% above their department's average salary.",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `dept_avg_salary`.",
      "Join Employees with a department average subquery.",
      "Filter where `e.salary > sub.avg_dept_sal * 1.3`."
    ],
    "tableName": "Employees",
    "hint": "Filter with e.salary > sub.avg_dept_sal * 1.3.",
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
    "title": "Senior IT or Finance Employees Earning Under 70k",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Medium",
    "problemStatement": "Find employees in Finance or IT who have at least 5 years of experience but earn less than 70,000.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, `experience`, and `salary`.",
      "Department must be 'Finance' or 'IT'.",
      "Experience must be 5 or greater.",
      "Salary must be less than 70,000."
    ],
    "tableName": "Employees",
    "hint": "Combine IN ('Finance', 'IT') with experience >= 5 AND salary < 70000.",
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
    "title": "Departments Where Annual Payroll Exceeds Budget",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Hard",
    "problemStatement": "Find departments where total annual payroll (monthly salary * 12) strictly exceeds the department's annual budget.",
    "requirements": [
      "Display `dept_name`, `annual_payroll`, and `budget`.",
      "Join Departments with Employees.",
      "Group by department and filter with `HAVING SUM(e.salary * 12) > d.budget`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use HAVING SUM(e.salary * 12) > d.budget.",
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
    "title": "Classify Employees by Total Workload Tier",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Hard",
    "problemStatement": "Calculate total project hours for each employee and classify them into workload tiers: 'Unassigned' (0 hrs), 'Light Workload' (<25 hrs), 'Moderate Workload' (25-35 hrs), or 'Heavy Workload' (>35 hrs).",
    "requirements": [
      "Display `emp_id`, `emp_name`, `total_hours`, and `workload_tier`.",
      "LEFT JOIN Employees with Employee_Projects.",
      "Use CASE to assign the tier.",
      "Group by `emp_id, emp_name`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use COALESCE(SUM(hours_allocated), 0) and a CASE expression.",
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
    "title": "Classify Employees into Salary Tiers",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Easy",
    "problemStatement": "Classify each employee's salary into 'Low' (< 35,000), 'Medium' (35,000 to 60,000), or 'High' (> 60,000).",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `salary_tier`.",
      "Use a CASE expression to categorize salary."
    ],
    "tableName": "Employees",
    "hint": "Use CASE WHEN salary < 35000 THEN 'Low' ... END AS salary_tier.",
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
    "title": "Classify Employees into Seniority Tiers",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Easy",
    "problemStatement": "Classify each employee into 'Fresher' (< 2 yrs), 'Junior' (2 to 4 yrs), 'Mid-Level' (5 to 8 yrs), or 'Senior' (> 8 yrs).",
    "requirements": [
      "Display `emp_name`, `experience`, and `seniority_tier`.",
      "Use a CASE expression to evaluate experience."
    ],
    "tableName": "Employees",
    "hint": "Use CASE WHEN experience < 2 THEN 'Fresher' ... END AS seniority_tier.",
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
    "title": "Count High vs Standard Earners by Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Medium",
    "problemStatement": "For each department, count how many employees earn over 50,000 and how many earn 50,000 or less.",
    "requirements": [
      "Display `department`, `high_earners`, and `standard_earners`.",
      "Group by `department`.",
      "Use conditional aggregation with SUM and CASE."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END).",
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
    "title": "Map Performance Ratings to Recommendations",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Medium",
    "problemStatement": "Map each employee's review rating to a recommendation: 'Exceptional' (5), 'Strong' (4), 'Satisfactory' (3), or 'Needs Improvement' (<= 2).",
    "requirements": [
      "Display `emp_name`, `review_year`, `rating`, and `recommendation`.",
      "Join Employees with Performance_Reviews.",
      "Use a CASE expression to map ratings."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use CASE WHEN rating = 5 THEN 'Exceptional' ... END AS recommendation.",
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
