import React, { useState } from "react"
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
// import NavbarItems from '../data/Links.json';
import NavbarItems from '../data/Links.json'

import "./Navbar.css"


export default function Navbar() {


    const [navbarIcon, setNavbarIcon] = useState("fas fa-bars") //Initialize menu icon
    const [menuOpen, setMenuOpen] = useState(false) //Init state -> closed
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => { window.scrollY >= 80 ? setColorchange(true) : setColorchange(false) };
    window.addEventListener("scroll", changeNavbarColor);

    function handleNavbar() {
        setNavbarIcon(prevIcon => prevIcon === "fas fa-bars" ? "fas fa-times" : "fas fa-bars");
        setMenuOpen(prevOpen => !prevOpen) // toggle the menu open/closed
    }



    return (
        <nav className={colorChange ? "Navbar colorChange" : "Navbar"}>
            <div className="NavbarItems">
                <div className="NavbarSiteBrand"><Link to="/">La Piazza</Link></div>
                <div className="menu-icon"><i className={navbarIcon} onClick={handleNavbar}></i></div>
                <div className="NavbarLinks">
                    <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                        {NavbarItems.map((item, index) => {
                            return (
                                <li key={index} className={`${item.cName}`}>
                                    {/* <Link to='/' className="linkItem"  >{item.title}</Link> */}
                                    <Link smooth
                                        to={item.url}
                                        className="linkItem"
                                        onClick={() => {
                                            handleNavbar();
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                </li>

                            )
                        })}
                        {/* <li className="mobile-actions">
                            <button title="actions" aria-label="ProfileActions" >Sign Up</button>
                        </li> */}

                    </ul>

                </div>
                {/* <div className="NavbarActions">
                    <div className="singUpIconSection">
                        <button aria-label="ProfileActions"  ><i className="fa-solid fa-user"></i></button>
                    </div>

                </div> */}
            </div>
        </nav>
    )

}