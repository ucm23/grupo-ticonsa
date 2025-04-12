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

    //https://issuu.com/ticonsa_documents/docs/cv_

    return (
        <NavBar doc={true} shadow={true}>
            <section className="_main container">
                <section>
                    <div className="row-base row w-full md:w-[100%] h-screen flex flex-col" role="main" style={{ marginTop: 158, marginBottom: 100 }}>
                        {/*<embed
                            src={`${types[type]}#toolbar=0&navpanes=0&scrollbar=0`}
                            type="application/pdf"
                            height="1000px"
                            style={{
                                width: '100%',
                                height: 'calc(100vh - 200px)', // Ajusta según necesidades
                                minHeight: '500px' // Altura mínima para móviles
                            }}
                        />*/}
                        <iframe
                            src={types[type]}
                            className="w-full h-full"
                            style={{ transform: `scale(1)`, transformOrigin: "top left" }}
                            title="PDF Document Viewer"
                            allowFullScreen
                        />
                    </div>
                </section>
            </section>
        </NavBar>
    )
}

export default Documents