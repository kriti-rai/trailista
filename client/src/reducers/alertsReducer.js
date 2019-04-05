import cuid from 'cuid';
import findIndex from 'lodash/findIndex';

function alertsReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_ALERT_MESSAGE':
      return [...state,
        {id: cuid(),
        text: action.message}
      ];
    case 'DELETE_ALERT_MESSAGE':
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
      return state;
    default:
      return state;
  }
}

export default alertsReducer;
