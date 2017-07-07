'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: "Gotham Rounded SSm A", "Gotham Rounded SSm B";\n  color: #333333;\n'], ['\n  font-family: "Gotham Rounded SSm A", "Gotham Rounded SSm B";\n  color: #333333;\n']);

var _Span = require('../Span');

var _Span2 = _interopRequireDefault(_Span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = _Span2.default.extend(_templateObject);

exports.default = Text;