// eslint-disable-next-line import/no-extraneous-dependencies
import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ResponsiveProvider } from 'hsl-shared-components';
import Theme from './../themes/themes.hsl';

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    <ResponsiveProvider>
      {story()}
    </ResponsiveProvider>
  </ThemeProvider>
));

configure(loadStories, module);
