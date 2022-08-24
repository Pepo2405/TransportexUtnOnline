import {NavLink} from "react-router-dom";
import React from "react";
import '../../styles/components/layout/Header.css'
const Header = (props) => {
    return (
        <header className="header">
                <NavLink to="/" className={({isActive}) => isActive ? "activo" :
                undefined}><img id="logo" src='images/logo.png' width='100' alt='Transportes X' ></img>
                <h1>Transportes X</h1>
                </NavLink>
        </header>
    )  
};

export default Header;