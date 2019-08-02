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

let count = 0;

class GMap extends React.Component {
  static contextType = dropDownContent;


  state={
    lat: null,
    lng: null,
  }


  componentWillMount() {
    if (count === 0) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
          count++;
          console.log(count);
        },
        error => console.log(error),
      );
    }
    if (count !== 0) {
      Geocode.fromAddress(`${this.current_value}`).then(
        (response) => {
          const { latitude, longitude } = response.results[0].geometry.location;
          console.log(latitude, longitude);
          this.setState({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(error);
        },
      );
    }
  }


  render() {
    console.log(this.context);
    console.log(this.state.lat, this.state.lng);

    return (
      <dropDownContent.Consumer>
        {(context) => {
          const { current_value } = context;
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
        }}

      </dropDownContent.Consumer>

    );
  }
}


export default GoogleApiWrapper({
  apiKey: (REACT_APP_API_KEY),
})(GMap);
