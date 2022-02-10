// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } 
    else if {
    if (license === 'Apache 2.0') {
      return `https://www.apache.org/licenses/LICENSE-2.0`;
    }
    else if (license === 'GNU General Public') {
      return `https://www.gnu.org/licenses/gpl-3.0.en.html`;

  } else (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  
  } else if (license === 'Apache 2.0') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  
  } else if (license === 'GNU General Public') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;

} else (license == 'MIT') {
  return `https://opensource.org/licenses/MIT`;
}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return  license + ` is the license used for this project.`
  } else {
    return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${data.install}

## Usage
${data.usage}

## License
## ${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
* ${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${renderGithubLink(data.username)}.
${data.contact}
* ${data.email}

`;
}

module.exports = generateMarkdown;
