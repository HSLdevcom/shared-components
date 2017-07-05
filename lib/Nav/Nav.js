'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Nav/Nav.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['\n  height: ',';\n'],['\n  height: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n  ',', ',' {\n    display: none;\n  }\n  ','\n'],['\n  ',', ',' {\n    display: none;\n  }\n  ','\n']),_templateObject3=_taggedTemplateLiteral(['\n    ',', ',' {\n      display: block;\n    }\n    ',' {\n      display: none;\n    }\n    '],['\n    ',', ',' {\n      display: block;\n    }\n    ',' {\n      display: none;\n    }\n    ']),_templateObject4=_taggedTemplateLiteral([''],['']);var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _styledComponents=require('styled-components');var _styledComponents2=_interopRequireDefault(_styledComponents);
var _reactTransitionGroup=require('react-transition-group');

var _NavDesktop=require('./NavDesktop');var _NavDesktop2=_interopRequireDefault(_NavDesktop);
var _NavMobile=require('./NavMobile');var _NavMobile2=_interopRequireDefault(_NavMobile);
var _Menu=require('../Menu');
var _Div=require('../Div');var _Div2=_interopRequireDefault(_Div);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var NavMobileSpace=_Div2.default.extend(_templateObject,_NavMobile.Height);



var Header=_styledComponents2.default.header(_templateObject2,_NavMobile2.default,
NavMobileSpace,


function(props){return(
props.theme.Media&&
props.theme.Media.small(_templateObject3,_NavMobile2.default,
NavMobileSpace,_NavDesktop2.default));});var









Nav=function(_React$PureComponent){_inherits(Nav,_React$PureComponent);
function Nav(props){_classCallCheck(this,Nav);var _this=_possibleConstructorReturn(this,(Nav.__proto__||Object.getPrototypeOf(Nav)).call(this,
props));
_this.state={desktopScrollNav:false,mobileNavVisible:true};
_this.lastScrollValue=0;

_this.onScroll=_this.onScroll.bind(_this);return _this;
}_createClass(Nav,[{key:'componentDidMount',value:function componentDidMount()
{
document.addEventListener('scroll',this.onScroll,true);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
document.removeEventListener('scroll',this.onScroll,true);
}},{key:'onScroll',value:function onScroll(

evt){
this.onScrollDesktop(evt);
this.onScrollMobile(evt);

this.lastScrollValue=evt.target.body.scrollTop;
}},{key:'onScrollDesktop',value:function onScrollDesktop(

evt){


var navHeight=this.desktopNav&&
this.desktopNav.offsetHeight||0;


var boundary=this.state.desktopScrollNav?navHeight:3*navHeight;

var scrolledPastBoundary=boundary<evt.target.body.scrollTop;

var scrollingUp=evt.target.body.scrollTop<this.lastScrollValue;


if((scrolledPastBoundary&&scrollingUp)!==this.state.desktopScrollNav){
this.setState({desktopScrollNav:scrolledPastBoundary&&scrollingUp});
}
}},{key:'onScrollMobile',value:function onScrollMobile(

evt){
var scrollingUp=evt.target.body.scrollTop<this.lastScrollValue;


if(scrollingUp!==this.state.mobileScrollNav){
this.setState({mobileNavVisible:scrollingUp});
}
}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(Header,{className:this.props.className,__source:{fileName:_jsxFileName,lineNumber:85}},
_react2.default.createElement(_reactTransitionGroup.CSSTransitionGroup,{
transitionName:'scroll',
transitionEnterTimeout:350,
transitionLeaveTimeout:350,__source:{fileName:_jsxFileName,lineNumber:86}},

this.props.menu&&this.state.desktopScrollNav&&_react2.default.createElement(_NavDesktop2.default,{
scroll:true,
logo:this.props.logo,
menu:
this.props.menu&&
_react2.default.createElement(_Menu.MenuSmall,_extends({},this.props.menu.props,{__source:{fileName:_jsxFileName,lineNumber:96}}),
_react2.default.Children.map(
this.props.menu.props.children,
function(child){return _react2.default.cloneElement(child,{small:true});})),__source:{fileName:_jsxFileName,lineNumber:91}},





_react2.default.Children.map(
this.props.children,
function(child){return _react2.default.cloneElement(child,{textPosition:'Bottom',small:true});}))),






_react2.default.createElement(_NavDesktop2.default,{
navRef:function navRef(x){return _this2.desktopNav=x;},
logo:this.props.logo,
menu:this.props.menu,__source:{fileName:_jsxFileName,lineNumber:114}},

this.props.children),

_react2.default.createElement(NavMobileSpace,{__source:{fileName:_jsxFileName,lineNumber:121}}),
_react2.default.createElement(_NavMobile2.default,{
visible:this.state.mobileNavVisible,
logo:this.props.logo,
navRef:function navRef(x){return _this2.mobileNav=x;},
menu:this.props.menu&&
_react2.default.createElement(_Menu.MenuMobile,_extends({},this.props.menu.props,{__source:{fileName:_jsxFileName,lineNumber:127}}),
_react2.default.Children.map(
this.props.menu.props.children,
function(child){return _react2.default.cloneElement(child,{textPosition:'Bottom'});})),__source:{fileName:_jsxFileName,lineNumber:122}},





_react2.default.Children.map(
this.props.children,
function(child){return _react2.default.cloneElement(child,{textPosition:'Right'});}))));






}}]);return Nav;}(_react2.default.PureComponent);


Nav.propTypes={
className:_propTypes2.default.string,
logo:_propTypes2.default.element.isRequired,
menu:_propTypes2.default.element,
children:_propTypes2.default.node};exports.default=


(0,_styledComponents2.default)(Nav)(_templateObject4);