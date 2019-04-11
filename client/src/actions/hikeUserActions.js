import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

let config = {
  headers: {}
};

export function favorite(token, hikeData) {
  config['headers']['Authorization'] = 'Bearer' + token
  let data = { "hike" : hikeData };
  return (dispatch) => {
    return axios.post(`${ API_URL }/add_favorite`, data, config)
      .then(response =>
        dispatch({
          type: 'FAVORITE',
          payload: response.data
      })
    )
    .catch(error => {
          dispatch({ type: 'ADD_ALERT_MESSAGE', message: error.response.data})
      })
  };
}

export function deleteFavorite(token, id) {
  config['headers']['Authorization'] = 'Bearer' + token
  let data = { "hike_id" : id };
  return (dispatch) => {
    return axios.post(`${ API_URL }/delete_favorite`, data, config)
      .then(response =>
        dispatch({
          type: 'DELETE_FAVORITE',
          payload: response.data
      })
    )};
}

export function clearFavorites(token) {
  config['headers']['Authorization'] = 'Bearer' + token
  let data = {}
  return (dispatch) => {
    return axios.post(`${ API_URL }/clear_favorites`, data, config)
      .then(response =>
        dispatch({
          type: 'CLEAR_FAVORITES',
          payload: response.data
      })
    )};
}
