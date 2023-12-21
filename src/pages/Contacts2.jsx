
import NavBar from "../components/NavBar"

import {
    useBreakpointValue,
    Stack,
} from '@chakra-ui/react';
import color from "../color";

import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { RiArrowDownSLine } from "react-icons/ri";
import ContactForm2 from "../components/ContactForm2";
import { FaDirections } from "react-icons/fa";
import { TbMapShare } from "react-icons/tb";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const ubications = [
    {
        id: 1,
        name: "Oficina Central, Grupo Ticonsa",
        direction: "Presa 85, San Jerónimo Lídice, Magdalena Contreras, CP. 10200.",
        place: "Ciudad de México, CDMX",
        url: "https://maps.app.goo.gl/tADpi5iFEtPCVV9e6",
        phone: "(55) 5484 8355"
        
    },
    {
        id: 2,
        name: "Planta Teotihuacán",
        direction: "Teotihuacán de Arista, CP. 55845.",
        place: "Estado DE MÉXICO",
        url: "https://maps.app.goo.gl/QE3UzXABoY49Dcah7",
        phone: "(594) 956-1645"

    },
    {
        id: 3,
        name: "Oficina Cancún",
        direction: "Kukulcan Boulevard, Zona Hotelera, CP. 77500.",
        place: "Cancún, Quintana Roo",
        url: "https://maps.app.goo.gl/ihhwxX88Horn6GgJ6",
        phone: "(998) 892-3143"

    }
]

const Contacts2 = () => {

    const mobile = useBreakpointValue({ base: true, md: false });

    const [width_, setWidth] = useState('50%');

    useEffect(() => {
        const newWidth = mobile ? '100%' : '50%';
        setWidth(newWidth);
    }, [mobile]);

    const [direction, setDirection] = useState('row');

    useEffect(() => {
        const newDirection = mobile ? 'column' : 'row';
        setDirection(newDirection);
    }, [mobile]);

    const styles = {
        //backgroundColor: "#030318",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        backgroundColor: "#03296a99",
        backgroundImage: `url('/projects/2.jpg')`,
        backgroundBlendMode: "soft-light",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        //backgroundPosition: "center",
        overflow: "hidden",
        padding: 100,
        width: '100%',
        height: '98vh',
        //backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed'
    }

    return (
        <NavBar photo={true} mobile={mobile}>
            <div style={styles}>
                <Fade>
                    <strong><h3 class="col-about-title" style={{ color: 'white', fontSize: mobile ? 35 : 50, fontWeight: '700', textAlign: 'center', textTransform: 'uppercase', marginTop: mobile ? 150 : 0 }}>CONTÁCTANOS</h3></strong>
                </Fade>
                <div className="line-banner" style={{ backgroundColor: 'white' }} />
                <p style={{ color: 'white', fontWeight: '400', textAlign: 'center', margin: mobile ? 0 : '0 9rem', fontStyle: 'italic' }}>"Ya sea que estés buscando a un contratista general experto o que deseas trabajar con nosotros, {!mobile && <br />} encontrarás todo lo que necesitas para ponerte en contacto con Grupo Ticonsa"</p>
                <div className="animated-accordion">
                    <RiArrowDownSLine className='text-3xl' color="white" />
                </div>
            </div>
            <Stack
                direction={mobile ? 'column' : 'row'}
                style={{ width: '100%', gap: 0 }}
            >
                <div style={{ width: width_, backgroundColor: '#c3964e10', display: 'flex', flexDirection: 'column', padding: mobile ? 0 : '1rem 5rem', justifyContent: 'center', paddingTop: mobile ? 30 : '1rem' }}>
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Estamos a tus órdenes</h2>
                    </div>
                    <Fade>
                        <section className="text-center">
                            <h2 class="section-title">Conversa con <span className="text-primary-blue">GRUPO TICONSA<sup>®</sup></span></h2>
                        </section>
                    </Fade>
                    <div className="line-banner" style={{ backgroundColor: color.primary }} />
                    {!mobile &&
                        <div class="col-about-info">
                            <p>Nuestra dedicación al cliente empieza antes incluso de que se conciba el proyecto. Con entusiasmo ofrecemos nuestra visión y asesoramiento a todos aquellos que aspiran a <span style={{ color: color.orange }}>EDIFICAR EN MÉXICO.</span></p>
                        </div>
                    }
                </div>
                <div style={{ width: width_, padding: mobile ? '0 34px' : '1rem 5rem' }}>
                    <ContactForm2 />
                </div>
            </Stack>
            <div style={{ backgroundColor: color.primary, padding: mobile ? 20 : 80 }}>
                <Fade direction="down">
                    <strong><h3 class="col-about-title" style={{ color: 'white', fontSize: 22, fontWeight: '700', marginBottom: '0rem', }}>NUESTRAS UBICACIONES</h3></strong>
                </Fade>
                <Fade direction="down" delay={0.5}>
                    <strong><h3 class="col-about-title" style={{ color: 'white', fontSize: 52, fontWeight: '700', marginBottom: '0rem', }}>PRESENCIA NACIONAL</h3></strong>
                </Fade>
                <div style={{ display: 'flex', flexDirection: direction, marginTop: 30, gap: 25, flexWrap: 'wrap' }}>
                    {ubications.map((item, index) => (
                        <a href={item?.url} target="_blank" key={`${index}-${item?.name}`}>
                            <div>
                                <h3 class="col-about-title" style={{ color: 'white', fontSize: 22, fontWeight: '700', marginBottom: '0rem', textTransform: 'uppercase' }}>{item?.name}</h3>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                    <FaDirections color="white" />
                                    <h3 style={{ color: 'white', fontSize: 12, marginTop: '0.5rem' }}>{item?.direction}<br />{item?.place}</h3>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                    <MdOutlinePhoneInTalk color="white" />
                                    <h3 style={{ color: 'white', fontSize: 12, marginTop: '0.5rem' }}>{item?.phone}</h3>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                    <TbMapShare color="white" />
                                    <h3 style={{ color: 'white', fontSize: 12, marginTop: '0.5rem' }}>VER MAPA</h3>
                                </div>
                                <div className="line-banner-btn" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </NavBar >
    )
}

export default Contacts2