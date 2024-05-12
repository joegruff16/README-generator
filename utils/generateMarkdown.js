// This is where all the README Markdown code will go
// This Module will communicate with the index js module


// I could use the NPM badge maker to easily make the badges
// const { makeBadge, ValidationError } = require('badge-maker')
console.log(`Program is starting...`)
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { // Section when you type license this is the function that will add a license badge
  let licenseBadge;
  let licenseUrl;

  // const renderLicenseBadge = { key: 'value' };
  // const keyValue = renderLicenseBadge.key;

  switch (license) {
    case 'Apache 2.0':
      licenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
      licenseUrl = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'BSD 2':
      licenseBadge = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
      licenseUrl = 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'BSD 3':
      licenseBadge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
      licenseUrl = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'MIT':
      licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      licenseUrl = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
      licenseUrl = 'https://opensource.org/licenses/MPL-2.0';
      break;
  };
  console.log('Does this work')
  return { badge: licenseBadge, url: licenseUrl };
};

const licenseData = renderLicenseBadge(data.license);
data.licenseBadge = licenseData.badge;
data.licenseUrl = licenseData.url;
// const markdown = generateMarkdown(data);
// const { badge, url } = renderLicenseBadge(license);
// console.log(badge);
// console.log(url);
// renderLicenseBadge();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const markdown = `

  ## License Badge
  License: ${data.licenseBadge}

  ## Table of Contents
  - [License](#license)
  - [Title](#title)
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

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions you can reach me at my email ${data.email} or you can find me on github at ${data.github}`;
  return markdown;

}

// Pass in actual questions from index.js above for email, gitHub etc
// Collaborated with a TA and a fellow student for help figuring out the Questions section above
console.log(`Program has ended...`);

module.exports = generateMarkdown;

// ## License
// ${data.license}
// You have selected the ${data.license} license!
// [![License:](${data.licenseBadge})]
// (${data.licenseUrl})
// module.exports = renderLicenseBadge;
