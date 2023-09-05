import { Heading, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import messages from "../assets/messaje.json"

export default function Message() {

    const mobile = useBreakpointValue({ base: true, md: false });
    const styles = {
        backgroundColor: "#030318",
        backgroundImage: `url('/fig.png')`,
        backgroundBlendMode: "soft-light",
        backgroundAttachment: "fixed",
        overflow: "hidden"
    }

    return (
        
        <Stack
            bg={useColorModeValue('gray.90', 'gray.800')}
            color="#fff"
            spacing={{ base: 8, md: 10 }}
            align='center'
            direction='column'
            
        >
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight='110%'
                textAlign='center'
                mb={0}
                mt={5}
            >
                <Text as='b'  color='blue.500'>
                    Mensaje
                </Text>
            </Heading>
            {
                messages.map(mess =>        
                    <Text 
                        key={mess.id} 
                        fontSize={{ base: 'xl', md: '2xl' }} 
                        textAlign='center'
                        style={ mess?.img ? styles : { color: "#000" }  }
                        width={'100%'}
                        p={mobile?'1.3rem':'2.5rem'}
                        mb={0}
                    >
                        {mess.text}
                    </Text>
                )
            }
        </Stack>
    )
}