// How do these functions break down and how can I make them simple and small

// TODO: Include packages needed for this application
// Trying to use path to see if that will help me finish the writeToFile function

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
// User will be prompted to fill in this data which will display on their README
const questions = [

    {
        type: 'input',
        name: 'title',
        message: "What's the title of your project for your README?",

    },

    {
        type: 'input',
        name: 'description',
        message: "Describe what your project is all about and how it works",

    },

    {
        type: 'input',
        name: 'installation',
        message: "Provide instructions on how to install your app",

    },

    {
        type: 'input',
        name: 'usage',
        message: "What technologies did you use for this project",

    },

    {
        type: 'input',
        name: 'contributions',
        message: "Explain how other developers could contribute to your project",

    },

    {
        type: 'input',
        name: 'test',
        message: "Explain in detail about the tests you wrote for your app",

    },

    {
        type: 'list',
        name: 'License',
        message: 'What license do you want to use?',
        choices: [
            'Apache', 'BSD 2', 'BSD 3', 'General Public', 'Lesser General Public', 'MIT', 'Mozilla Public'
        ],
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',

    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',

    }

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = `./utils/${fileName}`;
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${fileName} was successfully created.`);
    });
}
const fileName = 'READMEtemplate.md';
const data = 'This the content you created for your README file.';
writeToFile(fileName, data);
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("READMEtemplate.md", generateMarkdown(answers));
        console.log(JSON.stringify(answers, null, '  '));
    });
    // console.log(init()`Is this code working?`);
};

// Function call to initialize app
init();
