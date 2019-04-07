import React from 'react';
import SearchHikes from '.././components/Hikes/SearchHikes';
import HikesList from '.././components/Hikes/HikesList';
import { Route } from 'react-router-dom'
import Hike from '.././components/Hikes/Hike';
import { connect } from 'react-redux';

const HikesContainer = (props) => {
    return (
      <div className="hikes-container">
        <SearchHikes />
        { (props.hikes.length > 0) ? <HikesList hikes={ props.hikes } /> : null }
        <Route path={`${props.match.url}/:hikeId`} render={(routerProps) => <Hike {...routerProps} hikes={ props.hikes } /> }/>
      </div>
    )
};

export default connect((state) => ({ hikes: state.hikes })) (HikesContainer);
