
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import color from '../color';

export default function ContactForm2() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_efyydcu', 'template_964rrxd', form.current, 'AzggVpZhykvOB3v_z')
            .then((result) => {
                console.log(result.text);
                alert('Hemos enviado un correo, en breve le estaremos respondiendo en el correo que nos adjunto')
            }, (error) => {
                console.log(error.text);
                alert('No hemos podido enviar, favor de intenarlo más tarde')
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form">
                <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                    Si necesitas mejorar cualquier aspecto de un nuevo proyecto, escríbenos. 
                    Aclaramos tus dudas y te asesoramos sobre las ayudas a las que puedas tener.
                </p>
                <label>Nombre</label>
                <input type="text" name="name" placeholder='Escriba su nombre completo' required />
                <label>Nombre de tu empresa</label>
                <input type="text" name="empresa" placeholder='Escriba el nombre de empresa' />
                <label>Teléfono de oficina</label>
                <input type="number" name="office" placeholder='Escriba el no. teléfono de oficina' />
                <label>Teléfono personal</label>
                <input type="number" name="phone" placeholder='Escriba su no. de teléfono personal' />
                <label>correo electrónico</label>
                <input type="email" name="email" placeholder='Escriba su correo electrónico' required />
                <label>mensaje</label>
                <textarea name="message" placeholder='Escribe un mensaje' required />
                <input type="submit" value="Enviar" style={{ fontWeight: 'bold' }} />
                <p style={{ fontSize: 11, textAlign: 'justify' }}>
                    Grupo Ticonsa®️ te informa que los datos de carácter personal que proporciones rellenando este formulario serán tratados por si mismos como responsable de esta web.
                    La finalidad de pedir y tratar los datos personales que te solicitamos serán utilizados para contactar contigo para atender tu mensaje.
                    El hecho de que no introduzcas los datos de carácter personal que te solicitamos como obligatorios en este formulario, puede implicar que no podamos atender tu petición.
                    Puedes consultar información adicional en nuestro <a href={'/privacity'} target="_blank" style={{ color: color.primary }}> Aviso de Privacidad</a>.
                </p>
            </div>
        </form>
    )
}