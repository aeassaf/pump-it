import React from 'react';
import './index.css';

const TypeofCar = () => (
  <div>
    <select className="select-css-brands">
      <option value="none">Brand</option>
      <option value="BMW">BMW</option>
      <option value="Opel">Opel</option>
      <option value="Honda">Honda</option>
      <option value="Mercedes">Mercedes</option>
      <option value="Other">Other</option>
    </select>
  </div>
);

export default TypeofCar;
