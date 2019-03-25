import React, { Component } from 'react';
import Hike from './Hike';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const HikeCard = ({ hike }) => {
  return (
    <div className="hike-card">
      <h5>{  hike.title }</h5>
      <p><small>Difficult: {  hike.difficulty }</small></p>
      <p><small>Rating: {  hike.ratings}</small></p>
      <img className="hike-card-image" src= { hike.image} />
    </div>
  )
}

export default HikeCard;
