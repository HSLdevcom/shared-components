'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/DropdownMenu/Mask.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['\n  background: black;\n  opacity: 0.6;\n  height: ','px;\n'],['\n  background: black;\n  opacity: 0.6;\n  height: ','px;\n']),_templateObject2=_taggedTemplateLiteral([''],['']);var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _styledComponents=require('styled-components');var _styledComponents2=_interopRequireDefault(_styledComponents);

var _Div=require('../Div');var _Div2=_interopRequireDefault(_Div);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var StyledDiv=_Div2.default.extend(_templateObject,


function(props){return props.height;});var


Mask=function(_React$PureComponent){_inherits(Mask,_React$PureComponent);
function Mask(props){_classCallCheck(this,Mask);var _this=_possibleConstructorReturn(this,(Mask.__proto__||Object.getPrototypeOf(Mask)).call(this,
props));
_this.state={height:0};

_this.onResize=_this.onResize.bind(_this);return _this;
}_createClass(Mask,[{key:'componentDidMount',value:function componentDidMount()

{
window.addEventListener('resize',this.onResize,true);
this.onResize();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
window.removeEventListener('resize',this.onResize,true);
}},{key:'onResize',value:function onResize()

{
if(!this.mask){
return;
}
this.setState({
height:document.body.scrollHeight-
this.mask.getBoundingClientRect().top-
window.pageYOffset});

}},{key:'render',value:function render()

{var _this2=this;

return _react2.default.createElement(StyledDiv,{
className:this.props.className,
height:this.state.height,
innerRef:function innerRef(x){return _this2.mask=x;},__source:{fileName:_jsxFileName,lineNumber:43}});


}}]);return Mask;}(_react2.default.PureComponent);


Mask.propTypes={
className:_propTypes2.default.string};exports.default=


(0,_styledComponents2.default)(Mask)(_templateObject2);