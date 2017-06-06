'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 5px;\n  border: 1px solid #dddddd;\n  background-color: #fff;\n  width: 100%;\n  padding: 20px;\n  h1 {\n    font-size: 22px;\n    letter-spacing: -0.8px;\n    color: #333;\n    text-align: center;\n    margin: 0 auto 20px auto;\n    font-weight: 500;\n  }\n'], ['\n  border-radius: 5px;\n  border: 1px solid #dddddd;\n  background-color: #fff;\n  width: 100%;\n  padding: 20px;\n  h1 {\n    font-size: 22px;\n    letter-spacing: -0.8px;\n    color: #333;\n    text-align: center;\n    margin: 0 auto 20px auto;\n    font-weight: 500;\n  }\n']);

var _Div = require('../Div/Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _Div2.default.extend(_templateObject);

exports.default = Container;