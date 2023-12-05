import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  port: 3306,
  database: "heladeria",
};

export const connection = mysql.createPool(dbConfig);