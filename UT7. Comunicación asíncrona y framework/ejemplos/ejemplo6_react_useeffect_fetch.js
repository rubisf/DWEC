// UT7 - Ejemplo 6: React 18 - Consumo de APIs con useEffect y AbortController
// Patrón profesional para comunicación asíncrona, gestión de estados y cleanup.

function ListaPostsAPI() {
    const [posts, setPosts] = React.useState([]);
    const [cargando, setCargando] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const controller = new AbortController();

        async function cargar() {
            try {
                setCargando(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3", {
                    signal: controller.signal
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setCargando(false);
            }
        }

        cargar();

        // Limpieza: Abortar petición si el componente se desmonta
        return () => controller.abort();
    }, []);

    if (cargando) return React.createElement("p", { style: { color: "#38bdf8" } }, "⏳ Cargando posts...");
    if (error) return React.createElement("p", { style: { color: "#ef4444" } }, `❌ Error: ${error}`);

    return React.createElement("div", { style: { padding: "12px", background: "#0f172a", borderRadius: "8px" } },
        React.createElement("h4", { style: { color: "#a855f7", margin: "0 0 8px 0" } }, "📄 Publicaciones (useEffect + Fetch)"),
        React.createElement("ul", { style: { paddingLeft: "16px", color: "#e2e8f0", fontSize: "0.85em" } },
            posts.map(p => React.createElement("li", { key: p.id, style: { marginBottom: "4px" } }, p.title))
        )
    );
}

if (typeof document !== 'undefined' && document.getElementById('app')) {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    root.render(React.createElement(ListaPostsAPI));
    console.log("Componente ListaPostsAPI montado con éxito.");
}
