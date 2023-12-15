
import CardNew from "../components/Blog"
import NavBar from "../components/NavBar"
import info from "../assets/info.json"
import items from '../assets/services_card.json'
import point from '../assets/projects_map.json'
import ServicesCard from "../components/ServicesCard"
import CV from "../components/CV";

import { useEffect, useState, useRef } from 'react';
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
import CarouselStatic_ from "../components/CarouselStatic_"

import { Carousel } from "react-bootstrap";

import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine } from "react-icons/ri";

import Carousel_ from "../components/Carousel_"
import Modal from 'react-bootstrap/Modal';
import CarouselStaticIndex from "../components/CarouselStaticIndex";
import { RiArrowDownSLine } from "react-icons/ri";

const features = [
    {
        name: 'Proceso Conceptual',
        description:
            'En esta etapa inicial del proceso de producción de prefabricados, se desarrolla la visión y el concepto general del proyecto.',
        icon: RiBuilding2Line,
    },
    {
        name: 'Planeación',
        description:
            'La fase de planeación implica la elaboración detallada de un plan estratégico que abarca aspectos logísticos, financieros y temporales.',
        icon: RiFolderUserLine,
    },
    {
        name: 'Ingeniería de Detalle',
        description:
            'Durante esta etapa, se traducen los conceptos y planes generales en especificaciones técnicas y detalles precisos.',
        icon: RiFolderChartLine,
    },
    {
        name: 'Fabricación',
        description:
            'La fabricación es el proceso central donde los componentes prefabricados toman forma. ',
        icon: RiNurseLine,
    },
    {
        name: 'Transporte y Montaje',
        description:
            'Una vez que las unidades prefabricadas han sido fabricadas, se inicia la fase de transporte hacia el lugar de montaje.',
        icon: RiShakeHandsLine,
    },
    {
        name: 'Conexiones',
        description:
            'La fase de conexiones es crítica para asegurar la estabilidad y la integridad estructural del proyecto.',
        icon: RiThumbUpLine,
    },
]

