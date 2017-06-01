'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  vertical-align: middle;\n  display: inline-block;\n  margin: ', ';\n'], ['\n  vertical-align: middle;\n  display: inline-block;\n  margin: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Span = require('../Span/Span');

var _Span2 = _interopRequireDefault(_Span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var displayMap = {
  Right: 'inline',
  Bottom: 'block'
};

var IconWrapper = _Span2.default.extend(_templateObject, function (props) {
  return props.textPosition === 'Right' ? '0 0.75rem 0 0' : '0 0 0.75rem 0';
});

var IconWithText = function IconWithText(_ref) {
  var icon = _ref.icon,
      height = _ref.height,
      width = _ref.width,
      text = _ref.text,
      fill = _ref.fill,
      textPosition = _ref.textPosition;
  return _react2.default.createElement(
    _Span2.default,
    { style: { display: 'inline-block', textAlign: 'center' } },
    _react2.default.createElement(
      IconWrapper,
      { 'aria-hidden': 'true', textPosition: textPosition },
      _react2.default.cloneElement(icon, { fill: fill, height: height, width: width })
    ),
    _react2.default.createElement(
      _Span2.default,
      { style: { display: displayMap[textPosition] } },
      text
    )
  );
};

IconWithText.propTypes = {
  icon: _propTypes2.default.element.isRequired,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  text: _propTypes2.default.string.isRequired,
  fill: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  textPosition: _propTypes2.default.oneOf(['Right', 'Bottom'])
};

exports.default = (0, _styledComponents2.default)(IconWithText)(_templateObject2);