import React from 'react';

function Hike({ match, hikes }) {
  return (
    <div className="hikes-container">
      <h3>{ hikes[match.params.hikeId].title }</h3>
      <p>Difficulty: { hikes[match.params.hikeId].difficulty }</p>
      <p>Rating: { hikes[match.params.hikeId].ratings }</p>
      <p>Length:{ hikes[match.params.hikeId].length }</p>
      <p>Ascent:{ hikes[match.params.hikeId].ascent }</p>
      <p>Descent:{ hikes[match.params.hikeId].descent }</p>
      <p><img src={ hikes[match.params.hikeId].image} /></p>
      <small className="hike-overview">{ hikes[match.params.hikeId].overview }</small>
    </div>
  )
}

export default Hike;
