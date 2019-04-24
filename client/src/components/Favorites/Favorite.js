import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Favorite(props) {
  let { id, name } = props.favHike;
  let token = window.localStorage.getItem('jwt');

  const handleClick = (e) => {
    e.preventDefault();
    props.deleteFavorite(token, id);
  }

  return (
    <>
      <span className="favorite-hike"><Link to={`/hikes/hike_${id}`}>{ name } </Link> <button className="del-btn" onClick={ handleClick }><i id="del-btn" className="fas fa-trash"> </i></button></span>
      <br></br>
    </>
  )
}

export default Favorite;
