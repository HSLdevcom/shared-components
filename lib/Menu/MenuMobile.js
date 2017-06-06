'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 2px;\n'], ['\n  height: 2px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ' {\n    font-size: 1.5rem;\n  }\n  .children {\n    font-size: 2rem;\n  }\n'], ['\n  ', ' {\n    font-size: 1.5rem;\n  }\n  .children {\n    font-size: 2rem;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']);

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

var _FlexWrapper = require('../FlexWrapper/FlexWrapper');

var _FlexWrapper2 = _interopRequireDefault(_FlexWrapper);

var _Div = require('../Div/Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Separator = _Separator.MenuSeparator.extend(_templateObject);

var StyledDiv = _Div2.default.extend(_templateObject2, _LangSelect2.default);

var MenuMobile = function MenuMobile(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      searchIcon = _ref.searchIcon,
      iconFill = _ref.iconFill,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    StyledDiv,
    { className: className },
    _react2.default.createElement(Separator, null),
    _react2.default.createElement(
      _FlexWrapper2.default,
      null,
      _react2.default.createElement(_LangSelect2.default, {
        languages: languages,
        selectedLanguage: selectedLanguage,
        changeLanguage: changeLanguage
      }),
      _react2.default.createElement(_Icons.Search, { fill: iconFill, height: searchIcon.height, width: searchIcon.width })
    ),
    _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(
        _Div2.default,
        { className: 'children' },
        _react2.default.createElement(Separator, null),
        child
      );
    })
  );
};

MenuMobile.propTypes = {
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
  className: _react2.default.PropTypes.string,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(MenuMobile)(_templateObject3);