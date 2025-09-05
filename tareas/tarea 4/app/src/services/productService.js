import Boom from "@hapi/boom";
import { Product } from "../models/index.js";

class Service {
  getAllItems = async () => {
    const products = await Product.findAll();

    if (!products || products.length === 0) {
      throw Boom.notFound("No se encontraron productos");
    }

    return products;
  };

  getItemById = async (id) => {
    const product = await Product.findByPk(id);

    if (!product) {
      throw Boom.notFound("No se encontró el producto");
    }

    return product;
  };

  createItem = async (item) => {
    const newProduct = await Product.create(item);
    return newProduct;
  };

  updateItem = async (id, item) => {
    const product = await this.getItemById(id);
    await product.update(item);
    return product;
  };

  deleteItem = async (id) => {
    const product = await this.getItemById(id);
    const copyProduct = { ...product.dataValues };
    await product.destroy();
    return copyProduct;
  };
}

export default new Service();
