'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClassElement(element, newClass) {
  return _react2.default.cloneElement(element, { className: (0, _classnames2.default)(element.props.className, newClass) });
}

function addClassChildren(elements, newClass) {
  return _react2.default.Children.map(elements, function (element) {
    return addClassElement(element, newClass);
  });
}

var addClass = function addClass(element, newClass) {
  if (_react2.default.isValidElement(element)) {
    return addClassElement(element, newClass);
  }
  return addClassChildren(element, newClass);
};

// eslint-disable-next-line import/prefer-default-export
exports.addClass = addClass;