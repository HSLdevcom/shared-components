'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  list-style: none;\n  columns: 2;\n  li::before {\n    padding-right: 1.25rem;\n    content: "\u25CB";\n    color: ', ';\n  }\n'], ['\n  list-style: none;\n  columns: 2;\n  li::before {\n    padding-right: 1.25rem;\n    content: "\u25CB";\n    color: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = _styledComponents2.default.ul(_templateObject, function (props) {
  return props.theme.listItemMarker;
});

exports.default = List;