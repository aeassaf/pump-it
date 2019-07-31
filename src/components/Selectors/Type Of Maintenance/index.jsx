import React from 'react';
import './index.css';

import Geocode from 'react-geocode';

require('dotenv').config();

const { REACT_APP_GEOLOCATION_API } = process.env;
Geocode.setApiKey(REACT_APP_GEOLOCATION_API);


class TypeofMaintenance extends React.Component {
    state= {
    }

 location = (string) => {
   Geocode.fromAddress(`Nearest ${string}`).then(
     (response) => {
       const { lat, lng } = response.results[0].geometry.location;
       console.log(lat, lng);
       return { lat, lng };
     },

     (error) => {
       console.error(error);
     },
   );
 }

onClick = (event) => {
  const { value } = event.target;
  console.log(value);
  if (value !== 'none' && value !== 'Other') {
    const loco = this.location(value);
  }
}

render() {
  console.log(this.onClick);
  console.log(this.showCoordinates);

  return (
    <div>
      <select onChange={this.onClick} className="select-css-maintenance">
        <option value="none">Request</option>
        <option value="Engine">Engine</option>
        <option value="Exhaust">Exhaust</option>
        <option value="Oil Change">Oil Change</option>
        <option value="Checkup">Checkup</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}
}

export default TypeofMaintenance;
