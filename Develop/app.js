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
      validate: function validatetName(name) {
        let valid = !isNaN(parseFloat(name));
        return valid || "Please enter a number";
      }
    },
    {
      type: "input",
      name: "email",
      message: "Enter the manager's email: ",
      validate: function (email) {
        return validator
          .isEmail(email) || "Please enter a valid email."
      }
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
  .then(function (answers) {
    promptForEmployeeDetails(answers);
    return answers;
  })
  .catch(function (err) {
    console.log("catch", err);
  });



function promptForEmployeeDetails() {
  return inquirer
    .prompt([{
      type: "list",
      name: "type",
      message: "What kind of employee do you want to add to your team?",
      choices: ["Intern", "Engineer"]
    },
    {
      type: "input",
      name: "name",
      message: "Enter the employee's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the employee's ID: ",
      // source: https://searchcode.com/codesearch/view/98875892/
      // using the "validate" property provided by inquirer, the following code checks that the id input is a number
      validate: function validatetName(name) {
        let valid = !isNaN(parseFloat(name));
        return valid || "Please enter a number";
      }
    },
    {
      type: "input",
      name: "email",
      message: "Enter the employee's email: ",
      validate: function (email) {
        return validator
          .isEmail(email) || "Please enter a valid email."
      }
    },
    {
      when: function (response) {
        if (response.type === "Intern") {
          return response.type;
        }
      },
      name: "school",
      message: "Enter the intern's school: "
    },
    {
      when: function (response) {
        if (response.type === "Engineer") {
          return response.type;
        }
      },
      name: "GitHub",
      message: "Enter the Engineer's GitHub: "
    },
    {
      type: "confirm",
      name: "more",
      message: "Would you like to add more team members?",
      default: true,
    }
    ]);
}

