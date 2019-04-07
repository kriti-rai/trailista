import React from 'react';
import HikeCard from './HikeCard';
import { NavLink } from 'react-router-dom'

function HikesList({ hikes, logged_in }) {
  return (
    <div>
      { hikes.map((hike) => <NavLink to={`/hikes/hike_${hike.id }`} key={ hike.id }><HikeCard logged_in= { logged_in } hike={ hike }/></NavLink>) }
    </div>
  )
}

export default HikesList;
