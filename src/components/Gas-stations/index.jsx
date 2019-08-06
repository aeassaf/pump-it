import React from 'react';
import './index.css';
import GMap from '../Map/index';
import Dropdown from '../Dropdown';
import obj from '../Dropdown/content';

class gasStations extends React.Component {
    state={
      values: null,
    };

stateModifier = (event) => {
  const { value } = event.target;
  this.setState({ values: value });
}

render() {
  return (
    <div className="pagestyle_gas">
      <div className="flex_container_map">
        <Dropdown content={obj.Gas} currentValue={this.stateModifier} />
        <GMap getDropDownValue={{ ...this.state }} />

      </div>

    </div>
  );
}
}

export default gasStations;
