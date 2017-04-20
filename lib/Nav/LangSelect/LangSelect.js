'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: rgba(0,0,0, 0.15);\n'], ['\n  background: rgba(0,0,0, 0.15);\n']);

exports.default = LangSelect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LangButton = _styledComponents2.default.button(_templateObject);

function LangSelect(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.languages.map(function (lang) {
      return _react2.default.createElement(
        LangButton,
        { onClick: props.onClick(lang) },
        lang.displayName
      );
    })
  );
}

// TODO: proper object shape validation

LangSelect.propTypes = {
  languages: _propTypes2.default.arrayof(_propTypes2.default.object).isRequired,
  onClick: _propTypes2.default.func.isRequired
};