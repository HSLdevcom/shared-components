import { OPEN_NOTIFICATION, CLEAN_NOTIFICATIONS } from './types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_NOTIFICATION: {
      const newState = { ...state, notification: action.notification };
      return newState;
    }
    case CLEAN_NOTIFICATIONS: {
      return initialState;
    }
    default:
      return state;
  }
}
