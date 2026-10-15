/**
 * Schema definition for SQL_Interview_Practice database.
 * Designed to be easily extensible for new tables and relationships.
 */

export const DATABASE_NAME = 'SQL_Interview_Practice';

export const TABLES_SCHEMA = [
  {
    name: 'Employees',
    description: 'Contains corporate employee records, personal details, department assignments, compensation, and location.',
    primaryKey: ['emp_id'],
    columns: [
      { name: 'emp_id', type: 'INT', nullable: false, isPrimary: true, description: 'Unique identifier for each employee' },
      { name: 'emp_name', type: 'VARCHAR(50)', nullable: false, isPrimary: false, description: 'Full name of the employee' },
      { name: 'age', type: 'INT', nullable: true, isPrimary: false, description: 'Age of the employee in years' },
      { name: 'department', type: 'VARCHAR(30)', nullable: true, isPrimary: false, description: 'Department (IT, HR, Finance, Marketing, Sales)' },
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
  }
];
