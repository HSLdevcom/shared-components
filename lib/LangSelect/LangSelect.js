'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 3px;\n  border: 0;\n  outline: 0;\n  background: 0;\n  padding: 0 0.5rem;\n  color: inherit;\n  font: inherit;\n  &:hover {\n    cursor: pointer;\n  }\n  ', '\n'], ['\n  border-radius: 3px;\n  border: 0;\n  outline: 0;\n  background: 0;\n  padding: 0 0.5rem;\n  color: inherit;\n  font: inherit;\n  &:hover {\n    cursor: pointer;\n  }\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LangButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.active && props.theme.radioBtnActive && 'background-color: ' + props.theme.radioBtnActive + ';';
});

var Div = _styledComponents2.default.div(_templateObject2);

var LangSelect = function LangSelect(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      className = _ref.className;
  return _react2.default.createElement(
    Div,
    { className: className },
    languages.map(function (lang) {
      return _react2.default.createElement(
        LangButton,
        {
          key: lang.id,
          active: selectedLanguage === lang.id,
          onClick: function onClick() {
            changeLanguage(lang.id);
          }
        },
        lang.name
      );
    })
  );
};

LangSelect.propTypes = {
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired
  })).isRequired,
  changeLanguage: _propTypes2.default.func.isRequired,
  selectedLanguage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string
};

exports.default = (0, _styledComponents2.default)(LangSelect)(_templateObject3);