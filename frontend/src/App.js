import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./App.css";

// Import some react-redux packages
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import SplashScreen & IndexPage
import SplashScreen from './pages/SplashScreen';
import Index from './pages/Index';
import FindCampus from './pages/FindCampus';
import CurrentlyOnCampus from './pages/CurrentlyOnCampus';
import ChosenCampus from './pages/ChosenCampus';
import ErrorReport from './pages/ErrorReport';

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
          <li><Link to="/SplashScreen">SplashScreen</Link></li>
          <li><Link to="/FindCampus">FindCampus</Link></li>
          <li><Link to="/CurrentlyOnCampus">CurrentlyOnCampus</Link></li>
          <li><Link to="/ChosenCampus">ChosenCampus</Link></li>
          <li><Link to="/ErrorReport">ErrorReport</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route path='/SplashScreen' component={SplashScreen}/>
          <Route path='/FindCampus' component={FindCampus}/>
          <Route path='/CurrentlyOnCampus' component={CurrentlyOnCampus}/>
          <Route path='/ChosenCampus' component={ChosenCampus}/>
          <Route path='/ErrorReport' component={ErrorReport}/>
        </Switch>
      </div>
    );
  }
}

export default App;
