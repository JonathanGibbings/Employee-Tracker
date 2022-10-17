const menu = require("./utils/menu");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "C3Rulean&",
    database: "employees",
  },
  console.log("Connected to employees database.")
);
