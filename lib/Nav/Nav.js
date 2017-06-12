'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ' {\n    display: none;\n  }\n  ', ' {\n    &.scroll {\n      position: fixed;\n      width: 100%;\n      overflow: hidden;\n      .icon {\n        display: none;\n      }\n      &.scroll-enter {\n        max-height: 0rem;\n      }\n\n      &.scroll-enter.scroll-enter-active {\n        max-height: 4rem;\n        transition: max-height .25s ease-in;\n      }\n\n      &.scroll-leave {\n        max-height: 4rem;\n      }\n\n      &.scroll-leave.scroll-leave-active {\n        max-height: 0rem;\n        transition: max-height .25s ease-in;\n      }\n    }\n  }\n  ', '\n'], ['\n  ', ' {\n    display: none;\n  }\n  ', ' {\n    &.scroll {\n      position: fixed;\n      width: 100%;\n      overflow: hidden;\n      .icon {\n        display: none;\n      }\n      &.scroll-enter {\n        max-height: 0rem;\n      }\n\n      &.scroll-enter.scroll-enter-active {\n        max-height: 4rem;\n        transition: max-height .25s ease-in;\n      }\n\n      &.scroll-leave {\n        max-height: 4rem;\n      }\n\n      &.scroll-leave.scroll-leave-active {\n        max-height: 0rem;\n        transition: max-height .25s ease-in;\n      }\n    }\n  }\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', ' {\n      display: block;\n    }\n    ', ' {\n      display: none;\n    }\n    '], ['\n    ', ' {\n      display: block;\n    }\n    ', ' {\n      display: none;\n    }\n    ']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactTransitionGroup = require('react-transition-group');

var _NavDesktop = require('./NavDesktop');

var _NavDesktop2 = _interopRequireDefault(_NavDesktop);

var _NavMobile = require('./NavMobile');

var _NavMobile2 = _interopRequireDefault(_NavMobile);

var _Menu = require('../Menu');

var _Span = require('../Span/Span');

var _Span2 = _interopRequireDefault(_Span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.header(_templateObject, _NavMobile2.default, _NavDesktop2.default, function (props) {
  return props.theme.Media && props.theme.Media.small(_templateObject2, _NavMobile2.default, _NavDesktop2.default);
});

var Nav = function (_React$PureComponent) {
  _inherits(Nav, _React$PureComponent);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.state = { scrollNavVisible: false };
    _this.lastScrollValue = 0;
    return _this;
  }

  _createClass(Nav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener('scroll', function (evt) {
        return _this2.onScroll(evt);
      }, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      document.removeEventListener('scroll', function (evt) {
        return _this3.onScroll(evt);
      }, true);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(evt) {
      // Visible when scrolling up and we have scrolled past the regular nav
      var newValue = evt.target.body.scrollTop < this.lastScrollValue && this.nav && this.nav.firstChild && evt.target.body.scrollTop > this.nav.firstChild.offsetHeight;
      this.lastScrollValue = evt.target.body.scrollTop;
      if (newValue !== this.state.scrollNavVisible) {
        this.setState({ scrollNavVisible: newValue });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        Header,
        { className: this.props.className },
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          {
            transitionName: 'scroll',
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250
          },
          this.props.menu && this.state.scrollNavVisible && _react2.default.createElement(
            _NavDesktop2.default,
            {
              className: 'scroll',
              scroll: true,
              logo: this.props.logo,
              menu: this.props.menu && _react2.default.createElement(_Menu.MenuSmall, this.props.menu.props)
            },
            this.props.children
          )
        ),
        _react2.default.createElement(
          _Span2.default,
          { innerRef: function innerRef(x) {
              return _this4.nav = x;
            } },
          _react2.default.createElement(
            _NavDesktop2.default,
            {
              logo: this.props.logo,
              menu: this.props.menu
            },
            this.props.children
          )
        ),
        _react2.default.createElement(
          _NavMobile2.default,
          {
            logo: this.props.logo,
            menu: this.props.menu && _react2.default.createElement(
              _Menu.MenuMobile,
              this.props.menu.props,
              _react2.default.Children.map(this.props.menu.props.children, function (child) {
                return _react2.default.cloneElement(child, { textPosition: 'Bottom' });
              })
            )
          },
          this.props.children
        )
      );
    }
  }]);

  return Nav;
}(_react2.default.PureComponent);

Nav.propTypes = {
  className: _propTypes2.default.string,
  logo: _propTypes2.default.element.isRequired,
  menu: _propTypes2.default.element,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Nav)(_templateObject3);