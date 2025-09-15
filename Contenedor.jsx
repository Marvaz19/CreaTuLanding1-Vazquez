import React from "react";
import "../styles.css";

const Contenedor = ({ mensaje }) => {
  return (
    <main className="contenedor">
      <h1>{mensaje}</h1>
      <p>Aquí se mostrará el catálogo de productos próximamente.</p>
    </main>
  );
};

export default Contenedor;
