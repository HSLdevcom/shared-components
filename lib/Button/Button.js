'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  height: 2.5rem;\n  padding: 0px 20px;\n  color: ', ';\n  font-size: ', ';\n  border-radius:30px;\n  border-color: ', ';\n  border-style: normal;\n  min-width: 200px;\n'], ['\n  background-color: ', ';\n  height: 2.5rem;\n  padding: 0px 20px;\n  color: ', ';\n  font-size: ', ';\n  border-radius:30px;\n  border-color: ', ';\n  border-style: normal;\n  min-width: 200px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.primary ? props.theme.primary : props.theme.secondary;
}, function (props) {
  return props.primary ? props.theme.secondary : props.theme.primary;
}, function (props) {
  return props.fontSize ? props.fontSize : '1rem';
}, function (props) {
  return props.theme.primary;
});

exports.default = Button;