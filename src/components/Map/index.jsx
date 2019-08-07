import React from 'react';
import './index.css';
import {
  Map, GoogleApiWrapper, Marker, InfoWindow,
} from 'google-maps-react';
import Geocode from 'react-geocode';

require('dotenv').config();
// const axios = require('axios');

const { REACT_APP_API_KEY } = process.env;
Geocode.setApiKey(REACT_APP_API_KEY);

const style = {
  width: '40%',
  height: '50%',
};

class GMap extends React.Component {
  state={
    latitude: null,
    longitude: null,
    value: null,
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      error => console.log(error),
    );
  }

  // axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.893791%2035.501778&name=BMW%20Garage&type=garage&radius=1500&key=AIzaSyAQGrPwXrL_frF93kNy2cVXNJ0vDR5pP6I', { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
  //     .catch((error) => {
  //       console.log(error);
  //     }).then((respone) => {
  //       console.log('response', respone);
  //     });
  // }

  getInfo = (dropdownVal) => {
    if (dropdownVal && dropdownVal !== this.state.value) {
      if (dropdownVal.Brand) {
        console.log(dropdownVal);
      } else { console.log('exception'); }
    }
  }

  render() {
    const { getDropDownValue } = this.props;
    this.getInfo(getDropDownValue);

    return (
      <div>

        <Map
          className="map_margin"
          google={this.props.google}
          style={style}
          center={{ lat: this.state.latitude, lng: this.state.longitude }}
          zoom={12}
          onClick={this.onMapClicked}
        >

          <Marker
            onClick={this.onMarkerClick}
            name="Current location"
            position={{ lat: this.state.latitude, lng: this.state.longitude }}
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
