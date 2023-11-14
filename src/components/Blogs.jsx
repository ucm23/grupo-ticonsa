import { Heading, Stack, Text, Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import messages from "../assets/messaje.json"
import CarouselStatic from './CarouselStatic';
import { Carousel } from "react-bootstrap";

export default function Blogs() {

    const mobile = useBreakpointValue({ base: true, md: false });
    const styles = {
        backgroundColor: "#03031850",
        backgroundImage: `url('/systems/6.jpg')`,
        backgroundBlendMode: "soft-light",
        backgroundAttachment: 'cover',
        overflow: "hidden",
        color: 'white'
    }

    return (

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
            <div>
                <div style={{ position: 'absolute', top: 400, left: 75, zIndex: 2 }}>
                    <h2 style={{ color: 'white', fontSize: 20 }}>Oficina Teotihuacan</h2>
                    <h2 style={{ color: 'white', fontSize: 15 }}>Planta</h2>
                </div>
                <Carousel className="shadow" fade style={{ height: 500 }}>
                    {[1, 2, 3].map(item =>
                        <Carousel.Item key={`names-item-${item}`} interval={4000}>
                            <img
                                className="d-block w-100 _img_corousel"
                                src={`/systems/${item}.jpg`}
                                alt="First slide"
                                //style={{ height: mobile?"23rem":"26rem", objectFit: "cover", top: 100}}
                                style={{ height: 500, objectFit: "cover", top: 100 }}
                            />
                        </Carousel.Item>
                    )
                    }
                </Carousel>
            </div>
            <section className="_main container" >
                <section>

                    <h2 style={{ paddingTop: 30, fontWeight: 'bold' }}>Planta Teotihuacan Ticonsa</h2>
                    <img
                        className="d-block w-50 _img_corousel"
                        src={`/systems/2.jpg`}
                        alt="First slide"
                        //style={{ height: mobile?"23rem":"26rem", objectFit: "cover", top: 100}}
                        style={{ objectFit: "cover", top: 100 }}
                    />
                    <div class="row-base row">
                        {messages.map(mess =>
                            <div class="col-base col-md-offset-1">
                                <div class="col-about-info">
                                    <Text
                                        key={mess.id}
                                        //style={mess?.img ? styles : { color: "#000" }}
                                        width={'100%'}
                                        mb={0}
                                    >
                                        {mess.text}
                                    </Text>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </section>

        </Box>
    )
}