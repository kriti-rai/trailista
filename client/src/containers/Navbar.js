import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";


function Navbar(props) {
  let logged_in = (props.logged_in === "true") ? true : false;

  let showTabs;

  if (logged_in) {
    showTabs = (
      <>
        <NavLink to='/user' activeClassName="selected-tab" className="nav-link"><span className="tab-tab-title">My Profile</span></NavLink>
        <NavLink to='/logout' activeClassName="selected-tab" className="nav-link"><span className="tab-title">Logout</span></NavLink>
      </>
    )
  } else {
    showTabs = (
      <>
        <NavLink to='/login' activeClassName="selected-tab" className="nav-link"><span className="tab-title">Login</span></NavLink>
        <NavLink to='/signup' activeClassName="selected-tab" className="nav-link"><span className="tab-title">Signup</span></NavLink>
      </>
    )
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <NavLink to='/hikes' activeClassName="selected-tab" className="nav-link"><span className="tab-title">Explore</span></NavLink>
          <NavLink to='/about' activeClassName="selected-tab" className="nav-link"><span className="tab-title">About</span></NavLink>
          <NavLink to='/' className="nav-link"><span className="app-title">Trail</span><i id="hiker-icon" className="fas fa-hiking"></i><span className="app-title">sta</span></NavLink>
          { showTabs }
        </div>
      </nav>
    </>
  )
}

export default Navbar;
