import CarouselStatic from "../components/CarouselStatic"
import NavBar from "../components/NavBar"
import { Fade } from "react-awesome-reveal";
import BGPoints from "../components/BGPoints";
import color from "../color";
import { useBreakpointValue } from '@chakra-ui/react';
import { FiZoomIn } from "react-icons/fi";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const fullWidthPositions = [3, 8, 11, 16, 23];

const ImageGrid = ({ images }) => {
    return (
        <div className="grid grid-cols-2 gap-2">
            {images.map((item, index) => {
                const position = index + 1;
                const isFullWidth = fullWidthPositions.includes(position);
                return (
                    <div
                        key={index}
                        className={`relative ${isFullWidth ? 'col-span-2' : ''}`}
                    >
                        <img
                            src={item?.route_img ? `/projects/especiales/${item?.route_img}/${item?.imgs[0]}.png` : item?.src}
                            alt={item.alt}
                            className="gallery-image"
                        />

                        {/* Overlay en hover */}
                        <div className="gallery-overlay">
                            <p className="text-white font-flama-light tracking-wider font-light leading-[0px]">
                                {item?.years}
                            </p>
                            <p className="text-white font-flama uppercase text-2xl font-extrabold mb-1.5">
                                <div dangerouslySetInnerHTML={{ __html: item?.title }} />
                            </p>
                            {
                                item?.extra1 && <p className="text-white font-flama font-medium text-[16px] leading-[8px]">
                                    {item?.extra1}
                                </p>
                            }
                            <div className="line-banner-white" style={{ backgroundColor: 'white' }} />
                            <p className="text-white font-flama-light text-[14px] tracking-wider font-light">
                                <div dangerouslySetInnerHTML={{ __html: item?.estado }} />
                            </p>
                        </div>

                    </div>
                )
            })}
        </div>
    );
};

const images = [
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Naturaleza",
        title: "Gradas para Campos Deportivos",
        years: 1973,
        estado: "Ciudad Madero, Tamaulipas",
        extra1: "Instituto Tecnológico Regional"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Garitas para la Secretaría de Hacienda Ing. Boilard C",
        years: 1973,
        estado: "Quintana Roo",
        extra1: ""
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Naturaleza",
        title: "Fosas Prefabricadas para panteones 'Los Cipreses'",
        years: 1974,
        estado: "Estado de México",
        extra1: "Ciprés del Bosque"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Auditorio para la Guelaguetza",
        years: 1974,
        estado: "Oaxaca",
        extra1: "Gobierno del Estado de Oaxaca"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Naturaleza",
        title: "Reconstrucción de estructuras y techumbres para estadio de béisbol",
        years: 1975,
        estado: "Veracruz",
        extra1: "Gobierno de Veracruz"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Gradas para Campos Deportivos Escuelas de Maestros",
        years: 1975,
        estado: "México, CDMX",
        extra1: ""
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Gradas para Campos Deportivos Laredo Instituto Tecnológico",
        years: 1975,
        estado: "Tamaulipas",
        extra1: ""
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Ampliación de Centro de Convenciones Acapulco Ing. Raúl Figueroa",
        years: 1976,
        estado: "Guerrero",
        extra1: ""
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Auditorio de varios usos Sosa",
        years: 1980,
        estado: "Estado de México",
        extra1: ""
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Tabasco G.P.Q. Complejo OMNI",
        years: 1981,
        estado: "Tabasco",
        extra1: ""
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Tabasco G.P.Q. Complejo Tabasco 1 Colema, S.A.",
        years: 1981,
        estado: "Tabasco",
        extra1: ""
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Tabasco G.P.Q. Complejo Tabasco 1 C.C. y P.",
        years: 1981,
        estado: "Tabasco",
        extra1: ""
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Tabasco G.P.Q. Complejo Tabasco 1 RECSA",
        years: 1981,
        estado: "Tabasco",
        extra1: "RECSA"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Parapetos del puente Fortuna",
        years: 1982,
        estado: "México. CDMX",
        extra1: "COMETRO"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: `Tanque de Almacenamiento de agua`,
        years: 1984,
        estado: "Estado de México<br/>1500 m³",
        extra1: "Constructora y Fraccionadora las Quintanas"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Estadio Foro Sol del Autódromo Hermanos Rodríguez ICA",
        years: 1997,
        estado: "México. CDMX",
        extra1: "Construcción Urbana",
        route_img: "ForoSol",
        imgs: [1, 2, 3, 4]
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Estadio de Fútbol 'Miguel Alemán Valdez' ",
        years: 1997,
        estado: "Guanajuato",
        extra1: "Club Deportivo Celaya AC",
        route_img: "MiguelAleman",
        imgs: [1, 2, 3, 4]
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Centro de Exposiciones Banamex, Hipódromo de las Américas AMH - CIE",
        years: 1999,
        estado: "México. CDMX",
        extra1: "",
        route_img: "CentroBanamex",
        imgs: [1, 2,]
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Cubierta para Estufa Industrial ESGO Construcciones, S.A. de C.V.",
        years: 2018,
        estado: "Estado de México",
        extra1: ""
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Departamentos y Hotel Amaná Live & Enjoy Tulum",
        years: 2022,
        estado: "Quintana Roo",
        extra1: "Grupo TYPSA",
        route_img: "HotelAmana",
        imgs: [1, 2,]
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Tren Maya tramo 2 - Estación Edzná",
        years: 2023,
        estado: "Campeche",
        extra1: "GRUPO CARSO",
        route_img: "TMEdzna",
        imgs: [1, 2, 3, 4]
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        alt: "Ciudad",
        title: "Tren Maya tramo 2 - Paradero Tenabo",
        years: 2023,
        estado: "Campeche",
        extra1: "GRUPO CARSO",
        route_img: "TMF1T5N",
        imgs: [1, 2, 3, 4]
    },
];

