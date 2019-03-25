import React from 'react';
import SearchHikes from '.././components/Hikes/SearchHikes';
import HikesList from '.././components/Hikes/HikesList';
import { connect } from 'react-redux';

const HikesContainer = (props) => {
    return (
      <div>
        <SearchHikes />
        <HikesList hikes={ props.hikes } url={ props.match.url}/>
      </div>
    )
};

export default HikesContainer;
