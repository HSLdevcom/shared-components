'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  display: ', ';\n'], ['\n  color: ', ';\n  display: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Span = _styledComponents2.default.span(_templateObject, function (props) {
  return props.color || props.theme.defaultTextColor || '#000000';
}, function (props) {
  return props.display || 'inline';
});

exports.default = Span;