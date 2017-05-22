import React from 'react'
import { setAddon, storiesOf } from '@kadira/storybook'
import JSXAddon from 'storybook-addon-jsx'
import Button from '../src/Button/Button'
import Input from '../src/Input/Input'

setAddon(JSXAddon)

storiesOf('Button', module)
  .addWithJSX('primary', () => <Button primary>Primary Button</Button>)
  .addWithJSX('secondary', () => <Button>Secondary Button</Button>)

storiesOf('Input', module)
  .addWithJSX('with placeholder', () => <Input placeholder="placeholder" type="text" />)
