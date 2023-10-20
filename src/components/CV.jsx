import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react'
import { navigate } from 'wouter/use-location'


const downloadCV = () => {

    const a = document.createElement('a');
    a.download = 'GRUPO_TICONSA_CV.pdf';
    a.href = '/cv.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
};

export default function CV() {

    const navigateContact = () => navigate('/contacto')

    return (
        <Container maxW='5xl'>
          <Stack
            textAlign='center'
            align='center'
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 15 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight='110%'
              as='b'
            >
              Conoce más <Text as={'span'} color={'blue.500'}> de nosotros  </Text>
            </Heading>

            <Stack spacing={6} direction='row'>
              <Button
                rounded='full'
                px={6}
                colorScheme='blue'
                bg='blue.400'
                _hover={{ bg: 'blue.500' }}
                fontSize='lg'
                onClick={downloadCV}
              >
                Descargar CV
              </Button>
              <Button rounded='full' fontSize='lg' px={6} onClick={navigateContact} >
                Contáctanos
              </Button>
            </Stack>
            <Flex w='full'>

              <div style={{ 
                width: 950, 
                height:500, 
                overflow: "hidden",
                display: "flex",
                justifyContent: "center"
              }} >
                <img style={{ 
                  width: "100%", 
                  borderRadius: 10,
                  objectFit: "cover"
                }} src="/ilus.jpeg" alt="" />
              </div>


            </Flex>
          </Stack>
        </Container>
    )
}