import React from 'react'
import './index.css'
import { withRouter, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="background">
      <Link
        to="/gas"
        className="buttonstyle_gas center_right btn btn-danger btn-lg"
      >
        Nearest Gas Station
        <p align="center" className=" center_btn">
          Find the nearest gas station <br /> to your location
        </p>
      </Link>

      <Link
        to="/maintenance"
        className="buttonstyle center btn btn-info btn-lg "
      >
        Maintenance
        <p align="center" className=" center_btn">
          Find the nearest garage <br /> to your location
        </p>
      </Link>

      <Link
        to="/paint-shops"
        className="buttonstyle_paint center_left btn btn-success btn-lg"
      >
        Paint Shops
        <p align="center" className=" center_btn">
          Find the nearest paint shop <br /> to your location
        </p>
      </Link>
    </div>
  )
}

export default withRouter(Home)
