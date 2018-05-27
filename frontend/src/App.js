import React, { Component } from "react";
import PropTypes from 'prop-types';

// import SplashScreen & IndexPage
import SplashScreen from './pages/SplashScreen/SplashScreen';
import Index from './pages/Index/Index';
import FindCampus from './pages/FindCampus/FindCampus';
import CurrentlyOnCampus from './pages/CurrentlyOnCampus';
import ChosenCampus from './pages/ChosenCampus/ChosenCampus';
import ErrorReport from './pages/ErrorReport';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route path='/SplashScreen' component={SplashScreen}/>
          <Route path='/FindCampus/FindCampus' component={FindCampus}/>
          <Route path='/CurrentlyOnCampus' component={CurrentlyOnCampus}/>
          <Route path='/ChosenCampus' component={ChosenCampus}/>
          <Route path='/ErrorReport' component={ErrorReport}/>
        </Switch>
      </div>
    );
  }
}

export default App;
