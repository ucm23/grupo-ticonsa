
import NavBar from "../components/NavBar"

import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react';

const Legal = () => {
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
                        <h2 class="section-title" style={{ paddingTop: 130, }}>Aviso Legal</h2>

                        <div class="row-base row">
                            <div class="col-base col-md-offset-1">
                                <div class="col-about-info">
                                    <p>Derechos Reservados 2009 - 2013, TICONSA INMOBILIARIA, S.A. de C.V.<br />La utilización de este Sitio constituye la aceptación del Usuario a los siguientes términos y condiciones:</p>
                                </div>
                            </div>
                            <div class="col-base col-md-offset-1">
                                <h3 class="col-about-title">De la Responsabilidad</h3>
                                <div class="col-about-info">
                                    <p>TICONSA INMOBILIARIA, S.A. de C.V., (TICONSA), sus subsidiarias, sus filiales, apoderados y/o el personal de éstas mismas, no serán responsables por los daños o pérdidas de cualquier naturaleza que puedan ser atribuidos por el acceso o uso de este Sitio. Asimismo, TICONSA no será responsable por los daños que pudieran ser causados a computadoras u otro equipo informático del Usuario, por tener acceso, bajar y/o leer información contenida en este Sitio.</p>
                                </div>
                            </div>
                            <div class="col-base col-md-offset-1">
                                <h3 class="col-about-title">Derechos de propiedad intelectual</h3>
                                <div class="col-about-info">
                                    <p>Tanto el Sitio como toda la información contenida en el, relativa o concerniente a TICONSA son consideradas como propiedad intelectual propia, o de las sociedades vinculadas a esta y están sujetos a protección como propiedad intelectual e industrial. La reproducción, distribución o publicación ya sea parcial o totalmente de cualquier contenido se encuentra estrictamente prohibida. En ningún caso, TICONSA será responsable por las violaciones a derechos de la propiedad intelectual por parte del Usuario o de terceros. Se encuentra asimismo expresamente prohibido reproducir o reenviar todo diseño, logotipo, gráfico, sonido, texto o imagen del Sitio sin la expresa autorización previa y por escrito de TICONSA. El acceso al Sitio por parte del Usuario no se entenderá como un otorgamiento al Usuario de una licencia o cualquier otro derecho sobre cualquier marca o derecho de propiedad intelectual o industrial de TICONSA y/o empresas relacionadas, subsidiarias o filiales.</p>
                                </div>
                            </div>
                            <div class="col-base col-md-offset-1">
                                <h3 class="col-about-title">Información</h3>
                                <div class="col-about-info">
                                    <p>El acceso al Sitio en ningún momento será considerado como una autorización ó licencia para utilizar la información, el contenido o imágenes con fines distintos a los informativos ó a los que fueren autorizados expresamente en el Sitio, por lo que el usuario no tendrá derecho de colocar o utilizar los contenidos del Sitio en beneficio propio o de terceros, sin autorización previa y por escrito de TICONSA.</p>
                                    <p>TICONSA se reserva el derecho de modificar o retirar el contenido del Sitio, total o parcialmente, en cualquier tiempo y sin previo aviso, así como sus condiciones de uso, que serán aceptadas por el Usuario con el simple hecho de ingresar al Sitio, por lo que se recomienda consultar periódicamente sus condiciones de uso y su aviso de privacidad. Ninguna información que TICONSA brinde a través de este Sitio le podrá fincar una responsabilidad directa o indirecta.</p>
                                    <p>TICONSA no otorga garantía alguna acerca de las informaciones que provea, ni de su aplicabilidad a un caso concreto; entendiéndose que las mismas serán meramente informativas y en ningún caso constituirán informaciones completas o definitivas, ni tampoco opinión, asesoramiento o recomendación. TICONSA no se responsabiliza respecto de la exactitud o integridad de la información contenida en el Sitio y no será responsable de cualquier daño o perjuicio que sea atribuido directa o indirectamente por el acceso al Sitio, su utilización o la utilización de la información contenida en el Sitio.</p>
                                </div>
                            </div>
                            <div class="col-base col-md-offset-1">
                                <h3 class="col-about-title">Leyes Aplicables y Jurisdicción</h3>
                                <div class="col-about-info">
                                    <p>El acceso al Sitio en ningún momento será considerado como una autorización ó licencia para utilizar la información, el contenido o imágenes con fines distintos a los informativos ó a los que fueren autorizados expresamente en el Sitio, por lo que el usuario no tendrá derecho de colocar o utilizar los contenidos del Sitio en beneficio propio o de terceros, sin autorización previa y por escrito de TICONSA.</p>
                                </div>
                            </div>
                            <div class="col-base col-md-offset-1">
                                <div class="col-about-info">
                                    <p>Por cualquier duda, comentario o solicitud de información Legal adicional, favor de contactarnos por esta misma vía, mediante el apartado de contacto, o directamente a la dirección jurídica corporativa del grupo al correo fgonzalez@grupoticonsa.com.mx.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </Box>
        </NavBar>
    )
}

export default Legal