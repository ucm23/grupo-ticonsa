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
            <section className="_main container">
                <section>
                    <div className="row-base row" style={{ marginTop: 158 }}>
                        <embed
                            src={`${types[type]}#toolbar=0&navpanes=0&scrollbar=0`}
                            type="application/pdf"
                            height="1000px"
                        />
                    </div>
                </section>
            </section>
        </NavBar>
    )
}

export default Documents