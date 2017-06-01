'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuSeparator = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  height: 2px;\n  background: ', ';\n  margin-top: 10px;\n'], ['\n  height: 2px;\n  background: ', ';\n  margin-top: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-bottom: solid 1px ', ';\n  margin: 0.75em 0;\n'], ['\n  border-bottom: solid 1px ', ';\n  margin: 0.75em 0;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Separator = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.background;
});

var MenuSeparator = Separator.extend(_templateObject2, function (props) {
  return props.theme.menuBorder;
});
exports.MenuSeparator = MenuSeparator;
exports.default = Separator;