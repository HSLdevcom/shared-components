'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 2px;\n  background: ', ';\n  margin-top: 10px;\n'], ['\n  height: 2px;\n  background: ', ';\n  margin-top: 10px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Separator = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.background;
});

exports.default = Separator;