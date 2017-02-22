'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n  width: 100%;\n  @media(min-width: ', ') {\n    display: flex;\n    justify-content: flex-end;\n  }\n  a {\n    display: flex;\n    font-size: 25px;\n    margin: 0 15px;\n    cursor: pointer;\n  }\n'], ['\n  display: none;\n  width: 100%;\n  @media(min-width: ', ') {\n    display: flex;\n    justify-content: flex-end;\n  }\n  a {\n    display: flex;\n    font-size: 25px;\n    margin: 0 15px;\n    cursor: pointer;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNavLarge = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.md;
});

var NavLarge = function NavLarge(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    StyledNavLarge,
    null,
    children
  );
};

NavLarge.propTypes = {
  children: _react.PropTypes.node.isRequired
};

exports.default = NavLarge;