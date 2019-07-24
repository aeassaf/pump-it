import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/gas">gas </NavLink>
        <NavLink to="/maintenance">maintenance </NavLink>
        <NavLink to="/paint-shops">paint-shops </NavLink>
        </div>
    )
}

export default Navigation;