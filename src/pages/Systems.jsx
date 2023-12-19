import {
    useBreakpointValue,
} from "@chakra-ui/react"
import CarouselStatic from "../components/CarouselStatic"
import { Carousel } from "react-bootstrap";
import NavBar from "../components/NavBar"
import ServicesCard from "../components/ServicesCard";
import items from '../assets/systems.json';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Chart from "react-apexcharts";

import { Fade } from "react-awesome-reveal";
import BGPoints from "../components/BGPoints";
import color from "../color";


import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine } from "react-icons/ri";

const features_ = [
    {
        "id": 4,
        "name": "A diferencia de los sistemas convencionales",
        description: "En el Sistema de Prefabricado los elementos estructurales se fabrican previamente en plantas de producción. Después de un riguroso control de calidad en el proceso de fabricación, las piezas se transportan para colocarlas en el lugar de la obra, abatiendo en forma considerable el tiempo de construcción.",
        icon: RiFolderChartLine,
    },
    {
        "id": 7,
        "name": "Técnicas de Presfuerzo",
        "description": "Una característica de este sistema es que pueden salvar grandes claros con elementos ligeros. Esto se logra mediante la técnica del Presfuerzo, que consiste en aplicar una fuerza de tensión al acero de presfuerzo (cables o torones) antes de iniciar el colado, logrando incrementar la resistencia y mejorar el comportamiento estructural de los elementos.",
        icon: RiFolderUserLine,
    },
    {
        "id": 7,
        "name": "Ventajas",
        "description": "Conoce las ventajas de la Construcción Industrializada con Estructuras y Paneles Prefabricados a diferencia de la Construcción en sitio.",
        icon: RiThumbUpLine,
        "url": "/prefabricado#features"
    },
];

const features = [
    {
        name: 'Proceso Conceptual',
        description: 'En esta etapa inicial del proceso de producción de prefabricados, se desarrolla la visión y el concepto general del proyecto. Se definen los objetivos, requisitos y especificaciones básicas. Aquí, los equipos de diseño y planificación colaboran para establecer la viabilidad del proyecto y explorar diversas opciones creativas y técnicas.',
        icon: RiBuilding2Line,
    },
    {
        name: 'Planeación',
        description: 'La fase de planeación implica la elaboración detallada de un plan estratégico que abarca aspectos logísticos, financieros y temporales. Se determinan los recursos necesarios, se establecen los plazos y se definen los hitos clave. Además, se lleva a cabo una evaluación de riesgos para anticipar posibles desafíos y se elabora un plan de contingencia.',
        icon: RiFolderUserLine,
    },
    {
        name: 'Ingeniería de Detalle',
        description: 'Durante esta etapa, se traducen los conceptos y planes generales en especificaciones técnicas y detalles precisos. Los ingenieros elaboran planos detallados, calculan las cargas estructurales, diseñan conexiones y seleccionan los materiales específicos que se utilizarán en la fabricación. La precisión en esta fase es crucial para garantizar la calidad y la seguridad del producto final.',
        icon: RiFolderChartLine,
    },
    {
        name: 'Fabricación',
        description: 'La fabricación es el proceso central donde los componentes prefabricados toman forma. Se utilizan los materiales seleccionados según las especificaciones de ingeniería para construir las unidades prefabricadas. La maquinaria especializada y el personal altamente capacitado trabajan en conjunto para garantizar la precisión y la calidad del producto, mientras se siguen estrictamente los estándares y normativas establecidos.',
        icon: RiNurseLine,
    },
    {
        name: 'Transporte y Montaje',
        description: 'Una vez que las unidades prefabricadas han sido fabricadas, se inicia la fase de transporte hacia el lugar de montaje. Este paso implica la logística de movilizar las unidades desde la planta de fabricación hasta el sitio de construcción. La coordinación precisa y eficiente es esencial para garantizar que todas las piezas lleguen en el momento adecuado y en condiciones óptimas. El montaje en el lugar implica ensamblar las unidades prefabricadas según el diseño previamente establecido.',
        icon: RiShakeHandsLine,
    },
    {
        name: 'Conexiones',
        description: 'La fase de conexiones es crítica para asegurar la estabilidad y la integridad estructural del proyecto. Aquí, se lleva a cabo la unión de las diferentes unidades prefabricadas para formar la estructura completa. Las conexiones pueden incluir soldaduras, pernos u otros métodos según las especificaciones de ingeniería. Se realizan pruebas de carga y verificaciones de calidad para asegurar que todas las conexiones sean sólidas y cumplan con los estándares requeridos.',
        icon: RiThumbUpLine,
    },
]

