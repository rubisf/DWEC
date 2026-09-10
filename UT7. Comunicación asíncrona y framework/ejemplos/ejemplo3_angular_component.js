// UT7 - Ejemplo 3: Componente Angular Standalone
console.log("=== Componente Reactivo Angular Signals ===");
class AngularSignal {
    constructor(val) { this.val = val; }
    get() { return this.val; }
    set(n) { this.val = n; console.log(`Signal actualizada a: ${this.val}`); }
}
const contadorSignal = new AngularSignal(0);
contadorSignal.set(10);
