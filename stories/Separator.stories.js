import React from 'react'
import { setAddon, storiesOf } from '@kadira/storybook'
import JSXAddon from 'storybook-addon-jsx'
import Separator from '../src/Separator/Separator'


setAddon(JSXAddon)

storiesOf('Separator', module)
  .addWithJSX('default', () => <Separator />, { displayName: 'Separator' })
