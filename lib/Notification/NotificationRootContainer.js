'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=require('react-redux');
var _propTypes=require('prop-types');

var _actions=require('./actions');var actions=_interopRequireWildcard(_actions);
var _NotificationRoot=require('./NotificationRoot');var _NotificationRoot2=_interopRequireDefault(_NotificationRoot);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

var mapStateToProps=function mapStateToProps(state){return{notification:state.notification};};
var NotificationRootContainer=(0,_reactRedux.connect)(mapStateToProps,actions)(_NotificationRoot2.default);

NotificationRootContainer.propTypes={
timeoutDelay:_propTypes.PropTypes.number.isRequired};exports.default=


NotificationRootContainer;