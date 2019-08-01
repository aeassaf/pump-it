import React from 'react';
import './index.css';
import GMap from '../Map/index';
import TypeofPaint from '../Selectors/Type Of Paint';


const PaintShops = () => (
  <div className="pagestyle_paint">

    <div className="flex_container_map">
      <TypeofPaint />

      <GMap />
    </div>


  </div>
);

export default PaintShops;
