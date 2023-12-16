
import NavBar from "../components/NavBar"

import {
    Box,
    useColorModeValue,
    useBreakpointValue,
    Image,
    Stack,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaPhoneAlt, FaPhone } from 'react-icons/fa'

import {
    chakra,
    Container,
    Text,
    VisuallyHidden,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Link } from 'wouter'
import color from "../color";

import { MdOutlineMail } from "react-icons/md";

import { AiOutlineMail, AiOutlinePhone, } from "react-icons/ai";

import { TbWorldShare, TbMailForward, TbPhoneCall } from "react-icons/tb";

import { Carousel } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Contacts = () => {

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
        <NavBar>
            <Box
                bgGradient={
                    useColorModeValue(
                        'radial(#B6B6B650 1px, transparent 1px)',
                        'radial(#B6B6B650 1px, transparent 1px)'
                    )
                }
                backgroundSize="20px 20px"
                opacity="1"
                height="100%"
            >

                <section className="_main container" style={{}} >
                    <section className="section-5">
                        <Fade direction="down">
                            <section className="text-center">
                                <h2 class="section-title" style={{ paddingTop: 130, }}><span className="text-primary-blue">Contáctanos</span></h2>
                            </section>
                        </Fade>
                        <div class="row-base row">
                            <div class="col-base col-md-offset-1">
                                <Stack
                                    direction={mobile ? 'column' : 'row'}
                                    style={{ width: '100%', justifyContent: 'space-between', padding: 10 }}
                                    align='center'
                                >
                                    <div style={{ width: width_, justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex', marginBottom: 35 }}>
                                        <Carousel fade style={{ height: 600, width: 365, }} data-bs-theme="dark">
                                            <Carousel.Item key={`names-item`} interval={4000}>
                                                <div style={{ borderColor: color.primary, borderWidth: 2 }}>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.54268364379845!2d-99.22344153808785!3d19.32975703236199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff953ce73f7b%3A0x8cf981865a36835b!2sGrupo%20Ticonsa%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1697838392918!5m2!1ses-419!2smx"
                                                        width="361" height="560" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                                    />
                                                </div>
                                                <div className="text-center" >
                                                    <p style={{ fontSize: 12 }}>
                                                        <br /><strong style={{ color: color.primary }}>
                                                            CORPORATIVO CIUDAD DE MÉXICO
                                                        </strong><br />
                                                        (55) 5484-8364
                                                    </p>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item key={`names-item`} interval={4000}>
                                                <div style={{ borderColor: color.primary, borderWidth: 2 }}>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1463.5016147786391!2d-98.90510361366837!3d19.68932229972236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1eb7300349b71%3A0xf1629f0f0c861260!2sPlanta%20Ticonsa!5e0!3m2!1ses-419!2smx!4v1697838617903!5m2!1ses-419!2smx"
                                                        width="361" height="560" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                                    />
                                                </div>
                                                <div className="text-center" >
                                                    <p style={{ fontSize: 12 }}>
                                                        <br /><strong style={{ color: color.primary }}>
                                                            Teotihuacán Estado de México
                                                        </strong><br />
                                                        (594) 956-1645
                                                    </p>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item key={`names-item`} interval={4000}>
                                                <div style={{ borderColor: color.primary, borderWidth: 2 }}>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8420510937453!2d-86.82315982410222!3d21.15868318330224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2923b0cabc5d%3A0x124c3a2bd2a0622a!2sTiconsa%20Cacun%20Oficinas%20centro!5e0!3m2!1ses-419!2smx!4v1697838674859!5m2!1ses-419!2smx"
                                                        width="361" height="560" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                                    />
                                                </div>
                                                <div className="text-center" >
                                                    <p style={{ fontSize: 12 }}>
                                                        <br /><strong style={{ color: color.primary }}>
                                                            OFICINA Cancún, Quintana Roo
                                                        </strong><br />
                                                        (998) 892-3143
                                                    </p>
                                                </div>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <div style={{ width: width_, }}>
                                        <h3 class="col-about-title">Formulario de <span className="text-primary-blue">Contacto:</span></h3>
                                        <div class="col-about-info">
                                            <p>Si desea solicitar una cotización con nosotros Grupo Ticonsa<sup>®</sup>, si requiere de mayor información o tienen algún comentario, por favor escribe tus datos para atenderlo personalmente:</p>
                                            <ContactForm />
                                        </div>
                                    </div>
                                </Stack>
                            </div>
                        </div>
                    </section>
                </section>


                {/*<section className="_main container" >
                    <section className="section-5" >
                        <div class="row-base row">
                            <div class="col-base col-md-offset-1">
                                <div class="row-base row" styles='margin-top: 7.1em'>
                                    <div class="col-base col-sm-6 col-md-6 col-md-offset-1">
                                        <h3 class="col-about-title"><span className="text-primary-blue">Contáctanos</span></h3>
                                        <div class="col-about-info">
                                            <p>Si desea solicitar una cotización con nosotros Grupo Ticonsa<sup>®</sup>, si requiere de mayor información o tienen algún comentario, por favor envíenos un mail para atenderlo personalmente. O bien, comuníquese con nosotros a los siguientes teléfonos:</p>
                                        </div>
                                    </div>

                                    <div class="col-base col-sm-6 col-md-6 col-md-offset-1">
                                        <h3 class="col-about-title">Medios de <span className="text-primary-blue">contacto</span></h3>
                                        <div class="col-about-info">
                                            <Stack direction={'row'}>
                                                <SocialButton label={'Facebook'}>
                                                    <FaPhone />
                                                </SocialButton>
                                                <p style={{ fontSize: 12 }}>
                                                    OFICINA Cancún, Quintana Roo (998) 892-3143 <br />
                                                    OFICINA CIUDAD DE MÉXICO (55) 5484-8364 <br />
                                                    Teotihuacán Estado de México (594) 956-1645<br />
                                                </p>
                                            </Stack>
                                            <Stack direction={'row'}>
                                                <SocialButton label={'Facebook'}>
                                                    <FaPhone />
                                                </SocialButton>
                                                <p style={{ fontSize: 12 }}>
                                                    OFICINA Cancún, Quintana Roo (998) 892-3143 <br />
                                                    OFICINA CIUDAD DE MÉXICO (55) 5484-8364 <br />
                                                    Teotihuacán Estado de México (594) 956-1645<br />
                                                </p>
                                            </Stack>
                                            <Stack direction={'row'}>
                                                <SocialButton label={'Facebook'}>
                                                    <MdOutlineMail />
                                                </SocialButton>
                                                <p style={{ fontSize: 12 }}>
                                                    fgonzalez@grupoticonsa.com.mx
                                                </p>
                                            </Stack>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </section>*/}
            </Box>
        </NavBar>
    )
}

export default Contacts