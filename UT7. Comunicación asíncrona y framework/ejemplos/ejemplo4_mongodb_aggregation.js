// UT7 - Ejemplo 4: Pipeline de Agregación MongoDB
console.log("=== Pipeline MongoDB ===");
const pipeline = [
    { $match: { estado: "completado" } },
    { $group: { _id: "$categoria", total: { $sum: "$monto" } } }
];
console.log("Etapas de agregación configuradas:", pipeline.length);
