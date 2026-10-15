export const TOPIC7_QUESTIONS = [
  // Subtopic: Inner Joins & Relational Equi-Joins (IDs 176 to 190)
  {
    id: 176,
    title: "Join employees with their corporate department details",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display emp_name, department, location, and budget by joining Employees and Departments on Employees.department = Departments.dept_name.",
    requirements: [
      "INNER JOIN Employees e and Departments d on e.department = d.dept_name.",
      "Select e.emp_name, e.department, d.location, d.budget."
    ],
    tableName: "Employees, Departments",
    hint: "FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name",
    expectedSql: "SELECT e.emp_name, e.department, d.location, d.budget FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    explanation: "Equi-join on department name pairs employee records with their departmental headquarters and budget.",
    tags: ["joins", "inner-join", "equi-join"],
    estimatedTimeMinutes: 3
  },
  {
    id: 177,
    title: "Link corporate initiatives to owning departments via foreign key",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Beginner",
    problemStatement: "Write a SQL query to display project_id, project_name, dept_name, and budget (from Projects) by joining Projects with Departments on dept_id.",
    requirements: [
      "INNER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Select p.project_id, p.project_name, d.dept_name, p.budget."
    ],
    tableName: "Projects, Departments",
    hint: "FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id",
    expectedSql: "SELECT p.project_id, p.project_name, d.dept_name, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id;",
    explanation: "Standard primary-key to foreign-key equi-join connects projects with owning organizational units.",
    tags: ["joins", "inner-join", "foreign-key"],
    estimatedTimeMinutes: 2
  },
  {
    id: 178,
    title: "Display employee project assignments and allocated hours",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display emp_name, project_id, assigned_role, and hours_allocated by joining Employees and Employee_Projects on emp_id.",
    requirements: [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Select e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id",
    expectedSql: "SELECT e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    explanation: "Resolves employee names for project staffing records via the junction table.",
    tags: ["joins", "inner-join", "junction"],
    estimatedTimeMinutes: 2
  },
  {
    id: 179,
    title: "Retrieve employee performance evaluations with appraisal details",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display emp_name, review_year, rating, and bonus by joining Employees and Performance_Reviews on emp_id.",
    requirements: [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, pr.review_year, pr.rating, pr.bonus."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
    expectedSql: "SELECT e.emp_name, pr.review_year, pr.rating, pr.bonus FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Combines employee biographical names with historical performance appraisals.",
    tags: ["joins", "inner-join", "reviews"],
    estimatedTimeMinutes: 2
  },
  {
    id: 180,
    title: "Join projects with staff assignments to view project roles",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display project_name, emp_id, assigned_role, and hours_allocated by joining Projects and Employee_Projects on project_id.",
    requirements: [
      "INNER JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select p.project_name, ep.emp_id, ep.assigned_role, ep.hours_allocated."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id",
    expectedSql: "SELECT p.project_name, ep.emp_id, ep.assigned_role, ep.hours_allocated FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Exposes project team composition by joining the project dimension with staffing assignments.",
    tags: ["joins", "inner-join", "projects"],
    estimatedTimeMinutes: 2
  },
  {
    id: 181,
    title: "Find staff assigned to departments headquartered in Hyderabad",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display e.emp_name, e.department, and d.dept_head for employees whose department location is 'Hyderabad'.",
    requirements: [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "Filter with d.location = 'Hyderabad'.",
      "Select e.emp_name, e.department, d.dept_head."
    ],
    tableName: "Employees, Departments",
    hint: "WHERE d.location = 'Hyderabad'",
    expectedSql: "SELECT e.emp_name, e.department, d.dept_head FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE d.location = 'Hyderabad';",
    explanation: "Combines join logic with WHERE filtering on department headquarters location.",
    tags: ["joins", "where", "location"],
    estimatedTimeMinutes: 3
  },
  {
    id: 182,
    title: "List active projects alongside their department names and budgets",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display p.project_name, d.dept_name, and p.budget for projects where p.status = 'Active'.",
    requirements: [
      "INNER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Filter where p.status = 'Active'.",
      "Select p.project_name, d.dept_name, p.budget."
    ],
    tableName: "Projects, Departments",
    hint: "WHERE p.status = 'Active'",
    expectedSql: "SELECT p.project_name, d.dept_name, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id WHERE p.status = 'Active';",
    explanation: "Filters active project status across joined departmental relations.",
    tags: ["joins", "where", "status"],
    estimatedTimeMinutes: 2
  },
  {
    id: 183,
    title: "Display five-star appraisal recipients with department and manager comments",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, e.department, pr.rating, pr.bonus, and pr.feedback for reviews where pr.rating = 5.",
    requirements: [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter where pr.rating = 5.",
      "Select e.emp_name, e.department, pr.rating, pr.bonus, pr.feedback."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE pr.rating = 5",
    expectedSql: "SELECT e.emp_name, e.department, pr.rating, pr.bonus, pr.feedback FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
    explanation: "Isolates top-rated staff members and details their compensation rewards.",
    tags: ["joins", "reviews", "ratings"],
    estimatedTimeMinutes: 3
  },
  {
    id: 184,
    title: "Identify full-time allocations (>= 35 hrs/wk) on initiatives",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display ep.emp_id, p.project_name, ep.assigned_role, and ep.hours_allocated for assignments with hours_allocated >= 35.",
    requirements: [
      "INNER JOIN Employee_Projects ep and Projects p ON ep.project_id = p.project_id.",
      "Filter with ep.hours_allocated >= 35.",
      "Select ep.emp_id, p.project_name, ep.assigned_role, ep.hours_allocated."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "WHERE ep.hours_allocated >= 35",
    expectedSql: "SELECT ep.emp_id, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE ep.hours_allocated >= 35;",
    explanation: "Pairs project names with intensive staffing commitments.",
    tags: ["joins", "workload", "hours"],
    estimatedTimeMinutes: 3
  },
  {
    id: 185,
    title: "Match well-compensated employees (> 50000) with department leadership",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display e.emp_name, e.salary, d.dept_name, and d.dept_head for employees with salary > 50000.",
    requirements: [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "Filter where e.salary > 50000.",
      "Select e.emp_name, e.salary, d.dept_name, d.dept_head."
    ],
    tableName: "Employees, Departments",
    hint: "WHERE e.salary > 50000",
    expectedSql: "SELECT e.emp_name, e.salary, d.dept_name, d.dept_head FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE e.salary > 50000;",
    explanation: "Surfaces executive leadership associated with high-earning staff members.",
    tags: ["joins", "salary", "management"],
    estimatedTimeMinutes: 2
  },
  {
    id: 186,
    title: "List leadership role assignments with employee departmental context",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, e.department, ep.project_id, and ep.assigned_role for assignments where ep.assigned_role LIKE '%Lead%'.",
    requirements: [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Filter where ep.assigned_role LIKE '%Lead%'.",
      "Select e.emp_name, e.department, ep.project_id, ep.assigned_role."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "WHERE ep.assigned_role LIKE '%Lead%'",
    expectedSql: "SELECT e.emp_name, e.department, ep.project_id, ep.assigned_role FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.assigned_role LIKE '%Lead%';",
    explanation: "Joins staffing records with biographical details to highlight lead project contributors.",
    tags: ["joins", "roles", "like"],
    estimatedTimeMinutes: 3
  },
  {
    id: 187,
    title: "Display employee office location and bonuses for 2024 reviews",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, e.city, pr.rating, and pr.bonus for reviews where pr.review_year = 2024 and pr.bonus IS NOT NULL.",
    requirements: [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter where pr.review_year = 2024 AND pr.bonus IS NOT NULL.",
      "Select e.emp_name, e.city, pr.rating, pr.bonus."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE pr.review_year = 2024 AND pr.bonus IS NOT NULL",
    expectedSql: "SELECT e.emp_name, e.city, pr.rating, pr.bonus FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_year = 2024 AND pr.bonus IS NOT NULL;",
    explanation: "Correlates regional office branches with recent appraisal compensation.",
    tags: ["joins", "reviews", "bonus"],
    estimatedTimeMinutes: 3
  },
  {
    id: 188,
    title: "Filter initiatives with budgets exceeding 200,000 and show department head",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display p.project_name, d.dept_name, d.dept_head, and p.budget for projects where p.budget > 200000.",
    requirements: [
      "INNER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Filter where p.budget > 200000.",
      "Select p.project_name, d.dept_name, d.dept_head, p.budget."
    ],
    tableName: "Projects, Departments",
    hint: "WHERE p.budget > 200000",
    expectedSql: "SELECT p.project_name, d.dept_name, d.dept_head, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id WHERE p.budget > 200000;",
    explanation: "Joins project capital data with departmental executive leadership.",
    tags: ["joins", "budget", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 189,
    title: "Find co-located employees working in their department's headquarters city",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, e.city, e.department, and d.location by joining Employees and Departments on e.department = d.dept_name where e.city = d.location.",
    requirements: [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "Filter where e.city = d.location.",
      "Select e.emp_name, e.city, e.department, d.location."
    ],
    tableName: "Employees, Departments",
    hint: "WHERE e.city = d.location",
    expectedSql: "SELECT e.emp_name, e.city, e.department, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE e.city = d.location;",
    explanation: "Verifies whether an employee's work base aligns with their division's central headquarters.",
    tags: ["joins", "location", "co-location"],
    estimatedTimeMinutes: 3
  },
  {
    id: 190,
    title: "Correlate base salary with performance bonuses",
    topic: "SQL JOINs",
    subtopic: "Inner Joins & Relational Equi-Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, e.salary, pr.bonus, and pr.rating for reviews where pr.bonus IS NOT NULL.",
    requirements: [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter where pr.bonus IS NOT NULL.",
      "Select e.emp_name, e.salary, pr.bonus, pr.rating."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE pr.bonus IS NOT NULL",
    expectedSql: "SELECT e.emp_name, e.salary, pr.bonus, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.bonus IS NOT NULL;",
    explanation: "Juxtaposes recurring monthly compensation against one-time merit bonus awards.",
    tags: ["joins", "salary", "bonus"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Left Outer Joins & Unmatched Preservations (IDs 191 to 205)
  {
    id: 191,
    title: "List all employees and their project assignments including unassigned staff",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display e.emp_id, e.emp_name, ep.project_id, and ep.assigned_role by LEFT JOINing Employees with Employee_Projects on emp_id.",
    requirements: [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Select e.emp_id, e.emp_name, ep.project_id, ep.assigned_role."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id",
    expectedSql: "SELECT e.emp_id, e.emp_name, ep.project_id, ep.assigned_role FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    explanation: "Preserves all employees in the result set; employees with no project assignments return NULL for project attributes.",
    tags: ["joins", "left-join", "preservation"],
    estimatedTimeMinutes: 3
  },
  {
    id: 192,
    title: "Identify unstaffed employees with no active project assignments (Anti-Join)",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display emp_id, emp_name, and department for employees who are currently not assigned to any project.",
    requirements: [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Filter with WHERE ep.project_id IS NULL.",
      "Select e.emp_id, e.emp_name, e.department."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "WHERE ep.project_id IS NULL",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
    explanation: "Classic SQL anti-join: LEFT JOIN combined with IS NULL on the right table's key identifies unmatched records.",
    tags: ["joins", "anti-join", "left-join", "null"],
    estimatedTimeMinutes: 3
  },
  {
    id: 193,
    title: "Display all corporate departments and their project initiatives",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display d.dept_name, d.location, p.project_name, and p.status by LEFT JOINing Departments with Projects on dept_id.",
    requirements: [
      "LEFT JOIN Departments d and Projects p ON d.dept_id = p.dept_id.",
      "Select d.dept_name, d.location, p.project_name, p.status."
    ],
    tableName: "Departments, Projects",
    hint: "FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id",
    expectedSql: "SELECT d.dept_name, d.location, p.project_name, p.status FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id;",
    explanation: "Preserves departments even if they have no ongoing or planned projects.",
    tags: ["joins", "left-join", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 194,
    title: "Find departments that currently have no associated projects (Anti-Join)",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display dept_id, dept_name, and location for departments that have zero projects in the Projects table.",
    requirements: [
      "LEFT JOIN Departments d and Projects p ON d.dept_id = p.dept_id.",
      "Filter with WHERE p.project_id IS NULL.",
      "Select d.dept_id, d.dept_name, d.location."
    ],
    tableName: "Departments, Projects",
    hint: "WHERE p.project_id IS NULL",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id WHERE p.project_id IS NULL;",
    explanation: "Surfaces departments that lack project activity using an anti-join pattern.",
    tags: ["joins", "anti-join", "left-join"],
    estimatedTimeMinutes: 3
  },
  {
    id: 195,
    title: "List all employees alongside their historical review ratings",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display e.emp_id, e.emp_name, e.department, pr.review_year, and pr.rating by LEFT JOINing Employees with Performance_Reviews on emp_id.",
    requirements: [
      "LEFT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_id, e.emp_name, e.department, pr.review_year, pr.rating."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Lists every corporate employee while including appraisal data for those who have been evaluated.",
    tags: ["joins", "left-join", "reviews"],
    estimatedTimeMinutes: 2
  },
  {
    id: 196,
    title: "Find employees who have never received a performance review (Anti-Join)",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display emp_id, emp_name, department, and salary for employees who have no records in Performance_Reviews.",
    requirements: [
      "LEFT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter with WHERE pr.review_id IS NULL.",
      "Select e.emp_id, e.emp_name, e.department, e.salary."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "WHERE pr.review_id IS NULL",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_id IS NULL;",
    explanation: "Isolates unreviewed personnel to schedule pending evaluations.",
    tags: ["joins", "anti-join", "null"],
    estimatedTimeMinutes: 3
  },
  {
    id: 197,
    title: "List all projects and their assigned team members",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display p.project_id, p.project_name, ep.emp_id, and ep.assigned_role by LEFT JOINing Projects with Employee_Projects on project_id.",
    requirements: [
      "LEFT JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select p.project_id, p.project_name, ep.emp_id, ep.assigned_role."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id",
    expectedSql: "SELECT p.project_id, p.project_name, ep.emp_id, ep.assigned_role FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Retains all initiatives, including newly planned initiatives that have no staff assigned yet.",
    tags: ["joins", "left-join", "projects"],
    estimatedTimeMinutes: 2
  },
  {
    id: 198,
    title: "Find initiatives that currently have zero assigned staff members (Anti-Join)",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display project_id, project_name, and status for projects that have no assigned staff in Employee_Projects.",
    requirements: [
      "LEFT JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Filter with WHERE ep.emp_id IS NULL.",
      "Select p.project_id, p.project_name, p.status."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "WHERE ep.emp_id IS NULL",
    expectedSql: "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
    explanation: "Detects unstaffed initiatives requiring human resource allocation.",
    tags: ["joins", "anti-join", "staffing"],
    estimatedTimeMinutes: 3
  },
  {
    id: 199,
    title: "Display all corporate departments and associated staff names",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Easy",
    problemStatement: "Write a SQL query to display d.dept_name, d.dept_head, and e.emp_name by LEFT JOINing Departments with Employees on d.dept_name = e.department.",
    requirements: [
      "LEFT JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Select d.dept_name, d.dept_head, e.emp_name."
    ],
    tableName: "Departments, Employees",
    hint: "FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department",
    expectedSql: "SELECT d.dept_name, d.dept_head, e.emp_name FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department;",
    explanation: "Preserves departments with zero staff (e.g. Legal, Operations, R&D) with NULL employee names.",
    tags: ["joins", "left-join", "departments"],
    estimatedTimeMinutes: 2
  },
  {
    id: 200,
    title: "Identify corporate departments that currently have zero employees (Anti-Join)",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display dept_id, dept_name, and location for departments that have no staff in the Employees table.",
    requirements: [
      "LEFT JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Filter with WHERE e.emp_id IS NULL.",
      "Select d.dept_id, d.dept_name, d.location."
    ],
    tableName: "Departments, Employees",
    hint: "WHERE e.emp_id IS NULL",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
    explanation: "Locates unpopulated or newly formed corporate organizational units.",
    tags: ["joins", "anti-join", "headcount"],
    estimatedTimeMinutes: 3
  },
  {
    id: 201,
    title: "Filter joined records within the ON clause vs WHERE clause",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, e.department, pr.rating, and pr.bonus for all employees, showing 2024 review data where available by placing pr.review_year = 2024 directly in the LEFT JOIN ON clause.",
    requirements: [
      "LEFT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id AND pr.review_year = 2024.",
      "Select e.emp_name, e.department, pr.rating, pr.bonus."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "ON e.emp_id = pr.emp_id AND pr.review_year = 2024",
    expectedSql: "SELECT e.emp_name, e.department, pr.rating, pr.bonus FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id AND pr.review_year = 2024;",
    explanation: "Placing a condition in the ON clause filters the right table while preserving all rows of the left table.",
    tags: ["joins", "left-join", "on-clause-filtering"],
    estimatedTimeMinutes: 4
  },
  {
    id: 202,
    title: "Format unassigned staffing roles using COALESCE in a LEFT JOIN",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_id, e.emp_name, and COALESCE(ep.assigned_role, 'Unassigned') AS project_role by LEFT JOINing Employees with Employee_Projects on emp_id.",
    requirements: [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Use COALESCE(ep.assigned_role, 'Unassigned') AS project_role.",
      "Select e.emp_id, e.emp_name, project_role."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "COALESCE(ep.assigned_role, 'Unassigned') AS project_role",
    expectedSql: "SELECT e.emp_id, e.emp_name, COALESCE(ep.assigned_role, 'Unassigned') AS project_role FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    explanation: "Replaces NULL results in unassigned left-join records with informative default labels.",
    tags: ["joins", "coalesce", "left-join"],
    estimatedTimeMinutes: 3
  },
  {
    id: 203,
    title: "Compute total weekly hours per project preserving unstaffed initiatives",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display p.project_id, p.project_name, and COALESCE(SUM(ep.hours_allocated), 0) AS total_hours by LEFT JOINing Projects with Employee_Projects on project_id, grouped by p.project_id and p.project_name.",
    requirements: [
      "LEFT JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Group by p.project_id, p.project_name.",
      "Select p.project_id, p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "GROUP BY p.project_id, p.project_name",
    expectedSql: "SELECT p.project_id, p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    explanation: "Calculates resource allocation across all initiatives, reporting 0 hours for unstaffed projects.",
    tags: ["joins", "left-join", "group-by", "coalesce"],
    estimatedTimeMinutes: 3
  },
  {
    id: 204,
    title: "Count employees per department including zero-headcount divisions",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display d.dept_name and COUNT(e.emp_id) AS staff_count by LEFT JOINing Departments with Employees on d.dept_name = e.department, grouped by d.dept_name.",
    requirements: [
      "LEFT JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Group by d.dept_name.",
      "Use COUNT(e.emp_id) AS staff_count (do NOT use COUNT(*)).",
      "Select d.dept_name, staff_count."
    ],
    tableName: "Departments, Employees",
    hint: "COUNT(e.emp_id) AS staff_count GROUP BY d.dept_name",
    expectedSql: "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
    explanation: "COUNT(column) properly outputs 0 for NULL matches, whereas COUNT(*) would falsely report 1 for unmatched rows.",
    tags: ["joins", "left-join", "count", "group-by"],
    estimatedTimeMinutes: 3
  },
  {
    id: 205,
    title: "Count reviews per employee including unreviewed individuals",
    topic: "SQL JOINs",
    subtopic: "Left Outer Joins & Unmatched Preservations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_id, e.emp_name, and COUNT(pr.review_id) AS review_count by LEFT JOINing Employees with Performance_Reviews on emp_id, grouped by e.emp_id and e.emp_name.",
    requirements: [
      "LEFT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Group by e.emp_id, e.emp_name.",
      "Use COUNT(pr.review_id) AS review_count.",
      "Select e.emp_id, e.emp_name, review_count."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "GROUP BY e.emp_id, e.emp_name",
    expectedSql: "SELECT e.emp_id, e.emp_name, COUNT(pr.review_id) AS review_count FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.emp_id, e.emp_name;",
    explanation: "Guarantees every employee appears in the tally, correctly reporting zero reviews for unreviewed staff.",
    tags: ["joins", "left-join", "count", "group-by"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Right Outer Joins & Full Outer Joins (IDs 206 to 215)
  {
    id: 206,
    title: "Right outer join: Preserve all departments when matching employees",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, d.dept_name, and d.location by RIGHT JOINing Employees with Departments on e.department = d.dept_name.",
    requirements: [
      "RIGHT JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "Select e.emp_name, d.dept_name, d.location."
    ],
    tableName: "Employees, Departments",
    hint: "FROM Employees e RIGHT JOIN Departments d ON e.department = d.dept_name",
    expectedSql: "SELECT e.emp_name, d.dept_name, d.location FROM Employees e RIGHT JOIN Departments d ON e.department = d.dept_name;",
    explanation: "RIGHT JOIN guarantees that every row from the right-hand table (Departments) is included in the output.",
    tags: ["joins", "right-join", "outer-join"],
    estimatedTimeMinutes: 3
  },
  {
    id: 207,
    title: "Right outer join: Retain all projects when querying staff allocations",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display ep.emp_id, ep.assigned_role, p.project_id, and p.project_name by RIGHT JOINing Employee_Projects with Projects on ep.project_id = p.project_id.",
    requirements: [
      "RIGHT JOIN Employee_Projects ep and Projects p ON ep.project_id = p.project_id.",
      "Select ep.emp_id, ep.assigned_role, p.project_id, p.project_name."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "FROM Employee_Projects ep RIGHT JOIN Projects p ON ep.project_id = p.project_id",
    expectedSql: "SELECT ep.emp_id, ep.assigned_role, p.project_id, p.project_name FROM Employee_Projects ep RIGHT JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Ensures projects without assigned personnel remain in the result with NULL staffing fields.",
    tags: ["joins", "right-join", "projects"],
    estimatedTimeMinutes: 3
  },
  {
    id: 208,
    title: "Right outer join: Match all performance reviews with employee names",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, pr.review_id, pr.rating, and pr.bonus by RIGHT JOINing Employees with Performance_Reviews on e.emp_id = pr.emp_id.",
    requirements: [
      "RIGHT JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, pr.review_id, pr.rating, pr.bonus."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "FROM Employees e RIGHT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
    expectedSql: "SELECT e.emp_name, pr.review_id, pr.rating, pr.bonus FROM Employees e RIGHT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Guarantees every review is represented even if employee foreign keys were unassigned.",
    tags: ["joins", "right-join", "reviews"],
    estimatedTimeMinutes: 3
  },
  {
    id: 209,
    title: "Right outer join: Retain all corporate departments when joining with projects",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display p.project_name, d.dept_name, and d.budget by RIGHT JOINing Projects with Departments on p.dept_id = d.dept_id.",
    requirements: [
      "RIGHT JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Select p.project_name, d.dept_name, d.budget."
    ],
    tableName: "Projects, Departments",
    hint: "FROM Projects p RIGHT JOIN Departments d ON p.dept_id = d.dept_id",
    expectedSql: "SELECT p.project_name, d.dept_name, d.budget FROM Projects p RIGHT JOIN Departments d ON p.dept_id = d.dept_id;",
    explanation: "Preserves departments with no current project commitments in the right-join result.",
    tags: ["joins", "right-join", "departments"],
    estimatedTimeMinutes: 3
  },
  {
    id: 210,
    title: "Right outer join: Retain all staffing allocations when pairing with staff names",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, ep.project_id, ep.assigned_role, and ep.hours_allocated by RIGHT JOINing Employees with Employee_Projects on e.emp_id = ep.emp_id.",
    requirements: [
      "RIGHT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Select e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "FROM Employees e RIGHT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id",
    expectedSql: "SELECT e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated FROM Employees e RIGHT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    explanation: "Maintains all junction table records on the right side of the join.",
    tags: ["joins", "right-join", "junction"],
    estimatedTimeMinutes: 3
  },
  {
    id: 211,
    title: "Full outer join: Comprehensive matrix between Departments and Employees",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display d.dept_name, d.location, e.emp_name, and e.salary by performing a FULL OUTER JOIN between Departments and Employees on d.dept_name = e.department.",
    requirements: [
      "FULL OUTER JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Select d.dept_name, d.location, e.emp_name, e.salary."
    ],
    tableName: "Departments, Employees",
    hint: "FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department",
    expectedSql: "SELECT d.dept_name, d.location, e.emp_name, e.salary FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department;",
    explanation: "Returns all records from both tables, filling with NULL wherever matches do not exist on either side.",
    tags: ["joins", "full-outer-join", "complete-outer"],
    estimatedTimeMinutes: 4
  },
  {
    id: 212,
    title: "Full outer join: Reconcile all projects with staffing records",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display p.project_id, p.project_name, ep.emp_id, and ep.assigned_role by performing a FULL OUTER JOIN between Projects and Employee_Projects on p.project_id = ep.project_id.",
    requirements: [
      "FULL OUTER JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select p.project_id, p.project_name, ep.emp_id, ep.assigned_role."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "FROM Projects p FULL OUTER JOIN Employee_Projects ep ON p.project_id = ep.project_id",
    expectedSql: "SELECT p.project_id, p.project_name, ep.emp_id, ep.assigned_role FROM Projects p FULL OUTER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Surfaces both unstaffed projects and any orphaned staffing records.",
    tags: ["joins", "full-outer-join", "staffing"],
    estimatedTimeMinutes: 4
  },
  {
    id: 213,
    title: "Isolate disjoint entities using FULL OUTER JOIN with NULL filtering",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display d.dept_name and e.emp_name by performing a FULL OUTER JOIN between Departments and Employees on d.dept_name = e.department where either d.dept_id IS NULL OR e.emp_id IS NULL.",
    requirements: [
      "FULL OUTER JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Filter with WHERE d.dept_id IS NULL OR e.emp_id IS NULL.",
      "Select d.dept_name, e.emp_name."
    ],
    tableName: "Departments, Employees",
    hint: "WHERE d.dept_id IS NULL OR e.emp_id IS NULL",
    expectedSql: "SELECT d.dept_name, e.emp_name FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department WHERE d.dept_id IS NULL OR e.emp_id IS NULL;",
    explanation: "Identifies symmetric differences (rows present in one table but not the other) across two relational domains.",
    tags: ["joins", "full-outer-join", "symmetric-difference"],
    estimatedTimeMinutes: 4
  },
  {
    id: 214,
    title: "Full outer join between Projects and Departments comparing allocations",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display p.project_name, d.dept_name, p.budget AS project_budget, and d.budget AS dept_budget by performing a FULL OUTER JOIN between Projects and Departments on p.dept_id = d.dept_id.",
    requirements: [
      "FULL OUTER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "Select p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget."
    ],
    tableName: "Projects, Departments",
    hint: "FROM Projects p FULL OUTER JOIN Departments d ON p.dept_id = d.dept_id",
    expectedSql: "SELECT p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget FROM Projects p FULL OUTER JOIN Departments d ON p.dept_id = d.dept_id;",
    explanation: "Compares project budgets against overall departmental capital allocations with complete outer preservation.",
    tags: ["joins", "full-outer-join", "budget"],
    estimatedTimeMinutes: 4
  },
  {
    id: 215,
    title: "Full outer join between Employees and Performance_Reviews",
    topic: "SQL JOINs",
    subtopic: "Right Outer Joins & Full Outer Joins",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, e.salary, pr.review_year, and pr.rating by performing a FULL OUTER JOIN between Employees and Performance_Reviews on e.emp_id = pr.emp_id.",
    requirements: [
      "FULL OUTER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, e.salary, pr.review_year, pr.rating."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "FROM Employees e FULL OUTER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
    expectedSql: "SELECT e.emp_name, e.salary, pr.review_year, pr.rating FROM Employees e FULL OUTER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Integrates complete employee rosters and appraisal records in a single outer query.",
    tags: ["joins", "full-outer-join", "reviews"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Multi-Table Relational Joins (3 to 4 tables) (IDs 216 to 227)
  {
    id: 216,
    title: "Join Employees, Employee_Projects, and Projects across junction entity",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, p.project_name, ep.assigned_role, and ep.hours_allocated by joining Employees, Employee_Projects, and Projects.",
    requirements: [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "INNER JOIN Projects p ON ep.project_id = p.project_id.",
      "Select e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id",
    expectedSql: "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Traverses a classic many-to-many relationship using a bridging associative junction table.",
    tags: ["joins", "multi-table", "many-to-many"],
    estimatedTimeMinutes: 3
  },
  {
    id: 217,
    title: "Filter active initiatives across the employee project join",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, p.project_name, p.status, and ep.hours_allocated for projects where p.status = 'Active'.",
    requirements: [
      "Join Employees, Employee_Projects, and Projects.",
      "Filter with p.status = 'Active'.",
      "Select e.emp_name, p.project_name, p.status, ep.hours_allocated."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "WHERE p.status = 'Active'",
    expectedSql: "SELECT e.emp_name, p.project_name, p.status, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active';",
    explanation: "Navigates multi-table joins while constraining results to active initiatives.",
    tags: ["joins", "multi-table", "status"],
    estimatedTimeMinutes: 3
  },
  {
    id: 218,
    title: "Join Projects, Departments, and Employee_Projects to view project oversight",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display p.project_name, d.dept_name, d.dept_head, and ep.assigned_role by joining Projects, Departments, and Employee_Projects.",
    requirements: [
      "INNER JOIN Projects p and Departments d ON p.dept_id = d.dept_id.",
      "INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select p.project_name, d.dept_name, d.dept_head, ep.assigned_role."
    ],
    tableName: "Projects, Departments, Employee_Projects",
    hint: "FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id",
    expectedSql: "SELECT p.project_name, d.dept_name, d.dept_head, ep.assigned_role FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Connects operational project assignments with departmental governance.",
    tags: ["joins", "multi-table", "governance"],
    estimatedTimeMinutes: 3
  },
  {
    id: 219,
    title: "Join Employees, Departments, and Performance_Reviews for appraisal audits",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, d.dept_name, d.location, pr.rating, and pr.bonus by joining Employees, Departments, and Performance_Reviews.",
    requirements: [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, d.dept_name, d.location, pr.rating, pr.bonus."
    ],
    tableName: "Employees, Departments, Performance_Reviews",
    hint: "FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
    expectedSql: "SELECT e.emp_name, d.dept_name, d.location, pr.rating, pr.bonus FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Synthesizes biographical employee identity, departmental origin, and evaluation scores.",
    tags: ["joins", "multi-table", "auditing"],
    estimatedTimeMinutes: 3
  },
  {
    id: 220,
    title: "Correlate project staff roles with performance ratings",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, ep.assigned_role, pr.review_year, and pr.rating by joining Employees, Employee_Projects, and Performance_Reviews.",
    requirements: [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Select e.emp_name, ep.assigned_role, pr.review_year, pr.rating."
    ],
    tableName: "Employees, Employee_Projects, Performance_Reviews",
    hint: "FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id",
    expectedSql: "SELECT e.emp_name, ep.assigned_role, pr.review_year, pr.rating FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Links tactical project duties directly to appraisal outcomes.",
    tags: ["joins", "multi-table", "performance"],
    estimatedTimeMinutes: 3
  },
  {
    id: 221,
    title: "Four-table join: Connect Employees, Departments, Projects, and Staffing",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, d.dept_name, p.project_name, and ep.assigned_role by joining Employees, Departments, Employee_Projects, and Projects.",
    requirements: [
      "INNER JOIN Employees e and Departments d ON e.department = d.dept_name.",
      "INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "INNER JOIN Projects p ON ep.project_id = p.project_id.",
      "Select e.emp_name, d.dept_name, p.project_name, ep.assigned_role."
    ],
    tableName: "Employees, Departments, Employee_Projects, Projects",
    hint: "Join e to d, e to ep, and ep to p",
    expectedSql: "SELECT e.emp_name, d.dept_name, p.project_name, ep.assigned_role FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Traverses four relational entities in the enterprise schema to construct an operational staffing view.",
    tags: ["joins", "four-tables", "relational"],
    estimatedTimeMinutes: 4
  },
  {
    id: 222,
    title: "Four-table join: Cross-reference project staffing with annual bonus payouts",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, p.project_name, pr.review_year, and pr.bonus for reviews where pr.bonus IS NOT NULL by joining Employees, Employee_Projects, Projects, and Performance_Reviews.",
    requirements: [
      "Join Employees, Employee_Projects, Projects, and Performance_Reviews.",
      "Filter with pr.bonus IS NOT NULL.",
      "Select e.emp_name, p.project_name, pr.review_year, pr.bonus."
    ],
    tableName: "Employees, Employee_Projects, Projects, Performance_Reviews",
    hint: "WHERE pr.bonus IS NOT NULL",
    expectedSql: "SELECT e.emp_name, p.project_name, pr.review_year, pr.bonus FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.bonus IS NOT NULL;",
    explanation: "Reconciles project delivery commitments against confirmed merit bonuses.",
    tags: ["joins", "four-tables", "compensation"],
    estimatedTimeMinutes: 4
  },
  {
    id: 223,
    title: "Multi-table LEFT JOIN: Preserve all employees while retrieving assigned project titles",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_id, e.emp_name, and p.project_name by LEFT JOINing Employees with Employee_Projects and then LEFT JOINing Projects.",
    requirements: [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "LEFT JOIN Projects p ON ep.project_id = p.project_id.",
      "Select e.emp_id, e.emp_name, p.project_name."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Projects p ON ep.project_id = p.project_id",
    expectedSql: "SELECT e.emp_id, e.emp_name, p.project_name FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Cascading LEFT JOIN preserves all employees, including unassigned individuals who return NULL project names.",
    tags: ["joins", "multi-table", "left-join", "cascading"],
    estimatedTimeMinutes: 4
  },
  {
    id: 224,
    title: "Multi-table LEFT JOIN: Cascade from Departments through Projects to staffing",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display d.dept_name, p.project_name, and ep.emp_id by LEFT JOINing Departments with Projects, and then LEFT JOINing Employee_Projects.",
    requirements: [
      "LEFT JOIN Departments d and Projects p ON d.dept_id = p.dept_id.",
      "LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id.",
      "Select d.dept_name, p.project_name, ep.emp_id."
    ],
    tableName: "Departments, Projects, Employee_Projects",
    hint: "FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id",
    expectedSql: "SELECT d.dept_name, p.project_name, ep.emp_id FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    explanation: "Preserves departments without projects, as well as projects without assigned employees.",
    tags: ["joins", "multi-table", "left-join"],
    estimatedTimeMinutes: 4
  },
  {
    id: 225,
    title: "Filter four-table join: High earners working on completed projects",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, e.salary, d.dept_name, and p.project_name by joining Employees, Departments, Employee_Projects, and Projects where p.status = 'Completed' AND e.salary > 40000.",
    requirements: [
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter with p.status = 'Completed' AND e.salary > 40000.",
      "Select e.emp_name, e.salary, d.dept_name, p.project_name."
    ],
    tableName: "Employees, Departments, Employee_Projects, Projects",
    hint: "WHERE p.status = 'Completed' AND e.salary > 40000",
    expectedSql: "SELECT e.emp_name, e.salary, d.dept_name, p.project_name FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Completed' AND e.salary > 40000;",
    explanation: "Constrains a four-table relational query across both project state and individual compensation.",
    tags: ["joins", "four-tables", "filtering"],
    estimatedTimeMinutes: 4
  },
  {
    id: 226,
    title: "Filter four-table join: Heavy commitments (> 25 hrs) on active initiatives",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, d.location, p.project_name, and ep.hours_allocated by joining Employees, Departments, Employee_Projects, and Projects where ep.hours_allocated > 25 AND p.status = 'Active'.",
    requirements: [
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter with ep.hours_allocated > 25 AND p.status = 'Active'.",
      "Select e.emp_name, d.location, p.project_name, ep.hours_allocated."
    ],
    tableName: "Employees, Departments, Employee_Projects, Projects",
    hint: "WHERE ep.hours_allocated > 25 AND p.status = 'Active'",
    expectedSql: "SELECT e.emp_name, d.location, p.project_name, ep.hours_allocated FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE ep.hours_allocated > 25 AND p.status = 'Active';",
    explanation: "Identifies heavy resource investments on live business priorities.",
    tags: ["joins", "four-tables", "workload"],
    estimatedTimeMinutes: 4
  },
  {
    id: 227,
    title: "Synthesize complete profile: Employee, department, project, and review rating",
    topic: "SQL JOINs",
    subtopic: "Multi-Table Relational Joins (3 to 4 tables)",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, d.dept_name, p.project_name, and pr.rating by joining Employees, Departments, Employee_Projects, Projects, and Performance_Reviews where pr.review_year = 2024.",
    requirements: [
      "Join Employees e to Departments d ON e.department = d.dept_name.",
      "Join e to Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Join ep to Projects p ON ep.project_id = p.project_id.",
      "Join e to Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Filter where pr.review_year = 2024.",
      "Select e.emp_name, d.dept_name, p.project_name, pr.rating."
    ],
    tableName: "Employees, Departments, Employee_Projects, Projects, Performance_Reviews",
    hint: "WHERE pr.review_year = 2024",
    expectedSql: "SELECT e.emp_name, d.dept_name, p.project_name, pr.rating FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_year = 2024;",
    explanation: "Assembles a 360-degree operational profile connecting organization, initiative, and appraisal rating.",
    tags: ["joins", "five-tables", "360-view"],
    estimatedTimeMinutes: 5
  },

  // Subtopic: Self Joins & Hierarchical Comparisons (IDs 228 to 235)
  {
    id: 228,
    title: "Self-join: Find unique pairs of employees working in the same department",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e1.emp_name AS employee_1, e2.emp_name AS employee_2, and e1.department by self-joining Employees on department where e1.emp_id < e2.emp_id.",
    requirements: [
      "Self-join Employees e1 and Employees e2 ON e1.department = e2.department.",
      "Filter with e1.emp_id < e2.emp_id to eliminate duplicates and self-pairings.",
      "Select e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department."
    ],
    tableName: "Employees",
    hint: "WHERE e1.emp_id < e2.emp_id",
    expectedSql: "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department WHERE e1.emp_id < e2.emp_id;",
    explanation: "e1.emp_id < e2.emp_id prevents pairing an employee with themselves and prevents mirror duplicates (A, B and B, A).",
    tags: ["joins", "self-join", "pairing"],
    estimatedTimeMinutes: 3
  },
  {
    id: 229,
    title: "Self-join: Find colleague pairings sharing the same office city",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e1.emp_name AS colleague_1, e2.emp_name AS colleague_2, and e1.city by self-joining Employees on city where e1.emp_id < e2.emp_id.",
    requirements: [
      "Self-join Employees e1 and Employees e2 ON e1.city = e2.city.",
      "Filter with e1.emp_id < e2.emp_id.",
      "Select e1.emp_name AS colleague_1, e2.emp_name AS colleague_2, e1.city."
    ],
    tableName: "Employees",
    hint: "WHERE e1.emp_id < e2.emp_id",
    expectedSql: "SELECT e1.emp_name AS colleague_1, e2.emp_name AS colleague_2, e1.city FROM Employees e1 INNER JOIN Employees e2 ON e1.city = e2.city WHERE e1.emp_id < e2.emp_id;",
    explanation: "Groups colleagues stationed in identical office hubs using self-join pairs.",
    tags: ["joins", "self-join", "city"],
    estimatedTimeMinutes: 3
  },
  {
    id: 230,
    title: "Self-join: Identify departmental colleagues where one out-earns the other by >= 20000",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e1.emp_name AS higher_earner, e1.salary AS high_sal, e2.emp_name AS lower_earner, e2.salary AS low_sal, and e1.department by self-joining Employees on department where e1.salary >= e2.salary + 20000.",
    requirements: [
      "Self-join Employees e1 and Employees e2 ON e1.department = e2.department.",
      "Filter with e1.salary >= e2.salary + 20000.",
      "Select e1.emp_name AS higher_earner, e1.salary AS high_sal, e2.emp_name AS lower_earner, e2.salary AS low_sal, e1.department."
    ],
    tableName: "Employees",
    hint: "WHERE e1.salary >= e2.salary + 20000",
    expectedSql: "SELECT e1.emp_name AS higher_earner, e1.salary AS high_sal, e2.emp_name AS lower_earner, e2.salary AS low_sal, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department WHERE e1.salary >= e2.salary + 20000;",
    explanation: "Performs intra-departmental compensation comparisons between pairs of colleagues.",
    tags: ["joins", "self-join", "salary-comparison"],
    estimatedTimeMinutes: 4
  },
  {
    id: 231,
    title: "Self-join: Pair employees hired in the same calendar year",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e1.emp_name AS joiner_1, e2.emp_name AS joiner_2, and e1.joining_year by self-joining Employees on joining_year where e1.emp_id < e2.emp_id.",
    requirements: [
      "Self-join Employees e1 and Employees e2 ON e1.joining_year = e2.joining_year.",
      "Filter with e1.emp_id < e2.emp_id.",
      "Select e1.emp_name AS joiner_1, e2.emp_name AS joiner_2, e1.joining_year."
    ],
    tableName: "Employees",
    hint: "WHERE e1.emp_id < e2.emp_id",
    expectedSql: "SELECT e1.emp_name AS joiner_1, e2.emp_name AS joiner_2, e1.joining_year FROM Employees e1 INNER JOIN Employees e2 ON e1.joining_year = e2.joining_year WHERE e1.emp_id < e2.emp_id;",
    explanation: "Detects hiring cohort cohorts through temporal equality self-joining.",
    tags: ["joins", "self-join", "cohorts"],
    estimatedTimeMinutes: 3
  },
  {
    id: 232,
    title: "Self-join: Pair projects belonging to the same department",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display p1.project_name AS project_1, p2.project_name AS project_2, and p1.dept_id by self-joining Projects on dept_id where p1.project_id < p2.project_id.",
    requirements: [
      "Self-join Projects p1 and Projects p2 ON p1.dept_id = p2.dept_id.",
      "Filter with p1.project_id < p2.project_id.",
      "Select p1.project_name AS project_1, p2.project_name AS project_2, p1.dept_id."
    ],
    tableName: "Projects",
    hint: "WHERE p1.project_id < p2.project_id",
    expectedSql: "SELECT p1.project_name AS project_1, p2.project_name AS project_2, p1.dept_id FROM Projects p1 INNER JOIN Projects p2 ON p1.dept_id = p2.dept_id WHERE p1.project_id < p2.project_id;",
    explanation: "Surfaces intra-departmental project portfolios sharing the same departmental budget origin.",
    tags: ["joins", "self-join", "projects"],
    estimatedTimeMinutes: 3
  },
  {
    id: 233,
    title: "Self-join: Track year-over-year rating progression for the same employee",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Performance_Reviews to display r1.emp_id, r1.review_year AS prev_year, r1.rating AS prev_rating, r2.review_year AS next_year, and r2.rating AS next_rating by self-joining on emp_id where r1.review_year = r2.review_year - 1.",
    requirements: [
      "Self-join Performance_Reviews r1 and Performance_Reviews r2 ON r1.emp_id = r2.emp_id.",
      "Filter with r1.review_year = r2.review_year - 1.",
      "Select r1.emp_id, r1.review_year AS prev_year, r1.rating AS prev_rating, r2.review_year AS next_year, r2.rating AS next_rating."
    ],
    tableName: "Performance_Reviews",
    hint: "WHERE r1.review_year = r2.review_year - 1",
    expectedSql: "SELECT r1.emp_id, r1.review_year AS prev_year, r1.rating AS prev_rating, r2.review_year AS next_year, r2.rating AS next_rating FROM Performance_Reviews r1 INNER JOIN Performance_Reviews r2 ON r1.emp_id = r2.emp_id WHERE r1.review_year = r2.review_year - 1;",
    explanation: "Tracks year-over-year rating trends by matching an appraisal record with its consecutive-year successor.",
    tags: ["joins", "self-join", "progression", "temporal"],
    estimatedTimeMinutes: 4
  },
  {
    id: 234,
    title: "Self-join: Pair colleagues with identical years of professional experience",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e1.emp_name AS peer_1, e2.emp_name AS peer_2, and e1.experience by self-joining Employees on experience where e1.emp_id < e2.emp_id.",
    requirements: [
      "Self-join Employees e1 and Employees e2 ON e1.experience = e2.experience.",
      "Filter with e1.emp_id < e2.emp_id.",
      "Select e1.emp_name AS peer_1, e2.emp_name AS peer_2, e1.experience."
    ],
    tableName: "Employees",
    hint: "WHERE e1.emp_id < e2.emp_id",
    expectedSql: "SELECT e1.emp_name AS peer_1, e2.emp_name AS peer_2, e1.experience FROM Employees e1 INNER JOIN Employees e2 ON e1.experience = e2.experience WHERE e1.emp_id < e2.emp_id;",
    explanation: "Finds peer experience equivalents across the organization.",
    tags: ["joins", "self-join", "tenure"],
    estimatedTimeMinutes: 3
  },
  {
    id: 235,
    title: "Self-join: Identify pairs of employees collaborating on the same project",
    topic: "SQL JOINs",
    subtopic: "Self Joins & Hierarchical Comparisons",
    difficulty: "Hard",
    problemStatement: "Write a SQL query from Employee_Projects to display ep1.project_id, ep1.emp_id AS team_member_1, and ep2.emp_id AS team_member_2 by self-joining on project_id where ep1.emp_id < ep2.emp_id.",
    requirements: [
      "Self-join Employee_Projects ep1 and Employee_Projects ep2 ON ep1.project_id = ep2.project_id.",
      "Filter with ep1.emp_id < ep2.emp_id.",
      "Select ep1.project_id, ep1.emp_id AS team_member_1, ep2.emp_id AS team_member_2."
    ],
    tableName: "Employee_Projects",
    hint: "WHERE ep1.emp_id < ep2.emp_id",
    expectedSql: "SELECT ep1.project_id, ep1.emp_id AS team_member_1, ep2.emp_id AS team_member_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id WHERE ep1.emp_id < ep2.emp_id;",
    explanation: "Generates teammate pairs sharing assignments on a common corporate initiative.",
    tags: ["joins", "self-join", "collaboration"],
    estimatedTimeMinutes: 4
  },

  // Subtopic: Cross Joins & Cartesian Combinations (IDs 236 to 240)
  {
    id: 236,
    title: "Cross join: Generate all theoretical department and project status combinations",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to generate a Cartesian product between distinct dept_name from Departments and distinct status from Projects. Alias columns as dept_name and project_status.",
    requirements: [
      "Select DISTINCT dept_name from Departments.",
      "CROSS JOIN with (SELECT DISTINCT status FROM Projects).",
      "Select dept_name, status AS project_status."
    ],
    tableName: "Departments, Projects",
    hint: "CROSS JOIN (SELECT DISTINCT status FROM Projects)",
    expectedSql: "SELECT d.dept_name, s.status AS project_status FROM (SELECT DISTINCT dept_name FROM Departments) d CROSS JOIN (SELECT DISTINCT status FROM Projects) s;",
    explanation: "Cartesian product generates every possible combination of departments and project operational states.",
    tags: ["joins", "cross-join", "cartesian"],
    estimatedTimeMinutes: 3
  },
  {
    id: 237,
    title: "Cross join: Generate branch city and department combinations",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display distinct city from Employees paired with distinct dept_name from Departments using CROSS JOIN.",
    requirements: [
      "Select DISTINCT city from Employees.",
      "CROSS JOIN with (SELECT DISTINCT dept_name FROM Departments).",
      "Select city, dept_name."
    ],
    tableName: "Employees, Departments",
    hint: "FROM (SELECT DISTINCT city FROM Employees) c CROSS JOIN (SELECT DISTINCT dept_name FROM Departments) d",
    expectedSql: "SELECT c.city, d.dept_name FROM (SELECT DISTINCT city FROM Employees) c CROSS JOIN (SELECT DISTINCT dept_name FROM Departments) d;",
    explanation: "Creates an expansion matrix to audit departmental presence across all office locations.",
    tags: ["joins", "cross-join", "matrix"],
    estimatedTimeMinutes: 3
  },
  {
    id: 238,
    title: "Cross join with scalar aggregate: Compare each employee's salary to company average",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, e.salary, a.avg_sal, and (e.salary - a.avg_sal) AS salary_diff by CROSS JOINing Employees with a subquery calculating ROUND(AVG(salary), 2) AS avg_sal from Employees.",
    requirements: [
      "CROSS JOIN Employees e with (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees) a.",
      "Calculate (e.salary - a.avg_sal) AS salary_diff.",
      "Select e.emp_name, e.salary, a.avg_sal, salary_diff."
    ],
    tableName: "Employees",
    hint: "CROSS JOIN (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees) a",
    expectedSql: "SELECT e.emp_name, e.salary, a.avg_sal, (e.salary - a.avg_sal) AS salary_diff FROM Employees e CROSS JOIN (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees) a;",
    explanation: "A single-row subquery CROSS JOIN appends overall benchmark statistics to every individual row without GROUP BY restrictions.",
    tags: ["joins", "cross-join", "benchmark", "scalars"],
    estimatedTimeMinutes: 4
  },
  {
    id: 239,
    title: "Cross join with total capital: Compute each project's percentage share of portfolio budget",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display p.project_name, p.budget, and ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct by CROSS JOINing Projects with a subquery computing SUM(budget) AS total_budget from Projects.",
    requirements: [
      "CROSS JOIN Projects p with (SELECT SUM(budget) AS total_budget FROM Projects) t.",
      "Calculate ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct.",
      "Select p.project_name, p.budget, budget_pct."
    ],
    tableName: "Projects",
    hint: "CROSS JOIN (SELECT SUM(budget) AS total_budget FROM Projects) t",
    expectedSql: "SELECT p.project_name, p.budget, ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct FROM Projects p CROSS JOIN (SELECT SUM(budget) AS total_budget FROM Projects) t;",
    explanation: "Allows calculating percentage share of a whole by appending aggregate portfolio capital across all records.",
    tags: ["joins", "cross-join", "percentage", "ratios"],
    estimatedTimeMinutes: 4
  },
  {
    id: 240,
    title: "Cross join: Generate rating evaluation slots (1 to 5) for all corporate departments",
    topic: "SQL JOINs",
    subtopic: "Cross Joins & Cartesian Combinations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display d.dept_name and r.rating_slot by CROSS JOINing (SELECT DISTINCT dept_name FROM Departments) d with (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews) r.",
    requirements: [
      "Select DISTINCT dept_name from Departments.",
      "CROSS JOIN with (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews).",
      "Select d.dept_name, r.rating_slot."
    ],
    tableName: "Departments, Performance_Reviews",
    hint: "CROSS JOIN (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews) r",
    expectedSql: "SELECT d.dept_name, r.rating_slot FROM (SELECT DISTINCT dept_name FROM Departments) d CROSS JOIN (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews) r;",
    explanation: "Generates template matrices to report rating distributions across all corporate divisions.",
    tags: ["joins", "cross-join", "ratings"],
    estimatedTimeMinutes: 3
  },

  // Subtopic: Aggregations & Analytical Filtering over Joined Relations (IDs 241 to 250)
  {
    id: 241,
    title: "Aggregate headcount and total payroll joined with department budget",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display d.dept_name, COUNT(e.emp_id) AS emp_count, SUM(e.salary) AS total_payroll, and d.budget by joining Departments and Employees on d.dept_name = e.department, grouped by d.dept_name and d.budget.",
    requirements: [
      "INNER JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Group by d.dept_name, d.budget.",
      "Select d.dept_name, COUNT(e.emp_id) AS emp_count, SUM(e.salary) AS total_payroll, d.budget."
    ],
    tableName: "Departments, Employees",
    hint: "GROUP BY d.dept_name, d.budget",
    expectedSql: "SELECT d.dept_name, COUNT(e.emp_id) AS emp_count, SUM(e.salary) AS total_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget;",
    explanation: "Aggregates employee counts and salary totals while reporting departmental operating budgets.",
    tags: ["joins", "aggregates", "group-by", "payroll"],
    estimatedTimeMinutes: 3
  },
  {
    id: 242,
    title: "Calculate total committed hours and headcount per project initiative",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display p.project_name, p.status, COUNT(ep.emp_id) AS assigned_staff, and SUM(ep.hours_allocated) AS total_weekly_hours by joining Projects and Employee_Projects on project_id, grouped by p.project_id, p.project_name, p.status.",
    requirements: [
      "INNER JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "Group by p.project_id, p.project_name, p.status.",
      "Select p.project_name, p.status, COUNT(ep.emp_id) AS assigned_staff, SUM(ep.hours_allocated) AS total_weekly_hours."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "GROUP BY p.project_id, p.project_name, p.status",
    expectedSql: "SELECT p.project_name, p.status, COUNT(ep.emp_id) AS assigned_staff, SUM(ep.hours_allocated) AS total_weekly_hours FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status;",
    explanation: "Aggregates project staff counts and weekly labor hours by project.",
    tags: ["joins", "aggregates", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 243,
    title: "Count projects and cumulative initiative investment per department",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display d.dept_name, COUNT(p.project_id) AS projects_count, and SUM(p.budget) AS total_project_budget by joining Departments and Projects on dept_id, grouped by d.dept_name.",
    requirements: [
      "INNER JOIN Departments d and Projects p ON d.dept_id = p.dept_id.",
      "Group by d.dept_name.",
      "Select d.dept_name, COUNT(p.project_id) AS projects_count, SUM(p.budget) AS total_project_budget."
    ],
    tableName: "Departments, Projects",
    hint: "GROUP BY d.dept_name",
    expectedSql: "SELECT d.dept_name, COUNT(p.project_id) AS projects_count, SUM(p.budget) AS total_project_budget FROM Departments d INNER JOIN Projects p ON d.dept_id = p.dept_id GROUP BY d.dept_name;",
    explanation: "Summarizes departmental project portfolios and total budget commitments.",
    tags: ["joins", "aggregates", "budget"],
    estimatedTimeMinutes: 3
  },
  {
    id: 244,
    title: "Identify employees with heavy cross-project workloads (> 30 total hours)",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_id, e.emp_name, e.department, and SUM(ep.hours_allocated) AS total_weekly_hours by joining Employees and Employee_Projects on emp_id, grouped by e.emp_id, e.emp_name, e.department, having total_weekly_hours > 30.",
    requirements: [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Group by e.emp_id, e.emp_name, e.department.",
      "Filter with HAVING SUM(ep.hours_allocated) > 30.",
      "Select e.emp_id, e.emp_name, e.department, SUM(ep.hours_allocated) AS total_weekly_hours."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "HAVING SUM(ep.hours_allocated) > 30",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department, SUM(ep.hours_allocated) AS total_weekly_hours FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name, e.department HAVING SUM(ep.hours_allocated) > 30;",
    explanation: "Aggregates across junction table assignments and applies HAVING to highlight overloaded team members.",
    tags: ["joins", "having", "workload"],
    estimatedTimeMinutes: 3
  },
  {
    id: 245,
    title: "Audit department compensation burn: Total annual payroll vs budget",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display d.dept_name, (SUM(e.salary) * 12) AS annual_payroll, d.budget AS annual_budget from Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING (SUM(e.salary) * 12) > (d.budget * 0.5);",
    requirements: [
      "INNER JOIN Departments d and Employees e ON d.dept_name = e.department.",
      "Group by d.dept_name, d.budget.",
      "Filter with HAVING (SUM(e.salary) * 12) > (d.budget * 0.5).",
      "Select d.dept_name, (SUM(e.salary) * 12) AS annual_payroll, d.budget AS annual_budget."
    ],
    tableName: "Departments, Employees",
    hint: "HAVING (SUM(e.salary) * 12) > (d.budget * 0.5)",
    expectedSql: "SELECT d.dept_name, (SUM(e.salary) * 12) AS annual_payroll, d.budget AS annual_budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING (SUM(e.salary) * 12) > (d.budget * 0.5);",
    explanation: "Evaluates whether total annual payroll consumes more than 50% of the departmental operating budget.",
    tags: ["joins", "having", "budget-burn", "finance"],
    estimatedTimeMinutes: 4
  },
  {
    id: 246,
    title: "Compute average experience and average salary of teams assigned to each project",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display p.project_name, ROUND(AVG(e.experience), 1) AS avg_team_exp, and ROUND(AVG(e.salary), 2) AS avg_team_salary by joining Projects, Employee_Projects, and Employees, grouped by p.project_id, p.project_name.",
    requirements: [
      "Join Projects p, Employee_Projects ep, and Employees e.",
      "Group by p.project_id, p.project_name.",
      "Select p.project_name, ROUND(AVG(e.experience), 1) AS avg_team_exp, ROUND(AVG(e.salary), 2) AS avg_team_salary."
    ],
    tableName: "Projects, Employee_Projects, Employees",
    hint: "GROUP BY p.project_id, p.project_name",
    expectedSql: "SELECT p.project_name, ROUND(AVG(e.experience), 1) AS avg_team_exp, ROUND(AVG(e.salary), 2) AS avg_team_salary FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id INNER JOIN Employees e ON ep.emp_id = e.emp_id GROUP BY p.project_id, p.project_name;",
    explanation: "Profiles project team seniority and compensation through multi-table joins.",
    tags: ["joins", "aggregates", "team-composition"],
    estimatedTimeMinutes: 4
  },
  {
    id: 247,
    title: "Count distinct projects and distinct reviews per employee",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display e.emp_name, COUNT(DISTINCT ep.project_id) AS projects_assigned, and COUNT(DISTINCT pr.review_id) AS reviews_received by LEFT JOINing Employees with Employee_Projects and Performance_Reviews, grouped by e.emp_id, e.emp_name.",
    requirements: [
      "LEFT JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Group by e.emp_id, e.emp_name.",
      "Select e.emp_name, COUNT(DISTINCT ep.project_id) AS projects_assigned, COUNT(DISTINCT pr.review_id) AS reviews_received."
    ],
    tableName: "Employees, Employee_Projects, Performance_Reviews",
    hint: "Use COUNT(DISTINCT ...) to prevent Cartesian product inflation",
    expectedSql: "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS projects_assigned, COUNT(DISTINCT pr.review_id) AS reviews_received FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.emp_id, e.emp_name;",
    explanation: "COUNT(DISTINCT) is essential when joining multiple one-to-many child tables to prevent inflated counts.",
    tags: ["joins", "count-distinct", "fan-out-trap"],
    estimatedTimeMinutes: 4
  },
  {
    id: 248,
    title: "Identify top 3 employees by total project hours worked",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.emp_name, e.department, and SUM(ep.hours_allocated) AS total_hours by joining Employees and Employee_Projects on emp_id, grouped by e.emp_id, e.emp_name, e.department, ordered by total_hours descending, limited to 3 employees.",
    requirements: [
      "INNER JOIN Employees e and Employee_Projects ep ON e.emp_id = ep.emp_id.",
      "Group by e.emp_id, e.emp_name, e.department.",
      "Order by total_hours DESC.",
      "LIMIT 3."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "ORDER BY total_hours DESC LIMIT 3",
    expectedSql: "SELECT e.emp_name, e.department, SUM(ep.hours_allocated) AS total_hours FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name, e.department ORDER BY total_hours DESC LIMIT 3;",
    explanation: "Highlights top contributors by aggregated project commitments across the company.",
    tags: ["joins", "order-by", "limit", "top-3"],
    requiresOrder: true,
    estimatedTimeMinutes: 3
  },
  {
    id: 249,
    title: "Calculate total bonuses awarded per department",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Medium",
    problemStatement: "Write a SQL query to display e.department, COUNT(pr.review_id) AS reviewed_count, and SUM(pr.bonus) AS total_department_bonuses by joining Employees and Performance_Reviews on emp_id, grouped by e.department.",
    requirements: [
      "INNER JOIN Employees e and Performance_Reviews pr ON e.emp_id = pr.emp_id.",
      "Group by e.department.",
      "Select e.department, COUNT(pr.review_id) AS reviewed_count, SUM(pr.bonus) AS total_department_bonuses."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "GROUP BY e.department",
    expectedSql: "SELECT e.department, COUNT(pr.review_id) AS reviewed_count, SUM(pr.bonus) AS total_department_bonuses FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.department;",
    explanation: "Aggregates performance bonuses paid to employees by department.",
    tags: ["joins", "bonus", "department-aggregates"],
    estimatedTimeMinutes: 3
  },
  {
    id: 250,
    title: "Projects where assigned team members average a performance rating of at least 4.0",
    topic: "SQL JOINs",
    subtopic: "Aggregations & Analytical Filtering over Joined Relations",
    difficulty: "Hard",
    problemStatement: "Write a SQL query to display p.project_name, COUNT(DISTINCT ep.emp_id) AS staff_count, and ROUND(AVG(pr.rating), 2) AS avg_team_rating by joining Projects p, Employee_Projects ep, and Performance_Reviews pr, grouped by p.project_id, p.project_name, having avg_team_rating >= 4.0.",
    requirements: [
      "INNER JOIN Projects p and Employee_Projects ep ON p.project_id = ep.project_id.",
      "INNER JOIN Performance_Reviews pr ON ep.emp_id = pr.emp_id.",
      "Group by p.project_id, p.project_name.",
      "Filter with HAVING AVG(pr.rating) >= 4.0.",
      "Select p.project_name, COUNT(DISTINCT ep.emp_id) AS staff_count, ROUND(AVG(pr.rating), 2) AS avg_team_rating."
    ],
    tableName: "Projects, Employee_Projects, Performance_Reviews",
    hint: "HAVING AVG(pr.rating) >= 4.0",
    expectedSql: "SELECT p.project_name, COUNT(DISTINCT ep.emp_id) AS staff_count, ROUND(AVG(pr.rating), 2) AS avg_team_rating FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id INNER JOIN Performance_Reviews pr ON ep.emp_id = pr.emp_id GROUP BY p.project_id, p.project_name HAVING AVG(pr.rating) >= 4.0;",
    explanation: "Assesses project staffing quality by filtering for initiatives where assigned team members hold elite appraisal scores.",
    tags: ["joins", "having", "team-quality"],
    estimatedTimeMinutes: 4
  }
];
