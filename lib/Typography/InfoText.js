'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  text-align: left;\n  color: ', ';\n  ', '\n'], ['\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  text-align: left;\n  color: ', ';\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      font-size: font-size: ', ';;\n      line-height: ', ';\n    '], ['\n      font-size: font-size: ', ';;\n      line-height: ', ';\n    ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InfoText = _Text2.default.extend(_templateObject, function (props) {
  return props.large ? '500' : '300';
}, function (props) {
  return props.large ? '18px' : '16px';
}, function (props) {
  return props.large ? '0.89' : '1';
}, function (props) {
  return props.large ? '#ff5200' : '#8c4799';
}, function (props) {
  return props.theme.Media && props.theme.Media.small(_templateObject2, props.large ? '16px' : '14px', props.large ? '1' : '1.14');
});

InfoText.propTypes = {
  className: _propTypes2.default.string,
  large: _propTypes2.default.bool
};

exports.default = InfoText;