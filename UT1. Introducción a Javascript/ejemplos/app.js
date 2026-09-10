// ==========================================
// UT1 - app.js (Módulo Principal Consumidor)
// ==========================================

import { formatearMoneda, calcularIVA, formatearFecha } from './utils.js';

console.log("🚀 Módulo Principal ES6 inicializado.");

export function ejecutarCalculoTienda() {
  const precioBase = 150;
  const precioConIVA = calcularIVA(precioBase, 21);

  console.log(`Fecha de cálculo: ${formatearFecha()}`);
  console.log(`Base Imponible: ${formatearMoneda(precioBase)}`);
  console.log(`Total con 21% IVA: ${formatearMoneda(precioConIVA)}`);

  return {
    base: formatearMoneda(precioBase),
    total: formatearMoneda(precioConIVA),
    fecha: formatearFecha()
  };
}

// Ejecución inicial
ejecutarCalculoTienda();
