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
} from "@chakra-ui/react";

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
      <ModalOverlay bg="rgba(0, 0, 0, 0.9)" backdropFilter="blur(6px)" />

      <ModalContent
        bgImage={`url("/productos/producto1.jpeg")`}
        bgSize="cover"
        bgPosition="center"
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        maxW="1200px"
        border="2px solid"
        borderColor="blue.700"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          bg: "rgba(10, 25, 47, 0.9)",
          zIndex: 0,
        }}
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
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            color="#F0F0F0"
            mb={6}
          >
            {product.nombre}
          </Heading>

          <Divider
            borderColor="blue.300"
            borderWidth="2px"
            borderRadius="full"
            mb={6}
          />

          <Flex direction={{ base: "column", md: "row" }} gap={6}>
            <Box flex="0.7" color="#F0F0F0">
              <Text
                fontSize="md"
                lineHeight="1.8"
                textAlign="justify"
                whiteSpace="pre-line"
              >
                {product.descripcion}
              </Text>
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
              />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
