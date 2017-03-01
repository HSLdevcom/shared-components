'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n font-size: 15pt;\n letter-spacing: -0.4pt;\n color: #333;\n text-align: center;\n'], ['\n font-size: 15pt;\n letter-spacing: -0.4pt;\n color: #333;\n text-align: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageTitle = _styledComponents2.default.h1(_templateObject);

exports.default = PageTitle;