import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line, RiPageSeparator, RiP2PLine, } from "react-icons/ri";

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

const icons_ = [RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line, RiPageSeparator, RiP2PLine,]



const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function imageLink(path, width, height, size, extension) {
    return `https://images.react-photo-album.com/hiking/${path}.${width}x${height}.${size}w.${extension}`;
}


const Projects = ({ id }) => {


    const types = {
        1: {
            "name": "Infraestructura",
            "description": "Somos responsables de la estructura base que da fuerza y sostiene a un gran número de construcciones. Somos la diferencia en obras públicas gracias a nuestra gran experiencia.",
            "header": "<strong>Nuestra empresa</strong> posee una <strong>sólida trayectoria en aspectos fundamentales para el éxito en el ámbito de la construcción</strong>:",
            "word_key": [
                "Máxima garantía de calidad",
                "Eficiencia",
                "Seguridad",
                "Ingeniería estructural",
                "Normativas de construcción",
                "Tecnologías innovadoras",
                "Liderazgo en proyectos",
                "Planificación y ejecución de obras",
                "Estrategias de desarrollo",
                "Eficiencia operativa",
            ],
            "content": "Nuestro equipo de profesionales, con <strong>vasta experiencia en roles directivos y académicos</strong>, ofrece conferencias que fusionan conocimientos técnicos con enfoques motivadores. Hemos destacado como líderes en el sector, aplicando nuestra experiencia como directores generales, docentes en instituciones relevantes y consultores en diversas organizaciones nacionales e internacionales.",
            "footer": "En cada presentación, <strong>buscamos transmitir de manera clara y accesible los principios esenciales de la construcción</strong>, inspirando a nuestra audiencia a implementar cambios que generen satisfacción y un valor añadido tanto en su desarrollo personal como en su carrera profesional."
        },
        2: {
            "name": "Edificación",
            "description": "Diseñamos y planificamos eficientemente edificios e inmuebles de acuerdo a las necesidades que requieran para sus proyectos habitacionales.",
            "header": "<strong>Nuestra firma</strong> cuenta con una <strong> extensa trayectoria en el ámbito de la edificación</strong>, abordando aspectos fundamentales para el éxito en este campo:",
            "word_key": [
                "Diseño arquitectónico",
                "Normativas de construcción",
                "Innovación en técnicas constructivas",
                "Liderazgo en proyectos de edificación",
                "Planificación y ejecución de obras",
                "Estrategias para el desarrollo sostenible",
                "Eficiencia en procesos constructivos",
            ],
            "content": "Nuestro equipo de expertos, <strong>con amplia experiencia en roles directivos y académicos</strong>, ofrece conferencias que combinan conocimientos técnicos con enfoques inspiradores. Hemos destacado como líderes en el sector, aplicando nuestra experiencia como directores generales, docentes en instituciones destacadas y consultores en diversas organizaciones nacionales e internacionales.",
            "footer": "En cada presentación, <strong>buscamos comunicar de manera clara y accesible los principios esenciales de la edificación</strong>, inspirando a nuestra audiencia a implementar cambios que generen satisfacción y un valor añadido tanto en su desarrollo personal como en su carrera profesional en el emocionante mundo de la construcción."
        },
        3: {
            "name": "Transporte",
            "description": "Parte fundamental de entorno del prefabricado es el transporte el cual consiste en el desplazamiento de los elementos prefabricados a los sitos indicados por nuestros clientes. Contamos con el mejor equipo de Transporte para lograr una eficaz ejecución de todos tus proyectos.",
            "header": "<strong>Nuestra empresa</strong> ha forjado una sólida trayectoria en el <strong>ámbito del transporte de materiales y estructuras prefabricadas</strong>, abordando aspectos críticos para garantizar el éxito en esta área especializada:",
            "word_key": [
                "Logística eficiente en el transporte de materiales",
                "Gestión de la cadena de suministro",
                "Innovación en técnicas de transporte",
                "Liderazgo en proyectos logísticos",
                "Planificación y ejecución de rutas especializadas",
                "Estrategias para la optimización del transporte",
                "Eficiencia en la manipulación de estructuras prefabricadas",
            ],
            "content": "Nuestro equipo de especialistas, <strong>con una amplia experiencia en roles directivos y técnicos</strong>, ofrece conferencias que combinan conocimientos prácticos con enfoques inspiradores. Hemos destacado como líderes en el sector, aplicando nuestra experiencia en proyectos logísticos complejos, tanto a nivel nacional como internacional.",
            "footer": "En cada presentación, <strong>nos esforzamos por comunicar de manera clara y accesible los principios esenciales del transporte de materiales y estructuras prefabricadas</strong>, inspirando a nuestra audiencia a implementar prácticas innovadoras que generen eficiencia y un valor añadido en esta dinámica y esencial área de la construcción."
        },
        4: {
            "name": "Montaje",
            "description": "Una vez realizada la fabricación y el transporte, ejecutamos el montaje de las piezas prefabricadas con seguridad y precisión para construir la estructura proyectada.",
            "header": "<strong>Nuestra empresa</strong> ha consolidado una destacada experiencia en el <strong>ámbito del montaje de materiales y estructuras prefabricadas</strong>, abordando aspectos fundamentales para el éxito en esta especialidad:",
            "word_key": [
                "Técnicas avanzadas de montaje",
                "Planificación detallada de la instalación",
                "Innovación en procesos de ensamblaje",
                "Liderazgo en proyectos de montaje",
                "Coordinación eficiente de equipos de trabajo",
                "Estrategias para la optimización del proceso de montaje",
                "Garantía de seguridad en la instalación",
            ],
            "content": "Nuestro equipo de especialistas, <strong>con una amplia experiencia en roles directivos y técnicos</strong>, ofrece conferencias que combinan conocimientos técnicos con enfoques inspiradores. Nos destacamos como líderes en el sector, aplicando nuestra experiencia en proyectos de montaje complejos, tanto a nivel nacional como internacional.",
            "footer": "En cada presentación, <strong>nos esforzamos por comunicar de manera clara y accesible los principios esenciales del montaje de materiales y estructuras prefabricadas</strong>, inspirando a nuestra audiencia a implementar prácticas innovadoras que generen eficiencia y un valor añadido en esta crítica etapa del proceso constructivo."
        },
        5: {
            "name": "Supervisión",
            "description": "La supervisión de las obras forma parte de las funciones administrativas de gran valor e importancia que realizamos para que se cumplan efectiva y puntualmente los objetivos del proyecto de forma legal, en tiempo y calidad.",
            "header": "<strong>Nuestra firma</strong> se distingue por su <strong>destacada supervisión en los procesos de instalación de estructuras prefabricadas</strong>, abordando aspectos cruciales para garantizar la eficiencia y la calidad en cada fase del proyecto:",
            "word_key": [
                "Supervisión técnica especializada en instalación de prefabricados",
                "Gestión de la seguridad en el sitio de construcción",
                "Innovación en métodos de instalación",
                "Liderazgo en la coordinación de equipos de trabajo",
                "Planificación y ejecución de procesos de montaje",
                "Estrategias para la optimización de recursos",
                "Eficiencia en la integración de estructuras prefabricadas",
            ],
            "content": "Nuestro equipo de supervisores, <strong>con una vasta experiencia en roles de dirección y técnica</strong>, imparte conferencias que combinan conocimientos prácticos con enfoques motivadores. Nos destacamos como líderes en el sector, aplicando nuestra experiencia en proyectos de instalación de estructuras prefabricadas en diversos contextos y escalas.",
            "footer": "En cada presentación, <strong>nos esforzamos por comunicar de manera clara y accesible los principios esenciales de la supervisión en la instalación de estructuras prefabricadas</strong>, inspirando a nuestra audiencia a implementar prácticas avanzadas que generen eficiencia y un valor añadido en esta fase crítica de la construcción."
        },

        6: {
            "name": "Especiales",
            "description": "La supervisión de las obras forma parte de las funciones administrativas de gran valor e importancia que realizamos para que se cumplan efectiva y puntualmente los objetivos del proyecto de forma legal, en tiempo y calidad.",
            "header": "En <strong>Grupo Ticonsa Inmobiliaria</strong>, transformamos desafíos en soluciones. <br/> Desde <strong>centros de espectáculos</strong> hasta <strong>viviendas modulares</strong>, cada proyecto lleva nuestro sello de calidad, seguridad y dedicación. Aplicamos experticia y mejores prácticas de la industria para superar tus expectativas.",
            "word_key": [
                "Supervisión técnica especializada en instalación de prefabricados",
                "Gestión de la seguridad en el sitio de construcción",
                "Innovación en métodos de instalación",
                "Liderazgo en la coordinación de equipos de trabajo",
                "Planificación y ejecución de procesos de montaje",
                "Estrategias para la optimización de recursos",
                "Eficiencia en la integración de estructuras prefabricadas",
            ],
            "content": "Nuestro equipo de supervisores, <strong>con una vasta experiencia en roles de dirección y técnica</strong>, imparte conferencias que combinan conocimientos prácticos con enfoques motivadores. Nos destacamos como líderes en el sector, aplicando nuestra experiencia en proyectos de instalación de estructuras prefabricadas en diversos contextos y escalas.",
            "footer": "En cada presentación, <strong>nos esforzamos por comunicar de manera clara y accesible los principios esenciales de la supervisión en la instalación de estructuras prefabricadas</strong>, inspirando a nuestra audiencia a implementar prácticas avanzadas que generen eficiencia y un valor añadido en esta fase crítica de la construcción."
        }
    }

    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <NavBar photo={true} mobile={mobile}>
            <CarouselStatic
                names={[10, 11, 12]}
                folder='systems/'
                title={`Nuestros proyectos ${types[id]?.name}`}
                place={'Innovación y Precisión en Cada Obra'}
            />

            <BGPoints>
                <section className="_main container">
                    <div className="py-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="mx-auto text-center">
                                <p className="mt-5 text-lg leading-8 text-gray-600">
                                    <div dangerouslySetInnerHTML={{ __html: types[id]?.header }} />
                                    <div className="line-banner" style={{ backgroundColor: color.orange }} />
                                </p>
                                <Fade direction="down">
                                    <h2 className="section-title uppercase" style={{ paddingTop: 30, }}>Nuestra experiencia en</h2>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    {/*<ImageGallery
                        items={images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                    />*/}

                    <div className="container mx-auto pb-16 p-1.5 ">
                        <ImageGrid images={images} />
                    </div>

                    {/*<section>
                        <section id="system">
                            <div className="row-base row">
                                <div>
                                    <Fade direction="down">
                                        <section className="text-center">
                                            <h2 className="section-title" style={{ paddingTop: 30, }}>Expertos en <span className="text-primary-blue">{types[id]?.name}</span></h2>
                                        </section>
                                    </Fade>
                                    <div className="line-banner" style={{ backgroundColor: color.orange }} />
                                    <div className="">
                                        <div className="col-base col-md-offset-1">
                                            <div className="col-about-info">
                                                <div>
                                                    <p style={{ textAlign: 'center' }}>
                                                        <div dangerouslySetInnerHTML={{ __html: types[id]?.description }} />
                                                    </p>
                                                </div>
                                                <p>
                                                    <div dangerouslySetInnerHTML={{ __html: types[id]?.content }} />
                                                </p>
                                                <p>
                                                    <div dangerouslySetInnerHTML={{ __html: types[id]?.header }} />
                                                </p>
                                                <ol type="A">
                                                    {types[id]?.word_key.map((item, index) => (
                                                        <div style={{ borderColor: '#B6B6B650', borderBottomWidth: 1, paddingTop: 8, paddingBottom: 8, }}>
                                                            <li key={index}>{item}</li>
                                                        </div>
                                                    ))}
                                                </ol>
                                                <p>
                                                    <div dangerouslySetInnerHTML={{ __html: types[id]?.footer }} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                                                    </section>*/}
                </section>
            </BGPoints>
        </NavBar>
    )
}

export default Projects;