import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '/App.css';

// Import some react-redux packages
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPhotos } from './reducers/photos';
import { calculatePi } from './reducers/pi';

import SplashScreen from './Components/SplashScreen';
import Photos from './Components/Photos';
import Pi from './Components/Pi';

class SplashScreenPage extends Component {

  constructor() {
    super();
    this.boundHandleFetchPhotos = this.handleFetchPhotos.bind(this)
    this.boundHandleCalculatePi = this.handleCalculatePi.bind(this)
  }

  handleFetchPhotos() {
    this.props.actions.fetchPhotos()
  }

  handleCalculatePi() {
    this.props.actions.calculatePi()
  }

  render () {
    return (
      <div className="SplashScreen">
        <SplashScreen />
        <main className="p3 mx-auto">
          <Photos
            photos={this.props.photos}
            handleFetchPhotos={this.boundHandleFetchPhotos}
          />
          <Pi
            pi={this.props.pi}
            handleCalculatePi={this.boundHandleCalculatePi}
          />
        </main>
      </div>
    )
  }
}

SplashScreenPage.propTypes = {
  actions: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired,
  pi: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  photos: state.photos,
  pi: state.pi.default || 0,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchPhotos, calculatePi },
    dispatch,
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreenPage);
