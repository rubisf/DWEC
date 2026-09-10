// UT3 - Ejemplo 2: RegExp
const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log("¿Email válido?:", patronEmail.test("alumno@estudiante.daw.es"));
