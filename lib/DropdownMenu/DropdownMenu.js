'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _jsxFileName='src/DropdownMenu/DropdownMenu.js';var _templateObject=_taggedTemplateLiteral(['\n  ',' ',' ',' svg {\n    padding-left: 0.5rem;\n    height: 0.5rem;\n    width: 0.75rem;\n    #arrow {\n      transition: transform .25s linear;\n      transform-origin: center;\n      transform: rotate(0deg);\n    }\n    ','\n  }\n  ',' {\n    display: none;\n  }\n  ',';\n'],['\n  ',' ',' ',' svg {\n    padding-left: 0.5rem;\n    height: 0.5rem;\n    width: 0.75rem;\n    #arrow {\n      transition: transform .25s linear;\n      transform-origin: center;\n      transform: rotate(0deg);\n    }\n    ','\n  }\n  ',' {\n    display: none;\n  }\n  ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n    ',' {\n      display: none;\n    }\n    ',' {\n      display: block;\n    }\n    flex-direction: column;\n    ','\n    ','\n    ',' {\n      ','\n    }\n  '],['\n    ',' {\n      display: none;\n    }\n    ',' {\n      display: block;\n    }\n    flex-direction: column;\n    ','\n    ','\n    ',' {\n      ','\n    }\n  ']),_templateObject3=_taggedTemplateLiteral([''],['']);var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _styledComponents=require('styled-components');var _styledComponents2=_interopRequireDefault(_styledComponents);

var _Button=require('../Button/Button');
var _Div=require('../Div');var _Div2=_interopRequireDefault(_Div);
var _Span=require('../Span');var _Span2=_interopRequireDefault(_Span);
var _Anchor=require('../Anchor');var _Anchor2=_interopRequireDefault(_Anchor);
var _DropdownContainerDesktop=require('./DropdownContainerDesktop');var _DropdownContainerDesktop2=_interopRequireDefault(_DropdownContainerDesktop);
var _DropdownContainerMobile=require('./DropdownContainerMobile');var _DropdownContainerMobile2=_interopRequireDefault(_DropdownContainerMobile);
var _Nav=require('../Nav');
var _Icons=require('../Icons');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var Icon=_react2.default.createElement(_Icons.More,{height:'2.5rem',width:'2.5rem',__source:{fileName:_jsxFileName,lineNumber:14}});
var Arrow=_react2.default.createElement(_Icons.ArrowDown,{height:'0.5rem',width:'0.75rem',__source:{fileName:_jsxFileName,lineNumber:15}});

var StyledDiv=_Div2.default.extend(_templateObject,_Nav.NavItem,_Button.ButtonNoStyle,_Span2.default,









function(props){return props.open&&'\n      #arrow {\n        transform: rotate(-180deg);\n      }\n    ';},_DropdownContainerMobile2.default,








function(props){return(
props.theme.Media&&
props.theme.Media.small(_templateObject2,_DropdownContainerDesktop2.default,_DropdownContainerMobile2.default,







props.open&&'background-color: '+props.theme.primaryText+';',
props.open&&'color: '+props.theme.primary+';',_Button.ButtonNoStyle,

props.open&&'border-bottom: 1px solid #cccccc;'));});var




DropdownMenu=function(_React$Component){_inherits(DropdownMenu,_React$Component);
function DropdownMenu(props){_classCallCheck(this,DropdownMenu);var _this=_possibleConstructorReturn(this,(DropdownMenu.__proto__||Object.getPrototypeOf(DropdownMenu)).call(this,
props));
_this.state={open:false,top:0};
_this.toggleDropdown=_this.toggleDropdown.bind(_this);
_this.onResize=_this.onResize.bind(_this);return _this;
}_createClass(DropdownMenu,[{key:'componentDidMount',value:function componentDidMount()

{
window.addEventListener('resize',this.onResize,true);
this.onResize();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
window.removeEventListener('resize',this.onResize,true);
}},{key:'onResize',value:function onResize()

{
if(!this.node){
return;
}
this.setState({
top:this.node.getBoundingClientRect().bottom});

}},{key:'toggleDropdown',value:function toggleDropdown()

{
this.setState(function(prevState){return{
open:!prevState.open};});

}},{key:'render',value:function render()

{var _this2=this;

return(
_react2.default.createElement(StyledDiv,{
className:this.props.className,
innerRef:function innerRef(x){return _this2.node=x;},
open:this.state.open,__source:{fileName:_jsxFileName,lineNumber:89}},


_react2.default.createElement(_Button.ButtonNoStyle,{onClick:this.toggleDropdown,__source:{fileName:_jsxFileName,lineNumber:95}},
_react2.default.createElement(_Nav.NavItem,{
link:_react2.default.createElement(_Anchor2.default,{__source:{fileName:_jsxFileName,lineNumber:97}}),
icon:Icon,
text:_react2.default.createElement(_Span2.default,{__source:{fileName:_jsxFileName,lineNumber:99}},this.props.text,Arrow),
textPosition:this.props.textPosition,
active:this.props.active,
small:this.props.small,__source:{fileName:_jsxFileName,lineNumber:96}})),


this.state.open&&
_react2.default.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:106}},
_react2.default.createElement(_DropdownContainerDesktop2.default,{top:this.state.top,__source:{fileName:_jsxFileName,lineNumber:107}},
this.props.children),

_react2.default.createElement(_DropdownContainerMobile2.default,{__source:{fileName:_jsxFileName,lineNumber:110}},
this.props.children))));





}}]);return DropdownMenu;}(_react2.default.Component);


DropdownMenu.propTypes={
text:_propTypes2.default.string.isRequired,
textPosition:_propTypes2.default.oneOf(['Right','Bottom']),
active:_propTypes2.default.bool,
small:_propTypes2.default.bool,
className:_propTypes2.default.string,
children:_propTypes2.default.node};exports.default=


(0,_styledComponents2.default)(DropdownMenu)(_templateObject3);