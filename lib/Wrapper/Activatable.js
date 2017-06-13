'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  flex-direction: column;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  ', '\n'], ['\n  flex-direction: column;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 0;\n  height: 0;\n  border-left: 0.6rem solid transparent;\n  border-right: 0.6rem solid transparent;\n  border-bottom: 1rem solid;\n'], ['\n  width: 0;\n  height: 0;\n  border-left: 0.6rem solid transparent;\n  border-right: 0.6rem solid transparent;\n  border-bottom: 1rem solid;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n'], ['\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Div = require('../Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _Div2.default.extend(_templateObject, function (props) {
  return props.size === 'Large' && 'border-bottom: 4px solid ' + (props.active ? '' : 'transparent') + ';';
});

var Pointer = _Div2.default.extend(_templateObject2);

var Activatable = function Activatable(_ref, context) {
  var active = _ref.active,
      size = _ref.size,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    StyledDiv,
    { className: className, active: active, size: context.size || size },
    children,
    (context.size || size) === 'Small' && active && _react2.default.createElement(Pointer, null)
  );
};

Activatable.defaultProps = {
  size: 'Large'
};

Activatable.contextTypes = {
  size: _propTypes2.default.oneOf(['Small', 'Large'])
};

Activatable.propTypes = {
  active: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['Small', 'Large']),
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Activatable)(_templateObject3);