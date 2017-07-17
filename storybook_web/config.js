// eslint-disable-next-line import/no-extraneous-dependencies
import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './../themes/themes.hsl';

const req = require.context('../stories_web', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);
