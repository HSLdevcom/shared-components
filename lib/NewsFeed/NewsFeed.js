'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ' {\n    padding: 0;\n    list-style: none;\n  }\n  ', '.show-more {\n    width: 15rem;\n    height: 2.5rem;\n    font-size: 1rem;\n  }\n'], ['\n  ', ' {\n    padding: 0;\n    list-style: none;\n  }\n  ', '.show-more {\n    width: 15rem;\n    height: 2.5rem;\n    font-size: 1rem;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Ul = _styledComponents2.default.ul(_templateObject);

var StyledDiv = _Div2.default.extend(_templateObject2, Ul, _Button2.default);

var NewsFeed = function NewsFeed(_ref) {
  var more = _ref.more,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    StyledDiv,
    { className: className },
    _react2.default.createElement(
      Ul,
      null,
      children
    ),
    _react2.default.createElement(
      _Div2.default,
      null,
      _react2.default.createElement(
        _Button2.default,
        { className: 'show-more', onClick: more.action },
        more.text
      )
    )
  );
};

NewsFeed.propTypes = {
  more: _propTypes2.default.shape({
    text: _propTypes2.default.string.isRequired,
    action: _propTypes2.default.func.isRequired
  }),
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

exports.default = (0, _styledComponents2.default)(NewsFeed)(_templateObject);