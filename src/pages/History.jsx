import Message from "../components/Message"
import NavBar from "../components/NavBar"
import { Heading, Stack, Text, Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'

const History = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    return (
        <NavBar photo={'true'} mobile={mobile}>
            <section className="_main" >
                <div className="message">
                    <Message mobile={mobile}/>
                </div>
            </section>
        </NavBar>
    )
}

export default History