import axios from 'axios';

const baseUrl = "http://localhost:3001/api";

export function loginUser(user) {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER_INFO" })
    return axios.post(`${baseUrl}/sessions`, user)
      .then(response => {
        console.log(response)
        localStorage .setItem("logged_in", 'true')
        localStorage .setItem("jwt", response.data.jwt)
        dispatch({
          type: 'AUTHENTICATE_USER',
          payload: response.data
        })
      })
      // .catch(error => {
      //   dispatch({ type: 'SHOW_ERROR', message: error.response.data.error})
      // })
  }
}
