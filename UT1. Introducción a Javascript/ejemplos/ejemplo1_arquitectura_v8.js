// UT1 - Ejemplo 1: Arquitectura V8 y Entorno
console.log("=== Inspección del Motor V8 y Entorno de Ejecución ===");
if (typeof window !== "undefined") {
    console.log("Navegador User Agent:", navigator.userAgent);
    console.log("Identidad globalThis === window:", window === globalThis);
    console.log("Precisión de tiempo JIT:", performance.now().toFixed(2), "ms");
} else {
    console.log("Entorno Node.js versión:", process.version);
    console.log("Identidad globalThis === global:", global === globalThis);
}
