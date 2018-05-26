import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../../Components/Header";
import Button from "../../Components/Button";
import GradientBackground from "../../Components/GradientBackground";
import BackgroundImage from '../../images/arkitekter.jpg'; // Path to BackgroundImage


class ChosenCampus extends Component {
  render() {
  return (
      <div className="App">
          <Header />
          <GradientBackground
              backgroundImage={BackgroundImage}
              />
          <div className="main-content">
          <h1>Namn på vald campus</h1>
          <p>Namn på campus-området</p>
          </div>
      </div>
    );
  }
}

export default ChosenCampus;
