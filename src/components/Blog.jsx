import {FcManager} from 'react-icons/fc';
import PropTypes from 'prop-types';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    useColorModeValue,
    Container,
    HStack,
    /* VStack */
} from '@chakra-ui/react';

const BlogAuthor= props => {
    return (
      <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <FcManager size={32} />
            <Text fontWeight="medium" className="mb-0">{props.name}</Text>
            <Text className="mb-0">—</Text>
            <Text className="mb-0">{props.date}</Text>
      </HStack>
    );
};

/* function convertirTexto(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    const palabras = textoLimpio.split(" ");
    const primerasPalabras = palabras.slice(0, 10);
    const textoConvertido = primerasPalabras.join("-");
  
    return textoConvertido;
} */

const CardNew = props => {
    return (
        <Container maxW='7xl' px="5">
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
            >
            <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
            >
                <Box
                    width={{ base: '100%', sm: '85%' }}
                    zIndex="2"
                    marginLeft={{ base: '0', sm: '5%' }}
                    marginTop="5%"
                >
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <Image
                            borderRadius="lg"
                            src='/ticonsa1.avif'
                            alt="Concreto, Prefabricado y Presforzado"
                            objectFit="contain"
                        />
                    </Link>
                </Box>

                <Box zIndex="1" width="100%" position="absolute" height="100%">
                    <Box
                        bgGradient={
                            useColorModeValue(
                                'radial(blue.800 1px, transparent 1px)',
                                'radial(blue.700 1px, transparent 1px)'
                            )
                        }
                        backgroundSize="20px 20px"
                        opacity="0.4"
                        height="100%"
                    />
                </Box>

            </Box>
            <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: '3', sm: '0' }}
            >
                <Heading marginTop="1">
                    <Link fontSize={'5xl'} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        {props.title}
                    </Link>
                </Heading>
                <Text
                    as="p"
                    marginTop="2"
                    color={
                        useColorModeValue('gray.900', 'gray.800')
                    }
                    fontSize="xl"
                >
                    {props.description}
                </Text>
                <BlogAuthor
                    name={props.author}
                    date={props.date}
                />
                </Box>
            </Box>
        </Container>
    )
}

BlogAuthor.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

CardNew.propTypes = {
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number,
}

export default CardNew