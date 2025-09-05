import service from "../services/invoiceService.js";

class Controller {
  getAllItems = async (req, res, next) => {
    try {
      const invoices = await service.getAllItems();
      res.sendData(invoices, "Facturas obtenidas exitosamente");
    } catch (error) {
      next(error);
    }
  };

  getItemById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const invoice = await service.getItemById(id);
      res.sendData(invoice, "Factura obtenida exitosamente");
    } catch (error) {
      next(error);
    }
  };

  createItem = async (req, res, next) => {
    try {
      const newInvoice = await service.createItem(req.body);
      res.sendData(newInvoice, "Factura creada exitosamente");
    } catch (error) {
      next(error);
    }
  };

  updateItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedInvoice = await service.updateItem(id, req.body);
      res.sendData(updatedInvoice, "Factura actualizada exitosamente");
    } catch (error) {
      next(error);
    }
  };

  deleteItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedInvoice = await service.deleteItem(id);
      res.sendData(deletedInvoice, "Factura eliminada exitosamente");
    } catch (error) {
      next(error);
    }
  };
}

export default new Controller();
