import React from 'react';
import './index.css';
import GMap from '../Map/index';
import Dropdown from '../Dropdown';
import obj from '../Dropdown/content';

const gasStations = () => (
  <div className="pagestyle_gas">
    <div className="flex_container_map">
      <Dropdown content={obj.Gas}>
        <GMap />
      </Dropdown>
    </div>

  </div>
);

export default gasStations;
