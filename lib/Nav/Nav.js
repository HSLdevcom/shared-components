'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: ', ';\n  img {\n    height: ', ';\n    margin-left: 5px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: ', ';\n  img {\n    height: ', ';\n    margin-left: 5px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _NavLarge = require('./NavLarge/NavLarge');

var _NavLarge2 = _interopRequireDefault(_NavLarge);

var _NavSmall = require('./NavSmall/NavSmall');

var _NavSmall2 = _interopRequireDefault(_NavSmall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.navbarHeight;
}, function (props) {
  return props.theme.logoHeight;
});

var Nav = function Nav(_ref) {
  var children = _ref.children,
      logo = _ref.logo,
      title = _ref.title,
      languages = _ref.languages;
  return _react2.default.createElement(
    StyledNav,
    null,
    _react2.default.createElement('img', { src: logo, alt: title }),
    _react2.default.createElement(
      _NavSmall2.default,
      { languages: languages },
      children
    ),
    _react2.default.createElement(
      _NavLarge2.default,
      null,
      children
    )
  );
};

Nav.propTypes = {
  children: _propTypes2.default.node.isRequired,
  title: _propTypes2.default.string.isRequired,
  logo: _propTypes2.default.string.isRequired,
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    name: _propTypes2.default.string
  })).isRequired
};

exports.default = Nav;