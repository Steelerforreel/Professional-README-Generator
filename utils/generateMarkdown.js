// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license-📛)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License 📛 

    Copyright @ ${license}. All rights reserved.

    Licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## ${data.description}

  ## Table of Contents
  
  * [Installation Guide](#install)
  
  * [Usage](#usage)

  * [Contributors](#contributors)

  * [Test of Application](#testing)

  * [Questions](#questions)

  * ${renderLicenseLink(data.license)}

  ## Installation Guide
  
  How to install this application within the command prompt.

  \`\`\`
  ${data.install}
  \`\`\`


  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors

  I would like to give credit to

  ${data.contributors}

  ## Test of Application

  Please follow this link to better understand the use for this application.

  \`\`\`
  ${data.testing}
  \`\`\`
  
  ## Questions?

  Please contact me via email for any questions.

  GitHub: [${data.github}](https://github.com/${data.github}/)

  Email: ${data.contact}

`;
}

module.exports = generateMarkdown;
