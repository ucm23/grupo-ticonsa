import PropTypes from 'prop-types';
import {
    Box,
    Center,
    Heading,
    Stack,
} from '@chakra-ui/react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ServicesCard(props) {

    const {
        img,
        title,
        newTab,
        onPress,
    } = props;

    return (
        /*<Center mt={8}>
            <Box
                maxW='350px'
                minW='250px'
                w='full'
                bg='#03296A'
                boxShadow='2xl'
                rounded='md'
                p={6}
                className='card__img '
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
        </Center>*/
        <>

            <Center mt={8}>
                <Box
                    maxW='350px'
                    //maxW='49%'
                    minW='250px'
                    //minW='49%'
                    w='full'
                    className='card__img'
                    cursor={newTab ? 'pointer' : ''}
                >
                    {
                        img && (
                            <div class="project" onClick={() => onPress()}>
                                <figure>
                                    {/*<img alt="" height="500px" src="https://www.marhnos.com.mx/public/imagenes/autopistas_slide4_638x498_color-1.jpg">*/}
                                    <img
                                        src={img}
                                        style={{ height: 500, objectFit: 'cover', }}
                                        alt={title}
                                        styles='filter: grayscale(100%)'
                                    //objectFit="contain"
                                    />
                                    <figcaption>
                                        <h3 class="project-title-card">
                                            {title}
                                        </h3>
                                        <div class="project-zoom"></div>
                                    </figcaption>
                                </figure>
                            </div>
                            /*<Box
                                h='500px'
                                pos='relative'
                                overflow='hidden'
                            >
                                <h3 class="project-title">
                                    {title}
                                </h3>
                                <img
                                    src={img}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', }}
                                    alt={title}
                                //objectFit="contain"
                                />
    
                        </Box>*/
                        )
                    }
                </Box>
            </Center>
            {/*<Modal
                show={show}
                onHide={() => setShow(false)}
                //fullscreen={true}
                size="lg"
            >
                <Modal.Header closeButton />
                <Modal.Body>
                    <img
                        src={img}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', }}
                        alt={title}
                    />
                </Modal.Body>
                </Modal>*/}
        </>
    );
}

/*ServicesCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    newTab: PropTypes.bool,
    onPress: PropTypes.func,
    onPress_: PropTypes.string,
}*/