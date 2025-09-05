import service from "../services/clientService.js";

class Controller {
  getAllItems = async (req, res, next) => {
    try {
      const clients = await service.getAllItems();
      res.sendData(clients, "Clientes obtenidos exitosamente");
    } catch (error) {
      next(error);
    }
  };

  getItemById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const client = await service.getItemById(id);
      res.sendData(client, "Cliente obtenido exitosamente");
    } catch (error) {
      next(error);
    }
  };

  createItem = async (req, res, next) => {
    try {
      const newClient = await service.createItem(req.body);
      res.sendData(newClient, "Cliente creado exitosamente");
    } catch (error) {
      next(error);
    }
  };

  updateItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedClient = await service.updateItem(id, req.body);
      res.sendData(updatedClient, "Cliente actualizado exitosamente");
    } catch (error) {
      next(error);
    }
  };

  deleteItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedClient = await service.deleteItem(id);
      res.sendData(deletedClient, "Cliente eliminado exitosamente");
    } catch (error) {
      next(error);
    }
  };
}

export default new Controller();
