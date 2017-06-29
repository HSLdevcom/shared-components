'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &:not(:last-child) {\n    margin-bottom: 0.5rem;\n  }\n  .top {\n    font-size: 13px;\n  }\n  .bottom {\n    font-size: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  ', ' {\n    object-fit: contain;\n    height: 120px;\n    width: 180px;\n  }\n'], ['\n  &:not(:last-child) {\n    margin-bottom: 0.5rem;\n  }\n  .top {\n    font-size: 13px;\n  }\n  .bottom {\n    font-size: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  ', ' {\n    object-fit: contain;\n    height: 120px;\n    width: 180px;\n  }\n']);

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

var StyledLi = _styledComponents2.default.li(_templateObject2, Image);

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
      _Span2.default,
      { className: 'top' },
      category,
      ' - ',
      (0, _moment2.default)(timestamp).calendar()
    ),
    _react2.default.createElement(
      _Div2.default,
      { className: 'bottom' },
      title,
      _react2.default.createElement(Image, { src: image, alt: 'news image' })
    )
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