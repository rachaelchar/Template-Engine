const inquirer = require("inquirer");
const validator = require("validator");
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
      message: "Enter the manager's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the manager's ID: ",
      // source: https://searchcode.com/codesearch/view/98875892/
      // using the "validate" property provided by inquirer, the following code checks that the id input is a number
      validate: function validateFirstName(name) {
        let valid = !isNaN(parseFloat(name));
        return valid || "Please enter a number";
      }
    },
    {
      type: "input",
      name: "email",
      message: "Enter the manager's email: ",
    }
    ]);
}

promptForManager()
  .then(function (answers) {
    let newManager = answers;
    console.log(newManager);
    employeesObject.managers.push(newManager);
    console.log(employeesObject);
    return answers;
  })
  .catch(function (err) {
    console.log("catch", err);
  });

  // promptForEmployeesType()
  //   .then(function (answers) {
  //     return answers;
  //   })






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
