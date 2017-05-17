'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  background: ', ';\n  height: ', ';\n  img {\n    position: absolute;\n    left: 0;\n    height: ', ';\n    margin-left: 5px;\n  }\n  header {\n    color: #FFFFFF;\n    text-align: center;\n    flex-basis: 100vw;\n    text-transform: uppercase;\n    font-weight: 500;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  background: ', ';\n  height: ', ';\n  img {\n    position: absolute;\n    left: 0;\n    height: ', ';\n    margin-left: 5px;\n  }\n  header {\n    color: #FFFFFF;\n    text-align: center;\n    flex-basis: 100vw;\n    text-transform: uppercase;\n    font-weight: 500;\n  }\n']);

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
      alt = _ref.alt,
      languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      title = _ref.title;
  return _react2.default.createElement(
    StyledNav,
    null,
    _react2.default.createElement('img', { src: logo, alt: alt }),
    title && _react2.default.createElement(
      'header',
      null,
      title
    ),
    !title && _react2.default.createElement(
      _NavSmall2.default,
      { languages: languages, changeLanguage: changeLanguage },
      children
    ),
    !title && _react2.default.createElement(
      _NavLarge2.default,
      { changeLanguage: changeLanguage },
      children
    )
  );
};

Nav.propTypes = {
  children: _propTypes2.default.node.isRequired,
  title: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  logo: _propTypes2.default.string.isRequired,
  changeLanguage: _propTypes2.default.func,
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    name: _propTypes2.default.string
  })).isRequired
};
Nav.defaultProps = {
  alt: '',
  title: ''
};

exports.default = Nav;