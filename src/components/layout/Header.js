import { NavLink } from "react-router-dom";
import React from "react";
import "../../styles/components/layout/Header.css";
const Header = (props) => {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          id="logo"
          src="images/logo.png"
          width="100"
          alt="Transportes X"
        ></img>
      </NavLink>

      <NavLink to="/">
        <h1>Transportes X</h1>
      </NavLink>
    </header>
  );
};

export default Header;
