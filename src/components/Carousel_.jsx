import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Divider, Tour } from 'antd';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Container,
    Button,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { MdCall } from "react-icons/md"
import Slider from 'react-slick'
import SplitMergeAnimation from './SplitMergeAnimation'
import SocialButton from './SocialButton';

import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { RiArrowDownSLine } from "react-icons/ri";
import color from '../color';

const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: true,
    //speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function Carousel_() {

    const [slider, setSlider] = useState(null)

    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })
    const mobile = useBreakpointValue({ base: true, md: false });

    /*const cards = [
        {
            phone: 'Cancún: (998) 892-3143',
            image: '/1.jpg',
        },
        {
            phone: 'México: (55) 5484-8364',
            image: '/2.jpg',
        },
        {
            phone: 'Teotihuacán: (594) 956-1645',
            image: '/3.jpg',
        },
    ]*/

    const cards = [
        {
            name: "Segundo Piso Periférico",
            place: "Ciudad de México",
            description: "Obra magna de la Ciudad de México aportando soluciones de infraestructura urbano",
            image: '/periferico.jpg',
        },
        {
            name: "Hotel Moon Palace",
            place: "Cancún, Quintana Roo",
            description: "Tiempo récord: Se construyeron 40 mil m² en 3.5 meses",
            image: '/moon-alace.jpg',
        },
        {
            name: "Hotel Oasis",
            place: "Cancún, Quintana Roo",
            description: "Solución con marcos estructurales de concreto articulados",
            image: '/oasis.jpg',
        },
        {
            name: "Foro Sol",
            place: "Ciudad de México",
            description: "Obra merecedora al Premio Nacional de la Prefabricación 1998 y al PCI Awards en 1999",
            image: '/foro-sol.jpg',
        },
        {
            name: "Auditorio Tec de Monterrey",
            place: "Ciudad de México",
            description: "Edificio totalmente prefabricado incluyendo estructura y fachadas",
            image: '/tec-fachada.jpg',
        },
    ]

    const handleBeforeChange = () => {
        document.querySelectorAll('.image-part').forEach((imagePart) => {
            //imagePart.style.animation = 'none';
            imagePart.offsetWidth; // Forced reflow to reset animation
            imagePart.style.animation = 'splitAndMerge 5s linear';
        });
    };

    const ref1 = useRef(null);
    const [open, setOpen] = useState(false);
    const steps = [
        {
            cover: (
                <iframe
                    className="islands__popup-video"
                    src="https://www.youtube.com/embed/Nvg4CamInuA?autoplay=1"
                    frameborder="0"
                    //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            ),
            target: () => ref1.current,
        },
    ];

    const openLink = () => {
        window.open('https://www.youtube.com/embed/Nvg4CamInuA', '_blank');
    };

    return (
        <Box
            position={'relative'}
            height={'98vh'}
            width={'full'}
            overflow={'hidden'}
        >
            <Tour open={open} onClose={() => setOpen(false)} mask={false} steps={steps} />

            {!mobile &&
                <>
                    <IconButton
                        aria-label="left-arrow"
                        variant='ghost'
                        color={'white'}
                        position="absolute"
                        left={side}
                        top={top}
                        transform={'translate(0%, -50%)'}
                        zIndex={2}
                        onClick={() => slider?.slickPrev()}
                    >
                        <BiLeftArrowAlt size="40px" />
                    </IconButton>

                    <IconButton
                        aria-label="right-arrow"
                        variant='ghost'
                        color={'white'}
                        position="absolute"
                        right={side}
                        top={top}
                        transform={'translate(0%, -50%)'}
                        zIndex={2}
                        onClick={() => slider?.slickNext()}>
                        <BiRightArrowAlt size="40px" />
                    </IconButton>
                </>
            }
            {/*<section className='index-carousel'>
                {cards.map((card, index) => (
                    <div key={index} style={{ backgroundImage: `url('${card.image}')` }} className='index-carousel-img'/>
                ))}
                </section>*/}
            <Slider {...settings} ref={(slider) => setSlider(slider)} afterChange={handleBeforeChange} >
                {cards.map((card, index) => (
                    <Box key={index}>
                        <SplitMergeAnimation
                            imageUrl={card.image}
                            numParts={mobile ? 1 : 6}
                        >
                            <Box
                                className='box-text'
                                zIndex={10}
                                height='98vh'
                                width='100%'
                                position="relative"
                                top={mobile ? '-25rem' : '-23rem'}
                                //left={mobile ? '30px' : '123px'}
                                style={{
                                    top: "-50vh",
                                    display: "flex",
                                }}
                            >
                                <Stack
                                    w={'full'}
                                    maxW={'100%'}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <h2 className="text-shadow" style={{ lineHeight: 0, fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' }}>{card.place}</h2>
                                    <h1 class="col-about-title text-shadow" style={{ fontWeight: 'bold', textAlign: 'center', lineHeight: 1, textTransform: 'uppercase' }}>{card.name}</h1>
                                    <p className="text-shadow" style={{ textAlign: 'center', lineHeight: 1 }}>{card.description}</p>

                                    <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 6 }}>
                                        <Button
                                            colorScheme="blue"
                                            bg={color.orange}
                                            rounded={5}
                                            color="white"
                                            //onClick={downloadCV}
                                            rightIcon={<div />}
                                            leftIcon={<div />}
                                            fontWeight={'bold'}
                                        >
                                            Introducción
                                        </Button>
                                        <Button
                                            bg={'transparent'}
                                            rounded={50}
                                            color="white"
                                            fontWeight={'300'}
                                            rightIcon={<div />}
                                            leftIcon={<div />}
                                            _hover={{ bg: 'transparent' }}
                                            onClick={() => window.location.href = '/contacto'}
                                        >
                                            Contáctanos
                                        </Button>
                                    </div>
                                    <Stack direction={'row'}>
                                        <a href={'https://twitter.com/GRUPO_TICONSA'} target="_blank">
                                            <SocialButton>
                                                <FaTwitter />
                                            </SocialButton>
                                        </a>
                                        <a href={'https://www.youtube.com/@GRUPOTICONSASADECV'} target="_blank">
                                            <SocialButton>
                                                <FaYoutube />
                                            </SocialButton>
                                        </a>
                                        <a href={'https://www.instagram.com/grupo_ticonsa/'} target="_blank">
                                            <SocialButton>
                                                <FaInstagram />
                                            </SocialButton>
                                        </a>
                                        <a href={'https://www.facebook.com/GrupoTiconsa/'} target="_blank">
                                            <SocialButton>
                                                <FaFacebook />
                                            </SocialButton>
                                        </a>
                                        <a href={'https://www.linkedin.com/company/grupo-ticonsa/'} target="_blank">
                                            <SocialButton>
                                                <FaLinkedin />
                                            </SocialButton>
                                        </a>
                                    </Stack>
                                    <div className="animated-accordion">
                                        <RiArrowDownSLine className='text-3xl' color="white" />
                                    </div>

                                </Stack>
                            </Box>
                        </SplitMergeAnimation>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}