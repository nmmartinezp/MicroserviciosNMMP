db = db.getSiblingDB("DBPRACTICA3");

db.createCollection("tareas");

db.tareas.insertMany([
  {
    titulo: "Configurar entorno de desarrollo",
    descripcion:
      "Instalar dependencias y preparar el proyecto para iniciar el desarrollo.",
    estado: "pendiente",
  },
  {
    titulo: "Diseñar base de datos",
    descripcion:
      "Definir colecciones y relaciones necesarias para la aplicación.",
    estado: "en progreso",
  },
  {
    titulo: "Implementar autenticación",
    descripcion: "Agregar sistema de login y registro de usuarios con JWT.",
    estado: "pendiente",
  },
  {
    titulo: "Desplegar en producción",
    descripcion: "Configurar servidor y desplegar la aplicación en Docker.",
    estado: "completado",
  },
]);
