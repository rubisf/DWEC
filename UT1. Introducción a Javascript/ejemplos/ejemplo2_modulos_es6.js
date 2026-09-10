// UT1 - Ejemplo 2: Comparativa de Modos de Inclusión de JavaScript y Beneficios de type="module"

/*
  DIFERENCIA ENTRE MODOS DE INCLUSIÓN DE JAVASCRIPT:

  1. <script src="head.js"> en <head> (Síncrono Tradicional):
     - Bloquea el parseo del HTML (retrasa el FCP).
     - Acceso al DOM: FALLA (document.getElementById(...) retorna null).
     - Ámbito: Contamina el objeto global `window`. var usuario = "Ana" es sobreescribible.

  2. <script src="body.js"> al final de </body> (Tradicional al pie):
     - Acceso al DOM: FUNCIONA (el HTML ya se ha parseado).
     - Ámbito: Sigue en el ámbito global `window`. Si script1.js define `var usuario = "Ana"`
       y script2.js define `var usuario = "Pedro"`, script2 SOBREESCRIBE la variable de script1.

  3. <script src="defer.js" defer> en <head>:
     - Acceso al DOM: FUNCIONA (descarga en paralelo y ejecuta tras la carga del DOM).
     - Ámbito: Mantiene el ámbito global si no es un módulo.

  4. <script type="module" src="app.js"> (ES Modules - ESTÁNDAR RECOMENDADO 2026):
     - Acceso al DOM: FUNCIONA AUTOMÁTICAMENTE (comportamiento defer implícito).
     - Modo Estricto ('use strict'): Activado automáticamente por defecto.
     - ÁMBITO AISLADO (Module Scope): Las variables NO ensucian `window` (window.usuario === undefined).
       IMPOSIBLE sobreescribirlas o colisionar con otros archivos scripts.
     - Export / Import: Control de dependencias explícito y seguro.
*/

import { formatearMoneda, calcularIVA } from './utils.js';

console.log("=== COMPROBACIÓN DE ES MODULES (MODO 4) ===");
const precioBase = 150;
const precioFinal = calcularIVA(precioBase);

console.log(`Base: ${formatearMoneda(precioBase)} | Total IVA: ${formatearMoneda(precioFinal)}`);
console.log("¿Existe window.precioBase en el ámbito global?:", window.precioBase === undefined ? "NO (Ámbito Aislado ✅)" : "SÍ (Contaminado ❌)");

