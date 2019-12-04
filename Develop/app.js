const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Intern = require("./app/Intern.js");
const Engineer = require("./app/Engineer.js");

// object of Employees with properties of manager, intern, engineer (each an array that you push to when adding one)

let employeesObject = {
    managers: [],
    engineers: [],
    interns: []
}