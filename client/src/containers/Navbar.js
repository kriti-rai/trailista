import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from '.././components/UserRegistration/SignUp';
import Login from '.././components/UserRegistration/Login';
import About from '.././components/About';
import User from '.././components/User';
import Home from '.././components/Home';
import HikesContainer from './HikesContainer';


function Navbar() {
  return (
    <div>
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/hikes' className="nav-link">Explore</Link>
                <Link to='/about' className="nav-link">About</Link>
                <h3><Link to='/' className="nav-link">MyApp</Link></h3>
                <Link to='/login' className="nav-link">Log in</Link>
                <Link to='/signup' className="nav-link">Sign up</Link>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user" component={User} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/hikes" component={HikesContainer} />
            <Route render={() => <h2 class="400-error">404 Error - Page not found</h2>} />
          </Switch>
      </Router>
    </div>
  );
};

export default Navbar;
