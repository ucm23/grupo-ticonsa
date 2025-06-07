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
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="5xl" motionPreset="scale">
      <ModalOverlay bg="rgba(0, 0, 0, 0.7)" backdropFilter="blur(6px)" />
      <ModalContent
        bg="#2D3748"
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        maxW="1200px"
        border="2px solid"
        borderColor="blue.700"
      >
        <ModalCloseButton
          size="lg"
          borderRadius="full"
          bg="blackAlpha.600"
          color="white"
          _hover={{ bg: "blackAlpha.800" }}
          top={4}
          right={4}
          zIndex={2}
        />
        <ModalBody p={8} position="relative" zIndex={1}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" textAlign="center" color="#F0F0F0" mb={6}>
            {product.nombre}
          </Heading>
          <Divider borderColor="blue.300" borderWidth="2px" borderRadius="full" mb={6} />
          <Flex direction={{ base: "column", md: "row" }} gap={6}>
            <Box flex="0.7" color="#F0F0F0">
              <VStack align="start" spacing={4} mb={4}>
                {product.descripcion.split('\n').map((paragraph, idx) =>
                  paragraph.trim() ? (
                    <Text
                      key={idx}
                      fontSize="md"
                      lineHeight="1.8"
                      textAlign="justify"
                      color="#F0F0F0"
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(
                          /(prefabricados|estructura|estructurales|resistencia|capacidad de carga|maniobras|montaje|seguridad estructural|cargas extraordinarias|trabes|losas|trabe|elementos|longitudes|peralte|autoportante|presforzado|postensado|viaductos|infraestructura|cimbra|flexión|torsión)/gi,
                          (match) => `<strong>${match}</strong>`
                        )
                      }}
                    />
                  ) : null
                )}
              </VStack>
              {product.usos && (
                <Box mt={6}>
                  <Heading fontSize="lg" mb={3} color="blue.300">
                    Principales usos:
                  </Heading>
                  <VStack align="start" spacing={2}>
                    {product.usos.map((uso, idx) => (
                      <HStack key={idx} spacing={2} align="start">
                        <Icon as={FiCheckCircle} color="green.300" boxSize={4} mt={0.5} />
                        <Text fontSize="sm" color="#E0E0E0">
                          {uso}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              )}
              {product.dimensiones && (
                <Box mt={8}>
                  <Heading fontSize="lg" mb={3} color="blue.300">
                    Dimensiones disponibles:
                  </Heading>
                  <Table variant="simple" size="sm" colorScheme="blue" borderRadius="md" overflow="hidden">
                    <Thead>
                      <Tr>
                        <Th color="blue.200">Tipo</Th>
                        <Th color="blue.200">Peralte</Th>
                        <Th color="blue.200">Longitud común</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {product.dimensiones.map((dim, idx) => (
                        <Tr key={idx}>
                          <Td color="gray.100">{dim.tipo}</Td>
                          <Td color="gray.100">{dim.peralte}</Td>
                          <Td color="gray.100">{dim.longitud}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Box>
              )}
            </Box>
            <Box
              flex="1.3"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
              p={2}
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
