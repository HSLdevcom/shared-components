import NotificationRootContainer from './NotificationRootContainer';
import * as notificationActions from './actions';
import notificationReducer from './reducer';
import notificationService from './notification';

export default NotificationRootContainer;
export const actions = notificationActions;
export const reducer = notificationReducer;
export const notification = notificationService;
