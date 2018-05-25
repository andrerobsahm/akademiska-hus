import React, {Component} from "react";
import "./index.css";

function GradientBackground (props) {
  return (
        <div
          className='gradient-background-image'
          style={{ backgroundImage: `url(${props.backgroundImage})` }} >
          <div className='gradient-overlay'></div>
    </div>
  );
}

export default GradientBackground;
