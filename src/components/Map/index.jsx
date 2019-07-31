import React, { useState } from 'react';
import './index.css';
import {
  Map, InfoWindow, Marker, GoogleApiWrapper,
} from 'google-maps-react';

const { REACT_APP_API_KEY } = process.env;


const GMap = () => (
  <Map google={this.props.google} zoom={14}>

    <Marker
      onClick={this.onMarkerClick}
      name="Current location"
    />

    <InfoWindow onClose={this.onInfoWindowClose}>
      <div>
        <h1>{this.state.selectedPlace.name}</h1>
      </div>
    </InfoWindow>
  </Map>
);

export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE),
})(GMap);
