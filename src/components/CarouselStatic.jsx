import { useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import PropTypes from 'prop-types'

const CarouselStatic = ({names, folder}) => {

    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <Carousel className="shadow">
            {
                names.map(item =>     
                    <Carousel.Item key={item} interval={4000}>
                        <img
                            className="d-block w-100 _img_corousel "
                            src={`/${folder}/${item}.jpg`}
                            alt="First slide"
                            style={{ height: mobile?"23rem":"26rem", objectFit: "cover"}}
                        />
                    </Carousel.Item>
                )
            }
        </Carousel>
    )
}

CarouselStatic.propTypes = {
    names: PropTypes.array,
    folder: PropTypes.string 
}

export default CarouselStatic;