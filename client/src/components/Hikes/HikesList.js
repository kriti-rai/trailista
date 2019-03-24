import React from 'react';
import HikeCard from './HikeCard';


function HikesList(props) {
  return (
    <ul>
      { props.hikes.map((hike,id) => <HikeCard key={ id } hike={ hike }/>) }
    </ul>
  )
}

export default HikesList;
