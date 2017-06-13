'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  svg {\n    fill: currentColor;\n  }\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  justify-content: flex-start;\n  ', '\n  ', '\n  padding: 0 2.5rem;\n  height: 9rem;\n  ', '\n  > .child {\n    text-align: center;\n    font-size: 1.1rem;\n    margin: 0 1.5rem;\n    ', '\n\n  }\n  > .menu {\n    margin-left: auto;\n  }\n  > .logo {\n    margin-right: 3.5rem;\n    ', '\n    ', '\n  }\n  ', '\n'], ['\n  svg {\n    fill: currentColor;\n  }\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  justify-content: flex-start;\n  ', '\n  ', '\n  padding: 0 2.5rem;\n  height: 9rem;\n  ', '\n  > .child {\n    text-align: center;\n    font-size: 1.1rem;\n    margin: 0 1.5rem;\n    ', '\n\n  }\n  > .menu {\n    margin-left: auto;\n  }\n  > .logo {\n    margin-right: 3.5rem;\n    ', '\n    ', '\n  }\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      padding: 0 1.75rem;\n    '], ['\n      padding: 0 1.75rem;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        margin: 0 1rem;\n        font-size: 1rem;\n      '], ['\n        margin: 0 1rem;\n        font-size: 1rem;\n      ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        margin-right: 2rem;\n        svg {\n          height: 3.25rem;\n        }\n      '], ['\n        margin-right: 2rem;\n        svg {\n          height: 3.25rem;\n        }\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        margin-right: 0.5rem;\n          svg {\n            height: 2.75rem;\n          }\n      '], ['\n        margin-right: 0.5rem;\n          svg {\n            height: 2.75rem;\n          }\n      ']),
    _templateObject6 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../utils');

var _Span = require('../Span');

var _Span2 = _interopRequireDefault(_Span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
}, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject2);
}, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject3);
}, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject4);
}, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject5);
}, function (props) {
  return props.scroll && '\n    height: 4rem;\n    padding: 0;\n    > .child {\n      text-align: center;\n      font-size: 1rem;\n    }\n    > .logo {\n      padding-left: 1.5rem;\n      svg {\n        height: 2rem;\n      }\n    }\n  ';
});

var Nav = function Nav(_ref) {
  var className = _ref.className,
      logo = _ref.logo,
      menu = _ref.menu,
      scroll = _ref.scroll,
      children = _ref.children;
  return _react2.default.createElement(
    StyledNav,
    { className: className, scroll: scroll },
    _react2.default.createElement(
      _Span2.default,
      { className: 'logo' },
      logo
    ),
    (0, _utils.addClass)(children, 'child'),
    menu && (0, _utils.addClass)(menu, 'menu')
  );
};

Nav.propTypes = {
  className: _propTypes2.default.string,
  logo: _propTypes2.default.element.isRequired,
  menu: _propTypes2.default.element,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Nav)(_templateObject6);