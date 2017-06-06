'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .lang-select {\n    height: 1.75rem;\n    width: 7rem;\n    .small {\n      display: none;\n    }\n  }\n  ', '\n  ', '\n'], ['\n  .lang-select {\n    height: 1.75rem;\n    width: 7rem;\n    .small {\n      display: none;\n    }\n  }\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _LangSelect = require('../LangSelect');

var _LangSelect2 = _interopRequireDefault(_LangSelect);

var _Icons = require('../Icons');

var _Separator = require('../Separator/Separator');

var _Span = require('../Span/Span');

var _Span2 = _interopRequireDefault(_Span);

var _FlexWrapper = require('../FlexWrapper/FlexWrapper');

var _FlexWrapper2 = _interopRequireDefault(_FlexWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
});

var Menu = function Menu(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      langSelectOpen = _ref.langSelectOpen,
      searchIcon = _ref.searchIcon,
      iconFill = _ref.iconFill,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    Div,
    { className: className },
    _react2.default.createElement(
      _FlexWrapper2.default,
      { className: 'top' },
      _react2.default.createElement(_Icons.Search, { fill: iconFill, height: searchIcon.height, width: searchIcon.width }),
      _react2.default.createElement(
        _Span2.default,
        { className: 'lang-select' },
        _react2.default.createElement(_LangSelect2.default, {
          className: 'large',
          languages: languages,
          selectedLanguage: selectedLanguage,
          changeLanguage: changeLanguage
        }),
        _react2.default.createElement(_LangSelect.LangSelectSmall, {
          className: 'small',
          languages: languages,
          selectedLanguage: selectedLanguage,
          changeLanguage: changeLanguage,
          open: langSelectOpen,
          fill: iconFill
        })
      )
    ),
    _react2.default.createElement(_Separator.MenuSeparator, null),
    _react2.default.createElement(
      _FlexWrapper2.default,
      { className: 'bottom' },
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
    width: _propTypes2.default.string.isRequired
  }).isRequired,
  iconFill: _propTypes2.default.string.isRequired,
  langSelectOpen: _propTypes2.default.bool,
  className: _react2.default.PropTypes.string,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Menu)(_templateObject2);