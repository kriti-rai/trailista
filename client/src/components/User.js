import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteFavorite } from '.././actions/hikeUserActions';
import FavoritesContainer from '.././containers/FavoritesContainer';

class User extends Component {

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.token)
  }

  createdAt = (date) => {
    let d = new Date(date)
    let monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    let day = d.getDate();
    let monthIndex = d.getMonth();
    let year = d.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  render() {

    return (
      <>
      <div className='profile-container'>
        <img className="profile-pic" src='https://static1.squarespace.com/static/51c45c5ae4b05645eb831a3e/t/57e98e9ce58c621cdb06c5e2/1550728951497/' alt="profile-pic" />
        <div className='user-data'>
          <h3><em>{this.props.currentUser.username}</em></h3>
          <h3>{ this.props.currentUser.firstName } { this.props.currentUser.lastName }</h3>
          <p><i className="fas fa-map-marker-alt"></i> <small>{ this.props.currentUser.location }</small></p>
          <p><small>Member since: { this.createdAt(this.props.currentUser.created_at) }</small></p>
          <hr></hr>
          <FavoritesContainer favHikes={ this.props.favHikes } deleteFavorite={ this.props.deleteFavorite } />
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.user.info,
    favHikes: state.user.favHikes
  })
}

export default connect(mapStateToProps, { deleteFavorite })(User);
