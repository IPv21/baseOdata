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
}

displayMenu();
