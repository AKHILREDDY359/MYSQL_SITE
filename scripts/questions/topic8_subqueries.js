export const TOPIC8_QUESTIONS = [
  // Subtopic: Scalar Subqueries in WHERE & SELECT (IDs 251 to 260)
  {
    id: 251,
    title: "Workforce Above-Average Compensation Filter",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Beginner",
    problemStatement: "The executive compensation committee is identifying staff members whose base earnings surpass the company-wide average. Find all employees whose monthly salary strictly exceeds the overall average salary calculated across all employees in the organization.",
    requirements: [
      "Dynamically compute the organization-wide average employee salary.",
      "Filter for employees whose salary strictly exceeds that calculated benchmark.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    tableName: "Employees",
    hint: "Compare each employee's salary against a scalar subquery calculating the overall average salary.",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
    explanation: "A scalar subquery evaluates to a single value, allowing dynamic comparisons against table-wide metrics.",
    tags: ["subqueries", "scalar", "avg", "where"],
    estimatedTimeMinutes: 2
  },
  {
    id: 252,
    title: "Above-Average Funded Capital Initiatives",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Beginner",
    problemStatement: "The investment committee is auditing initiatives that receive greater funding than the standard portfolio baseline. Retrieve project ID, project name, and budget for all projects whose capital budget strictly exceeds the average budget across all corporate projects.",
    requirements: [
      "Calculate the average budget across all projects in the portfolio.",
      "Filter for initiatives whose budget is strictly greater than this average.",
      "Display `project_id`, `project_name`, and `budget` from Projects."
    ],
    tableName: "Projects",
    hint: "Use a scalar subquery to find the portfolio mean budget and filter in the WHERE clause.",
    expectedSql: "SELECT project_id, project_name, budget FROM Projects WHERE budget > (SELECT AVG(budget) FROM Projects);",
    explanation: "Dynamically filters capital allocations against the calculated portfolio average.",
    tags: ["subqueries", "scalar", "budget"],
    estimatedTimeMinutes: 2
  },
  {
    id: 253,
    title: "Organization Top Compensation Recipient",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Beginner",
    problemStatement: "Executive remuneration analysis is verifying the record for the single highest-paid employee in the company. Find the employee ID, name, department, and salary for the individual earning the maximum salary in the organization.",
    requirements: [
      "Determine the highest salary value in the Employees table.",
      "Filter for the employee record that matches this peak compensation.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    tableName: "Employees",
    hint: "Filter for salary equal to a scalar subquery computing MAX(salary).",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary = (SELECT MAX(salary) FROM Employees);",
    explanation: "Using a scalar MAX subquery accommodates ties without hardcoding compensation amounts.",
    tags: ["subqueries", "scalar", "max"],
    estimatedTimeMinutes: 2
  },
  {
    id: 254,
    title: "Individual Compensation Compared to Company Mean",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Easy",
    problemStatement: "Payroll reporting presents individual earnings alongside the corporate benchmark. For each employee, display their name, monthly salary, and a column showing the company-wide average salary rounded to 2 decimal places, aliased as `company_avg_salary`.",
    requirements: [
      "Query the Employees table for `emp_name` and `salary`.",
      "Include a scalar subquery projecting the overall average salary rounded to 2 decimal places, aliased as `company_avg_salary`."
    ],
    tableName: "Employees",
    hint: "Place a scalar subquery calculating ROUND(AVG(salary), 2) directly in the SELECT list.",
    expectedSql: "SELECT emp_name, salary, (SELECT ROUND(AVG(salary), 2) FROM Employees) AS company_avg_salary FROM Employees;",
    explanation: "Scalar subqueries in SELECT broadcast a constant computed value across every projected record.",
    tags: ["subqueries", "scalar-select", "projection"],
    estimatedTimeMinutes: 2
  },
  {
    id: 255,
    title: "Capital Funding Gap from Peak Initiative",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Easy",
    problemStatement: "Portfolio governance evaluates the funding disparity between each initiative and the flagship project. For each project, display the project name, project budget, and the deficit (maximum project budget minus this project's budget), aliased as `budget_gap`.",
    requirements: [
      "Query the Projects table.",
      "Subtract each project's budget from the maximum budget in the portfolio.",
      "Alias the calculated funding deficit as `budget_gap`.",
      "Display `project_name`, `budget`, and `budget_gap`."
    ],
    tableName: "Projects",
    hint: "Subtract budget from a scalar subquery calculating MAX(budget) in the SELECT list.",
    expectedSql: "SELECT project_name, budget, ((SELECT MAX(budget) FROM Projects) - budget) AS budget_gap FROM Projects;",
    explanation: "Performs arithmetic against a scalar subquery to calculate variance from the top benchmark.",
    tags: ["subqueries", "arithmetic", "scalar"],
    estimatedTimeMinutes: 3
  },
  {
    id: 256,
    title: "Performance Appraisals with Above-Average Bonuses",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Easy",
    problemStatement: "The compensation committee is reviewing standout appraisal incentives. Retrieve review ID, employee ID, rating, and bonus for all performance reviews where the awarded bonus strictly exceeds the average bonus across all reviews.",
    requirements: [
      "Calculate the average bonus across all performance evaluations.",
      "Filter for reviews where the awarded bonus strictly exceeds that average.",
      "Display `review_id`, `emp_id`, `rating`, and `bonus` from Performance_Reviews."
    ],
    tableName: "Performance_Reviews",
    hint: "Filter where bonus is greater than a scalar subquery computing AVG(bonus).",
    expectedSql: "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus > (SELECT AVG(bonus) FROM Performance_Reviews);",
    explanation: "Filters reviews using the dynamically calculated mean bonus award.",
    tags: ["subqueries", "scalar", "reviews", "bonus"],
    estimatedTimeMinutes: 2
  },
  {
    id: 257,
    title: "Staff Earning Above the IT Department Benchmark",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Medium",
    problemStatement: "Workforce analytics is comparing compensation against the technology division baseline. Find all employees across the entire company whose salary strictly exceeds the average salary of employees in the IT department.",
    requirements: [
      "Calculate the average salary specifically for the 'IT' department.",
      "Filter employees whose salary strictly exceeds that IT departmental benchmark.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    tableName: "Employees",
    hint: "Compare salary against a subquery calculating AVG(salary) WHERE department = 'IT'.",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees WHERE department = 'IT');",
    explanation: "Compares individual salaries from any department against the specific average of the IT team.",
    tags: ["subqueries", "scalar", "department-benchmark"],
    estimatedTimeMinutes: 3
  },
  {
    id: 258,
    title: "Divisions Endowed with Above-Average Budgets",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Easy",
    problemStatement: "Corporate treasury is reviewing high-budget operational divisions. Retrieve the department ID, department name, location, and budget for all departments whose operating budget strictly exceeds the average budget across all corporate departments.",
    requirements: [
      "Compute the average operating budget across all departments.",
      "Filter for departments whose budget exceeds this calculated average.",
      "Display `dept_id`, `dept_name`, `location`, and `budget` from Departments."
    ],
    tableName: "Departments",
    hint: "Filter where budget is greater than a subquery computing AVG(budget) from Departments.",
    expectedSql: "SELECT dept_id, dept_name, location, budget FROM Departments WHERE budget > (SELECT AVG(budget) FROM Departments);",
    explanation: "Filters departmental units based on the enterprise-wide average budget.",
    tags: ["subqueries", "scalar", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 259,
    title: "Workforce Entry-Level Seniority Cohort",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Beginner",
    problemStatement: "Talent development is identifying entry-level personnel with the lowest tenure recorded in the enterprise. Retrieve employee ID, name, department, and years of experience for all employees whose experience equals the minimum experience found in the company.",
    requirements: [
      "Determine the minimum years of experience across all employees.",
      "Filter for staff members matching this baseline tenure.",
      "Display `emp_id`, `emp_name`, `department`, and `experience` from Employees."
    ],
    tableName: "Employees",
    hint: "Filter where experience equals a subquery computing MIN(experience).",
    expectedSql: "SELECT emp_id, emp_name, department, experience FROM Employees WHERE experience = (SELECT MIN(experience) FROM Employees);",
    explanation: "Locates all staff holding the floor tenure value.",
    tags: ["subqueries", "scalar", "min"],
    estimatedTimeMinutes: 2
  },
  {
    id: 260,
    title: "Initiatives Launched Prior to Cloud Migration Kickoff",
    topic: "Subqueries",
    subtopic: "Scalar Subqueries in WHERE & SELECT",
    difficulty: "Medium",
    problemStatement: "Project portfolio managers are sequencing initiatives launched prior to a flagship program. Retrieve project ID, name, department ID, and start date for all corporate initiatives that commenced strictly before the start date of the 'Cloud Migration' project.",
    requirements: [
      "Determine the start date of the project named 'Cloud Migration'.",
      "Filter for projects whose start date is strictly earlier than that milestone date.",
      "Display `project_id`, `project_name`, `dept_id`, and `start_date` from Projects."
    ],
    tableName: "Projects",
    hint: "Compare start_date with a subquery selecting start_date WHERE project_name = 'Cloud Migration'.",
    expectedSql: "SELECT project_id, project_name, dept_id, start_date FROM Projects WHERE start_date < (SELECT start_date FROM Projects WHERE project_name = 'Cloud Migration');",
    explanation: "Evaluates dates against a scalar start date retrieved dynamically for a specific project.",
    tags: ["subqueries", "scalar", "dates"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Multi-Row Subqueries (IN, NOT IN) (IDs 261 to 270)
  {
    id: 261,
    title: "Personnel in Bengaluru-Headquartered Divisions",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "Facilities is identifying staff attached to divisions based in the Bengaluru regional office. Find the employee ID, name, and department for employees whose department is headquartered in Bengaluru.",
    requirements: [
      "Identify the list of department names located in 'Bengaluru' from Departments.",
      "Filter employees whose department belongs to that list.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Departments",
    hint: "Use the IN operator matching department against a subquery of department names in Bengaluru.",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE department IN (SELECT dept_name FROM Departments WHERE location = 'Bengaluru');",
    explanation: "IN matches the outer column against the list of values returned by the multi-row subquery.",
    tags: ["subqueries", "in", "multi-row"],
    estimatedTimeMinutes: 2
  },
  {
    id: 262,
    title: "Personnel Deployed to Active Initiatives",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Resource governance is tracking staff actively committed to in-progress initiatives. Retrieve employee ID, name, and department for all employees who are assigned to at least one project marked as 'Active'.",
    requirements: [
      "Identify employee IDs assigned to projects whose status is 'Active'.",
      "Filter employees whose ID matches that list.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "Use IN with a subquery joining Employee_Projects and Projects on project_id WHERE status = 'Active'.",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active');",
    explanation: "Filters outer employees against a subquery joining the project assignment and status relations.",
    tags: ["subqueries", "in", "projects", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 263,
    title: "Personnel Lacking Performance Appraisals",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "Human Resources is identifying employees who have never completed an annual performance appraisal. Find the employee ID, name, department, and salary for all employees who do not appear in the performance reviews table.",
    requirements: [
      "Identify the set of employee IDs present in Performance_Reviews.",
      "Filter for employees whose ID does not appear in that set.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Use the NOT IN operator with a subquery selecting emp_id from Performance_Reviews.",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE emp_id NOT IN (SELECT emp_id FROM Performance_Reviews);",
    explanation: "NOT IN identifies records absent from the target set, isolating unreviewed personnel.",
    tags: ["subqueries", "not-in", "exclusion"],
    estimatedTimeMinutes: 2
  },
  {
    id: 264,
    title: "Initiatives Operating with Zero Assigned Staff",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "The PMO is identifying projects that currently lack assigned human resources. Retrieve project ID, name, and status for all initiatives in Projects that have zero assignment records in Employee_Projects.",
    requirements: [
      "Retrieve all project IDs from Employee_Projects.",
      "Filter for projects in Projects whose ID is not in that list.",
      "Display `project_id`, `project_name`, and `status`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Use NOT IN with a subquery selecting project_id from Employee_Projects.",
    expectedSql: "SELECT project_id, project_name, status FROM Projects WHERE project_id NOT IN (SELECT project_id FROM Employee_Projects);",
    explanation: "Surfaces unstaffed initiatives by excluding any project ID present in the junction table.",
    tags: ["subqueries", "not-in", "projects"],
    estimatedTimeMinutes: 2
  },
  {
    id: 265,
    title: "Personnel Achieving Top-Tier Performance Ratings",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "Executive management is recognizing staff who have demonstrated top performance. Find employee ID, name, and department for all employees who have achieved a rating of 5 in at least one performance evaluation.",
    requirements: [
      "Select employee IDs from Performance_Reviews that received a rating of 5.",
      "Filter for employees whose ID appears in that high-rating cohort.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Use IN with a subquery selecting emp_id from Performance_Reviews WHERE rating = 5.",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id IN (SELECT emp_id FROM Performance_Reviews WHERE rating = 5);",
    explanation: "Filters outer employees matching the set of high-performing review recipients.",
    tags: ["subqueries", "in", "ratings"],
    estimatedTimeMinutes: 2
  },
  {
    id: 266,
    title: "Divisions Currently Lacking Assigned Personnel",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Organization design is identifying registered corporate departments that have zero active staff. Display department ID, department name, and location for all departments that do not match any employee's department in the Employees table.",
    requirements: [
      "Identify distinct non-null department names assigned to employees.",
      "Filter for departments in Departments whose name does not appear in that list.",
      "Display `dept_id`, `dept_name`, and `location`."
    ],
    tableName: "Departments, Employees",
    hint: "Use NOT IN with a subquery selecting department from Employees WHERE department IS NOT NULL.",
    expectedSql: "SELECT dept_id, dept_name, location FROM Departments WHERE dept_name NOT IN (SELECT department FROM Employees WHERE department IS NOT NULL);",
    explanation: "Filtering out NULL in the NOT IN subquery is a critical best practice to avoid empty result sets in SQL.",
    tags: ["subqueries", "not-in", "null-trap"],
    estimatedTimeMinutes: 3
  },
  {
    id: 267,
    title: "Personnel Assigned to High-Budget Initiatives",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Resource governance is tracking talent assigned to major capital initiatives. Display employee ID, name, and monthly salary for all staff members assigned to projects with a capital budget of at least 300,000.",
    requirements: [
      "Identify employee IDs assigned to projects with a budget of 300,000 or greater.",
      "Filter employees whose ID matches that list.",
      "Display `emp_id`, `emp_name`, and `salary` from Employees."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "Use IN with a subquery joining Employee_Projects and Projects WHERE p.budget >= 300000.",
    expectedSql: "SELECT emp_id, emp_name, salary FROM Employees WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget >= 300000);",
    explanation: "Links staff members to large-budget initiatives via a multi-row subquery.",
    tags: ["subqueries", "in", "budget"],
    estimatedTimeMinutes: 3
  },
  {
    id: 268,
    title: "Initiatives Staffed by Senior High Earners",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Project operations is identifying projects that utilize high-earning senior talent. Retrieve project ID, name, and status for all initiatives that have at least one assigned team member earning strictly more than 70,000.",
    requirements: [
      "Identify project IDs staffed by employees whose monthly salary exceeds 70,000.",
      "Filter for projects whose ID appears in that set.",
      "Display `project_id`, `project_name`, and `status` from Projects."
    ],
    tableName: "Projects, Employee_Projects, Employees",
    hint: "Use IN with a subquery joining Employee_Projects and Employees WHERE e.salary > 70000.",
    expectedSql: "SELECT project_id, project_name, status FROM Projects WHERE project_id IN (SELECT ep.project_id FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE e.salary > 70000);",
    explanation: "Identifies projects that leverage senior highly compensated specialists.",
    tags: ["subqueries", "in", "talent"],
    estimatedTimeMinutes: 3
  },
  {
    id: 269,
    title: "Unstaffed Employees via Set Exclusion",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Easy",
    problemStatement: "Resource management is identifying employees who currently have zero project assignments. Find employee ID, name, and department for all employees whose employee ID does not appear in Employee_Projects.",
    requirements: [
      "Retrieve all employee IDs assigned in Employee_Projects.",
      "Filter for employees whose ID is excluded from that list.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Use NOT IN with a subquery selecting emp_id from Employee_Projects.",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id NOT IN (SELECT emp_id FROM Employee_Projects);",
    explanation: "Filters the employee workforce for individuals currently unassigned to any initiative.",
    tags: ["subqueries", "not-in", "unassigned"],
    estimatedTimeMinutes: 2
  },
  {
    id: 270,
    title: "Departments Without Any Active Initiatives",
    topic: "Subqueries",
    subtopic: "Multi-Row Subqueries (IN, NOT IN)",
    difficulty: "Medium",
    problemStatement: "Strategic planning is auditing divisions that currently sponsor zero active projects. Display department ID, department name, and location for all departments that have no projects with an 'Active' status.",
    requirements: [
      "Select non-null department IDs from Projects where `status = 'Active'`.",
      "Filter Departments for department IDs not in that active list.",
      "Display `dept_id`, `dept_name`, and `location`."
    ],
    tableName: "Departments, Projects",
    hint: "Use NOT IN with a subquery selecting dept_id from Projects WHERE status = 'Active' AND dept_id IS NOT NULL.",
    expectedSql: "SELECT dept_id, dept_name, location FROM Departments WHERE dept_id NOT IN (SELECT dept_id FROM Projects WHERE status = 'Active' AND dept_id IS NOT NULL);",
    explanation: "Isolates departments that lack ongoing operational project streams.",
    tags: ["subqueries", "not-in", "status"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Correlated Subqueries (EXISTS & NOT EXISTS) (IDs 271 to 280)
  {
    id: 271,
    title: "Assigned Staff Verification via Correlated Existence",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Resource management is verifying staff engagement using existence tests. For each employee, verify whether at least one assignment record exists in Employee_Projects, displaying employee ID, name, and department for all assigned personnel.",
    requirements: [
      "Test for the existence of matching assignments in Employee_Projects for each employee.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Use the correlated EXISTS operator matching on employee ID.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id);",
    explanation: "EXISTS tests for the presence of at least one matching row in the correlated subquery, short-circuiting on the first match.",
    tags: ["subqueries", "correlated", "exists"],
    estimatedTimeMinutes: 3
  },
  {
    id: 272,
    title: "Unassigned Personnel via Correlated Non-Existence",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Operations is finding unassigned talent using non-existence checks. For each employee, verify that no corresponding record exists in Employee_Projects, displaying employee ID, name, and department for unallocated staff.",
    requirements: [
      "Test for the non-existence of matching assignment records in Employee_Projects.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Use the correlated NOT EXISTS operator matching on employee ID.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id);",
    explanation: "NOT EXISTS evaluates to true when the correlated subquery returns zero rows, robustly handling NULL values.",
    tags: ["subqueries", "correlated", "not-exists"],
    estimatedTimeMinutes: 3
  },
  {
    id: 273,
    title: "Divisions Sponsoring Active Programs via Correlated Existence",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Corporate governance is confirming which departments currently sponsor active initiatives. Display department ID, department name, and budget for all departments where there exists at least one project marked as 'Active' linked to that department.",
    requirements: [
      "Verify the existence of an active project linked to each department's ID.",
      "Display `dept_id`, `dept_name`, and `budget` from Departments."
    ],
    tableName: "Departments, Projects",
    hint: "Use EXISTS with a correlated subquery checking Projects WHERE p.dept_id = d.dept_id AND p.status = 'Active'.",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.budget FROM Departments d WHERE EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active');",
    explanation: "Checks existence of active projects correlated with the outer department record.",
    tags: ["subqueries", "correlated", "exists", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 274,
    title: "Divisions Without Any Projects via Correlated Non-Existence",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Strategic planning is auditing inactive divisions. Display department ID, department name, and location for all departments where there exists zero registered projects in the Projects table.",
    requirements: [
      "Verify that no project exists in Projects matching each department's ID.",
      "Display `dept_id`, `dept_name`, and `location` from Departments."
    ],
    tableName: "Departments, Projects",
    hint: "Use NOT EXISTS with a correlated subquery matching on dept_id.",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.location FROM Departments d WHERE NOT EXISTS (SELECT 1 FROM Projects p WHERE p.dept_id = d.dept_id);",
    explanation: "Efficiently identifies departments devoid of any associated capital initiatives.",
    tags: ["subqueries", "correlated", "not-exists", "departments"],
    estimatedTimeMinutes: 3
  },
  {
    id: 275,
    title: "Staff Awarded Top Rating with Substantial Bonus",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Executive recognition tracks elite performers. Find employee ID, name, and department for employees who have at least one performance evaluation with a perfect rating of 5 and a bonus strictly exceeding 20,000.",
    requirements: [
      "Verify the existence of a review with rating = 5 and bonus > 20,000 for each employee.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Use EXISTS with a correlated subquery on Performance_Reviews checking rating = 5 and bonus > 20000.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.rating = 5 AND pr.bonus > 20000);",
    explanation: "Verifies existence of multi-attribute criteria in child evaluation records.",
    tags: ["subqueries", "correlated", "exists", "reviews"],
    estimatedTimeMinutes: 3
  },
  {
    id: 276,
    title: "Staff Never Awarded Any Financial Bonus",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Hard",
    problemStatement: "Compensation equity is identifying staff who have never received a cash bonus. Display employee ID, name, department, and salary for all employees for whom no performance review with a non-null bonus exists.",
    requirements: [
      "Verify the non-existence of any review record with a non-null bonus for each employee.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Use NOT EXISTS with a correlated subquery checking pr.bonus IS NOT NULL.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id AND pr.bonus IS NOT NULL);",
    explanation: "Captures employees who either have no reviews at all or whose reviews contained NULL bonus awards.",
    tags: ["subqueries", "correlated", "not-exists", "null-handling"],
    estimatedTimeMinutes: 4
  },
  {
    id: 277,
    title: "Initiatives with High-Commitment Staffing Allocations",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Project governance is monitoring initiatives that require heavy individual staff commitments. Display project ID, name, and status for all projects that have at least one team member allocated 35 or more weekly hours.",
    requirements: [
      "Verify the existence of an assignment in Employee_Projects with allocated hours of 35 or more.",
      "Display `project_id`, `project_name`, and `status` from Projects."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Use EXISTS with a correlated subquery on Employee_Projects checking hours_allocated >= 35.",
    expectedSql: "SELECT p.project_id, p.project_name, p.status FROM Projects p WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id AND ep.hours_allocated >= 35);",
    explanation: "Locates initiatives sustained by intensive individual workloads.",
    tags: ["subqueries", "correlated", "exists", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 278,
    title: "Unstaffed Initiatives via Correlated Non-Existence",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "The PMO is identifying projects that have zero team members allocated. Display project ID, name, and budget for all initiatives in Projects for which no assignment record exists in Employee_Projects.",
    requirements: [
      "Verify that no record exists in Employee_Projects matching each project's ID.",
      "Display `project_id`, `project_name`, and `budget` from Projects."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Use NOT EXISTS with a correlated subquery matching on project_id.",
    expectedSql: "SELECT p.project_id, p.project_name, p.budget FROM Projects p WHERE NOT EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id);",
    explanation: "Detects orphaned or unstaffed initiatives using correlated NOT EXISTS.",
    tags: ["subqueries", "correlated", "not-exists", "projects"],
    estimatedTimeMinutes: 3
  },
  {
    id: 279,
    title: "Staff in Mega-Budget Divisions via Correlated Existence",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Medium",
    problemStatement: "Corporate treasury is identifying staff assigned to well-funded corporate divisions. Display employee ID, name, and department for employees whose assigned department has an annual operating budget of at least 1,200,000.",
    requirements: [
      "Verify the existence of a matching department in Departments with a budget of 1,200,000 or greater.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Departments",
    hint: "Use EXISTS with a correlated subquery matching department name and testing budget >= 1200000.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE EXISTS (SELECT 1 FROM Departments d WHERE d.dept_name = e.department AND d.budget >= 1200000);",
    explanation: "Correlates parent employee records with department budgetary thresholds.",
    tags: ["subqueries", "correlated", "exists", "budget"],
    estimatedTimeMinutes: 3
  },
  {
    id: 280,
    title: "Staff with Multiple Completed Performance Appraisals",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries (EXISTS & NOT EXISTS)",
    difficulty: "Hard",
    problemStatement: "Human Resources is compiling a cohort of seasoned staff who have undergone recurring evaluations. Display employee ID, name, and department for all employees who have completed 2 or more performance evaluations.",
    requirements: [
      "Count performance reviews matching each employee using a correlated scalar subquery.",
      "Filter for employees where this count is 2 or greater.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Compare a correlated subquery computing COUNT(*) from Performance_Reviews to >= 2.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE (SELECT COUNT(*) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) >= 2;",
    explanation: "Uses a correlated COUNT subquery in the WHERE clause to filter outer records by child entity frequency.",
    tags: ["subqueries", "correlated", "count", "frequency"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Correlated Subqueries with Analytical Comparisons (IDs 281 to 290)
  {
    id: 281,
    title: "Staff Earning Above Their Own Department's Average",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Workforce compensation is reviewing intra-departmental pay equity. Find all employees whose salary strictly exceeds the average salary of colleagues working within their own department, displaying employee ID, name, department, and salary.",
    requirements: [
      "Correlate each employee's salary against the average salary computed for their specific department.",
      "Filter for employees earning strictly more than that departmental average.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    tableName: "Employees",
    hint: "Use a correlated subquery calculating AVG(salary) WHERE sub.department = e.department.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary > (SELECT AVG(sub.salary) FROM Employees sub WHERE sub.department = e.department);",
    explanation: "Classic interview question: correlated subquery computes dynamic group benchmarks specific to each outer row.",
    tags: ["subqueries", "correlated", "salary-comparison", "interview-classic"],
    estimatedTimeMinutes: 4
  },
  {
    id: 282,
    title: "Highest Earner in Each Corporate Department",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Executive remuneration is identifying the top compensation recipient within every division. Retrieve employee ID, name, department, and salary for the highest-paid employee in each department.",
    requirements: [
      "For each employee, compare their salary against the maximum salary in their own department.",
      "Filter for staff members matching that departmental maximum.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    tableName: "Employees",
    hint: "Filter where e.salary equals a correlated subquery computing MAX(salary) for that department.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary = (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department);",
    explanation: "Locates department-level salary leaders using correlated maximum equality.",
    tags: ["subqueries", "correlated", "max-per-group"],
    estimatedTimeMinutes: 4
  },
  {
    id: 283,
    title: "Most Seasoned Professional in Each Branch City",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Human Resources is identifying the seniority leader in every branch office location. Display employee ID, name, city, and years of experience for the employee with the maximum experience in their resident city.",
    requirements: [
      "Compare each employee's experience against the maximum experience recorded for their city.",
      "Filter for the employee matching that local peak tenure.",
      "Display `emp_id`, `emp_name`, `city`, and `experience` from Employees."
    ],
    tableName: "Employees",
    hint: "Filter where e.experience equals a correlated subquery computing MAX(experience) for that city.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.city, e.experience FROM Employees e WHERE e.experience = (SELECT MAX(sub.experience) FROM Employees sub WHERE sub.city = e.city);",
    explanation: "Finds the seniority anchor within each geographical branch location.",
    tags: ["subqueries", "correlated", "max-per-city"],
    estimatedTimeMinutes: 4
  },
  {
    id: 284,
    title: "Appraisals Exceeding Annual Cycle Bonus Average",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "The compensation committee is analyzing merit incentives that exceeded standard benchmarks within their appraisal year. Retrieve review ID, employee ID, review year, and bonus for reviews where the awarded bonus strictly exceeds the average bonus granted during that specific review cycle.",
    requirements: [
      "Compare each review's bonus against the average bonus calculated for that same review year.",
      "Filter for reviews with bonuses strictly above that annual average.",
      "Display `review_id`, `emp_id`, `review_year`, and `bonus` from Performance_Reviews."
    ],
    tableName: "Performance_Reviews",
    hint: "Use a correlated subquery calculating AVG(bonus) WHERE sub.review_year = pr.review_year.",
    expectedSql: "SELECT pr.review_id, pr.emp_id, pr.review_year, pr.bonus FROM Performance_Reviews pr WHERE pr.bonus > (SELECT AVG(sub.bonus) FROM Performance_Reviews sub WHERE sub.review_year = pr.review_year);",
    explanation: "Correlates review year to compare bonus allocations against the mean of that year's appraisal cohort.",
    tags: ["subqueries", "correlated", "annual-average"],
    estimatedTimeMinutes: 4
  },
  {
    id: 285,
    title: "Initiatives Budgeted Above Department Project Average",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Project governance evaluates funding priorities within sponsoring divisions. Display project ID, name, department ID, and budget for all projects whose capital budget strictly exceeds the average project budget within their sponsoring department.",
    requirements: [
      "Compare each project's budget against the average budget of projects in the same department.",
      "Filter for projects whose budget exceeds that departmental project average.",
      "Display `project_id`, `project_name`, `dept_id`, and `budget` from Projects."
    ],
    tableName: "Projects",
    hint: "Use a correlated subquery calculating AVG(budget) WHERE sub.dept_id = p.dept_id.",
    expectedSql: "SELECT p.project_id, p.project_name, p.dept_id, p.budget FROM Projects p WHERE p.budget > (SELECT AVG(sub.budget) FROM Projects sub WHERE sub.dept_id = p.dept_id);",
    explanation: "Identifies capital initiatives prioritized above typical department investment levels.",
    tags: ["subqueries", "correlated", "department-budget"],
    estimatedTimeMinutes: 4
  },
  {
    id: 286,
    title: "Correlated Assigned Project Count per Staff Member",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Medium",
    problemStatement: "Resource scheduling generates individual utilization summaries. For every employee in Employees, display their employee ID, full name, and the total count of projects they are assigned to, aliasing the count as `total_projects`.",
    requirements: [
      "Query the Employees table.",
      "Compute total assigned projects for each employee using a correlated subquery in the SELECT clause, aliased as `total_projects`.",
      "Display `emp_id`, `emp_name`, and `total_projects`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Include (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) in SELECT.",
    expectedSql: "SELECT e.emp_id, e.emp_name, (SELECT COUNT(*) FROM Employee_Projects ep WHERE ep.emp_id = e.emp_id) AS total_projects FROM Employees e;",
    explanation: "Correlated scalar subqueries in SELECT append child aggregations to parent entities without requiring GROUP BY.",
    tags: ["subqueries", "correlated-select", "count"],
    estimatedTimeMinutes: 3
  },
  {
    id: 287,
    title: "Lifetime Peak Appraisal Rating per Staff Member",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Medium",
    problemStatement: "Talent development tracks personal career best performance ratings. For each employee in Employees, display employee ID, name, and the highest performance rating they have ever received across all appraisal cycles, aliased as `highest_rating`.",
    requirements: [
      "Query the Employees table.",
      "Project the maximum rating for each employee using a correlated subquery in SELECT, aliased as `highest_rating`.",
      "Display `emp_id`, `emp_name`, and `highest_rating`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Use (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) in the projection.",
    expectedSql: "SELECT e.emp_id, e.emp_name, (SELECT MAX(rating) FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id) AS highest_rating FROM Employees e;",
    explanation: "Embeds each employee's personal appraisal ceiling directly into the workforce roster.",
    tags: ["subqueries", "correlated-select", "max"],
    estimatedTimeMinutes: 3
  },
  {
    id: 288,
    title: "Active Initiative Tally per Corporate Division",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Medium",
    problemStatement: "Corporate governance tracks active program deployment by division. For each department in Departments, display department name, office location, and the count of projects currently marked as 'Active' sponsored by that department, aliased as `active_projects`.",
    requirements: [
      "Query the Departments table.",
      "Count active projects for each department using a correlated subquery in SELECT, aliased as `active_projects`.",
      "Display `dept_name`, `location`, and `active_projects`."
    ],
    tableName: "Departments, Projects",
    hint: "Use (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') in SELECT.",
    expectedSql: "SELECT d.dept_name, d.location, (SELECT COUNT(*) FROM Projects p WHERE p.dept_id = d.dept_id AND p.status = 'Active') AS active_projects FROM Departments d;",
    explanation: "Calculates live operational capacity for every department through correlated projection.",
    tags: ["subqueries", "correlated-select", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 289,
    title: "Staff Out-Earning Less Experienced Department Peers",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Compensation analytics evaluates tenure equity. Find all employees who earn strictly more than any colleague in their department who has less experience than them, displaying employee ID, name, department, salary, and experience.",
    requirements: [
      "For each employee, find the maximum salary among colleagues in the same department with strictly less experience.",
      "Filter for employees whose salary strictly exceeds that maximum.",
      "Display `emp_id`, `emp_name`, `department`, `salary`, and `experience`."
    ],
    tableName: "Employees",
    hint: "Compare e.salary to a correlated subquery computing MAX(salary) for colleagues with less experience.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary, e.experience FROM Employees e WHERE e.salary > (SELECT MAX(sub.salary) FROM Employees sub WHERE sub.department = e.department AND sub.experience < e.experience);",
    explanation: "Enforces tenure-based pay progression by checking that salary exceeds the compensation of all colleagues with lower experience.",
    tags: ["subqueries", "correlated", "progression"],
    estimatedTimeMinutes: 4
  },
  {
    id: 290,
    title: "Appraisals Exceeding Employee Lifetime Average Rating",
    topic: "Subqueries",
    subtopic: "Correlated Subqueries with Analytical Comparisons",
    difficulty: "Hard",
    problemStatement: "Talent management identifies breakthrough review performances. Retrieve review ID, employee ID, review year, and rating for performance reviews where the achieved rating strictly exceeds that employee's own lifetime average rating.",
    requirements: [
      "For each review, compute the employee's average rating across all their reviews.",
      "Filter for evaluations where the rating strictly exceeds that employee's average.",
      "Display `review_id`, `emp_id`, `review_year`, and `rating` from Performance_Reviews."
    ],
    tableName: "Performance_Reviews",
    hint: "Compare pr.rating against a correlated subquery computing AVG(rating) for that same employee.",
    expectedSql: "SELECT pr.review_id, pr.emp_id, pr.review_year, pr.rating FROM Performance_Reviews pr WHERE pr.rating > (SELECT AVG(sub.rating) FROM Performance_Reviews sub WHERE sub.emp_id = pr.emp_id);",
    explanation: "Highlights breakout individual performances that surpass the employee's typical appraisal baseline.",
    tags: ["subqueries", "correlated", "baseline"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Derived Tables & Subqueries in the FROM Clause (IDs 291 to 300)
  {
    id: 291,
    title: "Departmental Pre-Aggregation Filter via Derived Table",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Medium",
    problemStatement: "Financial reporting uses modular staging queries to summarize departmental metrics. Using a derived table that computes employee count and average salary per department, filter for departments where the average salary strictly exceeds 50,000, displaying department name, employee count (`emp_count`), and average salary (`avg_sal`).",
    requirements: [
      "Aggregate headcount (`emp_count`) and average salary rounded to 2 decimal places (`avg_sal`) by department in a FROM-clause subquery.",
      "Filter the outer query for `avg_sal > 50000`.",
      "Display `department`, `emp_count`, and `avg_sal`."
    ],
    tableName: "Employees",
    hint: "Wrap the GROUP BY aggregation in a derived table and filter on the calculated alias in the outer WHERE clause.",
    expectedSql: "SELECT dt.department, dt.emp_count, dt.avg_sal FROM (SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt WHERE dt.avg_sal > 50000;",
    explanation: "Derived tables create inline temporary views that allow filtering on computed column aliases using standard WHERE clauses.",
    tags: ["subqueries", "derived-tables", "from-clause"],
    estimatedTimeMinutes: 3
  },
  {
    id: 292,
    title: "Workload Capacity Outliers via Derived Table",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Medium",
    problemStatement: "Resource governance audits cumulative weekly commitments across projects. Using a derived table that aggregates total weekly hours per employee in Employee_Projects, identify all employees whose cumulative weekly hours strictly exceed 35, displaying employee ID and total hours (`total_hours`).",
    requirements: [
      "Aggregate `SUM(hours_allocated)` aliased as `total_hours` grouped by `emp_id` in a derived table.",
      "Filter the outer query for `total_hours > 35`.",
      "Display `emp_id` and `total_hours`."
    ],
    tableName: "Employee_Projects",
    hint: "Query from a derived table aggregating hours by emp_id, filtering for total_hours > 35.",
    expectedSql: "SELECT dt.emp_id, dt.total_hours FROM (SELECT emp_id, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY emp_id) dt WHERE dt.total_hours > 35;",
    explanation: "Encapsulates aggregation inside a derived table, enabling clean post-aggregation filtering.",
    tags: ["subqueries", "derived-tables", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 293,
    title: "Staff Records Enriched with Departmental Mean Benchmarks",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Compensation benchmarking compares individual salaries against departmental baselines. Join each employee record with a derived table that pre-calculates the average salary for each department (rounded to 2 decimal places, aliased as `avg_dept_sal`), displaying employee name, department, salary, and departmental average salary.",
    requirements: [
      "Calculate average salary rounded to 2 decimal places by department in a derived table aliased as `dept_stats`.",
      "Join Employees with `dept_stats` on matching department name.",
      "Display `emp_name`, `department`, `salary`, and `avg_dept_sal`."
    ],
    tableName: "Employees",
    hint: "Join Employees with a derived table (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal ... GROUP BY department).",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, dept_stats.avg_dept_sal FROM Employees e INNER JOIN (SELECT department, ROUND(AVG(salary), 2) AS avg_dept_sal FROM Employees GROUP BY department) dept_stats ON e.department = dept_stats.department;",
    explanation: "A standard SQL pattern: joining detail rows with a derived summary table avoids row-multiplication errors.",
    tags: ["subqueries", "derived-tables", "join"],
    estimatedTimeMinutes: 4
  },
  {
    id: 294,
    title: "Employee Salary Variance Ranking Relative to Department Mean",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Human Resources is ranking employees by their salary difference relative to their department's average. Join employees with a departmental statistics derived table, calculate the variance (employee salary minus department average salary, aliased as `diff_from_dept_avg`), and sort by this difference in descending order.",
    requirements: [
      "Join Employees with a derived table calculating departmental average salary (`avg_sal`).",
      "Compute `salary - avg_sal`, aliasing the result as `diff_from_dept_avg`.",
      "Order results by `diff_from_dept_avg` in descending order.",
      "Display `emp_name`, `department`, `salary`, and `diff_from_dept_avg`."
    ],
    tableName: "Employees",
    hint: "Join with the department average derived table and apply ORDER BY diff_from_dept_avg DESC.",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, (e.salary - dt.avg_sal) AS diff_from_dept_avg FROM Employees e INNER JOIN (SELECT department, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department) dt ON e.department = dt.department ORDER BY diff_from_dept_avg DESC;",
    explanation: "Enables multi-tiered compensation benchmarking across internal corporate departments.",
    tags: ["subqueries", "derived-tables", "ranking", "order-by"],
    requiresOrder: true,
    estimatedTimeMinutes: 4
  },
  {
    id: 295,
    title: "High-Disbursement Appraisal Cycles via Derived Table",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Medium",
    problemStatement: "The compensation committee identifies appraisal years with heavy financial bonus payouts. Using a derived table aggregating review count (`reviews_count`) and total bonuses (`total_bonus`) per review year, filter for review cycles where total bonuses strictly exceeded 100,000, displaying review year, review count, and total bonuses.",
    requirements: [
      "Aggregate review count and bonus sum grouped by `review_year` in a derived table.",
      "Filter the outer query for `total_bonus > 100000`.",
      "Display `review_year`, `reviews_count`, and `total_bonus`."
    ],
    tableName: "Performance_Reviews",
    hint: "Query from an aggregated review year derived table with WHERE total_bonus > 100000.",
    expectedSql: "SELECT yt.review_year, yt.reviews_count, yt.total_bonus FROM (SELECT review_year, COUNT(*) AS reviews_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY review_year) yt WHERE yt.total_bonus > 100000;",
    explanation: "Transforms annual performance aggregations into an inline table to audit mega-payout years.",
    tags: ["subqueries", "derived-tables", "bonus"],
    estimatedTimeMinutes: 3
  },
  {
    id: 296,
    title: "Workforce in Highest-Average Compensation Department",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Executive remuneration identifies personnel working within the single best-compensated department. Find employee ID, name, department, and salary for all employees who belong to the department with the highest average salary in the company.",
    requirements: [
      "Identify the single department with the highest average employee salary using an ordered and limited subquery.",
      "Filter Employees for staff working in that department.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    tableName: "Employees",
    hint: "Filter department equal to (SELECT department FROM Employees GROUP BY department ORDER BY AVG(salary) DESC LIMIT 1).",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE department = (SELECT department FROM Employees GROUP BY department ORDER BY AVG(salary) DESC LIMIT 1);",
    explanation: "Nest an aggregate group subquery inside the WHERE predicate to target the top-paying organizational division.",
    tags: ["subqueries", "nested", "top-department"],
    estimatedTimeMinutes: 4
  },
  {
    id: 297,
    title: "Initiatives in Largest Operating Budget Division",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Strategic planning tracks initiatives sponsored by the company's highest-funded division. Display project ID, name, and budget for all initiatives belonging to the department with the largest operating budget in the Departments table.",
    requirements: [
      "Determine the department ID of the department with the maximum budget using a subquery.",
      "Filter Projects for initiatives belonging to that department ID.",
      "Display `project_id`, `project_name`, and `budget` from Projects."
    ],
    tableName: "Projects, Departments",
    hint: "Filter dept_id equal to (SELECT dept_id FROM Departments ORDER BY budget DESC LIMIT 1).",
    expectedSql: "SELECT project_id, project_name, budget FROM Projects WHERE dept_id = (SELECT dept_id FROM Departments ORDER BY budget DESC LIMIT 1);",
    explanation: "Links projects to the single highest-funded organizational unit using a nested subquery.",
    tags: ["subqueries", "nested", "budget"],
    estimatedTimeMinutes: 4
  },
  {
    id: 298,
    title: "Personnel Deployed to Flagship Active Initiative",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Resource governance tracks staff assigned to the single highest-funded active project. Display employee ID, name, and department for all employees who are assigned to the active initiative with the largest capital budget.",
    requirements: [
      "Determine the project ID of the highest-budget project marked as 'Active'.",
      "Identify employee IDs assigned to that project in Employee_Projects.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "Use nested subqueries: finding the max-budget active project ID, finding its assigned staff, and querying Employees.",
    expectedSql: "SELECT emp_id, emp_name, department FROM Employees WHERE emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep WHERE ep.project_id = (SELECT project_id FROM Projects WHERE status = 'Active' ORDER BY budget DESC LIMIT 1));",
    explanation: "Multi-level nested subquery passes from active project budget evaluation through the staffing junction table to the workforce roster.",
    tags: ["subqueries", "multi-level", "nested"],
    estimatedTimeMinutes: 5
  },
  {
    id: 299,
    title: "Employee Share of Departmental Payroll",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "Workforce cost analysis computes each employee's salary as a proportion of their division's wage expenditure. Join employees with a derived table calculating total departmental payroll, displaying employee name, department, monthly salary, and the percentage of department payroll they represent (rounded to 2 decimal places, aliased as `pct_of_dept_payroll`).",
    requirements: [
      "Calculate cumulative payroll by department in a derived table (`dp`).",
      "Join Employees with `dp` on matching department.",
      "Calculate percentage share as `ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2)` aliased as `pct_of_dept_payroll`.",
      "Display `emp_name`, `department`, `salary`, and `pct_of_dept_payroll`."
    ],
    tableName: "Employees",
    hint: "Join with a derived table computing departmental payroll and compute the percentage ratio.",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, ROUND((e.salary * 100.0) / dp.total_dept_payroll, 2) AS pct_of_dept_payroll FROM Employees e INNER JOIN (SELECT department, SUM(salary) AS total_dept_payroll FROM Employees GROUP BY department) dp ON e.department = dp.department;",
    explanation: "Computes proportional compensation share within each business unit.",
    tags: ["subqueries", "derived-tables", "percentage", "payroll"],
    estimatedTimeMinutes: 4
  },
  {
    id: 300,
    title: "Highest Lifetime Incentive Recipient Recognition",
    topic: "Subqueries",
    subtopic: "Derived Tables & Subqueries in the FROM Clause",
    difficulty: "Hard",
    problemStatement: "The executive compensation committee is recognizing the employee who has accumulated the largest total performance bonus payout in company history. Find the employee ID, name, department, and salary for the individual who has earned the highest cumulative bonus sum across all performance reviews.",
    requirements: [
      "Determine the employee ID with the highest cumulative bonus sum in Performance_Reviews using a grouped, ordered, and limited subquery.",
      "Filter Employees for that employee ID.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Filter emp_id equal to (SELECT emp_id FROM Performance_Reviews GROUP BY emp_id ORDER BY SUM(bonus) DESC LIMIT 1).",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE emp_id = (SELECT emp_id FROM Performance_Reviews GROUP BY emp_id ORDER BY SUM(bonus) DESC LIMIT 1);",
    explanation: "Capstone subquery problem: ranks aggregate bonus earnings across historical appraisals to isolate and return the top-performing corporate employee.",
    tags: ["subqueries", "nested", "capstone", "interview-favorite"],
    estimatedTimeMinutes: 5
  }
];
