'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/DropdownMenu/DropdownContainerMobile.js';var _templateObject=_taggedTemplateLiteral(['\n  white-space: normal;\n  font-size: 1rem;\n  padding: 1.5rem 0;\n  ',' {\n    color: #000000;\n  }\n  ',' {\n    color: ',';\n  }\n\n  ',' {\n    padding: 0 2rem !important;\n    &:not(:last-child) {\n      margin-bottom: 1.5rem;\n    }\n    .icon {\n      display: none;\n    }\n  }\n  > *:not(:last-child) {\n    margin-bottom: 2rem;\n  }\n'],['\n  white-space: normal;\n  font-size: 1rem;\n  padding: 1.5rem 0;\n  ',' {\n    color: #000000;\n  }\n  ',' {\n    color: ',';\n  }\n\n  ',' {\n    padding: 0 2rem !important;\n    &:not(:last-child) {\n      margin-bottom: 1.5rem;\n    }\n    .icon {\n      display: none;\n    }\n  }\n  > *:not(:last-child) {\n    margin-bottom: 2rem;\n  }\n']),_templateObject2=_taggedTemplateLiteral([''],['']);var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _styledComponents=require('styled-components');var _styledComponents2=_interopRequireDefault(_styledComponents);

var _Div=require('../Div');var _Div2=_interopRequireDefault(_Div);
var _List=require('../List');var _List2=_interopRequireDefault(_List);
var _IconWithText=require('../IconWithText/IconWithText');var _IconWithText2=_interopRequireDefault(_IconWithText);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var StyledDiv=_Div2.default.extend(_templateObject,_List2.default,_List.ListItem,







function(props){return props.theme.primary;},_IconWithText2.default);
















var DropdownContainer=function DropdownContainer(_ref){var
className=_ref.className,
children=_ref.children;return(
_react2.default.createElement(StyledDiv,{className:className,__source:{fileName:_jsxFileName,lineNumber:37}},
children));};



DropdownContainer.propTypes={
className:_propTypes2.default.string,
children:_propTypes2.default.node};exports.default=


(0,_styledComponents2.default)(DropdownContainer)(_templateObject2);