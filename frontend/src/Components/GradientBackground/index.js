import React from "react";
import "./index.css";

function GradientBackground (props) {
  return (
        <div
          className='gradient-background-image'
          style={{ backgroundImage: `url(${props.backgroundImage})`, borderBottomLeftRadius: props.bblradius, borderBottomRightRadius: props.bbrradius }} >
          <div className='gradient-overlay' style={{ height: props.height, borderBottomLeftRadius: props.bblradius, borderBottomRightRadius: props.bbrradius }}></div>
    </div>
  );
}

export default GradientBackground;
