'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-top: 1px solid black;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: ', 'px;\n  white-space: normal;\n'], ['\n  border-top: 1px solid black;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: ', 'px;\n  white-space: normal;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 1.1rem;\n  background: ', ';\n  justify-content: space-between;\n  padding: 2.5rem 1rem 2.5rem 10rem;\n  ', ';\n', ';\n  align-items: flex-start;\n  > * {\n    max-width: ', '%;\n    &:last-child {\n      width: ', ';\n    }\n  }\n'], ['\n  font-size: 1.1rem;\n  background: ', ';\n  justify-content: space-between;\n  padding: 2.5rem 1rem 2.5rem 10rem;\n  ', ';\n', ';\n  align-items: flex-start;\n  > * {\n    max-width: ', '%;\n    &:last-child {\n      width: ', ';\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 2.5rem 1rem 2.5rem 7rem;\n  font-size: 1rem;\n'], ['\n  padding: 2.5rem 1rem 2.5rem 7rem;\n  font-size: 1rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 2.5rem 1rem 2.5rem 4rem;\n'], ['\n  padding: 2.5rem 1rem 2.5rem 4rem;\n']),
    _templateObject5 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

var _Wrapper = require('../Wrapper');

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _Menu = require('../Menu/Menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _Div2.default.extend(_templateObject, function (props) {
  return props.top;
});

var StyledFlex = _Wrapper.Flex.extend(_templateObject2, function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject3);
}, function (props) {
  return props.theme.Media && props.theme.Media.medium(_templateObject4);
}, function (props) {
  return 100 / (Number(props.childrenCount) || 1);
}, _Menu.Width.large);

var Dropdown = function Dropdown(_ref) {
  var top = _ref.top,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    StyledDiv,
    { className: className, top: top },
    _react2.default.createElement(
      StyledFlex,
      { childrenCount: _react2.default.Children.count(children) },
      children
    ),
    _react2.default.createElement(_Mask2.default, null)
  );
};

Dropdown.propTypes = {
  top: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Dropdown)(_templateObject5);