import React, { Component } from 'react';
import './styles/app.css';
import './styles/hikes.css';
import './styles/user-profile.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './containers/Navbar';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from './containers/UserRegistration/SignUp';
import Login from './containers/UserRegistration/Login';
import About from './components/About';
import User from './components/User';
import Home from './components/Home';
import HikesContainer from './containers/HikesContainer';
import Hike from './components/Hikes/Hike';
import { fetchHikes } from './actions/hikeActions';
import { connect } from 'react-redux';
import { logout } from './actions/userActions';
import { fetchCurrentUser } from './actions/userActions';

class App extends Component {

  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar logged_in={ this.props.logged_in } />
            <Switch>
              <Route exact path="/" exact component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user" render={ routerProps => <User token={ this.props.token} fetchCurrentUser={ this.props.fetchCurrentUser } /> } />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Register} />
              <Route path="/hikes/:hikeId" render={ routerProps => <Hike {...routerProps} hikes={ this.props.hikes }/> } />
              <Route path="/hikes" render={ routerProps => <HikesContainer {...routerProps} hikes={ this.props.hikes } /> } />
              <Route path="/logout" render={ props => {
                this.props.logout()
                return <Redirect to = '/' />
              }} />
              <Route render={() => <h2 class="400-error">404 Error - Page not found</h2>} />
            </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      hikes: state.hikes,
      logged_in: state.user.logged_in,
      token: state.user.token
    }
}

export default connect(mapStateToProps, { fetchHikes, logout, fetchCurrentUser })(App);
