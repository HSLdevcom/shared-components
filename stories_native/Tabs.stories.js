import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';

import { Tabs, Tab } from '../src/native';

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
        <Tab first onPress={action('tab clicked')} header="First">Content of the first tab</Tab>
        <Tab onPress={action('tab clicked')} header="Second">Content of the second tab</Tab>
        <Tab onPress={action('tab clicked')} header="Third">Content of the third tab</Tab>
        <Tab last onPress={action('tab clicked')} header="Disabled" disabled>Content of disabled tab</Tab>
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
          <Tab first onPress={action('tab clicked')} header="First">Content of the first tab</Tab>
          <Tab onPress={action('tab clicked')} header="Second">Content of the second tab</Tab>
          <Tab onPress={action('tab clicked')} header="Third">Content of the third tab</Tab>
          <Tab last onPress={action('tab clicked')} header="Disabled" disabled>Content of disabled tab</Tab>
        </Tabs>);
    })
    .add('one item', () => (
      <Tabs index={0}>
        <Tab first last onPress={action('tab clicked')} header="Active">Content of active tab</Tab>
      </Tabs>)
    );
