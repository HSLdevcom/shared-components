'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ' {\n    .icon {\n      ', '\n    }\n  }\n'], ['\n  ', ' {\n    .icon {\n      ', '\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

var _Wrapper = require('../Wrapper');

var _IconWithText = require('../IconWithText/IconWithText');

var _IconWithText2 = _interopRequireDefault(_IconWithText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _Div2.default.extend(_templateObject, _IconWithText2.default, function (props) {
  return props.small && 'display: none;';
});

var NavItem = function NavItem(_ref) {
  var link = _ref.link,
      icon = _ref.icon,
      text = _ref.text,
      textPosition = _ref.textPosition,
      active = _ref.active,
      small = _ref.small,
      className = _ref.className;
  return _react2.default.createElement(
    StyledDiv,
    { className: className, small: small },
    _react2.default.createElement(
      link.type,
      link.props,
      _react2.default.createElement(
        _Wrapper.Activatable,
        { active: active },
        _react2.default.createElement(_IconWithText2.default, { icon: icon, text: text, textPosition: textPosition })
      )
    )
  );
};

NavItem.propTypes = {
  link: _propTypes2.default.node.isRequired,
  icon: _propTypes2.default.node.isRequired,
  text: _propTypes2.default.string.isRequired,
  textPosition: _propTypes2.default.oneOf(['Right', 'Bottom']),
  active: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = (0, _styledComponents2.default)(NavItem)(_templateObject2);