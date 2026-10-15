/**
 * Seed data module for SQL_Interview_Practice database.
 * Realistic relational records spanning Employees, Departments, Projects, 
 * Employee_Projects, and Performance_Reviews.
 */

export const SEED_DATA = {
  Employees: [
    { emp_id: 101, emp_name: 'Anil', age: 22, department: 'IT', salary: 25000, experience: 1, city: 'Hyderabad', joining_year: 2025 },
    { emp_id: 102, emp_name: 'Bhumika', age: 25, department: 'HR', salary: 40000, experience: 3, city: 'Vijayawada', joining_year: 2023 },
    { emp_id: 103, emp_name: 'Chetan', age: 28, department: 'IT', salary: 55000, experience: 5, city: 'Hyderabad', joining_year: 2021 },
    { emp_id: 104, emp_name: 'Dhruv', age: 30, department: 'Finance', salary: 65000, experience: 7, city: 'Chennai', joining_year: 2019 },
    { emp_id: 105, emp_name: 'Farah', age: 24, department: 'HR', salary: 32000, experience: 2, city: 'Hyderabad', joining_year: 2024 },
    { emp_id: 106, emp_name: 'Girish', age: 35, department: 'Finance', salary: 80000, experience: 10, city: 'Bengaluru', joining_year: 2016 },
    { emp_id: 107, emp_name: 'Harsha', age: 27, department: 'IT', salary: 45000, experience: 4, city: 'Vijayawada', joining_year: 2022 },
    { emp_id: 108, emp_name: 'Isha', age: 23, department: 'Marketing', salary: 28000, experience: 1, city: 'Chennai', joining_year: 2025 },
    { emp_id: 109, emp_name: 'Kiran', age: 32, department: 'HR', salary: 70000, experience: 8, city: 'Bengaluru', joining_year: 2018 },
    { emp_id: 110, emp_name: 'Meena', age: 29, department: 'Marketing', salary: 60000, experience: 6, city: 'Hyderabad', joining_year: 2020 },
    { emp_id: 111, emp_name: 'Naveen', age: 26, department: 'Finance', salary: 35000, experience: 3, city: 'Chennai', joining_year: 2023 },
    { emp_id: 112, emp_name: 'Priya', age: 31, department: 'IT', salary: 75000, experience: 9, city: 'Bengaluru', joining_year: 2017 },
    { emp_id: 113, emp_name: 'Rahul', age: 24, department: 'Sales', salary: 30000, experience: 2, city: 'Vijayawada', joining_year: 2024 },
    { emp_id: 114, emp_name: 'Sneha', age: 28, department: 'Sales', salary: 48000, experience: 5, city: 'Hyderabad', joining_year: 2021 },
    { emp_id: 115, emp_name: 'Varun', age: 33, department: 'Marketing', salary: 68000, experience: 8, city: 'Chennai', joining_year: 2018 },
    { emp_id: 116, emp_name: 'Divya', age: 26, department: 'Sales', salary: 42000, experience: 3, city: 'Bengaluru', joining_year: 2022 },
    { emp_id: 117, emp_name: 'Manoj', age: 29, department: 'IT', salary: 52000, experience: 6, city: 'Chennai', joining_year: 2020 },
    { emp_id: 118, emp_name: 'Pooja', age: 22, department: 'HR', salary: 27000, experience: 1, city: 'Vijayawada', joining_year: 2025 },
    { emp_id: 119, emp_name: 'Arjun', age: 34, department: 'Finance', salary: 90000, experience: 11, city: 'Hyderabad', joining_year: 2015 },
    { emp_id: 120, emp_name: 'Keerthi', age: 27, department: 'Sales', salary: 55000, experience: 4, city: 'Chennai', joining_year: 2022 }
  ],
  Departments: [
    { dept_id: 1, dept_name: 'IT', dept_head: 'Priya', location: 'Bengaluru', budget: 1200000 },
    { dept_id: 2, dept_name: 'HR', dept_head: 'Kiran', location: 'Bengaluru', budget: 500000 },
    { dept_id: 3, dept_name: 'Finance', dept_head: 'Arjun', location: 'Hyderabad', budget: 1500000 },
    { dept_id: 4, dept_name: 'Marketing', dept_head: 'Varun', location: 'Chennai', budget: 800000 },
    { dept_id: 5, dept_name: 'Sales', dept_head: 'Sneha', location: 'Hyderabad', budget: 950000 },
    { dept_id: 6, dept_name: 'Legal', dept_head: 'Suresh', location: 'Hyderabad', budget: 400000 },
    { dept_id: 7, dept_name: 'Operations', dept_head: 'Geeta', location: 'Chennai', budget: 650000 },
    { dept_id: 8, dept_name: 'R&D', dept_head: 'Vikram', location: 'Bengaluru', budget: 1800000 }
  ],
  Projects: [
    { project_id: 501, project_name: 'Cloud Migration', dept_id: 1, budget: 250000, start_date: '2024-01-15', end_date: '2024-12-31', status: 'Active' },
    { project_id: 502, project_name: 'ERP Modernization', dept_id: 1, budget: 400000, start_date: '2023-06-01', end_date: '2024-08-30', status: 'Completed' },
    { project_id: 503, project_name: 'Global Talent Acquisition', dept_id: 2, budget: 120000, start_date: '2024-03-01', end_date: '2024-11-30', status: 'Active' },
    { project_id: 504, project_name: 'Financial Audit Automation', dept_id: 3, budget: 300000, start_date: '2024-02-01', end_date: '2024-10-15', status: 'Active' },
    { project_id: 505, project_name: 'Brand Revamp 2025', dept_id: 4, budget: 180000, start_date: '2024-05-01', end_date: '2025-01-31', status: 'Active' },
    { project_id: 506, project_name: 'CRM Sales Pipeline', dept_id: 5, budget: 220000, start_date: '2023-09-01', end_date: '2024-05-30', status: 'Completed' },
    { project_id: 507, project_name: 'Compliance Automation', dept_id: 6, budget: 90000, start_date: '2025-02-01', end_date: '2025-09-30', status: 'Planning' },
    { project_id: 508, project_name: 'NextGen AI Suite', dept_id: 8, budget: 550000, start_date: '2025-01-01', end_date: '2025-12-31', status: 'Planning' }
  ],
  Employee_Projects: [
    { emp_id: 103, project_id: 501, assigned_role: 'Lead Developer', hours_allocated: 35 },
    { emp_id: 103, project_id: 502, assigned_role: 'Backend Architect', hours_allocated: 15 },
    { emp_id: 107, project_id: 501, assigned_role: 'Full Stack Engineer', hours_allocated: 40 },
    { emp_id: 112, project_id: 501, assigned_role: 'Project Manager', hours_allocated: 25 },
    { emp_id: 112, project_id: 504, assigned_role: 'Technical Advisor', hours_allocated: 15 },
    { emp_id: 117, project_id: 502, assigned_role: 'Database Specialist', hours_allocated: 30 },
    { emp_id: 102, project_id: 503, assigned_role: 'Recruiter', hours_allocated: 35 },
    { emp_id: 105, project_id: 503, assigned_role: 'HR Coordinator', hours_allocated: 30 },
    { emp_id: 109, project_id: 503, assigned_role: 'HR Lead', hours_allocated: 20 },
    { emp_id: 104, project_id: 504, assigned_role: 'Senior Auditor', hours_allocated: 35 },
    { emp_id: 106, project_id: 504, assigned_role: 'Compliance Officer', hours_allocated: 20 },
    { emp_id: 111, project_id: 504, assigned_role: 'Financial Analyst', hours_allocated: 30 },
    { emp_id: 119, project_id: 504, assigned_role: 'Finance Director', hours_allocated: 10 },
    { emp_id: 108, project_id: 505, assigned_role: 'Content Strategist', hours_allocated: 35 },
    { emp_id: 110, project_id: 505, assigned_role: 'Marketing Manager', hours_allocated: 30 },
    { emp_id: 115, project_id: 505, assigned_role: 'Creative Director', hours_allocated: 20 },
    { emp_id: 115, project_id: 506, assigned_role: 'Campaign Strategist', hours_allocated: 20 },
    { emp_id: 114, project_id: 506, assigned_role: 'Sales Lead', hours_allocated: 35 },
    { emp_id: 116, project_id: 506, assigned_role: 'Account Executive', hours_allocated: 30 },
    { emp_id: 120, project_id: 506, assigned_role: 'Client Onboarding', hours_allocated: 25 }
  ],
  Performance_Reviews: [
    { review_id: 1, emp_id: 103, review_year: 2024, rating: 4, bonus: 15000, feedback: 'Outstanding delivery on cloud modules' },
    { review_id: 2, emp_id: 104, review_year: 2024, rating: 4, bonus: 18000, feedback: 'Exceptional attention to financial auditing accuracy' },
    { review_id: 3, emp_id: 106, review_year: 2023, rating: 4, bonus: 20000, feedback: 'Consistent senior finance performance' },
    { review_id: 4, emp_id: 106, review_year: 2024, rating: 5, bonus: 25000, feedback: 'Top contributor across all finance operations' },
    { review_id: 5, emp_id: 107, review_year: 2024, rating: 3, bonus: 8000, feedback: 'Solid execution on technical tasks' },
    { review_id: 6, emp_id: 109, review_year: 2024, rating: 4, bonus: 18000, feedback: 'Strong talent pipeline management' },
    { review_id: 7, emp_id: 110, review_year: 2024, rating: 4, bonus: 16000, feedback: 'High-impact digital marketing campaigns' },
    { review_id: 8, emp_id: 111, review_year: 2024, rating: 2, bonus: null, feedback: 'Needs improvement in quarterly reporting timelines' },
    { review_id: 9, emp_id: 112, review_year: 2023, rating: 4, bonus: 20000, feedback: 'Excellent project execution in engineering' },
    { review_id: 10, emp_id: 112, review_year: 2024, rating: 5, bonus: 25000, feedback: 'Promoted to project delivery lead' },
    { review_id: 11, emp_id: 114, review_year: 2024, rating: 4, bonus: 12000, feedback: 'Exceeded regional sales targets' },
    { review_id: 12, emp_id: 115, review_year: 2024, rating: 4, bonus: 15000, feedback: 'Successful multi-channel campaign launch' },
    { review_id: 13, emp_id: 116, review_year: 2024, rating: 3, bonus: 7000, feedback: 'Good customer relationship retention' },
    { review_id: 14, emp_id: 117, review_year: 2024, rating: 3, bonus: 9000, feedback: 'Reliable database support and maintenance' },
    { review_id: 15, emp_id: 119, review_year: 2022, rating: 5, bonus: 25000, feedback: 'Consistently exceptional financial strategy' },
    { review_id: 16, emp_id: 119, review_year: 2023, rating: 5, bonus: 28000, feedback: 'Spearheaded corporate cost optimization' },
    { review_id: 17, emp_id: 119, review_year: 2024, rating: 5, bonus: 30000, feedback: 'Highest performance rating in company history' },
    { review_id: 18, emp_id: 102, review_year: 2024, rating: 3, bonus: 6000, feedback: 'Good support on campus recruitment drives' }
  ]
};

