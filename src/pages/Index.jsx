import NavBar from "../components/NavBar"
import items from '../assets/services_card.json'
import point from '../assets/projects_map.json'
import paths from '../assets/path_map.json'


import { useState, useRef } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import { Fade } from "react-awesome-reveal";

import {
    Stack,
    Text,
    useBreakpointValue,
    Button
} from '@chakra-ui/react';

import {
    Image,
} from '@chakra-ui/react';
import color from "../color";
import CardSimple from "../components/CardSimple"
import { Carousel } from "react-bootstrap";

import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine } from "react-icons/ri";

import Carousel_ from "../components/Carousel_"
import Modal from 'react-bootstrap/Modal';
import BGPoints from "../components/BGPoints"
import ModalCenter from "../components/ModalCenter";

const features_ = [
    {
        "id": 4,
        "img": "/imgs/004.jpg",
        "name": "Sistema pretensado y postensado",
        description: "Desarrollando tecnologías propias en prefabricación de trabes para puentes y viaductos elevados de hasta más de 300 toneladas.",
        icon: RiFolderChartLine,
        "url": "/infraestructura"
    },
    {
        "id": 7,
        "img": "/foro-sol.jpg",
        "name": "Proyectos y Sistemas arquitectónicos",
        "description": "Nos encargamos de la estructura base que dan fuerza a un gran número de proyectos.",
        icon: RiFolderUserLine,
        "url": "/infraestructura"
    },
    {
        "id": 5,
        "img": "/imgs/005.jpg",
        "name": "Estructuración y diseño",
        "description": "Diseñamos y planificamos edificios e inmuebles de acuerdo a las necesidades.",
        icon: RiBuilding2Line,
        "url": "/edificacion"
    },
    {
        "id": 6,
        "img": "/imgs/people.jpeg",
        "name": "Supervisión y dirección de obras",
        "description": "La supervisamos de las obras es de gran valor e importancia, cumpliendo los objetivos.",
        icon: RiNurseLine,
        "url": "/supervision"
    },
    {
        "id": 8,
        "img": "/services_card5.jpg",
        "name": "Fabricación y montaje de elementos",
        "description": "Una vez realizada la fabricación, ejecutamos el montaje de las piezas con toda precisión.",
        icon: RiShakeHandsLine,
        "url": "/montaje"
    },
    {
        "id": 9,
        "img": "/imgs/002.jpg",
        "name": "Transporte de elementos de concreto",
        "description": "Contamos con el mejor equipo de Transporte para lograr una eficaz ejecución.",
        icon: RiThumbUpLine,
        "url": "/transporte"
    }
]

const features = [
    {
        name: 'Proceso Conceptual',
        description: 'Se desarrolla la visión detallada y el concepto general del proyecto.',
        icon: RiBuilding2Line,
    },
    {
        name: 'Planeación',
        description: 'Implica la elaboración de un plan estratégico que abarca aspectos logísticos, financieros y temporales.',
        icon: RiFolderUserLine,
    },
    {
        name: 'Ingeniería de Detalle',
        description: 'Se traducen los conceptos y planes generales en especificaciones técnicas y detalles precisos.',
        icon: RiFolderChartLine,
    },
    {
        name: 'Fabricación',
        description: 'La fabricación es el proceso central donde los componentes prefabricados toman forma. ',
        icon: RiNurseLine,
    },
    {
        name: 'Transporte y Montaje',
        description: 'Una vez que las unidades prefabricadas han sido fabricadas, se inicia la fase de transporte hacia el lugar de montaje.',
        icon: RiShakeHandsLine,
    },
    {
        name: 'Conexiones',
        description: 'La fase de conexiones es crítica para asegurar la estabilidad y la integridad estructural del proyecto.',
        icon: RiThumbUpLine,
    },
]

const success = [
    {
        name: 'Tren Maya',
        description: 'Pruebas del Tren Maya en la Estación Edzna',
        img: 'imgs/005.jpg',
    },
    {
        name: 'Más proyectos',
        description: 'Descubre nuestros proyectos',
        img: 'img_maya/2.jpg',
    },
    {
        name: 'Soluciones',
        description: 'Elementos de un Sistema de edificación',
        img: 'projects/1.jpg',
    },
    {
        name: 'Videos',
        description: 'Conoce el potencial de nuestra oferta',
        img: 'imgs/people.jpeg',
    }
]

