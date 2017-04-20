'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\n'], ['\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 5%;\n'], ['\n  padding: 5%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNavList = _styledComponents2.default.div(_templateObject);

var StyledNavItem = _styledComponents2.default.div(_templateObject2);

function NavItems(props) {
  var items = props.items.map(function (item) {
    console.log(item);
    return _react2.default.createElement(
      StyledNavItem,
      { key: item.name },
      _react2.default.createElement(
        'a',
        { href: item.route },
        item.name
      )
    );
  });
  return _react2.default.createElement(
    StyledNavList,
    null,
    items
  );
}
NavItems.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = NavItems;