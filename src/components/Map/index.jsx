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
  static flag;

  state = {
    userLatitude: null,
    userLongitude: null,
    conditionValue: null,
    conditionBrand: null,
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
      console.log(`${nearbySearch}${this.state.userLatitude}%20${
        this.state.userLongitude
      }&name=${dropdownVal.Brand}%20${
        dropdownVal.values
      }&radius=10000&key=${REACT_APP_API_KEY}`);
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
      if (dropdownVal.Brand === 'Other') {
        fetch(
          `${nearbySearch}${this.state.userLatitude}%20${
            this.state.userLongitude
          }&name=Car%20${
            dropdownVal.values
          }&radius=10000&key=${REACT_APP_API_KEY}`,
        )
          .then(response => response.json())
          .then(json => this.setState({
            userLatitude: json.results[0].geometry.location.lat,
            userLongitude: json.results[0].geometry.location.lng,
            conditionValue: dropdownVal.values,
            conditionBrand: dropdownVal.Brand,
          }))
          .catch((error) => {
            console.log(error);
          });
      }
    }

    fetchBrandDiffThanOther(dropdownVal) {
      if (dropdownVal.values !== 'Other') {
        fetch(
          `${nearbySearch}${this.state.userLatitude}%20${
            this.state.userLongitude
          }&name=${dropdownVal.Brand}%20${
            dropdownVal.values
          }&radius=10000&key=${REACT_APP_API_KEY}`,
        )
          .then(response => response.json())
          .then(json => this.setState({
            userLatitude: json.results[0].geometry.location.lat,
            userLongitude: json.results[0].geometry.location.lng,
            conditionValue: dropdownVal.values,
            conditionBrand: dropdownVal.Brand,
          }))
          .catch((error) => {
            console.log(error);
          });
      }
    }

    fetchingInfoWithoutBrand(dropdownVal) {
      if (dropdownVal.values !== 'Select' && !dropdownVal.flag && this.state.conditionValue !== dropdownVal.values) {
        console.log('hello');
        fetch(
          `${nearbySearch}${this.state.userLatitude}%20${
            this.state.userLongitude
          }&name=${dropdownVal.values}&type=car&radius=10000&key=${REACT_APP_API_KEY}`,
        )
          .then(response => response.json())
          .then(json => this.setState({
            userLatitude: json.results[0].geometry.location.lat,
            userLongitude: json.results[0].geometry.location.lng,
            conditionValue: dropdownVal.values,
          }))
          .catch((error) => {
            console.log(error);
          });
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
            center={{
              lat: this.state.userLatitude,
              lng: this.state.userLongitude,
            }}
            zoom={12}
            onClick={this.onMapClicked}
          >
            <Marker
              onClick={this.onMarkerClick}
              name="Current location"
              position={{
                lat: this.state.userLatitude,
                lng: this.state.userLongitude,
              }}
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
  apiKey: REACT_APP_API_KEY,
})(GMap);
