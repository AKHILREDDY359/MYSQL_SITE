/**
 * DDL & DML Practice Questions (IDs 376 - 405)
 * Executed inside an isolated in-memory sandbox to ensure safety.
 */

export const DDL_DML_TOPICS = [
  'Table & Schema Management (DDL)',
  'Data Modification (DML)'
];

export const DDL_DML_QUESTIONS = [
  {
    "id": 376,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Basic Table Creation & Data Types",
    "difficulty": "Beginner",
    "title": "Create a Project Categories Table",
    "problemStatement": "Create a new table named Project_Categories to categorize corporate initiatives. The table must have: category_id (INT, PRIMARY KEY), category_name (VARCHAR(50), NOT NULL), and description (TEXT).",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE Project_Categories (\n  category_id INT PRIMARY KEY,\n  category_name VARCHAR(50) NOT NULL,\n  description TEXT\n);",
    "compatibilityNote": "In MySQL, auto-incrementing surrogate keys use AUTO_INCREMENT. In SQLite, INTEGER PRIMARY KEY AUTOINCREMENT is used. Both support standard INT PRIMARY KEY and NOT NULL.",
    "expectedSql": "CREATE TABLE Project_Categories (category_id INT PRIMARY KEY, category_name VARCHAR(50) NOT NULL, description TEXT);",
    "verificationSql": "SELECT name, type, \"notnull\", pk FROM pragma_table_info('Project_Categories') ORDER BY cid;",
    "hints": [
      "Use the CREATE TABLE table_name syntax.",
      "Define columns inside parentheses separated by commas: category_id INT PRIMARY KEY, category_name VARCHAR(50) NOT NULL, description TEXT."
    ],
    "explanation": "CREATE TABLE defines a new relational structure. Specifying PRIMARY KEY guarantees uniqueness and NOT NULL on category_id, while NOT NULL on category_name prevents empty names.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "name",
        "type",
        "notnull",
        "pk"
      ],
      "values": [
        [
          "category_id",
          "INT",
          0,
          1
        ],
        [
          "category_name",
          "VARCHAR(50)",
          1,
          0
        ],
        [
          "description",
          "TEXT",
          0,
          0
        ]
      ],
      "rowCount": 3
    },
    "isDdlDml": true
  },
  {
    "id": 377,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Basic Table Creation & Data Types",
    "difficulty": "Beginner",
    "title": "Create Table with NOT NULL and DEFAULT Values",
    "problemStatement": "Create a table named Office_Locations with columns: location_id (INT PRIMARY KEY), city_name (VARCHAR(40) NOT NULL), country (VARCHAR(40) DEFAULT 'India'), and is_active (INT DEFAULT 1).",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE Office_Locations (\n  location_id INT PRIMARY KEY,\n  city_name VARCHAR(40) NOT NULL,\n  country VARCHAR(40) DEFAULT 'India',\n  is_active TINYINT DEFAULT 1\n);",
    "compatibilityNote": "MySQL has a native BOOLEAN/TINYINT(1) type. SQLite uses integer values (0 or 1) for flags. The DEFAULT keyword behaves identically across both engines.",
    "expectedSql": "CREATE TABLE Office_Locations (location_id INT PRIMARY KEY, city_name VARCHAR(40) NOT NULL, country VARCHAR(40) DEFAULT 'India', is_active INT DEFAULT 1);",
    "verificationSql": "SELECT name, type, \"notnull\", dflt_value FROM pragma_table_info('Office_Locations') ORDER BY cid;",
    "hints": [
      "Add DEFAULT 'India' after the country data type.",
      "Add DEFAULT 1 after the is_active data type."
    ],
    "explanation": "The DEFAULT clause specifies a fallback value whenever an INSERT statement omits that specific column, preventing unintentional NULLs.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "name",
        "type",
        "notnull",
        "dflt_value"
      ],
      "values": [
        [
          "location_id",
          "INT",
          0,
          null
        ],
        [
          "city_name",
          "VARCHAR(40)",
          1,
          null
        ],
        [
          "country",
          "VARCHAR(40)",
          0,
          "'India'"
        ],
        [
          "is_active",
          "INT",
          0,
          "1"
        ]
      ],
      "rowCount": 4
    },
    "isDdlDml": true
  },
  {
    "id": 378,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Basic Table Creation & Data Types",
    "difficulty": "Easy",
    "title": "Create Table with Date and Decimal Precision",
    "problemStatement": "Create a table named Company_Assets with columns: asset_id (INT PRIMARY KEY), asset_name (VARCHAR(60) NOT NULL), purchase_date (DATE NOT NULL), and cost (DECIMAL(10,2) NOT NULL).",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE Company_Assets (\n  asset_id INT PRIMARY KEY,\n  asset_name VARCHAR(60) NOT NULL,\n  purchase_date DATE NOT NULL,\n  cost DECIMAL(10,2) NOT NULL\n);",
    "compatibilityNote": "MySQL enforces strict DATE validation (YYYY-MM-DD) and fixed-point DECIMAL arithmetic. SQLite stores dates as ISO-8601 text strings and handles decimal values via numeric affinity.",
    "expectedSql": "CREATE TABLE Company_Assets (asset_id INT PRIMARY KEY, asset_name VARCHAR(60) NOT NULL, purchase_date DATE NOT NULL, cost DECIMAL(10,2) NOT NULL);",
    "verificationSql": "SELECT name, type, \"notnull\" FROM pragma_table_info('Company_Assets') ORDER BY cid;",
    "hints": [
      "Define columns: asset_id INT PRIMARY KEY, asset_name VARCHAR(60) NOT NULL, purchase_date DATE NOT NULL, cost DECIMAL(10,2) NOT NULL."
    ],
    "explanation": "DECIMAL(10,2) allocates up to 10 total digits with 2 digits after the decimal point, which is standard for monetary assets.",
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "name",
        "type",
        "notnull"
      ],
      "values": [
        [
          "asset_id",
          "INT",
          0
        ],
        [
          "asset_name",
          "VARCHAR(60)",
          1
        ],
        [
          "purchase_date",
          "DATE",
          1
        ],
        [
          "cost",
          "DECIMAL(10,2)",
          1
        ]
      ],
      "rowCount": 4
    },
    "isDdlDml": true
  },
  {
    "id": 379,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Basic Table Creation & Data Types",
    "difficulty": "Medium",
    "title": "Create Table with Composite Primary Key",
    "problemStatement": "Create a table named Department_Shifts with columns: dept_id (INT), shift_code (VARCHAR(10)), start_time (VARCHAR(10) NOT NULL), and end_time (VARCHAR(10) NOT NULL), with a composite PRIMARY KEY composed of (dept_id, shift_code).",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE Department_Shifts (\n  dept_id INT,\n  shift_code VARCHAR(10),\n  start_time VARCHAR(10) NOT NULL,\n  end_time VARCHAR(10) NOT NULL,\n  PRIMARY KEY (dept_id, shift_code)\n);",
    "compatibilityNote": "Composite primary keys are declared at the table level using PRIMARY KEY (col1, col2) in both MySQL and SQLite.",
    "expectedSql": "CREATE TABLE Department_Shifts (dept_id INT, shift_code VARCHAR(10), start_time VARCHAR(10) NOT NULL, end_time VARCHAR(10) NOT NULL, PRIMARY KEY (dept_id, shift_code));",
    "verificationSql": "SELECT name, pk FROM pragma_table_info('Department_Shifts') WHERE pk > 0 ORDER BY pk;",
    "hints": [
      "Declare individual columns first, then add the table-level constraint: PRIMARY KEY (dept_id, shift_code)."
    ],
    "explanation": "Composite primary keys require the combination of all listed columns to be unique, permitting duplicate dept_ids as long as their shift_codes differ.",
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "name",
        "pk"
      ],
      "values": [
        [
          "dept_id",
          1
        ],
        [
          "shift_code",
          2
        ]
      ],
      "rowCount": 2
    },
    "isDdlDml": true
  },
  {
    "id": 380,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Constraints & Integrity",
    "difficulty": "Beginner",
    "title": "Enforce Column Uniqueness with UNIQUE Constraint",
    "problemStatement": "Create a table named User_Accounts with columns: user_id (INT PRIMARY KEY), username (VARCHAR(30) NOT NULL UNIQUE), email (VARCHAR(80) NOT NULL UNIQUE), and created_year (INT DEFAULT 2026).",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE User_Accounts (\n  user_id INT PRIMARY KEY,\n  username VARCHAR(30) NOT NULL UNIQUE,\n  email VARCHAR(80) NOT NULL UNIQUE,\n  created_year INT DEFAULT 2026\n);",
    "compatibilityNote": "UNIQUE constraints ensure that no two rows share the same non-null value across both MySQL and SQLite.",
    "expectedSql": "CREATE TABLE User_Accounts (user_id INT PRIMARY KEY, username VARCHAR(30) NOT NULL UNIQUE, email VARCHAR(80) NOT NULL UNIQUE, created_year INT DEFAULT 2026);",
    "verificationSql": "SELECT name, sql FROM sqlite_master WHERE type='table' AND name='User_Accounts';",
    "hints": [
      "Append UNIQUE after NOT NULL on username and email columns."
    ],
    "explanation": "UNIQUE constraints prevent duplicate registrations while allowing queries to efficiently index and locate unique usernames and emails.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "name",
        "sql"
      ],
      "values": [
        [
          "User_Accounts",
          "CREATE TABLE User_Accounts (user_id INT PRIMARY KEY, username VARCHAR(30) NOT NULL UNIQUE, email VARCHAR(80) NOT NULL UNIQUE, created_year INT DEFAULT 2026)"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 381,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Constraints & Integrity",
    "difficulty": "Easy",
    "title": "Enforce Value Ranges with CHECK Constraints",
    "problemStatement": "Create a table named Bonus_Tiers with columns: tier_code (VARCHAR(5) PRIMARY KEY), min_rating (INT CHECK (min_rating >= 1 AND min_rating <= 5)), and bonus_percentage (DECIMAL(5,2) CHECK (bonus_percentage >= 0.00)).",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE Bonus_Tiers (\n  tier_code VARCHAR(5) PRIMARY KEY,\n  min_rating INT CHECK (min_rating >= 1 AND min_rating <= 5),\n  bonus_percentage DECIMAL(5,2) CHECK (bonus_percentage >= 0.00)\n);",
    "compatibilityNote": "MySQL 8.0.16+ fully enforces CHECK constraints. In earlier MySQL versions (5.7 and older), CHECK syntax was parsed but silently ignored. SQLite enforces CHECK constraints strictly.",
    "expectedSql": "CREATE TABLE Bonus_Tiers (tier_code VARCHAR(5) PRIMARY KEY, min_rating INT CHECK (min_rating >= 1 AND min_rating <= 5), bonus_percentage DECIMAL(5,2) CHECK (bonus_percentage >= 0.00));",
    "verificationSql": "SELECT sql FROM sqlite_master WHERE type='table' AND name='Bonus_Tiers';",
    "hints": [
      "Add CHECK (min_rating >= 1 AND min_rating <= 5) after min_rating INT.",
      "Add CHECK (bonus_percentage >= 0.00) after bonus_percentage DECIMAL(5,2)."
    ],
    "explanation": "CHECK constraints enforce domain rules directly at the database layer, rejecting any row insertion or update that evaluates to false.",
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "sql"
      ],
      "values": [
        [
          "CREATE TABLE Bonus_Tiers (tier_code VARCHAR(5) PRIMARY KEY, min_rating INT CHECK (min_rating >= 1 AND min_rating <= 5), bonus_percentage DECIMAL(5,2) CHECK (bonus_percentage >= 0.00))"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 382,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Constraints & Integrity",
    "difficulty": "Medium",
    "title": "Establish Relational Link with FOREIGN KEY Constraint",
    "problemStatement": "Create a table named Project_Milestones with columns: milestone_id (INT PRIMARY KEY), project_id (INT NOT NULL), milestone_name (VARCHAR(100) NOT NULL), due_date (DATE), with a FOREIGN KEY on project_id referencing Projects(project_id).",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE Project_Milestones (\n  milestone_id INT PRIMARY KEY,\n  project_id INT NOT NULL,\n  milestone_name VARCHAR(100) NOT NULL,\n  due_date DATE,\n  FOREIGN KEY (project_id) REFERENCES Projects(project_id)\n);",
    "compatibilityNote": "In MySQL (InnoDB engine), foreign key relationships enforce referential integrity and require matching data types. In SQLite, PRAGMA foreign_keys = ON is required to activate enforcement.",
    "expectedSql": "CREATE TABLE Project_Milestones (milestone_id INT PRIMARY KEY, project_id INT NOT NULL, milestone_name VARCHAR(100) NOT NULL, due_date DATE, FOREIGN KEY (project_id) REFERENCES Projects(project_id));",
    "verificationSql": "SELECT \"table\", \"from\", \"to\" FROM pragma_foreign_key_list('Project_Milestones');",
    "hints": [
      "Define columns first, then add FOREIGN KEY (project_id) REFERENCES Projects(project_id) at the end of the column list."
    ],
    "explanation": "Foreign keys guarantee referential integrity by rejecting milestone records whose project_id does not exist in the referenced Projects table.",
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "table",
        "from",
        "to"
      ],
      "values": [
        [
          "Projects",
          "project_id",
          "project_id"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 383,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Constraints & Integrity",
    "difficulty": "Hard",
    "title": "Multi-Constraint Table with Enum-Like CHECK and FK",
    "problemStatement": "Create a table named Employee_Certifications with columns: cert_id (INT PRIMARY KEY), emp_id (INT NOT NULL), cert_name (VARCHAR(100) NOT NULL), status (VARCHAR(20) CHECK (status IN ('Active', 'Expired', 'Pending'))), with a FOREIGN KEY on emp_id referencing Employees(emp_id).",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE Employee_Certifications (\n  cert_id INT PRIMARY KEY,\n  emp_id INT NOT NULL,\n  cert_name VARCHAR(100) NOT NULL,\n  status ENUM('Active', 'Expired', 'Pending'),\n  FOREIGN KEY (emp_id) REFERENCES Employees(emp_id)\n);",
    "compatibilityNote": "MySQL provides a native ENUM data type. SQLite achieves identical enum validation using a CHECK (status IN ('Active', 'Expired', 'Pending')) constraint.",
    "expectedSql": "CREATE TABLE Employee_Certifications (cert_id INT PRIMARY KEY, emp_id INT NOT NULL, cert_name VARCHAR(100) NOT NULL, status VARCHAR(20) CHECK (status IN ('Active', 'Expired', 'Pending')), FOREIGN KEY (emp_id) REFERENCES Employees(emp_id));",
    "verificationSql": "SELECT name, sql FROM sqlite_master WHERE type='table' AND name='Employee_Certifications';",
    "hints": [
      "Use CHECK (status IN ('Active', 'Expired', 'Pending')) to restrict status values."
    ],
    "explanation": "Combining CHECK constraints with foreign keys creates self-validating relational models that catch bad data before application logic runs.",
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "name",
        "sql"
      ],
      "values": [
        [
          "Employee_Certifications",
          "CREATE TABLE Employee_Certifications (cert_id INT PRIMARY KEY, emp_id INT NOT NULL, cert_name VARCHAR(100) NOT NULL, status VARCHAR(20) CHECK (status IN ('Active', 'Expired', 'Pending')), FOREIGN KEY (emp_id) REFERENCES Employees(emp_id))"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 384,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Table Alterations (ALTER TABLE)",
    "difficulty": "Beginner",
    "title": "ALTER TABLE — Add New Column with Default",
    "problemStatement": "Add a new column named is_remote of type INT with a default value of 0 to the existing Employees table.",
    "dialect": "SQLite",
    "mysqlSyntax": "ALTER TABLE Employees ADD COLUMN is_remote INT DEFAULT 0;",
    "compatibilityNote": "Both MySQL and SQLite support ALTER TABLE table_name ADD COLUMN column_name data_type DEFAULT value.",
    "expectedSql": "ALTER TABLE Employees ADD COLUMN is_remote INT DEFAULT 0;",
    "verificationSql": "SELECT name, type, dflt_value FROM pragma_table_info('Employees') WHERE name = 'is_remote';",
    "hints": [
      "Use the ALTER TABLE Employees ADD COLUMN ... syntax."
    ],
    "explanation": "ALTER TABLE ADD COLUMN appends a column to an existing table without deleting or recreating existing data rows.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "name",
        "type",
        "dflt_value"
      ],
      "values": [
        [
          "is_remote",
          "INT",
          "0"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 385,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Table Alterations (ALTER TABLE)",
    "difficulty": "Easy",
    "title": "ALTER TABLE — Add Fiscal Quarter Column",
    "problemStatement": "Add a column named fiscal_quarter of type VARCHAR(10) with a default value of 'Q1' to the Departments table.",
    "dialect": "SQLite",
    "mysqlSyntax": "ALTER TABLE Departments ADD COLUMN fiscal_quarter VARCHAR(10) DEFAULT 'Q1';",
    "compatibilityNote": "ALTER TABLE ADD COLUMN is fast and non-locking in modern versions of both MySQL and SQLite when a constant default value is provided.",
    "expectedSql": "ALTER TABLE Departments ADD COLUMN fiscal_quarter VARCHAR(10) DEFAULT 'Q1';",
    "verificationSql": "SELECT name, type, dflt_value FROM pragma_table_info('Departments') WHERE name = 'fiscal_quarter';",
    "hints": [
      "Use ALTER TABLE Departments ADD COLUMN fiscal_quarter VARCHAR(10) DEFAULT 'Q1';"
    ],
    "explanation": "Adding new metadata columns with defaults allows database schemas to evolve as business requirements change.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "name",
        "type",
        "dflt_value"
      ],
      "values": [
        [
          "fiscal_quarter",
          "VARCHAR(10)",
          "'Q1'"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 386,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Table Alterations (ALTER TABLE)",
    "difficulty": "Medium",
    "title": "ALTER TABLE — Rename Existing Column",
    "problemStatement": "In the Projects table, rename the existing column budget to allocated_budget.",
    "dialect": "SQLite",
    "mysqlSyntax": "ALTER TABLE Projects RENAME COLUMN budget TO allocated_budget;",
    "compatibilityNote": "MySQL 8.0+ and SQLite 3.25.0+ both support standard ALTER TABLE table_name RENAME COLUMN old_name TO new_name. Older MySQL required CHANGE COLUMN with full type redefinition.",
    "expectedSql": "ALTER TABLE Projects RENAME COLUMN budget TO allocated_budget;",
    "verificationSql": "SELECT name FROM pragma_table_info('Projects') WHERE name IN ('budget', 'allocated_budget');",
    "hints": [
      "Use ALTER TABLE Projects RENAME COLUMN budget TO allocated_budget;"
    ],
    "explanation": "RENAME COLUMN modifies column metadata without modifying the underlying stored records.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "name"
      ],
      "values": [
        [
          "allocated_budget"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 387,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Table Alterations (ALTER TABLE)",
    "difficulty": "Easy",
    "title": "ALTER TABLE — Rename Table",
    "problemStatement": "Rename the table Performance_Reviews to Employee_Appraisals.",
    "dialect": "SQLite",
    "mysqlSyntax": "ALTER TABLE Performance_Reviews RENAME TO Employee_Appraisals;\n-- Or MySQL syntax: RENAME TABLE Performance_Reviews TO Employee_Appraisals;",
    "compatibilityNote": "ALTER TABLE old_name RENAME TO new_name works identically in MySQL and SQLite.",
    "expectedSql": "ALTER TABLE Performance_Reviews RENAME TO Employee_Appraisals;",
    "verificationSql": "SELECT name FROM sqlite_master WHERE type='table' AND name IN ('Performance_Reviews', 'Employee_Appraisals');",
    "hints": [
      "Use ALTER TABLE Performance_Reviews RENAME TO Employee_Appraisals;"
    ],
    "explanation": "Renaming a table preserves all data, indexes, and constraints while updating its catalog name in the database engine.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "name"
      ],
      "values": [
        [
          "Employee_Appraisals"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 388,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Dropping & Recreating Tables",
    "difficulty": "Beginner",
    "title": "DROP TABLE IF EXISTS",
    "problemStatement": "Safely drop the junction table Employee_Projects using IF EXISTS syntax to avoid errors if the table is already missing.",
    "dialect": "SQLite",
    "mysqlSyntax": "DROP TABLE IF EXISTS Employee_Projects;",
    "compatibilityNote": "DROP TABLE IF EXISTS is standard SQL supported identically in MySQL and SQLite.",
    "expectedSql": "DROP TABLE IF EXISTS Employee_Projects;",
    "verificationSql": "SELECT name FROM sqlite_master WHERE type='table' AND name = 'Employee_Projects';",
    "hints": [
      "Use DROP TABLE IF EXISTS Employee_Projects;"
    ],
    "explanation": "The IF EXISTS clause prevents the query from crashing with an error if the specified table has already been removed.",
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [],
      "values": [],
      "rowCount": 0
    },
    "isDdlDml": true
  },
  {
    "id": 389,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Dropping & Recreating Tables",
    "difficulty": "Medium",
    "title": "Lifecycle: Drop and Recreate Clean Table",
    "problemStatement": "Drop the existing Performance_Reviews table if it exists, and recreate it with columns: review_id (INT PRIMARY KEY), emp_id (INT NOT NULL), and rating (INT NOT NULL CHECK (rating BETWEEN 1 AND 5)). Separate statements with a semicolon.",
    "dialect": "SQLite",
    "mysqlSyntax": "DROP TABLE IF EXISTS Performance_Reviews;\nCREATE TABLE Performance_Reviews (\n  review_id INT PRIMARY KEY,\n  emp_id INT NOT NULL,\n  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5)\n);",
    "compatibilityNote": "Executing DROP followed by CREATE is the canonical migration pattern for rebuilding schema tables during development.",
    "expectedSql": "DROP TABLE IF EXISTS Performance_Reviews; CREATE TABLE Performance_Reviews (review_id INT PRIMARY KEY, emp_id INT NOT NULL, rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5));",
    "verificationSql": "SELECT name, sql FROM sqlite_master WHERE type='table' AND name = 'Performance_Reviews';",
    "hints": [
      "First statement: DROP TABLE IF EXISTS Performance_Reviews;",
      "Second statement: CREATE TABLE Performance_Reviews (review_id INT PRIMARY KEY, emp_id INT NOT NULL, rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5));"
    ],
    "explanation": "Recreating a table resets all existing rows and allows redefining columns and constraints from scratch.",
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "name",
        "sql"
      ],
      "values": [
        [
          "Performance_Reviews",
          "CREATE TABLE Performance_Reviews (review_id INT PRIMARY KEY, emp_id INT NOT NULL, rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5))"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 390,
    "topic": "Table & Schema Management (DDL)",
    "subtopic": "Dropping & Recreating Tables",
    "difficulty": "Medium",
    "title": "Table Emptier: Simulate TRUNCATE TABLE",
    "problemStatement": "Empty all records from the Employee_Projects table while leaving the table structure intact.",
    "dialect": "SQLite",
    "mysqlSyntax": "TRUNCATE TABLE Employee_Projects;",
    "compatibilityNote": "MySQL supports TRUNCATE TABLE, which drops and recreates the table to quickly reset rows and auto-increments. SQLite does not have a TRUNCATE keyword; DELETE FROM table; is the standard SQLite equivalent.",
    "expectedSql": "DELETE FROM Employee_Projects;",
    "verificationSql": "SELECT COUNT(*) as remaining_count FROM Employee_Projects;",
    "hints": [
      "In SQLite, use DELETE FROM Employee_Projects; to remove all records."
    ],
    "explanation": "An unqualified DELETE FROM table statement deletes all rows while keeping the table definition ready for subsequent insertions.",
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "remaining_count"
      ],
      "values": [
        [
          0
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 391,
    "topic": "Data Modification (DML)",
    "subtopic": "INSERT Operations",
    "difficulty": "Beginner",
    "title": "Single-Row INSERT with Specified Columns",
    "problemStatement": "Insert a new employee record into Employees: emp_id = 121, emp_name = 'Karan Sharma', age = 29, department = 'IT', salary = 62000.00, experience = 5, city = 'Hyderabad', joining_year = 2024.",
    "dialect": "SQLite",
    "mysqlSyntax": "INSERT INTO Employees (emp_id, emp_name, age, department, salary, experience, city, joining_year)\nVALUES (121, 'Karan Sharma', 29, 'IT', 62000.00, 5, 'Hyderabad', 2024);",
    "compatibilityNote": "Standard INSERT INTO table (cols...) VALUES (vals...) works identically across MySQL and SQLite.",
    "expectedSql": "INSERT INTO Employees (emp_id, emp_name, age, department, salary, experience, city, joining_year) VALUES (121, 'Karan Sharma', 29, 'IT', 62000.00, 5, 'Hyderabad', 2024);",
    "verificationSql": "SELECT emp_id, emp_name, department, salary, city FROM Employees WHERE emp_id = 121;",
    "hints": [
      "List target columns in parentheses after Employees, followed by VALUES and matching values."
    ],
    "explanation": "Explicitly naming column targets in INSERT statements makes queries immune to future table column reordering.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "salary",
        "city"
      ],
      "values": [
        [
          121,
          "Karan Sharma",
          "IT",
          62000,
          "Hyderabad"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 392,
    "topic": "Data Modification (DML)",
    "subtopic": "INSERT Operations",
    "difficulty": "Easy",
    "title": "Multi-Row INSERT in a Single Statement",
    "problemStatement": "Insert two new departments into Departments in a single statement:\n1) dept_id = 9, dept_name = 'Cloud Services', dept_head = 'Deepak Verma', location = 'Bengaluru', budget = 1800000.00\n2) dept_id = 10, dept_name = 'Data Engineering', dept_head = 'Shreya Sen', location = 'Hyderabad', budget = 2200000.00",
    "dialect": "SQLite",
    "mysqlSyntax": "INSERT INTO Departments (dept_id, dept_name, dept_head, location, budget) VALUES\n(9, 'Cloud Services', 'Deepak Verma', 'Bengaluru', 1800000.00),\n(10, 'Data Engineering', 'Shreya Sen', 'Hyderabad', 2200000.00);",
    "compatibilityNote": "Multi-row value tuples (val1), (val2) are standard SQL supported in both MySQL and SQLite (since 3.7.11).",
    "expectedSql": "INSERT INTO Departments (dept_id, dept_name, dept_head, location, budget) VALUES (9, 'Cloud Services', 'Deepak Verma', 'Bengaluru', 1800000.00), (10, 'Data Engineering', 'Shreya Sen', 'Hyderabad', 2200000.00);",
    "verificationSql": "SELECT dept_id, dept_name, location, budget FROM Departments WHERE dept_id IN (9, 10) ORDER BY dept_id;",
    "hints": [
      "Separate multiple value groups with a comma: VALUES (9, ...), (10, ...);"
    ],
    "explanation": "Multi-row inserts reduce network roundtrips and execute within a single transaction boundary, maximizing throughput.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "dept_id",
        "dept_name",
        "location",
        "budget"
      ],
      "values": [
        [
          9,
          "Cloud Services",
          "Bengaluru",
          1800000
        ],
        [
          10,
          "Data Engineering",
          "Hyderabad",
          2200000
        ]
      ],
      "rowCount": 2
    },
    "isDdlDml": true
  },
  {
    "id": 393,
    "topic": "Data Modification (DML)",
    "subtopic": "INSERT Operations",
    "difficulty": "Easy",
    "title": "INSERT with Explicit NULL for Optional Field",
    "problemStatement": "Insert a new project into Projects: project_id = 509, project_name = 'Quantum AI', dept_id = 1, budget = 950000.00, start_date = '2026-03-01', end_date = NULL, and status = 'Planning'.",
    "dialect": "SQLite",
    "mysqlSyntax": "INSERT INTO Projects (project_id, project_name, dept_id, budget, start_date, end_date, status)\nVALUES (509, 'Quantum AI', 1, 950000.00, '2026-03-01', NULL, 'Planning');",
    "compatibilityNote": "Passing NULL explicitly assigns the absence of a value to nullable columns in both MySQL and SQLite.",
    "expectedSql": "INSERT INTO Projects (project_id, project_name, dept_id, budget, start_date, end_date, status) VALUES (509, 'Quantum AI', 1, 950000.00, '2026-03-01', NULL, 'Planning');",
    "verificationSql": "SELECT project_id, project_name, end_date, status FROM Projects WHERE project_id = 509;",
    "hints": [
      "Specify NULL (without quotes) as the value for end_date."
    ],
    "explanation": "NULL represents an unknown or open-ended value, perfectly suited for an active project with no predefined completion date.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "end_date",
        "status"
      ],
      "values": [
        [
          509,
          "Quantum AI",
          null,
          "Planning"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 394,
    "topic": "Data Modification (DML)",
    "subtopic": "INSERT Operations",
    "difficulty": "Medium",
    "title": "INSERT INTO ... SELECT (Table Replication)",
    "problemStatement": "First create a table High_Earners (emp_id INT PRIMARY KEY, emp_name VARCHAR(50), salary DECIMAL(10,2)). Then copy all employees with salary >= 60000 from Employees into High_Earners in a single batch.",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE High_Earners (\n  emp_id INT PRIMARY KEY,\n  emp_name VARCHAR(50),\n  salary DECIMAL(10,2)\n);\nINSERT INTO High_Earners (emp_id, emp_name, salary)\nSELECT emp_id, emp_name, salary FROM Employees WHERE salary >= 60000;",
    "compatibilityNote": "INSERT INTO ... SELECT is standard across MySQL and SQLite for bulk-populating staging tables from query results.",
    "expectedSql": "CREATE TABLE High_Earners (emp_id INT PRIMARY KEY, emp_name VARCHAR(50), salary DECIMAL(10,2)); INSERT INTO High_Earners (emp_id, emp_name, salary) SELECT emp_id, emp_name, salary FROM Employees WHERE salary >= 60000;",
    "verificationSql": "SELECT emp_id, emp_name, salary FROM High_Earners ORDER BY emp_id;",
    "hints": [
      "Create the table first, then write: INSERT INTO High_Earners (emp_id, emp_name, salary) SELECT emp_id, emp_name, salary FROM Employees WHERE salary >= 60000;"
    ],
    "explanation": "INSERT INTO ... SELECT avoids intermediate application memory by executing the read-and-insert operation entirely within the database engine.",
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "salary"
      ],
      "values": [
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
          109,
          "Kiran",
          70000
        ],
        [
          110,
          "Meena",
          60000
        ],
        [
          112,
          "Priya",
          75000
        ],
        [
          115,
          "Varun",
          68000
        ],
        [
          119,
          "Arjun",
          90000
        ]
      ],
      "rowCount": 7
    },
    "isDdlDml": true
  },
  {
    "id": 395,
    "topic": "Data Modification (DML)",
    "subtopic": "UPDATE Operations",
    "difficulty": "Beginner",
    "title": "UPDATE Single Column with WHERE Filter",
    "problemStatement": "Increase the salary of employee with emp_id = 101 to 52000.00.",
    "dialect": "SQLite",
    "mysqlSyntax": "UPDATE Employees SET salary = 52000.00 WHERE emp_id = 101;",
    "compatibilityNote": "The UPDATE table_name SET col = val WHERE condition syntax is identical across all SQL engines.",
    "expectedSql": "UPDATE Employees SET salary = 52000.00 WHERE emp_id = 101;",
    "verificationSql": "SELECT emp_id, emp_name, salary FROM Employees WHERE emp_id = 101;",
    "hints": [
      "Use UPDATE Employees SET salary = 52000.00 WHERE emp_id = 101;"
    ],
    "explanation": "Always supply a WHERE clause when updating specific records; omitting WHERE updates every row in the table.",
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "salary"
      ],
      "values": [
        [
          101,
          "Anil",
          52000
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 396,
    "topic": "Data Modification (DML)",
    "subtopic": "UPDATE Operations",
    "difficulty": "Easy",
    "title": "UPDATE Multiple Columns Simultaneously",
    "problemStatement": "For all employees in the 'Sales' department, update their city to 'Hyderabad' and increase their salary by 3000.00.",
    "dialect": "SQLite",
    "mysqlSyntax": "UPDATE Employees SET city = 'Hyderabad', salary = salary + 3000.00 WHERE department = 'Sales';",
    "compatibilityNote": "Comma-separated column assignments in the SET clause are standard in MySQL and SQLite.",
    "expectedSql": "UPDATE Employees SET city = 'Hyderabad', salary = salary + 3000.00 WHERE department = 'Sales';",
    "verificationSql": "SELECT emp_id, emp_name, department, city, salary FROM Employees WHERE department = 'Sales' ORDER BY emp_id;",
    "hints": [
      "Separate assignments with a comma: SET city = 'Hyderabad', salary = salary + 3000.00"
    ],
    "explanation": "Multiple columns can be altered concurrently in a single atomic update pass across all matching rows.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "department",
        "city",
        "salary"
      ],
      "values": [
        [
          113,
          "Rahul",
          "Sales",
          "Hyderabad",
          33000
        ],
        [
          114,
          "Sneha",
          "Sales",
          "Hyderabad",
          51000
        ],
        [
          116,
          "Divya",
          "Sales",
          "Hyderabad",
          45000
        ],
        [
          120,
          "Keerthi",
          "Sales",
          "Hyderabad",
          58000
        ]
      ],
      "rowCount": 4
    },
    "isDdlDml": true
  },
  {
    "id": 397,
    "topic": "Data Modification (DML)",
    "subtopic": "UPDATE Operations",
    "difficulty": "Easy",
    "title": "Percentage-Based UPDATE on Filtered Records",
    "problemStatement": "Grant an 8% salary increase (multiply salary by 1.08) to all employees with at least 5 years of experience.",
    "dialect": "SQLite",
    "mysqlSyntax": "UPDATE Employees SET salary = salary * 1.08 WHERE experience >= 5;",
    "compatibilityNote": "Arithmetic expressions in UPDATE statements evaluate the current column value and store the computed result identically in MySQL and SQLite.",
    "expectedSql": "UPDATE Employees SET salary = salary * 1.08 WHERE experience >= 5;",
    "verificationSql": "SELECT emp_id, emp_name, experience, salary FROM Employees WHERE experience >= 5 ORDER BY emp_id;",
    "hints": [
      "Use SET salary = salary * 1.08 WHERE experience >= 5;"
    ],
    "explanation": "Using salary * 1.08 dynamically scales each employee compensation relative to their current baseline.",
    "estimatedTimeMinutes": 3,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "experience",
        "salary"
      ],
      "values": [
        [
          103,
          "Chetan",
          5,
          59400.00000000001
        ],
        [
          104,
          "Dhruv",
          7,
          70200
        ],
        [
          106,
          "Girish",
          10,
          86400
        ],
        [
          109,
          "Kiran",
          8,
          75600
        ],
        [
          110,
          "Meena",
          6,
          64800.00000000001
        ],
        [
          112,
          "Priya",
          9,
          81000
        ],
        [
          114,
          "Sneha",
          5,
          51840
        ],
        [
          115,
          "Varun",
          8,
          73440
        ],
        [
          117,
          "Manoj",
          6,
          56160.00000000001
        ],
        [
          119,
          "Arjun",
          11,
          97200
        ]
      ],
      "rowCount": 10
    },
    "isDdlDml": true
  },
  {
    "id": 398,
    "topic": "Data Modification (DML)",
    "subtopic": "UPDATE Operations",
    "difficulty": "Medium",
    "title": "Conditional UPDATE Using CASE Expression",
    "problemStatement": "Update the status of all projects in Projects using a CASE expression: set status to 'Archived' if end_date < '2024-01-01', and 'Current' otherwise.",
    "dialect": "SQLite",
    "mysqlSyntax": "UPDATE Projects SET status = CASE WHEN end_date < '2024-01-01' THEN 'Archived' ELSE 'Current' END;",
    "compatibilityNote": "CASE expressions inside UPDATE SET clauses are fully portable across MySQL and SQLite.",
    "expectedSql": "UPDATE Projects SET status = CASE WHEN end_date < '2024-01-01' THEN 'Archived' ELSE 'Current' END;",
    "verificationSql": "SELECT project_id, project_name, end_date, status FROM Projects ORDER BY project_id;",
    "hints": [
      "Use SET status = CASE WHEN end_date < '2024-01-01' THEN 'Archived' ELSE 'Current' END;"
    ],
    "explanation": "CASE expressions in UPDATE statements allow applying differentiated branching logic to rows in a single query.",
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "project_id",
        "project_name",
        "end_date",
        "status"
      ],
      "values": [
        [
          501,
          "Cloud Migration",
          "2024-12-31",
          "Current"
        ],
        [
          502,
          "ERP Modernization",
          "2024-08-30",
          "Current"
        ],
        [
          503,
          "Global Talent Acquisition",
          "2024-11-30",
          "Current"
        ],
        [
          504,
          "Financial Audit Automation",
          "2024-10-15",
          "Current"
        ],
        [
          505,
          "Brand Revamp 2025",
          "2025-01-31",
          "Current"
        ],
        [
          506,
          "CRM Sales Pipeline",
          "2024-05-30",
          "Current"
        ],
        [
          507,
          "Compliance Automation",
          "2025-09-30",
          "Current"
        ],
        [
          508,
          "NextGen AI Suite",
          "2025-12-31",
          "Current"
        ]
      ],
      "rowCount": 8
    },
    "isDdlDml": true
  },
  {
    "id": 399,
    "topic": "Data Modification (DML)",
    "subtopic": "UPDATE Operations",
    "difficulty": "Hard",
    "title": "UPDATE with Subquery Condition",
    "problemStatement": "Increase the salary of all employees who received a rating of 5 in Performance_Reviews by 10000.00.",
    "dialect": "SQLite",
    "mysqlSyntax": "UPDATE Employees SET salary = salary + 10000.00 WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5);",
    "compatibilityNote": "MySQL also allows multi-table UPDATE syntax (UPDATE Employees e JOIN Performance_Reviews pr ...), but the subquery WHERE col IN (SELECT ...) syntax is ANSI-standard and works across both MySQL and SQLite.",
    "expectedSql": "UPDATE Employees SET salary = salary + 10000.00 WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5);",
    "verificationSql": "SELECT emp_id, emp_name, salary FROM Employees WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5) ORDER BY emp_id;",
    "hints": [
      "Filter the UPDATE with WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5);"
    ],
    "explanation": "Subqueries inside UPDATE statements connect data modifications across related tables without requiring procedural loops.",
    "estimatedTimeMinutes": 5,
    "expectedOutput": {
      "columns": [
        "emp_id",
        "emp_name",
        "salary"
      ],
      "values": [
        [
          106,
          "Girish",
          90000
        ],
        [
          112,
          "Priya",
          85000
        ],
        [
          119,
          "Arjun",
          100000
        ]
      ],
      "rowCount": 3
    },
    "isDdlDml": true
  },
  {
    "id": 400,
    "topic": "Data Modification (DML)",
    "subtopic": "DELETE Operations",
    "difficulty": "Beginner",
    "title": "DELETE Specific Rows with WHERE Condition",
    "problemStatement": "Delete the project assignment from Employee_Projects where emp_id = 106 and project_id = 502.",
    "dialect": "SQLite",
    "mysqlSyntax": "DELETE FROM Employee_Projects WHERE emp_id = 106 AND project_id = 502;",
    "compatibilityNote": "DELETE FROM table_name WHERE condition operates identically across MySQL and SQLite.",
    "expectedSql": "DELETE FROM Employee_Projects WHERE emp_id = 106 AND project_id = 502;",
    "verificationSql": "SELECT * FROM Employee_Projects WHERE emp_id = 106;",
    "hints": [
      "Use DELETE FROM Employee_Projects WHERE emp_id = 106 AND project_id = 502;"
    ],
    "explanation": "Using composite key filters in WHERE clauses guarantees precision when removing junction table rows.",
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
          106,
          504,
          "Compliance Officer",
          20
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 401,
    "topic": "Data Modification (DML)",
    "subtopic": "DELETE Operations",
    "difficulty": "Easy",
    "title": "DELETE Multiple Rows Based on Numeric Boundary",
    "problemStatement": "Delete all performance evaluations from Performance_Reviews where rating = 1 (unsatisfactory).",
    "dialect": "SQLite",
    "mysqlSyntax": "DELETE FROM Performance_Reviews WHERE rating = 1;",
    "compatibilityNote": "Standard DELETE with numeric condition is fully compatible across engines.",
    "expectedSql": "DELETE FROM Performance_Reviews WHERE rating = 1;",
    "verificationSql": "SELECT review_id, emp_id, rating FROM Performance_Reviews WHERE rating = 1;",
    "hints": [
      "Use DELETE FROM Performance_Reviews WHERE rating = 1;"
    ],
    "explanation": "Matching records are deleted atomically, leaving all other evaluations intact.",
    "estimatedTimeMinutes": 2,
    "expectedOutput": {
      "columns": [],
      "values": [],
      "rowCount": 0
    },
    "isDdlDml": true
  },
  {
    "id": 402,
    "topic": "Data Modification (DML)",
    "subtopic": "DELETE Operations",
    "difficulty": "Medium",
    "title": "DELETE Using Subquery Filter",
    "problemStatement": "Delete all assignments from Employee_Projects for projects that have 'Completed' status in the Projects table.",
    "dialect": "SQLite",
    "mysqlSyntax": "DELETE FROM Employee_Projects WHERE project_id IN (SELECT project_id FROM Projects WHERE status = 'Completed');",
    "compatibilityNote": "Subqueries in DELETE statements are standard ANSI SQL supported in both MySQL and SQLite.",
    "expectedSql": "DELETE FROM Employee_Projects WHERE project_id IN (SELECT project_id FROM Projects WHERE status = 'Completed');",
    "verificationSql": "SELECT ep.emp_id, ep.project_id, p.status FROM Employee_Projects ep JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Completed';",
    "hints": [
      "Use WHERE project_id IN (SELECT project_id FROM Projects WHERE status = 'Completed')"
    ],
    "explanation": "Using subqueries enables cascading deletions in application code even if ON DELETE CASCADE is not configured on foreign keys.",
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [],
      "values": [],
      "rowCount": 0
    },
    "isDdlDml": true
  },
  {
    "id": 403,
    "topic": "Data Modification (DML)",
    "subtopic": "DELETE Operations",
    "difficulty": "Hard",
    "title": "Safe Deletion: Remove Reviews for Remote City Staff",
    "problemStatement": "Delete all reviews from Performance_Reviews for employees whose city is 'Vijayawada'.",
    "dialect": "SQLite",
    "mysqlSyntax": "DELETE FROM Performance_Reviews WHERE emp_id IN (SELECT emp_id FROM Employees WHERE city = 'Vijayawada');",
    "compatibilityNote": "DELETE with nested subquery is supported across all major relational SQL dialects.",
    "expectedSql": "DELETE FROM Performance_Reviews WHERE emp_id IN (SELECT emp_id FROM Employees WHERE city = 'Vijayawada');",
    "verificationSql": "SELECT pr.review_id, pr.emp_id, e.city FROM Performance_Reviews pr JOIN Employees e ON pr.emp_id = e.emp_id WHERE e.city = 'Vijayawada';",
    "hints": [
      "Use WHERE emp_id IN (SELECT emp_id FROM Employees WHERE city = 'Vijayawada')"
    ],
    "explanation": "Nested subquery deletion selectively targets dependent rows based on master table attributes.",
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [],
      "values": [],
      "rowCount": 0
    },
    "isDdlDml": true
  },
  {
    "id": 404,
    "topic": "Data Modification (DML)",
    "subtopic": "Constraints & Data Integrity",
    "difficulty": "Medium",
    "title": "Constraint Integrity: Enforce NOT NULL Rejection",
    "problemStatement": "First create table Department_Budgets (dept_id INT PRIMARY KEY, budget DECIMAL(12,2) NOT NULL). Then execute an INSERT statement that attempts to insert (1, NULL) to verify that the database correctly rejects NULL values.",
    "dialect": "SQLite",
    "mysqlSyntax": "CREATE TABLE Department_Budgets (\n  dept_id INT PRIMARY KEY,\n  budget DECIMAL(12,2) NOT NULL\n);\nINSERT INTO Department_Budgets VALUES (1, NULL);",
    "compatibilityNote": "Both MySQL and SQLite immediately raise an error (NOT NULL constraint failed in SQLite, Column cannot be null in MySQL) when inserting NULL into a NOT NULL column.",
    "expectedSql": "CREATE TABLE Department_Budgets (dept_id INT PRIMARY KEY, budget DECIMAL(12,2) NOT NULL); INSERT INTO Department_Budgets VALUES (1, NULL);",
    "verificationType": "EXPECTED_ERROR",
    "expectedError": "NOT NULL",
    "hints": [
      "Create the table first: CREATE TABLE Department_Budgets (dept_id INT PRIMARY KEY, budget DECIMAL(12,2) NOT NULL);",
      "Then trigger the constraint rejection: INSERT INTO Department_Budgets VALUES (1, NULL);"
    ],
    "explanation": "This exercise demonstrates constraint validation: robust database architectures enforce non-null invariants directly at the engine level.",
    "estimatedTimeMinutes": 4,
    "expectedOutput": {
      "columns": [
        "Constraint Check",
        "Database Response"
      ],
      "values": [
        [
          "Enforced",
          "NOT NULL constraint failed: Department_Budgets.budget"
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  },
  {
    "id": 405,
    "topic": "Data Modification (DML)",
    "subtopic": "Constraints & Data Integrity",
    "difficulty": "Hard",
    "title": "Atomic Multi-Field Reassignment",
    "problemStatement": "Reassign employee 102 (Priya) from 'IT' to 'Finance', and grant an increase of 5000.00 to her salary in a single statement.",
    "dialect": "SQLite",
    "mysqlSyntax": "UPDATE Employees SET department = 'Finance', salary = salary + 5000.00 WHERE emp_id = 102;",
    "compatibilityNote": "Atomic multi-column updates execute inside a single transaction to maintain data consistency.",
    "expectedSql": "UPDATE Employees SET department = 'Finance', salary = salary + 5000.00 WHERE emp_id = 102;",
    "verificationSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE emp_id = 102;",
    "hints": [
      "Use UPDATE Employees SET department = 'Finance', salary = salary + 5000.00 WHERE emp_id = 102;"
    ],
    "explanation": "Updating department and compensation simultaneously guarantees that the promotion and transfer are applied atomically.",
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
          102,
          "Bhumika",
          "Finance",
          45000
        ]
      ],
      "rowCount": 1
    },
    "isDdlDml": true
  }
];
