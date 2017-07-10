'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n'], ['\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n']);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppHeader = _Div2.default.extend(_templateObject);

exports.default = AppHeader;