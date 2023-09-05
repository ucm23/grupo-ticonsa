import { Text } from "@chakra-ui/react"
import CarouselStatic from "../components/CarouselStatic"
import NavBar from "../components/NavBar"
import ServicesCard from "../components/ServicesCard"
import items from '../assets/systems.json'

const Systems = () => {
    return (
        <NavBar>
            <CarouselStatic names={[1,2,3,4]} folder='systems'  />

            <section className="_main container">
                <section className="text-center mt-4">
                    <Text as='b' fontSize='5xl'>Sistema de prefabricado y más:</Text>

                    <div className="row my-4">
                        <div className="col-md-4 p-0 overflow-hidden">
                            <img src="/systems/8.jpeg" className="px-3"  />
                        </div>
                        <div className="col-md-8 p-4" style={{ backgroundColor: "#023896" }} >
                            <div className="text-white" >
                                A diferencia de los sistemas convencionales, en el Sistema de Prefabricado los elementos estructurales se fabrican previamente en plantas de producción. Después de un riguroso control de calidad en el proceso de fabricación,  las piezas se transportan para colocarlas en el lugar de la obra, abatiendo en forma considerable el tiempo de construcción.

                                Una característica de este sistema es que pueden salvar grandes claros con elementos ligeros. Esto se logra mediante la técnica del Presfuerzo, que consiste en aplicar una fuerza de tensión al acero de presfuerzo (cables o torones) antes de iniciar el colado, logrando incrementar la resistencia y mejorar el comportamiento estructural de los elementos.

                                Una vez montados los elementos, se cuela un firme de compresión de 5cm aproximadamente.
                            </div>
                        </div>
                    </div>

                    <section className="d-flex justify-content-around align-items-center pb-5 flex-wrap" >
                        {
                            items.map(item => 
                                <ServicesCard 
                                    key={item.id} 
                                    img={item.img}
                                    title={item.title}
                                    newTab={item.newTab}
                                />
                            )
                        }
                    </section>
                </section>
            </section>
        </NavBar>
    )
}

export default Systems