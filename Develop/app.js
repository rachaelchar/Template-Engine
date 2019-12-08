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
    promptForEmployeeType(answers);
    return answers;
  })
  .catch(function (err) {
    console.log("catch", err);
  });


    //           .then(function (answers) {
    // if (choices === "Intern") {
    //   //loop back to first prompt again
    //   return prompt('question 1 data');
    // } else {
    //   //ask second prompt
    //   return prompt('question 2 data');
    // }
  // });


function promptForEmployeeType() {
  return inquirer
    .prompt([{
      type: "list",
      name: "type",
      message: "What kind of employee do you want to add to your team?",
      choices: ["Intern", "Engineer"]
    },
    ]);
}


function promptForInternDetails() {
  return inquirer
    .prompt([{
      type: "input",
      name: "name",
      message: "Enter the intern's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's ID: ",
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
      message: "Enter the intern's email: ",
      validate: function (email) {
        return validator
          .isEmail(email) || "Please enter a valid email."
      }
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school: ",
    }
    ]);
}

function promptForEngineerDetails() {
  return inquirer
    .prompt([{
      type: "input",
      name: "name",
      message: "Enter the engineer's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's ID: ",
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
      message: "Enter the engineer's email: ",
      validate: function (email) {
        return validator
          .isEmail(email) || "Please enter a valid email."
      }
    },
    {
      type: "input",
      name: "school",
      message: "Enter the engineer's GitHub username: ",
    }
    ]);
}
