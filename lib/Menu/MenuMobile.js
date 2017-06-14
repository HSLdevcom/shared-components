'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 2px;\n  margin: 0;\n'], ['\n  height: 2px;\n  margin: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  svg {\n    fill: currentColor;\n  }\n  ', ' {\n    font-size: 1.5rem;\n    ', ' {\n      width: 3.75rem;\n      height: 3.25rem;\n    }\n  }\n  .children {\n    font-size: 1.75rem;\n    padding: 3rem 0;\n    .child {\n      width: 50%;\n      &:not(:last-child) {\n        border-right: 2px solid ', ';\n      }\n    }\n  }\n'], ['\n  ', '\n  ', '\n  svg {\n    fill: currentColor;\n  }\n  ', ' {\n    font-size: 1.5rem;\n    ', ' {\n      width: 3.75rem;\n      height: 3.25rem;\n    }\n  }\n  .children {\n    font-size: 1.75rem;\n    padding: 3rem 0;\n    .child {\n      width: 50%;\n      &:not(:last-child) {\n        border-right: 2px solid ', ';\n      }\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 0.75rem 0;\n'], ['\n  padding: 0.75rem 0;\n']),
    _templateObject4 = _taggedTemplateLiteral([''], ['']);

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

var _IconWithText = require('../IconWithText/IconWithText');

var _IconWithText2 = _interopRequireDefault(_IconWithText);

var _Div = require('../Div/Div');

var _Div2 = _interopRequireDefault(_Div);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Separator = _Separator.MenuSeparator.extend(_templateObject);

var StyledDiv = _Div2.default.extend(_templateObject2, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
}, _LangSelect2.default, _LangSelect.LangButton, function (props) {
  return props.theme.menuBorder;
});
var StyledFlexWrapper = _FlexWrapper2.default.extend(_templateObject3);

var MenuMobile = function MenuMobile(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      className = _ref.className,
      children = _ref.children,
      items = _ref.items;
  return _react2.default.createElement(
    StyledDiv,
    { className: className },
    _react2.default.createElement(Separator, null),
    _react2.default.createElement(
      StyledFlexWrapper,
      null,
      _react2.default.createElement(_LangSelect2.default, {
        languages: languages,
        selectedLanguage: selectedLanguage,
        changeLanguage: changeLanguage
      }),
      _react2.default.createElement(_Icons.Search, { height: '2rem' })
    ),
    _react2.default.createElement(Separator, null),
    items,
    _react2.default.createElement(
      _FlexWrapper2.default,
      { className: 'children' },
      (0, _utils.addClass)(children, 'child')
    )
  );
};

var defaultChildren = [_react2.default.createElement(_IconWithText2.default, {
  icon: _react2.default.createElement(_Icons.TravelCard, { height: '3.5rem' }),
  text: 'Matkakortti',
  textPosition: 'Bottom',
  key: 'travelcard'
}), _react2.default.createElement(_IconWithText2.default, {
  icon: _react2.default.createElement(_Icons.SignIn, { height: '3.5rem' }),
  text: 'Kirjaudu',
  textPosition: 'Bottom',
  key: 'signin'
})];

MenuMobile.defaultProps = {
  children: defaultChildren
};

MenuMobile.propTypes = {
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired
  })),
  changeLanguage: _propTypes2.default.func.isRequired,
  selectedLanguage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  items: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(MenuMobile)(_templateObject4);