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
  return superheroe
    ? res.send(renderizarSuperheroe(superheroe))
    : res.status(404).send({ mensaje: "Superhéroe no encontrado" });
}

export async function obtenerTodosLosSuperheroesController(req, res) {
  const superheroes = await obtenerTodosLosSuperheroes();
  return res.send(renderizarListaSuperheroes(superheroes));
}

export async function buscarSuperheroePorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = await buscarSuperheroePorAtributo(atributo, valor);
  return superheroes.length > 0
    ? res.send(renderizarListaSuperheroes(superheroes))
    : res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = await obtenerSuperheroesMayoresDe30();
  console.log(superheroes);
  return superheroes.length > 0
    ? res.send(renderizarListaSuperheroes(superheroes))
    : res
        .status(404)
        .send({ mensaje: "No se encontraron superhéroes con edad mayor a 30" });
}
