const mysql = require("mysql2");

const db = mysql
  .createConnection(
    {
      host: "localhost",
      user: "root",
      password: "C3Rulean&",
      database: "employee_tracker",
    },
    console.log("Connected to employees database.")
  )
  .promise();

module.exports = db;
