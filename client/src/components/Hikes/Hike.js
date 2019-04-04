import React from 'react';

function Hike({ match, hikes }) {
  let id;
  let hike;
  id = +match.params.hikeId.replace((/hike_/), "")
  hike = hikes.find(hike => hike.id === id)

  return (
    <div className="hikes-container">
      <h3>{ hike.name }</h3>
      <p>Difficulty: { hike.difficulty }</p>
      <p>Rating: { hike.ratings }</p>
      <p>Length:{ hike.length }</p>
      <p>Ascent:{ hike.ascent }</p>
      <p>Descent:{ hike.descent }</p>
      <p><img src={ hike.imgMedium} /></p>
      <small className="hike-overview">{ hike.summary }</small>

    </div>
  )
}

export default Hike;
