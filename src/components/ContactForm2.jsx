
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import color from '../color';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactForm2() {

    const { t } = useLanguage();

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        //emailjs.sendForm('service_efyydcu', 'template_964rrxd', form.current, 'AzggVpZhykvOB3v_z')
        //emailjs.sendForm('service_aznjq9k', 'template_k8ifo1h', form.current, 'uCLd36X7LmCXPA65d')
        emailjs.sendForm('service_wuss6dp', 'template_k8ifo1h', form.current, 'uCLd36X7LmCXPA65d')
            .then((result) => {
                console.log(result.text);
                alert('Hemos enviado un correo, en breve le estaremos respondiendo en el correo que nos adjunto')
            }, (error) => {
                console.log(error.text);
                console.log(error);
                alert('No hemos podido enviar, favor de intenarlo más tarde')
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form">
                <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                    {t.contact.messageTitle}
                </p>
                <label>{t.contact.name}</label>
                <input type="text" name="name" placeholder={t.contact.namePlaceholder} required />
                <label>{t.contact.companyName}</label>
                <input type="text" name="empresa" placeholder={t.contact.companyPlaceholder} />
                <label>{t.contact.officePhone}</label>
                <input type="number" name="office" placeholder={t.contact.officePhonePlaceholder} />
                <label>{t.contact.personalPhone}</label>
                <input type="number" name="phone" placeholder={t.contact.personalPhonePlaceholder} />
                <label>{t.contact.email}</label>
                <input type="email" name="email" placeholder={t.contact.emailPlaceholder} required />
                <label>{t.contact.message}</label>
                <textarea name="message" placeholder={t.contact.messagePlaceholder} required />
                <input type="submit" value={t.contact.send} style={{ fontWeight: 'bold' }} />
                <section id="locations">
                    <p style={{ fontSize: 11, textAlign: 'justify' }}>
                        {t.contact.privacyText} <a href={'/privacity'} target="_blank" style={{ color: color.primary }}> {t.contact.privacy}</a>.
                    </p>
                </section>
            </div>
        </form>
    )
}