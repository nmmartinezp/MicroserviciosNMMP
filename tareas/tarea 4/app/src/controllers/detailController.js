import service from "../services/detailService.js";

class Controller {
  getAllItems = async (req, res, next) => {
    try {
      const details = await service.getAllItems();
      res.sendData(details, "Detalles obtenidos exitosamente");
    } catch (error) {
      next(error);
    }
  };

  getItemById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const detail = await service.getItemById(id);
      res.sendData(detail, "Detalle obtenido exitosamente");
    } catch (error) {
      next(error);
    }
  };

  createItem = async (req, res, next) => {
    try {
      const newDetail = await service.createItem(req.body);
      res.sendData(newDetail, "Detalle creado exitosamente");
    } catch (error) {
      next(error);
    }
  };

  updateItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedDetail = await service.updateItem(id, req.body);
      res.sendData(updatedDetail, "Detalle actualizado exitosamente");
    } catch (error) {
      next(error);
    }
  };

  deleteItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedDetail = await service.deleteItem(id);
      res.sendData(deletedDetail, "Detalle eliminado exitosamente");
    } catch (error) {
      next(error);
    }
  };
}

export default new Controller();
