'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: start;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.25rem 1.25rem 1.75rem;\n  border-bottom: 1px solid #dddddd;\n  ', ' {\n    display: flex;\n    align-self: stretch;\n    flex-direction: column;\n    .top {\n      font-size: 13px;\n      color: ', ';\n      .category {\n        text-transform: uppercase;\n      }\n    }\n    .bottom {\n      margin-top: 1rem;\n      padding-bottom: 0.75rem;\n      font-size: 28px;\n      color: ', '\n    }\n  }\n  ', ' {\n    object-fit: contain;\n    height: 7.5rem;\n    width: 11.25rem;\n  }\n'], ['\n  text-align: start;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.25rem 1.25rem 1.75rem;\n  border-bottom: 1px solid #dddddd;\n  ', ' {\n    display: flex;\n    align-self: stretch;\n    flex-direction: column;\n    .top {\n      font-size: 13px;\n      color: ', ';\n      .category {\n        text-transform: uppercase;\n      }\n    }\n    .bottom {\n      margin-top: 1rem;\n      padding-bottom: 0.75rem;\n      font-size: 28px;\n      color: ', '\n    }\n  }\n  ', ' {\n    object-fit: contain;\n    height: 7.5rem;\n    width: 11.25rem;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

var _Span = require('../Span');

var _Span2 = _interopRequireDefault(_Span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = _styledComponents2.default.img(_templateObject);

var TextContainer = _Div2.default.extend(_templateObject);

var StyledLi = _styledComponents2.default.li(_templateObject2, TextContainer, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.primary;
}, Image);

var NewsFeedItem = function NewsFeedItem(_ref) {
  var category = _ref.category,
      timestamp = _ref.timestamp,
      title = _ref.title,
      image = _ref.image,
      className = _ref.className;
  return _react2.default.createElement(
    StyledLi,
    { className: className },
    _react2.default.createElement(
      TextContainer,
      { className: 'text-container' },
      _react2.default.createElement(
        _Span2.default,
        { className: 'top' },
        _react2.default.createElement(
          _Span2.default,
          { className: 'category' },
          category
        ),
        _react2.default.createElement(
          _Span2.default,
          null,
          ' \u2014 '
        ),
        _react2.default.createElement(
          _Span2.default,
          null,
          (0, _moment2.default)(timestamp).calendar()
        )
      ),
      _react2.default.createElement(
        _Span2.default,
        { className: 'bottom' },
        title
      )
    ),
    image && _react2.default.createElement(Image, { src: image, alt: 'news image' })
  );
};

NewsFeedItem.propTypes = {
  category: _propTypes2.default.string.isRequired,
  timestamp: _propTypes2.default.instanceOf(Date).isRequired,
  title: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string,
  className: _propTypes2.default.string
};

exports.default = (0, _styledComponents2.default)(NewsFeedItem)(_templateObject);