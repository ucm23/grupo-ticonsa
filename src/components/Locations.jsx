import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import test from '../assets/testimonials.json'

const Testimonial = ({children}) => 
    <Box>{children}</Box>


const TestimonialContent = ({children}) => 
    <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
            content: `""`,
            w: 0,
            h: 0,
            borderLeft: 'solid transparent',
            borderLeftWidth: 16,
            borderRight: 'solid transparent',
            borderRightWidth: 16,
            borderTop: 'solid',
            borderTopWidth: 16,
            borderTopColor: useColorModeValue('white', 'gray.800'),
            pos: 'absolute',
            bottom: '-16px',
            left: '50%',
            transform: 'translateX(-50%)',
        }}
    >
        {children}
    </Stack>

const TestimonialHeading = ({children}) => 
    <Heading as={'h3'} fontSize={'xl'} color={"#131313"} >
      {children}
    </Heading>

const TestimonialText = ({children}) => 
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.900', 'gray.900')}
      fontSize={'md'}
      mb={0}
    >
      {children}
    </Text>

const TestimonialAvatar = ({
  src,
  name,
}) => 
    <Flex align={'center'} mt={8} direction={'column'} bg={"#131313"} >
        <Avatar src={src} mb={2} />
        <Stack spacing={-1} align={'center'}>
            <Text fontSize={'md'} fontWeight={600}>{name}</Text>
        </Stack>
    </Flex>


export default function Locations() {
  return (
    <Box bg={"#131313"}>
      <Container maxW={'7xl'} pb={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight='110%'
                textAlign='center'
                mb={0}
                mt={5}
            >
                <Text as='b' color='blue.500'>
                    Contactanos
                </Text>
            </Heading>
        </Stack>
        <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
        >

            {
                test.map( t =>         
                    <Testimonial key={t.id}>
                        <TestimonialContent>
                            <TestimonialHeading>
                                {t.title}
                            </TestimonialHeading>
                            <TestimonialText>
                                {t.text}
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={t.src}
                            name={t.name}
                        />
                    </Testimonial>
                )
            }

        </Stack>
      </Container>
    </Box>
  )
}

Testimonial.propTypes = { children : PropTypes.node }
TestimonialContent.propTypes = { children : PropTypes.node }
TestimonialHeading.propTypes = { children : PropTypes.node }
TestimonialText.propTypes = { children : PropTypes.node }

TestimonialAvatar.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
}