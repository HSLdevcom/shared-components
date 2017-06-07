'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ' {\n    display: block;\n  }\n  padding: 0;\n  ', '\n  ', '\n  .selected-language {\n    svg {\n      margin-left: 0.25rem;\n      fill: currentColor;\n    }\n  }\n'], ['\n  ', ' {\n    display: block;\n  }\n  padding: 0;\n  ', '\n  ', '\n  .selected-language {\n    svg {\n      margin-left: 0.25rem;\n      fill: currentColor;\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  position: absolute;\n  border-radius: 3px;\n  ', '\n  ', ' {\n    &:hover {\n\n    }\n  }\n'], ['\n  ', '\n  position: absolute;\n  border-radius: 3px;\n  ', '\n  ', ' {\n    &:hover {\n\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = require('../Icons');

var _LangButton = require('./LangButton');

var _LangButton2 = _interopRequireDefault(_LangButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject, _LangButton2.default, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
});

var SelectWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.menuBorder && 'border: 1px solid ' + props.theme.menuBorder + ';';
}, _LangButton2.default);

var LangSelectSmall = function LangSelectSmall(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      open = _ref.open,
      className = _ref.className;
  return _react2.default.createElement(
    Div,
    { className: className },
    _react2.default.createElement(
      _LangButton2.default,
      { className: 'selected-language' },
      languages.find(function (lang) {
        return lang.id === selectedLanguage;
      }).name,
      _react2.default.createElement(_Icons.ArrowDown, { height: '0.75rem', width: '0.75rem' })
    ),
    open && _react2.default.createElement(
      SelectWrapper,
      { className: 'select-wrapper' },
      languages.filter(function (lang) {
        return lang.id !== selectedLanguage;
      }).map(function (lang) {
        return _react2.default.createElement(
          _LangButton2.default,
          {
            key: lang.id,
            onClick: function onClick() {
              changeLanguage(lang.id);
            }
          },
          lang.name
        );
      })
    )
  );
};

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
  open: _propTypes2.default.bool,
  className: _propTypes2.default.string
};
exports.default = (0, _styledComponents2.default)(LangSelectSmall)(_templateObject3);