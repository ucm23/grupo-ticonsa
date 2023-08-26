import PropTypes from 'prop-types'
import { Link,useLocation } from "wouter"
import SmallCentered from './Footer'

export default function NavBar({children}) {
    const [location] = useLocation();

    const routes = [
        {id:1, href: "/", content: "Inicio"},
        {id:2, href: "/historia", content: "Historia"},
        {id:3, href: "/prefabricado", content: "Sistema de prefabricado"},
        {id:4, href: "/productos", content: "Productos"},
        {id:5, href: "/portafolio", content: "Portafolio"},
        {id:6, href: "/contacto", content: "Contacto"},
    ]

    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn" >
                    <i className="fas fa-bars"></i>
                </label>
                <a href="#" className="enlace d-flex justify-content-center align-items-center">
                    <img src="vite.svg" className="logo" alt="" />
                    <h1 className="m-0 text-white" >TICONSA</h1>     
                </a>
                <ul>
                    {
                        routes.map( ({id,href,content}) => 
                            <li key={id}>
                                <Link href={href}>
                                    <a className={
                                        (href===location)?"active":""
                                    }>
                                        {content}
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                </ul>            
            </nav>
            <main>
                {children}
            </main>
            <SmallCentered />
        </>
    )
}

NavBar.propTypes = {
    children : PropTypes.node
}
