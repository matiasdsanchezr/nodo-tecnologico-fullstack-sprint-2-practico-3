import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

/**
 * Obtener un superhéroes mediante su id en la base de datos
 * @param {*} id - El id del superhéroe a buscar
 * @returns {Promise<Object>}
 */
export async function obtenerSuperheroePorId(id) {
  return await SuperHeroRepository.obtenerPorId(id);
}

/**
 * Obtener una lista con todos los superhéroes registrados en la base de datos
 * @returns {Promise<Array>}
 */
export async function obtenerTodosLosSuperheroes() {
  return await SuperHeroRepository.obtenerTodos();
}

/**
 * Obtener una lista de todos los superhéroes que posean un valor específico de atributo
 * @param {*} atributo - El atributo a evaluar
 * @param {*} valor - El valor que debe tener el atributo
 * @returns {Promise<Array>}
 */
export async function buscarSuperheroePorAtributo(atributo, valor) {
  return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

/**
 * Obtener una lista de superhéroes cuya edad sea mayor a 30, pertenezcan a la tierra
 * y posea mas de dos poderes
 * @param {*} id - El id del superheroe en la base de datos
 * @returns {Promise<Array>}
 */
export async function obtenerSuperheroesMayoresDe30() {
  return await SuperHeroRepository.obtenerMayoresDe30();
}
