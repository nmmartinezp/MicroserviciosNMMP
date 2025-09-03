import userService from "./service.js";

class UserController {
  getUsers = async (req, res) => {
    try {
      const allUsers = await userService.getdataAllUsers();
      res.render("index", { data: allUsers });
    } catch (err) {
      res.render("error", { error: err });
    }
  };

  create = async (req, res) => {
    try {
      await userService.create(req.body);
      res.redirect("/");
    } catch (err) {
      res.render("error", { error: err });
    }
  };

  delete = async (req, res) => {
    try {
      await userService.delete(req.params.id);
      res.redirect("/");
    } catch (err) {
      res.render("error", { error: err });
    }
  };
}

export default new UserController();
