import React, { useState, useEffect } from "react";
import {
  useBreakpointValue,
  Stack,
  Box,
  Text,
  SimpleGrid,
  Image,
  Heading,
  VStack,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon, SettingsIcon } from "@chakra-ui/icons";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NavBar from "../components/NavBar";

const carouselImages = [
  "/productos/producto1.jpeg",
  "/productos/producto2.jpg",
  "/productos/producto3.jpeg",
];

const productsData = [
  {
    id: 1,
    name: "RENDER LOSA TT ESBELTA",
    image: "/productos/Productos_ticonsa/RENDER LOSA TT ESBELTA.png",
  },
  {
    id: 2,
    name: "RENDER LOSA TT ROBUSTA",
    image: "/productos/Productos_ticonsa/RENDER LOSA TT ROBUSTA.png",
  },
  {
    id: 3,
    name: "RENDER TRABE AASHTO",
    image: "/productos/Productos_ticonsa/RENDER TRABE AASHTO.png",
  },
  {
    id: 4,
    name: "RENDER TRABE CAJON DEL LIBRAMIENTO PUEBLA",
    image: "/productos/Productos_ticonsa/RENDER TRABE CAJON DEL LIBRAMIENTO PUEBLA.png",
  },
  {
    id: 5,
    name: "RENDER TRABE CAJON DEL VIADUCTO BICENTENARIO",
    image: "/productos/Productos_ticonsa/Render TRABE CAJON DEL VIADUCTO BICENTENARIO.png",
  },
  {
    id: 6,
    name: "RENDER TRABE CAJON",
    image: "/productos/Productos_ticonsa/RENDER TRABE CAJÓN.png",
  },
  {
    id: 7,
    name: "RENDER TRABE NEBRASKA",
    image: "/productos/Productos_ticonsa/RENDER TRABE NEBRASKA.png",
  },
  {
    id: 8,
    name: "TETRAT",
    image: "/productos/Productos_ticonsa/TETRAT.png",
  },
];

const Products = () => {
  const mobile = useBreakpointValue({ base: true, md: false });
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    color: "white",
    bg: useColorModeValue("blackAlpha.600", "whiteAlpha.600"),
    _hover: { bg: useColorModeValue("blackAlpha.800", "whiteAlpha.800") },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <NavBar photo={true} mobile={mobile}>
      <Box
        bg="white"
        minH="100vh"
        backgroundImage="radial-gradient(circle, #e2e8f0 1px, transparent 1px)"
        backgroundSize="20px 20px"
      >
        <Box position="relative" h={mobile ? "60vh" : "90vh"} w="full" overflow="hidden">
          {carouselImages.map((image, index) => (
            <Box
              key={index}
              position="absolute"
              w="full"
              h="full"
              transition="opacity 1s ease-in-out"
              opacity={index === currentSlide ? 1 : 0}
            >
              <Image
                src={image}
                alt={`Producto ${index + 1}`}
                w="full"
                h="full"
                objectFit="cover"
                filter="brightness(0.8)"
              />
              <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white">
                <Heading fontSize={mobile ? "3xl" : "5xl"} fontWeight="bold" textShadow="2px 2px 8px rgba(0,0,0,0.7)" mb={6}>
                  Nuestros Productos Destacados
                </Heading>
                <Text maxW="600px" fontSize={mobile ? "md" : "lg"} fontStyle="italic" textShadow="1px 1px 6px rgba(0,0,0,0.6)">
                  Explora la calidad y variedad que Grupo Ticonsa ofrece para tus proyectos
                </Text>
              </Box>
            </Box>
          ))}

          <Flex position="absolute" bottom="4" left="50%" transform="translateX(-50%)" zIndex="1" gap="2">
            {carouselImages.map((_, index) => (
              <Box
                key={index}
                h="2px"
                w={currentSlide === index ? "30px" : "15px"}
                bg={currentSlide === index ? "white" : "whiteAlpha.600"}
                transition="all 0.3s ease"
                borderRadius="full"
                cursor="pointer"
                _hover={{ bg: "whiteAlpha.800" }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </Flex>

          <IconButton
            {...arrowStyles}
            left="2%"
            aria-label="Anterior"
            icon={<FiChevronLeft size={24} />}
            borderRadius="full"
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
          />
          <IconButton
            {...arrowStyles}
            right="2%"
            aria-label="Siguiente"
            icon={<FiChevronRight size={24} />}
            borderRadius="full"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
          />
        </Box>

        <Box px={mobile ? 4 : 20} py={10}>
          <Flex direction={mobile ? "column" : "row"} align="center" gap={10} mb={10}>
            <Box flex="1" maxW={mobile ? "100%" : "40%"}>
              <Image src={productsData[0].image} alt={productsData[0].name} borderRadius="2xl" w="full" />
            </Box>
            <Box flex="1">
              <Heading as="h2" size="xl" fontWeight="bold" color="gray.800" mb={4}>
                Soluciones de calidad para tus proyectos estructurales
              </Heading>
              <Text color="gray.600" mb={6}>
                En Grupo Ticonsa ofrecemos productos diseñados para asegurar resistencia, durabilidad y eficiencia
              </Text>
              <Stack spacing={6}>
                <Flex align="start" gap={3}>
                  <CheckCircleIcon color="green.400" boxSize={6} />
                  <Box>
                    <Heading as="h3" size="md" fontWeight="semibold" color="gray.800" mb={1}>
                      Garantía de Calidad
                    </Heading>
                    <Text color="gray.500">Rigurosos controles de calidad en todos nuestros productos</Text>
                  </Box>
                </Flex>
                <Flex align="start" gap={3}>
                  <SettingsIcon color="blue.400" boxSize={6} />
                  <Box>
                    <Heading as="h3" size="md" fontWeight="semibold" color="gray.800" mb={1}>
                      Soporte Técnico
                    </Heading>
                    <Text color="gray.500">Asesoramiento especializado para cada proyecto</Text>
                  </Box>
                </Flex>
                <Flex align="start" gap={3}>
                  <StarIcon color="yellow.400" boxSize={6} />
                  <Box>
                    <Heading as="h3" size="md" fontWeight="semibold" color="gray.800" mb={1}>
                      Innovación Continua
                    </Heading>
                    <Text color="gray.500">Tecnologías avanzadas en desarrollo constante</Text>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Box>

        <Box px={mobile ? 4 : 20} py={10} w="100%">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {productsData.map(({ id, name, image }) => (
              <Box
                key={id}
                bg="white"
                borderRadius="md"
                overflow="hidden"
                cursor="pointer"
                border="1px solid #e2e8f0"
                _hover={{ transform: "translateY(-5px)", transition: "transform 0.3s" }}
              >
                <Box position="relative" width="100%" paddingTop="56.25%" borderTopRadius="md" overflow="hidden" bg="white">
                  <Image
                    src={image}
                    alt={name}
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    bg="white"
                  />
                </Box>
                <VStack align="start" p={4}>
                  <Heading size="md">{name}</Heading>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </NavBar>
  );
};

export default Products;