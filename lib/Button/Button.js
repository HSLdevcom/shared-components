'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonNoStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  border-radius: 2em;\n  border-color: ', ';\n  border-style: solid;\n  border-width: 1px;\n  background-color: ', ';\n  color: ', ';\n  padding: 0.7em 1.6em;\n  font-size: 1.1em;\n  letter-spacing: -0.4pt;\n  width: 90%;\n  display: block;\n  margin: auto;\n  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;\n  &:hover {\n    cursor: pointer;\n    border-color: ', ';\n    background-color: ', ';\n  }\n'], ['\n  height: auto;\n  border-radius: 2em;\n  border-color: ', ';\n  border-style: solid;\n  border-width: 1px;\n  background-color: ', ';\n  color: ', ';\n  padding: 0.7em 1.6em;\n  font-size: 1.1em;\n  letter-spacing: -0.4pt;\n  width: 90%;\n  display: block;\n  margin: auto;\n  font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;\n  &:hover {\n    cursor: pointer;\n    border-color: ', ';\n    background-color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 0;\n  margin: 0;\n  border: 0;\n  outline: 0;\n  width: auto;\n  height: auto;\n  background: inherit;\n  color: inherit;\n'], ['\n  padding: 0;\n  margin: 0;\n  border: 0;\n  outline: 0;\n  width: auto;\n  height: auto;\n  background: inherit;\n  color: inherit;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.primary ? props.theme.primary : props.theme.secondary;
}, function (props) {
  return props.primary ? props.theme.primary : 'transparent';
}, function (props) {
  return props.primary ? '#fff' : props.theme.secondary;
}, function (props) {
  return props.primary ? props.theme.primaryHover : props.theme.secondaryHover;
}, function (props) {
  return props.primary ? props.theme.primaryHover : props.theme.secondaryHover;
});

exports.default = Button;


var ButtonNoStyle = _styledComponents2.default.button(_templateObject2);

exports.ButtonNoStyle = ButtonNoStyle;