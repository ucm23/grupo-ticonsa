import {
    Stack,
    useBreakpointValue,
    Button,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';
import color from '../color'
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react'
import { useEffect } from 'react'
import SocialButton from './SocialButton'
import { PiArrowRightThin } from "react-icons/pi";

export default function SmallCentered({ photo, certificates }) {
    const mobile = useBreakpointValue({ base: true, md: false });
    const styles = {
        //backgroundColor: "#030318",
        backgroundColor: "#B6B6B6",
        backgroundImage: `url('/projects/1.jpg')`,
        backgroundBlendMode: "soft-light",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        //backgroundPosition: "center",
        overflow: "hidden",
        padding: mobile ? "100px 10px" : 100,
        width: '100%',
        //backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed'
    }

    const [direction, setDirection] = useState('row');

    useEffect(() => {
        const newDirection = mobile ? 'column' : 'row';
        setDirection(newDirection);
    }, [mobile]);

    const handleLinkClick = (e) => {
        if (mobile) {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = '/cv-grupo-ticonsa.pdf';
            link.download = 'cv-grupo-ticonsa.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <>
            {certificates &&
                <div class="text-white flex flex-col items-center justify-center space-y-12"
                    style={{
                        //background: `url(https://hermosillo.com/wp-content/uploads/2017/10/steel-structure-about-bg.png) top right / cover no-repeat`,
                        backgroundColor: '#03296A90',
                        backgroundImage: `url(https://hermosillo.com/wp-content/uploads/2017/10/steel-structure-about-bg.png)`,
                        backgroundBlendMode: "soft-light",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        //backgroundPosition: "center",
                        overflow: "hidden",
                        padding: mobile ? "100px 10px" : '12rem 1rem',
                        width: '100%',
                        //backgroundRepeat: "no-repeat",
                        //backgroundAttachment: 'fixed'
                    }}
                >
                    <h1 class="text-3xl font-bold text-center tracking-tight sm:text-4xl">
                        Los estándares más reconocidos de calidad en construcción
                    </h1>

                    <div class="flex flex-col md:flex-row gap-10 items-center justify-center">
                        <div class="relative bg-[#1a1a1a] pt-20 mt-14 px-6 rounded-[10px] text-center max-w-md w-full">
                            <img src="/certificates/anippac-oro.png"
                                alt="Ookla"
                                class="absolute -top-16 left-1/2 transform -translate-x-1/2 h-40 w-40 object-contain" />
                            <p class="text-white mt-4">
                                Sistema de construcción industrializada certificado Avalado por ANIPPAC<span class="text-blue-400">®</span> *
                            </p>
                        </div>

                        <div class="relative bg-[#1a1a1a] pt-20 mt-14 px-6 rounded-[10px] text-center max-w-md w-full">
                            <img src="/certificates/onnce-color.png"
                                alt="nPerf"
                                class="absolute -top-16 left-1/2 transform -translate-x-1/2 h-40 w-40 object-cover rounded-full" />
                            <p class="text-white mt-4">
                                Excelencia en seguridad y accesibilidad Certificación ONNCCE<span class="text-blue-400">®</span> **
                            </p>
                        </div>
                    </div>


                    <p class="text-sm text-gray-400 text-center max-w-lg">
                        * ANIPPAC: Aval técnico en prefabricados de concreto presforzado. <br />
                        ** ONNCCE: Certificación internacional en accesibilidad.
                    </p>

                    <div class="text-center space-y-2">
                        <h2 class="text-2xl md:text-3xl font-bold">
                            "Optimiza tus proyectos con soluciones certificadas"
                        </h2>
                        <p>Combina nuestros sistemas estructurales con servicios adicionales y obtén beneficios exclusivos</p>
                    </div>
                </div>}
            <div className='bg-footer'>
                {photo &&
                    <Stack
                        align='center'
                        direction='column'
                        style={{ width: '100%' }}
                    >
                        <div
                            style={styles}
                        >
                            <section className="_main container" >
                                <Stack
                                    direction={'column'}
                                    style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', }}

                                >
                                    <div>
                                        <Fade>
                                            <strong><h3 className="col-about-title text-shadow" style={{ fontWeight: '600', textAlign: 'center', }}>Construye con nosotros</h3></strong>
                                            <p className="text-shadow" style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>Cuéntanos más acerca de los requerimientos de tu proyecto y te ayudaremos a convertirlo en realidad</p>
                                        </Fade>
                                    </div>
                                    <Stack style={{ alignContent: 'center' }}>
                                        <a href={'/contacto'} >
                                            <Button
                                                colorScheme="blue"
                                                bg={color.primary}
                                                rounded={0}
                                                top={mobile ? 30 : 0}
                                                color="white"
                                                leftIcon={<div />}
                                                rightIcon={<PiArrowRightThin className='text-3xl' color="white" />}
                                                _hover={{ bg: 'blue.500' }}
                                                title='Redirigir a Contacto y Enviar Mensaje'
                                            >
                                                Enviar mensaje
                                            </Button>
                                        </a>
                                    </Stack>
                                </Stack>
                            </section>
                        </div>
                    </Stack>
                }
                <section className="_main container p-footer">
                    <Fade damping={0.2} delay={0.2}>
                        <Stack flexDirection={direction} style={{ marginBottom: 20 }} justifyContent={'space-between'}>
                            <Stack alignItems={mobile ? 'center' : 'initial'}>
                                <img
                                    src="/logo-white.png"
                                    alt="logo Grupo Ticonsa"
                                    style={{ width: 123 }}
                                />
                                <h3 className="footer-title" style={{ fontWeight: 'normal', marginBottom: 20, textAlign: mobile ? 'center' : 'left' }}>Grupo Ticonsa ®, un grupo con historia y vanguardia en prefabricación.</h3>
                            </Stack>
                            <Stack direction={direction} justifyContent={'space-between'}>
                                <Stack paddingRight={5}>
                                    <h3 className="footer-title uppercase">Acerca de</h3>
                                    <Stack flexDirection={'column'}>
                                        <a href="/#about-me" className="footer-link">Acerca de</a>
                                        <a href="/#services" className="footer-link">Servicios</a>
                                        <a href="/document_cv" className="footer-link" onClick={(e) => handleLinkClick(e)}>Ver Curriculum</a>
                                        {/*<a href="/document_presencia" className="footer-link">Ver Presencia Ticonsa</a>*/}
                                    </Stack>
                                </Stack>
                                <Stack paddingRight={5}>
                                    <h3 className="footer-title uppercase">Prefabricado</h3>
                                    <Stack flexDirection={'column'}>
                                        <a href="/prefabricado#system" className="footer-link">Sistema</a>
                                        <a href="/prefabricado#pro" className="footer-link">Ventajas</a>
                                    </Stack>
                                </Stack>
                                <Stack paddingRight={5}>
                                    <h3 className="footer-title uppercase">Ayuda</h3>
                                    <Stack flexDirection={'column'}>
                                        <a href="/contacto" className="footer-link">Contáctanos</a>
                                        <a href="https://help-victum-repse.vercel.app/" className="footer-link" target="_blank">Ayuda digital</a>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <div style={{ background: 'white', height: 1, width: '100%', }} />
                        <Stack direction={direction} justifyContent={'space-between'} style={{ marginTop: 20, alignItems: mobile ? 'center' : 'initial' }}>
                            <Stack direction={direction} gap={4} style={{ alignItems: 'center' }}>
                                <h3 className="footer-link" style={{ textAlign: 'center' }}>
                                    <a href={'/legal'} target="_blank" className="footer-link">
                                        Aviso Legal
                                    </a>
                                </h3>
                                <h3 className="footer-link" style={{ textAlign: 'center' }}>
                                    <a href={'/privacity'} target="_blank" className="footer-link">
                                        Aviso de Privacidad
                                    </a>
                                </h3>
                            </Stack>
                            <Stack direction={'row'}>
                                <a href={'https://twitter.com/GRUPO_TICONSA'} target="_blank">
                                    <SocialButton>
                                        <FaTwitter />
                                    </SocialButton>
                                </a>
                                <a href={'https://www.youtube.com/@GRUPOTICONSASADECV'} target="_blank">
                                    <SocialButton>
                                        <FaYoutube />
                                    </SocialButton>
                                </a>
                                <a href={'https://www.instagram.com/grupo_ticonsa/'} target="_blank">
                                    <SocialButton>
                                        <FaInstagram />
                                    </SocialButton>
                                </a>
                                <a href={'https://www.facebook.com/GrupoTiconsa/'} target="_blank">
                                    <SocialButton>
                                        <FaFacebook />
                                    </SocialButton>
                                </a>
                                {/*<a href={'https://www.linkedin.com/company/grupo-ticonsa/'} target="_blank">
                                <SocialButton>
                                    <FaLinkedin />
                                </SocialButton>
        </a>*/}
                            </Stack>
                        </Stack>
                    </Fade>
                </section>
            </div>
        </>
    )
}