export const SEED_SQL = `
INSERT INTO Employees (emp_id, emp_name, age, department, salary, experience, city, joining_year) VALUES
  (101, 'Anil', 22, 'IT', 25000, 1, 'Hyderabad', 2025),
  (102, 'Bhumika', 25, 'HR', 40000, 3, 'Vijayawada', 2023),
  (103, 'Chetan', 28, 'IT', 55000, 5, 'Hyderabad', 2021),
  (104, 'Dhruv', 30, 'Finance', 65000, 7, 'Chennai', 2019),
  (105, 'Farah', 24, 'HR', 32000, 2, 'Hyderabad', 2024),
  (106, 'Girish', 35, 'Finance', 80000, 10, 'Bengaluru', 2016),
  (107, 'Harsha', 27, 'IT', 45000, 4, 'Vijayawada', 2022),
  (108, 'Isha', 23, 'Marketing', 28000, 1, 'Chennai', 2025),
  (109, 'Kiran', 32, 'HR', 70000, 8, 'Bengaluru', 2018),
  (110, 'Meena', 29, 'Marketing', 60000, 6, 'Hyderabad', 2020),
  (111, 'Naveen', 26, 'Finance', 35000, 3, 'Chennai', 2023),
  (112, 'Priya', 31, 'IT', 75000, 9, 'Bengaluru', 2017),
  (113, 'Rahul', 24, 'Sales', 30000, 2, 'Vijayawada', 2024),
  (114, 'Sneha', 28, 'Sales', 48000, 5, 'Hyderabad', 2021),
  (115, 'Varun', 33, 'Marketing', 68000, 8, 'Chennai', 2018),
  (116, 'Divya', 26, 'Sales', 42000, 3, 'Bengaluru', 2022),
  (117, 'Manoj', 29, 'IT', 52000, 6, 'Chennai', 2020),
  (118, 'Pooja', 22, 'HR', 27000, 1, 'Vijayawada', 2025),
  (119, 'Arjun', 34, 'Finance', 90000, 11, 'Hyderabad', 2015),
  (120, 'Keerthi', 27, 'Sales', 55000, 4, 'Chennai', 2022);

INSERT INTO Departments (dept_id, dept_name, dept_head, location, budget) VALUES
  (1, 'IT', 'Priya', 'Bengaluru', 1200000),
  (2, 'HR', 'Kiran', 'Bengaluru', 500000),
  (3, 'Finance', 'Arjun', 'Hyderabad', 1500000),
  (4, 'Marketing', 'Varun', 'Chennai', 800000),
  (5, 'Sales', 'Sneha', 'Hyderabad', 950000),
  (6, 'Legal', 'Suresh', 'Hyderabad', 400000),
  (7, 'Operations', 'Geeta', 'Chennai', 650000),
  (8, 'R&D', 'Vikram', 'Bengaluru', 1800000);

INSERT INTO Projects (project_id, project_name, dept_id, budget, start_date, end_date, status) VALUES
  (501, 'Cloud Migration', 1, 250000, '2024-01-15', '2024-12-31', 'Active'),
  (502, 'ERP Modernization', 1, 400000, '2023-06-01', '2024-08-30', 'Completed'),
  (503, 'Global Talent Acquisition', 2, 120000, '2024-03-01', '2024-11-30', 'Active'),
  (504, 'Financial Audit Automation', 3, 300000, '2024-02-01', '2024-10-15', 'Active'),
  (505, 'Brand Revamp 2025', 4, 180000, '2024-05-01', '2025-01-31', 'Active'),
  (506, 'CRM Sales Pipeline', 5, 220000, '2023-09-01', '2024-05-30', 'Completed'),
  (507, 'Compliance Automation', 6, 90000, '2025-02-01', '2025-09-30', 'Planning'),
  (508, 'NextGen AI Suite', 8, 550000, '2025-01-01', '2025-12-31', 'Planning');

INSERT INTO Employee_Projects (emp_id, project_id, assigned_role, hours_allocated) VALUES
  (103, 501, 'Lead Developer', 35),
  (103, 502, 'Backend Architect', 15),
  (107, 501, 'Full Stack Engineer', 40),
  (112, 501, 'Project Manager', 25),
  (112, 504, 'Technical Advisor', 15),
  (117, 502, 'Database Specialist', 30),
  (102, 503, 'Recruiter', 35),
  (105, 503, 'HR Coordinator', 30),
  (109, 503, 'HR Lead', 20),
  (104, 504, 'Senior Auditor', 35),
  (106, 504, 'Compliance Officer', 20),
  (111, 504, 'Financial Analyst', 30),
  (119, 504, 'Finance Director', 10),
  (108, 505, 'Content Strategist', 35),
  (110, 505, 'Marketing Manager', 30),
  (115, 505, 'Creative Director', 20),
  (115, 506, 'Campaign Strategist', 20),
  (114, 506, 'Sales Lead', 35),
  (116, 506, 'Account Executive', 30),
  (120, 506, 'Client Onboarding', 25);

INSERT INTO Performance_Reviews (review_id, emp_id, review_year, rating, bonus, feedback) VALUES
  (1, 103, 2024, 4, 15000, 'Outstanding delivery on cloud modules'),
  (2, 104, 2024, 4, 18000, 'Exceptional attention to financial auditing accuracy'),
  (3, 106, 2023, 4, 20000, 'Consistent senior finance performance'),
  (4, 106, 2024, 5, 25000, 'Top contributor across all finance operations'),
  (5, 107, 2024, 3, 8000, 'Solid execution on technical tasks'),
  (6, 109, 2024, 4, 18000, 'Strong talent pipeline management'),
  (7, 110, 2024, 4, 16000, 'High-impact digital marketing campaigns'),
  (8, 111, 2024, 2, NULL, 'Needs improvement in quarterly reporting timelines'),
  (9, 112, 2023, 4, 20000, 'Excellent project execution in engineering'),
  (10, 112, 2024, 5, 25000, 'Promoted to project delivery lead'),
  (11, 114, 2024, 4, 12000, 'Exceeded regional sales targets'),
  (12, 115, 2024, 4, 15000, 'Successful multi-channel campaign launch'),
  (13, 116, 2024, 3, 7000, 'Good customer relationship retention'),
  (14, 117, 2024, 3, 9000, 'Reliable database support and maintenance'),
  (15, 119, 2022, 5, 25000, 'Consistently exceptional financial strategy'),
  (16, 119, 2023, 5, 28000, 'Spearheaded corporate cost optimization'),
  (17, 119, 2024, 5, 30000, 'Highest performance rating in company history'),
  (18, 102, 2024, 3, 6000, 'Good support on campus recruitment drives');
`;
