const db = require("../../db/connection");
require("console.table");

const department = async (department) => {
  const sql = `DELETE FROM departments WHERE id = ?`;
  const params = [department];
  await db.query(sql, params, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
const role = async (role) => {
  const sql = `DELETE FROM roles WHERE id = ?`;
  const params = [role];
  await db.query(sql, params, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
const employee = async (employee) => {
  const sql = `DELETE FROM employees WHERE id = ?`;
  const params = [employee];
  await db.query(sql, params, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

module.exports = {
  department,
  role,
  employee,
};
