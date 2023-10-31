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

const Systems = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const [index, setIndex] = useState(0);

    const onPress = (key) => {
        setIndex(key);
        handleShow()

    }

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);


    return (
        <>
            <NavBar>
                <CarouselStatic names={[1, 2, 3, 4]} folder='systems' />

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
                            {/*<Text as='b' fontSize='5xl'>Sistema de prefabricado y más:</Text>

                            <div className="row my-4">
                                <div className="col-md-4 p-0 overflow-hidden">
                                    <img src="/systems/8.jpeg" className="px-3" />
                                </div>
                                <div className="col-md-8 p-4" style={{ backgroundColor: "#023896" }} >
                                    <div className="text-white" >
                                        A diferencia de los sistemas convencionales, en el Sistema de Prefabricado los elementos estructurales se fabrican previamente en plantas de producción. Después de un riguroso control de calidad en el proceso de fabricación,  las piezas se transportan para colocarlas en el lugar de la obra, abatiendo en forma considerable el tiempo de construcción.

                                        Una característica de este sistema es que pueden salvar grandes claros con elementos ligeros. Esto se logra mediante la técnica del Presfuerzo, que consiste en aplicar una fuerza de tensión al acero de presfuerzo (cables o torones) antes de iniciar el colado, logrando incrementar la resistencia y mejorar el comportamiento estructural de los elementos.

                                        Una vez montados los elementos, se cuela un firme de compresión de 5cm aproximadamente.
                                    </div>
                                </div>
                </div>*/}
                            <section id="system">
                                <div class="row-base row" styles='margin-top: 7.1em'>
                                    <div class="" /* col-base col-sm-6 col-md-offset-1 col-md-6  */>
                                        <Fade direction="down">
                                            <section className="text-center">
                                                <h3 class="col-about-title">Sistema de prefabricado <span className="text-primary-blue">y más</span></h3>
                                            </section>
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

                                    {/*<div class="col-base col-about-img col-sm-6 col-md-offset-1">
                                    <p>La Prefabricación tiene muchas aplicaciones. El sistema en edificación se compone básicamente de los siguientes elementos:</p>
                                    <Image
                                        src='/prefabricado2.jpg'
                                        alt=""
                                        style={{ height: 300, width: '100%', objectFit: 'cover', }}
                                    />
            </div>*/}
                                </div>
                                <section className="d-flex justify-content-around align-items-center pb-5 flex-wrap" >

                                    {
                                        items.map((item, key) =>
                                            <ServicesCard
                                                key={item.id}
                                                img={item.img}
                                                title={item.title}
                                                newTab={item.newTab}
                                                onPress={() => onPress(key)}
                                            />
                                        )
                                    }


                                    {/*<Chart
                                    chartType="ComboChart"
                                    width="100%"
                                    height="600px"
                                    data={Dat}
                                    options={getOptionsIncidents("Incidentes por Estándar")}
                            />*/}


                                </section>
                            </section>
                            <section id="pro">
                                <center>
                                    <section class="col-base col-about-img col-sm-6 col-md-offset-1" className="mt-4" style={{ width: '100%', alignItems: 'center', justifyItems: 'center', alignSelf: 'center' }}>
                                        <Fade direction="down">
                                            <section className="text-center">
                                                <h3 class="col-about-title">Ventajes del <span className="text-primary-blue">prefabricado</span></h3>
                                            </section>
                                        </Fade>
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
                                            style={{ height: 300, objectFit: 'scale-down' }}
                                        //alt={title}
                                        //styles='filter: grayscale(100%)'
                                        //objectFit="contain"
                                        />
                                        <center>
                                            <div class="col-base col-md-offset-1" style={{ marginTop: 20 }}>
                                                <div class="col-about-info">
                                                    <p className='h4 m-0'>Construcción Industrializada con Estructurea y Paneles Prefabricados</p>
                                                    <p>Tiempos estimados mediante un sistema Prefabricado</p>
                                                </div>
                                            </div>
                                        </center>
                                        <img
                                            src={"./paneles.png"}
                                            style={{ height: 300, objectFit: 'scale-down' }}
                                        //alt={title}
                                        //styles='filter: grayscale(100%)'
                                        //objectFit="contain"
                                        />
                                        <div class="col-base col-md-offset-1">
                                            <div class="col-about-info">
                                                <p className='h4 m-0'>El sistema prefabricado tiene una gran variedad de ventajas frente a los sitemas constructivos convencionales, entre ellos se destacan:</p>
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
                                            //width="1000"
                                            height="500"
                                        />

                                    </section>
                                </center>
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
                        Sistema de prefabricado
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
                        {items.map((item, key) =>
                            <Carousel.Item key={key}>
                                <img
                                    src={item?.img}
                                    style={{ height: 400, width: 500, objectFit: 'cover' }}
                                    alt={''}
                                />
                                <div className="text-modal-image">
                                    <h3 class="col-about-title">{item.title}</h3>
                                    <p>{item.description}</p>
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