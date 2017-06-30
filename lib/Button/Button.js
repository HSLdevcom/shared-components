'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonNoStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  border-radius: ', ';\n  border-style: solid;\n  border-width: 1px;\n  padding: 0.7em 1.6em;\n  font-size: 1.1em;\n  letter-spacing: -0.4pt;\n  width: 90%;\n  display: block;\n  margin: auto;\n  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;\n\n  border-color: ', ';\n  background-color: #fff;\n  color: ', ';\n  &:hover {\n    cursor: pointer;\n    border-color: ', ';\n  }\n  ', '\n  ', '\n  ', '\n\n  ', '\n'], ['\n  height: auto;\n  border-radius: ', ';\n  border-style: solid;\n  border-width: 1px;\n  padding: 0.7em 1.6em;\n  font-size: 1.1em;\n  letter-spacing: -0.4pt;\n  width: 90%;\n  display: block;\n  margin: auto;\n  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;\n\n  border-color: ', ';\n  background-color: #fff;\n  color: ', ';\n  &:hover {\n    cursor: pointer;\n    border-color: ', ';\n  }\n  ', '\n  ', '\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 0;\n  margin: 0;\n  border: 0;\n  outline: 0;\n  line-height: 0;\n  width: auto;\n  height: auto;\n  background: inherit;\n  color: inherit;\n  font: inherit;\n'], ['\n  padding: 0;\n  margin: 0;\n  border: 0;\n  outline: 0;\n  line-height: 0;\n  width: auto;\n  height: auto;\n  background: inherit;\n  color: inherit;\n  font: inherit;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.rounded ? '2em' : '4px';
}, function (props) {
  return props.theme.default;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.primary && '\n    border-color: ' + props.theme.primary + ';\n    background-color: ' + props.theme.primary + ';\n    color: ' + props.theme.primaryText + ';\n    &:hover {\n      border-color: ' + (0, _polished.darken)(0.1, props.theme.primary || '#007ac9') + ';\n      background-color: ' + (0, _polished.darken)(0.1, props.theme.primary || '#007ac9') + ';\n    }\n  ';
}, function (props) {
  return props.secondary && '\n    border-color: ' + (0, _polished.darken)(0.2, props.theme.default || '#b7b7b7') + ';\n    color: ' + (0, _polished.darken)(0.2, props.theme.default || '#b7b7b7') + ';\n    &:hover {\n      border-color: ' + props.theme.primary + ';\n    }\n  ';
}, function (props) {
  return props.disabled && '\n    color: ' + props.theme.default + ';\n    border-color: ' + props.theme.default + ';\n    &:hover {\n      border-color: ' + props.theme.default + ';\n    }\n  ';
}, function (props) {
  return props.disabled && props.primary && '\n    background-color: ' + (0, _polished.lighten)(0.175, props.theme.default || '#b7b7b7') + ';\n    border-color: ' + (0, _polished.lighten)(0.175, props.theme.default || '#b7b7b7') + ';;\n    &:hover {\n      background-color: ' + (0, _polished.lighten)(0.175, props.theme.default || '#b7b7b7') + ';;\n      border-color: ' + (0, _polished.lighten)(0.175, props.theme.default || '#b7b7b7') + ';;\n    }\n  ';
});

Button.propTypes = {
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = Button;


var ButtonNoStyle = _styledComponents2.default.button(_templateObject2);

exports.ButtonNoStyle = ButtonNoStyle;