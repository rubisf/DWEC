// UT6 - Ejemplo 2: QuerySelector
if (typeof document !== 'undefined') {
    const el = document.querySelector(".tarjeta");
    console.log("Elemento encontrado:", el ? el.tagName : "No presente");
}
