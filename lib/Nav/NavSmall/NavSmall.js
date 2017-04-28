'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n  /* width: 100%; */\n  height: 100%;\n  position: relative;\n  @media(max-width: ', ') {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* align-items: flex-end; */\n  }\n    input {\n      width: 40px;\n      height: 32px;\n      cursor: pointer;\n      position: absolute;\n      top: 10px;\n      right: 0;\n      opacity: 0; /* hide this */\n      z-index: 900; /* and place it over the hamburger */\n\n      -webkit-touch-callout: none; /* disable iOS specific link highlight on hold */\n    }\n\n    span {\n      width: 25px;\n      height: 2px;\n      margin-bottom: 4px;\n      margin-right: 15px;\n      background: #fff;\n      border-radius: 3px;\n      z-index: 899;\n      transform-origin: 4px 1px;\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                opacity 0.55s ease;\n    }\n    span:nth-child(4) {\n      margin-bottom: 0;\n    }\n\n\n\n    input:checked ~ span {\n      opacity: 1;\n      transform: rotate(45deg) translate(0px, 0px);\n      z-index:900;\n    }\n\n    input:checked ~ span:nth-last-child(3) {\n      opacity: 0;\n      transform: rotate(0deg) scale(0.2, 0.2);\n    }\n\n    input:checked ~ span:nth-last-child(2) {\n      opacity: 1;\n      transform: rotate(-45deg) translate(0px, 0px);\n    }\n\n    .mobile-drawer {\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 200px;\n      background: #333;\n      transform: translate(100%, 0);\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n      z-index: 899;\n      ul {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n        height: ', ';\n        list-style-type: none;\n        margin: 0;\n        padding-left: 15px;\n        border-bottom: 1px solid #222;\n        color: #fff;\n        li {\n          display: inline;\n          cursor: pointer;\n          padding: 5px;\n          margin-right: 5px;\n          border-radius: 5px;\n          &:hover {\n            background-color: #222;\n          }\n        }\n      }\n      a {\n        display: block;\n        cursor: pointer;\n        text-align: right;\n        padding: 30px 15px;\n        border-radius: 5px;\n        color: #fff;\n        text-decoration: none;\n        &:hover {\n          background-color: #222;\n        }\n      }\n    }\n    input:checked ~ .mobile-drawer {\n      transform: translate(0%, 0);\n    }\n\n'], ['\n  display: none;\n  /* width: 100%; */\n  height: 100%;\n  position: relative;\n  @media(max-width: ', ') {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* align-items: flex-end; */\n  }\n    input {\n      width: 40px;\n      height: 32px;\n      cursor: pointer;\n      position: absolute;\n      top: 10px;\n      right: 0;\n      opacity: 0; /* hide this */\n      z-index: 900; /* and place it over the hamburger */\n\n      -webkit-touch-callout: none; /* disable iOS specific link highlight on hold */\n    }\n\n    span {\n      width: 25px;\n      height: 2px;\n      margin-bottom: 4px;\n      margin-right: 15px;\n      background: #fff;\n      border-radius: 3px;\n      z-index: 899;\n      transform-origin: 4px 1px;\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                opacity 0.55s ease;\n    }\n    span:nth-child(4) {\n      margin-bottom: 0;\n    }\n\n\n\n    input:checked ~ span {\n      opacity: 1;\n      transform: rotate(45deg) translate(0px, 0px);\n      z-index:900;\n    }\n\n    input:checked ~ span:nth-last-child(3) {\n      opacity: 0;\n      transform: rotate(0deg) scale(0.2, 0.2);\n    }\n\n    input:checked ~ span:nth-last-child(2) {\n      opacity: 1;\n      transform: rotate(-45deg) translate(0px, 0px);\n    }\n\n    .mobile-drawer {\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 200px;\n      background: #333;\n      transform: translate(100%, 0);\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\n      z-index: 899;\n      ul {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n        height: ', ';\n        list-style-type: none;\n        margin: 0;\n        padding-left: 15px;\n        border-bottom: 1px solid #222;\n        color: #fff;\n        li {\n          display: inline;\n          cursor: pointer;\n          padding: 5px;\n          margin-right: 5px;\n          border-radius: 5px;\n          &:hover {\n            background-color: #222;\n          }\n        }\n      }\n      a {\n        display: block;\n        cursor: pointer;\n        text-align: right;\n        padding: 30px 15px;\n        border-radius: 5px;\n        color: #fff;\n        text-decoration: none;\n        &:hover {\n          background-color: #222;\n        }\n      }\n    }\n    input:checked ~ .mobile-drawer {\n      transform: translate(0%, 0);\n    }\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  var children = _ref.children,
      languages = _ref.languages,
      changeLanguage = _ref.changeLanguage;
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
      _react2.default.createElement(
        'ul',
        null,
        languages.map(function (lang) {
          return _react2.default.createElement(
            'li',
            { onClick: function onClick() {
                return changeLanguage(lang.id);
              }, key: lang.id },
            lang.name
          );
        } // eslint-disable-line
        )
      ),
      children
    )
  );
};

NavSmall.propTypes = {
  children: _propTypes2.default.node.isRequired,
  changeLanguage: _propTypes2.default.func,
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    name: _propTypes2.default.string
  })).isRequired
};

exports.default = NavSmall;