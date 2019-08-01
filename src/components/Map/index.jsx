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
  state={
    lat: null,
    lng: null,
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      error => console.log(error),
    );
  }

  render() {
    console.log(this.state.lat, this.state.lng);
    return (
      <div>


        <Map
          className="map_margin"
          google={this.props.google}
          style={style}
          center={{ lat: this.state.lat, lng: this.state.lng }}
          zoom={12}
          onClick={this.onMapClicked}
        >

          <Marker
            onClick={this.onMarkerClick}
            name="Current location"
            position={{ lat: this.state.lat, lng: this.state.lng }}
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>hi</h1>
            </div>
          </InfoWindow>
        </Map>

      </div>

    );
  }
}


export default GoogleApiWrapper({
  apiKey: (REACT_APP_API_KEY),
})(GMap);
