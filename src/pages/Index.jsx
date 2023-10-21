
import CardNew from "../components/Blog"
import Carousel from "../components/Carousel"
import NavBar from "../components/NavBar"
import info from "../assets/info.json"
import items from '../assets/services_card.json'
import ServicesCard from "../components/ServicesCard"
import CV from "../components/CV";

import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import {
    Box,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import {
    Image,
} from '@chakra-ui/react';
import color from "../color";

const Index = () => {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <NavBar>
            <Carousel />
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

                <section className="_main container" >
                    <section className="section-5" >
                        <h2 class="section-title"> Sobre Nosotros <span className="text-primary-blue">GRUPO TICONSA<sup>®</sup></span></h2>

                        <div class="row-base row" styles='margin-top: 7.1em'>
                            <div class="col-base col-sm-6 col-md-6 col-md-offset-1">
                                <h3 class="col-about-title">Concreto, Prefabricado y <span className="text-primary-blue">Presforzado</span></h3>
                                <div class="col-about-info">
                                    <p>Grupo Ticonsa<sup>®</sup> en una empresa con 50 años de experiencia desarrollando soluciones innovadoras que aportan valor agregado a los proyectos de nuestros clientes.</p>
                                    <p>Cancún: (998) 892-3143 <br /> México: (55) 5484-8364<br />Teotihuacán: (594) 956-1645</p>
                                    <p>👷 Grupo Ticonsa — 15 de Febrero de 1971</p>
                                </div>
                            </div>

                            <div class="col-base col-about-img col-sm-6 col-md-offset-1">
                                <Image
                                    src='/ticonsa1.avif'
                                    alt=""
                                    style={{ height: 300, width: 500, objectFit: 'cover', }}
                                />
                            </div>
                        </div>
                        {/*<CardNew
                            id={info.id}
                            date={info.date}
                            title={info.title}
                            author={info.author}
                            description={info.description}
            />*/}
                    </section>

                    <section className="text-center">

                        <h3 class="col-about-title" style={{ marginTop: 30 }}>Presencia en <span className="text-primary-blue">todo México</span> y con proyectos <span className="text-primary-blue">destacados</span></h3>

                        <div class="content-circle" ref={ref}>
                            <Image
                                borderRadius="lg"
                                src='/mapa.png'
                                alt=""
                                className="img-responsive"
                                style={{ /*width: '100%', objectFit: 'cover', paddingLeft: 50, paddingRight: 50, display: 'initial'*/ }}
                            />

                            <OverlayTrigger
                                trigger='hover'
                                placement={'bottom'}
                                overlay={
                                    <Popover id={`popover-positioned-bottom`}>
                                        <Popover.Header as="h3">{`Estado`}</Popover.Header>
                                        <Popover.Body>
                                            <strong>[Año-1999] </strong> Project name
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <div class="circle circle-01" onClick={handleClick} />
                            </OverlayTrigger>

                            {/*<Overlay
                                show={show}
                                target={target}
                                placement="bottom"
                                container={ref}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained">
                                    <Popover.Header as="h3">Popover bottom</Popover.Header>
                                    <Popover.Body>
                                        <strong>Holy guacamole!</strong> Check this info.
                                    </Popover.Body>
                                </Popover>
                            </Overlay>*/}

                        </div>
                    </section>

                    <section className="text-center">
                        <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1iYfuoOw92_cFiqxVBxew75qqJRsDq8KE9GZbQiETOBI&font=Default&lang=es&timenav_position=top&initial_zoom=0&height=800' width='100%' height='800' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
                    </section>

                    <section className="text-center">
                        <h3 class="col-about-title" style={{ marginTop: 20, }}>Servicios que <span className="text-primary-blue">ofrecemos</span></h3>
                        <section className="d-flex justify-content-around align-items-center pb-5 flex-wrap" >
                            {
                                items.map(item =>
                                    <ServicesCard
                                        key={item.id}
                                        img={item.img}
                                        title={item.title}
                                    />
                                )
                            }
                        </section>
                    </section>


                    {/*<CV />*/}
                </section>
            </Box>
        </NavBar>
    )
}

export default Index