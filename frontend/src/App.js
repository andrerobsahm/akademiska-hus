import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./App.css";

// Import some react-redux packages
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import SplashScreen & IndexPage
import SplashScreenPage from './pages/SplashScreenPage';
import IndexPage from './pages/IndexPage';

import { Switch, Route, Link } from 'react-router-dom';

// import Header from "./Components/Header";
// import Button from "./Components/Button";
// import GradientBackground from "./Components/GradientBackground";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/SplashScreenPage">SplashScreenPage</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={IndexPage}/>
          <Route path='/SplashScreenPage' component={SplashScreenPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
