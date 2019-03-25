import React from 'react';
import HikeCard from './HikeCard';
import { NavLink } from 'react-router-dom'

function HikesList({ hikes }) {
  return (
    <div>
      { hikes.map((hike, id) => <NavLink to={`/hikes/${ id }`} key={ id }><HikeCard hike={ hike }/></NavLink>) }
    </div>
  )
}

export default HikesList;
