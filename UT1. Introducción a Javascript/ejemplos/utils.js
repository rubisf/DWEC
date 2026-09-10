// ==========================================
// UT1 - utils.js (Módulo de Utilidades Exportadas)
// ==========================================

export const formatearMoneda = (val, divisa = 'EUR') => {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: divisa }).format(val);
};

export const calcularIVA = (precio, porcentaje = 21) => {
  return precio * (1 + porcentaje / 100);
};

export const formatearFecha = (fecha = new Date()) => {
  return new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'medium' }).format(fecha);
};
