'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ' {\n\n  }\n  ', ' {\n    padding: 0;\n    list-style: none;\n    columns: 2;\n    li::before {\n      padding-right: 0.75rem;\n      content: "\u25CB";\n      color: ', ';\n    }\n  }\n'], ['\n  ', ' {\n\n  }\n  ', ' {\n    padding: 0;\n    list-style: none;\n    columns: 2;\n    li::before {\n      padding-right: 0.75rem;\n      content: "\u25CB";\n      color: ', ';\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Ul = _styledComponents2.default.ul(_templateObject);
var H3 = _styledComponents2.default.h3(_templateObject);

var StyledDiv = _Div2.default.extend(_templateObject2, H3, Ul, function (props) {
  return props.theme.listItemMarker;
});

var List = function List(_ref) {
  var header = _ref.header,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    StyledDiv,
    { className: className },
    _react2.default.createElement(
      H3,
      null,
      header
    ),
    _react2.default.createElement(
      Ul,
      null,
      children
    )
  );
};

List.propTypes = {
  header: _propTypes2.default.string,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

exports.default = (0, _styledComponents2.default)(List)(_templateObject);