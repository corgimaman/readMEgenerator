// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');
// TODO: Create an array of questions for user input
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
        name: 'yn-guidelines',
        message: 'Do you have any contribution guidelines?',
        default: false,
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are your contribution guidelines?'
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

const licenses = [
    'None',
    'MIT',
    'Open Source',
    'Creative Commons',
    'GNU GPL v3',
    'Apache'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //fs.writeFile(fileName, data,)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        
    })
}

// Function call to initialize app
init();

// ----------------------------------------- my code -------------------------

const generateREADME = (answers) => 
    `# ${answers.title}
    
    ${answers.description}
    
    ## How to Install
    ${answers.install}
    
    ## How to Use
    ${answers.usage}
    
    `
    +

    if (${answers.yn-guidelines}){
        `## Contribution Guidelines
        ${answers.guidelines}`
    }

    +

    `## Test Instructions
    ${answers.instructions}
    
    ## License
    This project is licensed under the ${answers.license} license.
    ©[${answers.github}](https://github.com/${answers.github})

    ## Questions? Comments?
    Feel free to reach out to me at ${answers.email} or on [GitHub](https://github.com/${answers.github}).
    `;


function init1() {
    inquirer.prompt(questions).then((answers) => {
        const READMEcontent = generateREADME(answers);

        fs.writeFile('README.md', READMEcontent, (err) => 
            err ? console.log(err) : console.log('Successfully created README.md'));
    });
}
