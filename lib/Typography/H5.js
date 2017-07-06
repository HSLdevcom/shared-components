'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Typography/H5.js';var _templateObject=_taggedTemplateLiteral(['\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: -0.2px;\n'],['\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: -0.2px;\n']);var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _Text=require('./Text');var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}


var StyledText=_Text2.default.extend(_templateObject);





var H5=function H5(_ref){var children=_ref.children,className=_ref.className;return(
_react2.default.createElement(StyledText,{className:className,__source:{fileName:_jsxFileName,lineNumber:13}},children.toUpperCase()));};


H5.propTypes={
className:_propTypes2.default.string,
children:_propTypes2.default.string};exports.default=


H5;