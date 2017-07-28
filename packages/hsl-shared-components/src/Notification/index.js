import NotificationRootContainer from './NotificationRootContainer';
import * as notificationActions from './actions';
import notificationReducer from './reducer';
import notificationService from './notification';

export default {
  Notification: NotificationRootContainer,
  actions: notificationActions,
  reducer: notificationReducer,
  service: notificationService
};
