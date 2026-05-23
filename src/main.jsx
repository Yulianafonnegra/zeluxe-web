import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

const App = () => {
  return (
    <div style={{fontFamily: "Arial", textAlign: "center"}}>
      <h1 style={{color: "#D4AF37"}}>ZELUXE</h1>
      <p>Compra productos de Estados Unidos sin complicaciones</p>

      <button style={{
        background: "#D4AF37",
        border: "none",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer"
      }}>
        Compra ahora
      </button>

 <section>
        <h2>Problema</h2>
        <p>
          Muchas personas no saben comprar en Estados Unidos o desconfían de internet.
        </p>
      </section>

      <section>
        <h2>Solución</h2>
        <p>
          Nosotros compramos por ti y garantizamos entrega segura.
        </p>

  </section>

      <section>
        <h2>Beneficios</h2>
        <p>✅ Compra fácil</p>
        <p>✅ Productos originales</p>
        <p>✅ Acompañamiento personalizado</p>
      </section>
      <footer style={{marginTop: "30px"}}>
        <p>ZELUXE © 2026</p>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
