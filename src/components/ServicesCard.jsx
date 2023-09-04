import PropTypes from 'prop-types';
import {
  Box,
  Center,
  Heading,
  Stack,
} from '@chakra-ui/react';

export default function ServicesCard(props) {
    
    const {
        img,
        title,
        newTab
    } = props;

    return (
        <Center mt={8}>
            <Box
                maxW='350px'
                minW='250px'
                w='full'
                bg='#2F302F'
                boxShadow='2xl'
                rounded='md'
                p={6}
                className='card__img'
                cursor={newTab?'pointer':''}
            >
                {
                    img && (
                        <Box
                            h='210px'
                            bg='gray.100'
                            mt={-6}
                            mx={-6}
                            pos='relative'
                            overflow='hidden'
                        >
                            <img
                                src={img}
                                style={{ width: '100%', height: '100%' }}
                                alt={title}
                            />
                        </Box>
                    )
                }

                <Stack mt={5}>
                    <Heading
                        color='#fff'
                        fontSize='2xl'
                        fontFamily='body'
                        mb={0}
                    >
                        {title}
                    </Heading>
                </Stack>
            </Box>
        </Center>
    );
}

ServicesCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    newTab: PropTypes.bool
}