// UT4 - Ejemplo 1: Closures y Currying
function crearContador() {
    let contador = 0;
    return () => ++contador;
}
const incrementar = crearContador();
console.log("Contador:", incrementar(), incrementar());
