import React, { Fragment } from 'react';
import FavoritesList from '.././components/Favorites/FavoritesList';
import ClearAll from '.././components/Favorites/ClearAll';

const FavoritesContainer = (props) => {
    return (
      <>
        <h4>My Favorites &hearts;</h4>
        <ClearAll clearFavorites={ props.clearFavorites } token={ props.token}/>
        <br></br>
        <FavoritesList favHikes = { props.favHikes } deleteFavorite={ props.deleteFavorite } />
      </>
    )
};

export default FavoritesContainer;
