import React from 'react';
import HikeCard from './HikeCard';
import { NavLink } from 'react-router-dom'

function HikesList({ hikes }) {
  return (
    <div>
      { hikes.map((hike) => <NavLink to={`/hikes/hike_${hike.id }`} key={ hike.id }><HikeCard hike={ hike }/></NavLink>) }
    </div>
  )
}

export default HikesList;
