import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

let config = {
  headers: {}
};

export function login(user, callback) {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER_INFO" })
    return axios.post(`${ API_URL }/sessions`, user)
      .then(response => {
        localStorage.setItem("logged_in", 'true')
        localStorage.setItem("jwt", response.data.jwt)
        dispatch({
          type: 'AUTHENTICATE_USER',
          payload: response.data
        })
        dispatch({ type: 'ADD_ALERT_MESSAGE', message: { text: "Successfully logged in.", type: "success" } })
        callback()
      })
      .catch(error => {
        dispatch({ type: 'ADD_ALERT_MESSAGE', message: error.response.data.error})
      })
  }
}

export function signup(user, callback) {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER_INFO" })
    return axios.post(`${ API_URL }/users`, user)
      .then(response => {
        localStorage.setItem("logged_in", 'true')
        localStorage.setItem("jwt", response.data.jwt)
        dispatch({
          type: 'AUTHENTICATE_USER',
          payload: response.data
        })
        callback()
      })
      .catch(error => {
        error.response.data.forEach((error) => {
            dispatch({ type: 'ADD_ALERT_MESSAGE', message: error})
        })

      })
  }
}

export function logout() {
  if (localStorage['jwt']) {
    localStorage.removeItem('jwt')
    localStorage.removeItem('logged_in')
  }
  return (dispatch) => {
    return axios.post(`${ API_URL }/logout`)
      .then(response => {
        dispatch({
          type: 'LOGOUT',
          payload: ""
        })
      })
    }
}

export function fetchCurrentUser(token) {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER_INFO" })
    if (token) {
      config['headers']['Authorization'] = 'Bearer' + token
    }
    return axios.get(`${ API_URL }/show`, config)
      .then(response => {
        dispatch({
          type: 'FETCH_USER',
          payload: response.data
        })
      })
    }
}