const process = [
    {
        name: 'Proceso Conceptual',
        description: 'En esta etapa inicial del proceso de producción de prefabricados, se desarrolla la visión y el concepto general del proyecto. Se definen los objetivos, requisitos y especificaciones básicas. Aquí, los equipos de diseño y planificación colaboran para establecer la viabilidad del proyecto y explorar diversas opciones creativas y técnicas.',
        icon: '/icons/concepto.png',
    },
    {
        name: 'Planeación',
        description: 'La fase de planeación implica la elaboración detallada de un plan estratégico que abarca aspectos logísticos, financieros y temporales. Se determinan los recursos necesarios, se establecen los plazos y se definen los hitos clave. Además, se lleva a cabo una evaluación de riesgos para anticipar posibles desafíos y se elabora un plan de contingencia.',
        icon: '/icons/plan.png',
    },
    {
        name: 'Ingeniería de Detalle',
        description: 'Durante esta etapa, se traducen los conceptos y planes generales en especificaciones técnicas y detalles precisos. Los ingenieros elaboran planos detallados, calculan las cargas estructurales, diseñan conexiones y seleccionan los materiales específicos que se utilizarán en la fabricación. La precisión en esta fase es crucial para garantizar la calidad y la seguridad del producto final.',
        icon: '/icons/ingenieria.png',
    },
    {
        name: 'Fabricación',
        description: 'La fabricación es el proceso central donde los componentes prefabricados toman forma. Se utilizan los materiales seleccionados según las especificaciones de ingeniería para construir las unidades prefabricadas. La maquinaria especializada y el personal altamente capacitado trabajan en conjunto para garantizar la precisión y la calidad del producto, mientras se siguen estrictamente los estándares y normativas establecidos.',
        icon: '/icons/fabricacion.png',
    },
    {
        name: 'Transporte y Montaje',
        description: 'Una vez que las unidades prefabricadas han sido fabricadas, se inicia la fase de transporte hacia el lugar de montaje. Este paso implica la logística de movilizar las unidades desde la planta de fabricación hasta el sitio de construcción. La coordinación precisa y eficiente es esencial para garantizar que todas las piezas lleguen en el momento adecuado y en condiciones óptimas. El montaje en el lugar implica ensamblar las unidades prefabricadas según el diseño previamente establecido.',
        icon: '/icons/montaje.png',
    },
    {
        name: 'Conexiones',
        description: 'La fase de conexiones es crítica para asegurar la estabilidad y la integridad estructural del proyecto. Aquí, se lleva a cabo la unión de las diferentes unidades prefabricadas para formar la estructura completa. Las conexiones pueden incluir soldaduras, pernos u otros métodos según las especificaciones de ingeniería. Se realizan pruebas de carga y verificaciones de calidad para asegurar que todas las conexiones sean sólidas y cumplan con los estándares requeridos.',
        icon: '/icons/conexion.png',
    },
]

