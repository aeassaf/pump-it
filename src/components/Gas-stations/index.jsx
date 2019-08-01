import React from 'react';
import './index.css';
import GMap from '../Map/index';
import TypeofGas from '../Selectors/Gas';

const gasStations = () => (
  <div className="pagestyle_gas">
    <div className="flex_container_map">
      <TypeofGas />
      <GMap />
    </div>

  </div>
);

export default gasStations;
