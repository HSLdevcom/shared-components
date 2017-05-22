import React from 'react'
import { setAddon, storiesOf } from '@kadira/storybook'
import { action } from '@kadira/storybook-addon-actions'
import JSXAddon from 'storybook-addon-jsx'
import Button from '../src/Button/Button'
import Input from '../src/Input/Input'
import PageTitleBar from '../src/PageTitleBar/PageTitleBar'
import arrow from './static/arrow_left.svg'

setAddon(JSXAddon)

storiesOf('Button', module)
  .addWithJSX('primary', () => <Button primary>Primary Button</Button>, { displayName: 'Button' })
  .addWithJSX('secondary', () => <Button>Secondary Button</Button>, { displayName: 'Button' })

storiesOf('Input', module)
  .addWithJSX('with placeholder', () => <Input placeholder="placeholder" type="text" />, { displayName: 'Input' })

storiesOf('PageTitleBar', module)
	.addWithJSX('with back button', () =>
		<PageTitleBar backButton={arrow} onBackClick={action('back button clicked')}>
      <h1>Title</h1>
    </PageTitleBar>)
	.addWithJSX('without back button', () =>
		<PageTitleBar>
      <h1>Title</h1>
    </PageTitleBar>)
