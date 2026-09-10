// UT4 - Ejemplo 3: POO y Clases
class Persona {
    #id;
    constructor(id, nombre) { this.#id = id; this.nombre = nombre; }
    getId() { return this.#id; }
}
const p = new Persona(101, "Carlos");
console.log(`Persona: ${p.nombre} (ID: ${p.getId()})`);
