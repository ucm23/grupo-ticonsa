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
const consdata = [
  {
    id: 0,
    nombre: "TRABE CAJÓN",
    descripcion:
      "Son elementos que destacan por su alta eficiencia estructural, gracias a su sección hueca a lo largo de casi toda su longitud, dejando únicamente los extremos como zonas macizas. Esto permite una relación óptima entre resistencia y peso.\nExisten diferentes geometrías con peraltes que van de 85 a 180 cm, capaces de cubrir claros desde 10 hasta 35 metros. Su forma de trapecio invertido las hace muy estables y resistentes a torsión, tanto durante su manipulación como en su etapa de servicio.\nRequieren un mantenimiento mínimo, ofrecen una gran capacidad de carga y brindan una elevada seguridad estructural. Su montaje puede realizarse mediante maniobras simples con grúa, y también pueden ser lanzadas.",
    usos: [
      "Puentes vehiculares",
      "Viaductos elevados",
      "Pasos a desnivel",
      "Puentes peatonales",
      "Distribuidores viales",
      "Puentes ferroviarios",
      "Gasas de acceso o salida de viaductos elevados",
      "Sistemas de piso en edificaciones con grandes claros o cargas extraordinarias",
    ],
    url: "/productos/Productos_ticonsa/RENDER TRABE CAJÓN.png",
  },
  {
    id: 1,
    nombre: "LOSA TT",
    descripcion:
      "Son elementos formados por dos nervaduras que proporcionan rigidez y aleros que funcionan como cimbra para recibir el firme de compresión. Su peralte varía entre 30 y 120 cm, y su ancho entre 170 y 350 cm.\nSon piezas muy estables, con una excelente relación peso-capacidad de carga.Pueden almacenarse, transportarse y montarse fácilmente, sin necesidad de estructuras secundarias temporales.\nGracias a su esbeltez, permiten importantes ahorros en el uso de materiales respecto a las losas macizas, siendo ideales para cubrir grandes claros debido a su buen comportamiento ante flexión vertical.",
    usos: [
      "Sistemas de piso en edificaciones comerciales e industriales",
      "Puentes y pasos a desnivel",
      "Pisos y rampas en estacionamientos",
      "Cubiertas ligeras",
      "Muros estructurales",
      "Tanques de almacenamiento de agua",
    ],
    url: "/productos/Productos_ticonsa/RENDER LOSA TT ESBELTA.png",
  },
  {
    id: 2,
    nombre: "LOSA TT ROBUSTA",
    descripcion:
      "Variante de la LOSA TT, diseñada para soportar mayores cargas y cubrir claros más amplios. Cuenta con nervaduras más anchas para alojar un mayor número de cables de presfuerzo. Su peralte varía entre 60 y 120 cm, y su ancho entre 170 y 350 cm.\nAl igual que las losas TT convencionales, son versátiles y su instalación no requiere preparaciones especiales.",
    usos: [
      "Puentes vehiculares de carga pesada",
      "Puentes ferroviarios",
      "Naves industriales con grandes claros o cargas extraordinarias",
      "Estacionamientos para tránsito pesado",
      "Centros logísticos",
      "Auditorios",
      "Hangares",
      "Centros de exposiciones",
      "Arenas y canchas deportivas",
    ],
    url: "/productos/Productos_ticonsa/RENDER LOSA TT ROBUSTA.png",
  },
  {
    id: 3,
  nombre: "TRABE AASHTO",
  descripcion:
    "Elementos en forma de 'I', que pueden ser pretensados o postensados, diseñados conforme a los estándares de la <i>American Association of State Highway and Transportation Officials (AASHTO)</i>.\nExisten seis tamaños estándar, cada uno con capacidades estructurales distintas.\nGracias a su estandarización y facilidad de fabricación, son una de las opciones preferidas por los ingenieros estructuristas en proyectos de infraestructura.",
  usos: [
    "Puentes vehiculares y peatonales, carreteros y urbanos",
    "Distribuidores viales y pasos a desnivel",
    "Viaductos elevados",
  ],
  dimensiones: [
    { tipo: "AASHTO I", peralte: "70 cm", longitud: "10 a 12 m" },
    { tipo: "AASHTO II", peralte: "91 cm", longitud: "12 a 15 m" },
    { tipo: "AASHTO III", peralte: "115 cm", longitud: "16 a 24 m" },
    { tipo: "AASHTO IV", peralte: "135 cm", longitud: "21 a 30 m" },
    { tipo: "AASHTO V", peralte: "160 cm", longitud: "27 a 36 m" },
    { tipo: "AASHTO VI", peralte: "186 cm", longitud: "33 a 43 m" },
  ],
  url: "/productos/Productos_ticonsa/RENDER TRABE AASHTO.png",
  },
  {
    id: 4,
    nombre: "TRABE ARTESA TIPO A",
    descripcion:
      "Elementos en forma de 'U', con fondo plano y paredes laterales inclinadas. Son predominantemente huecas, aunque pueden incorporar zonas macizas para formar diafragmas estructurales.\nTienen alturas comunes entre 60 y 250 cm, y longitudes de 20 a 30 m. Están diseñadas para soportar grandes cargas y resistir altos momentos flexionantes y cortantes, superando en rigidez a secciones tipo 'I' o 'T'. Su estabilidad facilita la manipulación y el montaje.",
    usos: [
      "Puentes vehiculares y peatonales",
      "Pasos a desnivel",
      "Obras hidráulicas (canales)",
      "Sistemas de piso en naves industriales con altos requerimientos de carga",
      "Estacionamientos para tránsito pesado",
    ],
    url: "/productos/Productos_ticonsa/Render TRABE CAJON DEL VIADUCTO BICENTENARIO.png",
  },
  {
    id: 5,
    nombre: "TRABE ARTESA TIPO B",
    descripcion:
      "Variante de la Trabe Artesa Tipo A, que conserva sus principales características y ventajas estructurales.\nLa diferencia principal radica en que permite una conexión más sencilla con otros elementos estructurales.",
    usos: [
      "Puentes vehiculares y peatonales",
      "Pasos a desnivel",
      "Obras hidráulicas (canales)",
      "Sistemas de piso en naves industriales con altos requerimientos de carga",
      "Estacionamientos para tránsito pesado",
    ],
    url: "/productos/Productos_ticonsa/RENDER TRABE CAJON DEL LIBRAMIENTO PUEBLA.png",
  },
  {
    id: 6,
    nombre: "LOSA MULTI-T",
    descripcion:
      "Elemento de alta ingeniería, originalmente diseñado para edificaciones hoteleras, pero adaptable a otros tipos de construcción por sus propiedades geométricas y estructurales.\nFusiona el sistema de piso con las trabes portantes, incorporando presfuerzo en ambos ejes (trabes y nervaduras). Sus dimensiones van de 14 a 18 m de largo, 5 a 6 m de ancho y apenas 51 cm de peralte.\nDiseñadas para apoyarse en cuatro puntos, son autoportantes y no requieren cimbras, puntales ni estructuras temporales.\nPor su rapidez de montaje, han sido empleadas en más de 50 hoteles en México y ya se utilizan en el extranjero.",
    usos: [
      "Proyectos hoteleros, comerciales, industriales, hospitales, escuelas donde el tiempo de ejecución es crítico",
    ],
    url: "/productos/Productos_ticonsa/TETRAT.png",
  },
  {
    id: 7,
    nombre: "TRABES NEBRASKA",
    descripcion:
      "Elementos presforzados en forma de 'I', disponibles en seis tamaños, cada uno con capacidades estructurales distintas.\nGracias a su esbeltez, ofrecen una excelente relación peso-capacidad de carga. Sin embargo, requieren accesorios adicionales para su manipulación, evitando deformaciones por pandeo lateral. Durante el montaje, es común asegurar su estabilidad con puntales hasta que se integran mediante diafragmas.",
    usos: [
      "Puentes vehiculares y peatonales",
      "Infraestructura ferroviaria",
      "Estructuras provisionales o modulares",
      "Viaductos elevados urbanos o carreteros",
    ],
    dimensiones: [
      { tipo: "Nebraska NU-135", peralte: "135 cm", longitud: "20 a 30 m" },
      { tipo: "Nebraska NU-160", peralte: "160 cm", longitud: "25 a 32 m" },
      { tipo: "Nebraska NU-180", peralte: "180 cm", longitud: "30 a 40 m" },
      { tipo: "Nebraska NU-200", peralte: "200 cm", longitud: "35 a 42 m" },
      { tipo: "Nebraska NU-220", peralte: "220 cm", longitud: "40 a 48 m" },
      { tipo: "Nebraska NU-240", peralte: "240 cm", longitud: "45 a 50 m" },
    ],
    url: "/productos/Productos_ticonsa/RENDER TRABE NEBRASKA.png",
  },
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
              {consdata[0] && (
                <Skeleton isLoaded={!loadingImages}>
                  <Image
                    src={consdata[0].url}
                    alt={consdata[0].nombre}
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
            {consdata.map((product) => (
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
                        objectFit="contair"
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
}
export default Products;
