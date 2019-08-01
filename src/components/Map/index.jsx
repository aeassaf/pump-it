import React from 'react';
import './index.css';
import {
  Map, GoogleApiWrapper, Marker, InfoWindow,
} from 'google-maps-react';

require('dotenv').config();

const { REACT_APP_API_KEY } = process.env;

const style = {
  width: '40%',
  height: '50%',
};


class GMap extends React.Component {
  state={}

  render() {
    return (
      <Map
        className="map_flex"
        google={this.props.google}
        style={style}
        zoom={4}
      >

        <Marker
          onClick={this.onMarkerClick}
          name="Current location"
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>hi</h1>
          </div>
        </InfoWindow>
      </Map>

    );
  }
}


export default GoogleApiWrapper({
  apiKey: (REACT_APP_API_KEY),
})(GMap);
