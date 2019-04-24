import React from 'react';

function ClearAll(props){
  let handleClick = (e) => {
    e.preventDefault();
    props.clearFavorites(props.token);
  }

  return <p className="btn btn-light btn-sm" onClick={ handleClick }><small>Clear All</small></p>
};

export default ClearAll;
