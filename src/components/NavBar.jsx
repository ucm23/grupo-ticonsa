import PropTypes from 'prop-types'
import { Link, useLocation } from "wouter"
import SmallCentered from './Footer'
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function NavBar({ children }) {
    const [location] = useLocation();
    const [isChecked, setIsChecked] = useState(false);

    const SubMenuProd = {
        name: "PRODUCTOS Y SERVICIOS",
        options: ["INFRAESTRUCTURA", "EDIFICACIÓN", "TRANSPORTE", "MONTAJE", "SUPERVISIÓN"],
        actions: ["infraestructura", "edificacion", "transporte", "montaje", "supervision"]
    }

    const SubMenuInst = {
        name: "INSTALACIONES",
        options: ["PLANTAS", "INSTALACIONES"],
        actions: ["plantas", "instalaciones"]
    }

    const routes = [
        { id: 1, href: "/", content: "Inicio" },
        { id: 2, href: "/historia", content: "Historia" },
        { id: 3, href: "/prefabricado", content: "Sistema de prefabricado" },
        { id: 5, href: "/#", hasSubMenu: SubMenuInst },
        { id: 7, href: "/#", hasSubMenu: SubMenuProd },
        { id: 6, href: "/contacts", content: "Contacto" },
    ]

    const handleCheckBoxChange = ({ target }) => setIsChecked(target.checked);

    if (isChecked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <nav className="" >
                <input type="checkbox" id="check" onChange={handleCheckBoxChange} />
                <label htmlFor="check" className="checkbtn" >
                    <i className={isChecked ? "fas fa-circle" : "fas fa-bars"}></i>
                </label>
                <Link href="/" className="enlace d-flex justify-content-center align-items-center">
                    <img src="/222.jpg" className="logo" alt="logo ticonsa" />
                    <h1 className="m-0"></h1>
                </Link>

                <ul>
                    {routes.map(({ id, href, content, hasSubMenu }) => (
                        <li key={`routes-${id}-${href}`}>
                            {hasSubMenu ? (
                                <Dropdown>
                                    <Dropdown.Toggle variant="ligth" id="dropdown-basic" size="sm" className="dropdown-basic">
                                        {hasSubMenu.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {hasSubMenu.options.map((item, i) =>
                                            <Dropdown.Item key={item} href={`/${hasSubMenu.actions[i]}`}>{item}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <Link href={href}>
                                    <a className={href === location ? "active" : ""}>{content}</a>
                                </Link>
                            )}
                        </li>
                    ))}

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
    children: PropTypes.node
}

/* <ul>
                    {
                        routes.map(({id,href,content}) => 
                            <li key={id}>
                                <Link href={href}>
                                    <a className={
                                        (href===location)
                                            ? "active"
                                            : ""
                                    }>
                                        {content}
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                </ul>    */
