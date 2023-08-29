import { Heading, Text } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import projects from '../assets/projects.json'
import CardPorfolio from "../components/CardPorfolio"

const Porfolio = () => {
    return (
        <NavBar>
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight='110%'
                textAlign='center'
                mb={3}
                mt={5}
            >
                <Text as='b' color='blue.500'>
                    Proyectos que nos han hecho diferentes
                </Text>
            </Heading>

            <section className="d-flex flex-wrap justify-content-center" >
            {
                projects?.map(project =>
                    <CardPorfolio 
                        key={project.id}
                        name={project.name}
                        img={project.img}
                        year={project.year}
                    />
                )
            }
            </section>
        </NavBar>
    )
}

export default Porfolio