'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: 60px;\n  .title {\n    font-size: 1em;\n    display:none;\n    @media(max-width: ', ') {\n      display: block;\n    }\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: 60px;\n  .title {\n    font-size: 1em;\n    display:none;\n    @media(max-width: ', ') {\n      display: block;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MainMenu = require('../MainMenu/MainMenu');

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.md;
});

function AppBar(props) {
  console.log(props);
  return _react2.default.createElement(
    StyledNav,
    null,
    _react2.default.createElement(
      'section',
      { className: 'title' },
      props.showLogo ? _react2.default.createElement('div', { className: 'logo' }) : _react2.default.createElement(
        'span',
        { className: 'title' },
        props.title
      )
    ),
    _react2.default.createElement(_MainMenu2.default, props)
  );
}
AppBar.propTypes = {
  showLogo: _react.PropTypes.bool,
  title: _react.PropTypes.string
};
exports.default = AppBar;