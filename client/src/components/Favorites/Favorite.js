import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Favorite(props) {
  let id = props.favHike.id - 1;
  let token = window.localStorage.getItem('jwt');

  const handleClick = (e) => {
    e.preventDefault();
    props.deleteFavorite(token, props.favHike.id);
  }

  return (
    <>
      <small><Link to={`/hikes/${id}`}>{ props.favHike.name } </Link> <button className="del-btn" onClick={ handleClick }><i id="del-btn" className="fas fa-minus-circle"> </i></button></small>
      <br></br>
    </>
  )
}

export default Favorite;
