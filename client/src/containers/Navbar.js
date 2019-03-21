import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from '.././components/UserRegistration/SignUp';
import Login from '.././components/UserRegistration/Login';
import About from '.././components/About';
import User from '.././components/User';
import SearchHikes from '.././components/Hikes/SearchHikes';
import HikesContainer from './HikesContainer';


function NoMatch() {
  return <h2>404 Error - Page not found</h2>;
}

function Navbar() {
  return (
    <div>
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/explore' className="nav-link">Explore</Link>
                <Link to='/about' className="nav-link">About</Link>
                <h3><Link to='/' className="nav-link">MyApp</Link></h3>
                <Link to='/login' className="nav-link">Log in</Link>
                <Link to='/signup' className="nav-link">Sign up</Link>
            </div>
          </nav>
          <Switch>
            <Route path="/" exact component={SearchHikes} />
            <Route path="/about/" component={About} />
            <Route path="/user/" component={User} />
            <Route path="/login/" component={Login} />
            <Route path="/signup/" component={Register} />
            <Route path="/explore/" component={HikesContainer} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    </div>
  );
};

export default Navbar;
