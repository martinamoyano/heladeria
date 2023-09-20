import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <div className="container">
            <h1>¡Contáctanos!</h1>
            <form action="#" method="post">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo Electrónico:</label>
                    <input type="email" id="correo" name="correo" required />
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
