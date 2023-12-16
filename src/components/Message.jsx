import { Heading, Stack, Text, Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import messages from "../assets/messaje.json"
import CarouselStatic from './CarouselStatic';
import { Fade } from 'react-awesome-reveal';
import BGPoints from './BGPoints';

export default function Message() {

    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <BGPoints>
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
                        />
                        <p>Ticonsa Inmobiliaria S.A. de C.V.</p>
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
        </BGPoints>
    )
}