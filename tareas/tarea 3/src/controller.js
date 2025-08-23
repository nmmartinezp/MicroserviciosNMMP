import agendaService from "./service.js";

class AgendaController {
  async getAll(req, res) {
    try {
      const allAgenda = await agendaService.getAll();
      res.render("index", { data: allAgenda });
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async getById(req, res) {
    try {
      const agendaItem = await agendaService.getById(req.params.id);
      res.render("update", { data: agendaItem });
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async update(req, res) {
    try {
      await agendaService.update(req.params.id, req.body);
      res.redirect("/");
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async create(req, res) {
    try {
      await agendaService.create(req.body);
      res.redirect("/");
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async delete(req, res) {
    try {
      await agendaService.delete(req.params.id);
      res.redirect("/");
    } catch (err) {
      res.render("error", { error: err });
    }
  }
}

export default new AgendaController();
