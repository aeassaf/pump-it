import React from 'react';
import './index.css';

const TypeofPaint = () => (
  <div>
    <select className="select-css-paint">
      <option value="none">Request</option>
      <option value="Body Repair">Body Repair</option>
      <option value="Stickers">Stickers</option>
      <option value="Interior">Interior Design Customisations</option>
      <option value="Wrap">Wrap</option>
      <option value="Other">Other</option>
    </select>
  </div>
);

export default TypeofPaint;
