import express from "express";
import userController from "./controller.js";

const routes = express.Router();

routes.get("/", userController.getUsers);
routes.delete("/delete/:id", userController.delete);
routes.post("/add", userController.create);

routes.get("/crear", (req, res) => {
  res.render("add");
});

export default routes;
