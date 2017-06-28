'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EE = exports.notification = exports.reducer = exports.actions = undefined;

var _NotificationRoot = require('./NotificationRoot');

var _NotificationRoot2 = _interopRequireDefault(_NotificationRoot);

var _actions = require('./actions');

var notificationActions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _notification = require('./notification');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _NotificationRoot2.default;
var actions = exports.actions = notificationActions;
var reducer = exports.reducer = _reducer2.default;
var notification = exports.notification = _notification2.default;
var EE = exports.EE = _notification.emitter;