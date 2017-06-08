'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  svg {\n    fill: currentColor;\n  }\n\n  .nav-item {\n    border-bottom: 2px solid ', ';\n    display: flex;\n    padding: 2.5rem 1.5rem 2.5rem 2.5rem;\n    font-size: 2rem;\n  }\n\n  .menu-item, .nav-item {\n    svg {\n      height: 3.5rem;\n      width: 3.5rem;\n    }\n  }\n  padding: 1.25rem;\n  ', '\n  ', '\n'], ['\n  svg {\n    fill: currentColor;\n  }\n\n  .nav-item {\n    border-bottom: 2px solid ', ';\n    display: flex;\n    padding: 2.5rem 1.5rem 2.5rem 2.5rem;\n    font-size: 2rem;\n  }\n\n  .menu-item, .nav-item {\n    svg {\n      height: 3.5rem;\n      width: 3.5rem;\n    }\n  }\n  padding: 1.25rem;\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('../utils');

var _Span = require('../Span/Span');

var _Span2 = _interopRequireDefault(_Span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.theme.menuBorder;
}, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
});

var Nav = function Nav(_ref) {
  var className = _ref.className,
      logo = _ref.logo,
      menu = _ref.menu,
      children = _ref.children;
  return _react2.default.createElement(
    StyledNav,
    { className: className },
    _react2.default.createElement(
      _Span2.default,
      { className: 'logo' },
      logo
    ),
    _react2.default.cloneElement(menu, { className: (0, _classnames2.default)(menu.props.className, 'menu'),
      items: (0, _utils.addClass)(children, 'nav-item')
    }, (0, _utils.addClass)(menu.props.children, 'menu-item'))
  );
};

Nav.propTypes = {
  className: _propTypes2.default.string,
  logo: _propTypes2.default.element.isRequired,
  menu: _propTypes2.default.element,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Nav)(_templateObject2);