const pros = [
    "1. Disminución en el tiempo de construcción hasta del 50%.",
    "2. Ahorro significativo en costos de ingeniería estructural ya que la ingeniería es desarrollada por nosotros contando con ingenieros altamente calificados en la materia.",
    "3. Seguridad en infraestructura y estructura garantizada.",
    "4. Redución del impacto ambiental en sitio ya que se requiere menor número de personal obrero comparado con los sistemas tradicionales.  Se reduce hasta un 80%.",
    "5. Se aligera la estructura permitiendo en ocasiones una reducción en costos en cimentación.",
    "6. Controles de calidad más estrictos gracias al proceso industrializado.",
    "7. Durabilidad de la estructura por uso de concretos de alta resistencia.",
    "8. Se elimina el riesgo debido a problemas obrero-patronales, es decir cuotas sindicales, seguro social, etc. ya que el personal depende directamente de nosotros.",
    "9. Se reducen costos de supervisión ya que se simplifican los procesos y control de obra.",
    "10. Versatilidad en soluciones arquitectónicas ya que se desarrolla la ingeniería adaptada al proyecto."
]


const options = {
    series: [
        {
            name: "Sistema Tradicional",
            data: [100, 100, 100]
        },
        {
            name: "Sistema Prefabricado",
            data: [30, 50, 70]
        }
    ],
    plotOptions: {
        radar: {
            polygons: {
                strokeColors: '#e9e9e9',
                fill: {
                    colors: ['#f8f8f8', '#fff']
                }
            }
        }
    },
    title: {
        text: 'Tiempos estimados en cada Sistema'
    },
    stroke: {
        show: true,
        width: 2,
        colors: [],
        dashArray: 0
    },
    markers: {
        size: 5,
        hover: {
            size: 10
        }
    },
    labels: [
        'Tiempo',
        'Materiales',
        'Mano de obra',
    ],
    dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            borderRadius: 2,
        }
    },
}

