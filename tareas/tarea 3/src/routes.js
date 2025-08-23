import express from "express";
import agendaController from "./controller.js";

const routes = express.Router();

routes.get("/", agendaController.getAll);
routes.get("/actualizar/:id", agendaController.getById);
routes.put("/update/:id", agendaController.update);
routes.post("/add", agendaController.create);
routes.delete("/delete/:id", agendaController.delete);

//solo vista
routes.get("/crear", async (req, res) => {
  res.render("add");
});

export default routes;
