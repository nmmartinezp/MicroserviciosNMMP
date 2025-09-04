const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Prestamo",
  tableName: "prestamos",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    usuario: {
      type: String,
    },
    fecha_prestamo: {
      type: Date,
    },
    fecha_devolucion: {
      type: Date,
      nullable: true, // opcional si aún no devolvió
    },
  },
  relations: {
    libro: {
      type: "many-to-one",
      target: "Libro",
      joinColumn: true,
    },
  },
});
