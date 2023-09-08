-- Drops the task if it already exists --
DROP DATABASE IF EXISTS employees_db;
-- Create the database task and specified it for use
CREATE DATABASE employees_db;

USE employees_db;
-- Create the table tasks
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name 	VARCHAR(30) NOT NULL,
  last_name  	VARCHAR(30) NOT NULL,
  role_id 	  INT NOT NULL,
  manager_id  INT,
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);