import React from 'react';
// import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import { expect } from 'chai';
import Input from '../../src/Input/Input';


describe('Input', () => {
  it('renders input element', () => {
    const component = renderIntoDocument(
      <Input />
    );
    const inputElem = scryRenderedDOMComponentsWithTag(component, 'input')[0];
    // eslint-disable-next-line no-unused-expressions
    expect(inputElem).to.exist;
  });
});
