
import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';


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
      <div class="form">
        <label>Nombre</label>
        <input type="text" name="name" placeholder='Escriba su nombre completo' required />
        <label>Nombre de tu empresa</label>
        <input type="text" name="empresa" placeholder='Escriba el nombre de empresa' required />
        <label>Teléfono de oficina</label>
        <input type="number" name="office" placeholder='Escriba el no. teléfono de oficina'/>
        <label>Teléfono personal</label>
        <input type="number" name="phone" placeholder='Escriba su no. de teléfono personal'/>
        <label>correo electrónico</label>
        <input type="email" name="email" placeholder='Escriba su correo electrónico' required />
        <label>mensaje</label>
        <textarea name="message" placeholder='Escribe un mensaje' required />
        {/*<input type="submit" value="Enviar formulario" />*/}
        <input type="submit" value="Enviar" />
      </div>
    </form>
  )
}