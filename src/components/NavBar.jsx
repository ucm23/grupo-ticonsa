import PropTypes from 'prop-types'
import { Link, } from "wouter"
import { NavLink, useLocation } from "react-router-dom";
import SmallCentered from './Footer'
import { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';

const NavBar = ({ children, photo }) => {
    const location = useLocation();

    const {
        pathname
    } = location;

    //console.log('pathname: ', pathname);
    const [isChecked, setIsChecked] = useState(false);

    const [showShadow, setShowShadow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setShowShadow(true);
            else setShowShadow(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const SubMenuProd = {
        name: "PRODUCTOS Y SERVICIOS",
        options: ["INFRAESTRUCTURA", "EDIFICACIÓN", "TRANSPORTE", "MONTAJE", "SUPERVISIÓN"],
        actions: ["infraestructura", "edificacion", "transporte", "montaje", "supervision"]
    }

    const SubMenuInst = {
        name: "PLANTAS",
        options: ["Teotihuacán", "Puerto Morelos", "Campeche", "Cancún T5NF1", "Puerto Progreso"],
        actions: ["plant-teotihuacan", "plant-morelos", "plant-campeche", "plant-cancun", "plant-progreso"]
    }

    /*const SubMenuInst = {
        name: "INSTALACIONES",
        options: ["PLANTAS", "INSTALACIONES"],
        actions: ["plantas", "instalaciones"]
    }*/

    const routes = [
        { id: 1, href: "/", content: "Inicio" },
        { id: 2, href: "/historia", content: "Historia" },
        { id: 3, href: "/prefabricado", content: "Prefabricado" },
        { id: 5, href: "/#", hasSubMenu: SubMenuInst },
        { id: 7, href: "/#", hasSubMenu: SubMenuProd },
        { id: 7, href: "https://development.victum-re.online", content: "Proveedores", onlyLink: true },
        { id: 6, href: "/contacts", content: "Contacto" },
        { id: 6, href: "/contacto", content: "Contacto 2" },
        
    ]

    const handleCheckBoxChange = ({ target }) => setIsChecked(target.checked);

    if (isChecked) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    return (
        <>
            <nav className={`${showShadow ? 'shadow nav-small' : 'nav'}`}>
                <a href="/" className="enlace d-flex justify-content-center align-items-center">
                    <img src="/222.jpg" className={showShadow ? 'logo-small' : 'logo'} alt="logo ticonsa" />
                    <h1 className="m-0"></h1>
                </a>
                <input type="checkbox" id="check" onChange={handleCheckBoxChange} />
                <label htmlFor="check" className="checkbtn" >
                    <i className={isChecked ? "fa fa-times" : "fas fa-bars"}></i>
                </label>

                <ul style={{ paddingLeft: 0 }}>
                    {routes.map(({ id, href, content, hasSubMenu, onlyLink }) => (
                        <li key={`routes-${id}-${href}`}>
                            {hasSubMenu ? (
                                <Dropdown>
                                    <Dropdown.Toggle variant="ligth" id="dropdown-basic" size="sm" className="dropdown-basic" >
                                        <>{hasSubMenu.name}</>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {hasSubMenu.options.map((item, i) =>
                                            <Dropdown.Item key={item} href={`/${hasSubMenu.actions[i]}`} className={`/${hasSubMenu.actions[i]}` === pathname ? "active" : ""}>{item}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>

                            ) : onlyLink ?
                                <a href="https://development.victum-re.online" target="_blank">{content}</a>
                                : <a href={href} className={href === pathname ? "active" : ""}>{content}</a>

                            }
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                {children}
            </main>
            <SmallCentered photo={photo} />
        </>
    )
}

export default NavBar

/*NavBar.propTypes = {
    children: PropTypes.node,
    with: PropTypes.bool
}*/