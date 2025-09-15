import React from "react";
import "../styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>
      <p>Aquí pronto se mostrarán los productos disponibles.</p>
    </section>
  );
};

export default ItemListContainer;