const Systems = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const [index, setIndex] = useState(0);

    const onPress = (key) => {
        setIndex(key);
        handleShow()
    }

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);
    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            <NavBar photo={true} mobile={mobile}>
                <BGPoints>
                    <CarouselStatic names={[1, 2, 3]} folder='img_system' />
                    <section className="_main container">
                        <div className="row-base row">
                            <section className="text-center">
                                <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Estructuras Prefabricadas de Concreto, Fachadas de Concreto Arquitectónico y Trabes de Concreto Presforzado</h2>
                                <Fade direction="down">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sistema de prefabricado y Desarrollo Multi T</p>
                                </Fade>
                            </section>
                        </div>
                    </section>
                    <div className="overflow-hidden py-10">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                <div className="lg:pr-8 lg:pt-4">
                                    <div className="lg:max-w-lg">
                                        <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Proceso constructivo</h2>
                                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sistema de prefabricado</p>
                                        <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                            {features_.map((feature) => (
                                                <div key={feature.name} className="relative pl-9">
                                                    <dt className="inline font-semibold text-gray-900">
                                                        <feature.icon className="absolute left-1 top-1 h-5 w-5" color={color.primary} aria-hidden="true" />
                                                        {feature.name}
                                                    </dt><br />
                                                    <dd className="inline">{feature.description}</dd> {feature.url && <a href={feature.url} style={{ fontWeight: 'bold', color: color.orange }}>Leer más...</a>}
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                                {/*<img
                                    src="/imgs/collage.png"
                                    className="w-[48rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                    width={2432}
                                    height={1442}
                                    style={{ borderRadius: '1.5em' }}
                                            />*/}
                                <div>
                                    <div className="diff aspect-[16/8] w-[48rem] max-w-none ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" style={{ borderRadius: '8px' }}>
                                        <div className="diff-item-1">
                                            <img alt="daisy" src="/metro-plano.jpg" />
                                        </div>
                                        <div className="diff-item-2">
                                            <img alt="daisy" src="/metro-real.jpg" />
                                        </div>
                                        <div className="diff-resizer"></div>
                                    </div>
                                    <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src="/icons/swipe.gif" className="swipe" />
                                        <p style={{ fontWeight: '300', color: color.orange, fontSize: 12 }}>Desplaza der / izq</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="mx-auto max-w-7xl">
                            <div className="mx-auto text-center">
                                <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Desde una idea conceptual hasta la vasta realidad</h2>
                                <Fade direction="down">
                                    <section className="text-center">
                                        <h2 class="section-title" >Proceso Integral de  <span className="text-primary-blue">Producción de Prefabricados</span></h2>
                                    </section>
                                </Fade>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    El proceso aborda cada fase esencial en la producción de prefabricados, desde la concepción inicial del proyecto hasta la conexión final de las unidades. Sumérgete en las etapas de planificación estratégica, ingeniería precisa, fabricación eficiente, logística de transporte y montaje in situ (en sitio).
                                </p>
                            </div>
                            <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                {process.map((item, index) => {
                                    const index_ = index % 2
                                    const six = index !== 5
                                    return (
                                        <li>
                                            <div className="timeline-middle">
                                                <time className="font-mono">{index + 1}</time>
                                            </div>
                                            <div className={`${!index_ ? "timeline-start md:text-end" : "timeline-end"} mb-10`}>
                                                <div className={index_ ? "timeline-img-start" : "timeline-img-end"}>
                                                    <img
                                                        //src="//www.spcdn.org/images/landing-page-builder/ic-lpb-step-02.png" 
                                                        src={item.icon}
                                                        className="img-step"
                                                    />
                                                </div>
                                                <div className="feature-title">{item.name}</div>
                                                <dd className="mt-2 text-base leading-7 text-gray-600">{item.description}</dd>
                                            </div>
                                            {six && <hr />}
                                        </li>
                                    )
                                })}
                                <div id="features"></div>
                            </div>
                            {/*<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
                                    </div>*/}
                        </div>
                    </div>

                    <section className="_main container">
                        <section className="section-5">
                            <div className="mx-auto max-w-2xl lg:text-center">
                                <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Ventajas frente a los sistemas constructivos convencionales</h2>
                            </div>
                            <Fade direction="down">
                                <section className="text-center">
                                    <h2 class="section-title">Ventajes del <span className="text-primary-blue">Prefabricado</span></h2>
                                </section>
                            </Fade>
                        </section>

                        <div className="mx-auto max-w-7xl">
                            <div className="mx-auto mt-10 max-w-2xl lg:max-w-4xl">
                                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                    {pros.map((feature) => (
                                        <div key={feature} className="relative pl-16">
                                            <dt className="">
                                                <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: color.primary }}>
                                                    <RiThumbUpLine className="h-6 w-6 text-white" aria-hidden="true" />
                                                </div>
                                                <dd className="text-base leading-7 text-gray-600">{feature}</dd>
                                            </dt>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </section>

                    <section className="_main container">
                        <section>
                            {/*<section id="system">
                                <div class="row-base row" styles='margin-top: 7.1em'>
                                    <div class="">
                                        <Fade direction="down">
                                            <section className="text-center">
                                                <h3 class="col-about-title">Sistema de prefabricado <span className="text-primary-blue">y más</span></h3>
                                            </section>
                                        </Fade>
                                        <h2 className="text-base font-semibold leading-7" style={{ color: color.primary }}>Llevamos nuestros proyectos destacados</h2>
                                        <Fade direction="down">
                                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sistema de prefabricado y Multi T</p>
                                        </Fade>
                                        <div class="row-base row">
                                            <div class="col-base col-md-offset-1">
                                                <div class="col-about-info">
                                                    <p>A diferencia de los sistemas convencionales, en el Sistema de Prefabricado los elementos estructurales se fabrican previamente en plantas de producción. Después de un riguroso control de calidad en el proceso de fabricación,  las piezas se transportan para colocarlas en el lugar de la obra, abatiendo en forma considerable el tiempo de construcción.</p>
                                                    <p>Una característica de este sistema es que pueden salvar grandes claros con elementos ligeros. Esto se logra mediante la técnica del Presfuerzo, que consiste en aplicar una fuerza de tensión al acero de presfuerzo (cables o torones) antes de iniciar el colado, logrando incrementar la resistencia y mejorar el comportamiento estructural de los elementos.</p>
                                                    <p>Una vez montados los elementos, se cuela un firme de compresión de 5cm aproximadamente.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="d-flex justify-content-around align-items-center pb-5 flex-wrap" >
                                    {items.map((item, key) =>
                                        <ServicesCard
                                            key={item.id}
                                            img={item.img}
                                            title={item.title}
                                            newTab={item.newTab}
                                            onPress={() => onPress(key)}
                                        />
                                    )
                                    }
                                </section>
                                </section>*/}

                            <section id="pro">
                                <center>
                                    <section class="col-base col-about-img col-sm-6 col-md-offset-1" className="mt-4" style={{ width: '100%', alignItems: 'center', justifyItems: 'center', alignSelf: 'center' }}>
                                        <center>
                                            <div class="col-base col-md-offset-1" style={{ marginTop: 20 }}>
                                                <div class="col-about-info">
                                                    <p className='h4 m-0'>Construcción in SITU</p>
                                                    <p>Tiempos estimados mediante un sistema tradicional</p>
                                                </div>
                                            </div>
                                        </center>
                                        <img
                                            src={"./situ.png"}
                                            style={{ height: 'auto', objectFit: 'scale-down' }}
                                        />
                                        <center>
                                            <div class="col-base col-md-offset-1" style={{ marginTop: 20 }}>
                                                <div class="col-about-info">
                                                    <p className='h4 m-0'>Construcción Industrializada con Estructuras y Paneles Prefabricados</p>
                                                    <p>Tiempos estimados mediante un sistema Prefabricado</p>
                                                </div>
                                            </div>
                                        </center>
                                        <img
                                            src={"./paneles.png"}
                                            style={{ height: 'auto', objectFit: 'scale-down', paddingBottom: 25 }}
                                        />
                                        {/*<div class="col-base col-md-offset-1">
                                            <div class="col-about-info">
                                                <p className='h4 m-0'>El sistema prefabricado tiene una gran variedad de ventajas frente a los sistemas constructivos convencionales, entre ellos se destacan:</p>
                                                <p>1. Disminución en el tiempo de construcción hasta del 50%.<br />
                                                    2. Ahorro significativo en costos de ingeniería estructural ya que la ingeniería es desarrollada por nosotros contando con ingenieros altamente calificados en la materia.<br />
                                                    3. Seguridad estructural garantizada.<br />
                                                    4. Redución del impacto ambiental en sitio ya que se requiere menor número de personal obrero comparado con los sistemas tradicionales.  Se reduce hasta un 80%.<br />
                                                    5. Se aligera la estructura permitiendo en ocasiones una reducción en costos en cimentación.<br />
                                                    6. Controles de calidad más estrictos gracias al proceso industrializado.<br />
                                                    7. Durabilidad de la estructura por uso de concretos de alta resistencia.<br />
                                                    8. Se elimina el riesgo debido a problemas obrero-patronales, es decir cuotas sindicales, seguro social, etc. ya que el personal depende directamente de nosotros.<br />
                                                    9. Se reducen costos de supervisión ya que se simplifican los procesos y control de obra.<br />
                                                    10. Versatilidad en soluciones arquitectónicas ya que se desarrolla la ingeniería adaptada al proyecto.</p>
                                            </div>
                                        </div>
                                        <Chart
                                            options={options}
                                            series={options.series}
                                            type='radar'
                                            height="500"
                            />*/}
                                    </section>
                                </center>
                            </section>
                        </section>
                    </section>
                </BGPoints>
            </NavBar>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                //fullscreen={true}
                size="lg"
            >
                <Modal.Header closeButton >
                    <Modal.Title>
                        Sistema de prefabricado
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} /*data-bs-theme="dark"*/>
                        {items.map((item, key) =>
                            <Carousel.Item key={key}>
                                <div style={{ width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img
                                        src={item?.img}
                                        style={{ height: '100%', width: '100%', objectFit: 'cover', }}
                                        alt={''}
                                    />
                                    <div className="text-modal-image">
                                        <h3 class="col-about-title-system">{item.title.toUpperCase()}</h3>
                                        <p class="col-about-title-system">{item.description}</p>
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

export default Systems