'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  align-items: center;\n  justify-content: stretch;\n  align-self: stretch;\n  .icon {\n    line-height: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n  }\n\n  .icon svg, .search-icon svg {\n    height: 1.5rem;\n  }\n\n  .search-icon {\n    align-items: center;\n  }\n\n  svg {\n    fill: currentColor;\n  }\n\n  align-items: stretch;\n\n  > * {\n    ', '\n    display: flex;\n\n    width: ', ';\n    justify-content: center;\n  }\n  ', '\n  ', '\n\n  ', ' {\n    align-items: stretch;\n    ', ' {\n      flex: 1;\n      margin-top: ', ';\n      justify-content: center;\n    }\n  }\n\n  ', '\n\n'], ['\n  align-items: center;\n  justify-content: stretch;\n  align-self: stretch;\n  .icon {\n    line-height: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n  }\n\n  .icon svg, .search-icon svg {\n    height: 1.5rem;\n  }\n\n  .search-icon {\n    align-items: center;\n  }\n\n  svg {\n    fill: currentColor;\n  }\n\n  align-items: stretch;\n\n  > * {\n    ', '\n    display: flex;\n\n    width: ', ';\n    justify-content: center;\n  }\n  ', '\n  ', '\n\n  ', ' {\n    align-items: stretch;\n    ', ' {\n      flex: 1;\n      margin-top: ', ';\n      justify-content: center;\n    }\n  }\n\n  ', '\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      .search-icon, ', ' {\n        display: none;\n      }\n    '], ['\n      .search-icon, ', ' {\n        display: none;\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _IconWithText = require('../IconWithText/IconWithText');

var _IconWithText2 = _interopRequireDefault(_IconWithText);

var _LangSelect = require('../LangSelect');

var _Icons = require('../Icons');

var _Wrapper = require('../Wrapper');

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFlex = _Wrapper.Flex.extend(_templateObject, function (props) {
  return props.theme.menuBorder && 'border-left: 1px solid ' + props.theme.menuBorder + ';';
}, function (props) {
  return props.theme.scrollNavHeight || '3.75rem';
}, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
}, _MenuItem2.default, _IconWithText2.default, function (props) {
  return props.theme.activatablePointerHeight || '0.6rem';
}, function (props) {
  return props.theme.Media && props.theme.Media.medium(_templateObject2, _LangSelect.LangSelectSmall);
});

var MenuSmall = function MenuSmall(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    StyledFlex,
    { className: className },
    children,
    _react2.default.createElement(
      _Wrapper.Flex,
      { className: 'search-icon' },
      _react2.default.createElement(_Icons.Search, {
        height: '2rem',
        width: '2rem'
      })
    ),
    _react2.default.createElement(_LangSelect.LangSelectSmall, {
      languages: languages,
      selectedLanguage: selectedLanguage,
      changeLanguage: changeLanguage
    })
  );
};

var defaultChildren = [_react2.default.createElement(_MenuItem2.default, {
  link: _react2.default.createElement(_reactRouter.Link, { to: '/test' }),
  icon: _react2.default.createElement(_Icons.TravelCard, { height: '3.5rem' }),
  text: 'Matkakortti',
  textPosition: 'Right',
  key: 'travelcard',
  active: true,
  small: true
}), _react2.default.createElement(_MenuItem2.default, {
  link: _react2.default.createElement(_reactRouter.Link, { to: '/test' }),
  icon: _react2.default.createElement(_Icons.SignIn, { height: '3.5rem' }),
  text: 'Kirjaudu',
  textPosition: 'Right',
  key: 'signin',
  small: true
})];

MenuSmall.defaultProps = {
  children: defaultChildren
};

MenuSmall.propTypes = {
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired
  })),
  changeLanguage: _propTypes2.default.func.isRequired,
  selectedLanguage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(MenuSmall)(_templateObject3);