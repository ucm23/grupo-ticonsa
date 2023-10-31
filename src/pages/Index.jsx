
import CardNew from "../components/Blog"
import Carousel from "../components/Carousel"
import NavBar from "../components/NavBar"
import info from "../assets/info.json"
import items from '../assets/services_card.json'
import point from '../assets/projects_map.json'
import ServicesCard from "../components/ServicesCard"
import CV from "../components/CV";

import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import { Fade } from "react-awesome-reveal";

import {
    Box,
    Heading,
    Stack,
    Text,
    useColorModeValue,
    useBreakpointValue,
    Button
} from '@chakra-ui/react';

import {
    Image,
} from '@chakra-ui/react';
import color from "../color";
import CardSimple from "../components/CardSimple"
import { Link } from "wouter"

const Index = () => {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const mobile = useBreakpointValue({ base: true, md: false });

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const downloadCV = () => {
        const a = document.createElement('a');
        a.download = 'GRUPO_TICONSA_CV.pdf';
        a.href = '/cv_.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };



    return (
        <NavBar photo={'true'}>
            <Carousel />
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
                <section className="_main container" >
                    <section className="section-5" >
                        <Fade direction="down">
                            <section className="text-center">
                                <h2 class="section-title"> Sobre Nosotros <span className="text-primary-blue">GRUPO TICONSA<sup>®</sup></span></h2>
                            </section>
                        </Fade>
                        <div class="row-base row" styles='margin-top: 7.1em'>
                            <div class="col-base col-sm-6 col-md-6 col-md-offset-1">
                                <h3 class="col-about-title">Concreto, Prefabricado y <span className="text-primary-blue">Presforzado</span></h3>
                                <div class="col-about-info">
                                    <p>Grupo Ticonsa<sup>®</sup> en una empresa con 50 años de experiencia desarrollando soluciones innovadoras que aportan valor agregado a los proyectos de nuestros clientes.</p>
                                    <p>Cancún: (998) 892-3143 <br /> México: (55) 5484-8364<br />Teotihuacán: (594) 956-1645</p>
                                    <p>👷 Grupo Ticonsa — 15 de Febrero de 1971</p>
                                </div>
                            </div>
                            <div class="col-base col-about-img col-sm-6 col-md-offset-1">
                                <Image
                                    src='/ticonsa1.avif'
                                    alt=""
                                    style={{ height: 300, width: 500, objectFit: 'cover', }}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="text-center">
                        <Fade direction="down">
                            <h3 class="col-about-title" style={{ marginTop: 30 }}>Presencia en <span className="text-primary-blue">todo México</span> y con proyectos <span className="text-primary-blue">destacados</span></h3>
                        </Fade>
                        <div class="content-circle" ref={ref}>
                            <Image
                                borderRadius="lg"
                                src='/mapa.png'
                                alt=""
                                className="img-responsive"
                                style={{ /*width: '100%', objectFit: 'cover', paddingLeft: 50, paddingRight: 50, display: 'initial'*/ }}
                            />
                            {point.map((item) =>
                                item?.projects.map((project_) => (
                                    <OverlayTrigger
                                        trigger='hover'
                                        placement={'bottom'}
                                        overlay={
                                            <Popover id={`popover-positioned-bottom`}>
                                                <Popover.Header as="h3">{item?.name}</Popover.Header>
                                                <Popover.Body>
                                                    {/*<strong>[Año-1999] </strong> */}
                                                    {project_?.name}
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <div
                                            class="circle"
                                            style={{ position: 'absolute', top: project_?.position?.top, left: project_?.position?.left, }}
                                            onClick={handleClick}
                                        />
                                    </OverlayTrigger>
                                ))
                            )
                            }
                        </div>
                    </section>
                </section>

                <div className='p-section-50'>
                    <section className="_main container" >
                        <Stack>
                            <Stack direction={mobile ? 'column' : 'row'} >
                                <div class="col-base col-sm-6 col-md-offset-1">
                                    <Stack style={{ justifyContent: 'center' }}>
                                        <Stack>
                                            <h3 class="col-about-title" style={{ marginTop: 20, }}>Nuestra experiencia expresada en <span className="text-primary-blue">números:</span></h3>
                                            <div class="col-about-info">
                                                <p>Ofrecemos soluciones prácticas e innovadoras a cada uno de nuestros clientes.</p>
                                            </div>
                                        </Stack>
                                        <Stack flexDirection={'row'}>
                                            <CardSimple
                                                title={'+50'}
                                                descrip={'Años de experiencia, calidad y compromiso'}
                                            />
                                            <CardSimple
                                                title={'+200'}
                                                descrip={'Proyectos construidos en México'}
                                            />
                                        </Stack>
                                        <Stack flexDirection={'row'}>
                                            <CardSimple
                                                title={'100%'}
                                                descrip={'de clientes satisfechos'}
                                            />
                                            <CardSimple
                                                title={'#1'}
                                                descrip={'La mejor opción en México'}
                                            />
                                        </Stack>
                                        <Stack style={{ alignContent: 'center', width: '80%', paddingBottom: 20 }}>
                                            <div class="col-about-info">
                                                <p>Conoce nuestro trabajo descargando el Curriculum Vitae:</p>
                                            </div>
                                            <Button
                                                colorScheme="blue"
                                                bg={color.primary}
                                                rounded={50}
                                                color="white"
                                                onClick={downloadCV}
                                                _hover={{ bg: 'blue.500' }}>
                                                Descargar CV
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </div>
                                <div class="col-base">
                                    <Image
                                        src='/img_our.jpg'
                                        alt=""
                                        style={{ width: 500, height: 400, objectFit: 'cover', display: 'initial', marginTop: mobile ? 0 : 20, marginBottom: 20 }}
                                    />
                                </div>
                            </Stack>
                        </Stack>
                    </section>
                </div>

                <section className="_main container" >
                    <section className="text-center">
                        <Fade direction="down">
                            <h3 class="col-about-title" style={{ marginTop: 20, }}>Servicios que <span className="text-primary-blue">ofrecemos</span></h3>
                        </Fade>
                        <section className="d-flex justify-content-around align-items-center pb-5 flex-wrap" >
                            {items.map(item =>
                                <ServicesCard
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                />
                            )
                            }
                        </section>
                    </section>
                    {/*<CV />*/}
                </section>


            </Box>
        </NavBar>
    )
}

export default Index