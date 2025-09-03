import taskService from "./service.js";

class TaskController {
  async getAll(req, res) {
    try {
      const allTasks = await taskService.getAll();
      res.render("index", { data: allTasks });
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async getById(req, res) {
    try {
      const taskItem = await taskService.getById(req.params.id);
      res.render("update", { data: taskItem });
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async update(req, res) {
    try {
      await taskService.update(req.params.id, req.body);
      res.redirect("/");
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async create(req, res) {
    try {
      await taskService.create(req.body);
      res.redirect("/");
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async delete(req, res) {
    try {
      await taskService.delete(req.params.id);
      res.redirect("/");
    } catch (err) {
      res.render("error", { error: err });
    }
  }
}

export default new TaskController();
