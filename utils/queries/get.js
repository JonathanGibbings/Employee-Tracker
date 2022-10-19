const db = require("../../db/connection");
require("console.table");

const departments = async () => {
    sql = `SELECT department_name AS name, id AS value FROM departments;`;
    const [list] = await db.query(sql);
    return list;
};

const roles = async () => {
    sql = `SELECT title AS name, id AS value FROM roles;`;
    const [list] = await db.query(sql);
    return list;
};

const employees = async () => {
    sql = `SELECT concat(first_name, ' ', last_name) AS name, id AS value FROM employees;`;
    const [list] = await db.query(sql);
    return list;
};

module.exports = {
    departments,
    roles,
    employees
};
