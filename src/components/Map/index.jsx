import React from 'react';
import './index.css';
import {
  Map, GoogleApiWrapper, Marker, InfoWindow,
} from 'google-maps-react';
import Geocode from 'react-geocode';
import { dropDownContent } from '../Dropdown';

require('dotenv').config();

const { REACT_APP_API_KEY } = process.env;
Geocode.setApiKey(REACT_APP_API_KEY);

const style = {
  width: '40%',
  height: '50%',
};


class GMap extends React.Component {
  static contextType = dropDownContent;


static dropvalue;

static brandValue;


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

  componentDidUpdate() {
    if (this.dropvalue && this.dropvalue !== this.state.value) {
      Geocode.fromAddress(`Nearest ${this.brandValue} ${this.dropvalue} `).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          this.setState({ latitude: lat, longitude: lng, value: this.dropvalue });
        },
        (error) => {
          console.error(error);
        },
      );
    }
  }

  render() {
    try {
      const { current_value, current_brand } = this.context;
      this.dropvalue = current_value;
      this.brandValue = current_brand;
    } catch (e) {
      console.error(e);
    }


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
