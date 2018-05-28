import React from "react";
import "./index.css";
// import logo from "./logo.svg";

const Button = props => (
    <a href={props.link}>
        <button className="button">
            <span>
              <div className="icon-title">
                <img src={props.icon} alt=""/>
                <p className="button-title">{props.title}</p>
              </div>
                <img src={props.arrowimg} alt=""/>
            </span>
        </button>
    </a>
);

export default Button;
