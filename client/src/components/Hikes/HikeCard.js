import React from 'react';

function HikeCard(props) {
  const hike = props.hike
  return (
    <div className="hike-card">
      <h5>{ hike.title }</h5>
      <p>Difficult: { hike.difficulty }</p>
      <p>Rating: { hike.ratings}</p>
      <img className="hike-card-image" src= {hike.image} />
    </div>
  )
}

export default HikeCard;
