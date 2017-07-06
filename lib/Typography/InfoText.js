'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.InfoTextNative=undefined;var _templateObject=_taggedTemplateLiteral(['\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16;\n  color: #8c4799;\n  ','\n'],['\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16;\n  color: #8c4799;\n  ','\n']),_templateObject2=_taggedTemplateLiteral(['\n  font-size: 16px;\n  line-height: 16px;\n  ','\n  ','\n'],['\n  font-size: 16px;\n  line-height: 16px;\n  ','\n  ','\n']),_templateObject3=_taggedTemplateLiteral(['\n      font-size: 14px;\n      line-height: 16;\n      ','\n    '],['\n      font-size: 14px;\n      line-height: 16;\n      ','\n    ']);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _Text=require('./Text');var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var InfoTextNative=_Text2.default.extend(_templateObject,




function(props){return props.large&&'\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 16;\n    color: #ff5200;\n  ';});







var InfoText=InfoTextNative.extend(_templateObject2,


function(props){return props.large&&'\n    font-size: 18px;\n    line-height: 16;\n  ';},



function(props){return(
props.theme.Media&&
props.theme.Media.small(_templateObject3,


props.large&&'\n        font-size: 16px;\n        line-height: 16;\n      '));});







InfoText.propTypes={
className:_propTypes2.default.string,
large:_propTypes2.default.bool};exports.default=


InfoText;exports.

InfoTextNative=InfoTextNative;