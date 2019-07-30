import React from 'react';
import './index.css';
import Map from '../Map/index';
import TypeofCars from '../Selectors/Car-Brands';
import TypeofMaintenance from '../Selectors/Type Of Maintenance';

const Garage = () => (
  <div className="pagestyle_garage">
    <div className="flex_container_map">

      <TypeofCars />
      <TypeofMaintenance />

      <Map />
    </div>

  </div>
);

export default Garage;
