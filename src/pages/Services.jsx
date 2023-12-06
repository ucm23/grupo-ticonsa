import CarouselStatic from "../components/CarouselStatic"
import NavBar from "../components/NavBar"
import { Fade } from "react-awesome-reveal";
import BGPoints from "../components/BGPoints";
import color from "../color";

const Services = ({ id }) => {

    //<strong></strong>

    const types = {
        1: {
            "name": "Infraestructura",
            "description": "Somos responsables de la estructura base que da fuerza y sostiene a un gran número de construcciones. Somos la diferencia en obras públicas gracias a nuestra gran experiencia.",
            "header": "<strong>Nuestra empresa</strong> posee una <strong>sólida trayectoria en aspectos fundamentales para el éxito en el ámbito de la construcción</strong>:",
            "word_key": [
                "Máxima garantía de calidad",
                "Eficiencia",
                "Seguridad",
                "Ingeniería estructural",
                "Normativas de construcción",
                "Tecnologías innovadoras",
                "Liderazgo en proyectos",
                "Planificación y ejecución de obras",
                "Estrategias de desarrollo",
                "Eficiencia operativa",
            ],
            "content": "Nuestro equipo de profesionales, con <strong>vasta experiencia en roles directivos y académicos</strong>, ofrece conferencias que fusionan conocimientos técnicos con enfoques motivadores. Hemos destacado como líderes en el sector, aplicando nuestra experiencia como directores generales, docentes en instituciones relevantes y consultores en diversas organizaciones nacionales e internacionales.",
            "footer": "En cada presentación, <strong>buscamos transmitir de manera clara y accesible los principios esenciales de la construcción</strong>, inspirando a nuestra audiencia a implementar cambios que generen satisfacción y un valor añadido tanto en su desarrollo personal como en su carrera profesional."
        },
        2: {
            "name": "Edificación",
            "description": "Diseñamos y planificamos eficientemente edificios e inmuebles de acuerdo a las necesidades que requieran para sus proyectos habitacionales.",
            "header": "<strong>Nuestra firma</strong> cuenta con una <strong> extensa trayectoria en el ámbito de la edificación</strong>, abordando aspectos fundamentales para el éxito en este campo:",
            "word_key": [
                "Diseño arquitectónico",
                "Normativas de construcción",
                "Innovación en técnicas constructivas",
                "Liderazgo en proyectos de edificación",
                "Planificación y ejecución de obras",
                "Estrategias para el desarrollo sostenible",
                "Eficiencia en procesos constructivos",
            ],
            "content": "Nuestro equipo de expertos, <strong>con amplia experiencia en roles directivos y académicos</strong>, ofrece conferencias que combinan conocimientos técnicos con enfoques inspiradores. Hemos destacado como líderes en el sector, aplicando nuestra experiencia como directores generales, docentes en instituciones destacadas y consultores en diversas organizaciones nacionales e internacionales.",
            "footer": "En cada presentación, <strong>buscamos comunicar de manera clara y accesible los principios esenciales de la edificación</strong>, inspirando a nuestra audiencia a implementar cambios que generen satisfacción y un valor añadido tanto en su desarrollo personal como en su carrera profesional en el emocionante mundo de la construcción."
        },
        3: {
            "name": "Transporte",
            "description": "Parte fundamental de entorno del prefabricado es el transporte el cual consiste en el desplazamiento de los elementos prefabricados a los sitos indicados por nuestros clientes. Contamos con el mejor equipo de Transporte para lograr una eficaz ejecución de todos tus proyectos.",
            "header": "<strong>Nuestra empresa</strong> ha forjado una sólida trayectoria en el <strong>ámbito del transporte de materiales y estructuras prefabricadas</strong>, abordando aspectos críticos para garantizar el éxito en esta área especializada:",
            "word_key": [
                "Logística eficiente en el transporte de materiales",
                "Gestión de la cadena de suministro",
                "Innovación en técnicas de transporte",
                "Liderazgo en proyectos logísticos",
                "Planificación y ejecución de rutas especializadas",
                "Estrategias para la optimización del transporte",
                "Eficiencia en la manipulación de estructuras prefabricadas",
            ],
            "content": "Nuestro equipo de especialistas, <strong>con una amplia experiencia en roles directivos y técnicos</strong>, ofrece conferencias que combinan conocimientos prácticos con enfoques inspiradores. Hemos destacado como líderes en el sector, aplicando nuestra experiencia en proyectos logísticos complejos, tanto a nivel nacional como internacional.",
            "footer": "En cada presentación, <strong>nos esforzamos por comunicar de manera clara y accesible los principios esenciales del transporte de materiales y estructuras prefabricadas</strong>, inspirando a nuestra audiencia a implementar prácticas innovadoras que generen eficiencia y un valor añadido en esta dinámica y esencial área de la construcción."
        },
        4: {
            "name": "Montaje",
            "description": "Una vez realizada la fabricación y el transporte, ejecutamos el montaje de las piezas prefabricadas con seguridad y precisión para construir la estructura proyectada.",
            "header": "<strong>Nuestra empresa</strong> ha consolidado una destacada experiencia en el <strong>ámbito del montaje de materiales y estructuras prefabricadas</strong>, abordando aspectos fundamentales para el éxito en esta especialidad:",
            "word_key": [
                "Técnicas avanzadas de montaje",
                "Planificación detallada de la instalación",
                "Innovación en procesos de ensamblaje",
                "Liderazgo en proyectos de montaje",
                "Coordinación eficiente de equipos de trabajo",
                "Estrategias para la optimización del proceso de montaje",
                "Garantía de seguridad en la instalación",
            ],
            "content": "Nuestro equipo de especialistas, <strong>con una amplia experiencia en roles directivos y técnicos</strong>, ofrece conferencias que combinan conocimientos técnicos con enfoques inspiradores. Nos destacamos como líderes en el sector, aplicando nuestra experiencia en proyectos de montaje complejos, tanto a nivel nacional como internacional.",
            "footer": "En cada presentación, <strong>nos esforzamos por comunicar de manera clara y accesible los principios esenciales del montaje de materiales y estructuras prefabricadas</strong>, inspirando a nuestra audiencia a implementar prácticas innovadoras que generen eficiencia y un valor añadido en esta crítica etapa del proceso constructivo."
        },
        5: {
            "name": "Supervisión",
            "description": "La supervisión de las obras forma parte de las funciones administrativas de gran valor e importancia que realizamos para que se cumplan efectiva y puntualmente los objetivos del proyecto de forma legal, en tiempo y calidad.",
            "header": "<strong>Nuestra firma</strong> se distingue por su <strong>destacada supervisión en los procesos de instalación de estructuras prefabricadas</strong>, abordando aspectos cruciales para garantizar la eficiencia y la calidad en cada fase del proyecto:",
            "word_key": [
                "Supervisión técnica especializada en instalación de prefabricados",
                "Gestión de la seguridad en el sitio de construcción",
                "Innovación en métodos de instalación",
                "Liderazgo en la coordinación de equipos de trabajo",
                "Planificación y ejecución de procesos de montaje",
                "Estrategias para la optimización de recursos",
                "Eficiencia en la integración de estructuras prefabricadas",
            ],
            "content": "Nuestro equipo de supervisores, <strong>con una vasta experiencia en roles de dirección y técnica</strong>, imparte conferencias que combinan conocimientos prácticos con enfoques motivadores. Nos destacamos como líderes en el sector, aplicando nuestra experiencia en proyectos de instalación de estructuras prefabricadas en diversos contextos y escalas.",
            "footer": "En cada presentación, <strong>nos esforzamos por comunicar de manera clara y accesible los principios esenciales de la supervisión en la instalación de estructuras prefabricadas</strong>, inspirando a nuestra audiencia a implementar prácticas avanzadas que generen eficiencia y un valor añadido en esta fase crítica de la construcción."
        }
    }

    return (
        <NavBar photo={'true'}>
            <CarouselStatic names={[1, 2, 3]} folder='plants/yucatan' />

            <BGPoints>
                <section className="_main container">
                    <section>
                        <section id="system">
                            <div class="row-base row">
                                <div>
                                    <Fade direction="down">
                                        <section className="text-center">
                                            <h3 class="col-about-title">Expertos en <span className="text-primary-blue"> {types[id]?.name}</span></h3>
                                            <div className="line-banner" style={{ backgroundColor: color.orange }} />
                                        </section>
                                    </Fade>
                                    <div class="">
                                        <div class="col-base col-md-offset-1">
                                            <div class="col-about-info">
                                                <div>
                                                    <p style={{ textAlign: 'center' }}>
                                                        <div dangerouslySetInnerHTML={{ __html: types[id]?.description }} />
                                                    </p>
                                                </div>
                                                <p>
                                                    <div dangerouslySetInnerHTML={{ __html: types[id]?.content }} />
                                                </p>
                                                <p>
                                                    <div dangerouslySetInnerHTML={{ __html: types[id]?.header }} />
                                                </p>
                                                <ol type="A">
                                                    {types[id]?.word_key.map((item, index) => (
                                                        <div style={{ borderColor: '#B6B6B650', borderBottomWidth: 1, paddingTop: 8, paddingBottom: 8, /*margin-top: 8px;*/ }}>
                                                            <li key={index}>{item}</li>
                                                        </div>
                                                    ))}
                                                </ol>
                                                <p>
                                                    <div dangerouslySetInnerHTML={{ __html: types[id]?.footer }} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<center>
                                <section class="col-base col-about-img col-sm-6 col-md-offset-1" className="mt-4" style={{ width: '100%', alignItems: 'center', justifyItems: 'center', alignSelf: 'center' }}>
                                    <Fade direction="down">
                                        <center>
                                        </center>
                                    </Fade>
                                </section>
    </center>*/}
                        </section>
                    </section>
                </section>
            </BGPoints>
        </NavBar>
    )
}

export default Services;