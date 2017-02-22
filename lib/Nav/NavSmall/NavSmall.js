'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n  /* width: 100%; */\n  height: 100%;\n  position: relative;\n  @media(max-width: ', ') {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* align-items: flex-end; */\n  }\n    input {\n      width: 40px;\n      height: 32px;\n      cursor: pointer;\n      position: absolute;\n      top: 10px;\n      right: 0;\n      opacity: 0; /* hide this */\n      z-index: 10; /* and place it over the hamburger */\n\n      -webkit-touch-callout: none; /* disable iOS specific link highlight on hold */\n    }\n\n    span {\n      width: 33px;\n      height: 4px;\n      margin-bottom: 5px;\n      margin-right: 5px;\n      background: #fff;\n      border-radius: 3px;\n      z-index: 5;\n      transform-origin: 4px 0px;\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                opacity 0.55s ease;\n    }\n    span:nth-child(4) {\n      margin-bottom: 0;\n    }\n\n    span:first-child {\n      transform-origin: 0% 0%;\n    }\n\n    span:nth-last-child(2) {\n      transform-origin: 0% 100%;\n    }\n\n    input:checked ~ span {\n      opacity: 1;\n      transform: rotate(45deg) translate(-2px, -1px);\n    }\n\n    input:checked ~ span:nth-last-child(3) {\n      opacity: 0;\n      transform: rotate(0deg) scale(0.2, 0.2);\n    }\n\n    input:checked ~ span:nth-last-child(2) {\n      opacity: 1;\n      transform: rotate(-45deg) translate(0, -1px);\n    }\n\n    .mobile-drawer {\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 300px;\n      padding-top: ', ';\n      background: #333;\n      transform: translate(100%, 0);\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n      a {\n        display: block;\n        margin: 25px 10px;\n        color: #fff;\n      }\n    }\n    input:checked ~ .mobile-drawer {\n      transform: translate(0%, 0);\n    }\n\n'], ['\n  display: none;\n  /* width: 100%; */\n  height: 100%;\n  position: relative;\n  @media(max-width: ', ') {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* align-items: flex-end; */\n  }\n    input {\n      width: 40px;\n      height: 32px;\n      cursor: pointer;\n      position: absolute;\n      top: 10px;\n      right: 0;\n      opacity: 0; /* hide this */\n      z-index: 10; /* and place it over the hamburger */\n\n      -webkit-touch-callout: none; /* disable iOS specific link highlight on hold */\n    }\n\n    span {\n      width: 33px;\n      height: 4px;\n      margin-bottom: 5px;\n      margin-right: 5px;\n      background: #fff;\n      border-radius: 3px;\n      z-index: 5;\n      transform-origin: 4px 0px;\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                opacity 0.55s ease;\n    }\n    span:nth-child(4) {\n      margin-bottom: 0;\n    }\n\n    span:first-child {\n      transform-origin: 0% 0%;\n    }\n\n    span:nth-last-child(2) {\n      transform-origin: 0% 100%;\n    }\n\n    input:checked ~ span {\n      opacity: 1;\n      transform: rotate(45deg) translate(-2px, -1px);\n    }\n\n    input:checked ~ span:nth-last-child(3) {\n      opacity: 0;\n      transform: rotate(0deg) scale(0.2, 0.2);\n    }\n\n    input:checked ~ span:nth-last-child(2) {\n      opacity: 1;\n      transform: rotate(-45deg) translate(0, -1px);\n    }\n\n    .mobile-drawer {\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 300px;\n      padding-top: ', ';\n      background: #333;\n      transform: translate(100%, 0);\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n      a {\n        display: block;\n        margin: 25px 10px;\n        color: #fff;\n      }\n    }\n    input:checked ~ .mobile-drawer {\n      transform: translate(0%, 0);\n    }\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNavSmall = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.md;
}, function (props) {
  return props.theme.navbarHeight;
});

var NavSmall = function NavSmall(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    StyledNavSmall,
    null,
    _react2.default.createElement('input', { type: 'checkbox' }),
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null),
    _react2.default.createElement(
      'div',
      { className: 'mobile-drawer' },
      children
    )
  );
};

NavSmall.propTypes = {
  children: _react.PropTypes.node.isRequired
};

exports.default = NavSmall;