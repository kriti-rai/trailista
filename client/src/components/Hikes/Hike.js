import React from 'react';

function Hike(props) {
  const hike = props.hike
  return (
    <div>
      <h3>{ hike.title }</h3>
      <p>{ hike.difficulty }</p>
      <p>{ hike.ratings }</p>
      <p><img src={ hike.image} /></p>
      Length:{ hike.length }
      Ascent:{ hike.ascent }
      Descent:{ hike.descent }
    </div>
  )
}

export default Hike;
