import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleNavbar = () => {
        setOpen((prev) => !prev);
        document.body.classList.toggle("hide-scrolling");
    };

  return (
    <header className={`header ${open ? 'active' : ''}`}>
        <div className="container">
            <div className="row flex-end">
                <button type="button" className="nav-toggler" onClick={toggleNavbar}>
                <span></span>
                </button>
                <nav className='nav'>
                    <div className="nav-inner">
                        <ul>
                            <li><NavLink className="link-item nav-item" to="/" onClick={toggleNavbar}>Home</NavLink></li>
                            <li><NavLink className="link-item nav-item" to="/about" onClick={toggleNavbar}>About</NavLink></li>
                            <li><NavLink className="link-item nav-item" to="/portfolio" onClick={toggleNavbar}>Portfolio</NavLink></li>
                            <li><NavLink className="link-item nav-item" to="/contact" onClick={toggleNavbar}>contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>

  )
}

export default Header;
