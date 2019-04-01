import React from 'react';

function Favorite(props) {
  return (
    <p>
      { props.favHike.title } <button className="del-btn"><i id="del-btn" class="fas fa-minus-circle"> </i></button>
    </p>
  )
}

export default Favorite;
