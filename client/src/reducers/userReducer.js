function userReducer(state={logged_in: "false", token: "", user: {}}, action) {
  switch (action.type) {
    case 'LOADING_USER_INFO':
      return state;
    case 'AUTHENTICATE_USER':
      if (!action.payload.hasOwnProperty('jwt')) {
        return state;
      } else {
        return {...state, logged_in: "true", token: action.payload.jwt};
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
      return { ...state, user: user };
    case 'LOGOUT':
      return {...state, logged_in: "false", token: ""};
    case 'FAVORITE':
      return  {...state, user: {...state.user, hikes: action.payload} }
    default:
      return state;
  }
}

export default userReducer;
