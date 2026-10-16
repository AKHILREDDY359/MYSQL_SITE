export const TOPIC7_QUESTIONS = [
  {
    "id": 176,
    "title": "Employee Department and Location",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Beginner",
    "problemStatement": "Find the department location and budget for each employee by joining Employees with Departments.",
    "requirements": [
      "Display `emp_name`, `department`, `location`, and `budget`.",
      "Join Employees and Departments on department name."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use an INNER JOIN on e.department = d.dept_name.",
    "expectedSql": "SELECT e.emp_name, e.department, d.location, d.budget FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    "explanation": "Equi-join on department name pairs employee records with their departmental headquarters and budget.",
    "tags": [
      "joins",
      "inner-join",
      "equi-join"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 177,
    "title": "Projects and Department Names",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Beginner",
    "problemStatement": "Display each project's ID, name, assigned department name, and budget.",
    "requirements": [
      "Display `project_id`, `project_name`, `dept_name`, and `budget`.",
      "Join Projects and Departments on dept_id."
    ],
    "tableName": "Projects, Departments",
    "hint": "INNER JOIN Projects with Departments on p.dept_id = d.dept_id.",
    "expectedSql": "SELECT p.project_id, p.project_name, d.dept_name, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id;",
    "explanation": "Standard primary-key to foreign-key equi-join connects projects with owning organizational units.",
    "tags": [
      "joins",
      "inner-join",
      "foreign-key"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 178,
    "title": "Employee Project Roles and Hours",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Display the employee name, project ID, assigned role, and weekly allocated hours for all project assignments.",
    "requirements": [
      "Display `emp_name`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Join Employees with Employee_Projects on emp_id."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "INNER JOIN Employees with Employee_Projects on e.emp_id = ep.emp_id.",
    "expectedSql": "SELECT e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    "explanation": "Resolves employee names for project staffing records via the junction table.",
    "tags": [
      "joins",
      "inner-join",
      "junction"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 179,
    "title": "Employee Performance Review History",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Display each employee's name along with their review year, rating, and bonus.",
    "requirements": [
      "Display `emp_name`, `review_year`, `rating`, and `bonus`.",
      "Join Employees with Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN Employees and Performance_Reviews on emp_id.",
    "expectedSql": "SELECT e.emp_name, pr.review_year, pr.rating, pr.bonus FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Combines employee biographical names with historical performance appraisals.",
    "tags": [
      "joins",
      "inner-join",
      "reviews"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 180,
    "title": "Project Staffing Details",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Display each project's name alongside assigned employee IDs, roles, and allocated hours.",
    "requirements": [
      "Display `project_name`, `emp_id`, `assigned_role`, and `hours_allocated`.",
      "Join Projects with Employee_Projects on project_id."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "INNER JOIN Projects and Employee_Projects on project_id.",
    "expectedSql": "SELECT p.project_name, ep.emp_id, ep.assigned_role, ep.hours_allocated FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Exposes project team composition by joining the project dimension with staffing assignments.",
    "tags": [
      "joins",
      "inner-join",
      "projects"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 181,
    "title": "Hyderabad Employees and Department Heads",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose department is located in Hyderabad. Display the employee name, department, and department head.",
    "requirements": [
      "Display `emp_name`, `department`, and `dept_head`.",
      "Join Employees with Departments.",
      "Filter for departments located in 'Hyderabad'."
    ],
    "tableName": "Employees, Departments",
    "hint": "INNER JOIN on department name and filter with WHERE d.location = 'Hyderabad'.",
    "expectedSql": "SELECT e.emp_name, e.department, d.dept_head FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE d.location = 'Hyderabad';",
    "explanation": "Combines join logic with WHERE filtering on department headquarters location.",
    "tags": [
      "joins",
      "where",
      "location"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 182,
    "title": "Active Projects and Department Names",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Find all active projects along with their department name and budget.",
    "requirements": [
      "Display `project_name`, `dept_name`, and `budget`.",
      "Join Projects with Departments on dept_id.",
      "Filter for `status = 'Active'`."
    ],
    "tableName": "Projects, Departments",
    "hint": "INNER JOIN on dept_id and add WHERE p.status = 'Active'.",
    "expectedSql": "SELECT p.project_name, d.dept_name, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id WHERE p.status = 'Active';",
    "explanation": "Filters active project status across joined departmental relations.",
    "tags": [
      "joins",
      "where",
      "status"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 183,
    "title": "Employees with Rating 5 and Feedback",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who received a rating of 5 in any review. Display employee name, department, rating, bonus, and feedback.",
    "requirements": [
      "Display `emp_name`, `department`, `rating`, `bonus`, and `feedback`.",
      "Join Employees with Performance_Reviews on emp_id.",
      "Filter for `rating = 5`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN on emp_id with WHERE pr.rating = 5.",
    "expectedSql": "SELECT e.emp_name, e.department, pr.rating, pr.bonus, pr.feedback FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
    "explanation": "Isolates top-rated staff members and details their compensation rewards.",
    "tags": [
      "joins",
      "reviews",
      "ratings"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 184,
    "title": "Project Assignments with 35+ Hours",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find project assignments where the weekly allocated hours are 35 or more. Display employee ID, project name, role, and hours.",
    "requirements": [
      "Display `emp_id`, `project_name`, `assigned_role`, and `hours_allocated`.",
      "Join Employee_Projects with Projects on project_id.",
      "Filter for `hours_allocated >= 35`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "INNER JOIN on project_id and filter by hours_allocated >= 35.",
    "expectedSql": "SELECT ep.emp_id, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE ep.hours_allocated >= 35;",
    "explanation": "Pairs project names with intensive staffing commitments.",
    "tags": [
      "joins",
      "workload",
      "hours"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 185,
    "title": "High-Earning Employees and Department Heads",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Find employees earning more than 50,000 and display their name, salary, department name, and department head.",
    "requirements": [
      "Display `emp_name`, `salary`, `dept_name`, and `dept_head`.",
      "Join Employees with Departments on department name.",
      "Filter for `salary > 50000`."
    ],
    "tableName": "Employees, Departments",
    "hint": "INNER JOIN on department name and filter by salary > 50000.",
    "expectedSql": "SELECT e.emp_name, e.salary, d.dept_name, d.dept_head FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE e.salary > 50000;",
    "explanation": "Surfaces executive leadership associated with high-earning staff members.",
    "tags": [
      "joins",
      "salary",
      "management"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 186,
    "title": "Employees with Lead Roles",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find employees who are assigned a role containing 'Lead'. Display employee name, department, project ID, and assigned role.",
    "requirements": [
      "Display `emp_name`, `department`, `project_id`, and `assigned_role`.",
      "Join Employees with Employee_Projects on emp_id.",
      "Filter for assigned_role containing 'Lead'."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "INNER JOIN on emp_id and filter using LIKE '%Lead%'.",
    "expectedSql": "SELECT e.emp_name, e.department, ep.project_id, ep.assigned_role FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.assigned_role LIKE '%Lead%';",
    "explanation": "Joins staffing records with biographical details to highlight lead project contributors.",
    "tags": [
      "joins",
      "roles",
      "like"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 187,
    "title": "2024 Bonus Recipients by City",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find employees who received a bonus in 2024. Display employee name, city, rating, and bonus amount.",
    "requirements": [
      "Display `emp_name`, `city`, `rating`, and `bonus`.",
      "Join Employees with Performance_Reviews on emp_id.",
      "Filter for `review_year = 2024` and `bonus IS NOT NULL`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN on emp_id and filter with review_year = 2024 AND bonus IS NOT NULL.",
    "expectedSql": "SELECT e.emp_name, e.city, pr.rating, pr.bonus FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_year = 2024 AND pr.bonus IS NOT NULL;",
    "explanation": "Correlates regional office branches with recent appraisal compensation.",
    "tags": [
      "joins",
      "reviews",
      "bonus"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 188,
    "title": "Projects with Budget Over 200,000",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Easy",
    "problemStatement": "Find all projects with a budget greater than 200,000 along with their department name and department head.",
    "requirements": [
      "Display `project_name`, `dept_name`, `dept_head`, and `budget`.",
      "Join Projects with Departments on dept_id.",
      "Filter for `budget > 200000`."
    ],
    "tableName": "Projects, Departments",
    "hint": "INNER JOIN on dept_id and filter with p.budget > 200000.",
    "expectedSql": "SELECT p.project_name, d.dept_name, d.dept_head, p.budget FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id WHERE p.budget > 200000;",
    "explanation": "Joins project capital data with departmental executive leadership.",
    "tags": [
      "joins",
      "budget",
      "departments"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 189,
    "title": "Employees Living in Their Department Location",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who live in the same city where their department is located.",
    "requirements": [
      "Display `emp_name`, employee `city`, `department`, and department `location`.",
      "Join Employees with Departments on department name.",
      "Filter for rows where employee city equals department location."
    ],
    "tableName": "Employees, Departments",
    "hint": "INNER JOIN on department and check WHERE e.city = d.location.",
    "expectedSql": "SELECT e.emp_name, e.city, e.department, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name WHERE e.city = d.location;",
    "explanation": "Verifies whether an employee's work base aligns with their division's central headquarters.",
    "tags": [
      "joins",
      "location",
      "co-location"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 190,
    "title": "Employees with Bonus and Rating",
    "topic": "SQL JOINs",
    "subtopic": "Inner Joins & Relational Equi-Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, salary, bonus, and rating for all employees who have received a bonus.",
    "requirements": [
      "Display `emp_name`, `salary`, `bonus`, and `rating`.",
      "Join Employees with Performance_Reviews on emp_id.",
      "Filter for `bonus IS NOT NULL`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN on emp_id and filter with pr.bonus IS NOT NULL.",
    "expectedSql": "SELECT e.emp_name, e.salary, pr.bonus, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.bonus IS NOT NULL;",
    "explanation": "Juxtaposes recurring monthly compensation against one-time merit bonus awards.",
    "tags": [
      "joins",
      "salary",
      "bonus"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 191,
    "title": "All Employees and Their Projects",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all employees and any project assignments they have, including unassigned employees.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `project_id`, and `assigned_role`.",
      "Use a LEFT JOIN from Employees to Employee_Projects."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "LEFT JOIN Employees with Employee_Projects on emp_id.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, ep.project_id, ep.assigned_role FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    "explanation": "Preserves all employees in the result set; employees with no project assignments return NULL for project attributes.",
    "tags": [
      "joins",
      "left-join",
      "preservation"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 192,
    "title": "Employees Not Assigned to Any Project",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who are not assigned to any project.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "LEFT JOIN Employees with Employee_Projects.",
      "Filter for rows where `project_id IS NULL`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use a LEFT JOIN anti-join checking WHERE ep.project_id IS NULL.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
    "explanation": "Classic SQL anti-join: LEFT JOIN combined with IS NULL on the right table's key identifies unmatched records.",
    "tags": [
      "joins",
      "anti-join",
      "left-join",
      "null"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 193,
    "title": "All Departments and Their Projects",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all departments and any projects associated with them, including departments without projects.",
    "requirements": [
      "Display `dept_name`, `location`, `project_name`, and `status`.",
      "LEFT JOIN Departments with Projects on dept_id."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use a LEFT JOIN from Departments to Projects.",
    "expectedSql": "SELECT d.dept_name, d.location, p.project_name, p.status FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id;",
    "explanation": "Preserves departments even if they have no ongoing or planned projects.",
    "tags": [
      "joins",
      "left-join",
      "departments"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 194,
    "title": "Departments with No Projects",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that currently have no projects assigned to them.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `location`.",
      "LEFT JOIN Departments with Projects on dept_id.",
      "Filter for rows where `project_id IS NULL`."
    ],
    "tableName": "Departments, Projects",
    "hint": "LEFT JOIN Departments to Projects and check WHERE p.project_id IS NULL.",
    "expectedSql": "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id WHERE p.project_id IS NULL;",
    "explanation": "Surfaces departments that lack project activity using an anti-join pattern.",
    "tags": [
      "joins",
      "anti-join",
      "left-join"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 195,
    "title": "All Employees and Their Reviews",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all employees along with any performance review year and rating they received.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, `review_year`, and `rating`.",
      "LEFT JOIN Employees with Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "LEFT JOIN Employees to Performance_Reviews on emp_id.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Lists every corporate employee while including appraisal data for those who have been evaluated.",
    "tags": [
      "joins",
      "left-join",
      "reviews"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 196,
    "title": "Employees with No Performance Reviews",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who have never received a performance review.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "LEFT JOIN Employees with Performance_Reviews on emp_id.",
      "Filter for rows where `review_id IS NULL`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "LEFT JOIN on emp_id and check WHERE pr.review_id IS NULL.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, e.salary FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_id IS NULL;",
    "explanation": "Isolates unreviewed personnel to schedule pending evaluations.",
    "tags": [
      "joins",
      "anti-join",
      "null"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 197,
    "title": "All Projects and Assigned Employees",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all projects along with any assigned employee IDs and roles, including unstaffed projects.",
    "requirements": [
      "Display `project_id`, `project_name`, `emp_id`, and `assigned_role`.",
      "LEFT JOIN Projects with Employee_Projects on project_id."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "LEFT JOIN Projects to Employee_Projects on project_id.",
    "expectedSql": "SELECT p.project_id, p.project_name, ep.emp_id, ep.assigned_role FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Retains all initiatives, including newly planned initiatives that have no staff assigned yet.",
    "tags": [
      "joins",
      "left-join",
      "projects"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 198,
    "title": "Projects with No Assigned Staff",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all projects that currently have no staff assigned to them.",
    "requirements": [
      "Display `project_id`, `project_name`, and `status`.",
      "LEFT JOIN Projects with Employee_Projects on project_id.",
      "Filter for rows where `emp_id IS NULL`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "LEFT JOIN on project_id and check WHERE ep.emp_id IS NULL.",
    "expectedSql": "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
    "explanation": "Detects unstaffed initiatives requiring human resource allocation.",
    "tags": [
      "joins",
      "anti-join",
      "staffing"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 199,
    "title": "All Departments and Staff Members",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Easy",
    "problemStatement": "Display all departments and the names of employees in them, including empty departments.",
    "requirements": [
      "Display `dept_name`, `dept_head`, and `emp_name`.",
      "LEFT JOIN Departments with Employees on department name."
    ],
    "tableName": "Departments, Employees",
    "hint": "LEFT JOIN Departments to Employees on d.dept_name = e.department.",
    "expectedSql": "SELECT d.dept_name, d.dept_head, e.emp_name FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department;",
    "explanation": "Preserves departments with zero staff (e.g. Legal, Operations, R&D) with NULL employee names.",
    "tags": [
      "joins",
      "left-join",
      "departments"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 200,
    "title": "Departments with Zero Employees",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that have no employees currently assigned.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `location`.",
      "LEFT JOIN Departments with Employees on department name.",
      "Filter for rows where `emp_id IS NULL`."
    ],
    "tableName": "Departments, Employees",
    "hint": "LEFT JOIN Departments to Employees and check WHERE e.emp_id IS NULL.",
    "expectedSql": "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
    "explanation": "Locates unpopulated or newly formed corporate organizational units.",
    "tags": [
      "joins",
      "anti-join",
      "headcount"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 201,
    "title": "All Employees and Their 2024 Review Status",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Hard",
    "problemStatement": "Display all employees and their 2024 review rating and bonus (if any), preserving employees who had no review in 2024.",
    "requirements": [
      "Display `emp_name`, `department`, `rating`, and `bonus`.",
      "LEFT JOIN Employees with Performance_Reviews matching review_year = 2024."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Put the year filter in the ON clause: ON e.emp_id = pr.emp_id AND pr.review_year = 2024.",
    "expectedSql": "SELECT e.emp_name, e.department, pr.rating, pr.bonus FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id AND pr.review_year = 2024;",
    "explanation": "Placing a condition in the ON clause filters the right table while preserving all rows of the left table.",
    "tags": [
      "joins",
      "left-join",
      "on-clause-filtering"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 202,
    "title": "Employee Roles with 'Unassigned' Fallback",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Display each employee's ID, name, and project role, replacing NULL roles with 'Unassigned'.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and project role aliased as `project_role`.",
      "Replace NULL role values with `'Unassigned'` using COALESCE.",
      "LEFT JOIN Employees with Employee_Projects."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use COALESCE(ep.assigned_role, 'Unassigned').",
    "expectedSql": "SELECT e.emp_id, e.emp_name, COALESCE(ep.assigned_role, 'Unassigned') AS project_role FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    "explanation": "Replaces NULL results in unassigned left-join records with informative default labels.",
    "tags": [
      "joins",
      "coalesce",
      "left-join"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 203,
    "title": "Total Hours per Project Including Unassigned",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Calculate total weekly hours for each project, displaying 0 for projects with no assigned staff.",
    "requirements": [
      "Display `project_id`, `project_name`, and total hours aliased as `total_hours`.",
      "Replace NULL total hours with 0 using COALESCE.",
      "LEFT JOIN Projects with Employee_Projects.",
      "Group by `project_id, project_name`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use COALESCE(SUM(ep.hours_allocated), 0) with LEFT JOIN and GROUP BY.",
    "expectedSql": "SELECT p.project_id, p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    "explanation": "Calculates resource allocation across all initiatives, reporting 0 hours for unstaffed projects.",
    "tags": [
      "joins",
      "left-join",
      "group-by",
      "coalesce"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 204,
    "title": "Staff Count per Department Including Empty Ones",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Count the number of employees in each department, including departments with 0 staff.",
    "requirements": [
      "Display `dept_name` and count of employees aliased as `staff_count`.",
      "LEFT JOIN Departments with Employees on department name.",
      "Group by `dept_name`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use COUNT(e.emp_id) with LEFT JOIN so NULL rows count as 0.",
    "expectedSql": "SELECT d.dept_name, COUNT(e.emp_id) AS staff_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
    "explanation": "COUNT(column) properly outputs 0 for NULL matches, whereas COUNT(*) would falsely report 1 for unmatched rows.",
    "tags": [
      "joins",
      "left-join",
      "count",
      "group-by"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 205,
    "title": "Review Count per Employee Including Zero",
    "topic": "SQL JOINs",
    "subtopic": "Left Outer Joins & Unmatched Preservations",
    "difficulty": "Medium",
    "problemStatement": "Count how many performance reviews each employee has received, including employees with 0 reviews.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and count of reviews aliased as `review_count`.",
      "LEFT JOIN Employees with Performance_Reviews on emp_id.",
      "Group by `emp_id, emp_name`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use COUNT(pr.review_id) with LEFT JOIN.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, COUNT(pr.review_id) AS review_count FROM Employees e LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.emp_id, e.emp_name;",
    "explanation": "Guarantees every employee appears in the tally, correctly reporting zero reviews for unreviewed staff.",
    "tags": [
      "joins",
      "left-join",
      "count",
      "group-by"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 206,
    "title": "Departments and Employees (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, department name, and location using a RIGHT JOIN from Employees to Departments.",
    "requirements": [
      "Display `emp_name`, `dept_name`, and `location`.",
      "RIGHT JOIN Employees to Departments on department name."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use RIGHT JOIN Departments d ON e.department = d.dept_name.",
    "expectedSql": "SELECT e.emp_name, d.dept_name, d.location FROM Employees e RIGHT JOIN Departments d ON e.department = d.dept_name;",
    "explanation": "RIGHT JOIN guarantees that every row from the right-hand table (Departments) is included in the output.",
    "tags": [
      "joins",
      "right-join",
      "outer-join"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 207,
    "title": "Projects and Assigned Staff (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee ID, assigned role, project ID, and project name using a RIGHT JOIN to preserve all projects.",
    "requirements": [
      "Display `emp_id`, `assigned_role`, `project_id`, and `project_name`.",
      "RIGHT JOIN Employee_Projects to Projects on project_id."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use RIGHT JOIN Projects p ON ep.project_id = p.project_id.",
    "expectedSql": "SELECT ep.emp_id, ep.assigned_role, p.project_id, p.project_name FROM Employee_Projects ep RIGHT JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Ensures projects without assigned personnel remain in the result with NULL staffing fields.",
    "tags": [
      "joins",
      "right-join",
      "projects"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 208,
    "title": "Reviews and Employee Names (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, review ID, rating, and bonus using a RIGHT JOIN to preserve all reviews.",
    "requirements": [
      "Display `emp_name`, `review_id`, `rating`, and `bonus`.",
      "RIGHT JOIN Employees to Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use RIGHT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id.",
    "expectedSql": "SELECT e.emp_name, pr.review_id, pr.rating, pr.bonus FROM Employees e RIGHT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Guarantees every review is represented even if employee foreign keys were unassigned.",
    "tags": [
      "joins",
      "right-join",
      "reviews"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 209,
    "title": "Departments and Projects (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display project name, department name, and budget using a RIGHT JOIN to preserve all departments.",
    "requirements": [
      "Display `project_name`, `dept_name`, and `budget`.",
      "RIGHT JOIN Projects to Departments on dept_id."
    ],
    "tableName": "Projects, Departments",
    "hint": "Use RIGHT JOIN Departments d ON p.dept_id = d.dept_id.",
    "expectedSql": "SELECT p.project_name, d.dept_name, d.budget FROM Projects p RIGHT JOIN Departments d ON p.dept_id = d.dept_id;",
    "explanation": "Preserves departments with no current project commitments in the right-join result.",
    "tags": [
      "joins",
      "right-join",
      "departments"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 210,
    "title": "Project Assignments and Employees (Right Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, project ID, role, and hours using a RIGHT JOIN from Employees to Employee_Projects.",
    "requirements": [
      "Display `emp_name`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "RIGHT JOIN Employees to Employee_Projects on emp_id."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use RIGHT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id.",
    "expectedSql": "SELECT e.emp_name, ep.project_id, ep.assigned_role, ep.hours_allocated FROM Employees e RIGHT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id;",
    "explanation": "Maintains all junction table records on the right side of the join.",
    "tags": [
      "joins",
      "right-join",
      "junction"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 211,
    "title": "Departments and Employees (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Display department name, location, employee name, and salary across all departments and employees using a FULL OUTER JOIN.",
    "requirements": [
      "Display `dept_name`, `location`, `emp_name`, and `salary`.",
      "FULL OUTER JOIN Departments with Employees on department name."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use FULL OUTER JOIN Departments d ON d.dept_name = e.department.",
    "expectedSql": "SELECT d.dept_name, d.location, e.emp_name, e.salary FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department;",
    "explanation": "Returns all records from both tables, filling with NULL wherever matches do not exist on either side.",
    "tags": [
      "joins",
      "full-outer-join",
      "complete-outer"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 212,
    "title": "Projects and Assignments (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Display project ID, project name, employee ID, and assigned role using a FULL OUTER JOIN.",
    "requirements": [
      "Display `project_id`, `project_name`, `emp_id`, and `assigned_role`.",
      "FULL OUTER JOIN Projects with Employee_Projects on project_id."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use FULL OUTER JOIN Projects p with Employee_Projects ep.",
    "expectedSql": "SELECT p.project_id, p.project_name, ep.emp_id, ep.assigned_role FROM Projects p FULL OUTER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Surfaces both unstaffed projects and any orphaned staffing records.",
    "tags": [
      "joins",
      "full-outer-join",
      "staffing"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 213,
    "title": "Unmatched Departments or Employees (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Find departments without employees, or employees without a matching department, using FULL OUTER JOIN.",
    "requirements": [
      "Display `dept_name` and `emp_name`.",
      "FULL OUTER JOIN Departments and Employees on department name.",
      "Filter for rows where `dept_id IS NULL OR emp_id IS NULL`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Filter with WHERE d.dept_id IS NULL OR e.emp_id IS NULL.",
    "expectedSql": "SELECT d.dept_name, e.emp_name FROM Departments d FULL OUTER JOIN Employees e ON d.dept_name = e.department WHERE d.dept_id IS NULL OR e.emp_id IS NULL;",
    "explanation": "Identifies symmetric differences (rows present in one table but not the other) across two relational domains.",
    "tags": [
      "joins",
      "full-outer-join",
      "symmetric-difference"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 214,
    "title": "Projects and Department Budgets (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Display project name, department name, project budget, and department budget using a FULL OUTER JOIN.",
    "requirements": [
      "Display `project_name`, `dept_name`, `p.budget AS project_budget`, and `d.budget AS dept_budget`.",
      "FULL OUTER JOIN Projects and Departments on dept_id."
    ],
    "tableName": "Projects, Departments",
    "hint": "Use FULL OUTER JOIN Projects p ON p.dept_id = d.dept_id.",
    "expectedSql": "SELECT p.project_name, d.dept_name, p.budget AS project_budget, d.budget AS dept_budget FROM Projects p FULL OUTER JOIN Departments d ON p.dept_id = d.dept_id;",
    "explanation": "Compares project budgets against overall departmental capital allocations with complete outer preservation.",
    "tags": [
      "joins",
      "full-outer-join",
      "budget"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 215,
    "title": "Employees and Reviews (Full Outer Join)",
    "topic": "SQL JOINs",
    "subtopic": "Right Outer Joins & Full Outer Joins",
    "difficulty": "Hard",
    "problemStatement": "Display employee name, salary, review year, and rating using a FULL OUTER JOIN.",
    "requirements": [
      "Display `emp_name`, `salary`, `review_year`, and `rating`.",
      "FULL OUTER JOIN Employees with Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use FULL OUTER JOIN Employees e ON e.emp_id = pr.emp_id.",
    "expectedSql": "SELECT e.emp_name, e.salary, pr.review_year, pr.rating FROM Employees e FULL OUTER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Integrates complete employee rosters and appraisal records in a single outer query.",
    "tags": [
      "joins",
      "full-outer-join",
      "reviews"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 216,
    "title": "Employee, Project, and Role (3-Table Join)",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, project name, assigned role, and weekly allocated hours by joining Employees, Employee_Projects, and Projects.",
    "requirements": [
      "Display `emp_name`, `project_name`, `assigned_role`, and `hours_allocated`.",
      "Join Employees, Employee_Projects, and Projects."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Chain two INNER JOINs on emp_id and project_id.",
    "expectedSql": "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Traverses a classic many-to-many relationship using a bridging associative junction table.",
    "tags": [
      "joins",
      "multi-table",
      "many-to-many"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 217,
    "title": "Active Project Assignments (3-Table Join)",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Find assignments on active projects. Display employee name, project name, status, and allocated hours.",
    "requirements": [
      "Display `emp_name`, `project_name`, `status`, and `hours_allocated`.",
      "Join Employees, Employee_Projects, and Projects.",
      "Filter for `status = 'Active'`."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Join the three tables and add WHERE p.status = 'Active'.",
    "expectedSql": "SELECT e.emp_name, p.project_name, p.status, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Active';",
    "explanation": "Navigates multi-table joins while constraining results to active initiatives.",
    "tags": [
      "joins",
      "multi-table",
      "status"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 218,
    "title": "Projects, Departments, and Roles (3-Table Join)",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Display project name, department name, department head, and assigned role across all active assignments.",
    "requirements": [
      "Display `project_name`, `dept_name`, `dept_head`, and `assigned_role`.",
      "Join Projects, Departments, and Employee_Projects."
    ],
    "tableName": "Projects, Departments, Employee_Projects",
    "hint": "Join Projects to Departments on dept_id and to Employee_Projects on project_id.",
    "expectedSql": "SELECT p.project_name, d.dept_name, d.dept_head, ep.assigned_role FROM Projects p INNER JOIN Departments d ON p.dept_id = d.dept_id INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Connects operational project assignments with departmental governance.",
    "tags": [
      "joins",
      "multi-table",
      "governance"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 219,
    "title": "Employee Department and Review Details",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, department name, location, review rating, and bonus.",
    "requirements": [
      "Display `emp_name`, `dept_name`, `location`, `rating`, and `bonus`.",
      "Join Employees, Departments, and Performance_Reviews."
    ],
    "tableName": "Employees, Departments, Performance_Reviews",
    "hint": "Join Employees with Departments on department name and with Performance_Reviews on emp_id.",
    "expectedSql": "SELECT e.emp_name, d.dept_name, d.location, pr.rating, pr.bonus FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Synthesizes biographical employee identity, departmental origin, and evaluation scores.",
    "tags": [
      "joins",
      "multi-table",
      "auditing"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 220,
    "title": "Employee Roles and Review Ratings",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, assigned project role, review year, and rating.",
    "requirements": [
      "Display `emp_name`, `assigned_role`, `review_year`, and `rating`.",
      "Join Employees, Employee_Projects, and Performance_Reviews on emp_id."
    ],
    "tableName": "Employees, Employee_Projects, Performance_Reviews",
    "hint": "Join Employees to Employee_Projects and Performance_Reviews on emp_id.",
    "expectedSql": "SELECT e.emp_name, ep.assigned_role, pr.review_year, pr.rating FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Links tactical project duties directly to appraisal outcomes.",
    "tags": [
      "joins",
      "multi-table",
      "performance"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 221,
    "title": "Employee, Department, and Project Name",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display employee name, department name, project name, and assigned role.",
    "requirements": [
      "Display `emp_name`, `dept_name`, `project_name`, and `assigned_role`.",
      "Join Employees, Departments, Employee_Projects, and Projects."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Chain INNER JOINs across Employees, Departments, Employee_Projects, and Projects.",
    "expectedSql": "SELECT e.emp_name, d.dept_name, p.project_name, ep.assigned_role FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Traverses four relational entities in the enterprise schema to construct an operational staffing view.",
    "tags": [
      "joins",
      "four-tables",
      "relational"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 222,
    "title": "Projects and Bonus Recipients",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display employee name, project name, review year, and bonus for employees who received a bonus.",
    "requirements": [
      "Display `emp_name`, `project_name`, `review_year`, and `bonus`.",
      "Join Employees, Employee_Projects, Projects, and Performance_Reviews.",
      "Filter for `bonus IS NOT NULL`."
    ],
    "tableName": "Employees, Employee_Projects, Projects, Performance_Reviews",
    "hint": "Join the four tables and filter for pr.bonus IS NOT NULL.",
    "expectedSql": "SELECT e.emp_name, p.project_name, pr.review_year, pr.bonus FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.bonus IS NOT NULL;",
    "explanation": "Reconciles project delivery commitments against confirmed merit bonuses.",
    "tags": [
      "joins",
      "four-tables",
      "compensation"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 223,
    "title": "All Employees and Their Projects (Multi-Table Left Join)",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display all employees and any project names they are assigned to, including unassigned employees.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `project_name`.",
      "LEFT JOIN Employees with Employee_Projects, then LEFT JOIN Projects."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Chain two LEFT JOINs.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, p.project_name FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Cascading LEFT JOIN preserves all employees, including unassigned individuals who return NULL project names.",
    "tags": [
      "joins",
      "multi-table",
      "left-join",
      "cascading"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 224,
    "title": "All Departments, Projects, and Assigned Staff",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display all departments, any associated project names, and assigned employee IDs.",
    "requirements": [
      "Display `dept_name`, `project_name`, and `emp_id`.",
      "LEFT JOIN Departments with Projects, then LEFT JOIN Employee_Projects."
    ],
    "tableName": "Departments, Projects, Employee_Projects",
    "hint": "Chain two LEFT JOINs starting from Departments.",
    "expectedSql": "SELECT d.dept_name, p.project_name, ep.emp_id FROM Departments d LEFT JOIN Projects p ON d.dept_id = p.dept_id LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id;",
    "explanation": "Preserves departments without projects, as well as projects without assigned employees.",
    "tags": [
      "joins",
      "multi-table",
      "left-join"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 225,
    "title": "High Earners on Completed Projects",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Find employees earning over 40,000 who worked on completed projects. Display name, salary, department name, and project name.",
    "requirements": [
      "Display `emp_name`, `salary`, `dept_name`, and `project_name`.",
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter for `p.status = 'Completed'` and `e.salary > 40000`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Combine 4-table join with the two filter conditions.",
    "expectedSql": "SELECT e.emp_name, e.salary, d.dept_name, p.project_name FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.status = 'Completed' AND e.salary > 40000;",
    "explanation": "Constrains a four-table relational query across both project state and individual compensation.",
    "tags": [
      "joins",
      "four-tables",
      "filtering"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 226,
    "title": "High-Hours Staff on Active Projects",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Find employees working more than 25 hours on active projects. Display name, department location, project name, and hours.",
    "requirements": [
      "Display `emp_name`, `location`, `project_name`, and `hours_allocated`.",
      "Join Employees, Departments, Employee_Projects, and Projects.",
      "Filter for `hours_allocated > 25` and `status = 'Active'`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects",
    "hint": "Join the 4 tables and filter by hours and project status.",
    "expectedSql": "SELECT e.emp_name, d.location, p.project_name, ep.hours_allocated FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id WHERE ep.hours_allocated > 25 AND p.status = 'Active';",
    "explanation": "Identifies heavy resource investments on live business priorities.",
    "tags": [
      "joins",
      "four-tables",
      "workload"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 227,
    "title": "2024 Employee Reviews Across Projects",
    "topic": "SQL JOINs",
    "subtopic": "Multi-Table Relational Joins (3 to 4 tables)",
    "difficulty": "Hard",
    "problemStatement": "Display employee name, department name, project name, and 2024 review rating.",
    "requirements": [
      "Display `emp_name`, `dept_name`, `project_name`, and `rating`.",
      "Join Employees, Departments, Employee_Projects, Projects, and Performance_Reviews.",
      "Filter for `review_year = 2024`."
    ],
    "tableName": "Employees, Departments, Employee_Projects, Projects, Performance_Reviews",
    "hint": "Join the 5 tables and filter with WHERE pr.review_year = 2024.",
    "expectedSql": "SELECT e.emp_name, d.dept_name, p.project_name, pr.rating FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_year = 2024;",
    "explanation": "Assembles a 360-degree operational profile connecting organization, initiative, and appraisal rating.",
    "tags": [
      "joins",
      "five-tables",
      "360-view"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 228,
    "title": "Pairs of Employees in the Same Department",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find all unique pairs of employees who work in the same department.",
    "requirements": [
      "Display `e1.emp_name AS employee_1`, `e2.emp_name AS employee_2`, and `department`.",
      "Self-join Employees on department where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Use a self-join with e1.emp_id < e2.emp_id to avoid duplicate and self pairs.",
    "expectedSql": "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department WHERE e1.emp_id < e2.emp_id;",
    "explanation": "e1.emp_id < e2.emp_id prevents pairing an employee with themselves and prevents mirror duplicates (A, B and B, A).",
    "tags": [
      "joins",
      "self-join",
      "pairing"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 229,
    "title": "Pairs of Colleagues in the Same City",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find all unique pairs of employees who are located in the same city.",
    "requirements": [
      "Display `e1.emp_name AS colleague_1`, `e2.emp_name AS colleague_2`, and `city`.",
      "Self-join Employees on city where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Self-join Employees on e1.city = e2.city AND e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS colleague_1, e2.emp_name AS colleague_2, e1.city FROM Employees e1 INNER JOIN Employees e2 ON e1.city = e2.city WHERE e1.emp_id < e2.emp_id;",
    "explanation": "Groups colleagues stationed in identical office hubs using self-join pairs.",
    "tags": [
      "joins",
      "self-join",
      "city"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 230,
    "title": "Colleagues with Salary Gap of 20,000+",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "In each department, find pairs of employees where one earns at least 20,000 more than the other.",
    "requirements": [
      "Display `higher_earner`, `high_sal`, `lower_earner`, `low_sal`, and `department`.",
      "Self-join Employees on department where `e1.salary >= e2.salary + 20000`."
    ],
    "tableName": "Employees",
    "hint": "Self-join on department and filter for e1.salary >= e2.salary + 20000.",
    "expectedSql": "SELECT e1.emp_name AS higher_earner, e1.salary AS high_sal, e2.emp_name AS lower_earner, e2.salary AS low_sal, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department WHERE e1.salary >= e2.salary + 20000;",
    "explanation": "Performs intra-departmental compensation comparisons between pairs of colleagues.",
    "tags": [
      "joins",
      "self-join",
      "salary-comparison"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 231,
    "title": "Employees Who Joined in the Same Year",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find unique pairs of employees who joined the company in the exact same year.",
    "requirements": [
      "Display `joiner_1`, `joiner_2`, and `joining_year`.",
      "Self-join Employees on joining_year where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Self-join on joining_year with e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS joiner_1, e2.emp_name AS joiner_2, e1.joining_year FROM Employees e1 INNER JOIN Employees e2 ON e1.joining_year = e2.joining_year WHERE e1.emp_id < e2.emp_id;",
    "explanation": "Detects hiring cohort cohorts through temporal equality self-joining.",
    "tags": [
      "joins",
      "self-join",
      "cohorts"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 232,
    "title": "Projects in the Same Department",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find unique pairs of projects that belong to the same department.",
    "requirements": [
      "Display `project_1`, `project_2`, and `dept_id`.",
      "Self-join Projects on dept_id where `p1.project_id < p2.project_id`."
    ],
    "tableName": "Projects",
    "hint": "Self-join Projects on dept_id with p1.project_id < p2.project_id.",
    "expectedSql": "SELECT p1.project_name AS project_1, p2.project_name AS project_2, p1.dept_id FROM Projects p1 INNER JOIN Projects p2 ON p1.dept_id = p2.dept_id WHERE p1.project_id < p2.project_id;",
    "explanation": "Surfaces intra-departmental project portfolios sharing the same departmental budget origin.",
    "tags": [
      "joins",
      "self-join",
      "projects"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 233,
    "title": "Consecutive Year Performance Ratings",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find employees who had reviews in consecutive years, showing their rating in each year.",
    "requirements": [
      "Display `emp_id`, `prev_year`, `prev_rating`, `next_year`, and `next_rating`.",
      "Self-join Performance_Reviews where `r1.emp_id = r2.emp_id` and `r1.review_year = r2.review_year - 1`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Self-join Performance_Reviews on emp_id and consecutive years.",
    "expectedSql": "SELECT r1.emp_id, r1.review_year AS prev_year, r1.rating AS prev_rating, r2.review_year AS next_year, r2.rating AS next_rating FROM Performance_Reviews r1 INNER JOIN Performance_Reviews r2 ON r1.emp_id = r2.emp_id WHERE r1.review_year = r2.review_year - 1;",
    "explanation": "Tracks year-over-year rating trends by matching an appraisal record with its consecutive-year successor.",
    "tags": [
      "joins",
      "self-join",
      "progression",
      "temporal"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 234,
    "title": "Employees with the Same Years of Experience",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Medium",
    "problemStatement": "Find unique pairs of employees who have the exact same number of years of experience.",
    "requirements": [
      "Display `peer_1`, `peer_2`, and `experience`.",
      "Self-join Employees on experience where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Self-join on experience with e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS peer_1, e2.emp_name AS peer_2, e1.experience FROM Employees e1 INNER JOIN Employees e2 ON e1.experience = e2.experience WHERE e1.emp_id < e2.emp_id;",
    "explanation": "Finds peer experience equivalents across the organization.",
    "tags": [
      "joins",
      "self-join",
      "tenure"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 235,
    "title": "Teammates on the Same Project",
    "topic": "SQL JOINs",
    "subtopic": "Self Joins & Hierarchical Comparisons",
    "difficulty": "Hard",
    "problemStatement": "Find unique pairs of employees who are assigned to the same project.",
    "requirements": [
      "Display `project_id`, `team_member_1`, and `team_member_2`.",
      "Self-join Employee_Projects on project_id where `ep1.emp_id < ep2.emp_id`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Self-join Employee_Projects on project_id with ep1.emp_id < ep2.emp_id.",
    "expectedSql": "SELECT ep1.project_id, ep1.emp_id AS team_member_1, ep2.emp_id AS team_member_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id WHERE ep1.emp_id < ep2.emp_id;",
    "explanation": "Generates teammate pairs sharing assignments on a common corporate initiative.",
    "tags": [
      "joins",
      "self-join",
      "collaboration"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 236,
    "title": "All Combinations of Departments and Project Statuses",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Generate all possible combinations of distinct department names and distinct project statuses.",
    "requirements": [
      "Display `dept_name` and `project_status`.",
      "CROSS JOIN distinct department names with distinct project statuses."
    ],
    "tableName": "Departments, Projects",
    "hint": "Use CROSS JOIN between subqueries selecting DISTINCT values.",
    "expectedSql": "SELECT d.dept_name, s.status AS project_status FROM (SELECT DISTINCT dept_name FROM Departments) d CROSS JOIN (SELECT DISTINCT status FROM Projects) s;",
    "explanation": "Cartesian product generates every possible combination of departments and project operational states.",
    "tags": [
      "joins",
      "cross-join",
      "cartesian"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 237,
    "title": "All Combinations of Cities and Departments",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Generate all possible combinations of distinct employee cities and distinct department names.",
    "requirements": [
      "Display `city` and `dept_name`.",
      "CROSS JOIN distinct cities with distinct departments."
    ],
    "tableName": "Employees, Departments",
    "hint": "Use CROSS JOIN between distinct cities and distinct department names.",
    "expectedSql": "SELECT c.city, d.dept_name FROM (SELECT DISTINCT city FROM Employees) c CROSS JOIN (SELECT DISTINCT dept_name FROM Departments) d;",
    "explanation": "Creates an expansion matrix to audit departmental presence across all office locations.",
    "tags": [
      "joins",
      "cross-join",
      "matrix"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 238,
    "title": "Employee Salary Compared to Company Average",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Hard",
    "problemStatement": "Display each employee's name, salary, the company average salary, and the difference (salary minus company average).",
    "requirements": [
      "Display `emp_name`, `salary`, `avg_sal`, and `(e.salary - a.avg_sal) AS salary_diff`.",
      "CROSS JOIN Employees with a subquery calculating average salary rounded to 2 decimals."
    ],
    "tableName": "Employees",
    "hint": "CROSS JOIN Employees with (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees).",
    "expectedSql": "SELECT e.emp_name, e.salary, a.avg_sal, (e.salary - a.avg_sal) AS salary_diff FROM Employees e CROSS JOIN (SELECT ROUND(AVG(salary), 2) AS avg_sal FROM Employees) a;",
    "explanation": "A single-row subquery CROSS JOIN appends overall benchmark statistics to every individual row without GROUP BY restrictions.",
    "tags": [
      "joins",
      "cross-join",
      "benchmark",
      "scalars"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 239,
    "title": "Project Budget as Percentage of Total Budget",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Hard",
    "problemStatement": "Display each project's name, budget, and its percentage of the total company project budget (rounded to 2 decimals).",
    "requirements": [
      "Display `project_name`, `budget`, and `ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct`.",
      "CROSS JOIN Projects with a subquery calculating total project budget."
    ],
    "tableName": "Projects",
    "hint": "CROSS JOIN Projects with (SELECT SUM(budget) AS total_budget FROM Projects).",
    "expectedSql": "SELECT p.project_name, p.budget, ROUND((p.budget * 100.0) / t.total_budget, 2) AS budget_pct FROM Projects p CROSS JOIN (SELECT SUM(budget) AS total_budget FROM Projects) t;",
    "explanation": "Allows calculating percentage share of a whole by appending aggregate portfolio capital across all records.",
    "tags": [
      "joins",
      "cross-join",
      "percentage",
      "ratios"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 240,
    "title": "All Department and Rating Combinations",
    "topic": "SQL JOINs",
    "subtopic": "Cross Joins & Cartesian Combinations",
    "difficulty": "Medium",
    "problemStatement": "Generate all possible combinations of distinct department names and distinct performance review ratings.",
    "requirements": [
      "Display `dept_name` and `rating_slot`.",
      "CROSS JOIN distinct department names with distinct ratings."
    ],
    "tableName": "Departments, Performance_Reviews",
    "hint": "Use CROSS JOIN between distinct departments and distinct ratings.",
    "expectedSql": "SELECT d.dept_name, r.rating_slot FROM (SELECT DISTINCT dept_name FROM Departments) d CROSS JOIN (SELECT DISTINCT rating AS rating_slot FROM Performance_Reviews) r;",
    "explanation": "Generates template matrices to report rating distributions across all corporate divisions.",
    "tags": [
      "joins",
      "cross-join",
      "ratings"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 241,
    "title": "Department Headcount, Payroll, and Budget",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "For each department, display the department name, employee count, total monthly payroll, and department budget.",
    "requirements": [
      "Display `dept_name`, `emp_count`, `total_payroll`, and `budget`.",
      "Join Departments with Employees.",
      "Group by `dept_name, budget`."
    ],
    "tableName": "Departments, Employees",
    "hint": "INNER JOIN Departments and Employees, then GROUP BY dept_name, budget.",
    "expectedSql": "SELECT d.dept_name, COUNT(e.emp_id) AS emp_count, SUM(e.salary) AS total_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget;",
    "explanation": "Aggregates employee counts and salary totals while reporting departmental operating budgets.",
    "tags": [
      "joins",
      "aggregates",
      "group-by",
      "payroll"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 242,
    "title": "Project Staffing and Total Weekly Hours",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "For each project, display project name, status, assigned staff count, and total weekly hours.",
    "requirements": [
      "Display `project_name`, `status`, `assigned_staff`, and `total_weekly_hours`.",
      "Join Projects with Employee_Projects.",
      "Group by `project_id, project_name, status`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "INNER JOIN Projects with Employee_Projects and GROUP BY project attributes.",
    "expectedSql": "SELECT p.project_name, p.status, COUNT(ep.emp_id) AS assigned_staff, SUM(ep.hours_allocated) AS total_weekly_hours FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status;",
    "explanation": "Aggregates project staff counts and weekly labor hours by project.",
    "tags": [
      "joins",
      "aggregates",
      "workload"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 243,
    "title": "Project Count and Total Budget per Department",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "For each department, display the department name, count of projects, and total project budget.",
    "requirements": [
      "Display `dept_name`, `projects_count`, and `total_project_budget`.",
      "Join Departments with Projects.",
      "Group by `dept_name`."
    ],
    "tableName": "Departments, Projects",
    "hint": "INNER JOIN Departments and Projects on dept_id, then GROUP BY dept_name.",
    "expectedSql": "SELECT d.dept_name, COUNT(p.project_id) AS projects_count, SUM(p.budget) AS total_project_budget FROM Departments d INNER JOIN Projects p ON d.dept_id = p.dept_id GROUP BY d.dept_name;",
    "explanation": "Summarizes departmental project portfolios and total budget commitments.",
    "tags": [
      "joins",
      "aggregates",
      "budget"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 244,
    "title": "Employees with Over 30 Total Project Hours",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Find employees whose total weekly project hours exceed 30. Display employee ID, name, department, and total hours.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `total_weekly_hours`.",
      "Join Employees with Employee_Projects.",
      "Group by employee and filter with `HAVING SUM(ep.hours_allocated) > 30`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "GROUP BY e.emp_id, e.emp_name, e.department HAVING SUM(ep.hours_allocated) > 30.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department, SUM(ep.hours_allocated) AS total_weekly_hours FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name, e.department HAVING SUM(ep.hours_allocated) > 30;",
    "explanation": "Aggregates across junction table assignments and applies HAVING to highlight overloaded team members.",
    "tags": [
      "joins",
      "having",
      "workload"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 245,
    "title": "Departments Where Annual Payroll Exceeds Half the Budget",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Find departments where total annual payroll (monthly payroll * 12) exceeds 50% of the department's annual budget.",
    "requirements": [
      "Display `dept_name`, `annual_payroll`, and `annual_budget`.",
      "Join Departments with Employees.",
      "Group by department and filter with `HAVING (SUM(e.salary) * 12) > (d.budget * 0.5)`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use HAVING to compare annual payroll to 50% of budget.",
    "expectedSql": "SELECT d.dept_name, (SUM(e.salary) * 12) AS annual_payroll, d.budget AS annual_budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING (SUM(e.salary) * 12) > (d.budget * 0.5);",
    "explanation": "Evaluates whether total annual payroll consumes more than 50% of the departmental operating budget.",
    "tags": [
      "joins",
      "having",
      "budget-burn",
      "finance"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 246,
    "title": "Average Team Experience and Salary per Project",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "For each project, calculate the average experience (rounded to 1 decimal) and average salary (rounded to 2 decimals) of assigned team members.",
    "requirements": [
      "Display `project_name`, `avg_team_exp`, and `avg_team_salary`.",
      "Join Projects, Employee_Projects, and Employees.",
      "Group by `project_id, project_name`."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "Join the three tables and apply ROUND(AVG(...)) grouped by project.",
    "expectedSql": "SELECT p.project_name, ROUND(AVG(e.experience), 1) AS avg_team_exp, ROUND(AVG(e.salary), 2) AS avg_team_salary FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id INNER JOIN Employees e ON ep.emp_id = e.emp_id GROUP BY p.project_id, p.project_name;",
    "explanation": "Profiles project team seniority and compensation through multi-table joins.",
    "tags": [
      "joins",
      "aggregates",
      "team-composition"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 247,
    "title": "Projects and Reviews Counts per Employee",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "For each employee, count how many distinct projects they are assigned to and how many distinct reviews they have received.",
    "requirements": [
      "Display `emp_name`, `projects_assigned`, and `reviews_received`.",
      "LEFT JOIN Employees with Employee_Projects and Performance_Reviews.",
      "Group by `emp_id, emp_name`."
    ],
    "tableName": "Employees, Employee_Projects, Performance_Reviews",
    "hint": "Use COUNT(DISTINCT ep.project_id) and COUNT(DISTINCT pr.review_id).",
    "expectedSql": "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS projects_assigned, COUNT(DISTINCT pr.review_id) AS reviews_received FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id LEFT JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.emp_id, e.emp_name;",
    "explanation": "COUNT(DISTINCT) is essential when joining multiple one-to-many child tables to prevent inflated counts.",
    "tags": [
      "joins",
      "count-distinct",
      "fan-out-trap"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 248,
    "title": "Top 3 Employees by Weekly Project Hours",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "Find the 3 employees with the highest total weekly project hours. Display employee name, department, and total hours.",
    "requirements": [
      "Display `emp_name`, `department`, and `total_hours`.",
      "Join Employees with Employee_Projects.",
      "Group by employee, sort by total hours descending, and limit to 3."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "GROUP BY employee, ORDER BY total_hours DESC LIMIT 3.",
    "expectedSql": "SELECT e.emp_name, e.department, SUM(ep.hours_allocated) AS total_hours FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name, e.department ORDER BY total_hours DESC LIMIT 3;",
    "explanation": "Highlights top contributors by aggregated project commitments across the company.",
    "tags": [
      "joins",
      "order-by",
      "limit",
      "top-3"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3
  },
  {
    "id": 249,
    "title": "Total Reviews and Bonuses by Department",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Medium",
    "problemStatement": "For each department, calculate the total number of reviews received and total bonus amount awarded to its employees.",
    "requirements": [
      "Display `department`, `reviewed_count`, and `total_department_bonuses`.",
      "Join Employees with Performance_Reviews on emp_id.",
      "Group by `department`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN Employees and Performance_Reviews, then GROUP BY department.",
    "expectedSql": "SELECT e.department, COUNT(pr.review_id) AS reviewed_count, SUM(pr.bonus) AS total_department_bonuses FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id GROUP BY e.department;",
    "explanation": "Aggregates performance bonuses paid to employees by department.",
    "tags": [
      "joins",
      "bonus",
      "department-aggregates"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 250,
    "title": "Projects with Average Team Rating of 4.0+",
    "topic": "SQL JOINs",
    "subtopic": "Aggregations & Analytical Filtering over Joined Relations",
    "difficulty": "Hard",
    "problemStatement": "Find projects where the average performance rating of assigned team members is at least 4.0. Display project name, staff count, and average rating rounded to 2 decimals.",
    "requirements": [
      "Display `project_name`, `staff_count`, and `avg_team_rating`.",
      "Join Projects, Employee_Projects, and Performance_Reviews.",
      "Group by project and filter with `HAVING AVG(pr.rating) >= 4.0`."
    ],
    "tableName": "Projects, Employee_Projects, Performance_Reviews",
    "hint": "Join the three tables, group by project, and apply HAVING AVG(pr.rating) >= 4.0.",
    "expectedSql": "SELECT p.project_name, COUNT(DISTINCT ep.emp_id) AS staff_count, ROUND(AVG(pr.rating), 2) AS avg_team_rating FROM Projects p INNER JOIN Employee_Projects ep ON p.project_id = ep.project_id INNER JOIN Performance_Reviews pr ON ep.emp_id = pr.emp_id GROUP BY p.project_id, p.project_name HAVING AVG(pr.rating) >= 4.0;",
    "explanation": "Assesses project staffing quality by filtering for initiatives where assigned team members hold elite appraisal scores.",
    "tags": [
      "joins",
      "having",
      "team-quality"
    ],
    "estimatedTimeMinutes": 4
  }
];
