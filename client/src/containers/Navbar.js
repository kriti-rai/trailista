import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar(props) {
  let logged_in = (props.logged_in === "true") ? true : false;
  let showTabs;

  if (logged_in) {
    showTabs = (
      <>
        <NavLink to={ "/" + props.currentUser.username } activeClassName="selected-tab" className="nav-link"><span className="tab-title">My Profile</span></NavLink>
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

  let openMenu = (e) => {
    e.preventDefault();
    let x = document.getElementById("topNav");
    if (x.className === "navbar") {
      x.className = "topnav responsive";
    } else {
      x.className = "navbar"
    }
  }

  return (
    <>
      <nav className="navbar" id="topNav">
        <NavLink to='/hikes' activeClassName="selected-tab" className="nav-link"><span className="tab-title">Explore</span></NavLink>
        <NavLink to='/about' activeClassName="selected-tab" className="nav-link"><span className="tab-title">About</span></NavLink>
        <NavLink to='/' className="nav-link"><span className="app-title">Trail</span><i id="hiker-icon" className="fas fa-hiking"></i><span className="app-title">sta</span></NavLink>
        { showTabs }
        <button onClick={ openMenu } id="navbarButton" className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
          className="fas fa-bars fa-1x"></i></span></button>
      </nav>
    </>
  )
}

export default Navbar;
