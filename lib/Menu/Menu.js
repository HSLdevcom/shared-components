'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n'], ['\n  display: flex;\n  justify-content: space-between;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _LangSelect = require('../LangSelect/LangSelect');

var _LangSelect2 = _interopRequireDefault(_LangSelect);

var _Icons = require('../Icons');

var _Separator = require('../Separator/Separator');

var _Span = require('../Span/Span');

var _Span2 = _interopRequireDefault(_Span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject);

var FlexWrapper = Div.extend(_templateObject2);

var Menu = function Menu(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      searchIcon = _ref.searchIcon,
      langSelect = _ref.langSelect,
      children = _ref.children;
  return _react2.default.createElement(
    Div,
    null,
    _react2.default.createElement(
      FlexWrapper,
      null,
      _react2.default.createElement(_Icons.Search, { fill: searchIcon.fill, height: searchIcon.height, width: searchIcon.width }),
      _react2.default.createElement(
        _Span2.default,
        { style: { height: langSelect.height, width: langSelect.width } },
        _react2.default.createElement(_LangSelect2.default, {
          languages: languages,
          selectedLanguage: selectedLanguage,
          changeLanguage: changeLanguage
        })
      )
    ),
    _react2.default.createElement(_Separator.MenuSeparator, null),
    _react2.default.createElement(
      FlexWrapper,
      null,
      children
    )
  );
};

Menu.propTypes = {
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired
  })).isRequired,
  changeLanguage: _propTypes2.default.func.isRequired,
  selectedLanguage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  searchIcon: _propTypes2.default.shape({
    height: _propTypes2.default.string.isRequired,
    width: _propTypes2.default.string.isRequired,
    fill: _propTypes2.default.string.isRequired
  }).isRequired,
  langSelect: _propTypes2.default.shape({
    height: _propTypes2.default.string.isRequired,
    width: _propTypes2.default.string.isRequired
  }).isRequired,
  children: _propTypes2.default.node
};

exports.default = Menu;