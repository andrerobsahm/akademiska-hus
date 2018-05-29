import React, { Component } from "react";

// import SplashScreen & IndexPage
import SplashScreen from './pages/SplashScreen/SplashScreen';
import Index from './pages/Index/Index';
import FindCampus from './pages/FindCampus/FindCampus';
import CurrentlyOnCampus from './pages/CurrentlyOnCampus/CurrentlyOnCampus';
import ChosenCampus from './pages/ChosenCampus/ChosenCampus';
import BuildingInfo from './pages/BuildingInfo/BuildingInfo';
import ErrorReport from './pages/ErrorReport/ErrorReport';

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
          <Route path="/ChosenCampus" component={ChosenCampus} />
          <Route path="/BuildingInfo" component={BuildingInfo} />
        </Switch>
      </div>
    );
  }
}

export default App;
