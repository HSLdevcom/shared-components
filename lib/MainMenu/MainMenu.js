'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import styled from 'styled-components';


// const StyledList = styled.ul`
//   display: flex;
//   flex-direction: row;
//   list-style-type: none;
//   @media(max-width: ${props => props.theme.md}) {
//     flex-direction:column;
//   }
// `;

var MainMenu = function (_React$Component) {
  _inherits(MainMenu, _React$Component);

  function MainMenu(props) {
    _classCallCheck(this, MainMenu);

    var _this = _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call(this, props));

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(MainMenu, [{
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        'couscous'
      );
    }
  }]);

  return MainMenu;
}(_react2.default.Component);

MainMenu.propTypes = {
  onItemClick: _react.PropTypes.func.isRequired,
  items: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
};
exports.default = MainMenu;