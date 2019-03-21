import React, {Component} from 'react';
import SearchHikes from '.././components/Hikes/SearchHikes';
import HikesList from '.././components/Hikes/HikesList';

class HikesContainer extends Component {
  render() {
    return (
      <div>
        <SearchHikes />
        <HikesList />
      </div>
    )
  }
};

export default HikesContainer;
