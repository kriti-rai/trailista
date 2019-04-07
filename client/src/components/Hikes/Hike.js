import React from 'react';

function Hike({ match, hikes }) {

  let id = +match.params.hikeId.replace((/hike_/), "")
  let hike = hikes.find(hike => hike.id === id)

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
    <div className="hikes-container">
      <h3>{ hike.name }</h3>
      <p>Difficulty: { difficulty() }</p>
      <p>Rating: { hike.stars }</p>
      <p>Length:{ hike.length }</p>
      <p>Ascent:{ hike.ascent }</p>
      <p>Descent:{ hike.descent }</p>
      <p><img src={ hike.imgMedium} /></p>
      <small className="hike-overview">{ hike.summary }</small>

    </div>
  )
}

export default Hike;
