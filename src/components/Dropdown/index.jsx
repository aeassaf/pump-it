import React from 'react';
import './index.css';

class Dropdown extends React.Component {
  static globalBrand;

  state = {};

  render() {
    const { content, currentValue } = this.props;
    return (
      <div>
        <select onChange={currentValue} className="selectStyle">
          {content.map((val, index) => (
            <option className="optionColor" value={val} key={index}>
              {val}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
