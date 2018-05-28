import React from "react";
import "./index.css";

const Card = props => (
  <div className="card" style={{ border: props.border }}>
      <span>
        <div className="icon-text">
          <img src={props.icon} alt=""/>
          <p className="card-text">{props.text}</p>
        </div>
      </span>
  </div>
);

export default Card;
