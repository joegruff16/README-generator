// This is where all the README Markdown code will go
// This Module will communicate with the index js module

console.log(`Program is starting...`)
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { // Section when you type license this is the function that will add a license badge

  // if (license) const noLicense = '';
  // return LicenseBadge;
}

// This will be the lincense link for all of the licenses
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // const licenseLink = 


};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions you can reach me at ${data.email} or ${data.github}
`
} // Pass in actual questions from index.js above for email, gitHub etc
console.log(`Program has ended...`)
module.exports = generateMarkdown;
