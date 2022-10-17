const { prompt } = require("inquirer");
const db = require("../db/connection");
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
      viewEmployees();
      break;
    case "Add":
      addMenu();
      break;
    case "Update":
      updateMenu();
      break;
    case "Delete":
      deleteMenu();
      break;
    case "Exit":
    default:
      process.exit();
  }
};

const viewMenu = async () => {};
const viewEmployees = async () => {
  const [employeeData] = await db.query(`SELECT * FROM employees`);
  console.table(employeeData);
  mainMenu();
};
const addMenu = async () => {};
const updateMenu = async () => {};
const deleteMenu = async () => {};

module.exports = mainMenu;
