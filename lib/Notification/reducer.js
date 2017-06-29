'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.OPEN_NOTIFICATION:
      {
        var newState = _extends({}, state, { notification: action.notification });
        return newState;
      }
    case _types.CLEAN_NOTIFICATIONS:
      {
        return initialState;
      }
    default:
      return state;
  }
};

var _types = require('./types');

var initialState = {};