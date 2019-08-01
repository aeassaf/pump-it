import React from 'react';
import './index.css';


import Geocode from 'react-geocode';

require('dotenv').config();

const { REACT_APP_GEOLOCATION_API } = process.env;
Geocode.setApiKey(REACT_APP_GEOLOCATION_API);


class TypeofCar extends React.Component {
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
    this.location(value);
  }
}

render() {
  console.log(this.onClick);
  console.log(this.showCoordinates);

  return (
    <div>
      <select onChange={this.onClick} className="select-css-brands">
        <option value="none">Brand</option>
        <option value="BMW">BMW</option>
        <option value="Opel">Opel</option>
        <option value="Honda">Honda</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}
}


export default TypeofCar;