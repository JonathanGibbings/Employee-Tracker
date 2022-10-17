const db = require("../db/connection");

class queries {
  constructor(params = "") {
    this.params = params;
  }
  view = async () => {
    return await db.query("SELECT 
  }
}

const viewEmployees = async () => {
  const [employeeData] = await db.query(`SELECT * FROM employees`);
  console.table(employeeData);
  mainMenu();
};

module.exports = queries;
