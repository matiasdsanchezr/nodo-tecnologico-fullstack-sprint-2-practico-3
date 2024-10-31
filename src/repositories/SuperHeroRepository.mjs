import mongoose from "mongoose";
import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroeRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    let query = {};

    const type = SuperHero.schema.path(atributo);
    if (type instanceof mongoose.Schema.Types.Number) {
      query = { [atributo]: valor };
    } else {
      query = { [atributo]: { $regex: new RegExp(valor, "i") } };
    }

    return await SuperHero.find(query);
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({
      edad: { $gt: 30 },
      planetaOrigen: "Tierra",
      poderes: { $size: { $gte: 2 } },
    });
  }
}

export default new SuperHeroeRepository();
