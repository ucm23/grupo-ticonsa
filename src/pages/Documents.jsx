import {
    Box,
    useColorModeValue,
} from "@chakra-ui/react"
import CarouselStatic from "../components/CarouselStatic"
import NavBar from "../components/NavBar"

const Documents = ({ type }) => {


    const types = {
        "cv": "cv_.pdf",
        "presencia": "presencia.pdf",
    }

    return (
        <NavBar>
            <Box
                bgGradient={
                    useColorModeValue(
                        'radial(#B6B6B650 1px, transparent 1px)',
                        'radial(#B6B6B650 1px, transparent 1px)'
                    )
                }
                backgroundSize="20px 20px"
                opacity="1"
                height="100%"
            >

                <section className="_main container">
                    <section>
                        <div class="row-base row" style={{ marginTop: 158 }}>
                            <embed
                                src={`${types[type]}#toolbar=0&navpanes=0&scrollbar=0`}
                                type="application/pdf"
                                height="1000px"
                            />
                        </div>
                    </section>
                </section>
            </Box>
        </NavBar>
    )
}

export default Documents