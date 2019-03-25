import React from 'react';
import HikeCard from './HikeCard';
import { Link } from 'react-router-dom'

function HikesList(props) {
  return (
    <div>
      { props.hikes.map((hike,id) => <Link to={`/hikes/${ id }`}><HikeCard key={ id } hike={ hike }/></Link>) }
    </div>
  )
}

export default HikesList;
