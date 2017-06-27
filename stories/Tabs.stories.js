import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@kadira/storybook-addon-knobs';

import { Tabs, Tab, Div } from '../src';

setAddon(JSXAddon);

const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

const StyledDiv = Div.extend`
    margin: 3em;
    width: 700px;
    height: 300xp;
`;

stories.addWithJSX('default', () => (
  <StyledDiv>
    <Tabs index={1}>
      <Tab header="Inactive">Content of inactive tab</Tab>
      <Tab header="Active">Content of active tab</Tab>
      <Tab header="Disabled" disabled>Content of disabled tab</Tab>
    </Tabs>
  </StyledDiv>)
);

stories.addWithJSX('rounded', () => (
  <StyledDiv>
    <Tabs index={1} rounded>
      <Tab header="Inactive">Content of inactive tab</Tab>
      <Tab header="Active">Content of active tab</Tab>
      <Tab header="Disabled" disabled>Content of disabled tab</Tab>
    </Tabs>
  </StyledDiv>)
);
