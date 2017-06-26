"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var fill = _ref.fill,
      height = _ref.height,
      width = _ref.width;

  return _react2.default.createElement(
    "svg",
    { fill: fill, height: height, width: width, viewBox: "-5 0 48 10", version: "1.1", preserveAspectRatio: "xMidYMid meet" },
    _react2.default.createElement(
      "g",
      { id: "Group" },
      _react2.default.createElement("circle", { id: "Oval", cx: "5", cy: "5", r: "5" }),
      _react2.default.createElement("circle", { id: "Oval", cx: "19", cy: "5", r: "5" }),
      _react2.default.createElement("circle", { id: "Oval", cx: "33", cy: "5", r: "5" })
    )
  );
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }