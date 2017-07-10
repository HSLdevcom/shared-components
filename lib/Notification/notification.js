'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emitter = undefined;

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _eventemitter2.default();

var notificationService = {};
['open', 'clean', 'cleanNow'].forEach(function (item) {
  notificationService[item] = function (options) {
    instance.emit(item, options);
  };
});

exports.default = notificationService;
var emitter = exports.emitter = instance;