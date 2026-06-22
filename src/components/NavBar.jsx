import PropTypes from 'prop-types'
import { Link, } from "wouter"
import { NavLink, useLocation } from "react-router-dom";
import SmallCentered from './Footer'
import { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import color from '../color';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import {
    Button,
    ButtonGroup,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    Text,
    MenuItem
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons';

const NavBar = ({ children, photo, certificates, mobile, doc, shadow = false }) => {
    const location = useLocation();

    const {
        pathname
    } = location;

    const [isChecked, setIsChecked] = useState(false);
    const [showShadow, setShowShadow] = useState(shadow);
    const { language, changeLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => window.scrollY > 0 ? setShowShadow(true) : setShowShadow(false)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /*const SubMenuProd = {
        name: "Servicios",
        options: ["Desarrollo de Ingeniería", "Fabricación", "Transporte y Montaje", "Supervisión"],
        actions: ["ingenieria", "fabricacion", "transporte", "supervision"]
    }

    const SubMenuInst = {
        name: "Plantas",
        options: ["Teotihuacán", "Hidalgo", / "Campeche", / "Cancún", /  "Puerto Progreso" /],
        actions: ["plant-teotihuacan", "plant-hidalgo", / "plant-campeche", / "plant-cancun", / "plant-progreso" /]
    }

    const menuprojects = {
        name: "Proyectos",
        options: ["Infraestructura", "Edificación", "Especiales",],
        actions: ["infraestructura", "edificacion", "especiales",]
    }*/

    /*const SubMenuInst = {
        name: "INSTALACIONES",
        options: ["PLANTAS", "INSTALACIONES"],
        actions: ["plantas", "instalaciones"]
    }*/

    const SubMenuProd = {
        name: t.nav.services, // Traducido
        options: [t.submenus.services.engineering, t.submenus.services.manufacturing, t.submenus.services.transportInstall, t.submenus.services.supervision],
        actions: ["ingenieria", "fabricacion", "transporte", "supervision"]
    }

    const SubMenuInst = {
        name: t.nav.plants, // Traducido
        options: [t.submenus.plants.teotihuacan, t.submenus.plants.hidalgo, t.submenus.plants.cancun],
        actions: ["plant-teotihuacan", "plant-hidalgo", "plant-cancun"]
    }

    const menuprojects = {
        name: t.nav.projects, // Traducido
        options: [t.submenus.projects.infrastructure, t.submenus.projects.building, t.submenus.projects.special],
        actions: ["infraestructura", "edificacion", "especiales"]
    }

    /*const routes = [
        { id: 1, href: "/", content: "Inicio" },
        { id: 2, href: "/prefabricado", content: "Sistema Prefabricado" },
        { id: 3, href: "/#", hasSubMenu: SubMenuInst },
        { id: 4, href: "/productos", content: "Productos" },
        { id: 5, href: "/#", hasSubMenu: SubMenuProd },
        { id: 6, href: "/#", hasSubMenu: menuprojects },
        { id: 7, href: "/contacto", content: "Contacto" },
        { id: 8, href: "/document_cv", content: "Proveedores", onlyLink: true },
    ]*/


    const routes = [
        { id: 1, href: "/", content: t.nav.home },
        { id: 2, href: "/prefabricado", content: t.nav.prefabricatedSystem },
        { id: 3, href: "/#", hasSubMenu: SubMenuInst },
        { id: 4, href: "/productos", content: t.nav.products },
        { id: 5, href: "/#", hasSubMenu: SubMenuProd },
        { id: 6, href: "/#", hasSubMenu: menuprojects },
        { id: 7, href: "/contacto", content: t.nav.contact },
        { id: 8, href: "/document_cv", content: t.nav.proveedores, onlyLink: true },
    ]

    useEffect(() => {
        SubMenuProd.name = t.nav.services;
        SubMenuProd.options = [t.submenus.services.engineering, t.submenus.services.manufacturing, t.submenus.services.transportInstall, t.submenus.services.supervision];
        SubMenuInst.name = t.nav.plants;
        SubMenuInst.options = [t.submenus.plants.teotihuacan, t.submenus.plants.hidalgo, t.submenus.plants.cancun];
        menuprojects.name = t.nav.projects;
        menuprojects.options = [t.submenus.projects.infrastructure, t.submenus.projects.building, t.submenus.projects.special];

        // Actualizar las rutas
        routes[0].content = t.nav.home;
        routes[1].content = t.nav.prefabricatedSystem;
        routes[3].content = t.nav.products;
        routes[6].content = t.nav.contact;
        routes[7].content = t.nav.proveedores;
    }, [t]);

    const handleCheckBoxChange = ({ target }) => setIsChecked(target.checked);

    if (isChecked) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    const openLink = () => {
        window.open('/document_cv', '_blank');
        if (mobile) {
            //e.preventDefault();
            const link = document.createElement('a');
            link.href = '/cv-grupo-ticonsa.pdf';
            link.download = 'cv-grupo-ticonsa.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <>
            <nav className={`${showShadow ? 'shadow nav-small' : 'nav'}`} style={{ backgroundColor: (showShadow || isChecked || doc) ? 'white' : 'transparent' }}>
                <a href="/" className={`enlace d-flex justify-content-center align-items-center ${(mobile && showShadow) && "center-logo"}`}>
                    <img src={(showShadow || isChecked || doc) ? "/logo-removebg.png" : "/logo-white.png"} className={showShadow ? 'logo-small' : 'logo text-shadow'} />
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
                                /*<a href="https://development.victum-re.online" target="_blank" className={`${(!showShadow && !mobile) && "white"}`}>{content}</a>*/
                                <Button
                                    //colorScheme="red"
                                    variant="outline"
                                    //bg={color?.orange}
                                    rounded={'full'}
                                    borderWidth={"1.5px"}
                                    size="md"
                                    color={showShadow || isChecked ? "#03296A" : "white"}
                                    onClick={() => openLink()}
                                    //rightIcon={<div />}
                                    //leftIcon={<div />}
                                    //fontWeight={'bold'}
                                    title={t.nav.viewCV}
                                    className={`cursor-crosshair ${(!showShadow && !mobile) && "text-shadow"}`}
                                    //colorPalette="red" 
                                    fontSize={13}
                                    _hover={{ bg: '#e25a28' }}
                                    _active={{
                                        transform: 'scale(0.98)'
                                    }}
                                >
                                    {t.nav.viewCV}
                                </Button>
                                : <a href={href} className={`${href === pathname && "active"} ${(!showShadow && !mobile) && "white text-shadow"}`}>{content}</a>

                            }
                        </li>
                    ))}
                    <li className="language-selector">
                        <Menu>
                            <MenuButton
                                as={Button}
                                size="sm"
                                rounded="full"
                                w="32px"
                                h="32px"
                                p={0}
                                minW="32px"
                                bg="transparent"
                                _hover={{ bg: "transparent" }}
                                _active={{ bg: "transparent" }}
                            >
                                <img
                                    src={language === 'esp' ? '/flags/mex.jpg' : '/flags/usa.jpg'}
                                    alt={language === 'esp' ? 'Español' : 'English'}
                                    style={{
                                        borderRadius: '50%',
                                        width: '24px',
                                        height: '24px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => changeLanguage('esp')} minH="40px">
                                    <img
                                        src="/flags/mex.jpg"
                                        alt="Español"
                                        style={{
                                            borderRadius: '50%',
                                            width: '20px',
                                            height: '20px',
                                            marginRight: '12px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <span>Español</span>
                                    {language === 'esp' && <CheckIcon ml="auto" />}
                                </MenuItem>
                                <MenuItem onClick={() => changeLanguage('eng')} minH="40px">
                                    <img
                                        src="/flags/usa.jpg"
                                        alt="English"
                                        style={{
                                            borderRadius: '50%',
                                            width: '20px',
                                            height: '20px',
                                            marginRight: '12px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <span>English</span>
                                    {language === 'eng' && <CheckIcon ml="auto" />}
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </li>

                </ul>
            </nav >
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