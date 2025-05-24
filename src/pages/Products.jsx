import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const carouselImages = [
  "/productos/producto1.jpg",
  "/productos/producto2.jpg",
  "/productos/producto3.jpg",
];

const productsData = [
  {
    id: 1,
    name: "RENDER LOSA TT ESBELTA",
    description: "Descripción breve para RENDER LOSA TT ESBELTA.",
    image: "/productos/Productos_ticonsa/RENDER LOSA TT ESBELTA.png",
  },
  {
    id: 2,
    name: "RENDER LOSA TT ROBUSTA",
    description: "Descripción breve para RENDER LOSA TT ROBUSTA.",
    image: "/productos/Productos_ticonsa/RENDER LOSA TT ROBUSTA.png",
  },
  {
    id: 3,
    name: "RENDER TRABE AASHTO",
    description: "Descripción breve para RENDER TRABE AASHTO.",
    image: "/productos/Productos_ticonsa/RENDER TRABE AASHTO.png",
  },
  {
    id: 4,
    name: "RENDER TRABE CAJON DEL LIBRAMIENTO PUEBLA",
    description: "Descripción breve para RENDER TRABE CAJON DEL LIBRAMIENTO PUEBLA.",
    image: "/productos/Productos_ticonsa/RENDER TRABE CAJON DEL LIBRAMIENTO PUEBLA.png",
  },
  {
    id: 5,
    name: "RENDER TRABE CAJON DEL VIADUCTO BICENTENARIO",
    description: "Descripción breve para RENDER TRABE CAJON DEL VIADUCTO BICENTENARIO.",
    image: "/productos/Productos_ticonsa/Render TRABE CAJON DEL VIADUCTO BICENTENARIO.png",
  },
  {
    id: 6,
    name: "RENDER TRABE CAJON",
    description: "Descripción breve para RENDER TRABE CAJON.",
    image: "/productos/Productos_ticonsa/RENDER TRABE CAJÓN.png",
  },
  {
    id: 7,
    name: "RENDER TRABE NEBRASKA",
    description: "Descripción breve para RENDER TRABE NEBRASKA.",
    image: "/productos/Productos_ticonsa/RENDER TRABE NEBRASKA.png",
  },
  {
    id: 8,
    name: "TETRAT",
    description: "Descripción breve para TETRAT.",
    image: "/productos/Productos_ticonsa/TETRAT.png",
  },
];

const Products = () => {
  const mobile = useBreakpointValue({ base: true, md: false });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    width: "100%",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url('${carouselImages[currentImageIndex]}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease-in-out",
  };

  return (
    <NavBar photo={true} mobile={mobile}>
      <Box style={styles} px={mobile ? 4 : 20}>
        <Text
          fontSize={mobile ? "3xl" : "5xl"}
          fontWeight="bold"
          color="white"
          textAlign="center"
          textShadow="2px 2px 8px rgba(0,0,0,0.7)"
          mb={6}
        >
          Nuestros Productos Destacados
        </Text>
        <Text
          maxW="600px"
          color="white"
          fontSize={mobile ? "md" : "lg"}
          textAlign="center"
          fontStyle="italic"
          textShadow="1px 1px 6px rgba(0,0,0,0.6)"
        >
          Explora la calidad y variedad que Grupo Ticonsa ofrece para tus
          proyectos.
        </Text>
      </Box>

      <Box px={mobile ? 4 : 20} py={10}>
        <Flex
          direction={mobile ? "column" : "row"}
          align="center"
          gap={10}
          mb={10}
        >
          <Box flex="1" maxW={mobile ? "100%" : "40%"}>
            <Image
              src={productsData[0].image}
              alt={productsData[0].name}
              borderRadius="2xl"
              boxShadow="lg"
              w="full"
            />
          </Box>

          <Box flex="1">
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              Soluciones de calidad para tus proyectos estructurales
            </Heading>

            <Text color="gray.600" mb={6}>
              En Grupo Ticonsa, ofrecemos productos diseñados para asegurar la
              resistencia, durabilidad y eficiencia de tus obras. Descubre cómo
              nuestros renders especializados pueden transformar tus construcciones
              con innovación y confianza.
            </Text>

            <Stack spacing={6}>
              <Flex align="start" gap={3}>
                <Box color="#E53E3E" fontSize="24px"></Box>
                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    fontWeight="semibold"
                    color="gray.800"
                    mb={1}
                  >
                    Garantía de Calidad
                  </Heading>
                  <Text color="gray.500">
                    Nuestros productos pasan por rigurosos controles para
                    garantizar el mejor rendimiento en cada proyecto.
                  </Text>
                </Box>
              </Flex>

              <Flex align="start" gap={3}>
                <Box color="#E53E3E" fontSize="24px"></Box>
                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    fontWeight="semibold"
                    color="gray.800"
                    mb={1}
                  >
                    Soporte Técnico Especializado
                  </Heading>
                  <Text color="gray.500">
                    Nuestro equipo está listo para asesorarte y ayudarte a elegir
                    la mejor solución para tu proyecto.
                  </Text>
                </Box>
              </Flex>

              <Flex align="start" gap={3}>
                <Box color="#E53E3E" fontSize="24px"></Box>
                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    fontWeight="semibold"
                    color="gray.800"
                    mb={1}
                  >
                    Innovación Continua
                  </Heading>
                  <Text color="gray.500">
                    Incorporamos tecnologías avanzadas para ofrecer productos
                    eficientes y modernos.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>

      <Box px={mobile ? 4 : 20} py={10} bg="gray.50" w="100%">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {productsData.map(({ id, name, description, image }) => (
            <Box
              key={id}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              overflow="hidden"
              _hover={{ boxShadow: "xl" }}
              cursor="pointer"
              transition="box-shadow 0.3s ease"
            >
              <Image
                src={image}
                alt={name}
                objectFit="cover"
                w="100%"
                h="200px"
              />
              <VStack align="start" p={4}>
                <Heading size="md">{name}</Heading>
                <Text fontSize="sm" color="gray.600">
                  {description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </NavBar>
  );
};

export default Products;