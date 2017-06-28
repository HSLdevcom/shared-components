import NotificationRoot from './NotificationRoot';
import * as notificationActions from './actions';
import notificationReducer from './reducer';
import notificationService, { emitter } from './notification';

export default NotificationRoot;
export const actions = notificationActions;
export const reducer = notificationReducer;
export const notification = notificationService;
export const EE = emitter;
