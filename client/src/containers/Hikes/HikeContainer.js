import React from 'react';
import Hike from '../.././components/Hikes/Hike';
import ErrorPage from '../.././components/ErrorPage';

function HikeContainer({ match, hikes, currentUser, addAlertMessage }) {
  let id = +match.params.hikeId.replace((/hike_/), "")
  let hike;

  if (hikes.length > 0 && hikes.find(hike => hike.id === id)) {
    hike = hikes.find(hike => hike.id === id)
    return <Hike hike={ hike } />
  } else if ( currentUser.hikes.length > 0 && currentUser.hikes.find(favHike => favHike.id === id)){
    hike = currentUser.hikes.find(favHike => favHike.id === id)
    return <Hike hike={ hike } />
  } else {
    return <ErrorPage />
  }
}

export default HikeContainer;
