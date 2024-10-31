import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Conexion exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
    process.exit(1);
  }
}
