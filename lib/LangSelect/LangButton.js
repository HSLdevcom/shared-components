'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 3px;\n  width: 2rem;\n  height: 1.5rem;\n  &:hover {\n    cursor: pointer;\n  }\n  ', '\n'], ['\n  border-radius: 3px;\n  width: 2rem;\n  height: 1.5rem;\n  &:hover {\n    cursor: pointer;\n  }\n  ', '\n']);

var _Button = require('../Button/Button');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LangButton = _Button.ButtonNoStyle.extend(_templateObject, function (props) {
  return props.active && props.theme.radioBtnActive && 'background-color: ' + props.theme.radioBtnActive + ';';
});
exports.default = LangButton;