import React from "react";
import CartWidget from "./CartWidget";
import "../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Tienda Guitarras</div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
