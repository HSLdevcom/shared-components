'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  vertical-align: middle;\n  display: inline-block;\n  margin: ', ';\n  svg {\n    fill: currentColor;\n  }\n'], ['\n  vertical-align: middle;\n  display: inline-block;\n  margin: ', ';\n  svg {\n    fill: currentColor;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: ', ';\n  align-items: center;\n  text-align: center;\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  align-items: center;\n  text-align: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n'], ['\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Span = require('../Span/Span');

var _Span2 = _interopRequireDefault(_Span);

var _Div = require('../Div/Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconWrapper = _Span2.default.extend(_templateObject, function (props) {
  return props.textPosition === 'Right' ? '0 0.75rem 0 0' : '0 0 0.75rem 0';
});

var StyledButton = _Div2.default.extend(_templateObject2, function (props) {
  return props.textPosition === 'Right' ? 'row' : 'column';
});
var IconWithText = function IconWithText(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      textPosition = _ref.textPosition,
      className = _ref.className;
  return _react2.default.createElement(
    StyledButton,
    { className: className, textPosition: textPosition },
    _react2.default.createElement(
      IconWrapper,
      { className: 'icon', 'aria-hidden': 'true', textPosition: textPosition },
      icon
    ),
    _react2.default.createElement(
      _Span2.default,
      { className: 'text', textPosition: textPosition },
      text
    )
  );
};

IconWithText.defaultProps = {
  textPosition: 'Bottom'
};

IconWithText.propTypes = {
  icon: _propTypes2.default.node.isRequired,
  text: _propTypes2.default.string.isRequired,
  textPosition: _propTypes2.default.oneOf(['Right', 'Bottom']),
  className: _propTypes2.default.string
};

exports.default = (0, _styledComponents2.default)(IconWithText)(_templateObject3);