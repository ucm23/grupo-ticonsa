import { Heading, Stack, Text, Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import messages from "../assets/messaje.json"
import CarouselStatic from './CarouselStatic';

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
            <CarouselStatic names={[4,2,6]} folder='systems'  />
            <section className="_main container" >
                <section>
                    <h2 class="section-title" style={{ paddingTop: 30, }}>Mensaje</h2>
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