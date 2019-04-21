import React, { Component } from 'react';
import SearchHikes from './Hikes/SearchHikes';

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
      <div className="main-container">
        <div className="home-container">
          <div className="container">
            <div className="d-flex justify-content-center h-100">
              <p className="welcome-msg">Welcome to Trailista</p>
            </div>
          </div>
         </div>
        </div>
      </>
    )
  }
};

export default Home;
