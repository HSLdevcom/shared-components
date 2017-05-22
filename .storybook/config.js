import { configure, addDecorator } from '@kadira/storybook'
import Theme from './../themes/themes.hsl'
import React from 'react'
import { ThemeProvider } from 'styled-components'

function loadStories() {
  require('../stories');
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
