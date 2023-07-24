// TODO: Include packages needed for this application
const fs = require("fs");

const inquirer = require("inquirer");

const genMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "projName",
  },
  {
    type: "input",
    message: "What is your project Description?",
    name: "projDescription",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "projInstall",
  },
  {
    type: "input",
    message: "How do i use the project?",
    name: "projUsage",
  },
  {
    type: "input",
    message: "How do i test the project?",
    name: "projTests",
  },
  
  {
    type: "list",
    message: "Choose a License",
    name: "projLicense",
    choices: ["Apache 2.0", "GNU GPL v3", "MIT", "BSD-3"],
  },
  {
    type: "input",
    message: "Please enter your Github username",
    name: "projUsername",
  },
  {
    type: "input",
    message: "Please enter your email",
    name: "projEmail",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Write data in 'Output.txt' .
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    let data = genMarkdown(responses);
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
