'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  z-index: 1000;\n  svg {\n    fill: currentColor;\n  }\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  justify-content: flex-start;\n  ', '\n  ', '\n  padding: 0 1rem 0 2.5rem;\n  height: 9rem;\n  ', '\n  ', ', ', ' {\n    display: flex;\n    align-items: stretch;\n    font-size: 1.1rem;\n    margin: 0 1.5rem;\n    .link {\n      display: flex;\n      ', ' {\n        justify-content: center;\n      }\n    }\n    ', '\n    ', '\n\n  }\n  > .menu {\n    margin-left: auto;\n  }\n  > .logo {\n    margin-right: 1.5rem;\n    align-items: center;\n    display: flex;\n    ', '\n    ', '\n  }\n  &.scroll {\n    height: ', ';\n    padding: 0;\n    > .logo {\n      padding-left: 1.5rem;\n      svg {\n        height: 2rem;\n      }\n      margin-right: 2.5rem;\n      ', '\n      ', '\n    }\n  }\n'], ['\n  z-index: 1000;\n  svg {\n    fill: currentColor;\n  }\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  justify-content: flex-start;\n  ', '\n  ', '\n  padding: 0 1rem 0 2.5rem;\n  height: 9rem;\n  ', '\n  ', ', ', ' {\n    display: flex;\n    align-items: stretch;\n    font-size: 1.1rem;\n    margin: 0 1.5rem;\n    .link {\n      display: flex;\n      ', ' {\n        justify-content: center;\n      }\n    }\n    ', '\n    ', '\n\n  }\n  > .menu {\n    margin-left: auto;\n  }\n  > .logo {\n    margin-right: 1.5rem;\n    align-items: center;\n    display: flex;\n    ', '\n    ', '\n  }\n  &.scroll {\n    height: ', ';\n    padding: 0;\n    > .logo {\n      padding-left: 1.5rem;\n      svg {\n        height: 2rem;\n      }\n      margin-right: 2.5rem;\n      ', '\n      ', '\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      padding: 0 1.75rem;\n      height: 7.5rem;\n    '], ['\n      padding: 0 1.75rem;\n      height: 7.5rem;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        margin: 0 0.75rem;\n        font-size: 1rem;\n        svg {\n          height: 2.25rem;\n        }\n      '], ['\n        margin: 0 0.75rem;\n        font-size: 1rem;\n        svg {\n          height: 2.25rem;\n        }\n      ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        svg {\n          height: 1.75rem;\n          width: 2rem;\n        }\n      '], ['\n        svg {\n          height: 1.75rem;\n          width: 2rem;\n        }\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        margin-right: 1.5rem;\n        svg {\n          height: 3.25rem;\n        }\n      '], ['\n        margin-right: 1.5rem;\n        svg {\n          height: 3.25rem;\n        }\n      ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        margin-right: 1.25rem;\n          svg {\n            height: 2.75rem;\n          }\n      '], ['\n        margin-right: 1.25rem;\n          svg {\n            height: 2.75rem;\n          }\n      ']),
    _templateObject7 = _taggedTemplateLiteral(['\n          margin-right: 1.5rem;\n        '], ['\n          margin-right: 1.5rem;\n        ']),
    _templateObject8 = _taggedTemplateLiteral(['\n          margin-right: 0.75rem;\n        '], ['\n          margin-right: 0.75rem;\n        ']),
    _templateObject9 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('../utils');

var _Span = require('../Span');

var _Span2 = _interopRequireDefault(_Span);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _Wrapper = require('../Wrapper');

var _DropdownMenu = require('../DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
}, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject2);
}, _NavItem2.default, _DropdownMenu2.default, _Wrapper.Activatable, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject3);
}, function (props) {
  return props.theme.Media && props.theme.Media.medium(_templateObject4);
}, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject5);
}, function (props) {
  return props.theme.Media && props.theme.Media.medium(_templateObject6);
}, function (props) {
  return props.theme.scrollNavHeight || '3.75rem';
}, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject7);
}, function (props) {
  return props.theme.Media && props.theme.Media.medium(_templateObject8);
});

var Nav = function Nav(_ref) {
  var className = _ref.className,
      logo = _ref.logo,
      menu = _ref.menu,
      navRef = _ref.navRef,
      scroll = _ref.scroll,
      children = _ref.children;
  return _react2.default.createElement(
    StyledNav,
    { className: className, scroll: scroll, innerRef: navRef },
    _react2.default.createElement(
      _Span2.default,
      { className: 'logo' },
      logo
    ),
    _react2.default.Children.map(children, function (child) {
      return _react2.default.cloneElement(child, {
        small: scroll,
        className: (0, _classnames2.default)(child.props.className, 'child')
      });
    }),
    menu && (0, _utils.addClass)(menu, 'menu')
  );
};

Nav.propTypes = {
  className: _propTypes2.default.string,
  logo: _propTypes2.default.element.isRequired,
  menu: _propTypes2.default.element,
  scroll: _propTypes2.default.bool,
  navRef: _propTypes2.default.func,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Nav)(_templateObject9);