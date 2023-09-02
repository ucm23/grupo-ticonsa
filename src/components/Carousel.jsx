import { useState } from 'react'
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

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Carousel() {

  const [slider, setSlider] = useState(null)

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })
  const mobile = useBreakpointValue({ base: true, md: false });

  const cards = [
    {
      phone: 'Cancún: (998) 892-3143',
      image:'/1.jpg',
    },
    {
      phone: 'México: (55) 5484-8364',
      image:'/2.jpg',
    },
    {
      phone: 'Teotihuacán: (594) 956-1645',
      image: '/3.jpg',
    },
  ]

  const handleBeforeChange = () => {
    document.querySelectorAll('.image-part').forEach((imagePart) => {
      imagePart.style.animation = 'none';
      void imagePart.offsetWidth; // Forced reflow to reset animation
      imagePart.style.animation = 'splitAndMerge 6s linear';
    });
  };

  return (
    <Box position={'relative'} height={'500px'} width={'full'} overflow={'hidden'}>

      {
        !mobile && (
          <>    
              <IconButton
                aria-label="left-arrow"
                variant="solid"
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
                variant="solid"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
              </IconButton>
          </>
        )
      }

      <Slider {...settings} ref={(slider) => setSlider(slider)} afterChange={handleBeforeChange} >
        {
          cards.map((card, index) => (
              <Box
                key={index}
                height={'5xl'}
              >
                    <SplitMergeAnimation
                        imageUrl={card.image} 
                        numParts={mobile?3:6}
                    >
                        <Container 
                          zIndex={10} 
                          size="container.lg" 
                          height="600px" 
                          p={0} 
                          width='100%' 
                          position="relative" 
                          top={
                            mobile
                            ? '-35rem'
                            : '-30rem'
                          }
                        >
                          <Stack
                            spacing={6}
                            w={'full'}
                            maxW={'100%'}
                            p={3}
                          >
                            <Heading 
                              className='text-center glass' 
                              fontSize={{base: '4xl',md: '5xl',lg: '6xl'}}
                              color='white'
                              mb={0}
                            > Grupo Ticonsa</Heading>          
          
                            <Button
                              px={4}
                              fontSize={'2xl'}
                              rounded={'md'}
                              colorScheme='facebook'
                              color={'white'}
                              onClick={()=>{}}
                              rightIcon={<MdCall />}
                            >
                                {card.phone}
                            </Button>
          
                          </Stack>
                        </Container>
                    </SplitMergeAnimation>
                  
              </Box>
          ))
        }
      </Slider>
    </Box>
  )
}