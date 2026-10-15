export const TOPIC8_QUESTIONS = [
  // Subtopic: Scalar Subqueries in WHERE & SELECT (IDs 251 to 260)
  {
    id: 251,
    title: "Find employees earning strictly more than the company-wide average salary",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display emp_id, emp_name, department, and salary for employees whose salary is greater than the overall average salary across all employees.",
    requirements: [
      "Use a scalar subquery: WHERE salary > (SELECT AVG(salary) FROM Employees).",
      "Select emp_id, emp_name, department, salary."
    ],
    tableName: "Employees",
    hint: "WHERE salary > (SELECT AVG(salary) FROM Employees)",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
    explanation: "A scalar subquery evaluates to a single value, allowing dynamic comparisons against table-wide metrics.",
    tags: ["subqueries", "scalar", "avg", "where"],
    estimatedTimeMinutes: 2
  },
  {
    id: 252,
    title: "Identify corporate initiatives with above-average budget allocations",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query from Projects to display project_id, project_name, and budget for projects whose budget is greater than the average project budget.",
    requirements: [
      "Use a scalar subquery: WHERE budget > (SELECT AVG(budget) FROM Projects).",
      "Select project_id, project_name, budget."
    ],
    tableName: "Projects",
    hint: "WHERE budget > (SELECT AVG(budget) FROM Projects)",
    expectedSql: "SELECT project_id, project_name, budget FROM Projects WHERE budget > (SELECT AVG(budget) FROM Projects);",
    explanation: "Dynamically filters capital allocations against the calculated portfolio average.",
    tags: ["subqueries", "scalar", "budget"],
    estimatedTimeMinutes: 2
  },
  {
    id: 253,
    title: "Retrieve employee details for the company's highest earner",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for the employee(s) who earn the maximum salary in the company.",
    requirements: [
      "Use WHERE salary = (SELECT MAX(salary) FROM Employees).",
      "Select emp_id, emp_name, department, salary."
    ],
    tableName: "Employees",
    hint: "WHERE salary = (SELECT MAX(salary) FROM Employees)",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary = (SELECT MAX(salary) FROM Employees);",
    explanation: "Using a scalar MAX subquery accommodates ties without hardcoding compensation amounts.",
    tags: ["subqueries", "scalar", "max"],
    estimatedTimeMinutes: 2
  },
  {
    id: 254,
    title: "Project company average salary alongside individual employee compensation",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display emp_name, salary, and (SELECT ROUND(AVG(salary), 2) FROM Employees) AS company_avg_salary for all employees.",
    requirements: [
      "Use a scalar subquery directly in the SELECT clause.",
      "Alias the subquery as company_avg_salary.",
      "Select emp_name, salary, company_avg_salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, salary, (SELECT ROUND(AVG(salary), 2) FROM Employees) AS company_avg_salary FROM Employees;",
    expectedSql: "SELECT emp_name, salary, (SELECT ROUND(AVG(salary), 2) FROM Employees) AS company_avg_salary FROM Employees;",
    explanation: "Scalar subqueries in SELECT broadcast a constant computed value across every projected record.",
    tags: ["subqueries", "scalar-select", "projection"],
    estimatedTimeMinutes: 2
  },
  {
    id: 255,
    title: "Calculate budget deficit from the maximum project investment",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Projects to display project_name, budget, and ((SELECT MAX(budget) FROM Projects) - budget) AS budget_gap for all projects.",
    requirements: [
      "Use (SELECT MAX(budget) FROM Projects) - budget AS budget_gap.",
      "Select project_name, budget, budget_gap."
    ],
    tableName: "Projects",
    hint: "((SELECT MAX(budget) FROM Projects) - budget) AS budget_gap",
    expectedSql: "SELECT project_name, budget, ((SELECT MAX(budget) FROM Projects) - budget) AS budget_gap FROM Projects;",
    explanation: "Performs arithmetic against a scalar subquery to calculate variance from the top benchmark.",
    tags: ["subqueries", "arithmetic", "scalar"],
    estimatedTimeMinutes: 3
  },
  {
    id: 256,
    title: "Filter performance reviews with above-average bonus awards",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Performance_Reviews to display review_id, emp_id, rating, and bonus for reviews where bonus is strictly greater than the average bonus awarded across all reviews.",
    requirements: [
      "Use WHERE bonus > (SELECT AVG(bonus) FROM Performance_Reviews).",
      "Select review_id, emp_id, rating, bonus."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE bonus > (SELECT AVG(bonus) FROM Performance_Reviews)",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus > (SELECT AVG(bonus) FROM Performance_Reviews);",
    explanation: "Filters reviews using the dynamically calculated mean bonus award.",
    tags: ["subqueries", "scalar", "reviews", "bonus"],
    estimatedTimeMinutes: 2
  },
  {
    id: 257,
    title: "Find employees earning strictly more than the IT department average",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees earning more than the average salary of the 'IT' department.",
    requirements: [
      "Use WHERE salary > (SELECT AVG(salary) FROM Employees WHERE department = 'IT').",
      "Select emp_id, emp_name, department, salary."
    ],
    tableName: "Employees",
    hint: "WHERE salary > (SELECT AVG(salary) FROM Employees WHERE department = 'IT')",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees WHERE department = 'IT');",
    explanation: "Compares individual salaries from any department against the specific average of the IT team.",
    tags: ["subqueries", "scalar", "department-benchmark"],
    estimatedTimeMinutes: 3
  },
  {
    id: 258,
    title: "Identify departments endowed with above-average operating budgets",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Departments to display dept_id, dept_name, location, and budget for departments whose budget exceeds the average departmental budget.",
    requirements: [
      "Use WHERE budget > (SELECT AVG(budget) FROM Departments).",
      "Select dept_id, dept_name, location, budget."
    ],
    tableName: "Departments",
    hint: "WHERE budget > (SELECT AVG(budget) FROM Departments)",
    expectedSql: "SELECT dept_id, dept_name, location, budget FROM Departments WHERE budget > (SELECT AVG(budget) FROM Departments);",
    explanation: "Filters departmental units based on the enterprise-wide average budget.",
    tags: ["subqueries", "scalar", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 259,
    title: "Retrieve all entry-level staff possessing the minimum recorded experience",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, department, and experience for employees having the minimum experience in the company.",
    requirements: [
      "Use WHERE experience = (SELECT MIN(experience) FROM Employees).",
      "Select emp_id, emp_name, department, experience."
    ],
    tableName: "Employees",
    hint: "WHERE experience = (SELECT MIN(experience) FROM Employees)",
    expectedSql: "SELECT emp_id, emp_name, department, experience FROM Employees WHERE experience = (SELECT MIN(experience) FROM Employees);",
    explanation: "Locates all staff holding the floor tenure value.",
    tags: ["subqueries", "scalar", "min"],
    estimatedTimeMinutes: 2
  },
  {
    id: 260,
    title: "Find initiatives launched prior to the kickoff of Cloud Migration",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Projects to display project_id, project_name, dept_id, and start_date for projects whose start_date is strictly earlier than the start_date of the 'Cloud Migration' project.",
    requirements: [
      "Use WHERE start_date < (SELECT start_date FROM Projects WHERE project_name = 'Cloud Migration').",
      "Select project_id, project_name, dept_id, start_date."
    ],
    tableName: "Projects",
    hint: "WHERE start_date < (SELECT start_date FROM Projects WHERE project_name = 'Cloud Migration')",
    expectedSql: "SELECT project_id, project_name, dept_id, start_date FROM Projects WHERE start_date < (SELECT start_date FROM Projects WHERE project_name = 'Cloud Migration');",
    explanation: "Evaluates dates against a scalar start date retrieved dynamically for a specific project.",
    tags: ["subqueries", "scalar", "dates"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Multi-Row Subqueries (IN, NOT IN) (IDs 261 to 270)
  {
    id: 261,
    title: "Find employees working in departments located in Bengaluru",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees whose department is located in 'Bengaluru', using a subquery with IN.",
    requirements: [
      "Use WHERE department IN (SELECT dept_name FROM Departments WHERE location = 'Bengaluru').",
      "Select emp_id, emp_name, department."
    ],
    tableName: "Employees, Departments",
    hint: "WHERE department IN (SELECT dept_name FROM Departments WHERE location = 'Bengaluru')",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE department IN (SELECT dept_name FROM Departments WHERE location = 'Bengaluru');",
    explanation: "IN matches the outer column against the list of values returned by the multi-row subquery.",
    tags: ["subqueries", "in", "multi-row"],
    estimatedTimeMinutes: 2
  },
  {
    id: 262,
    title: "Find employees assigned to currently active corporate initiatives",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees who are assigned to at least one project with status 'Active'.",
    requirements: [
      "Use WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active').",
      "Select emp_id, emp_name, department."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active')",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active');",
    explanation: "Filters outer employees against a subquery joining the project assignment and status relations.",
    tags: ["subqueries", "in", "projects", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 263,
    title: "Find employees who have never received a performance review (NOT IN)",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees whose emp_id is NOT IN Performance_Reviews.",
    requirements: [
      "Use WHERE emp_id NOT IN (SELECT emp_id FROM Performance_Reviews).",
      "Select emp_id, emp_name, department, salary."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE emp_id NOT IN (SELECT emp_id FROM Performance_Reviews)",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE emp_id NOT IN (SELECT emp_id FROM Performance_Reviews);",
    explanation: "NOT IN identifies records absent from the target set, isolating unreviewed personnel.",
    tags: ["subqueries", "not-in", "exclusion"],
    estimatedTimeMinutes: 2
  },
  {
    id: 264,
    title: "Find projects with zero assigned employees (NOT IN)",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Projects to display project_id, project_name, and status for projects whose project_id is NOT IN Employee_Projects.",
    requirements: [
      "Use WHERE project_id NOT IN (SELECT project_id FROM Employee_Projects).",
      "Select project_id, project_name, status."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "WHERE project_id NOT IN (SELECT project_id FROM Employee_Projects)",
    expectedSql: "SELECT project_id, project_name, status FROM Projects WHERE project_id NOT IN (SELECT project_id FROM Employee_Projects);",
    explanation: "Surfaces unstaffed initiatives by excluding any project ID present in the junction table.",
    tags: ["subqueries", "not-in", "projects"],
    estimatedTimeMinutes: 2
  },
  {
    id: 265,
    title: "Find employees who have achieved a top rating of 5 in any review",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees who received a rating of 5 in at least one performance review.",
    requirements: [
      "Use WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5).",
      "Select emp_id, emp_name, department."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5)",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5);",
    explanation: "Filters outer employees matching the set of high-performing review recipients.",
    tags: ["subqueries", "in", "ratings"],
    estimatedTimeMinutes: 2
  },
  {
    id: 266,
    title: "Find departments that currently have no assigned employees (NOT IN)",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Departments to display dept_id, dept_name, and location for departments where dept_name is NOT IN the Employees table.",
    requirements: [
      "Use WHERE dept_name NOT IN (SELECT department FROM Employees WHERE department IS NOT NULL).",
      "Select dept_id, dept_name, location."
    ],
    tableName: "Departments, Employees",
    hint: "WHERE dept_name NOT IN (SELECT department FROM Employees WHERE department IS NOT NULL)",
    expectedSql: "SELECT dept_id, dept_name, location FROM Departments WHERE dept_name NOT IN (SELECT department FROM Employees WHERE department IS NOT NULL);",
    explanation: "Filtering out NULL in the NOT IN subquery is a critical best practice to avoid empty result sets in SQL.",
    tags: ["subqueries", "not-in", "null-trap"],
    estimatedTimeMinutes: 3
  },
  {
    id: 267,
    title: "Find employees assigned to major capital projects (budget >= 300000)",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and salary for employees assigned to any project with budget >= 300000.",
    requirements: [
      "Use WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget >= 300000).",
      "Select emp_id, emp_name, salary."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget >= 300000)",
    expectedSql: "SELECT emp_id, emp_name, salary FROM Employees WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget >= 300000);",
    explanation: "Links staff members to large-budget initiatives via a multi-row subquery.",
    tags: ["subqueries", "in", "budget"],
    estimatedTimeMinutes: 3
  },
  {
    id: 268,
    title: "Find projects staffed by high-earning talent (salary > 70000)",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Projects to display project_id, project_name, and status for projects that have at least one assigned employee earning more than 70000.",
    requirements: [
      "Use WHERE project_id IN (SELECT ep.project_id FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE e.salary > 70000).",
      "Select project_id, project_name, status."
    ],
    tableName: "Projects, Employee_Projects, Employees",
    hint: "WHERE project_id IN (SELECT ep.project_id FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE e.salary > 70000)",
    expectedSql: "SELECT project_id, project_name, status FROM Projects WHERE project_id IN (SELECT ep.project_id FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE e.salary > 70000);",
    explanation: "Identifies projects that leverage senior highly compensated specialists.",
    tags: ["subqueries", "in", "talent"],
    estimatedTimeMinutes: 3
  },
  {
    id: 269,
    title: "Find employees with no project assignments using NOT IN",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees whose emp_id is NOT IN Employee_Projects.",
    requirements: [
      "Use WHERE emp_id NOT IN (SELECT emp_id FROM Employee_Projects).",
      "Select emp_id, emp_name, department."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "WHERE emp_id NOT IN (SELECT emp_id FROM Employee_Projects)",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id NOT IN (SELECT emp_id FROM Employee_Projects);",
    explanation: "Filters the employee workforce for individuals currently unassigned to any initiative.",
    tags: ["subqueries", "not-in", "unassigned"],
    estimatedTimeMinutes: 2
  },
  {
    id: 270,
    title: "Find departments without any active projects (NOT IN)",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Departments to display dept_id, dept_name, and location for departments whose dept_id is NOT IN active projects.",
    requirements: [
      "Use WHERE dept_id NOT IN (SELECT dept_id FROM Projects WHERE status = 'Active' AND dept_id IS NOT NULL).",
      "Select dept_id, dept_name, location."
    ],
    tableName: "Departments, Projects",
    hint: "WHERE dept_id NOT IN (SELECT dept_id FROM Projects WHERE status = 'Active' AND dept_id IS NOT NULL)",
    expectedSql: "SELECT dept_id, dept_name, location FROM Departments WHERE dept_id NOT IN (SELECT dept_id FROM Projects WHERE status = 'Active' AND dept_id IS NOT NULL);",
    explanation: "Isolates departments that lack ongoing operational project streams.",
    tags: ["subqueries", "not-in", "status"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Correlated Subqueries (EXISTS & NOT EXISTS) (IDs 271 to 280)
  {
    id: 271,
    title: "Identify assigned personnel using the correlated EXISTS operator",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where EXISTS a record in Employee_Projects for that employee.",
    requirements: [
      "Use WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id).",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id)",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id);",
    explanation: "EXISTS tests for the presence of at least one matching row in the correlated subquery, short-circuiting on the first match.",
    tags: ["subqueries", "correlated", "exists"],
    estimatedTimeMinutes: 3
  },
  {
    id: 272,
    title: "Find unstaffed employees using the correlated NOT EXISTS operator",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where NOT EXISTS any project assignment for that employee.",
    requirements: [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id).",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id)",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id);",
    explanation: "NOT EXISTS evaluates to true when the correlated subquery returns zero rows, robustly handling NULL values.",
    tags: ["subqueries", "correlated", "not-exists"],
    estimatedTimeMinutes: 3
  },
  {
    id: 273,
    title: "Find departments owning at least one active project (EXISTS)",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Departments to display dept_id, dept_name, and budget for departments where EXISTS at least one active project in Projects.",
    requirements: [
      "Use WHERE EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active').",
      "Select d.dept_id, d.dept_name, d.budget."
    ],
    tableName: "Departments, Projects",
    hint: "WHERE EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active')",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.budget FROM Departments d WHERE EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active');",
    explanation: "Checks existence of active projects correlated with the outer department record.",
    tags: ["subqueries", "correlated", "exists", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 274,
    title: "Find departments with zero registered projects (NOT EXISTS)",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Departments to display dept_id, dept_name, and location for departments where NOT EXISTS any project in Projects.",
    requirements: [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id).",
      "Select d.dept_id, d.dept_name, d.location."
    ],
    tableName: "Departments, Projects",
    hint: "WHERE NOT EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id)",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.location FROM Departments d WHERE NOT EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id);",
    explanation: "Efficiently identifies departments devoid of any associated capital initiatives.",
    tags: ["subqueries", "correlated", "not-exists", "departments"],
    estimatedTimeMinutes: 3
  },
  {
    id: 275,
    title: "Find employees who earned top ratings with significant bonus payouts (EXISTS)",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where EXISTS a review with rating = 5 and bonus > 20000.",
    requirements: [
      "Use WHERE EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.rating = 5 AND pr.bonus > 20000).",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.rating = 5 AND pr.bonus > 20000)",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.rating = 5 AND pr.bonus > 20000);",
    explanation: "Verifies existence of multi-attribute criteria in child evaluation records.",
    tags: ["subqueries", "correlated", "exists", "reviews"],
    estimatedTimeMinutes: 3
  },
  {
    id: 276,
    title: "Identify employees who have never received a cash bonus (NOT EXISTS)",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees where NOT EXISTS any review with a non-null bonus.",
    requirements: [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.bonus IS NOT NULL).",
      "Select e.emp_id, e.emp_name, e.department, e.salary."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.bonus IS NOT NULL)",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.bonus IS NOT NULL);",
    explanation: "Captures employees who either have no reviews at all or whose reviews contained NULL bonus awards.",
    tags: ["subqueries", "correlated", "not-exists", "null-handling"],
    estimatedTimeMinutes: 4
  },
  {
    id: 277,
    title: "Find projects with high-commitment staffing assignments (>= 35 hrs/wk)",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Projects to display project_id, project_name, and status for projects where EXISTS a staffing assignment with hours_allocated >= 35.",
    requirements: [
      "Use WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id AND ep.hours_allocated >= 35).",
      "Select p.project_id, p.project_name, p.status."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id AND ep.hours_allocated >= 35)",
    expectedSql: "SELECT p.project_id, p.project_name, p.status FROM Projects p WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id AND ep.hours_allocated >= 35);",
    explanation: "Locates initiatives sustained by intensive individual workloads.",
    tags: ["subqueries", "correlated", "exists", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 278,
    title: "Find projects lacking any staff assignments using NOT EXISTS",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Projects to display project_id, project_name, and budget for projects where NOT EXISTS any assignment in Employee_Projects.",
    requirements: [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id).",
      "Select p.project_id, p.project_name, p.budget."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id)",
    expectedSql: "SELECT p.project_id, p.project_name, p.budget FROM Projects p WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id);",
    explanation: "Detects orphaned or unstaffed initiatives using correlated NOT EXISTS.",
    tags: ["subqueries", "correlated", "not-exists", "projects"],
    estimatedTimeMinutes: 3
  },
  {
    id: 279,
    title: "Find staff assigned to mega-budget departments (budget >= 1200000) using EXISTS",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where EXISTS a department with budget >= 1200000 matching their department name.",
    requirements: [
      "Use WHERE EXISTS (SELECT 1 FROM Departments d WHERE d.dept_name = e.department AND d.budget >= 1200000).",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    tableName: "Employees, Departments",
    hint: "WHERE EXISTS (SELECT 1 FROM Departments d WHERE d.dept_name = e.department AND d.budget >= 1200000)",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE EXISTS (SELECT 1 FROM Departments d WHERE d.dept_name = e.department AND d.budget >= 1200000);",
    explanation: "Correlates parent employee records with department budgetary thresholds.",
    tags: ["subqueries", "correlated", "exists", "budget"],
    estimatedTimeMinutes: 3
  },
  {
    id: 280,
    title: "Identify employees who have undergone multiple performance evaluations",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees where the count of their records in Performance_Reviews is greater than or equal to 2.",
    requirements: [
      "Use WHERE (SELECT COUNT(*) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) >= 2.",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE (SELECT COUNT(*) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) >= 2",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE (SELECT COUNT(*) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) >= 2;",
    explanation: "Uses a correlated COUNT subquery in the WHERE clause to filter outer records by child entity frequency.",
    tags: ["subqueries", "correlated", "count", "frequency"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Correlated Subqueries with Analytical Comparisons (IDs 281 to 290)
  {
    id: 281,
    title: "Find employees earning strictly more than their OWN department average",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees earning more than the average salary of employees in their own department.",
    requirements: [
      "Use WHERE e.salary > (SELECT AVG(sub.salary) FROM Employees sub WHERE sub.department = e.department).",
      "Select e.emp_id, e.emp_name, e.department, e.salary."
    ],
    tableName: "Employees",
    hint: "WHERE e.salary > (SELECT AVG(sub.salary) FROM Employees sub WHERE sub.department = e.department)",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary > (SELECT AVG(sub.salary) FROM Employees sub WHERE sub.department = e.department);",
    explanation: "Classic interview question: correlated subquery computes dynamic group benchmarks specific to each outer row.",
    tags: ["subqueries", "correlated", "salary-comparison", "interview-classic"],
    estimatedTimeMinutes: 4
  },
  {
    id: 282,
    title: "Identify the top earner in each corporate department",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees who hold the highest salary in their respective department.",
    requirements: [
      "Use WHERE e.salary = (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department).",
      "Select e.emp_id, e.emp_name, e.department, e.salary."
    ],
    tableName: "Employees",
    hint: "WHERE e.salary = (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department)",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary = (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department);",
    explanation: "Locates department-level salary leaders using correlated maximum equality.",
    tags: ["subqueries", "correlated", "max-per-group"],
    estimatedTimeMinutes: 4
  },
  {
    id: 283,
    title: "Find the most senior employee in each office city",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, city, and experience for employees who possess the maximum experience in their office city.",
    requirements: [
      "Use WHERE e.experience = (SELECT MAX(sub.experience) FROM Employees sub WHERE sub.city = e.city).",
      "Select e.emp_id, e.emp_name, e.city, e.experience."
    ],
    tableName: "Employees",
    hint: "WHERE e.experience = (SELECT MAX(sub.experience) FROM Employees sub WHERE sub.city = e.city)",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.city, e.experience FROM Employees e WHERE e.experience = (SELECT MAX(sub.experience) FROM Employees sub WHERE sub.city = e.city);",
    explanation: "Finds the seniority anchor within each geographical branch location.",
    tags: ["subqueries", "correlated", "max-per-city"],
    estimatedTimeMinutes: 4
  },
  {
    id: 284,
    title: "Find performance reviews with bonuses exceeding the annual cycle average",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Performance_Reviews to display review_id, emp_id, review_year, and bonus for reviews where bonus is strictly greater than the average bonus for that specific review_year.",
    requirements: [
      "Use WHERE pr.bonus > (SELECT AVG(sub.bonus) FROM Performance_Reviews sub WHERE sub.review_year = pr.review_year).",
      "Select pr.review_id, pr.emp_id, pr.review_year, pr.bonus."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE pr.bonus > (SELECT AVG(sub.bonus) FROM Performance_Reviews sub WHERE sub.review_year = pr.review_year)",
    expectedSql: "SELECT pr.review_id, pr.emp_id, pr.review_year, pr.bonus FROM Performance_Reviews pr WHERE pr.bonus > (SELECT AVG(sub.bonus) FROM Performance_Reviews sub WHERE sub.review_year = pr.review_year);",
    explanation: "Correlates review year to compare bonus allocations against the mean of that year's appraisal cohort.",
    tags: ["subqueries", "correlated", "annual-average"],
    estimatedTimeMinutes: 4
  },
  {
    id: 285,
    title: "Find initiatives budgeted higher than their department project average",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Projects to display project_id, project_name, dept_id, and budget for projects whose budget exceeds the average project budget of their own department.",
    requirements: [
      "Use WHERE p.budget > (SELECT AVG(sub.budget) FROM Projects sub WHERE sub.dept_id = p.dept_id).",
      "Select p.project_id, p.project_name, p.dept_id, p.budget."
    ],
    tableName: "Projects",
    hint: "WHERE p.budget > (SELECT AVG(sub.budget) FROM Projects sub WHERE sub.dept_id = p.dept_id)",
    expectedSql: "SELECT p.project_id, p.project_name, p.dept_id, p.budget FROM Projects p WHERE p.budget > (SELECT AVG(sub.budget) FROM Projects sub WHERE sub.dept_id = p.dept_id);",
    explanation: "Identifies capital initiatives prioritized above typical department investment levels.",
    tags: ["subqueries", "correlated", "department-budget"],
    estimatedTimeMinutes: 4
  },
  {
    id: 286,
    title: "Correlated subquery in SELECT: Project count assigned to each employee",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects for all employees.",
    requirements: [
      "Use a correlated subquery in SELECT: (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects.",
      "Select e.emp_id, e.emp_name, total_projects."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "SELECT e.emp_id, e.emp_name, (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects FROM Employees e;",
    expectedSql: "SELECT e.emp_id, e.emp_name, (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects FROM Employees e;",
    explanation: "Correlated scalar subqueries in SELECT append child aggregations to parent entities without requiring GROUP BY.",
    tags: ["subqueries", "correlated-select", "count"],
    estimatedTimeMinutes: 3
  },
  {
    id: 287,
    title: "Correlated subquery in SELECT: Lifetime peak rating achieved per employee",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating for all employees.",
    requirements: [
      "Use a correlated subquery in SELECT: (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating.",
      "Select e.emp_id, e.emp_name, highest_rating."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "SELECT e.emp_id, e.emp_name, (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating FROM Employees e;",
    expectedSql: "SELECT e.emp_id, e.emp_name, (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating FROM Employees e;",
    explanation: "Embeds each employee's personal appraisal ceiling directly into the workforce roster.",
    tags: ["subqueries", "correlated-select", "max"],
    estimatedTimeMinutes: 3
  },
  {
    id: 288,
    title: "Correlated subquery in SELECT: Count active initiatives per department",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from Departments to display dept_name, location, and (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') AS active_projects for all departments.",
    requirements: [
      "Use a correlated subquery in SELECT counting active projects.",
      "Select d.dept_name, d.location, active_projects."
    ],
    tableName: "Departments, Projects",
    hint: "SELECT d.dept_name, d.location, (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') AS active_projects FROM Departments d;",
    expectedSql: "SELECT d.dept_name, d.location, (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') AS active_projects FROM Departments d;",
    explanation: "Calculates live operational capacity for every department through correlated projection.",
    tags: ["subqueries", "correlated-select", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 289,
    title: "Find staff earning more than ANY colleague in their department who has less experience",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display e.emp_id, e.emp_name, e.department, e.salary, and e.experience for employees whose salary is strictly greater than the maximum salary of all junior-tenured colleagues in the same department.",
    requirements: [
      "Use WHERE e.salary > (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department AND sub.experience < e.experience).",
      "Select e.emp_id, e.emp_name, e.department, e.salary, e.experience."
    ],
    tableName: "Employees",
    hint: "WHERE e.salary > (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department AND sub.experience < e.experience)",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary, e.experience FROM Employees e WHERE e.salary > (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department AND sub.experience < e.experience);",
    explanation: "Enforces tenure-based pay progression by checking that salary exceeds the compensation of all colleagues with lower experience.",
    tags: ["subqueries", "correlated", "progression"],
    estimatedTimeMinutes: 4
  },
  {
    id: 290,
    title: "Identify standout review ratings exceeding the employee's own lifetime average",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Performance_Reviews to display pr.review_id, pr.emp_id, pr.review_year, and pr.rating for reviews where the rating is strictly higher than the employee's career average rating across all reviews.",
    requirements: [
      "Use WHERE pr.rating > (SELECT AVG(sub.rating) FROM Performance_Reviews sub WHERE sub.emp_id = pr.emp_id).",
      "Select pr.review_id, pr.emp_id, pr.review_year, pr.rating."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE pr.rating > (SELECT AVG(sub.rating) FROM Performance_Reviews sub WHERE sub.emp_id = pr.emp_id)",
    expectedSql: "SELECT pr.review_id, pr.emp_id, pr.review_year, pr.rating FROM Performance_Reviews pr WHERE pr.rating > (SELECT AVG(sub.rating) FROM Performance_Reviews sub WHERE sub.emp_id = pr.emp_id);",
    explanation: "Highlights breakout individual performances that surpass the employee's typical appraisal baseline.",
    tags: ["subqueries", "correlated", "baseline"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Derived Tables & Subqueries in the FROM Clause (IDs 291 to 300)
  {
    id: 291,
    title: "Filter pre-aggregated department metrics using a derived table",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Medium",
    problemStatement: "Write a SQL query using a derived table in the FROM clause that computes department, COUNT(*) AS emp_count, and ROUND(AVG(salary), 2) AS avg_sal from Employees, and outer-filters where avg_sal > 50000.",
    requirements: [
      "FROM (SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt.",
      "Filter in outer query with WHERE dt.avg_sal > 50000.",
      "Select dt.department, dt.emp_count, dt.avg_sal."
    ],
    tableName: "Employees",
    hint: "FROM (SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt WHERE dt.avg_sal > 50000",
    expectedSql: "SELECT dt.department, dt.emp_count, dt.avg_sal FROM (SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt WHERE dt.avg_sal > 50000;",
    explanation: "Derived tables create inline temporary views that allow filtering on computed column aliases using standard WHERE clauses.",
    tags: ["subqueries", "derived-tables", "from-clause"],
    estimatedTimeMinutes: 3
  },
  {
    id: 292,
    title: "Query workload totals from a derived staffing aggregation",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Medium",
    problemStatement: "Write a SQL query using a derived table from Employee_Projects that calculates emp_id and SUM(hours_allocated) AS total_hours, and outer-filters where total_hours > 35.",
    requirements: [
      "FROM (SELECT emp_id, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY emp_id) dt.",
      "Outer filter: WHERE dt.total_hours > 35.",
      "Select dt.emp_id, dt.total_hours."
    ],
    tableName: "Employee_Projects",
    hint: "FROM (SELECT emp_id, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY emp_id) dt WHERE dt.total_hours > 35",
    expectedSql: "SELECT dt.emp_id, dt.total_hours FROM (SELECT emp_id, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY emp_id) dt WHERE dt.total_hours > 35;",
    explanation: "Encapsulates aggregation inside a derived table, enabling clean post-aggregation filtering.",
    tags: ["subqueries", "derived-tables", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 293,
    title: "Join employee records with a departmental statistics derived table",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, e.department, e.salary, and dept_stats.avg_dept_sal by joining Employees e with a derived table computing department and ROUND(AVG(salary), 2) AS avg_dept_sal.",
    requirements: [
      "INNER JOIN Employees e with (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal FROM Employees GROUP BY department) dept_stats ON e.department = dept_stats.department.",
      "Select e.emp_name, e.department, e.salary, dept_stats.avg_dept_sal."
    ],
    tableName: "Employees",
    hint: "JOIN (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal FROM Employees GROUP BY department) dept_stats ON e.department = dept_stats.department",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, dept_stats.avg_dept_sal FROM Employees e INNER JOIN (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal FROM Employees GROUP BY department) dept_stats ON e.department = dept_stats.department;",
    explanation: "A standard SQL pattern: joining detail rows with a derived summary table avoids row-multiplication errors.",
    tags: ["subqueries", "derived-tables", "join"],
    estimatedTimeMinutes: 4
  },
  {
    id: 294,
    title: "Rank employees by salary difference relative to departmental mean using a derived table",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Write a SQL query joining Employees e with a derived table calculating department average salary, selecting e.emp_name, e.department, e.salary, (e.salary - dt.avg_sal) AS diff_from_dept_avg, ordered by diff_from_dept_avg descending.",
    requirements: [
      "Join Employees e with (SELECT department, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt ON e.department = dt.department.",
      "Calculate (e.salary - dt.avg_sal) AS diff_from_dept_avg.",
      "Select e.emp_name, e.department, e.salary, diff_from_dept_avg.",
      "Order by diff_from_dept_avg DESC."
    ],
    tableName: "Employees",
    hint: "ORDER BY diff_from_dept_avg DESC",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, (e.salary - dt.avg_sal) AS diff_from_dept_avg FROM Employees e INNER JOIN (SELECT department, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt ON e.department = dt.department ORDER BY diff_from_dept_avg DESC;",
    explanation: "Enables multi-tiered compensation benchmarking across internal corporate departments.",
    tags: ["subqueries", "derived-tables", "ranking", "order-by"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  },
  {
    id: 295,
    title: "Identify appraisal years distributing over 100,000 in bonuses using a derived table",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Medium",
    problemStatement: "Write a SQL query from a derived table aggregating review_year, COUNT(*) AS reviews_count, and SUM(bonus) AS total_bonus from Performance_Reviews, filtering where total_bonus > 100000.",
    requirements: [
      "FROM (SELECT review_year, COUNT(*) AS reviews_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY review_year) yt.",
      "Filter with WHERE yt.total_bonus > 100000.",
      "Select yt.review_year, yt.reviews_count, yt.total_bonus."
    ],
    tableName: "Performance_Reviews",
    hint: "FROM (SELECT review_year, COUNT(*) AS reviews_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY review_year) yt WHERE yt.total_bonus > 100000",
    expectedSql: "SELECT yt.review_year, yt.reviews_count, yt.total_bonus FROM (SELECT review_year, COUNT(*) AS reviews_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY review_year) yt WHERE yt.total_bonus > 100000;",
    explanation: "Transforms annual performance aggregations into an inline table to audit mega-payout years.",
    tags: ["subqueries", "derived-tables", "bonus"],
    estimatedTimeMinutes: 3
  },
  {
    id: 296,
    title: "Double-nested subquery: Find employees in the department with the highest average salary",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for employees in the department that holds the highest average salary in the company.",
    requirements: [
      "Use WHERE department = (SELECT department FROM Employees GROUP BY department ORDER BY AVG(salary) DESC LIMIT 1).",
      "Select emp_id, emp_name, department, salary."
    ],
    tableName: "Employees",
    hint: "WHERE department = (SELECT department FROM Employees GROUP BY department ORDER BY AVG(salary) DESC LIMIT 1)",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE department = (SELECT department FROM Employees GROUP BY department ORDER BY AVG(salary) DESC LIMIT 1);",
    explanation: "Nest an aggregate group subquery inside the WHERE predicate to target the top-paying organizational division.",
    tags: ["subqueries", "nested", "top-department"],
    estimatedTimeMinutes: 4
  },
  {
    id: 297,
    title: "Nested subquery: Find initiatives belonging to the department with the largest operating budget",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Projects to display project_id, project_name, and budget for projects belonging to the department with the maximum budget in Departments.",
    requirements: [
      "Use WHERE dept_id = (SELECT dept_id FROM Departments ORDER BY budget DESC LIMIT 1).",
      "Select project_id, project_name, budget."
    ],
    tableName: "Projects, Departments",
    hint: "WHERE dept_id = (SELECT dept_id FROM Departments ORDER BY budget DESC LIMIT 1)",
    expectedSql: "SELECT project_id, project_name, budget FROM Projects WHERE dept_id = (SELECT dept_id FROM Departments ORDER BY budget DESC LIMIT 1);",
    explanation: "Links projects to the single highest-funded organizational unit using a nested subquery.",
    tags: ["subqueries", "nested", "budget"],
    estimatedTimeMinutes: 4
  },
  {
    id: 298,
    title: "Multi-level subquery: Find employees assigned to the highest funded active initiative",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, and department for employees assigned to the project with the maximum budget among active projects (status = 'Active').",
    requirements: [
      "Use WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep WHERE ep.project_id = (SELECT project_id FROM Projects WHERE status = 'Active' ORDER BY budget DESC LIMIT 1)).",
      "Select emp_id, emp_name, department."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "ep.project_id = (SELECT project_id FROM Projects WHERE status = 'Active' ORDER BY budget DESC LIMIT 1)",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep WHERE ep.project_id = (SELECT project_id FROM Projects WHERE status = 'Active' ORDER BY budget DESC LIMIT 1));",
    explanation: "Multi-level nested subquery passes from active project budget evaluation through the staffing junction table to the workforce roster.",
    tags: ["subqueries", "multi-level", "nested"],
    estimatedTimeMinutes: 5
  },
  {
    id: 299,
    title: "Derived table: Compute employee salary as a percentage of department payroll",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Write a SQL query joining Employees e with a derived table calculating department total payroll, displaying e.emp_name, e.department, e.salary, and ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll.",
    requirements: [
      "Join Employees e with (SELECT department, SUM(salary) AS total_dept_payroll FROM Employees GROUP BY department) dp ON e.department = dp.department.",
      "Calculate ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll.",
      "Select e.emp_name, e.department, e.salary, pct_of_dept_payroll."
    ],
    tableName: "Employees",
    hint: "ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll FROM Employees e INNER JOIN (SELECT department, SUM(salary) AS total_dept_payroll FROM Employees GROUP BY department) dp ON e.department = dp.department;",
    explanation: "Computes proportional compensation share within each business unit.",
    tags: ["subqueries", "derived-tables", "percentage", "payroll"],
    estimatedTimeMinutes: 4
  },
  {
    id: 300,
    title: "Grand Challenge: Identify the single most rewarded employee by cumulative lifetime bonus",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employees to display emp_id, emp_name, department, and salary for the employee who earned the highest cumulative bonus across all performance reviews.",
    requirements: [
      "Use WHERE emp_id = (SELECT emp_id FROM Performance_Reviews GROUP BY emp_id ORDER BY SUM(bonus) DESC LIMIT 1).",
      "Select emp_id, emp_name, department, salary."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE emp_id = (SELECT emp_id FROM Performance_Reviews GROUP BY emp_id ORDER BY SUM(bonus) DESC LIMIT 1)",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE emp_id = (SELECT emp_id FROM Performance_Reviews GROUP BY emp_id ORDER BY SUM(bonus) DESC LIMIT 1);",
    explanation: "Capstone subquery problem: ranks aggregate bonus earnings across historical appraisals to isolate and return the top-performing corporate employee.",
    tags: ["subqueries", "nested", "capstone", "interview-favorite"],
    estimatedTimeMinutes: 5
  }
];
