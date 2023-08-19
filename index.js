const express = require('express');
const inquirer = require('inquirer');
const app = express();
const mysql = require("mysql2");

// connection to database
const connection = mysql.createConnection({
    host: 'baseOdata',
    user: 'root',
    password: 'rootr00t!',
    database: 'schema.sql',
})

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
  


displayMenu();
