import React from "react";
import "./index.css";

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
