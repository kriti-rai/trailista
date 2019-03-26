import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchHikes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HIKES' });
    return axios.get(`${API_URL}/hikes`)
      .then(hikes => dispatch({ type: 'FETCH_HIKES', hikes }));
  };
}
