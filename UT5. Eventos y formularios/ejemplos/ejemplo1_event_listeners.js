// UT5 - Ejemplo 1: Event Listeners
if (typeof document !== 'undefined') {
    const btn = document.createElement("button");
    btn.addEventListener("click", (e) => console.log("Clic registrado en:", e.target), { once: true });
}
