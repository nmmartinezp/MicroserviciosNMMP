import service from "../services/productService.js";

class Controller {
  getAllItems = async (req, res, next) => {
    try {
      const products = await service.getAllItems();
      res.sendData(products, "Productos obtenidos exitosamente");
    } catch (error) {
      next(error);
    }
  };

  getItemById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.getItemById(id);
      res.sendData(product, "Producto obtenido exitosamente");
    } catch (error) {
      next(error);
    }
  };

  createItem = async (req, res, next) => {
    try {
      const newProduct = await service.createItem(req.body);
      res.sendData(newProduct, "Producto creado exitosamente");
    } catch (error) {
      next(error);
    }
  };

  updateItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedProduct = await service.updateItem(id, req.body);
      res.sendData(updatedProduct, "Producto actualizado exitosamente");
    } catch (error) {
      next(error);
    }
  };

  deleteItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProduct = await service.deleteItem(id);
      res.sendData(deletedProduct, "Producto eliminado exitosamente");
    } catch (error) {
      next(error);
    }
  };
}

export default new Controller();
