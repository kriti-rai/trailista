import React from 'react';
import FavoritesList from '.././components/Favorites/FavoritesList';

const FavoritesContainer = (props) => {
    return (
      <div className="favorites-container">
        <h4>My Favorites &hearts;</h4>
        <p className="btn btn-light btn-sm" onClick={() => { props.clearFavorites(props.token) } }><small>Clear All</small></p>
        <br></br>
        <FavoritesList favHikes = { props.favHikes } deleteFavorite={ props.deleteFavorite } />
      </div>
    )
};

export default FavoritesContainer;
