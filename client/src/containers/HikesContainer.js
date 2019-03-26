import React from 'react';
import SearchHikes from '.././components/Hikes/SearchHikes';
import HikesList from '.././components/Hikes/HikesList';
import { Route } from 'react-router-dom'
import Hike from '.././components/Hikes/Hike';

const HikesContainer = (props) => {
    return (
      <div className="hikes-container">
        <SearchHikes />
        <HikesList hikes={ props.hikes } />
        <Route path={`${props.match.url}/:hikeId`} render={(routerProps) => <Hike {...routerProps} hikes={ props.hikes } /> }/>
      </div>
    )
};

export default HikesContainer;
