import express from "express";
import { connectDb } from "./config/dbConfig.mjs";
import superHeroRoutes from "./routes/superHeroRoutes.mjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware para parsear JSON
app.use(express.json());

connectDb();

app.use("/api", superHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Inciar el servidor
app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto", PORT);
});
