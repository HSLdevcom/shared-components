import React from 'react';
// import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-dom/test-utils';
import { expect } from 'chai';
import Text from './Text';


describe('Text', () => {
  it('renders input element', () => {
    const component = renderIntoDocument(
      <Text />
    );
    const inputElem = scryRenderedDOMComponentsWithTag(component, 'input')[0];
    // eslint-disable-next-line no-unused-expressions
    expect(inputElem).to.exist;
  });
});
