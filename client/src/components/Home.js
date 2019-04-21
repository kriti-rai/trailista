import React, { Component } from 'react';

class Home extends Component {

  componentDidMount() {
    let token = localStorage.getItem('jwt');
    if (!!token) {
       this.props.fetchCurrentUser(token);
     }
  }
  render() {
    return  (
      <>
        <div class='home-container'>
          <div className='welcome-msg'>Welcome to Trailista</div>
          <div className='welcome-sub-msg'>Your trail is waiting. Get on your way.</div>
          <br></br><button className="btn btn-light btn-sm">Explore Trails</button>
        </div>
      </>
    )
  }
};

export default Home;
