// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Describe your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
    name: "usage",
  },
  {
    type: "input",
    message: "How would you like to be contacted for contributions?",
    name: "contributing",
  },
  {
    type: "list",
    message: "Choose a license.",
    name: "license",
    choices: ["Apache", "GNU", "MIT"],
  },
  {
    type: "input",
    message: "What is the command to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your contact information?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("GeneratedREADME.md", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
