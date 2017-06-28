import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setAddon, storiesOf, action } from '@kadira/storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSXAddon from 'storybook-addon-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, number } from '@kadira/storybook-addon-knobs';

import { Tabs, Tab, Div } from '../src';

setAddon(JSXAddon);

const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

const StyledDiv = Div.extend`
    margin: 3em;
    width: 700px;
`;


stories.addWithJSX('default', () => {
  const options = {
    range: true,
    min: 0,
    max: 2,
    step: 1,
  };
  const index = number('Index', 1, options);
  return (
    <StyledDiv>
      <Tabs index={index}>
        <Tab action={action('tab clicked')} header="First">Content of the first tab</Tab>
        <Tab action={action('tab clicked')} header="Second">Content of the second tab</Tab>
        <Tab action={action('tab clicked')} header="Third">Content of the third tab</Tab>
        <Tab action={action('tab clicked')} header="Disabled" disabled>Content of disabled tab</Tab>
      </Tabs>
    </StyledDiv>);
});

stories.addWithJSX('rounded', () => {
  const options = {
    range: true,
    min: 0,
    max: 2,
    step: 1,
  };
  const index = number('Index', 1, options);
  return (
    <StyledDiv>
      <Tabs index={index} rounded>
        <Tab action={action('tab clicked')} header="First">Content of the first tab</Tab>
        <Tab action={action('tab clicked')} header="Second">Content of the second tab</Tab>
        <Tab action={action('tab clicked')} header="Third">Content of the third tab</Tab>
        <Tab action={action('tab clicked')} header="Disabled" disabled>Content of disabled tab</Tab>
      </Tabs>
    </StyledDiv>);
});

stories.addWithJSX('one item', () => (
  <StyledDiv>
    <Tabs index={0}>
      <Tab action={action('tab clicked')} header="Active">Content of active tab</Tab>
    </Tabs>
  </StyledDiv>)
);
