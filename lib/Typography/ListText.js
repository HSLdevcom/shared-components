'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.ListTextNative=undefined;var _templateObject=_taggedTemplateLiteral(['\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16;\n'],['\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16;\n']),_templateObject2=_taggedTemplateLiteral(['\n  font-size: 16px;\n  line-height: 16;\n  ','\n'],['\n  font-size: 16px;\n  line-height: 16;\n  ','\n']),_templateObject3=_taggedTemplateLiteral(['\n      font-size: 14px;\n      line-height: 16;\n    '],['\n      font-size: 14px;\n      line-height: 16;\n    ']);var _Text=require('./Text');var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var ListTextNative=_Text2.default.extend(_templateObject);





var ListText=ListTextNative.extend(_templateObject2,


function(props){return(
props.theme.Media&&
props.theme.Media.small(_templateObject3));});exports.default=






ListText;exports.

ListTextNative=ListTextNative;