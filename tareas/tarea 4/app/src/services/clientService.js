import Boom from "@hapi/boom";
import { Client } from "../models/index.js";

class Service {
  getAllItems = async () => {
    const clients = await Client.findAll();

    if (!clients || clients.length === 0) {
      throw Boom.notFound("No se encontraron clientes");
    }

    return clients;
  };

  getItemById = async (id) => {
    const client = await Client.findByPk(id);

    if (!client) {
      throw Boom.notFound("No se encontró el cliente");
    }

    return client;
  };

  createItem = async (item) => {
    const exists = await Client.findOne({ where: { ci: item.ci } });
    if (exists) {
      throw Boom.conflict("Ya existe un cliente con la misma cédula");
    }
    const newClient = await Client.create(item);
    return newClient;
  };

  updateItem = async (id, item) => {
    const client = await this.getItemById(id);
    await client.update(item);
    return client;
  };

  deleteItem = async (id) => {
    const client = await this.getItemById(id);
    const copyClient = { ...client.dataValues };
    await client.destroy();
    return copyClient;
  };
}

export default new Service();
