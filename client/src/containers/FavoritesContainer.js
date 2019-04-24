import React from 'react';
import FavoritesList from '.././components/Favorites/FavoritesList';
import ClearAll from '.././components/Favorites/ClearAll';

const FavoritesContainer = (props) => {
    return (
      <div className="favorites-container">
        <h4>My Favorites &hearts;</h4>
        <ClearAll clearFavorites={ props.clearFavorites } token={ props.token}/>
        <br></br>
        <FavoritesList favHikes = { props.favHikes } deleteFavorite={ props.deleteFavorite } />
      </div>
    )
};

export default FavoritesContainer;
