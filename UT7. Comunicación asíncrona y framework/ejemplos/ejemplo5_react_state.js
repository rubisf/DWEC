// UT7 - Ejemplo 5: React 18 - Componentes Funcionales, Virtual DOM y Estado con useState
// Este ejemplo ilustra la reactividad declarativa y la inmutabilidad en React 18.

function ContadorReactivo() {
    const [contador, setContador] = React.useState(0);
    const [historial, setHistorial] = React.useState([]);

    const incrementar = () => {
        setContador(prev => {
            const nuevo = prev + 1;
            setHistorial(h => [...h, `Incremento a ${nuevo} (${new Date().toLocaleTimeString()})`]);
            return nuevo;
        });
    };

    const resetear = () => {
        setContador(0);
        setHistorial([]);
    };

    return React.createElement("div", { style: { padding: "16px", background: "#0f172a", color: "#fff", borderRadius: "10px" } },
        React.createElement("h3", { style: { color: "#38bdf8", margin: "0 0 8px 0" } }, "⚛️ Contador Reactivo (useState)"),
        React.createElement("p", { style: { fontSize: "1.3em", margin: "4px 0" } }, `Valor: ${contador}`),
        React.createElement("div", { style: { display: "flex", gap: "8px", margin: "10px 0" } },
            React.createElement("button", { onClick: incrementar, style: { background: "#6366f1", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" } }, "+1"),
            React.createElement("button", { onClick: resetear, style: { background: "#475569", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" } }, "Reset")
        ),
        React.createElement("ul", { style: { fontSize: "0.8em", color: "#94a3b8", paddingLeft: "16px" } },
            historial.slice(-3).map((h, i) => React.createElement("li", { key: i }, h))
        )
    );
}

// Montaje si existe el contenedor DOM
if (typeof document !== 'undefined' && document.getElementById('app')) {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    root.render(React.createElement(ContadorReactivo));
    console.log("Componente ContadorReactivo montado en el DOM con React 18.");
}
