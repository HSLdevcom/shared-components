'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  .menu {\n    margin-left: 3rem;\n  }\n  justify-content: space-between;\n'], ['\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  .menu {\n    margin-left: 3rem;\n  }\n  justify-content: space-between;\n']);

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

var StyledNav = _styledComponents2.default.nav(_templateObject);

var Nav = function Nav(_ref) {
  var style = _ref.style,
      logo = _ref.logo,
      menu = _ref.menu,
      children = _ref.children;
  return _react2.default.createElement(
    StyledNav,
    { style: style },
    _react2.default.createElement(
      _Span2.default,
      null,
      logo
    ),
    children,
    _react2.default.cloneElement(menu, { className: 'menu' })
  );
};

Nav.propTypes = {
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  logo: _propTypes2.default.element.isRequired,
  menu: _propTypes2.default.element.isRequired,
  children: _propTypes2.default.node
};

exports.default = Nav;