'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMapGl = require('react-map-gl');

var _hslMapStyle = require('hsl-map-style');

var _hslMapStyle2 = _interopRequireDefault(_hslMapStyle);

var _immutable = require('immutable');

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

    _this.state = {
      style: (0, _immutable.fromJS)(_hslMapStyle2.default.generateStyle({
        sourcesUrl: 'http://api.digitransit.fi/map/v1/',
        glyphsUrl: 'http://kartat.hsl.fi/',
        components: props.components
      }))
    };
    return _this;
  }

  _createClass(Map, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual2.default)(nextProps.components, this.props.components)) {
        this.setState({
          style: (0, _immutable.fromJS)(_hslMapStyle2.default.generateStyle({
            sourcesUrl: 'http://api.digitransit.fi/map/v1/',
            glyphsUrl: 'http://kartat.hsl.fi/',
            components: nextProps.components
          }))
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactMapGl.StaticMap, {
        width: this.props.width,
        height: this.props.height,
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        zoom: this.props.zoom,
        mapStyle: this.state.style
      });
    }
  }]);

  return Map;
}(_react2.default.Component);

exports.default = Map;


Map.propTypes = {
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  latitude: _propTypes2.default.number.isRequired,
  longitude: _propTypes2.default.number.isRequired,
  zoom: _propTypes2.default.number.isRequired,
  components: _propTypes2.default.objectOf(_propTypes2.default.shape({ enabled: _propTypes2.default.bool.isRequired }).isRequired)
};