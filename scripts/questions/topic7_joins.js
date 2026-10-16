export const TOPIC7_QUESTIONS = [
  // Subtopic: Inner Joins & Relational Equi-Joins (IDs 176 to 190)
  {
    id: 176,
    title: "Departmental Headquarters and Budget Alignment",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Beginner",
    problemStatement: "The facilities planning committee needs to cross-reference staff with official department records. Retrieve the employee name, department name, headquarters location, and annual departmental budget for all employees whose department is registered in the Departments table.",
    requirements: [
      "Combine records from Employees and Departments based on matching department name.",
      "Display `emp_name`, `department`, `location`, and `budget`."
    ],
    tableName: "Employees, Departments",
    hint: "Connect Employees and Departments on the matching department name attribute.",
    expectedSql: "SELECT e.emp_name, e.department, d.location, d.budget FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    explanation: "Equi-join on department name pairs employee records with their departmental headquarters and budget.",
    tags: ["joins", "inner-join", "equi-join"],
    estimatedTimeMinutes: 3
  },
  {
    id: 177,
    title: "Active Staff Project Assignments",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Beginner",
    problemStatement: "The PMO is reviewing staff deployed to initiatives. Display employee name, department, assigned project ID, assigned role, and weekly allocated hours for all staff members who have an active project assignment.",
    requirements: [
      "Combine Employees and Employee_Projects based on matching employee ID.",
      "Display `emp_name`, `department`, `project_id`, `assigned_role`, and `hours_allocated`."
    ],
    tableName: "Projects, Departments",
    hint: "Join Employees with Employee_Projects on emp_id.",
    expectedSql: "SELECT p.project_id, p.project_name, d.dept_name, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id;",
    explanation: "Standard primary-key to foreign-key equi-join connects projects with owning organizational units.",
    tags: ["joins", "inner-join", "foreign-key"],
    estimatedTimeMinutes: 2
  },
  {
    id: 178,
    title: "Project Ownership and Divisional Budgets",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Corporate governance needs an overview linking projects to their sponsoring departments. For each initiative, display the project name, project budget, sponsoring department name, and department office location.",
    requirements: [
      "Combine Projects and Departments based on matching department ID (`dept_id`).",
      "Display `project_name`, project `budget`, `dept_name`, and `location`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Join Projects and Departments on dept_id.",
    expectedSql: "SELECT e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    explanation: "Resolves employee names for project staffing records via the junction table.",
    tags: ["joins", "inner-join", "junction"],
    estimatedTimeMinutes: 2
  },
  {
    id: 179,
    title: "Employee Appraisal History Record",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Human Resources is compiling historical performance ratings alongside employee profiles. Display each employee's name, evaluation year, rating, and awarded bonus for all completed performance appraisals.",
    requirements: [
      "Combine Employees and Performance_Reviews on matching employee ID.",
      "Display `emp_name`, `review_year`, `rating`, and `bonus`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Join Employees and Performance_Reviews on emp_id.",
    expectedSql: "SELECT e.emp_name, pr.review_year, pr.rating, pr.bonus FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Combines employee biographical names with historical performance appraisals.",
    tags: ["joins", "inner-join", "reviews"],
    estimatedTimeMinutes: 2
  },
  {
    id: 180,
    title: "Initiative Staffing and Operational Status",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Resource allocation reviews need to correlate project status with assigned personnel. Display project name, execution status, assigned employee ID, and assigned role for all current project assignments.",
    requirements: [
      "Combine Projects and Employee_Projects based on matching project ID.",
      "Display `project_name`, `status`, `emp_id`, and `assigned_role`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Join Projects with Employee_Projects on project_id.",
    expectedSql: "SELECT p.project_name, ep.emp_id, ep.assigned_role, ep.hours_allocated FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Exposes project team composition by joining the project dimension with staffing assignments.",
    tags: ["joins", "inner-join", "projects"],
    estimatedTimeMinutes: 2
  },
  {
    id: 181,
    title: "Hyderabad Division Personnel Roster",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Corporate administration is compiling a directory of staff members whose departments are headquartered in Hyderabad. Display employee name, department, and office location for all employees working in departments located in Hyderabad.",
    requirements: [
      "Combine Employees and Departments on department name.",
      "Filter for departments situated in 'Hyderabad'.",
      "Display `emp_name`, `department`, and `location`."
    ],
    tableName: "Employees, Departments",
    hint: "Join on department name and filter for location = 'Hyderabad' in the WHERE clause.",
    expectedSql: "SELECT e.emp_name, e.department, d.dept_head FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE d.location = 'Hyderabad';",
    explanation: "Combines join logic with WHERE filtering on department headquarters location.",
    tags: ["joins", "where", "location"],
    estimatedTimeMinutes: 3
  },
  {
    id: 182,
    title: "High-Rated Appraisals in the 2024 Cycle",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Executive management is recognizing top performers from the 2024 review cycle. Retrieve employee name, department, rating, and bonus for reviews conducted in 2024 where the employee achieved a rating of 4 or higher.",
    requirements: [
      "Join Employees and Performance_Reviews on employee ID.",
      "Filter for evaluations in calendar year 2024 with a rating of 4 or 5.",
      "Display `emp_name`, `department`, `rating`, and `bonus`."
    ],
    tableName: "Projects, Departments",
    hint: "Join on emp_id and filter for review_year = 2024 and rating >= 4.",
    expectedSql: "SELECT p.project_name, d.dept_name, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id WHERE p.status = 'Active';",
    explanation: "Filters active project status across joined departmental relations.",
    tags: ["joins", "where", "status"],
    estimatedTimeMinutes: 2
  },
  {
    id: 183,
    title: "Substantial Workload Commitments on Active Initiatives",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Project operations is monitoring intensive resource commitments on active projects. Display project name, assigned employee ID, role, and allocated weekly hours for all assignments on 'Active' projects where weekly hours strictly exceed 20.",
    requirements: [
      "Join Projects and Employee_Projects on project ID.",
      "Filter for active projects and weekly workload exceeding 20 hours.",
      "Display `project_name`, `emp_id`, `assigned_role`, and `hours_allocated`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Join on project_id and filter for status = 'Active' and hours_allocated > 20.",
    expectedSql: "SELECT e.emp_name, e.department, pr.rating, pr.bonus, pr.feedback FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
    explanation: "Isolates top-rated staff members and details their compensation rewards.",
    tags: ["joins", "reviews", "ratings"],
    estimatedTimeMinutes: 3
  },
  {
    id: 184,
    title: "High-Earner Divisional Placement and Budgets",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Compensation analytics is evaluating high-earning staff relative to departmental funding. For employees earning strictly more than 50,000, display employee name, salary, department name, and departmental operating budget.",
    requirements: [
      "Join Employees and Departments on matching department name.",
      "Filter for employees earning strictly more than 50,000.",
      "Display `emp_name`, `salary`, `dept_name`, and `budget`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Join on department name and filter for salary > 50000 in the WHERE clause.",
    expectedSql: "SELECT ep.emp_id, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE ep.hours_allocated >= 35;",
    explanation: "Pairs project names with intensive staffing commitments.",
    tags: ["joins", "workload", "hours"],
    estimatedTimeMinutes: 3
  },
  {
    id: 185,
    title: "Completed Capital Initiatives by Department",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "The PMO is reporting delivered programs alongside their sponsoring division. Display project name, budget, department name, and office location for all projects that have reached 'Completed' status.",
    requirements: [
      "Join Projects and Departments on department ID (`dept_id`).",
      "Filter for initiatives marked as 'Completed'.",
      "Display `project_name`, project `budget`, `dept_name`, and `location`."
    ],
    tableName: "Employees, Departments",
    hint: "Join on dept_id and filter for status = 'Completed'.",
    expectedSql: "SELECT e.emp_name, e.salary, d.dept_name, d.dept_head FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE e.salary > 50000;",
    explanation: "Surfaces executive leadership associated with high-earning staff members.",
    tags: ["joins", "salary", "management"],
    estimatedTimeMinutes: 2
  },
  {
    id: 186,
    title: "Leadership Assignments Across Projects",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Workforce governance is tracking personnel serving in managerial and lead capacities on corporate initiatives. Display employee name, department, project ID, and assigned role for assignments where the role title contains 'Lead' or 'Manager'.",
    requirements: [
      "Join Employees and Employee_Projects on employee ID.",
      "Filter for assigned roles containing 'Lead' or 'Manager'.",
      "Display `emp_name`, `department`, `project_id`, and `assigned_role`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Join on emp_id and use partial string matching on assigned_role with OR.",
    expectedSql: "SELECT e.emp_name, e.department, ep.project_id, ep.assigned_role FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.assigned_role LIKE '%Lead%';",
    explanation: "Joins staffing records with biographical details to highlight lead project contributors.",
    tags: ["joins", "roles", "like"],
    estimatedTimeMinutes: 3
  },
  {
    id: 187,
    title: "Substantial Merit Bonus Disbursements",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Finance is auditing significant incentive disbursements. Display employee name, evaluation year, rating, and bonus for all performance reviews where the awarded bonus strictly exceeds 10,000.",
    requirements: [
      "Join Employees and Performance_Reviews on employee ID.",
      "Filter for appraisals with a bonus strictly greater than 10,000.",
      "Display `emp_name`, `review_year`, `rating`, and `bonus`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Join on emp_id and filter for bonus > 10000.",
    expectedSql: "SELECT e.emp_name, e.city, pr.rating, pr.bonus FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_year = 2024 AND pr.bonus IS NOT NULL;",
    explanation: "Correlates regional office branches with recent appraisal compensation.",
    tags: ["joins", "reviews", "bonus"],
    estimatedTimeMinutes: 3
  },
  {
    id: 188,
    title: "Major Capital Investments by Division",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Corporate treasury is reviewing capital-intensive programs. Retrieve project name, budget, department name, and location for all initiatives with a project budget strictly exceeding 250,000.",
    requirements: [
      "Join Projects and Departments on department ID.",
      "Filter for project budgets exceeding 250,000.",
      "Display `project_name`, project `budget`, `dept_name`, and `location`."
    ],
    tableName: "Projects, Departments",
    hint: "Join on dept_id and filter for Projects.budget > 250000.",
    expectedSql: "SELECT p.project_name, d.dept_name, d.dept_head, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id WHERE p.budget > 200000;",
    explanation: "Joins project capital data with departmental executive leadership.",
    tags: ["joins", "budget", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 189,
    title: "Staff Assignment Workload Leaderboard",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Resource scheduling requires a leaderboard of project assignments ranked by weekly commitment. Display employee name, department, project ID, and allocated hours, ordered from the highest weekly workload to the lowest.",
    requirements: [
      "Join Employees and Employee_Projects on employee ID.",
      "Order results by allocated hours in descending order.",
      "Display `emp_name`, `department`, `project_id`, and `hours_allocated`."
    ],
    tableName: "Employees, Departments",
    hint: "Join on emp_id and apply ORDER BY hours_allocated DESC.",
    expectedSql: "SELECT e.emp_name, e.city, e.department, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE e.city = d.location;",
    explanation: "Verifies whether an employee's work base aligns with their division's central headquarters.",
    tags: ["joins", "location", "co-location"],
    estimatedTimeMinutes: 3
  },
  {
    id: 190,
    title: "Appraisal Excellence Leaderboard",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Human Resources is compiling an honor roll of employee performance appraisals. Display employee name, department, review year, rating, and bonus, sorted primarily by rating from highest to lowest, and secondarily by bonus amount descending.",
    requirements: [
      "Join Employees and Performance_Reviews on employee ID.",
      "Order primarily by rating descending, and secondarily by bonus descending.",
      "Display `emp_name`, `department`, `review_year`, `rating`, and `bonus`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Join on emp_id and sort by rating DESC, bonus DESC.",
    expectedSql: "SELECT e.emp_name, e.salary, pr.bonus, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.bonus IS NOT NULL;",
    explanation: "Juxtaposes recurring monthly compensation against one-time merit bonus awards.",
    tags: ["joins", "salary", "bonus"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Left Outer Joins & Unmatched Preservations (IDs 191 to 205)
  {
    id: 191,
    title: "Comprehensive Project Staffing Audit",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "The Project Management Office is conducting a full staffing inventory. Generate a report listing every single employee in the company along with their assigned project ID and role. Crucially, employees who are not currently assigned to any project must still appear in the report.",
    requirements: [
      "Include employee ID (`emp_id`), full name (`emp_name`), assigned project ID (`project_id`), and assigned role (`assigned_role`).",
      "Ensure all company employees are retained in the results, displaying NULL for project details when an employee has no active assignment."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Use an outer join that preserves all rows from the primary employee table.",
    expectedSql: "SELECT e.emp_id, e.emp_name, ep.project_id, ep.assigned_role FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    explanation: "Preserves all employees in the result set; employees with no project assignments return NULL for project attributes.",
    tags: ["joins", "left-join", "preservation"],
    estimatedTimeMinutes: 3
  },
  {
    id: 192,
    title: "Workforce Appraisal Coverage Inventory",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "HR governance is auditing review completion across the workforce. Produce a roster listing all employees alongside their review year, rating, and bonus, ensuring that staff members who have never received a performance appraisal are preserved in the list.",
    requirements: [
      "Combine Employees and Performance_Reviews preserving all employees.",
      "Display `emp_id`, `emp_name`, `review_year`, `rating`, and `bonus`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Use a left outer join from Employees to Performance_Reviews on emp_id.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
    explanation: "Classic SQL anti-join: LEFT JOIN combined with IS NULL on the right table's key identifies unmatched records.",
    tags: ["joins", "anti-join", "left-join", "null"],
    estimatedTimeMinutes: 3
  },
  {
    id: 193,
    title: "Departmental Project Ownership Directory",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "Corporate strategy is auditing project sponsorship across all divisions. Display department name, office location, project ID, and project name, ensuring departments that currently sponsor zero projects are still listed.",
    requirements: [
      "Combine Departments and Projects preserving all departments.",
      "Display `dept_name`, `location`, `project_id`, and `project_name`."
    ],
    tableName: "Departments, Projects",
    hint: "Use a left join from Departments to Projects on dept_id.",
    expectedSql: "SELECT d.dept_name, d.location, p.project_name, p.status FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id;",
    explanation: "Preserves departments even if they have no ongoing or planned projects.",
    tags: ["joins", "left-join", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 194,
    title: "Initiative Resource Deployment Audit",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Resource governance is verifying team assignments across the project portfolio. Display project name, status, assigned employee ID, and weekly hours, ensuring initiatives with zero assigned team members are preserved in the report.",
    requirements: [
      "Combine Projects and Employee_Projects preserving all projects.",
      "Display `project_name`, `status`, `emp_id`, and `hours_allocated`."
    ],
    tableName: "Departments, Projects",
    hint: "Left join Projects to Employee_Projects on project_id.",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id WHERE p.project_id IS NULL;",
    explanation: "Surfaces departments that lack project activity using an anti-join pattern.",
    tags: ["joins", "anti-join", "left-join"],
    estimatedTimeMinutes: 3
  },
  {
    id: 195,
    title: "Employee Department Registration Verification",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "Data management is verifying organizational alignment between staff and registered departments. Display employee name, department, office location, and budget, preserving all employee records even if their department is unlisted in official department records.",
    requirements: [
      "Combine Employees and Departments preserving all employees.",
      "Display `emp_name`, `department`, `location`, and `budget`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Left join Employees with Departments matching department to dept_name.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Lists every corporate employee while including appraisal data for those who have been evaluated.",
    tags: ["joins", "left-join", "reviews"],
    estimatedTimeMinutes: 2
  },
  {
    id: 196,
    title: "Unassigned Personnel Identification",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Operations management needs to deploy unallocated talent to new initiatives. Identify all employees who currently have zero project assignments in Employee_Projects, displaying their ID, name, department, and salary.",
    requirements: [
      "Identify employees who have no corresponding record in Employee_Projects.",
      "Display `emp_id`, `emp_name`, `department`, and `salary` from Employees."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Use a left outer join and filter where the joined project assignment attribute is null.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_id IS NULL;",
    explanation: "Isolates unreviewed personnel to schedule pending evaluations.",
    tags: ["joins", "anti-join", "null"],
    estimatedTimeMinutes: 3
  },
  {
    id: 197,
    title: "Unreviewed Staff Identification",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "Human Resources is scheduling evaluations for staff who have never been reviewed. Find all employees who do not have any performance reviews recorded in the system, displaying their employee ID, name, department, and joining year.",
    requirements: [
      "Find employees who do not appear in Performance_Reviews.",
      "Display `emp_id`, `emp_name`, `department`, and `joining_year`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Left join Employees to Performance_Reviews and filter where review_id is null.",
    expectedSql: "SELECT p.project_id, p.project_name, ep.emp_id, ep.assigned_role FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Retains all initiatives, including newly planned initiatives that have no staff assigned yet.",
    tags: ["joins", "left-join", "projects"],
    estimatedTimeMinutes: 2
  },
  {
    id: 198,
    title: "Divisions Lacking Project Sponsorship",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Corporate strategy is identifying departments that currently have no active capital initiatives. Display the department ID, department name, and location for all departments that sponsor zero projects.",
    requirements: [
      "Find departments with no corresponding records in Projects.",
      "Display `dept_id`, `dept_name`, and `location` from Departments."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Left join Departments to Projects on dept_id and filter where project_id is null.",
    expectedSql: "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
    explanation: "Detects unstaffed initiatives requiring human resource allocation.",
    tags: ["joins", "anti-join", "staffing"],
    estimatedTimeMinutes: 3
  },
  {
    id: 199,
    title: "Unstaffed Initiative Identification",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "The PMO is identifying projects that are currently operating without any assigned staff. Display the project ID, project name, and status for all initiatives in Projects that have zero assignments in Employee_Projects.",
    requirements: [
      "Find projects that have no corresponding records in Employee_Projects.",
      "Display `project_id`, `project_name`, and `status` from Projects."
    ],
    tableName: "Departments, Employees",
    hint: "Left join Projects to Employee_Projects on project_id and filter where emp_id is null.",
    expectedSql: "SELECT d.dept_name, d.dept_head, e.emp_name FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department;",
    explanation: "Preserves departments with zero staff (e.g. Legal, Operations, R&D) with NULL employee names.",
    tags: ["joins", "left-join", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 200,
    title: "Staff Project Allocation with Default Indicators",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Reporting systems require a clean display without empty project cells. Display employee name and assigned project ID for all employees, substituting 0 whenever an employee has no project assigned, aliasing the column as `assigned_project_id`.",
    requirements: [
      "Left join Employees with Employee_Projects on employee ID.",
      "Display `emp_name` and project ID with nulls replaced by 0, aliased as `assigned_project_id`."
    ],
    tableName: "Departments, Employees",
    hint: "Use COALESCE on the project_id column from the preserved outer join.",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
    explanation: "Locates unpopulated or newly formed corporate organizational units.",
    tags: ["joins", "anti-join", "headcount"],
    estimatedTimeMinutes: 3
  },
  {
    id: 201,
    title: "Comprehensive Staffing with 2024 Appraisal Overlay",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Hard",
    problemStatement: "Management is compiling a complete workforce roster showing 2024 appraisal data where available. Display employee name, department, rating, and bonus for all employees, showing 2024 review metrics for employees who completed a 2024 review and null for all others.",
    requirements: [
      "Preserve all employees in the result set.",
      "Correlate 2024 review ratings and bonuses by placing the 2024 year filter directly in the join condition.",
      "Display `emp_name`, `department`, `rating`, and `bonus`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Include review_year = 2024 directly in the ON clause of the left join.",
    expectedSql: "SELECT e.emp_name, e.department, pr.rating, pr.bonus FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id AND pr.review_year = 2024;",
    explanation: "Placing a condition in the ON clause filters the right table while preserving all rows of the left table.",
    tags: ["joins", "left-join", "on-clause-filtering"],
    estimatedTimeMinutes: 4
  },
  {
    id: 202,
    title: "Staff Performance Incentive Overview with Zero Default",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Payroll reporting requires a full staff list displaying incentive bonuses, substituting 0 for staff who did not receive a bonus. Display employee ID, name, rating, and bonus with null bonuses replaced by 0, aliased as `final_bonus`.",
    requirements: [
      "Left join Employees and Performance_Reviews on employee ID.",
      "Display `emp_id`, `emp_name`, `rating`, and bonus defaulting to 0 aliased as `final_bonus`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Use COALESCE(bonus, 0) on the joined bonus column.",
    expectedSql: "SELECT e.emp_id, e.emp_name, COALESCE(ep.assigned_role, 'Unassigned') AS project_role FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    explanation: "Replaces NULL results in unassigned left-join records with informative default labels.",
    tags: ["joins", "coalesce", "left-join"],
    estimatedTimeMinutes: 3
  },
  {
    id: 203,
    title: "Initiative Resource Allocation on Active Projects",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Resource governance is tracking staffing on active corporate initiatives. Display project name, status, assigned employee ID, and allocated hours, preserving all active projects even if they currently have no staff assigned.",
    requirements: [
      "Filter Projects for `status = 'Active'`.",
      "Left join with Employee_Projects on project ID.",
      "Display `project_name`, `status`, `emp_id`, and `hours_allocated`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Filter Projects for status = 'Active' and left join with Employee_Projects.",
    expectedSql: "SELECT p.project_id, p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    explanation: "Calculates resource allocation across all initiatives, reporting 0 hours for unstaffed projects.",
    tags: ["joins", "left-join", "group-by", "coalesce"],
    estimatedTimeMinutes: 3
  },
  {
    id: 204,
    title: "Staff Requiring Performance Coaching or Initial Review",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Talent development is identifying employees who either received low ratings (under 3) or have never been reviewed. Display employee name, department, rating, and review year for employees whose rating is either null or strictly less than 3.",
    requirements: [
      "Left join Employees with Performance_Reviews on employee ID.",
      "Filter for records where rating is null OR rating is strictly less than 3.",
      "Display `emp_name`, `department`, `rating`, and `review_year`."
    ],
    tableName: "Departments, Employees",
    hint: "Left join on emp_id and filter with rating IS NULL OR rating < 3 in WHERE.",
    expectedSql: "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
    explanation: "COUNT(column) properly outputs 0 for NULL matches, whereas COUNT(*) would falsely report 1 for unmatched rows.",
    tags: ["joins", "left-join", "count", "group-by"],
    estimatedTimeMinutes: 3
  },
  {
    id: 205,
    title: "Unassigned Senior Personnel Identification",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Resource planning is identifying seasoned personnel available for major new projects. Find all employees with at least 5 years of professional experience who currently have zero project assignments.",
    requirements: [
      "Left join Employees with Employee_Projects on employee ID.",
      "Filter for `experience >= 5` and unassigned project status.",
      "Display `emp_id`, `emp_name`, `department`, and `experience`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Filter for experience >= 5 and ep.project_id IS NULL after left joining.",
    expectedSql: "SELECT e.emp_id, e.emp_name, COUNT(pr.review_id) AS review_count FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.emp_id, e.emp_name;",
    explanation: "Guarantees every employee appears in the tally, correctly reporting zero reviews for unreviewed staff.",
    tags: ["joins", "left-join", "count", "group-by"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Right Outer Joins & Full Outer Joins (IDs 206 to 215)
  {
    id: 206,
    title: "Preserving All Departments in Project Sourcing",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "Auditors are verifying divisional project portfolios while ensuring every registered department is represented. Display department name, location, project ID, and project name, preserving all departments from Departments regardless of whether projects exist.",
    requirements: [
      "Query Departments and Projects ensuring all departments are retained.",
      "Display `dept_name`, `location`, `project_id`, and `project_name`."
    ],
    tableName: "Employees, Departments",
    hint: "Use an outer join that preserves all rows from Departments.",
    expectedSql: "SELECT e.emp_name, d.dept_name, d.location FROM Employees e RIGHT JOIN Departments d ON e.department = d.dept_name;",
    explanation: "RIGHT JOIN guarantees that every row from the right-hand table (Departments) is included in the output.",
    tags: ["joins", "right-join", "outer-join"],
    estimatedTimeMinutes: 3
  },
  {
    id: 207,
    title: "Preserving Complete Workforce in Allocation Records",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "Workforce governance is auditing assignment records while guaranteeing that all employees appear. Display employee name, department, project ID, and allocated hours, ensuring all staff members from Employees are preserved.",
    requirements: [
      "Query Employee_Projects and Employees ensuring all employees are retained.",
      "Display `emp_name`, `department`, `project_id`, and `hours_allocated`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Use an outer join preserving the Employees table.",
    expectedSql: "SELECT ep.emp_id, ep.assigned_role, p.project_id, p.project_name FROM Employee_Projects ep RIGHT JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Ensures projects without assigned personnel remain in the result with NULL staffing fields.",
    tags: ["joins", "right-join", "projects"],
    estimatedTimeMinutes: 3
  },
  {
    id: 208,
    title: "Preserving Complete Workforce in Appraisal Roster",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "HR compliance requires a comprehensive appraisal ledger that includes all personnel. Display employee name, department, review year, and rating, ensuring all employees from Employees are represented in the output.",
    requirements: [
      "Query Performance_Reviews and Employees ensuring all employees are retained.",
      "Display `emp_name`, `department`, `review_year`, and `rating`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Use an outer join preserving all records from the Employees table.",
    expectedSql: "SELECT e.emp_name, pr.review_id, pr.rating, pr.bonus FROM Employees e RIGHT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Guarantees every review is represented even if employee foreign keys were unassigned.",
    tags: ["joins", "right-join", "reviews"],
    estimatedTimeMinutes: 3
  },
  {
    id: 209,
    title: "Preserving Complete Project Portfolio in Assignments",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "The PMO is reporting all projects alongside team members, ensuring projects without staff are retained. Display project name, status, assigned employee ID, and assigned role, preserving all projects from Projects.",
    requirements: [
      "Query Employee_Projects and Projects ensuring all projects are retained.",
      "Display `project_name`, `status`, `emp_id`, and `assigned_role`."
    ],
    tableName: "Projects, Departments",
    hint: "Ensure all records from Projects are preserved in the outer join.",
    expectedSql: "SELECT p.project_name, d.dept_name, d.budget FROM Projects p RIGHT JOIN Departments d ON p.dept_id = d.dept_id;",
    explanation: "Preserves departments with no current project commitments in the right-join result.",
    tags: ["joins", "right-join", "departments"],
    estimatedTimeMinutes: 3
  },
  {
    id: 210,
    title: "Preserving Complete Workforce in Department Cross-Reference",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "Workforce records are cross-referenced with department data, ensuring every employee is listed. Display employee name, salary, department name, and location, preserving all employees from Employees.",
    requirements: [
      "Query Departments and Employees ensuring all employees are retained.",
      "Display `emp_name`, `salary`, `dept_name`, and `location`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Preserve all records from the Employees table in the join.",
    expectedSql: "SELECT e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated FROM Employees e RIGHT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    explanation: "Maintains all junction table records on the right side of the join.",
    tags: ["joins", "right-join", "junction"],
    estimatedTimeMinutes: 3
  },
  {
    id: 211,
    title: "Full Bidirectional Reconciliation: Employees and Departments",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Data quality engineers are performing a bidirectional reconciliation between employees and departments. Produce a consolidated view that includes all matched records, unmatched employees, and unmatched departments, displaying employee name, department, and department headquarters location.",
    requirements: [
      "Combine Employees and Departments preserving unmatched records from both tables.",
      "Display `emp_name`, `department`, and `location`."
    ],
    tableName: "Departments, Employees",
    hint: "Combine a left outer join and an anti-join or right outer join using UNION.",
    expectedSql: "SELECT d.dept_name, d.location, e.emp_name, e.salary FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department;",
    explanation: "Returns all records from both tables, filling with NULL wherever matches do not exist on either side.",
    tags: ["joins", "full-outer-join", "complete-outer"],
    estimatedTimeMinutes: 4
  },
  {
    id: 212,
    title: "Full Bidirectional Reconciliation: Projects and Assignments",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Resource governance requires a complete reconciliation between projects and assignment records. Display project name, status, assigned employee ID, and allocated hours, preserving both unstaffed projects and any unlinked assignment records.",
    requirements: [
      "Reconcile Projects and Employee_Projects preserving unmatched records from both sides.",
      "Display `project_name`, `status`, `emp_id`, and `hours_allocated`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Use UNION to merge left and right outer join projections.",
    expectedSql: "SELECT p.project_id, p.project_name, ep.emp_id, ep.assigned_role FROM Projects p FULL OUTER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Surfaces both unstaffed projects and any orphaned staffing records.",
    tags: ["joins", "full-outer-join", "staffing"],
    estimatedTimeMinutes: 4
  },
  {
    id: 213,
    title: "Departments with No Assigned Personnel",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Organization design is identifying registered corporate departments that currently have zero assigned staff members. Display the department name and location for all departments that do not match any employees.",
    requirements: [
      "Identify departments from Departments that have no matching records in Employees.",
      "Display `dept_name` and `location`."
    ],
    tableName: "Departments, Employees",
    hint: "Use an outer join from Departments to Employees and filter where the employee attribute is null.",
    expectedSql: "SELECT d.dept_name, e.emp_name FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department WHERE d.dept_id IS NULL OR e.emp_id IS NULL;",
    explanation: "Identifies symmetric differences (rows present in one table but not the other) across two relational domains.",
    tags: ["joins", "full-outer-join", "symmetric-difference"],
    estimatedTimeMinutes: 4
  },
  {
    id: 214,
    title: "Department Initiatives Filtered by Leadership Roles",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Governance is tracking managerial assignments within department projects. Display department name, project name, employee ID, and assigned role for projects where the assigned role contains 'Manager', while preserving all departments.",
    requirements: [
      "Combine Departments, Projects, and Employee_Projects.",
      "Filter for roles containing 'Manager' while preserving departmental structures.",
      "Display `dept_name`, `project_name`, `emp_id`, and `assigned_role`."
    ],
    tableName: "Projects, Departments",
    hint: "Join Departments, Projects, and Employee_Projects with appropriate outer joins.",
    expectedSql: "SELECT p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget FROM Projects p FULL OUTER JOIN Departments d ON p.dept_id = d.dept_id;",
    explanation: "Compares project budgets against overall departmental capital allocations with complete outer preservation.",
    tags: ["joins", "full-outer-join", "budget"],
    estimatedTimeMinutes: 4
  },
  {
    id: 215,
    title: "High-Budget Project Resource Allocations",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Finance leadership is auditing staffing on initiatives with budgets of at least 200,000. Display project name, budget, assigned employee ID, and allocated hours, ensuring all qualifying high-budget projects are preserved.",
    requirements: [
      "Filter Projects for `budget >= 200000`.",
      "Preserve qualifying projects while joining with Employee_Projects.",
      "Display `project_name`, `budget`, `emp_id`, and `hours_allocated`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Join high-budget projects with Employee_Projects preserving projects.",
    expectedSql: "SELECT e.emp_name, e.salary, pr.review_year, pr.rating FROM Employees e FULL OUTER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Integrates complete employee rosters and appraisal records in a single outer query.",
    tags: ["joins", "full-outer-join", "reviews"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Multi-Table Relational Joins (3 to 4 tables) (IDs 216 to 227)
  {
    id: 216,
    title: "Tri-Table Relational Link: Staff, Departments, and Projects",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "Corporate reporting requires an integrated view connecting employees with their department and associated departmental projects. For each employee, display employee name, department name, department location, and project name for projects belonging to that department.",
    requirements: [
      "Join Employees, Departments (matching on department name), and Projects (matching on department ID).",
      "Display `emp_name`, `dept_name`, `location`, and `project_name`."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "Chain inner joins: Employees to Departments on department name, and Departments to Projects on dept_id.",
    expectedSql: "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Traverses a classic many-to-many relationship using a bridging associative junction table.",
    tags: ["joins", "multi-table", "many-to-many"],
    estimatedTimeMinutes: 3
  },
  {
    id: 217,
    title: "Tri-Table Staffing Pipeline: Employee, Role, and Project Details",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "The PMO is generating an assignment roster with project context. Display employee name, department, assigned project name, project status, and weekly hours allocated for all active project assignments.",
    requirements: [
      "Join Employees, Employee_Projects (on emp_id), and Projects (on project_id).",
      "Display `emp_name`, `department`, `project_name`, `status`, and `hours_allocated`."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "Join Employees with Employee_Projects on emp_id, then join with Projects on project_id.",
    expectedSql: "SELECT e.emp_name, p.project_name, p.status, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active';",
    explanation: "Navigates multi-table joins while constraining results to active initiatives.",
    tags: ["joins", "multi-table", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 218,
    title: "Tri-Table Governance Link: Division, Project, and Team Member",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "Corporate governance tracks project staffing back to sponsoring divisions. Display department name, project name, assigned employee ID, and assigned role for all current assignments.",
    requirements: [
      "Join Departments, Projects (on dept_id), and Employee_Projects (on project_id).",
      "Display `dept_name`, `project_name`, `emp_id`, and `assigned_role`."
    ],
    tableName: "Projects, Departments, Employee_Projects",
    hint: "Chain inner joins across Departments, Projects, and Employee_Projects.",
    expectedSql: "SELECT p.project_name, d.dept_name, d.dept_head, ep.assigned_role FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Connects operational project assignments with departmental governance.",
    tags: ["joins", "multi-table", "governance"],
    estimatedTimeMinutes: 3
  },
  {
    id: 219,
    title: "Tri-Table Personnel Synthesis: Assignments and Appraisals",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "Human Resources is correlating project workload with appraisal ratings. For employees who have both a project assignment and a performance review, display employee name, project ID, hours allocated, review rating, and bonus.",
    requirements: [
      "Join Employees, Employee_Projects (on emp_id), and Performance_Reviews (on emp_id).",
      "Display `emp_name`, `project_id`, `hours_allocated`, `rating`, and `bonus`."
    ],
    tableName: "Employees, Departments, Performance_Reviews",
    hint: "Join Employees with Employee_Projects and Performance_Reviews on emp_id.",
    expectedSql: "SELECT e.emp_name, d.dept_name, d.location, pr.rating, pr.bonus FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Synthesizes biographical employee identity, departmental origin, and evaluation scores.",
    tags: ["joins", "multi-table", "auditing"],
    estimatedTimeMinutes: 3
  },
  {
    id: 220,
    title: "Tri-Table Project Staffing Directory with Employee Names",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "The project directory displays project names alongside the full names of assigned personnel. Retrieve project name, employee full name, assigned role, and weekly hours for all assigned team members.",
    requirements: [
      "Join Projects, Employee_Projects (on project_id), and Employees (on emp_id).",
      "Display `project_name`, `emp_name`, `assigned_role`, and `hours_allocated`."
    ],
    tableName: "Employees, Employee_Projects, Performance_Reviews",
    hint: "Connect Projects to Employee_Projects on project_id and then to Employees on emp_id.",
    expectedSql: "SELECT e.emp_name, ep.assigned_role, pr.review_year, pr.rating FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Links tactical project duties directly to appraisal outcomes.",
    tags: ["joins", "multi-table", "performance"],
    estimatedTimeMinutes: 3
  },
  {
    id: 221,
    title: "Four-Table Enterprise Integration: Staff, Unit, Project, and Role",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Enterprise reporting requires a comprehensive operational view uniting four business entities. For all project assignments, display employee name, department location, project name, project budget, and assigned role.",
    requirements: [
      "Join Employees, Departments (on department name), Employee_Projects (on emp_id), and Projects (on project_id).",
      "Display `emp_name`, `location`, `project_name`, project `budget`, and `assigned_role`."
    ],
    tableName: "Employees, Departments, Employee_Projects, Projects",
    hint: "Join Employees to Departments, Employee_Projects, and Projects using their respective foreign keys.",
    expectedSql: "SELECT e.emp_name, d.dept_name, p.project_name, ep.assigned_role FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Traverses four relational entities in the enterprise schema to construct an operational staffing view.",
    tags: ["joins", "four-tables", "relational"],
    estimatedTimeMinutes: 4
  },
  {
    id: 222,
    title: "Four-Table Executive Audit: Staff, Division, Appraisal, and Initiative",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "An executive compensation and project audit synthesizes multiple data points. Display employee name, department, office location, 2024 appraisal rating, and project name for staff assigned to projects who completed a 2024 review.",
    requirements: [
      "Join Employees, Departments, Performance_Reviews, and Employee_Projects with Projects.",
      "Filter for `review_year = 2024`.",
      "Display `emp_name`, `dept_name`, `location`, `rating`, and `project_name`."
    ],
    tableName: "Employees, Employee_Projects, Projects, Performance_Reviews",
    hint: "Join across the four tables and filter for review_year = 2024.",
    expectedSql: "SELECT e.emp_name, p.project_name, pr.review_year, pr.bonus FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.bonus IS NOT NULL;",
    explanation: "Reconciles project delivery commitments against confirmed merit bonuses.",
    tags: ["joins", "four-tables", "compensation"],
    estimatedTimeMinutes: 4
  },
  {
    id: 223,
    title: "Multi-Table Outer Join: Preserving Unassigned Staff Across Projects",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Human Resources is compiling a master assignment inventory that retains all employees regardless of whether they have project assignments. Display employee name, department, assigned project name, and hours allocated, preserving staff with zero assignments.",
    requirements: [
      "Left join Employees to Employee_Projects (on emp_id), then left join to Projects (on project_id).",
      "Display `emp_name`, `department`, `project_name`, and `hours_allocated`."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "Chain two left outer joins starting from Employees.",
    expectedSql: "SELECT e.emp_id, e.emp_name, p.project_name FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Cascading LEFT JOIN preserves all employees, including unassigned individuals who return NULL project names.",
    tags: ["joins", "multi-table", "left-join", "cascading"],
    estimatedTimeMinutes: 4
  },
  {
    id: 224,
    title: "Multi-Table Outer Join: Department to Project Cascade",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "The PMO is auditing the organizational project hierarchy from departments down to project team members. Display department name, project name, and assigned employee ID, preserving departments with no projects and projects with no staff.",
    requirements: [
      "Left join Departments to Projects (on dept_id), then left join to Employee_Projects (on project_id).",
      "Display `dept_name`, `project_name`, and `emp_id`."
    ],
    tableName: "Departments, Projects, Employee_Projects",
    hint: "Chain two left joins from Departments through Projects to Employee_Projects.",
    expectedSql: "SELECT d.dept_name, p.project_name, ep.emp_id FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Preserves departments without projects, as well as projects without assigned employees.",
    tags: ["joins", "multi-table", "left-join"],
    estimatedTimeMinutes: 4
  },
  {
    id: 225,
    title: "High-Earner Deliveries on Completed Initiatives",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "The compensation committee is reviewing high-earning staff deployed to delivered projects. For employees earning strictly more than 40,000 who worked on projects marked as 'Completed', display employee name, salary, department name, and project name.",
    requirements: [
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter for `status = 'Completed'` and `salary > 40000`.",
      "Display `emp_name`, `salary`, `dept_name`, and `project_name`."
    ],
    tableName: "Employees, Departments, Employee_Projects, Projects",
    hint: "Join the four tables and filter for p.status = 'Completed' and e.salary > 40000.",
    expectedSql: "SELECT e.emp_name, e.salary, d.dept_name, p.project_name FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Completed' AND e.salary > 40000;",
    explanation: "Constrains a four-table relational query across both project state and individual compensation.",
    tags: ["joins", "four-tables", "filtering"],
    estimatedTimeMinutes: 4
  },
  {
    id: 226,
    title: "Heavy Workload Contributors on Active Programs",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Resource governance is monitoring staff carrying heavy weekly commitments on active initiatives. For active projects where an employee is allocated strictly more than 25 weekly hours, display employee name, department location, project name, and allocated hours.",
    requirements: [
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter for `status = 'Active'` and `hours_allocated > 25`.",
      "Display `emp_name`, `location`, `project_name`, and `hours_allocated`."
    ],
    tableName: "Employees, Departments, Employee_Projects, Projects",
    hint: "Join the four tables and filter for ep.hours_allocated > 25 and p.status = 'Active'.",
    expectedSql: "SELECT e.emp_name, d.location, p.project_name, ep.hours_allocated FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE ep.hours_allocated > 25 AND p.status = 'Active';",
    explanation: "Identifies heavy resource investments on live business priorities.",
    tags: ["joins", "four-tables", "workload"],
    estimatedTimeMinutes: 4
  },
  {
    id: 227,
    title: "Comprehensive Staff Profile: Unit, Project, and 2024 Appraisal",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Executive dashboards require a complete cross-functional profile for active staff. For employees who completed a 2024 review and are assigned to a project, display employee name, department name, project name, and 2024 performance rating.",
    requirements: [
      "Join Employees, Departments, Employee_Projects, Projects, and Performance_Reviews.",
      "Filter for `review_year = 2024`.",
      "Display `emp_name`, `dept_name`, `project_name`, and `rating`."
    ],
    tableName: "Employees, Departments, Employee_Projects, Projects, Performance_Reviews",
    hint: "Join across the relevant tables and filter for pr.review_year = 2024.",
    expectedSql: "SELECT e.emp_name, d.dept_name, p.project_name, pr.rating FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_year = 2024;",
    explanation: "Assembles a 360-degree operational profile connecting organization, initiative, and appraisal rating.",
    tags: ["joins", "five-tables", "360-view"],
    estimatedTimeMinutes: 5
  },

  // Subtopic: Self Joins & Hierarchical Comparisons (IDs 228 to 235)
  {
    id: 228,
    title: "Intra-Departmental Peer Pairings",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "Organizational network analysis is studying collaboration pairs within business units. Find all unique pairs of employees who work in the same department, displaying the first employee name as `employee_1`, second employee name as `employee_2`, and the department name, ensuring each unique pair appears only once.",
    requirements: [
      "Join Employees with itself on matching department.",
      "Enforce `e1.emp_id < e2.emp_id` to eliminate self-matches and duplicate mirror pairs.",
      "Display employee 1 aliased as `employee_1`, employee 2 aliased as `employee_2`, and `department`."
    ],
    tableName: "Employees",
    hint: "Use a self-join on department with e1.emp_id < e2.emp_id.",
    expectedSql: "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department WHERE e1.emp_id < e2.emp_id;",
    explanation: "e1.emp_id < e2.emp_id prevents pairing an employee with themselves and prevents mirror duplicates (A, B and B, A).",
    tags: ["joins", "self-join", "pairing"],
    estimatedTimeMinutes: 3
  },
  {
    id: 229,
    title: "Colleague Pairings Sharing Office Cities",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "Facilities is setting up local peer mentorships within branch offices. Find all unique pairs of colleagues who are stationed in the same office city, displaying colleague 1 as `colleague_1`, colleague 2 as `colleague_2`, and city name, preventing duplicate pairs.",
    requirements: [
      "Join Employees with itself on matching city.",
      "Enforce `e1.emp_id < e2.emp_id`.",
      "Display `colleague_1`, `colleague_2`, and `city`."
    ],
    tableName: "Employees",
    hint: "Self-join Employees on city with e1.emp_id < e2.emp_id.",
    expectedSql: "SELECT e1.emp_name AS colleague_1, e2.emp_name AS colleague_2, e1.city FROM Employees e1 INNER JOIN Employees e2 ON e1.city = e2.city WHERE e1.emp_id < e2.emp_id;",
    explanation: "Groups colleagues stationed in identical office hubs using self-join pairs.",
    tags: ["joins", "self-join", "city"],
    estimatedTimeMinutes: 3
  },
  {
    id: 230,
    title: "Colleague Compensation Disparity Comparison",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Hard",
    problemStatement: "Compensation equity is analyzing salary gaps between colleagues in the same division. Find pairs of colleagues in the same department where one employee out-earns the other by at least 20,000, displaying the higher earner name (`higher_earner`), higher salary (`high_sal`), lower earner name (`lower_earner`), lower salary (`low_sal`), and department name.",
    requirements: [
      "Join Employees with itself on matching department.",
      "Filter for records where `e1.salary >= e2.salary + 20000`.",
      "Display `higher_earner`, `high_sal`, `lower_earner`, `low_sal`, and `department`."
    ],
    tableName: "Employees",
    hint: "Self-join on department and compare e1.salary to e2.salary + 20000.",
    expectedSql: "SELECT e1.emp_name AS higher_earner, e1.salary AS high_sal, e2.emp_name AS lower_earner, e2.salary AS low_sal, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department WHERE e1.salary >= e2.salary + 20000;",
    explanation: "Performs intra-departmental compensation comparisons between pairs of colleagues.",
    tags: ["joins", "self-join", "salary-comparison"],
    estimatedTimeMinutes: 4
  },
  {
    id: 231,
    title: "Same-Year Hiring Cohort Pairings",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "Talent acquisition is organizing anniversary cohorts for staff hired in the same year. Find all unique pairs of employees who joined the company in the same calendar year, displaying joiner 1 as `joiner_1`, joiner 2 as `joiner_2`, and the joining year, without duplicate mirror pairs.",
    requirements: [
      "Join Employees with itself on matching joining year.",
      "Enforce `e1.emp_id < e2.emp_id`.",
      "Display `joiner_1`, `joiner_2`, and `joining_year`."
    ],
    tableName: "Employees",
    hint: "Self-join Employees on joining_year with e1.emp_id < e2.emp_id.",
    expectedSql: "SELECT e1.emp_name AS joiner_1, e2.emp_name AS joiner_2, e1.joining_year FROM Employees e1 INNER JOIN Employees e2 ON e1.joining_year = e2.joining_year WHERE e1.emp_id < e2.emp_id;",
    explanation: "Detects hiring cohort cohorts through temporal equality self-joining.",
    tags: ["joins", "self-join", "cohorts"],
    estimatedTimeMinutes: 3
  },
  {
    id: 232,
    title: "Same-Department Project Initiative Pairings",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "The PMO is reviewing project portfolios within sponsoring divisions. Find all unique pairs of projects that are sponsored by the same department, displaying project 1 as `project_1`, project 2 as `project_2`, and the department ID (`dept_id`), avoiding duplicate pairs.",
    requirements: [
      "Join Projects with itself on matching department ID.",
      "Enforce `p1.project_id < p2.project_id`.",
      "Display `project_1`, `project_2`, and `dept_id`."
    ],
    tableName: "Projects",
    hint: "Self-join Projects on dept_id with p1.project_id < p2.project_id.",
    expectedSql: "SELECT p1.project_name AS project_1, p2.project_name AS project_2, p1.dept_id FROM Projects p1 INNER JOIN Projects p2 ON p1.dept_id = p2.dept_id WHERE p1.project_id < p2.project_id;",
    explanation: "Surfaces intra-departmental project portfolios sharing the same departmental budget origin.",
    tags: ["joins", "self-join", "projects"],
    estimatedTimeMinutes: 3
  },
  {
    id: 233,
    title: "Year-over-Year Performance Appraisal Trajectory",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Hard",
    problemStatement: "HR analytics is tracking individual rating progression across consecutive review cycles. For employees evaluated in consecutive calendar years, display employee ID, previous review year (`prev_year`), previous rating (`prev_rating`), subsequent review year (`next_year`), and subsequent rating (`next_rating`).",
    requirements: [
      "Join Performance_Reviews with itself on matching employee ID.",
      "Filter for consecutive years where `r1.review_year = r2.review_year - 1`.",
      "Display `emp_id`, `prev_year`, `prev_rating`, `next_year`, and `next_rating`."
    ],
    tableName: "Performance_Reviews",
    hint: "Self-join Performance_Reviews on emp_id and r1.review_year = r2.review_year - 1.",
    expectedSql: "SELECT r1.emp_id, r1.review_year AS prev_year, r1.rating AS prev_rating, r2.review_year AS next_year, r2.rating AS next_rating FROM Performance_Reviews r1 INNER JOIN Performance_Reviews r2 ON r1.emp_id = r2.emp_id WHERE r1.review_year = r2.review_year - 1;",
    explanation: "Tracks year-over-year rating trends by matching an appraisal record with its consecutive-year successor.",
    tags: ["joins", "self-join", "progression", "temporal"],
    estimatedTimeMinutes: 4
  },
  {
    id: 234,
    title: "Colleague Pairings with Identical Career Experience",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "Professional development is pairing colleagues with matching career seniority. Find all unique pairs of employees who have the exact same number of years of experience, displaying peer 1 as `peer_1`, peer 2 as `peer_2`, and years of experience, without duplicate pairs.",
    requirements: [
      "Join Employees with itself on matching experience.",
      "Enforce `e1.emp_id < e2.emp_id`.",
      "Display `peer_1`, `peer_2`, and `experience`."
    ],
    tableName: "Employees",
    hint: "Self-join Employees on experience with e1.emp_id < e2.emp_id.",
    expectedSql: "SELECT e1.emp_name AS peer_1, e2.emp_name AS peer_2, e1.experience FROM Employees e1 INNER JOIN Employees e2 ON e1.experience = e2.experience WHERE e1.emp_id < e2.emp_id;",
    explanation: "Finds peer experience equivalents across the organization.",
    tags: ["joins", "self-join", "tenure"],
    estimatedTimeMinutes: 3
  },
  {
    id: 235,
    title: "Project Teammate Collaboration Pairings",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Hard",
    problemStatement: "Resource management is mapping collaboration networks across project initiatives. Find all unique pairs of employees who are assigned to the same project, displaying the project ID, teammate 1 ID as `team_member_1`, and teammate 2 ID as `team_member_2`, without duplicate pairs.",
    requirements: [
      "Join Employee_Projects with itself on matching project ID.",
      "Enforce `ep1.emp_id < ep2.emp_id`.",
      "Display `project_id`, `team_member_1`, and `team_member_2`."
    ],
    tableName: "Employee_Projects",
    hint: "Self-join Employee_Projects on project_id with ep1.emp_id < ep2.emp_id.",
    expectedSql: "SELECT ep1.project_id, ep1.emp_id AS team_member_1, ep2.emp_id AS team_member_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id WHERE ep1.emp_id < ep2.emp_id;",
    explanation: "Generates teammate pairs sharing assignments on a common corporate initiative.",
    tags: ["joins", "self-join", "collaboration"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Cross Joins & Cartesian Combinations (IDs 236 to 240)
  {
    id: 236,
    title: "Comprehensive Department and Status Matrix",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Medium",
    problemStatement: "Strategic planning is generating an empty matrix grid of all theoretical combinations between corporate departments and project statuses. Generate all unique combinations of distinct department names and distinct project statuses.",
    requirements: [
      "Generate the cartesian product of distinct department names and distinct project statuses.",
      "Display department name as `dept_name` and status aliased as `project_status`."
    ],
    tableName: "Departments, Projects",
    hint: "Use a cross join between distinct department names and distinct project statuses.",
    expectedSql: "SELECT d.dept_name, s.status AS project_status FROM (SELECT DISTINCT dept_name FROM Departments) d CROSS JOIN (SELECT DISTINCT status FROM Projects) s;",
    explanation: "Cartesian product generates every possible combination of departments and project operational states.",
    tags: ["joins", "cross-join", "cartesian"],
    estimatedTimeMinutes: 3
  },
  {
    id: 237,
    title: "Branch City and Division Operational Grid",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Medium",
    problemStatement: "Facilities planning is evaluating the potential expansion of any department into any existing city. Generate all possible combinations between distinct office branch cities and distinct corporate department names.",
    requirements: [
      "Generate the cartesian product of unique cities from Employees and unique department names from Departments.",
      "Display `city` and `dept_name`."
    ],
    tableName: "Employees, Departments",
    hint: "Cross join distinct cities with distinct department names.",
    expectedSql: "SELECT c.city, d.dept_name FROM (SELECT DISTINCT city FROM Employees) c CROSS JOIN (SELECT DISTINCT dept_name FROM Departments) d;",
    explanation: "Creates an expansion matrix to audit departmental presence across all office locations.",
    tags: ["joins", "cross-join", "matrix"],
    estimatedTimeMinutes: 3
  },
  {
    id: 238,
    title: "Employee Salary Variance Relative to Company Average",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Hard",
    problemStatement: "Compensation benchmarking requires measuring each employee's salary against the organization-wide average. Display each employee's name, monthly salary, overall average salary across all employees (rounded to 2 decimal places as `avg_sal`), and the difference (salary minus average salary) aliased as `salary_diff`.",
    requirements: [
      "Cross join Employees with a scalar aggregate subquery computing overall average salary rounded to 2 decimal places.",
      "Display `emp_name`, `salary`, `avg_sal`, and computed difference aliased as `salary_diff`."
    ],
    tableName: "Employees",
    hint: "Cross join Employees with (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees).",
    expectedSql: "SELECT e.emp_name, e.salary, a.avg_sal, (e.salary - a.avg_sal) AS salary_diff FROM Employees e CROSS JOIN (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees) a;",
    explanation: "A single-row subquery CROSS JOIN appends overall benchmark statistics to every individual row without GROUP BY restrictions.",
    tags: ["joins", "cross-join", "benchmark", "scalars"],
    estimatedTimeMinutes: 4
  },
  {
    id: 239,
    title: "Project Share of Total Portfolio Budget",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Hard",
    problemStatement: "Capital governance evaluates the proportional size of each project relative to total corporate investment. For each initiative, display the project name, project budget, and the percentage of the total portfolio budget it represents (rounded to 2 decimal places, aliased as `budget_pct`).",
    requirements: [
      "Cross join Projects with a scalar aggregate subquery calculating total portfolio budget.",
      "Calculate percentage share as `(p.budget * 100.0) / total_budget`, rounded to 2 decimal places, aliased as `budget_pct`.",
      "Display `project_name`, `budget`, and `budget_pct`."
    ],
    tableName: "Projects",
    hint: "Cross join Projects with (SELECT SUM(budget) AS total_budget FROM Projects).",
    expectedSql: "SELECT p.project_name, p.budget, ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct FROM Projects p CROSS JOIN (SELECT SUM(budget) AS total_budget FROM Projects) t;",
    explanation: "Allows calculating percentage share of a whole by appending aggregate portfolio capital across all records.",
    tags: ["joins", "cross-join", "percentage", "ratios"],
    estimatedTimeMinutes: 4
  },
  {
    id: 240,
    title: "Department and Evaluation Rating Matrix",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Medium",
    problemStatement: "Human Resources is setting up appraisal distribution tables across departments. Generate a grid showing all combinations of distinct department names and all distinct rating values (1 through 5) present in the reviews table.",
    requirements: [
      "Generate the cartesian product of distinct department names and distinct rating values.",
      "Display department name as `dept_name` and rating value aliased as `rating_slot`."
    ],
    tableName: "Departments, Performance_Reviews",
    hint: "Cross join distinct department names from Departments with distinct ratings from Performance_Reviews.",
    expectedSql: "SELECT d.dept_name, r.rating_slot FROM (SELECT DISTINCT dept_name FROM Departments) d CROSS JOIN (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews) r;",
    explanation: "Generates template matrices to report rating distributions across all corporate divisions.",
    tags: ["joins", "cross-join", "ratings"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Aggregations & Analytical Filtering over Joined Relations (IDs 241 to 250)
  {
    id: 241,
    title: "Departmental Headcount and Payroll vs Budget",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Corporate finance is comparing departmental wage bills against allocated operating budgets. For each department, calculate the total active employee count and cumulative monthly payroll, displaying the department name, headcount, payroll, and departmental budget.",
    requirements: [
      "Join Departments and Employees on matching department name.",
      "Group records by department name and budget.",
      "Calculate employee count aliased as `emp_count` and total payroll aliased as `total_payroll`.",
      "Display `dept_name`, `emp_count`, `total_payroll`, and `budget`."
    ],
    tableName: "Departments, Employees",
    hint: "Join Departments and Employees on department name, group by dept_name and budget, and aggregate.",
    expectedSql: "SELECT d.dept_name, COUNT(e.emp_id) AS emp_count, SUM(e.salary) AS total_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget;",
    explanation: "Aggregates employee counts and salary totals while reporting departmental operating budgets.",
    tags: ["joins", "aggregates", "group-by", "payroll"],
    estimatedTimeMinutes: 3
  },
  {
    id: 242,
    title: "Initiative Staffing Roster and Weekly Workload Summary",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "The PMO is reporting resource utilization for each project initiative. For each project in Projects that has assigned personnel, display the project name, execution status, total assigned headcount, and cumulative weekly hours allocated.",
    requirements: [
      "Join Projects and Employee_Projects on project ID.",
      "Group by project ID, project name, and status.",
      "Count assigned staff aliased as `assigned_staff` and sum weekly hours aliased as `total_weekly_hours`.",
      "Display `project_name`, `status`, `assigned_staff`, and `total_weekly_hours`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Join Projects to Employee_Projects on project_id and group by project attributes.",
    expectedSql: "SELECT p.project_name, p.status, COUNT(ep.emp_id) AS assigned_staff, SUM(ep.hours_allocated) AS total_weekly_hours FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status;",
    explanation: "Aggregates project staff counts and weekly labor hours by project.",
    tags: ["joins", "aggregates", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 243,
    title: "Departmental Project Investment and Portfolio Count",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Strategic planning is aggregating capital project sponsorship per department. For each department sponsoring projects, display the department name, count of projects sponsored, and cumulative capital budget committed.",
    requirements: [
      "Join Departments and Projects on department ID (`dept_id`).",
      "Group records by department name.",
      "Count projects aliased as `projects_count` and sum budgets aliased as `total_project_budget`.",
      "Display `dept_name`, `projects_count`, and `total_project_budget`."
    ],
    tableName: "Departments, Projects",
    hint: "Join Departments and Projects on dept_id, group by dept_name, and aggregate.",
    expectedSql: "SELECT d.dept_name, COUNT(p.project_id) AS projects_count, SUM(p.budget) AS total_project_budget FROM Departments d INNER JOIN Projects p ON d.dept_id = p.dept_id GROUP BY d.dept_name;",
    explanation: "Summarizes departmental project portfolios and total budget commitments.",
    tags: ["joins", "aggregates", "budget"],
    estimatedTimeMinutes: 3
  },
  {
    id: 244,
    title: "Heavy Cross-Project Workload Contributors",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Resource governance is identifying employees whose cumulative project workload exceeds full-time capacity. Find all employees whose total weekly allocated hours across all projects strictly exceed 30, displaying employee ID, name, department, and total weekly hours.",
    requirements: [
      "Join Employees and Employee_Projects on employee ID.",
      "Group by employee ID, name, and department.",
      "Sum allocated weekly hours aliased as `total_weekly_hours`.",
      "Filter groups where cumulative hours strictly exceed 30.",
      "Display `emp_id`, `emp_name`, `department`, and `total_weekly_hours`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Join on emp_id, group by employee attributes, and apply HAVING SUM(hours_allocated) > 30.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, SUM(ep.hours_allocated) AS total_weekly_hours FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name, e.department HAVING SUM(ep.hours_allocated) > 30;",
    explanation: "Aggregates across junction table assignments and applies HAVING to highlight overloaded team members.",
    tags: ["joins", "having", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 245,
    title: "Departmental Annual Payroll Burn Audit",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Hard",
    problemStatement: "Finance leadership is auditing departmental payroll burn relative to annual operating budgets. For departments where annualized payroll (monthly payroll multiplied by 12) exceeds 50% of the departmental budget, display department name, annualized payroll (`annual_payroll`), and annual budget (`annual_budget`).",
    requirements: [
      "Join Departments and Employees on department name.",
      "Group by department name and budget.",
      "Calculate annualized payroll as `SUM(e.salary) * 12` aliased as `annual_payroll`.",
      "Filter groups where annualized payroll exceeds 50% of department budget (`budget * 0.5`).",
      "Display `dept_name`, `annual_payroll`, and `annual_budget`."
    ],
    tableName: "Departments, Employees",
    hint: "Group by dept_name and budget, and filter with HAVING (SUM(salary) * 12) > (budget * 0.5).",
    expectedSql: "SELECT d.dept_name, (SUM(e.salary) * 12) AS annual_payroll, d.budget AS annual_budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING (SUM(e.salary) * 12) > (d.budget * 0.5);",
    explanation: "Evaluates whether total annual payroll consumes more than 50% of the departmental operating budget.",
    tags: ["joins", "having", "budget-burn", "finance"],
    estimatedTimeMinutes: 4
  },
  {
    id: 246,
    title: "Project Team Experience and Compensation Benchmarks",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Hard",
    problemStatement: "Resource analytics evaluates talent seniority and cost per project. For each initiative, calculate the average years of experience (rounded to 1 decimal place) and average monthly salary (rounded to 2 decimal places) of all assigned team members, displaying project name, average experience, and average salary.",
    requirements: [
      "Join Projects, Employee_Projects (on project_id), and Employees (on emp_id).",
      "Group by project ID and project name.",
      "Calculate average team experience rounded to 1 decimal place aliased as `avg_team_exp`.",
      "Calculate average team salary rounded to 2 decimal places aliased as `avg_team_salary`.",
      "Display `project_name`, `avg_team_exp`, and `avg_team_salary`."
    ],
    tableName: "Projects, Employee_Projects, Employees",
    hint: "Join Projects to Employee_Projects and Employees, group by project_name, and compute averages.",
    expectedSql: "SELECT p.project_name, ROUND(AVG(e.experience), 1) AS avg_team_exp, ROUND(AVG(e.salary), 2) AS avg_team_salary FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id INNER JOIN Employees e ON ep.emp_id = e.emp_id GROUP BY p.project_id, p.project_name;",
    explanation: "Profiles project team seniority and compensation through multi-table joins.",
    tags: ["joins", "aggregates", "team-composition"],
    estimatedTimeMinutes: 4
  },
  {
    id: 247,
    title: "Dual Engagement Audit: Projects Assigned and Reviews Received",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Hard",
    problemStatement: "Human Resources is summarizing employee engagement in projects and appraisal cycles. For all employees, display employee name, count of distinct projects assigned (aliased as `projects_assigned`), and count of distinct reviews completed (aliased as `reviews_received`), preserving employees with zero in either category.",
    requirements: [
      "Left join Employees with Employee_Projects (on emp_id) and Performance_Reviews (on emp_id).",
      "Group by employee ID and employee name.",
      "Count distinct projects aliased as `projects_assigned` and distinct reviews aliased as `reviews_received`.",
      "Display `emp_name`, `projects_assigned`, and `reviews_received`."
    ],
    tableName: "Employees, Employee_Projects, Performance_Reviews",
    hint: "Use left outer joins from Employees and apply COUNT(DISTINCT ...) for projects and reviews.",
    expectedSql: "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS projects_assigned, COUNT(DISTINCT pr.review_id) AS reviews_received FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.emp_id, e.emp_name;",
    explanation: "COUNT(DISTINCT) is essential when joining multiple one-to-many child tables to prevent inflated counts.",
    tags: ["joins", "count-distinct", "fan-out-trap"],
    estimatedTimeMinutes: 4
  },
  {
    id: 248,
    title: "Top Three Workload Contributors Across Initiatives",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Project operations is recognizing the three hardest-working contributors across all company initiatives. Find the 3 employees with the highest cumulative weekly hours committed to projects, displaying employee name, department, and total hours.",
    requirements: [
      "Join Employees and Employee_Projects on employee ID.",
      "Group by employee ID, name, and department.",
      "Sum weekly hours aliased as `total_hours`.",
      "Order by total hours in descending order.",
      "Limit the result to the top 3 employees.",
      "Display `emp_name`, `department`, and `total_hours`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Join on emp_id, group by employee, sum hours, sort descending, and limit to 3.",
    expectedSql: "SELECT e.emp_name, e.department, SUM(ep.hours_allocated) AS total_hours FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name, e.department ORDER BY total_hours DESC LIMIT 3;",
    explanation: "Highlights top contributors by aggregated project commitments across the company.",
    tags: ["joins", "order-by", "limit", "top-3"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 249,
    title: "Departmental Incentive Payout Pool Totals",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "The compensation committee is summarizing performance bonuses distributed by business unit. For each department with reviewed employees, display the department name, count of reviews completed, and cumulative bonus pool awarded.",
    requirements: [
      "Join Employees and Performance_Reviews on employee ID.",
      "Group records by department name.",
      "Count reviews aliased as `reviewed_count` and sum awarded bonuses aliased as `total_department_bonuses`.",
      "Display `department`, `reviewed_count`, and `total_department_bonuses`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Join Employees and Performance_Reviews on emp_id, group by department, and aggregate.",
    expectedSql: "SELECT e.department, COUNT(pr.review_id) AS reviewed_count, SUM(pr.bonus) AS total_department_bonuses FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.department;",
    explanation: "Aggregates performance bonuses paid to employees by department.",
    tags: ["joins", "bonus", "department-aggregates"],
    estimatedTimeMinutes: 3
  },
  {
    id: 250,
    title: "Initiatives Staffed by Elite High-Rated Teams",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Hard",
    problemStatement: "Executive governance tracks projects staffed by high-performing personnel. Identify initiatives where the assigned team members have an average performance rating of at least 4.0, displaying project name, distinct assigned staff count, and team average rating (rounded to 2 decimal places).",
    requirements: [
      "Join Projects, Employee_Projects (on project_id), and Performance_Reviews (on emp_id).",
      "Group by project ID and project name.",
      "Count distinct assigned staff aliased as `staff_count`.",
      "Calculate average rating rounded to 2 decimal places aliased as `avg_team_rating`.",
      "Filter groups where average rating is at least 4.0.",
      "Display `project_name`, `staff_count`, and `avg_team_rating`."
    ],
    tableName: "Projects, Employee_Projects, Performance_Reviews",
    hint: "Join the three tables, group by project, and filter with HAVING AVG(rating) >= 4.0.",
    expectedSql: "SELECT p.project_name, COUNT(DISTINCT ep.emp_id) AS staff_count, ROUND(AVG(pr.rating), 2) AS avg_team_rating FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id INNER JOIN Performance_Reviews pr ON ep.emp_id = pr.emp_id GROUP BY p.project_id, p.project_name HAVING AVG(pr.rating) >= 4.0;",
    explanation: "Assesses project staffing quality by filtering for initiatives where assigned team members hold elite appraisal scores.",
    tags: ["joins", "having", "team-quality"],
    estimatedTimeMinutes: 4
  }
];
