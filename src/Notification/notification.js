import EventEmitter from 'eventemitter3';

const instance = new EventEmitter();

const notificationService = {};
['open', 'clean', 'cleanNow'].forEach((item) => {
  notificationService[item] = (options) => {
    instance.emit(item, options);
  };
});

export default notificationService;
export const emitter = instance;
