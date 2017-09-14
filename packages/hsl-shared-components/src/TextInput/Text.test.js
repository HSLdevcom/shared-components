import React from 'react';
// import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-dom/test-utils';
import { expect } from 'chai';
import Text from './Text';


describe('Text', () => {
  xit('renders input element', () => {
    /* this test needs theme working..
        enable when shared components exports theme
     */
    const component = renderIntoDocument(
      <Text />
    );
    const inputElem = scryRenderedDOMComponentsWithTag(component, 'input')[0];
    // eslint-disable-next-line no-unused-expressions
    expect(inputElem).to.exist;
  });
});
