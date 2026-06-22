import CarouselStatic from "../components/CarouselStatic"
import NavBar from "../components/NavBar"
import React, { useCallback, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import { Fade } from "react-awesome-reveal";
import CarouselStaticBG from "../components/CarouselStaticBG";
import CardsInfo from "../components/CardsInfo";
import {
    useBreakpointValue,
} from '@chakra-ui/react'

import '../api/ZoomableImage.js';
import BGPoints from "../components/BGPoints.jsx";
import { getPlants, getPlantsArray, getPlantById } from '../../src/assets/info_plants.js';
import { useLanguage } from "../i18n/LanguageContext.jsx";

const Plants = ({ id }) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const { t } = useLanguage();

    const [showLayout, setShowLayout] = useState(false);
    const handleShowLayout = () => setShowLayout(!showLayout);

    const mobile = useBreakpointValue({ base: true, md: false });

    const [transform, setTransform] = useState('scale(1)');

    const handleMouseMove = (event) => {
        const containerRect = event.target.getBoundingClientRect();
        const x = (event.clientX - containerRect.left) / containerRect.width;
        const y = (event.clientY - containerRect.top) / containerRect.height;

        const newTransform = `scale(1.5) translate(${x * 50 - 25}%, ${y * 50 - 25}%)`;
        setTransform(newTransform);
    };

    const resetZoom = () => {
        setTransform('scale(1)');
    };

    /*const [arrayBanner, setArrayBanner] = useState(Object.values(plants))

    useEffect(() => {
        setArrayBanner(Object.values(plants))
    }, []);*/

    // Obtener las plantas con traducciones
    const plants = getPlants(t);
    const plantsArray = getPlantsArray(t);
    const currentPlant = getPlantById(t, id);

    // Mapeo de info IDs a títulos traducidos
    const infoTitles = {
        1: t?.common?.capacity,
        2: t.common.production,
        3: t.common.infrastructure,
        4: t.common.products,
    };

    const getInfoTitle = (id) => infoTitles[id];
    console.log("🚀 ~ getInfoTitle ~ getInfoTitle:", getInfoTitle)


    return (
        <>
            <NavBar photo={false} mobile={mobile}>
                {mobile ? <CarouselStatic names={plants[id].imgs} folder={plants[id].folder} title={plants[id].title} place={plants[id].place} logo={`logo-white.png`} /> :
                    <CarouselStaticBG names={plants[id].imgs} folder={plants[id].folder} title={plants[id].title} place={plants[id].place} />
                }
                <BGPoints>
                    <section className="_main container">
                        <div className="row-base row">
                            <section className="d-flex justify-content-around pb-5 flex-wrap" >
                                {currentPlant?.info.map((item, index) => (
                                    <CardsInfo
                                        key={`${index}-${item?.id}`}
                                        id={item?.id}
                                        properties={item?.list}
                                        title={getInfoTitle(item?.id) || item?.id}
                                    />
                                ))}
                            </section>
                        </div>
                        {currentPlant?.layout &&
                            <center>
                                <section className="col-base col-about-img col-sm-6 col-md-offset-1" style={{ width: '100%', alignItems: 'center', justifyItems: 'center', alignSelf: 'center' }}>
                                    <Fade direction="down">
                                        <section className="text-center">
                                            <h3 className="col-about-title mt-5" style={{ textTransform: 'uppercase' }}>
                                                {t.plants.layout || 'Línea de prefabricados'} <span className="text-primary-blue">{currentPlant?.title}</span>
                                            </h3>
                                            <center><div className="line-banner-small" /></center>
                                            <p>{t.common.prefabricatedLine || 'Línea de prefabricados'}</p>
                                        </section>
                                    </Fade>
                                    <div className="project" onClick={handleShowLayout}>
                                        <figure>
                                            <img
                                                src={`${currentPlant?.folder}${currentPlant?.layout}`}
                                                style={{ width: '80%', height: 'auto', objectFit: 'scale-down' }}
                                                loading="lazy"
                                            />
                                            <figcaption>
                                                <div className="project-zoom text-shadow"></div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </section>
                            </center>
                        }

                        {/*<section className="col-base col-about-img col-sm-6 col-md-offset-1" style={{ width: '100%', alignItems: 'center', justifyItems: 'center', alignSelf: 'center' }}>
                            <section>
                                <h3 className="col-about-title" style={{ textTransform: 'uppercase' }}>{plants[id].title}</h3>
                                <div className="line-banner-small" />
                                <p>{plants[id].place}<br /><strong>{plants[id].place}</strong></p>
                                <p>Planta ubicada en los linderos entre el estado de Puebla y el estado de Tlaxcala, en la que se cuenta con las líneas de producción para Durmientes de Concreto con un área de metalmecánica para elaboración de moldes y una bloquera que produce adoquines. En este centro también se localiza la planta Spancrete para producción de losas y muros alveolares.</p>
                            </section>

                        </section>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.54268364379845!2d-99.22344153808785!3d19.32975703236199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff953ce73f7b%3A0x8cf981865a36835b!2sGrupo%20Ticonsa%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1697838392918!5m2!1ses-419!2smx"
                            height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            style={{ width: '100%', marginBottom: '1rem' }}
                                />*/}

                        <hr />
                        <div style={{ display: 'flex', flexDirection: !mobile ? 'row' : 'column', marginTop: 25, justifyContent: 'space-between' }}>
                            {plantsArray.map((item, index) => {
                                if (item?.id !== Number(id)) {
                                    return (
                                        <a href={`${item?.url}`} key={`${index}-${item?.title}`}>
                                            <div>
                                                <center>
                                                    <img
                                                        src={`${item?.folder}${item?.imgs[2]}.jpg`}
                                                        style={{ height: 175, objectFit: "scale-down" }}
                                                        loading="lazy"
                                                    />
                                                    <h3 style={{ fontSize: 12 }}>{item?.title}</h3>
                                                </center>
                                            </div>
                                        </a>
                                    )
                                }
                                return null;
                            })}
                        </div>
                    </section>
                </BGPoints>
            </NavBar>

            {/*<Modal
                show={show}
                onHide={() => setShow(false)}
                //fullscreen={true}
                size="lg"
            >
                <Modal.Header closeButton >
                    <Modal.Title>
                        {plants[id].title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} / *data-bs-theme="dark"* />
                        {plants[id].imgs.map((item, key) =>
                            <Carousel.Item key={key}>
                                <div style={{ width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img
                                        src={`plants/campeche/${item}.jpg`}
                                        style={{ height: '100%', width: '100%', objectFit: 'cover', }}
                                    />
                                </div>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </Modal.Body>
                        </Modal>*/}
            <Modal
                show={showLayout}
                onHide={() => handleShowLayout(false)}
                fullscreen={true}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                         {t.plants.layout || 'Línea de prefabricados'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<div className="transition-enter zoomable-container" style={{ width: '100%', height: '100%', display: 'flex', overflowX: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src={`${plants[id].folder}${plants[id].layout}`}
                            className="zoomable-image"
                            style={{ height: '100%', width: '100%', objectFit: 'scale-down', }}
                        />
                        {/*<ReactImageZoom
                            zoomWidth={300}
                            scale={1.8}
                            zoomPosition={'original'}
                            img={`${plants[id].folder}${plants[id].layout}`}
                />
                    </div>*/}
                    <div
                        className="zoomable-container"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={resetZoom}
                        style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            className="zoomable-image"
                            src={`${plants[id].folder}${plants[id].layout}`}
                            alt={currentPlant?.title}
                            style={{ transform, height: '100%', width: '100%', objectFit: 'scale-down', }}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Plants