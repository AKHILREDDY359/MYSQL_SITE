export const TOPIC9_QUESTIONS = [
  // =========================================================================
  // Part 1 — Filtering and Conditions (Q1–Q5 -> IDs 301–305)
  // =========================================================================
  {
    id: 301,
    interviewQuestionNumber: 1,
    title: "Q1. Employees Above a Salary Threshold",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Beginner",
    problemStatement: "Find employees whose salary strictly exceeds 50,000 INR. Display employee ID, full name, department, and salary.",
    requirements: [
      "Filter rows where salary is greater than 50,000.",
      "Select emp_id, emp_name, department, and salary in that exact order."
    ],
    tableName: "Employees",
    hint: "Use SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > 50000;",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > 50000;",
    explanation: "Standard numeric comparison using the > comparison operator filters records whose compensation exceeds the threshold.",
    tags: ["interview", "filtering", "where", "comparison"],
    estimatedTimeMinutes: 3
  },
  {
    id: 302,
    interviewQuestionNumber: 2,
    title: "Q2. Employees Within a Salary Range",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Beginner",
    problemStatement: "Find employees whose salary is between 30,000 and 60,000, inclusive. Display their names and salaries.",
    requirements: [
      "Use the BETWEEN operator to perform an inclusive range filter.",
      "Project emp_name and salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, salary FROM Employees WHERE salary BETWEEN 30000 AND 60000;",
    expectedSql: "SELECT emp_name, salary FROM Employees WHERE salary BETWEEN 30000 AND 60000;",
    explanation: "BETWEEN is inclusive in SQL, returning all records where salary >= 30000 AND salary <= 60000.",
    tags: ["interview", "range", "between", "filtering"],
    estimatedTimeMinutes: 3
  },
  {
    id: 303,
    interviewQuestionNumber: 3,
    title: "Q3. Employees Matching Multiple Conditions",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Easy",
    problemStatement: "Find all employees who work in the 'IT' department and earn a salary greater than 50,000.",
    requirements: [
      "Combine department and salary filters using the AND logical operator.",
      "Return all employee columns (*)."
    ],
    tableName: "Employees",
    hint: "SELECT * FROM Employees WHERE department = 'IT' AND salary > 50000;",
    expectedSql: "SELECT * FROM Employees WHERE department = 'IT' AND salary > 50000;",
    explanation: "The AND operator requires both predicates to evaluate to TRUE for a row to be included.",
    tags: ["interview", "and", "logical-operators", "filtering"],
    estimatedTimeMinutes: 3
  },
  {
    id: 304,
    interviewQuestionNumber: 4,
    title: "Q4. Employees from Selected Cities",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Easy",
    problemStatement: "Find employees who live in Hyderabad or Chennai and have at least 3 years of work experience.",
    requirements: [
      "Use IN ('Hyderabad', 'Chennai') or OR inside parentheses for city matching.",
      "Filter for experience >= 3.",
      "Return all employee columns (*)."
    ],
    tableName: "Employees",
    hint: "SELECT * FROM Employees WHERE city IN ('Hyderabad', 'Chennai') AND experience >= 3;",
    expectedSql: "SELECT * FROM Employees WHERE city IN ('Hyderabad', 'Chennai') AND experience >= 3;",
    explanation: "Combining the IN set operator with AND allows concise expression of multiple allowed city locations alongside an experience threshold.",
    tags: ["interview", "in", "filtering", "experience"],
    estimatedTimeMinutes: 4
  },
  {
    id: 305,
    interviewQuestionNumber: 5,
    title: "Q5. Names Matching a Pattern",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Easy",
    problemStatement: "Find employees whose names start with the letter 'A' or end with the letter 'a'. Display the employee ID and full name.",
    requirements: [
      "Use LIKE pattern matching: 'A%' for names starting with A, and '%a' for names ending with a.",
      "Combine patterns using the OR operator.",
      "Project emp_id and emp_name."
    ],
    tableName: "Employees",
    hint: "SELECT emp_id, emp_name FROM Employees WHERE emp_name LIKE 'A%' OR emp_name LIKE '%a';",
    expectedSql: "SELECT emp_id, emp_name FROM Employees WHERE emp_name LIKE 'A%' OR emp_name LIKE '%a';",
    explanation: "The % wildcard represents zero, one, or multiple characters. 'A%' checks prefix while '%a' checks suffix.",
    tags: ["interview", "pattern-matching", "like", "wildcards"],
    estimatedTimeMinutes: 4
  },

  // =========================================================================
  // Part 2 — Aggregates and Grouping (Q6–Q12 -> IDs 306–312)
  // =========================================================================
  {
    id: 306,
    interviewQuestionNumber: 6,
    title: "Q6. Total Employee Count",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Beginner",
    problemStatement: "Return the total number of employees currently recorded in the company.",
    requirements: [
      "Use the COUNT(*) aggregate function.",
      "Alias the resulting column as total_employees."
    ],
    tableName: "Employees",
    hint: "SELECT COUNT(*) AS total_employees FROM Employees;",
    expectedSql: "SELECT COUNT(*) AS total_employees FROM Employees;",
    explanation: "COUNT(*) tallies the total number of rows matching the query, including rows with NULL values.",
    tags: ["interview", "count", "aggregates"],
    estimatedTimeMinutes: 2
  },
  {
    id: 307,
    interviewQuestionNumber: 7,
    title: "Q7. Average Salary by Department",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Easy",
    problemStatement: "Display each department and its average salary, ordered from highest average salary to lowest.",
    requirements: [
      "Group results by department.",
      "Compute AVG(salary) aliased as avg_salary.",
      "Sort results by avg_salary descending."
    ],
    tableName: "Employees",
    hint: "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department ORDER BY avg_salary DESC;",
    expectedSql: "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department ORDER BY avg_salary DESC;",
    explanation: "GROUP BY partitions rows by department, AVG computes the mean salary per department, and ORDER BY DESC sorts highest to lowest.",
    tags: ["interview", "groupby", "avg", "order-by"],
    estimatedTimeMinutes: 3
  },
  {
    id: 308,
    interviewQuestionNumber: 8,
    title: "Q8. Departments with More Than Three Employees",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Easy",
    problemStatement: "Display department names and their employee counts, including only departments that have more than 3 employees.",
    requirements: [
      "Group by department.",
      "Use COUNT(*) aliased as emp_count.",
      "Filter aggregated results using HAVING COUNT(*) > 3."
    ],
    tableName: "Employees",
    hint: "SELECT department, COUNT(*) AS emp_count FROM Employees GROUP BY department HAVING COUNT(*) > 3;",
    expectedSql: "SELECT department, COUNT(*) AS emp_count FROM Employees GROUP BY department HAVING COUNT(*) > 3;",
    explanation: "HAVING filters groups post-aggregation, unlike WHERE which filters individual rows prior to grouping.",
    tags: ["interview", "having", "groupby", "count"],
    estimatedTimeMinutes: 4
  },
  {
    id: 309,
    interviewQuestionNumber: 9,
    title: "Q9. Highest and Lowest Salary",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Easy",
    problemStatement: "Return the maximum salary, minimum salary, and the salary difference (spread) across the entire company.",
    requirements: [
      "Compute MAX(salary) AS max_salary.",
      "Compute MIN(salary) AS min_salary.",
      "Compute MAX(salary) - MIN(salary) AS salary_difference."
    ],
    tableName: "Employees",
    hint: "SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary, MAX(salary) - MIN(salary) AS salary_difference FROM Employees;",
    expectedSql: "SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary, MAX(salary) - MIN(salary) AS salary_difference FROM Employees;",
    explanation: "Aggregate functions can be combined in mathematical arithmetic expressions to compute statistical ranges.",
    tags: ["interview", "min", "max", "arithmetic"],
    estimatedTimeMinutes: 3
  },
  {
    id: 310,
    interviewQuestionNumber: 10,
    title: "Q10. Total Salary Expense by Department",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Easy",
    problemStatement: "Display each department and the sum of its employee salaries, aliased as total_salary_expense.",
    requirements: [
      "Group records by department.",
      "Use SUM(salary) AS total_salary_expense."
    ],
    tableName: "Employees",
    hint: "SELECT department, SUM(salary) AS total_salary_expense FROM Employees GROUP BY department;",
    expectedSql: "SELECT department, SUM(salary) AS total_salary_expense FROM Employees GROUP BY department;",
    explanation: "SUM(salary) aggregates total compensation outlay within each partitioned department group.",
    tags: ["interview", "sum", "groupby", "payroll"],
    estimatedTimeMinutes: 3
  },
  {
    id: 311,
    interviewQuestionNumber: 11,
    title: "Q11. Cities with High Average Salaries",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Medium",
    problemStatement: "Find office cities whose average employee salary strictly exceeds 45,000 INR.",
    requirements: [
      "Group rows by city.",
      "Calculate AVG(salary) AS avg_salary.",
      "Filter groups using HAVING AVG(salary) > 45000."
    ],
    tableName: "Employees",
    hint: "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city HAVING AVG(salary) > 45000;",
    expectedSql: "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city HAVING AVG(salary) > 45000;",
    explanation: "The HAVING clause applies group-level filters on the calculated mean salary per city.",
    tags: ["interview", "city", "avg", "having"],
    estimatedTimeMinutes: 4
  },
  {
    id: 312,
    interviewQuestionNumber: 12,
    title: "Q12. Department Salary Statistics",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Medium",
    problemStatement: "For every department, display the employee count, average salary, maximum salary, and minimum salary.",
    requirements: [
      "Group by department.",
      "Columns required: department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary."
    ],
    tableName: "Employees",
    hint: "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary FROM Employees GROUP BY department;",
    expectedSql: "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary FROM Employees GROUP BY department;",
    explanation: "Multi-aggregate grouping statements provide a complete statistical profile of departmental compensation.",
    tags: ["interview", "aggregates", "statistics", "groupby"],
    estimatedTimeMinutes: 4
  },

  // =========================================================================
  // Part 3 — JOIN-Based Problems (Q13–Q24 -> IDs 313–324)
  // =========================================================================
  {
    id: 313,
    interviewQuestionNumber: 13,
    title: "Q13. Employee and Department Details",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Easy",
    problemStatement: "Display each employee's name, salary, department name, and department location by joining Employees with Departments.",
    requirements: [
      "Perform an INNER JOIN between Employees and Departments on e.department = d.dept_name.",
      "Select e.emp_name, e.salary, d.dept_name, d.location."
    ],
    tableName: "Employees, Departments",
    hint: "SELECT e.emp_name, e.salary, d.dept_name, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    expectedSql: "SELECT e.emp_name, e.salary, d.dept_name, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    explanation: "INNER JOIN matches rows having equal department names across both tables, enriching employee data with departmental headquarters locations.",
    tags: ["interview", "inner-join", "departments", "relationships"],
    estimatedTimeMinutes: 4
  },
  {
    id: 314,
    interviewQuestionNumber: 14,
    title: "Q14. Employees Without Project Assignments",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Find all employees who have not been assigned to any project in the Employee_Projects table.",
    requirements: [
      "Perform a LEFT JOIN from Employees to Employee_Projects on emp_id.",
      "Filter for unmatched rows using WHERE ep.project_id IS NULL.",
      "Select e.emp_id, e.emp_name, and e.department."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
    explanation: "A LEFT JOIN with an IS NULL predicate on the joined table's foreign key detects non-participating (unassigned) entities.",
    tags: ["interview", "left-join", "anti-join", "null-check"],
    estimatedTimeMinutes: 4
  },
  {
    id: 315,
    interviewQuestionNumber: 15,
    title: "Q15. Projects Without Employees",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "List projects that currently have no employee assignments recorded in Employee_Projects.",
    requirements: [
      "Perform a LEFT JOIN from Projects to Employee_Projects on project_id.",
      "Filter where ep.emp_id IS NULL.",
      "Select p.project_id, p.project_name, and p.status."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
    expectedSql: "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
    explanation: "Using LEFT JOIN and filtering for ep.emp_id IS NULL finds projects that have zero staffing allocations.",
    tags: ["interview", "left-join", "projects", "anti-join"],
    estimatedTimeMinutes: 4
  },
  {
    id: 316,
    interviewQuestionNumber: 16,
    title: "Q16. Employees Assigned to Multiple Projects",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Find employees assigned to more than one distinct project. Show their names and project counts.",
    requirements: [
      "Join Employees with Employee_Projects.",
      "Group by e.emp_id and e.emp_name.",
      "Filter using HAVING COUNT(DISTINCT ep.project_id) > 1.",
      "Select e.emp_name and COUNT(DISTINCT ep.project_id) AS project_count."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS project_count FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name HAVING COUNT(DISTINCT ep.project_id) > 1;",
    expectedSql: "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS project_count FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name HAVING COUNT(DISTINCT ep.project_id) > 1;",
    explanation: "Counting distinct project_ids after grouping by employee identifies multi-project contributors.",
    tags: ["interview", "join", "having", "count-distinct"],
    estimatedTimeMinutes: 5
  },
  {
    id: 317,
    interviewQuestionNumber: 17,
    title: "Q17. Employee Project Details",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Display employee name, project name, assigned role, and hours allocated by joining Employees, Employee_Projects, and Projects.",
    requirements: [
      "Perform a three-table join across Employees, Employee_Projects, and Projects.",
      "Select e.emp_name, p.project_name, ep.assigned_role, and ep.hours_allocated."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    expectedSql: "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Joining junction table Employee_Projects with both parent entities links individual staff to their concrete deliverables and allocated hours.",
    tags: ["interview", "three-table-join", "junction", "projects"],
    estimatedTimeMinutes: 5
  },
  {
    id: 318,
    interviewQuestionNumber: 18,
    title: "Q18. Department Employee Counts Including Empty Departments",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "List every department and its total employee count, including departments with zero employees.",
    requirements: [
      "Perform a LEFT JOIN from Departments to Employees on d.dept_name = e.department.",
      "Group by d.dept_name.",
      "Use COUNT(e.emp_id) AS employee_count so empty departments produce 0 instead of 1."
    ],
    tableName: "Departments, Employees",
    hint: "SELECT d.dept_name, COUNT(e.emp_id) AS employee_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
    expectedSql: "SELECT d.dept_name, COUNT(e.emp_id) AS employee_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
    explanation: "COUNT(column) ignores NULLs produced by the LEFT JOIN for unmatched departments, returning an accurate 0.",
    tags: ["interview", "left-join", "count", "empty-groups"],
    estimatedTimeMinutes: 5
  },
  {
    id: 319,
    interviewQuestionNumber: 19,
    title: "Q19. Employees Sharing the Same Department",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Find pairs of distinct employees who belong to the same department. Avoid duplicate pairs and prevent pairing an employee with themselves.",
    requirements: [
      "Perform a self-join on Employees on department.",
      "Use e1.emp_id < e2.emp_id to eliminate self-matches and duplicate mirrored pairs.",
      "Select e1.emp_name AS employee_1, e2.emp_name AS employee_2, and e1.department."
    ],
    tableName: "Employees",
    hint: "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department AND e1.emp_id < e2.emp_id;",
    expectedSql: "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department AND e1.emp_id < e2.emp_id;",
    explanation: "Self-joining with a strict inequality condition (e1.emp_id < e2.emp_id) pairs each unique unordered combination exactly once.",
    tags: ["interview", "self-join", "pairs", "de-duplication"],
    estimatedTimeMinutes: 5
  },
  {
    id: 320,
    interviewQuestionNumber: 20,
    title: "Q20. Employees Earning More Than Their Department Head",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Hard",
    problemStatement: "Compare employee salaries against their department head's salary. Return employees whose salary is strictly higher than their department head.",
    requirements: [
      "Join Employees e with Departments d on e.department = d.dept_name.",
      "Join Departments d with Employees mgr on d.dept_head = mgr.emp_name.",
      "Filter for e.salary > mgr.salary.",
      "Display e.emp_name, e.department, e.salary, mgr.emp_name AS dept_head_name, and mgr.salary AS dept_head_salary."
    ],
    tableName: "Employees, Departments",
    hint: "SELECT e.emp_name, e.department, e.salary, mgr.emp_name AS dept_head_name, mgr.salary AS dept_head_salary FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employees mgr ON d.dept_head = mgr.emp_name WHERE e.salary > mgr.salary;",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, mgr.emp_name AS dept_head_name, mgr.salary AS dept_head_salary FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employees mgr ON d.dept_head = mgr.emp_name WHERE e.salary > mgr.salary;",
    explanation: "Joining Employees twice—first as regular employees and second as department managers—allows direct comparison of hierarchical compensation.",
    tags: ["interview", "self-join", "hierarchy", "salary-comparison"],
    estimatedTimeMinutes: 6
  },
  {
    id: 321,
    interviewQuestionNumber: 21,
    title: "Q21. Cross-Department Collaboration",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Hard",
    problemStatement: "Find pairs of employees assigned to the same project who come from different departments. Avoid duplicate pairs.",
    requirements: [
      "Join Employee_Projects ep1 and ep2 on project_id with ep1.emp_id < ep2.emp_id.",
      "Join Employees e1 and e2 on emp_id.",
      "Filter for e1.department <> e2.department.",
      "Select ep1.project_id, e1.emp_name AS employee_1, e1.department AS dept_1, e2.emp_name AS employee_2, e2.department AS dept_2."
    ],
    tableName: "Employee_Projects, Employees",
    hint: "SELECT ep1.project_id, e1.emp_name AS employee_1, e1.department AS dept_1, e2.emp_name AS employee_2, e2.department AS dept_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id AND ep1.emp_id < ep2.emp_id INNER JOIN Employees e1 ON ep1.emp_id = e1.emp_id INNER JOIN Employees e2 ON ep2.emp_id = e2.emp_id WHERE e1.department <> e2.department;",
    expectedSql: "SELECT ep1.project_id, e1.emp_name AS employee_1, e1.department AS dept_1, e2.emp_name AS employee_2, e2.department AS dept_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id AND ep1.emp_id < ep2.emp_id INNER JOIN Employees e1 ON ep1.emp_id = e1.emp_id INNER JOIN Employees e2 ON ep2.emp_id = e2.emp_id WHERE e1.department <> e2.department;",
    explanation: "Joining the assignment table with itself and validating cross-department membership discovers inter-disciplinary project pairings.",
    tags: ["interview", "cross-department", "self-join", "collaboration"],
    estimatedTimeMinutes: 6
  },
  {
    id: 322,
    interviewQuestionNumber: 22,
    title: "Q22. Projects with Total Allocated Hours",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Display each project name and the sum of hours allocated across assigned employees. Include projects with 0 hours allocated.",
    requirements: [
      "Perform a LEFT JOIN from Projects to Employee_Projects.",
      "Group by p.project_id and p.project_name.",
      "Use COALESCE(SUM(ep.hours_allocated), 0) AS total_hours."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    expectedSql: "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    explanation: "COALESCE converts NULL sums into 0 for projects that currently have no logged assignments.",
    tags: ["interview", "left-join", "coalesce", "aggregation"],
    estimatedTimeMinutes: 5
  },
  {
    id: 323,
    interviewQuestionNumber: 23,
    title: "Q23. Employees with Perfect Performance Ratings",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Easy",
    problemStatement: "Display employee name, department, review year, and rating for employees who received a rating of 5 in any performance review.",
    requirements: [
      "Join Employees with Performance_Reviews on emp_id.",
      "Filter for pr.rating = 5.",
      "Select e.emp_name, e.department, pr.review_year, and pr.rating."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
    expectedSql: "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
    explanation: "Filtering on the joined appraisal table pinpoints top-tier evaluation events across the organization.",
    tags: ["interview", "inner-join", "performance", "filtering"],
    estimatedTimeMinutes: 4
  },
  {
    id: 324,
    interviewQuestionNumber: 24,
    title: "Q24. Most Recent Performance Review per Employee",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Hard",
    problemStatement: "For every employee who has received at least one review, display their name, department, latest review year, and latest rating.",
    requirements: [
      "Join Employees with Performance_Reviews.",
      "Filter for the latest review per employee using a correlated subquery.",
      "Select e.emp_name, e.department, pr.review_year, and pr.rating."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_id = (SELECT pr2.review_id FROM Performance_Reviews pr2 WHERE pr2.emp_id = pr.emp_id ORDER BY pr2.review_year DESC, pr2.review_id DESC LIMIT 1);",
    expectedSql: "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.review_id = (SELECT pr2.review_id FROM Performance_Reviews pr2 WHERE pr2.emp_id = pr.emp_id ORDER BY pr2.review_year DESC, pr2.review_id DESC LIMIT 1);",
    explanation: "A correlated subquery picking the max review_id or max review_year isolates the singular most recent record per employee.",
    tags: ["interview", "correlated-subquery", "latest-record", "top-n-per-group"],
    estimatedTimeMinutes: 6
  },

  // =========================================================================
  // Part 4 — Subqueries (Q25–Q34 -> IDs 325–334)
  // =========================================================================
  {
    id: 325,
    interviewQuestionNumber: 25,
    title: "Q25. Employees Earning Above Company Average",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Easy",
    problemStatement: "Find employees whose salary is strictly greater than the overall company average salary.",
    requirements: [
      "Use a scalar subquery: (SELECT AVG(salary) FROM Employees).",
      "Display emp_id, emp_name, department, and salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
    explanation: "The scalar subquery computes the overall mean compensation once and evaluates each employee against it.",
    tags: ["interview", "subquery", "scalar", "avg"],
    estimatedTimeMinutes: 3
  },
  {
    id: 326,
    interviewQuestionNumber: 26,
    title: "Q26. Second Highest Salary Without LIMIT",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "Find the second highest distinct salary across all employees without using the LIMIT clause.",
    requirements: [
      "Do NOT use LIMIT or TOP.",
      "Use MAX(salary) in outer query where salary < (SELECT MAX(salary) FROM Employees).",
      "Alias the result as second_highest_salary."
    ],
    tableName: "Employees",
    hint: "SELECT MAX(salary) AS second_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees);",
    expectedSql: "SELECT MAX(salary) AS second_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees);",
    explanation: "Finding the maximum salary strictly smaller than the absolute maximum yields the 2nd highest salary in pure ANSI SQL.",
    tags: ["interview", "subquery", "second-highest", "classic-interview"],
    estimatedTimeMinutes: 4
  },
  {
    id: 327,
    interviewQuestionNumber: 27,
    title: "Q27. Employees in Departments with Above-Average Budgets",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "Find employees who belong to departments whose budget is greater than the average department budget across the company.",
    requirements: [
      "Compute average budget across Departments in an inner subquery.",
      "Filter Employees whose department is IN that subquery.",
      "Display emp_name, department, and salary."
    ],
    tableName: "Employees, Departments",
    hint: "SELECT emp_name, department, salary FROM Employees WHERE department IN (SELECT dept_name FROM Departments WHERE budget > (SELECT AVG(budget) FROM Departments));",
    expectedSql: "SELECT emp_name, department, salary FROM Employees WHERE department IN (SELECT dept_name FROM Departments WHERE budget > (SELECT AVG(budget) FROM Departments));",
    explanation: "Nested subqueries first determine the company-wide average budget, find departments exceeding it, and filter the employee roster.",
    tags: ["interview", "subquery", "in", "nested"],
    estimatedTimeMinutes: 5
  },
  {
    id: 328,
    interviewQuestionNumber: 28,
    title: "Q28. Employees Assigned to High-Budget Projects",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "Find distinct employees assigned to any project whose budget exceeds 250,000 INR.",
    requirements: [
      "Use an IN subquery joining Employee_Projects with Projects where budget > 250000.",
      "Select DISTINCT emp_id, emp_name, and department from Employees."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "SELECT DISTINCT e.emp_id, e.emp_name, e.department FROM Employees e WHERE e.emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget > 250000);",
    expectedSql: "SELECT DISTINCT e.emp_id, e.emp_name, e.department FROM Employees e WHERE e.emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget > 250000);",
    explanation: "Subqueries filtering on junction tables cleanly isolate employees attached to high-value initiatives.",
    tags: ["interview", "subquery", "in", "distinct"],
    estimatedTimeMinutes: 5
  },
  {
    id: 329,
    interviewQuestionNumber: 29,
    title: "Q29. Department with the Highest Total Payroll",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "Find the single department that has the highest total salary expense in the company.",
    requirements: [
      "Group Employees by department.",
      "Calculate SUM(salary) AS total_payroll.",
      "Sort by total_payroll DESC and LIMIT 1."
    ],
    tableName: "Employees",
    hint: "SELECT department, SUM(salary) AS total_payroll FROM Employees GROUP BY department ORDER BY total_payroll DESC LIMIT 1;",
    expectedSql: "SELECT department, SUM(salary) AS total_payroll FROM Employees GROUP BY department ORDER BY total_payroll DESC LIMIT 1;",
    explanation: "Grouping by department and sorting by aggregate sum descending yields the largest spending department.",
    tags: ["interview", "aggregation", "order-by", "limit"],
    estimatedTimeMinutes: 4
  },
  {
    id: 330,
    interviewQuestionNumber: 30,
    title: "Q30. Employees Earning Above Their Department Average",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Hard",
    problemStatement: "Find employees who earn more than the average salary of their own specific department.",
    requirements: [
      "Use a correlated subquery calculating AVG(salary) for the current employee's department.",
      "Select emp_name, department, and salary."
    ],
    tableName: "Employees",
    hint: "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    expectedSql: "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    explanation: "Correlated subqueries re-evaluate the inner average per outer row, comparing each individual's salary to peers in their own department.",
    tags: ["interview", "correlated-subquery", "salary", "avg"],
    estimatedTimeMinutes: 5
  },
  {
    id: 331,
    interviewQuestionNumber: 31,
    title: "Q31. Employees Without Any Performance Reviews",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "Find employees who have no review entries recorded in Performance_Reviews using a NOT EXISTS subquery.",
    requirements: [
      "Use WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id).",
      "Display emp_id, emp_name, and department."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id);",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id);",
    explanation: "NOT EXISTS evaluates to true when the correlated subquery returns 0 rows, efficiently handling NULL-safe anti-joins.",
    tags: ["interview", "not-exists", "anti-join", "subquery"],
    estimatedTimeMinutes: 4
  },
  {
    id: 332,
    interviewQuestionNumber: 32,
    title: "Q32. Projects Staffed Exclusively by IT Employees",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Hard",
    problemStatement: "Find projects that are staffed exclusively by employees from the 'IT' department (must have at least one assigned employee and zero non-IT employees).",
    requirements: [
      "Verify at least one employee is assigned using EXISTS.",
      "Verify no non-IT employee is assigned using NOT EXISTS.",
      "Select project_id and project_name."
    ],
    tableName: "Projects, Employee_Projects, Employees",
    hint: "SELECT p.project_id, p.project_name FROM Projects p WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id) AND NOT EXISTS (SELECT 1 FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.project_id = p.project_id AND e.department <> 'IT');",
    expectedSql: "SELECT p.project_id, p.project_name FROM Projects p WHERE EXISTS (SELECT 1 FROM Employee_Projects ep WHERE ep.project_id = p.project_id) AND NOT EXISTS (SELECT 1 FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.project_id = p.project_id AND e.department <> 'IT');",
    explanation: "Universal quantification ('all elements satisfy X') is expressed in SQL via double negation: 'exists at least one' AND 'not exists any that violates X'.",
    tags: ["interview", "not-exists", "relational-division", "logic"],
    estimatedTimeMinutes: 6
  },
  {
    id: 333,
    interviewQuestionNumber: 33,
    title: "Q33. Third Highest Distinct Salary Without LIMIT",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Hard",
    problemStatement: "Find the third highest distinct salary across all employees without using the LIMIT clause.",
    requirements: [
      "Do NOT use LIMIT.",
      "Use double nested subqueries with MAX(salary).",
      "Alias result as third_highest_salary."
    ],
    tableName: "Employees",
    hint: "SELECT MAX(salary) AS third_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees));",
    expectedSql: "SELECT MAX(salary) AS third_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees));",
    explanation: "Nesting the condition salary < MAX(salary) twice peels off the 1st and 2nd highest salaries to isolate the 3rd highest distinct salary.",
    tags: ["interview", "subquery", "nth-highest", "classic-interview"],
    estimatedTimeMinutes: 5
  },
  {
    id: 334,
    interviewQuestionNumber: 34,
    title: "Q34. Employees Working More Hours Than the Project Average",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Hard",
    problemStatement: "For each project assignment, find employees whose allocated hours strictly exceed the average allocated hours for that project.",
    requirements: [
      "Join Employee_Projects ep with Employees e on emp_id.",
      "Use a correlated subquery calculating AVG(hours_allocated) for ep.project_id.",
      "Display project_id, emp_name, and hours_allocated."
    ],
    tableName: "Employee_Projects, Employees",
    hint: "SELECT ep.project_id, e.emp_name, ep.hours_allocated FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.hours_allocated > (SELECT AVG(ep2.hours_allocated) FROM Employee_Projects ep2 WHERE ep2.project_id = ep.project_id);",
    expectedSql: "SELECT ep.project_id, e.emp_name, ep.hours_allocated FROM Employee_Projects ep INNER JOIN Employees e ON ep.emp_id = e.emp_id WHERE ep.hours_allocated > (SELECT AVG(ep2.hours_allocated) FROM Employee_Projects ep2 WHERE ep2.project_id = ep.project_id);",
    explanation: "Correlating on project_id computes the specific project's average workload and filters out assignments below it.",
    tags: ["interview", "correlated-subquery", "workload", "comparison"],
    estimatedTimeMinutes: 5
  },

  // =========================================================================
  // Part 5 — Ranking and Top-N Logic (Q35–Q39 -> IDs 335–339)
  // =========================================================================
  {
    id: 335,
    interviewQuestionNumber: 35,
    title: "Q35. Top 3 Highest Earners Overall",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Easy",
    problemStatement: "Display the top 3 highest-earning employees in the company, showing employee name, department, and salary.",
    requirements: [
      "Sort by salary DESC.",
      "Limit output to 3 rows.",
      "Select emp_name, department, and salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 3;",
    expectedSql: "SELECT emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 3;",
    explanation: "ORDER BY salary DESC paired with LIMIT 3 returns the top 3 highest paid individuals.",
    tags: ["interview", "order-by", "limit", "top-n"],
    estimatedTimeMinutes: 3
  },
  {
    id: 336,
    interviewQuestionNumber: 36,
    title: "Q36. Highest Earner in Each Department",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Medium",
    problemStatement: "Display the employee name, department, and salary for the highest earner in each department.",
    requirements: [
      "Use a correlated subquery matching e.salary with MAX(e2.salary) for that department.",
      "Display emp_name, department, and salary."
    ],
    tableName: "Employees",
    hint: "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary = (SELECT MAX(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    expectedSql: "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary = (SELECT MAX(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    explanation: "Correlating the salary to the maximum department salary isolates the top earner per group.",
    tags: ["interview", "correlated-subquery", "top-1-per-group", "max"],
    estimatedTimeMinutes: 5
  },
  {
    id: 337,
    interviewQuestionNumber: 37,
    title: "Q37. Dense Rank of Salaries by Department",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Medium",
    problemStatement: "Using SQL window functions, assign a dense rank to employees within each department ordered by salary descending.",
    requirements: [
      "Use DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC).",
      "Alias the ranking column as dept_salary_rank.",
      "Select emp_name, department, salary, and dept_salary_rank."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_salary_rank FROM Employees;",
    expectedSql: "SELECT emp_name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_salary_rank FROM Employees;",
    explanation: "DENSE_RANK() partitions rows by department and assigns consecutive integer ranks without gaps when ties occur.",
    tags: ["interview", "window-function", "dense-rank", "partition-by"],
    estimatedTimeMinutes: 5
  },
  {
    id: 338,
    interviewQuestionNumber: 38,
    title: "Q38. Employees with Identical Salaries",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Medium",
    problemStatement: "Find pairs of distinct employees who earn the exact same salary. Avoid duplicate pairings.",
    requirements: [
      "Self-join Employees on salary.",
      "Enforce e1.emp_id < e2.emp_id to prevent duplicates.",
      "Select e1.emp_name AS employee_1, e2.emp_name AS employee_2, and e1.salary."
    ],
    tableName: "Employees",
    hint: "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.salary FROM Employees e1 INNER JOIN Employees e2 ON e1.salary = e2.salary AND e1.emp_id < e2.emp_id;",
    expectedSql: "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.salary FROM Employees e1 INNER JOIN Employees e2 ON e1.salary = e2.salary AND e1.emp_id < e2.emp_id;",
    explanation: "Self-joining with an equality check on salary identifies compensation parity between colleagues.",
    tags: ["interview", "self-join", "duplicates", "parity"],
    estimatedTimeMinutes: 4
  },
  {
    id: 339,
    interviewQuestionNumber: 39,
    title: "Q39. Bottom 2 Lowest Earners in the Company",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Easy",
    problemStatement: "Find the 2 employees with the lowest salaries in the company, ordered from lowest salary upwards.",
    requirements: [
      "Sort by salary ASC.",
      "Limit output to 2 rows.",
      "Select emp_name, department, and salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, department, salary FROM Employees ORDER BY salary ASC LIMIT 2;",
    expectedSql: "SELECT emp_name, department, salary FROM Employees ORDER BY salary ASC LIMIT 2;",
    explanation: "Ascending sort with LIMIT 2 retrieves the base entry-level compensation records.",
    tags: ["interview", "order-by", "limit", "bottom-n"],
    estimatedTimeMinutes: 3
  },

  // =========================================================================
  // Part 6 — Duplicate Detection and Data Quality (Q40–Q43 -> IDs 340–343)
  // =========================================================================
  {
    id: 340,
    interviewQuestionNumber: 40,
    title: "Q40. Find Duplicate Office Locations Across Departments",
    topic: "Interview Ready Questions",
    subtopic: "Part 6 — Duplicate Detection and Data Quality",
    difficulty: "Medium",
    problemStatement: "Find any office locations that appear more than once across the Departments table, along with their frequency count.",
    requirements: [
      "Group by location.",
      "Filter for COUNT(*) > 1 using HAVING.",
      "Select location and COUNT(*) AS dept_count."
    ],
    tableName: "Departments",
    hint: "SELECT location, COUNT(*) AS dept_count FROM Departments GROUP BY location HAVING COUNT(*) > 1;",
    expectedSql: "SELECT location, COUNT(*) AS dept_count FROM Departments GROUP BY location HAVING COUNT(*) > 1;",
    explanation: "Group by column + HAVING COUNT(*) > 1 is the canonical SQL pattern for identifying duplicate categorical values.",
    tags: ["interview", "duplicates", "having", "data-quality"],
    estimatedTimeMinutes: 4
  },
  {
    id: 341,
    interviewQuestionNumber: 41,
    title: "Q41. Find Departments Without Any Employees",
    topic: "Interview Ready Questions",
    subtopic: "Part 6 — Duplicate Detection and Data Quality",
    difficulty: "Medium",
    problemStatement: "Find departments in the Departments table that currently have no assigned employees in the Employees table.",
    requirements: [
      "Perform a LEFT JOIN from Departments d to Employees e on d.dept_name = e.department.",
      "Filter for e.emp_id IS NULL.",
      "Display d.dept_id, d.dept_name, and d.location."
    ],
    tableName: "Departments, Employees",
    hint: "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
    explanation: "Checking for NULL primary keys on the joined child table detects orphaned parent master records.",
    tags: ["interview", "left-join", "anti-join", "data-integrity"],
    estimatedTimeMinutes: 4
  },
  {
    id: 342,
    interviewQuestionNumber: 42,
    title: "Q42. Identify Inactive Projects (Zero Assigned Hours)",
    topic: "Interview Ready Questions",
    subtopic: "Part 6 — Duplicate Detection and Data Quality",
    difficulty: "Medium",
    problemStatement: "Find projects that either have no assigned employees or have a total of 0 allocated hours.",
    requirements: [
      "Left join Projects with Employee_Projects.",
      "Group by project_id, project_name, and status.",
      "Use HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0;",
    expectedSql: "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0;",
    explanation: "Auditing zero assignments or zero hours allocated highlights inactive and stalled organizational initiatives.",
    tags: ["interview", "data-quality", "having", "coalesce"],
    estimatedTimeMinutes: 5
  },
  {
    id: 343,
    interviewQuestionNumber: 43,
    title: "Q43. Detect Salary Outliers within Department",
    topic: "Interview Ready Questions",
    subtopic: "Part 6 — Duplicate Detection and Data Quality",
    difficulty: "Hard",
    problemStatement: "Find employees whose salary is more than 30% higher than the average salary of their own department.",
    requirements: [
      "Join Employees with a subquery computing department average salary.",
      "Filter for e.salary > sub.avg_dept_sal * 1.3.",
      "Select e.emp_name, e.department, e.salary, and ROUND(sub.avg_dept_sal, 2) AS dept_avg_salary."
    ],
    tableName: "Employees",
    hint: "SELECT e.emp_name, e.department, e.salary, ROUND(sub.avg_dept_sal, 2) AS dept_avg_salary FROM Employees e INNER JOIN (SELECT department, AVG(salary) AS avg_dept_sal FROM Employees GROUP BY department) sub ON e.department = sub.department WHERE e.salary > sub.avg_dept_sal * 1.3;",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, ROUND(sub.avg_dept_sal, 2) AS dept_avg_salary FROM Employees e INNER JOIN (SELECT department, AVG(salary) AS avg_dept_sal FROM Employees GROUP BY department) sub ON e.department = sub.department WHERE e.salary > sub.avg_dept_sal * 1.3;",
    explanation: "Joining with pre-aggregated department averages allows mathematical multiplier comparisons to catch statistical outliers.",
    tags: ["interview", "outliers", "join", "statistics"],
    estimatedTimeMinutes: 5
  },

  // =========================================================================
  // Part 7 — Real-World Business Logic (Q44–Q46 -> IDs 344–346)
  // =========================================================================
  {
    id: 344,
    interviewQuestionNumber: 44,
    title: "Q44. Salary Review Eligibility",
    topic: "Interview Ready Questions",
    subtopic: "Part 7 — Real-World Business Logic",
    difficulty: "Medium",
    problemStatement: "Find employees in Finance or IT with at least 5 years of experience earning less than 70,000 INR, who qualify for a mid-year compensation review.",
    requirements: [
      "Filter department IN ('Finance', 'IT').",
      "Filter experience >= 5.",
      "Filter salary < 70000.",
      "Select emp_id, emp_name, department, experience, and salary."
    ],
    tableName: "Employees",
    hint: "SELECT emp_id, emp_name, department, experience, salary FROM Employees WHERE department IN ('Finance', 'IT') AND experience >= 5 AND salary < 70000;",
    expectedSql: "SELECT emp_id, emp_name, department, experience, salary FROM Employees WHERE department IN ('Finance', 'IT') AND experience >= 5 AND salary < 70000;",
    explanation: "Multi-condition business policy filtering identifies veteran employees who may be under-compensated.",
    tags: ["interview", "business-logic", "eligibility", "where"],
    estimatedTimeMinutes: 4
  },
  {
    id: 345,
    interviewQuestionNumber: 45,
    title: "Q45. Departments Exceeding Annual Salary Budget",
    topic: "Interview Ready Questions",
    subtopic: "Part 7 — Real-World Business Logic",
    difficulty: "Hard",
    problemStatement: "Compare each department's total annualized payroll (monthly salary * 12) against its annual budget. Return departments where annual payroll strictly exceeds the budget.",
    requirements: [
      "Join Departments with Employees on d.dept_name = e.department.",
      "Group by d.dept_name and d.budget.",
      "Filter using HAVING SUM(e.salary * 12) > d.budget.",
      "Select d.dept_name, SUM(e.salary * 12) AS annual_payroll, and d.budget."
    ],
    tableName: "Departments, Employees",
    hint: "SELECT d.dept_name, SUM(e.salary * 12) AS annual_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING SUM(e.salary * 12) > d.budget;",
    expectedSql: "SELECT d.dept_name, SUM(e.salary * 12) AS annual_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING SUM(e.salary * 12) > d.budget;",
    explanation: "Business budget compliance audits aggregate monthly salaries across 12 months and compare against authorized department allocations.",
    tags: ["interview", "budget", "payroll", "having", "business-logic"],
    estimatedTimeMinutes: 5
  },
  {
    id: 346,
    interviewQuestionNumber: 46,
    title: "Q46. Workload Classification by Total Allocated Hours",
    topic: "Interview Ready Questions",
    subtopic: "Part 7 — Real-World Business Logic",
    difficulty: "Hard",
    problemStatement: "Calculate total weekly hours allocated to each employee across all projects and classify their workload into tiers: 'Unassigned' (0 hours), 'Light Workload' (under 25 hours), 'Moderate Workload' (25 to 35 hours), and 'Heavy Workload' (over 35 hours).",
    requirements: [
      "Left join Employees with Employee_Projects.",
      "Group by e.emp_id and e.emp_name.",
      "Use CASE to classify total weekly hours.",
      "Select e.emp_id, e.emp_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, and the workload_tier."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "SELECT e.emp_id, e.emp_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, CASE WHEN COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unassigned' WHEN SUM(ep.hours_allocated) < 25 THEN 'Light Workload' WHEN SUM(ep.hours_allocated) <= 35 THEN 'Moderate Workload' ELSE 'Heavy Workload' END AS workload_tier FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name;",
    expectedSql: "SELECT e.emp_id, e.emp_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours, CASE WHEN COALESCE(SUM(ep.hours_allocated), 0) = 0 THEN 'Unassigned' WHEN SUM(ep.hours_allocated) < 25 THEN 'Light Workload' WHEN SUM(ep.hours_allocated) <= 35 THEN 'Moderate Workload' ELSE 'Heavy Workload' END AS workload_tier FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name;",
    explanation: "Combining aggregation, COALESCE, and CASE categorization creates powerful capacity planning summaries.",
    tags: ["interview", "case", "coalesce", "capacity-planning"],
    estimatedTimeMinutes: 6
  },

  // =========================================================================
  // Part 8 — CASE Expressions (Q47–Q50 -> IDs 347–350)
  // =========================================================================
  {
    id: 347,
    interviewQuestionNumber: 47,
    title: "Q47. Salary Tier Classification",
    topic: "Interview Ready Questions",
    subtopic: "Part 8 — CASE Expressions",
    difficulty: "Easy",
    problemStatement: "Classify each employee's salary into tiers: 'Low' for salaries below 35,000, 'Medium' for salaries between 35,000 and 60,000 inclusive, and 'High' for salaries above 60,000.",
    requirements: [
      "Use a CASE expression evaluating salary thresholds.",
      "Select emp_name, department, salary, and alias the classification as salary_tier."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, department, salary, CASE WHEN salary < 35000 THEN 'Low' WHEN salary <= 60000 THEN 'Medium' ELSE 'High' END AS salary_tier FROM Employees;",
    expectedSql: "SELECT emp_name, department, salary, CASE WHEN salary < 35000 THEN 'Low' WHEN salary <= 60000 THEN 'Medium' ELSE 'High' END AS salary_tier FROM Employees;",
    explanation: "CASE statements in SELECT allow branching conditional categorization without modifying table data.",
    tags: ["interview", "case", "classification", "tiers"],
    estimatedTimeMinutes: 3
  },
  {
    id: 348,
    interviewQuestionNumber: 48,
    title: "Q48. Experience-Based Seniority Tier",
    topic: "Interview Ready Questions",
    subtopic: "Part 8 — CASE Expressions",
    difficulty: "Easy",
    problemStatement: "Classify employees into seniority tiers based on years of experience: 'Fresher' (under 2 years), 'Junior' (2 to 4 years), 'Mid-Level' (5 to 8 years), and 'Senior' (9 or more years).",
    requirements: [
      "Evaluate experience using CASE WHEN conditions.",
      "Select emp_name, experience, and alias tier as seniority_tier."
    ],
    tableName: "Employees",
    hint: "SELECT emp_name, experience, CASE WHEN experience < 2 THEN 'Fresher' WHEN experience <= 4 THEN 'Junior' WHEN experience <= 8 THEN 'Mid-Level' ELSE 'Senior' END AS seniority_tier FROM Employees;",
    expectedSql: "SELECT emp_name, experience, CASE WHEN experience < 2 THEN 'Fresher' WHEN experience <= 4 THEN 'Junior' WHEN experience <= 8 THEN 'Mid-Level' ELSE 'Senior' END AS seniority_tier FROM Employees;",
    explanation: "Evaluating integer thresholds sequentially in a CASE expression partitions employees into standard organizational career levels.",
    tags: ["interview", "case", "seniority", "experience"],
    estimatedTimeMinutes: 3
  },
  {
    id: 349,
    interviewQuestionNumber: 49,
    title: "Q49. Conditional Department Salary Summary",
    topic: "Interview Ready Questions",
    subtopic: "Part 8 — CASE Expressions",
    difficulty: "Medium",
    problemStatement: "For each department, calculate the count of high earners (salary > 50,000) and standard earners (salary <= 50,000) using conditional aggregation with CASE expressions.",
    requirements: [
      "Group by department.",
      "Use SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners.",
      "Use SUM(CASE WHEN salary <= 50000 THEN 1 ELSE 0 END) AS standard_earners."
    ],
    tableName: "Employees",
    hint: "SELECT department, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners, SUM(CASE WHEN salary <= 50000 THEN 1 ELSE 0 END) AS standard_earners FROM Employees GROUP BY department;",
    expectedSql: "SELECT department, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners, SUM(CASE WHEN salary <= 50000 THEN 1 ELSE 0 END) AS standard_earners FROM Employees GROUP BY department;",
    explanation: "Embedding CASE expressions inside SUM() pivots conditional counts into multiple columns, a key interview data modeling pattern.",
    tags: ["interview", "conditional-aggregation", "case", "pivot"],
    estimatedTimeMinutes: 5
  },
  {
    id: 350,
    interviewQuestionNumber: 50,
    title: "Q50. Performance-Based Bonus Recommendation",
    topic: "Interview Ready Questions",
    subtopic: "Part 8 — CASE Expressions",
    difficulty: "Medium",
    problemStatement: "Recommend a bonus category for each reviewed employee based on their rating: rating of 5 is 'Exceptional', rating of 4 is 'Strong', rating of 3 is 'Satisfactory', and anything below 3 is 'Needs Improvement'.",
    requirements: [
      "Join Employees with Performance_Reviews on emp_id.",
      "Use CASE to determine the recommendation label.",
      "Select e.emp_name, pr.review_year, pr.rating, and alias the recommendation as recommendation."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "SELECT e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.rating = 5 THEN 'Exceptional' WHEN pr.rating = 4 THEN 'Strong' WHEN pr.rating = 3 THEN 'Satisfactory' ELSE 'Needs Improvement' END AS recommendation FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    expectedSql: "SELECT e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.rating = 5 THEN 'Exceptional' WHEN pr.rating = 4 THEN 'Strong' WHEN pr.rating = 3 THEN 'Satisfactory' ELSE 'Needs Improvement' END AS recommendation FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Mapping numeric review scores to corporate qualitative appraisal designations is a classic CASE expression application.",
    tags: ["interview", "case", "performance", "ratings"],
    estimatedTimeMinutes: 4
  }
];
