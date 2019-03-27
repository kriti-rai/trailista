function userReducer(state=[{logged_in: "false", token: ""}], action) {
  switch (action.type) {
    case 'LOADING_USER_INFO':
      return state;
    case 'AUTHENTICATE_USER':
      return [...state, logged_in: "true", token: action.payload.jwt;
    default:
      return state;
  }
}

export default userReducer;
