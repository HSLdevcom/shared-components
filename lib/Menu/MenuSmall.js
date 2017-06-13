'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n  .icon {\n    line-height: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n  }\n  .select-wrapper {\n    top: 3.5rem;\n  }\n\n  ', '\n\n  svg {\n    fill: currentColor;\n  }\n  > * {\n    ', '\n    height: 100%;\n    display: flex;\n    padding: 0 0.75rem;\n  }\n  ', '\n  ', '\n'], ['\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n  .icon {\n    line-height: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n  }\n  .select-wrapper {\n    top: 3.5rem;\n  }\n\n  ', '\n\n  svg {\n    fill: currentColor;\n  }\n  > * {\n    ', '\n    height: 100%;\n    display: flex;\n    padding: 0 0.75rem;\n  }\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      .icon svg, .search-icon {\n        height: 1.75rem;\n      }\n    '], ['\n      .icon svg, .search-icon {\n        height: 1.75rem;\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  .text {\n    display: none;\n  }\n  ', '\n'], ['\n  .text {\n    display: none;\n  }\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n      display: none;\n    '], ['\n      display: none;\n    ']),
    _templateObject5 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _LangSelect = require('../LangSelect');

var _Icons = require('../Icons');

var _Wrapper = require('../Wrapper');

var _IconWithText = require('../IconWithText/IconWithText');

var _IconWithText2 = _interopRequireDefault(_IconWithText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFlex = _Wrapper.Flex.extend(_templateObject, function (props) {
  return props.theme.Media && props.theme.Media.large(_templateObject2);
}, function (props) {
  return props.theme.menuBorder && 'border-left: 1px solid ' + props.theme.menuBorder + ';';
}, function (props) {
  return props.theme.background && 'background: ' + props.theme.background + ';';
}, function (props) {
  return props.theme.primaryText && 'color: ' + props.theme.primaryText + ';';
});

var StyledIWT = _IconWithText2.default.extend(_templateObject3, function (props) {
  return props.theme.Media && props.theme.Media.medium(_templateObject4);
});

var MenuSmall = function MenuSmall(_ref) {
  var languages = _ref.languages,
      changeLanguage = _ref.changeLanguage,
      selectedLanguage = _ref.selectedLanguage,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    StyledFlex,
    { className: className },
    children,
    _react2.default.createElement(_Icons.Search, {
      className: 'search-icon',
      height: '2rem',
      width: '2rem'
    }),
    _react2.default.createElement(_LangSelect.LangSelectSmall, {
      languages: languages,
      selectedLanguage: selectedLanguage,
      changeLanguage: changeLanguage
    })
  );
};

var defaultChildren = [_react2.default.createElement(StyledIWT, {
  icon: _react2.default.createElement(_Icons.SignIn, { height: '2rem' }),
  text: 'Matkakortti',
  textPosition: 'Right',
  key: 'signin'
}), _react2.default.createElement(StyledIWT, {
  icon: _react2.default.createElement(_Icons.TravelCard, { height: '2rem' }),
  text: 'Kirjaudu',
  textPosition: 'Right',
  key: 'travelcard'
})];

MenuSmall.defaultProps = {
  children: defaultChildren
};

MenuSmall.propTypes = {
  languages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired
  })),
  changeLanguage: _propTypes2.default.func.isRequired,
  selectedLanguage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(MenuSmall)(_templateObject5);