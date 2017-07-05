'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _has2=require('lodash/has');var _has3=_interopRequireDefault(_has2);var _delay2=require('lodash/delay');var _delay3=_interopRequireDefault(_delay2);var _isEqual2=require('lodash/isEqual');var _isEqual3=_interopRequireDefault(_isEqual2);var _isEmpty2=require('lodash/isEmpty');var _isEmpty3=_interopRequireDefault(_isEmpty2);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _jsxFileName='src/Notification/NotificationRoot.js';var _templateObject=_taggedTemplateLiteral(['\n  max-height: 0;\n  overflow: hidden;\n  color: #fff;\n  &.error {\n    background-color: #dc0451;\n  }\n  &.success {\n    background-color: #4ea700;\n  }\n  &.neutral {\n    background-color: #fff;\n    color: #333;\n    .content .message a {\n      color: navy;\n    }\n  }\n  .content {\n    max-width: 1100px;\n    margin: auto;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    .icon svg {\n      height: 2em;\n      padding: 0 1em;\n    }\n    .message {\n      padding: 1.5em 0;\n      display: flex;\n      flex-direction: column;\n      ',' {\n        margin: 0.3em 0;\n      }\n      h3 {\n        margin: 0;\n        &.link-icon svg {\n          transform: rotate(180deg);\n          padding-right: 0.5em;\n        }\n      }\n      a {\n        color: inherit;\n        &.title-link {\n          text-decoration: none;\n        }\n      }\n    }\n    .close-button {\n      margin-left: auto;\n      button {\n        background-color: transparent;\n        border: none;\n        padding: 0 1em 0 0.5em;\n        font-size: 1em;\n      }\n    }\n  }\n  '],['\n  max-height: 0;\n  overflow: hidden;\n  color: #fff;\n  &.error {\n    background-color: #dc0451;\n  }\n  &.success {\n    background-color: #4ea700;\n  }\n  &.neutral {\n    background-color: #fff;\n    color: #333;\n    .content .message a {\n      color: navy;\n    }\n  }\n  .content {\n    max-width: 1100px;\n    margin: auto;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    .icon svg {\n      height: 2em;\n      padding: 0 1em;\n    }\n    .message {\n      padding: 1.5em 0;\n      display: flex;\n      flex-direction: column;\n      ',' {\n        margin: 0.3em 0;\n      }\n      h3 {\n        margin: 0;\n        &.link-icon svg {\n          transform: rotate(180deg);\n          padding-right: 0.5em;\n        }\n      }\n      a {\n        color: inherit;\n        &.title-link {\n          text-decoration: none;\n        }\n      }\n    }\n    .close-button {\n      margin-left: auto;\n      button {\n        background-color: transparent;\n        border: none;\n        padding: 0 1em 0 0.5em;\n        font-size: 1em;\n      }\n    }\n  }\n  ']);var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');

