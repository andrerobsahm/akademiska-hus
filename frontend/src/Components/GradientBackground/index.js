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

<<<<<<< HEAD
export default GradientBackground;
=======
export default GradientBackground;
>>>>>>> 0a6d3841fad8fb0ab1b0af83bad41e82e192bd16
