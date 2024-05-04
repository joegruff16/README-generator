// This is where all the README Markdown code will go
// This Module will communicate with the index js module

console.log(`Program is starting...`)
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { // Section when you type license this is the function that will add a license badge

  if (license) const noLicense = '';
  return LicenseBadge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const template = `# ${data.title};

  #Title of the Project
  - [Description](#Description)
  - [Table of Contents](#TableofContents)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributions)
  - [Tests](#Tests)
  - [Questions](#Questions)


  #Title of the Project
  ## Description
  ${Description}
  ## Table of Contents
  ${TableofContents}
  ## Installation
  ${Installation}
  ## Usage
  ${Usage}
  ## License
  ${License}
  ## Contributing
  ${Contributions}
  ## Tests
  ${Tests}
  ## Questions
  ${Questions}



  return `# ${ data.title }


}
console.log(`Program has ended...`)
module.exports = generateMarkdown;