var _Icons=require('../Icons');
var _2=require('../');
var _notification=require('./notification');
var _UltraWideContainer=require('../UltraWideContainer/UltraWideContainer');var _UltraWideContainer2=_interopRequireDefault(_UltraWideContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var renderNotificationMessage=function renderNotificationMessage(contentItem,idx){
switch(contentItem.type){
case'text':
return(
_react2.default.createElement(_2.Span,{key:idx,__source:{fileName:_jsxFileName,lineNumber:13}},contentItem.msg));

case'textLink':
return(
_react2.default.createElement('a',{href:contentItem.href,className:'text-link',key:idx,__source:{fileName:_jsxFileName,lineNumber:17}},
_react2.default.createElement(_2.Span,{__source:{fileName:_jsxFileName,lineNumber:18}},contentItem.msg)));


case'title':
return(
_react2.default.createElement('h3',{key:idx,__source:{fileName:_jsxFileName,lineNumber:23}},
_react2.default.createElement(_2.Span,{__source:{fileName:_jsxFileName,lineNumber:24}},contentItem.msg)));


case'titleLink':
return(
_react2.default.createElement('a',{href:contentItem.href,className:'title-link',key:idx,__source:{fileName:_jsxFileName,lineNumber:29}},
_react2.default.createElement('h3',{className:'link-icon',__source:{fileName:_jsxFileName,lineNumber:30}},
contentItem.msg,
_react2.default.createElement(_Icons.ArrowLeft,{fill:'#fff',height:'0.8em',__source:{fileName:_jsxFileName,lineNumber:32}}))));



default:
return null;}

};

var renderTypeIcon=function renderTypeIcon(type){
switch(type){
case'success':
return _react2.default.createElement(_Icons.Checkmark,{fill:{inner:'#4ea700',outer:'#fff'},height:'1em',__source:{fileName:_jsxFileName,lineNumber:44}});
case'error':
return _react2.default.createElement(_Icons.Alert,{fill:'#fff',height:'1em',__source:{fileName:_jsxFileName,lineNumber:46}});
case'neutral':
return _react2.default.createElement(_Icons.PositionAlert,{height:'1em',__source:{fileName:_jsxFileName,lineNumber:48}});
default:
return null;}

};

var NotificationBar=_UltraWideContainer2.default.extend(_templateObject,_2.Span);var



























































NotificationRoot=function(_Component){_inherits(NotificationRoot,_Component);
function NotificationRoot(props){_classCallCheck(this,NotificationRoot);var _this=_possibleConstructorReturn(this,(NotificationRoot.__proto__||Object.getPrototypeOf(NotificationRoot)).call(this,
props));
_this.timerId=null;
_this.cleanWithAnimation=_this.cleanWithAnimation.bind(_this);
_this.cleanWithoutAnimation=_this.cleanWithoutAnimation.bind(_this);return _this;
}_createClass(NotificationRoot,[{key:'componentDidMount',value:function componentDidMount()
{
_notification.emitter.on('open',this.props.open);
_notification.emitter.on('clean',this.cleanWithAnimation);
_notification.emitter.on('cleanNow',this.cleanWithoutAnimation);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps()
{
this.clearPreviousNotification();
}},{key:'componentDidUpdate',value:function componentDidUpdate(
prevProps){
if(
!(0,_isEmpty3.default)(this.props.notification)&&
!(0,_isEqual3.default)(this.props.notification,prevProps.notification))
{
window.scrollTo(0,0);
this.notificationBar.animate(
[
{maxHeight:'0'},
{maxHeight:this.notificationBar.scrollHeight+'px'}],
{
fill:'forwards',
easing:'cubic-bezier(0.39, 0.575, 0.565, 1)',
duration:200});


if(this.props.notification.timeout===true){
this.timerId=(0,_delay3.default)(this.cleanWithAnimation,
(0,_has3.default)(this.props.notification,'timeoutDelay')?this.props.notification.timeoutDelay:this.props.timeoutDelay);
}
}
}},{key:'componentWillUnmount',value:function componentWillUnmount()
{
_notification.emitter.removeListener('open');
_notification.emitter.removeListener('clean');
_notification.emitter.removeListener('cleanNow');
}},{key:'clearPreviousNotification',value:function clearPreviousNotification()
{
this.notificationBar.style.maxHeight=0;
if(this.timerId){
clearTimeout(this.timerId);
}
}},{key:'cleanWithoutAnimation',value:function cleanWithoutAnimation()
{
if(!(0,_isEmpty3.default)(this.props.notification)){
this.clearPreviousNotification();
this.props.clean();
}
}},{key:'cleanWithAnimation',value:function cleanWithAnimation()
{var _this2=this;
if(!(0,_isEmpty3.default)(this.props.notification)){
this.notificationBar.animate(
[
{maxHeight:this.notificationBar.clientHeight+'px'},
{maxHeight:'0'}],
{
fill:'forwards',
duration:100});


(0,_delay3.default)(function(){return _this2.props.clean();},100);
}
}},{key:'renderCloseButton',value:function renderCloseButton(

notification){
return(
_react2.default.createElement(_2.Div,{className:'close-button',__source:{fileName:_jsxFileName,lineNumber:185}},
_react2.default.createElement('button',{onClick:this.cleanWithAnimation,__source:{fileName:_jsxFileName,lineNumber:186}},
_react2.default.createElement(_Icons.Cross,{fill:notification.type==='neutral'?'#333':'#fff',height:'1.5em',__source:{fileName:_jsxFileName,lineNumber:187}}))));



}},{key:'render',value:function render()

{var _this3=this;
var notification=this.props.notification;

return(
_react2.default.createElement(NotificationBar,{
innerRef:function innerRef(ref){return _this3.notificationBar=ref;},
className:''+notification.type,__source:{fileName:_jsxFileName,lineNumber:197}},

_react2.default.createElement(_2.Div,{className:'content',__source:{fileName:_jsxFileName,lineNumber:201}},
_react2.default.createElement(_2.Div,{className:'icon',__source:{fileName:_jsxFileName,lineNumber:202}},
renderTypeIcon(notification.type)),

_react2.default.createElement(_2.Div,{className:'message',__source:{fileName:_jsxFileName,lineNumber:205}},
notification.content&&notification.content.map(function(contentItem,idx){return(
renderNotificationMessage(contentItem,idx));})),


notification.closeButton&&this.renderCloseButton(notification))));



}}]);return NotificationRoot;}(_react.Component);exports.default=NotificationRoot;


NotificationRoot.propTypes={
notification:_propTypes.PropTypes.objectOf(_propTypes.PropTypes.any).isRequired,
open:_propTypes.PropTypes.func.isRequired,
clean:_propTypes.PropTypes.func.isRequired,
timeoutDelay:_propTypes.PropTypes.number.isRequired};