import {FcManager} from 'react-icons/fc';
import PropTypes from 'prop-types';
import {
    Box,
    Heading,
    Link,
    Container,
} from '@chakra-ui/react';

const Title = props => {
    return (
        <Container maxW='7xl' px="5">
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
            >
                <Text>
                    
                </Text>
                <Heading marginTop="5">
                    <Link fontSize={'5xl'} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        {props?.title}
                    </Link>
                </Heading>
            </Box>
        </Container>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title