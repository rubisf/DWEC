// UT1 - Ejemplo 3: Flujo de Trabajo con Git
console.log("=== Trazabilidad del Grafo DAG en Git ===");
const commits = [
    { hash: "a1b2c3d", msg: "feat: inicializar estructura de proyecto", autor: "Docente DAW" },
    { hash: "e5f6g7h", msg: "feat(auth): implementar módulo de inicio de sesión", autor: "Dev Team" }
];
commits.forEach((c, idx) => console.log(`[Commit #${idx + 1}] SHA: ${c.hash} | ${c.msg}`));
