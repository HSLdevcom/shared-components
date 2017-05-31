'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  background: ', ';\n  height: ', ';\n  padding: 2rem;\n  .nav-links {\n    margin: 0 1.5rem;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  background: ', ';\n  height: ', ';\n  padding: 2rem;\n  .nav-links {\n    margin: 0 1.5rem;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.backgroung || props.theme.background || '#FFFFFF';
}, function (props) {
  return props.height || props.theme.navbarHeight || 'auto';
});

var Nav = function Nav(_ref) {
  var logo = _ref.logo,
      logoFill = _ref.logoFill,
      logoHeight = _ref.logoHeight,
      children = _ref.children;
  return _react2.default.createElement(
    StyledNav,
    null,
    _react2.default.cloneElement(logo, { fill: logoFill, height: logoHeight }),
    _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(
        'a',
        { className: 'nav-links' },
        child
      );
    })
  );
};

Nav.propTypes = {
  logo: _propTypes2.default.element.isRequired,
  logoFill: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  logoHeight: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = Nav;