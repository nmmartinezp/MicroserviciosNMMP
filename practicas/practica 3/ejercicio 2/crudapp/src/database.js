import mysql from "mysql2/promise";
import config from "./config.js";

const connection = await mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  port: config.database.port,
  database: config.database.dbname,
});

export default connection;
