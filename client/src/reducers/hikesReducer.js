function hikesReducer(state=[], action) {
  switch (action.type) {
    case 'LOADING_HIKES':
      return state;
    case 'FETCH_HIKES':
      return action.hikes.data.trails;
    default:
      return state;
  }
}

export default hikesReducer;
