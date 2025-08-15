import NavBar from "../components/NavBar"
import items from '../assets/services_card.json'
import point from '../assets/projects_map.json'
import plants from '../assets/plantass.json'
import paths from '../assets/path_map.json'
import { useState, useRef } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Fade } from "react-awesome-reveal";
import {
    Stack,
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
import BGPoints from "../components/BGPoints"
import ModalCenter from "../components/ModalCenter";
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from 'react-router-dom';

const features_ = [
    {
        "id": 0,
        "img": "/imgs/004.jpg",
        "name": "SISTEMA PRETENSADO Y POSTENSADO",
        description: "Desarrollando tecnologías propias en prefabricación de trabes para puentes y viaductos elevados de hasta más de 300 toneladas.",
        icon: RiFolderChartLine,
        "url": "/prefabricado"
    },
    {
        "id": 0,
        "img": "/imgs/004.jpg",
        "name": "SISTEMA PRETENSADO Y POSTENSADO",
        description: "En nuestro complejo industrial fabricamos soluciones constructivas estandarizadas que revolucionan la ejecución de obras.",
        icon: RiFolderChartLine,
        "url": "/productos"
    },
    /*{
        "id": 7,
        "img": "/foro-sol.jpg",
        "name": "PROYECTOS Y SISTEMAS ARQUITECTÓNICOS",
        "description": "Nos encargamos de la estructura base que dan fuerza a un gran número de proyectos.",
        icon: RiFolderUserLine,
        "url": "/infraestructura"
    },*/
    {
        "id": 1,
        "img": "/imgs/005.jpg",
        "name": "DISEÑO ESTRUCTURAL",
        "description": "Planeamos y diseñamos las soluciones estructurales que nuestros clientes necesitan.",
        icon: RiBuilding2Line,
        "url": "/ingenieria"
    },
    {
        "id": 3,
        "img": "/services_card5.jpg",
        "name": "FABRICACIÓN DE ELEMENTOS DE CONCRETO",
        "description": "Nuestros procesos de fabricación cuentan con el Certificado nivel Oro de Calidad y Sustentabilidad que el ONNCCE avala. ",
        icon: RiShakeHandsLine,
        "url": "/fabricacion"
    },
    {
        "id": 4,
        "img": "/imgs/002.jpg",
        "name": "TRANSPORTE Y MONTAJE DE ELEMENTOS DE CONCRETO",
        "description": "Nuestros procedimientos para el transporte y montaje de los elementos de concreto cuentan con el Certificado Nivel Oro de Calidad Seguridad que el ONNCCE avala.",
        icon: RiThumbUpLine,
        "url": "/transporte"
    },

    {
        "id": 2,
        "img": "/imgs/people.jpeg",
        "name": "DIRECCIÓN Y SUPERVISIÓN DE OBRAS",
        "description": "La supervisión es una de las funciones administrativas de gran valor e importancia que realizamos para que se cumplan en tiempo y forma los objetivos del proyecto. ",
        icon: RiNurseLine,
        "url": "/supervision"
    },
    {
        "id": 5,
        "img": "/imgs/002.jpg",
        "name": "VALOR AGREGADO: MEJORA CONTÍNUA",
        "description": "Para GRUPO TICONSA el personal es la pieza fundamental, ya que son los ejecutores de los proyectos. Por ello Grupo TICONSA cuenta con un programa de capacitación para todo su personal, sobre todo aquellos que intervienen en la ejecución de trabajos directamente relacionados con la obra.",
        icon: RiFolderChartLine,
        "url": ""
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

    const navigate = useNavigate();

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
        //setIndex(key);
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
            <NavBar photo={true} certificates={true} mobile={mobile}>
                <BGPoints>
                    <Carousel_ handleVideo={handleVideo} />
                    <section className="_main container" id="#id">
                        <section className="section-5 pl-2 pr-2" id='about-me'>
                            <div class="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg w-full justify-between mt-4">
                                <div class="md:w-1/3">
                                    <img
                                        src={`/ceo.png`}
                                        alt="Imagen descriptiva"
                                        class="w-full h-full object-cover"
                                    />
                                </div>
                                <div class="md:w-2/3 p-4 self-center cursor-crosshair" onClick={handleShow_}>
                                    <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Mensaje de nuestro Socio Fundador</h2>
                                    <div className="flex flex-row gap-1">
                                        <span class="flex items-center text-white text-xs font-semibold p-1 px-2 rounded-full" style={{ backgroundColor: color.primary }}>
                                            Trabajo intenso
                                        </span>
                                        <span class="flex items-center text-white text-xs font-semibold p-1 px-2 rounded-full" style={{ backgroundColor: color.primary }}>
                                            Orgullo
                                        </span>
                                        <span class="flex items-center text-white text-xs font-semibold p-1 px-2 rounded-full" style={{ backgroundColor: color.primary }}>
                                            Vanguardia
                                        </span>
                                    </div>
                                    <p class="text-black italic mt-3">
                                        "Después de tantos años de trabajo intenso, continuo, creativo y exitoso,
                                        tenemos la enorme satisfacción de poder mostrar a nuestros clientes un
                                        gran número de proyectos que marcaron rutas en el desarrollo de la industria:
                                        la industria del concreto prefabricado y presforzado en México."
                                    </p>
                                    <p class="text-gray-700 font-bold leading-[0px] mt-5">
                                        Ing. Aurelio Zugasti De la Muela †
                                    </p>
                                    <p class="text-gray-500">
                                        Socio Fundador de Grupo Ticonsa<sup>®</sup>
                                    </p>
                                    <p class="underline decoration-gray-500 text-gray-500 cursor-crosshair" onClick={handleShow_}>
                                        Lee la nota completa
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="section-5" id='about-me'>
                            <div className="mx-auto max-w-2xl lg:text-center mt-10">
                                <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Construimos experiencia, solidez y confianza</h2>
                            </div>
                            <Fade direction="down">
                                <section className="text-center">
                                    <h2 className="section-title">Sobre Nosotros</h2>
                                </section>
                            </Fade>
                            <div className="row-base row">
                                <div className="col-base col-sm-6 col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h3 className="col-about-title" style={{ textAlign: 'center' }}> Estructuras prefabricadas y <span className="text-primary-blue">presforzadas</span></h3>
                                    <div className="col-about-info">
                                        <p><strong>Grupo TICONSA<sup>®</sup></strong>es un grupo de empresas cuyo origen se remonta al
                                            15 de febrero de 1971, y que durante todos sus años de existencia ha
                                            desarrollado soluciones innovadoras que aportan valor agregado a
                                            los proyectos de sus clientes.
                                        </p>
                                        <p className={mobile && "text-center"}><strong>Teotihuacán – Hidalgo – Cancún</strong></p>
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

                        {/*<div className="py-16 sm:py-24">
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
                        </div>*/}
                    </section>

                    <div class='p-section-50 pt-15' id="services">
                        <section className="_main container" >
                            <Stack style={{ marginTop: 55 }}>
                                <Stack direction={mobile ? 'column-reverse' : 'row-reverse'} style={{ paddingBottom: 40, paddingTop: 55 }}>
                                    <div className="col-base col-sm-6 col-md-offset-1" style={{ alignSelf: 'center', }}>
                                        <Stack style={{ justifyContent: 'center', /*paddingRight: 15*/ }}>
                                            <Stack flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                                                <CardSimple
                                                    title={'1'}
                                                    prefix="#"
                                                    descrip={'La mejor opción en México'}
                                                    icon={<RiThumbUpLine color={color.primary} fontSize={24} />}
                                                />
                                                <CardSimple
                                                    title={'100'}
                                                    suffix="%"
                                                    descrip={'de clientes satisfechos'}
                                                    icon={<RiShakeHandsLine color={color.primary} fontSize={24} />}
                                                />
                                            </Stack>
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

                    <section className={`mt-20 ${mobile ? "" : "_main container"}`} id="map">
                        <section className="text-center">
                            <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Llevamos nuestros proyectos destacados a una</h2>
                            <Fade direction="down">
                                <section className="text-center">
                                    <h2 className="section-title">Presencia en <span className="text-primary-blue">Latinoamérica</span></h2>
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
                                            placement={'auto'}
                                            overlay={
                                                <Popover id={`popover-positioned-bottom`}>
                                                    <Popover.Header as="h3">{item?.name}</Popover.Header>
                                                    <Popover.Body>
                                                        {project_?.extra && <strong>[{project_?.extra}]<br /></strong>}
                                                        <div dangerouslySetInnerHTML={{ __html: project_?.name }} />
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <div className="circle" style={{ top: project_?.position?.top, left: project_?.position?.left, }} onClick={handleClick} />
                                        </OverlayTrigger>
                                    ))
                                )}
                                {plants.map((item) =>
                                    item?.projects.map((project_) => (
                                        <OverlayTrigger
                                            trigger='click'
                                            placement={'auto'}
                                            overlay={
                                                <Popover id={`popover-positioned-bottom`} className="popover-maya" >
                                                    <Popover.Header
                                                        as="h3" className="selector"
                                                        onClick={() => {
                                                            navigate(`${project_?.url}`);
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        }}
                                                    >{item?.name}</Popover.Header>
                                                    <Popover.Body className="iframe-maya-2">
                                                        <img
                                                            src={item?.img}
                                                            className="w-[294px] h-[155px]"
                                                            loading="lazy"
                                                        />
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <img
                                                src="/logo-round.png"
                                                alt="Ícono del proyecto"
                                                className="absolute w-6 h-6 rounded-full cursor-pointer shadow-lg"
                                                style={{
                                                    top: project_?.position?.top,
                                                    left: project_?.position?.left
                                                }}
                                                //onClick={handleClick}
                                                loading="lazy"
                                            />
                                        </OverlayTrigger>
                                    ))
                                )}

                                {paths.map((item) =>
                                    item?.projects.map((project_) => (
                                        <OverlayTrigger
                                            trigger='click'
                                            placement={'auto'}
                                            overlay={
                                                <Popover id={`popover-positioned-bottom`} className="popover-maya">
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
                    <section id="features">
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
                                                        <dd className="inline">
                                                            {feature.description} {feature?.url && <a href={feature.url} style={{ fontWeight: 'bold', color: color.orange }}>Leer más...</a>}
                                                        </dd>
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
                    </section>

                </BGPoints>
            </NavBar>
            <ModalCenter
                show={show_}
                onHide={() => setShow_(false)}
            //scrollable={true}
            >
                <div class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-[0.5rem] shadow-2xl">
                    <div class="relative h-[125px] bg-gray-800">
                        <img
                            src={'/img_system/2.jpg'}
                            alt="Banner corporativo"
                            class="w-full h-[125px] object-cover opacity-70"
                        />
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/70"></div>
                        <div class="h-1 bg-gradient-to-r from-blue-400 to-gray-600 absolute bottom-0 w-full"></div>
                    </div>

                    <div class="absolute left-1/2 transform -translate-x-1/2 top-[25px]">
                        <div class="relative">
                            <img
                                src={`/ceo-2.png`}
                                alt="Socio Fundador"
                                class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl object-cover"
                            />
                            <div class="absolute inset-0 rounded-full border-2 border-gray-300 -m-1.5"></div>
                        </div>
                    </div>

                    <div class="bg-white p-8 pt-0">
                        <div class="text-gray-700 text-[15rem] font-serif leading-none -mb-0">
                            <span>“</span>
                        </div>
                        <div class="text-gray-700 leading-relaxed text-justify relative -mt-[9rem]">
                            <p>&nbsp; &nbsp; &nbsp; &nbsp; Hoy, al echar la vista atrás para recorrer nuevamente nuestra historia, <span class="underline decoration-blue-400">
                                sentimos el legítimo orgullo</span> de quien está plenamente satisfecho por haber cumplido a cabalidad, como hombres y mujeres, como
                                profesionistas y como mexicanos con los propósitos que nos llevaron a constituir, el 15 de febrero de
                                1971, la empresa <span class="font-bold text-blue-600">“Técnicas Internacionales de Construcción, S.A. de C.V.” (TICONSA)</span>, cuya primera
                                planta fue instalada en terrenos aledaños a la “Ciudad donde los Hombres se convierten en Dioses”:
                                Teotihuacán. Ciudad milenaria que desde entonces nos identifica como empresa.</p>
                            <p>Después de tantos años de <span class="font-bold text-blue-600">trabajo intenso, continuo, creativo y exitoso</span>, aunque no pocas veces
                                desalentador, tenemos la enorme satisfacción de poder mostrar a nuestros <span class="underline decoration-blue-400">clientes, colaboradores y
                                    amigos,</span> las realizaciones de un gran número de proyectos que marcaron, muchos de ellos, nuevas
                                rutas en el desarrollo de la industria de la cual formamos parte:
                                <span class="font-bold text-blue-600"> la industria del concreto prefabricado y presforzado en México.</span></p>
                            <p>En muchos aspectos <span class="underline decoration-blue-400">hemos desarrollado nuestra propia tecnología</span>, dentro de la cual hemos obtenido
                                diversas patentes que nos permiten ofrecer <span class="font-bold text-blue-600">técnicas y productos exclusivos y de vanguardia en
                                    México y en el extranjero</span>. Una de dichas patentes, la que tal vez ha tenido mayor difusión es la
                                de <span class="font-bold text-blue-600">“mesas portátiles para pretensar a pie de obra”</span>, de la cual hemos otorgado licencia temporal de uso a
                                diversas empresas, pero cuya utilización queda limitada por los términos de la propia patente.</p>
                            <p>Toda esta labor se hizo posible gracias a la participación y entrega de hombres y mujeres
                                que fueron y son hoy parte de nuestro grupo en todos los niveles, desde socios, directivos, personal
                                técnico, administrativo y operativo dentro de los que, hoy en día, se cuentan los hijos y aún los nietos de
                                quienes fueron los iniciadores de la empresa.</p>
                            <p>Nuestro agradecimiento a todos ellos, pero, por encima de todo, gracias a Dios, que siempre, en todo
                                momento, ha guiado nuestros pasos.<span className="font-serif leading-none font-bold">”</span>
                            </p>

                        </div>

                        <div class="mt-12 text-right">
                            <p class="text-gray-800 font-bold text-xl leading-[0]">Ing. Aurelio Zugasti De la Muela †</p>
                            <p class="text-gray-500">Socio Fundador</p>
                        </div>
                    </div>
                </div>
            </ModalCenter>

            <ModalCenter
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <iframe
                    height="480px"
                    width="100%"
                    src="https://www.youtube.com/embed/BoebgFpWbBY?rel=0"
                    title="Centro Comercial Tlalnepantla"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    style={{ borderRadius: 6 }}
                />
            </ModalCenter>
        </>
    )
}

export default Index;