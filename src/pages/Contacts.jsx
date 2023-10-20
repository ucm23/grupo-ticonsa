
import NavBar from "../components/NavBar"

import {
    Box,
    useColorModeValue,
    Image,
    Stack
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

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            color={color.primary}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const Contacts = () => {

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

                <section className="_main container" style={{ paddingBottom: 30 }} >
                    <section className="section-5" >
                        <h2 class="section-title" style={{ paddingTop: 130, }}>Contáctanos</h2>
                        <div class="row-base row">
                            <div class="col-base col-md-offset-1">
                                <div class="row-base row">
                                    <div class="col-base col-sm-6 col-md-6 col-md-offset-1">
                                        <h3 class="col-about-title">Formulario de <span className="text-primary-blue">Contacto:</span></h3>
                                        <div class="col-about-info">
                                            <p>Si desea solicitar una cotización con nosotros Grupo Ticonsa<sup>®</sup>, si requiere de mayor información o tienen algún comentario, por favor escribe tus datos para atenderlo personalmente:</p>
                                            <ContactForm />
                                        </div>
                                    </div>

                                    <div class="col-base col-sm-6 col-md-6 col-md-offset-1" style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex' }}>
                                        <Carousel fade style={{ height: 600, width: 375, }} data-bs-theme="dark">
                                            <Carousel.Item key={`names-item`} interval={4000}>
                                                <div style={{ borderColor: color.primaryLight, borderWidth: 2 }}>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.54268364379845!2d-99.22344153808785!3d19.32975703236199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff953ce73f7b%3A0x8cf981865a36835b!2sGrupo%20Ticonsa%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1697838392918!5m2!1ses-419!2smx"
                                                        width="371" height="560" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                                    />
                                                </div>
                                                <div className="text-center" >
                                                    <p style={{ fontSize: 12 }}>
                                                        <br /><strong style={{ color: color.primary }}>
                                                            OFICINA MÉXICO D.F.
                                                        </strong><br />
                                                        (55) 5484-8364
                                                    </p>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item key={`names-item`} interval={4000}>
                                                <div style={{ borderColor: color.primaryLight, borderWidth: 2 }}>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1463.5016147786391!2d-98.90510361366837!3d19.68932229972236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1eb7300349b71%3A0xf1629f0f0c861260!2sPlanta%20Ticonsa!5e0!3m2!1ses-419!2smx!4v1697838617903!5m2!1ses-419!2smx"
                                                        width="371" height="560" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                                    />
                                                </div>
                                                <div className="text-center" >
                                                    <p style={{ fontSize: 12 }}>
                                                        <br /><strong style={{ color: color.primary }}>
                                                            TRAMET Estado de México
                                                        </strong><br />
                                                        (594) 956-1645
                                                    </p>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item key={`names-item`} interval={4000}>
                                                <div style={{ borderColor: color.primaryLight, borderWidth: 2 }}>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8420510937453!2d-86.82315982410222!3d21.15868318330224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2923b0cabc5d%3A0x124c3a2bd2a0622a!2sTiconsa%20Cacun%20Oficinas%20centro!5e0!3m2!1ses-419!2smx!4v1697838674859!5m2!1ses-419!2smx"
                                                        width="371" height="560" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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
                                </div>
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
                                                    OFICINA MÉXICO D.F. (55) 5484-8364 <br />
                                                    TRAMET Estado de México (594) 956-1645<br />
                                                </p>
                                            </Stack>
                                            <Stack direction={'row'}>
                                                <SocialButton label={'Facebook'}>
                                                    <FaPhone />
                                                </SocialButton>
                                                <p style={{ fontSize: 12 }}>
                                                    OFICINA Cancún, Quintana Roo (998) 892-3143 <br />
                                                    OFICINA MÉXICO D.F. (55) 5484-8364 <br />
                                                    TRAMET Estado de México (594) 956-1645<br />
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