USE employees_db;
-- Insert data into the departments table
INSERT INTO departments (department_name) 
VALUES ('Executive'),
       ('Sales'),
       ('Finance'),
       ('IT');

-- Insert data into the roles table
INSERT INTO roles (title, salary, department_id) VALUES 
    ('CEO', 350000, 1),
   ('Sales', 180000, 2),
   ('Financial Analyst',75000, 3),
   ('Test Engineer',70000, 4);

-- Insert data into the employees table
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES 
    ('Ben',  'Dizel',     1, NULL),
    ('Jim',  'Depp',     2, NULL),
    ('Marry','Margaratte', 3 Null),
    ('Sheen','Tuba', 4 Null);
