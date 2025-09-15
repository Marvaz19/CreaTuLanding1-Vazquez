import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a MiTienda Online!" />
    </div>
  );
}

export default App;
