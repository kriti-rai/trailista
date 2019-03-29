import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";


function Navbar(props) {
  let logged_in = (props.logged_in === "true") ? true : false;

  let showTabs;

  if (logged_in) {
    showTabs = (
      <>
        <NavLink to='/user' className="nav-link">My Profile</NavLink>
        <NavLink to='/logout' className="nav-link">Logout</NavLink>
      </>
    )
  } else {
    showTabs = (
      <>
        <NavLink to='/login' className="nav-link">Login</NavLink>
        <NavLink to='/signup' className="nav-link">Signup</NavLink>
      </>
    )
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <NavLink to='/hikes' className="nav-link">Explore</NavLink>
          <NavLink to='/about' className="nav-link">About</NavLink>
          <h3><em><NavLink to='/' className="nav-link">Trailista</NavLink></em></h3>
          { showTabs }
        </div>
      </nav>
    </>
  )
}

export default Navbar;
