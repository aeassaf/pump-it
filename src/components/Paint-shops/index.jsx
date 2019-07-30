import React from 'react';
import './index.css';
import Map from '../Map/index';
import TypeofPaint from '../Selectors/Type Of Paint';


const PaintShops = () => (
  <div className="pagestyle_paint">
    <div className="flex_container_map">
      <TypeofPaint />

      <Map />
    </div>

  </div>
);

export default PaintShops;
