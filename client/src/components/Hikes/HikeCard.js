import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favorite } from '../.././actions/hikeUserAction';
import Hike from './Hike';



class HikeCard extends Component {



  render() {

    const handleClick = (e) => {
      e.preventDefault();
      this.props.favorite(window.localStorage.getItem('jwt'), this.props.hike.id)
    }

    const hike = this.props.hike
    return (
      <div className="hike-card">
        <button className="fav-btn" onClick={ handleClick } ><i className="fas fa-heart"></i></button>
        <img className="hike-card-image" src= { hike.image} />
        <div className="hike-info">
          <h5>{  hike.title }</h5>
          <small>Difficult: {  hike.difficulty }</small>
          <p><small>Rating: {  hike.ratings}</small></p>
        </div>
      </div>
    )
  }
}

export default connect(null, { favorite })(HikeCard);
