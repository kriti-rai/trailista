import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

let config = {
  headers: {}
};

export function favorite(token, id) {
  config['headers']['Authorization'] = 'Bearer' + token

  let data = { "hike_id" : id }

  return (dispatch) => {
    return axios.post(`${ API_URL }/add_favorite`, data, config)
      .then(response =>
        dispatch({
          type: 'FAVORITE',
          payload: response.data
      })
    )};
}

export function removeFavorite(token, id) {
  config['headers']['Authorization'] = 'Bearer' + token

  let data = { "hike_id" : id }

  return (dispatch) => {
    return axios.post(`${ API_URL }/delete_favorites`, data, config)
      .then(response =>
        dispatch({
          type: 'REMOVE_FAVORITE',
          payload: response.data
      })
    )};
}
