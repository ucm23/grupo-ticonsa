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
          borderRadius="full"
          bg="gray.100"
          color="gray.800"
          _hover={{ bg: "gray.200" }}
          top={4}
          right={4}
          zIndex={2}
        />
        <ModalBody p={8} position="relative" zIndex={1}>
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
            borderWidth="2px"
            borderRadius="full"
            mb={6}
          />

          <Flex direction={{ base: "column", md: "row" }} gap={6}>
            <Box flex="0.7" color="#333">
              <VStack align="start" spacing={0} mb={0}>
                {product.descripcion.split("\n").map((paragraph, idx) =>
                  paragraph.trim() ? (
                    <Text
                      key={idx}
                      fontSize="md"
                      lineHeight="1.7"
                      textAlign="justify"
                      color="#333"
                      mb={0}
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(
                          /(prefabricados|estructura|estructurales|resistencia|capacidad de carga|maniobras|montaje|seguridad estructural|cargas extraordinarias|trabes|losas|trabe|elementos|longitudes|peralte|autoportante|presforzado|postensado|viaductos|infraestructura|cimbra|flexión|torsión)/gi,
                          (match) =>
                            `<strong style="color:${color}">${match}</strong>`
                        ),
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
                        <Text fontSize="sm" color="#333" lineHeight="1.4">
                          {uso}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              )}

              {product.dimensiones && (
                <Box mt={8}>
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
                    <Table variant="simple" size="sm" minWidth="600px">
                      <Thead bg={color}>
                        <Tr>
                          <Th color="white" fontWeight="bold" width="40%">
                            Tipo
                          </Th>
                          <Th color="white" fontWeight="bold" width="30%">
                            Peralte
                          </Th>
                          <Th color="white" fontWeight="bold" width="30%">
                            Longitud común
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
                            <Td color="#333" fontSize="sm" py={3}>
                              {dim.tipo}
                            </Td>
                            <Td color="#333" fontSize="sm" py={3}>
                              {dim.peralte}
                            </Td>
                            <Td color="#333" fontSize="sm" py={3}>
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
              flex="1.3"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              bg="#FFFFFF"
            >
              <Image
                src={product.url}
                alt={product.nombre}
                objectFit="contain"
                w="100%"
                maxH="450px"
                fallbackSrc="/productos/placeholder.png"
              />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
