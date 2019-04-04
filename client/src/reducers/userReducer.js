function userReducer(state={logged_in: "false", loading: "false", token: "", info: {}, favHikes: []}, action) {
  switch (action.type) {
    case 'LOADING_USER_INFO':
      return {...state, loading: "true"};
    case 'AUTHENTICATE_USER':
      if (!action.payload.hasOwnProperty('jwt')) {
        return state;
      } else {
        return {
          ...state,
          logged_in: window.localStorage.getItem('logged_in'),
          loading: "false",
          token: action.payload.jwt
        };
      }
    case 'FETCH_USER':
      var user = {
        username: action.payload.username,
        firstName: action.payload.firstname,
        lastName: action.payload.lastname,
        email: action.payload.email,
        image: action.payload.image,
        location: action.payload.location,
        created_at: action.payload.created_at
      }
      return {
        ...state,
        logged_in: window.localStorage.getItem('logged_in'),
        loading: "false",
        info: user,
        favHikes: action.payload.fav_hikes
      }
    case 'LOGOUT':
      return {...state, logged_in: "false", loading: "false", token: "", info: {}, favHikes: []};
    case 'FAVORITE':
      return  {...state, ...state.user, favHikes: state.favHikes.concat(action.payload)}
    case 'DELETE_FAVORITE':
      return  {...state, ...state.user, favHikes: action.payload}
    default:
      return state;
  }
}

export default userReducer;
