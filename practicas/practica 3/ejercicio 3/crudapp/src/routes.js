import express from "express";
import taskController from "./controller.js";

const routes = express.Router();

routes.get("/", taskController.getAll);
routes.get("/actualizar/:id", taskController.getById);
routes.put("/update/:id", taskController.update);
routes.post("/add", taskController.create);
routes.delete("/delete/:id", taskController.delete);

//solo vista
routes.get("/crear", async (req, res) => {
  res.render("add");
});

export default routes;
