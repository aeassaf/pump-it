import React from 'react';

class Dropdown extends React.Component {
  static globalBrand;

    state= {
    }

    render() {
      const { content, currentValue } = this.props;
      return (
        <div>
          <select onChange={currentValue}>
            {content.map((val, index) => <option value={val} key={index}>{val}</option>)}
          </select>
        </div>

      );
    }
}

export default Dropdown;
