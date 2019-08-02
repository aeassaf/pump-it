import React from 'react';
import './index.css';
import GMap from '../Map/index';
import Dropdown from '../Dropdown';
import obj from '../Dropdown/content';


class PaintShops extends React.Component {
  state={};


  render() {
    return (
      <div className="pagestyle_paint">

        <div className="flex_container_map">
          <Dropdown content={obj.Paintshops}>

            <GMap />
          </Dropdown>
        </div>


      </div>
    );
  }
}


export default PaintShops;
