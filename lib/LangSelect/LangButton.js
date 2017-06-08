'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 3px;\n  border: 0;\n  outline: 0;\n  background: 0;\n  width: 2rem;\n  height: 1.5rem;\n  padding: 0;\n  color: inherit;\n  font: inherit;\n  &:hover {\n    cursor: pointer;\n  }\n  ', '\n'], ['\n  border-radius: 3px;\n  border: 0;\n  outline: 0;\n  background: 0;\n  width: 2rem;\n  height: 1.5rem;\n  padding: 0;\n  color: inherit;\n  font: inherit;\n  &:hover {\n    cursor: pointer;\n  }\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LangButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.active && props.theme.radioBtnActive && 'background-color: ' + props.theme.radioBtnActive + ';';
});
exports.default = LangButton;