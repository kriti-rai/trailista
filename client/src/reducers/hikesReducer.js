function hikesReducer(state=[], action) {
  switch (action.type) {
    case 'LOADING_HIKES':
      return state;
    case 'FETCH_HIKES':
      return action.hikes.data.trails;
    case 'FETCH_HIKE':
      return action.hike.data.trails[0];
    default:
      return state;
  }
}

export default hikesReducer;
