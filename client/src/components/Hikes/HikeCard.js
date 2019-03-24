import React from 'react';

function HikeCard(props) {
  const hike = props.hike
  return (
    <li>
      <h5>{ hike.title }</h5>
      <p>{ hike.difficulty }</p>
      <p>{ hike.ratings }</p>
    </li>
  )
}

export default HikeCard;
