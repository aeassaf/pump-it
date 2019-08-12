import React from 'react';
import './index.css';
import GMap from '../Map/index';
import Dropdown from '../Dropdown';
import obj from '../Dropdown/content';

class PaintShops extends React.Component {
  state = {
    values: null,
  };

  stateModifier = (event) => {
    const { value } = event.target;
    this.setState({ values: value });
  };

  render() {
    return (
      <div className="pagestyle_paint flexContainerMap">
        <div className="lessMargin">
          <Dropdown content={obj.Paintshops} currentValue={this.stateModifier} />
        </div>
        <div className="flexItemMap">
          <GMap getDropDownValue={{ ...this.state }} />
        </div>
      </div>
    );
  }
}

export default PaintShops;
