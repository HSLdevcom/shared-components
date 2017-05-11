'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  background-color: #fff;\n  width: 100vw;\n  left: calc(-50vw + 50%);\n  margin-bottom: 1em;\n  .content-container {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    max-width: 1100px;\n    margin: auto;\n    h1 {\n      font-size: 1.2em;\n      letter-spacing: -0.8px;\n      color: ', ';\n      text-align: center;\n      margin: 1em auto;\n      font-weight: normal;\n    }\n    .back-button {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n      top: 0;\n      left: 0;\n      font-size: 1.2em;\n      width: 3em;\n      height: 100%;\n      text-align: center;\n      border-width: 0;\n      border: none;\n      background-color: #fff;\n      border-right: 1px solid #ddd;\n      padding: 0;\n      img {\n        height: 1em;\n        margin: auto;\n      }\n    }\n  }\n'], ['\n  position: relative;\n  background-color: #fff;\n  width: 100vw;\n  left: calc(-50vw + 50%);\n  margin-bottom: 1em;\n  .content-container {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    max-width: 1100px;\n    margin: auto;\n    h1 {\n      font-size: 1.2em;\n      letter-spacing: -0.8px;\n      color: ', ';\n      text-align: center;\n      margin: 1em auto;\n      font-weight: normal;\n    }\n    .back-button {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n      top: 0;\n      left: 0;\n      font-size: 1.2em;\n      width: 3em;\n      height: 100%;\n      text-align: center;\n      border-width: 0;\n      border: none;\n      background-color: #fff;\n      border-right: 1px solid #ddd;\n      padding: 0;\n      img {\n        height: 1em;\n        margin: auto;\n      }\n    }\n  }\n']);

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
  var children = _ref.children,
      text = _ref.text,
      backButton = _ref.backButton,
      onBackClick = _ref.onBackClick,
      className = _ref.className;
  return _react2.default.createElement(
    Div,
    { className: className },
    _react2.default.createElement(
      'div',
      { className: 'content-container' },
      backButton && _react2.default.createElement(
        'button',
        { className: 'back-button', onClick: onBackClick },
        _react2.default.createElement('img', { src: backButton, alt: 'placeholder' })
      ),
      children
    )
  );
};

PageTitleBar.propTypes = {
  children: _propTypes2.default.node.isRequired,
  backButton: _propTypes2.default.string,
  onBackClick: _propTypes2.default.func,
  className: _propTypes2.default.string
};

exports.default = PageTitleBar;