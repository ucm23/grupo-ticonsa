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
        <Center mt={8}>
            <Box
                maxW='350px'
                //maxW='49%'
                minW='250px'
                //minW='49%'
                w='full'
                className='card__img'
                cursor={newTab ? 'crosshair' : ''}
            >
                <div class="project" onClick={() => onPress()}>
                        <figure>
                            <img
                                src={img}
                                style={{ height: 500, objectFit: 'cover', }}
                                alt={title}
                            //styles='filter: grayscale(100%)'
                            />
                            <figcaption>
                                <h3 class="project-title-card text-shadow">
                                    {title}
                                </h3>
                                <div class="project-zoom"></div>
                            </figcaption>
                        </figure>
                    </div>
            </Box>
        </Center>
    )
}