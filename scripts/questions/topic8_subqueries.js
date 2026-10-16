export const TOPIC8_QUESTIONS = [
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 2
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 3
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 5
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
    "estimatedTimeMinutes": 4
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
    "estimatedTimeMinutes": 5
  }
];
