const db = require("../../db/connection");
require("console.table");

const department = async (newDepartment) => {
    const sql = `INSERT INTO departments (department_name) VALUES (?)`;
    const params = [newDepartment];
    await db.query(sql, params, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};
const role = async () => { };
const employee = async () => { };

module.exports = {
    department,
    role,
    employee,
};
