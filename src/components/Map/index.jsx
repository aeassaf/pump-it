import React from 'react';
import './index.css';
import {
  Map, GoogleApiWrapper, Marker, InfoWindow,
} from 'google-maps-react';

import nearbySearch from '../../utils/api';


require('dotenv').config();

const { REACT_APP_API_KEY } = process.env;

const style = {
  width: '40%',
  height: '50%',
};

class GMap extends React.Component {
  state = {
    userLatitude: null,
    userLongitude: null,
    conditionValue: null,
    conditionBrand: null,
    coordinates: null,
  };

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          userLatitude: position.coords.latitude,
          userLongitude: position.coords.longitude,
        });
      },
      error => console.log(error),
    );
  }

    getInfo = (dropdownVal) => {
      if (dropdownVal.values) {
        this.fetchingInfoWithBrand(dropdownVal);
        this.fetchingInfoWithoutBrand(dropdownVal);
      }
    }

    fetchingInfoWithBrand(dropdownVal) {
      if (
        dropdownVal.Brand
        && dropdownVal.Brand !== 'Brand'
        && dropdownVal.values !== 'Select'
        && (this.state.conditionBrand !== dropdownVal.Brand || this.state.conditionValue !== dropdownVal.values)) {
        this.fetchOtherAsBrand(dropdownVal);
        this.fetchBrandDiffThanOther(dropdownVal);
      }
    }

    fetchOtherAsBrand(dropdownVal) {
      const apiContent = [];
      if (dropdownVal.Brand === 'Other') {
        fetch(
          `${nearbySearch}${this.state.userLatitude}%20${
            this.state.userLongitude
          }&name=Car%20${
            dropdownVal.values
          }&radius=10000&key=${REACT_APP_API_KEY}`,
        )
          .then(response => response.json())
          .then((json) => {
            json.results.map(response => apiContent.push(response.geometry));

            this.setState({

              conditionValue: dropdownVal.values,
              conditionBrand: dropdownVal.Brand,
              coordinates: apiContent,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    fetchBrandDiffThanOther(dropdownVal) {
      const apiContent = [];
      if (dropdownVal.values !== 'Other') {
        fetch(
          `${nearbySearch}${this.state.userLatitude}%20${
            this.state.userLongitude
          }&name=${dropdownVal.Brand}%20${
            dropdownVal.values
          }&radius=10000&key=${REACT_APP_API_KEY}`,
        )
          .then(response => response.json())
          .then((json) => {
            json.results.map(response => apiContent.push(response.geometry));

            this.setState({
              conditionValue: dropdownVal.values,
              conditionBrand: dropdownVal.Brand,
              coordinates: apiContent,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    fetchingInfoWithoutBrand(dropdownVal) {
      const apiContent = [];
      if (dropdownVal.values !== 'Select' && !dropdownVal.flag && this.state.conditionValue !== dropdownVal.values) {
        fetch(
          `${nearbySearch}${this.state.userLatitude}%20${
            this.state.userLongitude
          }&name=${dropdownVal.values}&type=car&radius=10000&key=${REACT_APP_API_KEY}`,
        )
          .then(response => response.json())
          .then((json) => {
            json.results.map(response => apiContent.push(response.geometry));
            this.setState({ conditionValue: dropdownVal.values, coordinates: apiContent });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }


    render() {
      const { getDropDownValue } = this.props;
      this.getInfo(getDropDownValue);
      let markers;

      if (this.state.coordinates) {
        markers = this.state.coordinates.map((value, index) => (
          <Marker
            key={index}
            onClick={this.onMarkerClick}
            name="Current location"
            position={{
              lat: value.location.lat,
              lng: value.location.lng,
            }}
          />
        ));
      }

      return (
        <div>
          <Map
            className="map_margin map"
            google={this.props.google}
            style={style}
            center={{
              lat: this.state.userLatitude,
              lng: this.state.userLongitude,
            }}
            zoom={12}
            onClick={this.onMapClicked}
          >

            <Marker

              onClick={this.onMarkerClick}
              name="Your location"
              position={{
                lat: this.state.userLatitude,
                lng: this.state.userLongitude,
              }}
              icon={{
                url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
              }}
            />

            {markers}


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
  apiKey: REACT_APP_API_KEY,
})(GMap);
