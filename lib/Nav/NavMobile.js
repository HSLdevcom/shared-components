'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  svg {\n    fill: currentColor;\n  }\n  .logo svg {\n    height: 2rem;\n  }\n\n  .nav-item {\n    border-bottom: 2px solid ', ';\n    display: flex;\n    padding: 1.5rem 1.25rem 1.5rem 1.5rem;\n    font-size: 1.75rem;\n  }\n\n  .nav-item svg {\n    height: 3rem;\n    width: 3rem;\n  }\n  .menu-item svg {\n    height: 2.5rem;\n    width: 3rem;\n  }\n  padding: 0 1.25rem;\n\n  ', '\n  ', '\n\n  .menu-enter {\n    overflow: hidden;\n    max-height: 0rem;\n  }\n\n  .menu-enter.menu-enter-active {\n    overflow: hidden;\n    max-height: 75rem;\n    transition: max-height .25s ease-in;\n  }\n\n  .menu-leave {\n    overflow: hidden;\n    max-height: 75rem;\n  }\n\n  .menu-leave.menu-leave-active {\n    overflow: hidden;\n    max-height: 0rem;\n    transition: max-height .25s ease-in;\n  }\n\n  .menu-toggle {\n    #menu-middle-1, #menu-middle-2, #menu-top, #menu-bot {\n      transition: transform .25s linear;\n    }\n    &.open {\n      #menu-middle-1 {\n        transform: rotate(-45deg);\n        transform-origin: center;\n      }\n      #menu-middle-2 {\n        transform: rotate(45deg);\n        transform-origin: center;\n      }\n      #menu-top {\n        transform: translate(50%, -25px) scale(0);\n      }\n      #menu-bot {\n        transform: translate(50%, 25px) scale(0);\n      }\n    }\n  }\n\n'], ['\n  svg {\n    fill: currentColor;\n  }\n  .logo svg {\n    height: 2rem;\n  }\n\n  .nav-item {\n    border-bottom: 2px solid ', ';\n    display: flex;\n    padding: 1.5rem 1.25rem 1.5rem 1.5rem;\n    font-size: 1.75rem;\n  }\n\n  .nav-item svg {\n    height: 3rem;\n    width: 3rem;\n  }\n  .menu-item svg {\n    height: 2.5rem;\n    width: 3rem;\n  }\n  padding: 0 1.25rem;\n\n  ', '\n  ', '\n\n  .menu-enter {\n    overflow: hidden;\n    max-height: 0rem;\n  }\n\n  .menu-enter.menu-enter-active {\n    overflow: hidden;\n    max-height: 75rem;\n    transition: max-height .25s ease-in;\n  }\n\n  .menu-leave {\n    overflow: hidden;\n    max-height: 75rem;\n  }\n\n  .menu-leave.menu-leave-active {\n    overflow: hidden;\n    max-height: 0rem;\n    transition: max-height .25s ease-in;\n  }\n\n  .menu-toggle {\n    #menu-middle-1, #menu-middle-2, #menu-top, #menu-bot {\n      transition: transform .25s linear;\n    }\n    &.open {\n      #menu-middle-1 {\n        transform: rotate(-45deg);\n        transform-origin: center;\n      }\n      #menu-middle-2 {\n        transform: rotate(45deg);\n        transform-origin: center;\n      }\n      #menu-top {\n        transform: translate(50%, -25px) scale(0);\n      }\n      #menu-bot {\n        transform: translate(50%, 25px) scale(0);\n      }\n    }\n  }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  align-items: center;\n  height: 64px;\n'], ['\n  align-items: center;\n  height: 64px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  align-items: center;\n  align-self: stretch;\n  .text {\n    display: none;\n  }\n  .icon {\n    margin: 0;\n    line-height:0;\n  }\n  ', ' {\n    align-self: stretch;\n    margin-right: 1.75rem;\n    ', ' {\n      flex: 1;\n      margin-top: ', ';\n      justify-content: center;\n    }\n  }\n  ', ' {\n    height: 2rem;\n  }\n  svg {\n    height: 2rem;\n    width: 2rem;\n  }\n'], ['\n  align-items: center;\n  align-self: stretch;\n  .text {\n    display: none;\n  }\n  .icon {\n    margin: 0;\n    line-height:0;\n  }\n  ', ' {\n    align-self: stretch;\n    margin-right: 1.75rem;\n    ', ' {\n      flex: 1;\n      margin-top: ', ';\n      justify-content: center;\n    }\n  }\n  ', ' {\n    height: 2rem;\n  }\n  svg {\n    height: 2rem;\n    width: 2rem;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTransitionGroup = require('react-transition-group');

var _utils = require('../utils');

var _Span = require('../Span');

var _Span2 = _interopRequireDefault(_Span);

var _Menu = require('../Menu');

var _IconWithText = require('../IconWithText/IconWithText');

var _IconWithText2 = _interopRequireDefault(_IconWithText);

var _Wrapper = require('../Wrapper');

var _Icons = require('../Icons');

var _Button = require('../Button/Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.theme.menuBorder;
}, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
});

var TopBar = _Wrapper.Flex.extend(_templateObject2);

var TopIcons = _Wrapper.Flex.extend(_templateObject3, _Menu.MenuItem, _IconWithText2.default, function (props) {
  return props.theme.activatablePointerHeight || '0.6rem';
}, _Button.ButtonNoStyle);

var Nav = function (_React$PureComponent) {
  _inherits(Nav, _React$PureComponent);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.state = { open: false };
    _this.toggleMenu = _this.toggleMenu.bind(_this);
    return _this;
  }

  _createClass(Nav, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState(function (prevState) {
        return {
          open: !prevState.open
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        StyledNav,
        { className: this.props.className },
        _react2.default.createElement(
          TopBar,
          null,
          _react2.default.createElement(
            _Span2.default,
            { className: 'logo' },
            this.props.logo
          ),
          this.props.menu && _react2.default.createElement(
            TopIcons,
            null,
            _react2.default.Children.map(this.props.menu.props.children, function (child) {
              return _react2.default.cloneElement(child, { small: true });
            }),
            _react2.default.createElement(
              _Button.ButtonNoStyle,
              {
                onClick: this.toggleMenu,
                className: (0, _classnames2.default)('menu-toggle', { open: this.state.open })
              },
              _react2.default.createElement(_Icons.Menu, { height: '3rem' })
            )
          )
        ),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          {
            transitionName: 'menu',
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250
          },
          this.props.menu && this.state.open && _react2.default.cloneElement(this.props.menu, { className: (0, _classnames2.default)(this.props.menu.props.className, 'menu'),
            items: (0, _utils.addClass)(this.props.children, 'nav-item')
          }, (0, _utils.addClass)(this.props.menu.props.children, 'menu-item'))
        )
      );
    }
  }]);

  return Nav;
}(_react2.default.PureComponent);

Nav.childContextTypes = {
  textPosition: _propTypes2.default.string
};

Nav.propTypes = {
  className: _propTypes2.default.string,
  logo: _propTypes2.default.element.isRequired,
  menu: _propTypes2.default.element,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Nav)(_templateObject4);