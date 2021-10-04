const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

