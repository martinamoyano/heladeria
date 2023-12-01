import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import App from '../App';
import PedidoPage from './PedidoPage';

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />} />
      <Route path="/hace-tu-pedido" element={<PedidoPage />} />
    </ReactRoutes>
  );
}

export default Routes;