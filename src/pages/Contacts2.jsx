
import NavBar from "../components/NavBar"

import {
    useBreakpointValue,
    Stack,
} from '@chakra-ui/react';
import color from "../color";

import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import ContactForm2 from "../components/ContactForm2";

const ubications = [
    {
        id: 1,
        name: "Grupo Ticonsa, S.A. De C.V.",
        direction: "Presa 85, San Jerónimo Lídice, Magdalena Contreras, 10200",
        place: "Ciudad de México, CDMX",
        url: "https://maps.app.goo.gl/tADpi5iFEtPCVV9e6"

    },
    {
        id: 2,
        name: "Planta Teotihuacán",
        direction: "Teotihuacán de Arista, 55845",
        place: "Estado DE MÉXICO",
        url: "https://maps.app.goo.gl/QE3UzXABoY49Dcah7"

    },
    {
        id: 3,
        name: "Oficina Cancún",
        direction: "Kukulcan Boulevard, Zona Hotelera, 77500",
        place: "Cancún, Quintana Roo",
        url: "https://maps.app.goo.gl/ihhwxX88Horn6GgJ6"

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
        backgroundImage: `url('/projects/1.jpg')`,
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
        <NavBar photo={true}>
            <div style={styles}>
                <Fade direction="down">
                    <strong><h3 class="col-about-title" style={{ color: 'white', fontSize: mobile ? 40 : 80, fontWeight: '700', textAlign: 'center', textTransform: 'uppercase' }}>CONTÁCTANOS</h3></strong>
                    <div className="line-banner" style={{ backgroundColor: 'white' }} />
                    <p style={{ color: 'white', fontWeight: '400', textAlign: 'center', margin: mobile ? 0 : '0 9rem 0 9rem' }}>Ya sea que estés buscando a un contratista general experto o que desees trabajar con nosotros, encuentra todo lo que necesitas para contactarte con nosotros.</p>
                </Fade>
            </div>

            <Stack
                direction={mobile ? 'column' : 'row'}
                style={{ width: '100%', gap: 0 }}
            >
                <div style={{ width: width_, backgroundColor: '#ede9e9', display: 'flex', flexDirection: 'column', padding: mobile ? 0 : '1rem 9rem 1rem 9rem', justifyContent: 'center', paddingTop: mobile ? 30 : '1rem' }}>
                    <strong><h3 class="col-about-title" style={{ textAlign: 'center', color: color.primary, fontSize: 22, fontWeight: '700', marginBottom: '0rem', textTransform: 'uppercase' }}>ESTAMOS A TUS ÓRDENES</h3></strong>
                    <strong><h3 class="col-about-title" style={{ textAlign: 'center', color: color.primary, fontSize: 52, fontWeight: '700', marginBottom: '0rem', textTransform: 'uppercase', letterSpacing: -4 }}>CONVERSEMOS</h3></strong>
                    <div className="line-banner" style={{ backgroundColor: color.primary }} />
                    {!mobile &&
                        <div class="col-about-info">
                            <p>Nuestra dedicación al cliente empieza antes incluso de que se conciba el proyecto. Con entusiasmo ofrecemos nuestra visión y asesoramiento a todos aquellos que aspiran a <span style={{ color: color.orange }}>EDIFICAR EN MÉXICO.</span></p>
                        </div>
                    }
                </div>
                <div style={{ width: width_, padding: mobile ? '0 40px 0 40px' : '1rem 9rem 1rem 9rem' }}>
                    <ContactForm2 />
                </div>
            </Stack>
            <div style={{ backgroundColor: color.primary, padding: mobile ? 20 : 80 }}>
                <Fade direction="down">
                    <strong><h3 class="col-about-title" style={{ color: 'white', fontSize: 22, fontWeight: '700', marginBottom: '0rem', }}>NUESTRAS UBICACIONES</h3></strong>
                </Fade>
                <Fade direction="down" delay={500}>
                    <strong><h3 class="col-about-title" style={{ color: 'white', fontSize: 52, fontWeight: '700', marginBottom: '0rem', letterSpacing: -4 }}>PRESENCIA NACIONAL</h3></strong>
                </Fade>
                <div style={{ display: 'flex', flexDirection: !mobile ? 'row' : 'column', marginTop: 30, gap: 25, flexWrap: 'wrap' }}>
                    {ubications.map((item, index) => (
                        <div>
                            <h3 class="col-about-title" style={{ color: 'white', fontSize: 22, fontWeight: '700', marginBottom: '0rem', textTransform: 'uppercase' }}>{item?.name}</h3>
                            <h3 style={{ color: 'white', fontSize: 12 }}>{item?.direction}<br />{item?.place}</h3>
                            <h3 style={{ color: 'white', fontSize: 12 }}>VER MAPA</h3>
                            <div className="line-banner-btn" />
                        </div>
                    ))}
                </div>
            </div>
        </NavBar >
    )
}

export default Contacts2