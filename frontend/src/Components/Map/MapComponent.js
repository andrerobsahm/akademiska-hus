import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import './index.css';

const MapComponent = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 57.6888144, lng: 11.978123200000027 }}
  >
    <Marker
      position={{ lat: 57.6888144, lng: 11.978123200000027 }}
    />
  </GoogleMap>
);

export default MapComponent;
