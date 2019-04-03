import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favorite } from '../.././actions/hikeUserActions';
import Hike from './Hike';

class HikeCard extends Component {

  render() {

    const handleClick = (e) => {
      e.preventDefault();
      this.props.favorite(window.localStorage.getItem("jwt"), this.props.hike.id)
    }

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

    return (
      <div className="hike-card">
        <button className="fav-btn" onClick={ handleClick } ><i className="fas fa-heart"></i></button>
        <img className="hike-card-image" src= { hike.imgMedium} />
        <div className="hike-info">
          <h5>{  hike.name }</h5>
          <small>Difficulty: { difficulty() }</small>
          <p><small>Rating: { hike.stars }</small></p>
        </div>
      </div>
    )
  }
}

export default connect(null, { favorite })(HikeCard);
