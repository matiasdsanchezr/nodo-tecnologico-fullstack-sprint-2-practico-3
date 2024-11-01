import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema(
  {
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: String,
    poderes: { type: [String] },
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: { type: String, required: true },
  },
  { collection: "Grupo-10" }
);

export default mongoose.model("SuperHero", superheroSchema);
