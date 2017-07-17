import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import { Flex, Activatable, Div } from '../src';

setAddon(JSXAddon);
const stories = storiesOf('Wrapper', module);

stories.addWithJSX('Flex', () => {
  const StyledDiv = Div.extend`
    width: 15em;
    margin: 2em;
    background: lightgrey;
  `;
  return (
    <StyledDiv>
      <Flex>
        <span>Span</span>
        <button>Button</button>
        <div>Div</div>
      </Flex>
    </StyledDiv>
  );
}, { displayName: 'Flex' });

stories.addWithJSX('Activatable', () => {
  const StyledDiv = Div.extend`
    width: 4em;
    margin: 2em;
    background: lightgrey;
    display: inline-block;
    ${Activatable} {
      height: 4em;
    }
  `;

  return (
    <span>
      <StyledDiv>
        <Activatable active><span>Active</span></Activatable>
      </StyledDiv>
      <StyledDiv>
        <Activatable><span>Inactive</span></Activatable>
      </StyledDiv>
      <StyledDiv>
        <Activatable small active><span>Active</span></Activatable>
      </StyledDiv>
      <StyledDiv>
        <Activatable small><span>Inactive</span></Activatable>
      </StyledDiv>
    </span>
  );
}, { displayName: 'Activatable' });
