import React from 'react';

function HikeCard(props) {
  const hike = props.hike
  return (
    <div className="hike-card">
      <h5>{ hike.title }</h5>
      <p>{ hike.difficulty }</p>
      <p>{ hike.ratings }</p>
    </div>
  )
}

export default HikeCard;
