import Client from "./client.js";
import Invoice from "./invoice.js";
import Product from "./product.js";
import Detail from "./detail.js";

Client.hasMany(Invoice, {
  foreignKey: "cliente_id",
  as: "facturas",
});

Invoice.belongsTo(Client, {
  foreignKey: "cliente_id",
  as: "cliente",
});

Invoice.hasMany(Detail, {
  foreignKey: "factura_id",
  as: "detalles",
});

Detail.belongsTo(Invoice, {
  foreignKey: "factura_id",
  as: "factura",
});

Product.hasMany(Detail, {
  foreignKey: "producto_id",
  as: "detalles",
});

Detail.belongsTo(Product, {
  foreignKey: "producto_id",
  as: "producto",
});

export { Client, Invoice, Product, Detail };
