'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  h1 {\n    font-size: 1.2em;\n    letter-spacing: -0.8px;\n    color: ', ';\n    text-align: center;\n    margin: 1em auto;\n    font-weight: normal;\n  }\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 50%;\n    transform: perspective(1px) translateY(-50%);\n    left: 0;\n    width: 35px;\n    height: 50%;\n    text-align: center;\n    border-width: 0;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    background-color: #fff;\n    img {\n      height: 1em;\n      margin: auto;\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  h1 {\n    font-size: 1.2em;\n    letter-spacing: -0.8px;\n    color: ', ';\n    text-align: center;\n    margin: 1em auto;\n    font-weight: normal;\n  }\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 50%;\n    transform: perspective(1px) translateY(-50%);\n    left: 0;\n    width: 35px;\n    height: 50%;\n    text-align: center;\n    border-width: 0;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    background-color: #fff;\n    img {\n      height: 1em;\n      margin: auto;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.primary;
});

var PageTitleBar = function PageTitleBar(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    Div,
    null,
    icon && _react2.default.createElement(
      'button',
      { onClick: onClick },
      _react2.default.createElement('img', { src: icon, alt: 'placeholder' })
    ),
    _react2.default.createElement(
      'h1',
      null,
      text
    )
  );
};

PageTitleBar.propTypes = {
  text: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.default = PageTitleBar;