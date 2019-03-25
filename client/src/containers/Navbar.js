import React from 'react';
import { NavLink } from "react-router-dom";
import '.././styles/NavBar.css';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink to='/hikes' className="nav-link">Explore</NavLink>
            <NavLink to='/about' className="nav-link">About</NavLink>
            <h3><NavLink to='/' className="nav-link">MyApp</NavLink></h3>
            <NavLink to='/login' className="nav-link">Log in</NavLink>
            <NavLink to='/signup' className="nav-link">Sign up</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
