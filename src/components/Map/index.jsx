import React from 'react';
import MapGL from 'react-map-gl';

const Map = () => (
  <MapGL
    width={700}
    height={450}
    latitude={37.768}
    longitude={-122.331}
    zoom={9.017}
    mapStyle="mapbox://styles/mapbox/dark-v9"
    mapboxApiAccessToken="pk.eyJ1IjoiYW50b2luZS1hc3NhZjE1IiwiYSI6ImNqeW8wcjFseTB0bDkzbnBlc2V1aGRjdnUifQ.yfNdGKv27Nxa4lDiZ5pwtQ"
  />
);

export default Map;
