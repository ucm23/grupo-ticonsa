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
                                direction={mobile ? 'column' : 'row'}
                                style={{ width: '100%', justifyContent: 'space-between' }}

                            >
                                <div>
                                    <Fade direction="down">
                                        <strong><h3 class="col-about-title text-shadow" style={{ fontWeight: '600', textAlign: mobile ? 'center' : 'left' }}>Construye con nosotros</h3></strong>
                                        <p class="text-shadow" style={{ color: 'white', fontWeight: '600', textAlign: mobile ? 'center' : 'left' }}>Cuéntanos más acerca de los requerimientos de tu proyecto</p>
                                    </Fade>
                                </div>
                                <Stack style={{ alignContent: 'center' }}>
                                <Link href={'/contacts'}>
                                <Button
                                    colorScheme="blue"
                                    bg={color.primary}
                                    rounded={50}
                                    top={30}
                                    color="white"
                                    _hover={{ bg: 'blue.500' }}>
                                    Enviar mensaje
                                </Button>
                                </Link>
                                </Stack>
                            </Stack>
                        </section>

                    </div>
                </Stack>
            }

            <Stack direction='row' spacing={2} marginY={5} paddingY={5} justifyContent={'space-evenly'}>
                <Stack spacing={2} alignItems={'center'}
                >
                    <img
                        src="/logo-white.png"
                        alt="logo Grupo Ticonsa"
                        style={{ width: 123 }}
                    />

                </Stack>
                <Stack direction='row' justifyContent={'space-evenly'}>
                    <Stack spacing={2} paddingX={5}>
                        <h3 className="footer-title">Acerca de</h3>
                        <Stack flexDirection={'column'}>
                            <Link href={'/'} className="footer-link">
                                Acerca de
                            </Link>
                            <Link href={'/'} className="footer-link">
                                Servicios
                            </Link>
                        </Stack>
                    </Stack>
                    <Stack spacing={2} paddingX={5}>
                        <h3 className="footer-title">Contacto</h3>
                        <Stack flexDirection={'column'}>
                            <Link href={'/contacts'} className="footer-link">
                                Contáctanos
                            </Link>
                            <Link href={'/'} className="footer-link">
                                Curriculum
                            </Link>
                        </Stack>
                    </Stack>
                    <Stack spacing={2}>
                        <h3 className="footer-title">Redes Sociales</h3>
                        <Stack direction={'row'} spacing={1}>
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
                    </Stack>
                </Stack>

                {/*
            { id: 1, href: "/", content: "Inicio" },
        { id: 2, href: "/historia", content: "Historia" },
        { id: 3, href: "/prefabricado", content: "Sistema de prefabricado" },
        { id: 6, href: "/contacto", content: "Contacto" },
        { id: 5, href: "/#", hasSubMenu: SubMenuInst },
        { id: 7, href: "/#", hasSubMenu: SubMenuProd },  
  */}

            </Stack>
            <Stack direction='row' spacing={2} paddingY={6} justifyContent={'space-evenly'}>
                <h3 className="footer-link"><strong>Ticonsa Inmobiliaria S.A. de C.V. México. 2023</strong><br></br>Derechos Reservados.</h3>
                <Stack direction='row' spacing={2}>
                    <Link href={'/privacity'} className="footer-link">
                        Aviso de Privacidad
                    </Link>
                    <h3 className="footer-link"> | </h3>
                    <Link href={'/legal'} className="footer-link">
                        Aviso Legal
                    </Link>
                </Stack>
            </Stack>
            <a href={"https://development.victum-re.online"} target="_blank" rel="noopener noreferrer">Proveedores</a>
        </div >
    )
}

SocialButton.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    href: PropTypes.string,
}
