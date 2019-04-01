function userReducer(state={loading: "false", token: "", info: {}, fav_hikes: []}, action) {
  switch (action.type) {
    case 'LOADING_USER_INFO':
      return {...state, loading: "true"};
    case 'AUTHENTICATE_USER':
      if (!action.payload.hasOwnProperty('jwt')) {
        return state;
      } else {
        return {
          ...state,
          loading: "false",
          token: action.payload.jwt
        };
      }
    case 'FETCH_USER':
    debugger
      var user = {
        username: action.payload.username,
        firstName: action.payload.firstname,
        lastName: action.payload.lastname,
        email: action.payload.email,
        image: action.payload.image
      }
      return { ...state, loading: "false", info: user, fav_hikes: [...state.fav_hikes, action.payload.fav_hikes] }
    case 'LOGOUT':
      return state;
    case 'FAVORITE':
      return  {...state, ...state.user, favHikes: state.favHikes.concat(action.payload)}
    default:
      return state;
  }
}

export default userReducer;
