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
  const param = await prompt([
    // question for type of add
    {
      type: "list",
      name: "choice",
      message: "What would you like to add?",
      choices: ["A new department", "A new role", "A new employee", "Return"],
    },
    // questions for new department
    {
      type: "input",
      name: "department",
      message: "What is the name of the department?",
      when: ({ choice }) => choice === "A new department",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log(" Please enter a department name");
          return false;
        }
      },
    },
    // questions for new role
    {
      type: "input",
      name: "role",
      message: "What is the name of the role?",
      when: ({ choice }) => choice === "A new role",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log(" Please enter a role name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the role?",
      when: ({ choice }) => choice === "A new role",
      validate: (input) => {
        if (!isNaN(parseInt(input))) {
          return true;
        } else {
          console.log(" Please enter a salary number");
          return false;
        }
      },
      filter: (input) => parseInt(input),
    },
    {
      type: "list",
      name: "departmentId",
      message: "What is the department of the role?",
      choices: await query.get.departments(),
      when: ({ choice }) => choice === "A new role",
    },
    // questions for new employee
    {
      type: "input",
      name: "firstName",
      message: "What is the first name of the employee?",
      when: ({ choice }) => choice === "A new employee",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter the employee's first name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the last name of the employee?",
      when: ({ choice }) => choice === "A new employee",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter the employee's last name");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "roleId",
      message: "What is the role of the employee?",
      choices: await query.get.roles(),
      when: ({ choice }) => choice === "A new employee",
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the manager of the employee?",
      choices: [{ name: "None", value: null }].concat(await query.get.employees()),
      when: ({ choice }) => choice === "A new employee",
    },
  ]);
  switch (param.choice) {
    case "A new department":
      const { department } = param;
      query.add.department(department).then(mainMenu);
      console.log(`Added department: ${department}`);
      break;
    case "A new role":
      const { role, salary, departmentId } = param;
      query.add.role(role, salary, departmentId).then(mainMenu)
      console.log(`Added role ${role}`);
      break;
    case "A new employee":
      const { firstName, lastName, roleId, manager } = param;
      query.add.employee(firstName, lastName, roleId, manager).then(mainMenu);
      console.log(`Added employee ${firstName} ${lastName}`);
      break;
    case "Return":
    default:
      mainMenu();
      break;
  };
};

const optionsUpdate = async () => {
  const param = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to update?",
      choices: ["An employee's role", "An employee's manager", "Return"],
    },
  ]);
  switch (param.choice) {
    case "An employee's role":
      mainMenu();
      break;
    case "An employee's manager":
      mainMenu();
      break;
    case "Return":
    default:
      mainMenu();
      break;
  };
};

const optionsDelete = async () => {
  const param = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to delete?",
      choices: ["A department", "A role", "An employee", "Return"],
    },
  ]);
  switch (param.choice) {
    case "A department":
      mainMenu();
      break;
    case "A role":
      mainMenu();
      break;
    case "An employee":
      mainMenu();
      break;
    case "Return":
    default:
      mainMenu();
      break;
  };
};

module.exports = mainMenu;
