import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Link } from 'wouter'

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
        bg={'#03296A'} 
        color={useColorModeValue('gray.50', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW='6xl'
        py={4}
        spacing={4}
        justify='center'
        align='center'
      >
          <img 
            src="/222.jpg" 
            alt="logo Grupo Ticonsa"
            style={{ width: '7rem' }}
          />
        
        <Stack direction='row' spacing={6}>
          <Link href={'/'}>
              Inicio
          </Link>
          <Link href={'/historia'}>
            Historia
          </Link>
          <Link href={'/contacto'}>
            Contacto
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text textAlign={'center'} >© 2023 Grupo Ticonsa. Todo los derechos reservados.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'/'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'/'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'/'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/GrupoTiconsa/?locale=es_LA'}>
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

SocialButton.propTypes = {
    children : PropTypes.node,
    label : PropTypes.string,
    href : PropTypes.string,
}
