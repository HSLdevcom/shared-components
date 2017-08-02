import React, { Component } from 'react';
const ReactNativeSvg = jest.genMockFromModule('react-native-svg');

const excludedExports = ['Svg', 'default', '__esModule'];
const componentsToMock = Object.keys(ReactNativeSvg).filter(key => {
  return !excludedExports.includes(key);
});

const mocks = generateSvgMocks(componentsToMock);
// A hack to dynamically export all mocks as named exports.
// I don't think this is doable with the modern export syntax since it's dynamic.
module.exports = mocks;
export default mocks;

function generateSvgMocks(names) {
  return names.reduce((acc, name) => {
    acc[name] = generateSvgMock(name);
    return acc;
  }, generateSvgMock('Svg'));
};

function generateSvgMock(name) {
  return class SvgMock extends Component {
    static displayName = name;
    static propTypes = ReactNativeSvg[name].propType;

    render() {
      return React.createElement(name, this.props, this.props.children);
    }
  };
};
