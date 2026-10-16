export const TOPIC6_QUESTIONS = [
  {
    "id": 161,
    "title": "Departments with at Least 3 Employees and Avg Salary Over 45k",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Easy",
    "problemStatement": "Find departments that have at least 3 employees and an average salary strictly greater than 45,000. Display department, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `department`, `COUNT(*) AS emp_count`, and `ROUND(AVG(salary), 2) AS avg_salary`.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) >= 3` and `AVG(salary) > 45000`."
    ],
    "tableName": "Employees",
    "hint": "Use HAVING COUNT(*) >= 3 AND AVG(salary) > 45000.",
    "expectedSql": "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) >= 3 AND AVG(salary) > 45000;",
    "explanation": "HAVING filters groups post-aggregation using boolean combinations of aggregate functions.",
    "tags": [
      "having",
      "aggregates",
      "and",
      "group-by"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 162,
    "title": "Projects with 2+ Staff and 40+ Total Hours",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Medium",
    "problemStatement": "Find projects that have at least 2 distinct employees assigned and a total of 40 or more allocated hours. Display project ID, staff count, and total hours.",
    "requirements": [
      "Select `project_id`, `COUNT(DISTINCT emp_id) AS staff_count`, and `SUM(hours_allocated) AS total_hours`.",
      "Group by `project_id`.",
      "Filter groups having `COUNT(DISTINCT emp_id) >= 2` and `SUM(hours_allocated) >= 40`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Apply HAVING with conditions on COUNT(DISTINCT emp_id) and SUM(hours_allocated).",
    "expectedSql": "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING COUNT(DISTINCT emp_id) >= 2 AND SUM(hours_allocated) >= 40;",
    "explanation": "Enforces multi-metric group constraints across distinct entity counts and cumulative sums.",
    "tags": [
      "having",
      "count-distinct",
      "sum",
      "workload"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 163,
    "title": "Employees with 2+ Reviews and Average Rating of 4.0+",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Medium",
    "problemStatement": "Find employees who have at least 2 performance reviews and an average rating of 4.0 or higher. Display employee ID, review count, and average rating rounded to 2 decimals.",
    "requirements": [
      "Select `emp_id`, `COUNT(*) AS review_count`, and `ROUND(AVG(rating), 2) AS avg_rating`.",
      "Group by `emp_id`.",
      "Filter groups having `COUNT(*) >= 2` and `AVG(rating) >= 4.0`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0.",
    "expectedSql": "SELECT emp_id, COUNT(*) AS review_count, ROUND(AVG(rating), 2) AS avg_rating FROM Performance_Reviews GROUP BY emp_id HAVING COUNT(*) >= 2 AND AVG(rating) >= 4.0;",
    "explanation": "Isolates repeated high performers by verifying both evaluation volume and sustained rating excellence.",
    "tags": [
      "having",
      "reviews",
      "rating",
      "avg"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 164,
    "title": "Cities with 4+ Employees and Total Payroll Over 200k",
    "topic": "HAVING",
    "subtopic": "HAVING with Multiple Aggregate Predicates",
    "difficulty": "Easy",
    "problemStatement": "Find cities that have at least 4 employees and a total salary payroll exceeding 200,000. Display city, employee count, and total payroll.",
    "requirements": [
      "Select `city`, `COUNT(*) AS emp_count`, and `SUM(salary) AS total_payroll`.",
      "Group by `city`.",
      "Filter groups having `COUNT(*) >= 4` and `SUM(salary) > 200000`."
    ],
    "tableName": "Employees",
    "hint": "Use HAVING COUNT(*) >= 4 AND SUM(salary) > 200000.",
    "expectedSql": "SELECT city, COUNT(*) AS emp_count, SUM(salary) AS total_payroll FROM Employees GROUP BY city HAVING COUNT(*) >= 4 AND SUM(salary) > 200000;",
    "explanation": "Surfaces enterprise operational centers where both organizational headcount and total payroll pass critical thresholds.",
    "tags": [
      "having",
      "payroll",
      "city",
      "headcount"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 165,
    "title": "Departments with 3+ Hires After 2018",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Find departments that hired 3 or more employees after the year 2018. Display department and the recent hire count.",
    "requirements": [
      "Select `department` and `COUNT(*) AS recent_count`.",
      "Filter rows with `joining_year > 2018` before grouping.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) >= 3`."
    ],
    "tableName": "Employees",
    "hint": "Combine WHERE joining_year > 2018 with HAVING COUNT(*) >= 3.",
    "expectedSql": "SELECT department, COUNT(*) AS recent_count FROM Employees WHERE joining_year > 2018 GROUP BY department HAVING COUNT(*) >= 3;",
    "explanation": "Illustrates the exact SQL execution pipeline: WHERE filters individual records before grouping; HAVING filters aggregated groups.",
    "tags": [
      "having",
      "where",
      "pipeline",
      "hiring"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 166,
    "title": "Departments with Pending Project Budgets of 300k+",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Find departments whose uncompleted projects have a combined budget of at least 300,000. Display department ID, pending project count, and total pending budget.",
    "requirements": [
      "Select `dept_id`, `COUNT(*) AS pending_projects`, and `SUM(budget) AS total_pending_budget`.",
      "Filter for `status != 'Completed'` in WHERE.",
      "Group by `dept_id`.",
      "Filter groups having `SUM(budget) >= 300000`."
    ],
    "tableName": "Projects",
    "hint": "Use WHERE status != 'Completed' GROUP BY dept_id HAVING SUM(budget) >= 300000.",
    "expectedSql": "SELECT dept_id, COUNT(*) AS pending_projects, SUM(budget) AS total_pending_budget FROM Projects WHERE status != 'Completed' GROUP BY dept_id HAVING SUM(budget) >= 300000;",
    "explanation": "Applies pre-aggregation exclusion on project completion status before testing cumulative capital commitments.",
    "tags": [
      "having",
      "where",
      "projects",
      "sum"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 167,
    "title": "Employees with Average 2024 Bonus Over 15k",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "Find employees whose average bonus in 2024 was greater than 15,000. Display employee ID and average bonus rounded to 2 decimals.",
    "requirements": [
      "Select `emp_id` and `ROUND(AVG(bonus), 2) AS avg_2024_bonus`.",
      "Filter for `review_year = 2024`.",
      "Group by `emp_id`.",
      "Filter groups having `AVG(bonus) > 15000`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use WHERE review_year = 2024 GROUP BY emp_id HAVING AVG(bonus) > 15000.",
    "expectedSql": "SELECT emp_id, ROUND(AVG(bonus), 2) AS avg_2024_bonus FROM Performance_Reviews WHERE review_year = 2024 GROUP BY emp_id HAVING AVG(bonus) > 15000;",
    "explanation": "Filters for a single appraisal year in WHERE, then isolates standout bonus averages in HAVING.",
    "tags": [
      "having",
      "where",
      "bonus",
      "avg"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 168,
    "title": "Cities with Experienced Staff Averaging Over 50k",
    "topic": "HAVING",
    "subtopic": "Combining WHERE and HAVING in the Pipeline",
    "difficulty": "Medium",
    "problemStatement": "For employees with at least 3 years experience, find cities where their average salary exceeds 50,000. Display city, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `city`, `COUNT(*) AS seasoned_staff`, and `ROUND(AVG(salary), 2) AS avg_seasoned_salary`.",
      "Filter for `experience >= 3` in WHERE.",
      "Group by `city`.",
      "Filter groups having `AVG(salary) > 50000`."
    ],
    "tableName": "Employees",
    "hint": "Filter by experience in WHERE, group by city, and filter average salary with HAVING.",
    "expectedSql": "SELECT city, COUNT(*) AS seasoned_staff, ROUND(AVG(salary), 2) AS avg_seasoned_salary FROM Employees WHERE experience >= 3 GROUP BY city HAVING AVG(salary) > 50000;",
    "explanation": "Filters the employee base by minimum tenure before testing whether regional compensation exceeds 50000.",
    "tags": [
      "having",
      "where",
      "compensation",
      "city"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 169,
    "title": "Departments with at Most 3 Staff or Avg Salary Over 65k",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Find departments that either have 3 or fewer employees, or have an average salary greater than 65,000. Display department, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `department`, `COUNT(*) AS emp_count`, and `ROUND(AVG(salary), 2) AS avg_salary`.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) <= 3 OR AVG(salary) > 65000`."
    ],
    "tableName": "Employees",
    "hint": "Use OR between conditions in the HAVING clause.",
    "expectedSql": "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_salary FROM Employees GROUP BY department HAVING COUNT(*) <= 3 OR AVG(salary) > 65000;",
    "explanation": "Applies disjunctive logic (OR) inside HAVING to capture either small teams or high-average compensation departments.",
    "tags": [
      "having",
      "or",
      "aggregates"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 170,
    "title": "Projects with Under 40 Hours or 4+ Staff",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Hard",
    "problemStatement": "Find projects that have either total hours under 40, or 4 or more distinct staff members. Display project ID, staff count, and total hours.",
    "requirements": [
      "Select `project_id`, `COUNT(DISTINCT emp_id) AS staff_count`, and `SUM(hours_allocated) AS total_hours`.",
      "Group by `project_id`.",
      "Filter groups having `SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4`."
    ],
    "tableName": "Employee_Projects",
    "hint": "Combine the two aggregate conditions using OR in HAVING.",
    "expectedSql": "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING SUM(hours_allocated) < 40 OR COUNT(DISTINCT emp_id) >= 4;",
    "explanation": "Captures both under-allocated projects and broad-staff initiatives using aggregate OR logic.",
    "tags": [
      "having",
      "or",
      "workload",
      "cardinality"
    ],
    "estimatedTimeMinutes": 4
  },
  {
    "id": 171,
    "title": "Review Years with Bonuses Over 100k or Avg Rating 4.0+",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Find review years where total bonuses exceeded 100,000 or the average rating was at least 4.0. Display review year, total reviews, total bonus, and average rating rounded to 2 decimals.",
    "requirements": [
      "Select `review_year`, `COUNT(*) AS total_reviews`, `COALESCE(SUM(bonus), 0) AS total_bonus`, and `ROUND(AVG(rating), 2) AS avg_rating`.",
      "Group by `review_year`.",
      "Filter groups having `SUM(bonus) > 100000 OR AVG(rating) >= 4.0`."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0.",
    "expectedSql": "SELECT review_year, COUNT(*) AS total_reviews, COALESCE(SUM(bonus), 0) AS total_bonus, ROUND(AVG(rating), 2) AS avg_rating FROM Performance_Reviews GROUP BY review_year HAVING SUM(bonus) > 100000 OR AVG(rating) >= 4.0;",
    "explanation": "Applies disjunctive aggregate thresholds to annual corporate appraisal summaries.",
    "tags": [
      "having",
      "or",
      "reviews"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 172,
    "title": "Cities with Min Salary >= 30k and Max Salary > 70k",
    "topic": "HAVING",
    "subtopic": "Boundary & Disjunctive Aggregate Filters",
    "difficulty": "Medium",
    "problemStatement": "Find cities where the minimum salary is at least 30,000 and the maximum salary is strictly greater than 70,000. Display city, min salary, and max salary.",
    "requirements": [
      "Select `city`, `MIN(salary) AS min_sal`, and `MAX(salary) AS max_sal`.",
      "Group by `city`.",
      "Filter groups having `MIN(salary) >= 30000 AND MAX(salary) > 70000`."
    ],
    "tableName": "Employees",
    "hint": "Use HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000.",
    "expectedSql": "SELECT city, MIN(salary) AS min_sal, MAX(salary) AS max_sal FROM Employees GROUP BY city HAVING MIN(salary) >= 30000 AND MAX(salary) > 70000;",
    "explanation": "Constrains both lower and upper boundary aggregates across grouped geographical entities.",
    "tags": [
      "having",
      "min",
      "max",
      "salary-boundaries"
    ],
    "estimatedTimeMinutes": 3
  },
  {
    "id": 173,
    "title": "Top 2 Departments by Avg Salary (3+ Employees)",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Find the top 2 departments with at least 3 employees, ordered by highest average salary. Display department, employee count, and average salary rounded to 2 decimals.",
    "requirements": [
      "Select `department`, `COUNT(*) AS emp_count`, and `ROUND(AVG(salary), 2) AS avg_sal`.",
      "Group by `department`.",
      "Filter groups having `COUNT(*) >= 3`.",
      "Order by `avg_sal` descending and limit to 2."
    ],
    "tableName": "Employees",
    "hint": "Combine GROUP BY, HAVING, ORDER BY, and LIMIT.",
    "expectedSql": "SELECT department, COUNT(*) AS emp_count, ROUND(AVG(salary), 2) AS avg_sal FROM Employees GROUP BY department HAVING COUNT(*) >= 3 ORDER BY avg_sal DESC LIMIT 2;",
    "explanation": "Combines aggregation, group filtering, sort ordering, and Top-N limiting into a complete analytical query.",
    "tags": [
      "having",
      "order-by",
      "limit",
      "top-n"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3
  },
  {
    "id": 174,
    "title": "Project with Most Hours (3+ Staff)",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Medium",
    "problemStatement": "Find the project with the highest total weekly hours among projects that have at least 3 distinct staff members. Display project ID, staff count, and total hours.",
    "requirements": [
      "Select `project_id`, `COUNT(DISTINCT emp_id) AS staff_count`, and `SUM(hours_allocated) AS total_hours`.",
      "Group by `project_id`.",
      "Filter groups having `COUNT(DISTINCT emp_id) >= 3`.",
      "Order by `total_hours` descending and limit to 1."
    ],
    "tableName": "Employee_Projects",
    "hint": "Filter with HAVING COUNT(DISTINCT emp_id) >= 3, then ORDER BY total_hours DESC LIMIT 1.",
    "expectedSql": "SELECT project_id, COUNT(DISTINCT emp_id) AS staff_count, SUM(hours_allocated) AS total_hours FROM Employee_Projects GROUP BY project_id HAVING COUNT(DISTINCT emp_id) >= 3 ORDER BY total_hours DESC LIMIT 1;",
    "explanation": "Retrieves the single highest-capacity project meeting minimum staffing requirements.",
    "tags": [
      "having",
      "order-by",
      "limit",
      "top-1"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 3
  },
  {
    "id": 175,
    "title": "Employee with Highest Total Bonus (2+ Reviews)",
    "topic": "HAVING",
    "subtopic": "HAVING with Sorting & Limiting",
    "difficulty": "Hard",
    "problemStatement": "Find the employee with at least 2 reviews who received the highest total bonus payout. Display employee ID, review count, and total bonus.",
    "requirements": [
      "Select `emp_id`, `COUNT(*) AS review_count`, and `SUM(bonus) AS total_bonus`.",
      "Group by `emp_id`.",
      "Filter groups having `COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL`.",
      "Order by `total_bonus` descending and limit to 1."
    ],
    "tableName": "Performance_Reviews",
    "hint": "Use HAVING with COUNT and IS NOT NULL, then sort descending and LIMIT 1.",
    "expectedSql": "SELECT emp_id, COUNT(*) AS review_count, SUM(bonus) AS total_bonus FROM Performance_Reviews GROUP BY emp_id HAVING COUNT(*) >= 2 AND SUM(bonus) IS NOT NULL ORDER BY total_bonus DESC LIMIT 1;",
    "explanation": "Finds the employee with the greatest cumulative bonus compensation across multiple appraisal cycles.",
    "tags": [
      "having",
      "order-by",
      "limit",
      "bonus"
    ],
    "requiresOrder": true,
    "estimatedTimeMinutes": 4
  }
];
