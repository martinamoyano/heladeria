import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

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
          <a href="#tiendas">Tiendas</a>
        </li>
        <li className="navbar-item">
          <a href="#contacto">Contacto</a>
        </li>
        <div className='pedido-button-container'>
        <li>
          <Link to="/hace-tu-pedido" className="pedido-button">
            Hace tu Pedido
          </Link>
        </li>
        </div>
      </ul>
    </nav>
  );
}


export default NavBar;