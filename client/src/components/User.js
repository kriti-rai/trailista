import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { clearFavorites, deleteFavorite } from '.././actions/hikeUserActions';
import FavoritesContainer from '.././containers/FavoritesContainer';

class User extends Component {

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
    const currentUser = this.props.currentUser;

    let userImage;
    if (!!currentUser.image) {
      userImage = currentUser.image;
    } else {
      userImage = process.env.PUBLIC_URL + '/images/no_image.png';
    }
    return (
      <>
      <div className='profile-container'>
        <img className="profile-pic" src={ userImage } alt="profile-pic" />
        <div className='user-data'>
          <h3><em>{currentUser.username}</em></h3>
          <h3>{ currentUser.firstName } { currentUser.lastName }</h3>
          <p><i className="fas fa-map-marker-alt"></i> <small>{ currentUser.location }</small></p>
          <p><small>Member since: { this.createdAt(currentUser.created_at) }</small></p>
          <hr></hr>
          <FavoritesContainer favHikes={ currentUser.hikes } token={ this.props.token } clearFavorites={ this.props.clearFavorites } deleteFavorite={ this.props.deleteFavorite } />
        </div>
      </div>
      </>
    )
  }
}


export default connect(null, {clearFavorites, deleteFavorite })(User);