const Index = () => {

    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const handleVideo = () => setModalShow(!modalShow)
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
            <NavBar photo={true} mobile={mobile}>
                <BGPoints>
                    <Carousel_ handleVideo={handleVideo} />
                    <section className="_main container" id="#id">
                        <section className="section-5" id='about-me'>
                            <div className="mx-auto max-w-2xl lg:text-center">
                                <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Construimos experiencia, solidez y confianza</h2>
                            </div>
                            <Fade direction="down">
                                <section className="text-center">
                                    <h2 className="section-title">Sobre Nosotros <span className="text-primary-blue">GRUPO TICONSA<sup>®</sup></span></h2>
                                </section>
                            </Fade>
                            <div className="row-base row">
                                <div className="col-base col-sm-6 col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h3 className="col-about-title" style={{ textAlign: 'center' }}>Concreto, Prefabricado y <span className="text-primary-blue">Presforzado</span></h3>
                                    <div className="col-about-info">
                                        <p><strong>Ticonsa Inmobiliaria</strong>, <strong>Sociedad Anónima de Capital Variable</strong> (en lo sucesivo <strong>GRUPO TICONSA<sup>®</sup></strong>) en una empresa con <strong>50 años de experiencia desarrollando soluciones innovadoras</strong> que aportan valor agregado a los proyectos de nuestros clientes.</p>
                                        <p className={mobile && "text-center"}><strong>Cancún: </strong> (998) 892-3143 <br /> <strong>México: </strong>(55) 5484-8355<br /> <strong>Teotihuacán: </strong>(594) 956-1645</p>
                                        <p className={mobile && "text-center"}><strong>Grupo Ticonsa </strong> - Desde el 15 de febrero de 1971</p>
                                    </div>
                                </div>
                                <div className="col-base col-sm-6 col-md-6 content-img-round"
                                /*style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    gap: 0.2,
                                }}*/
                                >
                                    <img src={`/grua.jpg`} className="img-round" />
                                    <img src={`/1.jpg`} className="img-round" />
                                    <img src={`/ticonsa1.avif`} className="img-round" />
                                </div>
                            </div>
                        </section>

                        <div className="py-16 sm:py-24">
                            <div className="mx-auto max-w-7xl">
                                <div className="mx-auto text-center">
                                    <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Desde la Idea hasta la Realidad</h2>
                                    <Fade direction="down">
                                        <section className="text-center">
                                            <h2 className="section-title" >Proceso Integral de  <span className="text-primary-blue">Producción de Prefabricados</span></h2>
                                        </section>
                                    </Fade>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        El proceso aborda cada fase esencial en la producción de prefabricados, desde la concepción inicial del proyecto hasta la conexión final de las unidades. Sumérgete en las etapas de planificación estratégica, ingeniería precisa, fabricación eficiente, logística de transporte y montaje in situ.
                                    </p>
                                </div>
                                <div className="mx-auto mt-10 max-w-2xl lg:max-w-4xl">
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
                                <div className="center">
                                    <Button
                                        colorScheme="blue"
                                        bg={color.orange}
                                        rounded={5}
                                        color="white"
                                        onClick={() => window.location.href = '/prefabricado'}
                                        rightIcon={<div />}
                                        leftIcon={<div />}
                                        fontWeight={'bold'}
                                        title="Redirigir a Sección de Prefabricado"
                                    >
                                        Conozca más
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={`${mobile ? "" : "_main container"}`}>
                        <section className="text-center">
                            <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Llevamos nuestros proyectos destacados a una</h2>
                            <Fade direction="down">
                                <section className="text-center">
                                    <h2 className="section-title" >Presencia en <span className="text-primary-blue">todo México</span></h2>
                                </section>
                            </Fade>
                            <div className="content-circle" ref={ref}>
                                <Image
                                    borderRadius="lg"
                                    src='/mapa.png'
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
                                            <div className="circle" style={{ top: project_?.position?.top, left: project_?.position?.left, }} onClick={handleClick} />
                                        </OverlayTrigger>
                                    ))
                                )}
                                {paths.map((item) =>
                                    item?.projects.map((project_) => (
                                        <OverlayTrigger
                                            trigger='click'
                                            placement={'bottom'}
                                            overlay={
                                                <Popover id={`popover-positioned-bottom`}>
                                                    <Popover.Header as="h3">{item?.name}</Popover.Header>
                                                    <Popover.Body>
                                                        <iframe width="274" height="155" className="iframe-maya" src="https://www.youtube.com/embed/h-tEedJL6Dc" title="Estación Edzna Tren Maya Grupo Ticonsa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                        <strong>{project_?.name}<br /></strong>
                                                        {project_?.extra}
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <div className={`path ${mobile ? "path-web" : "path-mov"}`} onClick={handleClick} />
                                        </OverlayTrigger>
                                    ))
                                )}
                            </div>
                        </section>
                    </section>

                    <div className='p-section-50' id="services">
                        <section className="_main container" >
                            <Stack>
                                <Stack direction={mobile ? 'column-reverse' : 'row-reverse'} style={{ paddingBottom: 40, paddingTop: 55 }}>
                                    <div className="col-base col-sm-6 col-md-offset-1" style={{ alignSelf: 'center', }}>
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
                                                    descrip={'de clientes muy satisfechos'}
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
                                                <div className="col-about-info" style={{ textAlign: 'center' }}>
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
                                        <h3 className="col-about-title" style={{ textAlign: mobile ? 'center' : 'left' /*marginTop: mobile ? 15 : 140,*/, marginBottom: 0 }}>Nuestra experiencia {!mobile && <br />} <span className="text-primary-blue">expresada en números</span></h3>
                                        <div className="col-about-info" style={{ textAlign: mobile ? 'center' : 'left' }}>
                                            <p>Ofrecemos soluciones prácticas e innovadoras a cada uno de nuestros clientes</p>
                                        </div>
                                    </Stack>
                                    {/*<div className="col-base" style={{ marginBottom: 20, marginTop: 20, display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src={`/imgs/1.jpg`}
                                            style={{ width: 500, height: mobile ? 350 : 500, objectFit: 'cover', }}
                                        />
                                                    </div>*/}
                                </Stack>
                            </Stack>
                        </section>
                    </div>



                    {/*<section className="_main container" id="services">
                        <section className="text-center">
                            <Fade direction="down">
                                <h3 className="col-about-title" style={{ marginTop: 30, textTransform: 'uppercase' }}>Servicios que <span className="text-primary-blue">ofrecemos</span></h3>
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
                            </section>*/}
                    <div className="overflow-hidden py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                <div className="lg:pr-8 lg:pt-4">
                                    <div className="lg:max-w-lg">
                                        <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>La forma de destacarnos</h2>
                                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Productos y Servicios</p>
                                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                            {features_.map((feature) => (
                                                <div key={feature.name} className="relative pl-9">
                                                    <dt className="inline font-semibold text-gray-900">
                                                        <feature.icon className="absolute left-1 top-1 h-5 w-5" color={color.primary} aria-hidden="true" />
                                                        {feature.name}
                                                    </dt><br />
                                                    <dd className="inline">{feature.description}</dd> <a href={feature.url} style={{ fontWeight: 'bold', color: color.orange }}>Ver más...</a>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                                <img
                                    src={"/imgs/collage.png"}
                                    className="w-[48rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                    width={2432}
                                    height={1442}
                                    style={{ borderRadius: '1.5em' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/*<main className="main-area">
                        <div className="centered">
                            <h4 className="cards-title">Descubre nuestras iniciativas</h4>
                            <section className="cards">
                                {success.map((item, index) => (
                                    <article className="card" key={`${item.name}-success-${index}`}>
                                        <a href="#">
                                            <picture className="thumbnail">
                                                <img
                                                    className="img-cards"
                                                    src={item.img}
                                                    alt={item.name}
                                                />
                                            </picture>
                                            <div className="card-content">
                                                <h2>{item.name}</h2>
                                                <p>{item.description}</p>
                                            </div>
                                        </a>
                                    </article>
                                ))
                                }
                            </section>
                        </div>
                            </main>*/}
                </BGPoints>
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
                                        <p className="col-about-title-system text-shadow">{item.title.toUpperCase()}</p>
                                        <a href={`${item?.url}`}>
                                            <Button
                                                colorScheme="blue"
                                                bg={color.primary}
                                                rounded={0}
                                                color="white"
                                                //onClick={() => {}}
                                                _hover={{ bg: 'blue.500' }}
                                                title="Redirigir a Sección de Prefabricado"
                                            >
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
            <ModalCenter
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Index;