import React from "react";
import "./NavBar.css";
import CartWidget from "../CardWidget/CardWidget";
const NavBar = () => {
    return (
        <header className="app">
            <h1>MaxClean</h1>
            <nav>
                <ul>
                    <li>Productos</li>
                    <li>Servicios</li>
                    <li>Nosotros</li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    );
};

export default NavBar;
