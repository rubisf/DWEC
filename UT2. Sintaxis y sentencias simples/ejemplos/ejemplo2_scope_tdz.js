// UT2 - Ejemplo 2: Scope y TDZ
function probarScope() {
    if (true) {
        let variableLet = "Aislada en el bloque (let)";
        console.log("Dentro del bloque:", variableLet);
    }
}
probarScope();
