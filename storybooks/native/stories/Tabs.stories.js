import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Tabs, Tab, Text } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';

import CenterView from './CenterView';


storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <CenterView>{getStory()}</CenterView>
    </ThemeProvider>))
  .add('Default', () => {
    const options = {
      range: true,
      min: 0,
      max: 2,
      step: 1,
    };
    const index = number('Index', 1, options);
    return (
      <Tabs index={index}>
        <Tab first onPress={action('tab clicked')} header="First"><Text>Content of the first tab</Text></Tab>
        <Tab onPress={action('tab clicked')} header="Second"><Text>Content of the second tab</Text></Tab>
        <Tab onPress={action('tab clicked')} header="Third"><Text>Content of the third tab</Text></Tab>
        <Tab last onPress={action('tab clicked')} header="Disabled" disabled><Text>Content of disabled tab</Text></Tab>
      </Tabs>);
  })
    .add('rounded', () => {
      const options = {
        range: true,
        min: 0,
        max: 2,
        step: 1,
      };
      const index = number('Index', 1, options);
      return (
        <Tabs index={index} rounded>
          <Tab first onPress={action('tab clicked')} header="First"><Text>Content of the first tab</Text></Tab>
          <Tab onPress={action('tab clicked')} header="Second"><Text>Content of the second tab</Text></Tab>
          <Tab onPress={action('tab clicked')} header="Third"><Text>Content of the third tab</Text></Tab>
          <Tab last onPress={action('tab clicked')} header="Disabled" disabled><Text>Content of disabled tab</Text></Tab>
        </Tabs>);
    })
    .add('one item', () => (
      <Tabs index={0}>
        <Tab first last onPress={action('tab clicked')} header="Active"><Text>Content of active tab</Text></Tab>
      </Tabs>)
    );
