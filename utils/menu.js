const { prompt } = require("inquirer");
const query = require("./queries");
require("console.table");

const mainMenu = async () => {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: ["View", "Add", "Update", "Delete", "Exit"],
    },
  ]);
  switch (choice) {
    case "View":
      optionsView();
      break;
    case "Add":
      optionsAdd();
      break;
    case "Update":
      optionsUpdate();
      break;
    case "Delete":
      optionsDelete();
      break;
    case "Exit":
    default:
      process.exit();
  }
};

const optionsView = async () => {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to view?",
      choices: [
        {
          name: "All departments",
          value: `SELECT * FROM departments`,
        },
        {
          name: "All roles",
          value: "roles",
        },
        {
          name: "All employees",
          value: "employees",
        },
        {
          name: "All employees by manager",
          value: "employeesManager",
        },
        {
          name: "All employees by department",
          value: "employeesDepartments",
        },
        {
          name: "Total budget by department",
          value: "totalBudgetByDepartment",
        },
      ],
    },
  ]);
  console.log(choice);
  mainMenu();
};

const optionsAdd = async () => {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to add?",
      choices: [
        {
          name: "A new department",
          value: "newDepartment",
        },
        {
          name: "A new role",
          value: "newRole",
        },
        {
          name: "A new employee",
          value: "newEmployee",
        },
      ],
    },
  ]);
  console.log(choice);
  mainMenu();
};

const optionsUpdate = async () => {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to update?",
      choices: [
        {
          name: "An employee's role",
          value: "changeEmployeeRole",
        },
        {
          name: "An employee's manager",
          value: "changeEmployeeManager",
        },
      ],
    },
  ]);
  console.log(choice);
  mainMenu();
};

const optionsDelete = async () => {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to delete?",
      choices: [
        {
          name: "A department",
          value: "removeDepartment",
        },
        {
          name: "A role",
          value: "removeRole",
        },
        {
          name: "An employee",
          value: "removeEmployee",
        },
      ],
    },
  ]);
  console.log(choice);
  mainMenu();
};

module.exports = mainMenu;
