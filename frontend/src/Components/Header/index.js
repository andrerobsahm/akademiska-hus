import React from "react";
import "./index.css";
import logo from "../../logo.svg";

const Header = () => (
    <div className="header">
        <img src={logo} alt="A-hus logotype" className="app-logo" />
        <h1 className="header-title">Akademiska hus</h1>
    </div>
);

export default Header;
