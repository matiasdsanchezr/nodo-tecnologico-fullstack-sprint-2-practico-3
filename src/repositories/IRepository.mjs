class IRepository {
  /**
   * Obtener un superhéroes mediante su id en la base de datos
   * @param {*} id - El id del superhéroe a buscar
   * @returns {Promise<Object>}
   */
  obtenerPorId(id) {
    throw new Error("Método 'obtenerPorId()' no implementado");
  }

  obtenerTodos() {
    throw new Error("Método 'obtenerTodos()' no implementado");
  }

  buscarPorAtributo(atributo, valor) {
    throw new Error("Método 'buscarPorAtributo()' no implementado");
  }

  obtenerMayoresDe30() {
    throw new Error("Método 'obtenerMayoresDe30()' no implementado");
  }
}

export default IRepository;
