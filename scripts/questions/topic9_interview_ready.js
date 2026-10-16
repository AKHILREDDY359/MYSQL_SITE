export const TOPIC9_QUESTIONS = [
  // =========================================================================
  // Part 1 — Filtering and Conditions (Q1–Q5 -> IDs 301–305)
  // =========================================================================
  {
    id: 301,
    interviewQuestionNumber: 1,
    title: "Q1. High-Compensation Workforce Threshold",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Beginner",
    problemStatement: "The executive compensation committee is reviewing senior payroll across all departments. Identify all employees whose monthly salary strictly exceeds 50,000, displaying their identification and department details.",
    requirements: [
      "Select `emp_id`, `emp_name`, `department`, and `salary` in that exact order.",
      "Filter for staff members earning strictly more than 50,000."
    ],
    tableName: "Employees",
    hint: "Use an inequality comparison on the salary attribute.",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > 50000;",
    explanation: "Standard numeric comparison using the > comparison operator filters records whose compensation exceeds the threshold.",
    tags: ["interview", "filtering", "where", "comparison"],
    estimatedTimeMinutes: 3
  },
  {
    id: 302,
    interviewQuestionNumber: 2,
    title: "Q2. Mid-Bracket Compensation Filter",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Beginner",
    problemStatement: "Human Resources is auditing middle-tier salary bands for standard pay parity. Retrieve the name and monthly salary for all employees whose salary falls within the range of 30,000 to 60,000, inclusive of both boundaries.",
    requirements: [
      "Select `emp_name` and `salary` from Employees.",
      "Filter for compensation between 30,000 and 60,000 inclusive."
    ],
    tableName: "Employees",
    hint: "Use an inclusive range operator to test the salary value.",
    expectedSql: "SELECT emp_name, salary FROM Employees WHERE salary BETWEEN 30000 AND 60000;",
    explanation: "BETWEEN is inclusive in SQL, returning all records where salary >= 30000 AND salary <= 60000.",
    tags: ["interview", "range", "between", "filtering"],
    estimatedTimeMinutes: 3
  },
  {
    id: 303,
    interviewQuestionNumber: 3,
    title: "Q3. Senior Technical Division Staff",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Easy",
    problemStatement: "The Chief Technology Officer requires a complete profile of senior earners within the engineering organization. Retrieve all available columns for employees who belong to the IT department and earn strictly more than 50,000.",
    requirements: [
      "Select all columns from the Employees table.",
      "Filter for staff assigned to the 'IT' department whose salary strictly exceeds 50,000."
    ],
    tableName: "Employees",
    hint: "Combine the department filter and salary condition using a logical AND operator.",
    expectedSql: "SELECT * FROM Employees WHERE department = 'IT' AND salary > 50000;",
    explanation: "The AND operator requires both predicates to evaluate to TRUE for a row to be included.",
    tags: ["interview", "and", "logical-operators", "filtering"],
    estimatedTimeMinutes: 3
  },
  {
    id: 304,
    interviewQuestionNumber: 4,
    title: "Q4. Southern Regional Hub Experienced Talent",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Easy",
    problemStatement: "Regional management is identifying experienced personnel stationed in southern metropolitan branch offices. Retrieve all columns for employees who are based in either Hyderabad or Chennai and possess at least 3 years of professional experience.",
    requirements: [
      "Select all columns from the Employees table.",
      "Filter for employees based in 'Hyderabad' or 'Chennai'.",
      "Ensure the employee has at least 3 years of experience (`experience >= 3`)."
    ],
    tableName: "Employees",
    hint: "Combine a location set check with a minimum experience condition using AND.",
    expectedSql: "SELECT * FROM Employees WHERE city IN ('Hyderabad', 'Chennai') AND experience >= 3;",
    explanation: "Combining the IN set operator with AND allows concise expression of multiple allowed city locations alongside an experience threshold.",
    tags: ["interview", "in", "filtering", "experience"],
    estimatedTimeMinutes: 4
  },
  {
    id: 305,
    interviewQuestionNumber: 5,
    title: "Q5. Name Pattern Identification (Prefix or Suffix A)",
    topic: "Interview Ready Questions",
    subtopic: "Part 1 — Filtering and Conditions",
    difficulty: "Easy",
    problemStatement: "Identity governance is verifying badge transliteration conventions for names starting or ending with the letter 'A'. Display employee ID and full name for all staff whose name starts with capital 'A' OR ends with 'a' (case-insensitive).",
    requirements: [
      "Select `emp_id` and `emp_name` from Employees.",
      "Filter for names starting with 'A' or ending with 'a'."
    ],
    tableName: "Employees",
    hint: "Use pattern matching with wildcards combined with an OR operator.",
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
    title: "Q6. Total Workforce Census",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Beginner",
    problemStatement: "The board of directors requests an official headcount audit of all active staff members across the enterprise. Calculate the total number of employees currently recorded in the system.",
    requirements: [
      "Calculate the total record count from the Employees table.",
      "Alias the aggregated count as `total_employees`."
    ],
    tableName: "Employees",
    hint: "Apply the standard counting aggregate function across all records.",
    expectedSql: "SELECT COUNT(*) AS total_employees FROM Employees;",
    explanation: "COUNT(*) tallies the total number of rows matching the query, including rows with NULL values.",
    tags: ["interview", "count", "aggregates"],
    estimatedTimeMinutes: 2
  },
  {
    id: 307,
    interviewQuestionNumber: 7,
    title: "Q7. Departmental Average Salary Ranking",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Easy",
    problemStatement: "Corporate treasury is benchmarking departmental compensation across business units. Display each department name along with the average employee salary, ordered from the highest-paying department to the lowest.",
    requirements: [
      "Group records by `department`.",
      "Calculate the average salary aliased as `avg_salary`.",
      "Sort the results by average salary in descending order.",
      "Display `department` and `avg_salary`."
    ],
    tableName: "Employees",
    hint: "Group by department, calculate AVG(salary), and apply ORDER BY avg_salary DESC.",
    expectedSql: "SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department ORDER BY avg_salary DESC;",
    explanation: "GROUP BY partitions rows by department, AVG computes the mean salary per department, and ORDER BY DESC sorts highest to lowest.",
    tags: ["interview", "groupby", "avg", "order-by"],
    estimatedTimeMinutes: 3
  },
  {
    id: 308,
    interviewQuestionNumber: 8,
    title: "Q8. Major Operational Departments by Headcount",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Easy",
    problemStatement: "Operations management wants to isolate major operational divisions that maintain substantial staffing. Display the department name and total employee count for all departments that employ strictly more than 3 staff members.",
    requirements: [
      "Group records by `department`.",
      "Calculate employee count aliased as `emp_count`.",
      "Filter the aggregated groups for headcounts strictly greater than 3.",
      "Display `department` and `emp_count`."
    ],
    tableName: "Employees",
    hint: "Use a post-aggregation filter to restrict groups where COUNT(*) > 3.",
    expectedSql: "SELECT department, COUNT(*) AS emp_count FROM Employees GROUP BY department HAVING COUNT(*) > 3;",
    explanation: "HAVING filters groups post-aggregation, unlike WHERE which filters individual rows prior to grouping.",
    tags: ["interview", "having", "groupby", "count"],
    estimatedTimeMinutes: 4
  },
  {
    id: 309,
    interviewQuestionNumber: 9,
    title: "Q9. Enterprise Salary Extremes and Disparity",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Easy",
    problemStatement: "The executive compensation committee is analyzing the full wage spread across the enterprise. Produce a single-row summary showing the highest salary, lowest salary, and the absolute difference between them.",
    requirements: [
      "Find the maximum salary aliased as `max_salary`.",
      "Find the minimum salary aliased as `min_salary`.",
      "Calculate the difference (maximum minus minimum salary) aliased as `salary_difference`.",
      "Display all three metrics from the Employees table."
    ],
    tableName: "Employees",
    hint: "Apply MAX, MIN, and MAX(salary) - MIN(salary) in a single SELECT projection.",
    expectedSql: "SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary, MAX(salary) - MIN(salary) AS salary_difference FROM Employees;",
    explanation: "Aggregate functions can be combined in mathematical arithmetic expressions to compute statistical ranges.",
    tags: ["interview", "min", "max", "arithmetic"],
    estimatedTimeMinutes: 3
  },
  {
    id: 310,
    interviewQuestionNumber: 10,
    title: "Q10. Departmental Payroll Expenditure Summary",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Easy",
    problemStatement: "Finance leadership requires monthly wage expenditure breakdowns across business units. For each department, display the department name and total cumulative monthly salary expense paid to its employees.",
    requirements: [
      "Group records by `department`.",
      "Calculate the sum of all salaries in each department, aliased as `total_salary_expense`.",
      "Display `department` and `total_salary_expense`."
    ],
    tableName: "Employees",
    hint: "Group by department and apply the sum aggregate function to salary.",
    expectedSql: "SELECT department, SUM(salary) AS total_salary_expense FROM Employees GROUP BY department;",
    explanation: "SUM(salary) aggregates total compensation outlay within each partitioned department group.",
    tags: ["interview", "sum", "groupby", "payroll"],
    estimatedTimeMinutes: 3
  },
  {
    id: 311,
    interviewQuestionNumber: 11,
    title: "Q11. High-Compensating Regional Hubs",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Medium",
    problemStatement: "Human Resources is identifying branch cities where employee compensation runs above standard levels. Display the city name and average monthly salary for all cities where the average salary strictly exceeds 45,000.",
    requirements: [
      "Group records by `city`.",
      "Calculate average salary aliased as `avg_salary`.",
      "Filter groups where average salary is strictly greater than 45,000.",
      "Display `city` and `avg_salary`."
    ],
    tableName: "Employees",
    hint: "Group by city and use a HAVING clause checking AVG(salary) > 45000.",
    expectedSql: "SELECT city, AVG(salary) AS avg_salary FROM Employees GROUP BY city HAVING AVG(salary) > 45000;",
    explanation: "The HAVING clause applies group-level filters on the calculated mean salary per city.",
    tags: ["interview", "city", "avg", "having"],
    estimatedTimeMinutes: 4
  },
  {
    id: 312,
    interviewQuestionNumber: 12,
    title: "Q12. Departmental Comprehensive Salary Statistics",
    topic: "Interview Ready Questions",
    subtopic: "Part 2 — Aggregates and Grouping",
    difficulty: "Medium",
    problemStatement: "Executive management is reviewing complete compensation metrics by division. For each department, display the department name, total headcount, average salary, highest salary, and lowest salary.",
    requirements: [
      "Group records by `department`.",
      "Calculate employee count aliased as `employee_count`.",
      "Calculate average salary aliased as `avg_salary`.",
      "Find maximum salary aliased as `max_salary` and minimum salary aliased as `min_salary`.",
      "Display `department`, `employee_count`, `avg_salary`, `max_salary`, and `min_salary`."
    ],
    tableName: "Employees",
    hint: "Group by department and calculate COUNT, AVG, MAX, and MIN across the salary column.",
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
    title: "Q13. Staff Profile with Department Headquarters",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Easy",
    problemStatement: "Facilities administration is cross-referencing staff members with official departmental locations. Display employee name, salary, department name, and department office location for all employees whose department is registered.",
    requirements: [
      "Join Employees and Departments based on matching department name.",
      "Display `emp_name`, `salary`, `dept_name`, and `location`."
    ],
    tableName: "Employees, Departments",
    hint: "Connect Employees and Departments on e.department = d.dept_name.",
    expectedSql: "SELECT e.emp_name, e.salary, d.dept_name, d.location FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name;",
    explanation: "INNER JOIN matches rows having equal department names across both tables, enriching employee data with departmental headquarters locations.",
    tags: ["interview", "inner-join", "departments", "relationships"],
    estimatedTimeMinutes: 4
  },
  {
    id: 314,
    interviewQuestionNumber: 14,
    title: "Q14. Unassigned Staff Identification",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Resource management is identifying employees who are not currently deployed to any project. Find employee ID, full name, and department for all employees who have zero project assignment records.",
    requirements: [
      "Combine Employees with Employee_Projects ensuring all employees are checked.",
      "Filter for employees with no corresponding assignment record.",
      "Display `emp_id`, `emp_name`, and `department`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Use an outer join from Employees to Employee_Projects and filter where project_id is null.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e LEFT JOIN Employee_Projects ep ON e.emp_id = ep.emp_id WHERE ep.project_id IS NULL;",
    explanation: "A LEFT JOIN with an IS NULL predicate on the joined table's foreign key detects non-participating (unassigned) entities.",
    tags: ["interview", "left-join", "anti-join", "null-check"],
    estimatedTimeMinutes: 4
  },
  {
    id: 315,
    interviewQuestionNumber: 15,
    title: "Q15. Unstaffed Project Identification",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "The PMO is identifying projects that are currently operating without any assigned team members. Display the project ID, project name, and status for all initiatives in Projects that have zero assignments.",
    requirements: [
      "Combine Projects with Employee_Projects ensuring all projects are inspected.",
      "Filter for projects that have no corresponding staff assignments.",
      "Display `project_id`, `project_name`, and `status`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Use an outer join from Projects to Employee_Projects and filter where emp_id is null.",
    expectedSql: "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id WHERE ep.emp_id IS NULL;",
    explanation: "Using LEFT JOIN and filtering for ep.emp_id IS NULL finds projects that have zero staffing allocations.",
    tags: ["interview", "left-join", "projects", "anti-join"],
    estimatedTimeMinutes: 4
  },
  {
    id: 316,
    interviewQuestionNumber: 16,
    title: "Q16. Multi-Project Contributor Identification",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Resource governance is tracking employees who juggle multiple project assignments concurrently. Find all employees who are assigned to strictly more than 1 distinct project, displaying their name and total distinct project count.",
    requirements: [
      "Join Employees with Employee_Projects on employee ID.",
      "Group by employee ID and employee name.",
      "Count distinct assigned projects aliased as `project_count`.",
      "Filter groups where distinct project count is strictly greater than 1.",
      "Display `emp_name` and `project_count`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Group by employee and apply HAVING COUNT(DISTINCT ep.project_id) > 1.",
    expectedSql: "SELECT e.emp_name, COUNT(DISTINCT ep.project_id) AS project_count FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id GROUP BY e.emp_id, e.emp_name HAVING COUNT(DISTINCT ep.project_id) > 1;",
    explanation: "Counting distinct project_ids after grouping by employee identifies multi-project contributors.",
    tags: ["interview", "join", "having", "count-distinct"],
    estimatedTimeMinutes: 5
  },
  {
    id: 317,
    interviewQuestionNumber: 17,
    title: "Q17. Staff Initiative Assignment Profile",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Project operations requires a detailed roster of team assignments. Retrieve the employee name, project name, assigned role, and weekly allocated hours for all assigned personnel.",
    requirements: [
      "Join Employees, Employee_Projects (on emp_id), and Projects (on project_id).",
      "Display `emp_name`, `project_name`, `assigned_role`, and `hours_allocated`."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "Connect Employees, Employee_Projects, and Projects using their foreign key relationships.",
    expectedSql: "SELECT e.emp_name, p.project_name, ep.assigned_role, ep.hours_allocated FROM Employees e INNER JOIN Employee_Projects ep ON e.emp_id = ep.emp_id INNER JOIN Projects p ON ep.project_id = p.project_id;",
    explanation: "Joining junction table Employee_Projects with both parent entities links individual staff to their concrete deliverables and allocated hours.",
    tags: ["interview", "three-table-join", "junction", "projects"],
    estimatedTimeMinutes: 5
  },
  {
    id: 318,
    interviewQuestionNumber: 18,
    title: "Q18. Department Staffing Census Including Unstaffed Units",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Organization design is auditing employee placement across all registered divisions. Display the department name and total employee count for every department in Departments, ensuring departments with zero staff display a count of 0.",
    requirements: [
      "Combine Departments and Employees preserving all registered departments.",
      "Group records by department name.",
      "Count assigned employee records aliased as `employee_count`.",
      "Display `dept_name` and `employee_count`."
    ],
    tableName: "Departments, Employees",
    hint: "Use a left outer join from Departments to Employees and apply COUNT(e.emp_id).",
    expectedSql: "SELECT d.dept_name, COUNT(e.emp_id) AS employee_count FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name;",
    explanation: "COUNT(column) ignores NULLs produced by the LEFT JOIN for unmatched departments, returning an accurate 0.",
    tags: ["interview", "left-join", "count", "empty-groups"],
    estimatedTimeMinutes: 5
  },
  {
    id: 319,
    interviewQuestionNumber: 19,
    title: "Q19. Intra-Departmental Colleague Pairings",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Team building coordinators are mapping colleague pairings within business units. Find all unique pairs of employees who work in the same department, displaying employee 1 name as `employee_1`, employee 2 name as `employee_2`, and the department name, without duplicate reverse pairings.",
    requirements: [
      "Join Employees with itself on matching department.",
      "Enforce `e1.emp_id < e2.emp_id` to eliminate mirror pairs and self-pairings.",
      "Display `employee_1`, `employee_2`, and `department`."
    ],
    tableName: "Employees",
    hint: "Use a self-join on department with e1.emp_id < e2.emp_id.",
    expectedSql: "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.department FROM Employees e1 INNER JOIN Employees e2 ON e1.department = e2.department AND e1.emp_id < e2.emp_id;",
    explanation: "Self-joining with a strict inequality condition (e1.emp_id < e2.emp_id) pairs each unique unordered combination exactly once.",
    tags: ["interview", "self-join", "pairs", "de-duplication"],
    estimatedTimeMinutes: 5
  },
  {
    id: 320,
    interviewQuestionNumber: 20,
    title: "Q20. Staff Out-Earning Department Leadership",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Hard",
    problemStatement: "Compensation governance is identifying anomalous cases where an individual employee out-earns their department head. Display employee name, department, employee salary, department head name (`dept_head_name`), and department head salary (`dept_head_salary`) for employees who earn strictly more than their department head.",
    requirements: [
      "Join Employees with Departments (on department name), and join Departments with Employees again to match the department head (`dept_head` to `emp_name`).",
      "Filter for cases where the employee's salary strictly exceeds the department head's salary.",
      "Display `emp_name`, `department`, `salary`, `dept_head_name`, and `dept_head_salary`."
    ],
    tableName: "Employees, Departments",
    hint: "Join Employees with Departments and join a second instance of Employees representing the department head.",
    expectedSql: "SELECT e.emp_name, e.department, e.salary, mgr.emp_name AS dept_head_name, mgr.salary AS dept_head_salary FROM Employees e INNER JOIN Departments d ON e.department = d.dept_name INNER JOIN Employees mgr ON d.dept_head = mgr.emp_name WHERE e.salary > mgr.salary;",
    explanation: "Joining Employees twice—first as regular employees and second as department managers—allows direct comparison of hierarchical compensation.",
    tags: ["interview", "self-join", "hierarchy", "salary-comparison"],
    estimatedTimeMinutes: 6
  },
  {
    id: 321,
    interviewQuestionNumber: 21,
    title: "Q21. Cross-Departmental Project Collaborators",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Hard",
    problemStatement: "The PMO is tracking cross-functional collaboration on initiatives. Find pairs of employees who collaborate on the same project but belong to different departments, displaying the project ID, employee 1 name (`employee_1`), department 1 (`dept_1`), employee 2 name (`employee_2`), and department 2 (`dept_2`), avoiding duplicate reverse pairs.",
    requirements: [
      "Join Employee_Projects with itself on matching project ID where `ep1.emp_id < ep2.emp_id`.",
      "Join each assignment with Employees to retrieve employee names and departments.",
      "Filter for pairs where `e1.department <> e2.department`.",
      "Display `project_id`, `employee_1`, `dept_1`, `employee_2`, and `dept_2`."
    ],
    tableName: "Employee_Projects, Employees",
    hint: "Self-join Employee_Projects on project_id and join with Employees to compare departments.",
    expectedSql: "SELECT ep1.project_id, e1.emp_name AS employee_1, e1.department AS dept_1, e2.emp_name AS employee_2, e2.department AS dept_2 FROM Employee_Projects ep1 INNER JOIN Employee_Projects ep2 ON ep1.project_id = ep2.project_id AND ep1.emp_id < ep2.emp_id INNER JOIN Employees e1 ON ep1.emp_id = e1.emp_id INNER JOIN Employees e2 ON ep2.emp_id = e2.emp_id WHERE e1.department <> e2.department;",
    explanation: "Joining the assignment table with itself and validating cross-department membership discovers inter-disciplinary project pairings.",
    tags: ["interview", "cross-department", "self-join", "collaboration"],
    estimatedTimeMinutes: 6
  },
  {
    id: 322,
    interviewQuestionNumber: 22,
    title: "Q22. Project Cumulative Workload Hours",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Medium",
    problemStatement: "Resource governance requires an overview of weekly hours committed to every project. Display the project name and total allocated weekly hours for all projects in Projects, ensuring initiatives with zero assignments display 0 total hours.",
    requirements: [
      "Combine Projects and Employee_Projects preserving all projects.",
      "Group records by project ID and project name.",
      "Sum weekly hours substituting 0 for nulls, aliased as `total_hours`.",
      "Display `project_name` and `total_hours`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Left join Projects to Employee_Projects and apply COALESCE(SUM(hours_allocated), 0).",
    expectedSql: "SELECT p.project_name, COALESCE(SUM(ep.hours_allocated), 0) AS total_hours FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name;",
    explanation: "COALESCE converts NULL sums into 0 for projects that currently have no logged assignments.",
    tags: ["interview", "left-join", "coalesce", "aggregation"],
    estimatedTimeMinutes: 5
  },
  {
    id: 323,
    interviewQuestionNumber: 23,
    title: "Q23. Perfect Performance Appraisal Reviewees",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Easy",
    problemStatement: "Executive leadership is recognizing employees who achieved top ratings. Display employee name, department, evaluation year, and rating for all appraisals where the employee earned a perfect rating of 5.",
    requirements: [
      "Join Employees and Performance_Reviews on employee ID.",
      "Filter for evaluations with a rating of 5.",
      "Display `emp_name`, `department`, `review_year`, and `rating`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Join on emp_id and filter for rating = 5 in the WHERE clause.",
    expectedSql: "SELECT e.emp_name, e.department, pr.review_year, pr.rating FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id WHERE pr.rating = 5;",
    explanation: "Filtering on the joined appraisal table pinpoints top-tier evaluation events across the organization.",
    tags: ["interview", "inner-join", "performance", "filtering"],
    estimatedTimeMinutes: 4
  },
  {
    id: 324,
    interviewQuestionNumber: 24,
    title: "Q24. Most Recent Appraisal per Staff Member",
    topic: "Interview Ready Questions",
    subtopic: "Part 3 — JOIN-Based Problems",
    difficulty: "Hard",
    problemStatement: "Human Resources requires each employee's most recent performance evaluation. Display employee name, department, review year, and rating for each reviewed employee's latest appraisal record (the one with the latest review year, breaking ties by review ID).",
    requirements: [
      "Join Employees with Performance_Reviews on employee ID.",
      "Filter for the single latest review record per employee using a correlated subquery.",
      "Display `emp_name`, `department`, `review_year`, and `rating`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Filter review_id equal to a correlated subquery ordered by review_year DESC, review_id DESC LIMIT 1.",
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
    title: "Q25. Staff Earning Above Company Average",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Easy",
    problemStatement: "Workforce compensation is reviewing above-average earners across the company. Find all employees whose monthly salary strictly exceeds the overall average salary calculated across the entire workforce.",
    requirements: [
      "Calculate the overall average employee salary across the organization.",
      "Filter for employees whose salary strictly exceeds that dynamic average.",
      "Display `emp_id`, `emp_name`, `department`, and `salary`."
    ],
    tableName: "Employees",
    hint: "Compare each employee's salary against a scalar subquery calculating AVG(salary).",
    expectedSql: "SELECT emp_id, emp_name, department, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
    explanation: "The scalar subquery computes the overall mean compensation once and evaluates each employee against it.",
    tags: ["interview", "subquery", "scalar", "avg"],
    estimatedTimeMinutes: 3
  },
  {
    id: 326,
    interviewQuestionNumber: 26,
    title: "Q26. Second Highest Salary Identification",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "Executive remuneration analysis is determining the second-highest compensation figure in the company without using LIMIT or OFFSET clauses. Find the second highest salary recorded in the Employees table.",
    requirements: [
      "Determine the peak salary value using a subquery.",
      "Find the maximum salary among all values strictly less than that peak.",
      "Alias the resulting figure as `second_highest_salary`."
    ],
    tableName: "Employees",
    hint: "Find MAX(salary) WHERE salary < (SELECT MAX(salary) FROM Employees).",
    expectedSql: "SELECT MAX(salary) AS second_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees);",
    explanation: "Finding the maximum salary strictly smaller than the absolute maximum yields the 2nd highest salary in pure ANSI SQL.",
    tags: ["interview", "subquery", "second-highest", "classic-interview"],
    estimatedTimeMinutes: 4
  },
  {
    id: 327,
    interviewQuestionNumber: 27,
    title: "Q27. Staff in Well-Funded Corporate Divisions",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "Corporate treasury is reviewing personnel assigned to divisions that receive above-average funding. Display employee name, department, and salary for staff working in departments whose operating budget strictly exceeds the average departmental budget.",
    requirements: [
      "Calculate the average operating budget across all departments.",
      "Identify departments whose budget strictly exceeds that average.",
      "Filter employees whose department belongs to that qualifying set.",
      "Display `emp_name`, `department`, and `salary` from Employees."
    ],
    tableName: "Employees, Departments",
    hint: "Use IN with a subquery filtering Departments WHERE budget > (SELECT AVG(budget) FROM Departments).",
    expectedSql: "SELECT emp_name, department, salary FROM Employees WHERE department IN (SELECT dept_name FROM Departments WHERE budget > (SELECT AVG(budget) FROM Departments));",
    explanation: "Nested subqueries first determine the company-wide average budget, find departments exceeding it, and filter the employee roster.",
    tags: ["interview", "subquery", "in", "nested"],
    estimatedTimeMinutes: 5
  },
  {
    id: 328,
    interviewQuestionNumber: 28,
    title: "Q28. Staff Deployed to High-Budget Initiatives",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "Project governance is tracking unique staff members working on major corporate programs. Find the unique employee ID, full name, and department for employees assigned to at least one project with a capital budget strictly exceeding 250,000.",
    requirements: [
      "Identify employee IDs assigned to projects with a budget strictly greater than 250,000.",
      "Filter Employees for staff matching that list, ensuring distinct records.",
      "Display `emp_id`, `emp_name`, and `department`."
    ],
    tableName: "Employees, Employee_Projects, Projects",
    hint: "Use DISTINCT with IN and an inner join between Employee_Projects and Projects.",
    expectedSql: "SELECT DISTINCT e.emp_id, e.emp_name, e.department FROM Employees e WHERE e.emp_id IN (SELECT ep.emp_id FROM Employee_Projects ep INNER JOIN Projects p ON ep.project_id = p.project_id WHERE p.budget > 250000);",
    explanation: "Subqueries filtering on junction tables cleanly isolate employees attached to high-value initiatives.",
    tags: ["interview", "subquery", "in", "distinct"],
    estimatedTimeMinutes: 5
  },
  {
    id: 329,
    interviewQuestionNumber: 29,
    title: "Q29. Department with Largest Payroll Obligation",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "Finance leadership is identifying the single business unit that carries the highest monthly wage expense. Display the department name and total cumulative monthly payroll for the department with the largest total payroll in the company.",
    requirements: [
      "Group employees by department and calculate cumulative payroll aliased as `total_payroll`.",
      "Order by total payroll in descending order.",
      "Limit the result to the single top department.",
      "Display `department` and `total_payroll`."
    ],
    tableName: "Employees",
    hint: "Group by department, sum salary, sort descending, and limit to 1.",
    expectedSql: "SELECT department, SUM(salary) AS total_payroll FROM Employees GROUP BY department ORDER BY total_payroll DESC LIMIT 1;",
    explanation: "Grouping by department and sorting by aggregate sum descending yields the largest spending department.",
    tags: ["interview", "aggregation", "order-by", "limit"],
    estimatedTimeMinutes: 4
  },
  {
    id: 330,
    interviewQuestionNumber: 30,
    title: "Q30. Staff Earning Above Department Average",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Hard",
    problemStatement: "Workforce compensation is reviewing intra-departmental salary equity. Find all employees whose salary strictly exceeds the average salary of colleagues working within their own department, displaying employee name, department, and salary.",
    requirements: [
      "Compare each employee's salary against the average salary computed for their own department.",
      "Filter for staff members earning strictly more than that departmental average.",
      "Display `emp_name`, `department`, and `salary` from Employees."
    ],
    tableName: "Employees",
    hint: "Use a correlated subquery computing AVG(salary) for matching departments.",
    expectedSql: "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary > (SELECT AVG(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    explanation: "Correlated subqueries re-evaluate the inner average per outer row, comparing each individual's salary to peers in their own department.",
    tags: ["interview", "correlated-subquery", "salary", "avg"],
    estimatedTimeMinutes: 5
  },
  {
    id: 331,
    interviewQuestionNumber: 31,
    title: "Q31. Staff Without Any Performance Appraisals",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Medium",
    problemStatement: "HR governance is tracking unreviewed staff members. Retrieve employee ID, name, and department for all employees for whom zero evaluation records exist in Performance_Reviews.",
    requirements: [
      "Verify the non-existence of matching review records for each employee.",
      "Display `emp_id`, `emp_name`, and `department` from Employees."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Use the correlated NOT EXISTS operator checking Performance_Reviews on emp_id.",
    expectedSql: "SELECT e.emp_id, e.emp_name, e.department FROM Employees e WHERE NOT EXISTS (SELECT 1 FROM Performance_Reviews pr WHERE pr.emp_id = e.emp_id);",
    explanation: "NOT EXISTS evaluates to true when the correlated subquery returns 0 rows, efficiently handling NULL-safe anti-joins.",
    tags: ["interview", "not-exists", "anti-join", "subquery"],
    estimatedTimeMinutes: 4
  },
  {
    id: 332,
    interviewQuestionNumber: 32,
    title: "Q32. Initiatives Staffed Exclusively by IT Personnel",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Hard",
    problemStatement: "Project governance is identifying specialized technology initiatives staffed only by technical division members. Display project ID and project name for initiatives that have at least one team member assigned AND where zero assigned team members belong to departments other than IT.",
    requirements: [
      "Verify that the project has at least one assigned team member in Employee_Projects.",
      "Verify that no assigned team member belongs to a department other than 'IT'.",
      "Display `project_id` and `project_name` from Projects."
    ],
    tableName: "Projects, Employee_Projects, Employees",
    hint: "Combine an EXISTS check for project staffing with a NOT EXISTS check for non-IT personnel.",
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
    problemStatement: "Compensation analytics is determining the third-highest distinct salary tier across the company without using LIMIT or OFFSET clauses. Calculate the third highest distinct salary recorded in the Employees table.",
    requirements: [
      "Filter out the peak salary and second peak salary using nested subqueries.",
      "Calculate the maximum salary remaining after excluding the top two salary levels.",
      "Alias the resulting metric as `third_highest_salary`."
    ],
    tableName: "Employees",
    hint: "Use nested MAX(salary) subqueries to successively peel away the top two compensation tiers.",
    expectedSql: "SELECT MAX(salary) AS third_highest_salary FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees));",
    explanation: "Nesting the condition salary < MAX(salary) twice peels off the 1st and 2nd highest salaries to isolate the 3rd highest distinct salary.",
    tags: ["interview", "subquery", "nth-highest", "classic-interview"],
    estimatedTimeMinutes: 5
  },
  {
    id: 334,
    interviewQuestionNumber: 34,
    title: "Q34. Staff Allocated Above-Average Project Hours",
    topic: "Interview Ready Questions",
    subtopic: "Part 4 — Subqueries",
    difficulty: "Hard",
    problemStatement: "Resource scheduling identifies team members carrying disproportionate workload on their initiatives. Find all project assignments where an employee's allocated weekly hours strictly exceed the average allocated hours on that specific project, displaying project ID, employee name, and allocated hours.",
    requirements: [
      "Join Employee_Projects with Employees on employee ID.",
      "Compare each assignment's weekly hours against the average weekly hours on that same project.",
      "Filter for assignments exceeding that project's average workload.",
      "Display `project_id`, `emp_name`, and `hours_allocated`."
    ],
    tableName: "Employee_Projects, Employees",
    hint: "Compare hours_allocated to a correlated subquery computing AVG(hours_allocated) for that project_id.",
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
    title: "Q35. Top Three Highest Earners in the Enterprise",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Easy",
    problemStatement: "Executive remuneration analysis requires an extract of the three highest-paid employees in the organization. Display employee name, department, and salary for the 3 top earners, ordered from highest salary to lowest.",
    requirements: [
      "Select `emp_name`, `department`, and `salary` from Employees.",
      "Sort by salary in descending order.",
      "Limit the final result set to exactly 3 records."
    ],
    tableName: "Employees",
    hint: "Sort descending by salary and apply LIMIT 3.",
    expectedSql: "SELECT emp_name, department, salary FROM Employees ORDER BY salary DESC LIMIT 3;",
    explanation: "ORDER BY salary DESC paired with LIMIT 3 returns the top 3 highest paid individuals.",
    tags: ["interview", "order-by", "limit", "top-n"],
    estimatedTimeMinutes: 3
  },
  {
    id: 336,
    interviewQuestionNumber: 36,
    title: "Q36. Peak Earner within Each Department",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Medium",
    problemStatement: "Workforce compensation is identifying the top salary recipient inside every corporate department. Retrieve employee name, department, and salary for the employee who earns the maximum salary in their respective department.",
    requirements: [
      "For each employee, compare their salary to the maximum salary in their department.",
      "Filter for staff members matching that departmental maximum.",
      "Display `emp_name`, `department`, and `salary` from Employees."
    ],
    tableName: "Employees",
    hint: "Filter where salary equals a correlated subquery computing MAX(salary) for that department.",
    expectedSql: "SELECT e.emp_name, e.department, e.salary FROM Employees e WHERE e.salary = (SELECT MAX(e2.salary) FROM Employees e2 WHERE e2.department = e.department);",
    explanation: "Correlating the salary to the maximum department salary isolates the top earner per group.",
    tags: ["interview", "correlated-subquery", "top-1-per-group", "max"],
    estimatedTimeMinutes: 5
  },
  {
    id: 337,
    interviewQuestionNumber: 37,
    title: "Q37. Dense Ranking of Departmental Salaries",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Medium",
    problemStatement: "Compensation analytics requires ranking employee salaries within each division without skipping ranking numbers when ties occur. For each employee, display their name, department, salary, and their departmental salary rank (highest salary = rank 1), aliasing the rank as `dept_salary_rank`.",
    requirements: [
      "Apply dense ranking partitioned by department and ordered by salary in descending order.",
      "Alias the calculated rank as `dept_salary_rank`.",
      "Display `emp_name`, `department`, `salary`, and `dept_salary_rank`."
    ],
    tableName: "Employees",
    hint: "Use DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC).",
    expectedSql: "SELECT emp_name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_salary_rank FROM Employees;",
    explanation: "DENSE_RANK() partitions rows by department and assigns consecutive integer ranks without gaps when ties occur.",
    tags: ["interview", "window-function", "dense-rank", "partition-by"],
    estimatedTimeMinutes: 5
  },
  {
    id: 338,
    interviewQuestionNumber: 38,
    title: "Q38. Colleague Compensation Parity Identification",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Medium",
    problemStatement: "Compensation equity is auditing identical salary points across the organization. Find all unique pairs of employees who earn the exact same monthly salary, displaying employee 1 name as `employee_1`, employee 2 name as `employee_2`, and the matching salary, avoiding duplicate reverse pairs.",
    requirements: [
      "Join Employees with itself on matching salary.",
      "Enforce `e1.emp_id < e2.emp_id` to eliminate mirror pairs and self-pairings.",
      "Display `employee_1`, `employee_2`, and `salary`."
    ],
    tableName: "Employees",
    hint: "Self-join Employees on salary with e1.emp_id < e2.emp_id.",
    expectedSql: "SELECT e1.emp_name AS employee_1, e2.emp_name AS employee_2, e1.salary FROM Employees e1 INNER JOIN Employees e2 ON e1.salary = e2.salary AND e1.emp_id < e2.emp_id;",
    explanation: "Self-joining with an equality check on salary identifies compensation parity between colleagues.",
    tags: ["interview", "self-join", "duplicates", "parity"],
    estimatedTimeMinutes: 4
  },
  {
    id: 339,
    interviewQuestionNumber: 39,
    title: "Q39. Entry-Level Compensation Baseline (Bottom 2 Earners)",
    topic: "Interview Ready Questions",
    subtopic: "Part 5 — Ranking and Top-N Logic",
    difficulty: "Easy",
    problemStatement: "Human Resources is verifying minimum pay rates across the company. Display employee name, department, and monthly salary for the 2 lowest-earning employees in the organization, ordered from lowest salary to highest.",
    requirements: [
      "Select `emp_name`, `department`, and `salary` from Employees.",
      "Sort records by salary in ascending order (lowest first).",
      "Limit the final result set to exactly 2 records."
    ],
    tableName: "Employees",
    hint: "Sort by salary ASC and apply LIMIT 2.",
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
    title: "Q40. Duplicate Regional Office Locations",
    topic: "Interview Ready Questions",
    subtopic: "Part 6 — Duplicate Detection and Data Quality",
    difficulty: "Medium",
    problemStatement: "Facilities planning is auditing geographical consolidation of corporate divisions. Find all office locations in Departments that house strictly more than 1 registered department, displaying the location and total department count (`dept_count`).",
    requirements: [
      "Group records in Departments by `location`.",
      "Count departments in each location aliased as `dept_count`.",
      "Filter groups where department count is strictly greater than 1.",
      "Display `location` and `dept_count`."
    ],
    tableName: "Departments",
    hint: "Group by location and apply HAVING COUNT(*) > 1.",
    expectedSql: "SELECT location, COUNT(*) AS dept_count FROM Departments GROUP BY location HAVING COUNT(*) > 1;",
    explanation: "Group by column + HAVING COUNT(*) > 1 is the canonical SQL pattern for identifying duplicate categorical values.",
    tags: ["interview", "duplicates", "having", "data-quality"],
    estimatedTimeMinutes: 4
  },
  {
    id: 341,
    interviewQuestionNumber: 41,
    title: "Q41. Corporate Divisions Lacking Active Staff",
    topic: "Interview Ready Questions",
    subtopic: "Part 6 — Duplicate Detection and Data Quality",
    difficulty: "Medium",
    problemStatement: "Organization design is identifying registered corporate departments that currently have zero assigned staff members. Display the department ID, department name, and location for all departments in Departments that have no matching employees.",
    requirements: [
      "Combine Departments with Employees on department name preserving all departments.",
      "Filter for departments where no matching employee record exists.",
      "Display `dept_id`, `dept_name`, and `location`."
    ],
    tableName: "Departments, Employees",
    hint: "Use a left outer join from Departments to Employees and filter where emp_id is null.",
    expectedSql: "SELECT d.dept_id, d.dept_name, d.location FROM Departments d LEFT JOIN Employees e ON d.dept_name = e.department WHERE e.emp_id IS NULL;",
    explanation: "Checking for NULL primary keys on the joined child table detects orphaned parent master records.",
    tags: ["interview", "left-join", "anti-join", "data-integrity"],
    estimatedTimeMinutes: 4
  },
  {
    id: 342,
    interviewQuestionNumber: 42,
    title: "Q42. Inactive Initiatives with Zero Workload",
    topic: "Interview Ready Questions",
    subtopic: "Part 6 — Duplicate Detection and Data Quality",
    difficulty: "Medium",
    problemStatement: "Portfolio governance is identifying stalled or inactive corporate initiatives. Display project ID, name, and status for all projects that either have zero assigned staff members OR have a cumulative weekly workload allocation of 0 hours.",
    requirements: [
      "Combine Projects and Employee_Projects on project ID preserving all projects.",
      "Group by project ID, project name, and status.",
      "Filter groups where assigned staff count is 0 OR cumulative weekly hours equals 0.",
      "Display `project_id`, `project_name`, and `status`."
    ],
    tableName: "Projects, Employee_Projects",
    hint: "Group by project attributes and filter with HAVING COUNT(emp_id) = 0 OR COALESCE(SUM(hours_allocated), 0) = 0.",
    expectedSql: "SELECT p.project_id, p.project_name, p.status FROM Projects p LEFT JOIN Employee_Projects ep ON p.project_id = ep.project_id GROUP BY p.project_id, p.project_name, p.status HAVING COUNT(ep.emp_id) = 0 OR COALESCE(SUM(ep.hours_allocated), 0) = 0;",
    explanation: "Auditing zero assignments or zero hours allocated highlights inactive and stalled organizational initiatives.",
    tags: ["interview", "data-quality", "having", "coalesce"],
    estimatedTimeMinutes: 5
  },
  {
    id: 343,
    interviewQuestionNumber: 43,
    title: "Q43. Intra-Departmental High-Salary Outliers",
    topic: "Interview Ready Questions",
    subtopic: "Part 6 — Duplicate Detection and Data Quality",
    difficulty: "Hard",
    problemStatement: "Compensation governance is identifying significant salary outliers within divisions. Find employees whose salary strictly exceeds 130% (1.3 times) of their own department's average salary, displaying employee name, department, salary, and the department average salary rounded to 2 decimal places (`dept_avg_salary`).",
    requirements: [
      "Join Employees with a derived table calculating average salary by department.",
      "Filter for employees whose salary strictly exceeds `avg_dept_sal * 1.3`.",
      "Display `emp_name`, `department`, `salary`, and `dept_avg_salary`."
    ],
    tableName: "Employees",
    hint: "Join with a department average derived table and compare salary to sub.avg_dept_sal * 1.3.",
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
    title: "Q44. Senior Professional Salary Review Eligibility",
    topic: "Interview Ready Questions",
    subtopic: "Part 7 — Real-World Business Logic",
    difficulty: "Medium",
    problemStatement: "Human Resources is compiling a salary review eligibility roster for seasoned personnel. Find all employees who work in either the Finance or IT departments, possess at least 5 years of professional experience, and earn less than 70,000.",
    requirements: [
      "Display `emp_id`, `emp_name`, `department`, `experience`, and `salary` from Employees.",
      "Filter for departments in ('Finance', 'IT').",
      "Filter for `experience >= 5` and `salary < 70000`."
    ],
    tableName: "Employees",
    hint: "Combine a department set membership check with experience and salary inequalities using AND.",
    expectedSql: "SELECT emp_id, emp_name, department, experience, salary FROM Employees WHERE department IN ('Finance', 'IT') AND experience >= 5 AND salary < 70000;",
    explanation: "Multi-condition business policy filtering identifies veteran employees who may be under-compensated.",
    tags: ["interview", "business-logic", "eligibility", "where"],
    estimatedTimeMinutes: 4
  },
  {
    id: 345,
    interviewQuestionNumber: 45,
    title: "Q45. Departments Exceeding Allocated Payroll Budget",
    topic: "Interview Ready Questions",
    subtopic: "Part 7 — Real-World Business Logic",
    difficulty: "Hard",
    problemStatement: "Corporate audit is identifying departments where annual employee wage obligations outstrip the allocated departmental budget. For departments where annualized payroll (monthly payroll multiplied by 12) strictly exceeds the department's annual budget, display the department name, annualized payroll (`annual_payroll`), and annual budget (`budget`).",
    requirements: [
      "Join Departments and Employees on matching department name.",
      "Group records by department name and budget.",
      "Calculate annualized payroll as `SUM(e.salary * 12)` aliased as `annual_payroll`.",
      "Filter groups where annualized payroll strictly exceeds departmental budget.",
      "Display `dept_name`, `annual_payroll`, and `budget`."
    ],
    tableName: "Departments, Employees",
    hint: "Group by dept_name and budget, and filter with HAVING SUM(e.salary * 12) > d.budget.",
    expectedSql: "SELECT d.dept_name, SUM(e.salary * 12) AS annual_payroll, d.budget FROM Departments d INNER JOIN Employees e ON d.dept_name = e.department GROUP BY d.dept_name, d.budget HAVING SUM(e.salary * 12) > d.budget;",
    explanation: "Business budget compliance audits aggregate monthly salaries across 12 months and compare against authorized department allocations.",
    tags: ["interview", "budget", "payroll", "having", "business-logic"],
    estimatedTimeMinutes: 5
  },
  {
    id: 346,
    interviewQuestionNumber: 46,
    title: "Q46. Staff Workload Capacity Tier Classification",
    topic: "Interview Ready Questions",
    subtopic: "Part 7 — Real-World Business Logic",
    difficulty: "Hard",
    problemStatement: "Resource governance classifies individual employee workload capacity across corporate projects. For all employees, display employee ID, full name, cumulative allocated weekly hours (defaulting to 0 if unassigned, aliased as `total_hours`), and a categorical workload tier (`workload_tier`): 'Unassigned' if 0 hours, 'Light Workload' for under 25 hours, 'Moderate Workload' for 25 to 35 hours inclusive, and 'Heavy Workload' for over 35 hours.",
    requirements: [
      "Combine Employees and Employee_Projects preserving all employees.",
      "Group by employee ID and employee name.",
      "Sum allocated weekly hours substituting 0 for nulls, aliased as `total_hours`.",
      "Categorize total hours into 'Unassigned', 'Light Workload', 'Moderate Workload', or 'Heavy Workload' aliased as `workload_tier`.",
      "Display `emp_id`, `emp_name`, `total_hours`, and `workload_tier`."
    ],
    tableName: "Employees, Employee_Projects",
    hint: "Use a left outer join from Employees to Employee_Projects and evaluate SUM(hours_allocated) with a CASE expression.",
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
    title: "Q47. Categorical Compensation Tier Placement",
    topic: "Interview Ready Questions",
    subtopic: "Part 8 — CASE Expressions",
    difficulty: "Easy",
    problemStatement: "Compensation planning classifies employees into categorical compensation bands: 'Low' for salaries under 35,000, 'Medium' for salaries from 35,000 to 60,000 inclusive, and 'High' for salaries above 60,000. Display employee name, department, monthly salary, and the assigned salary tier aliased as `salary_tier`.",
    requirements: [
      "Classify each employee's salary into 'Low', 'Medium', or 'High' aliased as `salary_tier`.",
      "Display `emp_name`, `department`, `salary`, and `salary_tier` from Employees."
    ],
    tableName: "Employees",
    hint: "Use a CASE expression testing salary thresholds.",
    expectedSql: "SELECT emp_name, department, salary, CASE WHEN salary < 35000 THEN 'Low' WHEN salary <= 60000 THEN 'Medium' ELSE 'High' END AS salary_tier FROM Employees;",
    explanation: "CASE statements in SELECT allow branching conditional categorization without modifying table data.",
    tags: ["interview", "case", "classification", "tiers"],
    estimatedTimeMinutes: 3
  },
  {
    id: 348,
    interviewQuestionNumber: 48,
    title: "Q48. Experience-Based Seniority Tier Placement",
    topic: "Interview Ready Questions",
    subtopic: "Part 8 — CASE Expressions",
    difficulty: "Easy",
    problemStatement: "Human Resources is standardizing seniority titles based on career tenure: 'Fresher' for under 2 years of experience, 'Junior' for 2 to 4 years inclusive, 'Mid-Level' for 5 to 8 years inclusive, and 'Senior' for more than 8 years. Display employee name, years of experience, and the assigned seniority tier aliased as `seniority_tier`.",
    requirements: [
      "Classify employees into 'Fresher', 'Junior', 'Mid-Level', or 'Senior' aliased as `seniority_tier`.",
      "Display `emp_name`, `experience`, and `seniority_tier` from Employees."
    ],
    tableName: "Employees",
    hint: "Use a CASE expression with multiple WHEN branches testing the experience column.",
    expectedSql: "SELECT emp_name, experience, CASE WHEN experience < 2 THEN 'Fresher' WHEN experience <= 4 THEN 'Junior' WHEN experience <= 8 THEN 'Mid-Level' ELSE 'Senior' END AS seniority_tier FROM Employees;",
    explanation: "Evaluating integer thresholds sequentially in a CASE expression partitions employees into standard organizational career levels.",
    tags: ["interview", "case", "seniority", "experience"],
    estimatedTimeMinutes: 3
  },
  {
    id: 349,
    interviewQuestionNumber: 49,
    title: "Q49. High vs Standard Earner Headcount per Department",
    topic: "Interview Ready Questions",
    subtopic: "Part 8 — CASE Expressions",
    difficulty: "Medium",
    problemStatement: "Finance leadership is comparing the balance between high earners and standard earners across business units. For each department, display the department name, count of high earners earning strictly over 50,000 (aliased as `high_earners`), and count of standard earners earning 50,000 or less (aliased as `standard_earners`).",
    requirements: [
      "Group records by `department` in Employees.",
      "Count staff with salary > 50,000 using conditional aggregation, aliased as `high_earners`.",
      "Count staff with salary <= 50,000 using conditional aggregation, aliased as `standard_earners`.",
      "Display `department`, `high_earners`, and `standard_earners`."
    ],
    tableName: "Employees",
    hint: "Use SUM with CASE expressions to pivot high earner and standard earner counts into separate columns.",
    expectedSql: "SELECT department, SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners, SUM(CASE WHEN salary <= 50000 THEN 1 ELSE 0 END) AS standard_earners FROM Employees GROUP BY department;",
    explanation: "Embedding CASE expressions inside SUM() pivots conditional counts into multiple columns, a key interview data modeling pattern.",
    tags: ["interview", "conditional-aggregation", "case", "pivot"],
    estimatedTimeMinutes: 5
  },
  {
    id: 350,
    interviewQuestionNumber: 50,
    title: "Q50. Performance Rating Merit Recommendation Mapping",
    topic: "Interview Ready Questions",
    subtopic: "Part 8 — CASE Expressions",
    difficulty: "Medium",
    problemStatement: "The compensation committee maps performance ratings to standardized merit recommendations: 'Exceptional' for rating 5, 'Strong' for rating 4, 'Satisfactory' for rating 3, and 'Needs Improvement' for any lower rating. For all completed appraisals, display employee name, review year, rating, and the corresponding merit recommendation aliased as `recommendation`.",
    requirements: [
      "Join Employees and Performance_Reviews on employee ID.",
      "Map ratings to 'Exceptional', 'Strong', 'Satisfactory', or 'Needs Improvement' aliased as `recommendation`.",
      "Display `emp_name`, `review_year`, `rating`, and `recommendation`."
    ],
    tableName: "Employees, Performance_Reviews",
    hint: "Join on emp_id and use a CASE expression on rating to generate the recommendation label.",
    expectedSql: "SELECT e.emp_name, pr.review_year, pr.rating, CASE WHEN pr.rating = 5 THEN 'Exceptional' WHEN pr.rating = 4 THEN 'Strong' WHEN pr.rating = 3 THEN 'Satisfactory' ELSE 'Needs Improvement' END AS recommendation FROM Employees e INNER JOIN Performance_Reviews pr ON e.emp_id = pr.emp_id;",
    explanation: "Mapping numeric review scores to corporate qualitative appraisal designations is a classic CASE expression application.",
    tags: ["interview", "case", "performance", "ratings"],
    estimatedTimeMinutes: 4
  }
];
