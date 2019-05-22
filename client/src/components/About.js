import React from 'react';

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className='about-card'>
            <h3 className="card-header">About</h3>
            <p className="about-msg">
                Trailista makes it easy for you to find trails around you. Just enter the city and country (if outside the U.S.) and
                voila! you get a list of trails, each with all the details you need such as,
                the difficulty level, a brief overview, overall rating and trail conditions. With this info,
                now you can hike with confidence anytime and anywhere. Let this encourage you to be in the nature very so often
                as you need to cleanse your mind and soul and stay fit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
