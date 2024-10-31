import {
  obtenerSuperheroePorId,
  obtenerTodosLosSuperheroes,
  buscarSuperheroePorAtributo,
  obtenerSuperheroesMayoresDe30,
} from "../services/superheroesService.mjs";
import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responsiveView.mjs";

export async function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = await obtenerSuperheroePorId(id);
  if (superheroe) {
    return res.send(renderizarSuperheroe(superheroe));
  } else {
    return res.status(404).send({ mensaje: "Superhéroe no encontrado" });
  }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
  const superheroes = await obtenerTodosLosSuperheroes();
  return res.send(renderizarListaSuperheroes(superheroes));
}

export async function buscarSuperheroePorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = await buscarSuperheroePorAtributo(atributo, valor);

  if (superheroes.length > 0) {
    return res.send(renderizarListaSuperheroes(superheroes));
  } else {
    return res
      .status(404)
      .send({ mensaje: "No se encontraron superhéroes con ese atributo" });
  }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = await obtenerSuperheroesMayoresDe30();
  return res.send(renderizarListaSuperheroes(superheroes));
}
