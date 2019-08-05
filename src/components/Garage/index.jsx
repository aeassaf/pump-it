import React from 'react';
import './index.css';
import GMap from '../Map/index';
import Dropdown from '../Dropdown';
import obj from '../Dropdown/content';
import Brands from '../Dropdown/Brand';

class Garage extends React.Component {
state ={}


render() {
  return (
    <div className="pagestyle_garage">
      <div className="flex_container_map">

        <Brands content={obj.Brand}>
          <Dropdown content={obj.TypeofMaintenance}>
            <GMap />
          </Dropdown>
        </Brands>


      </div>
    </div>
  );
}
}

export default Garage;
