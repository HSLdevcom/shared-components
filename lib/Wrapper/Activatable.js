'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  align-items: flex-start;\n  display: flex;\n  align-self: stretch;\n  ', '\n'], ['\n  align-items: flex-start;\n  display: flex;\n  align-self: stretch;\n  ', '\n']);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Activatable = _Div2.default.extend(_templateObject, function (props) {
  return props.active && 'border-bottom: 4px solid ;';
});

exports.default = Activatable;