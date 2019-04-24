function userReducer(state={logged_in: "false", loading: "false", currentUser: {}, token: ""}, action) {
  switch (action.type) {
    case 'LOADING_USER_INFO':
      return {...state, loading: "true"};
    case 'AUTHENTICATE_USER':
      if (!action.payload.hasOwnProperty('jwt')) {
        return { ...state, loading: "false" }
      } else {
        return {
          ...state,
          logged_in: window.localStorage.getItem('logged_in'),
          loading: "false",
          token: action.payload.jwt
        };
      }
    case 'FETCH_USER':
      return {
        ...state,
        logged_in: window.localStorage.getItem('logged_in'),
        loading: "false",
        currentUser: action.payload
      }
    case 'LOGOUT':
      return {...state, logged_in: "false", loading: "false", token: "", currentUser: {}};
    case 'FAVORITE':
      return  {...state, favHikes: state.favHikes.concat(action.payload)}
    case 'DELETE_FAVORITE':
      return  {...state, favHikes: action.payload}
    case 'CLEAR_FAVORITES':
      return  {...state, favHikes: action.payload}
    default:
      return state;
  }
}

export default userReducer;
