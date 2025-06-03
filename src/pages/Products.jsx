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
  Button,
  useDisclosure,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon, SettingsIcon } from "@chakra-ui/icons";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NavBar from "../components/NavBar";
import ProductModal from "../components/ProductModal";
import productsData from "../assets/products.json";

const carouselImages = [
  "/productos/producto1.jpeg",
  "/productos/producto2.jpg",
  "/productos/producto3.jpeg",
];

const Products = () => {
  const mobile = useBreakpointValue({ base: true, md: false });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadingImages, setLoadingImages] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleImageError = (productId) => {
    setImageErrors((prev) => ({ ...prev, [productId]: true }));
  };

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
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                color="white"
              >
                <Heading
                  fontSize={mobile ? "3xl" : "5xl"}
                  fontWeight="bold"
                  textShadow="2px 2px 8px rgba(0,0,0,0.7)"
                  mb={6}
                >
                  Soluciones Estructurales de Vanguardia
                </Heading>
                <Text
                  maxW="600px"
                  fontSize={mobile ? "md" : "lg"}
                  fontStyle="italic"
                  textShadow="1px 1px 6px rgba(0,0,0,0.6)"
                >
                  Elementos prefabricados de máxima calidad para proyectos exigentes
                </Text>
              </Box>
            </Box>
          ))}

          <Flex
            position="absolute"
            bottom="4"
            left="50%"
            transform="translateX(-50%)"
            zIndex="1"
            gap="2"
          >
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
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? carouselImages.length - 1 : prev - 1
              )
            }
          />
          <IconButton
            {...arrowStyles}
            right="2%"
            aria-label="Siguiente"
            icon={<FiChevronRight size={24} />}
            borderRadius="full"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
            }
          />
        </Box>

        <Box px={mobile ? 4 : 20} py={10}>
          <Flex direction={mobile ? "column" : "row"} align="center" gap={10} mb={10}>
            <Box flex="1" maxW={mobile ? "100%" : "40%"}>
              {productsData[0] && (
                <Skeleton isLoaded={!loadingImages}>
                  <Image
                    src={productsData[0].url}
                    alt={productsData[0].nombre}
                    borderRadius="2xl"
                    w="full"
                    onError={() => handleImageError(productsData[0].id)}
                    onLoad={() => setLoadingImages(false)}
                    fallbackSrc="/productos/placeholder.png"
                  />
                </Skeleton>
              )}
            </Box>
            <Box flex="1">
              <Heading
                as="h2"
                fontSize="3xl"
                fontWeight="bold"
                color="gray.800"
                mb={4}
              >
                Ingeniería Precisión para Construcciones de Excelencia
              </Heading>
              <Text fontSize="md" color="gray.600" mb={6}>
                Productos prefabricados diseñados para maximizar resistencia, durabilidad y eficiencia en cada proyecto.
              </Text>
              <Stack spacing={6}>
                <Flex align="start" gap={3}>
                  <CheckCircleIcon color="green.400" boxSize={6} />
                  <Box>
                    <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.800" mb={1}>
                      Control de Calidad Riguroso
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      Inspección en cada fase de producción.
                    </Text>
                  </Box>
                </Flex>
                <Flex align="start" gap={3}>
                  <SettingsIcon color="blue.400" boxSize={6} />
                  <Box>
                    <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.800" mb={1}>
                      Soporte Técnico Especializado
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      Asesoramiento para proyectos complejos.
                    </Text>
                  </Box>
                </Flex>
                <Flex align="start" gap={3}>
                  <StarIcon color="yellow.400" boxSize={6} />
                  <Box>
                    <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.800" mb={1}>
                      Innovación Constante
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      Desarrollo de nuevas soluciones estructurales.
                    </Text>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Box>

        <Box px={mobile ? 4 : 20} py={10} w="100%">
          <Heading fontSize="4xl" mb={8} textAlign="center" color="gray.800">
            Catálogo de Productos
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {productsData.map((product) => (
              <Box
                key={product.id}
                bg="white"
                borderRadius="md"
                overflow="hidden"
                cursor="pointer"
                border="1px solid #e2e8f0"
                _hover={{
                  transform: "translateY(-5px)",
                  transition: "transform 0.3s",
                  boxShadow: "lg",
                }}
              >
                <Box
                  position="relative"
                  width="100%"
                  paddingTop="56.25%"
                  borderTopRadius="md"
                  overflow="hidden"
                  bg="white"
                >
                  <Skeleton isLoaded={!loadingImages}>
                    {imageErrors[product.id] ? (
                      <Flex
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        bg="gray.100"
                        align="center"
                        justify="center"
                        flexDirection="column"
                      >
                        <Text color="gray.500" textAlign="center" px={2}>
                          Imagen no disponible
                        </Text>
                        <Text fontSize="sm" color="gray.400" mt={2}>
                          {product.nombre}
                        </Text>
                      </Flex>
                    ) : (
                      <Image
                        src={product.url}
                        alt={product.nombre}
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        bg="white"
                        onError={() => handleImageError(product.id)}
                        onLoad={() => setLoadingImages(false)}
                        fallbackSrc="/productos/placeholder.png"
                      />
                    )}
                  </Skeleton>
                </Box>
                <VStack align="start" p={4} spacing={2}>
                  <Heading fontSize="xl" fontWeight="semibold" color="gray.800">
                    {product.nombre}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" noOfLines={2}>
                    {product.descripcion || "Descripción no disponible."}
                  </Text>
                  <Button
                    colorScheme="orange"
                    size="sm"
                    onClick={() => handleOpenModal(product)}
                    px={6}
                  >
                    Ver detalles
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <ProductModal isOpen={isOpen} onClose={onClose} product={selectedProduct} />
    </NavBar>
  );
};

export default Products;
