import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

let config = {
  headers: {}
};

export function favorite(token, id) {
  config['headers']['Authorization'] = 'Bearer' + token
  config['headers']['hike_id'] = id

  return (dispatch) => {
    return axios.post(`${ API_URL }/favorites`, config)
      .then(response =>
        dispatch({
          type: 'FAVORITE',
          payload: response.data
      })
    )};
}
