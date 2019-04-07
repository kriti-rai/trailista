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
      <h3 className="display-4 hike-page-header">{ hike.name }</h3>
      <div className="lead">
        <strong>Difficulty:</strong> { difficulty() } |
        <strong>Rating:</strong> { hike.stars } |
        <strong>Length:</strong> { hike.length } |
        <strong>Ascent:</strong> { hike.ascent } |
        <strong>Descent:</strong> { hike.descent }
      </div>
      <br></br>
      <img src={ hike.imgMedium} />
      <br></br>
      <p><small>{ hike.summary }</small></p>

    </div>
  )
}

export default Hike;
