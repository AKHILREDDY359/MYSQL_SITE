/**
 * Question Bank containing exactly 375 verified interview practice questions.
 * Preserves the original 50 questions (IDs 1–50), adds 250 curriculum questions
 * across 8 core topics, includes 50 Common Logic-Based SQL Interview Questions (IDs 301–350),
 * and features 25 dedicated CASE Expressions challenges (IDs 351–375),
 * all verified by live SQL execution against SQL.js.
 *
 * Generated automatically by scripts/buildAndVerifyQuestionBank.js
 */

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
  "Interview Ready Questions"
];

export const QUESTIONS = [
  {
    "id": 1,
    "title": "Display all employees working in IT",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display all details of employees who belong to the 'IT' department.",
    "requirements": [
      "Select all columns from the Employees table.",
      "Filter rows where department is strictly 'IT'."
    ],
    "tableName": "Employees",
    "hint": "Use the WHERE clause with an equality operator: WHERE department = 'IT'",
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
    "title": "Display employees whose salary is greater than 50000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to retrieve all employees who earn a salary strictly greater than 50000.",
    "requirements": [
      "Select all columns.",
      "Filter where salary > 50000."
    ],
    "tableName": "Employees",
    "hint": "Use the greater-than comparison operator (>): WHERE salary > 50000",
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
    "title": "Display employees whose age is less than or equal to 25",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display all details of employees whose age is 25 or younger.",
    "requirements": [
      "Select all columns.",
      "Filter where age is less than or equal to 25."
    ],
    "tableName": "Employees",
    "hint": "Use the less-than-or-equal-to operator (<=): WHERE age <= 25",
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
    "title": "Display employees working in HR who earn more than 30000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display all employees in the 'HR' department whose salary is strictly greater than 30000.",
    "requirements": [
      "Select all columns.",
      "Both conditions must hold true: department is 'HR' and salary > 30000."
    ],
    "tableName": "Employees",
    "hint": "Combine the two filtering conditions using the AND keyword.",
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
    "title": "Display employees working in IT or Finance",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to retrieve all employees who belong to either the 'IT' department or the 'Finance' department.",
    "requirements": [
      "Select all columns.",
      "Match either department = 'IT' or department = 'Finance'."
    ],
    "tableName": "Employees",
    "hint": "Use the OR operator: WHERE department = 'IT' OR department = 'Finance'",
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
    "title": "Display employees whose salary is between 30000 and 60000, inclusive",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display employees whose salary falls within the range 30000 to 60000 (inclusive of both boundaries).",
    "requirements": [
      "Select all columns.",
      "Use BETWEEN or comparison operators covering 30000 and 60000."
    ],
    "tableName": "Employees",
    "hint": "The BETWEEN operator is inclusive: WHERE salary BETWEEN 30000 AND 60000",
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
    "title": "Display employees belonging to IT, HR, or Sales using IN",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display all employees who work in either 'IT', 'HR', or 'Sales' using the IN operator.",
    "requirements": [
      "Select all columns.",
      "Use the IN operator with the list ('IT', 'HR', 'Sales')."
    ],
    "tableName": "Employees",
    "hint": "Syntax: WHERE department IN ('IT', 'HR', 'Sales')",
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
    "title": "Display employees living in Hyderabad whose salary is at least 40000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to retrieve all employees who live in 'Hyderabad' and earn a salary of at least 40000 (>= 40000).",
    "requirements": [
      "Select all columns.",
      "Condition 1: city = 'Hyderabad'.",
      "Condition 2: salary >= 40000."
    ],
    "tableName": "Employees",
    "hint": "WHERE city = 'Hyderabad' AND salary >= 40000",
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
    "title": "Display employees whose names start with A",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to find all employees whose employee name starts with the capital letter 'A'.",
    "requirements": [
      "Select all columns.",
      "Use the LIKE operator with wildcard '%'.",
      "Pattern: 'A%'."
    ],
    "tableName": "Employees",
    "hint": "Use LIKE 'A%' where '%' matches any sequence of zero or more characters.",
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
    "title": "Display employees whose names end with a",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to find all employees whose name ends with the letter 'a' (or 'A').",
    "requirements": [
      "Select all columns.",
      "Use the pattern '%a' with the LIKE operator."
    ],
    "tableName": "Employees",
    "hint": "Use LIKE '%a'. In standard SQL and SQLite, LIKE is case-insensitive for ASCII characters.",
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
    "title": "Display employees whose names contain an",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to find all employees whose name contains the substring 'an' anywhere in the name.",
    "requirements": [
      "Select all columns.",
      "Use the LIKE pattern '%an%'."
    ],
    "tableName": "Employees",
    "hint": "Surround 'an' with percent signs: WHERE emp_name LIKE '%an%'",
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
    "title": "Display employees whose salary is not equal to 40000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display all employees whose salary is not equal to 40000.",
    "requirements": [
      "Select all columns.",
      "Use != or <> to exclude records with salary = 40000."
    ],
    "tableName": "Employees",
    "hint": "WHERE salary != 40000 (or WHERE salary <> 40000)",
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
    "title": "Display employees aged between 25 and 30 who work in IT",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display all employees whose age is between 25 and 30 (inclusive) and who work in the 'IT' department.",
    "requirements": [
      "Select all columns.",
      "Age must be in [25, 30].",
      "Department must be 'IT'."
    ],
    "tableName": "Employees",
    "hint": "Combine BETWEEN with AND: WHERE age BETWEEN 25 AND 30 AND department = 'IT'",
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
    "title": "Display employees who do not work in HR",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to find all employees who do not belong to the 'HR' department.",
    "requirements": [
      "Select all columns.",
      "Exclude employees in the HR department."
    ],
    "tableName": "Employees",
    "hint": "WHERE department != 'HR' (or WHERE department <> 'HR' or WHERE NOT department = 'HR')",
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
    "title": "Display employees living in Chennai or Bengaluru whose salary exceeds 50000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to retrieve all employees who live in either 'Chennai' or 'Bengaluru' AND have a salary strictly greater than 50000.",
    "requirements": [
      "Select all columns.",
      "City must be Chennai or Bengaluru.",
      "Salary must be > 50000.",
      "Mind operator precedence using parentheses or IN."
    ],
    "tableName": "Employees",
    "hint": "Use parentheses: WHERE (city = 'Chennai' OR city = 'Bengaluru') AND salary > 50000, or WHERE city IN ('Chennai', 'Bengaluru') AND salary > 50000",
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
    "title": "Display employees with at least 5 years of experience and salary below 70000",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display employees who have at least 5 years of experience (experience >= 5) and earn a salary less than 70000 (salary < 70000).",
    "requirements": [
      "Select all columns.",
      "experience >= 5 AND salary < 70000."
    ],
    "tableName": "Employees",
    "hint": "WHERE experience >= 5 AND salary < 70000",
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
    "title": "Display employees who joined in 2022, 2023, or 2024 using IN",
    "part": "WHERE & Operators",
    "topic": "WHERE & Operators",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display employees who joined the company in the years 2022, 2023, or 2024 using the IN operator.",
    "requirements": [
      "Select all columns.",
      "Use joining_year IN (2022, 2023, 2024)."
    ],
    "tableName": "Employees",
    "hint": "WHERE joining_year IN (2022, 2023, 2024)",
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
    "title": "Display employees whose names contain exactly four characters using LIKE",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display employees whose emp_name is exactly 4 characters long using the LIKE operator with underscore (_) wildcards.",
    "requirements": [
      "Select all columns.",
      "Use LIKE with exactly four underscore characters: '____'."
    ],
    "tableName": "Employees",
    "hint": "Each underscore `_` matches exactly one character. Use 4 underscores: LIKE '____'",
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
    "title": "Display employees whose salary is outside the range 30000 to 60000",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to find employees whose salary is outside the range 30000 to 60000 (i.e. strictly less than 30000 or strictly greater than 60000).",
    "requirements": [
      "Select all columns.",
      "Exclude the range [30000, 60000]."
    ],
    "tableName": "Employees",
    "hint": "WHERE salary NOT BETWEEN 30000 AND 60000 (or WHERE salary < 30000 OR salary > 60000)",
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
    "title": "Display employees who work in IT or Sales but do not live in Chennai",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display employees working in either 'IT' or 'Sales' who do not reside in 'Chennai'.",
    "requirements": [
      "Select all columns.",
      "department IN ('IT', 'Sales') (or department = 'IT' OR department = 'Sales').",
      "city != 'Chennai'."
    ],
    "tableName": "Employees",
    "hint": "WHERE department IN ('IT', 'Sales') AND city != 'Chennai'",
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
    "title": "Count the total number of employees",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to count the total number of employees in the Employees table.",
    "requirements": [
      "Use COUNT(*).",
      "Provide an alias such as total_employees."
    ],
    "tableName": "Employees",
    "hint": "SELECT COUNT(*) AS total_employees FROM Employees;",
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
    "title": "Calculate the total salary of all employees",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to calculate the sum of salaries of all employees.",
    "requirements": [
      "Use the SUM() aggregate function on the salary column.",
      "Provide an alias such as total_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT SUM(salary) AS total_salary FROM Employees;",
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
    "title": "Calculate the average salary of all employees",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to compute the average salary of all employees.",
    "requirements": [
      "Use the AVG() aggregate function on salary.",
      "Provide an alias such as average_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT AVG(salary) AS average_salary FROM Employees;",
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
    "title": "Find the highest salary",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to find the maximum salary among all employees.",
    "requirements": [
      "Use the MAX() aggregate function on salary.",
      "Provide an alias such as max_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT MAX(salary) AS max_salary FROM Employees;",
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
    "title": "Find the lowest salary",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to find the lowest salary among all employees.",
    "requirements": [
      "Use the MIN() aggregate function on salary.",
      "Provide an alias such as min_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT MIN(salary) AS min_salary FROM Employees;",
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
    "title": "Count employees working in IT",
    "part": "Aggregate Functions",
    "topic": "Aggregate Functions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to count how many employees work in the 'IT' department.",
    "requirements": [
      "Use COUNT(*).",
      "Filter using WHERE department = 'IT'."
    ],
    "tableName": "Employees",
    "hint": "SELECT COUNT(*) AS it_employees_count FROM Employees WHERE department = 'IT';",
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
    "title": "Find the average age of all employees",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to calculate the average age of all employees.",
    "requirements": [
      "Use AVG(age).",
      "Provide an alias such as average_age."
    ],
    "tableName": "Employees",
    "hint": "SELECT AVG(age) AS average_age FROM Employees;",
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
    "title": "Calculate the total salary of employees living in Hyderabad",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to calculate the sum of salaries of all employees residing in 'Hyderabad'.",
    "requirements": [
      "Use SUM(salary).",
      "Filter for city = 'Hyderabad'."
    ],
    "tableName": "Employees",
    "hint": "SELECT SUM(salary) AS total_hyderabad_salary FROM Employees WHERE city = 'Hyderabad';",
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
    "title": "Find the highest salary among employees with at least 5 years of experience",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to find the maximum salary among employees who possess at least 5 years of experience (experience >= 5).",
    "requirements": [
      "Use MAX(salary).",
      "Filter with experience >= 5."
    ],
    "tableName": "Employees",
    "hint": "SELECT MAX(salary) AS max_salary FROM Employees WHERE experience >= 5;",
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
    "title": "Count employees earning more than 50000",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to count how many employees earn a salary strictly greater than 50000.",
    "requirements": [
      "Use COUNT(*).",
      "Filter with salary > 50000."
    ],
    "tableName": "Employees",
    "hint": "SELECT COUNT(*) AS count_high_earners FROM Employees WHERE salary > 50000;",
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
    "title": "Display the number of employees in each department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display each department name along with the total count of employees working in that department.",
    "requirements": [
      "Select department and COUNT(*).",
      "Group by department."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, COUNT(*) AS employee_count FROM Employees GROUP BY department;",
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
    "title": "Display the average salary of each department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display each department alongside the average salary of employees in that department.",
    "requirements": [
      "Select department and AVG(salary).",
      "Group by department."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department;",
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
    "title": "Display the total salary paid by each department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display each department along with the sum of salaries of all employees in that department.",
    "requirements": [
      "Select department and SUM(salary).",
      "Group by department."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, SUM(salary) AS total_salary FROM Employees GROUP BY department;",
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
    "title": "Display the highest salary in each department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display each department name and the highest salary earned within that department.",
    "requirements": [
      "Select department and MAX(salary).",
      "Group by department."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, MAX(salary) AS max_salary FROM Employees GROUP BY department;",
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
    "title": "Display the lowest salary in each department",
    "part": "GROUP BY",
    "topic": "GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display each department along with the lowest salary within that department.",
    "requirements": [
      "Select department and MIN(salary).",
      "Group by department."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, MIN(salary) AS min_salary FROM Employees GROUP BY department;",
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
    "title": "Display the number of employees in each city",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to show each city and the total number of employees residing in that city.",
    "requirements": [
      "Select city and COUNT(*).",
      "Group by city."
    ],
    "tableName": "Employees",
    "hint": "SELECT city, COUNT(*) AS employee_count FROM Employees GROUP BY city;",
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
    "title": "Display the average salary for each city",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to calculate the average salary of employees in each city.",
    "requirements": [
      "Select city and AVG(salary).",
      "Group by city."
    ],
    "tableName": "Employees",
    "hint": "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city;",
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
    "title": "Display the number of employees for each joining year",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display each joining year and how many employees joined in that year.",
    "requirements": [
      "Select joining_year and COUNT(*).",
      "Group by joining_year."
    ],
    "tableName": "Employees",
    "hint": "SELECT joining_year, COUNT(*) AS employee_count FROM Employees GROUP BY joining_year;",
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
    "title": "Display departments having more than 3 employees",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display departments that have strictly more than 3 employees.",
    "requirements": [
      "Select department and employee count.",
      "Group by department.",
      "Filter aggregated results using HAVING COUNT(*) > 3."
    ],
    "tableName": "Employees",
    "hint": "Use HAVING to filter groups: GROUP BY department HAVING COUNT(*) > 3",
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
    "title": "Display departments whose average salary is greater than 50000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display departments where the average employee salary is strictly greater than 50000.",
    "requirements": [
      "Select department and AVG(salary).",
      "Group by department.",
      "Use HAVING AVG(salary) > 50000."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING AVG(salary) > 50000;",
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
    "title": "Display departments whose total salary exceeds 150000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to find departments whose cumulative salary expense is strictly greater than 150000.",
    "requirements": [
      "Select department and SUM(salary).",
      "Group by department.",
      "Apply HAVING SUM(salary) > 150000."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, SUM(salary) AS total_salary FROM Employees GROUP BY department HAVING SUM(salary) > 150000;",
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
    "title": "Display departments whose highest salary is at least 70000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display departments whose highest salary is at least 70000 (>= 70000).",
    "requirements": [
      "Select department and MAX(salary).",
      "Group by department.",
      "Apply HAVING MAX(salary) >= 70000."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, MAX(salary) AS max_salary FROM Employees GROUP BY department HAVING MAX(salary) >= 70000;",
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
    "title": "Display cities having at least 4 employees",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display all cities that have at least 4 employees (COUNT(*) >= 4).",
    "requirements": [
      "Select city and COUNT(*).",
      "Group by city.",
      "HAVING COUNT(*) >= 4."
    ],
    "tableName": "Employees",
    "hint": "SELECT city, COUNT(*) AS employee_count FROM Employees GROUP BY city HAVING COUNT(*) >= 4;",
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
    "title": "Display departments whose average salary is below 45000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display departments with an average salary strictly below 45000.",
    "requirements": [
      "Select department and AVG(salary).",
      "Group by department.",
      "HAVING AVG(salary) < 45000."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING AVG(salary) < 45000;",
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
    "title": "Display departments with more than 2 employees and an average salary above 40000",
    "part": "HAVING",
    "topic": "HAVING",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display departments that have more than 2 employees (COUNT(*) > 2) AND have an average salary above 40000 (AVG(salary) > 40000).",
    "requirements": [
      "Select department, COUNT(*), and AVG(salary).",
      "Group by department.",
      "Combine two aggregate filters in HAVING using AND."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) > 2 AND AVG(salary) > 40000;",
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
    "title": "Display all employees ordered by salary from highest to lowest",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display all employees, ordered by their salary in descending order (highest salary first).",
    "requirements": [
      "Select all columns.",
      "Order by salary DESC.",
      "Preserve order in output."
    ],
    "tableName": "Employees",
    "hint": "Use ORDER BY salary DESC",
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
    "title": "Display employees ordered by age from youngest to oldest",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display all employees sorted by age in ascending order (youngest first).",
    "requirements": [
      "Select all columns.",
      "Order by age ASC (or default order by age).",
      "Preserve ascending order."
    ],
    "tableName": "Employees",
    "hint": "Use ORDER BY age ASC",
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
    "title": "Sort employees by department alphabetically and then salary in descending order",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display all employees sorted primarily by department alphabetically (A to Z), and secondarily by salary in descending order within each department.",
    "requirements": [
      "Select all columns.",
      "Primary sort: department ASC.",
      "Secondary sort: salary DESC."
    ],
    "tableName": "Employees",
    "hint": "Use ORDER BY department ASC, salary DESC",
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
    "title": "Display the three highest-paid employees",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display the details of the top 3 highest-earning employees in the company.",
    "requirements": [
      "Select all columns.",
      "Sort by salary DESC.",
      "Restrict the output to 3 records using LIMIT 3."
    ],
    "tableName": "Employees",
    "hint": "SELECT * FROM Employees ORDER BY salary DESC LIMIT 3;",
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
    "title": "Display department employee count and average salary for large departments ordered by average salary",
    "part": "Sorting & Limiting",
    "topic": "Sorting & Limiting",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display each department's name, employee count, and average salary. Keep only departments with at least 3 employees (COUNT(*) >= 3), and sort the final output by average salary from highest to lowest.",
    "requirements": [
      "Select department, COUNT(*), and AVG(salary).",
      "Group by department.",
      "Filter with HAVING COUNT(*) >= 3.",
      "Order by average salary descending (ORDER BY avg_salary DESC or AVG(salary) DESC)."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) >= 3 ORDER BY avg_salary DESC;",
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
    "title": "Display all columns and records from Employees",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to retrieve all columns and all records from the Employees table.",
    "requirements": [
      "Use the asterisk (*) wildcard to project all columns.",
      "Select from the Employees table without any row filters."
    ],
    "tableName": "Employees",
    "hint": "Use SELECT * FROM Employees;",
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
    "title": "Select employee names and their monthly salaries",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to retrieve only the employee name and salary columns for all employees.",
    "requirements": [
      "Select only the emp_name and salary columns.",
      "Preserve the column order: emp_name, salary."
    ],
    "tableName": "Employees",
    "hint": "Specify columns separated by comma: SELECT emp_name, salary FROM Employees;",
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
    "title": "Display employee ID, full name, and department",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display the employee ID, employee name, and department for all employees.",
    "requirements": [
      "Select emp_id, emp_name, and department.",
      "Maintain the specified column order."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_id, emp_name, department FROM Employees;",
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
    "title": "Retrieve department names, locations, and budgets",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display the department name, location, and annual budget from the Departments table.",
    "requirements": [
      "Query the Departments table.",
      "Select dept_name, location, and budget."
    ],
    "tableName": "Departments",
    "hint": "SELECT dept_name, location, budget FROM Departments;",
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
    "title": "Retrieve all project names and their current status",
    "topic": "SQL Fundamentals",
    "subtopic": "Basic SELECT & Column Projection",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to project the project name and operational status for all corporate initiatives in the Projects table.",
    "requirements": [
      "Query the Projects table.",
      "Select project_name and status."
    ],
    "tableName": "Projects",
    "hint": "SELECT project_name, status FROM Projects;",
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
    "title": "Alias employee name and salary with business-friendly titles",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to retrieve emp_name renamed as employee_full_name, and salary renamed as monthly_salary.",
    "requirements": [
      "Select emp_name aliased as employee_full_name.",
      "Select salary aliased as monthly_salary.",
      "Use the AS keyword for explicit aliasing."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name AS employee_full_name, salary AS monthly_salary FROM Employees;",
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
    "title": "Alias department attributes for executive reporting",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query from Departments that renames dept_name to dept and budget to annual_budget.",
    "requirements": [
      "Query the Departments table.",
      "Alias dept_name as dept.",
      "Alias budget as annual_budget."
    ],
    "tableName": "Departments",
    "hint": "SELECT dept_name AS dept, budget AS annual_budget FROM Departments;",
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
    "title": "Compute and alias annual employee compensation",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to project emp_name and calculate the annual compensation (monthly salary multiplied by 12) with the column alias annual_salary.",
    "requirements": [
      "Select emp_name.",
      "Multiply salary by 12 and alias as annual_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, salary * 12 AS annual_salary FROM Employees;",
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
    "title": "Convert professional experience from years to months",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query displaying each employee's name and their total professional experience converted to months (experience * 12) aliased as experience_months.",
    "requirements": [
      "Select emp_name.",
      "Multiply experience by 12 and alias as experience_months."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, experience * 12 AS experience_months FROM Employees;",
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
    "title": "Project project budgets formatted in thousands (K)",
    "topic": "SQL Fundamentals",
    "subtopic": "Column Aliasing & Renaming",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query from Projects to display project_name and the budget divided by 1000 aliased as budget_in_thousands.",
    "requirements": [
      "Query the Projects table.",
      "Select project_name.",
      "Calculate budget / 1000 and alias as budget_in_thousands."
    ],
    "tableName": "Projects",
    "hint": "SELECT project_name, budget / 1000 AS budget_in_thousands FROM Projects;",
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
    "title": "List all unique department names in the organization",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display all unique department names present in the Employees table without any duplicate entries.",
    "requirements": [
      "Use DISTINCT on the department column.",
      "Retrieve results from the Employees table."
    ],
    "tableName": "Employees",
    "hint": "SELECT DISTINCT department FROM Employees;",
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
    "title": "Find all distinct office branch cities",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to list all unique cities where employees are stationed, eliminating duplicate cities.",
    "requirements": [
      "Select DISTINCT city from Employees."
    ],
    "tableName": "Employees",
    "hint": "SELECT DISTINCT city FROM Employees;",
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
    "title": "List all unique years in which employees joined the company",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to retrieve all unique joining years recorded in the Employees table.",
    "requirements": [
      "Select DISTINCT joining_year from Employees."
    ],
    "tableName": "Employees",
    "hint": "SELECT DISTINCT joining_year FROM Employees;",
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
    "title": "Discover all distinct operational statuses across projects",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to identify all distinct project status categories currently in the Projects table.",
    "requirements": [
      "Query the Projects table.",
      "Use DISTINCT on status."
    ],
    "tableName": "Projects",
    "hint": "SELECT DISTINCT status FROM Projects;",
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
    "title": "Find distinct department and city office pairs",
    "topic": "SQL Fundamentals",
    "subtopic": "DISTINCT & Unique Values",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display all unique combinations of department and city from the Employees table.",
    "requirements": [
      "Use DISTINCT across both department and city columns.",
      "Preserve order: department, city."
    ],
    "tableName": "Employees",
    "hint": "SELECT DISTINCT department, city FROM Employees;",
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
    "title": "Calculate estimated daily wage assuming 30 days per month",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display each employee's name and their estimated daily wage (salary divided by 30) aliased as daily_wage.",
    "requirements": [
      "Select emp_name.",
      "Calculate salary / 30 and alias as daily_wage."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, salary / 30 AS daily_wage FROM Employees;",
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
    "title": "Compute projected 10 percent salary hike",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display emp_name, current salary, and the projected revised salary after a 10% raise (salary * 1.10) aliased as revised_salary.",
    "requirements": [
      "Select emp_name, salary.",
      "Compute salary * 1.10 aliased as revised_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, salary, salary * 1.10 AS revised_salary FROM Employees;",
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
    "title": "Compute projected salary with a 5000 INR fixed bonus increment",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display emp_name and their salary plus a fixed 5000 increment aliased as incremented_salary.",
    "requirements": [
      "Select emp_name.",
      "Add 5000 to salary and alias as incremented_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, salary + 5000 AS incremented_salary FROM Employees;",
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
    "title": "Calculate total annual package including 2 months festive bonus",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display emp_name and total compensation for 14 months (monthly salary * 14) aliased as total_annual_package.",
    "requirements": [
      "Select emp_name.",
      "Multiply salary by 14 and alias as total_annual_package."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, salary * 14 AS total_annual_package FROM Employees;",
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
    "title": "Calculate net usable project budget after 20 percent management reserve",
    "topic": "SQL Fundamentals",
    "subtopic": "Arithmetic Calculations & Expressions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Projects to display project_name and 80% of budget (budget * 0.80) aliased as net_usable_budget.",
    "requirements": [
      "Query the Projects table.",
      "Select project_name.",
      "Calculate budget * 0.80 and alias as net_usable_budget."
    ],
    "tableName": "Projects",
    "hint": "SELECT project_name, budget * 0.80 AS net_usable_budget FROM Projects;",
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
    "title": "Append static corporate organization literal column",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to select emp_name and a static string literal 'SQL Sprint Corp' aliased as organization for all employees.",
    "requirements": [
      "Select emp_name.",
      "Include string literal 'SQL Sprint Corp' aliased as organization."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, 'SQL Sprint Corp' AS organization FROM Employees;",
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
    "title": "Project static employment classification tag",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to select emp_name, department, and a literal column 'Full-Time' aliased as employment_type.",
    "requirements": [
      "Select emp_name, department.",
      "Include literal 'Full-Time' aliased as employment_type."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, department, 'Full-Time' AS employment_type FROM Employees;",
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
    "title": "Identify performance reviews where bonus was not awarded (NULL)",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Performance_Reviews to retrieve review_id, emp_id, and rating for reviews where the bonus is NULL.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Filter rows where bonus IS NULL.",
      "Select review_id, emp_id, rating."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use IS NULL operator: SELECT review_id, emp_id, rating FROM Performance_Reviews WHERE bonus IS NULL;",
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
    "title": "Retrieve performance reviews with confirmed bonus payouts",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Performance_Reviews to display review_id, emp_id, rating, and bonus where bonus IS NOT NULL.",
    "requirements": [
      "Query Performance_Reviews.",
      "Filter with bonus IS NOT NULL.",
      "Select review_id, emp_id, rating, bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL;",
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
    "title": "Safeguard bonus calculations using COALESCE for NULL values",
    "topic": "SQL Fundamentals",
    "subtopic": "Literals & NULL Value Handling",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Performance_Reviews displaying review_id, emp_id, rating, and COALESCE(bonus, 0) aliased as final_bonus to replace NULL bonuses with 0.",
    "requirements": [
      "Query Performance_Reviews.",
      "Use COALESCE(bonus, 0) aliased as final_bonus.",
      "Select review_id, emp_id, rating, final_bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "SELECT review_id, emp_id, rating, COALESCE(bonus, 0) AS final_bonus FROM Performance_Reviews;",
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
    "title": "Filter performance reviews with unassigned bonuses",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to retrieve all columns from Performance_Reviews where bonus IS NULL.",
    "requirements": [
      "Query the Performance_Reviews table.",
      "Filter for rows where bonus IS NULL.",
      "Select all columns (*)."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use IS NULL to test for missing values: WHERE bonus IS NULL",
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
    "title": "Retrieve active projects launched during or after 2024",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to retrieve project_id, project_name, budget, and start_date for all projects with status 'Active' and start_date on or after '2024-01-01'.",
    "requirements": [
      "Select project_id, project_name, budget, start_date from Projects.",
      "Filter where status = 'Active' AND start_date >= '2024-01-01'."
    ],
    "tableName": "Projects",
    "hint": "WHERE status = 'Active' AND start_date >= '2024-01-01'",
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
    "title": "Find departments with mid-tier operating budgets",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display dept_name, location, and budget for all departments whose annual budget is between 500000 and 1200000 inclusive.",
    "requirements": [
      "Select dept_name, location, budget from Departments.",
      "Use the BETWEEN operator for 500000 and 1200000."
    ],
    "tableName": "Departments",
    "hint": "WHERE budget BETWEEN 500000 AND 1200000",
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
    "title": "Filter veteran employees from IT or Finance departments",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to retrieve emp_id, emp_name, department, and joining_year for employees in either 'IT' or 'Finance' who joined the company prior to 2020.",
    "requirements": [
      "Select emp_id, emp_name, department, joining_year from Employees.",
      "Filter with department IN ('IT', 'Finance') AND joining_year < 2020."
    ],
    "tableName": "Employees",
    "hint": "WHERE department IN ('IT', 'Finance') AND joining_year < 2020",
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
    "title": "Identify projects in Completed or Planning status",
    "topic": "WHERE & Operators",
    "subtopic": "Nullability & Boolean Truth Values",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display project_id, project_name, and status for projects that are either 'Completed' or 'Planning'.",
    "requirements": [
      "Select project_id, project_name, status from Projects.",
      "Filter with status IN ('Completed', 'Planning')."
    ],
    "tableName": "Projects",
    "hint": "WHERE status IN ('Completed', 'Planning')",
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
    "title": "Filter employees whose names start with P or S",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to select emp_id, emp_name, and department for employees whose name begins with either 'P' or 'S'.",
    "requirements": [
      "Select emp_id, emp_name, department from Employees.",
      "Filter using LIKE with '%' wildcard: emp_name LIKE 'P%' OR emp_name LIKE 'S%'."
    ],
    "tableName": "Employees",
    "hint": "WHERE emp_name LIKE 'P%' OR emp_name LIKE 'S%'",
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
    "title": "Find corporate initiatives focused on Automation",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to retrieve all columns from Projects whose project_name contains the keyword 'Automation'.",
    "requirements": [
      "Select all columns from Projects.",
      "Filter with project_name LIKE '%Automation%'."
    ],
    "tableName": "Projects",
    "hint": "WHERE project_name LIKE '%Automation%'",
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
    "title": "Search reviews highlighting Exceptional delivery or strategy",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to retrieve review_id, emp_id, rating, and feedback from Performance_Reviews where feedback contains 'Exceptional' or 'Outstanding'.",
    "requirements": [
      "Select review_id, emp_id, rating, feedback from Performance_Reviews.",
      "Filter with feedback LIKE '%Exceptional%' OR feedback LIKE '%Outstanding%'."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE feedback LIKE '%Exceptional%' OR feedback LIKE '%Outstanding%'",
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
    "title": "Identify departments without the letter 'e' in their name",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to retrieve dept_id, dept_name, and location from Departments where dept_name does NOT contain the letter 'e' (case-insensitive in SQLite LIKE).",
    "requirements": [
      "Select dept_id, dept_name, location from Departments.",
      "Filter with dept_name NOT LIKE '%e%'."
    ],
    "tableName": "Departments",
    "hint": "WHERE dept_name NOT LIKE '%e%'",
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
    "title": "Find employees with exactly 5-letter names ending in 'a'",
    "topic": "WHERE & Operators",
    "subtopic": "String Matching & Wildcards",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to retrieve emp_id, emp_name, and department from Employees where emp_name has exactly 5 characters and ends with the letter 'a'.",
    "requirements": [
      "Select emp_id, emp_name, department from Employees.",
      "Use four underscore wildcards followed by 'a': emp_name LIKE '____a'."
    ],
    "tableName": "Employees",
    "hint": "WHERE emp_name LIKE '____a'",
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
    "title": "Filter employees with annual gross base pay exceeding 600000",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to retrieve emp_id, emp_name, salary, and (salary * 12) AS annual_salary from Employees where (salary * 12) > 600000.",
    "requirements": [
      "Calculate annual_salary as (salary * 12).",
      "Filter in WHERE with (salary * 12) > 600000.",
      "Select emp_id, emp_name, salary, (salary * 12) AS annual_salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE (salary * 12) > 600000",
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
    "title": "Detect project staffing outliers outside 20 to 35 weekly hours",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employee_Projects to retrieve emp_id, project_id, assigned_role, and hours_allocated where hours_allocated is either strictly less than 20 OR strictly greater than 35.",
    "requirements": [
      "Query Employee_Projects.",
      "Filter with hours_allocated < 20 OR hours_allocated > 35.",
      "Select emp_id, project_id, assigned_role, hours_allocated."
    ],
    "tableName": "Employee_Projects",
    "hint": "WHERE hours_allocated < 20 OR hours_allocated > 35",
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
    "title": "Find South-hub employees earning mid-range salaries",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to select emp_id, emp_name, city, and salary from Employees where city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000.",
    "requirements": [
      "Select emp_id, emp_name, city, salary from Employees.",
      "Filter with city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000."
    ],
    "tableName": "Employees",
    "hint": "WHERE city IN ('Chennai', 'Bengaluru') AND salary BETWEEN 35000 AND 70000",
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
    "title": "Identify high-rated reviews with significant bonus payouts",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to select review_id, emp_id, rating, and bonus from Performance_Reviews where rating >= 4 AND bonus > 15000.",
    "requirements": [
      "Select review_id, emp_id, rating, bonus from Performance_Reviews.",
      "Filter where rating >= 4 AND bonus > 15000."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE rating >= 4 AND bonus > 15000",
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
    "title": "Find experienced young professionals under age 30",
    "topic": "WHERE & Operators",
    "subtopic": "Complex Numeric & Range Conditions",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, age, and experience from Employees where age < 30 AND experience >= 5.",
    "requirements": [
      "Select emp_id, emp_name, age, experience from Employees.",
      "Filter where age < 30 AND experience >= 5."
    ],
    "tableName": "Employees",
    "hint": "WHERE age < 30 AND experience >= 5",
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
    "title": "Evaluate complex department salary thresholds using parentheses",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to retrieve emp_id, emp_name, department, and salary for employees where (department = 'IT' AND salary > 50000) OR (department = 'HR' AND salary > 35000).",
    "requirements": [
      "Select emp_id, emp_name, department, salary from Employees.",
      "Use explicit parentheses to group department-specific salary thresholds."
    ],
    "tableName": "Employees",
    "hint": "WHERE (department = 'IT' AND salary > 50000) OR (department = 'HR' AND salary > 35000)",
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
    "title": "Filter priority initiatives across IT and Finance departments",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to select project_id, project_name, dept_id, and budget from Projects where (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000).",
    "requirements": [
      "Query Projects table.",
      "Filter with (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000).",
      "Select project_id, project_name, dept_id, budget."
    ],
    "tableName": "Projects",
    "hint": "WHERE (dept_id = 1 AND budget >= 250000) OR (dept_id = 3 AND budget >= 300000)",
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
    "title": "Filter well-compensated experienced employees outside Hyderabad",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to retrieve emp_id, emp_name, city, salary, and experience from Employees where city != 'Hyderabad' AND salary > 40000 AND experience >= 3.",
    "requirements": [
      "Select emp_id, emp_name, city, salary, experience from Employees.",
      "Filter where city != 'Hyderabad' AND salary > 40000 AND experience >= 3."
    ],
    "tableName": "Employees",
    "hint": "WHERE city != 'Hyderabad' AND salary > 40000 AND experience >= 3",
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
    "title": "Locate elite 2024 reviews: Top rating OR substantial bonus",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Performance_Reviews to display review_id, emp_id, review_year, rating, and bonus for reviews in 2024 where rating = 5 OR (rating = 4 AND bonus >= 18000).",
    "requirements": [
      "Select review_id, emp_id, review_year, rating, bonus from Performance_Reviews.",
      "Filter with review_year = 2024 AND (rating = 5 OR (rating = 4 AND bonus >= 18000))."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE review_year = 2024 AND (rating = 5 OR (rating = 4 AND bonus >= 18000))",
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
    "title": "Select recent joiners excluding the Sales division",
    "topic": "WHERE & Operators",
    "subtopic": "Multi-Condition Logic & Precedence",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, department, and joining_year for employees who joined between 2020 and 2023 inclusive, but do NOT belong to 'Sales'.",
    "requirements": [
      "Select emp_id, emp_name, department, joining_year from Employees.",
      "Filter with joining_year BETWEEN 2020 AND 2023 AND department != 'Sales'."
    ],
    "tableName": "Employees",
    "hint": "WHERE joining_year BETWEEN 2020 AND 2023 AND department != 'Sales'",
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
    "title": "Filter employees stationed outside major tech headquarters",
    "topic": "WHERE & Operators",
    "subtopic": "Set Membership & Exclusion",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, city, and department for employees stationed in cities NOT IN ('Hyderabad', 'Bengaluru').",
    "requirements": [
      "Select emp_id, emp_name, city, department from Employees.",
      "Filter with city NOT IN ('Hyderabad', 'Bengaluru')."
    ],
    "tableName": "Employees",
    "hint": "WHERE city NOT IN ('Hyderabad', 'Bengaluru')",
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
    "title": "Isolate non-terminal projects still undergoing execution or planning",
    "topic": "WHERE & Operators",
    "subtopic": "Set Membership & Exclusion",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display project_id, project_name, and status from Projects where status NOT IN ('Completed', 'On Hold').",
    "requirements": [
      "Select project_id, project_name, status from Projects.",
      "Filter with status NOT IN ('Completed', 'On Hold')."
    ],
    "tableName": "Projects",
    "hint": "WHERE status NOT IN ('Completed', 'On Hold')",
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
    "title": "Identify polarized performance reviews (underperforming or top tier)",
    "topic": "WHERE & Operators",
    "subtopic": "Set Membership & Exclusion",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display review_id, emp_id, rating, and feedback from Performance_Reviews where rating IN (1, 2, 5).",
    "requirements": [
      "Select review_id, emp_id, rating, feedback from Performance_Reviews.",
      "Filter with rating IN (1, 2, 5)."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE rating IN (1, 2, 5)",
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
    "title": "Sort corporate departments alphabetically by geographical location",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display dept_name, location, and budget from Departments ordered alphabetically by location in ascending order.",
    "requirements": [
      "Select dept_name, location, budget from Departments.",
      "Sort by location ASC."
    ],
    "tableName": "Departments",
    "hint": "ORDER BY location ASC",
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
    "title": "Rank capital initiatives by total budget descending",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display project_id, project_name, and budget from Projects ordered from highest budget to lowest budget.",
    "requirements": [
      "Select project_id, project_name, budget from Projects.",
      "Sort by budget DESC."
    ],
    "tableName": "Projects",
    "hint": "ORDER BY budget DESC",
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
    "title": "Order performance reviews by awarded bonus payout descending",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display review_id, emp_id, rating, and bonus from Performance_Reviews where bonus IS NOT NULL ordered by bonus in descending order.",
    "requirements": [
      "Filter where bonus IS NOT NULL.",
      "Select review_id, emp_id, rating, bonus.",
      "Order results by bonus DESC."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE bonus IS NOT NULL ORDER BY bonus DESC",
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
    "title": "List project staff allocations by allocated weekly hours ascending",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display emp_id, project_id, assigned_role, and hours_allocated from Employee_Projects ordered by hours_allocated in ascending order.",
    "requirements": [
      "Select emp_id, project_id, assigned_role, hours_allocated from Employee_Projects.",
      "Sort by hours_allocated ASC."
    ],
    "tableName": "Employee_Projects",
    "hint": "ORDER BY hours_allocated ASC",
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
    "title": "Organize staff by department ascending, then salary descending",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, department, and salary from Employees ordered primarily by department in ascending order, and secondarily by salary in descending order.",
    "requirements": [
      "Select emp_id, emp_name, department, salary from Employees.",
      "Order by department ASC, salary DESC."
    ],
    "tableName": "Employees",
    "hint": "ORDER BY department ASC, salary DESC",
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
    "title": "Sort performance reviews by rating descending, then year ascending",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to select review_id, emp_id, rating, and review_year from Performance_Reviews ordered first by rating descending, then by review_year ascending.",
    "requirements": [
      "Select review_id, emp_id, rating, review_year from Performance_Reviews.",
      "Order by rating DESC, review_year ASC."
    ],
    "tableName": "Performance_Reviews",
    "hint": "ORDER BY rating DESC, review_year ASC",
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
    "title": "Group initiatives by status ascending, then start date descending",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display project_id, project_name, status, and start_date from Projects ordered by status in ascending order, then by start_date in descending order.",
    "requirements": [
      "Select project_id, project_name, status, start_date from Projects.",
      "Order by status ASC, start_date DESC."
    ],
    "tableName": "Projects",
    "hint": "ORDER BY status ASC, start_date DESC",
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
    "title": "Triple-level sorting: City ascending, experience descending, name ascending",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, city, and experience from Employees ordered by city ASC, then experience DESC, and finally emp_name ASC as a tie-breaker.",
    "requirements": [
      "Select emp_id, emp_name, city, experience from Employees.",
      "Order by city ASC, experience DESC, emp_name ASC."
    ],
    "tableName": "Employees",
    "hint": "ORDER BY city ASC, experience DESC, emp_name ASC",
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
    "title": "Retrieve the top 3 highest-funded corporate initiatives",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display project_id, project_name, and budget for the top 3 projects having the highest budget.",
    "requirements": [
      "Select project_id, project_name, budget from Projects.",
      "Order by budget DESC.",
      "Limit the output to 3 rows."
    ],
    "tableName": "Projects",
    "hint": "ORDER BY budget DESC LIMIT 3",
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
    "title": "Implement database pagination: Page 2 of top salaried employees",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to fetch Page 2 of employees ordered by salary descending (Page size: 5, Offset: 5). Display emp_id, emp_name, department, and salary.",
    "requirements": [
      "Select emp_id, emp_name, department, salary from Employees.",
      "Order by salary DESC.",
      "Use LIMIT 5 OFFSET 5."
    ],
    "tableName": "Employees",
    "hint": "ORDER BY salary DESC LIMIT 5 OFFSET 5",
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
    "title": "Pagination Page 2 for projects sorted by ID ascending",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to retrieve 3 projects starting after the third project, ordered by project_id ascending.",
    "requirements": [
      "Select project_id, project_name, status from Projects.",
      "Order by project_id ASC.",
      "Use LIMIT 3 OFFSET 3."
    ],
    "tableName": "Projects",
    "hint": "ORDER BY project_id ASC LIMIT 3 OFFSET 3",
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
    "title": "Identify the 2 lowest-capacity project assignments",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display emp_id, project_id, assigned_role, and hours_allocated for the 2 project assignments with the lowest hours allocated. Use emp_id ascending as tie-breaker.",
    "requirements": [
      "Select emp_id, project_id, assigned_role, hours_allocated from Employee_Projects.",
      "Order by hours_allocated ASC, emp_id ASC.",
      "Limit the result to 2 records."
    ],
    "tableName": "Employee_Projects",
    "hint": "ORDER BY hours_allocated ASC, emp_id ASC LIMIT 2",
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
    "title": "Order performance reviews placing NULL bonuses at the bottom",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display review_id, emp_id, rating, and bonus from Performance_Reviews ordered by bonus descending, but forcing NULL bonuses to appear at the end.",
    "requirements": [
      "Select review_id, emp_id, rating, bonus from Performance_Reviews.",
      "Order with CASE WHEN bonus IS NULL THEN 1 ELSE 0 END ASC, bonus DESC."
    ],
    "tableName": "Performance_Reviews",
    "hint": "ORDER BY CASE WHEN bonus IS NULL THEN 1 ELSE 0 END, bonus DESC",
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
    "title": "Sort employees by computed annual compensation descending",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, salary, and (salary * 12) AS annual_salary from Employees ordered by (salary * 12) in descending order.",
    "requirements": [
      "Compute annual_salary as (salary * 12).",
      "Order by (salary * 12) DESC.",
      "Select emp_id, emp_name, salary, (salary * 12) AS annual_salary."
    ],
    "tableName": "Employees",
    "hint": "ORDER BY (salary * 12) DESC",
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
    "title": "Rank top 5 employees by salary-to-experience efficiency ratio",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, salary, experience, and ROUND(salary / experience, 2) AS pay_per_year_exp for employees with experience > 0, ordered by (salary / experience) descending, limited to 5 records.",
    "requirements": [
      "Filter where experience > 0.",
      "Calculate ROUND(salary / experience, 2) AS pay_per_year_exp.",
      "Order by (salary / experience) DESC.",
      "LIMIT 5."
    ],
    "tableName": "Employees",
    "hint": "WHERE experience > 0 ORDER BY (salary / experience) DESC LIMIT 5",
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
    "title": "Produce an enterprise payroll statistical overview",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query from Employees to display MIN(salary) AS min_sal, MAX(salary) AS max_sal, ROUND(AVG(salary), 2) AS avg_sal, and SUM(salary) AS total_payroll across the entire workforce.",
    "requirements": [
      "Query the Employees table.",
      "Calculate min_sal, max_sal, avg_sal (rounded to 2 decimal places), and total_payroll.",
      "Return a single summary record."
    ],
    "tableName": "Employees",
    "hint": "SELECT MIN(salary) AS min_sal, MAX(salary) AS max_sal, ROUND(AVG(salary), 2) AS avg_sal, SUM(salary) AS total_payroll FROM Employees;",
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
    "title": "Calculate total and average operating budgets across all departments",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query from Departments to display SUM(budget) AS total_dept_budget, ROUND(AVG(budget), 2) AS avg_dept_budget, and MAX(budget) AS max_dept_budget.",
    "requirements": [
      "Query Departments table.",
      "Calculate total_dept_budget, avg_dept_budget (rounded to 2 decimals), and max_dept_budget.",
      "Return one row."
    ],
    "tableName": "Departments",
    "hint": "SELECT SUM(budget) AS total_dept_budget, ROUND(AVG(budget), 2) AS avg_dept_budget, MAX(budget) AS max_dept_budget FROM Departments;",
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
    "title": "Audit performance bonuses: Total recipient count, pool, and average",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Performance_Reviews to display COUNT(bonus) AS bonus_count, SUM(bonus) AS total_bonus_payout, and ROUND(AVG(bonus), 2) AS avg_bonus_payout.",
    "requirements": [
      "Query Performance_Reviews.",
      "Use COUNT(bonus) to ignore NULL bonuses.",
      "Calculate total_bonus_payout and avg_bonus_payout rounded to 2 decimal places."
    ],
    "tableName": "Performance_Reviews",
    "hint": "SELECT COUNT(bonus) AS bonus_count, SUM(bonus) AS total_bonus_payout, ROUND(AVG(bonus), 2) AS avg_bonus_payout FROM Performance_Reviews;",
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
    "title": "Calculate total capital committed to active projects",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Projects to count the number of active projects and calculate their total combined budget. Alias as active_projects and total_active_budget.",
    "requirements": [
      "Filter where status = 'Active'.",
      "Calculate COUNT(*) AS active_projects and SUM(budget) AS total_active_budget."
    ],
    "tableName": "Projects",
    "hint": "WHERE status = 'Active'",
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
    "title": "Compute enterprise weekly project hours and average workload",
    "topic": "Aggregate Functions",
    "subtopic": "Multi-Metric Aggregate Summaries",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employee_Projects to calculate SUM(hours_allocated) AS total_weekly_hours and ROUND(AVG(hours_allocated), 2) AS avg_weekly_hours across all assignments.",
    "requirements": [
      "Query Employee_Projects table.",
      "Alias aggregates as total_weekly_hours and avg_weekly_hours.",
      "Round average to 2 decimal places."
    ],
    "tableName": "Employee_Projects",
    "hint": "SELECT SUM(hours_allocated) AS total_weekly_hours, ROUND(AVG(hours_allocated), 2) AS avg_weekly_hours FROM Employee_Projects;",
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
    "title": "Count IT vs Non-IT staff in a single row using conditional aggregation",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display the count of IT staff aliased as it_count and non-IT staff aliased as non_it_count in a single record.",
    "requirements": [
      "Use SUM(CASE WHEN department = 'IT' THEN 1 ELSE 0 END) AS it_count.",
      "Use SUM(CASE WHEN department != 'IT' THEN 1 ELSE 0 END) AS non_it_count.",
      "Query from Employees."
    ],
    "tableName": "Employees",
    "hint": "SUM(CASE WHEN department = 'IT' THEN 1 ELSE 0 END) AS it_count",
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
    "title": "Compare payroll distribution between senior and junior workforce",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to calculate total salary paid to experienced employees (experience >= 5) as senior_payroll, and to junior employees (experience < 5) as junior_payroll.",
    "requirements": [
      "Use SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END) AS senior_payroll.",
      "Use SUM(CASE WHEN experience < 5 THEN salary ELSE 0 END) AS junior_payroll.",
      "Return a single summary row."
    ],
    "tableName": "Employees",
    "hint": "SUM(CASE WHEN experience >= 5 THEN salary ELSE 0 END) AS senior_payroll",
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
    "title": "Tally top-tier ratings versus low/mid-tier reviews",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Performance_Reviews to count reviews with rating = 5 as top_ratings, and reviews with rating <= 3 as low_or_mid_ratings.",
    "requirements": [
      "Query Performance_Reviews.",
      "Use SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS top_ratings.",
      "Use SUM(CASE WHEN rating <= 3 THEN 1 ELSE 0 END) AS low_or_mid_ratings."
    ],
    "tableName": "Performance_Reviews",
    "hint": "SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS top_ratings",
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
    "title": "Generate project pipeline status distribution using CASE aggregates",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Projects to display the counts of completed, active, and planning projects as completed_count, active_count, and planning_count.",
    "requirements": [
      "Use SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count.",
      "Use SUM(CASE WHEN status = 'Active' THEN 1 ELSE 0 END) AS active_count.",
      "Use SUM(CASE WHEN status = 'Planning' THEN 1 ELSE 0 END) AS planning_count."
    ],
    "tableName": "Projects",
    "hint": "SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END)",
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
    "title": "Compute payroll expenditure split: Hyderabad HQ vs Other locations",
    "topic": "Aggregate Functions",
    "subtopic": "Conditional Aggregation & CASE in Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display total payroll for Hyderabad base as hyd_payroll and total payroll for all other cities as other_payroll.",
    "requirements": [
      "SUM(CASE WHEN city = 'Hyderabad' THEN salary ELSE 0 END) AS hyd_payroll.",
      "SUM(CASE WHEN city != 'Hyderabad' THEN salary ELSE 0 END) AS other_payroll.",
      "Query Employees."
    ],
    "tableName": "Employees",
    "hint": "SUM(CASE WHEN city = 'Hyderabad' THEN salary ELSE 0 END) AS hyd_payroll",
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
    "title": "Count unique operating departments, office cities, and total headcount",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query from Employees to display COUNT(DISTINCT department) AS unique_departments, COUNT(DISTINCT city) AS unique_cities, and COUNT(*) AS total_employees.",
    "requirements": [
      "Query Employees table.",
      "Use COUNT(DISTINCT ...) for department and city.",
      "Use COUNT(*) for total_employees."
    ],
    "tableName": "Employees",
    "hint": "SELECT COUNT(DISTINCT department) AS unique_departments, COUNT(DISTINCT city) AS unique_cities, COUNT(*) AS total_employees FROM Employees;",
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
    "title": "Determine the exact count of unique employees assigned to initiatives",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employee_Projects to calculate COUNT(DISTINCT emp_id) AS staffed_employees.",
    "requirements": [
      "Query Employee_Projects table.",
      "Use COUNT(DISTINCT emp_id) aliased as staffed_employees."
    ],
    "tableName": "Employee_Projects",
    "hint": "SELECT COUNT(DISTINCT emp_id) AS staffed_employees FROM Employee_Projects;",
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
    "title": "Count the number of distinct review years documented in the system",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Performance_Reviews to return COUNT(DISTINCT review_year) AS evaluated_years.",
    "requirements": [
      "Query Performance_Reviews.",
      "Count distinct review_year values as evaluated_years."
    ],
    "tableName": "Performance_Reviews",
    "hint": "SELECT COUNT(DISTINCT review_year) AS evaluated_years FROM Performance_Reviews;",
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
    "title": "Count unique project lifecycle states currently in use",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Projects to display COUNT(DISTINCT status) AS unique_statuses.",
    "requirements": [
      "Query Projects table.",
      "Select COUNT(DISTINCT status) AS unique_statuses."
    ],
    "tableName": "Projects",
    "hint": "SELECT COUNT(DISTINCT status) AS unique_statuses FROM Projects;",
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
    "title": "Calculate the average of distinct salary tiers to detect pay variance",
    "topic": "Aggregate Functions",
    "subtopic": "Distinct Value Aggregations & Deduplication",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary.",
    "requirements": [
      "Query Employees.",
      "Compute ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT ROUND(AVG(DISTINCT salary), 2) AS avg_unique_salary FROM Employees;",
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
    "title": "Summarize total payroll and average experience for the Chennai office",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to calculate SUM(salary) AS chennai_payroll and ROUND(AVG(experience), 2) AS avg_chennai_exp for employees stationed in 'Chennai'.",
    "requirements": [
      "Filter with city = 'Chennai'.",
      "Calculate SUM(salary) AS chennai_payroll.",
      "Calculate ROUND(AVG(experience), 2) AS avg_chennai_exp."
    ],
    "tableName": "Employees",
    "hint": "WHERE city = 'Chennai'",
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
    "title": "Determine the bonus spread for the 2024 appraisal cycle",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Performance_Reviews to display MAX(bonus) AS max_2024_bonus and MIN(bonus) AS min_2024_bonus for reviews where review_year = 2024.",
    "requirements": [
      "Filter where review_year = 2024.",
      "Select MAX(bonus) AS max_2024_bonus and MIN(bonus) AS min_2024_bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE review_year = 2024",
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
    "title": "Compute the internal compensation spread in the IT department",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to calculate (MAX(salary) - MIN(salary)) AS it_salary_range for employees in the 'IT' department.",
    "requirements": [
      "Filter where department = 'IT'.",
      "Calculate (MAX(salary) - MIN(salary)) AS it_salary_range."
    ],
    "tableName": "Employees",
    "hint": "SELECT (MAX(salary) - MIN(salary)) AS it_salary_range FROM Employees WHERE department = 'IT';",
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
    "title": "Count high-earning recent additions hired after 2020",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display COUNT(*) AS high_earning_recent_joiners for employees who joined after 2020 with salary > 40000.",
    "requirements": [
      "Filter where joining_year > 2020 AND salary > 40000.",
      "Count matching records as high_earning_recent_joiners."
    ],
    "tableName": "Employees",
    "hint": "WHERE joining_year > 2020 AND salary > 40000",
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
    "title": "Calculate total completed initiative investment",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Projects to display SUM(budget) AS completed_project_spend for projects having status = 'Completed'.",
    "requirements": [
      "Filter where status = 'Completed'.",
      "Calculate SUM(budget) AS completed_project_spend."
    ],
    "tableName": "Projects",
    "hint": "WHERE status = 'Completed'",
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
    "title": "Measure demographic profile of HR and Finance divisions",
    "topic": "Aggregate Functions",
    "subtopic": "Filtered Aggregations & Boundary Metrics",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to calculate ROUND(AVG(age), 1) AS avg_age and ROUND(AVG(experience), 1) AS avg_exp for staff in 'HR' or 'Finance'.",
    "requirements": [
      "Filter where department IN ('HR', 'Finance').",
      "Calculate ROUND(AVG(age), 1) AS avg_age and ROUND(AVG(experience), 1) AS avg_exp."
    ],
    "tableName": "Employees",
    "hint": "WHERE department IN ('HR', 'Finance')",
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
    "title": "Segment workforce distribution across department and branch city",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display department, city, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_salary grouped by both department and city.",
    "requirements": [
      "Group by department, city.",
      "Calculate COUNT(*) AS emp_count and ROUND(AVG(salary), 2) AS avg_salary.",
      "Select department, city, emp_count, avg_salary."
    ],
    "tableName": "Employees",
    "hint": "GROUP BY department, city",
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
    "title": "Analyze project count and budget commitments by department and status",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Projects to display dept_id, status, COUNT(*) AS project_count, and SUM(budget) AS total_budget grouped by dept_id and status.",
    "requirements": [
      "Query Projects table.",
      "Group by dept_id, status.",
      "Select dept_id, status, COUNT(*) AS project_count, SUM(budget) AS total_budget."
    ],
    "tableName": "Projects",
    "hint": "GROUP BY dept_id, status",
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
    "title": "Cross-tabulate appraisal rating counts and bonus totals by year",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Performance_Reviews to display review_year, rating, COUNT(*) AS review_count, and COALESCE(SUM(bonus), 0) AS total_bonuses grouped by review_year and rating.",
    "requirements": [
      "Group by review_year, rating.",
      "Select review_year, rating, COUNT(*) AS review_count, COALESCE(SUM(bonus), 0) AS total_bonuses."
    ],
    "tableName": "Performance_Reviews",
    "hint": "GROUP BY review_year, rating",
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
    "title": "Aggregate staffing headcounts and hours by project and assigned role",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employee_Projects to display project_id, assigned_role, COUNT(*) AS role_staff_count, and SUM(hours_allocated) AS total_role_hours grouped by project_id and assigned_role.",
    "requirements": [
      "Query Employee_Projects.",
      "Group by project_id, assigned_role.",
      "Select project_id, assigned_role, COUNT(*) AS role_staff_count, SUM(hours_allocated) AS total_role_hours."
    ],
    "tableName": "Employee_Projects",
    "hint": "GROUP BY project_id, assigned_role",
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
    "title": "Map annual hiring volume across departments",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display joining_year, department, and COUNT(*) AS hires_count grouped by joining_year and department.",
    "requirements": [
      "Select joining_year, department, COUNT(*) AS hires_count from Employees.",
      "Group by joining_year, department."
    ],
    "tableName": "Employees",
    "hint": "GROUP BY joining_year, department",
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
    "title": "Cluster employee experience distributions within branch locations",
    "topic": "GROUP BY",
    "subtopic": "Multi-Column Grouping",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display city, experience, and COUNT(*) AS head_count grouped by city and experience.",
    "requirements": [
      "Query Employees.",
      "Group by city, experience.",
      "Select city, experience, COUNT(*) AS head_count."
    ],
    "tableName": "Employees",
    "hint": "GROUP BY city, experience",
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
    "title": "Measure departmental salary disparities (minimum, maximum, and spread)",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display department, MIN(salary) AS min_salary, MAX(salary) AS max_salary, and (MAX(salary) - MIN(salary)) AS salary_spread grouped by department.",
    "requirements": [
      "Group by department.",
      "Calculate MIN(salary) AS min_salary, MAX(salary) AS max_salary, (MAX(salary) - MIN(salary)) AS salary_spread.",
      "Select department, min_salary, max_salary, salary_spread."
    ],
    "tableName": "Employees",
    "hint": "GROUP BY department",
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
    "title": "Summarize staffing footprint and weekly hours committed per project",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employee_Projects to display project_id, COUNT(DISTINCT emp_id) AS assigned_staff, SUM(hours_allocated) AS total_hours, and ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member grouped by project_id.",
    "requirements": [
      "Group by project_id.",
      "Select project_id, COUNT(DISTINCT emp_id) AS assigned_staff, SUM(hours_allocated) AS total_hours, ROUND(AVG(hours_allocated), 2) AS avg_hours_per_member."
    ],
    "tableName": "Employee_Projects",
    "hint": "GROUP BY project_id",
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
    "title": "Evaluate individual employee appraisal track records",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Performance_Reviews to display emp_id, COUNT(*) AS total_reviews, ROUND(AVG(rating), 2) AS avg_rating, and COALESCE(MAX(bonus), 0) AS highest_bonus grouped by emp_id.",
    "requirements": [
      "Group by emp_id.",
      "Select emp_id, COUNT(*) AS total_reviews, ROUND(AVG(rating), 2) AS avg_rating, COALESCE(MAX(bonus), 0) AS highest_bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "GROUP BY emp_id",
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
    "title": "Analyze city-level payroll totals and high-earner counts",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display city, COUNT(*) AS total_staff, SUM(salary) AS total_payroll, and SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners_count grouped by city.",
    "requirements": [
      "Group by city.",
      "Calculate total_staff, total_payroll, and high_earners_count.",
      "Select city, total_staff, total_payroll, high_earners_count."
    ],
    "tableName": "Employees",
    "hint": "GROUP BY city",
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
    "title": "Compare project investment profiles by project lifecycle status",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Projects to display status, COUNT(*) AS projects_count, MIN(budget) AS min_budget, MAX(budget) AS max_budget, and ROUND(AVG(budget), 2) AS avg_budget grouped by status.",
    "requirements": [
      "Group by status.",
      "Select status, COUNT(*) AS projects_count, MIN(budget) AS min_budget, MAX(budget) AS max_budget, ROUND(AVG(budget), 2) AS avg_budget."
    ],
    "tableName": "Projects",
    "hint": "GROUP BY status",
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
    "title": "Aggregate department counts and cumulative regional budgets by headquarters city",
    "topic": "GROUP BY",
    "subtopic": "Complex Aggregations per Category",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Departments to display location, COUNT(*) AS dept_count, and SUM(budget) AS total_regional_budget grouped by location.",
    "requirements": [
      "Group by location.",
      "Select location, COUNT(*) AS dept_count, SUM(budget) AS total_regional_budget."
    ],
    "tableName": "Departments",
    "hint": "GROUP BY location",
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
    "title": "Group modern cohort employees hired after 2020 by department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display department, COUNT(*) AS recent_hires, and ROUND(AVG(salary), 2) AS avg_recent_salary for employees where joining_year > 2020 grouped by department.",
    "requirements": [
      "Filter with WHERE joining_year > 2020.",
      "Group by department.",
      "Select department, recent_hires, avg_recent_salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE joining_year > 2020 GROUP BY department",
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
    "title": "Group incomplete corporate projects by department",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Projects to display dept_id, COUNT(*) AS pending_projects, and SUM(budget) AS pending_budget for projects where status != 'Completed' grouped by dept_id.",
    "requirements": [
      "Filter where status != 'Completed'.",
      "Group by dept_id.",
      "Select dept_id, COUNT(*) AS pending_projects, SUM(budget) AS pending_budget."
    ],
    "tableName": "Projects",
    "hint": "WHERE status != 'Completed' GROUP BY dept_id",
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
    "title": "Count high-rating performance reviews (rating >= 4) per reviewed employee",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Performance_Reviews to display emp_id, COUNT(*) AS top_reviews, and SUM(bonus) AS total_merit_bonus for reviews where rating >= 4 grouped by emp_id.",
    "requirements": [
      "Filter where rating >= 4.",
      "Group by emp_id.",
      "Select emp_id, COUNT(*) AS top_reviews, SUM(bonus) AS total_merit_bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE rating >= 4 GROUP BY emp_id",
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
    "title": "Group well-compensated staff (salary >= 40000) by city",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display city, COUNT(*) AS mid_to_senior_count, and ROUND(AVG(experience), 2) AS avg_experience for employees with salary >= 40000 grouped by city.",
    "requirements": [
      "Filter where salary >= 40000.",
      "Group by city.",
      "Select city, COUNT(*) AS mid_to_senior_count, ROUND(AVG(experience), 2) AS avg_experience."
    ],
    "tableName": "Employees",
    "hint": "WHERE salary >= 40000 GROUP BY city",
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
    "title": "Count leadership and managerial assignments per project",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employee_Projects to display project_id and COUNT(*) AS leadership_roles for assignments where assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%' grouped by project_id.",
    "requirements": [
      "Filter where assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%'.",
      "Group by project_id.",
      "Select project_id, COUNT(*) AS leadership_roles."
    ],
    "tableName": "Employee_Projects",
    "hint": "WHERE assigned_role LIKE '%Lead%' OR assigned_role LIKE '%Manager%' OR assigned_role LIKE '%Director%' GROUP BY project_id",
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
    "title": "Analyze young talent profiles (under age 30) across departments",
    "topic": "GROUP BY",
    "subtopic": "Filtered Grouping (WHERE before GROUP BY)",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display department, COUNT(*) AS young_talent_count, and MIN(salary) AS min_young_salary for employees where age < 30 grouped by department.",
    "requirements": [
      "Filter where age < 30.",
      "Group by department.",
      "Select department, COUNT(*) AS young_talent_count, MIN(salary) AS min_young_salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE age < 30 GROUP BY department",
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
    "title": "Group employees into categorical compensation tiers using CASE",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to categorize employees into three salary tiers: 'Entry' (< 35000), 'Mid' (35000-60000), and 'Executive' (> 60000). Display the tier as salary_tier and the count of employees as tier_count.",
    "requirements": [
      "Use CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END AS salary_tier.",
      "Group by the identical CASE expression.",
      "Count employees in each tier as tier_count."
    ],
    "tableName": "Employees",
    "hint": "GROUP BY CASE WHEN salary < 35000 THEN 'Entry' WHEN salary <= 60000 THEN 'Mid' ELSE 'Executive' END",
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
    "title": "Group employees by seniority bands and calculate average compensation",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to segment employees into experience brackets: 'Junior' (< 3 yrs), 'Intermediate' (3 to 6 yrs), and 'Senior' (> 6 yrs). Display experience_band, COUNT(*) AS count_in_band, and ROUND(AVG(salary), 2) AS avg_band_salary.",
    "requirements": [
      "Use CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END AS experience_band.",
      "Group by the CASE expression.",
      "Calculate count_in_band and avg_band_salary."
    ],
    "tableName": "Employees",
    "hint": "GROUP BY CASE WHEN experience < 3 THEN 'Junior' WHEN experience <= 6 THEN 'Intermediate' ELSE 'Senior' END",
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
    "title": "Partition performance reviews by bonus availability status",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Performance_Reviews to categorize reviews as 'Bonus Awarded' or 'No Bonus Awarded'. Display bonus_status, COUNT(*) AS reviews_count, and ROUND(AVG(rating), 2) AS avg_group_rating.",
    "requirements": [
      "Use CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END AS bonus_status.",
      "Group by the CASE expression.",
      "Select bonus_status, reviews_count, avg_group_rating."
    ],
    "tableName": "Performance_Reviews",
    "hint": "GROUP BY CASE WHEN bonus IS NOT NULL THEN 'Bonus Awarded' ELSE 'No Bonus Awarded' END",
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
    "title": "Group initiatives by investment scale (Small, Medium, Enterprise)",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Projects to group projects into budget tiers: 'Small' (< 150000), 'Medium' (150000 to 350000), and 'Enterprise' (> 350000). Display budget_tier and COUNT(*) AS project_count.",
    "requirements": [
      "Use CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END AS budget_tier.",
      "Group by the same expression.",
      "Select budget_tier, COUNT(*) AS project_count."
    ],
    "tableName": "Projects",
    "hint": "GROUP BY CASE WHEN budget < 150000 THEN 'Small' WHEN budget <= 350000 THEN 'Medium' ELSE 'Enterprise' END",
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
    "title": "Group employees by the character length of their names",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display LENGTH(emp_name) AS name_length and COUNT(*) AS employee_count grouped by LENGTH(emp_name).",
    "requirements": [
      "Use LENGTH(emp_name) AS name_length.",
      "Group by LENGTH(emp_name).",
      "Select name_length, COUNT(*) AS employee_count."
    ],
    "tableName": "Employees",
    "hint": "GROUP BY LENGTH(emp_name)",
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
    "title": "Compare total payroll between legacy and recent employee hiring cohorts",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to group employees into 'Pre-2022' and '2022-and-Later' cohorts based on joining_year. Display cohort_name, COUNT(*) AS head_count, and SUM(salary) AS total_cohort_payroll.",
    "requirements": [
      "Use CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END AS cohort_name.",
      "Group by this CASE expression.",
      "Select cohort_name, COUNT(*) AS head_count, SUM(salary) AS total_cohort_payroll."
    ],
    "tableName": "Employees",
    "hint": "GROUP BY CASE WHEN joining_year < 2022 THEN 'Pre-2022' ELSE '2022-and-Later' END",
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
    "title": "Categorize project staffing commitments by part-time versus full-time load",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employee_Projects to classify assignments as 'Part-Time' (< 25 hrs) or 'Full-Time' (>= 25 hrs). Display workload_type, COUNT(*) AS total_assignments, and SUM(hours_allocated) AS sum_weekly_hours.",
    "requirements": [
      "Use CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END AS workload_type.",
      "Group by the CASE expression.",
      "Select workload_type, COUNT(*) AS total_assignments, SUM(hours_allocated) AS sum_weekly_hours."
    ],
    "tableName": "Employee_Projects",
    "hint": "GROUP BY CASE WHEN hours_allocated < 25 THEN 'Part-Time' ELSE 'Full-Time' END",
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
    "title": "Cluster enterprise departments into primary and secondary capital tiers",
    "topic": "GROUP BY",
    "subtopic": "Expressions & Transformations in GROUP BY",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Departments to group departments into 'Mega Budget' (>= 1000000) and 'Standard Budget' (< 1000000). Display budget_tier, COUNT(*) AS dept_count, and SUM(budget) AS combined_budget.",
    "requirements": [
      "Use CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END AS budget_tier.",
      "Group by this CASE expression.",
      "Select budget_tier, COUNT(*) AS dept_count, SUM(budget) AS combined_budget."
    ],
    "tableName": "Departments",
    "hint": "GROUP BY CASE WHEN budget >= 1000000 THEN 'Mega Budget' ELSE 'Standard Budget' END",
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
    "title": "Filter departments meeting both headcount and compensation benchmarks",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display department, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_salary grouped by department, having at least 3 employees AND an average salary greater than 45000.",
    "requirements": [
      "Group by department.",
      "Filter groups with HAVING COUNT(*) >= 3 AND AVG(salary) > 45000.",
      "Select department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary."
    ],
    "tableName": "Employees",
    "hint": "HAVING COUNT(*) >= 3 AND AVG(salary) > 45000",
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
    "title": "Identify high-commitment initiatives with multiple team members",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employee_Projects to display project_id, COUNT(DISTINCT emp_id) AS staff_count, and SUM(hours_allocated) AS total_hours grouped by project_id, having at least 2 distinct staff members AND a total weekly hour commitment of at least 40 hours.",
    "requirements": [
      "Group by project_id.",
      "Filter groups with HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40.",
      "Select project_id, staff_count, total_hours."
    ],
    "tableName": "Employee_Projects",
    "hint": "HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40",
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
    "title": "Filter consistently high-performing employees with multiple evaluations",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Performance_Reviews to display emp_id, COUNT(*) AS review_count, and ROUND(AVG(rating), 2) AS avg_rating grouped by emp_id, having at least 2 reviews AND an average rating of at least 4.0.",
    "requirements": [
      "Group by emp_id.",
      "Filter groups with HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0.",
      "Select emp_id, review_count, avg_rating."
    ],
    "tableName": "Performance_Reviews",
    "hint": "HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0",
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
    "title": "Identify major regional hubs having substantial headcount and payroll",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display city, COUNT(*) AS emp_count, and SUM(salary) AS total_payroll grouped by city, having at least 4 employees AND total payroll strictly greater than 200000.",
    "requirements": [
      "Group by city.",
      "Filter groups with HAVING COUNT(*) >= 4 AND SUM(salary) > 200000.",
      "Select city, emp_count, total_payroll."
    ],
    "tableName": "Employees",
    "hint": "HAVING COUNT(*) >= 4 AND SUM(salary) > 200000",
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
    "title": "Filter post-2018 employee cohorts by departmental representation",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display department and COUNT(*) AS recent_count for employees who joined after 2018, grouped by department, having at least 3 such recent employees.",
    "requirements": [
      "Filter rows first using WHERE joining_year > 2018.",
      "Group by department.",
      "Filter groups using HAVING COUNT(*) >= 3.",
      "Select department, recent_count."
    ],
    "tableName": "Employees",
    "hint": "WHERE joining_year > 2018 GROUP BY department HAVING COUNT(*) >= 3",
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
    "title": "Find departments with high unfinalized project commitments",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Projects to display dept_id, COUNT(*) AS pending_projects, and SUM(budget) AS total_pending_budget for projects where status != 'Completed', grouped by dept_id, having total_pending_budget >= 300000.",
    "requirements": [
      "Filter rows with WHERE status != 'Completed'.",
      "Group by dept_id.",
      "Filter groups with HAVING SUM(budget) >= 300000.",
      "Select dept_id, pending_projects, total_pending_budget."
    ],
    "tableName": "Projects",
    "hint": "WHERE status != 'Completed' GROUP BY dept_id HAVING SUM(budget) >= 300000",
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
    "title": "Find employees averaging high bonus payouts in the 2024 appraisal cycle",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Performance_Reviews to display emp_id and ROUND(AVG(bonus), 2) AS avg_2024_bonus for reviews where review_year = 2024, grouped by emp_id, having AVG(bonus) > 15000.",
    "requirements": [
      "Filter rows with WHERE review_year = 2024.",
      "Group by emp_id.",
      "Filter groups with HAVING AVG(bonus) > 15000.",
      "Select emp_id, avg_2024_bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE review_year = 2024 GROUP BY emp_id HAVING AVG(bonus) > 15000",
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
    "title": "Locate office locations where seasoned staff average premium compensation",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display city, COUNT(*) AS seasoned_staff, and ROUND(AVG(salary), 2) AS avg_seasoned_salary for employees with experience >= 3, grouped by city, having AVG(salary) > 50000.",
    "requirements": [
      "Filter with WHERE experience >= 3.",
      "Group by city.",
      "Filter with HAVING AVG(salary) > 50000.",
      "Select city, seasoned_staff, avg_seasoned_salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE experience >= 3 GROUP BY city HAVING AVG(salary) > 50000",
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
    "title": "Filter departments with boutique headcounts OR premium salary averages",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display department, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_salary grouped by department, having COUNT(*) <= 3 OR AVG(salary) > 65000.",
    "requirements": [
      "Group by department.",
      "Filter groups with HAVING COUNT(*) <= 3 OR AVG(salary) > 65000.",
      "Select department, emp_count, avg_salary."
    ],
    "tableName": "Employees",
    "hint": "HAVING COUNT(*) <= 3 OR AVG(salary) > 65000",
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
    "title": "Detect initiatives with either lean capacity or expansive team rosters",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employee_Projects to display project_id, COUNT(DISTINCT emp_id) AS staff_count, and SUM(hours_allocated) AS total_hours grouped by project_id, having SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4.",
    "requirements": [
      "Group by project_id.",
      "Filter groups with HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4.",
      "Select project_id, staff_count, total_hours."
    ],
    "tableName": "Employee_Projects",
    "hint": "HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4",
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
    "title": "Filter review years by total payouts or exceptional rating averages",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Performance_Reviews to display review_year, COUNT(*) AS total_reviews, COALESCE(SUM(bonus), 0) AS total_bonus, and ROUND(AVG(rating), 2) AS avg_rating grouped by review_year, having SUM(bonus) > 100000 OR AVG(rating) >= 4.0.",
    "requirements": [
      "Group by review_year.",
      "Filter groups with HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0.",
      "Select review_year, total_reviews, total_bonus, avg_rating."
    ],
    "tableName": "Performance_Reviews",
    "hint": "HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0",
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
    "title": "Find cities where lowest pay is at least 30000 and top pay exceeds 70000",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display city, MIN(salary) AS min_sal, and MAX(salary) AS max_sal grouped by city, having MIN(salary) >= 30000 AND MAX(salary) > 70000.",
    "requirements": [
      "Group by city.",
      "Filter with HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000.",
      "Select city, min_sal, max_sal."
    ],
    "tableName": "Employees",
    "hint": "HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000",
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
    "title": "Identify the top 2 highest-paying departments with at least 3 employees",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display department, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_sal grouped by department, having at least 3 employees, ordered by avg_sal descending, limited to 2 departments.",
    "requirements": [
      "Group by department.",
      "Filter with HAVING COUNT(*) >= 3.",
      "Order by avg_sal DESC.",
      "Limit to 2 rows."
    ],
    "tableName": "Employees",
    "hint": "HAVING COUNT(*) >= 3 ORDER BY avg_sal DESC LIMIT 2",
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
    "title": "Find the single most labor-intensive initiative with 3 or more team members",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employee_Projects to display project_id, COUNT(DISTINCT emp_id) AS staff_count, and SUM(hours_allocated) AS total_hours grouped by project_id, having at least 3 distinct staff members, ordered by total_hours descending, limited to 1 row.",
    "requirements": [
      "Group by project_id.",
      "Filter with HAVING COUNT(DISTINCT emp_id) >= 3.",
      "Order by total_hours DESC.",
      "Limit to 1 row."
    ],
    "tableName": "Employee_Projects",
    "hint": "HAVING COUNT(DISTINCT emp_id) >= 3 ORDER BY total_hours DESC LIMIT 1",
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
    "title": "Identify the top rewarded employee with multiple performance reviews",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Performance_Reviews to display emp_id, COUNT(*) AS review_count, and SUM(bonus) AS total_bonus grouped by emp_id, having COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL, ordered by total_bonus descending, limited to 1 row.",
    "requirements": [
      "Group by emp_id.",
      "Filter with HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL.",
      "Order by total_bonus DESC.",
      "Limit to 1 record."
    ],
    "tableName": "Performance_Reviews",
    "hint": "HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL ORDER BY total_bonus DESC LIMIT 1",
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
    "title": "Join employees with their corporate department details",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display emp_name, department, location, and budget by joining Employees and Departments on Employees.department = Departments.dept_name.",
    "requirements": [
      "INNER JOIN Employees e and Departments d on e.department = d.dept_name.",
      "Select e.emp_name, e.department, d.location, d.budget."
    ],
    "tableName": "Employees, Departments",
    "hint": "FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name",
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
    "title": "Link corporate initiatives to owning departments via foreign key",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display project_id, project_name, dept_name, and budget (from Projects) by joining Projects with Departments on dept_id.",
    "requirements": [
      "INNER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Select p.project_id, p.project_name, d.dept_name, p.budget."
    ],
    "tableName": "Projects, Departments",
    "hint": "FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id",
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
    "title": "Display employee project assignments and allocated hours",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display emp_name, project_id, assigned_role, and hours_allocated by joining Employees and Employee_Projects on emp_id.",
    "requirements": [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Select e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id",
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
    "title": "Retrieve employee performance evaluations with appraisal details",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display emp_name, review_year, rating, and bonus by joining Employees and Performance_Reviews on emp_id.",
    "requirements": [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, pr.review_year, pr.rating, pr.bonus."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
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
    "title": "Join projects with staff assignments to view project roles",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display project_name, emp_id, assigned_role, and hours_allocated by joining Projects and Employee_Projects on project_id.",
    "requirements": [
      "INNER JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select p.project_name, ep.emp_id, ep.assigned_role, ep.hours_allocated."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id",
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
    "title": "Find staff assigned to departments headquartered in Hyderabad",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display e.emp_name, e.department, and d.dept_head for employees whose department location is 'Hyderabad'.",
    "requirements": [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "Filter with d.location = 'Hyderabad'.",
      "Select e.emp_name, e.department, d.dept_head."
    ],
    "tableName": "Employees, Departments",
    "hint": "WHERE d.location = 'Hyderabad'",
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
    "title": "List active projects alongside their department names and budgets",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display p.project_name, d.dept_name, and p.budget for projects where p.status = 'Active'.",
    "requirements": [
      "INNER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Filter where p.status = 'Active'.",
      "Select p.project_name, d.dept_name, p.budget."
    ],
    "tableName": "Projects, Departments",
    "hint": "WHERE p.status = 'Active'",
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
    "title": "Display five-star appraisal recipients with department and manager comments",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, e.department, pr.rating, pr.bonus, and pr.feedback for reviews where pr.rating = 5.",
    "requirements": [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter where pr.rating = 5.",
      "Select e.emp_name, e.department, pr.rating, pr.bonus, pr.feedback."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE pr.rating = 5",
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
    "title": "Identify full-time allocations (>= 35 hrs/wk) on initiatives",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display ep.emp_id, p.project_name, ep.assigned_role, and ep.hours_allocated for assignments with hours_allocated >= 35.",
    "requirements": [
      "INNER JOIN Employee_Projects ep and Projects p ON ep.project_id = p.project_id.",
      "Filter with ep.hours_allocated >= 35.",
      "Select ep.emp_id, p.project_name, ep.assigned_role, ep.hours_allocated."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "WHERE ep.hours_allocated >= 35",
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
    "title": "Match well-compensated employees (> 50000) with department leadership",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display e.emp_name, e.salary, d.dept_name, and d.dept_head for employees with salary > 50000.",
    "requirements": [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "Filter where e.salary > 50000.",
      "Select e.emp_name, e.salary, d.dept_name, d.dept_head."
    ],
    "tableName": "Employees, Departments",
    "hint": "WHERE e.salary > 50000",
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
    "title": "List leadership role assignments with employee departmental context",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, e.department, ep.project_id, and ep.assigned_role for assignments where ep.assigned_role LIKE '%Lead%'.",
    "requirements": [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Filter where ep.assigned_role LIKE '%Lead%'.",
      "Select e.emp_name, e.department, ep.project_id, ep.assigned_role."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "WHERE ep.assigned_role LIKE '%Lead%'",
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
    "title": "Display employee office location and bonuses for 2024 reviews",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, e.city, pr.rating, and pr.bonus for reviews where pr.review_year = 2024 and pr.bonus IS NOT NULL.",
    "requirements": [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter where pr.review_year = 2024 AND pr.bonus IS NOT NULL.",
      "Select e.emp_name, e.city, pr.rating, pr.bonus."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE pr.review_year = 2024 AND pr.bonus IS NOT NULL",
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
    "title": "Filter initiatives with budgets exceeding 200,000 and show department head",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display p.project_name, d.dept_name, d.dept_head, and p.budget for projects where p.budget > 200000.",
    "requirements": [
      "INNER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Filter where p.budget > 200000.",
      "Select p.project_name, d.dept_name, d.dept_head, p.budget."
    ],
    "tableName": "Projects, Departments",
    "hint": "WHERE p.budget > 200000",
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
    "title": "Find co-located employees working in their department's headquarters city",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, e.city, e.department, and d.location by joining Employees and Departments on e.department = d.dept_name where e.city = d.location.",
    "requirements": [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "Filter where e.city = d.location.",
      "Select e.emp_name, e.city, e.department, d.location."
    ],
    "tableName": "Employees, Departments",
    "hint": "WHERE e.city = d.location",
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
    "title": "Correlate base salary with performance bonuses",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, e.salary, pr.bonus, and pr.rating for reviews where pr.bonus IS NOT NULL.",
    "requirements": [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter where pr.bonus IS NOT NULL.",
      "Select e.emp_name, e.salary, pr.bonus, pr.rating."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE pr.bonus IS NOT NULL",
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
    "title": "List all employees and their project assignments including unassigned staff",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display e.emp_id, e.emp_name, ep.project_id, and ep.assigned_role by LEFT JOINing Employees with Employee_Projects on emp_id.",
    "requirements": [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Select e.emp_id, e.emp_name, ep.project_id, ep.assigned_role."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id",
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
    "title": "Identify unstaffed employees with no active project assignments (Anti-Join)",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, and department for employees who are currently not assigned to any project.",
    "requirements": [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Filter with WHERE ep.project_id IS NULL.",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "WHERE ep.project_id IS NULL",
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
    "title": "Display all corporate departments and their project initiatives",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display d.dept_name, d.location, p.project_name, and p.status by LEFT JOINing Departments with Projects on dept_id.",
    "requirements": [
      "LEFT JOIN Departments d and Projects p ON d.dept_id = p.dept_id.",
      "Select d.dept_name, d.location, p.project_name, p.status."
    ],
    "tableName": "Departments, Projects",
    "hint": "FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id",
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
    "title": "Find departments that currently have no associated projects (Anti-Join)",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display dept_id, dept_name, and location for departments that have zero projects in the Projects table.",
    "requirements": [
      "LEFT JOIN Departments d and Projects p ON d.dept_id = p.dept_id.",
      "Filter with WHERE p.project_id IS NULL.",
      "Select d.dept_id, d.dept_name, d.location."
    ],
    "tableName": "Departments, Projects",
    "hint": "WHERE p.project_id IS NULL",
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
    "title": "List all employees alongside their historical review ratings",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display e.emp_id, e.emp_name, e.department, pr.review_year, and pr.rating by LEFT JOINing Employees with Performance_Reviews on emp_id.",
    "requirements": [
      "LEFT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_id, e.emp_name, e.department, pr.review_year, pr.rating."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
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
    "title": "Find employees who have never received a performance review (Anti-Join)",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, department, and salary for employees who have no records in Performance_Reviews.",
    "requirements": [
      "LEFT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter with WHERE pr.review_id IS NULL.",
      "Select e.emp_id, e.emp_name, e.department, e.salary."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE pr.review_id IS NULL",
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
    "title": "List all projects and their assigned team members",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display p.project_id, p.project_name, ep.emp_id, and ep.assigned_role by LEFT JOINing Projects with Employee_Projects on project_id.",
    "requirements": [
      "LEFT JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select p.project_id, p.project_name, ep.emp_id, ep.assigned_role."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id",
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
    "title": "Find initiatives that currently have zero assigned staff members (Anti-Join)",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display project_id, project_name, and status for projects that have no assigned staff in Employee_Projects.",
    "requirements": [
      "LEFT JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Filter with WHERE ep.emp_id IS NULL.",
      "Select p.project_id, p.project_name, p.status."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "WHERE ep.emp_id IS NULL",
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
    "title": "Display all corporate departments and associated staff names",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display d.dept_name, d.dept_head, and e.emp_name by LEFT JOINing Departments with Employees on d.dept_name = e.department.",
    "requirements": [
      "LEFT JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Select d.dept_name, d.dept_head, e.emp_name."
    ],
    "tableName": "Departments, Employees",
    "hint": "FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department",
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
    "title": "Identify corporate departments that currently have zero employees (Anti-Join)",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display dept_id, dept_name, and location for departments that have no staff in the Employees table.",
    "requirements": [
      "LEFT JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Filter with WHERE e.emp_id IS NULL.",
      "Select d.dept_id, d.dept_name, d.location."
    ],
    "tableName": "Departments, Employees",
    "hint": "WHERE e.emp_id IS NULL",
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
    "title": "Filter joined records within the ON clause vs WHERE clause",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, e.department, pr.rating, and pr.bonus for all employees, showing 2024 review data where available by placing pr.review_year = 2024 directly in the LEFT JOIN ON clause.",
    "requirements": [
      "LEFT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id AND pr.review_year = 2024.",
      "Select e.emp_name, e.department, pr.rating, pr.bonus."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "ON e.emp_id = pr.emp_id AND pr.review_year = 2024",
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
    "title": "Format unassigned staffing roles using COALESCE in a LEFT JOIN",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_id, e.emp_name, and COALESCE(ep.assigned_role, 'Unassigned') AS project_role by LEFT JOINing Employees with Employee_Projects on emp_id.",
    "requirements": [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Use COALESCE(ep.assigned_role, 'Unassigned') AS project_role.",
      "Select e.emp_id, e.emp_name, project_role."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "COALESCE(ep.assigned_role, 'Unassigned') AS project_role",
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
    "title": "Compute total weekly hours per project preserving unstaffed initiatives",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display p.project_id, p.project_name, and COALESCE(SUM(ep.hours_allocated), 0) AS total_hours by LEFT JOINing Projects with Employee_Projects on project_id, grouped by p.project_id and p.project_name.",
    "requirements": [
      "LEFT JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Group by p.project_id, p.project_name.",
      "Select p.project_id, p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "GROUP BY p.project_id, p.project_name",
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
    "title": "Count employees per department including zero-headcount divisions",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display d.dept_name and COUNT(e.emp_id) AS staff_count by LEFT JOINing Departments with Employees on d.dept_name = e.department, grouped by d.dept_name.",
    "requirements": [
      "LEFT JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Group by d.dept_name.",
      "Use COUNT(e.emp_id) AS staff_count (do NOT use COUNT(*)).",
      "Select d.dept_name, staff_count."
    ],
    "tableName": "Departments, Employees",
    "hint": "COUNT(e.emp_id) AS staff_count GROUP BY d.dept_name",
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
    "title": "Count reviews per employee including unreviewed individuals",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_id, e.emp_name, and COUNT(pr.review_id) AS review_count by LEFT JOINing Employees with Performance_Reviews on emp_id, grouped by e.emp_id and e.emp_name.",
    "requirements": [
      "LEFT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Group by e.emp_id, e.emp_name.",
      "Use COUNT(pr.review_id) AS review_count.",
      "Select e.emp_id, e.emp_name, review_count."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "GROUP BY e.emp_id, e.emp_name",
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
    "title": "Right outer join: Preserve all departments when matching employees",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, d.dept_name, and d.location by RIGHT JOINing Employees with Departments on e.department = d.dept_name.",
    "requirements": [
      "RIGHT JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "Select e.emp_name, d.dept_name, d.location."
    ],
    "tableName": "Employees, Departments",
    "hint": "FROM Employees e RIGHT JOIN Departments d ON e.department = d.dept_name",
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
    "title": "Right outer join: Retain all projects when querying staff allocations",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display ep.emp_id, ep.assigned_role, p.project_id, and p.project_name by RIGHT JOINing Employee_Projects with Projects on ep.project_id = p.project_id.",
    "requirements": [
      "RIGHT JOIN Employee_Projects ep and Projects p ON ep.project_id = p.project_id.",
      "Select ep.emp_id, ep.assigned_role, p.project_id, p.project_name."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "FROM Employee_Projects ep RIGHT JOIN Projects p ON ep.project_id = p.project_id",
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
    "title": "Right outer join: Match all performance reviews with employee names",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, pr.review_id, pr.rating, and pr.bonus by RIGHT JOINing Employees with Performance_Reviews on e.emp_id = pr.emp_id.",
    "requirements": [
      "RIGHT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, pr.review_id, pr.rating, pr.bonus."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "FROM Employees e RIGHT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
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
    "title": "Right outer join: Retain all corporate departments when joining with projects",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display p.project_name, d.dept_name, and d.budget by RIGHT JOINing Projects with Departments on p.dept_id = d.dept_id.",
    "requirements": [
      "RIGHT JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Select p.project_name, d.dept_name, d.budget."
    ],
    "tableName": "Projects, Departments",
    "hint": "FROM Projects p RIGHT JOIN Departments d ON p.dept_id = d.dept_id",
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
    "title": "Right outer join: Retain all staffing allocations when pairing with staff names",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, ep.project_id, ep.assigned_role, and ep.hours_allocated by RIGHT JOINing Employees with Employee_Projects on e.emp_id = ep.emp_id.",
    "requirements": [
      "RIGHT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Select e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "FROM Employees e RIGHT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id",
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
    "title": "Full outer join: Comprehensive matrix between Departments and Employees",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display d.dept_name, d.location, e.emp_name, and e.salary by performing a FULL OUTER JOIN between Departments and Employees on d.dept_name = e.department.",
    "requirements": [
      "FULL OUTER JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Select d.dept_name, d.location, e.emp_name, e.salary."
    ],
    "tableName": "Departments, Employees",
    "hint": "FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department",
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
    "title": "Full outer join: Reconcile all projects with staffing records",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display p.project_id, p.project_name, ep.emp_id, and ep.assigned_role by performing a FULL OUTER JOIN between Projects and Employee_Projects on p.project_id = ep.project_id.",
    "requirements": [
      "FULL OUTER JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select p.project_id, p.project_name, ep.emp_id, ep.assigned_role."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "FROM Projects p FULL OUTER JOIN Employee_Projects ep ON p.project_id = ep.project_id",
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
    "title": "Isolate disjoint entities using FULL OUTER JOIN with NULL filtering",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display d.dept_name and e.emp_name by performing a FULL OUTER JOIN between Departments and Employees on d.dept_name = e.department where either d.dept_id IS NULL OR e.emp_id IS NULL.",
    "requirements": [
      "FULL OUTER JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Filter with WHERE d.dept_id IS NULL OR e.emp_id IS NULL.",
      "Select d.dept_name, e.emp_name."
    ],
    "tableName": "Departments, Employees",
    "hint": "WHERE d.dept_id IS NULL OR e.emp_id IS NULL",
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
    "title": "Full outer join between Projects and Departments comparing allocations",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display p.project_name, d.dept_name, p.budget AS project_budget, and d.budget AS dept_budget by performing a FULL OUTER JOIN between Projects and Departments on p.dept_id = d.dept_id.",
    "requirements": [
      "FULL OUTER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Select p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget."
    ],
    "tableName": "Projects, Departments",
    "hint": "FROM Projects p FULL OUTER JOIN Departments d ON p.dept_id = d.dept_id",
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
    "title": "Full outer join between Employees and Performance_Reviews",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, e.salary, pr.review_year, and pr.rating by performing a FULL OUTER JOIN between Employees and Performance_Reviews on e.emp_id = pr.emp_id.",
    "requirements": [
      "FULL OUTER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, e.salary, pr.review_year, pr.rating."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "FROM Employees e FULL OUTER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
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
    "title": "Join Employees, Employee_Projects, and Projects across junction entity",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, p.project_name, ep.assigned_role, and ep.hours_allocated by joining Employees, Employee_Projects, and Projects.",
    "requirements": [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "INNER JOIN Projects p ON ep.project_id = p.project_id.",
      "Select e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id",
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
    "title": "Filter active initiatives across the employee project join",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, p.project_name, p.status, and ep.hours_allocated for projects where p.status = 'Active'.",
    "requirements": [
      "Join Employees, Employee_Projects, and Projects.",
      "Filter with p.status = 'Active'.",
      "Select e.emp_name, p.project_name, p.status, ep.hours_allocated."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "WHERE p.status = 'Active'",
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
    "title": "Join Projects, Departments, and Employee_Projects to view project oversight",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display p.project_name, d.dept_name, d.dept_head, and ep.assigned_role by joining Projects, Departments, and Employee_Projects.",
    "requirements": [
      "INNER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select p.project_name, d.dept_name, d.dept_head, ep.assigned_role."
    ],
    "tableName": "Projects, Departments, Employee_Projects",
    "hint": "FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id",
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
    "title": "Join Employees, Departments, and Performance_Reviews for appraisal audits",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, d.dept_name, d.location, pr.rating, and pr.bonus by joining Employees, Departments, and Performance_Reviews.",
    "requirements": [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, d.dept_name, d.location, pr.rating, pr.bonus."
    ],
    "tableName": "Employees, Departments, Performance_Reviews",
    "hint": "FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
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
    "title": "Correlate project staff roles with performance ratings",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, ep.assigned_role, pr.review_year, and pr.rating by joining Employees, Employee_Projects, and Performance_Reviews.",
    "requirements": [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, ep.assigned_role, pr.review_year, pr.rating."
    ],
    "tableName": "Employees, Employee_Projects, Performance_Reviews",
    "hint": "FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
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
    "title": "Four-table join: Connect Employees, Departments, Projects, and Staffing",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, d.dept_name, p.project_name, and ep.assigned_role by joining Employees, Departments, Employee_Projects, and Projects.",
    "requirements": [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "INNER JOIN Projects p ON ep.project_id = p.project_id.",
      "Select e.emp_name, d.dept_name, p.project_name, ep.assigned_role."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Join e to d, e to ep, and ep to p",
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
    "title": "Four-table join: Cross-reference project staffing with annual bonus payouts",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, p.project_name, pr.review_year, and pr.bonus for reviews where pr.bonus IS NOT NULL by joining Employees, Employee_Projects, Projects, and Performance_Reviews.",
    "requirements": [
      "Join Employees, Employee_Projects, Projects, and Performance_Reviews.",
      "Filter with pr.bonus IS NOT NULL.",
      "Select e.emp_name, p.project_name, pr.review_year, pr.bonus."
    ],
    "tableName": "Employees, Employee_Projects, Projects, Performance_Reviews",
    "hint": "WHERE pr.bonus IS NOT NULL",
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
    "title": "Multi-table LEFT JOIN: Preserve all employees while retrieving assigned project titles",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_id, e.emp_name, and p.project_name by LEFT JOINing Employees with Employee_Projects and then LEFT JOINing Projects.",
    "requirements": [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "LEFT JOIN Projects p ON ep.project_id = p.project_id.",
      "Select e.emp_id, e.emp_name, p.project_name."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Projects p ON ep.project_id = p.project_id",
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
    "title": "Multi-table LEFT JOIN: Cascade from Departments through Projects to staffing",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display d.dept_name, p.project_name, and ep.emp_id by LEFT JOINing Departments with Projects, and then LEFT JOINing Employee_Projects.",
    "requirements": [
      "LEFT JOIN Departments d and Projects p ON d.dept_id = p.dept_id.",
      "LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select d.dept_name, p.project_name, ep.emp_id."
    ],
    "tableName": "Departments, Projects, Employee_Projects",
    "hint": "FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id",
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
    "title": "Filter four-table join: High earners working on completed projects",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, e.salary, d.dept_name, and p.project_name by joining Employees, Departments, Employee_Projects, and Projects where p.status = 'Completed' AND e.salary > 40000.",
    "requirements": [
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter with p.status = 'Completed' AND e.salary > 40000.",
      "Select e.emp_name, e.salary, d.dept_name, p.project_name."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "WHERE p.status = 'Completed' AND e.salary > 40000",
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
    "title": "Filter four-table join: Heavy commitments (> 25 hrs) on active initiatives",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, d.location, p.project_name, and ep.hours_allocated by joining Employees, Departments, Employee_Projects, and Projects where ep.hours_allocated > 25 AND p.status = 'Active'.",
    "requirements": [
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter with ep.hours_allocated > 25 AND p.status = 'Active'.",
      "Select e.emp_name, d.location, p.project_name, ep.hours_allocated."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "WHERE ep.hours_allocated > 25 AND p.status = 'Active'",
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
    "title": "Synthesize complete profile: Employee, department, project, and review rating",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, d.dept_name, p.project_name, and pr.rating by joining Employees, Departments, Employee_Projects, Projects, and Performance_Reviews where pr.review_year = 2024.",
    "requirements": [
      "Join Employees e to Departments d ON e.department = d.dept_name.",
      "Join e to Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Join ep to Projects p ON ep.project_id = p.project_id.",
      "Join e to Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter where pr.review_year = 2024.",
      "Select e.emp_name, d.dept_name, p.project_name, pr.rating."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects, Performance_Reviews",
    "hint": "WHERE pr.review_year = 2024",
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
    "title": "Self-join: Find unique pairs of employees working in the same department",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e1.emp_name AS employee_1, e2.emp_name AS employee_2, and e1.department by self-joining Employees on department where e1.emp_id < e2.emp_id.",
    "requirements": [
      "Self-join Employees e1 and Employees e2 ON e1.department = e2.department.",
      "Filter with e1.emp_id < e2.emp_id to eliminate duplicates and self-pairings.",
      "Select e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department."
    ],
    "tableName": "Employees",
    "hint": "WHERE e1.emp_id < e2.emp_id",
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
    "title": "Self-join: Find colleague pairings sharing the same office city",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e1.emp_name AS colleague_1, e2.emp_name AS colleague_2, and e1.city by self-joining Employees on city where e1.emp_id < e2.emp_id.",
    "requirements": [
      "Self-join Employees e1 and Employees e2 ON e1.city = e2.city.",
      "Filter with e1.emp_id < e2.emp_id.",
      "Select e1.emp_name AS colleague_1, e2.emp_name AS colleague_2, e1.city."
    ],
    "tableName": "Employees",
    "hint": "WHERE e1.emp_id < e2.emp_id",
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
    "title": "Self-join: Identify departmental colleagues where one out-earns the other by >= 20000",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e1.emp_name AS higher_earner, e1.salary AS high_sal, e2.emp_name AS lower_earner, e2.salary AS low_sal, and e1.department by self-joining Employees on department where e1.salary >= e2.salary + 20000.",
    "requirements": [
      "Self-join Employees e1 and Employees e2 ON e1.department = e2.department.",
      "Filter with e1.salary >= e2.salary + 20000.",
      "Select e1.emp_name AS higher_earner, e1.salary AS high_sal, e2.emp_name AS lower_earner, e2.salary AS low_sal, e1.department."
    ],
    "tableName": "Employees",
    "hint": "WHERE e1.salary >= e2.salary + 20000",
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
    "title": "Self-join: Pair employees hired in the same calendar year",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e1.emp_name AS joiner_1, e2.emp_name AS joiner_2, and e1.joining_year by self-joining Employees on joining_year where e1.emp_id < e2.emp_id.",
    "requirements": [
      "Self-join Employees e1 and Employees e2 ON e1.joining_year = e2.joining_year.",
      "Filter with e1.emp_id < e2.emp_id.",
      "Select e1.emp_name AS joiner_1, e2.emp_name AS joiner_2, e1.joining_year."
    ],
    "tableName": "Employees",
    "hint": "WHERE e1.emp_id < e2.emp_id",
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
    "title": "Self-join: Pair projects belonging to the same department",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display p1.project_name AS project_1, p2.project_name AS project_2, and p1.dept_id by self-joining Projects on dept_id where p1.project_id < p2.project_id.",
    "requirements": [
      "Self-join Projects p1 and Projects p2 ON p1.dept_id = p2.dept_id.",
      "Filter with p1.project_id < p2.project_id.",
      "Select p1.project_name AS project_1, p2.project_name AS project_2, p1.dept_id."
    ],
    "tableName": "Projects",
    "hint": "WHERE p1.project_id < p2.project_id",
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
    "title": "Self-join: Track year-over-year rating progression for the same employee",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Performance_Reviews to display r1.emp_id, r1.review_year AS prev_year, r1.rating AS prev_rating, r2.review_year AS next_year, and r2.rating AS next_rating by self-joining on emp_id where r1.review_year = r2.review_year - 1.",
    "requirements": [
      "Self-join Performance_Reviews r1 and Performance_Reviews r2 ON r1.emp_id = r2.emp_id.",
      "Filter with r1.review_year = r2.review_year - 1.",
      "Select r1.emp_id, r1.review_year AS prev_year, r1.rating AS prev_rating, r2.review_year AS next_year, r2.rating AS next_rating."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE r1.review_year = r2.review_year - 1",
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
    "title": "Self-join: Pair colleagues with identical years of professional experience",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e1.emp_name AS peer_1, e2.emp_name AS peer_2, and e1.experience by self-joining Employees on experience where e1.emp_id < e2.emp_id.",
    "requirements": [
      "Self-join Employees e1 and Employees e2 ON e1.experience = e2.experience.",
      "Filter with e1.emp_id < e2.emp_id.",
      "Select e1.emp_name AS peer_1, e2.emp_name AS peer_2, e1.experience."
    ],
    "tableName": "Employees",
    "hint": "WHERE e1.emp_id < e2.emp_id",
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
    "title": "Self-join: Identify pairs of employees collaborating on the same project",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employee_Projects to display ep1.project_id, ep1.emp_id AS team_member_1, and ep2.emp_id AS team_member_2 by self-joining on project_id where ep1.emp_id < ep2.emp_id.",
    "requirements": [
      "Self-join Employee_Projects ep1 and Employee_Projects ep2 ON ep1.project_id = ep2.project_id.",
      "Filter with ep1.emp_id < ep2.emp_id.",
      "Select ep1.project_id, ep1.emp_id AS team_member_1, ep2.emp_id AS team_member_2."
    ],
    "tableName": "Employee_Projects",
    "hint": "WHERE ep1.emp_id < ep2.emp_id",
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
    "title": "Cross join: Generate all theoretical department and project status combinations",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to generate a Cartesian product between distinct dept_name from Departments and distinct status from Projects. Alias columns as dept_name and project_status.",
    "requirements": [
      "Select DISTINCT dept_name from Departments.",
      "CROSS JOIN with (SELECT DISTINCT status FROM Projects).",
      "Select dept_name, status AS project_status."
    ],
    "tableName": "Departments, Projects",
    "hint": "CROSS JOIN (SELECT DISTINCT status FROM Projects)",
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
    "title": "Cross join: Generate branch city and department combinations",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display distinct city from Employees paired with distinct dept_name from Departments using CROSS JOIN.",
    "requirements": [
      "Select DISTINCT city from Employees.",
      "CROSS JOIN with (SELECT DISTINCT dept_name FROM Departments).",
      "Select city, dept_name."
    ],
    "tableName": "Employees, Departments",
    "hint": "FROM (SELECT DISTINCT city FROM Employees) c CROSS JOIN (SELECT DISTINCT dept_name FROM Departments) d",
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
    "title": "Cross join with scalar aggregate: Compare each employee's salary to company average",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, e.salary, a.avg_sal, and (e.salary - a.avg_sal) AS salary_diff by CROSS JOINing Employees with a subquery calculating ROUND(AVG(salary), 2) AS avg_sal from Employees.",
    "requirements": [
      "CROSS JOIN Employees e with (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees) a.",
      "Calculate (e.salary - a.avg_sal) AS salary_diff.",
      "Select e.emp_name, e.salary, a.avg_sal, salary_diff."
    ],
    "tableName": "Employees",
    "hint": "CROSS JOIN (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees) a",
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
    "title": "Cross join with total capital: Compute each project's percentage share of portfolio budget",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display p.project_name, p.budget, and ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct by CROSS JOINing Projects with a subquery computing SUM(budget) AS total_budget from Projects.",
    "requirements": [
      "CROSS JOIN Projects p with (SELECT SUM(budget) AS total_budget FROM Projects) t.",
      "Calculate ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct.",
      "Select p.project_name, p.budget, budget_pct."
    ],
    "tableName": "Projects",
    "hint": "CROSS JOIN (SELECT SUM(budget) AS total_budget FROM Projects) t",
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
    "title": "Cross join: Generate rating evaluation slots (1 to 5) for all corporate departments",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display d.dept_name and r.rating_slot by CROSS JOINing (SELECT DISTINCT dept_name FROM Departments) d with (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews) r.",
    "requirements": [
      "Select DISTINCT dept_name from Departments.",
      "CROSS JOIN with (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews).",
      "Select d.dept_name, r.rating_slot."
    ],
    "tableName": "Departments, Performance_Reviews",
    "hint": "CROSS JOIN (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews) r",
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
    "title": "Aggregate headcount and total payroll joined with department budget",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display d.dept_name, COUNT(e.emp_id) AS emp_count, SUM(e.salary) AS total_payroll, and d.budget by joining Departments and Employees on d.dept_name = e.department, grouped by d.dept_name and d.budget.",
    "requirements": [
      "INNER JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Group by d.dept_name, d.budget.",
      "Select d.dept_name, COUNT(e.emp_id) AS emp_count, SUM(e.salary) AS total_payroll, d.budget."
    ],
    "tableName": "Departments, Employees",
    "hint": "GROUP BY d.dept_name, d.budget",
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
    "title": "Calculate total committed hours and headcount per project initiative",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display p.project_name, p.status, COUNT(ep.emp_id) AS assigned_staff, and SUM(ep.hours_allocated) AS total_weekly_hours by joining Projects and Employee_Projects on project_id, grouped by p.project_id, p.project_name, p.status.",
    "requirements": [
      "INNER JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Group by p.project_id, p.project_name, p.status.",
      "Select p.project_name, p.status, COUNT(ep.emp_id) AS assigned_staff, SUM(ep.hours_allocated) AS total_weekly_hours."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "GROUP BY p.project_id, p.project_name, p.status",
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
    "title": "Count projects and cumulative initiative investment per department",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display d.dept_name, COUNT(p.project_id) AS projects_count, and SUM(p.budget) AS total_project_budget by joining Departments and Projects on dept_id, grouped by d.dept_name.",
    "requirements": [
      "INNER JOIN Departments d and Projects p ON d.dept_id = p.dept_id.",
      "Group by d.dept_name.",
      "Select d.dept_name, COUNT(p.project_id) AS projects_count, SUM(p.budget) AS total_project_budget."
    ],
    "tableName": "Departments, Projects",
    "hint": "GROUP BY d.dept_name",
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
    "title": "Identify employees with heavy cross-project workloads (> 30 total hours)",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_id, e.emp_name, e.department, and SUM(ep.hours_allocated) AS total_weekly_hours by joining Employees and Employee_Projects on emp_id, grouped by e.emp_id, e.emp_name, e.department, having total_weekly_hours > 30.",
    "requirements": [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Group by e.emp_id, e.emp_name, e.department.",
      "Filter with HAVING SUM(ep.hours_allocated) > 30.",
      "Select e.emp_id, e.emp_name, e.department, SUM(ep.hours_allocated) AS total_weekly_hours."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "HAVING SUM(ep.hours_allocated) > 30",
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
    "title": "Audit department compensation burn: Total annual payroll vs budget",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display d.dept_name, (SUM(e.salary) * 12) AS annual_payroll, d.budget AS annual_budget from Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING (SUM(e.salary) * 12) > (d.budget * 0.5);",
    "requirements": [
      "INNER JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Group by d.dept_name, d.budget.",
      "Filter with HAVING (SUM(e.salary) * 12) > (d.budget * 0.5).",
      "Select d.dept_name, (SUM(e.salary) * 12) AS annual_payroll, d.budget AS annual_budget."
    ],
    "tableName": "Departments, Employees",
    "hint": "HAVING (SUM(e.salary) * 12) > (d.budget * 0.5)",
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
    "title": "Compute average experience and average salary of teams assigned to each project",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display p.project_name, ROUND(AVG(e.experience), 1) AS avg_team_exp, and ROUND(AVG(e.salary), 2) AS avg_team_salary by joining Projects, Employee_Projects, and Employees, grouped by p.project_id, p.project_name.",
    "requirements": [
      "Join Projects p, Employee_Projects ep, and Employees e.",
      "Group by p.project_id, p.project_name.",
      "Select p.project_name, ROUND(AVG(e.experience), 1) AS avg_team_exp, ROUND(AVG(e.salary), 2) AS avg_team_salary."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "GROUP BY p.project_id, p.project_name",
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
    "title": "Count distinct projects and distinct reviews per employee",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, COUNT(DISTINCT ep.project_id) AS projects_assigned, and COUNT(DISTINCT pr.review_id) AS reviews_received by LEFT JOINing Employees with Employee_Projects and Performance_Reviews, grouped by e.emp_id, e.emp_name.",
    "requirements": [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Group by e.emp_id, e.emp_name.",
      "Select e.emp_name, COUNT(DISTINCT ep.project_id) AS projects_assigned, COUNT(DISTINCT pr.review_id) AS reviews_received."
    ],
    "tableName": "Employees, Employee_Projects, Performance_Reviews",
    "hint": "Use COUNT(DISTINCT ...) to prevent Cartesian product inflation",
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
    "title": "Identify top 3 employees by total project hours worked",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.emp_name, e.department, and SUM(ep.hours_allocated) AS total_hours by joining Employees and Employee_Projects on emp_id, grouped by e.emp_id, e.emp_name, e.department, ordered by total_hours descending, limited to 3 employees.",
    "requirements": [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Group by e.emp_id, e.emp_name, e.department.",
      "Order by total_hours DESC.",
      "LIMIT 3."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "ORDER BY total_hours DESC LIMIT 3",
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
    "title": "Calculate total bonuses awarded per department",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query to display e.department, COUNT(pr.review_id) AS reviewed_count, and SUM(pr.bonus) AS total_department_bonuses by joining Employees and Performance_Reviews on emp_id, grouped by e.department.",
    "requirements": [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Group by e.department.",
      "Select e.department, COUNT(pr.review_id) AS reviewed_count, SUM(pr.bonus) AS total_department_bonuses."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "GROUP BY e.department",
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
    "title": "Projects where assigned team members average a performance rating of at least 4.0",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display p.project_name, COUNT(DISTINCT ep.emp_id) AS staff_count, and ROUND(AVG(pr.rating), 2) AS avg_team_rating by joining Projects p, Employee_Projects ep, and Performance_Reviews pr, grouped by p.project_id, p.project_name, having avg_team_rating >= 4.0.",
    "requirements": [
      "INNER JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "INNER JOIN Performance_Reviews pr ON ep.emp_id = pr.emp_id.",
      "Group by p.project_id, p.project_name.",
      "Filter with HAVING AVG(pr.rating) >= 4.0.",
      "Select p.project_name, COUNT(DISTINCT ep.emp_id) AS staff_count, ROUND(AVG(pr.rating), 2) AS avg_team_rating."
    ],
    "tableName": "Projects, Employee_Projects, Performance_Reviews",
    "hint": "HAVING AVG(pr.rating) >= 4.0",
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
    "title": "Find employees earning strictly more than the company-wide average salary",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query to display emp_id, emp_name, department, and salary for employees whose salary is greater than the overall average salary across all employees.",
    "requirements": [
      "Use a scalar subquery: WHERE salary > (SELECT AVG(salary) FROM Employees).",
      "Select emp_id, emp_name, department, salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE salary > (SELECT AVG(salary) FROM Employees)",
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
    "title": "Identify corporate initiatives with above-average budget allocations",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query from Projects to display project_id, project_name, and budget for projects whose budget is greater than the average project budget.",
    "requirements": [
      "Use a scalar subquery: WHERE budget > (SELECT AVG(budget) FROM Projects).",
      "Select project_id, project_name, budget."
    ],
    "tableName": "Projects",
    "hint": "WHERE budget > (SELECT AVG(budget) FROM Projects)",
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
    "title": "Retrieve employee details for the company's highest earner",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for the employee(s) who earn the maximum salary in the company.",
    "requirements": [
      "Use WHERE salary = (SELECT MAX(salary) FROM Employees).",
      "Select emp_id, emp_name, department, salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE salary = (SELECT MAX(salary) FROM Employees)",
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
    "title": "Project company average salary alongside individual employee compensation",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query to display emp_name, salary, and (SELECT ROUND(AVG(salary), 2) FROM Employees) AS company_avg_salary for all employees.",
    "requirements": [
      "Use a scalar subquery directly in the SELECT clause.",
      "Alias the subquery as company_avg_salary.",
      "Select emp_name, salary, company_avg_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, salary, (SELECT ROUND(AVG(salary), 2) FROM Employees) AS company_avg_salary FROM Employees;",
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
    "title": "Calculate budget deficit from the maximum project investment",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Projects to display project_name, budget, and ((SELECT MAX(budget) FROM Projects) - budget) AS budget_gap for all projects.",
    "requirements": [
      "Use (SELECT MAX(budget) FROM Projects) - budget AS budget_gap.",
      "Select project_name, budget, budget_gap."
    ],
    "tableName": "Projects",
    "hint": "((SELECT MAX(budget) FROM Projects) - budget) AS budget_gap",
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
    "title": "Filter performance reviews with above-average bonus awards",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Performance_Reviews to display review_id, emp_id, rating, and bonus for reviews where bonus is strictly greater than the average bonus awarded across all reviews.",
    "requirements": [
      "Use WHERE bonus > (SELECT AVG(bonus) FROM Performance_Reviews).",
      "Select review_id, emp_id, rating, bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE bonus > (SELECT AVG(bonus) FROM Performance_Reviews)",
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
    "title": "Find employees earning strictly more than the IT department average",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees earning more than the average salary of the 'IT' department.",
    "requirements": [
      "Use WHERE salary > (SELECT AVG(salary) FROM Employees WHERE department = 'IT').",
      "Select emp_id, emp_name, department, salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE salary > (SELECT AVG(salary) FROM Employees WHERE department = 'IT')",
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
    "title": "Identify departments endowed with above-average operating budgets",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Departments to display dept_id, dept_name, location, and budget for departments whose budget exceeds the average departmental budget.",
    "requirements": [
      "Use WHERE budget > (SELECT AVG(budget) FROM Departments).",
      "Select dept_id, dept_name, location, budget."
    ],
    "tableName": "Departments",
    "hint": "WHERE budget > (SELECT AVG(budget) FROM Departments)",
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
    "title": "Retrieve all entry-level staff possessing the minimum recorded experience",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, department, and experience for employees having the minimum experience in the company.",
    "requirements": [
      "Use WHERE experience = (SELECT MIN(experience) FROM Employees).",
      "Select emp_id, emp_name, department, experience."
    ],
    "tableName": "Employees",
    "hint": "WHERE experience = (SELECT MIN(experience) FROM Employees)",
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
    "title": "Find initiatives launched prior to the kickoff of Cloud Migration",
    "topic": "Subqueries",
    "subtopic": "Scalar Subqueries in WHERE & SELECT",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Projects to display project_id, project_name, dept_id, and start_date for projects whose start_date is strictly earlier than the start_date of the 'Cloud Migration' project.",
    "requirements": [
      "Use WHERE start_date < (SELECT start_date FROM Projects WHERE project_name = 'Cloud Migration').",
      "Select project_id, project_name, dept_id, start_date."
    ],
    "tableName": "Projects",
    "hint": "WHERE start_date < (SELECT start_date FROM Projects WHERE project_name = 'Cloud Migration')",
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
    "title": "Find employees working in departments located in Bengaluru",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees whose department is located in 'Bengaluru', using a subquery with IN.",
    "requirements": [
      "Use WHERE department IN (SELECT dept_name FROM Departments WHERE location = 'Bengaluru').",
      "Select emp_id, emp_name, department."
    ],
    "tableName": "Employees, Departments",
    "hint": "WHERE department IN (SELECT dept_name FROM Departments WHERE location = 'Bengaluru')",
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
    "title": "Find employees assigned to currently active corporate initiatives",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees who are assigned to at least one project with status 'Active'.",
    "requirements": [
      "Use WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active').",
      "Select emp_id, emp_name, department."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active')",
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
    "title": "Find employees who have never received a performance review (NOT IN)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees whose emp_id is NOT IN Performance_Reviews.",
    "requirements": [
      "Use WHERE emp_id NOT IN (SELECT emp_id FROM Performance_Reviews).",
      "Select emp_id, emp_name, department, salary."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE emp_id NOT IN (SELECT emp_id FROM Performance_Reviews)",
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
    "title": "Find projects with zero assigned employees (NOT IN)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Projects to display project_id, project_name, and status for projects whose project_id is NOT IN Employee_Projects.",
    "requirements": [
      "Use WHERE project_id NOT IN (SELECT project_id FROM Employee_Projects).",
      "Select project_id, project_name, status."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "WHERE project_id NOT IN (SELECT project_id FROM Employee_Projects)",
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
    "title": "Find employees who have achieved a top rating of 5 in any review",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees who received a rating of 5 in at least one performance review.",
    "requirements": [
      "Use WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5).",
      "Select emp_id, emp_name, department."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5)",
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
    "title": "Find departments that currently have no assigned employees (NOT IN)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Departments to display dept_id, dept_name, and location for departments where dept_name is NOT IN the Employees table.",
    "requirements": [
      "Use WHERE dept_name NOT IN (SELECT department FROM Employees WHERE department IS NOT NULL).",
      "Select dept_id, dept_name, location."
    ],
    "tableName": "Departments, Employees",
    "hint": "WHERE dept_name NOT IN (SELECT department FROM Employees WHERE department IS NOT NULL)",
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
    "title": "Find employees assigned to major capital projects (budget >= 300000)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and salary for employees assigned to any project with budget >= 300000.",
    "requirements": [
      "Use WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget >= 300000).",
      "Select emp_id, emp_name, salary."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget >= 300000)",
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
    "title": "Find projects staffed by high-earning talent (salary > 70000)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Projects to display project_id, project_name, and status for projects that have at least one assigned employee earning more than 70000.",
    "requirements": [
      "Use WHERE project_id IN (SELECT ep.project_id FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE e.salary > 70000).",
      "Select project_id, project_name, status."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "WHERE project_id IN (SELECT ep.project_id FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE e.salary > 70000)",
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
    "title": "Find employees with no project assignments using NOT IN",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Easy",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees whose emp_id is NOT IN Employee_Projects.",
    "requirements": [
      "Use WHERE emp_id NOT IN (SELECT emp_id FROM Employee_Projects).",
      "Select emp_id, emp_name, department."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "WHERE emp_id NOT IN (SELECT emp_id FROM Employee_Projects)",
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
    "title": "Find departments without any active projects (NOT IN)",
    "topic": "Subqueries",
    "subtopic": "Multi-Row Subqueries (IN, NOT IN)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Departments to display dept_id, dept_name, and location for departments whose dept_id is NOT IN active projects.",
    "requirements": [
      "Use WHERE dept_id NOT IN (SELECT dept_id FROM Projects WHERE status = 'Active' AND dept_id IS NOT NULL).",
      "Select dept_id, dept_name, location."
    ],
    "tableName": "Departments, Projects",
    "hint": "WHERE dept_id NOT IN (SELECT dept_id FROM Projects WHERE status = 'Active' AND dept_id IS NOT NULL)",
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
    "title": "Identify assigned personnel using the correlated EXISTS operator",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where EXISTS a record in Employee_Projects for that employee.",
    "requirements": [
      "Use WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id).",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id)",
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
    "title": "Find unstaffed employees using the correlated NOT EXISTS operator",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where NOT EXISTS any project assignment for that employee.",
    "requirements": [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id).",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id)",
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
    "title": "Find departments owning at least one active project (EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Departments to display dept_id, dept_name, and budget for departments where EXISTS at least one active project in Projects.",
    "requirements": [
      "Use WHERE EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active').",
      "Select d.dept_id, d.dept_name, d.budget."
    ],
    "tableName": "Departments, Projects",
    "hint": "WHERE EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active')",
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
    "title": "Find departments with zero registered projects (NOT EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Departments to display dept_id, dept_name, and location for departments where NOT EXISTS any project in Projects.",
    "requirements": [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id).",
      "Select d.dept_id, d.dept_name, d.location."
    ],
    "tableName": "Departments, Projects",
    "hint": "WHERE NOT EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id)",
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
    "title": "Find employees who earned top ratings with significant bonus payouts (EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where EXISTS a review with rating = 5 and bonus > 20000.",
    "requirements": [
      "Use WHERE EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.rating = 5 AND pr.bonus > 20000).",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.rating = 5 AND pr.bonus > 20000)",
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
    "title": "Identify employees who have never received a cash bonus (NOT EXISTS)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees where NOT EXISTS any review with a non-null bonus.",
    "requirements": [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.bonus IS NOT NULL).",
      "Select e.emp_id, e.emp_name, e.department, e.salary."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.bonus IS NOT NULL)",
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
    "title": "Find projects with high-commitment staffing assignments (>= 35 hrs/wk)",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Projects to display project_id, project_name, and status for projects where EXISTS a staffing assignment with hours_allocated >= 35.",
    "requirements": [
      "Use WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id AND ep.hours_allocated >= 35).",
      "Select p.project_id, p.project_name, p.status."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id AND ep.hours_allocated >= 35)",
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
    "title": "Find projects lacking any staff assignments using NOT EXISTS",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Projects to display project_id, project_name, and budget for projects where NOT EXISTS any assignment in Employee_Projects.",
    "requirements": [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id).",
      "Select p.project_id, p.project_name, p.budget."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id)",
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
    "title": "Find staff assigned to mega-budget departments (budget >= 1200000) using EXISTS",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where EXISTS a department with budget >= 1200000 matching their department name.",
    "requirements": [
      "Use WHERE EXISTS (SELECT 1 FROM Departments d WHERE d.dept_name = e.department AND d.budget >= 1200000).",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    "tableName": "Employees, Departments",
    "hint": "WHERE EXISTS (SELECT 1 FROM Departments d WHERE d.dept_name = e.department AND d.budget >= 1200000)",
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
    "title": "Identify employees who have undergone multiple performance evaluations",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries (EXISTS & NOT EXISTS)",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where the count of their records in Performance_Reviews is greater than or equal to 2.",
    "requirements": [
      "Use WHERE (SELECT COUNT(*) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) >= 2.",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE (SELECT COUNT(*) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) >= 2",
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
    "title": "Find employees earning strictly more than their OWN department average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees earning more than the average salary of employees in their own department.",
    "requirements": [
      "Use WHERE e.salary > (SELECT AVG(sub.salary) FROM Employees sub WHERE sub.department = e.department).",
      "Select e.emp_id, e.emp_name, e.department, e.salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE e.salary > (SELECT AVG(sub.salary) FROM Employees sub WHERE sub.department = e.department)",
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
    "title": "Identify the top earner in each corporate department",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees who hold the highest salary in their respective department.",
    "requirements": [
      "Use WHERE e.salary = (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department).",
      "Select e.emp_id, e.emp_name, e.department, e.salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE e.salary = (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department)",
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
    "title": "Find the most senior employee in each office city",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, city, and experience for employees who possess the maximum experience in their office city.",
    "requirements": [
      "Use WHERE e.experience = (SELECT MAX(sub.experience) FROM Employees sub WHERE sub.city = e.city).",
      "Select e.emp_id, e.emp_name, e.city, e.experience."
    ],
    "tableName": "Employees",
    "hint": "WHERE e.experience = (SELECT MAX(sub.experience) FROM Employees sub WHERE sub.city = e.city)",
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
    "title": "Find performance reviews with bonuses exceeding the annual cycle average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Performance_Reviews to display review_id, emp_id, review_year, and bonus for reviews where bonus is strictly greater than the average bonus for that specific review_year.",
    "requirements": [
      "Use WHERE pr.bonus > (SELECT AVG(sub.bonus) FROM Performance_Reviews sub WHERE sub.review_year = pr.review_year).",
      "Select pr.review_id, pr.emp_id, pr.review_year, pr.bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE pr.bonus > (SELECT AVG(sub.bonus) FROM Performance_Reviews sub WHERE sub.review_year = pr.review_year)",
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
    "title": "Find initiatives budgeted higher than their department project average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Projects to display project_id, project_name, dept_id, and budget for projects whose budget exceeds the average project budget of their own department.",
    "requirements": [
      "Use WHERE p.budget > (SELECT AVG(sub.budget) FROM Projects sub WHERE sub.dept_id = p.dept_id).",
      "Select p.project_id, p.project_name, p.dept_id, p.budget."
    ],
    "tableName": "Projects",
    "hint": "WHERE p.budget > (SELECT AVG(sub.budget) FROM Projects sub WHERE sub.dept_id = p.dept_id)",
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
    "title": "Correlated subquery in SELECT: Project count assigned to each employee",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects for all employees.",
    "requirements": [
      "Use a correlated subquery in SELECT: (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects.",
      "Select e.emp_id, e.emp_name, total_projects."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "SELECT e.emp_id, e.emp_name, (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects FROM Employees e;",
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
    "title": "Correlated subquery in SELECT: Lifetime peak rating achieved per employee",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating for all employees.",
    "requirements": [
      "Use a correlated subquery in SELECT: (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating.",
      "Select e.emp_id, e.emp_name, highest_rating."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "SELECT e.emp_id, e.emp_name, (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating FROM Employees e;",
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
    "title": "Correlated subquery in SELECT: Count active initiatives per department",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from Departments to display dept_name, location, and (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') AS active_projects for all departments.",
    "requirements": [
      "Use a correlated subquery in SELECT counting active projects.",
      "Select d.dept_name, d.location, active_projects."
    ],
    "tableName": "Departments, Projects",
    "hint": "SELECT d.dept_name, d.location, (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') AS active_projects FROM Departments d;",
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
    "title": "Find staff earning more than ANY colleague in their department who has less experience",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display e.emp_id, e.emp_name, e.department, e.salary, and e.experience for employees whose salary is strictly greater than the maximum salary of all junior-tenured colleagues in the same department.",
    "requirements": [
      "Use WHERE e.salary > (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department AND sub.experience < e.experience).",
      "Select e.emp_id, e.emp_name, e.department, e.salary, e.experience."
    ],
    "tableName": "Employees",
    "hint": "WHERE e.salary > (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department AND sub.experience < e.experience)",
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
    "title": "Identify standout review ratings exceeding the employee's own lifetime average",
    "topic": "Subqueries",
    "subtopic": "Correlated Subqueries with Analytical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Performance_Reviews to display pr.review_id, pr.emp_id, pr.review_year, and pr.rating for reviews where the rating is strictly higher than the employee's career average rating across all reviews.",
    "requirements": [
      "Use WHERE pr.rating > (SELECT AVG(sub.rating) FROM Performance_Reviews sub WHERE sub.emp_id = pr.emp_id).",
      "Select pr.review_id, pr.emp_id, pr.review_year, pr.rating."
    ],
    "tableName": "Performance_Reviews",
    "hint": "WHERE pr.rating > (SELECT AVG(sub.rating) FROM Performance_Reviews sub WHERE sub.emp_id = pr.emp_id)",
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
    "title": "Filter pre-aggregated department metrics using a derived table",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query using a derived table in the FROM clause that computes department, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_sal from Employees, and outer-filters where avg_sal > 50000.",
    "requirements": [
      "FROM (SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt.",
      "Filter in outer query with WHERE dt.avg_sal > 50000.",
      "Select dt.department, dt.emp_count, dt.avg_sal."
    ],
    "tableName": "Employees",
    "hint": "FROM (SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt WHERE dt.avg_sal > 50000",
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
    "title": "Query workload totals from a derived staffing aggregation",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query using a derived table from Employee_Projects that calculates emp_id and SUM(hours_allocated) AS total_hours, and outer-filters where total_hours > 35.",
    "requirements": [
      "FROM (SELECT emp_id, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY emp_id) dt.",
      "Outer filter: WHERE dt.total_hours > 35.",
      "Select dt.emp_id, dt.total_hours."
    ],
    "tableName": "Employee_Projects",
    "hint": "FROM (SELECT emp_id, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY emp_id) dt WHERE dt.total_hours > 35",
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
    "title": "Join employee records with a departmental statistics derived table",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query to display e.emp_name, e.department, e.salary, and dept_stats.avg_dept_sal by joining Employees e with a derived table computing department and ROUND(AVG(salary), 2) AS avg_dept_sal.",
    "requirements": [
      "INNER JOIN Employees e with (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal FROM Employees GROUP BY department) dept_stats ON e.department = dept_stats.department.",
      "Select e.emp_name, e.department, e.salary, dept_stats.avg_dept_sal."
    ],
    "tableName": "Employees",
    "hint": "JOIN (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal FROM Employees GROUP BY department) dept_stats ON e.department = dept_stats.department",
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
    "title": "Rank employees by salary difference relative to departmental mean using a derived table",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query joining Employees e with a derived table calculating department average salary, selecting e.emp_name, e.department, e.salary, (e.salary - dt.avg_sal) AS diff_from_dept_avg, ordered by diff_from_dept_avg descending.",
    "requirements": [
      "Join Employees e with (SELECT department, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt ON e.department = dt.department.",
      "Calculate (e.salary - dt.avg_sal) AS diff_from_dept_avg.",
      "Select e.emp_name, e.department, e.salary, diff_from_dept_avg.",
      "Order by diff_from_dept_avg DESC."
    ],
    "tableName": "Employees",
    "hint": "ORDER BY diff_from_dept_avg DESC",
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
    "title": "Identify appraisal years distributing over 100,000 in bonuses using a derived table",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Medium",
    "problemStatement": "Write a SQL query from a derived table aggregating review_year, COUNT(*) AS reviews_count, and SUM(bonus) AS total_bonus from Performance_Reviews, filtering where total_bonus > 100000.",
    "requirements": [
      "FROM (SELECT review_year, COUNT(*) AS reviews_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY review_year) yt.",
      "Filter with WHERE yt.total_bonus > 100000.",
      "Select yt.review_year, yt.reviews_count, yt.total_bonus."
    ],
    "tableName": "Performance_Reviews",
    "hint": "FROM (SELECT review_year, COUNT(*) AS reviews_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY review_year) yt WHERE yt.total_bonus > 100000",
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
    "title": "Double-nested subquery: Find employees in the department with the highest average salary",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees in the department that holds the highest average salary in the company.",
    "requirements": [
      "Use WHERE department = (SELECT department FROM Employees GROUP BY department ORDER BY AVG(salary) DESC LIMIT 1).",
      "Select emp_id, emp_name, department, salary."
    ],
    "tableName": "Employees",
    "hint": "WHERE department = (SELECT department FROM Employees GROUP BY department ORDER BY AVG(salary) DESC LIMIT 1)",
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
    "title": "Nested subquery: Find initiatives belonging to the department with the largest operating budget",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Projects to display project_id, project_name, and budget for projects belonging to the department with the maximum budget in Departments.",
    "requirements": [
      "Use WHERE dept_id = (SELECT dept_id FROM Departments ORDER BY budget DESC LIMIT 1).",
      "Select project_id, project_name, budget."
    ],
    "tableName": "Projects, Departments",
    "hint": "WHERE dept_id = (SELECT dept_id FROM Departments ORDER BY budget DESC LIMIT 1)",
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
    "title": "Multi-level subquery: Find employees assigned to the highest funded active initiative",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, and department for employees assigned to the project with the maximum budget among active projects (status = 'Active').",
    "requirements": [
      "Use WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep WHERE ep.project_id = (SELECT project_id FROM Projects WHERE status = 'Active' ORDER BY budget DESC LIMIT 1)).",
      "Select emp_id, emp_name, department."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "ep.project_id = (SELECT project_id FROM Projects WHERE status = 'Active' ORDER BY budget DESC LIMIT 1)",
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
    "title": "Derived table: Compute employee salary as a percentage of department payroll",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query joining Employees e with a derived table calculating department total payroll, displaying e.emp_name, e.department, e.salary, and ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll.",
    "requirements": [
      "Join Employees e with (SELECT department, SUM(salary) AS total_dept_payroll FROM Employees GROUP BY department) dp ON e.department = dp.department.",
      "Calculate ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll.",
      "Select e.emp_name, e.department, e.salary, pct_of_dept_payroll."
    ],
    "tableName": "Employees",
    "hint": "ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll",
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
    "title": "Grand Challenge: Identify the single most rewarded employee by cumulative lifetime bonus",
    "topic": "Subqueries",
    "subtopic": "Derived Tables & Subqueries in the FROM Clause",
    "difficulty": "Hard",
    "problemStatement": "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for the employee who earned the highest cumulative bonus across all performance reviews.",
    "requirements": [
      "Use WHERE emp_id = (SELECT emp_id FROM Performance_Reviews GROUP BY emp_id ORDER BY SUM(bonus) DESC LIMIT 1).",
      "Select emp_id, emp_name, department, salary."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "WHERE emp_id = (SELECT emp_id FROM Performance_Reviews GROUP BY emp_id ORDER BY SUM(bonus) DESC LIMIT 1)",
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
    "title": "Q1. Employees Above a Salary Threshold",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Beginner",
    "problemStatement": "Find employees whose salary strictly exceeds 50,000 INR. Display employee ID, full name, department, and salary.",
    "requirements": [
      "Filter rows where salary is greater than 50,000.",
      "Select emp_id, emp_name, department, and salary in that exact order."
    ],
    "tableName": "Employees",
    "hint": "Use SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > 50000;",
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
    "title": "Q2. Employees Within a Salary Range",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Beginner",
    "problemStatement": "Find employees whose salary is between 30,000 and 60,000, inclusive. Display their names and salaries.",
    "requirements": [
      "Use the BETWEEN operator to perform an inclusive range filter.",
      "Project emp_name and salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, salary FROM Employees WHERE salary BETWEEN 30000 AND 60000;",
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
    "title": "Q3. Employees Matching Multiple Conditions",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who work in the 'IT' department and earn a salary greater than 50,000.",
    "requirements": [
      "Combine department and salary filters using the AND logical operator.",
      "Return all employee columns (*)."
    ],
    "tableName": "Employees",
    "hint": "SELECT * FROM Employees WHERE department = 'IT' AND salary > 50000;",
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
    "title": "Q4. Employees from Selected Cities",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find employees who live in Hyderabad or Chennai and have at least 3 years of work experience.",
    "requirements": [
      "Use IN ('Hyderabad', 'Chennai') or OR inside parentheses for city matching.",
      "Filter for experience >= 3.",
      "Return all employee columns (*)."
    ],
    "tableName": "Employees",
    "hint": "SELECT * FROM Employees WHERE city IN ('Hyderabad', 'Chennai') AND experience >= 3;",
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
    "title": "Q5. Names Matching a Pattern",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find employees whose names start with the letter 'A' or end with the letter 'a'. Display the employee ID and full name.",
    "requirements": [
      "Use LIKE pattern matching: 'A%' for names starting with A, and '%a' for names ending with a.",
      "Combine patterns using the OR operator.",
      "Project emp_id and emp_name."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_id, emp_name FROM Employees WHERE emp_name LIKE 'A%' OR emp_name LIKE '%a';",
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
    "title": "Q6. Total Employee Count",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Beginner",
    "problemStatement": "Return the total number of employees currently recorded in the company.",
    "requirements": [
      "Use the COUNT(*) aggregate function.",
      "Alias the resulting column as total_employees."
    ],
    "tableName": "Employees",
    "hint": "SELECT COUNT(*) AS total_employees FROM Employees;",
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
    "title": "Q7. Average Salary by Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Display each department and its average salary, ordered from highest average salary to lowest.",
    "requirements": [
      "Group results by department.",
      "Compute AVG(salary) aliased as avg_salary.",
      "Sort results by avg_salary descending."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department ORDER BY avg_salary DESC;",
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
    "title": "Q8. Departments with More Than Three Employees",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Display department names and their employee counts, including only departments that have more than 3 employees.",
    "requirements": [
      "Group by department.",
      "Use COUNT(*) aliased as emp_count.",
      "Filter aggregated results using HAVING COUNT(*) > 3."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, COUNT(*) AS emp_count FROM Employees GROUP BY department HAVING COUNT(*) > 3;",
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
    "title": "Q9. Highest and Lowest Salary",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Return the maximum salary, minimum salary, and the salary difference (spread) across the entire company.",
    "requirements": [
      "Compute MAX(salary) AS max_salary.",
      "Compute MIN(salary) AS min_salary.",
      "Compute MAX(salary) - MIN(salary) AS salary_difference."
    ],
    "tableName": "Employees",
    "hint": "SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary, MAX(salary) - MIN(salary) AS salary_difference FROM Employees;",
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
    "title": "Q10. Total Salary Expense by Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Display each department and the sum of its employee salaries, aliased as total_salary_expense.",
    "requirements": [
      "Group records by department.",
      "Use SUM(salary) AS total_salary_expense."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, SUM(salary) AS total_salary_expense FROM Employees GROUP BY department;",
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
    "title": "Q11. Cities with High Average Salaries",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Medium",
    "problemStatement": "Find office cities whose average employee salary strictly exceeds 45,000 INR.",
    "requirements": [
      "Group rows by city.",
      "Calculate AVG(salary) AS avg_salary.",
      "Filter groups using HAVING AVG(salary) > 45000."
    ],
    "tableName": "Employees",
    "hint": "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city HAVING AVG(salary) > 45000;",
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
    "title": "Q12. Department Salary Statistics",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Medium",
    "problemStatement": "For every department, display the employee count, average salary, maximum salary, and minimum salary.",
    "requirements": [
      "Group by department.",
      "Columns required: department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary FROM Employees GROUP BY department;",
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
    "title": "Q13. Employee and Department Details",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Easy",
    "problemStatement": "Display each employee's name, salary, department name, and department location by joining Employees with Departments.",
    "requirements": [
      "Perform an INNER JOIN between Employees and Departments on e.department = d.dept_name.",
      "Select e.emp_name, e.salary, d.dept_name, d.location."
    ],
    "tableName": "Employees, Departments",
    "hint": "SELECT e.emp_name, e.salary, d.dept_name, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
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
    "title": "Q14. Employees Without Project Assignments",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who have not been assigned to any project in the Employee_Projects table.",
    "requirements": [
      "Perform a LEFT JOIN from Employees to Employee_Projects on emp_id.",
      "Filter for unmatched rows using WHERE ep.project_id IS NULL.",
      "Select e.emp_id, e.emp_name, and e.department."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
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
    "title": "Q15. Projects Without Employees",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "List projects that currently have no employee assignments recorded in Employee_Projects.",
    "requirements": [
      "Perform a LEFT JOIN from Projects to Employee_Projects on project_id.",
      "Filter where ep.emp_id IS NULL.",
      "Select p.project_id, p.project_name, and p.status."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
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
    "title": "Q16. Employees Assigned to Multiple Projects",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find employees assigned to more than one distinct project. Show their names and project counts.",
    "requirements": [
      "Join Employees with Employee_Projects.",
      "Group by e.emp_id and e.emp_name.",
      "Filter using HAVING COUNT(DISTINCT ep.project_id) > 1.",
      "Select e.emp_name and COUNT(DISTINCT ep.project_id) AS project_count."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS project_count FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name HAVING COUNT(DISTINCT ep.project_id) > 1;",
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
    "title": "Q17. Employee Project Details",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, project name, assigned role, and hours allocated by joining Employees, Employee_Projects, and Projects.",
    "requirements": [
      "Perform a three-table join across Employees, Employee_Projects, and Projects.",
      "Select e.emp_name, p.project_name, ep.assigned_role, and ep.hours_allocated."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
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
    "title": "Q18. Department Employee Counts Including Empty Departments",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "List every department and its total employee count, including departments with zero employees.",
    "requirements": [
      "Perform a LEFT JOIN from Departments to Employees on d.dept_name = e.department.",
      "Group by d.dept_name.",
      "Use COUNT(e.emp_id) AS employee_count so empty departments produce 0 instead of 1."
    ],
    "tableName": "Departments, Employees",
    "hint": "SELECT d.dept_name, COUNT(e.emp_id) AS employee_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
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
    "title": "Q19. Employees Sharing the Same Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find pairs of distinct employees who belong to the same department. Avoid duplicate pairs and prevent pairing an employee with themselves.",
    "requirements": [
      "Perform a self-join on Employees on department.",
      "Use e1.emp_id < e2.emp_id to eliminate self-matches and duplicate mirrored pairs.",
      "Select e1.emp_name AS employee_1, e2.emp_name AS employee_2, and e1.department."
    ],
    "tableName": "Employees",
    "hint": "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department AND e1.emp_id < e2.emp_id;",
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
    "title": "Q20. Employees Earning More Than Their Department Head",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Compare employee salaries against their department head's salary. Return employees whose salary is strictly higher than their department head.",
    "requirements": [
      "Join Employees e with Departments d on e.department = d.dept_name.",
      "Join Departments d with Employees mgr on d.dept_head = mgr.emp_name.",
      "Filter for e.salary > mgr.salary.",
      "Display e.emp_name, e.department, e.salary, mgr.emp_name AS dept_head_name, and mgr.salary AS dept_head_salary."
    ],
    "tableName": "Employees, Departments",
    "hint": "SELECT e.emp_name, e.department, e.salary, mgr.emp_name AS dept_head_name, mgr.salary AS dept_head_salary FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employees mgr ON d.dept_head = mgr.emp_name WHERE e.salary > mgr.salary;",
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
    "title": "Q21. Cross-Department Collaboration",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Find pairs of employees assigned to the same project who come from different departments. Avoid duplicate pairs.",
    "requirements": [
      "Join Employee_Projects ep1 and ep2 on project_id with ep1.emp_id < ep2.emp_id.",
      "Join Employees e1 and e2 on emp_id.",
      "Filter for e1.department <> e2.department.",
      "Select ep1.project_id, e1.emp_name AS employee_1, e1.department AS dept_1, e2.emp_name AS employee_2, e2.department AS dept_2."
    ],
    "tableName": "Employee_Projects, Employees",
    "hint": "SELECT ep1.project_id, e1.emp_name AS employee_1, e1.department AS dept_1, e2.emp_name AS employee_2, e2.department AS dept_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id AND ep1.emp_id < ep2.emp_id INNER JOIN Employees e1 ON ep1.emp_id = e1.emp_id INNER JOIN Employees e2 ON ep2.emp_id = e2.emp_id WHERE e1.department <> e2.department;",
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
    "title": "Q22. Projects with Total Allocated Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Display each project name and the sum of hours allocated across assigned employees. Include projects with 0 hours allocated.",
    "requirements": [
      "Perform a LEFT JOIN from Projects to Employee_Projects.",
      "Group by p.project_id and p.project_name.",
      "Use COALESCE(SUM(ep.hours_allocated), 0) AS total_hours."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
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
    "title": "Q23. Employees with Perfect Performance Ratings",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Easy",
    "problemStatement": "Display employee name, department, review year, and rating for employees who received a rating of 5 in any performance review.",
    "requirements": [
      "Join Employees with Performance_Reviews on emp_id.",
      "Filter for pr.rating = 5.",
      "Select e.emp_name, e.department, pr.review_year, and pr.rating."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
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
    "title": "Q24. Most Recent Performance Review per Employee",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "For every employee who has received at least one review, display their name, department, latest review year, and latest rating.",
    "requirements": [
      "Join Employees with Performance_Reviews.",
      "Filter for the latest review per employee using a correlated subquery.",
      "Select e.emp_name, e.department, pr.review_year, and pr.rating."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_id = (SELECT pr2.review_id FROM Performance_Reviews pr2 WHERE pr2.emp_id = pr.emp_id ORDER BY pr2.review_year DESC, pr2.review_id DESC LIMIT 1);",
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
    "title": "Q25. Employees Earning Above Company Average",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Easy",
    "problemStatement": "Find employees whose salary is strictly greater than the overall company average salary.",
    "requirements": [
      "Use a scalar subquery: (SELECT AVG(salary) FROM Employees).",
      "Display emp_id, emp_name, department, and salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
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
    "title": "Q26. Second Highest Salary Without LIMIT",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find the second highest distinct salary across all employees without using the LIMIT clause.",
    "requirements": [
      "Do NOT use LIMIT or TOP.",
      "Use MAX(salary) in outer query where salary < (SELECT MAX(salary) FROM Employees).",
      "Alias the result as second_highest_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT MAX(salary) AS second_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees);",
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
    "title": "Q27. Employees in Departments with Above-Average Budgets",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find employees who belong to departments whose budget is greater than the average department budget across the company.",
    "requirements": [
      "Compute average budget across Departments in an inner subquery.",
      "Filter Employees whose department is IN that subquery.",
      "Display emp_name, department, and salary."
    ],
    "tableName": "Employees, Departments",
    "hint": "SELECT emp_name, department, salary FROM Employees WHERE department IN (SELECT dept_name FROM Departments WHERE budget > (SELECT AVG(budget) FROM Departments));",
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
    "title": "Q28. Employees Assigned to High-Budget Projects",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find distinct employees assigned to any project whose budget exceeds 250,000 INR.",
    "requirements": [
      "Use an IN subquery joining Employee_Projects with Projects where budget > 250000.",
      "Select DISTINCT emp_id, emp_name, and department from Employees."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "SELECT DISTINCT e.emp_id, e.emp_name, e.department FROM Employees e WHERE e.emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget > 250000);",
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
    "title": "Q29. Department with the Highest Total Payroll",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find the single department that has the highest total salary expense in the company.",
    "requirements": [
      "Group Employees by department.",
      "Calculate SUM(salary) AS total_payroll.",
      "Sort by total_payroll DESC and LIMIT 1."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, SUM(salary) AS total_payroll FROM Employees GROUP BY department ORDER BY total_payroll DESC LIMIT 1;",
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
    "title": "Q30. Employees Earning Above Their Department Average",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Find employees who earn more than the average salary of their own specific department.",
    "requirements": [
      "Use a correlated subquery calculating AVG(salary) for the current employee's department.",
      "Select emp_name, department, and salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
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
    "title": "Q31. Employees Without Any Performance Reviews",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find employees who have no review entries recorded in Performance_Reviews using a NOT EXISTS subquery.",
    "requirements": [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id).",
      "Display emp_id, emp_name, and department."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id);",
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
    "title": "Q32. Projects Staffed Exclusively by IT Employees",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Find projects that are staffed exclusively by employees from the 'IT' department (must have at least one assigned employee and zero non-IT employees).",
    "requirements": [
      "Verify at least one employee is assigned using EXISTS.",
      "Verify no non-IT employee is assigned using NOT EXISTS.",
      "Select project_id and project_name."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "SELECT p.project_id, p.project_name FROM Projects p WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id) AND NOT EXISTS (SELECT 1 FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.project_id = p.project_id AND e.department <> 'IT');",
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
    "problemStatement": "Find the third highest distinct salary across all employees without using the LIMIT clause.",
    "requirements": [
      "Do NOT use LIMIT.",
      "Use double nested subqueries with MAX(salary).",
      "Alias result as third_highest_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT MAX(salary) AS third_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees));",
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
    "title": "Q34. Employees Working More Hours Than the Project Average",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "For each project assignment, find employees whose allocated hours strictly exceed the average allocated hours for that project.",
    "requirements": [
      "Join Employee_Projects ep with Employees e on emp_id.",
      "Use a correlated subquery calculating AVG(hours_allocated) for ep.project_id.",
      "Display project_id, emp_name, and hours_allocated."
    ],
    "tableName": "Employee_Projects, Employees",
    "hint": "SELECT ep.project_id, e.emp_name, ep.hours_allocated FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.hours_allocated > (SELECT AVG(ep2.hours_allocated) FROM Employee_Projects ep2 WHERE ep2.project_id = ep.project_id);",
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
    "title": "Q35. Top 3 Highest Earners Overall",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Easy",
    "problemStatement": "Display the top 3 highest-earning employees in the company, showing employee name, department, and salary.",
    "requirements": [
      "Sort by salary DESC.",
      "Limit output to 3 rows.",
      "Select emp_name, department, and salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 3;",
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
    "title": "Q36. Highest Earner in Each Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Display the employee name, department, and salary for the highest earner in each department.",
    "requirements": [
      "Use a correlated subquery matching e.salary with MAX(e2.salary) for that department.",
      "Display emp_name, department, and salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary = (SELECT MAX(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
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
    "title": "Q37. Dense Rank of Salaries by Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Using SQL window functions, assign a dense rank to employees within each department ordered by salary descending.",
    "requirements": [
      "Use DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC).",
      "Alias the ranking column as dept_salary_rank.",
      "Select emp_name, department, salary, and dept_salary_rank."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_salary_rank FROM Employees;",
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
    "title": "Q38. Employees with Identical Salaries",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Find pairs of distinct employees who earn the exact same salary. Avoid duplicate pairings.",
    "requirements": [
      "Self-join Employees on salary.",
      "Enforce e1.emp_id < e2.emp_id to prevent duplicates.",
      "Select e1.emp_name AS employee_1, e2.emp_name AS employee_2, and e1.salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.salary FROM Employees e1 INNER JOIN Employees e2 ON e1.salary = e2.salary AND e1.emp_id < e2.emp_id;",
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
    "title": "Q39. Bottom 2 Lowest Earners in the Company",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Easy",
    "problemStatement": "Find the 2 employees with the lowest salaries in the company, ordered from lowest salary upwards.",
    "requirements": [
      "Sort by salary ASC.",
      "Limit output to 2 rows.",
      "Select emp_name, department, and salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, department, salary FROM Employees ORDER BY salary ASC LIMIT 2;",
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
    "title": "Q40. Find Duplicate Office Locations Across Departments",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Find any office locations that appear more than once across the Departments table, along with their frequency count.",
    "requirements": [
      "Group by location.",
      "Filter for COUNT(*) > 1 using HAVING.",
      "Select location and COUNT(*) AS dept_count."
    ],
    "tableName": "Departments",
    "hint": "SELECT location, COUNT(*) AS dept_count FROM Departments GROUP BY location HAVING COUNT(*) > 1;",
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
    "title": "Q41. Find Departments Without Any Employees",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Find departments in the Departments table that currently have no assigned employees in the Employees table.",
    "requirements": [
      "Perform a LEFT JOIN from Departments d to Employees e on d.dept_name = e.department.",
      "Filter for e.emp_id IS NULL.",
      "Display d.dept_id, d.dept_name, and d.location."
    ],
    "tableName": "Departments, Employees",
    "hint": "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
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
    "title": "Q42. Identify Inactive Projects (Zero Assigned Hours)",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Find projects that either have no assigned employees or have a total of 0 allocated hours.",
    "requirements": [
      "Left join Projects with Employee_Projects.",
      "Group by project_id, project_name, and status.",
      "Use HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0;",
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
    "title": "Q43. Detect Salary Outliers within Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Hard",
    "problemStatement": "Find employees whose salary is more than 30% higher than the average salary of their own department.",
    "requirements": [
      "Join Employees with a subquery computing department average salary.",
      "Filter for e.salary > sub.avg_dept_sal * 1.3.",
      "Select e.emp_name, e.department, e.salary, and ROUND(sub.avg_dept_sal, 2) AS dept_avg_salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT e.emp_name, e.department, e.salary, ROUND(sub.avg_dept_sal, 2) AS dept_avg_salary FROM Employees e INNER JOIN (SELECT department, AVG(salary) AS avg_dept_sal FROM Employees GROUP BY department) sub ON e.department = sub.department WHERE e.salary > sub.avg_dept_sal * 1.3;",
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
    "title": "Q44. Salary Review Eligibility",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Medium",
    "problemStatement": "Find employees in Finance or IT with at least 5 years of experience earning less than 70,000 INR, who qualify for a mid-year compensation review.",
    "requirements": [
      "Filter department IN ('Finance', 'IT').",
      "Filter experience >= 5.",
      "Filter salary < 70000.",
      "Select emp_id, emp_name, department, experience, and salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_id, emp_name, department, experience, salary FROM Employees WHERE department IN ('Finance', 'IT') AND experience >= 5 AND salary < 70000;",
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
    "title": "Q45. Departments Exceeding Annual Salary Budget",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Hard",
    "problemStatement": "Compare each department's total annualized payroll (monthly salary * 12) against its annual budget. Return departments where annual payroll strictly exceeds the budget.",
    "requirements": [
      "Join Departments with Employees on d.dept_name = e.department.",
      "Group by d.dept_name and d.budget.",
      "Filter using HAVING SUM(e.salary * 12) > d.budget.",
      "Select d.dept_name, SUM(e.salary * 12) AS annual_payroll, and d.budget."
    ],
    "tableName": "Departments, Employees",
    "hint": "SELECT d.dept_name, SUM(e.salary * 12) AS annual_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING SUM(e.salary * 12) > d.budget;",
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
    "title": "Q46. Workload Classification by Total Allocated Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Hard",
    "problemStatement": "Calculate total weekly hours allocated to each employee across all projects and classify their workload into tiers: 'Unassigned' (0 hours), 'Light Workload' (under 25 hours), 'Moderate Workload' (25 to 35 hours), and 'Heavy Workload' (over 35 hours).",
    "requirements": [
      "Left join Employees with Employee_Projects.",
      "Group by e.emp_id and e.emp_name.",
      "Use CASE to classify total weekly hours.",
      "Select e.emp_id, e.emp_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, and the workload_tier."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "SELECT e.emp_id, e.emp_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, CASE WHEN COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unassigned' WHEN SUM(ep.hours_allocated) < 25 THEN 'Light Workload' WHEN SUM(ep.hours_allocated) <= 35 THEN 'Moderate Workload' ELSE 'Heavy Workload' END AS workload_tier FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name;",
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
    "title": "Q47. Salary Tier Classification",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Easy",
    "problemStatement": "Classify each employee's salary into tiers: 'Low' for salaries below 35,000, 'Medium' for salaries between 35,000 and 60,000 inclusive, and 'High' for salaries above 60,000.",
    "requirements": [
      "Use a CASE expression evaluating salary thresholds.",
      "Select emp_name, department, salary, and alias the classification as salary_tier."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, department, salary, CASE WHEN salary < 35000 THEN 'Low' WHEN salary <= 60000 THEN 'Medium' ELSE 'High' END AS salary_tier FROM Employees;",
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
    "title": "Q48. Experience-Based Seniority Tier",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Easy",
    "problemStatement": "Classify employees into seniority tiers based on years of experience: 'Fresher' (under 2 years), 'Junior' (2 to 4 years), 'Mid-Level' (5 to 8 years), and 'Senior' (9 or more years).",
    "requirements": [
      "Evaluate experience using CASE WHEN conditions.",
      "Select emp_name, experience, and alias tier as seniority_tier."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, experience, CASE WHEN experience < 2 THEN 'Fresher' WHEN experience <= 4 THEN 'Junior' WHEN experience <= 8 THEN 'Mid-Level' ELSE 'Senior' END AS seniority_tier FROM Employees;",
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
    "title": "Q49. Conditional Department Salary Summary",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Medium",
    "problemStatement": "For each department, calculate the count of high earners (salary > 50,000) and standard earners (salary <= 50,000) using conditional aggregation with CASE expressions.",
    "requirements": [
      "Group by department.",
      "Use SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners.",
      "Use SUM(CASE WHEN salary <= 50000 THEN 1 ELSE 0 END) AS standard_earners."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners, SUM(CASE WHEN salary <= 50000 THEN 1 ELSE 0 END) AS standard_earners FROM Employees GROUP BY department;",
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
    "title": "Q50. Performance-Based Bonus Recommendation",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Medium",
    "problemStatement": "Recommend a bonus category for each reviewed employee based on their rating: rating of 5 is 'Exceptional', rating of 4 is 'Strong', rating of 3 is 'Satisfactory', and anything below 3 is 'Needs Improvement'.",
    "requirements": [
      "Join Employees with Performance_Reviews on emp_id.",
      "Use CASE to determine the recommendation label.",
      "Select e.emp_name, pr.review_year, pr.rating, and alias the recommendation as recommendation."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "SELECT e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.rating = 5 THEN 'Exceptional' WHEN pr.rating = 4 THEN 'Strong' WHEN pr.rating = 3 THEN 'Satisfactory' ELSE 'Needs Improvement' END AS recommendation FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
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
    "title": "Map office cities into operational zones using simple CASE",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Write a SQL query using a simple CASE expression to map employee office cities into operational zones: 'Hyderabad' and 'Vijayawada' to 'South-Central', 'Chennai' to 'South-Coastal', 'Bengaluru' to 'South-Tech', and any other location to 'Other Zone'.",
    "requirements": [
      "Use simple CASE syntax matching directly on the city column: CASE city WHEN ...",
      "Alias the calculated column as operational_zone.",
      "Project emp_id, emp_name, city, and operational_zone in that exact order."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_id, emp_name, city, CASE city WHEN 'Hyderabad' THEN 'South-Central' WHEN 'Vijayawada' THEN 'South-Central' WHEN 'Chennai' THEN 'South-Coastal' WHEN 'Bengaluru' THEN 'South-Tech' ELSE 'Other Zone' END AS operational_zone FROM Employees;",
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
    "title": "Generate a binary recent hire indicator using searched CASE",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Write a query using a searched CASE statement that flags whether an employee was hired recently. Return a flag is_recent_hire that evaluates to 1 if joining_year is 2023 or later, and 0 otherwise.",
    "requirements": [
      "Use searched CASE syntax: CASE WHEN joining_year >= 2023 THEN 1 ELSE 0 END.",
      "Alias the result as is_recent_hire.",
      "Project emp_name, joining_year, and is_recent_hire."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, joining_year, CASE WHEN joining_year >= 2023 THEN 1 ELSE 0 END AS is_recent_hire FROM Employees;",
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
    "title": "Classify project delivery urgency with explicit ELSE fallback",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Display project name, status, and delivery_urgency. If status is 'Active', urgency is 'In Progress'; if status is 'Planning', urgency is 'Upcoming'; for all other statuses, explicitly return 'Archive / Standby' using the ELSE clause.",
    "requirements": [
      "Evaluate project status.",
      "Include an explicit ELSE branch returning 'Archive / Standby'.",
      "Alias the calculated column as delivery_urgency.",
      "Select project_name, status, and delivery_urgency."
    ],
    "tableName": "Projects",
    "hint": "SELECT project_name, status, CASE status WHEN 'Active' THEN 'In Progress' WHEN 'Planning' THEN 'Upcoming' ELSE 'Archive / Standby' END AS delivery_urgency FROM Projects;",
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
    "title": "Identify fast-track talent using compound boolean conditions",
    "topic": "CASE Expressions",
    "subtopic": "CASE Fundamentals",
    "difficulty": "Beginner",
    "problemStatement": "Write a query to evaluate employee career profiles. If an employee is aged 25 or younger (age <= 25) AND has at least 2 years of experience (experience >= 2), designate them as 'Fast Track Candidate'; otherwise label as 'Standard Profile'.",
    "requirements": [
      "Combine age and experience predicates using the AND operator inside the WHEN clause.",
      "Project emp_name, age, experience, and career_profile."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, age, experience, CASE WHEN age <= 25 AND experience >= 2 THEN 'Fast Track Candidate' ELSE 'Standard Profile' END AS career_profile FROM Employees;",
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
    "title": "Categorize workforce into demographic age brackets",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Categorize employees into age cohorts: 'Under 25' for ages under 25, '25 to 29' for ages 25 through 29, and '30 and Above' for ages 30 and older. Display emp_id, emp_name, age, and age_group.",
    "requirements": [
      "Evaluate age using ordered boundary thresholds.",
      "Alias the result as age_group.",
      "Project emp_id, emp_name, age, and age_group."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_id, emp_name, age, CASE WHEN age < 25 THEN 'Under 25' WHEN age <= 29 THEN '25 to 29' ELSE '30 and Above' END AS age_group FROM Employees;",
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
    "title": "Apply department-specific compensation scale status",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Classify employees into compensation scales: If an employee belongs to the 'IT' department and earns 50,000 or more, label as 'Tech Core Scale'; if in 'IT' and earns under 50,000, label as 'Tech Entry Scale'; for all non-IT employees, label as 'General Corporate Scale'.",
    "requirements": [
      "Evaluate department and salary thresholds.",
      "Alias the scale classification as pay_scale_status.",
      "Project emp_name, department, salary, and pay_scale_status."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, department, salary, CASE WHEN department = 'IT' AND salary >= 50000 THEN 'Tech Core Scale' WHEN department = 'IT' THEN 'Tech Entry Scale' ELSE 'General Corporate Scale' END AS pay_scale_status FROM Employees;",
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
    "title": "Classify employee tenure into organizational loyalty brackets",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Determine employee loyalty tiers based on their joining year: 'Veteran' if joined before 2020 (joining_year < 2020), 'Established' if joined between 2020 and 2022 inclusive, and 'New Hire' if joined in 2023 or later. Display emp_name, joining_year, and loyalty_tier.",
    "requirements": [
      "Evaluate joining_year boundaries.",
      "Alias the result as loyalty_tier.",
      "Project emp_name, joining_year, and loyalty_tier."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, joining_year, CASE WHEN joining_year < 2020 THEN 'Veteran' WHEN joining_year <= 2022 THEN 'Established' ELSE 'New Hire' END AS loyalty_tier FROM Employees;",
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
    "title": "Group organizational departments into broad corporate divisions",
    "topic": "CASE Expressions",
    "subtopic": "Conditional Classification",
    "difficulty": "Beginner",
    "problemStatement": "Map each department in the Departments table into an enterprise division: 'IT' and 'R&D' to 'Technology & Innovation'; 'Sales' and 'Marketing' to 'Growth & Revenue'; 'Finance' and 'Legal' to 'Governance & Capital'; and all others to 'Operations & Support'. Display dept_name and division.",
    "requirements": [
      "Use IN (...) expressions inside WHEN clauses to group multiple departments.",
      "Alias the calculated column as division.",
      "Project dept_name and division."
    ],
    "tableName": "Departments",
    "hint": "SELECT dept_name, CASE WHEN dept_name IN ('IT', 'R&D') THEN 'Technology & Innovation' WHEN dept_name IN ('Sales', 'Marketing') THEN 'Growth & Revenue' WHEN dept_name IN ('Finance', 'Legal') THEN 'Governance & Capital' ELSE 'Operations & Support' END AS division FROM Departments;",
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
    "title": "Sort employee roster in custom executive presentation order",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Sort employees by department according to executive presentation priority rather than alphabetical order: 'IT' first, followed by 'Finance', 'Marketing', 'Sales', and finally 'HR'. Break ties within each department by salary descending. Display emp_name, department, and salary.",
    "requirements": [
      "Embed a CASE expression inside the ORDER BY clause mapping departments to ordinal integers 1 through 5.",
      "Include secondary sorting by salary DESC.",
      "Select emp_name, department, and salary."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, department, salary FROM Employees ORDER BY CASE department WHEN 'IT' THEN 1 WHEN 'Finance' THEN 2 WHEN 'Marketing' THEN 3 WHEN 'Sales' THEN 4 WHEN 'HR' THEN 5 ELSE 6 END, salary DESC;",
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
    "title": "Audit performance bonuses with NULL-safe evaluation",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Generate a bonus distribution audit from Performance_Reviews. For each review, display review_id, emp_id, rating, bonus, and payout_status: If bonus IS NULL or 0, display 'No Bonus Awarded'; If bonus is under 15,000, display 'Standard Bonus'; Otherwise display 'High Performance Bonus'.",
    "requirements": [
      "Use IS NULL alongside comparison operators to safely inspect optional bonus values.",
      "Alias the status as payout_status.",
      "Project review_id, emp_id, rating, bonus, and payout_status."
    ],
    "tableName": "Performance_Reviews",
    "hint": "SELECT review_id, emp_id, rating, bonus, CASE WHEN bonus IS NULL OR bonus = 0 THEN 'No Bonus Awarded' WHEN bonus < 15000 THEN 'Standard Bonus' ELSE 'High Performance Bonus' END AS payout_status FROM Performance_Reviews;",
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
    "title": "Filter by a CASE-derived classification using an outer subquery",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "Classify employee salaries into pay grades: 'Executive Pay' (salary >= 75000), 'Mid Pay' (salary between 40000 and 74999), and 'Junior Pay' (salary < 40000). Wrap this logic in an outer query or CTE to filter and return ONLY employees classified as 'Executive Pay'. Display emp_name, department, salary, and pay_grade.",
    "requirements": [
      "Derive pay_grade using CASE in an inner derived table (subquery).",
      "Filter for pay_grade = 'Executive Pay' in the outer WHERE clause.",
      "Display emp_name, department, salary, and pay_grade."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, department, salary, pay_grade FROM (SELECT emp_name, department, salary, CASE WHEN salary >= 75000 THEN 'Executive Pay' WHEN salary >= 40000 THEN 'Mid Pay' ELSE 'Junior Pay' END AS pay_grade FROM Employees) classified WHERE pay_grade = 'Executive Pay';",
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
    "title": "Order corporate initiatives by project lifecycle status urgency",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Sorting and Filtering",
    "difficulty": "Medium",
    "problemStatement": "List all projects sorted by operational status urgency: 'Active' first, 'Planning' second, and 'Completed' last. Break ties by project budget in descending order. Display project_name, status, and budget.",
    "requirements": [
      "Sort status using CASE: 'Active' -> 1, 'Planning' -> 2, 'Completed' -> 3.",
      "Secondary sort by budget DESC.",
      "Select project_name, status, and budget."
    ],
    "tableName": "Projects",
    "hint": "SELECT project_name, status, budget FROM Projects ORDER BY CASE status WHEN 'Active' THEN 1 WHEN 'Planning' THEN 2 WHEN 'Completed' THEN 3 ELSE 4 END, budget DESC;",
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
    "title": "Count total and senior staff per city using COUNT(CASE WHEN ...)",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "For each city, calculate the total number of employees, and count how many have 5 or more years of experience using COUNT(CASE WHEN experience >= 5 THEN 1 END). Display city, total_employees, and senior_count.",
    "requirements": [
      "Group results by city.",
      "Use COUNT(*) AS total_employees.",
      "Use COUNT(CASE WHEN experience >= 5 THEN 1 END) AS senior_count (omitting ELSE yields NULL, which COUNT ignores)."
    ],
    "tableName": "Employees",
    "hint": "SELECT city, COUNT(*) AS total_employees, COUNT(CASE WHEN experience >= 5 THEN 1 END) AS senior_count FROM Employees GROUP BY city;",
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
    "title": "Calculate total payroll expenditure split across experience brackets",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "In a single summary query without a GROUP BY clause, compute the total salary expense for junior employees (experience < 4, aliased as junior_payroll) and senior employees (experience >= 4, aliased as senior_payroll).",
    "requirements": [
      "Use SUM(CASE WHEN experience < 4 THEN salary ELSE 0 END) AS junior_payroll.",
      "Use SUM(CASE WHEN experience >= 4 THEN salary ELSE 0 END) AS senior_payroll.",
      "Produce a single aggregate row across all company employees."
    ],
    "tableName": "Employees",
    "hint": "SELECT SUM(CASE WHEN experience < 4 THEN salary ELSE 0 END) AS junior_payroll, SUM(CASE WHEN experience >= 4 THEN salary ELSE 0 END) AS senior_payroll FROM Employees;",
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
    "title": "Compare low, mid, and high salary bands per department",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "For each department, display the count of employees in three salary tiers: tier_low (salary < 35000), tier_mid (salary between 35000 and 60000 inclusive), and tier_high (salary > 60000). Group by department.",
    "requirements": [
      "Group by department.",
      "Use SUM(CASE WHEN ...) to count matches for each tier.",
      "Select department, tier_low, tier_mid, and tier_high."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, SUM(CASE WHEN salary < 35000 THEN 1 ELSE 0 END) AS tier_low, SUM(CASE WHEN salary BETWEEN 35000 AND 60000 THEN 1 ELSE 0 END) AS tier_mid, SUM(CASE WHEN salary > 60000 THEN 1 ELSE 0 END) AS tier_high FROM Employees GROUP BY department;",
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
    "title": "Compute conditional average salary for IT versus business departments",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "Compute the company-wide average salary of IT employees versus all non-IT department employees in a single row summary. Display avg_it_salary and avg_non_it_salary, both rounded to 2 decimal places.",
    "requirements": [
      "Use ROUND(AVG(CASE WHEN department = 'IT' THEN salary END), 2) AS avg_it_salary.",
      "Use ROUND(AVG(CASE WHEN department <> 'IT' THEN salary END), 2) AS avg_non_it_salary.",
      "Do NOT use an ELSE 0 branch, as 0 would distort the arithmetic mean."
    ],
    "tableName": "Employees",
    "hint": "SELECT ROUND(AVG(CASE WHEN department = 'IT' THEN salary END), 2) AS avg_it_salary, ROUND(AVG(CASE WHEN department <> 'IT' THEN salary END), 2) AS avg_non_it_salary FROM Employees;",
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
    "title": "Calculate department high earner percentage with zero-division guard",
    "topic": "CASE Expressions",
    "subtopic": "CASE with Aggregates",
    "difficulty": "Medium",
    "problemStatement": "For each department, calculate the percentage of employees earning 50,000 or more. Display department, total_staff, high_earner_count, and high_earner_percentage (rounded to 1 decimal place). Use a CASE expression to prevent division-by-zero errors if total_staff is 0.",
    "requirements": [
      "Group by department.",
      "Compute total_staff, high_earner_count, and high_earner_percentage.",
      "Safely guard division with CASE WHEN COUNT(*) = 0 THEN 0.0 ELSE ... END."
    ],
    "tableName": "Employees",
    "hint": "SELECT department, COUNT(*) AS total_staff, SUM(CASE WHEN salary >= 50000 THEN 1 ELSE 0 END) AS high_earner_count, ROUND(CASE WHEN COUNT(*) = 0 THEN 0.0 ELSE (SUM(CASE WHEN salary >= 50000 THEN 1.0 ELSE 0.0 END) / COUNT(*)) * 100.0 END, 1) AS high_earner_percentage FROM Employees GROUP BY department;",
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
    "title": "Categorize employee work arrangement using joined department headquarters",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Join Employees with Departments on e.department = d.dept_name. Categorize each employee's work model: If the employee's office city matches the department's primary location, label as 'Colocated HQ'; otherwise label as 'Regional Branch'. Display emp_name, department, employee city, department location, and work_model.",
    "requirements": [
      "Inner join Employees e with Departments d on e.department = d.dept_name.",
      "Compare e.city with d.location inside CASE.",
      "Select e.emp_name, e.department, e.city, d.location, and work_model."
    ],
    "tableName": "Employees, Departments",
    "hint": "SELECT e.emp_name, e.department, e.city, d.location, CASE WHEN e.city = d.location THEN 'Colocated HQ' ELSE 'Regional Branch' END AS work_model FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
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
    "title": "Classify project resource intensity via aggregated staffing allocations",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Join Projects with Employee_Projects to calculate total allocated hours and assigned headcount for every project. Classify resource intensity: If headcount is 0 OR total hours is 0 -> 'Unstaffed'; If total hours < 50 -> 'Low Intensity'; If total hours <= 80 -> 'Medium Intensity'; Otherwise -> 'High Intensity'. Display project_name, total_hours, staff_count, and intensity_rating.",
    "requirements": [
      "Left join Projects p with Employee_Projects ep on project_id.",
      "Group by p.project_id and p.project_name.",
      "Use COALESCE(SUM(ep.hours_allocated), 0) AS total_hours.",
      "Evaluate total hours and headcount inside CASE."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, COUNT(ep.emp_id) AS staff_count, CASE WHEN COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unstaffed' WHEN SUM(ep.hours_allocated) < 50 THEN 'Low Intensity' WHEN SUM(ep.hours_allocated) <= 80 THEN 'Medium Intensity' ELSE 'High Intensity' END AS intensity_rating FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
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
    "title": "Classify employee salary standing against correlated department averages",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Classify each employee's salary standing relative to their own department's average salary: If salary is strictly greater than 115% of the department average, label as 'Above Dept Average'; If between 85% and 115% inclusive, label as 'At Dept Average'; If below 85%, label as 'Below Dept Average'. Display emp_name, department, salary, and salary_standing.",
    "requirements": [
      "Use a correlated subquery calculating AVG(e2.salary) for e.department inside the WHEN branches.",
      "Project emp_name, department, salary, and salary_standing."
    ],
    "tableName": "Employees",
    "hint": "SELECT e.emp_name, e.department, e.salary, CASE WHEN e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 1.15 THEN 'Above Dept Average' WHEN e.salary >= (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department) * 0.85 THEN 'At Dept Average' ELSE 'Below Dept Average' END AS salary_standing FROM Employees e;",
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
    "title": "Generate project capital scale report comparing project versus department budget",
    "topic": "CASE Expressions",
    "subtopic": "CASE with JOINs and Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Join Projects with Departments on dept_id. Classify project_scale based on what share of the owning department's budget the project consumes: If project budget exceeds 30% of department budget, label as 'Major Capital Project'; If between 15% and 30% inclusive, label as 'Significant Project'; Otherwise 'Routine Department Project'. Display project_name, dept_name, project_budget, dept_budget, and project_scale.",
    "requirements": [
      "Inner join Projects p with Departments d on p.dept_id = d.dept_id.",
      "Compare p.budget against percentages of d.budget inside CASE.",
      "Select p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget, and project_scale."
    ],
    "tableName": "Projects, Departments",
    "hint": "SELECT p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget, CASE WHEN p.budget > d.budget * 0.30 THEN 'Major Capital Project' WHEN p.budget >= d.budget * 0.15 THEN 'Significant Project' ELSE 'Routine Department Project' END AS project_scale FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id;",
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
    "title": "Assess employee retention risk using nested CASE expressions",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Evaluate retention risk using a nested CASE expression. For employees with 6 or more years of experience: if salary is under 60,000 label as 'High Flight Risk (Underpaid Veteran)', else 'Key Retained Leader'. For employees with under 6 years of experience: if salary is under 30,000 label as 'Entry Flight Risk', else 'Standard Stable'. Display emp_name, experience, salary, and retention_assessment.",
    "requirements": [
      "Construct a nested CASE expression (CASE inside a THEN or ELSE branch).",
      "Alias the assessment as retention_assessment.",
      "Project emp_name, experience, salary, and retention_assessment."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, experience, salary, CASE WHEN experience >= 6 THEN CASE WHEN salary < 60000 THEN 'High Flight Risk (Underpaid Veteran)' ELSE 'Key Retained Leader' END ELSE CASE WHEN salary < 30000 THEN 'Entry Flight Risk' ELSE 'Standard Stable' END END AS retention_assessment FROM Employees;",
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
    "title": "Implement priority-ordered tier designations with short-circuiting logic",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Assign professional career designations where overlapping qualifications exist. The most prestigious tier must take precedence: 1) experience >= 8 AND salary >= 75000 -> 'Leadership Tier'; 2) experience >= 6 OR salary >= 60000 -> 'Senior Contributor'; 3) experience >= 3 -> 'Core Professional'; 4) Else -> 'Associate'. Display emp_name, experience, salary, and tier_designation.",
    "requirements": [
      "Order WHEN branches strictly from most restrictive to most general.",
      "Alias result as tier_designation.",
      "Project emp_name, experience, salary, and tier_designation."
    ],
    "tableName": "Employees",
    "hint": "SELECT emp_name, experience, salary, CASE WHEN experience >= 8 AND salary >= 75000 THEN 'Leadership Tier' WHEN experience >= 6 OR salary >= 60000 THEN 'Senior Contributor' WHEN experience >= 3 THEN 'Core Professional' ELSE 'Associate' END AS tier_designation FROM Employees;",
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
    "title": "Build comprehensive appraisal audit handling outer joins and NULL bonuses",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Left join Employees with Performance_Reviews to evaluate appraisal status across all employees: If the employee has never been reviewed (pr.review_id IS NULL) -> 'Pending Initial Review'; If rating >= 4 AND bonus IS NOT NULL -> 'Top Performer (Bonus Awarded)'; If rating >= 4 AND bonus IS NULL -> 'High Rating (No Cash Bonus)'; Else -> 'Standard Rating (No Cash Bonus)'. Display emp_id, emp_name, review_year, rating, and appraisal_status.",
    "requirements": [
      "Perform a LEFT JOIN from Employees e to Performance_Reviews pr on emp_id.",
      "Use CASE to evaluate missing reviews and null bonus fields.",
      "Select e.emp_id, e.emp_name, pr.review_year, pr.rating, and appraisal_status."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "SELECT e.emp_id, e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.review_id IS NULL THEN 'Pending Initial Review' WHEN pr.rating >= 4 AND pr.bonus IS NOT NULL THEN 'Top Performer (Bonus Awarded)' WHEN pr.rating >= 4 AND pr.bonus IS NULL THEN 'High Rating (No Cash Bonus)' ELSE 'Standard Rating (No Cash Bonus)' END AS appraisal_status FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
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
    "title": "Generate departmental restructuring matrix based on headcount and budget health",
    "topic": "CASE Expressions",
    "subtopic": "Interview-Level CASE Challenges",
    "difficulty": "Hard",
    "problemStatement": "Evaluate enterprise department health by left joining Departments with Employees. Evaluate total staff and annualized payroll (SUM(salary * 12)): If headcount is 0 -> 'Vacant Department - Urgent Staffing'; If headcount >= 5 AND annualized payroll > budget -> 'Overstaffed & Overbudget'; If annualized payroll > budget -> 'Overbudget Warning'; If headcount <= 2 -> 'Undermanned Unit'; Else -> 'Balanced Operations'. Display dept_name, staff_count, annual_payroll, budget, and restructure_priority.",
    "requirements": [
      "Left join Departments d with Employees e on d.dept_name = e.department.",
      "Group by d.dept_id, d.dept_name, and d.budget.",
      "Compute staff_count, annual_payroll (using COALESCE), and restructure_priority.",
      "Select d.dept_name, COUNT(e.emp_id) AS staff_count, COALESCE(SUM(e.salary * 12), 0) AS annual_payroll, d.budget, and restructure_priority."
    ],
    "tableName": "Departments, Employees",
    "hint": "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count, COALESCE(SUM(e.salary * 12), 0) AS annual_payroll, d.budget, CASE WHEN COUNT(e.emp_id) = 0 THEN 'Vacant Department - Urgent Staffing' WHEN COUNT(e.emp_id) >= 5 AND SUM(e.salary * 12) > d.budget THEN 'Overstaffed & Overbudget' WHEN SUM(e.salary * 12) > d.budget THEN 'Overbudget Warning' WHEN COUNT(e.emp_id) <= 2 THEN 'Undermanned Unit' ELSE 'Balanced Operations' END AS restructure_priority FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_id, d.dept_name, d.budget;",
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
