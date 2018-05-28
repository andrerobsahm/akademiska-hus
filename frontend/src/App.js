import React, { Component } from "react";
import PropTypes from 'prop-types';

// import SplashScreen & IndexPage
import SplashScreen from './pages/SplashScreen/SplashScreen';
import Index from './pages/Index/Index';
import FindCampus from './pages/FindCampus/FindCampus';
import CurrentlyOnCampus from './pages/CurrentlyOnCampus/CurrentlyOnCampus';
import ChosenCampus from './pages/ChosenCampus/ChosenCampus';
import ErrorReport from './pages/ErrorReport';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={SplashScreen}/>
          <Route path='/Index' component={Index}/>
          <Route path='/FindCampus' component={FindCampus}/>
          <Route path='/CurrentlyOnCampus' component={CurrentlyOnCampus}/>
          <Route path='/ErrorReport' component={ErrorReport}/>
          <Route name="ChosenCampus" path="/:id" component={ChosenCampus} />
        </Switch>
      </div>
    );
  }
}

export default App;
