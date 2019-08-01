import React from 'react';
import './index.css';
import GMap from '../Map/index';
import Dropdown from '../Dropdown';
import obj from '../Dropdown/content';


const PaintShops = () => (
  <div className="pagestyle_paint">

    <div className="flex_container_map">
      <Dropdown content={obj.Paintshops} />
      <GMap />
    </div>


  </div>
);

export default PaintShops;
