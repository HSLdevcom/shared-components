'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  ', '\n  ', '\n'], ['\n  height: 100%;\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FlexWrapper = require('../FlexWrapper/FlexWrapper');

var _FlexWrapper2 = _interopRequireDefault(_FlexWrapper);

var _LangButton = require('./LangButton');

var _LangButton2 = _interopRequireDefault(_LangButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFlexWrapper = _FlexWrapper2.default.extend(_templateObject, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
});

var LangSelect = function LangSelect(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      className = _ref.className;
  return _react2.default.createElement(
    StyledFlexWrapper,
    { className: className },
    languages.map(function (lang) {
      return _react2.default.createElement(
        _LangButton2.default,
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

exports.default = (0, _styledComponents2.default)(LangSelect)(_templateObject2);