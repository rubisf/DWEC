// UT7 - Ejemplo 1: Async / Await y Fetch API
async function obtenerDatos(url) {
    try {
        console.log(`Petición asíncrona enviada a: ${url}`);
        return { ok: true, status: 200, data: [{ id: 1, usuario: "Rubén" }] };
    } catch (err) {
        console.error("Error en la solicitud:", err.message);
    }
}
obtenerDatos("https://api.ejemplo.com/v1/usuarios").then(res => console.log("Respuesta recibida:", res));