const Index = () => {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const mobile = useBreakpointValue({ base: true, md: false });

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const [show_, setShow_] = useState(false);
    const handleShow_ = () => setShow_(!show_);
    const [index, setIndex] = useState(0);

    const onPress = (key) => {
        setIndex(key);
        handleShow_()
    }

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);

    const downloadCV = () => {
        const a = document.createElement('a');
        a.download = 'GRUPO_TICONSA_CV.pdf';
        a.href = '/cv_.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <>
            <NavBar photo={'true'}>

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
                    className="bgGradient"
                >
                    <Carousel_ />
                    {/*<section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover">
                    <div className="container mx-auto">
                        <div className="flex justify-between gap-x-8">
                            <div>text</div>
                            <div>imagte</div>
                        </div>
                    <div className="icon md:flex relative left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                        <RiArrowDownSLine className='text-3xl' color="gray" />
                    </div>
                    </div>
    </section>*/}

                    <section className="_main container" id="#id">
                        <section className="section-5" id='about-me'>
                            <div className="mx-auto max-w-2xl lg:text-center">
                                <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Construimos experiencia, solidez y confianza</h2>
                            </div>
                            <Fade direction="down">
                                <section className="text-center">
                                    <h2 class="section-title" style={{ /*textTransform: 'uppercase'*/ }}>Sobre Nosotros <span className="text-primary-blue">GRUPO TICONSA<sup>®</sup></span></h2>
                                </section>
                            </Fade>
                            <div class="row-base row">
                                <div class="col-base col-sm-4 col-md-6 col-md-offset-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h3 class="col-about-title" style={{ textAlign: 'center' }}>Concreto, Prefabricado y <span className="text-primary-blue">Presforzado</span></h3>
                                    <div class="col-about-info">
                                        <p><strong>Ticonsa Inmobiliaria</strong>, <strong>Sociedad Anónima de Capital Variable</strong> (en lo sucesivo <strong>GRUPO TICONSA<sup>®</sup></strong>) en una empresa con <strong>50 años de experiencia desarrollando soluciones innovadoras</strong> que aportan valor agregado a los proyectos de nuestros clientes.</p>
                                        <p className={mobile && "text-center"}><strong>Cancún: </strong> (998) 892-3143 <br /> <strong>México: </strong>(55) 5484-8364<br /> <strong>Teotihuacán:</strong>(594) 956-1645</p>
                                        <p className={mobile && "text-center"}>👷 Grupo Ticonsa — 15 de Febrero de 1971</p>
                                    </div>
                                </div>
                                <div
                                    class="col-base col-about-img col-sm-6 col-md-offset-1"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        gap: 0.2,
                                    }}
                                >
                                    <img
                                        src={`/grua.jpg`}
                                        className="img-round"
                                    />
                                    <img
                                        src={`/1.jpg`}
                                        className="img-round"
                                    />
                                    <img
                                        src={`/ticonsa1.avif`}
                                        className="img-round"
                                    />
                                </div>
                            </div>
                        </section>

                        <div className="py-16 sm:py-24">
                            <div className="mx-auto max-w-7xl">
                                <div className="mx-auto text-center">
                                    <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Desde la Idea hasta la Realidad</h2>
                                    <Fade direction="down">
                                        <section className="text-center">
                                            <h2 class="section-title" style={{ /*textTransform: 'uppercase'*/ }}>Proceso Integral de  <span className="text-primary-blue">Producción de Prefabricados</span></h2>
                                        </section>
                                    </Fade>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        El proceso aborda cada fase esencial en la producción de prefabricados, desde la concepción inicial del proyecto hasta la conexión final de las unidades. Sumérgete en las etapas de planificación estratégica, ingeniería precisa, fabricación eficiente, logística de transporte y montaje in situ.
                                    </p>
                                </div>
                                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                        {features.map((feature) => (
                                            <div key={feature.name} className="relative pl-16">
                                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: color.primary }}>
                                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                                    </div>
                                                    {feature.name}
                                                </dt>
                                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                                <Button
                                    colorScheme="blue"
                                    bg={color.orange}
                                    rounded={5}
                                    color="white"
                                    //onClick={downloadCV}
                                    rightIcon={<div />}
                                    leftIcon={<div />}
                                    fontWeight={'bold'}
                                >
                                    Conozca más
                                </Button>
                            </div>
                        </div>
                        <section className="text-center">
                            <Fade direction="down">
                                <h3 class="col-about-title" style={{ marginTop: 30, textTransform: 'uppercase' }}>Presencia en <span className="text-primary-blue">todo México</span> y con proyectos <span className="text-primary-blue">destacados</span></h3>
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
                                                        {project_?.extra && <strong>[{project_?.extra}]<br /></strong>}
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

                    <div className='p-section-50' id="services">
                        <section className="_main container" >
                            <Stack>
                                <Stack direction={mobile ? 'column-reverse' : 'row-reverse'} style={{ paddingBottom: 40, paddingTop: 55 }}>
                                    <div class="col-base col-sm-6 col-md-offset-1" style={{ alignSelf: 'center', }}>
                                        <Stack style={{ justifyContent: 'center', /*paddingRight: 15*/ }}>

                                            <Stack flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                                                <CardSimple
                                                    title={'50'}
                                                    prefix="+"
                                                    descrip={'Años de experiencia, calidad y compromiso'}
                                                    icon={<RiBuilding2Line color={color.primary} fontSize={24} />}
                                                />
                                                <CardSimple
                                                    title={'200'}
                                                    prefix="+"
                                                    descrip={'Proyectos construidos en México y más'}
                                                    icon={<RiFolderChartLine color={color.primary} fontSize={24} />}
                                                />
                                            </Stack>
                                            <Stack flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                                                <CardSimple
                                                    title={'100'}
                                                    suffix="%"
                                                    descrip={'de clientes satisfechos'}
                                                    icon={<RiShakeHandsLine color={color.primary} fontSize={24} />}
                                                />
                                                <CardSimple
                                                    title={'1'}
                                                    prefix="#"
                                                    descrip={'La mejor opción en México'}
                                                    icon={<RiThumbUpLine color={color.primary} fontSize={24} />}
                                                />
                                            </Stack>
                                            {/*<Stack
                                                style={{ alignContent: 'center', paddingBottom: mobile ? 20 : 140, }}
                                            >
                                                <div class="col-about-info" style={{ textAlign: 'center' }}>
                                                    <p>Conoce nuestro trabajo descargando el Curriculum Vitae:</p>
                                                </div>
                                                <Stack
                                                    style={{ width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                                                >
                                                    <Button
                                                        colorScheme="blue"
                                                        bg={color.primary}
                                                        rounded={0}
                                                        color="white"
                                                        onClick={downloadCV}
                                                        leftIcon={
                                                            <div className="icon flex justify-center relative">
                                                                <RiArrowDownSLine className='text-3xl' color="white" />
                                                            </div>
                                                        }
                                                        _hover={{ bg: 'blue.500' }}>
                                                        Descargar CV
                                                        <div className="icon flex justify-center">
                                                            <RiArrowDownSLine className='text-3xl' color="white" />
                                                        </div>
                                                    </Button>
                                                </Stack>
                                                    </Stack>*/}
                                        </Stack>
                                    </div>
                                    <Stack justifyContent={'center'}>
                                        <h3 class="col-about-title" style={{ textAlign: mobile ? 'center' : 'left' /*marginTop: mobile ? 15 : 140,*/, marginBottom: 0 }}>Nuestra experiencia {!mobile && <br />} <span className="text-primary-blue">expresada en números</span></h3>
                                        <div class="col-about-info" style={{ textAlign: mobile ? 'center' : 'left' }}>
                                            <p>Ofrecemos soluciones prácticas e innovadoras a cada uno de nuestros clientes</p>
                                        </div>
                                    </Stack>
                                    {/*<div class="col-base" style={{ marginBottom: 20, marginTop: 20, display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src={`/imgs/1.jpg`}
                                            style={{ width: 500, height: mobile ? 350 : 500, objectFit: 'cover', }}
                                        />
                                                    </div>*/}
                                </Stack>
                            </Stack>
                        </section>
                    </div>



                    <section className="_main container" id="services">
                        <section className="text-center">
                            <Fade direction="down">
                                <h3 class="col-about-title" style={{ marginTop: 30, textTransform: 'uppercase' }}>Servicios que <span className="text-primary-blue">ofrecemos</span></h3>
                            </Fade>
                            <section className="d-flex justify-content-around align-items-center pb-5 flex-wrap" >
                                {items.map((item, key) =>
                                    <ServicesCard
                                        key={item.id}
                                        img={item.img}
                                        title={item.title}
                                        onPress={() => onPress(key)}
                                    />
                                )
                                }
                            </section>
                        </section>
                        {/*<CV />*/}
                    </section>


                </Box>
            </NavBar>
            <Modal
                show={show_}
                onHide={() => setShow_(false)}
                //fullscreen={true}
                size="lg"
            >
                <Modal.Header closeButton >
                    <Modal.Title>
                        Servicios que ofrecemos
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} /*data-bs-theme="dark"*/>
                        {items.map((item, key) =>
                            <Carousel.Item key={key}>
                                <div
                                    style={{ width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <img
                                        src={item?.img}
                                        style={{ height: '100%', width: '100%', objectFit: 'cover', }}
                                        alt={''}
                                    />
                                    <div className="text-modal-image">
                                        <p class="col-about-title-system text-shadow">{item.title.toUpperCase()}</p>
                                        <a href={`${item?.url}`}>
                                            <Button
                                                colorScheme="blue"
                                                bg={color.primary}
                                                rounded={0}
                                                color="white"
                                                //onClick={() => {}}
                                                _hover={{ bg: 'blue.500' }}>
                                                Ver más...
                                            </Button>
                                        </a>
                                    </div>
                                </div>

                            </Carousel.Item>
                        )}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Index