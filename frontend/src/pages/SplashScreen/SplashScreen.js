import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import GradientBackground from "../../Components/GradientBackground";
import "./Splash.css";

export default class SplashScreen extends Component {

  constructor() {
    super();
    this.state={
      showME: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    },
    1700)
  }

  render () {
    return (
      this.state.showME ?
        <div className="SplashScreen">
        <GradientBackground bbrradius={'0px 0px'} bblradius={'0px 0px'}/>
        <div className="main-content">
          <main className="p3 mx-auto">
            <header>
              <div className="Logo">
                <img src="Logo_SplashScreen.svg" width="50%" alt="Logga"></img>
              </div>
            </header>
          </main>
          </div>
        </div>
        :
        <Redirect to='/'/>
      )
}
}
