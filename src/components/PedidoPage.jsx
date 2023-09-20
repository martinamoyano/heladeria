import React, { useState } from 'react';

function PedidoPage() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [sabor, setSabor] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //Podes mostrar un mensaje de confirmación al usuario
    };

    return (
        <div className="pedido-container">
            <h1>Realiza tu Pedido</h1>
            <p>Por favor, completa el siguiente formulario para hacer tu pedido de helados en Heladería Vintage.</p>

            <div className="formulario-pedido">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label htmlFor="correo">Correo Electrónico:</label>
                    <input type="email" id="correo" required value={correo} onChange={(e) => setCorreo(e.target.value)} />

                    <label htmlFor="sabor">Sabor del Helado:</label>
                    <input type="text" id="sabor" required value={sabor} onChange={(e) => setSabor(e.target.value)} />

                    <label htmlFor="cantidad">Cantidad:</label>
                    <input type="number" id="cantidad" required value={cantidad} onChange={(e) => setCantidad(e.target.value)} />

                    <label htmlFor="mensaje">Mensaje Adicional:</label>
                    <textarea id="mensaje" rows="4" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>

                    <button type="submit">Enviar Pedido</button>
                </form>
            </div>
        </div>
    );
}

export default PedidoPage;