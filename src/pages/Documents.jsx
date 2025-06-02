import {
    Box,
    useColorModeValue,
} from "@chakra-ui/react"
import CarouselStatic from "../components/CarouselStatic"
import NavBar from "../components/NavBar"

const Documents = ({ type }) => {

    const types = {
        "cv": "cv-grupo-ticonsa.pdf",
        "presencia": "presencia.pdf",
    }

    return (
        <NavBar doc={true} shadow={true}>
            <section className="_main container">
                <section>
                    <div className="row-base row w-full md:w-[100%] flex flex-col" role="main" style={{ marginTop: 25, marginBottom: 50 }}>
                        <div style={{ position: 'relative', width: '100%', height: '900px' }}>
                            <iframe
                                allowFullScreen={true}
                                scrolling="no"
                                className="fp-iframe"
                                style={{
                                    border: '0px',
                                    width: '100%',
                                    height: '910px'
                                }}
                                src="https://heyzine.com/flip-book/71cd5ce9ca.html"
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '110px',
                                backgroundColor: 'white',
                                zIndex: 10
                            }}></div>
                        </div>
                    </div>
                </section>
            </section>
        </NavBar>
    )
}

export default Documents