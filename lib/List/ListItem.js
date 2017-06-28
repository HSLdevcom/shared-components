'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-indent: -1.35em;\n  padding: 0.75rem 0 0 1rem;\n  margin: 0;\n  font-size: 90%;\n'], ['\n  text-indent: -1.35em;\n  padding: 0.75rem 0 0 1rem;\n  margin: 0;\n  font-size: 90%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListItem = _styledComponents2.default.li(_templateObject);

exports.default = ListItem;