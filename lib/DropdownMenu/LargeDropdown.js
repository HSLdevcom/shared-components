'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: ', 'px;\n  ', ' {\n    background: ', ';\n    display: flex;\n    justify-content: space-around;\n    padding-top: 2.5rem\n    align-items: flex-start;\n  }\n'], ['\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: ', 'px;\n  ', ' {\n    background: ', ';\n    display: flex;\n    justify-content: space-around;\n    padding-top: 2.5rem\n    align-items: flex-start;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _styledComponents2.default.div(_templateObject, function (props) {
  return props.top;
}, _Div2.default, function (props) {
  return props.theme.background;
});

var Dropdown = function Dropdown(_ref) {
  var top = _ref.top,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    StyledDiv,
    { className: className, top: top },
    _react2.default.createElement(
      _Div2.default,
      null,
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

exports.default = (0, _styledComponents2.default)(Dropdown)(_templateObject2);