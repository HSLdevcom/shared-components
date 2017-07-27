import { OPEN_NOTIFICATION, CLEAN_NOTIFICATIONS } from './types';

export function open(notification) {
  return { type: OPEN_NOTIFICATION, notification };
}

export function clean() {
  return { type: CLEAN_NOTIFICATIONS };
}
