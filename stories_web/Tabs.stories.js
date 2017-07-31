import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Tabs, Tab, Div } from '../src';
import { Cog } from '../src/Icons';

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
        <Tab first onPress={action('tab clicked')} header="First">Content of the first tab</Tab>
        <Tab onPress={action('tab clicked')} header="Second">Content of the second tab</Tab>
        <Tab onPress={action('tab clicked')} header="Third">Content of the third tab</Tab>
        <Tab last onPress={action('tab clicked')} header="Disabled" disabled>Content of disabled tab</Tab>
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
        <Tab first onPress={action('tab clicked')} header="First">Content of the first tab</Tab>
        <Tab onPress={action('tab clicked')} header="Second">Content of the second tab</Tab>
        <Tab onPress={action('tab clicked')} header="Third">Content of the third tab</Tab>
        <Tab last onPress={action('tab clicked')} header="Disabled" disabled>Content of disabled tab</Tab>
      </Tabs>
    </StyledDiv>);
});

stories.addWithJSX('one item', () => (
  <StyledDiv>
    <Tabs index={0}>
      <Tab first last onPress={action('tab clicked')} header="Active">Content of active tab</Tab>
    </Tabs>
  </StyledDiv>)
);

stories.addWithJSX('with icon', () => {
  const options = {
    range: true,
    min: 0,
    max: 1,
    step: 1,
  };
  const index = number('Index', 0, options);
  return (
    <StyledDiv>
      <Tabs index={index} rounded>
        <Tab
          first
          onPress={action('tab clicked')}
          header={{
            icon: <Cog height="1.5rem" width="1.5rem" />,
            text: 'First'
          }}
        >
          Content of the first tab
        </Tab>
        <Tab
          last
          onPress={action('tab clicked')}
          header={{
            icon: <Cog height="1.5rem" width="1.5rem" />,
            text: 'Second'
          }}
        >
          Content of the second tab
        </Tab>
      </Tabs>
    </StyledDiv>);
});
