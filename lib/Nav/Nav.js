'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ' {\n    display: none;\n  }\n  ', '\n'], ['\n  ', ' {\n    display: none;\n  }\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', ' {\n      display: block;\n    }\n    ', ' {\n      display: none;\n    }\n    '], ['\n    ', ' {\n      display: block;\n    }\n    ', ' {\n      display: none;\n    }\n    ']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _NavDesktop = require('./NavDesktop');

var _NavDesktop2 = _interopRequireDefault(_NavDesktop);

var _NavMobile = require('./NavMobile');

var _NavMobile2 = _interopRequireDefault(_NavMobile);

var _Menu = require('../Menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.header(_templateObject, _NavMobile2.default, function (props) {
  return props.theme.Media && props.theme.Media.small(_templateObject2, _NavMobile2.default, _NavDesktop2.default);
});

var Nav = function Nav(_ref) {
  var className = _ref.className,
      logo = _ref.logo,
      menu = _ref.menu,
      scroll = _ref.scroll,
      children = _ref.children;
  return _react2.default.createElement(
    Header,
    { className: className },
    _react2.default.createElement(
      _NavDesktop2.default,
      { logo: logo, menu: menu, scroll: scroll },
      _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, { textPosition: 'Bottom' });
      })
    ),
    _react2.default.createElement(
      _NavMobile2.default,
      {
        logo: logo,
        menu: menu && _react2.default.createElement(
          _Menu.MenuMobile,
          menu.props,
          _react2.default.Children.map(menu.props.children, function (child) {
            return _react2.default.cloneElement(child, { textPosition: 'Bottom' });
          })
        )
      },
      _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, { textPosition: 'Right' });
      })
    )
  );
};

Nav.propTypes = {
  className: _propTypes2.default.string,
  logo: _propTypes2.default.element.isRequired,
  menu: _propTypes2.default.element,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Nav)(_templateObject3);