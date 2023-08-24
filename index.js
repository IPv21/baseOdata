const express = require('express');
const inquirer = require('inquirer');
const app = express();
const connection = require('./config/connection');

const PORT = 3001



app.listen(port, () => {
  console.log(`Server is running on port ${PORT}`);
  displayMenu();
})
