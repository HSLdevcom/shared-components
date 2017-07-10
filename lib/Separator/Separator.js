'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalMenuSeparator = exports.HorizontalSeparator = exports.MenuSeparator = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  height: 1px;\n  background: ', ';\n  margin-top: 10px;\n'], ['\n  height: 1px;\n  background: ', ';\n  margin-top: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: auto;\n  width: 1px;\n  margin: 0;\n'], ['\n  height: auto;\n  width: 1px;\n  margin: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background: ', ';\n  margin: 1rem 0;\n'], ['\n  background: ', ';\n  margin: 1rem 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  background: ', ';\n'], ['\n  background: ', ';\n']);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Separator = _Div2.default.extend(_templateObject, function (props) {
  return props.theme.background;
});

var HorizontalSeparator = Separator.extend(_templateObject2);

var MenuSeparator = Separator.extend(_templateObject3, function (props) {
  return props.theme.menuBorder;
});

var HorizontalMenuSeparator = HorizontalSeparator.extend(_templateObject4, function (props) {
  return props.theme.menuBorder;
});

exports.MenuSeparator = MenuSeparator;
exports.HorizontalSeparator = HorizontalSeparator;
exports.HorizontalMenuSeparator = HorizontalMenuSeparator;
exports.default = Separator;