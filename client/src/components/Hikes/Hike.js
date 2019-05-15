import React from 'react';

const Hike = ({ hike }) => {
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
      <p className="display-5 hike-page-sub-header">{ hike.location }</p>
      <div className="hike-card-container">
        <div className="hike-infocard-container">
          <div className="hike-info-card">
            <div className="hike-info-title"><i id="hike-info-hike-icon" className="fas fa-hiking"></i>&nbsp; Trail</div>
            <div className='hike-info'>Length: <strong>{ hike.length }</strong></div>
            <div className='hike-info'>Difficulty: <strong>{ difficulty() }</strong></div>
            <div className='hike-info'>Rating: <strong>{ hike.stars }</strong></div>
          </div>
          <div className="hike-info-card">
            <div className="hike-info-title"><i id="hike-info-mountain-icon" className="fas fa-mountain"></i>&nbsp; Elevation</div>
            <div className='hike-info'>Ascent: <strong>{ hike.ascent }'</strong></div>
            <div className='hike-info'>Descent: <strong>{ hike.descent }'</strong></div>
            <div className='hike-info'>High: <strong>{ hike.high }'</strong></div>
            <div className='hike-info'>Low: <strong>{ hike.low }'</strong></div>
          </div>
        </div>
        <br></br>
        <p><img className="hike-image" src={ hike.imgMedium} /></p>
        <p className='summary'>Overview: { hike.summary }</p>
      </div>
    </div>
  )
}

export default Hike;
