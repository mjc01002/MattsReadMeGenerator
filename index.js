// TODO: Include packages needed for this application
const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const generateReadMe = require("./src/generateReadMe")
const writeFile = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application (required)?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the title of your application!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description1',
        message: 'What was your motivation for this application (required)?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the motiviation for this application!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description2',
        message: 'Why did you build this application (required)?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter why you build this application!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description3',
        message: 'What problem does your application solve (required)?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the problem you solved with this application!');
              return false;
            }
          } 
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
        message: 'Describe the installation instructions for your application (required)?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the installation instructions for this application!');
              return false;
            }
          }
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
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username for this application!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email address.',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter and email address for this application!');
              return false;
            }
          }
      },
    ]);
  };
  
  promptUser().then(answers => console.log(answers));

// Async function using util.promisify 
async function init() {
  try {
      // Ask user questions and generate responses
      const answers = await promptUser();
      const generateContent = generateReadMe(answers);
      // Write new README.md to dist directory
      await writeFile('./dist/README.md', generateContent);
  }   catch(err) {
      console.log(err);
  }
}
// Function call to initialize app
init();
