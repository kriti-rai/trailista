import axios from 'axios';

const baseUrl = "http://localhost:3001/api";

export function login(user, callback) {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER_INFO" })
    return axios.post(`${baseUrl}/sessions`, user)
      .then(response => {
        localStorage.setItem("logged_in", 'true')
        localStorage.setItem("jwt", response.data.jwt)
        dispatch({
          type: 'AUTHENTICATE_USER',
          payload: response.data
        })
        callback()
      })
      // .catch(error => {
      //   dispatch({ type: 'SHOW_ERROR', message: error.response.data.error})
      // })
  }
}

export function signup(user, callback) {
  // debugger
  return (dispatch) => {
    dispatch({ type: "LOADING_USER_INFO" })
    return axios.post(`${baseUrl}/users`, user)
      .then(response => {
        localStorage.setItem("logged_in", 'true')
        localStorage.setItem("jwt", response.data.jwt)
        dispatch({
          type: 'AUTHENTICATE_USER',
          payload: response.data
        })
        callback()
      })
      // .catch(error => {
      //   dispatch({ type: 'SHOW_ERROR', message: error.response.data.error})
      // })
  }
}

export function logout() {
  if (localStorage['jwt']) {
    localStorage.removeItem('jwt')
    localStorage.removeItem('logged_in')
  }

  return (dispatch) => {
    return axios.post(`${baseUrl}/logout`)
      .then(response => {
        dispatch({
          type: 'LOGOUT',
          payload: ""
        })
      })
    }
}

export function fetchUser(username) {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER_INFO" })
    return axios.get(`${baseUrl}/users/${username}`)
      .then(response => {
        dispatch({
          type: 'SHOW_USER',
          payload: response.data
        })
      })
    }
}
