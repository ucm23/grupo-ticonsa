import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Text,
  useColorModeValue,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import products from "../assets/products.json";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  const productInfo = products.find((item) => item.id === product.id);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent
        bg={useColorModeValue("white", "gray.800")}
        borderRadius="2xl"
        p={4}
      >
        <ModalHeader>
          <Heading
            as="h2"
            fontSize="3xl"
            color="blue.600"
            fontWeight="bold"
            textAlign="center"
            fontFamily="'Poppins', sans-serif"
          >
            {product.name}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box
            border="3px solid"
            borderColor="blue.500"
            borderRadius="xl"
            p={6}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={6}
              align="center"
              justify="center"
            >
              <Box flex="1">
                <Text
                  color="gray.700"
                  fontSize="lg"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                  fontFamily="'Poppins', sans-serif"
                >
                  {productInfo ? productInfo.descripcion : "Descripción no disponible."}
                </Text>
              </Box>

              <Box flex="1" maxW="400px">
                <Image
                  src={product.image}
                  alt={product.name}
                  borderRadius="lg"
                  w="100%"
                  objectFit="cover"
                  boxShadow="lg"
                />
              </Box>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
