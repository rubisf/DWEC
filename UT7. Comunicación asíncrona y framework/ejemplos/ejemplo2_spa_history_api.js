// UT7 - Ejemplo 2: SPA History API
if (typeof window !== 'undefined') {
    console.log("Navegación SPA con History API (pushState)");
    window.history.pushState({ page: 2 }, "Página 2", "/pagina-2");
}
