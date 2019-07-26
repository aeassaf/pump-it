import React from 'react';
import './index.css';
import { withRouter, Link } from 'react-router-dom';

const Home = () => (
  <div className="background flex_container">
    <Link
      to="/gas"
      className="buttonstyle flex_item btn btn-danger btn-lg"
    >
        Nearest Gas Station
      <p align="center" className=" flex_item_description">
          Find the nearest gas station
        {' '}
        <br />
        {' '}
to your location
      </p>
    </Link>

    <Link
      to="/maintenance"
      className="buttonstyle flex_item btn btn-info btn-lg"
    >
        Maintenance
      <p align="center" className="flex_item_description">
          Find the nearest garage
        {' '}
        <br />
        {' '}
to your location
      </p>
    </Link>

    <Link
      to="/paint-shops"
      className="buttonstyle flex_item btn btn-success btn-lg"
    >
        Paint Shops
      <p align="center" className="flex_item_description">
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
