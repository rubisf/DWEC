// UT2 - Ejemplo 4: Arrow Functions y Contexto this
const usuario = {
    nombre: "Rubén",
    lenguajes: ["JavaScript", "TypeScript"],
    mostrarLenguajes() {
        this.lenguajes.forEach(lang => console.log(`${this.nombre} programa en ${lang}`));
    }
};
usuario.mostrarLenguajes();
