import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb://${config.database.host}:${config.database.port}/${config.database.dbname}`
    );
    console.log("Conexión a MongoDB establecida");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
  }
}

export default connectDB;
