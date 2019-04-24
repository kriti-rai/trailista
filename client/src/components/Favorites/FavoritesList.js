import React from 'react';
import Favorite from './Favorite';

function FavoritesList(props) {

  let renderList;

  if (props.favHikes.length > 0) {
    renderList = props.favHikes.map((favHike, i) => <Favorite key={ i } deleteFavorite={ props.deleteFavorite } favHike={ favHike } />)
  } else {
    renderList = <small>Currently, there is no item in here.</small>
  }

  return (
    <div className="favorites-list">
      { renderList }
    </div>
  )
}

export default FavoritesList;
