import React from "react";
import "./index.css";
// import logo from "./logo.svg";

const Button = props => (
    <a href="{props.link}">
        <button className="button">
            <span>
                <img src="{props.icon}" alt=""/>
            </span>
            {props.title}
        </button>
    </a>
);

export default Button;