import Message from "../components/Message"
import NavBar from "../components/NavBar"

const History = () => {
    return (
        <NavBar photo={'true'}>
            <section className="_main" >
                <div className="message">
                    <Message />
                </div>
            </section>
        </NavBar>
    )
}

export default History