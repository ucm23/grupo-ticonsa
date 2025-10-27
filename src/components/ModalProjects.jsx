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
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const color = "#0056A4";

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];


const ModalProjects = ({ isOpen, onClose, project, folder, images_ }) => {

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
                    <Heading
                        as="h2"
                        fontSize="3xl"
                        fontWeight="extrabold"
                        color={color}
                        mb={10}
                        letterSpacing="wider"
                    >
                        {project?.title}
                    </Heading>

                    <ImageGallery items={images}
                        showPlayButton={false}
                        lazyLoad={true}
                        autoPlay={true}
                        showFullscreenButton={false}
                        isRTL={true}
                        showBullets={true}
                        thumbnailPosition='right'
                        showThumbnails={true}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ModalProjects;
