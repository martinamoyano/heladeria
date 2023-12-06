import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const connection = mysql.createPool(dbConfig);