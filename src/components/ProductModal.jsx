import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Image,
    Text,
    Heading,
    Divider,
    Box,
    Flex,
    VStack,
    HStack,
    Icon,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    TableCaption
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";

const color = "#0056A4";

const ProductModal = ({ isOpen, onClose, product }) => {
    if (!product) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size="5xl"
            motionPreset="scale"
        >
            <ModalOverlay bg="rgba(0, 0, 0, 0.6)" backdropFilter="blur(4px)" />
            <ModalContent
                bg="#FFFFFF"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                maxW="1200px"
            >
                <ModalCloseButton
                    size="lg"
                    //borderRadius="full"
                    //bg="gray.100"
                    color="gray.800"
                    _hover={{ bg: "gray.200" }}
                    top={4}
                    right={4}
                    zIndex={2}
                />
                <ModalBody p={8} position="relative" zIndex={1}>
                    <Flex direction={{ base: "column", md: "row" }} gap={3}>
                        <Box flex="0.55" color="#333">
                            <Heading
                                as="h2"
                                fontSize="3xl"
                                fontWeight="extrabold"
                                color={color}
                                mt={10}
                                letterSpacing="wider"
                            >
                                {product.nombre}
                            </Heading>
                            <Text
                                //key={idx}
                                fontSize="md"
                                //lineHeight="1.7"
                                textAlign="justify"
                                color="#333"
                                mb={0}
                                dangerouslySetInnerHTML={{
                                    __html: product.descripcion
                                }}
                            />
                            {product.usos && (
                                <Box mt={6}>
                                    <Heading
                                        fontSize="lg"
                                        mb={2}
                                        mt={3}
                                        color={color}
                                        letterSpacing="wider"
                                    >
                                        Principales usos
                                    </Heading>
                                    <VStack align="start" spacing={0.5}>
                                        {product.usos.map((uso, idx) => (
                                            <HStack key={idx} spacing={2} align="start">
                                                <Icon
                                                    as={FiCheckCircle}
                                                    color={color}
                                                    boxSize={4}
                                                    mt={1}
                                                />
                                                <Text fontSize="md" color="#333" p={0} m={0}>
                                                    {uso}.
                                                </Text>
                                            </HStack>
                                        ))}
                                    </VStack>
                                </Box>
                            )}
                        </Box>
                        <Box
                            flex="0.45"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            p={2}
                            bg="#FFFFFF"
                            mt={3}
                        >
                            <Image
                                src={`/productos/renders/${product?.url}.png`}
                                alt={product.nombre}
                                objectFit="contain"
                                w="100%"
                                maxH="450px"
                                fallbackSrc="/productos/placeholder.png"
                                className="product-image-modal"
                                loading="lazy"
                            />
                        </Box>
                    </Flex>

                    <Flex flex={1} gap={6} w={"100%"}>
                        {product.dimensiones && (
                            <Box mt={0} w={"100%"}>
                                <Heading
                                    fontSize="lg"
                                    mb={2}
                                    color={color}
                                    letterSpacing="wider"
                                >
                                    Dimensiones
                                </Heading>
                                <TableContainer
                                    borderRadius="md"
                                    overflow="hidden"
                                    boxShadow="md"
                                    border={`1px solid ${color}`}
                                    w={"100%"}
                                >
                                    <Table variant="simple" size="sm" minWidth="330px" width={'100%'} w={"100%"}>
                                        <TableCaption>{product?.caption}</TableCaption>
                                        <Thead bg={color}>
                                            <Tr>
                                                <Th color="white" fontWeight="bold" width="33%" >
                                                    Tipo
                                                </Th>
                                                <Th color="white" fontWeight="bold" width="33%" textAlign={'center'}>
                                                    Peralte
                                                </Th>
                                                <Th color="white" fontWeight="bold" width="33%" textAlign={'center'}>
                                                    Longitud
                                                </Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {product.dimensiones.map((dim, idx) => (
                                                <Tr
                                                    key={idx}
                                                    bg={idx % 2 === 0 ? "gray.50" : "white"}
                                                    _hover={{ bg: "gray.100" }}
                                                >
                                                    <Td color="#333" fontSize="sm" py={2} >
                                                        {dim.tipo}
                                                    </Td>
                                                    <Td color="#333" fontSize="sm" py={2} textAlign={'center'}>
                                                        {dim.peralte}
                                                    </Td>
                                                    <Td color="#333" fontSize="sm" py={2} textAlign={'center'}>
                                                        {dim.longitud}
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        )}
                    </Flex>
                </ModalBody>
                {/*<ModalBody p={8} position="relative" zIndex={1}>
                    <Heading
                        as="h2"
                        fontSize="3xl"
                        fontWeight="extrabold"
                        textAlign="center"
                        color={color}
                        mb={6}
                        letterSpacing="wider"
                    >
                        {product.nombre}
                    </Heading>

                    <Divider
                        borderColor={color}
                        borderWidth="1px"
                        borderRadius="full"
                        mb={6}
                    />

                    <Flex direction={{ base: "column", md: "row" }} gap={6}>
                        <Box flex="0.6" color="#333">
                            <VStack align="start" spacing={0} mb={0}>
                                {product.descripcion.split("\n").map((paragraph, idx) =>
                                    paragraph.trim() ? (
                                        <Text
                                            key={idx}
                                            fontSize="md"
                                            //lineHeight="1.7"
                                            textAlign="justify"
                                            color="#333"
                                            mb={0}
                                            dangerouslySetInnerHTML={{
                                                __html: paragraph
                                            }}
                                        />
                                    ) : null
                                )}
                            </VStack>

                            {product.usos && (
                                <Box mt={6}>
                                    <Heading
                                        fontSize="lg"
                                        mb={2}
                                        color={color}
                                        letterSpacing="wider"
                                    >
                                        Principales usos:
                                    </Heading>
                                    <VStack align="start" spacing={0.5}>
                                        {product.usos.map((uso, idx) => (
                                            <HStack key={idx} spacing={2} align="start">
                                                <Icon
                                                    as={FiCheckCircle}
                                                    color={color}
                                                    boxSize={4}
                                                    mt={0.5}
                                                />
                                                <Text fontSize="sm" color="#333" p={0} m={0}>
                                                    {uso}
                                                </Text>
                                            </HStack>
                                        ))}
                                    </VStack>
                                </Box>
                            )}

                            {product.dimensiones && (
                                <Box mt={6}>
                                    <Heading
                                        fontSize="lg"
                                        mb={3}
                                        color={color}
                                        letterSpacing="wider"
                                    >
                                        Dimensiones disponibles:
                                    </Heading>
                                    <TableContainer
                                        borderRadius="md"
                                        overflow="hidden"
                                        boxShadow="md"
                                        border={`1px solid ${color}`}
                                    >
                                        <Table variant="simple" size="sm" minWidth="330px">
                                            <Thead bg={color}>
                                                <Tr>
                                                    <Th color="white" fontWeight="bold" width="33%" textAlign={'center'}>
                                                        Tipo
                                                    </Th>
                                                    <Th color="white" fontWeight="bold" width="33%" textAlign={'center'}>
                                                        Peralte
                                                    </Th>
                                                    <Th color="white" fontWeight="bold" width="33%" textAlign={'center'}>
                                                        Longitud
                                                    </Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {product.dimensiones.map((dim, idx) => (
                                                    <Tr
                                                        key={idx}
                                                        bg={idx % 2 === 0 ? "gray.50" : "white"}
                                                        _hover={{ bg: "gray.100" }}
                                                    >
                                                        <Td color="#333" fontSize="sm" py={2} textAlign={'center'}>
                                                            {dim.tipo}
                                                        </Td>
                                                        <Td color="#333" fontSize="sm" py={2} textAlign={'center'}>
                                                            {dim.peralte}
                                                        </Td>
                                                        <Td color="#333" fontSize="sm" py={2} textAlign={'center'}>
                                                            {dim.longitud}
                                                        </Td>
                                                    </Tr>
                                                ))}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            )}
                        </Box>

                        <Box
                            flex="0.4"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            p={2}
                            bg="#FFFFFF"
                        >
                            <Image
                                src={`/productos/renders/${product?.url}.png`}
                                alt={product.nombre}
                                objectFit="contain"
                                w="100%"
                                maxH="450px"
                                fallbackSrc="/productos/placeholder.png"
                            />
                        </Box>
                    </Flex>
                </ModalBody>*/}
            </ModalContent>
        </Modal>
    );
};

export default ProductModal;
