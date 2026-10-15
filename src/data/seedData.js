/**
 * Seed data module for SQL_Interview_Practice database.
 * 20 official practice records for the Employees table.
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
    { emp_id: 120, emp_name: 'Keerthi', age: 27, department: 'Sales', salary: 55000, experience: 4, city: 'Chennai', joining_year: 2022 },
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
`;
