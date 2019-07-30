import React from 'react';
import './index.css';
import Map from '../Map/index';
import TypeofGas from '../Selectors/Gas';

const gasStations = () => (
  <div className="pagestyle_gas">
    <div className="flex_container_map">
      <TypeofGas />
      <Map />
    </div>

  </div>
);

export default gasStations;
