import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '.././actions/userActions';

class User extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    // debugger
    return (
      <>
      <h2>User Profile</h2>
      </>
  )}
};

export default connect(null, { fetchCurrentUser })(User);
