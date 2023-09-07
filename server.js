const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
// const cTable = require('console.table');

// Create connection with database(SQL)
const dbConnection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    port: 3306,
    // MySQL password
    password: 'Tahiya416@',
    database: 'employees_db'
  });
// console.log(`Connected to the employees_db database.`)

// dbConnection.connect(function (err) {
//   if (err) {
//     console.log("connected to db as id " + dbConnection.threadId);
//   }
//   startQuestion();

// });

// // 
// function startQuestion() {
//   inquirer
//     .prompt({
//       name: "userTask",
//       type: "list",
//       message: "What would you like to do?",
//       choices:
//         [
//           "View All Employees",
//           "View all Department",
//           "View all role",
//           "Add an Employee",
//           "Add a Department",
//           "Add a Role",
//           "Update an employee Role",
//           "End"
//         ]
//     })
    
//     .then(function (answer) {
//       // based on their answer, either they will add new employees or view it. 
//       if (answer.userTask === "Add an Employee") {
//         addEmployee();
//       }
//       else if (answer.userTask === "View all role") {
//         viewRoles();
//       } else if (answer.userTask === "View all Department") {
//         viewDepartments();
//       }
//       else if (answer.userTask === "View All Employees") {
//         viewEmployees();
//       }
//       else if (answer.userTask === "Add a Role") {
//         addEmployeeRoles();
//       }
//       else if (answer.userTask === "Add a Department") {
//         addEmployeeDepartment();
//       }
//       else if (answer.userTask === "Update an employee Role") {
//         updateEmployeeRoles();
//       }

//       else {
//         dbConnection.end();
//         //   if(answer.userTask === "View Departments") {
//         //     viewDepartments();

//       }
//     });
// }


// function addEmployeeDepartment() {
//   inquirer
//     .prompt(
//       {
//         name: 'name',
//         message: "What is the department's name?",
//         type: 'input'
//       }
//     ).then(function ({ name }) {
//       dbConnection.query(`INSERT INTO departments ( department_name) VALUES (?)`, [name], function (err, data) {
//         if (err) throw err;
//         console.log(`Added`)
//         startQuestion();
//       })
//     })
// }
// // Adding roles
// function addEmployeeRoles() {
//   let department = []

//   dbConnection.query(`SELECT * FROM departments`, function (err, data) {
//     if (err) throw err;

//     for (let i = 0; i < data.length; i++) {
//       department.push(data[i].department_name)

//     }
//     console.log(department)
//     inquirer.prompt([
//       {
//         name: "title",
//         type: "input",
//         message: "Enter the title of the employee",

//       },
//       {
//         name: "salary",
//         type: "input",
//         message: "Enter employee salary",

//       },
//       {
//         name: "department_id",
//         type: "input",
//         message: "Enter employee department name",

//       }
//     ])
//       .then(function ({ title, salary, department_id }) {
//         let index = department.indexOf(department_id)

//         dbConnection.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, index], function (err, data) {
//           if (err) throw err;
//           console.log(`Added`)
//           startQuestion();

//         })
//       })
//   })
// }
// function addEmployee() {

//   inquirer
//     .prompt([
//       {
//         name: 'first_name',
//         message: "Enter the employees First Name",
//         type: 'input'
//       },
//       {
//         name: 'last_name',
//         message: 'Enter the employesss last name',
//         type: 'input',
//       },
//       {
//         name: 'role_id',
//         message: 'Enter the employees role ID?',
//         type: 'list',
//         choices: [2, 4, 5, 6, 8, 11]
//       },
//       {
//         name: 'manager_id',
//         message: "Who is the employees manager?",
//         type: 'list',
//         choices: [1, 2, 3]
//       }
//     ])
//     .then(function (answer) {
//       dbConnection.query("insert into employees(first_name, last_name, role_id, manager_id) values(?, ?, ?, ?);",
//         [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function (err, response) {
//           if (err)
//             (
//               console.log(err)
//             )
//           console.log(response)
//           startQuestion();
//         })
//     });
// }

// function viewRoles() {
//   dbConnection.query("SELECT * FROM roles", function (err, res) {
//     if (err) throw err;
//     console.table(res);
//     startQuestion();
//   });
// }

// function viewDepartments() {
//   // console.log("departments table")
//   dbConnection.query("SELECT * FROM departments", function (err, res) {
//     if (err) throw err;
//     console.table(res);
//     startQuestion();
//   });

// }
// function viewEmployees() {
//   dbConnection.query("SELECT * FROM employees", function (err, res) {
//     if (err) throw err;
//     console.table(res);
//     startQuestion();
//   });
// }

// // Updating Roles

// function updateEmployeeRoles() {
//   console.log("update employee roles");
//   inquirer.prompt([
//     {
//       name: "employee_id",
//       type: "list",
//       message: "Choose employee id",
//       choices: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
//     },
//     {
//       name: "role_id",
//       type: "list",
//       message: "Update employee role id",
//       choices: [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     }
//   ])
//     .then(function (answer) {
//       dbConnection.query(
//         //SQL UPDATE statement. It's telling the database to modify records in the "employees" table.
//         "UPDATE employees SET role_id = ? WHERE employee_id = ?",
//         //is an array of values that correspond(match) to the placeholders in the SQL query:
//         [answer.role_id, answer.employee_id],
//         function (err, response) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(response);
//           }
//           startQuestion();
//         }
//       );
//     });
// }


