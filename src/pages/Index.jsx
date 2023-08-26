
import CardNew from "../components/Blog"
import Carousel from "../components/Carousel"
import NavBar from "../components/NavBar"
import info from "../assets/info.json"
import items from '../assets/services_card.json'
import ServicesCard from "../components/ServicesCard"
import { Text } from "@chakra-ui/react"

const Index = () => {
    return (
        <NavBar>
            <Carousel />
            <section className="_main container" >
                <section className="my-5" >
                    <CardNew
                         id={info.id}
                         date={info.date}
                         title={info.title}
                         author={info.author}
                         description={info.description}
                    />
                </section>

                <section className="text-center" >
                    <Text as='b' fontSize={'5xl'} >Servicios que ofrecemos:</Text>
                    <section className="d-flex justify-content-around align-items-center pb-5 flex-wrap" >
                        {
                            items.map(item => 
                                <ServicesCard 
                                    key={item.id} 
                                    img={item.img}
                                    title={item.title}
                                />
                            )
                        }
                    </section>
                </section>
            </section>
        </NavBar>
    )
}

export default Index