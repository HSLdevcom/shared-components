'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _templateObject=_taggedTemplateLiteral(['\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 16px;\n  color: #8c4799;\n  ','\n  text-align: left;\n  ','\n'],['\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 16px;\n  color: #8c4799;\n  ','\n  text-align: left;\n  ','\n']),_templateObject2=_taggedTemplateLiteral(['\n      font-size: 14px;\n      line-height: calc(1.14 * 14px);\n      ','\n    '],['\n      font-size: 14px;\n      line-height: calc(1.14 * 14px);\n      ','\n    ']);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _Text=require('./Text');var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var InfoText=_Text2.default.extend(_templateObject,




function(props){return props.large&&'\n    font-weight: 500;\n    font-size: 18px;\n    line-height: calc(0.89 * 18px);\n    color: #ff5200;\n  ';},






function(props){return(
props.theme.Media&&
props.theme.Media.small(_templateObject2,


props.large&&'\n        font-size: 16px;\n        line-height: 16px;\n      '));});







InfoText.propTypes={
className:_propTypes2.default.string,
large:_propTypes2.default.bool};exports.default=


InfoText;