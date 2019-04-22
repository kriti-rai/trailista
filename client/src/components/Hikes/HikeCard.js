import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favorite } from '../.././actions/hikeUserActions';
import Hike from './Hike';

class HikeCard extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.favorite(window.localStorage.getItem("jwt"), this.props.hike)
  }

  render() {
    const hike = this.props.hike;

    const difficulty = () => {
      let level;
      if (hike.difficulty === "blue") {
        level = "Intermediate";
      } else if (hike.difficulty === "greenBlue") {
        level = "Easy/Intermediate";
      } else if (hike.difficulty === "blueBlack") {
        level = "Intermediate/Hard";
      } else if (hike.difficulty === "black") {
        level = "Hard"
      } else if (hike.difficulty === "green") {
        level = "Easy"
      } else {
        level = "N/A"
      }
      return level;
    }

    const showImage = !!hike.imgMedium ? hike.imgMedium: process.env.PUBLIC_URL + '/images/no_trail_image.jpg';

    return (
      <div className="hike-card">
        { this.props.logged_in === "true" ? <button className="fav-btn" onClick={ this.handleClick } ><i className="fas fa-heart"></i></button> : null }
        <img className="hike-card-image" src= { showImage } />
        <div className="hike-card-info">
          <div className='hike-card-title'>{  hike.name }</div>
          <div className='hike-card-location'>{ hike.location }</div>
          <div className='hike-card-difficulty'>Difficulty: { difficulty() }</div>
          <div className='hike-card-rating'>Rating: { hike.stars }</div>
        </div>
      </div>
    )
  }
}

export default connect(null, { favorite })(HikeCard);
