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

                            <div class="row-base row" styles='margin-top: 7.1em'>
                                <div class="col-base col-sm-6 col-md-6 col-md-offset-1">
                                    <h3 class="col-about-title">Sistema de prefabricado <span className="text-primary-blue">y más</span></h3>
                                    <div class="col-about-info">
                                        <p>A diferencia de los sistemas convencionales, en el Sistema de Prefabricado los elementos estructurales se fabrican previamente en plantas de producción. Después de un riguroso control de calidad en el proceso de fabricación,  las piezas se transportan para colocarlas en el lugar de la obra, abatiendo en forma considerable el tiempo de construcción.</p>
                                        <p>Una característica de este sistema es que pueden salvar grandes claros con elementos ligeros. Esto se logra mediante la técnica del Presfuerzo, que consiste en aplicar una fuerza de tensión al acero de presfuerzo (cables o torones) antes de iniciar el colado, logrando incrementar la resistencia y mejorar el comportamiento estructural de los elementos.</p>
                                        <p>Una vez montados los elementos, se cuela un firme de compresión de 5cm aproximadamente.</p>
                                    </div>
                                </div>

                                <div class="col-base col-about-img col-sm-6 col-md-offset-1">
                                <p>La Prefabricación tiene muchas aplicaciones. El sistema en edificación se compone básicamente de los siguientes elementos:</p>
                                    <Image
                                        src='/prefabricado2.jpg'
                                        alt=""
                                        style={{ height: 300, width: '100%', objectFit: 'cover', }}
                                    />
                                </div>
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
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {
                            items.map((item, key) =>
                                <Carousel.Item key={key}>
                                    <img
                                        src={item?.img}
                                        style={{ height: '100%', objectFit: 'cover', }}
                                        alt={''}
                                    />
                                    <div className="text-modal-image">
                                        <h3 class="col-about-title">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </Carousel.Item>
                            )
                        }

                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Systems