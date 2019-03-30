import React, { Fragment } from 'react';
import SearchHikes from './Hikes/SearchHikes';

function Home() {
  return  (
    <>
      <div className="home-container">
        <p className="welcome-msg">Welcome to Trailista</p>
        <div className='search-form'> <SearchHikes /></div>
      </div>
    </>
  )
};

export default Home;
