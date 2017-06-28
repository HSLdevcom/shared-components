import { OPEN_NOTIFICATION, CLEAN_NOTIFICATIONS } from './types';

const initialState = {
  notification: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_NOTIFICATION: {
      return { notification: action.notification };
    }
    case CLEAN_NOTIFICATIONS: {
      return initialState;
    }
    default:
      return state;
  }
}
