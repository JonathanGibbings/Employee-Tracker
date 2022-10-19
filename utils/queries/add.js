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

const role = async (newRole, salary, departmentId) => {
    const sql = `INSERT INTO roles (title, salary, department_id)
                VALUES (?, ?, ?)`;
    const params = [newRole, salary, departmentId];
    await db.query(sql, params, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};

const employee = async (firstName, lastName, roleId, managerId) => {
    const sql = `INSERT INTO employees
                (first_name, last_name, role_id, manager_id)
                VALUES (?,?,?,?)`;
    const params = [firstName, lastName, roleId, managerId];
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
