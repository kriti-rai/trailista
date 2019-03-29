function userReducer(state={logged_in: "false", token: ""}, action) {
  switch (action.type) {
    case 'LOADING_USER_INFO':
      return state;
    case 'AUTHENTICATE_USER':
      if (!action.payload.hasOwnProperty('jwt')) {
        return state;
      } else {
        return {logged_in: "true", token: action.payload.jwt};
      }
    case 'LOGOUT':
      return {logged_in: "false", token: ""};
    default:
      return state;
  }
}

export default userReducer;
