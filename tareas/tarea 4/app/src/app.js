import express from "express";
import morgan from "morgan";
import setupSwagger from "./swagger.js";
import config from "./config.js";
import db from "./database.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import clientRoutes from "./routes/clientRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";
import detailRoutes from "./routes/detailRoutes.js";

const app = express();

db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((err) => {
    console.error("Error al conectarse a la base de datos: ", err);
  });

app.set("port", config.app.port);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API de ventas corriendo...");
});

app.use("/", clientRoutes);
app.use("/", productRoutes);
app.use("/", invoiceRoutes);
app.use("/", detailRoutes);

app.use(errorHandler);

setupSwagger(app);

export default app;
