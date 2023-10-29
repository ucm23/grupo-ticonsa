import { useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import PropTypes from 'prop-types'

const CarouselStatic = ({ names, folder }) => {

    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <Carousel className="shadow" fade style={{ height: 600 }}>
            {names.map(item =>
                <Carousel.Item key={`names-item-${item}`} interval={4000}>
                    <img
                        className="d-block w-100 _img_corousel"
                        src={`/${folder}/${item}.jpg`}
                        alt="First slide"
                        //style={{ height: mobile?"23rem":"26rem", objectFit: "cover", top: 100}}
                        style={{ height: 600, objectFit: "cover", top: 100 }}
                    />
                </Carousel.Item>
            )}
        </Carousel>
    )
}

CarouselStatic.propTypes = {
    names: PropTypes.array,
    folder: PropTypes.string
}

export default CarouselStatic;