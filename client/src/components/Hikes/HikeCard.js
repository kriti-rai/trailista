import React, { Component } from 'react';
import Hike from './Hike';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const HikeCard = ({ hike }) => {
  return (
    <div className="hike-card">
      <img className="hike-card-image" src= { hike.image} />
      <div className="hike-info">
        <h5>{  hike.title }</h5>
        <small>Difficult: {  hike.difficulty }</small>
        <p><small>Rating: {  hike.ratings}</small></p>
      </div>
    </div>
  )
}

export default HikeCard;
