import PropTypes from 'prop-types'
import { Link, } from "wouter"
import { NavLink, useLocation } from "react-router-dom";
import SmallCentered from './Footer'
import { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import color from '../color';

const NavBar = ({ children, photo, certificates, mobile }) => {
    const location = useLocation();

    const {
        pathname
    } = location;

    const [isChecked, setIsChecked] = useState(false);
    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => window.scrollY > 0 ? setShowShadow(true) : setShowShadow(false)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const SubMenuProd = {
        name: "Servicios",
        options: ["Desarrollo de Ingeniería", "Fabricación", "Transporte", "Montaje", "Supervisión"],
        actions: ["ingenieria", "fabricacion", "transporte", "montaje", "supervision"]
    }

    const SubMenuInst = {
        name: "Plantas",
        options: ["Teotihuacán", "Puerto Morelos", "Campeche", "Cancún T5NF1", "Puerto Progreso"],
        actions: ["plant-teotihuacan", "plant-morelos", "plant-campeche", "plant-cancun", "plant-progreso"]
    }

    const menuprojects = {
        name: "Proyectos",
        options: ["Infraestructura", "Edificación", "Especiales",],
        actions: ["infraestructura", "edificacion", "especiales",]
    }

    /*const SubMenuInst = {
        name: "INSTALACIONES",
        options: ["PLANTAS", "INSTALACIONES"],
        actions: ["plantas", "instalaciones"]
    }*/

    const routes = [
        { id: 1, href: "/", content: "Inicio" },
        { id: 2, href: "/prefabricado", content: "Sistema Prefabricado" },
        { id: 3, href: "/#", hasSubMenu: SubMenuInst },
        { id: 4, href: "/productos", content: "Productos" },
        { id: 5, href: "/#", hasSubMenu: SubMenuProd },
        { id: 6, href: "/#", hasSubMenu: menuprojects },
        { id: 7, href: "https://development.victum-re.online", content: "Proveedores", onlyLink: true },
        { id: 8, href: "/contacto", content: "Contacto" },

    ]

    const handleCheckBoxChange = ({ target }) => setIsChecked(target.checked);

    if (isChecked) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    return (
        <>
            <nav className={`${showShadow ? 'shadow nav-small' : 'nav'}`} style={{ backgroundColor: (showShadow || isChecked) ? 'white' : 'transparent' }}>
                <a href="/" className={`enlace d-flex justify-content-center align-items-center ${(mobile && showShadow) && "center-logo"}`}>
                    <img src={(showShadow || isChecked) ? "/logo-removebg.png" : "/logo-white.png"} className={showShadow ? 'logo-small' : 'logo'} />
                    <h1 className="m-0"></h1>
                </a>
                <input type="checkbox" id="check" onChange={handleCheckBoxChange} />
                <label htmlFor="check" className="checkbtn" >
                    <i className={`${isChecked ? "fa fa-times" : "fas fa-bars"} checkbtn-icons`}></i>
                </label>

                <ul style={{ paddingLeft: 0 }}>
                    {routes.map(({ id, href, content, hasSubMenu, onlyLink }) => (
                        <li key={`routes-${id}-${href}`}>
                            {hasSubMenu ? (
                                <Dropdown>
                                    <Dropdown.Toggle variant="ligth" id={`${(!showShadow && !mobile) ? "dropdown-basic-2" : "dropdown-basic"}`} size="sm" >
                                        <>{hasSubMenu.name}</>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {hasSubMenu.options.map((item, i) =>
                                            <Dropdown.Item key={item} href={`/${hasSubMenu.actions[i]}`} className={`/${hasSubMenu.actions[i]}` === pathname ? "active" : ""}>{item}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>

                            ) : onlyLink ?
                                <a href="https://development.victum-re.online" target="_blank" className={`${(!showShadow && !mobile) && "white"}`}>{content}</a>
                                : <a href={href} className={`${href === pathname && "active"} ${(!showShadow && !mobile) && "white"}`}>{content}</a>

                            }
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                {children}
            </main>
            <SmallCentered photo={photo} certificates={certificates} />
        </>
    )
}

export default NavBar

/*NavBar.propTypes = {
    children: PropTypes.node,
    with: PropTypes.bool
}*/