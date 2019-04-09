import React from 'react';
import Hike from '../.././components/Hikes/Hike';

function HikeContainer({ match, hikes, currentUser, addAlertMessage }) {
  let id = +match.params.hikeId.replace((/hike_/), "")
  let hike;

  if (hikes.length > 0 && hikes.find(hike => hike.id === id)) {
    hike = hikes.find(hike => hike.id === id)
  } else if ( currentUser.favHikes.length > 0 ){
    hike = currentUser.favHikes.find(favHike => favHike.id === id)
  } else (
    addAlertMessage({
      text: "Something went wrong or the requested hike was not found",
      type: "error" })
  )

  return (
    <Hike hike={ hike } />
  )
}

export default HikeContainer;