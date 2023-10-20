// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const generateREADME = ({ title, install, usage, contributors, testing, license }) => {
  console.log("title=  ", title);
  return
  `#${title}

  #
   `;
}

  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
      message: 'Please include a link to display the testing of the application',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a License from the list',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
  ])
  .then((userResponse) => {
    console.log('userResponse= ', userResponse);
    let readMeText = generateREADME({... userResponse});
    writeToFile("myReadMe.md", readMeText);

  })
}

// Function call to initialize app
init();
