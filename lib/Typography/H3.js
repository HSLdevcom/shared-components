'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 24px;\n  font-weight: 500;\n  letter-spacing: -0.4px;\n  text-align: left;\n'], ['\n  font-size: 24px;\n  font-weight: 500;\n  letter-spacing: -0.4px;\n  text-align: left;\n']);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H3 = _Text2.default.extend(_templateObject);

exports.default = H3;