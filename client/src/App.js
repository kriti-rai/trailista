import React, { Component } from 'react';
import './styles/App.css';
import './styles/HikeCard.css';
import './styles/NavBar.css';

import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './containers/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/UserRegistration/SignUp';
import Login from './components/UserRegistration/Login';
import About from './components/About';
import User from './components/User';
import Home from './components/Home';
import HikesContainer from './containers/HikesContainer';
import Hike from './components/Hikes/Hike';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" exact component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user" component={User} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Register} />
              <Route path="/hikes" component={HikesContainer} />
              <Route render={() => <h2 class="400-error">404 Error - Page not found</h2>} />
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
