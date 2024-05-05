// How do these functions break down and how can I make them simple and small

// TODO: Include packages needed for this application
// This can be developed by reading the inquire documentation
// const inquire = require('./utils/generateMarkdown');
// inquire

const fs = require('node:fs/promises');


// TODO: Create an array of questions for user input
// User will be prompted to fill in this data which will display on their README
const inquire = require('./utils/generateMarkdown');
inquire
const questions = [
    {
        type: 'input',
        name: 'project title',
        message: "What's the title of your project for your README?",
        validate(answer) {
            if (answer === "") {
                return 'You must enter a title';
            } else {
                return true;
            }
        }

    },

    {
        type: 'input',
        text: 'description',
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
        text: 'installation',
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
        text: 'usage',
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
        text: 'contribution',
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
        text: 'test',
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
        text: 'License',
        message: 'What license do you want to use?',
        choices: [
            'Apache', 'BSD 2', 'BSD 3', 'General Public', 'Lesser General Public', 'MIT', 'Mozilla Public'
        ],
    },

    {
        type: 'input',
        text: 'Questions',
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
        text: 'Questions',
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

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}
writeToFile();
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
