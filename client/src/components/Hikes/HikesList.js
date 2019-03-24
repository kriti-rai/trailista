import React from 'react';
import HikeCard from './HikeCard';


function HikesList(props) {
  return (
    <div>
      { props.hikes.map((hike,id) => <HikeCard key={ id } hike={ hike }/>) }
    </div>
  )
}

export default HikesList;
