import React, { useState } from "react"
import { HashLink as Link } from 'react-router-hash-link';
import NavbarItems from '../data/Links.json'

import "./Navbar.css"

export default function Navbar() {


    const [navbarIcon, setNavbarIcon] = useState("fas fa-bars") 
    const [menuOpen, setMenuOpen] = useState(false) 
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => { window.scrollY >= 80 ? setColorchange(true) : setColorchange(false) };
    window.addEventListener("scroll", changeNavbarColor);

    function handleNavbar() {
        setNavbarIcon(prevIcon => prevIcon === "fas fa-bars" ? "fas fa-times" : "fas fa-bars");
        setMenuOpen(prevOpen => !prevOpen) 
    }

    return (
        <nav className={colorChange ? "Navbar colorChange" : "Navbar"}>
            <div className='rightSideNav'>
                <span>LA PIAZZA</span>
                <i className={`fas ${navbarIcon}`} onClick={handleNavbar}></i>
            </div>

            <div
                className={`leftSideNav ${menuOpen ? 'active' : ''}`}
            >
                <ul className='navLinks'>
                    {NavbarItems.map((item, index) => (
                        <li key={index} className={`${item.cName}`}>
                            <Link smooth to={item.url} className="linkItem" onClick={() => { handleNavbar(); }}>
                                {item.title}
                            </Link>
                        </li>
                    ))}



                </ul>
            </div>
        </nav>
    )
}