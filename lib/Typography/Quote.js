'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 20px;\n  font-style: italic;\n  line-height: 1.25;\n  text-align: left;\n  font-weight: 300;\n  border-left: solid 3px #b7b7b7;\n  padding: 3px 0px 3px 20px;\n  display: block;\n  font-family: "Gotham XNarrow SSm A","Gotham XNarrow SSm B", Arial, Georgia, Serif;\n'], ['\n  font-size: 20px;\n  font-style: italic;\n  line-height: 1.25;\n  text-align: left;\n  font-weight: 300;\n  border-left: solid 3px #b7b7b7;\n  padding: 3px 0px 3px 20px;\n  display: block;\n  font-family: "Gotham XNarrow SSm A","Gotham XNarrow SSm B", Arial, Georgia, Serif;\n']);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Quote = _Text2.default.extend(_templateObject);

exports.default = Quote;