// eslint-disable-next-line import/no-extraneous-dependencies
import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './../themes/themes.hsl';

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    <div
      style={{
        fontFamily: Theme.fontFamily,
        fontSize: Theme.fontSize,
        fontWeight: Theme.fontWeight
      }}
    >
      {story()}
    </div>
  </ThemeProvider>
));

configure(loadStories, module);
