import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import Header from "../../Components/Header";
import Button from "../../Components/Button";
import GradientBackground from "../../Components/GradientBackground";
import BackgroundImage from '../../images/arkitekter.jpg'; // Path to BackgroundImage
import "./ChosenCampus.css";

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
            <div className="option-container">
              <div>
                <Button title="Felanmälan" icon="../tools.svg" link="/FindCampus"/>
              </div>
              <div>
                <Button title="Aktuellt" icon="../automobile-assistant.svg"/>
              </div>
              <div>
                <Button title="Byggnadsinfo" icon="../buildings.svg"/>
              </div>
              <div>
                <Button title="Kontaktinfo" icon="../information.svg"/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ChosenCampus;
