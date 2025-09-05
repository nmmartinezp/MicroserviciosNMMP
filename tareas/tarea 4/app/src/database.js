import { Sequelize } from "sequelize";
import config from "./config.js";

const dbConfig = config.db;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: "mysql",
    timezone: "-03:00",
  }
);

export default sequelize;
