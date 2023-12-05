import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
     const [nombre, setNombre] = useState("");
     const [email, setEmail] = useState("");
     const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(email);
        console.log(mensaje);
    }

    return (
        <div className="container">
            <h1>¡Contáctanos!</h1>
            <form onSubmit={handleSubmit} action="martina.moyano2003@gmail.com" method="post">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required value=
                    {nombre} onChange = {(e) => setNombre(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo Electrónico:</label>
                    <input type="email" id="correo" name="correo" required value=
                    {email} onChange = {(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required value=
                    {mensaje} onChange = {(e) => setMensaje(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    );
}

export default ContactForm;