'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  h1 {\n    font-size: 20px;\n    letter-spacing: -0.8px;\n    color: #333;\n    text-align: center;\n    margin: 16px auto;\n    font-weight: normal;\n  }\n  .back-arrow {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    width: 50px;\n    height: 50%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-right: 1px solid #ddd;\n    img {\n      height: 17px;\n    }\n  }\n'], ['\n  position: relative;\n  h1 {\n    font-size: 20px;\n    letter-spacing: -0.8px;\n    color: #333;\n    text-align: center;\n    margin: 16px auto;\n    font-weight: normal;\n  }\n  .back-arrow {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    width: 50px;\n    height: 50%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-right: 1px solid #ddd;\n    img {\n      height: 17px;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject);

var PageTitleBar = function PageTitleBar(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    Div,
    null,
    _react2.default.createElement(
      'span',
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
  text: _react.PropTypes.string.isRequired,
  icon: _react.PropTypes.string.isRequired,
  onClick: _react.PropTypes.func.isRequired
};

exports.default = PageTitleBar;