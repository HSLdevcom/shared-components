import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@kadira/storybook-addon-knobs';

import { Flex, Activatable } from '../src/Wrapper';
import Div from '../src/Div';

const options = {
  Small: 'Small',
  Large: 'Large',
};

setAddon(JSXAddon);
const stories = storiesOf('Wrapper', module);
stories.addDecorator(withKnobs);

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
  const size = select('Size', options, 'Large');

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
        <Activatable size={size} active><span>Active</span></Activatable>
      </StyledDiv>
      <StyledDiv>
        <Activatable size={size}><span>Inactive</span></Activatable>
      </StyledDiv>
    </span>
  );
}, { displayName: 'Activatable' });
