// index.js o index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import Routes from './components/Routes'; // Importa el componente Routes
import './index.css'; // Importa tus estilos si los tienes

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes /> {/* Renderiza el componente Routes */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// Resto del código...

