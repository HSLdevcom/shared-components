"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var fill = _ref.fill,
        height = _ref.height;

    return _react2.default.createElement(
        "svg",
        { height: height, viewBox: "0 0 376 376", version: "1.1" },
        _react2.default.createElement(
            "g",
            { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            _react2.default.createElement(
                "g",
                { id: "Group" },
                _react2.default.createElement("circle", { fill: fill.outer, id: "Oval", cx: "188", cy: "188", r: "188" }),
                _react2.default.createElement("path", { fill: fill.inner, d: "M256.478,109.288158 L159.55,206.172368 L117.61,164.251316 C108.29,154.935526 94.31,154.935526 84.99,164.251316 L84.99,164.251316 C75.67,173.567105 75.67,187.540789 84.99,196.856579 L159.55,271.382895 L290.03,141.893421 C299.35,132.577632 299.35,118.603947 290.03,109.288158 L290.03,109.288158 C279.778,100.903947 265.798,100.903947 256.478,109.288158 Z", id: "Shape" })
            )
        )
    );
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }