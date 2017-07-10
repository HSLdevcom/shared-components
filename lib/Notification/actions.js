'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = open;
exports.clean = clean;

var _types = require('./types');

function open(notification) {
  return { type: _types.OPEN_NOTIFICATION, notification: notification };
}

function clean() {
  return { type: _types.CLEAN_NOTIFICATIONS };
}