
import { Fade } from "react-awesome-reveal";
import NavBar from "../components/NavBar"

import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react';

const Privacity = () => {
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
                <section className="_main container" >
                    <section className="section-5" >
                        <Fade direction="down">
                            <h2 class="section-title" style={{ paddingTop: 130, }}>Aviso de Privacidad</h2>
                        </Fade>

                        <div class="row-base row">
                            <div class="col-base col-md-offset-1">
                                <div class="col-about-info">
                                    <strong><p>Físico / Electrónico</p></strong>
                                </div>
                            </div>
                            <div class="col-base col-md-offset-1">
                                <div class="col-about-info">
                                    <p>En debido cumplimiento a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de Particulares, se genera el presente “Aviso de Privacidad” por parte de Ticonsa Inmobiliaria, Sociedad Anónima de Capital Variable (en lo sucesivo GRUPO TICONSA), misma que es responsable de la recopilación y tratamiento de datos de clientes y proveedores.</p>
                                    <p>Por lo anterior, GRUPO TICONSA reconoce los procesos legales y otorga derechos de Acceso, Rectificación, Cancelación y/o Oposición denominados ARCO, respecto del contenido o forma de manejo de los datos que nuestros clientes y proveedores pone en conocimiento de GRUPO TICONSA, para que sus datos personales sean debidamente protegidos tanto en su almacenamiento y en su caso de transmisión.</p>
                                    <p>La información respecto de los datos personales que GRUPO TICONSA recopilará, son enunciativamente; nombre(s) o denominación social, teléfono fijo y/o móvil, direcciones postales y/o de correo electrónico, Registros fiscales y patronales en su caso. No recolectamos ninguna información financiera ni datos sensibles que puedan vulnerar la intimidad de nuestros usuarios, clientes o proveedores.</p>
                                    <p>Su información será utilizada por GRUPO TICONSA y sus empresas filiales o subsidiarias, con objeto de encontrar una sana comunicación y generar un mejor servicio y oferta respecto de nuestras tecnologías, productos y/o servicios satisfaciendo sus necesidades, en beneficio de las condiciones y canales de comunicación privado o comercial con usted, asimismo dar certeza en los actos jurídicos que nos vinculen. Adicionalmente su información nos permitirá realizar evaluaciones periódicas sobre nuestros productos y servicios, así como para medir la calidad del servicio que le brindamos y en general para implementar acciones que se traduzcan en el beneficio de sus requerimientos de los productos y servicios que provee GRUPO TICONSA.</p>
                                    <p>Los datos o información proporcionados a GRUPO TICONSA serán tratados con la estricta confidencialidad y secreto, y los que en su caso se considerasen secreto industrial serán utilizados por GRUPO TICONSA en los términos señalados por el Título Tercero de la Ley de la Propiedad Industrial. La excepción a lo anterior, se traspasara únicamente mediante mandato judicial.</p>
                                    <p>Para efectos de modificaciones, actualizaciones, aceptaciones, negativas, transferencia de datos a favor de terceros o en su caso revocaciones al presente aviso de privacidad, estarán disponibles para usted en nuestra página de internet <a>www.grupoticonsa.com.mx</a>, o se enviarán confirmaciones vía impresa o correo electrónico a petición de parte.</p>
                                    <p><strong>Atentamente</strong>
                                        <br />Ticonsa Inmobiliaria, S.A. de C.V. (Responsable)<br />Dirección Jurídica Corporativa (Atención)
                                        <br />Calle Presa #85, Colonia San Jerónimo Lidice
                                        <br />Delegación Magdalena Contreras
                                        <br />México, 10200, D.F.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </Box>
        </NavBar>
    )
}

export default Privacity