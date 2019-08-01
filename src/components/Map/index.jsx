import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './index.css';

require('dotenv').config();

const { REACT_APP_API_KEY } = process.env;

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 45.65,
    longitude: -76.43,
    width: 700,
    height: 500,
    zoom: 10,
  });

  return (
    <div className="map_margin">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={REACT_APP_API_KEY}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      />
    </div>
  );
}

export default Map;
