import React from 'react';
import Hike from './Hike';


function HikesList(props) {
  return (
    <ul>
      { props.hikes.map((hike,id) => <Hike key={ id } hike={ hike }/>) }
    </ul>
  )
}

export default HikesList;
