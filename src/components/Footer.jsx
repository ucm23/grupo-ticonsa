import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    VisuallyHidden,
    Button,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Link } from 'wouter'

import color from '../color'
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react'
import { useEffect } from 'react'

import { NavLink, useLocation } from "react-router-dom";

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
            color={'white'}
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

export default function SmallCentered({ photo }) {
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
        padding: 100,
        width: '100%',
        //backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed'
    }

    const [direction, setDirection] = useState('row');

    useEffect(() => {
        const newDirection = mobile ? 'column' : 'row';
        setDirection(newDirection);
    }, [mobile]);

    const scrollToSection = (why) => {
        const section = document.getElementById(why);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const redirectToPage = (url) => {
        // Abrir una nueva pestaña o ventana con la URL especificada
        window.open(url);
    }

    return (
        /*<Box
            bg={'#03296A'} 
            color={useColorModeValue('gray.50', 'gray.200')}
        >
          <Container
            as={Stack}
            maxW='6xl'
            py={4}
            spacing={4}
            justify='center'
            align='center'
          >
              <img 
                src="/222.jpg" 
                alt="logo Grupo Ticonsa"
                style={{ width: '7rem' }}
              />
            
            <Stack direction='row' spacing={6}>
              <Link href={'/'}>
                  Inicio
              </Link>
              <Link href={'/historia'}>
                Historia
              </Link>
              <Link href={'/contacto'}>
                Contacto
              </Link>
            </Stack>
          </Container>
    
          <Box
            borderTopWidth={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}>
            <Container
              as={Stack}
              maxW={'6xl'}
              py={4}
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              justify={{ base: 'center', md: 'space-between' }}
              align={{ base: 'center', md: 'center' }}>
              <Text textAlign={'center'} >© 2023 Grupo Ticonsa. Todo los derechos reservados.</Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'/'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'/'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'/'}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={'Facebook'} href={'https://www.facebook.com/GrupoTiconsa/?locale=es_LA'}>
                  <FaFacebook />
                </SocialButton>
              </Stack>
            </Container>
          </Box>
        </Box>*/
        <div className='bg-footer'>
            {photo &&
                <Stack
                    bg={useColorModeValue('gray.90', 'gray.800')}
                    color="#fff"
                    //spacing={{ base: 8, md: 10 }}
                    align='center'
                    direction='column'
                    style={{ width: '100%' }}
                >
                    <div
                        style={styles}
                    >

                        <section className="_main container" >
                            <Stack
                                direction={direction}
                                style={{ width: '100%', justifyContent: 'space-between' }}

                            >
                                <div>
                                    <Fade direction="down">
                                        <strong><h3 class="col-about-title text-shadow" style={{ fontWeight: '600', textAlign: mobile ? 'center' : 'left' }}>Construye con nosotros</h3></strong>
                                        <p class="text-shadow" style={{ color: 'white', fontWeight: '600', textAlign: mobile ? 'center' : 'left' }}>Cuéntanos más acerca de los requerimientos de tu proyecto</p>
                                    </Fade>
                                </div>
                                <Stack style={{ alignContent: 'center' }}>
                                    <NavLink to={'/contacts'}>
                                        <Button
                                            colorScheme="blue"
                                            bg={color.primary}
                                            rounded={50}
                                            top={30}
                                            color="white"
                                            _hover={{ bg: 'blue.500' }}>
                                            Enviar mensaje
                                        </Button>
                                    </NavLink>
                                </Stack>
                            </Stack>
                        </section>

                    </div>
                </Stack>
            }
            <section className="_main container p-footer" >
                <Stack flexDirection={direction} style={{ marginBottom: 20 }} justifyContent={'space-between'}>
                    <Stack alignItems={'center'}>
                        <img
                            src="/logo-white.png"
                            alt="logo Grupo Ticonsa"
                            style={{ width: 123, marginBottom: mobile ? 20 : 0 }}
                        />

                    </Stack>
                    <Stack direction={direction} justifyContent={'space-between'}>
                        <Stack paddingRight={5}>
                            <h3 className="footer-title">Acerca de</h3>
                            <Stack flexDirection={'column'}>
                                {/*<Link href={'/'} className="footer-link">
                                    Acerca de
                                </Link>
                                <Link href={'/'} className="footer-link">
                                    Servicios
        </Link>*/}
                                <a href="/#about-me" className="footer-link">Acerca de</a>
                                <a href="/#services" className="footer-link">Servicios</a>
                            </Stack>
                        </Stack>
                        <Stack paddingRight={5}>
                            <h3 className="footer-title">Prefabricado</h3>
                            <Stack flexDirection={'column'}>
                                {/*<Link to={'/prefabricado#system'} target="_blank" className="footer-link" onClick={() => scrollToSection('system')}>
                                    Sistema
                                </Link>
                                <Link href={'/prefabricado#pro'} target="_blank" className="footer-link" onClick={() => redirectToPage('/prefabricado#pro')}>
                                    Ventaja
        </Link>*/}
                                <a href="/prefabricado#system" className="footer-link">Sistema</a>
                                <a href="/prefabricado#pro" className="footer-link">Ventajas</a>
                            </Stack>
                        </Stack>
                        <Stack paddingRight={5}>
                            <h3 className="footer-title">Contacto</h3>
                            <Stack flexDirection={'column'}>
                                {/*<Link href={'/contacts'} className="footer-link">
                                    Contáctanos
                                </Link>
                                <Link href={'/'} className="footer-link">
                                    Curriculum
                                </Link>*/}
                                <a href="/contacts" className="footer-link">Contáctanos</a>
                                <a href="" className="footer-link" >Curriculum</a>
                            </Stack>
                        </Stack>

                        <Stack>
                            <h3 className="footer-title">Redes Sociales</h3>
                            <Stack direction={'row'}>
                                <a href={'https://twitter.com/GRUPO_TICONSA'} target="_blank">
                                    <SocialButton label={'Twitter'}>
                                        <FaTwitter />
                                    </SocialButton>
                                </a>
                                <a href={'https://www.youtube.com/@grupoticonsaprefabricados9793'} target="_blank">
                                    <SocialButton label={'YouTube'}>
                                        <FaYoutube />
                                    </SocialButton>
                                </a>
                                <a href={'https://www.instagram.com/grupo_ticonsa/'} target="_blank">
                                    <SocialButton label={'Instagram'}>
                                        <FaInstagram />
                                    </SocialButton>
                                </a>
                                <a href={'https://www.facebook.com/GrupoTiconsa/?locale=es_LA'} target="_blank">
                                    <SocialButton label={'Facebook'}>
                                        <FaFacebook />
                                    </SocialButton>
                                </a>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <div style={{ background: 'white', height: 1, width: '100%', }} />
                <Stack flexDirection='row' justifyContent={'space-between'} style={{ marginTop: 20 }}>
                    <div style={{ textAlign: 'left' }}>
                        <h3 className="footer-link">
                            Ticonsa Inmobiliaria S.A. de C.V. México. 2023
                        </h3>
                        <h3 className="footer-link">
                            Derechos Reservados.
                        </h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <h3 className="footer-link">
                            <a href={'/legal'} target="_blank" className="footer-link">
                                Aviso Legal
                            </a>
                        </h3>
                        <h3 className="footer-link">
                            <a href={'/privacity'} target="_blank" className="footer-link">
                                Aviso de Privacidad
                            </a>
                        </h3>
                    </div>
                </Stack>
            </section>
        </div >
    )
}

SocialButton.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    href: PropTypes.string,
}
