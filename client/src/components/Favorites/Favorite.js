import React from 'react';
import { Link } from 'react-router-dom';

function Favorite(props) {
  let id = props.favHike.id - 1;

  return (
    <p>
      <Link to={`/hikes/${id}`}>{ props.favHike.title } </Link> <button className="del-btn"><i id="del-btn" className="fas fa-minus-circle"> </i></button>
    </p>
  )
}

export default Favorite;
