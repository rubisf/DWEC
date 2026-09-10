// UT5 - Ejemplo 3: Keydown Events
if (typeof document !== 'undefined') {
    document.addEventListener("keydown", (e) => {
        console.log(`Tecla: ${e.key} | Código: ${e.code}`);
    });
}
