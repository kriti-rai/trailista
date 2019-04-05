import cuid from 'cuid';
import findIndex from 'lodash/findIndex';

function alertsReducer(state=[], action) {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {...state, message: action.message};
    case 'ADD_ALERT_MESSAGE':
      return [...state,
        {id: cuid(),
        type: action.message.type,
        text: action.message.text}
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
