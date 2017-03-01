'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 40pt;\n  border-radius: 20pt;\n  border-color: ', ';\n  border-style: solid;\n  background-color: ', ';\n  color: ', ';\n  font-size: 15pt;\n  letter-spacing: -0.4pt;\n  width: 90%;\n  display: block;\n  margin: auto;\n  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;\n'], ['\n  height: 40pt;\n  border-radius: 20pt;\n  border-color: ', ';\n  border-style: solid;\n  background-color: ', ';\n  color: ', ';\n  font-size: 15pt;\n  letter-spacing: -0.4pt;\n  width: 90%;\n  display: block;\n  margin: auto;\n  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.primary ? props.theme.primary : props.theme.secondary;
}, function (props) {
  return props.primary ? props.theme.secondary : props.theme.primary;
});

exports.default = Button;