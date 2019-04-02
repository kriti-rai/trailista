import React from 'react';
import FavoritesList from '.././components/Favorites/FavoritesList';

const FavoritesContainer = (props) => {
    return (
      <div className="favorites-container">
        <h4>My Favorites &hearts;</h4>
        <FavoritesList favHikes = { props.favHikes } deleteFavorite={ props.deleteFavorite } />
      </div>
    )
};

export default FavoritesContainer;
