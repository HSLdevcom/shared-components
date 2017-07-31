/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require, max-len */
import React from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { loadStories } from './storyLoader';
import Theme from './../themes/themes.hsl';

// import stories
configure(() => {
  loadStories();
}, module);

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
));

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('asd', () => StorybookUI);
export default StorybookUI;
