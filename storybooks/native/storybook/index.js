import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
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

export default StorybookUI;
