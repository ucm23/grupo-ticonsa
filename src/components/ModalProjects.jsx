import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Heading,
} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./images.css";

const color = "#0056A4";

const ModalProjects = ({ isOpen, onClose, project, folder, images_, mobile }) => {

    let images = project?.imgs.map(item => {
        return {
            "original": `/projects/${folder}/${project?.route_img}/${item}.png`,
            "thumbnail": `/projects/${folder}/${project?.route_img}/${item}.png`
        }
    })

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size={!mobile ? "full" : '3xl'}
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
                <ModalBody p={6} position="relative" zIndex={1}>
                    <Heading
                        as="h3"
                        fontSize="4xl"
                        fontWeight="extrabold"
                        color={color}
                        mb={6}
                        letterSpacing="wider"
                    >
                        {project?.title}
                    </Heading>

                    <ImageGallery
                        items={images}
                        showPlayButton={false}
                        lazyLoad={true}
                        autoPlay={true}
                        showFullscreenButton={false}
                        //isRTL={true}
                        showBullets={true}
                        thumbnailPosition={!mobile ? 'bottom' : 'right'}
                        showThumbnails={mobile}
                        //additionalClass="square-image-gallery" 
                        renderItem={(item) => (
                            <div className="custom-wide-item">
                                <img
                                    src={item.original}
                                    alt={item.originalAlt}
                                    style={{
                                        aspectRatio: "16/9",
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "auto"
                                    }}
                                />
                                {item.description && (
                                    <span className="image-gallery-description">
                                        {item.description}
                                    </span>
                                )}
                            </div>
                        )}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ModalProjects;