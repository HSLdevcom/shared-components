'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 5pt;\n  border: 1pt solid #dddddd;\n  background-color: #fff;\n  width: 100%;\n  padding: 16pt;\n  h1 {\n    font-size: 18pt;\n    letter-spacing: -0.4pt;\n    color: #333;\n    text-align: center;\n    margin: 0 auto 16pt auto;\n  }\n'], ['\n  border-radius: 5pt;\n  border: 1pt solid #dddddd;\n  background-color: #fff;\n  width: 100%;\n  padding: 16pt;\n  h1 {\n    font-size: 18pt;\n    letter-spacing: -0.4pt;\n    color: #333;\n    text-align: center;\n    margin: 0 auto 16pt auto;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

exports.default = Container;