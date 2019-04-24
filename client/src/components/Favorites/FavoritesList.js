import React, { Fragment } from 'react';
import Favorite from './Favorite';

function FavoritesList(props) {

  let renderList;

  if (props.favHikes.length > 0) {
    renderList = <div className="favorites-list">{ props.favHikes.map((favHike, i) => <Favorite key={ i } deleteFavorite={ props.deleteFavorite } favHike={ favHike } />) }</div>
  } else {
    renderList = <small>Currently, there is no item in here.</small>
  }

  return (
    <>
      { renderList }
    </>
  )
}

export default FavoritesList;
