import React, { useState } from "react";

function Navbar(){

    const[menu, setmenu] = useState('.menu-width')

    const togglemenu = () =>{
        setmenu(!menu)
    }
    const menuclick = () =>{
        setmenu(!menu)
    }
    return(
        <>
        <header className="head-section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom-nav-cantainer">
                    <a className="navbar-brand" href="#"><span>Rakesh</span></a>
                </nav>
                <div className={menu ? "custom-menu-btn" : "custom-menu-btn menu-btn-style"}>
                    <button onClick={togglemenu}>
                        <span className="s-1"></span>
                        <span className="s-2"></span>
                        <span className="s-3"></span>
                    </button>
                    <div className={menu ? "overlay menu-btn-style" : "overlay menu-width"}>
                        <div className="overlay-content">
                            <a href="#Home" onClick={menuclick}>Home</a>
                            <a href="#about" onClick={menuclick}>About</a>
                            <a href="#projects" onClick={menuclick}>Projects</a>
                            <a href="#skills" onClick={menuclick}>Skills</a>
                            <a href="#contact" onClick={menuclick}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Navbar;