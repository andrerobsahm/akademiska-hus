import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../Components/Header";
import Button from "../Components/Button";
import GradientBackground from "../Components/GradientBackground";

class FindCampus extends Component {
  render() {
  return (
      <div className="App">
      <GradientBackground />
          <Header />
          <div className="main-content">
          <h1>Välj campus</h1>
          <p>Följande campus finns i närheten av dig:</p>
          </div>
      </div>
    );
  }
}

export default FindCampus;
