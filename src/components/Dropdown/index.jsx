import React from 'react';

class Dropdown extends React.Component {
    state= {
    }


    render() {
      const { content } = this.props;

      return (
        <select>
          {content.map((val, index) => <option value={val} key={index}>{val}</option>)}
        </select>
      );
    }
}


export default Dropdown;
