// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("data=", data)
fs.writeFileSync(path.join(__dirname,fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a brief description of your project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How would you go about installing your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Please include a link for how to use your application',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a License from the list',
      choices: ['AGPLv3', 'GPLv3', 'LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'Unlicense']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your github username.',
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Please provide your email for contact.',
    },

  ])
  .then((userResponse) => {
    console.log('userResponse= ', userResponse);
    let readMeText = generateMarkdown(userResponse);
    writeToFile("myReadMe.md", readMeText);

  })
}

// Function call to initialize app
init();
