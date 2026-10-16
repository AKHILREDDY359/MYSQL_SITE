export const TOPIC9_QUESTIONS = [
  {
    "id": 301,
    "interviewQuestionNumber": 1,
    "title": "Filter Employees Earning Over 50k",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Beginner",
    "problemStatement": "Find all employees who earn more than 50,000.",
    "requirements": [
      "Select `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter for `salary > 50000`."
    ],
    "tableName": "Employees",
    "hint": "Use a simple WHERE condition on salary.",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > 50000;",
    "explanation": "Standard numeric comparison using the > comparison operator filters records whose compensation exceeds the threshold.",
    "tags": [
      "interview",
      "filtering",
      "where",
      "comparison"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 302,
    "interviewQuestionNumber": 2,
    "title": "Employees Earning Between 30,000 and 60,000",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Beginner",
    "problemStatement": "Find employees whose salary is between 30,000 and 60,000 (inclusive).",
    "requirements": [
      "Select `emp_name` and `salary`.",
      "Filter for salary between 30,000 and 60,000."
    ],
    "tableName": "Employees",
    "hint": "Use the BETWEEN operator.",
    "expectedSql": "SELECT emp_name, salary FROM Employees WHERE salary BETWEEN 30000 AND 60000;",
    "explanation": "BETWEEN is inclusive in SQL, returning all records where salary >= 30000 AND salary <= 60000.",
    "tags": [
      "interview",
      "range",
      "between",
      "filtering"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 303,
    "interviewQuestionNumber": 3,
    "title": "IT Employees Earning Over 50,000",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find all employees in the 'IT' department who earn more than 50,000. Display all columns.",
    "requirements": [
      "Select all columns from Employees.",
      "Filter for `department = 'IT'` and `salary > 50000`."
    ],
    "tableName": "Employees",
    "hint": "Combine the two conditions with AND.",
    "expectedSql": "SELECT * FROM Employees WHERE department = 'IT' AND salary > 50000;",
    "explanation": "The AND operator requires both predicates to evaluate to TRUE for a row to be included.",
    "tags": [
      "interview",
      "and",
      "logical-operators",
      "filtering"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 304,
    "interviewQuestionNumber": 4,
    "title": "Experienced Employees in Hyderabad or Chennai",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find employees located in Hyderabad or Chennai with at least 3 years of experience. Display all columns.",
    "requirements": [
      "Select all columns from Employees.",
      "City must be 'Hyderabad' or 'Chennai'.",
      "Experience must be 3 or greater."
    ],
    "tableName": "Employees",
    "hint": "Use IN ('Hyderabad', 'Chennai') AND experience >= 3.",
    "expectedSql": "SELECT * FROM Employees WHERE city IN ('Hyderabad', 'Chennai') AND experience >= 3;",
    "explanation": "Combining the IN set operator with AND allows concise expression of multiple allowed city locations alongside an experience threshold.",
    "tags": [
      "interview",
      "in",
      "filtering",
      "experience"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 305,
    "interviewQuestionNumber": 5,
    "title": "Employees Starting or Ending with 'A'",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 1 — Filtering and Conditions",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose name starts with 'A' or ends with 'a'.",
    "requirements": [
      "Select `emp_id` and `emp_name`.",
      "Filter for name starting with 'A' or ending with 'a'."
    ],
    "tableName": "Employees",
    "hint": "Use LIKE 'A%' OR LIKE '%a'.",
    "expectedSql": "SELECT emp_id, emp_name FROM Employees WHERE emp_name LIKE 'A%' OR emp_name LIKE '%a';",
    "explanation": "The % wildcard represents zero, one, or multiple characters. 'A%' checks prefix while '%a' checks suffix.",
    "tags": [
      "interview",
      "pattern-matching",
      "like",
      "wildcards"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 306,
    "interviewQuestionNumber": 6,
    "title": "Total Number of Employees",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Beginner",
    "problemStatement": "Find the total headcount of employees in the company.",
    "requirements": [
      "Count all rows aliased as `total_employees`."
    ],
    "tableName": "Employees",
    "hint": "Use COUNT(*) from Employees.",
    "expectedSql": "SELECT COUNT(*) AS total_employees FROM Employees;",
    "explanation": "COUNT(*) tallies the total number of rows matching the query, including rows with NULL values.",
    "tags": [
      "interview",
      "count",
      "aggregates"
    ],
    "estimatedTimeMinutes": 2
  },
  {
    "id": 307,
    "interviewQuestionNumber": 7,
    "title": "Average Salary by Department Ranked",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Calculate the average salary for each department, ordered from highest to lowest.",
    "requirements": [
      "Display `department` and `AVG(salary) AS avg_salary`.",
      "Group by `department`.",
      "Order by `avg_salary` descending."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY department and ORDER BY avg_salary DESC.",
    "expectedSql": "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department ORDER BY avg_salary DESC;",
    "explanation": "GROUP BY partitions rows by department, AVG computes the mean salary per department, and ORDER BY DESC sorts highest to lowest.",
    "tags": [
      "interview",
      "groupby",
      "avg",
      "order-by"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 308,
    "interviewQuestionNumber": 8,
    "title": "Find Departments with More Than 3 Staff",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Find departments that have strictly more than 3 employees.",
    "requirements": [
      "Display `department` and `COUNT(*) AS emp_count`.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) > 3`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY with HAVING COUNT(*) > 3.",
    "expectedSql": "SELECT department, COUNT(*) AS emp_count FROM Employees GROUP BY department HAVING COUNT(*) > 3;",
    "explanation": "HAVING filters groups post-aggregation, unlike WHERE which filters individual rows prior to grouping.",
    "tags": [
      "interview",
      "having",
      "groupby",
      "count"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 309,
    "interviewQuestionNumber": 9,
    "title": "Company Salary Extremes and Difference",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Find the highest salary, lowest salary, and the difference between them across the company.",
    "requirements": [
      "Calculate `MAX(salary) AS max_salary`.",
      "Calculate `MIN(salary) AS min_salary`.",
      "Calculate `MAX(salary) - MIN(salary) AS salary_difference`."
    ],
    "tableName": "Employees",
    "hint": "Use MAX(salary) and MIN(salary) in your SELECT list.",
    "expectedSql": "SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary, MAX(salary) - MIN(salary) AS salary_difference FROM Employees;",
    "explanation": "Aggregate functions can be combined in mathematical arithmetic expressions to compute statistical ranges.",
    "tags": [
      "interview",
      "min",
      "max",
      "arithmetic"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 310,
    "interviewQuestionNumber": 10,
    "title": "Total Payroll Spend by Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Easy",
    "problemStatement": "Calculate the total monthly salary spend for each department.",
    "requirements": [
      "Display `department` and `SUM(salary) AS total_salary_expense`.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(salary) grouped by department.",
    "expectedSql": "SELECT department, SUM(salary) AS total_salary_expense FROM Employees GROUP BY department;",
    "explanation": "SUM(salary) aggregates total compensation outlay within each partitioned department group.",
    "tags": [
      "interview",
      "sum",
      "groupby",
      "payroll"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 311,
    "interviewQuestionNumber": 11,
    "title": "Cities with Average Salary Over 45,000",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Medium",
    "problemStatement": "Find cities where the average employee salary is greater than 45,000.",
    "requirements": [
      "Display `city` and `AVG(salary) AS avg_salary`.",
      "Group by `city`.",
      "Filter groups having `AVG(salary) > 45000`."
    ],
    "tableName": "Employees",
    "hint": "Use GROUP BY city HAVING AVG(salary) > 45000.",
    "expectedSql": "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city HAVING AVG(salary) > 45000;",
    "explanation": "The HAVING clause applies group-level filters on the calculated mean salary per city.",
    "tags": [
      "interview",
      "city",
      "avg",
      "having"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 312,
    "interviewQuestionNumber": 12,
    "title": "Department Salary Statistics",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 2 — Aggregates and Grouping",
    "difficulty": "Medium",
    "problemStatement": "For each department, calculate employee count, average salary, maximum salary, and minimum salary.",
    "requirements": [
      "Display `department`, `employee_count`, `avg_salary`, `max_salary`, and `min_salary`.",
      "Group by `department`."
    ],
    "tableName": "Employees",
    "hint": "Use COUNT, AVG, MAX, and MIN grouped by department.",
    "expectedSql": "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary FROM Employees GROUP BY department;",
    "explanation": "Multi-aggregate grouping statements provide a complete statistical profile of departmental compensation.",
    "tags": [
      "interview",
      "aggregates",
      "statistics",
      "groupby"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 313,
    "interviewQuestionNumber": 13,
    "title": "Employee Salary and Department Location",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Easy",
    "problemStatement": "Display employee name, salary, department name, and department location by joining Employees and Departments.",
    "requirements": [
      "Display `emp_name`, `salary`, `dept_name`, and `location`.",
      "Join Employees with Departments on department name."
    ],
    "tableName": "Employees, Departments",
    "hint": "INNER JOIN on e.department = d.dept_name.",
    "expectedSql": "SELECT e.emp_name, e.salary, d.dept_name, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    "explanation": "INNER JOIN matches rows having equal department names across both tables, enriching employee data with departmental headquarters locations.",
    "tags": [
      "interview",
      "inner-join",
      "departments",
      "relationships"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 314,
    "interviewQuestionNumber": 14,
    "title": "Employees with No Assigned Projects",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who are not assigned to any projects.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "LEFT JOIN Employees with Employee_Projects and filter for `ep.project_id IS NULL`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use a LEFT JOIN anti-join.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
    "explanation": "A LEFT JOIN with an IS NULL predicate on the joined table's foreign key detects non-participating (unassigned) entities.",
    "tags": [
      "interview",
      "left-join",
      "anti-join",
      "null-check"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 315,
    "interviewQuestionNumber": 15,
    "title": "Projects with No Team Members",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find all projects that do not have any employees assigned to them.",
    "requirements": [
      "Display `project_id`, `project_name`, and `status`.",
      "LEFT JOIN Projects with Employee_Projects and filter for `ep.emp_id IS NULL`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use a LEFT JOIN anti-join on ep.emp_id IS NULL.",
    "expectedSql": "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
    "explanation": "Using LEFT JOIN and filtering for ep.emp_id IS NULL finds projects that have zero staffing allocations.",
    "tags": [
      "interview",
      "left-join",
      "projects",
      "anti-join"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 316,
    "interviewQuestionNumber": 16,
    "title": "Employees Assigned to Multiple Projects",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find employees who are assigned to more than 1 distinct project.",
    "requirements": [
      "Display `emp_name` and `project_count`.",
      "Join Employees with Employee_Projects.",
      "Group by employee and filter with `HAVING COUNT(DISTINCT ep.project_id) > 1`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Group by employee and filter count with HAVING > 1.",
    "expectedSql": "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS project_count FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name HAVING COUNT(DISTINCT ep.project_id) > 1;",
    "explanation": "Counting distinct project_ids after grouping by employee identifies multi-project contributors.",
    "tags": [
      "interview",
      "join",
      "having",
      "count-distinct"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 317,
    "interviewQuestionNumber": 17,
    "title": "Employee Project Names, Roles, and Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Display employee name, project name, assigned role, and weekly hours across all project assignments.",
    "requirements": [
      "Display `emp_name`, `project_name`, `assigned_role`, and `hours_allocated`.",
      "Join Employees, Employee_Projects, and Projects."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Join the three tables using INNER JOIN.",
    "expectedSql": "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    "explanation": "Joining junction table Employee_Projects with both parent entities links individual staff to their concrete deliverables and allocated hours.",
    "tags": [
      "interview",
      "three-table-join",
      "junction",
      "projects"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 318,
    "interviewQuestionNumber": 18,
    "title": "Employee Count per Department (Including Zero)",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Count the number of employees in each department, showing 0 for departments with no staff.",
    "requirements": [
      "Display `dept_name` and `employee_count`.",
      "LEFT JOIN Departments with Employees.",
      "Group by `dept_name`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use COUNT(e.emp_id) with LEFT JOIN.",
    "expectedSql": "SELECT d.dept_name, COUNT(e.emp_id) AS employee_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
    "explanation": "COUNT(column) ignores NULLs produced by the LEFT JOIN for unmatched departments, returning an accurate 0.",
    "tags": [
      "interview",
      "left-join",
      "count",
      "empty-groups"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 319,
    "interviewQuestionNumber": 19,
    "title": "Unique Pairs of Department Colleagues",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Find all unique pairs of employees who work in the same department.",
    "requirements": [
      "Display `employee_1`, `employee_2`, and `department`.",
      "Self-join Employees where department matches and `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Use a self-join with e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department AND e1.emp_id < e2.emp_id;",
    "explanation": "Self-joining with a strict inequality condition (e1.emp_id < e2.emp_id) pairs each unique unordered combination exactly once.",
    "tags": [
      "interview",
      "self-join",
      "pairs",
      "de-duplication"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 320,
    "interviewQuestionNumber": 20,
    "title": "Employees Earning More Than Their Department Head",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Find employees who earn more than their department head. Display employee details and their department head's details.",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, `dept_head_name`, and `dept_head_salary`.",
      "Join Employees to Departments, and Departments to Employees matching dept_head.",
      "Filter for `e.salary > mgr.salary`."
    ],
    "tableName": "Employees, Departments",
    "hint": "Join Employees with Departments, then join again to Employees on d.dept_head = mgr.emp_name.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary, mgr.emp_name AS dept_head_name, mgr.salary AS dept_head_salary FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employees mgr ON d.dept_head = mgr.emp_name WHERE e.salary > mgr.salary;",
    "explanation": "Joining Employees twice—first as regular employees and second as department managers—allows direct comparison of hierarchical compensation.",
    "tags": [
      "interview",
      "self-join",
      "hierarchy",
      "salary-comparison"
    ],
    "estimatedTimeMinutes": 6
  },
  {
    "id": 321,
    "interviewQuestionNumber": 21,
    "title": "Cross-Department Teammates on the Same Project",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Find pairs of teammates on the same project who come from different departments.",
    "requirements": [
      "Display `project_id`, `employee_1`, `dept_1`, `employee_2`, and `dept_2`.",
      "Join project assignments where `e1.department <> e2.department` and `ep1.emp_id < ep2.emp_id`."
    ],
    "tableName": "Employee_Projects, Employees",
    "hint": "Self-join assignments on project_id and join both employee profiles.",
    "expectedSql": "SELECT ep1.project_id, e1.emp_name AS employee_1, e1.department AS dept_1, e2.emp_name AS employee_2, e2.department AS dept_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id AND ep1.emp_id < ep2.emp_id INNER JOIN Employees e1 ON ep1.emp_id = e1.emp_id INNER JOIN Employees e2 ON ep2.emp_id = e2.emp_id WHERE e1.department <> e2.department;",
    "explanation": "Joining the assignment table with itself and validating cross-department membership discovers inter-disciplinary project pairings.",
    "tags": [
      "interview",
      "cross-department",
      "self-join",
      "collaboration"
    ],
    "estimatedTimeMinutes": 6
  },
  {
    "id": 322,
    "interviewQuestionNumber": 22,
    "title": "Total Project Hours with Zero Fallback",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Medium",
    "problemStatement": "Calculate total weekly hours allocated to each project, displaying 0 for unstaffed projects.",
    "requirements": [
      "Display `project_name` and total hours aliased as `total_hours`.",
      "LEFT JOIN Projects with Employee_Projects.",
      "Use COALESCE to display 0 when sum is NULL.",
      "Group by `project_id, project_name`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use COALESCE(SUM(ep.hours_allocated), 0) grouped by project.",
    "expectedSql": "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    "explanation": "COALESCE converts NULL sums into 0 for projects that currently have no logged assignments.",
    "tags": [
      "interview",
      "left-join",
      "coalesce",
      "aggregation"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 323,
    "interviewQuestionNumber": 23,
    "title": "Employees with Rating 5 Reviews",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Easy",
    "problemStatement": "Find all employees who received a rating of 5 in any performance review.",
    "requirements": [
      "Display `emp_name`, `department`, `review_year`, and `rating`.",
      "Join Employees with Performance_Reviews.",
      "Filter for `rating = 5`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "INNER JOIN on emp_id WHERE pr.rating = 5.",
    "expectedSql": "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
    "explanation": "Filtering on the joined appraisal table pinpoints top-tier evaluation events across the organization.",
    "tags": [
      "interview",
      "inner-join",
      "performance",
      "filtering"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 324,
    "interviewQuestionNumber": 24,
    "title": "Most Recent Review for Each Employee",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 3 — JOIN-Based Problems",
    "difficulty": "Hard",
    "problemStatement": "Display each employee's most recent performance review year and rating.",
    "requirements": [
      "Display `emp_name`, `department`, `review_year`, and `rating`.",
      "Filter for each employee's latest review using a correlated subquery."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Match review_id to a subquery ordering by review_year DESC LIMIT 1.",
    "expectedSql": "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_id = (SELECT pr2.review_id FROM Performance_Reviews pr2 WHERE pr2.emp_id = pr.emp_id ORDER BY pr2.review_year DESC, pr2.review_id DESC LIMIT 1);",
    "explanation": "A correlated subquery picking the max review_id or max review_year isolates the singular most recent record per employee.",
    "tags": [
      "interview",
      "correlated-subquery",
      "latest-record",
      "top-n-per-group"
    ],
    "estimatedTimeMinutes": 6
  },
  {
    "id": 325,
    "interviewQuestionNumber": 25,
    "title": "Employees Earning Above Company Average Salary",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Easy",
    "problemStatement": "Find all employees whose salary exceeds the company-wide average salary.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, and `salary`.",
      "Filter where `salary > (SELECT AVG(salary) FROM Employees)`."
    ],
    "tableName": "Employees",
    "hint": "Compare salary with a scalar subquery calculating AVG(salary).",
    "expectedSql": "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
    "explanation": "The scalar subquery computes the overall mean compensation once and evaluates each employee against it.",
    "tags": [
      "interview",
      "subquery",
      "scalar",
      "avg"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 326,
    "interviewQuestionNumber": 26,
    "title": "Second Highest Salary in Company",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find the second highest salary in the company using a subquery.",
    "requirements": [
      "Calculate the maximum salary strictly less than the overall maximum salary, aliased as `second_highest_salary`."
    ],
    "tableName": "Employees",
    "hint": "Use MAX(salary) WHERE salary < (SELECT MAX(salary) FROM Employees).",
    "expectedSql": "SELECT MAX(salary) AS second_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees);",
    "explanation": "Finding the maximum salary strictly smaller than the absolute maximum yields the 2nd highest salary in pure ANSI SQL.",
    "tags": [
      "interview",
      "subquery",
      "second-highest",
      "classic-interview"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 327,
    "interviewQuestionNumber": 27,
    "title": "Employees in High-Budget Departments",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find all employees working in departments whose budget is greater than the average department budget.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Filter where department is in departments with above-average budget."
    ],
    "tableName": "Employees, Departments",
    "hint": "Nest a subquery calculating average department budget inside an IN clause.",
    "expectedSql": "SELECT emp_name, department, salary FROM Employees WHERE department IN (SELECT dept_name FROM Departments WHERE budget > (SELECT AVG(budget) FROM Departments));",
    "explanation": "Nested subqueries first determine the company-wide average budget, find departments exceeding it, and filter the employee roster.",
    "tags": [
      "interview",
      "subquery",
      "in",
      "nested"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 328,
    "interviewQuestionNumber": 28,
    "title": "Employees Assigned to 250k+ Projects",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find all unique employees who work on projects with a budget greater than 250,000.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Exclude duplicate employee records.",
      "Filter for assignment on projects with budget > 250,000."
    ],
    "tableName": "Employees, Employee_Projects, Projects",
    "hint": "Use SELECT DISTINCT and an IN subquery joining Employee_Projects with Projects.",
    "expectedSql": "SELECT DISTINCT e.emp_id, e.emp_name, e.department FROM Employees e WHERE e.emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget > 250000);",
    "explanation": "Subqueries filtering on junction tables cleanly isolate employees attached to high-value initiatives.",
    "tags": [
      "interview",
      "subquery",
      "in",
      "distinct"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 329,
    "interviewQuestionNumber": 29,
    "title": "Department with Highest Total Payroll",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find the single department that has the largest total salary expenditure.",
    "requirements": [
      "Display `department` and `total_payroll`.",
      "Group by department, sort by total payroll descending, and limit to 1."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(salary) grouped by department ORDER BY total_payroll DESC LIMIT 1.",
    "expectedSql": "SELECT department, SUM(salary) AS total_payroll FROM Employees GROUP BY department ORDER BY total_payroll DESC LIMIT 1;",
    "explanation": "Grouping by department and sorting by aggregate sum descending yields the largest spending department.",
    "tags": [
      "interview",
      "aggregation",
      "order-by",
      "limit"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 330,
    "interviewQuestionNumber": 30,
    "title": "Employees Earning More Than Department Average",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Find all employees who earn more than the average salary of their own department.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Filter where salary is greater than the department's average using a correlated subquery."
    ],
    "tableName": "Employees",
    "hint": "Correlate on e2.department = e.department.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    "explanation": "Correlated subqueries re-evaluate the inner average per outer row, comparing each individual's salary to peers in their own department.",
    "tags": [
      "interview",
      "correlated-subquery",
      "salary",
      "avg"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 331,
    "interviewQuestionNumber": 31,
    "title": "Employees Without Performance Reviews (NOT EXISTS)",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Medium",
    "problemStatement": "Find all employees who have never received a performance review using NOT EXISTS.",
    "requirements": [
      "Display `emp_id`, `emp_name`, and `department`.",
      "Use `WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id)`."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use NOT EXISTS with a correlated subquery on emp_id.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id);",
    "explanation": "NOT EXISTS evaluates to true when the correlated subquery returns 0 rows, efficiently handling NULL-safe anti-joins.",
    "tags": [
      "interview",
      "not-exists",
      "anti-join",
      "subquery"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 332,
    "interviewQuestionNumber": 32,
    "title": "Projects Staffed Exclusively by IT Employees",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Find projects that have at least one team member, and where every assigned member belongs to the 'IT' department.",
    "requirements": [
      "Display `project_id` and `project_name`.",
      "Verify at least one staff assignment exists using EXISTS.",
      "Verify no non-IT assignments exist using NOT EXISTS."
    ],
    "tableName": "Projects, Employee_Projects, Employees",
    "hint": "Combine EXISTS with NOT EXISTS checking e.department <> 'IT'.",
    "expectedSql": "SELECT p.project_id, p.project_name FROM Projects p WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id) AND NOT EXISTS (SELECT 1 FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.project_id = p.project_id AND e.department <> 'IT');",
    "explanation": "Universal quantification ('all elements satisfy X') is expressed in SQL via double negation: 'exists at least one' AND 'not exists any that violates X'.",
    "tags": [
      "interview",
      "not-exists",
      "relational-division",
      "logic"
    ],
    "estimatedTimeMinutes": 6
  },
  {
    "id": 333,
    "interviewQuestionNumber": 33,
    "title": "Third Highest Salary in Company",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "Find the third highest salary in the company using nested subqueries.",
    "requirements": [
      "Calculate the third highest salary aliased as `third_highest_salary`."
    ],
    "tableName": "Employees",
    "hint": "Nest subqueries filtering below the top two salaries.",
    "expectedSql": "SELECT MAX(salary) AS third_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees));",
    "explanation": "Nesting the condition salary < MAX(salary) twice peels off the 1st and 2nd highest salaries to isolate the 3rd highest distinct salary.",
    "tags": [
      "interview",
      "subquery",
      "nth-highest",
      "classic-interview"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 334,
    "interviewQuestionNumber": 34,
    "title": "Employees Working Above Project Average Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 4 — Subqueries",
    "difficulty": "Hard",
    "problemStatement": "For each project assignment, find employees whose allocated hours exceed the average hours for that specific project.",
    "requirements": [
      "Display `project_id`, `emp_name`, and `hours_allocated`.",
      "Compare hours against a correlated subquery calculating average hours for the same project."
    ],
    "tableName": "Employee_Projects, Employees",
    "hint": "Correlate on ep2.project_id = ep.project_id.",
    "expectedSql": "SELECT ep.project_id, e.emp_name, ep.hours_allocated FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.hours_allocated > (SELECT AVG(ep2.hours_allocated) FROM Employee_Projects ep2 WHERE ep2.project_id = ep.project_id);",
    "explanation": "Correlating on project_id computes the specific project's average workload and filters out assignments below it.",
    "tags": [
      "interview",
      "correlated-subquery",
      "workload",
      "comparison"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 335,
    "interviewQuestionNumber": 35,
    "title": "Find Top 3 Highest Earners",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Easy",
    "problemStatement": "Find the 3 employees with the highest salaries in the company.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Order by `salary` descending.",
      "Limit output to 3 rows."
    ],
    "tableName": "Employees",
    "hint": "ORDER BY salary DESC LIMIT 3.",
    "expectedSql": "SELECT emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 3;",
    "explanation": "ORDER BY salary DESC paired with LIMIT 3 returns the top 3 highest paid individuals.",
    "tags": [
      "interview",
      "order-by",
      "limit",
      "top-n"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 336,
    "interviewQuestionNumber": 36,
    "title": "Highest Earner in Each Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Find the highest-earning employee(s) in each department.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Filter where salary equals the maximum salary in that department."
    ],
    "tableName": "Employees",
    "hint": "Correlate with (SELECT MAX(salary) FROM Employees e2 WHERE e2.department = e.department).",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary = (SELECT MAX(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    "explanation": "Correlating the salary to the maximum department salary isolates the top earner per group.",
    "tags": [
      "interview",
      "correlated-subquery",
      "top-1-per-group",
      "max"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 337,
    "interviewQuestionNumber": 37,
    "title": "Rank Employees by Salary Within Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Rank employees by salary in descending order within each department using DENSE_RANK.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Compute `DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_salary_rank`."
    ],
    "tableName": "Employees",
    "hint": "Use DENSE_RANK() with PARTITION BY department.",
    "expectedSql": "SELECT emp_name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_salary_rank FROM Employees;",
    "explanation": "DENSE_RANK() partitions rows by department and assigns consecutive integer ranks without gaps when ties occur.",
    "tags": [
      "interview",
      "window-function",
      "dense-rank",
      "partition-by"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 338,
    "interviewQuestionNumber": 38,
    "title": "Colleagues with Identical Salaries",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Medium",
    "problemStatement": "Find all pairs of employees who earn the exact same salary.",
    "requirements": [
      "Display `employee_1`, `employee_2`, and `salary`.",
      "Self-join Employees on salary where `e1.emp_id < e2.emp_id`."
    ],
    "tableName": "Employees",
    "hint": "Self-join Employees on e1.salary = e2.salary AND e1.emp_id < e2.emp_id.",
    "expectedSql": "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.salary FROM Employees e1 INNER JOIN Employees e2 ON e1.salary = e2.salary AND e1.emp_id < e2.emp_id;",
    "explanation": "Self-joining with an equality check on salary identifies compensation parity between colleagues.",
    "tags": [
      "interview",
      "self-join",
      "duplicates",
      "parity"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 339,
    "interviewQuestionNumber": 39,
    "title": "Bottom 2 Earners in the Company",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 5 — Ranking and Top-N Logic",
    "difficulty": "Easy",
    "problemStatement": "Find the 2 employees with the lowest salaries in the company.",
    "requirements": [
      "Display `emp_name`, `department`, and `salary`.",
      "Order by `salary` ascending.",
      "Limit output to 2 rows."
    ],
    "tableName": "Employees",
    "hint": "ORDER BY salary ASC LIMIT 2.",
    "expectedSql": "SELECT emp_name, department, salary FROM Employees ORDER BY salary ASC LIMIT 2;",
    "explanation": "Ascending sort with LIMIT 2 retrieves the base entry-level compensation records.",
    "tags": [
      "interview",
      "order-by",
      "limit",
      "bottom-n"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 340,
    "interviewQuestionNumber": 40,
    "title": "Locations with Multiple Departments",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Find all locations that have more than 1 department.",
    "requirements": [
      "Display `location` and `dept_count`.",
      "Group by `location`.",
      "Filter groups having `COUNT(*) > 1`."
    ],
    "tableName": "Departments",
    "hint": "Use GROUP BY location HAVING COUNT(*) > 1.",
    "expectedSql": "SELECT location, COUNT(*) AS dept_count FROM Departments GROUP BY location HAVING COUNT(*) > 1;",
    "explanation": "Group by column + HAVING COUNT(*) > 1 is the canonical SQL pattern for identifying duplicate categorical values.",
    "tags": [
      "interview",
      "duplicates",
      "having",
      "data-quality"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 341,
    "interviewQuestionNumber": 41,
    "title": "Departments with No Staff (Left Join)",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Find all departments that currently have no employees assigned to them.",
    "requirements": [
      "Display `dept_id`, `dept_name`, and `location`.",
      "LEFT JOIN Departments with Employees.",
      "Filter for `e.emp_id IS NULL`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use a LEFT JOIN anti-join on e.emp_id IS NULL.",
    "expectedSql": "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
    "explanation": "Checking for NULL primary keys on the joined child table detects orphaned parent master records.",
    "tags": [
      "interview",
      "left-join",
      "anti-join",
      "data-integrity"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 342,
    "interviewQuestionNumber": 42,
    "title": "Projects with Zero Staff or Zero Hours",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Medium",
    "problemStatement": "Find projects that have either no assigned employees or 0 total allocated hours.",
    "requirements": [
      "Display `project_id`, `project_name`, and `status`.",
      "LEFT JOIN Projects with Employee_Projects.",
      "Group by project attributes and filter with `HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0`."
    ],
    "tableName": "Projects, Employee_Projects",
    "hint": "Use HAVING to check for 0 employees or 0 total hours.",
    "expectedSql": "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0;",
    "explanation": "Auditing zero assignments or zero hours allocated highlights inactive and stalled organizational initiatives.",
    "tags": [
      "interview",
      "data-quality",
      "having",
      "coalesce"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 343,
    "interviewQuestionNumber": 43,
    "title": "Employees Earning 30% Above Department Average",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 6 — Duplicate Detection and Data Quality",
    "difficulty": "Hard",
    "problemStatement": "Find employees who earn more than 30% above their department's average salary.",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `dept_avg_salary`.",
      "Join Employees with a department average subquery.",
      "Filter where `e.salary > sub.avg_dept_sal * 1.3`."
    ],
    "tableName": "Employees",
    "hint": "Filter with e.salary > sub.avg_dept_sal * 1.3.",
    "expectedSql": "SELECT e.emp_name, e.department, e.salary, ROUND(sub.avg_dept_sal, 2) AS dept_avg_salary FROM Employees e INNER JOIN (SELECT department, AVG(salary) AS avg_dept_sal FROM Employees GROUP BY department) sub ON e.department = sub.department WHERE e.salary > sub.avg_dept_sal * 1.3;",
    "explanation": "Joining with pre-aggregated department averages allows mathematical multiplier comparisons to catch statistical outliers.",
    "tags": [
      "interview",
      "outliers",
      "join",
      "statistics"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 344,
    "interviewQuestionNumber": 44,
    "title": "Senior IT or Finance Employees Earning Under 70k",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Medium",
    "problemStatement": "Find employees in Finance or IT who have at least 5 years of experience but earn less than 70,000.",
    "requirements": [
      "Display `emp_id`, `emp_name`, `department`, `experience`, and `salary`.",
      "Department must be 'Finance' or 'IT'.",
      "Experience must be 5 or greater.",
      "Salary must be less than 70,000."
    ],
    "tableName": "Employees",
    "hint": "Combine IN ('Finance', 'IT') with experience >= 5 AND salary < 70000.",
    "expectedSql": "SELECT emp_id, emp_name, department, experience, salary FROM Employees WHERE department IN ('Finance', 'IT') AND experience >= 5 AND salary < 70000;",
    "explanation": "Multi-condition business policy filtering identifies veteran employees who may be under-compensated.",
    "tags": [
      "interview",
      "business-logic",
      "eligibility",
      "where"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 345,
    "interviewQuestionNumber": 45,
    "title": "Departments Where Annual Payroll Exceeds Budget",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Hard",
    "problemStatement": "Find departments where total annual payroll (monthly salary * 12) strictly exceeds the department's annual budget.",
    "requirements": [
      "Display `dept_name`, `annual_payroll`, and `budget`.",
      "Join Departments with Employees.",
      "Group by department and filter with `HAVING SUM(e.salary * 12) > d.budget`."
    ],
    "tableName": "Departments, Employees",
    "hint": "Use HAVING SUM(e.salary * 12) > d.budget.",
    "expectedSql": "SELECT d.dept_name, SUM(e.salary * 12) AS annual_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING SUM(e.salary * 12) > d.budget;",
    "explanation": "Business budget compliance audits aggregate monthly salaries across 12 months and compare against authorized department allocations.",
    "tags": [
      "interview",
      "budget",
      "payroll",
      "having",
      "business-logic"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 346,
    "interviewQuestionNumber": 46,
    "title": "Classify Employees by Total Workload Tier",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 7 — Real-World Business Logic",
    "difficulty": "Hard",
    "problemStatement": "Calculate total project hours for each employee and classify them into workload tiers: 'Unassigned' (0 hrs), 'Light Workload' (<25 hrs), 'Moderate Workload' (25-35 hrs), or 'Heavy Workload' (>35 hrs).",
    "requirements": [
      "Display `emp_id`, `emp_name`, `total_hours`, and `workload_tier`.",
      "LEFT JOIN Employees with Employee_Projects.",
      "Use CASE to assign the tier.",
      "Group by `emp_id, emp_name`."
    ],
    "tableName": "Employees, Employee_Projects",
    "hint": "Use COALESCE(SUM(hours_allocated), 0) and a CASE expression.",
    "expectedSql": "SELECT e.emp_id, e.emp_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, CASE WHEN COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unassigned' WHEN SUM(ep.hours_allocated) < 25 THEN 'Light Workload' WHEN SUM(ep.hours_allocated) <= 35 THEN 'Moderate Workload' ELSE 'Heavy Workload' END AS workload_tier FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name;",
    "explanation": "Combining aggregation, COALESCE, and CASE categorization creates powerful capacity planning summaries.",
    "tags": [
      "interview",
      "case",
      "coalesce",
      "capacity-planning"
    ],
    "estimatedTimeMinutes": 6
  },
  {
    "id": 347,
    "interviewQuestionNumber": 47,
    "title": "Classify Employees into Salary Tiers",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Easy",
    "problemStatement": "Classify each employee's salary into 'Low' (< 35,000), 'Medium' (35,000 to 60,000), or 'High' (> 60,000).",
    "requirements": [
      "Display `emp_name`, `department`, `salary`, and `salary_tier`.",
      "Use a CASE expression to categorize salary."
    ],
    "tableName": "Employees",
    "hint": "Use CASE WHEN salary < 35000 THEN 'Low' ... END AS salary_tier.",
    "expectedSql": "SELECT emp_name, department, salary, CASE WHEN salary < 35000 THEN 'Low' WHEN salary <= 60000 THEN 'Medium' ELSE 'High' END AS salary_tier FROM Employees;",
    "explanation": "CASE statements in SELECT allow branching conditional categorization without modifying table data.",
    "tags": [
      "interview",
      "case",
      "classification",
      "tiers"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 348,
    "interviewQuestionNumber": 48,
    "title": "Classify Employees into Seniority Tiers",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Easy",
    "problemStatement": "Classify each employee into 'Fresher' (< 2 yrs), 'Junior' (2 to 4 yrs), 'Mid-Level' (5 to 8 yrs), or 'Senior' (> 8 yrs).",
    "requirements": [
      "Display `emp_name`, `experience`, and `seniority_tier`.",
      "Use a CASE expression to evaluate experience."
    ],
    "tableName": "Employees",
    "hint": "Use CASE WHEN experience < 2 THEN 'Fresher' ... END AS seniority_tier.",
    "expectedSql": "SELECT emp_name, experience, CASE WHEN experience < 2 THEN 'Fresher' WHEN experience <= 4 THEN 'Junior' WHEN experience <= 8 THEN 'Mid-Level' ELSE 'Senior' END AS seniority_tier FROM Employees;",
    "explanation": "Evaluating integer thresholds sequentially in a CASE expression partitions employees into standard organizational career levels.",
    "tags": [
      "interview",
      "case",
      "seniority",
      "experience"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 349,
    "interviewQuestionNumber": 49,
    "title": "Count High vs Standard Earners by Department",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Medium",
    "problemStatement": "For each department, count how many employees earn over 50,000 and how many earn 50,000 or less.",
    "requirements": [
      "Display `department`, `high_earners`, and `standard_earners`.",
      "Group by `department`.",
      "Use conditional aggregation with SUM and CASE."
    ],
    "tableName": "Employees",
    "hint": "Use SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END).",
    "expectedSql": "SELECT department, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners, SUM(CASE WHEN salary <= 50000 THEN 1 ELSE 0 END) AS standard_earners FROM Employees GROUP BY department;",
    "explanation": "Embedding CASE expressions inside SUM() pivots conditional counts into multiple columns, a key interview data modeling pattern.",
    "tags": [
      "interview",
      "conditional-aggregation",
      "case",
      "pivot"
    ],
    "estimatedTimeMinutes": 5
  },
  {
    "id": 350,
    "interviewQuestionNumber": 50,
    "title": "Map Performance Ratings to Recommendations",
    "topic": "Interview Ready Questions",
    "subtopic": "Part 8 — CASE Expressions",
    "difficulty": "Medium",
    "problemStatement": "Map each employee's review rating to a recommendation: 'Exceptional' (5), 'Strong' (4), 'Satisfactory' (3), or 'Needs Improvement' (<= 2).",
    "requirements": [
      "Display `emp_name`, `review_year`, `rating`, and `recommendation`.",
      "Join Employees with Performance_Reviews.",
      "Use a CASE expression to map ratings."
    ],
    "tableName": "Employees, Performance_Reviews",
    "hint": "Use CASE WHEN rating = 5 THEN 'Exceptional' ... END AS recommendation.",
    "expectedSql": "SELECT e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.rating = 5 THEN 'Exceptional' WHEN pr.rating = 4 THEN 'Strong' WHEN pr.rating = 3 THEN 'Satisfactory' ELSE 'Needs Improvement' END AS recommendation FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    "explanation": "Mapping numeric review scores to corporate qualitative appraisal designations is a classic CASE expression application.",
    "tags": [
      "interview",
      "case",
      "performance",
      "ratings"
    ],
    "estimatedTimeMinutes": 4
  }
];
