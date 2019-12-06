const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");


let employeesObject = {
  managers: [],
  engineers: [],
  interns: []
}

function promptForManager() {
  return inquirer
    .prompt([{
      type: "input",
      name: "name",
      message: "Enter the manager's name.",

    },
    {
      type: "input",
      name: "id",
      message: "Enter the manager's ID.",
      // source: https://searchcode.com/codesearch/view/98875892/
      validate: function validateFirstName(name) {
        let valid = !isNaN(parseFloat(name));
        return valid || "Please enter a number";
      }
    },
    {
      type: "input",
      name: "email",
      message: "Enter the manager's email.",
    },
    ]);
}

promptForManager()
  .then(function (answers) {
    return answers;
  })

function promptForEmployeesType() {
  return inquirer
    .prompt([{
      type: "list",
      name: "type",
      message: "What kind of employee?",
      choices: ["Intern", "Engineer"]
    },
    ]);
}

function promptForEmployeeDetails() {
  return inquirer
    .prompt([{
      type: "list",
      name: "type",
      message: "What kind of employee?",
      choices: ["Intern", "Engineer"]
    },
    ]);
}
