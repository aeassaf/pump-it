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
    conditionMaintenance: null,
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
      if ((dropdownVal.maintenanceType
           && dropdownVal.brand
            && (dropdownVal.maintenanceType !== this.state.conditionMaintenance || dropdownVal.brand !== this.state.conditionBrand)
            && dropdownVal.maintenanceType !== 'Select' && dropdownVal.brand !== 'Brand')
            || (dropdownVal.values && dropdownVal.values !== this.state.conditionValue && dropdownVal.values !== 'Select')) {
        this.fetchingInfo(dropdownVal);
      }
    }

    fetchingInfo(dropdownVal) {
      const apiContent = [];
      this.fetching(dropdownVal)
        .then(response => response.json())
        .then((json) => {
          json.results.map(response => apiContent.push(response.geometry));
          if (dropdownVal.brand) {
            this.setState({
              conditionMaintenance: dropdownVal.maintenanceType,
              conditionBrand: dropdownVal.brand,
              coordinates: apiContent,
            });
          } else if (dropdownVal.values) {
            this.setState({ conditionValue: dropdownVal.values, coordinates: apiContent });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetching(dropdownVal) {
      if (dropdownVal.brand === 'Other') {
        dropdownVal.brand = 'Car';
      }
      return (
        fetch(`${nearbySearch}${this.state.userLatitude}%20${
          this.state.userLongitude
        }&name=${dropdownVal.brand ? `${dropdownVal.brand}%20` : ''}${
          (dropdownVal.values && dropdownVal.values) || (dropdownVal.maintenanceType && dropdownVal.maintenanceType)}&radius=10000&key=${REACT_APP_API_KEY}`));
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
