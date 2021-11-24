// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
      },
      {
        type: 'input',
        name: 'description1',
        message: 'What was your motivation for this application?' 
      },
      {
        type: 'input',
        name: 'description2',
        message: 'Why did you build this application?' 
      },
      {
        type: 'input',
        name: 'description3',
        message: 'What problem does your application solve?' 
      },
      {
        type: 'input',
        name: 'description4',
        message: 'What did you learn creating this application?' 
      },
      {
        type: 'input',
        name: 'description5',
        message: 'What makes your application stand out?' 
      },
      {
        type: 'input',
        name: 'installationInstructions',
        message: 'Describe the installation instructions for your application?'
      },
      {
        type: 'input',
        name: 'usageInformation',
        message: 'Describe the usage information for your application?'
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Describe the contribution guidelines for your application?'
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'Describe the test instructions for your application?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application',
        choices: ['Apache 2.0', 'GNU GPLv3', 'MIT', 'ISC']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email address.'
      },
    ]);
  };
  
  promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
