// UT1 - Ejemplo 4: Inserción Segura en el DOM
console.log("=== Métodos de Inserción DOM Segura ===");
const nuevoElemento = document.createElement("div");
nuevoElemento.className = "tarjeta-info";
nuevoElemento.textContent = "Contenido seguro generado con textContent (Anti-XSS)";
console.log("Elemento creado exitosamente en memoria:", nuevoElemento.nodeName);
