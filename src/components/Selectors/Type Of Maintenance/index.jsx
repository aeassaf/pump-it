import React from 'react';
import './index.css';

const TypeofMaintenance = () => (
  <div>
    <select className="select-css-maintenance">
      <option value="none">Request</option>
      <option value="Engine">Engine</option>
      <option value="Exhaust">Exhaust</option>
      <option value="Oil Change">Oil Change</option>
      <option value="Checkup">Checkup</option>
      <option value="Other">Other</option>
    </select>
  </div>
);

export default TypeofMaintenance;
