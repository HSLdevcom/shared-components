'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  color: ', ';\n  display: inline-block;\n  text-align: center;\n'], ['\n  background: ', ';\n  color: ', ';\n  display: inline-block;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  vertical-align: middle;\n  display: inline-block;\n  margin: ', ';\n'], ['\n  vertical-align: middle;\n  display: inline-block;\n  margin: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Span = require('../Span/Span');

var _Span2 = _interopRequireDefault(_Span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var displayMap = {
  Right: 'inline',
  Bottom: 'block'
};

var StyledSpan = _styledComponents2.default.span(_templateObject, function (props) {
  return props.background;
}, function (props) {
  return props.color;
});

var IconWrapper = _styledComponents2.default.span(_templateObject2, function (props) {
  return props.textPosition === 'Right' ? '0 1rem 0 0' : '0 0 0.75rem 0';
});

var IconWithText = function IconWithText(_ref) {
  var icon = _ref.icon,
      height = _ref.height,
      text = _ref.text,
      color = _ref.color,
      fill = _ref.fill,
      background = _ref.background,
      textPosition = _ref.textPosition;
  return _react2.default.createElement(
    StyledSpan,
    { color: color, background: background },
    _react2.default.createElement(
      IconWrapper,
      { 'aria-hidden': 'true', textPosition: textPosition },
      _react2.default.cloneElement(icon, { fill: fill, height: height })
    ),
    _react2.default.createElement(
      _Span2.default,
      { display: displayMap[textPosition] },
      text
    )
  );
};

IconWithText.propTypes = {
  icon: _propTypes2.default.element.isRequired,
  height: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string,
  fill: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  background: _propTypes2.default.string,
  textPosition: _propTypes2.default.oneOf(['Right', 'Bottom'])
};

exports.default = IconWithText;