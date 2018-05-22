import React from "react";
import "./index.css";
import logo from "../../logo.svg";

const Header = () => (
    <div className="header">
        <img src={logo} alt="A-hus logotype" className="app-logo" />
        <p className="header-title">Akademiska hus</p>
    </div>
);

export default Header;
