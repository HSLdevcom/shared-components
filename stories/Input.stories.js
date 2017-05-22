import React from 'react'
import { setAddon, storiesOf } from '@kadira/storybook'
import JSXAddon from 'storybook-addon-jsx'
import Input from '../src/Input/Input'


setAddon(JSXAddon)

storiesOf('Input', module)
  .addWithJSX('with placeholder', () => <Input placeholder="placeholder" type="text" />, { displayName: 'Input' })
