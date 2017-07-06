'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Typography/Quote.js';var _templateObject=_taggedTemplateLiteral(['\n  border-style: solid;\n  border-left-width: 3px;\n  border-left-color: #b7b7b7;\n'],['\n  border-style: solid;\n  border-left-width: 3px;\n  border-left-color: #b7b7b7;\n']),_templateObject2=_taggedTemplateLiteral(['\n  font-size: 20px;\n  font-style: italic;\n  line-height: 25;\n  font-weight: 300;\n  padding: 3px 0px 3px 20px;\n  font-family: "Gotham XNarrow SSm A, Gotham XNarrow SSm B";\n'],['\n  font-size: 20px;\n  font-style: italic;\n  line-height: 25;\n  font-weight: 300;\n  padding: 3px 0px 3px 20px;\n  font-family: "Gotham XNarrow SSm A, Gotham XNarrow SSm B";\n']);var _primitives=require('styled-components/primitives');var _primitives2=_interopRequireDefault(_primitives);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _Text=require('./Text');var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var View=_primitives2.default.View(_templateObject);





var Quote=_Text2.default.extend(_templateObject2);








var QuoteBlock=function QuoteBlock(_ref){var className=_ref.className,children=_ref.children;return(
_react2.default.createElement(View,{className:className,__source:{fileName:_jsxFileName,lineNumber:23}},
_react2.default.createElement(Quote,{__source:{fileName:_jsxFileName,lineNumber:24}},
children)));};




QuoteBlock.propTypes={
className:_propTypes2.default.string,
children:_propTypes2.default.node};exports.default=


QuoteBlock;