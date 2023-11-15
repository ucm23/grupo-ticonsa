import {
    Accordion,
    Box,
    Text,
    Image,
    useColorModeValue,
} from "@chakra-ui/react"
import CarouselStatic from "../components/CarouselStatic"
import { Carousel } from "react-bootstrap";
import NavBar from "../components/NavBar"
import ServicesCard from "../components/ServicesCard"
import items from '../assets/systems.json'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Chart from "react-apexcharts";

import { Fade } from "react-awesome-reveal";

const Services = ({ type }) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const [showLayout, setShowLayout] = useState(false);
    const handleShowLayout = () => setShowLayout(!showLayout);

    const [index, setIndex] = useState(0);

    let imgLayout = "construccion.gif";
    let title = "Planta Puerto Progreso";

    const types = {
        "infraestructura": {
            "name": "Infraestructura",
            "description": "Somos responsables de la estructura base que da fuerza y sostiene a un gran número de construcciones. Somos la diferencia en obras públicas gracias a nuestra gran experiencia.",
        },
        "edificacion": {
            "name": "Edificación",
            "description": "Diseñamos y planificamos eficientemente edificios e inmuebles de acuerdo a las necesidades que requieran para sus proyectos habitacionales.",
        },
        "transporte": {
            "name": "Transporte",
            "description": "Parte fundamental de entorno del prefabricado es el transporte el cual consiste en el desplazamiento de los elementos prefabricados a los sitos indicados por nuestros clientes. Contamos con el mejor equipo de Transporte para lograr una eficaz ejecución de todos tus proyectos.",
        },
        "montaje": {
            "name": "Montaje",
            "description": "Una vez realizada la fabricación y el transporte, ejecutamos el montaje de las piezas prefabricadas con seguridad y precisión para construir la estructura proyectada.",
        },
        "supervision": {
            "name": "Supervisión",
            "description": "La supervisión de las obras forma parte de las funciones administrativas de gran valor e importancia que realizamos para que se cumplan efectiva y puntualmente los objetivos del proyecto de forma legal, en tiempo y calidad.",
        }
    }

    return (
        <>
            <NavBar photo={'true'}>
                <CarouselStatic names={[1, 2, 3]} folder='plants/yucatan' />

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

                    <section className="_main container">
                        <section className="mt-4">
                            <section id="system">
                                <div class="row-base row" styles='margin-top: 7.1em'>
                                    <div class="" /* col-base col-sm-6 col-md-offset-1 col-md-6  */>
                                        <Fade direction="down">
                                            <section className="text-center">
                                                <h3 class="col-about-title">Expertos en <span className="text-primary-blue"> {types[type]?.name}</span></h3>
                                            </section>
                                        </Fade>
                                        <div class="row-base row">
                                            <div class="col-base col-md-offset-1">
                                                <div class="col-about-info">
                                                    <p>
                                                    {types[type]?.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <center>
                                    <section class="col-base col-about-img col-sm-6 col-md-offset-1" className="mt-4" style={{ width: '100%', alignItems: 'center', justifyItems: 'center', alignSelf: 'center' }}>
                                        <Fade direction="down">
                                            <center>
                                                <img
                                                    src={imgLayout}
                                                    style={{ objectFit: 'scale-down' }}
                                                    onClick={handleShowLayout}
                                                />
                                            </center>
                                        </Fade>
                                    </section>
                                </center>
                            </section>
                        </section>
                    </section>
                </Box>
            </NavBar>
        </>
    )
}

export default Services