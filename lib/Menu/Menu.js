'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .lang-select {\n    .small {\n      display: none;\n    }\n  }\n  align-self: flex-end;\n  svg {\n    fill: currentColor;\n  }\n  .bottom {\n    height: 4rem;\n    align-items: flex-start;\n    .child svg {\n      height: 2rem;\n    }\n  }\n\n  ', '\n  ', '\n  .child:not(:last-child) {\n    margin-right: 2rem;\n  }\n  ', '\n  ', '\n'], ['\n  .lang-select {\n    .small {\n      display: none;\n    }\n  }\n  align-self: flex-end;\n  svg {\n    fill: currentColor;\n  }\n  .bottom {\n    height: 4rem;\n    align-items: flex-start;\n    .child svg {\n      height: 2rem;\n    }\n  }\n\n  ', '\n  ', '\n  .child:not(:last-child) {\n    margin-right: 2rem;\n  }\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      svg {\n        height: 1.75rem;\n      }\n      .child:not(:last-child) {\n        margin-right: 0rem;\n      }\n      .bottom {\n        justify-content: flex-end;\n        ', ' {\n          .text {\n            display: none;\n          }\n        }\n      }\n    '], ['\n      svg {\n        height: 1.75rem;\n      }\n      .child:not(:last-child) {\n        margin-right: 0rem;\n      }\n      .bottom {\n        justify-content: flex-end;\n        ', ' {\n          .text {\n            display: none;\n          }\n        }\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      .top, .bottom {\n        justify-content: space-between;\n      }\n      .child:not(:last-child) {\n        margin-right: 1rem;\n      }\n      .lang-select {\n        width: auto;\n        .large {\n          display: none;\n        }\n        .small {\n          display: block;\n        }\n      }\n    '], ['\n      .top, .bottom {\n        justify-content: space-between;\n      }\n      .child:not(:last-child) {\n        margin-right: 1rem;\n      }\n      .lang-select {\n        width: auto;\n        .large {\n          display: none;\n        }\n        .small {\n          display: block;\n        }\n      }\n    ']),
    _templateObject4 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../utils');

var _LangSelect = require('../LangSelect');

var _LangSelect2 = _interopRequireDefault(_LangSelect);

var _Icons = require('../Icons');

var _Separator = require('../Separator/Separator');

var _Span = require('../Span');

var _Span2 = _interopRequireDefault(_Span);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

var _Wrapper = require('../Wrapper');

var _IconWithText = require('../IconWithText/IconWithText');

var _IconWithText2 = _interopRequireDefault(_IconWithText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _Div2.default.extend(_templateObject, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
}, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject2, _IconWithText2.default);
}, function (props) {
  return props.theme.Media && props.theme.Media.medium(_templateObject3);
});

var Menu = function Menu(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    StyledDiv,
    { className: className },
    _react2.default.createElement(
      _Wrapper.Flex,
      { className: 'top' },
      _react2.default.createElement(_Icons.Search, { height: '2rem', width: '2rem' }),
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
          changeLanguage: changeLanguage
        })
      )
    ),
    _react2.default.createElement(_Separator.MenuSeparator, null),
    _react2.default.createElement(
      _Wrapper.Flex,
      { className: 'bottom' },
      (0, _utils.addClass)(children, 'child')
    )
  );
};

var defaultChildren = [_react2.default.createElement(_IconWithText2.default, {
  icon: _react2.default.createElement(_Icons.TravelCard, { height: '3.5rem' }),
  text: 'Matkakortti',
  textPosition: 'Right',
  key: 'travelcard'
}), _react2.default.createElement(_IconWithText2.default, {
  icon: _react2.default.createElement(_Icons.SignIn, { height: '3.5rem' }),
  text: 'Kirjaudu',
  textPosition: 'Right',
  key: 'signin'
})];

Menu.defaultProps = {
  children: defaultChildren
};

Menu.propTypes = {
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired
  })),
  changeLanguage: _propTypes2.default.func.isRequired,
  selectedLanguage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Menu)(_templateObject4);