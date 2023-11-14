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

const Morelos = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const [showLayout, setShowLayout] = useState(false);
    const handleShowLayout = () => setShowLayout(!showLayout);

    const [index, setIndex] = useState(0);

    let imgLayout = "plants/morelos/0.jpg"
    let title = "Planta Puerto Morelos"

    const onPress = (key) => {
        setIndex(key);
        handleShow()
    }

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);


    return (
        <>
            <NavBar photo={'true'}>
                <CarouselStatic names={[1, 2, 3, 4]} folder='plants/morelos' />

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
                                                <h3 class="col-about-title">{title}, <span className="text-primary-blue"> Edo. de Quintana Roo</span></h3>
                                            </section>
                                        </Fade>
                                        <div class="row-base row">
                                            <div class="col-base col-md-offset-1">
                                                <div class="col-about-info">

                                                    <p><strong>Área y capacidad de la planta:</strong></p>
                                                    <ol>
                                                        <li><p>Área de planta = 25,000 m<sup>2</sup></p></li>
                                                        <li><p>Área de producción = 10,000 m<sup>2</sup></p></li>
                                                        <li><p>Área de almacenaje = 15,000 m<sup>2</sup></p></li>
                                                        <li><p>Capacidad de producción semanal: 400 m<sup>3</sup></p></li>
                                                    </ol>

                                                    <p><strong>Elementos que se pueden fabricar:</strong></p>
                                                    <ol>
                                                        <li><p>Trabes AASHTO tipo I, II, III, IV, V y VI </p></li>
                                                        <li><p>Trabes Cajón </p></li>
                                                        <li><p>Trabes Portantes y de rigidez </p></li>
                                                        <li><p>Losas TT </p></li>
                                                        <li><p>Columnas </p></li>
                                                        <li><p>Zapatas y candeleros </p></li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <center>
                                    <section class="col-base col-about-img col-sm-6 col-md-offset-1" className="mt-4" style={{ width: '100%', alignItems: 'center', justifyItems: 'center', alignSelf: 'center' }}>
                                        <Fade direction="down">
                                            <section className="text-center">
                                                <h3 class="col-about-title">Layout <span className="text-primary-blue">{title}</span></h3>
                                                <p>Línea de prefabricados</p>
                                            </section>
                                        </Fade>
                                        <img
                                            src={imgLayout}
                                            style={{ width: '100%', objectFit: 'scale-down' }}
                                            onClick={handleShowLayout}
                                        />
                                    </section>
                                </center>
                                <section className="d-flex justify-content-around align-items-center pb-5 flex-wrap" >

                                    {
                                        [1, 2, 3, 4].map((item, index) =>
                                            <ServicesCard
                                                key={index}
                                                img={`plants/morelos/${item}.jpg`}
                                                title={''}
                                                newTab={false}
                                                onPress={() => onPress(index)}
                                            />
                                        )
                                    }

                                </section>
                            </section>
                        </section>
                    </section>
                </Box>
            </NavBar>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                //fullscreen={true}
                size="lg"
            >
                <Modal.Header closeButton >
                    <Modal.Title>
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} /*data-bs-theme="dark"*/>
                        {[1, 2, 3, 4].map((item, key) =>
                            <Carousel.Item key={key}>
                                <div style={{ width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img
                                        src={`plants/morelos/${item}.jpg`}
                                        style={{ height: '100%', width: '100%', objectFit: 'cover', }}
                                    />
                                </div>

                            </Carousel.Item>
                        )}
                    </Carousel>
                </Modal.Body>
            </Modal>
            <Modal
                show={showLayout}
                onHide={() => handleShowLayout(false)}
                fullscreen={true}
                size="lg"
            >
                <Modal.Header closeButton >
                    <Modal.Title>
                        Línea de prefabricados
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src={imgLayout}
                            style={{ height: '100%', width: '100%', objectFit: 'scale-down' }}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Morelos