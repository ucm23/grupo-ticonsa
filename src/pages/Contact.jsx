import ContactForm from "../components/ContactForm"
import Locations from "../components/Locations"
import NavBar from "../components/NavBar"

const Contact = () => {
    return (
        <NavBar>
            <section className="_main">
                <Locations />
            </section>
                <ContactForm />
        </NavBar>
    )
}

export default Contact