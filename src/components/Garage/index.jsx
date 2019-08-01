import React from 'react';
import './index.css';
import GMap from '../Map/index';
import Dropdown from '../Dropdown';
import obj from '../Dropdown/content';

const Garage = () => (
  <div className="pagestyle_garage">
    <div className="flex_container_map">

      <Dropdown content={obj.Brand} />
      <Dropdown content={obj.TypeofMaintenance} />

      <GMap />
    </div>
  </div>
);

export default Garage;
