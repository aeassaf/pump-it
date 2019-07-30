import React from 'react';
import './index.css';

const TypeofGas = () => (
  <div>
    <select className="select-css-gas">
      <option value="none">Select</option>
      <option value="Refuel">Refuel</option>
      <option value="Wash">Car Wash</option>
    </select>
  </div>
);

export default TypeofGas;
