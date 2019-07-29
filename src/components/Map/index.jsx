import React from 'react';
import MapGL from 'react-map-gl';

const API_KEY = process.env.REACT_APP_API_KEY;

const Map = () => (
  <MapGL
    width={700}
    height={450}
    latitude={37.768}
    longitude={-122.331}
    zoom={9.017}
    mapStyle="mapbox://styles/mapbox/dark-v9"
    mapboxApiAccessToken={API_KEY}
  />
);

export default Map;
