import { configure, addDecorator } from '@kadira/storybook'
import Theme from './../themes/themes.hsl'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const req = require.context('../stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
