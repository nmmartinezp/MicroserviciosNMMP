import express from "express";
import calculatorController from "./controller.js";

const routes = express.Router();

routes.post("/add", calculatorController.add);
routes.post("/substract", calculatorController.substract);
routes.post("/multiply", calculatorController.multiply);
routes.post("/split", calculatorController.split);

//solo vista
routes.get("/", async (req, res) => {
  res.render("index");
});

export default routes;
