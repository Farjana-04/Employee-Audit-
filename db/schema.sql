-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS employees_db;
-- Create the database task_saver_db and specified it for use
CREATE DATABASE employees_db;

USE employees_db;
-- Create the table tasks
CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(department_id)
);

CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

CREATE TABLE employees (
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name 	VARCHAR(30) NOT NULL,
  last_name  	VARCHAR(30) NOT NULL,
  role_id 	INT NOT NULL,
  manager_id    INT,
  FOREIGN KEY (role_id) REFERENCES roles(role_id)
);