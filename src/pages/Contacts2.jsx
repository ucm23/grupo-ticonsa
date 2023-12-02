
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
        name: "CIUDAD DE MÉXICO",
        direction: "CORPORATIVO CIUDAD DE MÉXICO",
        place: "CIUDAD DE MÉXICO",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.54268364379845!2d-99.22344153808785!3d19.32975703236199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff953ce73f7b%3A0x8cf981865a36835b!2sGrupo%20Ticonsa%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1697838392918!5m2!1ses-419!2smx"

    },
    {
        id: 2,
        name: "Estado de México",
        direction: "CORPORATIVO CIUDAD DE MÉXICO",
        place: "Estado DE MÉXICO",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.54268364379845!2d-99.22344153808785!3d19.32975703236199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff953ce73f7b%3A0x8cf981865a36835b!2sGrupo%20Ticonsa%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1697838392918!5m2!1ses-419!2smx"

    },
    {
        id: 3,
        name: "Cancún",
        direction: "CORPORATIVO CIUDAD DE MÉXICO",
        place: "Quintana Roo",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.54268364379845!2d-99.22344153808785!3d19.32975703236199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff953ce73f7b%3A0x8cf981865a36835b!2sGrupo%20Ticonsa%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1697838392918!5m2!1ses-419!2smx"

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
                            <h3 style={{ color: 'white', fontSize: 12 }}>{item?.place}<br />{item?.direction}</h3>
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