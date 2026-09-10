// UT3 - Ejemplo 4: Storage vs IndexedDB
if (typeof localStorage !== 'undefined') {
    localStorage.setItem("tema_preferido", "dark");
    console.log("Tema en localStorage:", localStorage.getItem("tema_preferido"));
}
