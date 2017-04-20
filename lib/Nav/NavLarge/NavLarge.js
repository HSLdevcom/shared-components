'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n  width: 100%;\n  @media(min-width: ', ') {\n    display: flex;\n    justify-content: flex-end;\n  }\n  a {\n    display: block;\n    cursor: pointer;\n    text-align: right;\n    padding: 5px;\n    margin: 30px 15px;\n    border-radius: 5px;\n    color: #fff;\n    text-decoration: none;\n    &:hover {\n      background-color: #222;\n    }\n  }\n'], ['\n  display: none;\n  width: 100%;\n  @media(min-width: ', ') {\n    display: flex;\n    justify-content: flex-end;\n  }\n  a {\n    display: block;\n    cursor: pointer;\n    text-align: right;\n    padding: 5px;\n    margin: 30px 15px;\n    border-radius: 5px;\n    color: #fff;\n    text-decoration: none;\n    &:hover {\n      background-color: #222;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  children: _propTypes2.default.node.isRequired
};

exports.default = NavLarge;