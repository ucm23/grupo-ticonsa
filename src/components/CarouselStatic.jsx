import { Carousel } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import PropTypes from 'prop-types'

const CarouselStatic = ({ title, place, names, folder, logo }) => {
    return (
        <div
            style={{
                width: '100%',
                height: 600,
                //paddingTop: 100,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Fade direction="down" style={{
                position: 'absolute',
                zIndex: 2,
            }}>
                <div
                    style={{
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <img
                        src={logo}
                        style={{ height: 50, objectFit: 'cover' }}
                    />
                    <h1 className="text-shadow" style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white', fontFamily: 'monospace', padding: '12px 0 4px 0' }}>{title}</h1>
                    <h1 className="text-shadow" style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white', fontFamily: 'monospace', fontSize: 14 }}>{place}</h1>
                </div>
            </Fade>

            <Carousel className="shadow" fade style={{ height: 600, width: '100%', zIndex: 1 }}>
                {names.map(item =>
                    <Carousel.Item key={`names-item-${item}`} interval={2600}>
                        <img
                            className="d-block w-100 _img_corousel"
                            src={`/${folder}/${item}.jpg`}
                            alt="First slide"
                            //style={{ height: mobile?"23rem":"26rem", objectFit: "cover", top: 100}}
                            style={{ height: 600, width: '100%', objectFit: "cover", /*top: 100 */ }}
                        />
                    </Carousel.Item>
                )}
            </Carousel>
        </div>

    )
}

CarouselStatic.propTypes = {
    names: PropTypes.array,
    folder: PropTypes.string
}

export default CarouselStatic;