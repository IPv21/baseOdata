const { default: inquirer } = require('inquirer');
const mysql = require('mysql2');
const connection = require('./connection');

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'rootr00t!',
    database: 'baseOdata'
});

db.connect(function(err) {
if (err) {
    console.error('Error connectiong to the database:', err);
    return;
}
    console.log('Connected to the database');

    module.exports = db;
});

function displayMenu() {
    inquirer
    .prompt ([
      {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          "Update an employee's role"
       ]
      }
    ])
    .then((choice) => {
      switch (choice.action) {
        case 'View all departments':
          // Call a function to view employees
          viewDepartments();
          break;
        case 'View all roles':
          // Call a function to add an employee
          viewRoles();
          break;
        case 'View all employees':
          // Call a function to update an employee
          viewEmployees();
          break;
        case 'Add a department':
          // Call a function to delete an employee
          addDepartment();
          break;
        case 'Add a role':
              // Call a function to delete an employee
          addRole();
          break;
        case 'Add an employee':
              // Call a function to delete an employee
          addEmployee();
          break;
        case "Update an employee's role":
              // Call a function to delete an employee
          updateRole();
          break;             
        case 'Exit':
          console.log('Goodbye!');
          connection.end(); // Close the database connection
          break;
        default:
          console.log('Invalid choice. Please try again.');
          displayMainMenu(); // Show the main menu again
          break;
      }
    });
}

function addRole() {
  inquirer
      .prompt([
          {
              type: 'input',
              name: 'title',
              message: 'Enter the title of the role:',
          },
          {
              type: 'input',
              name: 'salary',
              message: 'Enter the salary for the role:',
          },
          {
              type: 'input',
              name: 'department_id',
              message: 'Enter the department ID for the role:',
          },
      ])
      .then((answers) => {
          connection.query(
              'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
              [answers.title, answers.salary, answers.department_id],
              (err, results) => {
                  if (err) throw err;
                  console.log('Role added successfully!');
                  displayMenu(); // Return to the main menu
              }
          );
      });
}

function viewDepartments() {
// SQL query to select all departments
const query = 'SELECT * FROM department';
connection.query(query, (err, results) => {
    if (err) {
        console.error('Error fetching departments:', err);
    } else {
        // Display the list of departments
        console.log('List of Departments:');
        results.forEach((department) => {
            console.log(`ID: ${department.id} | Name: ${department.name}`);
        });
    }
    displayMenu(); // Return to the main menu
});
}

function viewRoles() {
const query = 'SELECT * FROM role';
connection.query(query, (err, results) => {
  if (err) {
  console.error('Error fetching roles:', err);
}  else {
    console.log('List of Roles:');
    results.forEach((role) => {
      console.log(`${role.title} | ID: ${role.id}`);
    });
  }})
 displayMenu();
}

function viewEmployees() {
const query = 'SELECT * FROM `employee`';
connection.query(query, (err, results) => {
  if (err) {
    console.error('Error fetching Employees:', err);
  } else {
    console.log('List of Employees:');
    results.forEach((employee) => {
      console.log(`ID: ${employee.id} | First Name: ${employee.first_name} | Last Name: ${employee.last_name}`);
    });
  }
  displayMenu();
});
}

function addDepartment() {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department:',
        },
        
    ])
    .then((answers) => {
        connection.query(
            'INSERT INTO `department` (name) VALUES (?)',
            [answers.name],
            (err, results) => {
                if (err) {
                    console.error('Error adding department:', err);
                } else {
                    console.log('Department added successfully!');
                }
                displayMenu(); // Return to the main menu
            }
        );
    });

function addEmployee() {
inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter name of new employee:',
      },
    ])
    .then((answers) => {
      connection.query(
        'INSERT INTO `employee` (name)'
      )
    })
}

  
}


module.exports = connection;