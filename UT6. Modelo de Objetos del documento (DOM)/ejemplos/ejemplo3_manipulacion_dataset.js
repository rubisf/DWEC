// UT6 - Ejemplo 3: Dataset HTML5
if (typeof document !== 'undefined') {
    const div = document.createElement("div");
    div.dataset.usuarioId = "99";
    console.log("Dataset asignado:", div.dataset.usuarioId);
}
