import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha_creacion: { type: Date, default: Date.now, required: true },
    estado: {
      type: String,
      enum: ["pendiente", "en progreso", "completado"],
      required: true,
    },
  },
  {
    collection: "tareas",
    versionKey: false,
  }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
