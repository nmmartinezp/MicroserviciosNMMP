import Boom from "@hapi/boom";
import { Invoice, Detail, Product } from "../models/index.js";

class Service {
  getAllItems = async () => {
    const details = await Detail.findAll();

    if (!details || details.length === 0) {
      throw Boom.notFound("No se encontraron detalles de facturas");
    }

    return details;
  };

  getItemById = async (id) => {
    const detail = await Detail.findByPk(id, {
      include: [
        {
          model: Invoice,
          as: "factura",
        },
        {
          model: Product,
          as: "producto",
        },
      ],
    });

    if (!detail) {
      throw Boom.notFound("No se encontró el detalle");
    }

    return detail;
  };

  createItem = async (item) => {
    const newDetail = await Detail.create(item);
    return newDetail;
  };

  updateItem = async (id, item) => {
    const detail = await this.getItemById(id);
    await detail.update(item);
    return detail;
  };

  deleteItem = async (id) => {
    const detail = await this.getItemById(id);
    const copyDetail = { ...detail.dataValues };
    await detail.destroy();
    return copyDetail;
  };
}

export default new Service();
