import { useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import PropTypes from 'prop-types'

const CarouselStatic_ = ({ names, folder }) => {

    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <Carousel data-bs-theme="dark" fade style={{  }}>
            {names.map(item =>
                <Carousel.Item key={`names-item-${item}`} interval={4000}>
                    <img
                        //className="d-block w-100 _img_corousel"
                        src={`/${folder}/${item}.jpg`}
                        alt=""
                        //style={{ height: mobile?"23rem":"26rem", objectFit: "cover", top: 100}}
                        style={{ width: 500, height: mobile ? 350 : 500, objectFit: 'cover', }}
                    />
                </Carousel.Item>
            )}
        </Carousel>
    )
}

CarouselStatic_.propTypes = {
    names: PropTypes.array,
    folder: PropTypes.string
}

export default CarouselStatic_;