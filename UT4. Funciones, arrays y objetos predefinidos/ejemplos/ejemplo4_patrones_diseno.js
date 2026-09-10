// UT4 - Ejemplo 4: Patrón Singleton
class SingletonBD {
    static #instancia;
    constructor() {
        if (SingletonBD.#instancia) return SingletonBD.#instancia;
        SingletonBD.#instancia = this;
    }
}
const bd1 = new SingletonBD();
const bd2 = new SingletonBD();
console.log("¿Misma instancia Singleton?:", bd1 === bd2);
