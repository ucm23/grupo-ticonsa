import CarouselStatic from "../components/CarouselStatic"
import NavBar from "../components/NavBar"
import { Fade } from "react-awesome-reveal";
import BGPoints from "../components/BGPoints";
import color from "../color";
import { useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import ModalProjects from "../components/ModalProjects";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
//import { FiZoomIn } from "react-icons/fi";
//import "react-image-gallery/styles/css/image-gallery.css";

const fullWidthPositions = [3, 8, 11, 16, 23];

const Projects = ({ id }) => {

    const mobile = useBreakpointValue({ base: true, md: false });
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedProduct, setSlectedproduct] = useState(null)

    const { t } = useLanguage()

    const getProjectKey = (id) => {
        const map = {
            1: 'special',
            2: 'infrastructure',
            3: 'building'
        };
        return map[id] || 'special';
    };

    const projectKey = getProjectKey(id);
    const projectData = t.projectsPage[projectKey];

    const types = {
        1: {
            "name": projectData.title,
            "folder": 'especiales',
            "description": projectData.description,
            "header": projectData.header,
            "images": [
                {
                    alt: "Ciudad",
                    title: "Auditorio para la Guelaguetza",
                    years: 1974,
                    estado: "Oaxaca",
                    extra1: "Gobierno del Estado de Oaxaca",
                    route_img: "Guelaguetza",
                    imgs: [1, 2],
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
                    imgs: [1, 2,]
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
            "name": projectData.title,
            "folder": 'infraestructura',
            "description": projectData.description,
            "header": projectData.header,
            "images": [
                {
                    title: "Linea 8 del Metro y Puente Vehicular Coyuya",
                    years: 1993,
                    estado: "Estado de México",
                    extra1: "",
                    src: "infraestructura/1.jpg",
                    route_img: "linea8",
                    imgs: [1]
                },
                {
                    title: "Linea 9 del Metro",
                    years: 1985,
                    estado: "México. D.F.",
                    extra1: "",
                    src: "infraestructura/2.jpg",
                    route_img: "linea9",
                    imgs: [2]
                },
                {
                    title: "Puente Cazones",
                    years: 1998,
                    estado: "Veracruz",
                    extra1: "Barra del río Cazones",
                    src: "infraestructura/3.jpg",
                    route_img: "cazones",
                    imgs: [1, 3,]
                },
                {
                    title: "Puente de El Zacatal",
                    years: 1994,
                    estado: "Ciudad del Carmen, Campeche",
                    extra1: "",
                    src: "infraestructura/4.jpg",
                    route_img: "puen_zacatal",
                    imgs: [1, 2, 3,]
                },
                {
                    title: "Puente Urawa",
                    years: 1996,
                    estado: "México. D.F.",
                    extra1: "",
                    src: "infraestructura/5.jpg",
                    route_img: "urawa",
                    imgs: [5]
                },
                /*{
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
                },*/
                /*{
                    title: "Puente Quetzalapa",
                    years: 1993,
                    estado: "Quetzalapa, Guerrero",
                    extra1: "",
                    src: "infraestructura/10.jpg",
                },*/
                /*{
                    title: "Puente vehicular CAPU",
                    years: 1996,
                    estado: "Puebla, Puebla",
                    extra1: "",
                    src: "infraestructura/11.jpg",
                },*/
                {
                    title: "Segundo Piso Periférico",
                    years: "2005 - 2007",
                    estado: "Estado de México",
                    extra1: "",
                    src: "infraestructura/12.jpg",
                    route_img: "seg_piso",
                    imgs: [1, 2]
                },
                /*{
                    title: "Distribuidor Vial Angelópolis",
                    years: 2006,
                    estado: "Puebla, Puebl",
                    extra1: "",
                    src: "infraestructura/13.jpg",
                },*/
            ]
        },
        3: {
            "name": projectData.title,
            "folder": 'edificacion',
            "description": projectData.description,
            "header": projectData.header,
            "images": [
                {
                    title: "Auditorio Tec de Monterrey",
                    years: 1984,
                    estado: "Atizapán de Zaragozas, Estado de México",
                    extra1: "",
                    src: "edificacion/1.jpg",
                    route_img: "monterrey",
                    imgs: [1]
                },
                {
                    title: "Centro Bancomer",
                    years: 1977,
                    estado: "México. D.F.",
                    extra1: "",
                    src: "edificacion/2.jpg",
                    route_img: "bancomer",
                    imgs: [1]
                },
                {
                    title: "Centro Corporativo GNP",
                    years: 1992,
                    estado: "México, D.F.",
                    extra1: "",
                    src: "edificacion/3.jpg",
                    route_img: "gnp",
                    imgs: [1]
                },
                {
                    title: "Centro Lemun",
                    years: 1982,
                    estado: "México. D.F.",
                    extra1: "",
                    src: "edificacion/4.jpg",
                    route_img: "lemun",
                    imgs: [1]
                },
                {
                    title: "Edificio de Oficinas ALGI",
                    years: 2001,
                    estado: "México. D.F.",
                    extra1: "",
                    src: "edificacion/5.jpg",
                    route_img: "algi",
                    imgs: [1]
                },
                {
                    title: "Edificio de Oficinas CBI",
                    years: 2023,
                    estado: "México. D.F.",
                    extra1: "Polanco",
                    src: "edificacion/6.jpg",
                    route_img: "cbi",
                    imgs: [1]
                },
                {
                    title: "Edificio Plamat",
                    years: 1980,
                    estado: "México. D.F.",
                    extra1: "",
                    src: "edificacion/7.jpg",
                    route_img: "plamat",
                    imgs: [1]
                },
                {
                    title: "Edificio de Oficinas del SNTISSSTE",
                    years: 1990,
                    estado: "México. D.F.",
                    extra1: "",
                    src: "edificacion/8.jpg",
                    route_img: "SNTISSSTE",
                    imgs: [1]

                },
                {
                    title: "Edificio de Urnas de Gayosso",
                    years: 2000,
                    estado: "México. D.F.",
                    extra1: "",
                    src: "edificacion/9.jpg",
                    route_img: "Gayosso",
                    imgs: [1]

                },
                {
                    title: "Escuelas 1 y 2 niveles",
                    years: "1971 - 1977",
                    estado: "México, Veracruz y Puebla",
                    extra1: "",
                    src: "edificacion/10.jpg",
                    route_img: "Escuelasn",
                    imgs: [1]
                },
                {
                    title: "Instituto mexicano del Petróleo",
                    years: 1983,
                    estado: "México. D.F.",
                    extra1: "",
                    src: "edificacion/11.jpg",
                    route_img: "Instituto",
                    imgs: [1]
                },
                {
                    title: "Laboratorio Ligeros de la CFE",
                    years: 1980,
                    estado: "Irapuato, Guanajuato",
                    extra1: "",
                    src: "edificacion/12.jpg",
                    route_img: "cfe",
                    imgs: [1]
                },
                {
                    title: "Villa de los Niños",
                    years: 2000,
                    estado: "Chalco, Estado de México",
                    extra1: "",
                    src: "edificacion/13.jpg",
                    route_img: "villa",
                    imgs: [1]
                },
            ]
        }
    }


    const handleOpenModal = (item, folder) => {
        setSlectedproduct({ ...item, folder })
        onOpen()
    }

    return (
        <NavBar photo={true} mobile={mobile}>
            <CarouselStatic
                names={[13, 14, 15]}
                folder='systems/'
                //title={`Nuestros proyectos ${types[id]?.name}`}
                title={`${projectData?.ourExperience || 'Nuestra experiencia en'} ${types[id]?.name || ''}`}
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
                                    <h2 className="section-title uppercase" style={{ paddingTop: 30, }}>
                                        {projectData?.ourExperience || 'Nuestra experiencia en'}
                                    </h2>
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
                                        onClick={() => handleOpenModal(item, types[id]?.folder)}
                                    >
                                        <img
                                            src={item?.route_img ? `/projects/${types[id]?.folder}/${item?.route_img}/${item?.imgs[0]}.png` : `/projects/${item?.src}`}
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
                <ModalProjects
                    isOpen={isOpen}
                    onClose={onClose}
                    project={selectedProduct}
                    folder={selectedProduct?.folder}
                    images_={selectedProduct?.imgs}
                    mobile={!mobile}
                />
            </BGPoints>
        </NavBar>
    )
}

export default Projects;