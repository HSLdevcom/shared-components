'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: 60px;\n  @media(max-width: ', ') {\n    display: flex;\n  }\n'], ['\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: 60px;\n  @media(max-width: ', ') {\n    display: flex;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledAppBarSmall = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.md;
});

function AppBarSmall(props) {
  var navItems = props.navItems.map(function (item) {
    return _react2.default.createElement(
      _reactRouter.Link,
      { key: item.name, to: item.route },
      item.nameEn
    );
  });

  return _react2.default.createElement(
    StyledAppBarSmall,
    null,
    navItems
  );
}

AppBarSmall.propTypes = {
  navItems: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
};

exports.default = AppBarSmall;