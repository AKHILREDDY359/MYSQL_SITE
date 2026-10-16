export const TOPIC3_QUESTIONS = [
  {
    "id": 99,
    "title": "Sort Departments by Location",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Beginner",
    "problemStatement": "Display all departments ordered alphabetically by location.",
    "requirements": [
      "Select `dept_name`, `location`, and `budget`.",
      "Order rows by `location` in ascending order."
    ],
    "tableName": "Departments",
    "hint": "Use ORDER BY location ASC.",
    "expectedSql": "SELECT dept_name, location, budget FROM Departments ORDER BY location ASC;",
    "explanation": "ASC sorts textual data in lexicographical alphabetical sequence from A to Z.",
    "tags": [
      "order-by",
      "sorting",
      "asc"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2
  },
  {
    "id": 100,
    "title": "Rank Projects by Budget",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Beginner",
    "problemStatement": "Display all projects ordered from highest budget to lowest.",
    "requirements": [
      "Select `project_id`, `project_name`, and `budget`.",
      "Order rows by `budget` descending."
    ],
    "tableName": "Projects",
    "hint": "Use ORDER BY budget DESC.",
    "expectedSql": "SELECT project_id, project_name, budget FROM Projects ORDER BY budget DESC;",
    "explanation": "DESC sorts numeric columns in descending order, placing the largest numbers at the top.",
    "tags": [
      "order-by",
      "sorting",
      "desc"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2
  },
  {
    "id": 101,
    "title": "Rank Bonuses from Highest to Lowest",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Easy",
    "problemStatement": "Display all performance reviews with a bonus, ordered from highest bonus to lowest.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Filter out NULL bonuses.",
      "Order by `bonus` descending."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Filter with bonus IS NOT NULL and sort with ORDER BY bonus DESC.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews WHERE bonus IS NOT NULL ORDER BY bonus DESC;",
    "explanation": "Filters out unassigned bonuses first, then orders the awarded compensation packages from highest to lowest.",
    "tags": [
      "order-by",
      "sorting",
      "null-handling"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2
  },
  {
    "id": 102,
    "title": "Sort Project Assignments by Hours",
    "topic": "Sorting & Limiting",
    "subtopic": "Single-Column Sorting",
    "difficulty": "Easy",
    "problemStatement": "Display all employee project assignments ordered from fewest hours to most hours.",
    "requirements": [
      "Select `emp_id`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Order by `hours_allocated` in ascending order."
    ],
    "tableName": "Employee_Projects",
    "hint": "Use ORDER BY hours_allocated ASC.",
    "expectedSql": "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects ORDER BY hours_allocated ASC;",
    "explanation": "Ascending sort surfaces part-time or low-commitment assignments before full-time allocations.",
    "tags": [
      "order-by",
      "sorting",
      "asc"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2
  },
  {
    "id": 103,
    "title": "Sort by Department and Salary",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Easy",
    "problemStatement": "Display employees sorted alphabetically by department, and by salary from highest to lowest within each department.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary`.",
      "Order by `department` ascending, then `salary` descending."
    ],
    "tableName": "Employees",
    "hint": "Specify multiple sort columns separated by commas.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees ORDER BY department ASC, salary DESC;",
    "explanation": "Multi-column sorting evaluates criteria left-to-right, grouping departments together and ranking internal compensations within each division.",
    "tags": [
      "order-by",
      "multi-column",
      "sorting"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3
  },
  {
    "id": 104,
    "title": "Sort Reviews by Rating and Year",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Medium",
    "problemStatement": "Display performance reviews sorted by rating from highest to lowest, then by review year from earliest to latest.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `review_year`.",
      "Order by `rating` descending, then `review_year` ascending."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Sort by rating DESC, review_year ASC.",
    "expectedSql": "SELECT review_id, emp_id, rating, review_year FROM Performance_Reviews ORDER BY rating DESC, review_year ASC;",
    "explanation": "Allows appraisal evaluators to view top performers first, organized chronologically from earliest review to latest.",
    "tags": [
      "order-by",
      "multi-column",
      "hierarchical"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3
  },
  {
    "id": 105,
    "title": "Sort Projects by Status and Start Date",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Medium",
    "problemStatement": "Display projects sorted alphabetically by status, and by start date from newest to oldest within each status.",
    "requirements": [
      "Select `project_id`, `project_name`, `status`, and `start_date`.",
      "Order by `status` ascending, then `start_date` descending."
    ],
    "tableName": "Projects",
    "hint": "Use ORDER BY status ASC, start_date DESC.",
    "expectedSql": "SELECT project_id, project_name, status, start_date FROM Projects ORDER BY status ASC, start_date DESC;",
    "explanation": "Clusters projects having the same operational status while displaying recently launched initiatives at the head of each cluster.",
    "tags": [
      "order-by",
      "multi-column",
      "date-sorting"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3
  },
  {
    "id": 106,
    "title": "Sort by City, Experience, and Name",
    "topic": "Sorting & Limiting",
    "subtopic": "Multi-Column Hierarchical Ordering",
    "difficulty": "Hard",
    "problemStatement": "Display employees sorted by city alphabetically, then by experience descending, and finally by name alphabetically.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `city`, and `experience`.",
      "Order by `city` ASC, `experience` DESC, `emp_name` ASC."
    ],
    "tableName": "Employees",
    "hint": "List all three sort keys in the ORDER BY clause.",
    "expectedSql": "SELECT emp_id, emp_name, city, experience FROM Employees ORDER BY city ASC, experience DESC, emp_name ASC;",
    "explanation": "A three-level sort completely eliminates arbitrary row ordering when dealing with identical cities and experience levels.",
    "tags": [
      "order-by",
      "multi-column",
      "tie-breaker"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 4
  },
  {
    "id": 107,
    "title": "Top 3 Highest-Budget Projects",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Easy",
    "problemStatement": "Find the 3 projects with the highest budgets.",
    "requirements": [
      "Select `project_id`, `project_name`, and `budget`.",
      "Order by `budget` descending.",
      "Limit output to 3 rows."
    ],
    "tableName": "Projects",
    "hint": "Sort descending by budget and use LIMIT 3.",
    "expectedSql": "SELECT project_id, project_name, budget FROM Projects ORDER BY budget DESC LIMIT 3;",
    "explanation": "LIMIT restricts the size of the final result set, which is combined with ORDER BY for Top-N analysis.",
    "tags": [
      "limit",
      "order-by",
      "top-n"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2
  },
  {
    "id": 108,
    "title": "Employees Ranked 6 to 10 by Salary",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Medium",
    "problemStatement": "Display employees ranked 6th through 10th by salary (page 2 of top earners).",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary`.",
      "Order by `salary` descending.",
      "Skip the top 5 earners and return the next 5."
    ],
    "tableName": "Employees",
    "hint": "Use LIMIT 5 OFFSET 5 after sorting by salary DESC.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 5 OFFSET 5;",
    "explanation": "OFFSET skips a specified number of leading records before returning rows, which powers web UI pagination.",
    "tags": [
      "limit",
      "offset",
      "pagination"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3
  },
  {
    "id": 109,
    "title": "Projects 4 Through 6 by ID",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Easy",
    "problemStatement": "Display projects ordered by project ID, skipping the first 3 and returning the next 3.",
    "requirements": [
      "Select `project_id`, `project_name`, and `status`.",
      "Order by `project_id` ascending.",
      "Skip 3 rows and limit to 3 rows."
    ],
    "tableName": "Projects",
    "hint": "Use LIMIT 3 OFFSET 3.",
    "expectedSql": "SELECT project_id, project_name, status FROM Projects ORDER BY project_id ASC LIMIT 3 OFFSET 3;",
    "explanation": "Standard deterministic pagination requires ordering by a unique key such as project_id.",
    "tags": [
      "limit",
      "offset",
      "pagination"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 2
  },
  {
    "id": 110,
    "title": "Bottom 2 Assignments by Hours",
    "topic": "Sorting & Limiting",
    "subtopic": "Pagination & Offset-based Retrieval",
    "difficulty": "Medium",
    "problemStatement": "Find the 2 project assignments with the lowest weekly hours, breaking ties by employee ID.",
    "requirements": [
      "Select `emp_id`, `project_id`, `assigned_role`, and `hours_allocated`.",
      "Order by `hours_allocated` ascending, then `emp_id` ascending.",
      "Limit output to 2 rows."
    ],
    "tableName": "Employee_Projects",
    "hint": "Sort by hours_allocated ASC, emp_id ASC and limit to 2.",
    "expectedSql": "SELECT emp_id, project_id, assigned_role, hours_allocated FROM Employee_Projects ORDER BY hours_allocated ASC, emp_id ASC LIMIT 2;",
    "explanation": "Bottom-N analysis sorts in ascending order with a strict LIMIT threshold and deterministic secondary key.",
    "tags": [
      "limit",
      "bottom-n",
      "tie-breaker"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3
  },
  {
    "id": 111,
    "title": "Sort Bonuses Highest First with Nulls Last",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Hard",
    "problemStatement": "Display performance reviews sorted by bonus from highest to lowest, placing reviews with no bonus (NULL) at the very end.",
    "requirements": [
      "Select `review_id`, `emp_id`, `rating`, and `bonus`.",
      "Order non-null bonuses from highest to lowest.",
      "Place NULL bonus values at the end of the results."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use a CASE expression in ORDER BY to rank NULL values after numbers.",
    "expectedSql": "SELECT review_id, emp_id, rating, bonus FROM Performance_Reviews ORDER BY CASE WHEN bonus IS NULL THEN 1 ELSE 0 END, bonus DESC;",
    "explanation": "In SQLite/MySQL, ordering by a boolean CASE expression before the target column explicitly controls NULL placement.",
    "tags": [
      "order-by",
      "null-precedence",
      "case"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 4
  },
  {
    "id": 112,
    "title": "Sort Employees by Annual Salary",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Medium",
    "problemStatement": "Display each employee's monthly salary and annual salary (salary * 12), ordered from highest annual salary to lowest.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `salary`, and `(salary * 12) AS annual_salary`.",
      "Order by annual salary descending."
    ],
    "tableName": "Employees",
    "hint": "Calculate annual salary and order by the calculated expression DESC.",
    "expectedSql": "SELECT emp_id, emp_name, salary, (salary * 12) AS annual_salary FROM Employees ORDER BY (salary * 12) DESC;",
    "explanation": "SQL allows expressions in the ORDER BY clause, computing sorts dynamically on runtime projections.",
    "tags": [
      "order-by",
      "calculated-column",
      "arithmetic"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3
  },
  {
    "id": 113,
    "title": "Top 5 Employees by Pay per Year of Experience",
    "topic": "Sorting & Limiting",
    "subtopic": "NULL Precedence & Calculated Expressions in ORDER BY",
    "difficulty": "Hard",
    "problemStatement": "Calculate pay per year of experience (salary / experience rounded to 2 decimals) for employees with experience > 0. Return the top 5.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `salary`, `experience`, and `ROUND(salary / experience, 2) AS pay_per_year_exp`.",
      "Filter for `experience > 0`.",
      "Order by `(salary / experience)` descending.",
      "Limit output to 5 rows."
    ],
    "tableName": "Employees",
    "hint": "Divide salary by experience, round to 2 decimal places, and limit to 5.",
    "expectedSql": "SELECT emp_id, emp_name, salary, experience, ROUND(salary / experience, 2) AS pay_per_year_exp FROM Employees WHERE experience > 0 ORDER BY (salary / experience) DESC LIMIT 5;",
    "explanation": "Computes pay yield per unit of experience and retrieves the 5 steepest compensation-to-tenure trajectories.",
    "tags": [
      "order-by",
      "ratio",
      "calculated-column",
      "limit"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 4
  }
];
