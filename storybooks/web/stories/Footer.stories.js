import React from 'react';
import { setAddon, storiesOf, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import { ThemeProvider } from 'styled-components';
import { Footer } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';


addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
));

setAddon(JSXAddon);

const stories = storiesOf('Footer', module);

stories.addWithJSX('default', () => (
  <Footer />
), { displayName: 'Footer' });
