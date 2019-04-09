import React from 'react';
import SearchHikesContainer from './SearchHikesContainer';
import HikesList from '../.././components/Hikes/HikesList';
import { Route } from 'react-router-dom'
import Hike from '../.././components/Hikes/Hike';
import { connect } from 'react-redux';

const HikesContainer = (props) => {
    return (
      <div className="hikes-container">
        <SearchHikesContainer />
        { (props.hikes.length > 0) ? <HikesList logged_in= { props.logged_in } hikes={ props.hikes } /> : null }
        <Route path={`${props.match.url}/:hikeId`} render={(routerProps) => <Hike {...routerProps} hikes={ props.hikes } /> }/>
      </div>
    )
};

export default connect((state) => ({ hikes: state.hikes })) (HikesContainer);
