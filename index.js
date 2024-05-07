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
        validate(answer) {
            console.log(answer);
            if (answer.length < 1) {
                return 'You must enter a title';
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'description',
        message: "Describe what your project is all about and how it works",
        validate(answer) {
            if (answer === "") {
                return 'You must enter a description about your project';
            } else {
                return true;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: "Provide instructions on how to install your app",
        validate(answer) {
            if (answer === "") {
                return 'You must enter installation instructions';
            } else {
                return true;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: "What technologies did you use for this project",
        validate(answer) {
            if (answer === "") {
                return 'You must enter the usage information';
            } else {
                return true;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: "Explain how other developers could contribute to your project",
        validate(answer) {
            if (answer === "") {
                return 'Please enter a valid response about how others could contribute to your project';
            } else {
                return true;
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: "Explain in detail about the tests you wrote for your app",
        validate(answer) {
            if (answer === "") {
                return 'Please enter information about the tests you wrote for your app';
            } else {
                return true;
            }
        }
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
        name: 'questions',
        message: 'Enter your Github username',
        validate(answer) {
            if (answer === "") {
                return 'Please enter a valid Github username';
            } else {
                return true;
            }
        }
    },

    {
        type: 'input',
        name: 'questions',
        message: 'Enter your email address',
        validate(answer) {
            if (answer === "") {
                return 'You must enter a valid email address';
            } else {
                return true;
            }
        }
    }


];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile() // Where is the file going to pass data , look upfs.writeFile + path, data node.js
}
writeToFile();
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("readmeTemplate.md", generateMarkdown(...answers));
        console.log(JSON.stringify(answers, null, '  '));
    });
};

// Function call to initialize app
init();
