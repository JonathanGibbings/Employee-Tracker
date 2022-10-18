const { prompt } = require("inquirer");
const query = require("./queries/queries");
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
        "All departments",
        "All roles",
        "All employees",
        "All employees by manager",
        "All employees by department",
        "Total budget by department",
        "Return",
      ],
    },
  ]);
  switch (choice) {
    case "All departments":
      query.view.departments().then(mainMenu);
      break;
    case "All roles":
      query.view.roles().then(mainMenu);
      break;
    case "All employees":
      query.view.employees().then(mainMenu);
      break;
    case "All employees by manager":
      query.view.employeesByManager().then(mainMenu);
      break;
    case "All employees by department":
      query.view.employeesByDepartment().then(mainMenu);
      break;
    case "Total budget by department":
      query.view.budgetByDepartment().then(mainMenu);
      break;
    case "Return":
    default:
      mainMenu();
      break;
  }
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
