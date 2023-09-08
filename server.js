const inquirer = require('inquirer');
const mysql = require('mysql2');
// Create connection with database(SQL)
const dbConnection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'Tahiya416@',
    database: 'employees_db'
  });
console.log(`Connected to the employees_db database.`)

dbConnection.connect(function (err) {
  if (err) {
    console.log("connected to db as id " + dbConnection.threadId);
  }
  startQuestion();

});

 function startQuestion() {
  inquirer
    .prompt({
      name: "userTask",
      type: "list",
      message: "What would you like to do?",
      choices:
        [
          "View All Employees",
          "View all Departments",
          "View all roles",
          "Add an Employee",
          "Add a Department",
          "Add a Role",
          "Update an employee Role",
          "End"
        ]
    })

    .then(function (answer) {
      
      if (answer.userTask === "Add an Employee") {
        addEmployee();
      }
      else if (answer.userTask === "View all roles") {
        viewRoles();
      } else if (answer.userTask === "View all Departments") {
        viewDepartments();
      }
      else if (answer.userTask === "View All Employees") {
        viewEmployees();
      }
      else if (answer.userTask === "Add a Role") {
        addEmployeeRoles();
      }
      else if (answer.userTask === "Add a Department") {
        addEmployeeDepartment();
      }
      else if (answer.userTask === "Update an employee Role") {
        updateEmployeeRoles();
      }
      else {
        dbConnection.end();
 }
    });
}
function addEmployeeDepartment() {
  inquirer
    .prompt(
      {
        name: 'name',
        message: "What is the department's name?",
        type: 'input'
      }
    ).then(function ({ name }) {
      dbConnection.query(`INSERT INTO departments ( department_name) VALUES (?)`, [name], function (err, data) {
        if (err) throw err;
        console.log(`Added`)
        startQuestion();
      })
    })
}
// Adding roles
function addEmployeeRoles() {
  let department = []

  dbConnection.query(`SELECT * FROM departments`, function (err, data) {
    if (err) throw err;

    for (let i = 0; i < data.length; i++) {
      department.push(data[i].department_name)

    }
    console.log(department)
    inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "Enter the title of the employee",

      },
      {
        name: "salary",
        type: "input",
        message: "Enter employee salary",

      },
      {
        name: "department_id",
        type: "input",
        message: "Which department this employee role belong to ",

      }
    ])
      .then(function ({ title, salary, department_id }) {
        let index = department.indexOf(department_id)

        dbConnection.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, index], function (err, data) {
          if (err) throw err;
          console.log(`Added`)
          startQuestion();

        })
      })
    }) 
}

function addEmployee() {
inquirer
    .prompt([
      {
        name: 'first_name',
        message: "Enter the employees First Name",
        type: 'input'
      },
      {
        name: 'last_name',
        message: 'Enter the employesss last name',
        type: 'input',
      },
      {
        name: 'role_id',
        message: 'Enter the employees role ID?',
        type: 'list',
        choices: [2, 4, 5, 6, 8, 11]
      },
      {
        name: 'manager_id',
        message: "Who is the employees manager?",
        type: 'list',
        choices: [1, 2, 3]
      }
    ])
    .then(function (answer) {
      dbConnection.query("insert into employees(first_name, last_name, role_id, manager_id) values(?, ?, ?, ?);",
        [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function (err, response) {
          if (err)
            (
              console.log(err)
            )
          console.log(response)
          startQuestion();
        })
    });
}
// write code for view roles, departments, employees
function viewRoles() {
  dbConnection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    console.table(res);
    startQuestion();
  });
}

function viewDepartments() {
  dbConnection.query("SELECT * FROM departments", function (err, res) {
    if (err) throw err;
    console.table(res);
    startQuestion();
  });
}
function viewEmployees() {
  dbConnection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    console.table(res);
    startQuestion();
  });
}

// Employee roles Updating 

function updateEmployeeRoles() {
  inquirer.prompt([
    {
      name: "employee_id",
      type: "list",
      message: "Choose the employee id",
      choices: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    },
    {
      name: "role_id",
      type: "list",
      message: "Update the employee role id",
      choices: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  ])
  //the database to modify records in the "employees" table.
    .then(function (answer) {
      dbConnection.query(
        "UPDATE employees SET role_id = ? WHERE employee_id = ?",
        [answer.role_id, answer.employee_id],
        function (err, response) {
          if (err) {
            console.log(err);
          } else {
            console.log(response);
          }
          startQuestion();
        }
      );
    });
}


