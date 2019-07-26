import React from 'react';
import './index.css';
import { withRouter, Link } from 'react-router-dom';


const Home = () => (
  <div className="background flex_container">
    <Link
      to="/gas"
      className="buttonstyle btn btn-danger btn-lg red"
    >
    Nearest Gas Station
      <p align="center" className=" flex_item_description smaller">
          Find the nearest gas station
        {' '}
        <br />
        {' '}
to your location
      </p>
    </Link>

    <Link
      to="/maintenance"
      className="buttonstyle btn btn-info btn-lg blue"
    >
      Maintenance
      <p align="center" className="flex_item_description smaller">
          Find the nearest garage
        {' '}
        <br />
        {' '}
to your location
      </p>
    </Link>

    <Link
      to="/paint-shops"
      className="buttonstyle btn btn-success btn-lg green"
    >
        Paint Shops
      <p align="center" className="flex_item_description smaller">
          Find the nearest paint shop
        {' '}
        <br />
        {' '}
to your location
      </p>
    </Link>
  </div>
);

export default withRouter(Home);
