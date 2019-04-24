import React, { Component } from 'react';
import './styles/App.css';
import './styles/hikes.css';
import './styles/user-profile.css';
import './styles/alerts.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './containers/Navbar';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from './helpers/PrivateRoute';
import Register from './containers/UserRegistration/SignUp';
import Login from './containers/UserRegistration/Login';
import About from './components/About';
import User from './components/User';
import Home from './components/Home';
import HikesContainer from './containers/Hikes/HikesContainer';
import HikeContainer from './containers/Hikes/HikeContainer';
import AlertsList from './components/Alerts/AlertsList';
import { fetchHikes } from './actions/hikeActions';
import { connect } from 'react-redux';
import { logout, fetchCurrentUser } from './actions/userActions';
import { addAlertMessage } from './actions/alertsActions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar logged_in={ this.props.logged_in } currentUser={ this.props.currentUser } />
          <AlertsList />
            <Switch>
              <Route exact path="/" render={ routerProps => <Home {...routerProps} fetchCurrentUser= { this.props.fetchCurrentUser } /> } />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Register} />
              <Route path="/hikes/hike_:hikeId" render={ routerProps => <HikeContainer {...routerProps} hikes={ this.props.hikes } addAlertMessage={ this.props.addAlertMessage} currentUser={ this.props.currentUser }/> } />
              <Route path="/hikes" render={ routerProps => <HikesContainer {...routerProps} logged_in= { this.props.logged_in } hikes={ this.props.hikes } /> } />
              <Route path="/logout" render={ props => {
                this.props.logout()
                return <Redirect to = '/' />
              }} />
              <PrivateRoute exact path="/:username" component={User} token={ this.props.token} currentUser={ this.props.currentUser } />
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
      token: state.user.token,
      currentUser: state.user.currentUser,
      logged_in: state.user.logged_in
    }
}

export default connect(mapStateToProps, { fetchHikes, logout, fetchCurrentUser, addAlertMessage })(App);
