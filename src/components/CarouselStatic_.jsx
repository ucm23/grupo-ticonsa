import { useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import PropTypes from 'prop-types'

const CarouselStatic_ = ({ names, folder }) => {
    const mobile = useBreakpointValue({ base: true, md: false });
    return <Carousel fade data-bs-theme="dark">
        {names.map(item =>
            <Carousel.Item key={`names-item-${item}`} interval={4000}>
                <img
                    src={`/${folder}/${item}.jpg`}
                    style={{ width: 500, height: mobile ? 350 : 500, objectFit: 'cover', }}
                />
            </Carousel.Item>
        )}
    </Carousel>
}

CarouselStatic_.propTypes = {
    names: PropTypes.array,
    folder: PropTypes.string
}

export default CarouselStatic_;