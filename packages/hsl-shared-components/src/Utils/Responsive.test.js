/* global jest */
import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { ThemeProvider } from 'styled-components';
import Responsive from './Responsive';
import ResponsiveProvider from './ResponsiveProvider';
import theme from './theme/themes.hsl'; // use exported theme in future

const ProviderWrap = ({ children }) => (
  <div>
    <ThemeProvider theme={theme}>
      <ResponsiveProvider>
        {children}
      </ResponsiveProvider>
    </ThemeProvider>
  </div>
);

ProviderWrap.propTypes = {
  children: PropTypes.element
};

// const Xsmall = () => (<p>xsmall</p>);
const Small = () => (<p>small</p>);
const Medium = () => (<p>medium</p>);
const Large = () => (<p>large</p>);
// const Xlarge = () => (<p>xlarge</p>);
// const Xxlarge = () => (<p>xxlarge</p>);
function resize(width) {
  global.innerWidth = width;
  global.dispatchEvent(new Event('resize'));
  jest.runAllTimers();
}

beforeEach(() => {
  jest.useFakeTimers();
});

describe('Responsive', () => {
  it('renders element given as prop', () => {
    const component = mount(
      <ProviderWrap>
        <Responsive small={<Small />} />
      </ProviderWrap>
    );

    resize(500);

    const elem = component.find('p');
    expect(elem.text()).to.equal('small');
  });

  it('renders element given as prop when screen width is smaller than what prop expects', () => {
    const component = mount(
      <ProviderWrap>
        <Responsive small={<Small />} />
      </ProviderWrap>
    );

    resize(10);

    const elem = component.find('p');
    expect(elem.text()).to.equal('small');
  });

  it('renders element given as prop when screen width is wider than what prop expects', () => {
    const component = mount(
      <ProviderWrap>
        <Responsive small={<Small />} />
      </ProviderWrap>
    );

    resize(2000);

    const elem = component.find('p');
    expect(elem.text()).to.equal('small');
  });

  it('renders large over small when screen is wider than large threshold', () => {
    const component = mount(
      <ProviderWrap>
        <Responsive small={<Small />} large={<Large />} />
      </ProviderWrap>
    );

    resize(1500);

    const elem = component.find('p');
    expect(elem.text()).to.equal('large');
  });

  it('renders small over large when screen is smaller than large threshold', () => {
    const component = mount(
      <ProviderWrap>
        <Responsive small={<Small />} large={<Large />} />
      </ProviderWrap>
    );

    resize(1000);

    const elem = component.find('p');
    expect(elem.text()).to.equal('small');
  });

  it('renders medium when width is between large and medium', () => {
    const component = mount(
      <ProviderWrap>
        <Responsive small={<Small />} medium={<Medium />} large={<Large />} />
      </ProviderWrap>
    );

    resize(1000);

    const elem = component.find('p');
    expect(elem.text()).to.equal('medium');
  });

  it('renders medium when width less than medium threshold but (x)small is not defined', () => {
    const component = mount(
      <ProviderWrap>
        <Responsive medium={<Medium />} large={<Large />} />
      </ProviderWrap>
    );

    resize(200);

    const elem = component.find('p');
    expect(elem.text()).to.equal('medium');
  });

  it('renders medium when width is exactly medium threshold', () => {
    const component = mount(
      <ProviderWrap>
        <Responsive small={<Small />} medium={<Medium />} large={<Large />} />
      </ProviderWrap>
    );

    resize(640);

    const elem = component.find('p');
    expect(elem.text()).to.equal('medium');
  });
});
