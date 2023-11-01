import { Heading, Stack, Text, Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import messages from "../assets/messaje.json"
import CarouselStatic from './CarouselStatic';
import { Fade } from 'react-awesome-reveal';

export default function Message() {

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
            <CarouselStatic names={[1, 2, 3]} folder='img_maya' />
            <section className="_main container" >
                <section>
                    <Fade direction="down">
                        <section className="text-center">
                            <h2 class="section-title" style={{ paddingTop: 30, }}>Mensaje de nuestra <span className="text-primary-blue">Presidencia</span></h2>
                        </section>
                    </Fade>

                    <center>
                        <img
                            src={"./logo.png"}
                            style={{ height: 75, objectFit: 'scale-down', marginTop: 20, borderRadius: 40 }}
                        //alt={title}
                        //styles='filter: grayscale(100%)'
                        //objectFit="contain"
                        />
                        <p >Ticonsa Inmobiliaria S.A. de C.V.</p>
                    </center>
                    <div class="row-base row">
                        {messages.map(mess =>
                            <div class="col-base col-md-offset-1" key={mess.id}>
                                <div class="col-about-info">
                                    <p>{mess.text}</p>
                                </div>
                            </div>
                        )}
                        <div class="col-about-info">
                            <p style={{ textAlign: 'end' }}><br /><strong>Ing. Iñaki Zugasti Zalvidea</strong><br />PRESIDENTE</p>
                        </div>
                    </div>
                </section>
            </section>
        </Box>
    )
}