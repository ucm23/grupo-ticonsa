import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarouselStaticIndex = ({ title, place, names, folder, logo }) => {

    return (
        <CarouselProvider
            totalSlides={6}
            visibleSlides={4}
            className='CarouselProvider'
            naturalSlideWidth={100}
            naturalSlideHeight={200}
        >
            <Slider
                style={{ maxWidth: 800, height: 400 }}
                trayProps={{
                    draggable: true,
                }}
            >
                <Slide index={0}>
                    <div
                        style={{
                            borderWidth: 0.8,
                            borderColor: 'gray',
                            borderRadius: 10,
                            padding: 12,
                            margin: 12,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <img
                            src='/proceso/plan.png'
                            alt=""
                            style={{ 
                                height: 150, width: 175, objectFit: 'cover', borderRadius: 100, border: "0px solid #000", 
                                //borderStyle: "groove", 
                                background: "linear-gradient(0.01000000000001deg, rgba(179, 179, 179, 1) 8.92%, rgba(213, 213, 213, 1) 31.91%, rgba(240, 240, 240, 1) 54.33%, rgba(250, 250, 250, 1) 67.52%)",
                                boxShadow:"-4px 8px 8px rgba(0,0,0,0.1), -8px 16px 16px rgba(0,0,0,0.1), -16px 32px 32px rgba(0,0,0,0.15), -32px 64px 64px rgba(0,0,0,0.25)"
                            }}
                        />
                        <h3
                            style={{
                                fontFamily: 'monospace',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                                padding: '12px 0 8px 0'
                            }}
                        >
                            {'getTitle()'}
                        </h3>
                        <h3
                            style={{
                                fontFamily: 'monospace',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 12,
                                padding: '12px 0 8px 0'
                            }}
                        >
                            {'const CarouselStaticIndex = ({ title, place, names, folder, logo }) => { return ( <CarouselProvider naturalSlideWidth={2} naturalSlideHeight={2} totalSlides={3}visibleSlides={2}>'}
                        </h3>
                    </div>
                </Slide>
                <Slide index={1}>
                    <div
                        style={{
                            borderWidth: 0.8,
                            borderColor: 'gray',
                            borderRadius: 10,
                            padding: 12,
                            margin: 12,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <img
                            src='/proceso/plan.png'
                            alt=""
                            style={{ height: 175, width: 175, objectFit: 'cover', borderRadius: 100 }}
                        />
                        <h3
                            style={{
                                fontFamily: 'monospace',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                                padding: '12px 0 8px 0'
                            }}
                        >
                            {'getTitle()'}
                        </h3>
                        <h3
                            style={{
                                fontFamily: 'monospace',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 12,
                                padding: '12px 0 8px 0'
                            }}
                        >
                            {'const CarouselStaticIndex = ({ title, place, names, folder, logo }) => { return ( <CarouselProvider naturalSlideWidth={2} naturalSlideHeight={2} totalSlides={3}visibleSlides={2}>'}
                        </h3>
                    </div>
                </Slide>
                <Slide index={2}>
                    <div
                        style={{
                            borderWidth: 0.8,
                            borderColor: 'gray',
                            borderRadius: 10,
                            padding: 12,
                            margin: 12,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <img
                            src='/proceso/plan.png'
                            alt=""
                            style={{ height: 175, width: 175, objectFit: 'cover', borderRadius: 100 }}
                        />
                        <h3
                            style={{
                                fontFamily: 'monospace',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                                padding: '12px 0 8px 0'
                            }}
                        >
                            {'getTitle()'}
                        </h3>
                        <h3
                            style={{
                                fontFamily: 'monospace',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 12,
                                padding: '12px 0 8px 0'
                            }}
                        >
                            {'const CarouselStaticIndex = ({ title, place, names, folder, logo }) => { return ( <CarouselProvider naturalSlideWidth={2} naturalSlideHeight={2} totalSlides={3}visibleSlides={2}>'}
                        </h3>
                    </div>
                </Slide>
            </Slider>
            <DotGroup showAsSelectedForCurrentSlideOnly dotNumbers />
            <div class="carousel__dot-group [props.className]">
                <button class="carousel__dot carousel__dot--[slide] [carousel__dot--selected]">
                </button>
            </div>
        </CarouselProvider >
    );
}
export default CarouselStaticIndex;