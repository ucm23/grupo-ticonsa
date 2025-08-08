import CarouselStatic from "../components/CarouselStatic"
import NavBar from "../components/NavBar"
import { Fade } from "react-awesome-reveal";
import BGPoints from "../components/BGPoints";
import color from "../color";
import { useBreakpointValue } from '@chakra-ui/react';
import { FiZoomIn } from "react-icons/fi";
import ImageGallery from "react-image-gallery";
//import "react-image-gallery/styles/css/image-gallery.css";

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
                        className={`relative-cont ${isFullWidth ? 'col-span-2' : ''}`}
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
        extra1: "Gobierno del Estado de Oaxaca",
        route_img: "Guelaguetza",
        imgs: [1, 2,]
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



const Projects = ({ id }) => {

    const types = {
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
                </section>
            </BGPoints>
        </NavBar>
    )
}

export default Projects;