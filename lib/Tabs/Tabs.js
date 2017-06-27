'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border: solid 1px #cfcfcf;\n  ', '\n'], ['\n  border: solid 1px #cfcfcf;\n  ', '\n']),
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _Div2.default.extend(_templateObject, function (props) {
  return props.rounded && 'border-radius: 6px;';
});

var Tabs = function Tabs(_ref) {
  var index = _ref.index,
      children = _ref.children,
      className = _ref.className,
      rounded = _ref.rounded;
  return _react2.default.createElement(
    StyledDiv,
    { className: className, rounded: rounded },
    _react2.default.createElement(
      _Wrapper.Flex,
      null,
      _react2.default.Children.toArray(children).map(function (child, i) {
        return _react2.default.cloneElement(child, { active: index === i, rounded: rounded });
      })
    ),
    _react2.default.createElement(
      _Div2.default,
      null,
      _react2.default.Children.toArray(children)[index].props.children
    )
  );
};

Tabs.propTypes = {
  index: _propTypes2.default.number,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  className: _propTypes2.default.string,
  rounded: _propTypes2.default.bool
};

exports.default = (0, _styledComponents2.default)(Tabs)(_templateObject2);