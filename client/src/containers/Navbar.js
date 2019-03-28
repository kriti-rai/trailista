import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {
  var userActions;

  if (!!window.localStorage.jwt) {
    var userActions = (
      <>
        <NavLink to='/users/:user_id' className="nav-link">My Profile</NavLink>
        <NavLink to='/' className="nav-link">Logout</NavLink>
      </>
    )
  } else {
    var userActions = (
      <>
        <NavLink to='/login' className="nav-link">Log in</NavLink>
        <NavLink to='/signup' className="nav-link">Sign up</NavLink>
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
            { userActions }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
