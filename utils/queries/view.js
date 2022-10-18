const db = require("../../db/connection");
require("console.table");

const departments = async () => {
  const [departments] = await db.query("SELECT * FROM departments");
  console.table("", departments);
};

const roles = async () => {
  const [roles] = await db.query(`SELECT roles.id, roles.title, roles.salary,
                                    departments.department_name AS department
                                    FROM roles
                                    LEFT JOIN departments
                                    ON roles.department_id = departments.id;`);
  console.table("", roles);
};

const employees = async () => {
  const [employeeData] =
    await db.query(`INSERT INTO departments (id, department_name)
    VALUES (id:int, 'department_name:varchar');SELECT employees.id, employees.first_name, employees.last_name,
                    roles.title AS title
                    departments.department_name AS department
                    FROM employees
                    LEFT JOIN roles
                    ON employees.role_id = role.id;`);
  console.table(employeeData);
};

const employeesByManager = async () => {};
const employeesByDepartment = async () => {};
const budgetByDepartment = async () => {};

module.exports = {
  departments,
  roles,
  employees,
  employeesByManager,
  employeesByDepartment,
  budgetByDepartment,
};
