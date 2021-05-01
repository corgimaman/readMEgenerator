// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const licenses = [
    'None',
    'MIT',
    'Creative Commons',
    'GNU GPL v3',
    'Apache'
];

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project/What are the instructions for use?'
    },
    {
        type: 'confirm',
        name: 'ynguidelines',
        message: 'Do you have any contribution guidelines?',
        default: false,
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are your contribution guidelines?',
        when: function(answers) {
            return answers.ynguidelines;
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to associate to this project?',
        choices: licenses,
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What e-mail address would you like to put for people to contact you with additional questions?'
    }
];

// function to make file
function generateREADME(answers){
    let guidelines = answers.ynguidelines;
    let guideline = `## Contribution
${answers.guidelines}`;
    let guidelineTOC = `* [Contribution Guidelines](#Contribution)`

    let licenseIMG = ""

    // if (answers.license = "MIT") {
    //     licenseIMG = "[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)";
    // } else if (answers.license = "Creative Commons") {
    //     licenseIMG = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    // } else if (answers.license = "GNU GPL v3") {
    //     licenseIMG = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    // } else if (answers.license = "Apache") {
    //     licenseIMG = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    // } else {
    //     licenseIMG = "";
    // }

    switch (answers.license) {
        case "MIT":
            licenseIMG = "[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "Creative Commons":
            licenseIMG = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;
        case "GNU GPL v3":
            licenseIMG = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "Apache":
            licenseIMG = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        default:
            break;
    }

    return `# ${answers.title}

${answers.description}

## Table of Contents
* [Installation Guide](#Installation)
* [How to Use](#Usage)
${guidelines ? guidelineTOC : ''}
* [Test Instructions](#Instructions)
* [License](#License)
* [Contact Info](#Contact)

## Installation
${answers.install}

## Usage
${answers.usage}

${guidelines ? guideline : ''}

## Instructions
${answers.instructions}

## License
This project is licensed under the ${answers.license} license.

${licenseIMG}

©[${answers.github}](https://github.com/${answers.github})

## Contact
Questions? Comments? Feel free to reach out to me at ${answers.email} or on [GitHub](https://github.com/${answers.github}).
`};

// function to run inquirer
function init() {
    inquirer.prompt(questions).then((answers) => {
        const READMEcontent = generateREADME(answers);

        fs.writeFile('README.md', READMEcontent, (err) => 
            err ? console.log(err) : console.log('Successfully created README.md'));
    });
}

// call function to start program
init();