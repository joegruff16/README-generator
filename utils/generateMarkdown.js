// This is where all the README Markdown code will go
// This Module will communicate with the index js module


// I could use the NPM badge maker to easily make the badges
// const { makeBadge, ValidationError } = require('badge-maker')
console.log(`Program is starting...`)
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { // Section when you type license this is the function that will add a license badge

  if (license !== 'None') {
    return `![gitHub license](https://img.shields.io/badge/${license}-blue)`
  }
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## License Badge
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [License](#license)
  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions you can reach me at my email ${data.email} or you can find me on github at ${data.github}`;
} // Pass in actual questions from index.js above for email, gitHub etc
// Collaborated with a TA and a fellow student for help figuring out the Questions section above
console.log(`Program has ended...`);

module.exports = generateMarkdown;

// ## License
// ${data.license}
// You have selected the ${data.license} license!
// [![License:](${data.licenseBadge})]
// (${data.licenseUrl})
// module.exports = renderLicenseBadge;
