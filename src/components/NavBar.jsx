
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <a href="#inicio">Inicio</a>
        </li>
        <li className="navbar-item">
          <a href="#sabores">Sabores</a>
        </li>
        <li className="navbar-item">
          <a href="#quienes-somos">Quienes Somos</a>
        </li>
      </ul>
      <div id="logo-container">
        <img src="src\assets\vintagelogo-transparent.png" alt="vintage logo" id="logo" />
      </div>
      <ul className="navbar">
        <li className="navbar-item">
          <a href="#contacto">Contacto</a>
        </li>
        <li className="navbar-item">
          <Link to="/hace-tu-pedido" className="pedido-button">
            Haz tu Pedido
          </Link>
        </li>
      </ul>
    </nav>
  );
}


export default NavBar;


