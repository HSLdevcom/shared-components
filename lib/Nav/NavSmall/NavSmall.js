'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n  /* width: 100%; */\n  height: 100%;\n  position: relative;\n  @media(max-width: ', ') {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* align-items: flex-end; */\n  }\n    input {\n      width: 40px;\n      height: 32px;\n      cursor: pointer;\n      position: absolute;\n      top: 10px;\n      right: 0;\n      opacity: 0; /* hide this */\n      z-index: 10; /* and place it over the hamburger */\n\n      -webkit-touch-callout: none; /* disable iOS specific link highlight on hold */\n    }\n\n    span {\n      width: 33px;\n      height: 4px;\n      margin-bottom: 5px;\n      margin-right: 5px;\n      background: white;\n      border-radius: 3px;\n      z-index: 5;\n    }\n    span:nth-child(4) {\n      margin-bottom: 0;\n    }\n    .mobile-drawer {\n      position: absolute;\n      top: 100%;\n      right: 0;\n      width: 300px;\n      background: #ededed;\n      transform: translate(100%, 0);\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n      a {\n        margin: 25px 10px;\n      }\n    }\n    input:checked ~ .mobile-drawer {\n      transform: translate(0%, 0);\n    }\n\n'], ['\n  display: none;\n  /* width: 100%; */\n  height: 100%;\n  position: relative;\n  @media(max-width: ', ') {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* align-items: flex-end; */\n  }\n    input {\n      width: 40px;\n      height: 32px;\n      cursor: pointer;\n      position: absolute;\n      top: 10px;\n      right: 0;\n      opacity: 0; /* hide this */\n      z-index: 10; /* and place it over the hamburger */\n\n      -webkit-touch-callout: none; /* disable iOS specific link highlight on hold */\n    }\n\n    span {\n      width: 33px;\n      height: 4px;\n      margin-bottom: 5px;\n      margin-right: 5px;\n      background: white;\n      border-radius: 3px;\n      z-index: 5;\n    }\n    span:nth-child(4) {\n      margin-bottom: 0;\n    }\n    .mobile-drawer {\n      position: absolute;\n      top: 100%;\n      right: 0;\n      width: 300px;\n      background: #ededed;\n      transform: translate(100%, 0);\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n      a {\n        margin: 25px 10px;\n      }\n    }\n    input:checked ~ .mobile-drawer {\n      transform: translate(0%, 0);\n    }\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNavSmall = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.md;
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