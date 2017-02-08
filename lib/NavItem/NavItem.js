'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 3em;\n  font-size: 2em;\n  color: white;\n  padding: 0.3em;\n'], ['\n  height: 3em;\n  font-size: 2em;\n  color: white;\n  padding: 0.3em;\n']);

exports.default = NavItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNavItem = _styledComponents2.default.span(_templateObject);

function NavItem(props) {
  console.log(props);
  return _react2.default.createElement(
    StyledNavItem,
    null,
    props.name
  );
}