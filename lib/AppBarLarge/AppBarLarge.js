'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: 60px;\n  @media(max-width: ', ') {\n    display: none\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: 60px;\n  @media(max-width: ', ') {\n    display: none\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.md;
});
function AppBarLarge(props) {
  return _react2.default.createElement(
    StyledDiv,
    null,
    props.children
  );
}

AppBarLarge.propTypes = {
  children: _react.PropTypes.node.isRequired
};

exports.default = AppBarLarge;