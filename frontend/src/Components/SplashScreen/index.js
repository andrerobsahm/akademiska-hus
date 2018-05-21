import React from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import "./Splash.css";

const SplashScreen = () => (
  <header>
    <div className="Logo">
      <img src="Logo_SplashScreen.svg" width="50%"></img>
    </div>
    <div className="LoadingBAR">
      <div className="LoadingBar-background"></div>
      <LoadingBar className="LoadingBar" showFastActions />
    </div>
  </header>
)

export default SplashScreen;
