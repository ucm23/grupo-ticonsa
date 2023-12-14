import { useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import PropTypes from 'prop-types'
import color from "../color";

const CarouselStaticBG = ({ title, place, names, folder }) => {
    return (
        <div
            style={{
                //backgroundColor: "#030318",
                backgroundColor: "#FFFFFF99",
                backgroundImage: `url('/systems/4.jpg')`,
                backgroundBlendMode: "soft-light",
                //backgroundSize: 'scale-down',
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                //backgroundPosition: "center",
                //overflow: "hidden",
                //padding: 100,
                width: '100%',
                height: 600,
                //top: 100,
                paddingTop: 100,
                //backgroundRepeat: "no-repeat",
                //backgroundAttachment: 'fixed',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
            }}
        >

            <Fade direction="down" >
                <div>
                    <img
                        src={`logo-white.png`}
                        style={{ height: 50, objectFit: 'cover' }}
                    />
                    <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', color: color.primary, fontFamily: 'monospace', padding: '12px 0 4px 0' }}>{title}</h1>
                    <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', color: color.primary + '99', fontFamily: 'monospace', fontSize: 14 }}>{place}</h1>
                </div>
            </Fade>
          <Fade direction="down" >
                <Carousel className="shadow" fade /*controls={false} indicators={false}*/ style={{ height: 450, width: 450, top: 42 }}>
                    {names.map(item =>
                        <Carousel.Item key={`names-item-${item}`} interval={2600}>
                            <img
                                className="d-block _img_corousel"
                                src={`/${folder}/${item}.jpg`}
                                //style={{ height: mobile?"23rem":"26rem", objectFit: "cover", top: 100}}
                                style={{ height: 450, objectFit: "cover", }}
                            />
                        </Carousel.Item>
                    )}
                </Carousel>
          </Fade>
        </div>
    )
}

CarouselStaticBG.propTypes = {
    names: PropTypes.array,
    folder: PropTypes.string,
    title: PropTypes.string,
    place: PropTypes.string,
    //bg: PropTypes.string
}

export default CarouselStaticBG;