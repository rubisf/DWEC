// UT2 - Ejemplo 1: Scrum y SOLID
class GeneradorInforme {
    crearReporteSprint(sprintNumero, historias) {
        return { sprint: `Sprint #${sprintNumero}`, totalHistorias: historias.length, fecha: new Date().toISOString() };
    }
}
class FormateadorJSON {
    exportar(datos) { return JSON.stringify(datos, null, 2); }
}
const generador = new GeneradorInforme();
const formateador = new FormateadorJSON();
console.log(formateador.exportar(generador.crearReporteSprint(4, ["US1: Login JWT", "US2: Dashboard UI"])));
