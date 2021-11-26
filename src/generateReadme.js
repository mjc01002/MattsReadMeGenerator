// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.title}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
${answers.description1}
${answers.description2}
${answers.description3}
${answers.description4}
${answers.description5}


## Table of Contents
- [Description1](#description)
- [InstallationInstructions](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installationInstructions}

## Usage
${answers.usageInformation}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
${answers.contributingGuidelines}

## Tests
${answers.testInstructions}

## Contact Information
${answers.github}<br />
<br />
[${answers.github}](https://github.com/${answers.github})<br />
<br />
Email me: ${answers.emailAddress}<br /><br />
`;
  }
  
  module.exports = generateReadme;