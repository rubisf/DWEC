// Módulo ES6 Exportador (utils.js) para UT1 Reto 2

export const formatearMoneda = (val) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(val);

export const calcularIVA = (precio) => precio * 1.21;
