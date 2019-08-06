import React from 'react';
import './index.css';
import GMap from '../Map/index';
import Dropdown from '../Dropdown';
import obj from '../Dropdown/content';

class Garage extends React.Component {
    state={
      Brand: null,
      values: null,
    };

maintenanceModifier = (event) => {
  const { value } = event.target;
  this.setState({ values: value });
}

brandModifier = (event) => {
  const { value } = event.target;
  this.setState({ Brand: value });
}

render() {
  return (
    <div className="pagestyle_garage">
      <div className="flex_container_map">

        <Dropdown content={obj.Brand} currentValue={this.brandModifier} />
        <Dropdown content={obj.TypeofMaintenance} currentValue={this.maintenanceModifier} />
        <GMap getDropDownValue={{ ...this.state }} />
      </div>
    </div>
  );
}
}

export default Garage;
