'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 1.25;\n  ', '\n'], ['\n  text-align: left;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 1.25;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      font-size: 14px;\n      line-height: 1.29;\n    '], ['\n      font-size: 14px;\n      line-height: 1.29;\n    ']);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var P = _Text2.default.extend(_templateObject, function (props) {
  return props.theme.Media && props.theme.Media.small(_templateObject2);
});

exports.default = P;