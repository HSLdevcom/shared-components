'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  overflow: hidden;\n  ', ' {\n    display: block;\n    width: 3.25rem;\n  }\n  padding: 0;\n  align-items: center;\n  ', '\n  ', '\n  .selected-language {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg {\n      margin-left: 0.375rem;\n      fill: currentColor;\n    }\n  }\n\n  .lang-select-enter {\n    overflow: hidden;\n    max-height: 0rem;\n  }\n\n  .lang-select-enter.lang-select-enter-active {\n    overflow: hidden;\n    max-height: 4rem;\n    transition: max-height .125s ease-in;\n  }\n\n  .lang-select-leave {\n    overflow: hidden;\n    max-height: 4rem;\n  }\n\n  .lang-select-leave.lang-select-leave-active {\n    overflow: hidden;\n    max-height: 0rem;\n    transition: max-height .125s ease-in;\n  }\n\n  .transition-group {\n    position:absolute;\n    top: 3.5rem;\n  }\n'], ['\n  overflow: hidden;\n  ', ' {\n    display: block;\n    width: 3.25rem;\n  }\n  padding: 0;\n  align-items: center;\n  ', '\n  ', '\n  .selected-language {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg {\n      margin-left: 0.375rem;\n      fill: currentColor;\n    }\n  }\n\n  .lang-select-enter {\n    overflow: hidden;\n    max-height: 0rem;\n  }\n\n  .lang-select-enter.lang-select-enter-active {\n    overflow: hidden;\n    max-height: 4rem;\n    transition: max-height .125s ease-in;\n  }\n\n  .lang-select-leave {\n    overflow: hidden;\n    max-height: 4rem;\n  }\n\n  .lang-select-leave.lang-select-leave-active {\n    overflow: hidden;\n    max-height: 0rem;\n    transition: max-height .125s ease-in;\n  }\n\n  .transition-group {\n    position:absolute;\n    top: 3.5rem;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  border-radius: 3px;\n  border: 1px solid ', ';\n  ', ' {\n    &:hover {\n\n    }\n  }\n'], ['\n  ', '\n  border-radius: 3px;\n  border: 1px solid ', ';\n  ', ' {\n    &:hover {\n\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactTransitionGroup = require('react-transition-group');

var _polished = require('polished');

var _Icons = require('../Icons');

var _LangButton = require('./LangButton');

var _LangButton2 = _interopRequireDefault(_LangButton);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _Div2.default.extend(_templateObject, _LangButton2.default, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
});

var SelectWrapper = _Div2.default.extend(_templateObject2, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.primary);
}, _LangButton2.default);

var LangSelectSmall = function (_React$PureComponent) {
  _inherits(LangSelectSmall, _React$PureComponent);

  function LangSelectSmall(props) {
    _classCallCheck(this, LangSelectSmall);

    var _this = _possibleConstructorReturn(this, (LangSelectSmall.__proto__ || Object.getPrototypeOf(LangSelectSmall)).call(this, props));

    _this.state = { open: false };
    _this.toggleLangSelect = _this.toggleLangSelect.bind(_this);
    _this.onScroll = _this.onScroll.bind(_this);
    return _this;
  }

  _createClass(LangSelectSmall, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      if (this.state.open) {
        this.setState({ open: false });
      }
    }
  }, {
    key: 'toggleLangSelect',
    value: function toggleLangSelect() {
      this.setState(function (prevState) {
        return {
          open: !prevState.open
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        StyledDiv,
        { className: this.props.className },
        _react2.default.createElement(
          _LangButton2.default,
          {
            className: 'selected-language',
            onClick: this.toggleLangSelect
          },
          this.props.languages.find(function (lang) {
            return lang.id === _this2.props.selectedLanguage;
          }).name,
          _react2.default.createElement(_Icons.ArrowDown, { height: '0.75rem', width: '0.75rem' })
        ),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          {
            className: 'transition-group',
            transitionName: 'lang-select',
            transitionEnterTimeout: 125,
            transitionLeaveTimeout: 125
          },
          this.state.open && _react2.default.createElement(
            SelectWrapper,
            { className: 'select-wrapper' },
            this.props.languages.filter(function (lang) {
              return lang.id !== _this2.props.selectedLanguage;
            }).map(function (lang) {
              return _react2.default.createElement(
                _LangButton2.default,
                {
                  key: lang.id,
                  onClick: function onClick() {
                    _this2.props.changeLanguage(lang.id);
                    _this2.toggleLangSelect();
                  }
                },
                lang.name
              );
            })
          )
        )
      );
    }
  }]);

  return LangSelectSmall;
}(_react2.default.PureComponent);

LangSelectSmall.defaultProps = {
  languages: [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }]
};

LangSelectSmall.propTypes = {
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired
  })).isRequired,
  changeLanguage: _propTypes2.default.func.isRequired,
  selectedLanguage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string
};
exports.default = (0, _styledComponents2.default)(LangSelectSmall)(_templateObject3);