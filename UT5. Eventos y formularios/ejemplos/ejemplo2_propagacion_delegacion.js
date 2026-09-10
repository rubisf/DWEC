// UT5 - Ejemplo 2: Delegación de Eventos
if (typeof document !== 'undefined') {
    document.addEventListener("click", (e) => {
        const item = e.target.closest(".item-lista");
        if (item) console.log("Elemento seleccionado por delegación:", item.dataset.id);
    });
}
