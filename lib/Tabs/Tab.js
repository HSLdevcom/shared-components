'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Tabs/Tab.js';var _templateObject=_taggedTemplateLiteral(['\n  cursor: pointer;\n  background: #EEF1F3;\n  border-right: solid 1px #CFCFCF;\n  border-bottom: solid 1px #CFCFCF;\n  &:first-child {\n    ','\n  }\n  &:last-child {\n    border-right: none;\n    ','\n  }\n  ','\n  border-top: none;\n  flex: 1;\n  > ',' {\n    > * {\n      display: flex;\n      align-items: center;\n      svg {\n        padding-right: 1rem;\n        fill: currentColor;\n      }\n    }\n    color: #017AC9;\n    font-size: 1.1rem;\n    text-transform: uppercase;\n    margin: 0 2rem 1rem 2rem;\n    padding-top: 0.75rem;\n    display: flex;\n    justify-content: center;\n    border-top: 4px solid transparent;\n    ','\n    ','\n  }\n'],['\n  cursor: pointer;\n  background: #EEF1F3;\n  border-right: solid 1px #CFCFCF;\n  border-bottom: solid 1px #CFCFCF;\n  &:first-child {\n    ','\n  }\n  &:last-child {\n    border-right: none;\n    ','\n  }\n  ','\n  border-top: none;\n  flex: 1;\n  > ',' {\n    > * {\n      display: flex;\n      align-items: center;\n      svg {\n        padding-right: 1rem;\n        fill: currentColor;\n      }\n    }\n    color: #017AC9;\n    font-size: 1.1rem;\n    text-transform: uppercase;\n    margin: 0 2rem 1rem 2rem;\n    padding-top: 0.75rem;\n    display: flex;\n    justify-content: center;\n    border-top: 4px solid transparent;\n    ','\n    ','\n  }\n']),_templateObject2=_taggedTemplateLiteral([''],['']);var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _styledComponents=require('styled-components');var _styledComponents2=_interopRequireDefault(_styledComponents);

var _Button=require('../Button/Button');
var _Span=require('../Span');var _Span2=_interopRequireDefault(_Span);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var StyledBtn=_Button.ButtonNoStyle.extend(_templateObject,





function(props){return props.rounded&&'border-radius: 6px 0 0 0;';},



function(props){return props.rounded&&'border-radius: 0 6px 0 0;';},

function(props){return props.active&&'\n    border-bottom: 1px solid transparent;\n    background: #FFFFFF;\n    ';},_Span2.default,























function(props){return props.active&&'\n      border-top: solid 4px #017AC9;\n      color: #000000;\n    ';},



function(props){return props.disabled&&'color: #B7B7B7;';});



StyledBtn.propTypes={
className:_propTypes2.default.string,
active:_propTypes2.default.bool,
disabled:_propTypes2.default.bool,
rounded:_propTypes2.default.bool};


var Tab=function Tab(_ref){var
header=_ref.header,
className=_ref.className,
active=_ref.active,
onClick=_ref.onClick,
disabled=_ref.disabled,
rounded=_ref.rounded;return(

_react2.default.createElement(StyledBtn,{
className:className,
onClick:onClick,
active:active,
disabled:disabled,
rounded:rounded,__source:{fileName:_jsxFileName,lineNumber:67}},

_react2.default.createElement(_Span2.default,{__source:{fileName:_jsxFileName,lineNumber:74}},header)));};




Tab.propTypes={
header:_propTypes2.default.node.isRequired,

children:_propTypes2.default.node.isRequired,
className:_propTypes2.default.string,
active:_propTypes2.default.bool,
onClick:_propTypes2.default.func,
disabled:_propTypes2.default.bool,
rounded:_propTypes2.default.bool};exports.default=


(0,_styledComponents2.default)(Tab)(_templateObject2);