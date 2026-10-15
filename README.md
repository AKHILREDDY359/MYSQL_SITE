# SQL Sprint — Interactive MySQL Interview Practice Platform

**SQL Sprint** is a complete, desktop-first interactive SQL learning and interview preparation platform built for Computer Science students preparing for technical interviews, placement assessments, and database engineering rounds.

It features an in-browser WebAssembly database engine, a functional SQL IDE inspired by VS Code and LeetCode, real-time result-based answer validation, automatic local progress tracking, and 50 placement interview problems.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## 🛠 Technology Stack

- **Frontend Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom developer-tool dark theme (`#0B1020`, `#121A2B`, `#263449`, `#4F8CFF`)
- **SQL Editor / IDE**: Monaco Editor (`@monaco-editor/react`) with SQL syntax highlighting, custom dark theme, and keyboard shortcuts (`Cmd+Enter` / `Ctrl+Enter`)
- **Database Engine**: `SQL.js` (SQLite 3 compiled to WebAssembly) for zero-latency, private, client-side query execution
- **Formatting**: `sql-formatter` for one-click query formatting
- **Icons**: Lucide React
- **Celebration Effects**: `canvas-confetti`
- **Persistence**: Safe `localStorage` service with JSON export/import

---

## 📂 Project Architecture

```
MYSQLSITE/
├── public/
│   └── sql-wasm.wasm            # WebAssembly binary for in-browser SQL engine
├── scripts/
│   ├── generateQuestions.js     # Generates & executes expected outputs for questions
│   └── verifySystem.js          # Automated end-to-end verification test suite
├── src/
│   ├── components/
│   │   ├── AppHeader.jsx        # Navigation bar, brand, active DB, solved counter
│   │   ├── ConfirmDialog.jsx    # Accessible modal confirmation dialog
│   │   ├── DatabaseExplorer.jsx # Tree view, schema inspector, and data grid
│   │   ├── ProgressCard.jsx     # Dashboard KPI metric cards
│   │   ├── QueryToolbar.jsx     # Run Query, Submit Answer, Format, Reset, Copy
│   │   ├── QuestionSidebar.jsx  # Question details, filterable 50-question list
│   │   ├── ResultsPanel.jsx     # Query result table, error display, test feedback
│   │   ├── SampleOutput.jsx     # Live expected output table with row count
│   │   ├── SchemaViewer.jsx     # Column types, primary keys, and descriptions
│   │   ├── SQLEditor.jsx        # Monaco Editor integration with dark theme
│   │   ├── Toast.jsx            # Toast notification provider and hook
│   │   └── TopicProgress.jsx    # Progress bar and practice trigger by topic
│   ├── data/
│   │   ├── questionBank.js      # All 50 questions with verified expected outputs
│   │   ├── revisionNotes.js     # Placement revision cards, syntax, common mistakes
│   │   ├── schema.js            # DDL statements and column definitions
│   │   └── seedData.js          # 20 official employee records and seed SQL
│   ├── pages/
│   │   ├── Dashboard.jsx        # Placement readiness KPIs, 1-50 grid, topic progress
│   │   ├── PracticeWorkspace.jsx# Split layout: Problem/DB Explorer & SQL IDE
│   │   ├── ProgressDashboard.jsx# Audit log, export/import JSON, reset progress
│   │   ├── Revision.jsx         # 11 placement revision guides & syntax cheat sheets
│   │   └── Settings.jsx         # Engine architecture, MySQL notes, danger zone
│   ├── services/
│   │   ├── answerChecker.js     # Result-based semantic validator & ORDER BY check
│   │   ├── databaseEngine.js    # In-memory SQL.js initialization & query executor
│   │   ├── progressService.js   # Local progress calculation, drafts, bookmarks
│   │   └── queryValidator.js    # Read-only security boundary and statement parser
│   ├── utils/
│   │   ├── exportImport.js      # JSON file download and upload handler
│   │   └── storage.js           # Robust LocalStorage wrapper with test fallback
│   ├── App.jsx                  # Root state container and page coordinator
│   ├── index.css                # Custom scrollbars, Tailwind styles, SQL table styles
│   └── main.jsx                 # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🧭 How to Extend the Platform

SQL Sprint is built to be modular and data-driven. You can add new tables, datasets, topics, and practice questions simply by modifying the data files without rewriting UI components.

### 1. How to Add a New Table
Open `src/data/schema.js` and add a new table definition to `TABLES_SCHEMA`:

```javascript
export const TABLES_SCHEMA = [
  // Existing Employees table...
  {
    name: 'Departments',
    description: 'Corporate department information and budget allocations.',
    primaryKey: ['dept_id'],
    columns: [
      { name: 'dept_id', type: 'INT', nullable: false, isPrimary: true, description: 'Unique department ID' },
      { name: 'dept_name', type: 'VARCHAR(50)', nullable: false, isPrimary: false, description: 'Department name' },
      { name: 'budget', type: 'DECIMAL(12,2)', nullable: true, isPrimary: false, description: 'Annual budget in INR' }
    ],
    createSql: `CREATE TABLE IF NOT EXISTS Departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50) NOT NULL,
  budget DECIMAL(12,2)
);`
  }
];
```

### 2. How to Add a Sample Dataset
Open `src/data/seedData.js` and add the seed records:

```javascript
export const SEED_SQL = `
-- Existing Employees INSERT...

INSERT INTO Departments (dept_id, dept_name, budget) VALUES
  (1, 'IT', 5000000.00),
  (2, 'HR', 1500000.00),
  (3, 'Finance', 3500000.00),
  (4, 'Marketing', 2000000.00),
  (5, 'Sales', 4000000.00);
`;
```

### 3. How to Add a New Question
1. Open `scripts/generateQuestions.js`.
2. Add your new question object to `RAW_QUESTIONS`:

```javascript
{
  id: 51,
  title: "Display all departments with budget over 2000000",
  part: "Part G: Joins and Relations",
  topic: "Relational Queries",
  difficulty: "Easy",
  problemStatement: "Write a SQL query to select all departments with an annual budget greater than 2000000.",
  requirements: [
    "Select all columns from Departments.",
    "Filter budget > 2000000."
  ],
  tableName: "Departments",
  hint: "WHERE budget > 2000000",
  expectedSql: "SELECT * FROM Departments WHERE budget > 2000000;",
  explanation: "Filters the Departments table based on annual budget.",
  tags: ["where", "budget", "filtering"],
  prerequisites: "WHERE comparison operators"
}
```

3. Run the generator script to verify the SQL against the database and automatically generate the expected output rows and schema:
```bash
node scripts/generateQuestions.js
```

### 4. Running the Verification Suite
To verify the entire platform, including database tables, 50 questions, safety barriers, and answer validation:
```bash
node scripts/verifySystem.js
```

---

## ⚡ MySQL vs. SQLite Compatibility Architecture

SQL Sprint runs **SQLite 3 via WebAssembly** locally in the browser to ensure zero latency, offline readiness, and client-side isolation.

### Dialect Similarities & Guarantees
- All 50 curriculum questions use standard **ANSI SQL** (`SELECT`, `WHERE`, `AND`/`OR`/`NOT`, `IN`, `BETWEEN`, `LIKE`, `COUNT`, `SUM`, `AVG`, `MAX`, `MIN`, `GROUP BY`, `HAVING`, `ORDER BY`, `LIMIT`).
- These queries execute identically in MySQL 8.0 and SQLite 3.

### Documented Differences
| Feature | MySQL 8.0 | SQLite 3 (Current Engine) |
| :--- | :--- | :--- |
| **LIKE Wildcards** | Case-insensitive with default collation | Case-insensitive for ASCII |
| **Regex Match** | `REGEXP` or `RLIKE` | `LIKE` / `GLOB` |
| **Concatenation** | `CONCAT(a, b)` | `a || b` (ANSI standard) |
| **Current Date** | `NOW()` / `CURDATE()` | `DATE('now')` / `DATETIME('now')` |
| **Window Functions** | Supported (MySQL 8.0+) | Supported (SQLite 3.25+) |

---

## 🔒 Security & Query Execution Safety

- **Read-Only Enforcement**: Blocks state-modifying SQL statements (`DROP`, `DELETE`, `UPDATE`, `INSERT`, `ALTER`, `TRUNCATE`, `CREATE`, `REPLACE`, `GRANT`, `REVOKE`).
- **Single Statement Boundary**: Rejects multiple semicolon-separated SQL statements to prevent query chaining.
- **In-Memory Isolation**: Each session runs in an isolated in-memory WebAssembly database.
- **Reset Capability**: The database can be instantly restored to the fresh seed state via the UI or `resetDatabase()`.

---

## 📊 LocalStorage Persistence & Export/Import

Progress is saved in `localStorage`:
- `SQL_SPRINT_PROGRESS_V1`: Question statuses (`not_started`, `attempted`, `solved`, `needs_review`), attempt counts, error history, and timestamps.
- `SQL_SPRINT_DRAFTS_V1`: User query draft automatically saved for each question ID.
- `SQL_SPRINT_BOOKMARKS_V1`: Starred questions for revision.

Users can export all data as a `.json` backup file from the **Progress** page and import it onto any other machine or browser.
