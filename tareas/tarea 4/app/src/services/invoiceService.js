import Boom from "@hapi/boom";
import { Invoice, Detail } from "../models/index.js";

class Service {
  getAllItems = async () => {
    const invoices = await Invoice.findAll();

    if (!invoices || invoices.length === 0) {
      throw Boom.notFound("No se encontraron facturas");
    }

    return invoices;
  };

  getItemById = async (id) => {
    const invoice = await Invoice.findByPk(id, {
      include: [
        {
          model: Detail,
          as: "detalles",
        },
      ],
    });

    if (!invoice) {
      throw Boom.notFound("No se encontró la factura");
    }

    return invoice;
  };

  createItem = async (item) => {
    const newInvoice = await Invoice.create(item);
    return newInvoice;
  };

  updateItem = async (id, item) => {
    const invoice = await this.getItemById(id);
    await invoice.update(item);
    return invoice;
  };

  deleteItem = async (id) => {
    const invoice = await this.getItemById(id);
    const copyInvoice = { ...invoice.dataValues };
    await invoice.destroy();
    return copyInvoice;
  };
}

export default new Service();
