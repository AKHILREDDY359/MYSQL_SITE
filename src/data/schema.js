/**
 * Schema definition for SQL_Interview_Practice database.
 * Supports relational queries, multi-table JOINs, subqueries, and corporate analytics.
 */

export const DATABASE_NAME = 'SQL_Interview_Practice';

export const TABLES_SCHEMA = [
  {
    name: 'Employees',
    description: 'Corporate employee records containing personal details, department names, compensation, experience, and office city.',
    primaryKey: ['emp_id'],
    columns: [
      { name: 'emp_id', type: 'INT', nullable: false, isPrimary: true, description: 'Unique identifier for each employee' },
      { name: 'emp_name', type: 'VARCHAR(50)', nullable: false, isPrimary: false, description: 'Full name of the employee' },
      { name: 'age', type: 'INT', nullable: true, isPrimary: false, description: 'Age of the employee in years' },
      { name: 'department', type: 'VARCHAR(30)', nullable: true, isPrimary: false, description: 'Department name (IT, HR, Finance, Marketing, Sales)' },
      { name: 'salary', type: 'DECIMAL(10,2)', nullable: true, isPrimary: false, description: 'Monthly base compensation in INR' },
      { name: 'experience', type: 'INT', nullable: true, isPrimary: false, description: 'Years of professional work experience' },
      { name: 'city', type: 'VARCHAR(30)', nullable: true, isPrimary: false, description: 'Office base city (Hyderabad, Chennai, Bengaluru, Vijayawada)' },
      { name: 'joining_year', type: 'INT', nullable: true, isPrimary: false, description: 'Year the employee joined the company' },
    ],
    createSql: `CREATE TABLE IF NOT EXISTS Employees (
  emp_id INT PRIMARY KEY,
  emp_name VARCHAR(50) NOT NULL,
  age INT,
  department VARCHAR(30),
  salary DECIMAL(10,2),
  experience INT,
  city VARCHAR(30),
  joining_year INT
);`
  },
  {
    name: 'Departments',
    description: 'Organizational department units, department heads, office locations, and annual departmental budgets.',
    primaryKey: ['dept_id'],
    columns: [
      { name: 'dept_id', type: 'INT', nullable: false, isPrimary: true, description: 'Unique identifier for each department' },
      { name: 'dept_name', type: 'VARCHAR(50)', nullable: false, isPrimary: false, description: 'Department name (unique, e.g., IT, HR, Finance, Marketing, Sales, Legal, Operations, R&D)' },
      { name: 'dept_head', type: 'VARCHAR(50)', nullable: true, isPrimary: false, description: 'Executive or senior manager leading the department' },
      { name: 'location', type: 'VARCHAR(50)', nullable: true, isPrimary: false, description: 'Headquarters or primary operating city' },
      { name: 'budget', type: 'DECIMAL(12,2)', nullable: true, isPrimary: false, description: 'Annual operating budget in INR' },
    ],
    createSql: `CREATE TABLE IF NOT EXISTS Departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50) NOT NULL UNIQUE,
  dept_head VARCHAR(50),
  location VARCHAR(50),
  budget DECIMAL(12,2)
);`
  },
  {
    name: 'Projects',
    description: 'Corporate initiatives and business projects with budget allocations, timelines, and operational statuses.',
    primaryKey: ['project_id'],
    columns: [
      { name: 'project_id', type: 'INT', nullable: false, isPrimary: true, description: 'Unique project identifier' },
      { name: 'project_name', type: 'VARCHAR(100)', nullable: false, isPrimary: false, description: 'Title or code name of the project' },
      { name: 'dept_id', type: 'INT', nullable: true, isPrimary: false, description: 'Owning department (FK -> Departments.dept_id)' },
      { name: 'budget', type: 'DECIMAL(12,2)', nullable: true, isPrimary: false, description: 'Project budget allocation in INR' },
      { name: 'start_date', type: 'DATE', nullable: true, isPrimary: false, description: 'Official project kickoff date (YYYY-MM-DD)' },
      { name: 'end_date', type: 'DATE', nullable: true, isPrimary: false, description: 'Project completion or milestone deadline (YYYY-MM-DD)' },
      { name: 'status', type: 'VARCHAR(20)', nullable: true, isPrimary: false, description: 'Operational status (Active, Completed, Planning, On Hold)' },
    ],
    createSql: `CREATE TABLE IF NOT EXISTS Projects (
  project_id INT PRIMARY KEY,
  project_name VARCHAR(100) NOT NULL,
  dept_id INT,
  budget DECIMAL(12,2),
  start_date DATE,
  end_date DATE,
  status VARCHAR(20),
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);`
  },
  {
    name: 'Employee_Projects',
    description: 'Many-to-many junction mapping employee staffing assignments, roles, and allocated weekly hours to projects.',
    primaryKey: ['emp_id', 'project_id'],
    columns: [
      { name: 'emp_id', type: 'INT', nullable: false, isPrimary: true, description: 'Assigned employee (FK -> Employees.emp_id)' },
      { name: 'project_id', type: 'INT', nullable: false, isPrimary: true, description: 'Assigned project (FK -> Projects.project_id)' },
      { name: 'assigned_role', type: 'VARCHAR(50)', nullable: true, isPrimary: false, description: 'Job role on project (Lead Developer, Project Manager, Auditor, etc.)' },
      { name: 'hours_allocated', type: 'INT', nullable: true, isPrimary: false, description: 'Standard weekly project hours allocated' },
    ],
    createSql: `CREATE TABLE IF NOT EXISTS Employee_Projects (
  emp_id INT,
  project_id INT,
  assigned_role VARCHAR(50),
  hours_allocated INT,
  PRIMARY KEY (emp_id, project_id),
  FOREIGN KEY (emp_id) REFERENCES Employees(emp_id),
  FOREIGN KEY (project_id) REFERENCES Projects(project_id)
);`
  },
  {
    name: 'Performance_Reviews',
    description: 'Annual employee performance evaluations, quality ratings (1-5), awarded bonuses, and review feedback.',
    primaryKey: ['review_id'],
    columns: [
      { name: 'review_id', type: 'INT', nullable: false, isPrimary: true, description: 'Unique evaluation review ID' },
      { name: 'emp_id', type: 'INT', nullable: false, isPrimary: false, description: 'Reviewed employee (FK -> Employees.emp_id)' },
      { name: 'review_year', type: 'INT', nullable: false, isPrimary: false, description: 'Calendar year of performance review' },
      { name: 'rating', type: 'INT', nullable: false, isPrimary: false, description: 'Evaluation rating score (1 = Unsatisfactory to 5 = Exceptional)' },
      { name: 'bonus', type: 'DECIMAL(10,2)', nullable: true, isPrimary: false, description: 'Annual performance cash bonus (INR, NULL for lower ratings)' },
      { name: 'feedback', type: 'VARCHAR(255)', nullable: true, isPrimary: false, description: 'Formal appraisal comment from manager' },
    ],
    createSql: `CREATE TABLE IF NOT EXISTS Performance_Reviews (
  review_id INT PRIMARY KEY,
  emp_id INT,
  review_year INT,
  rating INT,
  bonus DECIMAL(10,2),
  feedback VARCHAR(255),
  FOREIGN KEY (emp_id) REFERENCES Employees(emp_id)
);`
  }
];
