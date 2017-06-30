'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.OPEN_NOTIFICATION:
      {
        return action.notification;
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