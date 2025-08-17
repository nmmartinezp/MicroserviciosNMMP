import mongoose from "mongoose";

const AgendaSchema = new mongoose.Schema(
  {
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    fecha_nacimiento: { type: Date, required: true },
    direccion: { type: String },
    celular: { type: Number },
    correo: { type: String },
  },
  {
    collection: "agenda",
    versionKey: false,
  }
);

const Agenda = mongoose.model("Agenda", AgendaSchema);

export default Agenda;
