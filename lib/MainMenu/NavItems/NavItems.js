'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nheight: 100px;\nwidth: 100px;\nbackground-color: brown;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n'], ['\nheight: 100px;\nwidth: 100px;\nbackground-color: brown;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNavItem = _styledComponents2.default.div(_templateObject);

function NavItems(props) {
  var items = props.items.map(function (item) {
    console.log(item);
    return _react2.default.createElement(
      StyledNavItem,
      null,
      _react2.default.createElement(
        'a',
        { href: item.route },
        item.name
      )
    );
  });
  return { items: items };
}
NavItems.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
};

exports.default = NavItems;