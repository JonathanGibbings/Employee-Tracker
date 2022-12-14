const db = require("../../db/connection");
require("console.table");

const departments = async () => {
  const sql = `SELECT * FROM departments;`;
  const [departments] = await db.query(sql);
  console.table("", departments);
};

const roles = async () => {
  const sql = `SELECT roles.id, roles.title, roles.salary,
                departments.department_name AS department
                FROM roles
                LEFT JOIN departments
                ON roles.department_id = departments.id;`;
  const [roles] = await db.query(sql);
  console.table("", roles);
};

const employees = async () => {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name,
                roles.title AS title, departments.department_name AS department,
                roles.salary AS salary,
                concat(manager.first_name, ' ', manager.last_name) AS manager
              FROM employees manager, employees employee
              LEFT JOIN roles ON employee.role_id = roles.id
              LEFT JOIN departments ON roles.department_id = departments.id
              WHERE employee.manager_id = manager.id
              UNION
              SELECT employees.id, employees.first_name, employees.last_name,
                roles.title AS title, departments.department_name AS department,
                roles.salary AS salary, employees.manager_id AS manager
              FROM employees
              LEFT JOIN roles ON employees.role_id = roles.id
              LEFT JOIN departments ON roles.department_id = departments.id
              WHERE employees.manager_id IS NULL
              ORDER BY id;`;
  const [employees] = await db.query(sql);
  console.table(employees);
};

const employeesByManager = async () => {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name,
                roles.title AS title, departments.department_name AS department,
                roles.salary AS salary,
                concat(manager.first_name, ' ', manager.last_name) AS manager
              FROM employees manager, employees employee
              LEFT JOIN roles ON employee.role_id = roles.id
              LEFT JOIN departments ON roles.department_id = departments.id
              WHERE employee.manager_id = manager.id
              UNION
              SELECT employees.id, employees.first_name, employees.last_name,
                roles.title AS title, departments.department_name AS department,
                roles.salary AS salary, employees.manager_id AS manager
              FROM employees
              LEFT JOIN roles ON employees.role_id = roles.id
              LEFT JOIN departments ON roles.department_id = departments.id
              WHERE employees.manager_id IS NULL
              ORDER BY manager;`;
  const [employees] = await db.query(sql);
  console.table(employees);
};

const employeesByDepartment = async () => {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name,
                roles.title AS title, departments.department_name AS department,
                roles.salary AS salary,
                concat(manager.first_name, ' ', manager.last_name) AS manager
              FROM employees manager, employees employee
              LEFT JOIN roles ON employee.role_id = roles.id
              LEFT JOIN departments ON roles.department_id = departments.id
              WHERE employee.manager_id = manager.id
              UNION
              SELECT employees.id, employees.first_name, employees.last_name,
                roles.title AS title, departments.department_name AS department,
                roles.salary AS salary, employees.manager_id AS manager
              FROM employees
              LEFT JOIN roles ON employees.role_id = roles.id
              LEFT JOIN departments ON roles.department_id = departments.id
              WHERE employees.manager_id IS NULL
              ORDER BY department;`;
  const [employees] = await db.query(sql);
  console.table(employees);
};

const budgetByDepartment = async () => {
  const sql = `SELECT departments.id, departments.department_name,
              SUM(roles.salary) AS budget
              FROM employees
              LEFT JOIN roles ON employees.role_id = roles.id
              LEFT JOIN departments ON roles.department_id = departments.id
              GROUP BY departments.department_name;`;
  const [departments] = await db.query(sql);
  console.table(departments);
};

module.exports = {
  departments,
  roles,
  employees,
  employeesByManager,
  employeesByDepartment,
  budgetByDepartment,
};
