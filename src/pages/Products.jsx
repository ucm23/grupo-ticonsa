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
import { CheckCircleIcon, StarIcon, SettingsIcon, Search2Icon } from "@chakra-ui/icons";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NavBar from "../components/NavBar";
import ProductModal from "../components/ProductModal";
import productsData from "../assets/products.json";
import { useLanguage } from "../i18n/LanguageContext";

const carouselImages = [
    "/productos/photos/1.jpg",
    "/productos/photos/2.jpg",
    "/productos/photos/3.jpg",
    "/productos/photos/4.jpg",
];



const Products = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loadingImages, setLoadingImages] = useState(true);
    const { t } = useLanguage();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const consdata = [
        {
            id: 0,
            nombre: t?.products?.catalog.trabeCajon.nombre,
            descripcion: t?.products?.catalog.trabeCajon.descripcion,
            usos: t?.products?.catalog.trabeCajon.usos,
            url: t?.products?.catalog.trabeCajon.url
        },
        {
            id: 1,
            nombre: t?.products?.catalog.losaTT.nombre,
            descripcion: t?.products?.catalog.losaTT.descripcion,
            usos: t?.products?.catalog.losaTT.usos,
            url: t?.products?.catalog.losaTT.url
        },
        {
            id: 2,
            nombre: t?.products?.catalog.losaTTRobusta.nombre,
            descripcion: t?.products?.catalog.losaTTRobusta.descripcion,
            usos: t?.products?.catalog.losaTTRobusta.usos,
            url: t?.products?.catalog.losaTTRobusta.url
        },
        {
            id: 3,
            nombre: t?.products?.catalog.trabeAASHTO.nombre,
            descripcion: t?.products?.catalog.trabeAASHTO.descripcion,
            usos: t?.products?.catalog.trabeAASHTO.usos,
            caption: t?.products?.catalog.trabeAASHTO.caption,
            dimensiones: t?.products?.catalog.trabeAASHTO.dimensiones,
            url: t?.products?.catalog.trabeAASHTO.url
        },
        {
            id: 4,
            nombre: t?.products?.catalog.trabeArtesaTipoA.nombre,
            descripcion: t?.products?.catalog.trabeArtesaTipoA.descripcion,
            usos: t?.products?.catalog.trabeArtesaTipoA.usos,
            url: t?.products?.catalog.trabeArtesaTipoA.url
        },
        {
            id: 5,
            nombre: t?.products?.catalog.trabeArtesaTipoB.nombre,
            descripcion: t?.products?.catalog.trabeArtesaTipoB.descripcion,
            usos: t?.products?.catalog.trabeArtesaTipoB.usos,
            url: t?.products?.catalog.trabeArtesaTipoB.url
        },
        {
            id: 6,
            nombre: t?.products?.catalog.losaMultiT.nombre,
            descripcion: t?.products?.catalog.losaMultiT.descripcion,
            usos: t?.products?.catalog.losaMultiT.usos,
            url: t?.products?.catalog.losaMultiT.url
        },
        {
            id: 7,
            nombre: t?.products?.catalog.trabeNebraska.nombre,
            descripcion: t?.products?.catalog.trabeNebraska.descripcion,
            usos: t?.products?.catalog.trabeNebraska.usos,
            caption: t?.products?.catalog.trabeNebraska.caption,
            dimensiones: t?.products?.catalog.trabeNebraska.dimensiones,
            url: t?.products?.catalog.trabeNebraska.url
        }
    ];

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

    return (
        <NavBar photo={true} mobile={mobile}>
            <Box
                bg="white"
                minH="100vh"
                //backgroundImage="radial-gradient(circle, #e2e8f0 1px, transparent 1px)"
                backgroundSize="20px 20px"
            >
                <Box position="relative" h={mobile ? "60vh" : "600px"} w="full" overflow="hidden">
                    {carouselImages.map((image, index) => (
                        <Box
                            key={`carousel-image-2-${index}`}
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
                                    {t?.products?.title}
                                </Heading>
                                <Text
                                    maxW="600px"
                                    fontSize={mobile ? "md" : "lg"}
                                    fontStyle="italic"
                                    textShadow="1px 1px 6px rgba(0,0,0,0.6)"
                                    textAlign={mobile ? "center" : "left"}
                                    mx="auto"
                                >
                                    {t?.products?.subtitle}
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
                                key={`carousel-indicator-${index}`}
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

                <Box my={'145px'} mt={mobile ? "40px" : "80px"} className={`${mobile ? "px-4" : "px-40"} `}>
                    <Flex direction={mobile ? "column" : "row"} align="center" gap={10} mb={10}>
                        <Box flex="1" maxW={mobile ? "100%" : "40%"}>
                            {consdata[0] && (
                                <Skeleton isLoaded={!loadingImages}>
                                    <Image
                                        src={`productos/renders/inges.png`}
                                        alt={consdata[0].nombre}
                                        borderRadius="2xl"
                                        //w="full"
                                        className="w-[90%]"
                                        onLoad={() => setLoadingImages(false)}
                                    //fallbackSrc="/productos/placeholder.png"
                                    />
                                </Skeleton>
                            )}
                        </Box>
                        <Box flex="1">
                            <Heading
                                as="h2"
                                fontSize="5xl"
                                fontWeight="bold"
                                color="gray.800"
                                mb={4}
                            >
                                {t?.products?.engineeringExcellence}
                            </Heading>
                            <Text fontSize="md" color="gray.600" mb={6}>
                                {t?.products?.productsDesc}
                            </Text>
                            <Stack spacing={6}>
                                <Flex align="center" gap={5}>
                                    <CheckCircleIcon color="green.400" boxSize={30} pb={1.5} />
                                    <Box>
                                        <Heading as="h3" fontSize="xl" fontWeight="semibold" color="black" mb={1}>
                                            {t?.products?.quality}
                                        </Heading>
                                        <Text fontSize="sm" color="gray.500">
                                            <div dangerouslySetInnerHTML={{ __html: t?.products?.qualityDesc }} />
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={5}>
                                    <SettingsIcon color="blue.400" boxSize={30} pb={1.5} />
                                    <Box>
                                        <Heading as="h3" fontSize="xl" fontWeight="semibold" color="black" mb={1}>
                                            {t?.products?.innovation}
                                        </Heading>
                                        <Text fontSize="sm" color="gray.500">
                                            <div dangerouslySetInnerHTML={{ __html: t?.products?.innovationDesc }} />
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={5}>
                                    <StarIcon color="yellow.400" boxSize={30} pb={1.5} />
                                    <Box>
                                        <Heading as="h3" fontSize="xl" fontWeight="semibold" color="black" mb={1}>
                                            {t?.products?.versatility}
                                        </Heading>
                                        <Text fontSize="sm" color="gray.500">
                                            <div dangerouslySetInnerHTML={{ __html: t?.products?.versatilityDesc }} />
                                        </Text>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>
                    </Flex>
                </Box>

                <Box px={mobile ? 4 : 20} py={10} w="100%">
                    <Heading fontSize="4xl" mb={2} textAlign="left" color="gray.800">
                        {t?.products?.catalog_} a
                    </Heading>
                    <Text fontSize='md' mb={10} textAlign="left" color="gray.400">
                        {t?.products?.catalogSubtitle} b
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                        {consdata.map((product) => (
                            <div
                                key={`product-1-${product.id}`}
                                className="product-card"
                                onClick={() => handleOpenModal(product)}
                            >
                                <div className="image-container-2">
                                    <div className="overlay-content">
                                        <Search2Icon size={24} style={{ margin: '8px' }} />
                                        <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{t.products.viewMore}</span>
                                    </div>
                                    <Image
                                        src={`productos/renders/${product?.url}.png`}
                                        alt={product.nombre}
                                        style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            //background: 'white',
                                            borderTopLeftRadius: '0.5rem',
                                            borderTopRightRadius: '0.5rem',
                                            filter: 'drop-shadow(5px 5px 8px rgba(220, 160, 100, 0.7)',
                                            //boxShadow: '5px 5px 10px 0 red'

                                        }}
                                        //onError={() => handleImageError(product.id)}
                                        onLoad={() => setLoadingImages(false)}
                                        loading="lazy"
                                    />

                                </div>
                                <VStack align="start" p={4} pt={2} spacing={1}>
                                    <Heading fontSize="xl" fontWeight="semibold" color="gray.800">
                                        {product.nombre}
                                    </Heading>
                                    <Text
                                        fontSize="sm" color="gray.600" noOfLines={2}
                                        dangerouslySetInnerHTML={{
                                            __html: product.descripcion
                                        }}>
                                    </Text>
                                </VStack>
                            </div>
                            /*<Box
                                key={product.id}
                                bg="white"
                                borderRadius="md"
                                overflow="hidden"
                                cursor="pointer"
                                position="relative"
                                / *_hover={{
                                    transform: "translateY(-5px)",
                                    transition: "transform 0.3s",
                                }}* /
                                onClick={() => handleOpenModal(product)}
                            >
                                <Box
                                    position="relative"
                                    width="100%"
                                    paddingTop="56.25%"
                                    overflow="hidden"
                                    bg="white"
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        bg: 'rgba(0, 0, 0, 0.5)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        color: 'white',
                                        _hover: {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Image
                                        src={`productos/renders/${product?.url}.png`}
                                        alt={product.nombre}
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        width="100%"
                                        height="100%"
                                        objectFit="contain"
                                        bg="white"
                                        borderTopRadius='lg'
                                        onError={() => handleImageError(product.id)}
                                        onLoad={() => setLoadingImages(false)}
                                        fallbackSrc="/productos/placeholder.png"
                                    />
                                    <Box
                                        position="absolute"
                                        top="50%"
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                        opacity={0}
                                        transition="opacity 0.3s"
                                        textAlign="center"
                                        zIndex={1}
                                        _hover={{
                                            opacity: 1,
                                        }}
                                    >
                                        <StarIcon  boxSize={6} mb={2} color="white" />
                                        <Text fontSize="sm" fontWeight="semibold" color="white">
                                            Ver más
                                        </Text>
                                    </Box>
                                </Box>
                                <VStack align="start" p={4} spacing={2}>
                                    <Heading fontSize="xl" fontWeight="semibold" color="gray.800">
                                        {product.nombre}
                                    </Heading>
                                    <Text fontSize="sm" color="gray.600" noOfLines={2}>
                                        {product.descripcion}
                                    </Text>
                                </VStack>
                            </Box>*/
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>

            <ProductModal isOpen={isOpen} onClose={onClose} product={selectedProduct} t={t} />
        </NavBar>
    );
}
export default Products;