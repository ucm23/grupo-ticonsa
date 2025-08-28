import CarouselStatic from "../components/CarouselStatic"
import NavBar from "../components/NavBar"
import { Fade } from "react-awesome-reveal";
import BGPoints from "../components/BGPoints";
import color from "../color";
import { useBreakpointValue } from '@chakra-ui/react';
import { FiZoomIn } from "react-icons/fi";
//import "react-image-gallery/styles/css/image-gallery.css";

const fullWidthPositions = [3, 8, 11, 16, 23];

const images = [
    /*{
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
        title: "Cubierta para Estufa Industrial ESGO Construcciones, S.A. de C.V.",
        years: 2018,
        estado: "Estado de México",
        extra1: ""
    },*/
];

const types = {
    1: {
        "name": "Especiales",
        "description": "Innovación y Precisión en Cada Obra",
        "header": "En <strong>Grupo Ticonsa Inmobiliaria</strong>, transformamos desafíos en soluciones. <br/> Desde <strong>centros de espectáculos</strong> hasta <strong>viviendas modulares</strong>, cada proyecto lleva nuestro sello de calidad, seguridad y dedicación. Aplicamos experticia y mejores prácticas de la industria para superar tus expectativas.",
        "images": [
            {
                alt: "Ciudad",
                title: "Auditorio para la Guelaguetza",
                years: 1974,
                estado: "Oaxaca",
                extra1: "Gobierno del Estado de Oaxaca",
                route_img: "Guelaguetza",
                imgs: [1, 2,]
            },
            {
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
                alt: "Ciudad",
                title: "Centro de Exposiciones Banamex, Hipódromo de las Américas AMH - CIE",
                years: 1999,
                estado: "México. CDMX",
                extra1: "",
                route_img: "CentroBanamex",
                imgs: [1, 2,]
            },
            {
                alt: "Ciudad",
                title: "Departamentos y Hotel Amaná Live & Enjoy Tulum",
                years: 2022,
                estado: "Quintana Roo",
                extra1: "Grupo TYPSA",
                route_img: "HotelAmana",
                imgs: [1, 2,]
            },
            {
                alt: "Ciudad",
                title: "Tren Maya tramo 2 - Estación Edzná",
                years: 2023,
                estado: "Campeche",
                extra1: "GRUPO CARSO",
                route_img: "TMEdzna",
                imgs: [1, 2, 3, 4]
            },
            {
                alt: "Ciudad",
                title: "Tren Maya tramo 2 - Paradero Tenabo",
                years: 2023,
                estado: "Campeche",
                extra1: "GRUPO CARSO",
                route_img: "TMF1T5N",
                imgs: [1, 2, 3, 4]
            },
        ]
    },

    2: {
        "name": "Infraestructura",
        "description": "Cimientos para el Desarrollo Sostenible",
        "header": "En <strong>Grupo Ticonsa Inmobiliaria</strong>, construimos las arterias que conectan comunidades con soluciones técnicas de vanguardia. <br/> Nuestros proyectos —<strong>carreteras inteligentes</strong>, <strong>puentes estratégicos</strong> y <strong>sistemas hidráulicos</strong>— priorizan la <strong>sostenibilidad</strong> y el <strong>impacto social</strong>, utilizando tecnologías modulares y materiales de baja huella ambiental. Cada obra es un legado duradero que optimiza recursos y mejora la calidad de vida urbana.",
        "images": [
            {
                title: "Linea 8 del Metro y Puente Vehicular Coyuya",
                years: 1993,
                estado: "Estado de México",
                extra1: "",
                src: "infraestructura/1.jpg",
            },
            {
                title: "Linea 9 del Metro",
                years: 1985,
                estado: "México. D.F.",
                extra1: "",
                src: "infraestructura/2.jpg",
            },
            {
                title: "Puente Cazones",
                years: 1998,
                estado: "Veracruz",
                extra1: "Barra del río Cazones",
                src: "infraestructura/3.jpg",
            },
            {
                title: "Puente de El Zacatal",
                years: 1994,
                estado: "Ciudad del Carmen, Campeche",
                extra1: "",
                src: "infraestructura/4.jpg",
            },
            {
                title: "Puente Urawa",
                years: 1996,
                estado: "México. D.F.",
                extra1: "",
                src: "infraestructura/5.jpg",
            },
            {
                title: "Puente Vehicular del Miramontes",
                years: 1994,
                estado: "Estado de México",
                extra1: "",
                src: "infraestructura/6.jpg",
            },
            {
                title: "Puente Vehicular Emiliano Zapata",
                years: 1990,
                estado: "México. D.F.",
                extra1: "",
                src: "infraestructura/7.jpg",
            },
            {
                title: "Puente Vehicular Periférico Puebla",
                years: 1995,
                estado: "Puebla, Puebla",
                extra1: "",
                src: "infraestructura/8.jpg",
            },
            {
                title: "Puente Vehicular Primero de Mayo",
                 years: 2000,
                estado: "Estado de México",
                extra1: "Naucalpan",
                src: "infraestructura/9.jpg",
            },
            {
                title: "Puente Quetzalapa",
                years: 1993,
                estado: "Quetzalapa, Guerrero",
                extra1: "",
                src: "infraestructura/10.jpg",
            },
            {
                title: "Puente vehicular CAPU",
                years: 1996,
                estado: "Puebla, Puebla",
                extra1: "",
                src: "infraestructura/11.jpg",
            },
            {
                title: "Segundo Piso Periférico",
                years: "2005 - 2007",
                estado: "Estado de México",
                extra1: "",
                src: "infraestructura/12.jpg",
            },
            {
                title: "Distribuidor Vial Angelópolis",
                years: 2006,
                estado: "Puebla, Puebl",
                extra1: "",
                src: "infraestructura/13.jpg",
            },
        ]
    },
    3: {
        "name": "Edificación",
        "description": "Espacios que Inspiran Progreso",
        "header": "En <strong>Grupo Ticonsa Inmobiliaria</strong>, redefinimos skylines con arquitectura que combina <strong>función</strong> y <strong>visionariedad</strong>. <br/> Nuestros <strong>complejos habitacionales</strong>, <strong>torres corporativas</strong> y <strong>centros educativos</strong> incorporan <strong>diseño bioclimático</strong>, <strong>eficiencia energética</strong> y certificaciones internacionales de seguridad. Creamos espacios adaptados a las necesidades humanas, donde la innovación constructiva eleva estándares de confort y productividad.",
        "images": [
            {
                title: "Auditorio Tec de Monterrey",
                years: 1984,
                estado: "Atizapán de Zaragozas, Estado de México",
                extra1: "",
                src: "edificacion/1.jpg",
            },
            {
                title: "Centro Bancomer",
                years: 1977,
                estado: "México. D.F.",
                extra1: "",
                src: "edificacion/2.jpg",
            },
            {
                title: "Centro Corporativo GNP",
                years: 1992,
                estado: "México, D.F.",
                extra1: "",
                src: "edificacion/3.jpg",
            },
            {
                title: "Centro Lemun",
                years: 1982,
                estado: "México. D.F.",
                extra1: "",
                src: "edificacion/4.jpg",
            },
            {
                title: "Edificio de Oficinas ALGI",
                years: 2001,
                estado: "México. D.F.",
                extra1: "",
                src: "edificacion/5.jpg",
            },
            {
                title: "Edificio de Oficinas CBI",
                years: 2023,
                estado: "México. D.F.",
                extra1: "Polanco",
                src: "edificacion/6.jpg",
            },
            {
                title: "Edificio Plamat",
                years: 1980,
                estado: "México. D.F.",
                extra1: "",
                src: "edificacion/7.jpg",
            },
            {
                title: "Edificio de Oficinas del SNTISSSTE",
                years: 1990,
                estado: "México. D.F.",
                extra1: "",
                src: "edificacion/8.jpg",
            },
            {
                title: "Edificio de Urnas de Gayosso",
                years: 2000,
                estado: "México. D.F.",
                extra1: "",
                src: "edificacion/9.jpg",
            },
            {
                title: "Escuelas 1 y 2 niveles",
                years: "1971 - 1977",
                estado: "México, Veracruz y Puebla",
                extra1: "",
                src: "edificacion/10.jpg",
            },
            {
                title: "Instituto mexicano del Petróleo",
                years: 1983,
                estado: "México. D.F.",
                extra1: "",
                src: "edificacion/11.jpg",
            },
            {
                title: "Laboratorio Ligeros de la CFE",
                years: 1980,
                estado: "Irapuato, Guanajuato",
                extra1: "",
                src: "edificacion/12.jpg",
            },
            {
                title: "Villa de los Niños",
                years: 2000,
                estado: "Chalco, Estado de México",
                extra1: "",
                src: "edificacion/13.jpg",
            },
        ]
    }

}


const Projects = ({ id }) => {


    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <NavBar photo={true} mobile={mobile}>
            <CarouselStatic
                names={[10, 11, 12]}
                folder='systems/'
                title={`Nuestros proyectos ${types[id]?.name}`}
                place={types[id]?.description}
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

                    <div className="container mx-auto pb-16 p-1.5 ">
                        <div className="grid grid-cols-2 gap-2">
                            {types[id]?.images.map((item, index) => {
                                const position = index + 1;
                                const isFullWidth = fullWidthPositions.includes(position);
                                return (
                                    <div
                                        key={index}
                                        className={`relative relativo ${isFullWidth ? 'col-span-2' : ''}`}
                                    >
                                        <img
                                            src={item?.route_img ? `/projects/especiales/${item?.route_img}/${item?.imgs[0]}.png` : `/projects/${item?.src}`}
                                            alt={item?.title}
                                            className="gallery-image"
                                            loading="lazy"
                                        />

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
                    </div>
                </section>
            </BGPoints>
        </NavBar>
    )
}

export default Projects;