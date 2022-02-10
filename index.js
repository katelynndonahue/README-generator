// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");

let generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project name?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "Description",
    }
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation",
    }
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "Usage",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile('README.md', generateMarkdown({...answers}))
  })
}

// Function call to initialize app
init();
