'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-weight: 300;\n  font-size: 13px;\n  line-height: calc(13px * 1.08);\n  text-align: left;\n'], ['\n  font-weight: 300;\n  font-size: 13px;\n  line-height: calc(13px * 1.08);\n  text-align: left;\n']);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Caption = _Text2.default.extend(_templateObject);

exports.default = Caption;