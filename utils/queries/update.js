const db = require("../../db/connection");
require("console.table");

const employeeRole = async (employee, newRole) => {
  const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
  const params = [newRole, employee];
  await db.query(sql, params, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const employeeManager = async (employee, newManager) => {
  const sql = `UPDATE employees SET manager_id = ? WHERE id = ?`;
  const params = [newManager, employee];
  await db.query(sql, params, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

module.exports = {
  employeeRole,
  employeeManager,
};
